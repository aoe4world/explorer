import { useLocation, useParams } from "@solidjs/router";
import { createEffect, createResource, For, Suspense } from "solid-js";

import { BuildingCard } from "@components/BuildingCard";
import { setActivePage } from "../../App";
import { CIVILIZATION_BY_SLUG, CivSlug } from "../../config";
import { splitBuildingsIntoGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";
const SDK = import("@data/sdk");

export const BuildingOverviewRoute = () => {
  const params = useParams<{ slug?: CivSlug }>();
  const location = useLocation();
  const civ = () => params.slug ? CIVILIZATION_BY_SLUG[params.slug] : undefined;
  const [buildings] = createResource(
    () => [civ()?.abbr],
    async ([abbr]) => splitBuildingsIntoGroups((await SDK).buildings.where({ civilization: abbr }).order("age"))
  );

  createEffect(() => setActivePage({ title: `Buildings ${civ() ? ` — ${civ()?.name}` : ""}`, location }));

  return (
    <div class="max-w-screen-2xl mx-auto p-4 md:p-8">
      <Suspense
        fallback={
          <>
            <h2 class="text-2xl font-bold text-white/20 mt-16 mb-4 pl-2">Loading...</h2>
            <div class={itemGridCSSClass + " xl:grid-cols-4"}>
              <For each={Array(12)}>{() => <div class="bg-item-building/5  h-96 rounded-2xl " />}</For>
            </div>
          </>
        }
      >
        <For each={Object.entries(buildings() ?? {})}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                  <For each={v}>{(unit) => <BuildingCard item={unit} civ={civ()} />}</For>
                </div>
              </div>
            ) : (
              <></>
            )
          }
        </For>
      </Suspense>
    </div>
  );
};
