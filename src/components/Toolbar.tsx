import { Link, NavLink, useIsRouting, useLocation } from "@solidjs/router";
import { Component, createMemo, createSignal, For, Show } from "solid-js";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG } from "../config";
import { tooltipCSSClass } from "../styles";
import { civAbbr, civConfig } from "../types/data";
import { CivFlag } from "./CivFlag";
import { Icon } from "./Icon";
import { Search } from "./Search";
import { Tooltip } from "./Tooltip";
import { globalAgeFilter, hideNav, setGlobalAgeFilter } from "../global";
import { QuickNav } from "./QuickNav";

export const Toolbar: Component = () => {
  const pending = useIsRouting();

  const location = useLocation();
  const current = createMemo(() => {
    const [route, civ, subroute] = location.pathname.match(/\/civs\/([a-z]+)\/?([\w/-]*)/i) ?? [];
    return { route, civ, subroute };
  });

  const smartCivLink = (civ: civConfig) => {
    const subroute = [`/civs/${civ.slug}`, current().subroute].join("/");
    if (location.pathname.includes(subroute)) return `/civs/${civ.slug}`;
    return subroute;
  };

  const navButtonClass =
    "w-12 h-7 md:w-10 lg:h-7 md:hover:bg-white md:hover:text-black bg-gray-900 text-white/70 text-lg px-3 grid rounded-md flex-none transition";

  return (
    <Show when={!hideNav()}>
      <div class="bg-gray-700 z-10 border-bottom border border-gray-500 sticky mt-25 top-0" classList={{ "opacity-20": pending() }}>
        <div class="max-w-screen-2xl py-2 px-4 lg:px-8 h-auto text-base lg:p-3 mx-auto flex flex-row items-center flex-wrap sm:flex-nowrap gap-2 lg:gap-5">
          <div class="hidden lg:flex flex-row gap-2 h-10 lg:h-8 items-center">
            {current().subroute ? (
              <Link href={`/civs/${current().civ}/`} class={navButtonClass} noScroll={true}>
                <Icon icon="grid-horizontal" class="place-self-center" />
              </Link>
            ) : (
              <Link href={`/`} class={navButtonClass} noScroll={true}>
                <Icon icon="home" class="place-self-center" />
              </Link>
            )}

            <For each={Object.values(CIVILIZATIONS)}>
              {(civ) => (
                <NavLink
                  href={smartCivLink(civ)}
                  class="relative w-12 h-7 rounded-md overflow-hidden border-2 shadow-inner opacity-50 hover:opacity-100  border-transparent hidden xl:block transition"
                  activeClass="opacity-90 border-white"
                  aria-label={civ.name}
                  noScroll={true}
                >
                  <CivFlag abbr={civ.abbr} class="h-full w-full object-cover" />
                </NavLink>
              )}
            </For>
          </div>
          <QuickNav />
          <Show when={CIVILIZATION_BY_SLUG[current()?.civ]}>
            {(civ) => (
              <div class="flex-auto hidden lg:block xl:hidden">
                <div class="group inline-block">
                  <button class="flex items-center gap-2 bg-gray-900 h-8 px-1 rounded-md">
                    <CivFlag abbr={civ().abbr} class="h-6 w-10 rounded object-cover" />
                    <span class="truncate hidden sm:inline">{civ().name}</span>
                    <Icon icon="caret-down" class=" ml-4 mr-2" />
                  </button>
                  <div class="hidden max-h-[80vh] overflow-y-auto group-hover:block group-focus-within:block z-10 rounded-md absolute bg-gray-900 w-60 mt-0 ">
                    <For each={Object.values(CIVILIZATIONS)}>
                      {(civ) => (
                        <NavLink href={[`/civs/${civ.slug}`, current().subroute].join("/")} noScroll={true} class="flex p-3 hover:bg-gray-700">
                          <CivFlag abbr={civ.abbr} class="h-6 w-10 mr-3 rounded object-cover" /> {civ.name}
                        </NavLink>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            )}
          </Show>

          {() => {
            let el;
            return (
              <>
                <Link href={`/about`} ref={el} class={`${navButtonClass} ml-auto hidden sm:block`} noScroll={true}>
                  <Icon icon="circle-question" class="place-self-center text-gray-300" />
                </Link>
                <Tooltip attachTo={el}>
                  <div class={tooltipCSSClass}>
                    <p class="font-bold">Learn more about the Explorer.</p>
                    <hr class="my-4" />
                    <For
                      each={[
                        ["base", "Base value"],
                        ["upgrade", "Unit Upgrades"],
                        ["building", "Building Upgrades"],
                        ["technology", "Technology Research"],
                        ["unique", "Unique Upgrade"],
                        ["bonus", "Bonus"],
                      ]}
                    >
                      {([type, label]) => (
                        <div>
                          <span class={`bg-bar-${type} inline-block w-3 h-3 rounded-full mr-1`}></span> {label}
                        </div>
                      )}
                    </For>
                  </div>
                </Tooltip>
              </>
            );
          }}

          <Search class="basis-full my-2 sm:my-0 sm:basis-48 lg:basis-96" />
        </div>
      </div>
      <div class="bg-blue-900/20 border-bottom border border-gray-500 p-3 text-white/70 text-center">
        Work in Progress: The <CivFlag abbr="kt" class="inline-block h-5" /> Knights Templar and <CivFlag abbr="hl" class="inline-block h-5" /> House of Lancaster civilizations aren't fully updated and miss stats, abilities and upgrades.<br/>Explorer will continue to be updated over the next few weeks for both old and new civs.
      </div>
    </Show>
  );
};
