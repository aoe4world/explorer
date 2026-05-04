import { Building, UnifiedItem, Unit } from "@data/types/items";
export type { CivAbbr, CivConfig } from "@data/lib/config/civs";
export type { Ability, Building, Item, ItemClass, ItemTypes, Modifier, ModifyableProperty, Technology, UnifiedItem, Unit, Upgrade, Weapon } from "@data/types/items";
export { ITEMS } from "@data/types/items";
// @deprecated Use CivAbbr/CivConfig rather than civAbbr/civConfig
export type { CivAbbr as civAbbr, CivConfig as civConfig } from "@data/lib/config/civs";

export type GroupedUnits = Record<"infantry" | "cavalry" | "siege" | "ships" | "workers" | "misc" | "mercenaries" | "hero", UnifiedItem<Unit>[]>;
export type GroupedBuildings = Record<"economy" | "military" | "religious" | "defensive" | "technology" | "landmarks" | "wonders", UnifiedItem<Building>[]>;
