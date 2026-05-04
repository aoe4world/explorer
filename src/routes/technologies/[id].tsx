import { useParams } from "@solidjs/router";
import { createEffect, createMemo, createResource, createSignal, Show } from "solid-js";

import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { CIVILIZATION_BY_SLUG, CivSlug, PRETTY_AGE_MAP_LONG } from "../../config";
import { getMostAppropriateVariation } from "../../query/utils";
import { mainIntroductionCSSClass } from "../../styles";
import { ITEMS, Technology } from "../../types/data";

import { ItemPage } from "@components/ItemPage";
import { PatchHistory } from "@components/PatchHistory";
import { RelatedContent } from "@components/RelatedContent";
import { ReportButton } from "@components/ReportButton";
import { StatCosts } from "@components/Stats";

const SDK = import("@data/sdk");

export function TechnologyDetailRoute() {
  const itemType = ITEMS.TECHNOLOGIES;
  const params = useParams<{ slug: CivSlug; id: string }>();
  const civ = () => CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [age, setAge] = createSignal(1);

  const [data] = createResource(
    () => ({ id: params.id, civ: civ(), age: age() }),
    async ({ id, civ, age }) => {
      const sdk = await SDK;
      const item = await sdk.technologies.get(id);
      if (!item) return undefined;
      return {
        item,
        variation: getMostAppropriateVariation<Technology>(item, civ, age),
      };
    }
  );
  const item = () => data()?.item;

  createEffect(() => {
    const i = item();
    if (!i) return;
    if (civ() && !i.civs.includes(civ().abbr)) tryRedirectToClosestMatch(itemType, params.id, civ(), () => setUnmatched(true));
    setActivePageForItem(i, civ());
  });

  createEffect(() => {
    const minAge = item()?.minAge;
    if (!!minAge && age() < minAge) {
      setAge(minAge);
    }
  });

  return (
    <ItemPage.Wrapper civ={civ()}>
      <Show when={!unmatched() && data()} keyed>
        {(data) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={data.variation} civ={civ()} />
              <div class={mainIntroductionCSSClass}>{data.variation.description}</div>
              {data.variation.age > 0 ? <div class={mainIntroductionCSSClass}>Available in the {PRETTY_AGE_MAP_LONG[data.variation.age]}</div> : <></>}

              <ItemPage.ExpansionInfo civ={civ()} />

              <ItemPage.ProducedAt item={data.item} civ={civ()} title="Researched at" />

              {!civ() && <ItemPage.CivPicker item={data.item} />}

              <PatchHistory item={data.item} civ={civ()} />

              <RelatedContent item={data.item} title={`Recommended content`} />

              <div class="mt-12">
                <ReportButton />
              </div>
            </div>
            <div class="flex-auto flex flex-col gap-8">
              <div class="bg-black/70 rounded-2xl">
                <ItemPage.AgeTabs age={age} setAge={setAge} minAge={data.item.minAge} />
                <div class="p-6">
                  <StatCosts costs={data.variation.costs} />
                </div>
              </div>
            </div>
          </div>
        )}
      </Show>
      <Show when={unmatched() && item()} keyed>
        {(item) => <ItemPage.UnavailableForCiv item={item} civ={civ()} />}
      </Show>
      {data.error && <div class="text-red-600">Error!</div>}
    </ItemPage.Wrapper>
  );
}
