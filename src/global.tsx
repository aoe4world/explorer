import { createSignal, onCleanup } from "solid-js";
import {
  CivAbbr,
  CivSlug,
  CivConfig,
  loadLocaleBundle,
  getItemTranslation as sdkGetItemTranslation,
  getItemName as sdkGetItemName,
  getItemDescription as sdkGetItemDescription,
  getItemDisplayClasses as sdkGetItemDisplayClasses,
  getItemInfluences as sdkGetItemInfluences,
  getWeaponName as sdkGetWeaponName,
} from "./config";
import { splitUnitsIntoGroups, splitBuildingsIntoGroups, splitTechnologiesIntoGroups } from "./query/utils";
const SDK = import("@data/sdk");

const localeBundles = import.meta.glob(["../data/locales/*.json", "!../data/locales/locale-index.json"]);

export async function ensureLocaleBundle(locale: string): Promise<void> {
  if (!locale || locale === "en") return;
  const key = `../data/locales/${locale}.json`;
  const loader = localeBundles[key];
  if (loader) {
    const mod: any = await loader();
    loadLocaleBundle(locale, mod.default ?? mod);
  }
}

export function getItemTranslation(item: any, locale = currentLocale()) {
  return sdkGetItemTranslation(item, locale);
}

export function getItemName(item: any, locale = currentLocale()): string {
  return sdkGetItemName(item, locale);
}

export function getItemDescription(item: any, locale = currentLocale()): string {
  return sdkGetItemDescription(item, locale);
}

export function getItemDisplayClasses(item: any, locale = currentLocale()): string[] {
  return sdkGetItemDisplayClasses(item, locale);
}

export function getItemInfluences(item: any, locale = currentLocale()): string[] {
  return sdkGetItemInfluences(item, locale);
}

export function getWeaponName(weapon: any, locale = currentLocale()): string {
  return sdkGetWeaponName(weapon, locale);
}

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
function getInitialLocale(): string {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang")?.toLowerCase();
    if (langParam) {
      return langParam;
    }
    const stored = localStorage.getItem("explorer_locale");
    if (stored) return stored;
  }
  return "en";
}

const initialLocale = getInitialLocale();
export const [currentLocale, setCurrentLocale] = createSignal<string>(initialLocale, { equals: false });

if (typeof window !== "undefined" && initialLocale !== "en") {
  ensureLocaleBundle(initialLocale).then(() => {
    setCurrentLocale(initialLocale);
  });
}

export async function setLocale(locale: string) {
  if (locale && locale !== "en") {
    await ensureLocaleBundle(locale);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("explorer_locale", locale);
  }
  setCurrentLocale(locale);
}

export const tempHideNav = (style?: HideNav) => {
  setHideNav(style ?? "hidden");
  onCleanup(() => setHideNav("visible"));
}

export async function getStructuredItems(civilization?: CivConfig, locale = currentLocale()) {
  await ensureLocaleBundle(locale);
  const sdk = await SDK;
  if (!civilization)
    return {
      civ: undefined,
      units: splitUnitsIntoGroups(sdk.units.order("hitpoints", "age")),
      buildings: splitBuildingsIntoGroups(sdk.buildings.order("hitpoints", "age")),
      technologies: splitTechnologiesIntoGroups(sdk.technologies.order("age")),
    };
  const civ = sdk.civilizations.Get(civilization, locale);
  if (!civ.info) return;
  return {
    civ,
    units: splitUnitsIntoGroups(civ.units.order("hitpoints", "age")),
    buildings: splitBuildingsIntoGroups(civ.buildings.order("hitpoints", "age")),
    technologies: splitTechnologiesIntoGroups(civ.technologies.order("age")),
  };
}

export function parseCurrentLocation(pathname: string): { route?: string; civ?: CivSlug; subroute?: string; itemType?: ItemTypeKey; itemId?: string; } {
  const path = pathname?.toLowerCase() ?? "";
  const [route, civ, subroute, itemType, itemId] = path.match(/^(?:\/?explorer)?(?:\/civs\/([a-z-]+))?(?:\/((units|buildings|technologies)(?:\/([\w/-]+))?))?/i) ?? [];
  return { route, civ: civ as CivSlug | undefined, subroute, itemType: itemType as ItemTypeKey | undefined, itemId: itemId as string | undefined };
}
