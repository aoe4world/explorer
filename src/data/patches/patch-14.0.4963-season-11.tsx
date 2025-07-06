import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-14.0.4963-season-11",
  buildId: "14.0.4963",
  name: "Season 11 Update",
  season: 11,
  type: "update",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-eleven-update-14-0-4963/",
  summary: "Season 11 brings the Trade Secrets event, a new seasonal game mode 'Chaotic Climate', AI updates, and a variety of balance changes and bug fixes.",
  introduction: `
  ![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2025/06/TS_Update_1920x1080.webp)
  Hello Age of Empires IV community and welcome to a shiny, new Season Eleven update preview! Coming next week, we’ve got lots of exciting things in store with a new event, updates to enemy AI, a bevy of balance changes and bugfixes, plus a fun new game mode! You can read all the details in the update below.
  `,
  date: new Date("2025-06-26T17:00:00Z"),
  sections: [
    {
      title: "Gameplay",
      subtitle: "AI Updates",
      civs: [],
      changes: [],
      md: `
* AI players will now have increased defense for their or their allies’ wonders.
* Hard AI and higher will now retreat in a more efficient manner.
* Fixes for AI upgrades research:
    * Lettre de Change (Knights Templar)
    * Treasure Towers (Knights Templar)
    * Templar Brother (Knights Templar)
    * Cistercian Abbeys (Holy Roman Empire)
* When playing Nomad mode, AI monarchs will now correctly path towards their corresponding Town Center in early game.
* In early Nomad mode, vulnerable AI monarchs will now attempt to flee if attacked.
* Holy Roman Empire AI players will now train Black Rider units.
      `,
    },
    {
      subtitle: "Hotkeys",
      civs: [],
      changes: [
        {
          items: ["buildings/market"],
          civs: [],
          diff: [
            ["fix", "Market Landmarks can now use the Shift hotkey to bulk buy and sell resources."],
            ["fix", "The Buy and Sell icons at the Market now dynamically update when players hold the Shift hotkey."],
          ],
        },
      ],
    },
    {
      subtitle: "Caster Mode",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [["fix", "Naval units are now immediately subtracted from the population value in the caster mode UI when they are destroyed."]],
        },
      ],
    },
    {
      subtitle: "UX/UI & Menus (All Platforms)",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [["fix", "Standardized tool-tips so that ‘Heavy’ units are described correctly as ‘Heavy’ instead of ‘armored’."]],
        },
      ],
    },
    {
      title: "Maps",
      civs: [],
      changes: [
        {
          title: "General Changes",
          items: [],
          civs: [],
          diff: [["fix", "Fixed a Points of Interest bug preventing the Wolf Den from taking damage when attacked from certain angles."]],
        },
        {
          items: ["maps/waterlanes"],
          civs: [],
          diff: [["fix", "AI players will now correctly transport villagers to other islands."]]
        },
        {
          items: ["maps/flankwoods"],
          civs: [],
          diff: [["fix", "Fixed an issue on Flankwoods where gold spawns were sometimes unevenly distributed."]]
        },
        {
          items: ["maps/sunkenlands"],
          civs: [],
          diff: [["fix", "Starting small gold nodes on Sunkenlands have been adjusted to prevent them from spawning too close to each other."]]
        },
        {
          items: ["maps/mountain-lakes"],
          civs: [],
          diff: [["fix", "Fixed an issue with too much water generation on Mountain Lakes."]]
        }
      ]
    },
    {
      title: "Balance & Bugfixes",
      subtitle: "General Changes & Bugfixes",
      civs: [],
      changes: [
        {
          items: ["units/scout"],
          civs: [],
          diff: [["fix", "Scouts will continue moving when the automatic drop off target is changed."]],
        },
        {
          title: "Deer",
          items: [],
          civs: [],
          diff: [
            ["nerf", "Deer flee distance reduced from 2.5 → 1.5 tiles when startled by nearby military units."],
            ["nerf", "Military units now need to be within 1 tile to startle a deer (down from 1.75 tiles)."],
            ["nerf", "Deer flee cooldown increased from 1 – 8 seconds to 14 – 20 seconds."],
          ],
        },
        {
          title: "General",
          items: [],
          civs: [],
          diff: [
            ["fix", "Defeated units that had a large sight radius (i.e. trebuchets) will no longer briefly reveal everything in a large circle but will appropriately follow the same visibility rules as when they were alive."],
          ],
        },
        {
          items: ["units/villager", "buildings/aachen-chapel", "buildings/kura-storehouse"],
          civs: ["hr", "od", "ja"],
          diff: [["fix", "Villagers will drop off resources when finishing building landmarks that act as resource drop offs."]],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          items: ["technologies/boot-camp"],
          civs: ["ab"],
          diff: [["buff", "Cost reduced from 50 Food 125 Gold → 25 Food 75 Gold."]],
        },
        {
          items: ["technologies/fresh-foodstuffs"],
          civs: ["ab"],
          diff: [["buff", "Villager discount increased from 35% → 40%."]],
        },
        {
          items: ["units/trader"],
          civs: ["ab"],
          diff: [["fix", "Fixed an issue where Trade Caravans used the incorrect description label."]],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["units/horseman", "technologies/expilatores"],
          civs: ["by"],
          diff: [["buff", "Explicatores reward for defeating Workers increased from 20 Gold → 30 Gold."]],
        },
        {
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [["fix", "Fixed an issue which prevented players from placing their Cistern near an ally or enemy Cistern."]],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["units/fire-lancer"],
          civs: ["ch"],
          diff: [["buff", "Charge damage increased from 13/15 → 15/17."]],
        },
        {
          items: ["technologies/extra-materials"],
          civs: ["ch"],
          diff: [["buff", "Repair rate increased from 20 → 25."]],
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["buildings/farm"],
          civs: ["en"],
          diff: [["buff", "Farm gather rate bonus increased in Dark Age, Feudal Age, and Castle Age from 15/20/25% → 20/25/30%."]],
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["units/prelate"],
          civs: ["hr"],
          diff: [["nerf", "Inspiration gather rate reduced from 40% → 35%."]],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: [],
          civs: ["ja"],
          diff: [["fix", "Japanese tech tree now includes their Barracks discount bonus."]],
        },
        {
          items: ["units/buddhist-monk", "technologies/nehan"],
          civs: ["ja"],
          diff: [["fix", "The buff applied from being in a Buddhist Conversion and Nehan Conversion now have buff indicators."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["technologies/javelin-emplacement"],
          civs: ["ma"],
          diff: [["buff", "Attack speed reduced from 1.38 → 1.12 seconds."]],
        },
        {
          items: ["units/mansa-javelineer"],
          civs: ["ma"],
          diff: [["buff", "Move speed reduced from 1.38 → 1.31."]],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["buildings/khaganate-palace"],
          civs: ["mo"],
          diff: [["nerf", "Train time increased by 10%."]],
        },
        {
          items: ["technologies/horticulture-improved", "technologies/fertilization-improved", "technologies/precision-cross-breeding-improved"],
          civs: ["mo"],
          diff: [["buff", "Effect increased from 5% → 7.5% per technology."]],
        },
        {
          items: ["buildings/pasture"],
          civs: ["mo"],
          diff: [["fix", "Fixed a bug where Mongol pastures would spawn their second sheep faster when a rally point was set during construction."]],
        },
        {
          items: ["units/khan"],
          civs: ["mo"],
          diff: [["fix", "Fixed an issue where the Khan would not deal more than 1 damage to buildings after researching Incendiary Arrows."]],
        },
        {
          items: ["buildings/kurultai"],
          civs: ["mo"],
          diff: [["fix", "Fixed an issue where placing two Kurultais from two different players next to one another would cause the aura to only be applied to one of the players."]],
        },
        {
          items: ["units/khan"],
          civs: ["mo"],
          diff: [["fix", "Fixed an issue preventing the buff indicator for the Khan’s Hunter from displaying sometimes."]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          title: "Imperial Council",
          items: [],
          civs: ["ot"],
          diff: [
            ["buff", "Mehter Drums now spawn 2 Mehters at the Town Center."],
            ["buff", "Akinji System now spawns 3 Akinji at the Town Center."],
            ["buff", "Extensive Fortifications now also discounts Town Centers."],
            ["buff", "Pax Ottomana Villager bonus production speed increased from 50% → 75%."],
            ["fix", "Fixed an issue where some Ottoman Vizier Points would allow players to go over 200 population."],
            ["fix", "Fixed an issue that caused the Imperial Council upgrades to be displayed incorrectly in the tech tree."],
          ],
        },
        {
          items: ["units/janissary"],
          civs: ["ot"],
          diff: [["nerf", "Bonus damage vs Cavalry reduced from 12/15 →11/13."]],
        },
        {
          items: ["technologies/janissary-guns"],
          civs: ["ot"],
          diff: [["nerf", "Damage reduced from +5 → +4."]],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["buildings/high-trade-house"],
          civs: ["ru"],
          diff: [["nerf", "Aura range reduced from 8.75 → 7.75 tiles."]],
        },
        {
          items: ["units/lodya-galley"],
          civs: ["ru"],
          diff: [["fix", "Fixed a bug where a Lodya Galley created after researching Heated Projectiles was unable to move."]],
        },
      ],
    },
    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          items: ["technologies/siege-carpentry"],
          civs: ["ay"],
          diff: [["buff", "The Structural Reinforcements ability (granted by Siege Carpentry) no longer has an activation cost."]],
        },
        {
          items: ["units/trade-caravan"],
          civs: ["ay"],
          diff: [["fix", "Fixed an issue where Trade Caravans used the incorrect description label."]],
        },
      ],
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
          items: ["units/lord-of-lancaster"],
          civs: ["hl"],
          diff: [["buff", "Ranged and melee armor now improves by +1 in Castle Age and +2 in the Imperial Age."]],
        },
        {
          items: ["units/hobelar"],
          civs: ["hl"],
          diff: [["nerf", "Attack speed reduced from 1.75 → 1.5."]],
        },
        {
          items: ["technologies/hill-training"],
          civs: ["hl"],
          diff: [["nerf", "Damage bonus reduced from 150% → 125%."]],
        },
        {
          items: ["units/demilancer"],
          civs: ["hl"],
          diff: [["nerf", "Health reduced from 140/160/200 → 130/150/190."]],
        },
        {
          items: ["units/yeoman"],
          civs: ["hl"],
          diff: [["nerf", "Elite Yeoman damage reduced from 9 → 8."]],
        },
        {
          items: ["technologies/collar-of-esses"],
          civs: ["hl"],
          diff: [["nerf", "Bonus damage vs Heavy reduced from +6 → +5."]],
        },
        {
          items: ["technologies/condensed-land-practices"],
          civs: ["hl"],
          diff: [
            ["nerf", "Cost increased from 100 Wood 250 Gold → 125 Wood 275 Gold."],
            ["nerf", "Bonus Manor health reduced from +200 → +100."],
          ],
        },
        {
          items: ["technologies/open-field-system"],
          civs: ["hl"],
          diff: [["nerf", "Bonus Manor health reduced from +300 → +200."]],
        },
        {
          items: ["technologies/ships-of-the-crown"],
          civs: ["hl"],
          diff: [
            ["nerf", "Bonus range reduced from +20% → +10%."],
            ["nerf", "Bonus health reduced from +20% → +15%."],
          ],
        },
        {
          items: ["units/villager"],
          civs: ["hl"],
          diff: [["fix", "Lancaster Villagers now have a buff indicator displaying their Wool Industries Sheep gather rate bonus."]],
        },
      ],
    },
    {
      subtitle: "Jeanne d'Arc",
      civs: ["je"],
      changes: [
        {
          items: [],
          civs: ["je"],
          diff: [
            ["fix", "Civilization preview now displays the correct number for Jeanne d’Arc’s economic technology discount."],
            ["fix", "Corrected the numbers displayed in Jeanne d’Arc’s tech tree for Valorous Inspiration."],
          ],
        },
        {
          items: ["technologies/companion-equipment"],
          civs: ["je"],
          diff: [["fix", "Fixed a bug that could result in the Companion Equipment upgrade disappearing or reappearing in unintended buildings."]],
        },
      ],
    },
    {
      subtitle: "Knights Templar",
      civs: ["kt"],
      changes: [
        {
          items: ["technologies/knights-hospitaller"],
          civs: ["kt"],
          diff: [
            ["buff", "Now increases worker move speed by +10%."],
            ["fix", "Fixed a crash that would occasionally occur when aging up as the Knights Templar."]
          ],
        },
        {
          items: ["technologies/kingdom-of-france"],
          civs: ["kt"],
          diff: [["nerf", "The French Commanderie discount and production speed no longer apply to naval units."]],
        },
        {
          items: ["units/genitour"],
          civs: ["kt"],
          diff: [
            ["buff", "Health increased from 100/120 → 105/125."],
            ["buff", "Line of sight has increased to better accommodate its attack range."],
          ],
        },
        {
          items: ["units/szlachta-cavalry"],
          civs: ["kt"],
          diff: [
            ["nerf", "Health reduced from 350 → 340."],
            ["nerf", "Damage reduced from 32 → 31."],
          ],
        },
        {
          items: ["units/venetian-galley"],
          civs: ["kt"],
          diff: [["fix", "Corrected a bug causing the Venetian Galley to benefit from the ranged damage Blacksmith upgrades."]],
        },
        {
          items: ["units/serjeant"],
          civs: ["kt"],
          diff: [["fix", "Fixed an issue where Serjeants wouldn’t benefit from the Fortress Desert Outposts aura until after Desert Citadels has been researched."]],
        },
      ],
    },
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["technologies/golden-cuirass"],
          civs: ["od"],
          diff: [
            ["nerf", "Damage reduction hitpoint threshold reduced from 30% → 20%."],
            ["nerf", "Cost increased from 50 Food 100 Gold → 75 Food 125 Gold."],
          ],
        },
      ],
    },
  ],
};
