import { Link, useLocation, useNavigate, useParams } from "solid-app-router";
import { Component, createEffect, createResource, createSignal, For, on, Show, useTransition } from "solid-js";
import { setActivePage } from "../../App";
import { CivFlag } from "../../components/CivFlag";
import { ReportButton } from "../../components/ReportButton";
import { StatCosts } from "../../components/Stats";
import { Tooltip } from "../../components/Tooltip";
import { UnitCard } from "../../components/UnitCard";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG, ITEMS, PRETTY_AGE_MAP_LONG, SIMILAIR_UNITS } from "../../config";
import { getCivData } from "../../data/civData";
import { getItem, getItems } from "../../query/fetch";
import { filterItems } from "../../query/utils";
import { mainIntroductionCSSClass, mainItemTitleCSSClass } from "../../styles";
import { civAbbr, Technology, UnifiedItem } from "../../types/data";

export function TechnologyDetailRoute() {
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
    (id) => getItem(ITEMS.TECHNOLOGIES, id)
  );

  const [item] = createResource(
    () => [unfilteredItem(), 4, civConfig()] as [UnifiedItem<Technology>, number, civAbbr],
    ([id, maxAge, civs]) => unfilteredItem() && filterItems([id], { maxAge, civs })[0]
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

  createEffect(async () => {
    if (params.id && civConfig() && unfilteredItem()) {
      let closestMatch: UnifiedItem<Technology>;
      if (!unfilteredItem().civs.includes(civConfig().abbr)) {
        const similair = SIMILAIR_UNITS.find((units) => units.includes(params.id));
        closestMatch = similair && (await getItems(ITEMS.TECHNOLOGIES, civConfig().abbr)).find((i) => similair.includes(i.id));
        if (closestMatch) navigate(`/civs/${params.slug}/technologies/${closestMatch.id}`);
        else setUnmatched(true);
      } else setUnmatched(false);
    } else setUnmatched(false);
  });

  const [productionBuildings] = createResource(
    () => ({ item: unfilteredItem(), civ: civConfig()?.abbr }),
    async ({ item, civ }) => {
      const producedBy = [...new Set(item.variations.flatMap((v) => v.producedBy))];
      const items = await Promise.all(producedBy.map((b) => getItem(ITEMS.BUILDINGS, b)));
      if (items.length != producedBy.length) console.warn("Some buildings were not found", producedBy, items);
      return (civ ? items.filter((i) => !!i && i.civs.includes(civ)) : items).filter(Boolean).sort((a, b) => b.civs?.length - a.civs?.length);
    }
  );

  const [units] = createResource(
    () => [params.id, CIVILIZATION_BY_SLUG[params.slug]?.abbr] as [string, civAbbr],
    async ([item, civ]) =>
      item && (await getItems(ITEMS.UNITS, civ)).filter((u) => u.variations.some((v) => (!civ || v.civs.includes(civ)) && v.producedBy.includes(item)))
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
                <div class="flex-none self-start rounded-md bg-item-technology h-24 w-24 p-2">
                  <img src={item().icon} />
                </div>
                <div>
                  <span class="text-item-technology-light">{item().displayClasses.join(", ")}</span>
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
              <div class={mainIntroductionCSSClass}>Available in the {PRETTY_AGE_MAP_LONG[item()?.minAge]}</div>

              {productionBuildings()?.length && (
                <>
                  <h2 class="text-lg text-white font-bold mb-4">Researched at</h2>
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

              {!civConfig() && (
                <>
                  <h3 class="text-lg text-white font-bold mb-4">Civilizations</h3>
                  <p class="text-sm text-white/80 mb-6 max-w-prose">
                    This unit is available for the below civilizations, viewing a unit for a civ shows you more detailed information, including civ specific
                    bonuses and upgrades
                  </p>
                  <ViewForCivs id={item()?.id} civs={item().civs} baseHref="../../" />
                </>
              )}

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
                        <Link href={`../../units/${unit.id}`} class="flex flex-row items-center mb-2 group " ref={el}>
                          <div class="flex-none  rounded bg-item-unit/80 group-hover:bg-item-unit/100 w-10 h-10 p-0.5 mr-2 transition">
                            <img src={unit.icon} />
                          </div>
                          <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{unit.name}</span>
                          <Tooltip attachTo={el}>
                            <div class="max-w-md bg-gray-800 rounded-2xl border border-item-unit">
                              <UnitCard unit={unit} civ={civConfig()} />
                            </div>
                          </Tooltip>
                        </Link>
                      );
                    }}
                  </For>
                </div>
              </Show>
            </div>
            <div class="flex-auto flex flex-col gap-8">
              <div class=" bg-black/70 rounded-2xl p-6 ">
                <StatCosts costs={item()?.variations?.sort((a, b) => b.civs.length - a.civs.length)[0].costs} />
              </div>
            </div>
          </div>
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
            href={`${props.baseHref}civs/${CIVILIZATIONS[civ].slug}/technologies/${props.id}`}
            class="flex gap-2 items-center font-bold text-base  mr-3 bg-gray-900 p-2 rounded-md hover:text-white text-gray-100 hover:bg-black"
          >
            <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
          </Link>
        )}
      </For>
    </div>
  </>
);
