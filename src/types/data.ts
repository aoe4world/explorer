import { Building, UnifiedItem, Unit } from "@data/types/items";
export type { Item, Unit, Building, UnifiedItem, Upgrade, Technology, Modifier } from "@data/types/items";
export type { CivAbbr as civAbbr, CivConfig as civConfig } from "@data/types/civs";

export type GroupedUnits = Record<"infantry" | "cavalry" | "siege" | "ships" | "workers" | "misc" | "mercenaries" | "hero", UnifiedItem<Unit>[]>;
export type GroupedBuildings = Record<"economy" | "military" | "religious" | "defensive" | "technology" | "landmarks" | "wonders", UnifiedItem<Building>[]>;
