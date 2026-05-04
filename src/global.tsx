import { createSignal, onCleanup } from "solid-js";
import { CivAbbr, CivSlug, CivConfig } from "./config";
import { splitUnitsIntoGroups, splitBuildingsIntoGroups, splitTechnologiesIntroGroups } from "./query/utils";
const SDK = import("@data/sdk");

export type ItemTypeKey = 'units' | 'buildings' | 'technologies';

export const ITEM_TYPE_LABELS: Record<ItemTypeKey, string> = {
  units: "Units",
  buildings: "Buildings",
  technologies: "Technologies",
};

export type HideNav = 'visible' | 'hide-sidebar' | 'hidden';

export const [hideNav, setHideNav] = createSignal('visible');
export const [globalAgeFilter, setGlobalAgeFilter] = createSignal(4);
export const [globalCivFilter, setGlobalCivsFilter] = createSignal<CivAbbr>();

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

export function parseCurrentLocation(pathname: string): { route?: string; civ?: CivSlug; subroute?: string; itemType?: ItemTypeKey; itemId?: string; } {
  const path = pathname?.toLowerCase() ?? "";
  const [route, civ, subroute, itemType, itemId] = path.match(/(?:\/civs\/([a-z]+)\/)?(?:\/((units|buildings|technologies)(\/[\w/-]*)?))?/i) ?? [];
  return { route, civ: civ as CivSlug | undefined, subroute, itemType: itemType as ItemTypeKey | undefined, itemId: itemId as string | undefined };
}
