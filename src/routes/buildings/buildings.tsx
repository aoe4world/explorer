import { useLocation } from "solid-app-router";
import { createResource, For, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { BuildingCard } from "../../components/BuildingCard";
import { UnitCard } from "../../components/UnitCard";
import { ITEMS } from "../../config";
import { fetchItems } from "../../query/fetch";
import { sortUnifiedItemsByVariation, splitUnitsIntoGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";

export const BuildingOverviewRoute = () => {
  const [buildings] = createResource(() => fetchItems(ITEMS.BUILDINGS).then((u) => sortUnifiedItemsByVariation(u, ["hitpoints", "age"])));
  setActivePage({ title: "Buildings", location: useLocation() });

  return (
    <div class="max-w-screen-lg p-4 mx-auto">
      <Suspense
        fallback={
          <>
            <h2 class="text-2xl font-bold text-white/20 mt-16 mb-4 pl-2">Loading...</h2>
            <div class={itemGridCSSClass}>
              <For each={Array(9)}>{() => <div class="bg-item-unit/5  h-96 rounded-2xl "></div>}</For>
            </div>
          </>
        }
      >
        <div>
          <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">Buildings</h2>
          <div class={itemGridCSSClass}>
            <For each={buildings()}>{(unit) => <BuildingCard unit={unit}></BuildingCard>}</For>
          </div>
        </div>
      </Suspense>
    </div>
  );
};
