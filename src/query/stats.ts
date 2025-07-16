import { firstBy } from "thenby";
import { ITEMS } from "@data/types/items";
import { SUPPORTED_MODIFIER_PROPERTIES } from "../config";
import { Building, civAbbr, civConfig, Item, Modifier, Technology, UnifiedItem, Unit } from "../types/data";
import { CalculatedStats, Stat, StatPart, StatProperty } from "../types/stats";
import { getItemTechnologies, mapCivsArgument, modifierMatches } from "./utils";
import * as SDK from '@data/sdk';

export function getUnitStats<T extends ITEMS.BUILDINGS | ITEMS.UNITS>(
  type: T,
  unit: string | UnifiedItem<Unit | Building>,
  civ?: civAbbr | civConfig,
  options?: {
    variation?: Unit | Building,
    selectedTechnologies?: string[]
  }
): ReturnType<typeof mergeVariationsToStats> {
  const {variation, selectedTechnologies} = options || {};
  const forCiv = mapCivsArgument(civ);
  const getStats = (unit: UnifiedItem<Unit | Building>) => {
    const combatStats = mergeVariationsToStats(variation ? [variation] : unit.variations.filter((u) => u.civs.some((c) => forCiv.some((fc) => fc.abbr == c))));
    let techs = getItemTechnologies(type, unit, civ);
    if (selectedTechnologies) {
      techs = techs.filter((t) => selectedTechnologies.includes(t.id));
    }

    for (const tech of techs) {
      let lazelyPickJustTheFirst = tech.variations.sort((a, b) => b.civs.length - a.civs.length)[0]; //tech.variations?.[0];
      for (const modifier of lazelyPickJustTheFirst.effects) {
        if (!lazelyPickJustTheFirst) continue;
        if (tech.civs.length > 1) lazelyPickJustTheFirst.unique = false;
        // if (modifier.type == "influence") continue;
        if (!modifierMatches(modifier.select, unit).any) continue;
        if (SUPPORTED_MODIFIER_PROPERTIES.includes(modifier.property as any)) {
          const properties: StatProperty[] = [modifier.property as StatProperty];
          if (modifier.property === "lineOfSight") {
            properties.push("maxLineOfSight");
          }

          for (const property of properties) {
            // Don't add multipliers for props that don't exist, because they wouldn't have an effect. Particularly relevant for techs that give bonus to both Ranged and Siege damage.
            if (modifier.effect === 'multiply' && !combatStats[property]) continue;

            combatStats[property] ??= { category: property, parts: [], modifiers: [], bonus: [] };

            combatStats[property]?.[modifier.type == "bonus" ? "bonus" : "modifiers"].push({
              value: modifier,
              id: tech.id,
              age: lazelyPickJustTheFirst.age,
              variation: lazelyPickJustTheFirst,
            });
          }
        }
      }
    }

    return combatStats;
  };

  if (typeof unit == "string") return getStats(SDK[type].get(unit));
  else return getStats(unit);
}

