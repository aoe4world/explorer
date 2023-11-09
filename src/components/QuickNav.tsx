import { CivConfig, CivSlug } from "@data/types/civs";
import { Link, NavLink, useLocation } from "@solidjs/router";
import { Component, For, createEffect, createMemo, createResource, createSignal, onCleanup } from "solid-js";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG, ITEMS } from "../config";
import { parseCurrentLocation, getStructuredItems } from "../global";
import { Portal, Show } from "solid-js/web";
import { ItemSlug } from "@data/sdk/utils";
import { computePosition, offset, flip, shift, size } from "@floating-ui/dom";
import { Search } from "./Search";
import { ItemIcon } from "./ItemIcon";
import { getItemHref } from "./Cards";
import { Icon } from "./Icon";
import { CivFlag } from "./CivFlag";

const SDK = import("@data/sdk");
const itemTypeLabels = {
  units: "Units",
  buildings: "Buildings",
  technologies: "Technologies",
};

export const QuickNav: Component = () => {
  const location = useLocation();
  const current = createMemo(() => parseCurrentLocation(location.pathname));
  const currentCivilization = () => CIVILIZATION_BY_SLUG[current().civ as CivSlug] ?? undefined;
  const [civilization, setCivilization] = createSignal<CivConfig>(currentCivilization());
  const [data] = createResource(civilization, getStructuredItems);
  const [view, setView] = createSignal<"buildings" | "units" | "technologies" | string>(current().itemType);
  const [show, setShow] = createSignal(true);

  createEffect(() => {
    setView(() => current().itemType || "units");
  });

  createEffect(() => {
    show() ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
    show() && setCivilization(() => currentCivilization());
    show() && setView(() => current().itemType || "units");
  });

  createEffect(() => view() && list.scrollTo({ top: 0 }));
  createEffect(() => current() && setShow(false));

  const [currentItem] = createResource(
    () => current().subroute,
    async () => {
      if (civilization()) return (await SDK).civilizations.Get(civilization()).Get(current().subroute as ItemSlug);
      else return (await SDK).Get(current().subroute as ItemSlug);
    }
  );

  let attachTo: HTMLButtonElement;
  let list: HTMLDivElement;
  function positionPopup(el) {
    function updatePosition() {
      computePosition(attachTo, el, {
        placement: "bottom",
        strategy: "fixed",
      }).then(({ x, y }) =>
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
        {currentCivilization() ? (
          <div class="flex items-center">
            <CivFlag abbr={currentCivilization().abbr} class="w-10 h-6 mr-2 rounded" />
            <span class="truncate">{currentCivilization().name}</span>
          </div>
        ) : (
          <span>All</span>
        )}
        {current().itemType ? (
          <>
            <Icon icon="chevron-right" class="text-gray-400 hidden sm:block" />
            <span class="hidden sm:block truncate">{itemTypeLabels[current().itemType]}</span>
          </>
        ) : (
          <></>
        )}
        {currentItem() ? (
          <>
            <Icon icon="chevron-right" class="text-gray-400" />
            <span class="truncate">{currentItem().name}</span>
          </>
        ) : (
          <></>
        )}
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
                {Object.entries(itemTypeLabels).map(([type, label]) => (
                  <button class={`flex-auto p-2 first:rounded-l-lg last:rounded-r-lg ${view() == type ? "bg-gray-400" : ""}`} onClick={() => setView(type)}>
                    {label}
                  </button>
                ))}
              </div>
              <div class="overflow-y-auto" ref={list}>
                <For each={Object.entries(data()?.[view()] ?? {})}>
                  {([key, items]) =>
                    items?.length ? (
                      <div class="mx-3">
                        <div class="bg-gray-700 sticky -top-px">
                          <p class="uppercase font-bold p-2 text-sm text-gray-300">{key}</p>
                        </div>
                        <For each={items}>
                          {(item) => (
                            <Link
                              href={getItemHref(item, civilization())}
                              role="treeitem"
                              class={`flex items-center p-2 mb-1 rounded gap-2 text-white/90 hover:text-white bg-item-${item.type} bg-opacity-0 hover:bg-opacity-30 transition-all outline-none border border-transparent focus-visible:border-white`}
                              activeClass={`!bg-opacity-40 font-bold !text-white`}
                              end
                            >
                              <div class={`w-6 h-6 bg-item-${item.type} rounded-sm flex-none`}>
                                <ItemIcon url={item.icon} />
                              </div>
                              <p class="whitespace-pre-wrap" innerHTML={item.name.replace(/(.*?)\((.*?)\)/, '$1<span class="opacity-50">$2</span>')}></p>
                            </Link>
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
