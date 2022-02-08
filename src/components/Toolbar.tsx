import { Link, NavLink, useIsRouting, useLocation } from "solid-app-router";
import { Component, createMemo, createSignal, For, Show, useTransition } from "solid-js";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG } from "../config";
import { civAbbr } from "../types/data";
import { CivFlag } from "./CivFlag";
import { Icon } from "./Icon";

export const [globalAgeFilter, setGlobalAgeFilter] = createSignal(4);
export const [globalCivFilter, setGlobalCivsFilter] = createSignal<civAbbr>(null);
export const Toolbar: Component = () => {
  const pending = useIsRouting();

  const location = useLocation();
  const current = createMemo(() => {
    const [route, civ, subroute] = location.pathname.match(/\/civs\/([a-z]+)\/?([\w/-]*)/i) ?? [];
    return { route, civ, subroute };
  });

  const navButtonClass = "hover:bg-white bg-gray-900 text-white/70 hover:text-black text-lg px-3 grid h-full w-12 md:w-10 rounded-md flex-none transition";

  return (
    <div class="bg-gray-700 z-10 border-bottom border border-gray-500  sticky mt-25 top-0" classList={{ "opacity-20": pending() }}>
      <div class="max-w-screen-lg p-2 h-16 md:h-14 text-sm md:text-base md:p-3 mx-auto flex flex-row gap-2 md:gap-5">
        <div class="flex flex-row gap-2 ">
          {current().subroute ? (
            <Link href={`civs/${current().civ}/`} class={navButtonClass} noScroll={true}>
              <Icon icon="arrow-left" class="place-self-center" />
            </Link>
          ) : (
            <Link href={`civs/`} class={navButtonClass} noScroll={true}>
              <Icon icon="grid-horizontal" class="place-self-center" />
            </Link>
          )}
          <For each={Object.values(CIVILIZATIONS)}>
            {(civ) => (
              <NavLink
                href={[`/civs/${civ.slug}`, current().subroute].join("/")}
                class="h-full relative w-16 rounded-md overflow-hidden border-2 shadow-inner opacity-50 hover:opacity-100  border-transparent hidden md:block transition"
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
            <div class="group flex-auto md:hidden">
              <button class="flex items-center gap-2 w-full  bg-gray-900 h-full px-3 rounded-md">
                <CivFlag abbr={civ.abbr} class="h-7 w-10 rounded object-cover" />
                <span class="truncate">{civ.name}</span>
                <Icon icon="caret-down" class="ml-auto mr-2" />
              </button>
              <div class="hidden group-hover:block group-focus-within:block rounded-md absolute bg-gray-900 w-64 mt-0 ">
                <For each={Object.values(CIVILIZATIONS)}>
                  {(civ) => (
                    <NavLink href={[`/civs/${civ.slug}`, current().subroute].join("/")} noScroll={true} class="flex p-4 hover:bg-gray-700">
                      <CivFlag abbr={civ.abbr} class="h-7 w-10 mr-3 rounded object-cover" /> {civ.name}
                    </NavLink>
                  )}
                </For>
              </div>
            </div>
          )}
        </Show>

        <div class="flex items-center text-center bg-gray-900 h-full  rounded-md  ml-auto">
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
      </div>
    </div>
  );
};