export function mergeVariationsToStats(variations: (Unit | Building)[]) {
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
        lineOfSight: variation.sight.base / 4,
        maxLineOfSight: variation.sight.line / 4,
      };

      if (variation.type == "unit") stats.moveSpeed = variation.movement.speed;

      const bonus: Modifier[] = [];

      const melee = variation.weapons.find((w) => w?.type == "melee");
      // Only take the first Melee weapon
      const weapons = variation.weapons.filter((w) => w?.type != "melee" || w === melee);

      for (const w of weapons) {
        if (!w) continue;
        const burst = 1; //w.burst?.count ?? 1;
        // We assume there's only one weapon per type per variation, for now.
        // Edit 11-10-2022: Oh boy was I wrong.
        // Edit 9-11-2023: Yep.
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

      if (variation.resistance) {
        for (const a of variation.resistance) {
          // We assume there's only one resistance type per variation, for now.
          if (a.type == "melee") stats.meleeResistance = a.value;
          else if (a.type == "ranged") stats.rangedResistance = a.value;
        }
      }

      return [variation, stats, bonus] as [typeof variation, typeof stats, Modifier[]];
    })
    .reduce((total, [variation, stats, bonus], i, arr) => {
      for (const [cat, value] of Object.entries(stats)) {
        const previousAgeValue = arr[i - 1]?.[1][cat] ?? 0;
        (total[cat as StatProperty] ??= { category: cat as StatProperty, parts: [], modifiers: [], bonus: [] }).parts.push({
          value: value - previousAgeValue,
          id: variation.id,
          age: variation.age,
          variation: variation,
          type: previousAgeValue ? "upgrade" : "base",
        });
        if (bonus.length) {
          bonus.forEach((mod, mi) => {
            mod = { ...mod };
            const previousModifierValue = arr[i - 1]?.[2][mi]?.value ?? 0;
            if ((mod.effect as any) == "increase") mod.effect = "change";
            if (previousModifierValue) mod.value = mod.value - previousModifierValue;
            total[cat as StatProperty].bonus.push({ value: mod, id: variation.id, age: variation.age, variation: variation, type: "bonus" });
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
  const round = (val) => (stat.category === "attackSpeed" ? roundToGameTicks(val) : roundToDecimals(val, decimals));
  const parts = stat.parts.sort((a, b) => a.age - b.age).map((p) => ({ ...p, value: p.age > maxAge ? 0 : round(p.value) }));

  let base = parts[0]?.value ?? 0;
  let upgrades = parts.reduce((total, { value }) => total + value, 0) - base;
  let technologies = 0;
  parts.push(
    ...stat.modifiers
      .sort(
        firstBy<StatPart<Modifier>>((a, b) => {
          if (a.value.effect == "multiply") return 1;
          else if (b.value.effect == "multiply") return -1;
          else return a.value.value - b.value.value;
        })
          .thenBy<StatPart<Modifier>>((a, b) => (a.variation?.unique ? 1 : b.variation?.unique ? -1 : 0))
          .thenBy((a, b) => a.age - b.age)
      )
      .reduce((parts, { value: modifier, id, age, variation }) => {
        if (modifier.property != stat.category && (stat.category !== "maxLineOfSight" || modifier.property !== "lineOfSight")) return parts;
        if (item && !modifierMatches(modifier.select, item).any) return parts;
        if (modifier.type == "ability" || modifier.type == "influence") return parts;
        let value = 0;
        if (age <= maxAge) {
          if (modifier.effect == "multiply") {
            value = (modifier.value - 1) * (base + upgrades + technologies);
          } else if (modifier.effect == "change") value = modifier.value;
        }
        technologies += value;
        parts.push({ value: round(value), id, age, variation, type: "technology" });
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
      ...stat.bonus?.reduce((parts, { value: modifier, id, age, variation }) => {
        if (modifier.property != stat.category) return parts;
        if (target && !modifierMatches(modifier.target, target).any) return parts;
        if (modifier.type == "ability" || modifier.type == "influence") return parts;
        let value = 0;
        if (age <= maxAge) {
          if (modifier.effect == "multiply") value = Math.round((modifier.value - 1) * (base + upgrades));
          else if (modifier.effect == "change") value = modifier.value;
        }
        if (target) {
          // If we have a target, we can accumulate them
          maxBonusInAge[age] += value;
        } else if (value > maxBonusInAge[age]) {
          // Otherwise take the max to avoid counting mutually exclusive bonuses.
          maxBonusInAge[age] = value;
        }
        const tryCreateVsBonusName = [
          ...(modifier.target?.id ?? []),
          ...(modifier.target?.class ?? []).map((c) => c.flatMap((x) => x.split("_")).join(" ")),
        ].join(", ");
        parts.push({ value: round(value), id, age, variation, type: "bonus", label: `Bonus damage vs ${tryCreateVsBonusName}` });
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
