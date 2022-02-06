/** A configuration of technology ids and their modiying effects.
 * Should be moved to a script in aoe4world/data so others can use it as well
 * TODO, finish all commented technologies */
import { Modifier, ModifyableProperty } from "../../data/.scripts/lib/types/units";

// Common class/id presets
const common = {
  allMeleeUnitsExceptSiege: { class: [["melee"]] } as Modifier["select"],
  allNonSiegeUnitsAndBuildings: { class: [["infantry"], ["cavalry"], ["structure"], ["ship"]] } as Modifier["select"],
  allRangedUnitsAndBuildingsExceptSiege: { class: [["ranged"]] } as Modifier["select"],
  allMillitaryShips: { class: [["ship", "attack"], ["ship", "archer"], ["ship", "incendiary"]["warship"]] } as Modifier["select"],
};

export const technologyModifiers: Record<string, Modifier[]> = {
  "arrow-volley": [
    // Longbowmen gain Arrow Volley, an activated ability that increases Longbowmen attack speed by +70%.
    {
      property: "attackSpeed",
      select: { id: ["longbowman"] },
      effect: "multiply",
      value: 1.7,
      type: "ability",
    },
  ],

  "steeled-arrow": [
    // Increase the ranged damage of all non-siege units and buildings by +1.
    {
      property: "rangedAttack",
      select: common.allRangedUnitsAndBuildingsExceptSiege,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "balanced-projectiles": [
    // Increase the ranged damage of all non-siege units and buildings by +1.
    {
      property: "rangedAttack",
      select: common.allRangedUnitsAndBuildingsExceptSiege,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "platecutter-point": [
    // Increase the ranged damage of all non-siege units and buildings by +1.

    {
      property: "rangedAttack",
      select: common.allRangedUnitsAndBuildingsExceptSiege,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "iron-undermesh": [
    // Increase the ranged armor of all non-siege units by +1.

    {
      property: "rangedArmor",
      select: common.allNonSiegeUnitsAndBuildings,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "wedge-rivets": [
    // Increase the ranged armor of all non-siege units by +1.

    {
      property: "rangedArmor",
      select: common.allNonSiegeUnitsAndBuildings,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],
  "angled-surfaces": [
    // Increase the ranged armor of all non-siege units by +1.
    {
      property: "rangedArmor",
      select: common.allNonSiegeUnitsAndBuildings,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "fitted-leatherwork": [
    // Increase the melee armor of all non-siege units by +1.

    {
      property: "meleeArmor",
      select: common.allNonSiegeUnitsAndBuildings,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "insulated-helm": [
    // Increase the melee armor of all non-siege units by +1.

    {
      property: "meleeArmor",
      select: common.allNonSiegeUnitsAndBuildings,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "master-smiths": [
    // Increase the melee armor of all non-siege units by +1.
    {
      property: "meleeArmor",
      select: common.allNonSiegeUnitsAndBuildings,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  bloomery: [
    // Increase the melee damage of all non-siege units by +1.
    {
      property: "meleeAttack",
      select: common.allMeleeUnitsExceptSiege,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "damascus-steel": [
    // Increase the melee damage of all non-siege units by +1.
    {
      property: "meleeAttack",
      select: common.allMeleeUnitsExceptSiege,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  decarbonization: [
    // Increase the melee damage of all non-siege units by +1.
    {
      property: "meleeAttack",
      select: common.allMeleeUnitsExceptSiege,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "military-academy": [
    // Reduce the time it takes to produce infantry, cavalry, siege, and transport units at buildings by -25%.
    // Does not affect religious units or other support units.
    {
      property: "buildTime",
      select: { class: [["infantry"], ["cavalry"], ["siege"], ["transport"]] },
      effect: "multiply",
      value: 0.75,
      type: "passive",
    },
  ],

  /// Common economic tecnologies ––––––––––––––––––––––––––––––––––––

  "crosscut-saw": [
    // Increase Villagers' gathering rate for Wood by +15%.
    {
      property: "woodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  cupellation: [
    // Increase Villagers' gathering rate for Gold and Stone by +15%.
    {
      property: "goldGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
    {
      property: "stoneGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "double-broadaxe": [
    // Increase Villagers' gathering rate for Wood by +15%.
    {
      property: "woodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "drift-nets": [
    // Increase the gathering rate of Fishing Ships by +15% and their carry capacity by  +20.
    {
      property: "goldGatherRate",
      select: { id: ["ships"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "extended-lines": [
    // Increase the gathering rate of Fishing Ships by +20% and their carry capacity by  +10.
    {
      property: "foodGatherRate",
      select: { id: ["fishing-boat", "lodya-fishing-boat"] },
      effect: "multiply",
      value: 1.2,
      type: "passive",
    },
    {
      property: "carryCapacity",
      select: { id: ["fishing-boat", "lodya-fishing-boat"] },
      effect: "multiply",
      value: 1.1,
      type: "passive",
    },
  ],

  horticulture: [
    // Increase Villagers' gathering rate for Food by +15%.
    {
      property: "foodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  fertilization: [
    // Increase Villagers' gathering rate for Food by +15%.
    {
      property: "foodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  forestry: [
    // Double the rate at which Villagers chop down trees.
    {
      property: "unknown",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 2,
      type: "passive",
    },
  ],

  "acid-distilization": [
    // Increase Villagers' gathering rate for Gold and Stone by +15%.
    {
      property: "goldGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
    {
      property: "stoneGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "specialized-pick": [
    // Increase Villagers' gathering rate for Gold and Stone by +15%.
    {
      property: "goldGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
    {
      property: "stoneGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "survival-techniques": [
    // Increase Villagers' hunted meat carry capacity by +10 and hunted meat gather rate by  +15%.
    {
      property: "huntCarryCapacity",
      select: { id: ["villager"] },
      effect: "change",
      value: 10,
      type: "passive",
    },
    {
      property: "huntGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  wheelbarrow: [
    // Increase the carry capacity of Villagers by +5 and their movement speed by  +15%.
    {
      property: "carryCapacity",
      select: { id: ["villager"] },
      effect: "change",
      value: 5,
      type: "passive",
    },
    {
      property: "moveSpeed",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "lumber-preservation": [
    // Increase Villagers' gathering rate for Wood by +15%.
    {
      property: "woodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "precision-cross-breeding": [
    // Increase Villagers' gathering rate for Food by +15%.
    {
      property: "foodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "ancient-techniques": [
    // Increase the gathering rate of Villagers by +5% for each dynasty achieved.
    {
      property: "foodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.05,
      type: "passive",
    },
    {
      property: "huntGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.05,
      type: "passive",
    },
    {
      property: "goldGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.05,
      type: "passive",
    },
    {
      property: "stoneGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.05,
      type: "passive",
    },
    {
      property: "woodGatherRate",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.05,
      type: "passive",
    },
  ],

  /// Unit technologies –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  "setup-camp": [
    // Longbowmen gain the ability to Setup Camp, which heals them for +1 health every 1 seconds.
    {
      property: "hitpoints",
      select: { id: ["longbowman"] },
      effect: "change",
      value: 1,
      type: "ability",
    },
  ],

  "armor-clad": [
    // Increase the ranged and melee armor of Men-at-Arms by +2.
    {
      property: "rangedArmor",
      select: { id: ["man-at-arms"] },
      effect: "change",
      value: 2,
      type: "passive",
    },
    {
      property: "meleeArmor",
      select: { id: ["man-at-arms"] },
      effect: "change",
      value: 2,
      type: "passive",
    },
  ],

  enclosures: [
    // Each Farm Enclosure being worked by a Villager generates +1 Gold every  3.5 seconds.
    {
      property: "goldGatherRate",
      select: { id: ["villager"] },
      effect: "change",
      value: 0.29,
      type: "influence",
    },
  ],

  "network-of-citadels": [
    // Increase the Network of Castles attack speed bonus from +25% to 50%.
    {
      property: "attackSpeed",
      select: { class: [["infantry"]] },
      effect: "change",
      value: 1.2, // 1.25 * 1.2 = 1.5
      type: "influence",
    },
  ],

  "shattering-projectiles": [
    // Trebuchet projectiles shatter on impact, increasing their area of effect.
    {
      property: "unknown",
      select: { id: ["trebuchet"] },
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  shipwrights: [
    // Reduce the cost of ships by -10%.
    {
      property: "woodCost",
      select: { class: [["ship"], ["warship"]] },
      effect: "multiply",
      value: 0.9,
      type: "passive",
    },
    {
      property: "goldCost",
      select: { class: [["ship"], ["warship"]] },
      effect: "multiply",
      value: 0.9,
      type: "passive",
    },
  ],

  benediction: [
    // Inspired Villagers construct +15% faster.
    {
      property: "buildTime", // Todo, branch out?
      select: { class: [["structure"]] },
      effect: "multiply",
      value: 1.15,
      type: "influence",
    },
  ],

  devoutness: [
    // Inspired Villagers gather resources +10% faster.
    {
      property: "goldGatherRate",
      select: { id: ["villagers"] },
      effect: "multiply",
      value: 1.1,
      type: "influence",
    },
    {
      property: "foodGatherRate",
      select: { id: ["villagers"] },
      effect: "multiply",
      value: 1.1,
      type: "influence",
    },
    {
      property: "woodGatherRate",
      select: { id: ["villagers"] },
      effect: "multiply",
      value: 1.1,
      type: "influence",
    },
    {
      property: "stoneGatherRate",
      select: { id: ["villagers"] },
      effect: "multiply",
      value: 1.1,
      type: "influence",
    },
  ],

  "fire-stations": [
    // Increase the repair rate of Docks by +100%.
    {
      property: "repairRate",
      select: { id: ["dock"] },
      effect: "multiply",
      value: 2,
      type: "passive",
    },
  ],

  "heavy-maces": [
    // Men-at-Arms wield maces, increasing their bonus damage against heavy targets by +6.
    {
      property: "meleeAttack", // TODO, only against heavy targets
      select: { id: ["man-at-arms"] },
      effect: "change",
      value: 1,
      type: "ability",
    },
  ],

  "inspired-warriors": [
    // Prelates can inspire military units, improving their armor by +1 and damage by  +15%.
    {
      property: "rangedArmor",
      select: { class: [["cavalry"], ["infantry"]] },
      effect: "change",
      value: 1,
      type: "influence",
    },
    {
      property: "meleeArmor",
      select: { class: [["cavalry"], ["infantry"]] },
      effect: "change",
      value: 1,
      type: "influence",
    },
    {
      property: "meleeAttack",
      select: {
        class: [
          ["cavalry", "melee"],
          ["infantry", "melee"],
        ],
      },
      effect: "multiply",
      value: 1.15,
      type: "influence",
    },
    {
      property: "rangedAttack",
      select: {
        class: [
          ["cavalry", "ranged"],
          ["infantry", "ranged"],
        ],
      },
      effect: "multiply",
      value: 1.15,
      type: "influence",
    },
  ],

  "marching-drills": [
    // Increase the movement speed of infantry by +10%.
    {
      property: "moveSpeed",
      select: { class: [["infantry"]] },
      effect: "multiply",
      value: 1.1,
      type: "passive",
    },
  ],

  "reinforced-defenses": [
    // Increase the health of walls, towers, and gates by +40%.
    {
      property: "hitpoints",
      select: { class: [["wall"], ["tower"], ["gate"]] },
      effect: "multiply",
      value: 1.4,
      type: "passive",
    },
  ],

  "riveted-chain-mail": [
    // Increase the melee armor of Spearmen by +3.
    {
      property: "meleeArmor",
      select: { id: ["spearman"] },
      effect: "change",
      value: 3,
      type: "passive",
    },
  ],

  "siege-engineering": [
    // Melee and ranged infantry can construct Siege Towers and Battering Rams in the field.
    {
      property: "",
      select: { class: [["infantry"]] },
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "slate-and-stone-construction": [
    // All buildings gain +5 fire armor.
    {
      property: "fireArmor",
      select: { class: [["structure"]] },
      effect: "change",
      value: 5,
      type: "passive",
    },
  ],

  "two-handed-weapon": [
    // Men-at-Arms wield two-handed weapons, increasing their damage by +2.
    {
      property: "meleeAttack",
      select: { id: ["man-at-arms"] },
      effect: "change",
      value: 2,
      type: "passive",
    },
  ],

  "cantled-saddles": [
    // Increase Royal Knights' bonus damage after a charge by +10.
    {
      property: "meleeAttack",
      select: { id: ["royal-knight"] },
      effect: "multiply",
      value: 1.1,
      type: "ability",
    },
  ],

  chivalry: [
    // Royal Knights regenerate +1 health every  1s seconds when out of combat.
    {
      property: "healingRate",
      select: { id: ["royal-knight"] },
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "crossbow-stirrups": [
    // Reduce the reload time of Arbalétriers by -25%.
    {
      property: "attackSpeed",
      select: { id: ["arbaletrier"] },
      effect: "multiply",
      value: 0.75,
      type: "passive",
    },
  ],

  //   "enlistment-incentives": [
  //     // Improves the French influence by reducing unit costs by a further -10%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  gambesons: [
    // Increase Arbalétrier melee armor by +5.
    {
      property: "meleeArmor",
      select: { id: ["arbaletrier"] },
      effect: "change",
      value: 5,
      type: "passive",
    },
  ],

  //   "long-guns": [
  //     // Increase the damage of naval cannons by +10%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "royal-bloodlines": [
    // Increase the health of all cavalry by +35%.
    {
      property: "hitpoints",
      select: { class: [["cavalry"]] },
      effect: "multiply",
      value: 1.35,
      type: "passive",
    },
  ],

  "additional-sails": [
    // Increase the movement speed of all ships by +15%.
    {
      property: "moveSpeed",
      select: { class: [["ship"], ["warship"]] },
      effect: "multiply",
      value: 1.15,
      type: "passive",
    },
  ],

  "battle-hardened": [
    // Increase the health of Palace Guards by +30.
    {
      property: "hitpoints",
      select: { id: ["palace-guard"] },
      effect: "change",
      value: 30,
      type: "passive",
    },
  ],

  "chaser-cannons": [
    // Increase the weapon range of Warships by +1 tiles.
    {
      property: "maxRange",
      select: { class: [["warship"]] },
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  explosives: [
    // Increase the damage of Incendiary Ships by +40%.
    {
      property: "fireAttack",
      select: { class: [["incendiary", "ship"]] },
      effect: "multiply",
      value: 1.4,
      type: "passive",
    },
  ],

  // TODO: In reality is adding an extra weapon, not modifiying the existing one.
  "extra-ballista": [
    // Adds a swivel ballista to Attack Ships.
    // Swivel ballistae can fire in any direction and deal 15 damage.
    {
      property: "rangedAttack",
      select: { class: [["attack", "ship"]] },
      effect: "change",
      value: 15,
      type: "passive",
    },
  ],

  // This comes down to 200%  "Shoots 2x2 arrows (burst) per atk, arrow = 8 dmg. 1 atk = 4 arrows, 4x8 = 32 dmg."
  "extra-hammocks": [
    // Junks of the Archer Ship type gain additional crew, allowing them to fire two more arrows in each volley.
    {
      property: "rangedAttack",
      select: { id: ["junk"] },
      effect: "multiply",
      value: 2,
      type: "passive",
    },
  ],

  //   "extra-materials": [
  //     // Stone Wall Towers and Outposts repair nearby damaged Stone Walls. A single section is repaired at a time for +20 health per second.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "imperial-examination": [
  //     // Increase the maximum amount of Gold carried by Imperial Officials from +20 to undefined
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "navigator-lookout": [
    // Increase the sight range of military ships by +2 and their weapon range by  +1.
    {
      property: "lineOfSight",
      select: common.allMillitaryShips,
      effect: "change",
      value: 2,
      type: "passive",
    },
    {
      property: "maxRange",
      select: common.allMillitaryShips,
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  //   pyrotechnics: [
  //     // Increase the range of gunpowder units by +20%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "reload-drills": [
  //     // Reduce the reload time of Bombards by -33%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "reusable-barrels": [
  //     // Reduce the cost of Nest of Bees by -25%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "adjustable-crossbars": [
  //     // Reduce the reload time of Mangonels by -25%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "all-seeing-eye": [
  //     // Increase the sight range of Scholars by +100%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "armored-beasts": [
    // Grant +2 armor to War Elephants and Tower War Elephants.
    {
      property: "meleeArmor",
      select: { id: ["war-elephant", "tower-elephant"] },
      effect: "change",
      value: 2,
      type: "passive",
    },
    {
      property: "rangedArmor",
      select: { id: ["war-elephant", "tower-elephant"] },
      effect: "change",
      value: 2,
      type: "passive",
    },
  ],

  "armored-hull": [
    // Increase the armor of all military ships by +2.
    {
      property: "rangedArmor",
      select: common.allMillitaryShips,
      effect: "change",
      value: 2,
      type: "passive",
    },
    {
      property: "meleeArmor",
      select: common.allMillitaryShips,
      effect: "change",
      value: 2,
      type: "passive",
    },
  ],

  biology: [
    // Increase the health of all cavalry by +20%.
    {
      property: "hitpoints",
      select: { class: [["cavalry"]] },
      effect: "multiply",
      value: 1.2,
      type: "passive",
    },
  ],

  //   "boiling-oil": [
  //     // Towers and Keeps gain a boiling oil attack against nearby units that deals  damage.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   chemistry: [
  //     // Increase the damage of gunpowder units by +20%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "court-architects": [
  //     // Increase the health of all buildings by +30%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "efficient-production": [
  //     // Allow Scholars to garrison in military buildings, boosting production speed by +100%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "elite-army-tactics": [
  //     // Increase the health of all melee infantry by +20% and their damage by undefined.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "forced-march": [
  //     // Infantry units gain the Forced March ability.
  //     // This ability makes them move +100% faster for  10 seconds, but they cannot attack while it is active.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  geometry: [
    // Increase the damage of Rams and Trebuchets +30%.
    {
      property: "siegeAttack",
      select: { id: ["battering-ram", "trebuchet"] },
      effect: "multiply",
      value: 1.3,
      type: "passive",
    },
  ],

  //   "greased-axles": [
  //     // Increase the movement speed of siege engines by +20%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "hearty-rations": [
  //     // Increase the carrying capacity of Villagers by +5.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "herbal-medicine": [
  //     // Increase the healing rate of religious units by +100%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "honed-blades": [
  //     // Increase the melee damage of Men-at-Arms and Knights by +3.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "incendiary-arrows": [
  //     // Increase the damage of ranged units and buildings by +20%. Does not apply to gunpowder units.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "lookout-towers": [
  //     // Increase the sight range of Outposts by 50%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "patchwork-repairs": [
    // Increase the repair rate of Fishing Ships by +100%.
    {
      property: "repairRate",
      select: { id: ["fishing-boat", "lodya-fishing-boat"] },
      effect: "multiply",
      value: 1,
      type: "passive",
    },
  ],

  //   piety: [
  //     // Increase the health of religious units by +40.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "professional-scouts": [
  //     // Scouts gain the ability to carry animal carcasses and +200% damage against wild animals.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "reinforced-foundations": [
  //     // Houses and Town Centers grant an additional +5 maximum Population.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "roller-shutter-triggers": [
  //     // Increase the weapon range of Springalds by +2 tiles and reduce their reload time by  +25%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   sanctity: [
  //     // Allow Scholars to capture Sacred Sites before the Castle Age (III). Sacred Sites generate +100% more Gold.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "siege-elephant": [
  //     // Upgrade Tower War Elephants to have Elite Crossbowmen as riders instead of Archers.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "siege-works": [
    // Increase the health of siege engines by +20% and their ranged armor by  +3.
    {
      property: "hitpoints",
      select: { class: [["siege"]] },
      effect: "multiply",
      value: 1.2,
      type: "passive",
    },
    {
      property: "rangedArmor",
      select: { class: [["siege"]] },
      effect: "change",
      value: 3,
      type: "passive",
    },
  ],

  //   "slow-burning-defenses": [
  //     // Increase the fire armor of Stone Wall Towers, Keeps, and Outposts by +10.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  swiftness: [
    // Increase the movement speed of Scholars by +100%.
    {
      property: "moveSpeed",
      select: { id: ["scholar"] },
      effect: "multiply",
      value: 2,
      type: "passive",
    },
  ],

  textiles: [
    // Increase Villagers' health by +25.
    {
      property: "hitpoints",
      select: { id: ["villager"] },
      effect: "multiply",
      value: 1.25,
      type: "passive",
    },
  ],

  //   "tithe-barns": [
  //     // Relics placed in a Monastery provide an income of +30 Food, undefined Wood, and undefined Stone every minute.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "tranquil-venue": [
  //     // Mosques restore +1 health to nearby unit every second.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "village-fortresses": [
  //     // Keeps act like Town Centers, including unit production, population capacity, and technology.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   zeal: [
  //     // Units healed by Scholars gain +50% attack speed for  3 seconds.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   agriculture: [
  //     // Improve Villagers' gathering rate from Farms by +15%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "armored-caravans": [
    // Grant +5 armor to Traders and Trade Ships.
    {
      property: "meleeArmor",
      select: { id: ["trader", "trade-ship"] },
      effect: "change",
      value: 5,
      type: "passive",
    },
    {
      property: "rangedArmor",
      select: { id: ["trader", "trade-ship"] },
      effect: "change",
      value: 5,
      type: "passive",
    },
  ],

  "boot-camp": [
    // Increase the health of all infantry by +15%.
    {
      property: "hitpoints",
      select: { class: [["infantry"]] },
      effect: "multiply",
      value: 1,
      type: "passive",
    },
  ],

  "camel-barding": [
    // Increase the armor of camel units by +2.
    {
      property: "meleeArmor",
      select: { id: ["camel-rider", "camel-archer"] },
      effect: "change",
      value: 2,
      type: "passive",
    },
    {
      property: "rangedArmor",
      select: { id: ["camel-rider", "camel-archer"] },
      effect: "change",
      value: 2,
      type: "passive",
    },
  ],

  //   "camel-handling": [
  //     // Increase the movement speed of camel units by +15%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "camel-rider-shields": [
    // Grant Camel Riders shields, improving their melee armor by +3.
    {
      property: "meleeArmor",
      select: { id: ["camel-rider"] },
      effect: "change",
      value: 3,
      type: "passive",
    },
  ],

  //   "camel-support": [
  //     // Camels increase the armor of nearby infantry by +1.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "composite-bows": [
  //     // Reduce the reload time of Archers by -25%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "culture-wing": [
  //     // Constructs the Culture Wing.
  //     // The following cultural technologies become available:
  //     // • Preservation of Knowledge (Feudal Age)
  //     // • Medical Centers (Castle Age)
  //     // • Faith (Imperial Age)
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "economic-wing": [
  //     // Constructs the Economic Wing.
  //     // The following economic technologies become available:
  //     // • Fresh Foodstuffs (Feudal Age)
  //     // • Agriculture (Castle Age)
  //     // • Improved Processing (Imperial Age)
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   faith: [
  //     // Imams can convert units without holding a Relic, but can only target a single unit.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "fresh-foodstuffs": [
  //     // Reduce the cost to produce Villagers by -50%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "grand-bazaar": [
  //     // Traders also return with a secondary resource. This resource is 0.25 the base Gold value and is set at the market.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "improved-processing": [
  //     // Villagers drop off +8% more resources.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "medical-centers": [
  //     // Keeps heal nearby units for +2 health every  1s second.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "military-wing": [
  //     // Constructs the Military Wing.
  //     // The following military technologies become available:
  //     // • Camel Support (Feudal Age)
  //     // • Camel Rider Shields (Castle Age)
  //     // • Boot Camp (Imperial Age)
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   phalanx: [
  //     // Increase the attack range of Spearmen by +100%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "preservation-of-knowledge": [
  //     // Reduce the cost of all technology by -30%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "spice-roads": [
  //     // Increase the Gold income from Traders by +30%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "teak-masts": [
  //     // Increase the health of Dhows by +100.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "trade-wing": [
  //     // Constructs the Trade Wing.
  //     // The following trade technologies become available:
  //     // • Spice Roads (Feudal Age)
  //     // • Armored Caravans (Castle Age)
  //     // • Grand Bazaar (Imperial Age)
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "additional-torches": [
  //     // Increase the torch damage of all infantry and cavalry by +5.
  //     // If Additional Torches has already been researched, increase the torch damage from all infantry and cavalry by  +2.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "monastic-shrines": [
  //     // Monasteries allow Improved Production in their districts even without an Ovoo.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  // Todo, improve
  piracy: [
    // Gain +50 Wood and  +50 Gold when sinking an enemy ship.
    {
      property: "unknown" as ModifyableProperty,
      select: { class: [["ship"]] },
      effect: "change",
      value: 50,
      type: "ability",
    },
  ],

  //   "raid-bounty": [
  //     // Increase the raid income for igniting a building to +75 Food and Gold.
  //     // If Raid Bounty has already been researched, increase the raid income for igniting a building by  +25 Food and Gold.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "siha-bow-limbs": [
    // Increase the ranged damage of Mangudai and the Khan by +1.
    {
      property: "rangedAttack",
      select: { id: ["khan", "mangudai"] },
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  //   "stone-bounty": [
  //     // Add +125 Stone to the raid income for igniting a building.
  //     // If Stone Bounty has already been researched, add  +50 Stone to the raid income for igniting a building.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "stone-commerce": [
  //     // Having 9 or more active Traders causes them to supply an increased amount of Stone as well as Gold.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "superior-mobility": [
  //     // Packed buildings move and pack/unpack 50% faster.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "whistling-arrows": [
  //     // Increase the Khan's Signal Arrow duration by +7 seconds and range by  +3 tiles.
  //     // If Whistling Arrows has already been researched, increase the Khan's Signal Arrow duration by  +2 seconds and range by  +1 tile.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "yam-network": [
  //     // Yam speed aura applies to all units instead of just Traders and cavalry units.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "banded-arms": [
  //     // Increase the range of Springald by +1.5 tiles.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "blessing-duration": [
  //     // Increase the duration of Saint's Blessing by 10 seconds.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "boyars-fortitude": [
    // Increase the health of Rus cavalry by +20.
    {
      property: "hitpoints",
      select: { class: [["cavalry"]] },
      effect: "change",
      value: 20,
      type: "passive",
    },
  ],

  "cedar-hulls": [
    // Increase the health of Lodya Attack Ships by +200 and their ranged armor by  +1.
    {
      property: "hitpoints",
      select: { id: ["lodya-attack-ship"] },
      effect: "change",
      value: 200,
      type: "passive",
    },
    {
      property: "rangedArmor",
      select: { id: ["lodya-attack-ship"] },
      effect: "change",
      value: 1,
      type: "passive",
    },
  ],

  "clinker-construction": [
    // Increase the health of Lodya Attack Ships by +200.
    {
      property: "hitpoints",
      select: { id: ["lodya-attack-ship"] },
      effect: "change",
      value: 200,
      type: "passive",
    },
  ],

  //   "double-time": [
  //     // Streltsy gain the Double Time ability, which increases their movement speed by +30% and speeds up their Static Deployment time by  +50% for  10 seconds.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "fine-tuned-guns": [
  //     // Reduce the reload time of Bombards by -25%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "improved-blessing": [
  //     // Improve the damage granted by Saint's Blessing by +1.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "knight-sabers": [
    // Increase the melee damage of Knights by +4.
    {
      property: "meleeAttack",
      select: { id: ["knight"] },
      effect: "change",
      value: 4,
      type: "passive",
    },
  ],

  //   "mounted-precision": [
  //     // Increases the Horse Archers weapon range by %?%.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "saints-reach": [
  //     // Increase the range of Saint's Blessing by 3 tiles.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  //   "siege-crew-training": [
  //     // Setup and teardown speed of Trebuchets and Magonels is instant.
  //     {
  //       property: "",
  //       select: { class: [[]] },
  //       effect: "change",
  //       value: 1,
  //     },
  //   ],

  "wandering-town": [
    // Ram damage increased by +100%.
    {
      property: "siegeAttack",
      select: { id: ["battering-ram"] },
      effect: "multiply",
      value: 2,
      type: "passive",
    },
  ],
};
