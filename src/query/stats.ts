import { firstBy } from "thenby";
import { ITEMS } from "@data/types/items";
import { SUPPORTED_MODIFIER_PROPERTIES } from "../config";
import { Building, civAbbr, civConfig, Item, Modifier, Technology, UnifiedItem, Unit } from "../types/data";
import { CalculatedStats, Stat, StatPart, StatProperty } from "../types/stats";
import { getItemTechnologies, mapCivsArgument, modifierMatches } from "./utils";

export async function getUnitStats<T extends ITEMS.BUILDINGS | ITEMS.UNITS>(
  type: T,
  unit: string | UnifiedItem<Unit | Building>,
  civ?: civAbbr | civConfig
): Promise<ReturnType<typeof mergeVariationsToStats>> {
  const forCiv = mapCivsArgument(civ);
  const getStats = async (unit: UnifiedItem<Unit | Building>) => {
    const combatStats = mergeVariationsToStats(unit.variations.filter((u) => u.civs.some((c) => forCiv.some((fc) => fc.abbr == c))));
    const techs = await getItemTechnologies(type, unit, civ);

    for (const tech of techs) {
      let lazelyPickJustTheFirst = tech.variations.sort((a, b) => b.civs.length - a.civs.length)[0]; //tech.variations?.[0];
      for (const modifier of lazelyPickJustTheFirst.effects) {
        if (!lazelyPickJustTheFirst) continue;
        if (tech.civs.length > 1) lazelyPickJustTheFirst.unique = false;
        // if (modifier.type == "influence") continue;
        if (!modifierMatches(modifier.select, unit).any) continue;
        if (SUPPORTED_MODIFIER_PROPERTIES.includes(modifier.property as any)) {
          combatStats[modifier.property] ??= { category: modifier.property, parts: [], modifiers: [], bonus: [] };

          combatStats[modifier.property]?.[modifier.type == "bonus" ? "bonus" : "modifiers"].push([
            modifier,
            tech.id,
            lazelyPickJustTheFirst.age,
            lazelyPickJustTheFirst,
          ]);
        }
      }
    }

    return combatStats;
  };

  if (typeof unit == "string") return getStats((await import("@data/sdk"))[type].get(unit));
  else return getStats(unit);
}

function mergeVariationsToStats(variations: (Unit | Building)[]) {
  return variations
    .sort(
      firstBy<Unit>((a, b) => a.age - b.age) // Sort by age
        .thenBy<Unit>((a, b) => b.civs.length - a.civs.length) // Sort by civs
        .thenBy((a, b) => a.id.length - b.id.length) // Sort by id length, putting basic varations first
    )
    .filter((v, i, a) => a.findIndex((x) => x.age == v.age) >= i) // Drop variation if there's already one for the same age
    .map((variation) => {
      const stats: Partial<Record<StatProperty, number>> = {
        hitpoints: variation.hitpoints,
        lineOfSight: variation.sight.line / 4.5,
      };

      if (variation.type == "unit") stats.moveSpeed = variation.movement.speed;

      const bonus: Modifier[] = [];

      for (const w of variation.weapons) {
        const burst = 1; //w.burst?.count ?? 1;
        // We assume there's only one weapon per type per variation, for now.
        // Edit 11-10-2022: Oh boy was I wrong.
        if (w.type == "melee") stats.meleeAttack = w.damage * burst;
        else if (w.type == "ranged") stats.rangedAttack = w.damage * burst;
        else if (w.type == "siege") stats.siegeAttack = w.damage * burst;
        else if (w.type == "fire") stats.fireAttack = w.damage * burst;

        if (w.type != "fire" || variation.weapons.length == 1) stats.attackSpeed = w.speed;

        if (w.burst) stats.burst = w.burst.count;

        if (w.type == "siege" || w.type == "ranged") {
          stats.maxRange = w.range.max;
          stats.minRange = w.range.min;
        }

        if (w.modifiers) {
          bonus.push(...w.modifiers);
        }
      }

      for (const a of variation.armor) {
        // We assume there's only one armor type per variation, for now.
        if (a.type == "melee") stats.meleeArmor = a.value;
        else if (a.type == "ranged") stats.rangedArmor = a.value;
        else if (a.type == "fire") stats.fireArmor = a.value;
      }

      return [variation, stats, bonus] as [typeof variation, typeof stats, Modifier[]];
    })
    .reduce((total, [variation, stats, bonus], i, arr) => {
      for (const [cat, value] of Object.entries(stats)) {
        const previousAgeValue = arr[i - 1]?.[1][cat] ?? 0;
        (total[cat as StatProperty] ??= { category: cat as StatProperty, parts: [], modifiers: [], bonus: [] }).parts.push([
          value - previousAgeValue,
          variation.id,
          variation.age,
          variation,
          previousAgeValue ? "upgrade" : "base",
        ]);
        if (bonus.length) {
          bonus.forEach((mod, mi) => {
            mod = { ...mod };
            const previousModifierValue = arr[i - 1]?.[2][mi]?.value ?? 0;
            if ((mod.effect as any) == "increase") mod.effect = "change";
            if (previousModifierValue) mod.value = mod.value - previousModifierValue;
            total[cat as StatProperty].bonus.push([mod, variation.id, variation.age, variation, "bonus"]);
          });
        }
      }
      return total;
    }, {} as Partial<Record<StatProperty, Stat>>);
}

