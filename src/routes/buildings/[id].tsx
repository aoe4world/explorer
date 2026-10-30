import { A, useParams } from "@solidjs/router";
import { Component, createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";

import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { CIVILIZATION_BY_SLUG, CivSlug, getCivConfig } from "../../config";
import { currentLocale, ensureLocaleBundle, getItemDescription, getItemInfluences } from "../../global";
import { getUnitStats } from "../../query/stats";
import { getMostAppropriateVariation } from "../../query/utils";
import { mainIntroductionCSSClass } from "../../styles";
import { Building, civConfig, ITEMS, UnifiedItem } from "../../types/data";

import { Abilities } from "@components/Abilities";
import { getItemHref } from "@components/Cards";
import { ItemIcon } from "@components/ItemIcon";
import { ItemName } from "@components/ItemName";
import { ItemPage } from "@components/ItemPage";
import { PatchHistory } from "@components/PatchHistory";
import { RelatedContent } from "@components/RelatedContent";
import { ReportButton } from "@components/ReportButton";
import { ProductionCosts, StatBar, StatDps, StatLos, StatNumber } from "@components/Stats";
import { TechnologyCard } from "@components/TechnologyCard";
import { Tooltip } from "@components/Tooltip";
import { UnitCard } from "@components/UnitCard";

const SDK = import("@data/sdk");

export function BuildingDetailRoute() {
  const itemType = ITEMS.BUILDINGS;
  const params = useParams<{ slug: CivSlug; id: string }>();
  const civ = () => getCivConfig(params.slug, currentLocale()) ?? CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [age, setAge] = createSignal(4);
  const [data] = createResource(
    () => ({ id: params.id, civ: civ(), age: age(), locale: currentLocale() }),
    async ({ id, civ, age, locale }) => {
      await ensureLocaleBundle(locale);
      const sdk = await SDK;
      const rawItem = await sdk.buildings.get(id);
      if (!rawItem) return undefined;
      const c = civ?.abbr;
      const [units, research, abilities] = await Promise.all([
        sdk.units.where({ producedAt: id, civilization: c }),
        sdk.technologies.where({ producedAt: id, civilization: c }).order("age"),
        sdk.abilities.where({ civilization: c, affects: rawItem }).order("age"),
      ]);
      return {
        item: rawItem,
        variation: getMostAppropriateVariation<Building>(rawItem, civ, age),
        units,
        research,
        abilities,
      };
    }
  );

  const item = () => data()?.item;

  createEffect(() => {
    const i = item();
    if (!i) return;
    if (civ() && !i.civs.includes(civ().abbr)) {
      const c = civ();
      tryRedirectToClosestMatch(itemType, params.id, c, () => {
        if (civ()?.abbr === c.abbr) setUnmatched(true);
      });
    } else {
      setUnmatched(false);
    }
    setActivePageForItem(i, civ());
  });

  return (
    <ItemPage.Wrapper civ={civ()}>
      <Show when={!unmatched() && data()} keyed>
        {(data) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={data.variation} civ={civ()} />
              <div class={mainIntroductionCSSClass}>{getItemDescription(data.variation)}</div>

              <ItemPage.ExpansionInfo civ={civ()} />

              <Show when={getItemInfluences(data.variation).length}>
                <div class="my-4 p-4 rounded-xl bg-black/40 border border-white/10">
                  <h3 class="text-sm font-bold text-white/90 mb-2">Influence</h3>
                  <For each={getItemInfluences(data.variation)}>
                    {(inf) => <p class="text-sm text-white/80 whitespace-pre-wrap mb-2">{inf}</p>}
                  </For>
                </div>
              </Show>

              {!civ() && <ItemPage.CivPicker item={data.item} />}

              <Abilities abilities={data.abilities} civ={civ()} item={data.item} />

              <div class="my-8">
                <ReportButton />
              </div>
              <Show when={data.units?.length}>
                <h2 class="text-lg text-white font-bold  mt-12 mb-3">Produces</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-2 flex-wrap mb-2">
                  <For each={data.units}>
                    {(unit) => {
                      let el: HTMLAnchorElement | undefined; // eslint-disable-line no-unassigned-vars
                      return (
                        <A href={`${civ() ? `/civs/${civ().slug}` : ""}/units/${unit.id}`} class="flex flex-row items-center mb-2 group " ref={el}>
                          <ItemIcon item={unit} link={true} size={10} class="mr-2" />
                          <ItemName item={unit} class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100" />
                          <Tooltip attachTo={el}>
                            <div class="max-w-md bg-gray-800 rounded-2xl border border-item-unit">
                              <UnitCard unit={unit} civ={civ()} venue={params.id} />
                            </div>
                          </Tooltip>
                        </A>
                      );
                    }}
                  </For>
                </div>
              </Show>
              <Show when={data.research?.length}>
                <h2 class="text-lg text-white font-bold mt-12 mb-3">Researches</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-2 flex-wrap mb-2">
                  <For each={data.research}>
                    {(tech) => {
                      let el: HTMLAnchorElement | undefined; // eslint-disable-line no-unassigned-vars
                      return (
                        <A class="flex flex-row items-center mb-2 group " ref={el} href={getItemHref(tech, civ())}>
                          <ItemIcon item={tech} link={true} size={10} class="mr-2" />
                          <ItemName item={tech} class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100 whitespace-pre-wrap" />
                          <Tooltip attachTo={el}>
                            <div class="max-w-md bg-gray-800 rounded-2xl border border-item-technology">
                              <TechnologyCard item={tech} civ={civ()} venue={params.id} />
                            </div>
                          </Tooltip>
                        </A>
                      );
                    }}
                  </For>
                </div>
              </Show>

              <RelatedContent item={data.item} title={`Recommended content`} />

              <PatchHistory item={data.item} civ={civ()} />
            </div>
            <BuildingSidebar item={data.item} variation={data.variation} civ={civ()} age={age} setAge={setAge} />
          </div>
        )}
      </Show>
      <Show when={unmatched() && item()} keyed>
        {(item) => <ItemPage.UnavailableForCiv item={item} civ={civ()} />}
      </Show>
      <Show when={!unmatched() && item()} keyed>
        {(item) => <ItemPage.AvailableUpgrades item={item} civ={civ()} />}
      </Show>
      {data.error && <div class="text-red-600">Error!</div>}
    </ItemPage.Wrapper>
  );
}

