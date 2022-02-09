import { Link, useLocation, useNavigate, useParams } from "solid-app-router";
import { Component, createEffect, createResource, createSignal, For, on, Show, useTransition } from "solid-js";
import { RESOURCES } from "../../../assets";
import { setActivePage } from "../../App";
import { CivFlag } from "../../components/CivFlag";
import { ReportButton } from "../../components/ReportButton";
import { StatNumber, StatBar, StatDps, StatCosts } from "../../components/Stats";
import { TechnologyCard } from "../../components/TechnologyCard";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG, ITEMS, SIMILAIR_UNITS } from "../../config";
import { getCivData } from "../../data/civData";
import { getItem, getItems } from "../../query/fetch";
import { getUnitStats } from "../../query/stats";
import { filterItems, getItemTechnologies } from "../../query/utils";
import { itemGridCSSClass, mainIntroductionCSSClass, mainItemTitleCSSClass } from "../../styles";
import { civAbbr, civConfig, UnifiedItem, Unit } from "../../types/data";

export function UnitDetailRoute() {
  const params = useParams();
  const [pending] = useTransition();
  const [unmatched, setUnmatched] = createSignal(false);
  const navigate = useNavigate();
  const civConfig = () => CIVILIZATION_BY_SLUG[params.slug];

  const [civ] = createResource(
    () => CIVILIZATION_BY_SLUG[params.slug],
    (civ) => civ && getCivData(civ.abbr)
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
    if (params.id && civConfig() && unfilteredItem()) {
      let closestMatch: UnifiedItem<Unit>;
      if (!unfilteredItem().civs.includes(civConfig().abbr)) {
        const similair = SIMILAIR_UNITS.find((units) => units.includes(params.id));
        closestMatch = similair && (await getItems(ITEMS.UNITS, civConfig().abbr)).find((i) => similair.includes(i.id));
        if (closestMatch) navigate(`/civs/${params.slug}/units/${closestMatch.id}`);
        else setUnmatched(true);
      } else setUnmatched(false);
    } else setUnmatched(false);
  });

  const [technologies] = createResource(
    () => [params.id, CIVILIZATION_BY_SLUG[params.slug]?.abbr] as [string, civConfig],
    async ([item, civ]) => item && (await getItemTechnologies(ITEMS.UNITS, item, civ, true))
    //.flatMap((x) => x.variations)
    // We're not really picking up the variations right now
  );

  const [stats] = createResource(
    () => ({ unit: unfilteredItem(), civ: civConfig()?.abbr }),
    (x) => getUnitStats(ITEMS.UNITS, x.unit, x.civ)
  );

  const [productionBuildings] = createResource(
    () => ({ item: unfilteredItem(), civ: civConfig()?.abbr }),
    async ({ item, civ }) => {
      const producedBy = [...new Set(item.variations.flatMap((v) => v.producedBy))];
      const items = await Promise.all(producedBy.map((b) => getItem(ITEMS.BUILDINGS, b)));
      if (items.length != producedBy.length) console.warn("Some buildings were not found", producedBy, items);
      return (civ ? items.filter((i) => !!i && i.civs.includes(civ)) : items).filter(Boolean).sort((a, b) => b.civs?.length - a.civs?.length);
    }
  );

  createEffect(
    on([unfilteredItem, civ], () => {
      !unfilteredItem.loading &&
        !civ.loading &&
        setActivePage({
          title: unfilteredItem()?.name + (civ()?.name ? ` — ${civ()?.name}` : ""),
          description: unfilteredItem()?.description,
          location: useLocation(),
        });
    })
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
            <div class="basis-2/3 py-4 shrink-0">
              <div class="flex gap-4 items-center mb-4">
                <div class="flex-none self-start rounded-md bg-item-unit h-24 w-24 p-2">
                  <img src={item().icon} />
                </div>
                <div>
                  <span class="text-item-unit-light">{item().displayClasses.join(", ")}</span>
                  <h2 class={mainItemTitleCSSClass}>{item()?.name}</h2>
                  {civ() && civConfig() && (
                    <Link href="../../" class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80">
                      <CivFlag abbr={civConfig().abbr} class="h-3 w-4.5 rounded-sm  " />
                      {civ()?.name}
                    </Link>
                  )}
                </div>
              </div>
              <div class={mainIntroductionCSSClass}>{item()?.description}</div>

              {productionBuildings()?.length && (
                <>
                  <h2 class="text-lg text-white font-bold mb-4">Produced at</h2>
                  <div class="flex gap-10 flex-wrap mb-8">
                    <For each={productionBuildings()}>
                      {(building) => (
                        <Link href={`../../buildings/${building.id}`} class="flex flex-row items-center mb-2 group ">
                          <div class="flex-none  rounded bg-item-building/80 group-hover:bg-item-building/100 w-10 h-10 p-0.5 mr-2 transition">
                            <img src={building.icon} />
                          </div>
                          <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{building.name}</span>
                        </Link>
                      )}
                    </For>
                  </div>
                </>
              )}

              {/* {item().name && <Fandom query={item().name} />} */}

              {!civConfig() && (
                <>
                  <h3 class="text-lg text-white font-bold mb-4">
                    {item()?.civs.length > 1
                      ? `Available for ${item().civs.length == Object.keys(CIVILIZATIONS).length ? "all" : item().civs.length} civilizations`
                      : `Exclusively available to one civialization`}
                  </h3>
                  <p class="text-sm text-white/80 mb-6 max-w-prose">
                    This unit is available for the below civilizations. Click on a civilization to see more detailed information, including specific bonuses and
                    upgrades.
                  </p>
                  <ViewForCivs id={item()?.id} civs={item().civs} baseHref="../../" />
                </>
              )}

              <div class="my-8">
                <ReportButton />
              </div>
            </div>
            <div class="flex-auto flex flex-col gap-8">
              <div class=" bg-black/70 rounded-2xl p-6 ">
                <StatCosts costs={item()?.variations[0].costs} />
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
          </div>

          <Show when={technologies()}>
            <h2 class="text-xl font-bold text-white mt-6 mb-4">Technology Upgrades</h2>
            <div class={itemGridCSSClass}>
              <For each={technologies()}>{(tech) => <TechnologyCard item={tech} civ={civConfig()}></TechnologyCard>}</For>
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
              <h2 class={mainItemTitleCSSClass}>{unfilteredItem()?.name}</h2>
              <div class="flex">
                <For each={unfilteredItem().civs}>
                  {(civ) => (
                    <Link
                      href={`../../../civs/${CIVILIZATIONS[civ].slug}/units/${unfilteredItem().id}`}
                      class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80 mr-3"
                    >
                      <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
                    </Link>
                  )}
                </For>
              </div>
            </div>
          </div>
          <p class={mainIntroductionCSSClass}>
            The {unfilteredItem().name} is an unique unit, and not available for <strong>{civ()?.name}</strong>.
          </p>

          <ViewForCivs id={unfilteredItem().id} civs={unfilteredItem().civs} baseHref="../../../../" />
        </Show>
        <Show when={unfilteredItem.error}>
          <div class="text-red-600">Error!</div>
        </Show>
      </div>
    </>
  );
}

