import { useLocation, useParams } from "solid-app-router";
import { createResource, For, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { UnitCard } from "@components/UnitCard";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../../config";
import { splitUnitsIntoGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";

export const UnitOverviewRoute = () => {
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [units] = createResource(async () => {
    const SDK = await import("@data/sdk");
    return splitUnitsIntoGroups(SDK.units.where({ civilization: civ?.abbr }).order("hitpoints", "age"));
  });

  setActivePage({ title: `Units ${civ ? ` — ${civ?.name}` : ""}`, location: useLocation() });

  return (
    <div class="max-w-screen-2xl p-4 md:p-8 mx-auto">
      <Suspense
        fallback={
          <>
            <h2 class="text-2xl font-bold text-white/20 mt-16 mb-4 pl-2">Loading...</h2>
            <div class={itemGridCSSClass}>
              <For each={Array(12)}>{() => <div class="bg-item-unit/5  h-96 rounded-2xl "></div>}</For>
            </div>
          </>
        }
      >
        <For each={units() && Object.entries(units())}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                  <For each={v}>{(unit) => <UnitCard unit={unit}></UnitCard>}</For>
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
