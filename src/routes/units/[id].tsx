import { useParams } from "@solidjs/router";

import { Component, createEffect, createMemo, createResource, createSignal, Show } from "solid-js";
import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { CIVILIZATION_BY_SLUG, CivSlug, ItemList } from "../../config";
import { getUnitStats } from "../../query/stats";
import { getMostAppropriateVariation } from "../../query/utils";
import { mainIntroductionCSSClass } from "../../styles";
import { Ability, civConfig, ITEMS, UnifiedItem, Unit } from "../../types/data";

import { Abilities } from "@components/Abilities";
import { ItemPage } from "@components/ItemPage";
import { PatchHistory } from "@components/PatchHistory";
import { RelatedContent } from "@components/RelatedContent";
import { ReportButton } from "@components/ReportButton";
import { StatBar, StatCosts, StatDps, StatLos, StatNumber } from "@components/Stats";

const SDK = import("@data/sdk");

export function UnitDetailRoute() {
  const itemType = ITEMS.UNITS;
  const params = useParams<{ slug: CivSlug; id: string }>();
  const civ = () => CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [age, setAge] = createSignal(4);
  const [data] = createResource(
    () => ({ id: params.id, civ: civ(), age: age() }),
    async ({ id, civ, age }) => {
      const sdk = await SDK;
      const item = await sdk.units.get(id);
      if (!item) return undefined;
      const c = civ?.abbr;
      const abilities = await sdk.abilities.where({ civilization: c, affects: item }).order("age");
      
      return {
        item,
        variation: getMostAppropriateVariation<Unit>(item, civ, age),
        abilities,
      };
    }
  );
  const item = () => data()?.item;

  createEffect(() => {
    const i = item();
    if (!i) return;
    if (civ() && !i.civs.includes(civ().abbr)) tryRedirectToClosestMatch(itemType, params.id, civ(), () => setUnmatched(true));
    setActivePageForItem(i, civ());
  });

  return (
    <ItemPage.Wrapper civ={civ()}>
      <Show when={!unmatched() && data()} keyed>
        {(data) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={data.variation} civ={civ()} />
              <div class={mainIntroductionCSSClass}>{data.variation.description}</div>

              <ItemPage.ExpansionInfo civ={civ()} />

              <Abilities abilities={data.abilities} civ={civ()} />

              <ItemPage.ProducedAt item={data.item} civ={civ()} />
              {/* {item().name && <Fandom query={item().name} />} */}
              {!civ() && <ItemPage.CivPicker item={data.item} />}

              <PatchHistory item={data.item} civ={civ()} />

              <RelatedContent item={data.item} title={`Recommended content`} />

              <div class="my-8">
                <ReportButton />
              </div>
            </div>
            <UnitSidebar item={data.item} civ={civ()} age={age} setAge={setAge} />
          </div>
        )}
      </Show>
      <Show when={!unmatched() && item()} keyed>
        {(item) => <ItemPage.AvailableUpgrades item={item} civ={civ()} />}
      </Show>
      <Show when={unmatched() && item()} keyed>
        {(item) => <ItemPage.UnavailableForCiv item={item} civ={civ()} />}
      </Show>
      {data.error && <div class="text-red-600">Error!</div>}
    </ItemPage.Wrapper>
  );
}

const UnitSidebar: Component<{ item?: UnifiedItem<Unit>; civ: civConfig; age: () => number; setAge: (age: number) => void }> = (props) => {
  const [stats] = createResource(
    () => ({ unit: props.item, civ: props.civ }),
    (x) => getUnitStats(ITEMS.UNITS, x.unit, x.civ)
  );
  const variation = createMemo(() => getMostAppropriateVariation<Unit>(props.item, props.civ, props.age()));

  const costs = () => variation()?.costs;

  return (
    <div class="flex-auto flex flex-col gap-8">
      <div class=" bg-black/70 rounded-2xl p-6 ">
        <StatCosts costs={costs()} />
      </div>
      <Show when={stats()} keyed>
        {(stats) => (
          <>
            <div class=" bg-black/70 rounded-2xl ">
              <ItemPage.AgeTabs age={props.age} setAge={props.setAge} minAge={props.item.minAge} />
              <div class="flex flex-col gap-5 p-6">
                <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={1000} item={props.item} age={props.age} />
                <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} multiplier={stats.burst} item={props.item} age={props.age} />
                <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} item={props.item} age={props.age} />
                <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} multiplier={stats.burst} item={props.item} age={props.age} />
                <StatBar
                  label={props.item.classes.includes("incendiary_ship") ? "Fire Attack" : "Torch Attack"}
                  icon="fire"
                  stat={stats.fireAttack}
                  max={50}
                  item={props.item}
                  age={props.age}
                />
                <StatBar label="Melee Armor" icon="shield-blank" stat={stats.meleeArmor} max={20} displayAlways={true} item={props.item} age={props.age} />
                <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={20} displayAlways={true} item={props.item} age={props.age} />
              </div>
            </div>
            <div class="flex gap-5 flex-wrap bg-black/70 rounded-2xl p-6 ">
              {stats.attackSpeed && (
                <div class="w-full">
                  <StatDps
                    label="Damage"
                    speed={stats.attackSpeed}
                    attacks={[stats.rangedAttack || stats.meleeAttack || stats.siegeAttack]}
                    age={props.age}
                   />
                </div>
              )}
              <StatNumber label="Move Speed" stat={stats.moveSpeed} unitLabel="T/S" age={props.age} />
              <StatNumber label="Attack Speed" stat={stats.attackSpeed} unitLabel="S" age={props.age} />
              <StatNumber label="Min Range" stat={stats.minRange} unitLabel="TILES" age={props.age} />
              <StatNumber label="Range" stat={stats.maxRange} unitLabel="TILES" age={props.age} />
              <StatLos
                label="Line of Sight"
                stat={stats.lineOfSight}
                statMax={stats.maxLineOfSight}
                age={props.age}
               />
            </div>
          </>
        )}
      </Show>
    </div>
  );
};