const ViewForCivs: Component<{ id: string; civs: civAbbr[]; baseHref: string }> = (props) => (
  <>
    <div class="md:grid-cols-2 grid gap-6 mb-4 mt-2">
      <For each={props.civs}>
        {(civ) => (
          <Link
            href={`${props.baseHref}civs/${CIVILIZATIONS[civ].slug}/units/${props.id}`}
            class="flex gap-2 items-center font-bold text-base  mr-3 bg-gray-900 p-2 rounded-md hover:text-white text-gray-100 hover:bg-black"
          >
            <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
          </Link>
        )}
      </For>
    </div>
  </>
);

// const Fandom: Component<{ query: string }> = (props) => {
//   const [content] = createResource(async () => {
//     const res = await fetch(
//       `https://corsanywhere.herokuapp.com/https://ageofempires.fandom.com/wikia.php?controller=UnifiedSearchSuggestionsController&method=getSuggestions&query=${props.query}&format=json`
//     );
//     const results = await res.json();
//     console.log(results);
//     const bestMatch = Object.entries(results.ids).find(([title, id]) => title.toUpperCase().includes("IV"));
//     return bestMatch?.[0] ?? (Object.keys(results.ids)[0] as string);
//   });

//   return (
//     <a href={`https://ageofempires.fandom.com/wiki/${content()}`} target="_blank">
//       View on Fandom
//     </a>
//   );
// };
