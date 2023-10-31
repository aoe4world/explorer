import { useLocation, useParams } from "solid-app-router";
import { createResource, For, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { TechnologyCard } from "@components/TechnologyCard";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { splitTechnologiesIntroGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";

export const TechnologoiesOverviewRoute = () => {
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [technologies] = createResource(async () =>
    splitTechnologiesIntroGroups((await import("@data/sdk")).technologies.where({ civilization: civ?.abbr }).order("age"))
  );

  setActivePage({ title: `Technologies ${civ ? ` — ${civ?.name}` : ""}`, location: useLocation() });

  return (
    <div class="max-w-screen-2xl mx-auto p-4 md:p-8">
      <Suspense
        fallback={
          <>
            <h2 class="text-2xl font-bold text-white/20 mt-16 mb-4 pl-2">Loading...</h2>
            <div class={itemGridCSSClass + " xl:grid-cols-4"}>
              <For each={Array(12)}>{() => <div class="bg-item-building/5  h-96 rounded-2xl "></div>}</For>
            </div>
          </>
        }
      >
        <For each={technologies() && Object.entries(technologies())}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                  <For each={v}>{(unit) => <TechnologyCard item={unit} civ={civ}></TechnologyCard>}</For>
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
