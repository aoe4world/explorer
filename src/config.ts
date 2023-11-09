import { ModifyableProperty } from "@data/types/items";
export { CIVILIZATIONS } from "@data/lib/config/civs";
export { CIVILIZATION_BY_SLUG } from "@data/types/civs";
export { ITEMS } from "@data/types/items";
export type { Building, ModifyableProperty, Technology, Unit, Upgrade, ItemTypes } from "@data/types/items";

export const SUPPORTED_MODIFIER_PROPERTIES: ModifyableProperty[] = [
  "meleeArmor",
  "meleeAttack",
  "rangedArmor",
  "rangedAttack",
  "fireAttack",
  "fireArmor",
  "siegeAttack",
  "burst",
  "hitpoints",
  "moveSpeed",
  "attackSpeed",
  "lineOfSight",
  "maxRange",
];

export const DATA_ROOT = import.meta.env.DATA_URL && import.meta.env.DEV ? import.meta.env.DATA_URL : "https://data.aoe4world.com/";

export const SIMILAIR_ITEMS = [
  ["archer", "longbowman"],
  ["spearman", "donso"],
  ["knight", "lancer", "royal-knight", "keshik", "sofa"],
  ["scholar", "imam", "monk", "warrior-monk", "shaman", "prelate"],
  ["horse-archer", "mangudai", "camel-archer", "tower-elephant"],
  ["horseman", "ghazi-raider", "sipahi"],
  ["crossbowman", "arbaletrier", "javelin-thrower"],
  ["cannon", "royal-cannon", "bombard", "great-bombard"],
  ["culverin", "royal-culverin"],
  ["streltsy", "handcannoneer", "jannisary", "musofadi-gunner"],
  ["traction-trebuchet", "trebuchet"],
  ["man-at-arms", "palace-guard", "musofadi-warrior", "ghulam"],
  ["trade-ship", "lodya-trade-ship"],
  ["transport-ship", "lodya-transport-ship"],
  ["fishing-boat", "lodya-fishing-boat"],
  ["galley", "dhow", "junk", "hunting-canoe", "light-junk", "lodya-galley"],
  ["hulk", "baghlah", "war-cog", "war-canoe", "lodya-attack-ship", "war-junk"],
  ["demolition-ship", "lodya-demolition-ship", "explosive-junk", "explosive-dhow"],
  ["carrack", "baochuan", "xebec"],
  ["farm", "pasture"],
  ["monastery", "mosque", "prayer-tent"],
  ["hunting-cabin", "mill", "ger"],
  ["palisade-gate", "fortified-palisade-gate"],
  ["palisade-wall", "fortified-palisade-wall"],
  ["outpost", "wooden-fortress", "toll-outpost"],
  ["university", "madrasa"],
];

// Rendering wrong or not fitting model, never include
export const MUTED_UNITS = ["wynguard-army", "khaganate-units"];

export const PRETTY_AGE_MAP = ["", "Age I", "Age II", "Age III", "Age IV"];
export const PRETTY_AGE_MAP_LONG = ["", "Dark Age (I)", "Feudal Age (II)", "Castle Age (III)", "Imperial Age (IV)"];
export const PRETTY_AGE_MAP_SHORT = ["", "I", "II", "III", "IV"];

export const CURATED_CONTENT_API = "https://curated.aoe4world.com/";
