import { getAbbr, getSlug } from "@data/sdk/utils";
import { Ability, Building, Item, Modifier, PhysicalItem } from "@data/types/items";
import { CIVILIZATIONS, ITEMS, SIMILAIR_ITEMS } from "../config";
import { staticMaps } from "../data/maps";
import { civAbbr, civConfig, GroupedBuildings, GroupedUnits, Technology, UnifiedItem, Unit } from "../types/data";
import { PatchLine, PatchNotes } from "../types/patches";

const SDK = import("@data/sdk");

/** Map any of civAbbr | civConfig | civConfig[] | civAbbr[] to a single array */
export type civFilterParam = Parameters<typeof mapCivsArgument>[0];
export function mapCivsArgument(civs?: civAbbr | civConfig | civConfig[] | civAbbr[]): civConfig[] {
  const configs = Object.values(CIVILIZATIONS);
  if (!civs) return configs;
  else if (Array.isArray(civs)) return civs.map((c) => (typeof c === "string" ? configs.find((civ) => civ.abbr === c) : c));
  else if (typeof civs === "string") return configs.filter((c) => c.abbr === civs);
  else return [civs];
}

/** Filter a list of unified items based on their civ or max age */
export function filterItems<T extends UnifiedItem[]>(items: T, { civs, maxAge }: { civs: civFilterParam; maxAge?: number } = { civs: [] }) {
  const cs = mapCivsArgument(civs);

  return items.reduce((items, x) => {
    if (!cs.some((c) => x.civs.includes(c.abbr))) return items;
    let filteredVariations = [...(x.variations ?? [])];

    filteredVariations = filteredVariations.filter((v) => cs.some((c) => v.civs.includes(c.abbr)));
    if (maxAge) filteredVariations = filteredVariations.filter((v) => v.age <= maxAge);

    let filteredCivs = x.civs.filter((c) => filteredVariations.some((v) => v.civs.includes(c)));
    if (filteredVariations.length > 0) items.push({ ...x, civs: filteredCivs, variations: filteredVariations });
    return items;
  }, [] as typeof items);
}

/** Query the technologies that apply to an item and merge them with all technology modifiers */
export async function getItemTechnologies<T extends ITEMS>(
  type: T,
  item: string | UnifiedItem,
  civ?: civAbbr | civConfig,
  includeAllCivsUnitSpecificTech = false
): Promise<UnifiedItem<Technology>[]> {
  const { Get, technologies } = await SDK;
  const unifiedItem = typeof item == "string" ? Get(`${type}/${item}`) : item;
  return technologies.reduce((acc, t) => {
    const filteringByCiv = !!civ;
    const variations = t.variations.filter((v) => (filteringByCiv ? v.civs.includes(mapCivsArgument(civ)[0].abbr) : true));
    const modifiers = variations.flatMap((v) => v.effects).filter(Boolean);
    if (!modifiers || !variations.length) return acc;

    const techResearchedAtId = false; //t.variations.some((v) => v.producedBy.includes(unifiedItem.id));
    const techMatchesItemId = modifiers.some((m) => modifierMatches(m.select, unifiedItem).id);
    const techMatchesItemClass = modifiers.some((m) => modifierMatches(m.select, unifiedItem).class);
    const appliesToMultipleCivs = t.civs.length > 1;
    const itemIsUnique = unifiedItem.civs.length === 1;

    if (
      techResearchedAtId ||
      (filteringByCiv
        ? techMatchesItemId || techMatchesItemClass
        : // If we're not looking at techs for a specific civ & unit combo
          // we show only techs that match by id, or those that match by class and have multiple civs
          (techMatchesItemId && itemIsUnique) || (techMatchesItemId && includeAllCivsUnitSpecificTech) || (techMatchesItemClass && appliesToMultipleCivs))
    ) {
      if (techMatchesItemId) acc.unshift({ ...t, variations });
      else acc.push({ ...t, variations });
    }

    return acc;
  }, [] as UnifiedItem<Technology>[]);
}

export function getMostAppropriateVariation<T extends Item = Item>(item: UnifiedItem<T>, civ: civConfig): T {
  if (!item) return null;
  return (
    (civ ? item.variations.filter((v) => v.civs.includes(civ.abbr)) : item.variations)
      .sort((a, b) => b.costs.total - a.costs.total)
      .sort((a, b) => a.id.length - b.id.length)
      .sort((a, b) => b.civs.length - a.civs.length)[0] ?? item.variations[0]
  );
}

export function splitUnitsIntoGroups(units: UnifiedItem<Unit>[]) {
  const grouped = units?.reduce(
    (acc, unit) => {
      if (unit.classes.some((c) => c === "ship")) acc.ships.push(unit);
      else if (unit.variations.some((v) => v.producedBy.includes("mercenary-house") || v.producedBy.includes("foreign-engineering-company")))
        acc.mercenaries.push(unit);
      else if (unit.classes.some((c) => c === "warship")) acc.ships.push(unit);
      else if (unit.classes.some((c) => c === "worker")) acc.workers.push(unit);
      else if (unit.classes.some((c) => c === "infantry")) acc.infantry.push(unit);
      else if (unit.classes.some((c) => c === "cavalry")) acc.cavalry.push(unit);
      else if (unit.classes.some((c) => c === "camel")) acc.cavalry.push(unit);
      else if (unit.classes.some((c) => c === "siege")) acc.siege.push(unit);
      else if (unit.classes.some((c) => c === "mixed")) acc.misc.push(unit);
      else acc.workers.push(unit);

      return acc;
    },
    { workers: [], infantry: [], cavalry: [], siege: [], ships: [], misc: [], mercenaries: [] } as GroupedUnits
  );
  grouped.mercenaries.sort((b, a) => b.variations[0].costs.total - a.variations[0].costs.total);
  return grouped;
}

