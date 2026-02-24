import { createSignal, onCleanup } from "solid-js";

import { civAbbr } from "./types/data";
import { CivConfig, CivSlug } from "@data/types/civs";
import { splitUnitsIntoGroups, splitBuildingsIntoGroups, splitTechnologiesIntroGroups } from "./query/utils";
const SDK = import("@data/sdk");

export type HideNav = 'visible' | 'hide-sidebar' | 'hidden';

export const [hideNav, setHideNav] = createSignal('visible');
export const [globalAgeFilter, setGlobalAgeFilter] = createSignal(4);
export const [globalCivFilter, setGlobalCivsFilter] = createSignal<civAbbr>(null);

export const tempHideNav = (style?: HideNav) => {
  setHideNav(style ?? "hidden");
  onCleanup(() => setHideNav("visible"));
}

export async function getStructuredItems(civilization?: CivConfig) {
  const sdk = await SDK;
  if (!civilization)
    return {
      civ: undefined,
      units: splitUnitsIntoGroups(sdk.units.order("hitpoints", "age")),
      buildings: splitBuildingsIntoGroups(sdk.buildings.order("hitpoints", "age")),
      technologies: splitTechnologiesIntroGroups(sdk.technologies.order("age")),
    };
  const civ = sdk.civilizations.Get(civilization);
  if (!civ.info) return;
  return {
    civ,
    units: splitUnitsIntoGroups(civ.units.order("hitpoints", "age")),
    buildings: splitBuildingsIntoGroups(civ.buildings.order("hitpoints", "age")),
    technologies: splitTechnologiesIntroGroups(civ.technologies.order("age")),
  };
}

export function parseCurrentLocation(pathname: string): { route?: string; civ?: CivSlug; subroute?: string; itemType?: string; } {
  const path = pathname?.toLowerCase() ?? "";
  const [route, civ, subroute] = path.match(/\/civs\/([a-z]+)\/?([\w/-]*)/i) ?? [];
  const itemType = subroute?.split("/")[0] || (civ?.length ? "" : path.match(/(units|buildings|technologies)/i)?.[0])?.toLowerCase();
  return { route, civ: civ as CivSlug, subroute, itemType };
}
