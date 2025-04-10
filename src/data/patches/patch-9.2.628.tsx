import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-9.2.628",
  buildId: "9.2.628",
  name: "Patch 9.2.628",
  season: 6,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-9-2-628/",
  summary: "Changes to late-game siege stalemates, buffs for Byzantines, rework of Japanese Religious landmarks and other balance changes.",
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/01/Lunar-Faire-Patch-1920x1080-1.webp)
"Happy Patch Day! We’ve got our first update of 2024 loaded with balance improvements for our awesome line up of new and variant civilizations released with The Sultans Ascend expansion last year. Not only that, but we’re bringing a whole host of AI improvements, map fixes, and a stellar seasonal event to the mix."`,
  date: new Date("2024-01-30T18:00:00Z"),
  sections: [
    {
      title: "Seasonal Theme and Event: Lunar Faire 2024",
      civs: [],
      changes: [],
      md: `
      We’re excited to have you all join us for Lunar Faire in a few short days with an awesome seasonal event set to start February 1st and run through February 22nd! Make way for the Year of the Dragon!

![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/01/Lunar-Faire-Event-Rewards-Showcase-1080x1080-1.webp)
`,
    },
    {
      title: "Map Pool Rotation",
      civs: [],
      changes: [],
      md: `
        With a new update comes an opportunity to refresh the map pools! This update features two maps that have not seen ranked play yet: Forts and Waterholes.

        Some familiar maps have made their return — giving brand new civilizations a chance to flex their refreshing gameplay on familiar battlegrounds.

        # 1v1 Ranked Map Pool
        ### Maps rotating out for 9.2

        - Hidden Valley
        - Rocky River
        - Canal
        - Golden Heights

        ### Maps rotating in
        - Forts
        - Boulder Bay
        - Mongolian Heights
        - Four Lakes

        ### New 1v1 Ranked Map Pool
        - Dry Arabia
        - Cliffside
        - Himeyama
        - Forts
        - Gorge
        - Boulder Bay
        - Mongolian Heights
        - Golden Pit
        - Four Lakes

        # Team Ranked Map Pool
        ### Maps rotating out for 9.2
        - Hidden Valley
        - Volcanic Island
        - Hideout
        - Golden Heights

        ### Maps rotating in
        - Forts
        - Canal
        - Hill and Dale
        - Waterholes

        ### New Team Ranked Map Pool
        - Dry Arabia
        - Cliffside
        - Himeyama
        - Forts
        - Gorge
        - Canal
        - Hill and Dale
        - Golden Pit
        - Waterholes
  `,
    },
    {
      title: "Build Spotlight",
      civs: [],
      changes: [],
      md: `
      ## Xbox Update: Xbox Home Share
      After we launched The Sultans Ascend expansion last year, we heard that Xbox Home share wasn’t working as expecting. This has been fixed in this latest update.

      ## Design Update
      - Our main focus this update has been to improve the balance of new Civilizations.
      - The Japanese sacred choice design has been reworked, with six new technologies that are unlocked at either the Shinto Shrine or Buddhist Temple; based on your Castle Age Landmark selection.

      ##Crash Fixes
      We’ve identified and fixed a number of high frequency crashes and desyncs, this should lead to better game stability with this update.


      `,
    },
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `
      ### AI Updates (Byzantines)

      - AI is better at picking safe places to build mercenary houses.

      ### AI Updates (Jeanne d’Arc)

      - AI Jeanne d’Arc no longer abandons her army when she levels up in combat.
      - AI Jeanne d’Arc is now able to use Valorous Inspiration and Strength of Heaven.

      ### AI Updates (Japanese)

      - Fixed issue with AI trying to deposit Yorishiro in buildings that can’t accept Yorishiro.
      - AI now prioritizes placing Yorishrio in forges, lumber camps, and farmhouses.

      ### AI Updates (Nomad Mode)

      - Fixed AI sometimes being unable to build their Town Center in Nomad mode.

      ### AI Bug Fixes

      - Fixed an issue that could cause idle AI units if it failed to retreat with a set-up siege unit.
      - Fixed a crash that could occur in the AI system when loading a save game.
      - Fixed big groups of AI villagers refusing to gather resources during the late game.
      - Fixed issue that sometimes causes the AI to get stuck on a building while patrolling its base.
      - Fixed an issue that caused the AI to stay on a sacred site longer than intended.
      - Fixed AI sometimes being unable to build anything or progress in any way when being in the proximity of an enemy.
      - Fixed small groups of AI military units sometimes being defeated by chasing enemies into their base.

      ### General

      - Fixed a crash that could happen on Xbox and Windows Store versions of _Age of Empires IV_ when playing multiplayer games with Voice Chat enabled.
      - Fixed a bug where the game could crash when starting a multiplayer game.
      - Units will no longer get stuck on generated wall blockers, this would previously happen most commonly when Villagers are chopping wood near wall ends.
      - Fixed an issue where the animation of the House of Wisdom Wings would be out of sync with the age up for Ayyubids.
      - Reduced visual artifacts when snapping palisade walls to each other.
      - Units that use torches will no longer occasionally deal no damage attacking a palisade wall when standing close to the wall.
      - Fixed various bugs where certain abilities would stop working after loading a saved game.
      - Rus Hunting Cabins and High Trade House now show the number of trees counted on the Xbox.

      ### Nomad Mode

      - In Nomad Mode, players now must complete a Town Center before they can Age Up.

      ### Steam Deck

      - Fixed an issue causing desyncs on Steam Decks when playing online.

      ### Campaign

      - Campaign Mission: 1215, Zhongdu – The enemy landmarks in campaign mission Zhongdu have hit the gym and can now withstand the player’s overwhelming onslaught, preventing building destruction which leads to a Fatal Scar Error.
      - Campaign Mission: 1426, Cyprus – Prevented a Fatal Scar that could occur from destroying Famagusta’s Docks before the objective had started.
      - Campaign Mission: The Battle of Mansurah – Fixed a crash that could occur on the mission The Battle of Mansurah if the player survived for 40 minutes on hard mode.
      - Mongol Town Center no longer activates Age Up progression bar in campaigns.
      - Fixed a crash that could occur when loading a save game from some of the new Campaign missions.

      ### Hotkeys

      - We have corrected a range of issues related to remappable hotkeys where they were either unlisted, in the wrong spot, or did not have the correct default hotkey based on their grid position. Thank you for all your reports.

      ### Masteries

      - Fixed a bug where Delhi Sultanate Mastery #10, “Protecting the Sword” was not correctly tracking healing from the Mosque’s healing aura. The mastery was undercounting health received.

      ### UX/UI & Menus (All Platforms)

      - A bug in the Korean language IME has been fixed: terminating a syllable with the spacebar will now add the space character after the syllable instead of before.
      - Improved the smoothing of the camera when watching a recorded replay when Free Camera is disabled.
      - Shift click in resources panel allows you to select all idle workers or all workers in the clicked resource.
      - Fixed an issue where toggle buttons in the settings page would get clipped randomly in certain resolution monitors.
      - Fixed an issue with High Contrast UI being difficult to read in the Quick Match tab.

      ### Localization

      We have been tracking your feedback relating to localization quality in _The Sultans Ascend_ expansion and have made expansive changes to several languages, including Chinese, Korean, Japanese and Hungarian languages.

      We are committed to continuing to track and evaluate improvements in this space. So, please let us know in [the forums](https://forums.ageofempires.com/t/incorrect-translations-for-age-of-empires-iv-the-sultans-ascend-dlc/243544) if you continue to see issues related to language quality.
`,
    },
    {
      title: "Maps",
      civs: [],
      changes: [],
      md: `
      ## Map-Specific Changes

### African Waters 

- Player’s starting gold will no longer spawn trapped inside the player’s starting forest.

### Hill & Dale 

- We’ve done a tuning pass on the distribution of Sacred Sites on Hill and Dale. We have more robust changes coming in a future update that should help ensure that sites are placed fairly with even higher consistency, but we felt like this interim tuning has resulted in less clumped spawns than before.

### Gorge

- Sheep distribution has been reworked on Gorge and Forts to be more consistent across the map, with less cases of 2/3 sheep spawning bunched together while other large areas remain arid.
      `,
    },
    {
      title: "Balance & Bugfixes",
      civs: [],
      changes: [],
    },
    {
      subtitle: "General Balance Changes",
      civs: [],
      changes: [
        {
          //     - Springald
          //     - Attack Speed improved from 4 to 3 seconds.
          //     - Attack Damage reduced from 30 +70 vs Siege and Naval to 30 +60.
          items: ["units/springald"],
          civs: [],
          diff: [
            ["buff", "Attack Speed improved from 4 to 3 seconds."],
            ["nerf", "Attack Damage reduced from 30 +70 vs Siege and Naval to 30 +60."],
          ],
        },
        {
          // - Culverin
          //     - Attack Speed improved from 4.38 to 3.25.
          //     - Bonus damage vs Siege and Naval decreased from +100 to +60.
          items: ["units/culverin", "units/royal-culverin"],
          civs: [],
          diff: [
            ["buff", "Attack Speed improved from 4.38 to 3.25."],
            ["nerf", "Bonus damage vs Siege and Naval decreased from +100 to +60."],
          ],
        },
        {
          // - Mangonel
          //     - Ranged armor increased from 20 to 30.
          // - Nest of Bees
          //     - Ranged armor increased from 20 to 30.
          // - Counterweight & Traction Trebuchets
          //     - Ranged armor increased from 20 to 30.
          items: [
            "units/mangonel",
            "units/manjaniq",
            "units/nest-of-bees",
            "units/counterweight-trebuchet",
            "units/clocktower-counterweight-trebuchet",
            "units/traction-trebuchet",
          ],
          civs: [],
          diff: [["buff", "Ranged armor increased from 20 to 30."]],
        },
        {
          // - Cannon/Bombard/Great Bombard
          //     - Ranged armor increased from 30 to 35.
          items: ["units/cannon", "units/royal-cannon", "units/bombard", "units/great-bombard"],
          civs: [],
          diff: [["buff", "Ranged armor increased from 30 to 35."]],
        },
        {
          // - Villager Torches bonus vs. Siege removed.
          items: ["units/villager"],
          civs: [],
          diff: [["nerf", "Torch bonus vs. Siege removed."]],
        },
        {
          items: [],
          civs: [],
          diff: [],
          note: `The above set of changes to Siege aims to help with late-game stalemate situations and address a couple of issues with Springalds and Culverins:
        1. Volatility of Springalds and Culverins vs other Siege units. By increasing the attack speed and reducing damage, it now requires more Springalds and Culverins to be able to one-shot other Siege weapons. This should widen the window available to react to seeing these units on the battlefield before all your attacking siege is destroyed.
        2. Camping under Keeps with Springalds and Culverins surrounded by units makes them difficult to push into and pick off, but without picking them off it is challenging to use siege to take down the Keep. By reducing the ranged armor of the Springald, we hope that using ranged units to pick them off becomes more viable.`,
        },
        {
          // - Battering Ram
          //     - Cost reduced from 250 Wood to 200 Wood.
          //     - Health reduced from 420 to 340.
          //     - Now takes an additional 20% bonus damage from Melee attacks.
          //     - Attack-move with melee units now targets rams automatically.

          // > **_Developer Note:_** _Following up from our previous Ram changes, we’re aiming to address the effective health of Rams and reduce the viability of Ram pushes without support units. With this change we’re making it so that melee units will not ignore Rams with attack move (but Ranged units will). Our goal is to tune the Ram so that fighting them with melee units has a worthwhile return on investment. Along with reducing the health and cost appropriately this should also help to reduce the population effectiveness of Rams while remaining at 1 population._
          items: ["units/battering-ram"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 250 Wood to 200 Wood."],
            ["nerf", "Health reduced from 420 to 340."],
            ["nerf", "Now takes an additional 20% bonus damage from Melee attacks."],
            ["fix", "Attack-move with melee units now targets rams automatically."],
          ],
          note: `Following up from our previous Ram changes, we’re aiming to address the effective health of Rams and reduce the viability of Ram pushes without support units. With this change we’re making it so that melee units will not ignore Rams with attack move (but Ranged units will). Our goal is to tune the Ram so that fighting them with melee units has a worthwhile return on investment. Along with reducing the health and cost appropriately this should also help to reduce the population effectiveness of Rams while remaining at 1 population.`,
        },
        {
          // - Tithe Barns income reduced from 30 Food, 30 Wood, 30 Stone to 40 Food, 40 Wood, 10 Stone.

          items: ["technologies/tithe-barns"],
          civs: [],
          diff: [["nerf", "Income reduced from 30 Food, 30 Wood, 30 Stone to 40 Food, 40 Wood, 10 Stone."]],
        },
        {
          //     - Mongols Improved Tithe Barns changed to 60 Food, 60 Wood, 15 Stone.
          // > **_Developer Note:_** _Late game Stone generation has proven too effective at creating massive amounts of defenses, which can make late games feel slower than intended. We want Stone to be a limited resource in the later stages of the game so defenses cannot be amassed too much over time._
          items: ["technologies/tithe-barns-improved"],
          civs: ["mo"],
          diff: [["buff", "Income changed to 60 Food, 60 Wood, 15 Stone."]],
          note: `Late game Stone generation has proven too effective at creating massive amounts of defenses, which can make late games feel slower than intended. We want Stone to be a limited resource in the later stages of the game so defenses cannot be amassed too much over time.`,
        },
        {
          // - Imperial Age Economy Upgrades
          //     - Crosscut Saw now also provides +5 Wood carry capacity in addition to +15% gather rate.
          items: ["technologies/crosscut-saw"],
          civs: [],
          diff: [["buff", "Now also provides +5 Wood carry capacity in addition to +15% gather rate."]],
        },
        {
          //     - Cupellation no longer increases gather rate, instead Villagers drop off 15% more Gold.
          // > _**Developer Note:** We want to make the Imperial Age economy upgrades more appealing for their cost, as well as reducing the number of Villagers required to sustain a late-game economy. This should lead to larger army sizes for more fun!_
          items: ["technologies/cupellation"],
          civs: [],
          diff: [["buff", "Now increases Gold drop off by 15%."]],
          note: `We want to make the Imperial Age economy upgrades more appealing for their cost, as well as reducing the number of Villagers required to sustain a late-game economy. This should lead to larger army sizes for more fun!`,
        },
      ],
    },
    {
      subtitle: "General Bug Fixes",
      civs: [],
      changes: [
        {
          //             Improved Villagers’ gathering logic so that they favor going to the nearest available live Sheep instead of travelling far distances for a carcass.
          items: ["units/villager"],
          civs: [],
          diff: [
            [
              "fix",
              "Improved Villagers’ gathering logic so that they favor going to the nearest available live Sheep instead of travelling far distances for a carcass.",
            ],
          ],
        },
        {
          // Corrected an issue where the Trader was tagged as Cavalry.
          items: ["units/trader"],
          civs: [],
          diff: [["fix", "Corrected an issue where the Trader was tagged as Cavalry."]],
        },
        {
          // Docks are no longer selected when using Select All Military Buildings hotkey.
          items: ["buildings/dock"],
          civs: [],
          diff: [["fix", "Docks are no longer selected when using Select All Military Buildings hotkey."]],
        },
        {
          // Horse Archer units no longer favor the front of formations and will be protected by heavy units by standing behind them.
          items: ["units/horse-archer", "units/mangudai", "units/onna-musha", "units/camel-archer", "units/desert-raider"],
          civs: [],
          diff: [["fix", "Horse Archer units no longer favor the front of formations and will be protected by heavy units by standing behind them."]],
        },
        {
          // Conversion and Proselytization no longer target units who are blessed with Jeanne d’Arc’s Strength of Heaven.
          items: ["technologies/proselytization", "abilities/ability-conversion"],
          civs: [],
          diff: [["fix", "Conversion and Proselytization no longer target units who are blessed with Jeanne d’Arc’s Strength of Heaven."]],
        },
        {
          // Handcannons from Archery Ranges will now produce x5 when using the shift modifier to produce them.
          items: ["buildings/archery-range"],
          civs: [],
          diff: [["fix", "Handcannons from Archery Ranges will now produce x5 when using the shift modifier to produce them."]],
        },
        {
          // Landmark Town Centers garrison arrow range corrected from 8 to 6 tiles.
          // Capital Town Centers
          // Updated text to reflect their ability to detect stealth and disguises.
          items: ["buildings/capital-town-center"],
          civs: [],
          diff: [
            ["fix", "Landmark Town Centers garrison arrow range corrected from 8 to 6 tiles."],
            ["fix", "Updated text to reflect their ability to detect stealth and disguises."],
          ],
        },
        {
          // Non-Capital Town Centers
          // Updated text to reflect that these buildings cannot detect stealth and disguises.
          items: ["buildings/town-center"],
          civs: [],
          diff: [["fix", "Updated text to reflect that Non-Capital Town Centers cannot detect stealth and disguises."]],
        },
        {
          // Stone Walls: Corrected incorrect defensive values in the help text.
          items: ["buildings/stone-wall"],
          civs: [],
          diff: [["fix", "Corrected incorrect defensive values in the help text."]],
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
          // Golden Age tier 3: Corrected an issue where Villagers were receiving +30% gather rate instead of +20%.
          items: ["buildings/house-of-wisdom", "abilities/ability-golden-age-tier-3"],
          civs: ["ab"],
          diff: [["fix", "Golden Age tier 3: Corrected an issue where Villagers were receiving +30% gather rate instead of +20%."]],
        },
      ],
    },
    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          // Culture Wing: Advancement: Feudal – Age up time reduced from 40% to 20%.
          items: ["technologies/feudal-culture-wing-advancement"],
          civs: ["ay"],
          diff: [["nerf", "Age up time reduced from 40% to 20%."]],
        },
        {
          // Culture Wing: Advancement: Castle – Age up time reduced from 40% to 20% and resource discount reduced from 500 to 400.
          items: ["technologies/castle-culture-wing-advancement"],
          civs: ["ay"],
          diff: [
            ["nerf", "Age up time reduced from 40% to 20%"],
            ["nerf", "Resource discount reduced from 500 to 400."],
          ],
        },
        {
          // Culture Wing: Advancement: Imperial – Age up time reduced from 40% to 20% and resource discount reduced from 1500 to 1350.
          items: ["technologies/imperial-culture-wing-advancement"],
          civs: ["ay"],
          diff: [
            ["nerf", "Age up time reduced from 40% to 20%"],
            ["nerf", "Resource discount reduced from 1500 to 1350."],
          ],
        },
        {
          // Corrected an issue where the first Golden Age Tier was giving +15% bonus to Gold, Stone, and Wood instead of 10%.
          items: ["buildings/house-of-wisdom", "abilities/ability-golden-age-tier-1"],
          civs: ["ay"],
          diff: [["fix", "Corrected an issue where the first Golden Age Tier was giving +15% bonus to Gold, Stone, and Wood instead of 10%."]],
        },
        {
          // Dervish healing no longer heals units in garrison.
          items: ["units/dervish"],
          civs: ["ay"],
          diff: [["fix", "Dervish healing no longer heals units in garrison."]],
        },
        {
          // Desert Raider weapon range no longer fluctuates when upgrading Desert Raiders after researching Incendiary Arrows.
          items: ["units/desert-raider"],
          civs: ["ay"],
          diff: [["fix", "Desert Raider weapon range no longer fluctuates when upgrading Desert Raiders after researching Incendiary Arrows."]],
        },
        {
          // Transport Ships loaded with Atabegs will now properly reduce their maximum count when the ship is destroyed.
          items: ["units/atabeg"],
          civs: ["ay"],
          diff: [["fix", "Transport Ships loaded with Atabegs will now properly reduce their maximum count when the ship is destroyed."]],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        // Developer Note: We’ve been watching the development of the Byzantines carefully and decided that they need significantly more nerfs. Just kidding! However, while we do aim to help bring the win rates of the Byzantines up, we do want to ensure that their over-tuned elements do not go unaddressed. We do believe that the following set of changes will help them where they need it the most, in the early game.
        {
          items: [],
          civs: ["by"],
          diff: [],
          note: `We’ve been watching the development of the Byzantines carefully and decided that they need significantly more nerfs. Just kidding! However, while we do aim to help bring the win rates of the Byzantines up, we do want to ensure that their over-tuned elements do not go unaddressed. We do believe that the following set of changes will help them where they need it the most, in the early game.`,
        },
        {
          // Cheirosiphon
          // Cost reduced from 250 Wood, 100 Gold to 200 Wood, 100 Gold.
          // Health reduced from 350 to 280.
          // Developer Note: This change is in concert with the general Ram changes for all civilizations.
          items: ["units/cheirosiphon"],
          civs: ["by"],
          diff: [
            ["buff", "Cost reduced from 250 Wood, 100 Gold to 200 Wood, 100 Gold."],
            ["nerf", "Health reduced from 350 to 280."],
          ],
          note: `This change is in concert with the general Ram changes for all civilizations.`,
        },
        {
          // Cisterns
          // Gather bonus increased from 5/10/15/20/25% to 10/14/18/22/26% based on Water Level.
          // Build time reduced from 20s to 15s.
          // Stone cost cap reduced from 300 Stone to 250 Stone.
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [
            ["buff", "Gather bonus increased from 5/10/15/20/25% to 10/14/18/22/26% based on Water Level."],
            ["buff", "Build time reduced from 20s to 15s."],
            ["buff", "Stone cost cap reduced from 300 Stone to 250 Stone."],
          ],
        },
        {
          // Cistern of the First Hill Landmark
          // Starting Flasks increased from 1 to 3.
          // Flask maximum increased from 10 to 20.
          // Decreased amount of health restored from 250 to 150.
          // Reduced healing duration from 10 seconds to 6 seconds.
          // Improved Flask spawn rate from every 45 seconds to every 30 seconds.
          // Reduced unit cooldown from 45 seconds to 20 seconds.
          items: ["buildings/cistern-of-the-first-hill", "abilities/ability-pilgrim-flask"],
          civs: ["by"],
          diff: [
            ["buff", "Starting Flasks increased from 1 to 3."],
            ["buff", "Flask maximum increased from 10 to 20."],
            ["nerf", "Decreased amount of health restored from 250 to 150."],
            ["nerf", "Reduced healing duration from 10 seconds to 6 seconds."],
            ["buff", "Improved Flask spawn rate from every 45 seconds to every 30 seconds."],
            ["buff", "Reduced unit cooldown from 45 seconds to 20 seconds."],
          ],
        },
        {
          // Grand Winery: Now acts as a Mill & Monastery and includes Food economy technologies.
          items: ["buildings/grand-winery"],
          civs: ["by"],
          diff: [["buff", "Now acts as a Mill & Monastery and includes Food economy technologies."]],
        },
        {
          // Limitanei Shield Wall damage reduction changed from 50% to 40%.
          items: ["units/limitanei", "abilities/ability-shield-wall"],
          civs: ["by"],
          diff: [["nerf", "Damage reduction changed from 50% to 40%."]],
        },
        {
          // Cistern Dialectius: Research speeds decreased from 50/100/150/200/250% to 30/60/90/120/150%.
          items: ["buildings/cistern", "abilities/ability-dialecticus"],
          civs: ["by"],
          diff: [["nerf", "Dialecticus Research speeds decreased from 50/100/150/200/250% to 30/60/90/120/150%."]],
        },
        {
          // Golden Horn Tower Landmark
          // Reduced training speed from 50% reduction to 60% reduction.
          // Produces 2 Keshik instead of 3 per batch.
          // Developer Note: The Golden Horn Tower generates a bit too many resources per minute compared to other Castle Age Landmarks when considering their Cistern water levels.
          items: ["buildings/golden-horn-tower"],
          civs: ["by"],
          diff: [
            ["nerf", "Reduced training speed from 50% reduction to 60% reduction."],
            ["nerf", "Produces 2 Keshik instead of 3 per batch."],
          ],
        },
        {
          // Streltsy Olive Oil cost increased from 540 to 720.
          items: ["units/streltsy"],
          civs: ["by"],
          diff: [["nerf", "Olive Oil cost increased from 540 to 720."]],
        },
        {
          // Varangian Guards are no longer selected with Mercenary Ghulams when double clicking.
          items: ["units/varangian-guard"],
          civs: ["by"],
          diff: [["fix", "Varangian Guards are no longer selected with Mercenary Ghulams when double clicking."]],
        },
        {
          // Imperial Hippodrome: Corrected issue where Wolves would grant Supply Points.
          // Corrected help text to state that workers generate Olive Oil to the % of amount of Food carried.
          items: ["buildings/imperial-hippodrome"],
          civs: ["by"],
          diff: [
            ["fix", "Corrected issue where Wolves would grant Supply Points."],
            ["fix", "Corrected help text to state that workers generate Olive Oil to the % of amount of Food carried."],
          ],
        },
        {
          // Akritoi Defense: Added that it changes all Villager’s weapons to a spear that deals +1 / 2 / 3 / 5 bonus damage per Age to the help text.
          items: ["buildings/cistern", "abilities/ability-akritoi-defense"],
          civs: ["by"],
          diff: [
            ["fix", "Added that Akritoi Defense changes all Villager’s weapons to a spear that deals +1 / 2 / 3 / 5 bonus damage per Age to the help text."],
          ],
        },
        {
          // Fixed an issue where Cisterns did not cost any wood to repair.
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [["fix", "Fixed an issue where Cisterns did not cost any wood to repair."]],
        },
        {
          // The Surefire Victory mastery now tracks units killed by Greek Fire from a Dromon.
          items: [],
          civs: ["by"],
          diff: [["fix", "The Surefire Victory mastery now tracks units killed by Greek Fire from a Dromon."]],
        },
      ],
    },
    {
      // Chinese

      // Imperial Academy: Now produces Imperial Officials with a 30% discount.
      // Dock: Decreased work rate bonus from 20% to 10%.
      // Improved the Supervise Ability description to more clearly explain which buildings can be targeted.
      // Fixed an issue where Chinese Houses and Villages would display a Tax UI despite not generating any tax.

      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["buildings/imperial-academy"],
          civs: ["ch"],
          diff: [["buff", "Now produces Imperial Officials with a 30% discount."]],
        },
        {
          items: ["buildings/dock"],
          civs: ["ch"],
          diff: [["nerf", "Decreased work rate bonus from 20% to 10%."]],
        },
        {
          items: ["abilities/ability-supervise"],
          civs: ["ch"],
          diff: [["fix", "Improved the Supervise Ability description to more clearly explain which buildings can be targeted."]],
        },
        {
          items: ["buildings/house", "buildings/village"],
          civs: ["ch"],
          diff: [["fix", "Fixed an issue where Chinese Houses and Villages would display a Tax UI despite not generating any tax."]],
        },
      ],
    },
    {
      //                            Delhi Sultanate
      // When researching Manuscript Trade, Scholars that are already garrisoned in Docks will be properly counted as active Scholars. This fixes an issue where the active Scholar count could go negative, breaking Sultanate research times.
      // Docks when destroyed will decrease the Scholar count correctly if Manuscript Trade is researched and a Scholar is garrisoned.

      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["technologies/manuscript-trade", "buildings/dock"],
          civs: ["de"],
          diff: [
            ["fix", "When researching Manuscript Trade, Scholars that are already garrisoned in Docks will be properly counted as active Scholars."],
            ["fix", "Docks when destroyed will decrease the Scholar count correctly if Manuscript Trade is researched and a Scholar is garrisoned."],
          ],
          note: `This fixes an issue where the active Scholar count could go negative, breaking Sultanate research times.`,
        },
      ],
    },
    {
      //                                   English
      // Wynguard Rangers are now selected with Select All Ranged Infantry hotkey.
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["units/wynguard-ranger"],
          civs: ["en"],
          diff: [["fix", "Wynguard Rangers are now selected with Select All Ranged Infantry hotkey."]],
        },
      ],
    },
    {
      //                               French
      // French Trade ships now correctly generate 20% more resources instead of 33% more.
      // Fixed an issue where the Chamber of Commerce would skip one free Trader if two or more economy technologies are researched in Dark Age.
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          items: ["units/trader"],
          civs: ["fr"],
          diff: [["fix", "French Trade ships now correctly generate 20% more resources instead of 33% more."]],
        },
        {
          items: ["buildings/chamber-of-commerce"],
          civs: ["fr"],
          diff: [
            ["fix", "Fixed an issue where the Chamber of Commerce would skip one free Trader if two or more economy technologies are researched in Dark Age."],
          ],
        },
      ],
    },

    {
      //                     Holy Roman Empire
      // Corrected issue where Holy Inspiration would be cast on enemy naval units, breaking its animations.
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["units/prelate"],
          civs: ["hr"],
          diff: [["fix", "Corrected issue where Holy Inspiration would be cast on enemy naval units, breaking its animations."]],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          // Developer Note: We want the sacred choice for the Japanese to be far more meaningful than your Landmark selection and which Monk skin you get. While providing a needed buff to the Japanese, we hope that this rework offers more distinction between the two choices and more strategic options in the Castle Age and beyond.

          // The Shinto Shrine and Buddhist Temple now each contain 3 new technologies which replace Herbal Medicine, Piety, and Tithe Barns.
          items: ["buildings/shinto-shrine", "buildings/buddhist-temple"],
          civs: ["ja"],
          diff: [["fix", "The Shinto Shrine and Buddhist Temple now each contain 3 new technologies which replace Herbal Medicine, Piety, and Tithe Barns."]],
          note: `We want the sacred choice for the Japanese to be far more meaningful than your Landmark selection and which Monk skin you get. While providing a needed buff to the Japanese, we hope that this rework offers more distinction between the two choices and more strategic options in the Castle Age and beyond.`,
        },

        // Shinto Shrine:
        {
          // Shinto Rituals: Increases the Shinto Priest’s healing rate by +60%, health by +40, and move speed by +15%.
          items: ["technologies/shinto-rituals", "buildings/shinto-shrine"],
          civs: ["ja"],
          diff: [["buff", "New Technology 'Shinto Rituals': Increases the Shinto Priest’s healing rate by +60%, health by +40, and move speed by +15%."]],
        },
        {
          // Gion Festival: All buildings gain +2 Line of Sight. Every 3 minutes all economic units heal for 100% of their max health over 3 seconds.
          items: ["technologies/gion-festival", "buildings/shinto-shrine"],
          civs: ["ja"],
          diff: [
            [
              "buff",
              "New Technology 'Gion Festival': All buildings gain +2 Line of Sight. Every 3 minutes all economic units heal for 100% of their max health over 3 seconds.",
            ],
          ],
        },
        {
          // Bunrei: Increases the maximum number of Yorishiro by +2. Immediately spawns 2 Yorishiro at the Floating Gate.
          items: ["technologies/bunrei", "buildings/shinto-shrine"],
          civs: ["ja"],
          diff: [["buff", "New Technology 'Bunrei': Increases the maximum number of Yorishiro by +2. Immediately spawns 2 Yorishiro at the Floating Gate."]],
        },

        // Buddhist Temple:
        {
          // Zen: Buddhist Monks generate +25 gold every 60 seconds.
          items: ["technologies/zen", "buildings/buddhist-temple"],
          civs: ["ja"],
          diff: [["buff", "New Technology 'Zen': Buddhist Monks generate +25 gold every 60 seconds."]],
        },
        {
          // Nehan: Upgrades Buddhist Conversion to Nehan Conversion, which has 25% shorter cooldown and additional improves nearby allied units’ movement speed by +25% when cast.1
          items: ["technologies/nehan", "buildings/buddhist-temple"],
          civs: ["ja"],
          diff: [
            [
              "buff",
              "New Technology 'Nehan': Upgrades Buddhist Conversion to Nehan Conversion, which has 25% shorter cooldown and additional improves nearby allied units’ movement speed by +25% when cast.",
            ],
          ],
        },
        // Five Mountain Ministries: Buddhist Temples automatically cast Sohai’s Sutra on a nearby enemy every 6 seconds.
        {
          items: ["technologies/five-mountain-ministries", "buildings/buddhist-temple"],
          civs: ["ja"],
          diff: [["buff", "New Technology 'Five Mountain Ministries': Buddhist Temples automatically cast Sohai’s Sutra on a nearby enemy every 6 seconds."]],
        },

        {
          // Buddhist Monk: The Conversion ability has been renamed to Buddhist Conversion and the description has been updated to properly indicate that nearby allies gain +20% damage for 20 seconds when Buddhist Conversion is cast.
          items: ["units/buddhist-monk"],
          civs: ["ja"],
          diff: [
            [
              "fix",
              "The Conversion ability has been renamed to Buddhist Conversion and the description has been updated to properly indicate that nearby allies gain +20% damage for 20 seconds when Buddhist Conversion is cast.",
            ],
          ],
        },

        // Buddhist Temple: Now has a built limit of 5 (including the Temple of Equality landmark).
        {
          items: ["buildings/buddhist-temple"],
          civs: ["ja"],
          diff: [["nerf", "Now has a built limit of 5 (including the Temple of Equality landmark)."]],
        },

        // Town Center Rockets range decreased from 9 to 8 tiles.
        {
          items: ["buildings/town-center"],
          civs: ["ja"],
          diff: [["nerf", "Rocket Range decreased from 9 to 8 tiles."]],
        },

        // Handcannoneer renamed to Handcannon Ashigaru.
        {
          items: ["units/handcannon-ashigaru"],
          civs: ["ja"],
          diff: [["fix", "Handcannoneer renamed to Handcannon Ashigaru."]],
        },
        {
          // Koka Township will no longer instantly spawn a Shinobi but instead queue it in production for free when the landmark completes construction.
          // Developer Note: On hybrid maps, the Shinobi timing doesn’t give other civilizations reasonable time to establish an answer when scouting the Landmark and responding to Shinobi’s sabotage ability.
          // Koka Township: Corrected an issue where the free Shinobi would not travel to rally points.

          items: ["buildings/koka-township"],
          civs: ["ja"],
          diff: [
            [
              "nerf",
              "Koka Township will no longer instantly spawn a Shinobi but instead queue it in production for free when the landmark completes construction.",
            ],
            ["fix", "Corrected an issue where the free Shinobi would not travel to rally points."],
          ],
          note: `On hybrid maps, the Shinobi timing doesn’t give other civilizations reasonable time to establish an answer when scouting the Landmark and responding to Shinobi’s sabotage ability.`,
        },

        // Tanegashima Gunsmith: Updated the UI to show the current number of stockpiles available to spend.
        {
          items: ["buildings/tanegashima-gunsmith"],
          civs: ["ja"],
          diff: [["fix", "Updated the UI to show the current number of stockpiles available to spend."]],
        },
        // Buddhist Monks will no longer leave their Stand Ground state when casting Sohei’s Sutra.
        // Corrected issue where Sohei’s Sutra would be cast on enemy naval units, breaking its animations.
        {
          items: ["units/buddhist-monk"],
          civs: ["ja"],
          diff: [
            ["fix", "Buddhist Monks will no longer leave their Stand Ground state when casting Sohei’s Sutra."],
            ["fix", "Corrected issue where Sohei’s Sutra would be cast on enemy naval units, breaking its animations."],
          ],
        },
        // Copper Plating technology: Corrected an issue where the bonus was displayed +2% instead of +2 fire and ranged armor.
        {
          items: ["technologies/copper-plating"],
          civs: ["ja"],
          diff: [["fix", "Corrected an issue where the bonus was displayed +2% instead of +2 fire and ranged armor."]],
        },
        // The Floating Gate: Will no longer fail to create a Shinto Priest if players are population blocked. The Shinto Priest is now stays in the production queue until population room becomes available.
        {
          items: ["buildings/floating-gate"],
          civs: ["ja"],
          diff: [
            [
              "fix",
              "Will no longer fail to create a Shinto Priest if players are population blocked. The Shinto Priest is now stays in the production queue until population room becomes available.",
            ],
          ],
        },

        // Corrected an issue where ranged Cavalry were not benefitting from Uma Bannermen auras.
        {
          items: ["units/uma-bannerman"],
          civs: ["ja"],
          diff: [["fix", "Corrected an issue where ranged Cavalry were not benefitting from Uma Bannermen auras."]],
        },

        // Corrected an issue where melee infantry & cavalry charge attack was not benefiting from Katana banners.
        {
          items: ["units/katana-bannerman"],
          civs: ["ja"],
          diff: [["fix", "Corrected an issue where melee infantry & cavalry charge attack was not benefiting from Katana banners."]],
        },
        // Onna-Bugeisha no longer share formations with Man-at-Arms and are now ranked behind.
        {
          items: ["units/onna-bugeisha"],
          civs: ["ja"],
          diff: [["fix", "No longer share formations with Man-at-Arms and are now ranked behind"]],
        },

        // Shinobi now shares a formation with Onna-Bugeisha instead of Man-at-Arms.
        {
          items: ["units/shinobi"],
          civs: ["ja"],
          diff: [["fix", "Now shares a formation with Onna-Bugeisha instead of Man-at-Arms."]],
        },
        // Castle of the Crow Treasure Caravan is no longer selected with the “Select All Units” hotkey.
        {
          items: ["buildings/castle-of-the-crow"],
          civs: ["ja"],
          diff: [["fix", "Castle of the Crow Treasure Caravan is no longer selected with the “Select All Units” hotkey."]],
        },

        // Fixed an issue where free Villagers from Daimyo upgrades wouldn’t benefit from upgrades.
        {
          items: ["units/villager"],
          civs: ["ja"],
          diff: [["fix", "Fixed an issue where free Villagers from Daimyo upgrades wouldn’t benefit from upgrades."]],
        },
        // Transport Ships loaded with Bannermen will now properly reduce their maximum count when the ship is destroyed.
        {
          items: ["units/transport-ship"],
          civs: ["ja"],
          diff: [["fix", "Transport Ships loaded with Bannermen will now properly reduce their maximum count when the ship is destroyed."]],
        },
        // Corrected issue where researching Odachi would increase the weapon range of Samurai.
        {
          items: ["technologies/odachi"],
          civs: ["ja"],
          diff: [["fix", "Corrected issue where researching Odachi would increase the weapon range of Samurai."]],
        },
        // Shinobi: Updated text to reflect health regeneration bonus and what can detect Shinobi disguises.
        {
          items: ["units/shinobi"],
          civs: ["ja"],
          diff: [["fix", "Updated text to reflect health regeneration bonus and what can detect Shinobi disguises."]],
        },
      ],
    },
    {
      // Jeanne d'Arc
      // (Variant Civilization: French)
      subtitle: "Jeanne d'Arc",
      civs: ["je"],
      changes: [
        // Changes to hero Jeanne d’Arc
        // Jeanne d’Arc no longer gains experience from Wolves.
        // Jeanne d’Arc will no longer lose ability charge progress or cooldown progress when levelled up, garrisoned, or killed.
        // Jeanne d’Arc abilities can no longer be interrupted by auto-attacks during casting.
        // Corrected an issue where Jeanne d’Arc would gain experience from Sheep.
        // Divine Restoration no longer heals units in garrisons.
        // Honorable Heart damage reduction reduced from 50%/66% to 45%/60%.

        // Developer Note: We’re aiming to reduce Jeanne d’Arc’s effectiveness in the Feudal Age:
        // Slowing down Tier 3 by reducing exp gain from Wolves.
        // Reducing the base stats of Jeanne d’Arc in Tier 3 and 4
        // Changing Companion Equipment (Castle Age) to restore the lost stats.
        // Additionally, we’re tuning down the damage reduction from Honorable Heart to help with ridiculous situations where she can solo a Keep. We have plans to rework the damage reduction mechanic in a later update as well.

        {
          items: [
            "units/jeanne-darc-peasant",
            "units/jeanne-darc-hunter",
            "units/jeanne-darc-woman-at-arms",
            "units/jeanne-darc-mounted-archer",
            "units/jeanne-darc-knight",
            "units/jeanne-darc-markswoman",
            "units/jeanne-darc-blast-cannon",
          ],
          civs: ["je"],
          diff: [
            ["nerf", "Jeanne d’Arc no longer gains experience from Wolves."],
            ["fix", "Jeanne d’Arc will no longer lose ability charge progress or cooldown progress when levelled up, garrisoned, or killed."],
            ["fix", "Jeanne d’Arc abilities can no longer be interrupted by auto-attacks during casting."],
            ["fix", "Corrected an issue where Jeanne d’Arc would gain experience from Sheep."],
            ["fix", "Divine Restoration no longer heals units in garrisons."],
            ["nerf", "Honorable Heart damage reduction reduced from 50%/66% to 45%/60%."],
          ],
          note: `We’re aiming to reduce Jeanne d’Arc’s effectiveness in the Feudal Age: Slowing down Tier 3 by reducing exp gain from Wolves. Reducing the base stats of Jeanne d’Arc in Tier 3 and 4. Changing Companion Equipment (Castle Age) to restore the lost stats. Additionally, we’re tuning down the damage reduction from Honorable Heart to help with ridiculous situations where she can solo a Keep. We have plans to rework the damage reduction mechanic in a later update as well.`,
        },

        // Tier 2 Archer Jeanne d’Arc health increased from 200 to 225.
        // Tier 2 Archer Jeanne d’Arc move speed increased from 5 to 5.5.
        {
          items: ["units/jeanne-darc-hunter"],
          civs: ["je"],
          diff: [
            ["buff", "Health increased from 200 to 225."],
            ["buff", "Move speed increased from 5 to 5.5."],
          ],
        },

        // Tier 3 Holy Wrath damage reduced from 35 to 30
        {
          items: ["abilities/ability-holy-wrath", "units/jeanne-darc-knight"],
          civs: ["je"],
          diff: [["nerf", "Holy Wrath damage reduced from 35 to 30"]],
        },

        // Tier 3 Melee Jeanne d’Arc health reduced from 450 to 360.
        // Tier 3 Melee Jeanne d’Arc armor reduced from 5 to 4.
        // Tier 3 Melee Jeanne d’Arc damage reduced from 20 to 16 — charge damage reduced from 30 to 24.
        {
          items: ["units/jeanne-darc-knight"],
          civs: ["je"],
          diff: [
            ["nerf", "Health reduced from 450 to 360."],
            ["nerf", "Armor reduced from 5 to 4."],
            ["nerf", "Damage reduced from 20 to 16 — charge damage reduced from 30 to 24."],
          ],
        },
        // Tier 3 Ranged Jeanne d’Arc health reduced from 350 to 280.
        // Tier 3 Ranged Jeanne d’Arc damage reduced from 18 to 15.
        {
          items: ["units/jeanne-darc-mounted-archer"],
          civs: ["je"],
          diff: [
            ["nerf", "Health reduced from 350 to 280."],
            ["nerf", "Damage reduced from 18 to 15."],
          ],
        },

        // Tier 4 Melee Jeanne d’Arc damage reduced from 50 to 40.
        // Tier 4 Melee Jeanne d’Arc armor reduced from 6 to 5.
        {
          items: ["units/jeanne-darc-blast-cannon"],
          civs: ["je"],
          diff: [
            ["nerf", "Damage reduced from 50 to 40."],
            ["nerf", "Armor reduced from 6 to 5."],
          ],
        },

        // Tier 4 Ranged Jeanne d’Arc damage reduced from 35 to 28.
        {
          items: ["units/jeanne-darc-markswoman"],
          civs: ["je"],
          diff: [["nerf", "Damage reduced from 35 to 28."]],
        },

        // Companion Equipment (Castle Age):
        // Cost increased from 175 to 500.
        // Moved from the Keep to the Blacksmith.
        // Increases health and damage of Jeanne d’Arc by +25% at tier 3 and 4.
        // Increases Jeanne d’Arc armor by +1.
        {
          items: ["technologies/companion-equipment"],
          civs: ["je"],
          diff: [
            ["nerf", "Cost increased from 175 to 500."],
            ["buff", "Moved from the Keep to the Blacksmith."],
            ["buff", "Increases health and damage of Jeanne d’Arc by +25% at tier 3 and 4."],
            ["buff", "Increases Jeanne d’Arc armor by +1."],
          ],
        },

        // Divine Arrow ability shows an improved error message when trying to target Gaia.
        {
          items: ["abilities/ability-divine-arrow"],
          civs: ["je"],
          diff: [["fix", "Divine Arrow ability shows an improved error message when trying to target Gaia."]],
        },
        // Holy Wrath no longer damages units in garrisons.
        {
          items: ["abilities/ability-holy-wrath"],
          civs: ["je"],
          diff: [["fix", "Holy Wrath no longer damages units in garrisons."]],
        },
        // Included the damage tiering information of Jeanne d’Arc’s Holy Wrath and Divine Arrow abilities in the tech tree.
        {
          items: ["abilities/ability-holy-wrath", "abilities/ability-divine-arrow"],
          civs: ["je"],
          diff: [["fix", "Included the damage tiering information of Jeanne d’Arc’s Holy Wrath and Divine Arrow abilities in the tech tree."]],
        },
        // Keeps are now selected with Select All Military Buildings to make Jeanne d’Arc’s Companions easier to train.
        {
          items: ["buildings/keep"],
          civs: ["je"],
          diff: [["fix", "Keeps are now selected with Select All Military Buildings to make Jeanne d’Arc’s Companions easier to train."]],
        },
      ],
    },
    {
      //                            Mongols
      // Improved Wheelbarrow: Maximum number of resources carried increased from +7 to +9.
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["technologies/wheelbarrow-improved"],
          civs: ["mo"],
          diff: [["buff", "Maximum number of resources carried increased from +7 to +9."]],
        },
      ],
    },
    {
      //                      Order of the Dragon
      // (Variant Civilization: Holy Roman Empire)
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        // Dragon Villager gather rate bonus increased from +25% to +28%.
        {
          items: ["units/dragon-villager"],
          civs: ["od"],
          diff: [["buff", "Gather rate bonus increased from +25% to +28%."]],
        },

        // Gilded Landsknecht
        // Health increased in the Castle Age from 170 to 180.
        // Health increased in the Imperial Age from 200 to 210.
        {
          items: ["units/gilded-landsknecht"],
          civs: ["od"],
          diff: [
            ["buff", "Health increased in the Castle Age from 170 to 180."],
            ["buff", "Health increased in the Imperial Age from 200 to 210."],
          ],
        },
        // Bodkin Bolts damage bonus vs Siege increased from +10 to +20.
        {
          items: ["technologies/bodkin-bolts"],
          civs: ["od"],
          diff: [["buff", "Damage bonus vs Siege increased from +10 to +20."]],
        },
        // The Elzbach Palace damage reduction buff is now behaving as intended.
        {
          items: ["buildings/elzbach-palace"],
          civs: ["od"],
          diff: [["fix", "The Elzbach Palace damage reduction buff is now behaving as intended."]],
        },
        // Spearmen with the Dragon Fire upgrade no longer deal damage to nearby allied buildings when attacking.
        {
          items: ["units/spearman"],
          civs: ["od"],
          diff: [["fix", "Spearmen with the Dragon Fire upgrade no longer deal damage to nearby allied buildings when attacking."]],
        },

        // Corrected an issue where Elite Gilded Knights would lose War Horses enhancement when tiering up from Veteran Gilded Knights.
        {
          items: ["units/gilded-knight"],
          civs: ["od"],
          diff: [["fix", "Elite Gilded Knights would lose War Horses enhancement when tiering up from Veteran Gilded Knights."]],
        },
      ],
    },
    {
      //                               Ottomans
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        // Sultanhani Trade Network
        // Free Traders increased from 2 to 3.
        // Increased Trader garrison slots from 6 to 10.
        // Reduced income of each Trader from 28 to 24 Gold per minute.
        {
          items: ["buildings/sultanhani-trade-network"],
          civs: ["ot"],
          diff: [
            ["buff", "Free Traders increased from 2 to 3."],
            ["buff", "Increased Trader garrison slots from 6 to 10."],
            ["nerf", "Reduced income of each Trader from 28 to 24 Gold per minute."],
          ],
        },

        // Fixed an issue where the Elite Sipahi Upgrade was taking longer than intended to research, reduced from 90 to 60 seconds to match other Elite upgrades.
        {
          items: ["units/sipahi"],
          civs: ["ot"],
          diff: [
            [
              "fix",
              "Fixed an issue where the Elite Sipahi Upgrade was taking longer than intended to research, reduced from 90 to 60 seconds to match other Elite upgrades.",
            ],
          ],
        },
      ],
    },
    {
      //                                 Rus
      // Wandering Town Ram damage increase reduced from 50% to 25%.

      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["technologies/wandering-town"],
          civs: ["ru"],
          diff: [["nerf", "Wandering Town Ram damage increase reduced from 50% to 25%."]],
        },
      ],
    },
    {
      //                        Zhu Xi's Legacy
      // (Variant Civilization: Chinese)
      subtitle: "Zhu Xi's Legacy",
      civs: ["zx"],
      changes: [
        // Song Dynasty building wood discount reduced from 40% to 30%.
        // Song Dynasty bonus changed from affecting Non-military buildings to affecting Economic and Population buildings.
        // The discount now applies to the following buildings: Lumber Camp, Mill, Mining Camp, Granaries, Farms, Town Centers, Houses, Villages, and Markets.
        {
          items: [],
          title: "Song Dynasty",
          civs: ["zx"],
          diff: [
            ["nerf", "Building wood discount reduced from 40% to 30%."],
            ["buff", "Bonus changed from affecting Non-military buildings to affecting Economic and Population buildings."],
            [
              "buff",
              "The discount now applies to the following buildings: Lumber Camp, Mill, Mining Camp, Granaries, Farms, Town Centers, Houses, Villages, and Markets.",
            ],
          ],
        },

        // Meditation Gardens range reduced from 9 to 8 tiles.
        // Meditation Gardens: Resource generation reduced as follows:
        // Berry food per minute reduced from 8 to 6.
        // Stone mine resources per minute reduced from 30 to 25.
        // Gold mine resources per minute reduced from 30 to 25.
        {
          items: ["buildings/meditation-gardens"],
          civs: ["zx"],
          diff: [
            ["nerf", "Range reduced from 9 to 8 tiles."],
            ["nerf", "Berry food per minute reduced from 8 to 6."],
            ["nerf", "Stone mine resources per minute reduced from 30 to 25."],
            ["nerf", "Gold mine resources per minute reduced from 30 to 25."],
          ],
        },
        // Zhu Xi’s Library: Cloud of Terror area of effect reduced by 0.125 tiles and increased the damage fall-off.
        {
          items: ["technologies/cloud-of-terror"],
          civs: ["zx"],
          diff: [["nerf", "Cloud of Terror area of effect reduced by 0.125 tiles and increased the damage fall-off."]],
        },
        // Dock work rate bonus decreased from 20% to 10%.
        {
          items: ["buildings/dock"],
          civs: ["zx"],
          diff: [["nerf", "Dock work rate bonus decreased from 20% to 10%."]],
        },

        // Zhu Xi’s Library: It is no longer possible to queue more than two technologies at the Zhu Xi’s Library.
        {
          items: ["buildings/zhu-xis-library"],
          civs: ["zx"],
          diff: [["fix", "It is no longer possible to queue more than two technologies at the Zhu Xi’s Library."]],
        },

        // Tang Dynasty no longer reduces the Wonder cost.
        {
          title: "Tang Dynasty",
          items: [],
          civs: ["zx"],
          diff: [["nerf", "Tang Dynasty no longer reduces the Wonder cost."]],
        },

        // Corrected an issue where the Yuan Dynasty discount did not apply to the Yuan Raider.
        {
          items: ["units/yuan-raider"],
          civs: ["zx"],
          diff: [["fix", "Corrected an issue where the Yuan Dynasty discount did not apply to the Yuan Raider."]],
        },

        // Shaolin Monks are now able to pick up and deposit Relics reliably.
        {
          items: ["units/shaolin-monk"],
          civs: ["zx"],
          diff: [["fix", "Shaolin Monks are now able to pick up and deposit Relics reliably."]],
        },
        // Corrected an issue where Imperial Officials could Supervise Markets.
        {
          items: ["units/imperial-official"],
          civs: ["zx"],
          diff: [["fix", "Corrected an issue where Imperial Officials could Supervise Markets."]],
        },
        // 10000 Bolts: Updated help text to clarify that the additional bolt from Crossbowmen is 40% as effective as the main weapon.
        {
          items: ["technologies/10000-bolts"],
          civs: ["zx"],
          diff: [["fix", "Updated help text to clarify that the additional bolt from Crossbowmen is 40% as effective as the main weapon."]],
        },
      ],
    },
    {
      title: "Ongoing…",
      civs: [],
      changes: [],
      md: `
        ## Known Issues
        Known Issue with Byzantine Rain of Fire Mastery: It is possible for buildings to be destroyed by normal fire (from taking damage) before either the trebuchet or Greek Fire damage can deliver the final blow. This can result in buildings not counting towards the mastery. Try using more trebuchets against single buildings to increase the odds of that building counting towards the mastery. Additionally, landmarks do not count as destroyed (as they can be rebuilt)
        ##  Investigation
        ### Community-Reported Issues:
        Your reports continue being crucial to our prioritization and implementation of fixes and features in the game. Keep them coming!
        For other known issues, please visit this page to see what’s being tracked!`,
    },
    {
      title: "What's on the Horizon",
      civs: [],
      changes: [],
      md: `
        ## Coming Up…
        Following on from the Lunar Faire event that’s set to begin in a few short days, we’ll be celebrating International Women’s Day with our next seasonal event, set to kick off in early March! We’re also cooking up our next major update and look forward to sharing more soo
    `,
    },
  ],
};
