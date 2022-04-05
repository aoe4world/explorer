import { useParams } from "solid-app-router";
import { createEffect, createResource, createSignal, Show } from "solid-js";
import { setActivePageForItem, tryRedirectToClosestMatch } from "../../App";
import { ItemPage } from "../../components/ItemPage";
import { PatchHistory } from "../../components/PatchHistory";
import { ReportButton } from "../../components/ReportButton";
import { StatCosts } from "../../components/Stats";
import { CIVILIZATION_BY_SLUG, ITEMS, PRETTY_AGE_MAP_LONG } from "../../config";
import { getItem } from "../../query/fetch";
import { mainIntroductionCSSClass } from "../../styles";

export function TechnologyDetailRoute() {
  const itemType = ITEMS.TECHNOLOGIES;
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.slug];
  const [unmatched, setUnmatched] = createSignal(false);
  const [item] = createResource(params.id, (id) => getItem(itemType, id));

  createEffect(() => {
    if (!item()) return;
    if (civ && !item()?.civs.includes(civ.abbr)) tryRedirectToClosestMatch(itemType, params.id, civ, () => setUnmatched(true));
    setActivePageForItem(item(), civ);
  });

  return (
    <ItemPage.Wrapper civ={civ}>
      <Show when={item()}>
        {(item) => (
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <ItemPage.Header item={item} civ={civ} />
              <div class={mainIntroductionCSSClass}>{item?.description}</div>
              <div class={mainIntroductionCSSClass}>Available in the {PRETTY_AGE_MAP_LONG[item?.minAge]}</div>
              <ItemPage.ProducedAt item={item} civ={civ} title="Researched at" />

              {!civ && <ItemPage.CivPicker item={item} />}

              {/* <PatchHistory item={item} civ={civ} /> */}

              <div class="my-8">
                <ReportButton />
              </div>
            </div>
            <div class="flex-auto flex flex-col gap-8">
              <div class=" bg-black/70 rounded-2xl p-6 ">
                <StatCosts costs={item.variations?.sort((a, b) => b.civs.length - a.civs.length)[0].costs} />
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
