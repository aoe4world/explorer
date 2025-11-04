import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-15-1-6970-season-12",
  buildId: "15.1.6970",
  name: "Season 12 Update",
  season: 12,
  type: "update",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-twelve-update-15-1-6970/",
  summary: `Today’s a huge day for Age of Empires IV! Not only are we starting a new Ranked Season, chock-full of exciting battles and seasonal events, but we’re also officially welcoming brand new players to the Age IV community with the start of our Early Access period on PlayStation 5. This update enables crossplay across all platforms, including those joining in for Early Access, and also brings with it AI improvements, a rework to the House of Lancaster’s Manors, plus additional updates made to our seasonal events approach, balance changes, and more.`,
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2025/10/S9_Season_Twelve_Hallows_Hearth_Update_Banner-1080x608.webp)
Today’s a huge day for Age of Empires IV! Not only are we starting a new Ranked Season, chock-full of exciting battles and seasonal events, but we’re also officially welcoming brand new players to the Age IV community with the start of our Early Access period on PlayStation 5. This update enables crossplay across all platforms, including those joining in for Early Access, and also brings with it AI improvements, a rework to the House of Lancaster’s Manors, plus additional updates made to our seasonal events approach, balance changes, and more.

In the meantime, make sure you have your calendars marked for November 4, when players will first be able to test their mettle in The Crucible and lead four new formidable armies in Dynasties of the East.

---

Thanks again to our amazing community members, all of whom have helped to make Age of Empires what it is today!

