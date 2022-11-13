import { Link, useParams } from "solid-app-router";
import { Component, createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { getItemHref } from "../../components/Cards";
import { ItemIcon } from "../../components/ItemIcon";
import { ItemPage } from "../../components/ItemPage";
import { PatchHistory } from "../../components/PatchHistory";
import { RelatedContent } from "../../components/RelatedContent";
import { ReportButton } from "../../components/ReportButton";
import { StatNumber, StatBar, StatDps, StatCosts } from "../../components/Stats";
import { TechnologyCard } from "../../components/TechnologyCard";
import { Tooltip } from "../../components/Tooltip";
import { UnitCard } from "../../components/UnitCard";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { getUnitStats } from "../../query/stats";
import { getMostAppropriateVariation } from "../../query/utils";
import { mainIntroductionCSSClass } from "../../styles";
import { Building, civAbbr, civConfig, UnifiedItem } from "../../types/data";

const SDK = import("../../../data/src/sdk/index");

export function BuildingDetailRoute() {
  const itemType = ITEMS.BUILDINGS;
  const params = useParams();
  const civ: civConfig = CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [item] = createResource(params.id, async (id) => (await SDK).buildings.get(id));

  createEffect(() => {
    if (!item()) return;
    if (civ && !item()?.civs.includes(civ.abbr)) tryRedirectToClosestMatch(itemType, params.id, civ, () => setUnmatched(true));
    setActivePageForItem(item(), civ);
  });

  const [units] = createResource(async () => (await SDK).units.where({ producedAt: params.id, civilization: civ?.abbr }));
  const [research] = createResource(async () => (await SDK).technologies.where({ producedAt: params.id, civilization: civ?.abbr }).order("age"));

  return (
    <ItemPage.Wrapper civ={civ}>
      <Show when={!unmatched() && item()}>
        {(item) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={item} civ={civ} />
              <div class={mainIntroductionCSSClass}>{item?.description}</div>

              {!civ && <ItemPage.CivPicker item={item} />}

              <RelatedContent item={item} title={`Recommended content`} />

              <div class="my-8">
                <ReportButton />
              </div>
              <Show when={units()?.length}>
                <h2 class="text-lg text-white font-bold  mt-12 mb-3">Produces</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-2 flex-wrap mb-2">
                  <For each={units()}>
                    {(unit) => {
                      let el;
                      return (
                        <Link href={`${civ ? `/civs/${civ.slug}` : ""}/units/${unit.id}`} class="flex flex-row items-center mb-2 group " ref={el}>
                          <div class="flex-none  rounded bg-item-unit/80 group-hover:bg-item-unit/100 w-10 h-10 p-0.5 mr-2 transition">
                            <ItemIcon url={unit.icon} />
                          </div>
                          <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{unit.name}</span>
                          <Tooltip attachTo={el}>
                            <div class="max-w-md bg-gray-800 rounded-2xl border border-item-unit">
                              <UnitCard unit={unit} civ={civ} />
                            </div>
                          </Tooltip>
                        </Link>
                      );
                    }}
                  </For>
                </div>
              </Show>
              <Show when={research()?.length}>
                <h2 class="text-lg text-white font-bold mt-12 mb-3">Researches</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-2 flex-wrap mb-2">
                  <For each={research()}>
                    {(tech) => {
                      let el;
                      return (
                        <Link class="flex flex-row items-center mb-2 group " ref={el} href={getItemHref(tech, civ)}>
                          <div class="flex-none  rounded bg-item-technology/80 group-hover:bg-item-technology/100 w-10 h-10 p-0.5 mr-2 transition">
                            <ItemIcon url={tech.icon} />
                          </div>
                          <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{tech.name}</span>
                          <Tooltip attachTo={el}>
                            <div class="max-w-md bg-gray-800 rounded-2xl border border-item-technology">
                              <TechnologyCard item={tech} civ={civ} />
                            </div>
                          </Tooltip>
                        </Link>
                      );
                    }}
                  </For>
                </div>
              </Show>

              <PatchHistory item={item} civ={civ} />
            </div>
            <BuildingSidebar item={item} civ={civ} />
          </div>
        )}
      </Show>
      {unmatched() && <ItemPage.UnavailableForCiv item={item()} civ={civ} />}
      {!unmatched() && <ItemPage.AvailableUpgrades item={item()} civ={civ} />}
      {item.error && <div class="text-red-600">Error!</div>}
    </ItemPage.Wrapper>
  );
}

const BuildingSidebar: Component<{ item: UnifiedItem<Building>; civ: civConfig }> = (props) => {
  const [stats] = createResource(
    () => ({ unit: props.item, civ: props.civ }),
    (x) => getUnitStats(ITEMS.UNITS, x.unit, x.civ)
  );

  const variation = createMemo(() => getMostAppropriateVariation<Building>(props.item, props.civ));

  return (
    <div class="flex-auto flex flex-col gap-8">
      <div class=" bg-black/70 rounded-2xl p-6 ">
        <StatCosts costs={variation().costs} />
        <Show when={variation().popcapIncrease}>
          {(amount) => (
            <div class="mt-4">
              <div class="text-white/50 uppercase text-xs font-bold tracking-widest">Effects</div>
              <p>Increases max population by {amount}</p>
            </div>
          )}
        </Show>
        <Show when={variation().garrison}>
          {(g) => (
            <div class="mt-4">
              <div class="text-white/50 uppercase text-xs font-bold tracking-widest">Garrison</div>
              <p>Can garrison up to {g.capacity} units</p>
            </div>
          )}
        </Show>
      </div>
      <Show when={stats()}>
        {(stats) => (
          <>
            {" "}
            <div class="flex flex-col gap-5 bg-black/70 rounded-2xl p-6 ">
              <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={10000} item={props.item} />
              <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} multiplier={stats.burst} item={props.item} />
              <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} item={props.item} />
              <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} multiplier={stats.burst} item={props.item} />
              <StatBar label="Fire Armor" icon="block-brick-fire" stat={stats.fireArmor} max={20} displayAlways={true} item={props.item} />
              <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={60} displayAlways={true} item={props.item} />
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