export function roundToDecimals(number: number, decimals: number) {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export function roundToGameTicks(number: number) {
  const tick = 0.125;
  return Math.round(number / tick) * tick;
}

export function calculateStatParts(
  stat: Stat,
  maxAge: number,
  { decimals, target, item }: { decimals?: number; target?: UnifiedItem | Item; item?: UnifiedItem | Item } = { decimals: 0 }
): CalculatedStats {
  if (!stat) return { total: 0, base: 0, upgrades: 0, technologies: 0, bonus: 0, parts: [], max: 0 };
  if (!decimals) decimals = 0;
  const round = (val) => (stat.category == "attackSpeed" ? roundToGameTicks(val) : roundToDecimals(val, decimals));
  const parts = stat.parts.sort((a, b) => a[2] - b[2]).map(([v, i, a, ...r]) => [a > maxAge ? 0 : round(v), i, a, ...r] as StatPart<number>);

  let base = parts[0]?.[0] ?? 0;
  let upgrades = parts.reduce((total, [value]) => total + value, 0) - base;
  let technologies = 0;
  parts.push(
    ...stat.modifiers
      .sort(
        firstBy<StatPart<Modifier>>((a, b) => {
          if (a[0].effect == "multiply") return 1;
          else if (b[0].effect == "multiply") return -1;
          else return a[0].value - b[0].value;
        })
          .thenBy((a, b) => (a[3].unique ? 1 : b[3].unique ? -1 : 0))
          .thenBy((a, b) => a[2] - b[2])
      )
      .reduce((parts, [modifier, id, age, variation]) => {
        if (modifier.property != stat.category) return parts;
        if (item && !modifierMatches(modifier.select, item).any) return parts;
        if (modifier.type == "ability" || modifier.type == "influence") return parts;
        let value = 0;
        if (age <= maxAge) {
          if (modifier.effect == "multiply") {
            value = (modifier.value - 1) * (base + upgrades + technologies);
          } else if (modifier.effect == "change") value = modifier.value;
        }
        technologies += value;
        parts.push([round(value), id, age, variation, "technology"]);
        return parts;
      }, [] as StatPart<number>[])
  );

  let maxBonusInAge = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };
  let bonus = 0;
  if (stat.bonus)
    parts.push(
      ...stat.bonus?.reduce((parts, [modifier, id, age, variation]) => {
        if (modifier.property != stat.category) return parts;
        if (target && !modifierMatches(modifier.target, target).any) return parts;
        if (modifier.type == "ability" || modifier.type == "influence") return parts;
        let value = 0;
        if (age <= maxAge) {
          if (modifier.effect == "multiply") value = Math.round((modifier.value - 1) * (base + upgrades));
          else if (modifier.effect == "change") value = modifier.value;
        }
        if (value > maxBonusInAge[age]) maxBonusInAge[age] = value;
        const tryCreateVsBonusName = [
          ...(modifier.target?.id ?? []),
          ...(modifier.target?.class ?? []).map((c) => c.flatMap((x) => x.split("_")).join(" ")),
        ].join(", ");
        parts.push([round(value), id, age, variation, "bonus", `Bonus damage vs ${tryCreateVsBonusName}`]);
        return parts;
      }, [] as StatPart<number>[])
    );

  bonus = Object.values(maxBonusInAge).reduce((a, b) => a + b, 0);
  base = round(base);
  upgrades = round(upgrades);
  technologies = round(technologies);
  bonus = round(bonus);
  const total = round(base + upgrades + technologies);
  const max = total + bonus;

  return { total, base, upgrades, technologies, bonus, parts, max };
}
