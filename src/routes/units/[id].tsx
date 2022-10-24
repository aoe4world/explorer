import { Link, useParams } from "solid-app-router";
import { Component, createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { ReportButton } from "../../components/ReportButton";
import { StatNumber, StatBar, StatDps, StatCosts } from "../../components/Stats";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { getUnitStats } from "../../query/stats";
import { mainIntroductionCSSClass } from "../../styles";
import { Building, civConfig, UnifiedItem, Unit } from "../../types/data";
import { ItemPage } from "../../components/ItemPage";
import { PatchHistory } from "../../components/PatchHistory";
import { getMostAppropriateVariation } from "../../query/utils";
export function UnitDetailRoute() {
  const itemType = ITEMS.UNITS;
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [item] = createResource(params.id, async (id) => (await import("../../../data/src/sdk/index")).units.get(id));

  createEffect(() => {
    if (!item()) return;
    if (civ && !item()?.civs.includes(civ.abbr)) tryRedirectToClosestMatch(itemType, params.id, civ, () => setUnmatched(true));
    setActivePageForItem(item(), civ);
  });

  return (
    <ItemPage.Wrapper civ={civ}>
      <Show when={!unmatched() && item()}>
        {(item) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={item} civ={civ} />
              <div class={mainIntroductionCSSClass}>{item.description}</div>
              <ItemPage.ProducedAt item={item} civ={civ} />
              {/* {item().name && <Fandom query={item().name} />} */}
              {!civ && <ItemPage.CivPicker item={item} />}

              <PatchHistory item={item} civ={civ} />

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

  return (
    <div class="flex-auto flex flex-col gap-8">
      <div class=" bg-black/70 rounded-2xl p-6 ">
        <StatCosts costs={variation().costs} />
      </div>
      <Show when={stats()}>
        {(stats) => (
          <>
            {" "}
            <div class="flex flex-col gap-5 bg-black/70 rounded-2xl p-6 ">
              <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={1000} item={props.item} />
              <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} multiplier={stats.burst} item={props.item} />
              <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} item={props.item} />
              <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} multiplier={stats.burst} item={props.item} />
              <StatBar
                label={props.item.classes.includes("incendiary") ? "Fire Attack" : "Torch Attack"}
                icon="fire"
                stat={stats.fireAttack}
                max={50}
                item={props.item}
              />
              <StatBar label="Melee Armor" icon="shield-blank" stat={stats.meleeArmor} max={20} displayAlways={true} item={props.item} />
              <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={20} displayAlways={true} item={props.item} />
            </div>
            <div class="flex gap-5 flex-wrap bg-black/70 rounded-2xl p-6 ">
              {stats.attackSpeed && (
                <div class="w-full">
                  <StatDps label="Damage" speed={stats.attackSpeed} attacks={[stats.rangedAttack || stats.meleeAttack || stats.siegeAttack]}></StatDps>
                </div>
              )}
              <StatNumber label="Move Speed" stat={stats.moveSpeed} unitLabel="T/S"></StatNumber>
              <StatNumber label="Attack Speed" stat={stats.attackSpeed} unitLabel="S"></StatNumber>
              <StatNumber label="Min Range" stat={stats.minRange} unitLabel="TILES"></StatNumber>
              <StatNumber label="Range" stat={stats.maxRange} unitLabel="TILES"></StatNumber>
              <StatNumber
                label="Line of Sight"
                stat={stats.lineOfSight}
                unitLabel="TILES"
                helper="Maximum line of sight for a unit, only reached when on elevation"
              ></StatNumber>
            </div>
          </>
        )}
      </Show>
    </div>
  );
};
