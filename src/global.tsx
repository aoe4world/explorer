import { createSignal, onCleanup } from "solid-js";
import { civAbbr } from "./types/data";
import { CivConfig } from "@data/types/civs";
import { splitUnitsIntoGroups, splitBuildingsIntoGroups, splitTechnologiesIntroGroups } from "./query/utils";

export type HideNav = 'visible' | 'hide-sidebar' | 'hidden';

export const [hideNav, setHideNav] = createSignal('visible');
export const [globalAgeFilter, setGlobalAgeFilter] = createSignal(4);
export const [globalCivFilter, setGlobalCivsFilter] = createSignal<civAbbr>(null);

export const tempHideNav = (style?: HideNav) => {
  setHideNav(style ?? "hidden");
  onCleanup(() => setHideNav("visible"));
}

export async function getStructuredItems(civilization?: CivConfig) {
  const sdk = await import("@data/sdk");
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

export function parseCurrentLocation(pathname: string) {
  const path = pathname?.toLowerCase() ?? "";
  const [route, civ, subroute] = path.match(/\/civs\/([a-z]+)\/?([\w/-]*)/i) ?? [];
  const itemType = subroute?.split("/")[0] || (civ?.length ? "" : path.match(/(units|buildings|technologies)/i)?.[0])?.toLowerCase();
  const id = ["buildings", "technologies", "units"].includes(itemType);
  return { route, civ, subroute, itemType };
}
