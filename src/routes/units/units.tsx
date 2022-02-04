import { createResource, For, Suspense } from "solid-js";
import { UnitCard } from "../../components/UnitCard";
import { ITEMS } from "../../config";
import { fetchItems } from "../../query/fetch";
import { sortUnifiedUnitsByVariation } from "../../query/utils";

export const UnitOverviewRoute = () => {
  const [units] = createResource(() => fetchItems(ITEMS.UNITS));

  return (
    <div class="max-w-screen-lg p-4 mx-auto">
      <Suspense fallback={<div class="text-gray-300">Loading...</div>}>
        <div class="grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-7">
          <For each={units() && sortUnifiedUnitsByVariation(units(), ["age", "hitpoints"])}>{(unit) => <UnitCard unit={unit}></UnitCard>}</For>
        </div>
      </Suspense>
    </div>
  );
};
