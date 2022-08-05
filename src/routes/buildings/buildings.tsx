import { useLocation, useParams } from "solid-app-router";
import { createResource, For, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { BuildingCard } from "../../components/BuildingCard";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { splitBuildingsIntoGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";

export const BuildingOverviewRoute = () => {
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [buildings] = createResource(async () =>
    splitBuildingsIntoGroups((await import("../../../data/sdk")).Data.buildings.where({ civilization: civ?.abbr }).order("age"))
  );

  setActivePage({ title: `Buildings ${civ ? ` — ${civ?.name}` : ""}`, location: useLocation() });

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
        <For each={buildings() && Object.entries(buildings())}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                  <For each={v}>{(unit) => <BuildingCard item={unit}></BuildingCard>}</For>
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
