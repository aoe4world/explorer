import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-9.1.370-season-six",
  buildId: "9.1.370",
  name: "Season Six Update",
  season: 6,
  type: "update",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-9-1-370/",
  summary: "Balance changes to the new civilizations and landmarks, including the Floating Gate, Bazaar Trade Wing and Imperial Hippodrome",
  introduction: `
![](https://www.ageofempires.com/wp-content/uploads/2023/11/TonsOToys_Patch_1920x1080.webp)
"The festive season is in the air in Age of Empires IV with today's minor patch (December 6th) -- join in the fun with our upcoming Tons o' Toys seasonal event, chill out in our seasonal Winter biome, or bring the heat to your opponent with the updates to the new civilizations introduced in our recent expansion! Changes introduced today include:

- Stability fixes for campaign and multiplayer.
- Additional fixes to improve server latency, meant to pair with improvements made in recent server maintenances.
- Adjustments to several maps.
- Several corrections to localization.
- A new official mod: Free Camera.
- Balance changes focused around the Japanese and Byzantines, as well as the variant civilizations.
- ...plus bug fixes and further balance improvements.

Read more below."`,
  date: new Date("2023-12-06T18:00:00Z"),
  sections: [
    {
      title: "Seasonal Event: Tons o’ Toys",
      civs: [],
      changes: [],
      md: `
      Stay frosty this winter season with our Tons o' Toys seasonal event! Complete these cool challenges to unlock a flurry of in-game rewards. Unwrap these presents while you can! Tons o' Toys runs from 10:00am PT on Dec 12th (UTC) through 11:59pm PT on Jan 11th, 2024 (UTC).

![](https://www.ageofempires.com/wp-content/uploads/2023/11/TonsOToys_Event_Rewards_Showcase-1080x1080.webp)`,
    },
    {
      title: "Build Spotlight",
      civs: [],
      changes: [],
      md: `
## Stability Fixes
A number of compounding events led to server issues reported on November 18th and 19th. Since then, we’ve taken several steps to improve server latency and stability, including the previously communicated server maintenance windows on November 23rd and 29th. This patch also includes some game-side fixes meant to act in tandem with improvements already made to the server. Thank you all for the reports during this time.

## Map Adjustments
Our most recent major update introduced 3 new maps, while our expansion added an additional 10. Several balance changes and bug fixes have been made to some of these and existing maps, detailed in Maps section further on.

## Localization
Several players have noted that some of the translations in our expansion were inconsistent with the quality of localization for Age of Empires IV. Thanks to community reporting, we have identified some of these mistranslations and today’s patch fixes many of them, especially with our Chinese localizations.

We welcome further input and discussion on the Age Forums, where our community heroes have already been hard at work. Thank you!

## New Official Mod: Free Camera
By popular request, we are introducing a new official mod to allow creators to freely move the camera for taking videos and screenshots. The “Free Camera” mod unlocks the camera from its default constraints and allows movement around without limit.

## Balance Changes
With the introduction of 2 new civilizations and 4 variant civilizations, most of today’s balance changes are focused on the impact these new additions have had on recent gameplay and as such there are more balance changes than typical for our minor patches. You can read more about these in the Civilization-Specific Changes section below.
`,
    },
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `
### AI Updates

-   Fixed issue that prevented AI armies from merging with reinforcements. The AI now forms bigger armies and is less likely to abandon half its units in a fight.
-   Zhu Xi's Legacy AI players will now take advantage of the abilities provided by the Temple of the Sun Landmark.
-   AI player's Scouts will not drop sheep off at docks on naval maps anymore.
-   AI no longer uses half its army as trebuchet hype team that idly watches while the trebuchet tries its hardest to hit a moving target. AI now only uses a handful of units to guard its siege and the rest of the army continues to fight.

### Art of War

-   Fixed a Fatal Scar error that could occur during the Art of War mission *Late Siege*.

### Campaign

-   Fixed a crash that could occur while loading into the tutorial.

> This change has reset Dynamic Training Hints for all players.

-   Fixed a crash that could occur on the mission *The Battle of Mansurah* in *The Sultans Ascend* campaign if the player survived for 40 minutes on hard mode.
-   Fixed a Fatal Scar error that could occur during the missions *Defense of Tyre* and *Raiders of the Red Sea* in *The Sultans Ascend* campaign.
-   Fixed an error that could occur in the mission *Mansurah *in *The Sultans Ascend* campaign when the player killed enemy units engaged in idle activities.
-   Fixed a rare error in the mission *Raiders of the Red Sea* in *The Sultans Ascend* campaign that could occur when destroying enemy fleets when you didn't have any docks.

### Quickmatch

-   Fixed an issue which prevented players from joining the Quickmatch queue due to their map downvote selections resetting when too many maps were selected. Players may now downvote the intended number of maps.

### UX/UI & Menus (All Platforms)

-   Fixed inconsistent codex naming conventions for new and variant civilizations.
-   Fixed a number of inaccurate localizations in Chinese languages.
-   Fixed several localizations in Spanish languages that cutoff at the first mathematical symbol.
-   The player's scoreboard now displays the player's civilization flag.
`,
    },
    {
      title: "Maps",
      civs: [],
      changes: [],
      md: `
      ## General Map Changes

      -   Fixed crash when trying to save/load a game while having save games from modded maps.
      -   Fixed a rare issue where neutral large gold deposits would spawn next to the player's base on small sized Dry Arabia and Forts maps.

      > We are tracking similar issues on additional maps.

      ## Map-Specific Changes

      ### African Waters

      -   Fixed an issue on African Waters map where large gold deposits failed to spawn on top of the elevated plateau.

      ### Archipelago

      -   Corrected an issue where Random Starting Locations on Archipelago were not randomizing correctly.

      ### Baltic

      -   Sacred sites should no longer spawn next to each other on Baltic.

      ### Boulder Bay

      -   Free for All games on Boulder Bay should no longer split player spawns into 2 groups as if it was a team vs team configuration.

      ### Canal

      -   Town Centers on Canal should no longer spawn submerged within the river's waters.

      ### Glade

      -   Units can no longer pass between sparse wood lines in Glade on large and gigantic maps.

      ### Golden Pit

      -   Fixed a rare issue on Golden Pit where large gold deposits were not spawning inside the pit.
      -   Removed Neutral Trade Post from Golden Pit and repositioned Sacred Sites to the outskirts of the pit.

      ### Rocky River

      -   On Rocky River, 5 Berries spawn per player in a more contested and balanced way, and 2 Fish spawn per pond instead of 4.

      ### Thickets

      -   Fixed an issue on Thickets map where stone deposits could spawn too close to wood lines, preventing Ovoo placement for Mongols players.
      -   Reduced Sacred Sites from 3 to 2 on Thickets, changed secondary site to spawn contested between the players.
      `,
    },
    {
      title: "Balance & Bugfixes",
      civs: [],
      changes: [],
    },
    {
      subtitle: "General Changes & Bugfixes",
      civs: [],
      changes: [
        {
          // Trader production time increased from 25 seconds to 30 seconds.
          items: ["units/trader"],
          civs: [],
          diff: [["nerf", "Production time increased from 25 seconds to 30 seconds."]],
        },
        {
          // Fixed an issue where relics could be duplicated using transport ships.
          items: ["units/transport-ship"],
          civs: [],
          diff: [["fix", "Relics can no longer be duplicated using transport ships."]],
        },
        {
          // Walls no longer generate gap fillers in the space between the wall and individual trees. Walls will continue to generate gap fillers against dense forests.
          items: ["buildings/palisade-wall", "buildings/stone-wall", "buildings/fortified-palisade-wall"],
          civs: [],
          diff: [
            [
              "fix",
              "Walls no longer generate gap fillers in the space between the wall and individual trees. Walls will continue to generate gap fillers against dense forests.",
            ],
          ],
        },
        {
          // Fixed an issue where gates could be built overlapping enemy walls, allowing units to pass through.
          items: ["buildings/stone-wall-gate", "buildings/palisade-gate", "buildings/fortified-palisade-gate"],
          civs: [],
          diff: [["fix", "Fixed an issue where gates could be built overlapping enemy walls, allowing units to pass through."]],
        },
        {
          // Fixed some buildings with upgrades having the wrong appearance in fog of war after being destroyed.
          // Fixed crash that could occur when issuing or cancelling a lot of commands at once.
          items: [],
          civs: [],
          diff: [
            ["fix", "Fixed some buildings with upgrades having the wrong appearance in fog of war after being destroyed."],
            ["fix", "Fixed crash that could occur when issuing or cancelling a lot of commands at once."],
          ],
        },
      ],
    },
    {
      subtitle: "Siege Updates (All Civilizations)",
      civs: [],
      changes: [
        {
          //         Trebuchet
          // Counterweight Trebuchet attack speed improved from 12.625 to 11.375.
          items: ["units/counterweight-trebuchet", "units/clocktower-counterweight-trebuchet"],
          civs: [],
          diff: [["buff", "Attack speed improved from 12.625 to 11.375."]],
        },
        {
          // Mongols’ Traction Trebuchet attack speed improved from 9.625 to 8.625.
          items: ["units/traction-trebuchet"],
          civs: ["mo"],
          diff: [["buff", "Attack speed improved from 9.625 to 8.625."]],
        },
        {
          // Culverin ranged armor reduced from 20 to 10.
          items: ["units/culverin", "units/royal-culverin"],
          civs: [],
          diff: [["nerf", "Ranged armor reduced from 20 to 10."]],
        },
        {
          // Springald ranged armor reduced from 20 to 10.
          items: ["units/springald"],
          civs: [],
          diff: [["nerf", "Ranged armor reduced from 20 to 10."]],
        },
      ],
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
          // House of Wisdom
          // Corrected an issue where Traders would not spawn when using Trade Wing to go to the Feudal Age.
          items: ["buildings/house-of-wisdom", "technologies/trade-wing"],
          civs: ["ab"],
          diff: [["fix", "Corrected an issue where Traders would not spawn when using Trade Wing to go to the Feudal Age."]],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          //         Starting Stone increased from 50 to 100.
          items: [],
          civs: ["by"],
          diff: [["buff", "Starting Stone increased from 50 to 100."]],
        },
        {
          // Imperial Hippodrome Landmark
          // Starting Triumph supply points reduced from 30 to 10.
          // Triumph ability duration reduced from 1.5 seconds per supply point to 1 second per supply point.
          // The maximum number of Triumph points increased from 40 to 45
          items: ["buildings/imperial-hippodrome"],
          civs: ["by"],
          diff: [
            ["nerf", "Starting Triumph supply points reduced from 30 to 10."],
            ["nerf", "Triumph ability duration reduced from 1.5 seconds per supply point to 1 second per supply point."],
            ["buff", "The maximum number of Triumph points increased from 40 to 45."],
          ],
        },
        {
          // Greek Fire Projectiles technology no longer applies to non-Trebuchet units.
          items: ["technologies/greek-fire-projectiles"],
          civs: ["by"],
          diff: [["fix", "Greek Fire Projectiles technology no longer applies to non-Trebuchet units."]],
        },
        {
          // Cataphracts
          // Health reduced from 425 to 405 in the Imperial Age
          items: ["units/cataphract"],
          civs: ["by"],
          diff: [["nerf", "Health reduced from 425 to 405 in the Imperial Age."]],
        },
        {
          // Numeri Technology
          // Reduced the amount of increased damage taken by trample targets from 25% to 15%.
          // Charging units will no longer be stopped if they charge through a Cheirosiphon’s fire.
          items: ["technologies/numeri"],
          civs: ["by"],
          diff: [
            ["nerf", "Reduced the amount of increased damage taken by trample targets from 25% to 15%."],
            ["fix", "Charging units will no longer be stopped if they charge through a Cheirosiphon’s fire."],
          ],
        },
        {
          // Corrected an issue where resources per minute would not appear on Byzantines Religious Buildings with Relics garrisoned.
          items: ["buildings/grand-winery", "buildings/monastery"],
          civs: ["by"],
          diff: [["fix", "Corrected an issue where resources per minute would not appear on Byzantines Religious Buildings with Relics garrisoned."]],
        },
        {
          // Fixed an issue where the Byzantines trader was generating more olive oil than intended, it is now 20% like the description states.
          // Fixed an issue where the Byzantines military production modifier from Cisterns was incorrectly applying to Traders.
          items: ["units/trader"],
          civs: ["by"],
          diff: [
            ["fix", "Fixed an issue where the Byzantines trader was generating more olive oil than intended, it is now 20% like the description states."],
            ["fix", "Fixed an issue where the Byzantines military production modifier from Cisterns was incorrectly applying to Traders."],
          ],
        },
        {
          // The cheat “smorgasbord” now grants oil to Byzantines players.
          items: [],
          civs: ["by"],
          diff: [["fix", "The cheat “smorgasbord” now grants oil to Byzantines players."]],
        },
      ],
    },
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          //Guild Hall Landmark’s Stone generation rate reduced by 50%.
          items: ["buildings/guild-hall"],
          civs: ["fr"],
          diff: [["nerf", "Guild Hall Landmark’s Stone generation rate reduced by 50%."]],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          //         Koka Township Landmark – Shinobi
          // When using the Shunshin ability to teleport, it is no longer possible for the Shinobi to teleport to the center of the map.
          // The Shunshin ability can now be used to teleport on top of stone walls. Targeting a stone wall directly no longer teleports the unit to the other side of the wall.

          items: ["units/shinobi", "buildings/koka-township"],
          civs: ["ja"],
          diff: [
            ["fix", "When using the Shunshin ability to teleport, it is no longer possible for the Shinobi to teleport to the center of the map."],
            [
              "fix",
              "The Shunshin ability can now be used to teleport on top of stone walls. Targeting a stone wall directly no longer teleports the unit to the other side of the wall.",
            ],
          ],
        },
        {
          // Kura Storehouse Landmark
          // Garrison slots reduced from 8 to 4.
          // Farm spawn frequency reduced from every 45 seconds to every 50 seconds.
          items: ["buildings/kura-storehouse"],
          civs: ["ja"],
          diff: [
            ["nerf", "Garrison slots reduced from 8 to 4."],
            ["nerf", "Farm spawn frequency reduced from every 45 seconds to every 50 seconds."],
          ],
        },
        {
          // Floating Gate Landmark
          // Yorishiro (Sacred Objects) no longer spawn on the ground and cannot be dropped. If a Shinto Priest holding a Yorishiro dies, the Yorishiro is destroyed.
          // Upon Completion of the Floating Gate, a Shinto Priest holding a Yorishiro is instantly trained.
          // All future Yorishio are held by a Shinto Priest when they are trained.
          // The Floating Gate now has a rally point, setting the rally point to a valid building will allow a trained Shinto Priest to deposit Yorishiro automatically. It is possible to rally point to multiple buildings to queue Yorishiro placement by subsequent Shinto Priests.
          // After depositing a Yorishiro the Shinto Priest remains available to use as a regular unit.
          // A progress bar above the Floating Gate is now visible to indicate when the next Shinto Priest will be trained.
          // Buildings containing a deposited Yorishiro now also display a floating golden ink scroll icon above them.
          // A maximum of 4 Yorishiro can exist at any one time, per player. When you own 4 Yorishiro, the Floating Gate will pause production of new Shinto Priests.
          // If a building or Shinto Priest with a Yorishiro is destroyed, the Floating Gate will resume production of Shinto Priests.
          // The Shinto Priest production time has been reduced from 3 minutes to 2 minutes.
          // Place Yorishiro tooltip has been improved to more clearly display the available bonuses from depositing into various buildings.
          items: ["buildings/floating-gate"],
          civs: ["ja"],
          diff: [
            [
              "nerf",
              "Yorishiro (Sacred Objects) no longer spawn on the ground and cannot be dropped. If a Shinto Priest holding a Yorishiro dies, the Yorishiro is destroyed.",
            ],
            ["nerf", "Upon Completion of the Floating Gate, a Shinto Priest holding a Yorishiro is instantly trained."],
            ["buff", "All future Yorishio are held by a Shinto Priest when they are trained."],
            [
              "fix",
              "The Floating Gate now has a rally point, setting the rally point to a valid building will allow a trained Shinto Priest to deposit Yorishiro automatically. It is possible to rally point to multiple buildings to queue Yorishiro placement by subsequent Shinto Priests.",
            ],
            ["fix", "After depositing a Yorishiro the Shinto Priest remains available to use as a regular unit."],
            ["buff", "A progress bar above the Floating Gate is now visible to indicate when the next Shinto Priest will be trained."],
            ["fix", "Buildings containing a deposited Yorishiro now also display a floating golden ink scroll icon above them."],
            [
              "nerf",
              "A maximum of 4 Yorishiro can exist at any one time, per player. When you own 4 Yorishiro, the Floating Gate will pause production of new Shinto Priests.",
            ],
            ["fix", "If a building or Shinto Priest with a Yorishiro is destroyed, the Floating Gate will resume production of Shinto Priests."],
            ["buff", "The Shinto Priest production time has been reduced from 3 minutes to 2 minutes."],
            ["fix", "Place Yorishiro tooltip has been improved to more clearly display the available bonuses from depositing into various buildings."],
          ],
        },
        {
          // Castle of the Crow Landmark – Treasure Caravans
          // Fixed an issue where the Treasure Caravans were awarding too few resources on each trade trip when converting between land and sea trader.
          // Treasure Caravans no longer get stuck trying to embark or disembark when they reach the shore.
          items: ["buildings/castle-of-the-crow"],
          civs: ["ja"],
          diff: [
            [
              "fix",
              "Fixed an issue where the Treasure Caravans were awarding too few resources on each trade trip when converting between land and sea trader.",
            ],
            ["fix", "Treasure Caravans no longer get stuck trying to embark or disembark when they reach the shore."],
          ],
        },
        {
          // Tanegashima Gunsmith Landmark
          // Starting stockpiles reduced from 5 to 2.
          items: ["buildings/tanegashima-gunsmith"],
          civs: ["ja"],
          diff: [["nerf", "Starting stockpiles reduced from 5 to 2."]],
        },
        {
          // Ozutsu
          // Ozutsu melee armor reduced from 4 to 0.
          // Ozutsu base damage reduced from 35 to 28
          items: ["units/ozutsu"],
          civs: ["ja"],
          diff: [
            ["nerf", "Melee armor reduced from 4 to 0."],
            ["nerf", "Base damage reduced from 35 to 28."],
          ],
        },
        {
          // Corrected issue where garrison arrows from Japanese Town Centers had more range than intended.
          items: ["buildings/town-center"],
          civs: ["ja"],
          diff: [["fix", "Corrected issue where garrison arrows from Japanese Town Centers had more range than intended."]],
        },
        {
          // Samurai Bannermen
          // Corrected an issue where a dropped banner aura would stack with Uma Bannermen auras.
          // Torches no longer receive damage increases on the UI from Katana Bannermen and Uma Bannermen.
          items: ["units/uma-bannerman", "units/katana-bannerman"],
          civs: ["ja"],
          diff: [
            ["fix", "Corrected an issue where a dropped banner aura would stack with Uma Bannermen auras."],
            ["fix", "Torches no longer receive damage increases on the UI from Katana Bannermen and Uma Bannermen."],
          ],
        },
        {
          // Onna-Bugeisha
          // Onna-Bugeisha no longer lose access to field construct Siege Towers when using mixed selection with other infantry.
          // Onna-Bugeisha can now garrison into Transports.
          items: ["units/onna-bugeisha"],
          civs: ["ja"],
          diff: [
            ["fix", "Onna-Bugeisha no longer lose access to field construct Siege Towers when using mixed selection with other infantry."],
            ["fix", "Onna-Bugeisha can now garrison into Transports."],
          ],
        },
        {
          // Flipped the Samurai icon in the Barracks to better distinguish it visually from the Onna-Bugeisha icon next to it in the UI.
          items: ["units/samurai"],
          civs: ["ja"],
          diff: [["fix", "Flipped the Samurai icon in the Barracks to better distinguish it visually from the Onna-Bugeisha icon next to it in the UI."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          // Malian Cattle food per minute generation in Ranches reduced from 28 to 25.
          items: ["buildings/cattle-ranch"],
          civs: ["ma"],
          diff: [["nerf", "Food per minute generation in Ranches reduced from 28 to 25."]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          //Great Bombard population increased from 3 to 4.
          items: ["units/great-bombard"],
          civs: ["ot"],
          diff: [["nerf", "Population increased from 3 to 4."]],
        },
      ],
    },
    {
      title: "Variant Civilization Changes",
      civs: [],
      changes: [],
      md: `
    The following changes apply only to the Variant versions of the Classic civilizations. Variant civilizations share in many of the changes made to their parent civilization listed above. "
  `,
    },
    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          //       House of Wisdom
          // Age Up time increased from 105 seconds to 120 seconds.
          items: ["buildings/house-of-wisdom"],
          civs: ["ay"],
          diff: [["nerf", "Age Up time increased from 105 seconds to 120 seconds."]],
        },
        {
          // Military Wing: Reinforcements
          // Removed initial delay on training Desert Raiders.
          // Fixed an issue on Xbox where field siege units could not be constructed by Cavalry after building the Military Wing: Reinforcements.
          items: [
            "technologies/feudal-military-wing-reinforcement",
            "technologies/castle-military-wing-reinforcement",
            "technologies/imperial-military-wing-reinforcement",
          ],
          civs: ["ay"],
          diff: [
            ["buff", "Removed initial delay on training Desert Raiders."],
            ["fix", "Fixed an issue on Xbox where field siege units could not be constructed by Cavalry after building the Military Wing: Reinforcements."],
          ],
        },
        {
          // Trade Wing: Bazaar
          // Gold cost of each trade increased
          // Feudal: from 125 to 150.
          // Castle: from 325 to 350.
          // Imperial: from 400 to 425.
          // Resource trade values increased
          // Feudal: from 200 to 225
          // Castle: from 600 to 625
          // Imperial: from 1000 to 1025
          // Villager trade option removed.
          // The number of available options per trade cycle reduced from 5 to 4.
          items: ["technologies/feudal-trade-wing-bazaar", "technologies/castle-trade-wing-bazaar", "technologies/imperial-trade-wing-bazaar"],
          civs: ["ay"],
          diff: [
            ["nerf", "Gold cost of each trade increased (Feudal: from 125 to 150, Castle: from 325 to 350, Imperial: from 400 to 425)"],
            ["buff", "Resource trade values increased (Feudal: from 200 to 225, Castle: from 600 to 625, Imperial: from 1000 to 1025)"],
            ["nerf", "Villager trade option removed."],
            ["nerf", "The number of available options per trade cycle reduced from 5 to 4."],
          ],
        },
        {
          // Culture Wing: Logistics
          // Reduced improved healing from 50% to 30%.
          items: ["technologies/feudal-culture-wing-logistics", "technologies/castle-culture-wing-logistics", "technologies/imperial-culture-wing-logistics"],
          civs: ["ay"],
          diff: [["nerf", "Reduced improved healing from 50% to 30%."]],
        },
        {
          // Passive Mass Heal granted by the Imperial Age Wing properly benefits from the +30% improved healing.
          items: ["technologies/imperial-culture-wing-logistics"],
          civs: ["ay"],
          diff: [["fix", "Passive Mass Heal granted by the Imperial Age Wing properly benefits from the +30% improved healing."]],
        },
        {
          // Dervish HP reduced from 155 to 120
          items: ["units/dervish"],
          civs: ["ay"],
          diff: [["nerf", "HP reduced from 155 to 120."]],
        },
        {
          // Tower of the Sultan build time reduced from 240 seconds to 200 seconds.
          items: ["units/tower-of-the-sultan"],
          civs: ["ay"],
          diff: [["buff", "Build time reduced from 240 seconds to 200 seconds."]],
        },
        {
          // Infantry Support technology improved from +2/2 armor to +3/3 armor.
          items: ["technologies/infantry-support"],
          civs: ["ay"],
          diff: [["buff", "Improved from +2/2 armor to +3/3 armor."]],
        },
        {
          // Tier 4 Golden Age now properly decreases the cost of siege built in the field.
          items: ["buildings/house-of-wisdom"],
          civs: ["ay"],
          diff: [["fix", "Now properly decreases the cost of siege built in the field."]],
        },
      ],
    },
    {
      subtitle: "Jeanne d'Arc",
      civs: ["je"],
      changes: [
        {
          //     Jeanne experience gained from killing Boar reduced from 50 to 25.
          // Jeanne d’Arc Honorable Heart tooltip changed to reflect actual behavior.
          // Reduced the starting experience of Jeanne d’Arc on Empire Wars from 500 to 400.
          items: [
            "units/jeanne-darc-peasant",
            "units/jeanne-darc-hunter",
            "units/jeanne-darc-woman-at-arms",
            "units/jeanne-darc-mounted-archer",
            "units/jeanne-knight",
            "units/jeanne-darc-markswoman",
            "units/jeanne-darc-blast-cannon",
          ],
          civs: ["je"],
          diff: [
            ["nerf", "Experience gained from killing Boar reduced from 50 to 25."],
            ["fix", "Jeanne d’Arc Honorable Heart tooltip changed to reflect actual behavior."],
            ["nerf", "Reduced the starting experience of Jeanne d’Arc on Empire Wars from 500 to 400."],
          ],
        },
        {
          // Jeanne Champions armor reduced from 4/4 to 3/3.
          items: ["units/jeannes-champion"],
          civs: ["je"],
          diff: [["nerf", "Armor reduced from 4/4 to 3/3."]],
        },
        {
          // Red Palace Landmark
          // Reduced damage of bonus emplacements on Keeps and Town Centers from 60 to 40 to match French.
          // Bonus emplacement range reduced from 10 to 9.5 to match French.
          items: ["buildings/red-palace"],
          civs: ["je"],
          diff: [
            ["nerf", "Reduced damage of bonus emplacements on Keeps and Town Centers from 60 to 40 to match French."],
            ["nerf", "Bonus emplacement range reduced from 10 to 9.5 to match French."],
          ],
        },
        {
          // Guild Hall Landmark’s Stone generation rate reduced by 50% to match French.
          items: ["buildings/guild-hall"],
          civs: ["je"],
          diff: [["nerf", "Stone generation rate reduced by 50% to match French."]],
        },
        {
          // Corrected an issue where French influence system was referenced in a few building tooltips for the Jeanne d’Arc variant civilization.
          items: [],
          civs: ["je"],
          diff: [
            ["fix", "Corrected an issue where French influence system was referenced in a few building tooltips for the Jeanne d’Arc variant civilization."],
          ],
        },
      ],
    },
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          //     Starting Wood increased from 150 to 200.
          items: [],
          civs: ["od"],
          diff: [["buff", "Starting Wood increased from 150 to 200."]],
        },
        {
          // Golden Cuirass technology damage reduction now activates at 30% health (up from 20%).
          items: ["technologies/golden-cuirass"],
          civs: ["od"],
          diff: [["buff", "Damage reduction now activates at 30% health (up from 20%)."]],
        },
        {
          // Corrected an issue where weapon range of Gilded Achers would be reduced after researching Incendiary Arrows.
          items: ["units/gilded-archer"],
          civs: ["od"],
          diff: [["fix", "Corrected an issue where weapon range of Gilded Achers would be reduced after researching Incendiary Arrows."]],
        },
      ],
    },
    {
      subtitle: "Zhu-Xi's Legacy",
      civs: ["zx"],
      changes: [
        {
          //       Shaolin Monastery Landmark – Shaolin Monks
          // Shaolin Monks and Monks are no longer selected together with double clicking.
          // Shaolin Monks ranged armor reduced from 2 to 0.
          // Shaolin Monks now display a buff indicator when activating the Body of Iron ability.
          items: ["units/shaolin-monk"],
          civs: ["zx"],
          diff: [
            ["fix", "Shaolin Monks and Monks are no longer selected together with double clicking."],
            ["nerf", "Ranged armor reduced from 2 to 0."],
            ["fix", "Shaolin Monks now display a buff indicator when activating the Body of Iron ability."],
          ],
        },
        {
          // Technologies at the Mount Lu Academy Landmark are now properly marked as unique to civilization.
          items: ["buildings/mount-lu-academy"],
          civs: ["zx"],
          diff: [["fix", "Technologies at the Mount Lu Academy Landmark are now properly marked as unique to civilization."]],
        },
        {
          // Zhu Xi’s Library Landmark – Imperial Guard
          // Damage reduced from 35 to 28.
          // Health decreased from 350 to 340.
          // Melee armor increased from 6 to 10.
          // Ranged armor decreased from 6 to 3.
          // Fixed an issue where Lancers and Imperial Guards would both be selected when double clicking on either unit.
          items: ["units/imperial-guard"],
          civs: ["zx"],
          diff: [
            ["nerf", "Damage reduced from 35 to 28."],
            ["nerf", "Health decreased from 350 to 340."],
            ["buff", "Melee armor increased from 6 to 10."],
            ["nerf", "Ranged armor decreased from 6 to 3."],
            ["fix", "Fixed an issue where Lancers and Imperial Guards would both be selected when double clicking on either unit."],
          ],
        },
      ],
    },
    {
      title: "What's on the Horizon",
      civs: [],
      changes: [],
      md: `
   ## Coming Up…
Late January/Early February Patch

We are planning for our next minor patch to release in early 2024, with a target of late January or early February.`,
    },
  ],
};
