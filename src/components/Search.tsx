import { Link, useLocation, useNavigate } from "solid-app-router";
import { Component, createEffect, createResource, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { ITEMS, SIMILAIR_ITEMS } from "../config";
import { fetchItems } from "../query/fetch";
import { UnifiedItem } from "../types/data";
import { getItemHref } from "./Cards";
import { Icon } from "./Icon";

const isMac = /mac/i.test(navigator.userAgent);

function mergeSearchableData(item: UnifiedItem) {
  const keywords = [
    item.name.toLowerCase(),
    item.displayClasses.join(" ").toLowerCase(),
    SIMILAIR_ITEMS.filter((x) => x.includes(item.id)).flatMap((x) => x.join(" ").replace("-", " ")),
  ];
  return [keywords.join(" "), keywords] as [string, string[]];
}

let allItems: [match: string, keywords: string[], item: UnifiedItem][];
async function search(q: string = "") {
  q = q.trim().toLowerCase();
  if (!q.length) return [];

  allItems ??= await Promise.all([fetchItems(ITEMS.UNITS), fetchItems(ITEMS.BUILDINGS), fetchItems(ITEMS.TECHNOLOGIES)]).then((x) =>
    x.flat().map((x) => [...mergeSearchableData(x), x] as [string, string[], UnifiedItem])
  );

  return allItems
    .filter(([m]) => m.includes(q))
    .map(([, ks, item]) => ({
      score: ks.reduce((acc, k, i) => {
        let score = 0;
        if (k.includes(q)) score += 8 - i * 5;
        else return acc;
        if (i == 0) score += Math.max(Math.max(10 - k.length, 5) - k.indexOf(q), 0);
        if (item.type == "unit") score += 5;
        return acc + score;
      }, 0),
      item,
    }))
    .sort((a, b) => b.score - a.score);
}

function scrollSelectedIntoView(wrapper: HTMLElement) {
  const selectedEl = wrapper?.querySelector<HTMLDivElement>(".selected");
  if (!selectedEl) return;

  if (selectedEl.offsetTop - wrapper.clientHeight > wrapper.scrollTop - selectedEl.clientHeight * 2)
    wrapper.scrollTo({ top: selectedEl.offsetTop, behavior: "smooth" });
  else if (selectedEl.offsetTop - selectedEl.clientHeight < wrapper.scrollTop)
    wrapper.scrollTo({
      top: selectedEl.offsetTop - wrapper.clientHeight + selectedEl.clientHeight,
      behavior: "smooth",
    });
}

export const Search: Component<{ class?: string }> = (props) => {
  const [query, setQuery] = createSignal("");
  const [results] = createResource(query, search);
  const [selected, setSelected] = createSignal(0);
  const navigate = useNavigate();
  const location = useLocation();
  const changeSelected = (delta: number) => {
    setSelected(Math.min(Math.max(selected() + delta, -1), results().length - 1));
    scrollSelectedIntoView(wrapper);
  };
  const close = () => {
    setQuery("");
    setSelected(-1);
    inputRef.value = "";
  };

  const focus = () => inputRef.focus();
  createEffect(() => location.pathname && close());
  createEffect(() => results() && setSelected(0));

  function globalKeyupListener(e: KeyboardEvent) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      focus();
      e.preventDefault();
    }
  }

  onMount(() => window.addEventListener("keydown", globalKeyupListener));
  onCleanup(() => window.removeEventListener("keydown", globalKeyupListener));

  let inputRef: HTMLInputElement;
  let wrapper: HTMLDivElement;

  return (
    <div class={`relative group ${props.class}`}>
      <Icon
        icon="search"
        class="grid place-content-center absolute inset-0 w-10 pointer-events-none text-sm text-white/50 transition group-focus-within:text-black"
      />
      <div class="hidden lg:grid place-content-center absolute top-0 bottom-0 right-0 w-20 pointer-events-none">
        <div class="bg-gray-600 group-focus-within:bg-gray-100 text-gray-200 group-focus-within:text-gray-400 px-2 py-0.5 text-xs rounded uppercase transition">
          {query() ? `↓↑  ↵` : `${isMac ? "⌘" : "ctrl"} + k`}
        </div>
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        class="h-full w-full bg-white/10 pl-9 pr-4 py-2 focus:bg-white text-sm text-white focus:text-black placeholder:text-gray-300 outline-none transition rounded-full"
        onInput={(e) => setQuery(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key == "ArrowUp") changeSelected(-1);
          if (e.key == "ArrowDown") changeSelected(1);
          if (e.key == "Escape") close();
          if (e.key == "Enter" && selected() >= 0) {
            navigate(getItemHref(results()[selected()].item));
            close();
          }
        }}
      />
      <Show when={results()?.length || query().length > 1}>
        <div
          class="absolute left-0 p-1 sm:left-auto xl:left-0 right-0 min-w-[300px] max-h-[min(400px,calc(100vh-200px))] overflow-y-auto bg-black rounded-lg border border-white/10 shadow-lg"
          ref={wrapper}
        >
          <Show when={!results().length}>
            <div class="p-3 text-gray-200 text-sm">No results</div>
          </Show>
          <For each={results()}>
            {({ score, item }, i) => (
              <Link
                href={getItemHref(item)}
                class={`flex items-center p-2 rounded hover:bg-gray-500/50 ${selected() == i() ? "!bg-gray-400/40 selected" : ""}`}
              >
                <div class="flex-none self-start rounded w-8 h-8 p-0 mr-2" className={`bg-item-${item.type}`}>
                  <img src={item.icon} />
                </div>
                <span class="font-bold text-sm">{item.name}</span>
                {/* <span class="ml-2">{score}</span> */}
              </Link>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};
