import { Link, NavLink, useIsRouting, useLocation } from "solid-app-router";
import { Component, createMemo, createSignal, For, Show } from "solid-js";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG } from "../config";
import { tooltipCSSClass } from "../styles";
import { civAbbr } from "../types/data";
import { CivFlag } from "./CivFlag";
import { Icon } from "./Icon";
import { Search } from "./Search";
import { Tooltip } from "./Tooltip";

export const [hideNav, setHideNav] = createSignal(false);
export const [globalAgeFilter, setGlobalAgeFilter] = createSignal(4);
export const [globalCivFilter, setGlobalCivsFilter] = createSignal<civAbbr>(null);
export const Toolbar: Component = () => {
  const pending = useIsRouting();

  const location = useLocation();
  const current = createMemo(() => {
    const [route, civ, subroute] = location.pathname.match(/\/civs\/([a-z]+)\/?([\w/-]*)/i) ?? [];
    return { route, civ, subroute };
  });

  const navButtonClass =
    "w-12 h-10 md:w-10 lg:h-8 md:hover:bg-white md:hover:text-black bg-gray-900 text-white/70text-lg px-3 grid rounded-md flex-none transition";

  return (
    <Show when={!hideNav()}>
      <div class="bg-gray-700 z-10 border-bottom border border-gray-500  sticky mt-25 top-0" classList={{ "opacity-20": pending() }}>
        <div class="max-w-screen-2xl py-2 px-4 lg:px-8 h-auto text-base lg:p-3 mx-auto flex flex-row flex-wrap sm:flex-nowrap gap-2 lg:gap-5">
          <div class="flex flex-row gap-2 h-10 lg:h-8 ">
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
                  href={[`/civs/${civ.slug}`, current().subroute].join("/")}
                  class="h-full relative w-14 rounded-md overflow-hidden border-2 shadow-inner opacity-50 hover:opacity-100  border-transparent hidden lg:block transition"
                  activeClass="opacity-90 border-white"
                  aria-label={civ.name}
                  noScroll={true}
                >
                  <CivFlag abbr={civ.abbr} class="h-full w-full object-cover" />
                </NavLink>
              )}
            </For>
          </div>
          <Show when={CIVILIZATION_BY_SLUG[current()?.civ]}>
            {(civ) => (
              <div class="group flex-auto lg:hidden">
                <button class="flex items-center gap-2 bg-gray-900 h-10 px-3 rounded-md">
                  <CivFlag abbr={civ.abbr} class="h-6 w-10 rounded object-cover" />
                  <span class="truncate hidden sm:inline">{civ.name}</span>
                  <Icon icon="caret-down" class=" ml-4 mr-2" />
                </button>
                <div class="hidden group-hover:block group-focus-within:block z-10 rounded-md absolute bg-gray-900 w-60 mt-0 ">
                  <For each={Object.values(CIVILIZATIONS)}>
                    {(civ) => (
                      <NavLink href={[`/civs/${civ.slug}`, current().subroute].join("/")} noScroll={true} class="flex p-3 hover:bg-gray-700">
                        <CivFlag abbr={civ.abbr} class="h-6 w-10 mr-3 rounded object-cover" /> {civ.name}
                      </NavLink>
                    )}
                  </For>
                </div>
              </div>
            )}
          </Show>

          {() => {
            let el;
            return (
              <>
                <Link href={`/about`} ref={el} class={`${navButtonClass} ml-auto`} noScroll={true}>
                  <Icon icon="circle-question" class="place-self-center" />
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
          <div class="flex items-center text-center bg-gray-900 h-10 lg:h-8 rounded-md">
            <button
              class="w-8 h-full z-2 -mr-4 disabled:opacity-50"
              onClick={() => setGlobalAgeFilter(Math.max(1, globalAgeFilter() - 1))}
              disabled={globalAgeFilter() == 1}
            >
              <Icon icon="angle-left" />
            </button>
            <span class="w-12 md:w-24 pointer-events-none">
              <span class="hidden md:inline">Age </span>
              {["I", "II", "III", "IV"][globalAgeFilter() - 1]}
            </span>
            <button
              class="w-8 h-full z-2 -ml-4 disabled:opacity-50"
              onClick={() => setGlobalAgeFilter(Math.min(4, globalAgeFilter() + 1))}
              disabled={globalAgeFilter() == 4}
            >
              <Icon icon="angle-right" />
            </button>
          </div>
          <Search class="basis-full my-2 sm:my-0 sm:basis-48 lg:basis-96" />
        </div>
      </div>
    </Show>
  );
};
