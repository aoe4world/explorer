import { Link, useIsRouting, useParams } from "solid-app-router";
import { createMemo, createResource, For, Show, Suspense } from "solid-js";
import { CivFlag } from "../../components/CivFlag";
import { UnitCard } from "../../components/UnitCard";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { getItems } from "../../query/fetch";
import { sortUnifiedUnitsByVariation, splitUnitsIntoGroups } from "../../query/utils";
import { itemGridCSSClass, mainIntroductionCSSClass } from "../../styles";
import { GroupedUnits, UnifiedItem, Unit } from "../../types/data";

export type CivInfo = {
  name: string;
  classes: string;
  description: string;
  backdrop?: string;
  overview: { title: string; description?: string; list?: string[] }[];
};

export const CivDetailRoute = () => {
  const pending = useIsRouting();
  const params = useParams();
  const civConfig = () => CIVILIZATION_BY_SLUG[params.slug];
  const [civ] = createResource(
    () => CIVILIZATION_BY_SLUG[params.slug],
    (civ) => import(`../../data/${civ.abbr}.json`) as Promise<CivInfo>
  );

  const [units] = createResource(
    () => CIVILIZATION_BY_SLUG[params.slug],
    (civ) => getItems(ITEMS.UNITS, civ.abbr)
  );

  const grouped = createMemo(() => units() && splitUnitsIntoGroups(sortUnifiedUnitsByVariation(units(), ["hitpoints", "age"])));

  return (
    <>
      <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 transition" classList={{ "opacity-70": pending() }}>
        <div class="mb-12 mt-12">
          <div class="flex gap-4 items-center mb-3">
            <div class="flex-none self-start w-24 h-16  relative">
              <div class="ring-inset ring-2 ring-black/20 w-full h-full rounded-md absolute pointer-events-none"></div>
              <CivFlag abbr={civConfig().abbr} class="w-full h-full rounded-md " />
            </div>
            <div class="ml-2">
              <span class="text-white/50 ">Civilization</span>
              <h1 class="text-3xl font-bold ">{civ()?.name}</h1>
            </div>
          </div>
          <p class={mainIntroductionCSSClass}>{civ()?.description}</p>
        </div>

        <h2 class="text-lg text-white/40 font-bold  mb-3">Jump to</h2>
        <Suspense fallback={<p>Loading</p>}>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2 flex-wrap mb-2">
            <For each={grouped() && Object.entries(grouped())}>
              {([k, v]) => (
                <For each={v}>
                  {(unit) => (
                    <Link href={`./units/${unit.id}`} class="flex flex-row items-center mb-2 group ">
                      <div class="flex-none  rounded bg-item-unit/80 group-hover:bg-item-unit/100 w-10 h-10 p-0.5 mr-2 transition">
                        <img src={unit.icon} />
                      </div>
                      <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{unit.name}</span>
                    </Link>
                  )}
                </For>
              )}
            </For>
          </div>
        </Suspense>
        <div class="flex gap-4 mt-14 mb-10">
          <div class="md:columns-2 gap-16 space-y-7 leading-6">
            <For each={civ()?.overview}>
              {(x) => (
                <div class="break-inside-avoid max-w-prose">
                  <h2 class="text-lg text-white/40 font-bold mt-2 mb-3 ">{x.title}</h2>
                  {x.description && <p>{x.description}</p>}
                  {x.list && (
                    <ul class="list-disc list-inside marker:text-white/30 space-y-2">
                      <For each={x.list}>{(y) => <li class="-indent-5 pl-5">{y}</li>}</For>
                    </ul>
                  )}
                </div>
              )}
            </For>
          </div>
        </div>

        <Show
          when={grouped()}
          fallback={
            <>
              <h2 class="text-2xl font-bold text-white/20 mt-20 mb-4 pl-2">Loading...</h2>
              <div class={itemGridCSSClass}>
                <div class="bg-item-unit/5  h-36 rounded-2xl "></div>
                <div class="bg-item-unit/5  h-36 rounded-2xl "></div>
                <div class="bg-item-unit/5  h-36 rounded-2xl "></div>
              </div>
            </>
          }
        >
          <For each={Object.entries(grouped())}>
            {([k, v]) =>
              v?.length ? (
                <div>
                  <h2 class="text-2xl font-bold text-white mt-20 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                  <div class={itemGridCSSClass}>
                    <For each={v}>{(unit) => <UnitCard unit={unit} civ={civConfig()} baseHref="."></UnitCard>}</For>
                  </div>
                </div>
              ) : (
                <></>
              )
            }
          </For>
        </Show>
      </div>
      <div
        class="absolute top-28 w-screen h-screen opacity-20 saturate-0	-z-10 bg-right-top bg-contain bg-no-repeat transition-all duration-400"
        style={{ "background-image": `url(${civ()?.backdrop})` }}
      ></div>
    </>
  );
};
