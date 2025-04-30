import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-13.1.4420",
  buildId: "13.1.4420",
  name: "Patch 13.1.4420",
  season: 10,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-13-1-4420/",
  summary:
    "Patch with bugfixes, gameplay tweaks, and new seasonal game mode 'Conquest!'",
  introduction: `
    ![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2025/04/Conquerors_Cache_Patch_1920x1080-768x432.webp)
    Greetings, Age of Empires IV community! After rolling out the Knights of Cross and Rose expansion and a hotfix patch for 13.0, we are pretty happy with where things are at. However, as we all know, there is always room for improvement! We’re back with some bugfixes, gameplay tweaks, and a new seasonal game mode for you to enjoy.
    `,
  date: new Date("2025-04-22T17:00:00Z"),
  sections: [
    {
      title: "General Changes & Bugfixes",
      subtitle: "",
      civs: [],
      changes: [],
      md: `
        ### Seasonal Game Mode - Conquest!
        - Introduced the new seasonal game mode 'Conquest!' where players must capture and hold sacred sites to win.

        ### AI Updates
        - AI combat ships, villagers, and military units will now correctly continue to flee when faced with enemy Incendiary Ships, military units, and converting monks.
        - AI players will now avoid producing fishing boats if no deepwater fish deposits are present on the map.
        - AI players will now avoid building fishing boats on maps that do not have fishing spots.
        - AI players will now correctly build naval military on lake maps.
        - AI players will now avoid building naval military when it isn’t necessary to do so.
        - AI players will now be more aggressive after small-scale attacks if their squad is almost lost.
        - Knights Templar AI players will now age up efficiently.

        ### Hotkeys
        Added the following key binds:
          - Select all currently elected types
          - Select all economic units on screen
          - Select all military units on screen
          - Select all melee infantry on screen
          - Select all ranged infantry on screen
          - Select all cavalry on screen
          - Select all siege on screen
          - Select all traders
          - Select all trade ships
          - Cycle through idle Scout units
          - Cycle through idle religious units

        ### Maps

        General Map Changes
        - Corrected an issue that prevented Ronin from being hired if the player did not have any food.

        Enlightened Horizon
        - The closest berry patch has been removed for each player.
        - An additional berry patch shall spawn behind the player’s base next to their deer.
        - Sacred sites are spaced out further away from each other.
        - Neutral market has been replaced with an abandoned outpost.
        - A large gold vein, a market, and a Wolf’s Den will now spawn at the far edges of the map.
        - Relic spawn count corrected for FFAs.
        - Relics have been tuned to distribute more fairly.

        Carmel
        - For large deer, 2 deer packs of 10 appear for each player instead of 3 packs of 7.
        - Large deer packs avoid spawning next to each other and will distribute more evenly on the map.

        ### Caster Mode
        - The Caster Mode UI now has panels underneath the tech progress bar showing the current unit number and unit cap for Scholars Garrisoned, Prelates and Black Riders, Imperial Officials, Bannerman and Lords of Lancaster.
        - Overview Statistics card in Caster Mode no longer swaps players numbers.

        ### Bugfixes
        - Minimizing a ranked lobby page no longer reveals opponents’ names.
        - Using a taunt in a ranked lobby no longer reveals players names to opponents.
        - Fixed potential crash in Agincourt Historical Battle.
        - Fixed softlock that would occur if a player disconnected then reconnected during the lobby countdown.
        - Game now correctly detects AMD RX9070, RX7900 with latest drivers.
        - Fixed a crash that rarely occurred when playing larger-player matches with certain civilizations.
        - Dropping a carcass with scouts while being hit or delivering a hit will no longer prevent you from being able to pick up carcasses with that scout again.
        - Fixed an issue where Pit Mine text description displayed outdated information.
        `,
    },
    {
      title: "Balance",
      subtitle: "Global Changes",
      civs: [],
      changes: [
        {
          items: ["units/springald"],
          civs: [],
          diff: [
            ["nerf", "Range reduced from 8 to 7.5 tiles."],
            ["nerf", "Ranged resistance reduced from 60% to 55%."]
          ]
        },
        {
          items: ["units/fishing-boat"],
          civs: [],
          diff: [
            ["nerf", "Shoreline Fish gather rate reduced from 0.7 to 0.65."],
            ["nerf", "Deep Water Fish gather rate reduced from 0.8 to 0.75."]
          ]
        }
      ]
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [["buff", "Cistern cost decreased from 125 to 120 Stone."]]
        }
      ]
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["units/grenadier"],
          civs: ["ch"],
          diff: [
            ["buff", "Cost reduced from 120 Food 60 Wood 60 Gold to 100 Food 60 Wood 60 Gold."],
            ["buff", "Range increased from 3 to 3.5 tiles."]
          ]
        },
        {
          title: "Yuan Dynasty",
          items: [],
          civs: ["ch"],
          diff: [
            ["fix", "Updated the buff indicator for achieving the Yuan Dynasty to more clearly describe the benefit."]
          ]
        }
      ]
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["technologies/howdahs"],
          civs: ["de"],
          diff: [["nerf", "Howdah effect decreased from +30% to +25% health."]]
        },
        {
          items: ["technologies/armored-beasts"],
          civs: ["de"],
          diff: [["nerf", "Armored Beasts effect decreased from +25% to +20% health."]]
        },
        {
          items: ["technologies/professional-scouts"],
          civs: ["de"],
          diff: [["nerf", "Professional Scouts research time increased from 262 to 350 seconds."]]
        },
        {
          items: ["units/scholar", "buildings/dome-of-the-faith"],
          civs: ["de"],
          diff: [["nerf", "Scholar cost increased from 130 to 135 gold, Dome of Faith updated as well."]]
        }
      ]
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["buildings/burgrave-palace"],
          civs: ["hr"],
          diff: [["fix", "Fixed an issue where the Burgrave Charge bonus was incorrectly displayed on ranged infantry units."]]
        }
      ]
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["units/yumi-ashigaru"],
          civs: ["ja"],
          diff: [["buff", "Yumi Ashigaru cost reduced from 30 Food 35 Wood to 25 Food 35 Wood."]]
        }
      ]
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["units/musofadi-warrior"],
          civs: ["ma"],
          diff: [["buff", "Musofadi Warrior cost reduced from 50 Food 30 Gold to 45 Food 30 Gold."]]
        },
        {
          items: ["buildings/toll-outpost"],
          civs: ["ma"],
          diff: [["fix", "Fixed the Malian trading post exploit as reported by the community."]]
        }
      ]
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["technologies/monastic-shrines"],
          civs: ["mo"],
          diff: [["buff", "The Monastic Shrines technology is now available in the Castle Age."]]
        },
        {
          items: ["technologies/whistling-arrows"],
          civs: ["mo"],
          diff: [
            ["buff", "Cost reduced from 50 Food 125 Gold to 50 Food 75 Gold."],
            ["buff", "Improved version cost reduced from 175 Stone to 125 Stone."],
            ["buff", "Research time reduced from 60 seconds to 30 seconds."]
          ]
        },
        {
          items: ["technologies/additional-torches"],
          civs: ["mo"],
          diff: [
            ["buff", "Cost reduced from 200 Food 500 Gold to 150 Food 350 Gold."],
            ["buff", "Improved version cost reduced from 700 Stone to 500 Stone."]
          ]
        },
        {
          items: ["technologies/raid-bounty"],
          civs: ["mo"],
          diff: [
            ["buff", "Cost reduced from 100 Food 250 Gold to 75 Food 150 Gold."],
            ["buff", "Improved version cost reduced from 350 Stone to 225 Stone."],
            ["buff", "Research time reduced from 45 seconds to 30 seconds."],
            ["fix", "Fixed a bug where the Mongol Raid Bounty bonus only provides resources when destroying a building with torches, instead of simply igniting it with torches."]
          ]
        },
        {
          title: "Additional Fixes",
          items: [],
          civs: ["mo"],
          diff: [
            ["fix", "Fixed an exploit allowing Mongols to get more resources from the Wolf’s Den than intended. "],
          ]
        }
      ]
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          items: ["units/akinji"],
          civs: ["ot"],
          diff: [
            ["buff", "Cost reduced from 90 Food 80 Wood to 80 Food 80 Wood."],
            ["buff", "Production time reduced from 25 to 24 seconds."]
          ]
        }
      ]
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["units/lodya-fishing-boat"],
          civs: ["ru"],
          diff: [["nerf", "Lodya Fishing Boat Deep Water Fish gather rate reduced from 1.52 to 1.42."]]
        }
      ]
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
          items: ["buildings/lancaster-castle"],
          civs: ["hl"],
          diff: [["fix", "Lancaster Castle can no longer be placed within 8 tiles of an enemy Capital Town Center."]]
        },
        {
          items: ["units/demilancer"],
          civs: ["hl"],
          diff: [["nerf", "Demilancer (II) charge attack decreased from 16 to 12."]]
        },
        {
          items: ["units/yeoman"],
          civs: ["hl"],
          diff: [["nerf", "Yeoman cost increased from 45 Food and 45 Wood to 50 Food and 45 Wood."]]
        },
        {
          items: ["technologies/synchronized-shot", "units/yeoman"],
          civs: ["hl"],
          diff: [["nerf", "Slightly reduced the speed of Synchronized Shot projectiles."]]
        }
      ]
    },
    {
      subtitle: "Knights Templar",
      civs: ["kt"],
      changes: [
        {
          items: ["units/villager"],
          civs: ["kt"],
          diff: [["nerf", "Base villager wood income reduced from 0.65 to 0.63."]]
        },
        {
          items: ["units/hospitaller-knight"],
          civs: ["kt"],
          diff: [
            ["nerf", "Armor decreased from 5 melee 6 ranged to 4 melee 5 ranged."],
            ["nerf", "Health decreased from 210 to 195."],
            ["fix", "Is now correctly selected alongside military units and not as a religious unit."],
          ]
        },
        {
          items: ["upgrades/elite-hospitaller-knights"],
          civs: ["kt"],
          diff: [
            ["nerf", "Armor decreased from 5 melee 6 ranged to 4 melee 5 ranged."],
            ["nerf", "Health decreased from 210 to 195."]
          ]
        },
        {
          items: ["units/serjeant"],
          civs: ["kt"],
          diff: [["buff", "Serjeant damage increased in all tiers from 9 to 10 (II), 11 to 12 (III), and 13 to 14 (IV)."]]
        },
        {
          items: ["units/genitour"],
          civs: ["kt"],
          diff: [["buff", "Genitours range increased from 6 to 6.5."]]
        },
        {
          items: ["units/heavy-spearman"],
          civs: ["kt"],
          diff: [["buff", "Heavy Spearman bonus vs elephants increased from 5 to 8 (III), 6 to 10 (IV)."]]
        },
        {
          items: ["units/condottiero"],
          civs: ["kt"],
          diff: [
            ["buff", "Damage reduction from gunpowder sources increased from 20% to 33%."],
            ["buff", "Armor increased from 1 melee and 1 ranged to 2 melee and 3 ranged."]
          ]
        },
      ]
    },
    {
      subtitle: "Zhu Xi's Legacy",
      civs: ["zx"],
      changes: [
        {
          items: ["units/grenadier"],
          civs: ["zx"],
          diff: [
            ["buff", "Cost reduced from 120 Food 60 Wood 60 Gold to 100 Food 60 Wood 60 Gold."],
            ["buff", "Range increased from 3 to 3.5 tiles."],
          ]
        }
      ]
    }
  ]
};
