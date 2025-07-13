import { ModifyableProperty } from "@data/types/items";
export { CIVILIZATIONS } from "@data/lib/config/civs";
export { CIVILIZATION_BY_SLUG } from "@data/types/civs";
export { ITEMS } from "@data/types/items";
export type { Building, ModifyableProperty, Technology, Unit, Upgrade, ItemTypes } from "@data/types/items";

export const SUPPORTED_MODIFIER_PROPERTIES: ModifyableProperty[] = [
  "meleeArmor",
  "meleeAttack",
  "meleeResistance",
  "rangedArmor",
  "rangedAttack",
  "rangedResistance",
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
  ["villager", "dragon-villager"],
  ["archer", "longbowman", "gilded-archer", "yumi-ashigaru", "zhuge-nu"],
  ["spearman", "donso", "gilded-spearman", "limitanei"],
  ["knight", "lancer", "royal-knight", "keshik", "sofa", "gilded-knight", "mounted-samurai", "cataphract", "camel-lancer"],
  ["monk", "scholar", "imam", "dervish", "warrior-monk", "shaman", "prelate", "shinto-priest", "buddhist-monk", "shaolin-monk"],
  ["atabeg", "prelate"],
  ["desert-raider", "camel-rider"],
  ["horse-archer", "mangudai", "camel-archer", "tower-elephant", "onna-musha", "desert-raider"],
  ["horseman", "ghazi-raider", "sipahi", "gilded-horseman"],
  ["jeannes-rider", "yuan-raider"],
  ["crossbowman", "arbaletrier", "javelin-thrower", "gilded-crossbowman"],
  ["cannon", "royal-cannon", "bombard", "great-bombard"],
  ["culverin", "royal-culverin"],
  ["mangonel", "nest-of-bees", "manjaniq"],
  ["battering-ram", "cheirosiphon"],
  ["siege-tower", "tower-of-the-sultan"],
  ["handcannoneer", "streltsy", "jannisary", "musofadi-gunner", "dragon-handcannoneer"],
  ["traction-trebuchet", "trebuchet", "counterweight-trebuchet", "huihui-pao"],
  ["man-at-arms", "palace-guard", "musofadi-warrior", "ghulam", "samurai", "gilded-man-at-arms", "varangian-guard"],
  ["onna-bugeisha", "landsknecht", "gilded-landsknecht"],
  ["trade-ship", "lodya-trade-ship"],
  ["transport-ship", "lodya-transport-ship"],
  ["fishing-boat", "lodya-fishing-boat"],
  ["galley", "dhow", "junk", "hunting-canoe", "light-junk", "lodya-galley"],
  ["hulk", "baghlah", "war-cog", "war-canoe", "lodya-attack-ship", "war-junk"],
  ["demolition-ship", "lodya-demolition-ship", "explosive-junk", "explosive-dhow"],
  ["carrack", "baochuan", "xebec", "atakebune"],
  ["farm", "olive-grove", "pasture"],
  ["monastery", "mosque", "prayer-tent", "shinto-shrine", "buddhist-temple"],
  ["hunting-cabin", "mill", "ger", "farmhouse"],
  ["blacksmith", "forge", "mining-camp"],
  ["palisade-gate", "fortified-palisade-gate"],
  ["palisade-wall", "fortified-palisade-wall"],
  ["outpost", "wooden-fortress", "toll-outpost"],
  ["university", "madrasa"],
  ["castle", "keep"],
];

// Rendering wrong or not fitting model, never include
export const MUTED_UNITS = ["wynguard-army", "khaganate-units"];

export const PRETTY_AGE_MAP = ["", "Age I", "Age II", "Age III", "Age IV"];
export const PRETTY_AGE_MAP_LONG = ["", "Dark Age (I)", "Feudal Age (II)", "Castle Age (III)", "Imperial Age (IV)"];
export const PRETTY_AGE_MAP_SHORT = ["", "I", "II", "III", "IV"];

export const CURATED_CONTENT_API = "https://curated.aoe4world.com/";
