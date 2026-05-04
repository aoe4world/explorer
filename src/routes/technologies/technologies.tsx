import { useLocation, useParams } from "@solidjs/router";
import { createEffect, createResource, For, Suspense } from "solid-js";

import { TechnologyCard } from "@components/TechnologyCard";
import { setActivePage } from "../../App";
import { CIVILIZATION_BY_SLUG, CivSlug } from "../../config";
import { splitTechnologiesIntroGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";
const SDK = import("@data/sdk");

export const TechnologiesOverviewRoute = () => {
  const params = useParams<{ slug: CivSlug }>();
  const location = useLocation();
  const civ = () => CIVILIZATION_BY_SLUG[params.slug];
  const [technologies] = createResource(
    () => [civ()?.abbr],
    async ([abbr]) => splitTechnologiesIntroGroups((await SDK).technologies.where({ civilization: abbr }).order("age"))
  );

  createEffect(() => setActivePage({ title: `Technologies ${civ() ? ` — ${civ()?.name}` : ""}`, location }));

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
        <For each={Object.entries(technologies() ?? {})}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                  <For each={v}>{(unit) => <TechnologyCard item={unit} civ={civ()} />}</For>
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
