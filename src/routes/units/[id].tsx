import { Link, useParams } from "@solidjs/router";
import { Component, createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { ReportButton } from "@components/ReportButton";
import { StatNumber, StatBar, StatDps, StatCosts, StatLos } from "@components/Stats";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { getUnitStats } from "../../query/stats";
import { mainIntroductionCSSClass } from "../../styles";
import { Building, civConfig, UnifiedItem, Unit } from "../../types/data";
import { ItemPage } from "@components/ItemPage";
import { PatchHistory } from "@components/PatchHistory";
import { getMostAppropriateVariation } from "../../query/utils";
import { RelatedContent } from "@components/RelatedContent";
import { ItemList } from "@data/sdk/utils";
import { Ability } from "@data/types/items";
import { Abilities } from "@components/Abilities";
const SDK = import("@data/sdk/index");
export function UnitDetailRoute() {
  const itemType = ITEMS.UNITS;
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [item] = createResource(params.id, async (id) => (await SDK).units.get(id));
  const [abilities] = createResource(async () =>
    !civ ? ([] as ItemList<Ability>) : (await SDK).abilities.where({ civilization: civ.abbr, affects: `units/${params.id}` }).order("age")
  );

  const variation = createMemo(() => getMostAppropriateVariation<Unit>(item(), civ));

  createEffect(() => {
    if (!item()) return;
    if (civ && !item()?.civs.includes(civ.abbr)) tryRedirectToClosestMatch(itemType, params.id, civ, () => setUnmatched(true));
    setActivePageForItem(item(), civ);
  });

  return (
    <ItemPage.Wrapper civ={civ}>
      <Show when={!unmatched() && item()} keyed>
        {(item) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={item} civ={civ} />
              <div class={mainIntroductionCSSClass}>{variation()?.description}</div>

              <ItemPage.ExpansionInfo civ={civ} />

              <Abilities abilities={abilities()} civ={civ} />

              <ItemPage.ProducedAt item={item} civ={civ} />
              {/* {item().name && <Fandom query={item().name} />} */}
              {!civ && <ItemPage.CivPicker item={item} />}

              <PatchHistory item={item} civ={civ} />

              <RelatedContent item={item} title={`Recommended content`} />

              <div class="my-8">
                <ReportButton />
              </div>
            </div>
            <UnitSidebar item={item} civ={civ} />
          </div>
        )}
      </Show>
      {!unmatched() && <ItemPage.AvailableUpgrades item={item()} civ={civ} />}
      {unmatched() && <ItemPage.UnavailableForCiv item={item()} civ={civ} />}
      {item.error && <div class="text-red-600">Error!</div>}
    </ItemPage.Wrapper>
  );
}

const UnitSidebar: Component<{ item?: UnifiedItem<Unit>; civ: civConfig }> = (props) => {
  const [stats] = createResource(
    () => ({ unit: props.item, civ: props.civ }),
    (x) => getUnitStats(ITEMS.UNITS, x.unit, x.civ)
  );
  const variation = createMemo(() => getMostAppropriateVariation<Unit>(props.item, props.civ));
  const [age, setAge] = createSignal(4);

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
              <ItemPage.AgeTabs age={age} setAge={setAge} minAge={props.item.minAge} />
              <div class="flex flex-col gap-5 p-6">
                <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={1000} item={props.item} age={age} />
                <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} multiplier={stats.burst} item={props.item} age={age} />
                <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} item={props.item} age={age} />
                <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} multiplier={stats.burst} item={props.item} age={age} />
                <StatBar
                  label={props.item.classes.includes("incendiary") ? "Fire Attack" : "Torch Attack"}
                  icon="fire"
                  stat={stats.fireAttack}
                  max={50}
                  item={props.item}
                  age={age}
                />
                <StatBar label="Melee Armor" icon="shield-blank" stat={stats.meleeArmor} max={20} displayAlways={true} item={props.item} age={age} />
                <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={20} displayAlways={true} item={props.item} age={age} />
              </div>
            </div>
            <div class="flex gap-5 flex-wrap bg-black/70 rounded-2xl p-6 ">
              {stats.attackSpeed && (
                <div class="w-full">
                  <StatDps
                    label="Damage"
                    speed={stats.attackSpeed}
                    attacks={[stats.rangedAttack || stats.meleeAttack || stats.siegeAttack]}
                    age={age}
                  ></StatDps>
                </div>
              )}
              <StatNumber label="Move Speed" stat={stats.moveSpeed} unitLabel="T/S" age={age}></StatNumber>
              <StatNumber label="Attack Speed" stat={stats.attackSpeed} unitLabel="S" age={age}></StatNumber>
              <StatNumber label="Min Range" stat={stats.minRange} unitLabel="TILES" age={age}></StatNumber>
              <StatNumber label="Range" stat={stats.maxRange} unitLabel="TILES" age={age}></StatNumber>
              <StatLos
                label="Line of Sight"
                stat={stats.lineOfSight}
                statMax={stats.maxLineOfSight}
                age={age}
              ></StatLos>
            </div>
          </>
        )}
      </Show>
    </div>
  );
};
