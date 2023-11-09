import { createResource, createSignal, For, onCleanup, Suspense } from "solid-js";
import { setActivePage } from "../../App";
import { Icon } from "@components/Icon";
import { ContentRow } from "@components/RelatedContent";
import { CIVILIZATION_BY_SLUG } from "../../config";
import { ContentItem, getRelatedContent } from "../../query/content";
import { mainIntroductionCSSClass, mainItemTitleCSSClass, secondaryButtonClass } from "../../styles";
import { hideNav, setHideNav } from "../../global";
import { useParams } from "@solidjs/router";

const defaultLimit = 12;
export const ContentOverviewRoute = () => {
  const params = useParams();
  const civ = CIVILIZATION_BY_SLUG[params.civ];
  const [content] = createResource(() => ({ civilization: civ, featured: false }), getRelatedContent);
  const [limit, setLimit] = createSignal(defaultLimit);
  const [showFilter, setShowFilter] = createSignal(false);
  const [filters, setFilters] = createSignal<{ [key: string]: string[] }>({});
  setHideNav(true);
  onCleanup(() => setHideNav(false));

  const toggleFilter = (key: string, value: string) => {
    const current = filters()[key] || [];
    if (current.includes(value)) {
      setFilters({ ...filters(), [key]: current.filter((v) => v !== value) });
    } else {
      setFilters({ ...filters(), [key]: [...current, value] });
    }
  };
  const availableFilters = () => getFilterableProperties(content());
  const possibleFilters = () => getFilterableProperties(filtered());

  const filtered = () => {
    if (!content()) return undefined;
    return filterContent(content(), availableFilters(), filters());
  };

  setActivePage({ title: `Curated Content ${civ ? ` — ${civ?.name}` : ""}`, location: useLocation() });

  return (
    <div class="max-w-screen-2xl mx-auto p-4 md:p-8">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col justify-center lg:flex-row gap-8">
          <div class={`basis-1/3 grow-0 flex-col gap-8 ${showFilter() ? "flex" : "hidden lg:flex"} `}>
            <div class=" bg-gray-700 rounded-2xl p-6">
              <h3 class="mb-4 font-bold">
                <Icon icon="filter" class="mx-2" />
                Filter
              </h3>
              <div class="flex flex-col gap-4">
                <For each={possibleFilters()}>
                  {(filter) => (
                    <div class="flex flex-col gap-2 mb-3">
                      <h4 class="text-xs font-bold uppercase text-gray-300 pl-2 mb-2">{filter.label}</h4>
                      <div class="flex flex-wrap gap-y-2 gap-x-1">
                        <For each={Object.entries(filter.values)}>
                          {([value, count]) => {
                            const active = (filters()[filter.key] || []).includes(value);
                            return (
                              <button
                                class={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm transition ${
                                  active ? "bg-gray-100 text-gray-600" : "bg-gray-500 text-gray-100 "
                                }`}
                                onClick={() => toggleFilter(filter.key, value)}
                              >
                                {value}
                                {active ? <Icon icon="xmark" /> : <span class="text-gray-300 text-xs">{count}</span>}
                              </button>
                            );
                          }}
                        </For>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>
          <div class="basis-3/5 max-w-screen-lg grow-0 flex flex-col gap-4">
            <div class="my-6">
              <h3 class={mainItemTitleCSSClass}>Curated Content</h3>

              <p class={mainIntroductionCSSClass}>
                Useful guides, build orders, tips and tricks created by the AOE IV community, carefully curated by AoE4 World.
              </p>
              <p class="max-w-prose text-gray-300 mb-6">
                Are you a content creator or know of great additions to this list? Make sure to{" "}
                <a href="https://airtable.com/shraFjFgC03xmCgZj" target="_blank" class="underline font-bold">
                  submit
                </a>{" "}
                your suggestions.
              </p>
              <div class="flex flex-row gap-4">
                <button class={secondaryButtonClass + (showFilter() ? " hidden" : " lg:hidden")} onClick={() => setShowFilter(true)}>
                  <Icon icon="filter" /> Filter...
                </button>
                <a href="https://airtable.com/shraFjFgC03xmCgZj" target="_blank" class={secondaryButtonClass}>
                  <Icon icon="plus" /> Suggest content
                </a>
              </div>
            </div>
            <Suspense>
              <div class="flex flex-col gap-8">
                <For each={filtered()?.slice(0, limit())}>{(content) => <ContentRow content={content} civ={civ} />}</For>
                {filtered()?.length > limit() && (
                  <button onClick={() => setLimit(limit() * 2)} class="text-gray-300 hover:text-gray-100 font-bold bg-gray-500 p-4 roudned-lg">
                    Load more
                  </button>
                )}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContentFilter {
  key: keyof ContentItem;
  filter: (value: string[], item: ContentItem) => boolean;
  label: string;
  values: Record<string, number>;
}

function getFilterableProperties(content: ContentItem[]): ContentFilter[] {
  if (!content) return [];
  const creators = new Map<string, number>();
  const tags = new Map<string, number>();
  const types = new Map<string, number>();
  const civilizations = new Map<string, number>();

  function increaseCount(map: Map<string, number>, key: string) {
    const current = map.get(key) || 0;
    map.set(key, current + 1);
  }

  content.forEach((content) => {
    content.tags.forEach((tag) => increaseCount(tags, tag));
    content.civilizations.forEach((civ) => increaseCount(civilizations, civ));
    increaseCount(types, content.type);
    increaseCount(creators, content.creator);
  });

  function getAvailableContentCount(key: keyof ContentItem, value: string) {
    return content.filter((c) => c[key] === value).length;
  }

  // Sort all sets by count and turn them into an object
  function getValues(map: Map<string, number>) {
    return Object.fromEntries([...map.entries()].sort((a, b) => b[1] - a[1]));
  }

  return [
    {
      key: "tags",
      filter: (value, item) => value.every((v) => item.tags.includes(v)),
      label: "Tag",
      values: getValues(tags),
    },
    {
      key: "civilizations",
      filter: (value, item) => value.every((v) => item.civilizations.includes(v)),
      label: "Civilization",
      values: getValues(civilizations),
    },
    {
      key: "creator",
      filter: (value, item) => value.some((v) => item.creator === v),
      label: "Creator",
      values: getValues(creators),
    },
    {
      key: "type",
      filter: (value, item) => value.some((v) => item.type === v),
      label: "Type",
      values: getValues(types),
    },
  ];
}

function filterContent(content: ContentItem[], filters: ContentFilter[], activeFilters: { [key: string]: string[] }): ContentItem[] {
  if (!content) return [];
  return content.filter((item) => {
    return filters.every((filter) => {
      const active = activeFilters[filter.key] || [];
      return active.length === 0 || filter.filter(active, item);
    });
  });
}

export default ContentOverviewRoute;
