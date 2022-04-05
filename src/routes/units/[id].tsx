import { Link, useParams } from "solid-app-router";
import { Component, createEffect, createResource, createSignal, For, Show } from "solid-js";
import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { ReportButton } from "../../components/ReportButton";
import { StatNumber, StatBar, StatDps, StatCosts } from "../../components/Stats";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { getItem, getPatchHistory } from "../../query/fetch";
import { getUnitStats } from "../../query/stats";
import { mainIntroductionCSSClass } from "../../styles";
import { civConfig, UnifiedItem, Unit } from "../../types/data";
import { ItemPage } from "../../components/ItemPage";
import { PatchHistory } from "../../components/PatchHistory";
export function UnitDetailRoute() {
  const itemType = ITEMS.UNITS;
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [item] = createResource(params.id, (id) => getItem(itemType, id));

  createEffect(() => {
    if (!item()) return;
    if (civ && !item()?.civs.includes(civ.abbr)) tryRedirectToClosestMatch(itemType, params.id, civ, () => setUnmatched(true));
    setActivePageForItem(item(), civ);
  });

  return (
    <ItemPage.Wrapper civ={civ}>
      <Show when={item()}>
        {(item) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={item} civ={civ} />
              <div class={mainIntroductionCSSClass}>{item.description}</div>
              <ItemPage.ProducedAt item={item} civ={civ} />
              {/* {item().name && <Fandom query={item().name} />} */}
              {!civ && <ItemPage.CivPicker item={item} />}

              {/* <PatchHistory item={item} civ={civ} /> */}

              <div class="my-8">
                <ReportButton />
              </div>
            </div>
            <UnitSidebar item={item} civ={civ} />
          </div>
        )}
      </Show>
      <ItemPage.AvailableUpgrades item={item()} civ={civ} />
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

  return (
    <div class="flex-auto flex flex-col gap-8">
      <div class=" bg-black/70 rounded-2xl p-6 ">
        <StatCosts costs={props.item.variations[0].costs} />
      </div>
      <Show when={stats()}>
        {(stats) => (
          <>
            {" "}
            <div class="flex flex-col gap-5 bg-black/70 rounded-2xl p-6 ">
              <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={1000} />
              <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} />
              <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} />
              <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} />
              <StatBar label={props.item.classes.includes("incendiary") ? "Fire Attack" : "Torch Attack"} icon="fire" stat={stats.fireAttack} max={50} />
              <StatBar label="Melee Armor" icon="shield-blank" stat={stats.meleeArmor} max={20} displayAlways={true} />
              <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={20} displayAlways={true} />
            </div>
            <div class="flex gap-5 flex-wrap bg-black/70 rounded-2xl p-6 ">
              {stats.attackSpeed && (
                <div class="w-full">
                  <StatDps label="Damage" speed={stats.attackSpeed} attacks={[stats.rangedAttack, stats.meleeAttack, stats.siegeAttack]}></StatDps>
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
