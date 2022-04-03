import { useLocation } from "solid-app-router";
import { createResource, For, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { TechnologyCard } from "../../components/TechnologyCard";
import { ITEMS } from "../../config";
import { fetchItems } from "../../query/fetch";
import { sortUnifiedItemsByVariation, splitTechnologiesIntroGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";

export const TechnologoiesOverviewRoute = () => {
  const [technologies] = createResource(async () => splitTechnologiesIntroGroups(sortUnifiedItemsByVariation(await fetchItems(ITEMS.TECHNOLOGIES), ["age"])));
  setActivePage({ title: "Technologies", location: useLocation() });

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
                  <For each={v}>{(unit) => <TechnologyCard item={unit}></TechnologyCard>}</For>
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
