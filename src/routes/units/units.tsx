import { useLocation, useParams } from "@solidjs/router";
import { createEffect, createResource, For, Suspense } from "solid-js";

import { UnitCard } from "@components/UnitCard";
import { setActivePage } from "../../App";
import { CIVILIZATION_BY_SLUG, CivSlug } from "../../config";
import { splitUnitsIntoGroups } from "../../query/utils";
import { itemGridCSSClass } from "../../styles";
const SDK = import("@data/sdk");

export const UnitOverviewRoute = () => {
  const params = useParams<{ slug: CivSlug }>();
  const location = useLocation();
  const civ = () => CIVILIZATION_BY_SLUG[params.slug];
  const [units] = createResource(
    () => [civ()?.abbr],
    async ([abbr]) => splitUnitsIntoGroups((await SDK).units.where({ civilization: abbr }).order("hitpoints", "age"))
  );

  createEffect(() => setActivePage({ title: `Units ${civ() ? ` — ${civ()?.name}` : ""}`, location }));

  return (
    <div class="max-w-screen-2xl p-4 md:p-8 mx-auto">
      <Suspense
        fallback={
          <>
            <h2 class="text-2xl font-bold text-white/20 mt-16 mb-4 pl-2">Loading...</h2>
            <div class={itemGridCSSClass}>
              <For each={Array(12)}>{() => <div class="bg-item-unit/5  h-96 rounded-2xl " />}</For>
            </div>
          </>
        }
      >
        <For each={Object.entries(units() ?? {})}>
          {([k, v]) =>
            v?.length ? (
              <div>
                <h2 class="text-2xl font-bold text-white mt-16 mb-4 pl-2">{k[0].toUpperCase() + k.slice(1)}</h2>
                <div class={itemGridCSSClass + " xl:grid-cols-4"}>
                  <For each={v}>{(unit) => <UnitCard unit={unit} civ={civ()} />}</For>
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
