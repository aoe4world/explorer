import { ModifyableProperty } from "../data/src/types/items";
export { CIVILIZATIONS, CIV_ABBR, CIVILIZATION_BY_SLUG } from "../data/src/lib/config/civs";
export { ITEMS } from "../data/src/types/items";
export type { Building, ModifyableProperty, Technology, Unit, Upgrade, ItemTypes } from "../data/src/types/items";

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
  ["knight", "lancer", "royal-knight"],
  ["scholar", "imam", "monk", "warrior-monk", "shaman", "prelate"],
  ["horse-archer", "mangudai", "camel-archer", "tower-elephant"],
  ["crossbowman", "arbaletrier"],
  ["cannon", "royal-cannon", "bombard"],
  ["culverin", "royal-culverin"],
  ["streltsy", "handcannoneer"],
  ["traction-trebuchet", "trebuchet"],
  ["man-at-arms", "palace-guard"],
  ["trade-ship", "lodya-trade-ship"],
  ["transport-ship", "lodya-transport-ship"],
  ["fishing-boat", "lodya-fishing-boat"],
  ["baochuan", "carrack", "xebec"],
  ["farm", "pasture"],
  ["war-junk", "baghlah", "hulk"],
  ["junk", "light-junk", "lodya-attack-ship", "dhow", "galley"],
  ["demolition-ship", "lodya-demolition-ship", "explosive-junk", "explosive-dhow"],
  ["monastery", "mosque", "prayer-tent"],
  ["hunting-cabin", "mill", "ger"],
  ["palisade-gate", "fortified-palisade-gate"],
  ["palisade-wall", "fortified-palisade-wall"],
  ["outpost", "wooden-fortress"],
  ["university", "madrasa"],
];

// Rendering wrong or not fitting model, never include
export const MUTED_UNITS = ["wynguard-army", "khaganate-units"];

export const PRETTY_AGE_MAP = ["", "Age I", "Age II", "Age III", "Age IV"];
export const PRETTY_AGE_MAP_LONG = ["", "Dark Age (I)", "Feudal Age (II)", "Castle Age (III)", "Imperial Age (IV)"];

export const CURATED_CONTENT_API = "https://raw.githubusercontent.com/aoe4world/curated/main/Content.json";
