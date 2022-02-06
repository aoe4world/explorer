import { createResource, For, Suspense } from "solid-js";
import { UnitCard } from "../../components/UnitCard";
import { ITEMS } from "../../config";
import { fetchItems } from "../../query/fetch";
import { sortUnifiedUnitsByVariation, splitUnitsIntoGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";

export const UnitOverviewRoute = () => {
  const [units] = createResource(() => fetchItems(ITEMS.UNITS).then((u) => splitUnitsIntoGroups(sortUnifiedUnitsByVariation(u, ["hitpoints", "age"]))));

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
        <For each={units() && Object.entries(units())}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass}>
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
