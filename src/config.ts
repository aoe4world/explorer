import { CIVILIZATIONS, CIV_ABBR } from "../data/.scripts/lib/config/civs";
import { ModifyableProperty } from "../data/.scripts/lib/types/units";
export { CIVILIZATIONS, CIV_ABBR };
export enum ITEMS {
  UNITS = "units",
  TECHNOLOGIES = "technologies",
}

export const CIVILIZATION_BY_SLUG = {
  english: CIVILIZATIONS.en,
  hre: CIVILIZATIONS.hr,
  french: CIVILIZATIONS.fr,
  chinese: CIVILIZATIONS.ch,
  delhi: CIVILIZATIONS.de,
  abbasid: CIVILIZATIONS.ab,
  mongols: CIVILIZATIONS.mo,
  rus: CIVILIZATIONS.ru,
};

export const SUPPORTED_MODIFIER_PROPERTIES: ModifyableProperty[] = [
  "meleeArmor",
  "meleeAttack",
  "rangedArmor",
  "rangedAttack",
  "siegeAttack",
  "hitpoints",
  "moveSpeed",
  "attackSpeed",
  "lineOfSight",
  "maxRange",
];

export const DATA_ROOT = import.meta.env.DEV ? window.location.origin + "/data/" : "https://data.aoe4world.com/";

export const SIMILAIR_UNITS = [
  ["archer", "longbowman"],
  ["knight", "lancer", "royal-knight"],
  ["scholar", "imam", "monk", "warrior-monk", "shaman", "prelate"],
  ["horse-archer", "mangudai", "camel-archer", "tower-elephant"],
  ["crossbowman", "arbaletrier"],
  ["cannon", "royal-cannon"],
  ["streltsy", "handcannoneer"],
  ["traction-trebuchet", "trebuchet"],
  ["man-at-arms", "palace-guard"],
  ["trade-ship", "lodya-trade-ship"],
  ["transport-ship", "lodya-transport-ship"],
  ["fishing-boat", "lodya-fishing-boat"],
  ["baochuan", "carrack", "xebec"],
  ["war-junk", "baghlah", "hulk"],
  ["junk", "light-junk", "lodya-attack-ship", "dhow", "galley"],
  ["demolition-ship", "lodya-demolition-ship", "explosive-junk", "explosive-dhow"],
];

// Rendering wrong or not fitting model, never include
export const MUTED_UNITS = ["wynguard-army", "khaganate-units"];

export const PRETTY_AGE_MAP = ["", "Age I", "Age II", "Age III", "Age IV"];
