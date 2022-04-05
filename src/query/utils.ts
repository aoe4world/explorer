import { Building, Item, Modifier, PhysicalItem } from "../../data/.scripts/lib/types/units";
import { CIVILIZATIONS, ITEMS } from "../config";
import { technologyModifiers } from "../data/technologies";
import { civAbbr, civConfig, GroupedBuildings, GroupedUnits, Technology, UnifiedItem, Unit } from "../types/data";
import { fetchItem, fetchItems, getItem } from "./fetch";

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

/** Sort a list of unified units based on properties of their variations */
const variationMin = (item: UnifiedItem<PhysicalItem>, property: keyof Unit) => {
  return item.variations.reduce((min, variation) => {
    return +variation[property] < min ? +variation[property] : min;
  }, Infinity);
};
export function sortUnifiedItemsByVariation<T extends Unit | Building | Technology>(units: UnifiedItem<T>[], keys: (keyof T)[]) {
  units.sort((a, b) => b.civs.length - a.civs.length);
  for (const key of keys) {
    units = units.sort((a, b) => variationMin(a, key) - variationMin(b, key));
  }
  return units;
}

/** Query the technologies that apply to an item and merge them with all technology modifiers */
export async function getItemTechnologies<T extends ITEMS>(
  type: T,
  item: string | UnifiedItem,
  civ?: civAbbr | civConfig,
  includeAllCivsUnitSpecificTech = false
): Promise<UnifiedItem<Technology>[]> {
  const [technologies, unifiedItem] = await Promise.all([fetchItems(ITEMS.TECHNOLOGIES), typeof item == "string" ? fetchItem(type, item) : item]);
  return technologies.reduce((acc, t) => {
    // Todo, reduce over item.variations instead and read 'effects'. Filter by civ
    const modifiers = technologyModifiers[t.id];
    const filteringByCiv = !!civ;
    const variations = t.variations.filter((v) => (filteringByCiv ? v.civs.includes(mapCivsArgument(civ)[0].abbr) : true));
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

export function splitUnitsIntoGroups(units: UnifiedItem<Unit>[]) {
  return units?.reduce(
    (acc, unit) => {
      if (unit.classes.some((c) => c === "ship")) acc.ships.push(unit);
      else if (unit.classes.some((c) => c === "warship")) acc.ships.push(unit);
      else if (unit.classes.some((c) => c === "worker")) acc.workers.push(unit);
      else if (unit.classes.some((c) => c === "infantry")) acc.infantry.push(unit);
      else if (unit.classes.some((c) => c === "cavalry")) acc.cavalry.push(unit);
      else if (unit.classes.some((c) => c === "siege")) acc.siege.push(unit);
      else acc.workers.push(unit);

      return acc;
    },
    { workers: [], infantry: [], cavalry: [], siege: [], ships: [] } as GroupedUnits
  );
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
    (acc, unit) => {
      if (unit.classes.some((c) => ["advance"].includes(c))) return acc;
      else if (unit.classes.some((c) => ["ship", "naval", "warship"].includes(c))) acc.naval.push(unit);
      else if (
        unit.classes.some((c) =>
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
        acc.economy.push(unit);
      else if (unit.classes.some((c) => ["defensive", "emplacement", "building", "outpost", "keep"].includes(c))) acc.defensive.push(unit);
      else if (unit.classes.some((c) => ["religious", "healing"].includes(c))) acc.religious.push(unit);
      else if (unit.classes.some((c) => ["Production", "siege", "melee", "cavalry", "infantry", "ranged", "production", "gunpowder"].includes(c)))
        acc.military.push(unit);
      else acc.units.push(unit);

      return acc;
    },
    { economy: [], naval: [], defensive: [], religious: [], military: [], units: [] } as Record<string, UnifiedItem<Technology>[]>
  );
}

export function modifierMatches(matcher: Modifier["select"], item: Item | UnifiedItem) {
  const matchesId = matcher.id?.includes(item.id) || matcher.id?.includes((item as Item).baseId);
  const matchesClass = matcher.class?.some((cl) => cl?.every((c) => item.classes.includes(c)));
  return { id: matchesId, class: matchesClass, any: matchesId || matchesClass };
}

export function canonicalItemName(item: Item | UnifiedItem) {
  const group = item.type === "unit" ? "units" : item.type === "building" ? "buildings" : "technologies";
  return `${group}/${"baseId" in item ? item.baseId : item.id}`;
}

export function getItemByCanonicalName(canonicalName: string) {
  const [group, id] = canonicalName.split("/");
  return getItem(group as ITEMS, id);
}
