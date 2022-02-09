import { useLocation } from "solid-app-router";
import { createResource, For, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { BuildingCard } from "../../components/BuildingCard";
import { UnitCard } from "../../components/UnitCard";
import { ITEMS } from "../../config";
import { fetchItems } from "../../query/fetch";
import { sortUnifiedItemsByVariation, splitBuildingsIntoGroups, splitUnitsIntoGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";

export const BuildingOverviewRoute = () => {
  const [buildings] = createResource(() =>
    fetchItems(ITEMS.BUILDINGS).then((u) => splitBuildingsIntoGroups(sortUnifiedItemsByVariation(u, ["hitpoints", "age"])))
  );
  setActivePage({ title: "Buildings", location: useLocation() });

  return (
    <div class="max-w-screen-lg p-4 mx-auto">
      <Suspense
        fallback={
          <>
            <h2 class="text-2xl font-bold text-white/20 mt-16 mb-4 pl-2">Loading...</h2>
            <div class={itemGridCSSClass}>
              <For each={Array(9)}>{() => <div class="bg-item-building/5  h-96 rounded-2xl "></div>}</For>
            </div>
          </>
        }
      >
        <For each={buildings() && Object.entries(buildings())}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass}>
                  <For each={v}>{(unit) => <BuildingCard unit={unit}></BuildingCard>}</For>
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
