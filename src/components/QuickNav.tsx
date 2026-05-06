import { computePosition } from "@floating-ui/dom";
import { A, useLocation } from "@solidjs/router";
import { Component, For, createEffect, createMemo, createResource, createSignal, onCleanup, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { CIVILIZATIONS, CivConfig, getCivConfig, ItemSlug } from "../config";
import { getStructuredItems, parseCurrentLocation, ItemTypeKey, ITEM_TYPE_LABELS } from "../global";
import { UnifiedItem } from "../types/data";
import { getItemHref } from "./Cards";
import { CivFlag } from "./CivFlag";
import { Icon } from "./Icon";
import { ItemIcon } from "./ItemIcon";
import { ItemName } from "./ItemName";
const SDK = import("@data/sdk");
 
export const QuickNav: Component = () => {
  const location = useLocation();
  const current = createMemo(() => parseCurrentLocation(location.pathname));
  const currentCivilization = () => getCivConfig(current().civ);
  const [civilization, setCivilization] = createSignal<CivConfig | undefined>(currentCivilization());
  const [data] = createResource(civilization, getStructuredItems);
  const [view, setView] = createSignal<ItemTypeKey>(current().itemType ?? "units"); // eslint-disable-line solid/reactivity
  const [show, setShow] = createSignal(true);

  createEffect(() => {
    if (show())
    {
       document.body.classList.add("overflow-hidden");
       setCivilization(() => currentCivilization());
       setView(() => current().itemType ?? "units");
    }
    else
    {
      document.body.classList.remove("overflow-hidden");
    }
  });

  createEffect(() => view() && list?.scrollTo({ top: 0 }));
  createEffect(() => current() && setShow(false));

  const [currentItem] = createResource(
    () => ({ subroute: current().subroute, civ: civilization() }),
    async ({subroute, civ}) => {
      if (!subroute) return undefined;
      if (civ) return (await SDK).civilizations.Get(civ).Get(subroute as ItemSlug);
      else return (await SDK).Get(subroute as ItemSlug);
    }
  );

  let attachTo: HTMLButtonElement | undefined; // eslint-disable-line no-unassigned-vars
  let list: HTMLDivElement | undefined; // eslint-disable-line no-unassigned-vars
  function positionPopup(el: HTMLDivElement) {
    function updatePosition() {
      if (!attachTo) return;
      computePosition(attachTo, el, {
        placement: "bottom",
        strategy: "fixed",
      }).then(({ y }) =>
        Object.assign(el.style, {
          left: `0px`,
          top: `${y + 10}px`,
          bottom: "0px",
          opacity: "",
          zIndex: 999,
        })
      );
    }
    updatePosition();
    window.addEventListener("scroll", updatePosition);

    onCleanup(() => {
      window.removeEventListener("scroll", updatePosition);
    });
  }

  return (
    <div class="lg:hidden [-webkit-tap-highlight-color:transparent]">
      <button class="flex gap-3 py-1 items-center" onClick={() => setShow(!show())} ref={attachTo}>
        <Show when={currentCivilization()} keyed fallback={
          <span>All</span>
        }>
          {(currentCivilization) =>
            <div class="flex items-center">
              <CivFlag abbr={currentCivilization.abbr} class="w-10 h-6 mr-2 rounded" />
              <span class="truncate">{currentCivilization.name}</span>
            </div>
          }
        </Show>
        <Show when={current().itemType} keyed>
          {(itemType) =>
          <>
            <Icon icon="chevron-right" class="text-gray-400 hidden sm:block" />
            <span class="hidden sm:block truncate">{ITEM_TYPE_LABELS[itemType]}</span>
          </>
          }
        </Show>
        <Show when={currentItem()} keyed>
          {(currentItem) =>
            <>
              <Icon icon="chevron-right" class="text-gray-400" />
              <span class="truncate">{currentItem.name}</span>
            </>
          }
        </Show>
      </button>
      <Portal>
        <Show when={show()}>
          <div class="xl:hidden fixed w-full z-50 bg-gray-700 [-webkit-tap-highlight-color:transparent]" ref={(el) => positionPopup(el)}>
            <div class="h-full flex flex-col max-w-screen-xl mx-auto pb-4 lg:px-3">
              <div class="overflow-auto flex-none pb-4 mb-2 pt-1 px-4 scrollbar-hide">
                <div class="whitespace-nowrap space-x-2">
                  <For each={Object.values(CIVILIZATIONS)}>
                    {(civ) => (
                      <button onClick={() => setCivilization(civ)} class="last:!mr-4">
                        <CivFlag
                          abbr={civ.abbr}
                          class={`h-8 w-14 rounded object-cover inline-block border-2 ${
                            civilization() === civ ? " border-white" : "border-transparent opacity-50"
                          } transition-opacity`}
                        />
                      </button>
                    )}
                  </For>
                </div>
              </div>
              <div class="flex mx-4 rounded-lg mb-4 bg-gray-500 h-10 flex-none">
                <For each={Object.entries(ITEM_TYPE_LABELS) as [ItemTypeKey, string][]}>{([type, label]) => (
                  <button class={`flex-auto p-2 first:rounded-l-lg last:rounded-r-lg ${view() == type ? "bg-gray-400" : ""}`} onClick={() => setView(type)}>
                    {label}
                  </button>
                )}</For>
              </div>
              <div class="overflow-y-auto" ref={list}>
                <For each={Object.entries(data()?.[view()] ?? {}) as [string, UnifiedItem[]][]}>
                  {([key, items]) =>
                    items.length ? (
                      <div class="mx-3">
                        <div class="bg-gray-700 sticky -top-px">
                          <p class="uppercase font-bold p-2 text-sm text-gray-300">{key}</p>
                        </div>
                        <For each={items}>
                          {(item) => (
                            <A
                              href={getItemHref(item, civilization())}
                              role="treeitem"
                              class={`flex items-center p-2 mb-1 rounded gap-2 text-white/90 hover:text-white bg-item-${item.type} bg-opacity-0 hover:bg-opacity-30 transition-all outline-none border border-transparent focus-visible:border-white`}
                              activeClass={`!bg-opacity-40 font-bold !text-white`}
                              end
                            >
                              <ItemIcon item={item} size={6} />
                              <ItemName name={item.name} class="whitespace-pre-wrap" />
                            </A>
                          )}
                        </For>
                      </div>
                    ) : (
                      <></>
                    )
                  }
                </For>
              </div>
            </div>
          </div>
        </Show>
      </Portal>
    </div>
  );
};
