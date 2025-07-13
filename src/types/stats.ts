import { Item, Modifier } from "./data";

/** Normalized stat categories */
export type StatProperty =
  | "meleeArmor"
  | "rangedArmor"
  | "fireArmor"
  | "meleeResistance"
  | "rangedResistance"
  | "meleeAttack"
  | "rangedAttack"
  | "siegeAttack"
  | "bonusAttack"
  | "fireAttack"
  | "hitpoints"
  | "dps"
  | "burst"
  | "attackSpeed"
  | "moveSpeed"
  | "minRange"
  | "maxRange"
  | "lineOfSight"
  | "maxLineOfSight";

export type Stat = {
  category: StatProperty;
  parts: StatPart<number>[];
  modifiers: StatPart<Modifier>[];
  bonus: StatPart<Modifier>[];
};

export type StatPart<T extends number | Modifier> = {
  value: T;
  maxValue?: T;
  id: string;
  age: number;
  variation?: Item;
  type?: "base" | "upgrade" | "technology" | "bonus";
  label?: string;
};

export function isModifier(value: number | Modifier): value is Modifier {
  return typeof value !== "number";
}

export type CalculatedStats = { total: number; base: number; upgrades: number; technologies: number; bonus: number; max: number; parts: StatPart<number>[] };
