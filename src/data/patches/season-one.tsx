import { PatchNotes } from "../../types/patches";

/* Sources:
https://www.reddit.com/r/aoe4/comments/tmose7/pup_patch_update_notes_v12851_march_24th/
https://www.reddit.com/r/aoe4/comments/tau52p/season_1_update_beta_formatted_patchnotes/
*/
export const season1: PatchNotes = {
  id: "season-one",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-one-update-release-notes/",
  name: "Season One Update",
  summary: `The first major update of 2022 brings Ranked Seasons, the Content Editor beta (and Mods!), Seasonal Events, Major Balance changes, as well as a ton of quality-of-life changes to Age of Empires IV.   
      `,
  buildId: 12793,
  date: new Date("2022-04-07"),
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
          note: "Siege weapons are frequently built by many infantry at the same time in the field. We wanted to add more time here to give opponents an adequate chance at counter play.",
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
          note: "We found scout attack times to feel too long and unresponsive. This is especially noticeable in the early stages of the game when unit counts are lower.",
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
          note: "We’re aim to encourage earlier game deer play to reward players for being out on the map.",
        },
        {
          // SUL and ABB orchard bonus reduced from +250 to +100 food

          items: ["buildings/mill"],
          civs: ["ab", "de"],
          diff: [["nerf", "Delhi and Abbasid Orchard Bonus (building a mill nearby Berry Bushes) reduced from +250 to +100 food"]],
          note: "We like that the berry gathering speed makes this a prime resource for Abbasid, but it gives a boon for too long. We want them to have to move out on the map to more risky positions sooner.",
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
          note: "Engaging in naval battles was very swingy as once a player started losing it was difficult to retreat against fire while moving boats. We’re also hoping to see more tactical poke and retreat style feigns and harassment.",
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
          note: "Between making more fishing boats and researching, the dock had to choose between these economic techs that took so long. It was generally better just to make more fishing boats. Reducing the research time makes these techs enticing earlier in the match.",
        },
        {
          // Naval Navigator no longer gives +1 weapon range, increased sight range improvement from 1 to 4 tiles
          items: ["technologies/navigator-lookout"],
          civs: [],
          diff: [
            ["nerf", "No longer gives +1 weapon range"],
            ["buff", "Increased sight range improvement from 1 to 4 tiles"],
          ],
          note: "Naval units frequently are hampered from firing at their max range by inability to see land units on hills. This helps combat their sight issues as well as making the technology more situationally useful instead of an automatic research every game.",
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
          note: "Attack ships are designed to counter arrowships. However we felt the armor was so extreme of a counter it felt ineffective and unfun to engage in these naval battles.",
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
          note: "Helps Baghlah’s ability to take out enemy structures. This is also a net increase to Baghlah DPS to account for the lack of Swivel Ballista technology.",
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
          note: "We want to give land units and defenses more opportunity to return fire against naval units. It’s not satisfying for a boat to out range your defenses and kill them without taking any damage. Having both sides take some damage creates a more interesting back and forth dynamic between players that adds strategy and micro into the mix.",
        },
        {
          // Rams can no longer target naval units
          items: ["units/battering-ram"],
          civs: [],
          diff: [["fix", "Rams can no longer target naval units"]],
          note: "While this was a bug fix, we received player feedback about how it added a fun dynamic to the game. We’ll look into readjusting in the future.",
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
          note: "Players were dropping buildings in the middle of battles and there wasn’t any way to stop it. We’ve added this damage penalty to in progress buildings to add more risk and counterplay to these strategies to even out how powerful they are.",
        },

        {
          // Stone Wall Tower build time increased from 60 to 90 seconds
          items: ["buildings/stone-wall-tower"],
          civs: ["ab", "de", "en", "fr", "hr", "mo", "ru"],
          diff: [
            ["nerf", "Stone Wall Tower build time increased from 60 to 90 seconds"],
            ["nerf", "Stone Wall Tower cost increased from 200 to 300 stone"],
          ],
          note: "These changes together are specifically targeted at weakening feudal age stone wall tower rushes as it’s difficult to get enough army together in time to prevent them.",
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
          note: "One of the most powerful castle age upgrades. This was frequently grabbed as soon as a keep was completed. Increasing the cost adds more strategic contemplation to when it’s researched. Still well worth the investment!",
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
          note: "As geometry only affects 2 units that only damage buildings, we found the steep cost wasn’t justified and limited the intended scaling of late game rams.",
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
          note: "As university holds powerful technologies that affect entire classes of units, it was a much better fit for this technology.",
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
      subtitle: "Other bug fixes",
      civs: [],
      changes: [
        {
          // Repair ability now shows the correct requirements when attempting to use it on an enemy player
          // Attempting to observe a modded game when you do not have the same mods enables should no longer result in a crash
          // Improvements made to sheep to allow for easier selection
          // Selection tool should now prioritize siege unit selection over building selection when the unit overlaps with a building
          items: [],
          civs: [],
          diff: [
            ["fix", "Repair ability now shows the correct requirements when attempting to use it on an enemy player"],
            ["fix", "Attempting to observe a modded game when you do not have the same mods enables should no longer result in a crash"],
            ["fix", "Improvements made to sheep to allow for easier selection"],
            ["fix", "Selection tool should now prioritize siege unit selection over building selection when the unit overlaps with a building"],
          ],
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
          note: "For both camel units we wanted them to be a bit more useful overall instead of just niche counter units. As Camel archers are ranged, fast, and high damage we’ll be scrutinizing them for upcoming balance patches.",
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
          note: "Camel archers already get to benefit from Biology and Incendiary Arrows, this helps combat some of the upgrade stacking issues.",
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
          note: "Previously, the strongest wing bonuses weren’t available until reaching Imperial Age. This meant that choosing a wing wasn’t exciting as the payoff was very far in the future. We’ve resolved this by adding more enticing options starting off in the Feudal age!",
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
            // ["nerf", "Train time increased from 20 to 30 seconds"],
            // CHI Imperial Official train time reduced from 30 to 20 seconds (This is reverting the change from the original PUP release notes)
          ],
          note: "We found that China is quite strong with the improvements to their dynasties and the flexibility of 200% production speed allowing them an easier counter vs most tech switches.",
        },
        {
          // Official Changes
          // Supervise production and research speed reduced from 200% to 150%
          // Official train time increased from 20 to 30 seconds
          // Official cost changed from 150 Food to 100 Food, 50 Gold
          items: ["units/imperial-official"],
          civs: ["ch"],
          diff: [
            // ["nerf", "Train time increased from 20 to 30 seconds"],
            // CHI Imperial Official train time reduced from 30 to 20 seconds (This is reverting the change from the original PUP release notes)
            ["nerf", "Cost changed from 150 Food to 100 Food, 50 Gold"],
          ],
          note: "China was able to rapidly accelerate their age of time by skipping a mining camp and using tax gold to age up with their faster building production time.",
        },
        {
          // Fixed a bug where Elite Fire Lancer torch damage wasn’t increasing when upgraded to Elite
          items: ["units/fire-lancer"],
          civs: ["ch"],
          diff: [["fix", "Fixed a bu where torch damage wasn’t increasing when upgraded to Elite"]],
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
          note: "As players start in a dynasty and normally grab Song early this tech is giving at least a 10% bonus to gather rates and up to 20% for all resources.",
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
          note: "Adding earlier villages allows Chinese to create defensive garrison to resource nodes right at the start of the game.",
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
          note: "Building the Granary earlier allows you to plan out your base layout while making the farm transition, instead of trying to fit in a large building after crops have already been established.",
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
          note: "Moving up the Pagoda allows the dynasty building to be built in the castle age when players are collecting relics.",
        },
      ],
    },

    // Delhi
    {
      title: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          // Herbal Medicine technology moved from the Dark Age to the Castle Age
          items: ["technologies/herbal-medicine"],
          civs: ["de"],
          diff: [["nerf", "Moved from the Dark Age to the Castle Age"]],
          note: "This powerful tech was providing a large power spike too early in the game. We’ve moved it back to Castle Age to match other civs.",
        },
        {
          // The Delhi Sultanate tech tree now lists Honed Blades under Imperial Age instead of Castle Age
          items: ["technologies/honed-blades"],
          civs: ["de"],
          diff: [["fix", "Tech tree now correctly lists Honed Blades under Imperial Age instead of Castle Age"]],
        },
        {
          // The Delhi Sultanate tech tree now lists Slow-Burning Defenses under Imperial Age instead of Castle Age

          items: ["technologies/slow-burning-defenses"],
          civs: ["de"],
          diff: [["fix", "Tech tree now correctly lists Slow-Burning Defenses under Imperial Age instead of Castle Age"]],
        },
        {
          // The Compound of the Defender effect is no longer active while the Landmark is destroyed
          items: ["buildings/compound-of-the-defender"],
          civs: ["de"],
          diff: [["fix", "The Compound of the Defender effect is no longer active while the Landmark is destroyed"]],
        },
        {
          // Tower of victory attack speed bonus increased 15% to 20%. The buff is now applied in a larger radius. Effect now properly applies its full bonus to all-melee and ranged infantry
          items: ["buildings/tower-of-victory"],
          civs: ["de"],
          diff: [
            ["buff", "Attack speed bonus increased 15% to 20% in a larger radius"],
            ["buff", "Effect now properly applies its full bonus to all-melee and ranged infantry"],
          ],
        },
        {
          // Fixed a bug where the Armored Beasts tooltip incorrectly stated it applied to Tower War Elephants. It now correctly states it only applies to War Elephants
          items: ["technologies/armored-beasts"],
          civs: ["de"],
          diff: [
            [
              "fix",
              "Fixed a bug where the Armored Beasts tooltip incorrectly stated it applied to Tower War Elephants. It now correctly states it only applies to War Elephants",
            ],
          ],
        },
      ],
    },
    // English
    {
      title: "English",
      civs: ["en"],
      changes: [
        {
          // Starting Wood increased from 150 to 200

          items: [],
          civs: ["en"],
          diff: [["buff", "Starting Wood increased from 150 to 200"]],
          note: "This, along with the previous changes, gives English more options early game to start with a barracks rush, early farming, or save for feudal age.",
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
          note: "We want to create more dynamic choices in the unit roster for the English civilization. This allows English players the ability to pump out powerful early game units quickly. As the Man at Arms is very food-heavy, it also synergizes with their farming bonuses.",
        },
        {
          // Abbey of Kings healing rate increased from 4 health/1.5 seconds to 6 health/ 1 second
          items: ["buildings/abbey-of-kings"],
          civs: ["en"],
          diff: [["buff", "Healing rate increased from 4 health/1.5 seconds to 6 health/ 1 second"]],
        },
        {
          // Setup Camp can no longer be triggered while in combat
          // The English Setup Camp ability now has the correct requirements text
          items: ["technologies/setup-camp"],
          civs: ["en"],
          diff: [
            ["fix", "Can no longer be triggered while in combat"],
            ["fix", "Now has the correct requirements text"],
          ],
          note: "The fantasy for this technology is troops relaxing at a warm fire after a tough battle. Note that it can still be activated while moving.",
        },
        {
          // White Tower and Berkshire Palace now have visual weapon emplacements for boiling oil
          items: ["buildings/white-tower", "buildings/berkshire-palace"],
          civs: ["en"],
          diff: [["fix", "Now have a visual weapon emplacements for boiling oil"]],
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
          items: ["buildings/red-palace"],
          civs: ["fr"],
          diff: [["fix", "Red Palace now has visual weapon emplacements for boiling oil"]],
        },
        {
          // Royal Knight help text updated to reflect proper duration of bonus after a successful charge attack
          items: ["units/royal-knight"],
          civs: ["fr"],
          diff: [["fix", "In-game help text updated to reflect proper duration of bonus after a successful charge attack"]],
        },
      ],
    },
    {
      title: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          // Regnitz Cathedral Relic capacity reduced from 3 to 2
          items: ["buildings/regnitz-cathedral"],
          civs: ["hr"],
          diff: [["nerf", "Regnitz Cathedral Relic capacity reduced from 3 to 2"]],
          note: "This helps balance the high gold per minute provided by the relic. In addition, it allows HRE more options for powering up Keeps and Outposts by adding relics to them.",
        },
        {
          // Burgrave Palace now produces infantry 400% faster instead of training units in batches of 5
          items: ["buildings/burgrave-palace"],
          civs: ["hr"],
          diff: [["buff", "Burgrave Palace now produces infantry 400% faster instead of training units in batches of 5"]],
          note: "While technically the same as training in batches of 5, this is better for multiple reasons: First off, it now applies to all barracks techs for awesome timing attacks! This change also allows units to hit the field much faster, with smaller resource requirements, and additional flexibility in the units produced.",
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
          note: "This, along with the Marching Drills, changes are intended to make it more rewarding for you to put Prelates into your main army.",
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
          note: "While Marching Drills is a powerful tech, the cost was difficult to afford in Feudal age. We’re hoping this opens up new strategic potential for expanded HRE Feudal play.",
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
          items: ["technologies/textiles-improved"],
          civs: ["mo"],
          diff: [
            ["buff", "New Improved Technology: Textiles (Improved) has been added to the Town Center, available in the Castle Age"],
            ["buff", "Textiles (Improved) increases the health of Villagers by +50"],
          ],
          note: "This is intended to help Mongols defend from raids later in the game as they have no keeps or walls.",
        },

        // Mongols Bug Fixes
        {
          // Improved Biology now only provides +10% health instead of +15% for a total of +30% instead of +35%
          items: ["technologies/biology-improved"],
          civs: ["mo"],
          diff: [["fix", "Now only provides +10% health instead of +15%, for a total of +30% instead of +35%"]],
          note: "This is consistent with other Mongol stone upgrades that provide a 50% increased bonus over the base upgrade.",
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
        {
          // Field constructed Traction Trebuchets now have the correct tool tip
          items: ["units/traction-trebuchet"],
          civs: ["mo"],
          diff: [["fix", "Field constructed Traction Trebuchets now have the correct tool tip"]],
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
          note: "This allows warrior monks to safely attack from behind a line of infantry and provide their combat buff without being too exposed to enemy melee attackers.",
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
          note: "It’s our intention that Horse Archers are countered by Archers. Being speedy and then getting this upgrade to out-range Archers means unit counters in imperial were too limited.",
        },
        {
          // Streltsy Double Time ability no longer quickens their Static Deployment ability
          items: ["technologies/double-time", "units/streltsy"],
          civs: ["ru"],
          diff: [["nerf", "Double Time ability no longer quickens Streltsy Static Deployment ability"]],
          note: "We wanted the focus of this technology to be about the movement ability instead of adding extra functionality to an already powerful unit.",
        },
        {
          // Lodya Fishing Ship
          // Population cost increased from 1 to 2
          // Cost increased from 75 to 150 Wood
          // Train time increased from 25 to 38 seconds
          // Health increased from 125 to 250
          // Deep Water Fish gather rate increased from 1.0 to 1.9
          // Shoreline Fish gather rate increased from 0.66 to 1.19
          items: ["units/lodya-fishing-boat"],
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
        {
          // Banded Arms bonus range decreased from +1.5 to +0.5
          items: ["technologies/banded-arms"],
          civs: ["ru"],
          diff: [["nerf", "Banded Arms bonus range decreased from +1.5 to +0.5"]],
          note: "The large range bonus on this tech was difficult to play against and led to some drawn out stalemate-style gameplay that wasn’t exciting for most players. We’ll revisit this upgrade in a future patch.",
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
    // {
    //   title: "Map Changes",
    //   civs: [],
    //   changes: [
    //     {
    //       items: [],
    //       civs: [],
    //       diff: [
    //         ["fix", `1v1 (Micro) map size resource balancing has received a pass, with the goal of improving the distribution of resources between players.`],
    //         [
    //           "fix",
    //           `On open maps, like Lipany and Dry Arabia, this has meant objects like relics, gold deposits and stone deposits are now spawning in a tighter band for each player, to cut down on cases where one resource node would spawn considerably further away for one player than for the other. We are always tweaking and looking to improve this, so keep sending us screenshots and map seeds when you feel things are generated unfairly!`,
    //         ],
    //         [
    //           "fix",
    //           `On divided maps, like Mountain Pass and Mongolian Heights, we have done additional custom tuning for several maps to help ensure that the dividing geography does not separate one player from their allotment of resource deposits. We were seeing instances of, for example, both players' large gold deposits spawning on the same side of the mountain range on Mountain Pass. This was due to how we place resources within a central band of map area that is calculated based on pathfinding distance from each player's TC to each point on the map. In cases like Mountain Pass, if one player spawns closer to the opening, the "midpoint" between players would be on one side of the mountain range, and our contested resources would be placed there. This set of tuning has been about finding new constraints for this banding on maps with dividing geography. Danube River, Boulder Bay, Confluence, Mountain Pass, Mongolian Heights and Nagari all received custom tuning in this regard.`,
    //         ],
    //         [
    //           "fix",
    //           `Relics will now spawn in a more balanced configuration – one accessible relic per player, 3 centrally contested relics. This updated balance logic has been applied globally to all map sizes, and tuned specifically for several maps on the Micro (1v1) size. Additional tuning for divided maps at larger sizes will be coming in a later update. Relics have been tuned to spawn further away from each other.`,
    //         ],
    //         [
    //           "fix",
    //           `Divided maps have had custom tuning and will spawn 1 accessible relic and 2 contested relics per “side” of the map, for a total of 6 relics. This was done to ensure that maps in which terrain gives natural ownership to one player don’t have a built-in imbalance due to the nature of spawning an odd number of contestable objects. The maps that include these relic changes are: Confluence, Mountain Pass, Mongolian Heights and Nagari`,
    //         ],
    //         [
    //           "fix",
    //           `Small gold and stone deposits have had their contested spawn range tightened. One contested small gold and stone will now spawn per player (up from only one overall), with less likelihood that it will be too close to a single player.`,
    //         ],
    //         [
    //           "fix",
    //           `Sacred Sites have had their spawn parameters narrowed to help them spawn evenly across the center of the map on maps where their locations are not being specifically placed by the map script (e.g. on the hill on King of the Hill).`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/nagari"],
    //       civs: [],
    //       diff: [
    //         ["fix", `Mountain ranges have been shortened slightly to provide a more consistent central lake and mountain configuration.`],
    //         [
    //           "fix",
    //           `Deep water fish have been removed from the side ponds and concentrated in the central lake. This was to both remove instances of unbalanced amounts of safe fish and ensure that the most valuable fish are located in a contested part of the map.`,
    //         ],
    //         [
    //           "buff",
    //           `Relic count has been increased to spawn a base 4 relics plus one per player to better ensure fairness of distribution on maps where geography can divide the map into discrete sections`,
    //         ],
    //         [
    //           "fix",
    //           `Resource spawning for 1v1 Micro size matches has had custom tuning done on various resource deposits. Our goal with this pass was to cut down on perceived unbalanced map generations, especially on maps where map geography can divide the map into discrete sections. Resources like gold deposits should now spawn more squarely in each player's "side" of the map, to avoid instances where a central, contested deposit could be placed on the wrong "side" of the central geography.`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/black-forest"],
    //       civs: [],
    //       diff: [
    //         ["fix", `The "forest-y" ness of Black Forest has been reigned in to not spawn unchoppable trees in the middle of your Town Center courtyards`],
    //         [
    //           "fix",
    //           `Trade Posts on Micro and Small map sizes have been adjusted to spawn closer to the exact center of the map to help ensure more equal access`,
    //         ],
    //         ["fix", `Spawn reliability of the second deer herd per player has been improved`],
    //         [
    //           "buff",
    //           `Sacred Sites have been re-added to Black Forest. We have been watching for your feedback on this change, so thanks to everyone who gave us their thoughts on the Black Forest Sacred Sites. With the way Age IV plays, Sacred Sites provide a valuable way for players to counter a locked-in defensive strategy. While we appreciate the epic slugfests that remind us of classic Age of Empires II Black Forest gameplay, we feel like the Sacred Sites play well in the Age of Empires IV version of the map.`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/boulder-bay"],
    //       civs: [],
    //       diff: [
    //         [
    //           "fix",
    //           `We have updated the forest distribution to include more smaller forests, as opposed to fewer, larger forests. This is to help prevent instances of large forests completely blocking players in on one side of the bay.`,
    //         ],
    //         [
    //           "fix",
    //           `We’ve updated the fish distribution in the bay to be more even. We are also working to provide a more robust solution for balance of deep water fish in the near future.`,
    //         ],
    //         ["fix", `We’ve adjusted gold distribution in 1v1s to be spawned more evenly between players`],
    //         ["fix", `Fixed a spawn issue where players could spawn on the wrong side of the bay on larger team games`],
    //       ],
    //     },
    //     {
    //       items: ["maps/danube-river"],
    //       civs: [],
    //       diff: [
    //         ["fix", `Large gold deposits have been rebalanced to more reliably spawn evenly between teams`],
    //         [
    //           "fix",
    //           `We’ve changed the central crossing to be a Stone Bridge. We're able to add bridges to maps, and the central stone bridge was added to Danube River to help break up naval dominance. Players who seek control of the water will need to now build ships on both their half of the river as well as their opponent’s half.`,
    //         ],
    //         ["fix", `Fixed an issue where in larger games, teammates could spawn on the wrong side of the river.`],
    //       ],
    //     },
    //     {
    //       items: ["maps/mountain-pass"],
    //       civs: [],
    //       diff: [
    //         ["fix", `Sacred Sites have been given a buffer of flat terrain to ensure they spawn correctly.`],
    //         [
    //           "fix",
    //           `Resources in 1v1 Micro size maps have been balanced to more equally spawn resources on each side of the mountain range. Previously, there was an odd number of gold and stone deposits spawning, which could lead to unbalanced resource generation between players.`,
    //         ],
    //         ["fix", `An additional small gold and stone have been added for ensuring that we can generate maps with fair distribution.`],
    //         [
    //           "fix",
    //           `An indexing error in the map script was fixed that was leading to the mountain range giving one player slightly more area on their side of the map. Now, the total area of the map should be split much more evenly between the sides of the mountains.`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/confluence"],
    //       civs: [],
    //       diff: [
    //         ["fix", `We’ve updated gold spawns to be more fairly distributed for players in 1v1.`],
    //         [
    //           "fix",
    //           `Adjusted the crossings on this map. Now, a ford will spawn on each arm of the river near the edge of the map, and near the center confluence point, a stone bridge will spawn on each arm of the river. This should help reduce water supremacy and make moving land armies through the map much smoother.`,
    //         ],
    //         [
    //           "fix",
    //           `Rivers in Confluence have also been straightened out in order to make the center of the map more consistent and predictable. The Sacred Sites will be placed around the confluence of the river, one in each quadrant, near the bridge crossings. We found the previous version of the map, when Sacred Sites could be placed anywhere along the rivers in each quadrant, felt unfocused and could lead to a more scattered map flow. This change, along with the inclusion of the bridges themselves, will hopefully give the map a tighter flow and limit the dominance of powerful warships that previously could have full control of the map.`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/ancient-spires"],
    //       civs: [],
    //       diff: [
    //         ["fix", `Removed errant deep water fish that would spawn on Micro (1v1) size matches`],
    //         [
    //           "fix",
    //           `We’ve adjusted trade post spawns to ensure that they do not spawn on isolated islands created by lakes at the side of the map. This should help ensure that both trade posts are available for players to trade with.`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/altai"],
    //       civs: [],
    //       diff: [
    //         [
    //           "fix",
    //           `We’ve fixed rare instances of Sacred Sites not spawning. This was occasionally caused by a random mountain spawning beside the tile that was designated to spawn a Sacred Site, and as we give Sacred Sites a mountain buffer around their spawn area, it could leave no room for the site to spawn.`,
    //         ],
    //         [
    //           "fix",
    //           `We’ve fixed rare cases of players spawning too close to the side mountain ranges and stomping out things like Sacred Sites and Trade Posts`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/mongolian-heights"],
    //       civs: [],
    //       diff: [
    //         ["fix", `Number of relics increased to 4 base + 1 per player, up from 3 base + 1 per player, in order to distribute them evenly across the river`],
    //         [
    //           "fix",
    //           `Number of contested resources all adjusted to be spawning in an even amount, in order to ensure that both sides of the river receive an equal share of resources`,
    //         ],
    //         [
    //           "fix",
    //           `Fixed an indexing error in the map script that was resulting in the river giving one side of the map a bit more playable space than the other. The river should now perfectly split the playable sides in half.`,
    //         ],
    //         ["fix", `Space between sheep herds was increased to cut down on the instances of 5+ sheep spawning together`],
    //         [
    //           "fix",
    //           `Adjusted the spawning of the cliffs to ensure that each player is given a flat path from their start position to the river. Previously, some players could receive a map generation where their starting area was protected by a long cliff, while the opponent was in a much more open area. This should help in evening up the geography.`,
    //         ],
    //       ],
    //     },
    //     {
    //       items: ["maps/hill-and-dale"],
    //       civs: [],
    //       diff: [
    //         ["fix", `We’ve tuned down wolf spawns from 2 per Sacred Site to 1 per Sacred Site.`],
    //         [
    //           "fix",
    //           `We’ve tuned starting forests to not be able to close off a full ramp to the player’s plateau. Players will now get one regular forest and one smaller forest on their plateau`,
    //         ],
    //         [
    //           "fix",
    //           `Overhauled how the plateaus spawn to provide a more consistent experience. Plateau sizes will now be the same for both players, and team plateau sizes can no longer sometimes be very disproportional.`,
    //         ],
    //         ["fix", `The main plateau entry ramp had its size slightly increased.`],
    //       ],
    //     },
    //     {
    //       items: ["maps/king-of-the-hill"],
    //       civs: [],

    //       // We've done an overhaul to the King of the Hill map to ensure that generations are more even and consistent. We saw previously that some players could have very little wood near their TC, or that their path to the top of the hill was much longer or more difficult than their opponents. We also saw many instances of the gold and stone being distributed on the hill unfairly. We've taken out a bunch of the more unfair aspects of the randomness of these parameters. On new generations, you should now see:
    //       diff: [
    //         [
    //           "fix",
    //           `Overhauled hill generation to ensure fairness between players. Pathways up the hill are now based directly on player spawn locations, with players getting a straight shot access to the top of the hill. Large gold and stone locations are mirrored on the hill to provide equal access to contested resources.`,
    //         ],
    //         ["fix", `Removed all random forests on the map.`],
    //         [
    //           "fix",
    //           `A dense perimeter forest was added that rings the entire map. The goal of forests on KotH was always to need to balance fighting for central gold and stone with the necessity of maintaining a presence on the outer parts of the map for wood and food, but we were seeing many instances where wood access between players could be incredibly unbalanced. This change should ensure that all players have access to ample wood on the map edges.`,
    //         ],
    //       ],
    //     },
    //   ],
    // },
  ],
};
