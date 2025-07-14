import { useParams } from "@solidjs/router";
import { createEffect, createMemo, createResource, createSignal, Show } from "solid-js";
import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { ItemPage } from "@components/ItemPage";
import { PatchHistory } from "@components/PatchHistory";
import { RelatedContent } from "@components/RelatedContent";
import { ReportButton } from "@components/ReportButton";
import { StatCosts } from "@components/Stats";
import { CIVILIZATION_BY_SLUG, ITEMS, PRETTY_AGE_MAP_LONG } from "../../config";
import { getMostAppropriateVariation } from "../../query/utils";
import { mainIntroductionCSSClass } from "../../styles";
import { Technology } from "../../types/data";

export function TechnologyDetailRoute() {
  const itemType = ITEMS.TECHNOLOGIES;
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [item] = createResource(params.id, async (id) => (await import("@data/sdk/index")).technologies.get(id));

  createEffect(() => {
    if (!item()) return;
    if (civ && !item()?.civs.includes(civ.abbr)) tryRedirectToClosestMatch(itemType, params.id, civ, () => setUnmatched(true));
    setActivePageForItem(item(), civ);
  });

  const variation = createMemo(() => getMostAppropriateVariation<Technology>(item(), civ));

  const costs = () => variation()?.costs;

  return (
    <ItemPage.Wrapper civ={civ}>
      <Show when={!unmatched() && item()} keyed>
        {(item) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={item} civ={civ} />
              <div class={mainIntroductionCSSClass}>{item?.description}</div>
              {item?.minAge > 0 ? <div class={mainIntroductionCSSClass}>Available in the {PRETTY_AGE_MAP_LONG[item?.minAge]}</div> : <></>}

              <ItemPage.ExpansionInfo civ={civ} />

              <ItemPage.ProducedAt item={item} civ={civ} title="Researched at" />

              {!civ && <ItemPage.CivPicker item={item} />}

              <PatchHistory item={item} civ={civ} />

              <RelatedContent item={item} title={`Recommended content`} />

              <div class="mt-12">
                <ReportButton />
              </div>
            </div>
            <div class="flex-auto flex flex-col gap-8">
              <div class=" bg-black/70 rounded-2xl p-6 ">
                <StatCosts costs={costs()} />
              </div>
            </div>
          </div>
        )}
      </Show>

      {unmatched() && <ItemPage.UnavailableForCiv item={item()} civ={civ} />}
      {item.error && <div class="text-red-600">Error!</div>}
    </ItemPage.Wrapper>
  );
}
