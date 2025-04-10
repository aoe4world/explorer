import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-8.2.218",
  buildId: "8.2.218",
  name: "Patch 8.2.218",
  season: 5,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-8-2-218/",
  summary: "Changes to repair rate, nerfs to Rams and Lightweight Beams, buffs to Bombards and Ribauldequins, HRE, Malians and Mongols + several fixes.",
  introduction: `
![](https://www.ageofempires.com/wp-content/uploads/2023/09/HallowsHearth_Patch_1920x1080.png)
  "Today’s patch (September 26th) packs in a number of changes across the board – introducing balance updates including a rework to the Repair mechanic, stability improvements and preparing for a spooky seasonal event that kicks off next month. We’re also bringing a new map rotation to Ranked Season Five and have plans to extend the season overall (more on that in a bit!)."`,
  date: new Date("2023-09-26T12:00:00Z"),
  sections: [
    {
      title: "Ranked Season",
      civs: [],
      changes: [],
      md: `
# New! Seasonal Event – Hallow’s Hearth
Starting next month, you’ll be able explore a delightfully spooky biome with our latest seasonal event, Hallow’s Hearth. This event features an eerie event-exclusive biome and 10 challenges to overcome for thematic rewards.  We hope you have a hauntingly good time!
> Hallow’s Hearth runs from October 3rd at 10:00 am PT through November 7th at 11:59 pm PT.

## Seasonal Biome: Hallow’s Hearth Biome
![Hallows Hearth](https://www.ageofempires.com/wp-content/uploads/2023/09/Biome_Hallows_Hearth_ageIV.png)
A dark and spooky environment with bare earth and sinister-looking trees. The Hallow’s Hearth biome brings a sense of eeriness just beyond the fog of war! This special biome will be available for a limited time throughout the seasonal event.

## Hallow’s Hearth Event
![](https://www.ageofempires.com/wp-content/uploads/2023/09/Events_Showcase_Template_Hallows_Hearth-2048x2048.png)
> The “Threatening” event challenge can be completed on any biome despite the in-game text.

## Login Events
Don’t miss out on these login rewards, available for a limited time only!
* Cat in a Hat – October 2nd at 10am PT through October 8th at 11:59pm PT
* Pumpkin Head – October 26th at 10am PT through November 1st at 11:59pm PT
* Roses – November 2nd at 10am PT through November 7th at 11:59pm PT

# Ranked Season Updates
![](https://www.ageofempires.com/wp-content/uploads/2023/06/s5_keyart_rankedseason-2400x1350.png)
Season Five’s Ranked Season will extend from October 23rd to November 13th at 11:59pm PT – enjoy the extra time to climb the ladder. Remember:  For the first time Ranked Rewards will be given out based on the highest rank you achieve at any point during the season!

# Map Pool Rotation
Today’s patch also comes with a full map rotation for Ranked play, and some map-related changes for Unranked Quickmatches!

#### Unranked Quickmatch Changes
* Hill and Dale and Wetlands have been added to the map pool for Unranked Quickmatch.
* Unranked map downvotes increased from 5 to 7.

#### 1v1 Ranked Map Pool
* Altai
* Danube River
* Dry Arabia
* Four Lakes
* Golden Heights
* High View
* Hill and Dale
* Lipany
* Prairie

#### Team Ranked Map Pool
* Dry Arabia
* Golden Heights
* Hideout
* High View
* Hill and Dale
* Lipany
* Prairie
* The Pit
* Wetlands

### Queue Dodging
Today’s build invalidates some common forms of Queue Dodging that exploited the game’s menus and UI. The actions needed to execute these dodges can no longer be performed in-game.

      `,
    },
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `
## Campaign (Console Only)
* Resolved an issue on console where the Auto Villager creation feature was not working on most campaign missions.

> This issue is still occurring in two missions: “1105, The Fall of Bayeux” within The Normans Campaign and “1514, Moscow versus Lithuania” within The Rise of Moscow. These will be addressed in future updates.*

## Mods & Content Editor
* Modded Win conditions no longer crash when they contain a starting building replacement that replaces the starting building with no building.

## UX/UI & Menus (All Platforms)
* Fixed an issue where some post-game ranked information text was cut off in certain regions.

## PC UX/UI & Menus
* Options to specify Audio Input/Output devices for Voice Chat have been added to PC platforms.

## Console UX/UI & Menus
* Map Seeds can now be copy/pasted in Skirmish Lobbies on console while using keyboard and mouse.
* LT + place rally points will always place a rally point regardless of the building selected or friendly building targeted settings.
* Fixed an issue where the Palisade Gate was in the wrong position when playing on console with a mouse and keyboard as the English.
* Double pressing ‘B’ whilst holding LT now deselects all units of the target type.
`,
    },
    {
      title: "Balance & Bugfixes",
      civs: [],
      changes: [
        {
          // * Lightweight Beams attack speed bonus reduced from +40% to 20%.
          items: ["technologies/lightweight-beams"],
          civs: [],
          diff: [["nerf", "Attack speed bonus reduced from +40% to 20%.  "]],
        },
        {
          // * Ram train time from Siege Workshops increased from 30 to 40 seconds.
          items: ["units/battering-ram", "units/clocktower-battering-ram"],
          civs: [],
          diff: [["nerf", "Train time from Siege Workshops increased from 30 to 40 seconds. "]],
          note: "This change is intended to specifically target late game rams. We also have longer-term goals to help scale them better throughout the Ages and ensure that melee units time to kill on Rams is in a good spot at all stages of the game.",
        },
        {
          // * Bombard cost reduced from 600 Gold/300 Wood to 500 Gold/350 Wood.
          items: ["units/bombard", "units/cannon", "units/royal-cannon"],
          civs: [],
          diff: [["buff", "Cost reduced from 600 Gold/300 Wood to 500 Gold/350 Wood."]],
        },
        {
          // * Removed aim time from Ribauldequins and added to reload time. This makes the unit more responsive while keeping firing speed the same.
          // * Ribauldequin cost reduced from 600 Gold/300 Wood to 500 Gold/350 Wood.
          items: ["units/ribauldequin"],
          civs: [],
          diff: [
            ["buff", "Removed aim time from Ribauldequins and added to reload time. "],
            ["buff", "Cost reduced from 600 Gold/300 Wood to 500 Gold/350 Wood."],
          ],
          note: "This makes the unit more responsive while keeping firing speed the same.",
        },
        {
          // * Boiling Oil radius increased from 1 to 1.1 tiles.
          items: ["technologies/boiling-oil"],
          civs: [],
          diff: [["buff", "Radius increased from 1 to 1.1 tiles."]],
        },
      ],
      md: `
### General Changes & Bugfixes
* Fixed crash that could occur when packing a Mongol building after Age Up.
* Fixed an issue that could cause a rare crash when resuming the game from suspend on Xbox consoles.
* Fixed a crash on Xbox related to fishing ships and the Villager Priority System.
* On the Xbox console, Fishing Ships are now counted in the Villager Priority System.

### Updates to Repair
* Base repair rate increased from 20 to 25 health per second.
* Repair diminishing returns formula adjusted so that repair with 3-10 Villagers is approximately 5% slower overall.

> This change is an overall reduction to repairing with larger numbers of Villagers, our intention here is to specifically target repairs vs Trebuchets so that defenders have a harder time stalling for long periods of time. We didn’t increase Trebuchet damage because our intent is not to increase the base time for a Trebuchet to destroy a Keep.*
`,
    },
    {
      title: "Civilization-Specific Changes",
      civs: [],
      changes: [],
    },

    {
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          // Corrected issue where Composite Bows was giving larger than intended attack speed bonus. Time between attacks increased from 1.12 to 1.25.
          items: ["technologies/composite-bows"],
          civs: ["ab"],
          diff: [["fix", "Time between attacks increased from 1.12 to 1.25."]],
          note: "Corrected issue where Composite Bows was giving larger than intended attack speed bonus.",
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          // Supervising a building with multiple Imperial Officials no longer stacks the bonuses. It is currently still possible to have multiple Imperial Officials supervise a building at the same time, but their bonuses will not combine, we intend to entirely prevent multiple supervisors in a future update.
          items: ["units/imperial-official"],
          civs: ["ch"],
          diff: [["fix", "Supervising a building with multiple Imperial Officials no longer stacks the bonuses."]],
          note: "It is currently still possible to have multiple Imperial Officials supervise a building at the same time, but their bonuses will not combine, we intend to entirely prevent multiple supervisors in a future update.",
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          // The first Madrasa built each game now grants 3 free Scholars upon completion. This includes the Hisar Academy landmark which acts as a Madrasa.
          items: ["buildings/madrasa", "buildings/hisar-academy"],
          civs: ["de"],
          diff: [["buff", "The first Madrasa built each game now grants 3 free Scholars upon completion."]],
          note: "This includes the Hisar Academy landmark which acts as a Madrasa.",
        },
      ],
    },
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          // Red Palace Landmark Arbalests granted to Town Centers and Keeps range reduced from 10 to 9.5.
          items: ["buildings/red-palace"],
          civs: ["fr"],
          diff: [["nerf", "Arbalests granted to Town Centers and Keeps range reduced from 10 to 9.5."]],
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          // Meinwerk Palace (II) Landmark
          // Riveted Chain Mail technology cost reduced from 45 Food/105 Gold to 30 Food/75 Gold.
          items: ["technologies/riveted-chain-mail"],
          civs: ["hr"],
          diff: [["buff", "Cost reduced from 45 Food/105 Gold to 30 Food/75 Gold (Meinwerk bonus included)."]],
        },
        {
          // Steel Barding technology cost reduced from 120 Food/300 Gold to 90 Food/210 Gold.
          items: ["technologies/steel-barding"],
          civs: ["hr"],
          diff: [["buff", "Cost reduced from 120 Food/300 Gold to 90 Food/210 Gold."]],
        },
        {
          // Landsknecht health increased from 80/95 to 85/100.
          items: ["units/landsknecht"],
          civs: ["hr"],
          diff: [["buff", "Health increased from 80/95 to 85/100."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          //Musofadi Stealth duration increased from 20 to 30 seconds.
          // Musofadi Stealth ability cooldown reduced from 60 to 30 seconds.
          items: ["units/musofadi-warrior", "units/musofadi-gunner"],
          civs: ["ma"],
          diff: [
            ["buff", "Stealth duration increased from 20 to 30 seconds."],
            ["buff", "Stealth ability cooldown reduced from 60 to 30 seconds."],
          ],
        },
        {
          // Precision Training technology increase to javelin damage increased from 2 to 3.
          items: ["technologies/precision-training"],
          civs: ["ma"],
          diff: [["buff", "Increase to javelin damage increased from 2 to 3."]],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          // New technology: Pax Mongolica
          // 350 Gold/150 Stone.
          // Outposts gain +3 fire armor and +30% HP (incorrect, it's 750+300 hp). Outpost changed to Stone Outpost visual.
          // Available at the Ovoo in Imperial Age.
          items: ["technologies/pax-mongolica"],
          civs: ["mo"],
          diff: [
            ["buff", "New technology: Outposts gain +3 fire armor and +300 HP."],
            ["buff", "Costs 700 Gold/300 Stone."],
            ["fix", "Outpost changed to Stone Outpost visual."],
            ["fix", "Available at the Ovoo in Imperial Age."],
          ],
        },
        {
          // Steppe Lancer upgrade moved from Imperial Age to Castle Age. Improved Steppe Lancers upgrade remains in the Imperial Age.
          items: ["technologies/steppe-lancers"],
          civs: ["mo"],
          diff: [["buff", "Steppe Lancer upgrade moved from Imperial Age to Castle Age."]],
          note: "Improved Steppe Lancers upgrade remains in the Imperial Age.",
        },
        {
          // Double Villager production cost reduced from 150 to 125 Stone.
          items: ["units/villager", "buildings/town-center"],
          civs: ["mo"],
          diff: [["buff", "Double Villager production cost reduced from 150 to 125 Stone."]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          // Istanbul Observatory Landmark production speed bonus increased from 60% to 100%.
          items: ["buildings/istanbul-observatory"],
          civs: ["ot"],
          diff: [["buff", "Production speed bonus increased from 60% to 100%."]],
        },
        {
          // Sipahi train time increased from 28 to 30 seconds.
          // Developer’s Note: This change fixes an issue where the Sipahi provides more resources per minute, compared to other units, when trained from Military Schools.
          items: ["units/sipahi"],
          civs: ["ot"],
          diff: [["buff", "Train time increased from 28 to 30 seconds."]],
          note: "This change fixes an issue where the Sipahi provides more resources per minute, compared to other units, when trained from Military Schools.",
        },
        {
          // Great Bombard changes:
          // Cost reduced from 900 Gold/450 Wood to 800 Gold/450 Wood.
          // Population reduced from 4 to 3.
          // Attack speed increased from 7.75 to 7.0.
          items: ["units/great-bombard"],
          civs: ["ot"],
          diff: [
            ["buff", "Cost reduced from 900 Gold/450 Wood to 800 Gold/450 Wood."],
            ["buff", "Population reduced from 4 to 3."],
            ["buff", "Attack speed increased from 7.75 to 7.0."],
          ],
        },
        {
          //  Great Bombard Emplacement cost reduced from 250 Gold/500 Stone to 250 Gold/400 Stone.
          items: ["technologies/great-bombard-emplacement"],
          civs: ["ot"],
          diff: [["buff", "Cost reduced from 250 Gold/500 Stone to 250 Gold/400 Stone."]],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          // Rus Scouts’ line of sight reduced by 1 tile to be normalized with all other civilizations.
          items: ["units/scout"],
          civs: ["ru"],
          diff: [["nerf", "Line of sight reduced by 1 tile to be normalized with all other civilizations."]],
        },
        {
          // Kremlin changes:
          // Castle Age Kremlin Militia health reduced from 125 to 115.
          // Castle Age Kremlin Militia damage reduced from 12 to 10.
          // Militia cost increased from 40 to 55 Food per ticket.
          items: ["buildings/kremlin"],
          civs: ["ru"],
          diff: [
            ["nerf", "Castle Age Kremlin Militia health reduced from 125 to 115."],
            ["nerf", "Castle Age Kremlin Militia damage reduced from 12 to 10."],
            ["nerf", "Militia cost increased from 40 to 55 Food per ticket."],
          ],
        },
      ],
    },
    {
      title: "Ongoing",
      civs: [],
      changes: [],
      md: `
  ### Known Issues
  * Loading Campaign Save Gives Popup Warning About Mods
  > We are aware that loading into a Campaign save file that was created before the current patch causes a popup warning indicating that the save file uses out-of-date mods. This is an erroneous error message and can be clicked through to ignore. We do not require any further reports of this issue.

  * Hallow’s Hearth Event Challenge “Threatening” Can be Triggered on Any Biome
  > We are aware that the event challenge “Threatening” for Hallow’s Hearth can be triggered on any biome, despite the in-game text saying it has to be the Hallow’s Hearth biome. This issue will not be fixed before the event’s end.

  ### Investigation
  Community-Reported Issues:
  Your reports continue being crucial to our prioritization and implementation of fixes and features in the game. Keep them coming!
  [Forum](https://forums.ageofempires.com/)
  For other known issues, please visit this page to see what’s being tracked:
  [Known Issues & Solutions](https://support.ageofempires.com/hc/articles/360051018451)
  `,
    },
    {
      title: "What's on the Horizon",
      civs: [],
      changes: [],
      md: `
![Sultans Ascend](https://www.ageofempires.com/wp-content/uploads/2023/09/AoE-IV_Sultans-Ascend-DLC_1920x1080_02.png)
# The Sultans Ascend Expansion
Lead powerful forces in defense of your homeland in The Sultans Ascend – the exciting new expansion to Age of Empires IV. Experience a brand-new campaign set in the Middle East, or command new armies with the Japanese and Byzantines.

* 2 New Civilizations
* 4 New Variant Civilizations
* New “The Sultans Ascend” Campaign
* 10 New Maps
* 2 New Biomes

> Pre-order now and join the ranks of legends. Your empire awaits! Coming November 14th!
[Pre-Order](https://www.ageofempires.com/buy-now/#AoE-IV-DLC)

### November Update
Paired with the release of our upcoming expansion, there will be a major update coming on November 14th. This update will also mark the start of Season Six, with the Ranked Season beginning the next day on the 15th. Stay tuned for all the new and exciting things coming to Age of Empires IV!
`,
    },
  ],
};