—The Age of Empires Team
  `,
  date: new Date("2025-10-30T17:33:19Z"),
  sections: [
    {
      title: "Gameplay",
      subtitle: "Manor Rework",
      civs: ["hl"],
      changes: [
        {
          items: ["buildings/manor"],
          civs: ["hl"],
          diff: [["buff", "House of Lancaster’s Manors now generate less resources passively, instead Manors have an aura in which Villagers generate Food and Wood when they are within the Aura. Lancaster players will need to strategically place their Manors to make sure they capture as many Villagers as possible."]],
        },
      ],
    },
    {
      subtitle: "AI Update",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [
            ["buff", "AI is now more effective in Full Moon game mode."],
            ["buff", "AI players will now take more conservative paths towards their enemies’ Wonders."],
            ["buff", "AI fishing boats will now attempt to flee or garrison when threatened."],
            ["buff", "AI villagers will not go idle anymore if two or more fishing boats go idle."],
            ["buff", "AI players will now trade more efficiently on naval maps."],
            ["fix", "Fixed a rare issue for AI units oscillating between attacking landmarks and buildings around them."],
            ["buff", "AI players will now progress more smoothly when spawned close to enemies."],
          ],
        },
      ],
    },
    {
      title: "Maps",
      civs: [],
      md: `We’re thrilled to be releasing 8 new maps with the Dynasties of the East expansion on *November 4th*, but you can get a sneak preview of three of them already as we add them directly into our Season Twelve Map Pool.`,
      changes: [
        {
          title: "General Map Changes",
          items: [],
          civs: [],
          diff: [["buff", "Map information is now available when viewing maps in Free-for-All Map Vote UI."]],
        },
        {
          items: ["maps/craters"],
          civs: [],
          diff: [["buff", "New Map: A meteor shower leaves behind deep craters that scar the surface of the land; some have filled with water and provide limited fishing opportunities while others contain meteorite fragments which can be gathered by daring Villagers. Meteorites can be mined for both Gold and Stone at the same time, but such a precious resource will surely be a catalyst for conflict."]]
        },
        {
          items: ["maps/canyon"],
          civs: [],
          diff: [["buff", "New Map: A waterlogged canyon snakes its way through the center of the map, dividing teams equally on either side. Teams can reach each other by ramps that lead down to the base of the canyon and by crossing the shallow water there, perhaps catching the glint of Relics reflecting on the water’s surface. Town Centers perch precariously on the Canyon edge; it’s rumored that if you watch carefully enough, enemy movements can be seen at the edge of the fog of war."]]
        },
        {
          items: ["maps/ocean-gateway"],
          civs: [],
          diff: [["buff", "New Map: ASurrounded by rugged cliffs, the four gateways provide critical access to the bounty of fish and naval trade available at the map’s edge. However, limited space for docks and wide-open flanks make Ocean Gateway a challenging balancing act between both land and water."]]
        },
      ],
    },
    {
      subtitle: "Map Pool Biomes",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [["buff", "All available biomes for each map have been updated for ranked or unranked play, increasing biome variation and introducing new biomes in multiplayer matches."]],
        },
      ],
    },
    {
      title: "Balance & Bugfixes",
      subtitle: "General Changes & Bugfixes",
      civs: [],
      changes: [
        {
          items: ["buildings/market"],
          civs: [],
          diff: [["fix", "Fixed an issue for Console players where the Market’s bulk Buy and Sell icons were not rendering correctly"]],
        },
        {
          items: ["units/villager"],
          civs: [],
          diff: [["buff", "Adjustments to multi-selection have been made so that it’s easier to access the Villager build menu when Villagers are selected with other units. If Villagers make up most of a multi-selection, then the Villager build menu will be displayed, and hotkeys will activate on the build menu instead of the command card."]],
        },
        {
          title: "General",
          items: [],
          civs: [],
          diff: [
            ["fix", "Fixed the leading out of sync issue which could occur at any time due to a problem with auras."],
            ["fix", "Fixed an issue where dynamic health bars would not be shown if units took damage from auras."],
            ["fix", "Fixed several crash issues, including a crash that could occur on console when you exceeded a certain number of friends."],
            ["fix", "Fixed issue where various rewards were not being properly unlocked and added to Player Profile."],
            ["fix", "Fixed an issue where English campfires could interrupt charge attacks."],
            ["fix", "Fixed an issue where Camel Lancer charge attacks were not stunned by Spearwall."],
            ["fix", "Fixed an exploit where it was possible to duplicate relics."],
            ["fix", "Mercenary Houses now display which contract was selected as a tooltip when selecting the building. We intend to follow this up in future updates with visual additions to the Mercenary House which shows more clearly which contract was chosen."],
          ],
        },
      ],
    },
    {
      subtitle: "Points of Interest",
      civs: [],
      changes: [
        {
          title: "Pack Wolves",
          items: [],
          civs: [],
          diff: [
            ["buff", "Health increased from 60 → 70."],
            ["buff", "Damage increased from 5 → 7."],
            ["buff", "Movement Speed increased by 0.2."],
            ["buff", "Delay for first spawn decreased from 5 minutes → 4 minutes game time."],
          ],
        },
      ],
    },
    {
      subtitle: "All Civilizations",
      civs: [],
      changes: [
        {
          title: "Generic",
          items: [],
          civs: [],
          diff: [
            ["buff", "Shoreline Fish food inventory increased from 500 → 600."],
            ["buff", "Boar food inventory increased from 2200 → 2400."]],
        },
        {
          items: ["units/scout"],
          civs: [],
          diff: [["nerf", "Deer now slowly lose food over time while being carried by Scouts."]],
        },
        {
          items: ["units/fishing-boat"],
          civs: [],
          diff: [["buff", "Fishing Boat gather rate from Shoreline Fish increased from 0.65 → 0.675."]],
        },
        {
          items: ["units/lodya-fishing-boat"],
          civs: ["ru"],
          diff: [["buff", "Lodya gather rate from Shoreline Fish gather rate increased from 1.26 → 1.2825."]],
        },
        {
          items: ["technologies/armored-hull"],
          civs: [],
          diff: [
            ["buff", "Cost decreased from 150 Food 350 Gold → 100 Food 200 Gold."],
            ["buff", "Research time reduced from 30 → 20 seconds."],
          ],
        },
        {
          items: ["technologies/springald-crews"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 150 Food 350 Gold → 100 Food 250 Gold."],
            ["buff", "Research time reduced from 35 → 25 seconds."],
          ],
        },
        {
          items: ["technologies/incendiaries"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 100 Food 250 Gold → 75 Food 125 Gold."],
            ["buff", "Research time reduced from 30 → 20 seconds."],
          ],
        },
        {
          items: ["technologies/extra-hammocks"],
          civs: [],
          diff: [
            ["buff", "Cost decreased from 100 Wood 250 Gold → 75 Wood 125 Gold."],
            ["buff", "Research time decreased from 30 → 20 seconds."],
          ],
        },
        {
          items: ["units/galley", "units/dhow", "units/junk", "units/light-junk", "units/lodya-galley", "units/hunting-canoe"],
          civs: [],
          diff: [["buff", "Arrow Ship projectile speed increased by 20%."]],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          items: ["technologies/trade-wing", "units/trade-caravan"],
          civs: ["ab"],
          diff: [["buff", "Number of Camel Traders spawned from the Trade Wing increased from 3 → 4 in Feudal Age, 4 → 5 in Castle Age, and 5 → 6 in Imperial Age."]],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["technologies/liquid-explosives"],
          civs: ["by"],
          diff: [
            ["buff", "Cost decreased from 100 Wood 250 Gold → 75 Wood 125 Gold."],
            ["buff", "Research time reduced from 30 seconds → 20 seconds."],
          ],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          title: "Tax Adjustments",
          items: [],
          civs: ["ch"],
          diff: [
            ["nerf", "Tax granted for unit production reduced from 4 → 2."],
            ["nerf", "Tax granted from researching technologies reduced from 32 → 24."],
          ],
        },
        {
          items: ["buildings/village"],
          civs: ["ch"],
          diff: [["buff", "Village cost decreased from 125 Wood → 100 Wood."]],
        },
        {
          items: ["technologies/ancient-techniques"],
          civs: ["ch"],
          diff: [["buff", "Ancient Techniques gather rate effect increased from 4% → 5% per dynasty."]],
        },
        {
          items: ["technologies/thunderclap-bombs"],
          civs: ["ch"],
          diff: [
            ["nerf", "Damage per projectile decreased from 8 → 6."],
            ["nerf", "Number of projectiles decreased from 8 → 7."],
          ],
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["abilities/campfire", "units/man-at-arms"],
          civs: ["en"],
          diff: [
            ["buff", "Now requires Feudal Age."],
            ["buff", "Line of Sight improvement Aura now also improves nearby Villagers Huntable gather rate by +10%."],
            ["buff", "Aura radius increased by 1 tile."],
            ["buff", "Health increased from 1 → 100."],
            ["buff", "Man-at-Arms can now also use the Campfire ability."],
          ],
        },
        {
          items: ["buildings/council-hall", "units/longbowman"],
          civs: ["en"],
          diff: [["buff", "Council Hall now produces Longbowmen at a 5% discount."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["buildings/farimba-garrison", "units/mansa-musofadi-warrior"],
          civs: ["ma"],
          diff: [
            ["buff", "Mansa Musofadi Melee Armor increased from 3 → 4."],
            ["buff", "Mansa Musofadi Veteran Melee Armor increased from 4 → 5."],
            ["buff", "Mansa Musofadi Elite Melee Armor increased from 5 → 6."],
            ["buff", "Mansa Musofadi Damage increased from 8 → 9."],
            ["buff", "Mansa Musofadi Veteran Damage increased from 9 → 10."],
            ["buff", "Mansa Musofadi Elite Damage increased from 12 → 13."],
          ],
        },
        {
          items: ["units/freeborn-warrior"],
          civs: ["ma"],
          diff: [["buff", "Freeborn Warrior cost reduced from 90 Food 35 Gold → 80 Food 35 Gold."]],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["buildings/the-white-stupa"],
          civs: ["mo"],
          diff: [["buff", "The White Stupa landmark now decreases the Stone cost of unit double production by 50%."]],
        },
        {
          title: "Packed Buildings",
          items: [],
          civs: ["mo"],
          diff: [
            ["fix", "Mongol packed buildings no longer fail to unpack on a location occupied by many units."],
            ["fix", "Packed buildings are no longer tagged as Siege units."]
          ],
        },
        {
          items: ["technologies/horticulture-improved", "technologies/double-broadax-improved", "technologies/specialized-pick-improved"],
          civs: ["mo"],
          diff: [
            ["buff", "Improved Horticulture, Improved Fertilization, and Improved Precision Cross-Breeding have been merged into a single technology: Improved Horticulture. Effect set to 20% increased Food gather rate. Cost set to 500 Stone."],
            ["buff", "Improved Double Broadax, Improved Lumber Preservation, and Improved Crosscut Saw have been merged into a single technology: Improved Double Broadax. Effect set to 20% increased Wood gather rate. Cost set to 500 Stone."],
            ["buff", "Improved Specialized Pick, Improved Shaft Mining, and Improved Cupellation have been merged into a single technology: Improved Specialized Pick. Effect set to 20% increased Gold gather rate. Cost set to 500 stone."],
          ],
          note: `Having 3 tiers for each gather rate upgrade required a lot of clicks and investment for marginal improvements. Now, the Improved versions of the economic upgrades should be more noticeable and have higher impact once researched.`,
        },
        {
          items: ["technologies/survival-techniques-improved"],
          civs: ["mo"],
          diff: [["buff", "Improved Survival Techniques bonus gather rate increased from 5% → 10%."]],
        },
        {
          items: ["technologies/forestry-improved"],
          civs: ["mo"],
          diff: [["buff", "Improved Forestry now also increases Wood carry capacity by 2."]],
        },
        {
          items: ["technologies/additional-torches-improved"],
          civs: ["mo"],
          diff: [["buff", "Improved Additional Torches Stone cost reduced from 500 → 400."]],
        },
        {
          items: ["technologies/lightweight-beams-improved"],
          civs: ["mo"],
          diff: [["buff", "Improved Lightweight Beams Stone cost reduced from 700 → 500."]],
        },
        {
          items: ["technologies/roller-shutter-triggers-improved"],
          civs: ["mo"],
          diff: [["buff", "Improved Roller Shutter Triggers now also increases Springald health by 10."]],
        },
        {
          items: ["technologies/greased-axles-improved"],
          civs: ["mo"],
          diff: [["nerf", "Improved Greased Axles bonus movement speed increased from 5% → 0%."]],
        },
        {
          items: ["technologies/yam-network-improved"],
          civs: ["mo"],
          diff: [["buff", "Improved Yam Network Stone cost reduced from 350 → 250."]],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["units/warrior-monk"],
          civs: ["ru"],
          diff: [["fix", "Fixed an issue which allowed Relics to be duplicated if the Rus Warrior monk was hit while dropping a Relic."]],
        },
        {
          items: ["units/horse-archer"],
          civs: ["ru"],
          diff: [
            ["buff", "Attack speed improved from 2.125 → 1.75."],
            ["nerf", "Damage reduced from 12 → 10."],
            ["nerf", "Elite Damage reduced from 14 → 12."],
          ],
        },
        {
          items: ["buildings/hunting-cabin"],
          civs: ["ru"],
          diff: [["nerf", "Hunting Cabin income reduced by 15%."]],
          note: `The Gold income cap remains the same at 420 Gold per minute; you will now need to build more Hunting cabins to achieve the maximum income.`,
        },
      ],
    },
    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          items: ["technologies/sultans-mamluks"],
          civs: ["ay"],
          diff: [["buff", "Sultan’s Mamluks on kill effect duration increased from 10 → 30 seconds."]],
        },
        {
          items: ["technologies/feudal-economic-wing-industry", "technologies/castle-economic-wing-industry", "technologies/imperial-economic-wing-industry"],
          civs: ["ay"],
          diff: [
            ["buff", "Feudal Age resources increased from 350 Wood → 400 Wood."],
            ["buff", "Castle Age resources increased from 800 Wood → 900 Wood."],
            ["buff", "Imperial Age resources increased from 900 Stone → 1000 Stone."],
          ],
        },
        {
          items: ["technologies/feudal-trade-wing-bazaar", "units/bedouin-skirmisher", "units/bedouin-swordsman"],
          civs: ["ay"],
          diff: [
            ["buff", "Bedouin Skirmisher health increased from 80 → 90."],
            ["buff", "Bedouin Swordsman health increased from 155 → 160."],
            ["buff", "Bedouin Swordsman damage increased from 10 → 11."],
          ],
        },
      ],
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
          items: ["buildings/manor"],
          civs: ["hl"],
          diff: [
            ["buff", "Manors now have an aura that generates 4 Food and 2 Wood per minute per Villager. Does not stack with multiple Manors."],
            ["buff", "Manors are now a drop-off building for all resources."],
            ["nerf", "Manor base income reduced from 60 Food 45 Wood → 30 Food 10 Wood per minute."],
            ["nerf", "Manor cost increased from 200 Wood 100 Stone → 225 wood 100 Stone."],
          ],
        },
        {
          items: ["technologies/condensed-land-practices"],
          civs: ["hl"],
          diff: [
            ["buff", "Condensed Land Practices upgrade cost reduced from 125 Wood 275 Gold → 75 Wood 175 Gold."],
          ],
        },
        {
          items: ["technologies/open-field-system"],
          civs: ["hl"],
          diff: [
            ["buff", "Open Field System upgrade cost reduced from 200 Wood 400 Gold → 150 Wood 250 Gold."],
          ],
        },
        {
          items: ["buildings/lancaster-castle", "buildings/manor"],
          civs: ["hl"],
          diff: [["buff", "The Lancaster Castle no longer has an influence area, instead it now increases the health and adds an Arrowslit to all Manors regardless of location."]],
        },
        {
          items: ["units/garrison-command"],
          civs: ["hl"],
          diff: [["nerf", "Wynguard Garrison Command cost increased from 300 Food 150 Wood → 300 Food 200 Wood."]],
        },
        {
          items: ["units/scout"],
          civs: ["hl"],
          diff: [["nerf", "Scouts can no longer use the Campfire ability as it is now exclusive to English."]],
        },
      ],
    },
    {
      subtitle: "Knights Templar",
      civs: ["kt"],
      changes: [
        {
          items: ["technologies/principality-of-antioch"],
          civs: ["kt"],
          diff: [["buff", "Melee damage increased from 10% → 15%."]],
        },
        {
          items: ["technologies/republic-of-genoa"],
          civs: ["kt"],
          diff: [["nerf", "Pilgrims Gold income improvement decreased from 30% → 20%."]],
        },
        {
          items: ["units/hospitaller-knight"],
          civs: ["kt"],
          diff: [
            ["buff", "Hospitaller Knight Movement Speed increased from 1.19 → 1.25."],
            ["buff", "Hospitaller Knight Health increased from 140 → 145 (Veteran and Elite unchanged)."],
          ],
        },
        {
          items: ["units/genitour"],
          civs: ["kt"],
          diff: [
            ["buff", "Genitour Damage increased from 5 → 6."],
            ["buff", "Genitour Elite Damage increased from 7 → 8."],
          ],
        },
        {
          items: ["units/szlachta-cavalry"],
          civs: ["kt"],
          diff: [
            ["nerf", "Slzachta Cavalry Damage decreased from 31 → 30."],
            ["nerf", "Slzachta Cavalry Health decreased from 340 → 330."],
          ],
        },
        {
          items: ["units/teutonic-knight"],
          civs: ["kt"],
          diff: [
            ["buff", "Teutonic Knight Movement Speed increased from 0.9 → 0.975."],
          ],
        },
        {
          items: ["technologies/rule-of-templars"],
          civs: ["kt"],
          diff: [["fix", "Fixed an issue that allowed the Rule of Templars upgrade to be researched multiple times."]],
        },
        {
          items: ["technologies/lumber-preservation"],
          civs: ["kt"],
          diff: [
            ["nerf", "Villager Wood gather rate decreased from 0.63 → 0.60."],
            ["buff", "Villager Wood gather rate scaling per age increased from 15% → 20%."],
          ],
        },
        {
          items: ["technologies/safe-passage"],
          civs: ["kt"],
          diff: [
            ["buff", "Safe Passage cost changed from 200 Food 100 Wood → 100 Food 200 Wood."],
          ],
        },
        {
          items: ["technologies/sanctuary"],
          civs: ["kt"],
          diff: [
            ["buff", "Sanctuary cost changed from 300 Food 150 Wood → 200 Food 250 Wood."],
          ],
        },
        {
          items: ["buildings/harbor"],
          civs: ["kt"],
          diff: [
            ["buff", "Harbors replace Docks, offering protection to nearby ships, increased durability, and an improved naval emplacement."],
            ["buff", "Harbor has increased health (1500 → 2250)."],
            ["buff", "Harbor has 2 Fire Armor."],
            ["buff", "Harbor healing aura also increases nearby ship maximum Health by 15%."],
            ["buff", "Harbor Costs 250 Wood."],
          ],
        },
        {
          items: ["technologies/naval-springald-emplacement"],
          civs: ["kt"],
          diff: [
            ["buff", "Naval Arrowslit Emplacement replaced with Naval Springald Emplacement which deals more damage."],
            ["buff", "Naval Springald Emplacement Costs 150 Wood 200 Stone."],
            ["buff", "Naval Springald Emplacement Deals 42 damage."],
          ],
        },
      ],
    },
    {
      subtitle: "Zhu Xi's Legacy",
      civs: ["zx"],
      changes: [
        {
          title: "Tax Adjustments",
          items: [],
          civs: ["zx"],
          diff: [
            ["nerf", "Tax granted for unit production reduced from 4 → 2."],
            ["nerf", "Tax granted from researching technologies reduced from 32 → 24."],
          ],
        },
        {
          items: ["buildings/village"],
          civs: ["zx"],
          diff: [["buff", "Village cost decreased from 125 Wood → 100 Wood."]],
        },
        {
          items: ["technologies/thunderclap-bombs"],
          civs: ["zx"],
          diff: [
            ["nerf", "Damage per projectile decreased from 8 → 6."],
            ["nerf", "Number of projectiles decreased from 8 → 7."],
          ],
        },
      ],
    },
  ],
};