const BuildingSidebar: Component<{ item: UnifiedItem<Building>; variation: Building; civ?: civConfig; age: () => number; setAge: (age: number) => void }> = (props) => {
  const [stats] = createResource(
    () => ({ unit: props.item, civ: props.civ }),
    (x) => getUnitStats(ITEMS.UNITS, x.unit, x.civ)
  );

  const variation = createMemo(() => props.variation ?? getMostAppropriateVariation<Building>(props.item, props.civ, props.age()));

  return (
    <div class="flex-auto flex flex-col gap-8">
      <div class=" bg-black/70 rounded-2xl p-6 ">
        <ProductionCosts item={variation()} civ={props.civ} />
        <Show when={variation().popcapIncrease} keyed>
          {(amount) => (
            <div class="mt-4">
              <div class="text-white/50 uppercase text-xs font-bold tracking-widest">Effects</div>
              <p>Increases max population by {amount}</p>
            </div>
          )}
        </Show>
        <Show when={variation().garrison} keyed>
          {(g) => (
            <div class="mt-4">
              <div class="text-white/50 uppercase text-xs font-bold tracking-widest">Garrison</div>
              <p>Can garrison up to {g.capacity} units</p>
            </div>
          )}
        </Show>
      </div>
      <Show when={stats()} keyed>
        {(stats) => (
          <>
            <div class=" bg-black/70 rounded-2xl">
              <ItemPage.AgeTabs age={props.age} setAge={props.setAge} minAge={props.item.minAge} />
              <div class="flex flex-col gap-5 p-6">
                <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={10000} item={props.item} age={props.age} />
                <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} multiplier={stats.burst} item={props.item} age={props.age} />
                <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} item={props.item} age={props.age} />
                <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} multiplier={stats.burst} item={props.item} age={props.age} />
                <StatBar label="Fire Armor" icon="block-brick-fire" stat={stats.fireArmor} max={20} displayAlways={true} item={props.item} age={props.age} />
                <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={60} displayAlways={true} item={props.item} age={props.age} />
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
