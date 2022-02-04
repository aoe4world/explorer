import { CIVILIZATIONS, ITEMS } from "../config";
import { technologyModifiers } from "../data/technologies";
import { civAbbr, civConfig, Technology, UnifiedItem, Unit } from "../types/data";
import { fetchItem, fetchItems } from "./fetch";

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
const variationMin = (item: UnifiedItem<Unit>, property: keyof Unit) => {
  return item.variations.reduce((min, variation) => {
    return +variation[property] < min ? +variation[property] : min;
  }, Infinity);
};
export function sortUnifiedUnitsByVariation(units: UnifiedItem<Unit>[], keys: (keyof Unit)[]) {
  for (const key of keys) {
    units = units.sort((a, b) => variationMin(a, key) - variationMin(b, key));
  }
  return units;
}

/** Query the technologies that apply to an item and merge them with all technology modifiers */
export async function getItemTechnologies(item: string | UnifiedItem, civ?: civAbbr | civConfig, includeAllCivsUnitSpecificTech = false) {
  const [technologies, unifiedItem] = await Promise.all([
    fetchItems(ITEMS.TECHNOLOGIES),
    typeof item == "string" ? fetchItem(ITEMS.UNITS, item) : item,
  ]);
  const simplifiedClasses = unifiedItem.classes.flatMap((c) => c.split(" ").map((c) => c.toLowerCase()));
  return technologies.reduce((acc, t) => {
    // Todo, reduce over item.variations instead and read 'effects'. Filter by civ
    const modifiers = technologyModifiers[t.id];
    const filteringByCiv = !!civ;
    const variations = t.variations.filter((v) => (filteringByCiv ? v.civs.includes(mapCivsArgument(civ)[0].abbr) : true));
    if (!modifiers || !variations.length) return acc;

    const techMatchesItemId = modifiers.some((m) => m.select.id?.includes(unifiedItem.id));
    const techMatchesItemClass = modifiers.some((m) => m.select.class?.some((cl) => cl.every((c) => simplifiedClasses.includes(c))));
    const appliesToMultipleCivs = t.civs.length > 1;

    if (
      filteringByCiv
        ? techMatchesItemId || techMatchesItemClass
        : // If we're not looking at techs for a specific civ & unit combo
          // we show only techs that match by id, or those that match by class and have multiple civs
          (techMatchesItemId && includeAllCivsUnitSpecificTech) || (techMatchesItemClass && appliesToMultipleCivs)
    ) {
      if (techMatchesItemId) acc.unshift({ ...t, variations });
      else acc.push({ ...t, variations });
    }

    return acc;
  }, [] as UnifiedItem<Technology>[]);
}
