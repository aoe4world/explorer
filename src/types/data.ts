import { UnifiedItem, Unit } from "../../data/.scripts/lib/types/units";
export { Item, Unit, UnifiedItem, Technology, Modifier } from "../../data/.scripts/lib/types/units";
export { civAbbr, civConfig } from "../../../data/.scripts/lib/types/civs";

export type GroupedUnits = Record<"infantry" | "cavalry" | "siege" | "ships" | "workers", UnifiedItem<Unit>[]>;
