import { Link, useIsRouting, useLocation, useParams } from "@solidjs/router";
import { createEffect, createResource, For, on, Show, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { BuildingCard } from "@components/BuildingCard";
import { CivFlag } from "@components/CivFlag";
import { ItemIcon } from "@components/ItemIcon";
import { RelatedContent } from "@components/RelatedContent";
import { ReportButton } from "@components/ReportButton";
import { UnitCard } from "@components/UnitCard";
import { CIVILIZATION_BY_SLUG } from "../../config";
import { civBackdrops } from "../../data/civData";
import { splitBuildingsIntoGroups, splitTechnologiesIntroGroups, splitUnitsIntoGroups } from "../../query/utils";
import { itemGridCSSClass, mainIntroductionCSSClass } from "../../styles";

export const CivDetailRoute = () => {
  const pending = useIsRouting();
  const params = useParams();
  const civConfig = CIVILIZATION_BY_SLUG[params.slug];
  const [data] = createResource(async () => {
    const civ = (await import("@data/sdk")).civilizations.Get(civConfig.abbr);
    return {
      civ,
      units: splitUnitsIntoGroups(civ.units.order("hitpoints", "age")),
      buildings: splitBuildingsIntoGroups(civ.buildings.order("hitpoints", "age")),
      technologies: splitTechnologiesIntroGroups(civ.technologies.order("age")),
    };
  });

  createEffect(
    on(data, () => !data.loading && setActivePage({ title: data()?.civ.info.name, description: data()?.civ.info.description, location: useLocation() }))
  );

  return (
    <>
      <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 transition" classList={{ "opacity-70": pending() }}>
        <div class="mb-12 mt-12">
          <div class="flex gap-4 items-center mb-3">
            <div class="flex-none self-start w-24 h-16  relative">
              <div class="ring-inset ring-2 ring-black/20 w-full h-full rounded-md absolute pointer-events-none"></div>
              <CivFlag abbr={civConfig.abbr} class="w-full h-full rounded-md object-cover" />
            </div>
            <div class="ml-2">
              <span class="text-white/50 ">Civilization</span>
              <h1 class="text-3xl font-bold ">{data()?.civ.info.name}</h1>
            </div>
          </div>
          <p class={mainIntroductionCSSClass}>{data()?.civ.info.description}</p>
        </div>

        <h2 class="text-lg text-white/40 font-bold  mb-3">Jump to</h2>
        <Suspense fallback={<p>Loading</p>}>
          <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-y-2 flex-wrap mb-2">
            <For each={data() && Object.values(data().units).flat()}>
              {(unit) =>
                unit.unique && (
                  <Link href={`./units/${unit.id}`} class="flex flex-row items-center mb-2 group ">
                    <ItemIcon item={unit} link={true} size={10} class="mr-2" />
                    <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{unit.name}</span>
                  </Link>
                )
              }
            </For>
          </div>
          <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-y-2 flex-wrap mb-2">
            <For each={data() && Object.values(data().buildings).flat()}>
              {(building) =>
                building.unique && (
                  <Link href={`./buildings/${building.id}`} class="flex flex-row items-center mb-2 group ">
                    <ItemIcon item={building} link={true} size={10} class="mr-2" />
                    <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{building.name}</span>
                  </Link>
                )
              }
            </For>
          </div>
          <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-y-2 flex-wrap mb-2">
            <For each={data() && Object.values(data().technologies).flat()}>
              {(tech) =>
                tech.unique && (
                  <Link href={`./technologies/${tech.id}`} class="flex flex-row items-center mb-2 group ">
                    <ItemIcon item={tech} link={true} size={10} class="mr-2" />
                    <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{tech.name}</span>
                  </Link>
                )
              }
            </For>
          </div>
        </Suspense>
        <div class="flex gap-4 mt-14 mb-10">
          <div class="md:columns-2 gap-16 space-y-7 leading-6">
            <For each={data()?.civ.info.overview}>
              {(x) => (
                <div class="break-inside-avoid max-w-prose">
                  <h2 class="text-lg text-white/40 font-bold mt-2 mb-3 ">{x.title}</h2>
                  {x.description && <p class=" whitespace-pre-wrap">{x.description}</p>}
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
        <div class="my-12">
          <ReportButton />
        </div>
        <RelatedContent civ={civConfig} title={`Learn about ${civConfig.name}`} />
      </div>
      <div class="max-w-screen-2xl mx-auto p-4 md:p-8">
        <Show
          when={data()?.units}
          fallback={
            <>
              <h2 class="text-2xl font-bold text-white/20 mt-20 mb-4 pl-2">Loading...</h2>
              <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                <div class="bg-item-unit/5  h-36 rounded-2xl "></div>
                <div class="bg-item-unit/5  h-36 rounded-2xl "></div>
                <div class="bg-item-unit/5  h-36 rounded-2xl "></div>
              </div>
            </>
          }
        >
          <For each={Object.entries(data().units)}>
            {([k, v]) =>
              v?.length ? (
                <div>
                  <h2 class="text-2xl font-bold text-white mt-20 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                  <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                    <For each={v}>{(unit) => <UnitCard unit={unit} civ={civConfig}></UnitCard>}</For>
                  </div>
                </div>
              ) : (
                <></>
              )
            }
          </For>
        </Show>
        <Show
          when={data()?.buildings}
          fallback={
            <>
              <h2 class="text-2xl font-bold text-white/20 mt-20 mb-4 pl-2">Loading...</h2>
              <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                <div class="bg-item-building/5  h-36 rounded-2xl "></div>
                <div class="bg-item-building/5  h-36 rounded-2xl "></div>
                <div class="bg-item-building/5  h-36 rounded-2xl "></div>
              </div>
            </>
          }
        >
          <For each={Object.entries(data()?.buildings)}>
            {([k, v]) =>
              v?.length ? (
                <div>
                  <h2 class="text-2xl font-bold text-white mt-20 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                  <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                    <For each={v}>{(item) => <BuildingCard item={item} civ={civConfig}></BuildingCard>}</For>
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
        class="fixed top-10 w-screen h-screen opacity-20 saturate-0	-z-10 bg-right-top bg-cover bg-no-repeat transition-all duration-400"
        style={{ "background-image": `url(${civBackdrops[civConfig.abbr]})` }}
      >
        <div class="bg-gradient-to-r from-gray-800 to-transparent w-full h-full"></div>
      </div>
    </>
  );
};
