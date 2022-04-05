import { PatchNotes } from "../../types/patches";

const s1: PatchNotes = {
  id: "season-1",
  name: "Season One Update",
  date: "...",
  summary: "...",
  sections: [
    {
      title: "All Civilizations",
      civs: [],
      changes: [],
    },
    {
      subtitle: "Core Units",
      civs: ["ab", "mo"],
      changes: [
        // All units

        {
          // Field construction build time of Springald increased from 30 to 80 seconds
          items: ["units/springald"],
          civs: ["ab", "mo"],
          diff: [["nerf", "Field construction time increased from 30 to 80 seconds"]],
        },

        {
          // Field construction build time of Mangonel increased from 40 to 80 seconds
          items: ["units/mangonel"],
          civs: ["ab", "mo"],
          diff: [["nerf", "Field construction time increased from 40 to 80 seconds"]],
        },
        {
          // Field construction build time of Traction Trebuchet increased from 35 to 80 seconds
          items: ["units/traction-trebuchet"],
          civs: ["mo"],
          diff: [["nerf", "Field construction time increased from 35 to 80 seconds"]],
        },
      ],
    },
    {
      subtitle: "Economy",
      civs: [],
      changes: [
        {
          // Scout hunting bow reload time reduced from 2 to 1 second
          // Scout melee weapon cool down reduced from 4 to 2 seconds
          // Scout melee weapon damage reduced from 4 to 2
          items: ["units/scout"],
          civs: [],
          diff: [
            ["buff", "Hunting bow reload time reduced from 2 to 1 second"],
            ["buff", "Melee weapon cool down reduced from 4 to 2 seconds"],
            ["buff", "Melee weapon damage reduced from 4 to 2"],
          ],
        },

        {
          // Villager hunted meat carry capacity increased from 10 to 25
          items: ["units/villager"],
          civs: [],
          diff: [["buff", "Villager hunted meat carry capacity increased from 10 to 25"]],
        },

        {
          // Survival Techniques hunted meat carry capacity bonus removed
          // Survival Techniques hunted meat harvest rate increased from 10% to 15%
          // Survival Techniques research time reduced from 75 to 45 seconds
          items: ["technologies/survival-techniques"],
          civs: [],
          diff: [
            ["nerf", "Hunted meat carry capacity bonus removed"],
            ["buff", "Hunted meat harvest rate increased from 10% to 15%"],
            ["buff", "Research time reduced from 75 to 45 seconds"],
          ],
        },
      ],
    },
    {
      subtitle: "Naval",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [
            ["fix", "Improved the responsiveness of small and medium ships"],
            ["nerf", "Arrow ships can no longer fire while moving"],
            [
              "fix",
              "Updated the selection area for all fishing deposits to match the visual. This also resolves issues where deep fish became harder to select as the resource was depleted.",
            ],
            ["fix", "Galley, Dhow and Junk help text updated to specifically indicate they benefit from ranged damage Blacksmith technology"],
          ],
        },
        {
          // Extended Lines research time reduced from 75 to 45 seconds
          items: ["technologies/extended-lines"],
          civs: [],
          diff: [["buff", "Research time reduced from 75 to 45 seconds"]],
        },
        {
          // Drift Nets research time reduced 75 to 45 seconds
          items: ["technologies/drift-nets"],
          civs: [],
          diff: [["buff", "Research time reduced from 75 to 45 seconds"]],
        },
        {
          // Naval Navigator no longer gives +1 weapon range, increased sight range improvement from 1 to 4 tiles
          items: ["technologies/navigator-lookout"],
          civs: [],
          diff: [
            ["nerf", "No longer gives +1 weapon range"],
            ["buff", "Increased sight range improvement from 1 to 4 tiles"],
          ],
        },
        {
          // Arrow ships can no longer fire while moving
          items: ["units/lodya-attack-ship", "units/light-junk", "units/dhow"],
          civs: [],
          diff: [["nerf", "Can no longer fire while moving"]],
        },

        {
          // Galley Population reduced from 4 to 3
          // Galley, Dhow and Junk help text updated to specifically indicate they benefit from ranged damage Blacksmith technology
          // Arrow ships can no longer fire while moving

          items: ["units/galley"],
          civs: [],
          diff: [
            ["nerf", "Can no longer fire while moving"],
            ["buff", "Population reduced from 4 to 3"],
          ],
        },

        {
          // Junk Population reduced from 4 to 2
          // Arrow ships can no longer fire while moving
          items: ["units/junk"],
          civs: [],
          diff: [
            ["nerf", "Can no longer fire while moving"],
            ["buff", "Population reduced from 4 to 2"],
          ],
        },

        {
          // Galleass Population reduced from 6 to 5
          items: ["units/galleass"],
          civs: [],
          diff: [["buff", "Population reduced from 6 to 5"]],
        },
        {
          // Attack Ship ranged armor reduced by 1, except for the French Hulk
          items: ["units/lodya-attack-ship", "units/war-junk"],
          civs: [],
          diff: [["nerf", "Ranged armor reduced by 1"]],
        },
        {
          // Attack Ship ranged armor reduced by 1, except for the French Hulk
          items: ["units/hulk"],
          civs: ["en", "hr"],
          diff: [["nerf", "Hulk Ranged armor reduced by 1, except for French Hulk"]],
        },

        {
          // Attack Ship ranged armor reduced by 1, except for the French Hulk
          // Baghlah springald weapon damage increased from 50 to 70
          // Baghlah attack speed reduced from 3.25 to 3.75 seconds
          items: ["units/baghlah"],
          civs: [],
          diff: [
            ["nerf", "Ranged armor reduced by 1"],
            ["buff", "Springald weapon damage increased from 50 to 70"],
            ["nerf", "Attack speed reduced from 3.25 to 3.75 seconds"],
          ],
        },

        {
          // Warship formation spacing reduced from 4.5 to 3 tiles
          items: ["units/carrack", "units/baochuan", "units/xebec"],
          civs: [],
          diff: [["buff", "Warship formation spacing reduced from 4.5 to 3 tiles"]],
        },

        {
          // Baochuan weapon range reduced from 9 to 8 tiles
          items: ["units/baochuan"],
          civs: ["ch", "mo"],
          diff: [["nerf", "Weapon range reduced from 9 to 8 tiles"]],
        },
      ],
    },
    {
      subtitle: "Core Buildings & Upgrades",
      civs: [],
      changes: [
        {
          // Buildings under construction receive 50% more damage
          items: [],
          civs: [],
          diff: [["nerf", "Buildings under construction receive 50% more damage"]],
        },

        {
          // Stone Wall Tower build time increased from 60 to 90 seconds
          items: ["buildings/stone-wall-tower"],
          civs: ["ab", "de", "en", "fr", "hr", "mo", "ru"],
          diff: [["nerf", "Stone Wall Tower build time increased from 60 to 90 seconds"]],
        },
        {
          // Keep build time increased from 120 to 140 seconds
          items: ["buildings/keep"],
          civs: [],
          diff: [["nerf", "Keep build time increased from 120 to 140 seconds"]],
        },

        {
          // Boiling Oil cost increased from 250 Gold, 100 Stone to 500 Gold, 200 Stone
          // Boiling Oil research time increased from 60 to 90 seconds
          items: ["technologies/boiling-oil"],
          civs: [],
          diff: [
            ["nerf", "Cost increased from 250 Gold, 100 Stone to 500 Gold, 200 Stone"],
            ["nerf", "Research time increased from 60 to 90 seconds"],
          ],
        },

        {
          // Greased Axles movement speed bonus reduced from 20% to 15%
          items: ["technologies/greased-axles"],
          civs: [],
          diff: [["nerf", "Movement speed bonus reduced from 20% to 15%"]],
        },

        {
          // Geometry moved from the University to the Siege Workshop
          // Geometry resource cost reduced from 300 Wood, 700 Gold to 100 Wood, 225 Gold
          // Geometry research time reduced from 90 to 45 seconds
          items: ["technologies/geometry"],
          civs: [],
          diff: [
            ["buff", "Moved from the University to the Siege Workshop"],
            ["buff", "Cost reduced from 300 Wood, 700 Gold to 100 Wood, 225 Gold"],
            ["buff", "Research time reduced from 90 to 45 seconds"],
          ],
        },

        {
          // Siege Works moved from the Siege Workshop to the University
          // Removed completely from the Chinese Astronomical Clocktower
          // Siege Works resource cost increased from 150 Wood, 350 Gold to 300 Wood, 700 Gold
          // Siege Works research time increased from 60 to 90 seconds
          // Siege Works for the Delhi Sultanate research time increased from 900 to 1350 seconds
          items: ["technologies/siege-works"],
          civs: [],
          diff: [
            ["nerf", "Moved from the Siege Workshop to the University"],
            ["nerf", "Can no longer be researched at the Chinese Astronomical Clocktower", ["ch"]],
            ["nerf", "Cost increased from 150 Wood, 350 Gold to 300 Wood, 700 Gold"],
            ["nerf", "Research time increased from 60 to 90 seconds"],
            ["nerf", "Delhi Research time increased from 900 to 1350 seconds", ["de"]],
          ],
        },
        {
          // Mongol Improved version cost increased from 500 Stone to 1000 Stone
          items: ["technologies/siege-works-improved"],
          civs: ["mo"],
          diff: [["nerf", "Cost increased from 500 Stone to 1000 Stone"]],
        },
        {
          items: ["buildings/siege-workshop"],
          civs: [],
          diff: [
            ["nerf", "Can no longer research Siege Works (use University instead)"],
            ["buff", "Can now research Geometry (instead of University)"],
          ],
        },
        {
          items: ["buildings/university"],
          civs: [],
          diff: [
            ["nerf", "Can no longer research Geometry (use Siege Workshop instead)"],
            ["buff", "Can now research Siege Works (instead of Siege Workshop)"],
          ],
        },

        {
          // Tithe Barns now correctly provides 30 stone per minute instead of 15
          items: ["technologies/tithe-barns"],
          civs: [],
          diff: [["fix", "Now correctly provides 30 stone per minute instead of 15"]],
        },
      ],
    },
    {
      title: "Abbassid Dynasty",
      civs: ["ab"],
      changes: [
        {
          // Camel Archer move speed increased from 6.5 to 6.75
          // Camel Archer bonus damage vs. Spearman reduced from 3x to 2x
          // Camel Archer II damage increased from 10 to 12
          // Camel Archer III damage increased from 12 to 14
          // Camel Archer IV damage increased from 14 to 15
          // Camel Barding now only affects Camel Riders, no longer affects the Camel Archer
          // Camel Archer bow is no longer invisible after upgrading Incendiary Arrows

          items: ["units/camel-archer"],
          civs: ["ab"],
          diff: [
            ["buff", "Move speed increased from 6.5 to 6.75"],
            ["nerf", "Bonus damage vs. Spearman reduced from 3x to 2x"],
            ["buff", "Age II damage increased from 10 to 12"],
            ["buff", "Age III damage increased from 12 to 14"],
            ["buff", "Age IV damage increased from 14 to 15"],
            ["nerf", "Camel Barding no longer affects the Camel Archer"],
            ["fix", "Camel Archer bow is no longer invisible after upgrading Incendiary Arrows"],
          ],
        },
        {
          // Camel Rider III damage increased from 9 to 14
          // Camel Rider III bonus damage vs. Cavalry reduced from 18 to 14
          // Camel Rider IV damage increased from 10 to 16
          // Camel Rider IV bonus damage vs. Cavalry reduced from 20 to 16
          items: ["units/camel-rider"],
          civs: ["ab"],
          diff: [
            ["buff", "Age III damage increased from 9 to 14"],
            ["nerf", "Age III bonus damage vs. Cavalry reduced from 18 to 14"],
            ["buff", "Age IV damage increased from 10 to 16"],
            ["nerf", "Age IV bonus damage vs. Cavalry reduced from 20 to 16"],
          ],
        },

        {
          // Camel Barding now only affects Camel Riders, no longer affects the Camel Archer
          // Camel Barding moved from the Blacksmith to the Stables
          // Camel Barding Cost reduced from 300 Food, 700 Gold to 100 Food, 225 Gold
          // Camel Barding research time reduced from 90 to 45 seconds
          items: ["technologies/camel-barding"],
          civs: ["ab"],
          diff: [
            ["nerf", "Camel Barding now only affects Camel Riders, no longer affects the Camel Archer"],
            ["buff", "Moved from the Blacksmith to the Stables"],
            ["buff", "Cost reduced from 300 Food, 700 Gold to 100 Food, 225 Gold"],
            ["buff", "research time reduced from 90 to 45 seconds"],
          ],
        },
      ],
    },
    {
      subtitle: "Economy Wing Changes",
      civs: ["ab"],
      changes: [
        // Economy Wing Changes
        {
          // Agriculture cost reduced from 200 Wood, 500 Gold to 75 Wood, 200 Gold
          // Agriculture research time reduced from 90 to 45 seconds
          items: ["technologies/agriculture"],
          civs: ["ab"],
          diff: [
            ["buff", "Cost reduced from 200 Wood, 500 Gold to 75 Wood, 200 Gold"],
            ["buff", "Research time reduced from 90 to 45 seconds"],
          ],
        },
      ],
    },
    {
      subtitle: "Trade Wing Changes",
      civs: ["ab"],
      changes: [
        // Trade Wing Changes
        {
          // Grand Bazaar moved from the Imperial Age to the Feudal Age
          // Grand Bazaar cost reduced from 300 Food, 700 Gold to 50 Food, 125 Gold
          // Grand Bazaar research time reduced from 90 to 60 seconds
          items: ["technologies/grand-bazaar"],
          civs: ["ab"],
          diff: [
            ["buff", "Moved from the Imperial Age to the Feudal Age"],
            ["buff", "Cost reduced from 300 Food, 700 Gold to 50 Food, 125 Gold"],
            ["buff", "Research time reduced from 90 to 60 seconds"],
          ],
        },
        {
          // Spice Roads moved from the Feudal Age to the Imperial Age
          // Spice Roads cost increased from 100 Wood, 250 Gold to 300 Wood, 700 Gold
          items: ["technologies/spice-roads"],
          civs: ["ab"],
          diff: [
            ["nerf", "Moved from the Feudal Age to the Imperial Age"],
            ["nerf", "Cost increased from 100 Wood, 250 Gold to 300 Wood, 700 Gold"],
          ],
        },
      ],
    },
    {
      subtitle: "Military Wing Changes",
      civs: ["ab"],
      changes: [
        // Military Wing Changes
        {
          // Boot Camp requirement reduced from Imperial Age to Feudal Age
          // Boot Camp cost reduced from 300 Food, 700 Gold to 50 Food, 125 Gold
          // Boot Camp research time decreased from 90 to 60 seconds
          items: ["technologies/boot-camp"],
          civs: ["ab"],
          diff: [
            ["buff", "Moved from Imperial Age to Feudal Age"],
            ["buff", "Cost reduced from 300 Food, 700 Gold to 50 Food, 125 Gold"],
            ["buff", "Research time decreased from 90 to 60 seconds"],
          ],
        },
        {
          // Camel Rider Shields cost reduced from 300 Food, 700 Gold to 250 Gold, 100 Food
          // Camel Rider Shields research time reduced from 90 to 60 seconds
          items: ["technologies/camel-rider-shields"],
          civs: ["ab"],
          diff: [
            ["buff", "Cost reduced from 300 Food, 700 Gold to 250 Gold, 100 Food"],
            ["buff", "Research time reduced from 90 to 60 seconds"],
          ],
        },
        {
          // Camel Support requirement increased from Feudal Age to Imperial Age
          // Camel Support armor bonus increased from 1 to 2
          // Camel Support cost increased from 50 Food, 125 Gold to 300 Food, 700 Gold
          // Camel Support research time increased from 60 to 90 seconds
          items: ["technologies/camel-support"],
          civs: ["ab"],
          diff: [
            ["nerf", "Moved from Feudal Age to Imperial Age"],
            ["buff", "Armor bonus increased from 1 to 2"],
            ["nerf", "Cost increased from 50 Food, 125 Gold to 300 Food, 700 Gold"],
            ["nerf", "Research time increased from 60 to 90 seconds"],
          ],
        },
      ],
    },
    {
      subtitle: "Bug fixes",
      civs: ["ab"],
      changes: [
        {
          // Converted Abbasid villagers will correctly have their build menu updated to match their new allegiance
          // The Abbasid Golden Age production speed bonus now properly applies to all production buildings, and not only military production buildings
          items: [],
          civs: [],
          diff: [
            ["fix", "Converted Abbasid villagers will correctly have their build menu updated to match their new allegiance"],
            [
              "fix",
              "The Abbasid Golden Age production speed bonus now properly applies to all production buildings, and not only military production buildings",
            ],
          ],
        },
        {
          // Faith can no longer be used to convert Naval units
          items: ["technologies/faith"],
          civs: ["ab"],
          diff: [["fix", "Can no longer be used to convert Naval units, as originally intended"]],
        },
        {
          // Composite Bows tooltip now correctly displays 33% attack speed increase instead of 25%
          items: ["technologies/composite-bows"],
          civs: ["ab"],
          diff: [["fix", "In-game tooltip now correctly displays 33% attack speed increase instead of 25%"]],
        },
        {
          // Improved Processing now applies to Town Centers
          items: ["technologies/improved-processing"],
          civs: ["ab"],
          diff: [["fix", "Drop-off bonus now also applies to Town Centers"]],
        },
      ],
    },
    {
      title: "Chinese",
      civs: ["ch"],
      changes: [
        {
          // Official Changes
          // Supervise production and research speed reduced from 200% to 150%
          // Official train time increased from 20 to 30 seconds
          // Official cost changed from 150 Food to 100 Food, 50 Gold
          items: ["units/imperial-official"],
          civs: ["ch"],
          diff: [
            ["nerf", "Supervise production and research speed reduced from 200% to 150%"],
            ["nerf", "Train time increased from 20 to 30 seconds"],
            ["nerf", "Cost changed from 150 Food to 100 Food, 50 Gold"],
          ],
        },
        {
          items: ["buildings/astronomical-clocktower"],
          civs: ["ch"],
          diff: [["nerf", "Can no longer research Siege Works"]],
        },
        {
          // Stone Wall Tower build time increased from 90 to 120 seconds
          items: ["buildings/stone-wall-tower"],
          civs: ["ch"],
          diff: [["nerf", "Build time increased from 90 to 120 seconds"]],
        },
        {
          // Ancient Techniques cost increased from 150 Wood, 350 Gold to 200 Wood, 500 Gold
          // Ancient Techniques research time increased from 60 to 90 seconds
          items: ["technologies/ancient-techniques"],
          civs: ["ch"],
          diff: [
            ["nerf", "Cost increased from 150 Wood, 350 Gold to 200 Wood, 500 Gold"],
            ["nerf", "Research time increased from 60 to 90 seconds"],
          ],
        },
        {
          // Barbican of the Sun sight range increased to match the Outpost
          items: ["buildings/barbican-of-the-sun"],
          civs: ["ch"],
          diff: [["buff", "Sight range increased by 100% to match the Outpost (from ±6.7 to 13.3 tiles)"]],
        },
        {
          // Imperial Spies ability from the Imperial Palace Landmark now reveals Villagers, Traders, Trade Ships, Fishing Ships and Officials.
          items: ["buildings/imperial-palace"],
          civs: ["ch"],
          diff: [["buff", "Imperial Spies ability from the Imperial Palace Landmark now reveals Villagers, Traders, Trade Ships, Fishing Ships and Officials"]],
        },
      ],
    },
    {
      subtitle: "Dynasty Changes",
      civs: ["ch"],
      changes: [
        // Dynasty Changes
        {
          // Dynasty units and buildings are no longer gated when advancing to the next dynasty
          // Yuan Dynasty movement speed bonus no longer applies to Siege
          items: [],
          civs: ["ch"],
          diff: [
            ["buff", "Dynasty units and buildings are no longer gated when advancing to the next dynasty"],
            ["nerf", "Yuan Dynasty movement speed bonus no longer applies to Siege"],
          ],
        },
        {
          // Village requirement reduced from Song Dynasty to Tang Dynasty
          // Village cost increased from 100 Wood to 125 Wood
          // Village health increased from 1000 to 1500
          items: ["buildings/village"],
          civs: ["ch"],
          diff: [
            ["buff", "Moved from Song Dynasty to Tang Dynasty"],
            ["nerf", "Cost increased from 100 Wood to 125 Wood"],
            ["buff", "Health increased from 1000 to 1500"],
          ],
        },
        {
          // Granary requirement reduced from Yuan Dynasty to Song Dynasty
          // Granary Villager harvest bonus reduced from 15% to 10%
          // Granary Health increased from 1000 to 1500
          items: ["buildings/granary"],
          civs: ["ch"],
          diff: [
            ["buff", "Moved from Yuan Dynasty to Song Dynasty"],
            ["nerf", "Villager harvest bonus reduced from 15% to 10%"],
            ["buff", "Health increased from 1000 to 1500"],
          ],
        },
        {
          // Pagoda requirement reduced from Ming Dynasty to Yuan Dynasty
          // Pagoda Relic resource bonus reduced from 100 Gold, Food, Wood and Stone to 100 Gold, 50 Food, 50 Wood, 50 Stone per minute
          items: ["buildings/pagoda"],
          civs: ["ch"],
          diff: [
            ["buff", "Moved from Ming Dynasty to Yuan Dynasty"],
            ["nerf", "Relic resource bonus reduced from 100 Gold, Food, Wood and Stone to 100 Gold, 50 Food, 50 Wood, 50 Stone per minute"],
          ],
        },
      ],
    },
    {
      title: "English",
      civs: ["en"],
      changes: [
        {
          // Starting Wood increased from 150 to 200

          items: [],
          civs: ["en"],
          diff: [["buff", "Starting Wood increased from 150 to 200"]],
        },
        {
          // Man-at-Arms train time reduced from 22 to 15 seconds
          // Vanguard Man-at-Arms armor increased from 2 to 3
          items: ["units/man-at-arms"],
          civs: ["en"],
          diff: [
            ["buff", "Train time reduced from 22 to 15 second"],
            ["buff", "Vanguard (Age I) Man-at-Arms armor increased from 2 to 3"],
          ],
        },
        {
          // Abbey of Kings healing rate increased from 4 health/1.5 seconds to 6 health/ 1 second
          items: ["buildings/abbey-of-kings"],
          civs: ["en"],
          diff: [["buff", "Healing rate increased from 4 health/1.5 seconds to 6 health/ 1 second"]],
        },
        {
          // Setup Camp can no longer be triggered while in combat
          items: ["technologies/setup-camp"],
          civs: ["en"],
          diff: [["fix", "Can no longer be triggered while in combat"]],
        },
      ],
    },
    {
      title: "French",
      civs: ["fr"],
      changes: [
        {
          // Fixed a bug with the French Tech tree where traders were displayed in the Dark Age under Chamber of Commerce.
          // Military siege engineer UI now matches other civilizations
          // Siege engineer icon is restored
          items: [],
          civs: ["fr"],
          diff: [
            ["fix", "Fixed a bug with the French Tech tree where traders were displayed in the Dark Age under Chamber of Commerce."],
            ["fix", "Military siege engineer UI now matches other civilizations"],
            ["fix", "Siege engineer icon is restored"],
          ],
        },
        {
          // Arbaletrier Pavise ability now increases armor by +5 instead of setting armor to 5
          items: ["units/arbaletrier"],
          civs: ["fr"],
          diff: [["fix", "Arbaletrier Pavise ability now increases armor by +5 instead of setting armor to 5"]],
        },

        {
          // Royal Knight help text updated to reflect proper duration of bonus after a successful charge attack
          items: ["units/royal-knight"],
          civs: ["fr"],
          diff: [["fix", "In-game help text updated to reflect proper duration of bonus after a successful charge attack"]],
        },
        {
          // Regnitz Cathedral Relic capacity reduced from 3 to 2
          items: ["buildings/regnitz-cathedral"],
          civs: ["hr"],
          diff: [["nerf", "Regnitz Cathedral Relic capacity reduced from 3 to 2"]],
        },
        {
          // Burgrave Palace now produces infantry 400% faster instead of training units in batches of 5
          items: ["buildings/burgrave-palace"],
          civs: ["hr"],
          diff: [["buff", "Burgrave Palace now produces infantry 400% faster instead of training units in batches of 5"]],
        },
        {
          // Meinwerk Palace research discount increased from 25% to 30%
          // Meinwerk Palace research speed increased by 30%
          items: ["buildings/meinwerk-palace"],
          civs: ["hr"],
          diff: [
            ["buff", "Meinwerk Palace research discount increased from 25% to 30%"],
            ["buff", "Meinwerk Palace research speed increased by 30%"],
          ],
        },
        {
          // Palace of Swabia Villager production speed and discount reduced from 75% to 66%
          items: ["buildings/palace-of-swabia"],
          civs: ["hr"],
          diff: [["nerf", "Palace of Swabia Villager production speed and discount reduced from 75% to 66%"]],
        },
        {
          // Inspired Warriors effect duration increased from 30 seconds to 60 seconds
          items: ["technologies/inspired-warriors"],
          civs: ["hr"],
          diff: [["buff", "Inspired Warriors effect duration increased from 30 seconds to 60 seconds"]],
        },
        {
          // Marching Drills cost reduced from 100 Food, 250 Gold to 50 Food, 125 Gold
          // Marching Drills research time reduced from 90 to 60 seconds
          // Marching Drills now affects Prelates
          items: ["technologies/marching-drills"],
          civs: ["hr"],
          diff: [
            ["buff", "Cost reduced from 100 Food, 250 Gold to 50 Food, 125 Gold"],
            ["buff", "Research time reduced from 90 to 60 seconds"],
            ["buff", "Now affects Prelates"],
          ],
        },

        {
          // Added a Prelate indicator for HRE players to be able to more easily locate and keep track of their Prelates
          items: ["units/prelate"],
          civs: ["hr"],
          diff: [["buff", "Added a Prelate indicator to be able to more easily locate and keep track of Prelates"]],
        },
      ],
    },
    {
      // HRE Bug Fixes
      subtitle: "HRE Bug Fixes",
      civs: ["hr"],
      changes: [
        {
          // By placing Relics in Docks it is no longer possible to surpass the maximum 25% attack speed bonus
          // Relics placed inside of docks no longer increase attack speed of all players’ ships
          // Docks can now properly make use of influence and the Emergency Repair ability
          items: ["buildings/dock"],
          civs: ["hr"],
          diff: [
            ["fix", "Relics placed inside of docks no longer increase attack speed of all players’ ships"],
            ["fix", "By placing Relics in Docks it is no longer possible to surpass the maximum 25% attack speed bonus"],
            ["fix", "Docks can now properly make use of influence and the Emergency Repair ability"],
          ],
        },
        {
          // The Aachen Chapel blueprint aura range indicator has been updated to use the correct gold color
          items: ["buildings/aachen-chapel"],
          civs: ["hr"],
          diff: [["fix", "The Aachen Chapel blueprint aura range indicator has been updated to use the correct gold color"]],
        },
        {
          // The Great Palace of Flensburg Wonder can now properly make use of influence and the Emergency Repair ability
          items: ["buildings/great-palace-of-flensburg"],
          civs: ["hr"],
          diff: [["fix", "Can now properly make use of influence and the Emergency Repair ability"]],
        },
        {
          // Keeps no longer grant a springald when a unit is garrisoned, and the Springald Emplacement is not researched
          items: ["buildings/keep"],
          civs: ["hr"],
          diff: [["fix", "Keeps no longer grant a springald when a unit is garrisoned, and the Springald Emplacement is not researched"]],
        },
      ],
    },
    {
      //       Mongols
      title: "Mongols",
      civs: ["mo"],
      changes: [
        {
          // Textiles (Improved) has been added to the Town Center, available in the Castle Age

          // Textiles (Improved) increases the health of Villagers by +50
          items: ["technologies/textiles"],
          // items: ["technologies/textiles-improved"],
          civs: ["mo"],
          diff: [
            ["buff", "New Improved Technology: Textiles (Improved) has been added to the Town Center, available in the Castle Age"],
            ["buff", "Textiles (Improved) increases the health of Villagers by +50"],
          ],
        },

        // Mongols Bug Fixes
        {
          // Improved Biology now only provides +10% health instead of +15% for a total of +30% instead of +35%
          items: ["technologies/biology-improved"],
          civs: ["mo"],
          diff: [["fix", "Now only provides +10% health instead of +15%, for a total of +30% instead of +35%"]],
        },

        {
          // Fixed a bug where Mongol Tithe Barns research time was 80s instead of the intended 60s.
          // It also gives the proper +30 Food, Wood, and Stone instead of +20
          items: ["technologies/tithe-barns"],
          civs: ["mo"],
          diff: [
            [
              "fix",
              "Fixed a bug where Mongol Tithe Barns research time was 80s instead of the intended 60s. It also gives the proper +30 Food, Wood, and Stone instead of +20",
            ],
          ],
        },
        {
          // Fixed a bug where Mongol Improved Tithe Barns did not list the correct resource income
          items: ["technologies/tithe-barns-improved"],
          civs: ["mo"],
          diff: [["fix", "Fixed a bug where Mongol Improved Tithe Barns did not list the correct resource income"]],
        },
        {
          // Khaganate Palace now produces Mangudai in 90 seconds instead of 77 seconds
          items: ["buildings/khaganate-palace"],
          civs: ["mo"],
          diff: [["nerf", "Produces Mangudai in 90 seconds instead of 77 seconds"]],
        },
        {
          // The Mongol Landmark Town Center can now be packed while at maximum population
          items: ["buildings/town-center"],
          civs: ["mo"],
          diff: [["fix", "The Landmark Town Center can now be packed while at maximum population"]],
        },
        {
          // Stone Commerce help text updated to specify trade bonus
          items: ["technologies/stone-commerce"],
          civs: ["mo"],
          diff: [["fix", "Stone Commerce help text updated to specify trade bonus"]],
        },
        {
          // The Khan Defense Arrow tool tip updated to show correct bonus of +2
          items: ["units/khan"],
          civs: ["mo"],
          diff: [["fix", "The Khan Defense Arrow tool tip updated to show correct bonus of +2"]],
        },
      ],
    },
    {
      //       Rus

      title: "Rus",
      civs: ["ru"],
      changes: [
        {
          // Warrior Monk weapon range increased from 1.15 to 3
          // Warrior Monk charge weapon range increased from 2.15 to 3
          items: ["units/warrior-monk"],
          civs: ["ru"],
          diff: [
            ["buff", "Weapon range increased from 1.15 to 3"],
            ["buff", "Charge weapon range increased from 2.15 to 3"],
          ],
        },
        {
          // Horse Archer Precision technology weapon range bonus reduced from 2 to 1
          // Horse Archer Precision technology research time reduced from 90 to 60 seconds
          items: ["technologies/mounted-precision"],
          civs: ["ru"],
          diff: [
            ["nerf", "Weapon range bonus reduced from 2 to 1"],
            ["buff", "Research time reduced from 90 to 60 seconds"],
          ],
        },
        {
          // Streltsy Double Time ability no longer quickens their Static Deployment ability
          items: ["technologies/double-time", "units/streltsy"],
          civs: ["ru"],
          diff: [["nerf", "Double Time ability no longer quickens Streltsy Static Deployment ability"]],
        },
        {
          // Lodya Fishing Ship
          // Population cost increased from 1 to 2
          // Cost increased from 75 to 150 Wood
          // Train time increased from 25 to 38 seconds
          // Health increased from 125 to 250
          // Deep Water Fish gather rate increased from 1.0 to 1.9
          // Shoreline Fish gather rate increased from 0.66 to 1.19
          items: ["units/lodya-fishing-ship"],
          civs: ["ru"],
          diff: [
            ["nerf", "Population cost increased from 1 to 2"],
            ["nerf", "Cost increased from 75 to 150 Wood"],
            ["nerf", "Train time increased from 25 to 38 seconds"],
            ["buff", "Health increased from 125 to 250"],
            ["buff", "Deep Water Fish gather rate increased from 1.0 to 1.9"],
            ["buff", "Shoreline Fish gather rate increased from 0.66 to 1.19"],
          ],
        },

        // Rus Bug Fixes
        {
          // Golden Gate trade buttons have been relocated to match Markets
          // Golden Gate no longer shares double click selection with Markets
          items: ["buildings/the-golden-gate"],
          civs: ["ru"],
          diff: [
            ["fix", "Trade buttons have been relocated to match Markets"],
            ["fix", "No longer shares double click selection with Markets"],
          ],
        },
        {
          // Lodya ships now have the correct upgrades applied after conversion
          items: ["units/lodya-attack-ship"],
          civs: ["ru"],
          diff: [["fix", "Lodya ships now have the correct upgrades applied after conversion"]],
        },
        {
          // Fixed a bug with the Rus tech tree where Abbey of Trinity didn't display all of its unique techs
          items: ["buildings/abbey-of-the-trinity"],
          civs: ["ru"],
          diff: [["fix", "Fixed a bug with the Rus tech tree where Abbey of Trinity didn't display all of its unique techs"]],
        },
        {
          // Destroyed High Trade House no longer produces Deer until repaired
          items: ["buildings/high-trade-house"],
          civs: ["ru"],
          diff: [["fix", "Destroyed High Trade House no longer produces Deer until repaired"]],
        },
      ],
    },
  ],
};

export const patches = [s1];
