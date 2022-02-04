import { Link, useNavigate, useParams } from "solid-app-router";
import { createEffect, createResource, createSignal, For, Show, useTransition } from "solid-js";
import { CivFlag } from "../../components/CivFlag";
import { StatNumber, StatBar } from "../../components/Stats";
import { TechnologyCard } from "../../components/TechnologyCard";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG, ITEMS, SIMILAIR_UNITS } from "../../config";
import { getItem, getItems } from "../../query/fetch";
import { getUnitStats } from "../../query/stats";
import { filterItems, getItemTechnologies } from "../../query/utils";
import { mainIntroduction, mainItemTitle } from "../../styles";
import { civAbbr, civConfig, UnifiedItem, Unit } from "../../types/data";
import { CivInfo } from "../civs/[slug]";

export function UnitDetailRoute() {
  const params = useParams();
  const [pending] = useTransition();
  const [unmatched, setUnmatched] = createSignal(false);
  const navigate = useNavigate();
  const civConfig = () => CIVILIZATION_BY_SLUG[params.slug];

  const [civ] = createResource(
    () => CIVILIZATION_BY_SLUG[params.slug],
    (civ) => civ && (import(`../../data/${civ.abbr}.json`) as Promise<CivInfo>)
  );

  const [unfilteredItem] = createResource(
    () => params.id,
    (id) => getItem(ITEMS.UNITS, id)
  );

  const [item] = createResource(
    () => [unfilteredItem(), 4, civConfig()] as [UnifiedItem<Unit>, number, civAbbr],
    ([id, maxAge, civs]) => unfilteredItem() && filterItems([id], { maxAge, civs })[0]
  );

  createEffect(async () => {
    if (params.id && civConfig() && unfilteredItem() && !unfilteredItem().civs.includes(civConfig().abbr)) {
      const similair = SIMILAIR_UNITS.find((units) => units.includes(params.id));
      const closestMatch = similair && (await getItems(ITEMS.UNITS, civConfig().abbr)).find((i) => similair.includes(i.id));
      if (closestMatch) navigate(`/civs/${params.slug}/units/${closestMatch.id}`);
      else setUnmatched(true);
    }
  });

  const [technologies] = createResource(
    () => [params.id, CIVILIZATION_BY_SLUG[params.slug]?.abbr] as [string, civConfig],
    async ([item, civ]) => item && (await getItemTechnologies(item, civ, true))
    //.flatMap((x) => x.variations)
    // We're not really picking up the variations right now
  );

  const [stats] = createResource(
    () => ({ unit: unfilteredItem(), civ: civConfig()?.abbr }),
    (x) => getUnitStats(x.unit, x.civ)
  );

  return (
    <>
      <div
        class="absolute top-28 w-screen h-screen opacity-20 saturate-0	-z-10 bg-right-top bg-contain bg-no-repeat transition-[background-image] duration-400"
        style={{ "background-image": `url(${civ()?.backdrop})` }}
        classList={{ "opacity-0": pending() }}
      ></div>
      <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 mt-8">
        <Show when={item()}>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4">
              <div class="flex gap-4 items-center mb-4">
                <div class="flex-none self-start rounded-md bg-item-unit h-24 w-24 p-2">
                  <img src={item().icon} />
                </div>
                <div>
                  <span class="text-item-unit-light">{item().classes.join(", ")}</span>
                  <h2 class={mainItemTitle}>{item()?.name}</h2>
                  {civ() && civConfig() && (
                    <Link href="../../" class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80">
                      <CivFlag abbr={civConfig().abbr} class="h-3 w-4.5 rounded-sm  " />
                      {civ()?.name}
                    </Link>
                  )}
                </div>
              </div>
              {!civConfig() && (
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-sm text-white/80 mr-3">Available for</span>
                  <For each={unfilteredItem().civs}>
                    {(civ) => (
                      <Link
                        href={`../../../${CIVILIZATIONS[civ].slug}/units/${unfilteredItem().id}`}
                        class="flex gap-2 items-center font-bold text-sm text-white/80 mr-3"
                      >
                        <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
                      </Link>
                    )}
                  </For>
                </div>
              )}
              <div class={mainIntroduction}>{item()?.description}</div>
            </div>
            <Show when={stats()}>
              {(stats) => (
                <div class="flex-auto bg-black/70 rounded-2xl p-6 h-96">
                  <div class="flex flex-col gap-4">
                    <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={1000} />
                    <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} />
                    <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} />
                    <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} />
                    <StatBar label="Melee Armor" icon="shield-blank" stat={stats.meleeArmor} max={20} displayAlways={true} />
                    <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={20} displayAlways={true} />
                  </div>

                  <div class="flex gap-3 mt-5">
                    <StatNumber label="Move Spd" stat={stats.moveSpeed}></StatNumber>
                    <StatNumber label="Atck Spd" stat={stats.attackSpeed}></StatNumber>
                  </div>
                </div>
              )}
            </Show>
          </div>

          <Show when={technologies()}>
            <h2 class="text-xl font-bold text-white mt-6 mb-4">Technologies</h2>
            <div class="grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-7">
              <For each={technologies()}>{(tech) => <TechnologyCard item={tech}></TechnologyCard>}</For>
            </div>
          </Show>
        </Show>
        <Show when={unmatched()}>
          <div class="flex gap-4 items-center mb-4 mt-4">
            <div class="flex-none self-start rounded-md bg-item-unit h-24 w-24 p-2">
              <img src={unfilteredItem().icon} />
            </div>
            <div>
              <span class="text-item-unit-light">{unfilteredItem().classes.join(", ")}</span>
              <h2 class={mainItemTitle}>{unfilteredItem()?.name}</h2>
              <div class="flex">
                <For each={unfilteredItem().civs}>
                  {(civ) => (
                    <Link
                      href={`../../../${CIVILIZATIONS[civ].slug}/units/${unfilteredItem().id}`}
                      class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80 mr-3"
                    >
                      <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
                    </Link>
                  )}
                </For>
              </div>
            </div>
          </div>
          <p class={mainIntroduction}>
            The {unfilteredItem().name} is an unique unit, and not available for <strong>{civ()?.name}</strong>.
          </p>
        </Show>
        <Show when={unfilteredItem.error}>
          <div class="text-red-600">Error!</div>
        </Show>
      </div>
    </>
  );
}