export function splitBuildingsIntoGroups(buildings: UnifiedItem<Building>[]) {
  return buildings?.reduce(
    (acc, unit) => {
      if (unit.classes.some((c) => c === "landmark")) acc.landmarks.push(unit);
      else if (unit.classes.some((c) => c === "wonder")) acc.wonders.push(unit);
      else if (unit.classes.some((c) => c === "defensive")) acc.defensive.push(unit);
      else if (unit.classes.some((c) => c === "technology")) acc.technology.push(unit);
      else if (unit.classes.some((c) => c === "religious")) acc.religious.push(unit);
      else if (unit.classes.some((c) => c === "military")) acc.military.push(unit);
      else acc.economy.push(unit);

      return acc;
    },
    { economy: [], military: [], defensive: [], religious: [], technology: [], landmarks: [], wonders: [] } as GroupedBuildings
  );
}

export function splitTechnologiesIntroGroups(buildings: UnifiedItem<Technology>[]) {
  return buildings?.reduce(
    (acc, tech) => {
      if (tech.classes.some((c) => ["advance"].includes(c) && tech.civs[0] == "ab")) return acc;
      else if (tech.classes.some((c) => tech.civs[0] == "ay" && tech.id.includes("wing"))) acc.wings.push(tech);
      else if (tech.classes.some((c) => c === "level-up-choice") && tech.civs[0] == "je") acc.leveling.push(tech);
      else if (tech.classes.some((c) => ["ship", "naval", "warship"].includes(c))) acc.naval.push(tech);
      else if (
        tech.classes.some((c) =>
          [
            "mining",
            "gathering",
            "woodcutting",
            "farm",
            "hunting",
            "villager",
            "fishing",
            "construction",
            "official",
            "population",
            "trade",
            "economic",
            "research",
            "raiding",
            "packing",
          ].includes(c)
        )
      )
        acc.economy.push(tech);
      else if (tech.classes.some((c) => ["defensive", "emplacement", "building", "outpost", "keep"].includes(c))) acc.defensive.push(tech);
      else if (tech.classes.some((c) => ["religious", "healing"].includes(c))) acc.religious.push(tech);
      else if (tech.classes.some((c) => ["Production", "siege", "melee", "cavalry", "infantry", "ranged", "production", "gunpowder"].includes(c)))
        acc.military.push(tech);
      else acc.units.push(tech);

      return acc;
    },
    { wings: [], leveling: [], economy: [], naval: [], defensive: [], religious: [], military: [], units: [] } as Record<string, UnifiedItem<Technology>[]>
  );
}

export function modifierMatches(matcher: Modifier["select"], item: Item | UnifiedItem) {
  if (!matcher) return { id: false, class: false, any: false };
  const matchesId = matcher.id?.includes(item.id) || matcher.id?.includes((item as Item).baseId);
  const matchesClass = matcher.class?.some((cl) => cl?.every((c) => item.classes.includes(c)));
  return { id: matchesId, class: matchesClass, any: matchesId || matchesClass };
}

export function canonicalItemName(item: Item | UnifiedItem) {
  const group = item.type === "unit" ? "units" : item.type === "building" ? "buildings" : "technologies";
  return `${group}/${"baseId" in item ? item.baseId : item.id}`;
}

export function getItemByCanonicalName(id: string) {
  if (id.startsWith("maps/")) return getMapAsItem(id.split("/")[1]);
  return SDK.then((sdk) => sdk.Get(id as any));
}

export async function findClosestMatch<T extends ITEMS>(type: T, id: string, civ: civConfig) {
  const similair = SIMILAIR_ITEMS.find((units) => units.includes(id));
  const closestMatch = similair && (await SDK)[type].where({ civilization: civ.abbr }).find((i) => similair.includes(i.id));
  return closestMatch ?? null;
}

function getMapAsItem(id: string) {
  const [name, icon] = staticMaps[id] ?? [capitlize(id.replaceAll("-", " ")), ""];

  return {
    id,
    name,
    civs: [],
    classes: ["Map"],
    icon,
    description: "",
    type: "map",
  } as unknown as UnifiedItem;
}

export function capitlize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const patchOrder = ["buff", "nerf", "fix"];
export const sortPatchDiff = (a: PatchLine, b: PatchLine) => patchOrder.indexOf(a[0]) - patchOrder.indexOf(b[0]);

/** Get all changes, line by line, that apply to a specific item */
export async function getPatchHistory(item: UnifiedItem, civs?: civConfig[]) {
  const { patches } = await import("../data/patches/patch");

  const cid = canonicalItemName(item);
  const civAbbrs = civs?.map((c) => c.abbr);
  const history: { patch: PatchNotes; diff: PatchLine[] }[] = [];
  for (const patch of patches) {
    const diff = [];
    for (const section of patch.sections) {
      if (!civOverlap(civAbbrs, section.civs)) continue;
      diff.push(
        ...section.changes.reduce(
          (acc, c) => (c.items.includes(cid) && civOverlap(civAbbrs, c.civs) ? [...acc, ...c.diff.filter(([t, l, lc]) => civOverlap(civAbbrs, lc))] : acc),
          [] as PatchLine[]
        )
      );
    }
    if (diff.length) {
      diff.sort(sortPatchDiff);
      history.push({ patch, diff });
    }
  }
  return history.sort((a, b) => patches.indexOf(b.patch) - patches.indexOf(a.patch));
}

function civOverlap(filter: civAbbr[], value: civAbbr[]) {
  if (!value?.length || !filter?.length) return true;
  return filter.some((c) => value.includes(c));
}
