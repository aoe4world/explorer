import { PatchNotes } from "../../types/patches";

export const patch100576: PatchNotes = {
  id: "patch-100576",
  buildId: 100576,
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-seven-update-10-0-576/",
  name: "Patch 10.0.576",
  season: 7,
  type: "update",
  summary: "Introductiong Cross-Play, Quick Match Nomad and FFA. Buffs to Rams, French Keeps, Byzantine Mercenaries and HRE.",
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Spring-Tournies-Update-1920x1080-1.webp)  
"Spring is here at last! We’re kicking off the Season Seven update preview with Cross-Play so you will be able join your console and PC friends and adversaries on the battlefield, including in Team Ranked! Of course, we’re also rotating the map pool and delivering new events, fixes, and balance updates to keep life interesting!"`,
  date: new Date("2024-01-30T18:00:00Z"),
  sections: [
    {
      title: "Season Seven Update",
      civs: [],
      changes: [],
    },
    {
      subtitle: "New! Spring Tournaments Event",
      civs: [],
      changes: [],
      md: `
      Spring is here at last and what better time for a seasonal event? Prepare to login May 21 at 10:00 AM PT (1:00 PM ET / 17:00 UTC) through June 18 at 10:00 AM PT (1:00 PM ET / 17:00 UTC) for the Spring Tournaments rewards.

![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/Spring-Tournaments-Event-Rewards-Showcase-2048x2048.webp)
`,
    },
    {
      subtitle: "Ranked Season Seven",
      civs: [],
      changes: [],
      md: `To arms! Ranked play kicks off for Season Seven on March 20 at 12:00 pm PT (3:00 pm PT / 20:00 UTC)! Age up through the ranks and earn rewards!

![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/02/Ranked_Rewards_Season_7_Showcase_1080.webp)`,
    },
    {
      title: "Map Pool Rotation",
      civs: [],
      changes: [],
      md: `
      Season Seven brings another refresh on both map pools. This rotation gives some maps a much-needed break while we reintroduce maps that are excited to meet the new civilizations. High View, Lipany, and Danube River return to Solo Ranked while Prairie and Lipany return to Team Ranked.

      See you on the ladder!

        # 1v1 Ranked Map Pool 
        - Dry Arabia
        - Cliffside
        - Rocky River
        - Forts
        - Gorge
        - High View
        - Danube River
        - Lipany
        - Four Lakes        
        
        # Team Ranked Map Pool
        - Dry Arabia 
        - Cliffside 
        - Rocky River 
        - Prairie 
        - Gorge 
        - Hill and Dale 
        - Lipany 
        - Migration 
        - Waterholes 
  `,
    },
    {
      title: "Build Spotlight",
      civs: [],
      changes: [],
      md: `     
## Cross-Play is Now Available on PC and Console

You can join your console and PC friends and adversaries on the battlefield with cross-play!

## Team Ranked is Now Available on Console

You can now jump into Team Ranked mode on console! 

## Condensed Victory Objectives

We’ve created an alternate version of win conditions that take up as little screen space as possible, these are enabled by default and can be changed back in the game UI options.

![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/Defend_the_Sacred_Sites_AgeIV.webp)

## Quick Match Updates

- The Nomad Game Mode was added as a new option and comes with several improvements. 
- A new Free for All option has been added, allowing you to queue for 8 Player free for all matches. 
    - Quick match Free for All matches are played using the new “Dominion” win condition. 

### A Note on Leaderboards and Hidden Elo

Free For All will have a new leaderboard and track your hidden Elo separately, this means that matchmaking will result in more balanced games over time. In FFA mode, the winner is the only player to gain Elo and all other players lose Elo based on an even split equal to the amount of Elo that the winner gains.

Additionally, Nomad mode will share a leaderboard with Standard Mode. This means that when you queue for Nomad for the first time, you’ll be more likely to be matched with players close to your skill level.

## Nomad Improvements

- Starting Villagers increased from 3 to 5.
- Villagers’ starting distance increased.
- Holy Roman Empire Prelate, Zhu Xi’s Legacy Official, and Mongols Ger are granted upon Town Center construction and not at the start of the match.
- English Villager bows and Chinese Villager build speed bonus are deactivated at the start of the game, reactivated upon Town Center construction.
- Jeanne d’Arc Civilization starts with 3 Villagers plus Jeanne d’Arc.
- Order of the Dragon Civilization starts with 4 Villagers.

## New “Dominion” Win Condition

- Enabled/disabled in custom games via the Game Mode Win Conditions section (disabled by default).
- Compatible with Standard, Empire Wars, and Nomad Game Modes as well as all other win condition types.
- Players start with a Monarch that must be protected at all costs, losing a Monarch leads to the instant elimination of the owning player.
    - Eliminating an enemy Monarch grants +50 maximum population.
    - If a player is eliminated by Landmark victory, their Monarch remains on the field. Eliminating a neutral Monarch continues to grant +50 maximum population.
- Monarchs have two primary abilities:
    - Sprint: Temporarily move faster.
    - Treason: Reveal the location of enemy Monarchs and ping them on the minimap.
- Monarchs are visible on the minimap with a crown icon.
- AI players will garrison their Monarch into a safe building.
- When loading into a game with no other players or AI, the Dominion win condition will automatically deactivate and not spawn a Monarch at the start.

## Quality of Life Improvements

- Walls under construction can now be converted into gates via an ability on the placed blueprint. Conversion to a gate can happen at any time before the wall section is finished construction, after which it is no longer possible to convert directly, and a Villager must be used. The cost of the conversion is the difference between the cost of the wall and gate. 
- When ungarrisoning from a building, units will exit the building from the location closest to the rally point direction.
      `,
    },
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `
      ### AI

      - AI players now have a unique identifying number in the pinned player information.
      - AI villagers now flee when attacked by enemy units.
      - Corrected an issue where certain buildings would prioritize Battering Rams as targets.
      - Japanese AI now makes better use of Shinobi units.
      - Malian AI no longer get hyper focused on building a pit mine to the exclusion of all else.
      - Fixed an issue with Mongol AI not unpacking their starting Town Center.
      - Byzantine AI now place more cisterns.
      - Ottoman AI will no longer turn off military school production.
      - Easy AI no longer produces more than one Scout.
      
      > We have found that Easy AI can sometimes be too efficient at using Scouts to explore and take Sheep at this difficulty. We hope this change allows players to have more chances at securing Sheep when exploring the map.
      
      - Adjusted how the Easy and Intermediate AI chooses to advance to the next Age.
      - Easy AI is now adaptive, speeding up or slowing down its Age-up based on the other players in the match. The Easy AI will never surpass the Age of another player in the game.
      - Intermediate AI Ages up slower but can also adapt to faster Age-ups and catch up if needed.
      - Easy AI can now research Wheelbarrow and tier 1 economy technologies.
      - Easy AI can now research tier 1 Blacksmith technologies.
      - Intermediate AI can now only research tier 1 and 2 economy technologies.
      - Intermediate AI can now research tier 1 and 2 Blacksmith technologies.
      - Hard AI can now research all economy technologies.
      - Developer Note: Easy and Intermediate AI are being tuned to help players with ramp up in difficulty. The Easy AI would previously Age up too slow where the Intermediate AI would do so too fast. Additionally, Intermediate AI would research much more Blacksmith, economy, and other technologies compared to the Easy AI. These changes aim to create a more natural difficulty progression.
      
      ### Audio
      
      - Improved Simplified Chinese voice overs in The Sultans Ascend cinematics. 
      
      ### Xbox Console
      
      - Manjaniq weapon toggles are now correctly displayed on the radial menu.
      - Fixed a bug where the lobby screen displayed other player’s scroll bars as interactable.
      - Fixed incorrect text that appeared when joining an existing custom match.
      - Fixed an issue where an emblem overlapped text on the ranked page.
      
      ### General
      
      - Shore Fish can no longer be permanently removed when placing structures on them and will automatically return when the building is deleted or destroyed. 
      - Fixed an issue where Villagers seeking shelter would sometimes fail to choose the nearest available Outpost for shelter. 
      - When unloading units from a garrison, they now exit on the side closest to their destination. 
      - It’s now easier to target a live animal with a Villager when the animal overlaps a construction plan. 
      - Fixed an exploit where Monks could duplicate Relics when removing them from Monasteries. 
      - Fixed an issue where Lightweight Beams would not reduce construction times for some civilizations. 
      - Previously, if a siege unit lost sight of a building it was attacking, it would go idle. Now it will move closer to regain vision and resume its attack. 
      - Fixed a bug where Deer would get stuck together after colliding. 
      - Landmarks no longer retain their garrison arrows after being destroyed and repaired. 
      - Now, if a Siege Tower or Ram containing units passes over a stamped building, it will not cancel the building. 
      - When a player is defeated, their units will now fully cease their current actions when they turn neutral. 
      - Monks ordered to capture a Sacred Site will now remain until it’s captured before executing queued commands. 
      - Fixed a bug where Villagers would idle instead of returning to work when their previous job was gathering from a Boar. 
      - Explosive Ship kills are now counted in post-game statistics. 
      - The post-game statistics now correctly reflect units lost when a Transport Ship sinks.  
      - Units inside a Ram or Siege Tower inside a Transport Ship will now die if the ship is destroyed. 
      - Fixed a crash that could occur when exiting the Acre mission. 
      - The Inna Jiffy cheat now applies to Ayyubid cavalry and Ghulam units. 
      - Fixed a crash that could happen when playing on Canal with two teams of unequal player count. 
      - Fixed an issue where water borders were harsh or jagged on some maps. 
      - Fixed an issue with Forts where the wrong size of map was used for team games. This caused starting bases to overlap with enemies and allies in rare cases.  
      - Fixed an issue with Black Forest where the wrong size was used for solo and team games. This caused the middle lanes to be generated incorrectly. 
      - Fixed an issue with Migration where the wrong size was used for team games. This created a much smaller island to fight over once you have migrated to the main island. 
      - Fixed a crash that could occur when entering a match. 
      - Fixed a crash that could occur when switching control groups quickly while mousing over the command card.
      
      ### UI
      
      - Fixed a bug where if a party host leaves, the new host would not be able to invite new players to the party. 
      - Fixed an issue where codex items were incorrectly clipped. 
      - Added functionality for players to block chat communication and see who they have blocked. 
      - Player stats can now be viewed on the Quick Match screen. 
      - Fixed an issue that prevented players from scrolling the games list page under certain circumstances. 
      - The Byzantine Selection Card background pattern is no longer missing. 
      - Fixed an issue where using Shift + clicking on the idle / working villager buttons would not select all idle villagers or villagers working on the specific resource.  
      
      ### Achievements, Challenges & Masteries
      
      - Revamped Masteries to improve difficulty balance. 
      - Changed “Test of Strength” challenges from requiring the defeat of AI to winning games with the associated civilization. 
      - Fixed a bug where building extra landmarks to activate dynasties as the Chinese was being counted as aging up for the Achievement “Through the Ages”. 
      - Some Achievements that were previously untranslated into Turkish, Finnish, Polish and Russian are now translated. 
      - Fixed a bug where the “Transcontinental Empire” Achievement was not properly displaying progress. 
      - An issue with some Achievements not unlocking on Steam has been fixed.`,
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
          // Ram health increased from 340 to 370.
          // Ram build time decreased from 80 to 70 seconds.
          // Workshop Ram train time reduced from 40 to 35 seconds.
          items: ["units/battering-ram"],
          civs: [],
          diff: [
            ["buff", "Health increased from 340 to 370."],
            ["buff", "Build time decreased from 80 to 70 seconds."],
            ["buff", "Workshop train time reduced from 40 to 35 seconds."],
          ],
        },
        {
          // Mangonel and Nest of Bees health reduced from 140 to 130.
          items: ["units/mangonel", "units/manjaniq", "units/nest-of-bees"],
          civs: [],
          diff: [["nerf", "Health reduced from 140 to 130."]],
        },
        {
          // Springald bonus damage vs Siege increased from 60 to 65.
          items: ["units/springald"],
          civs: [],
          diff: [["buff", "Bonus damage vs Siege increased from 60 to 65."]],
        },
        {
          // Bombard, Great Bombard, and Cannon ranged armor increased from 35 to 40.
          items: ["units/cannon", "units/royal-cannon", "units/bombard", "units/great-bombard"],
          civs: [],
          diff: [["buff", "Ranged armor increased from 35 to 40."]],
        },
        {
          // Previously, some garrison-able buildings, units, and transports displayed each garrison weapon as individual weapons and have been merged for a cleaner weapon information card.
          title: "Garrison-able Buildings, Units and Transports",
          items: [],
          civs: [],
          diff: [],
          note: `Previously, some garrison-able buildings, units, and transports displayed each garrison weapon as individual weapons and have been merged for a cleaner weapon information card.`,
        },
        {
          // Corrected some issues where Elite Army Tactics and Incendiary Arrows were not affecting all intended units.
          items: ["technologies/elite-army-tactics", "technologies/incendiary-arrows"],
          civs: [],
          diff: [["fix", "Corrected some issues where Elite Army Tactics and Incendiary Arrows were not affecting all intended units."]],
        },
        {
          // Stone earned from Relics in Pagoda’s reduced by 50% and Food/Wood has been increased in its place.
          // Now generates 100 Gold, 62 Food, 62 Wood, 25 Stone
          items: ["buildings/pagoda"],
          civs: ["ch"],
          diff: [["nerf", "Now generates 100 Gold, 62 Food, 62 Wood, 25 Stone (was 100 Gold, 50 Food, 50 Wood, 50 Stone)"]],
        },
        {
          // Corrected an issue where loaded Battering Rams were missing the unload garrison ability for HRE and OoTD.
          items: ["units/battering-ram"],
          civs: ["hr", "od"],
          diff: [["fix", "Corrected an issue where loaded Battering Rams were missing the unload garrison ability for HRE and OoTD."]],
        },
        {
          // Corrected an issue where Merchant Guilds could be researched twice for French and Jeanne d’Arc.
          items: ["technologies/merchant-guilds"],
          civs: ["fr", "je"],
          diff: [["fix", "Corrected an issue where Merchant Guilds could be researched twice for French and Jeanne d’Arc."]],
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
          // Fresh Foodstuffs moved from the Town Center to the Mill.
          items: ["buildings/town-center", "buildings/mill", "technologies/fresh-foodstuffs"],
          civs: ["ab"],
          diff: [["buff", "Fresh Foodstuffs moved from the Town Center to the Mill."]],
        },
        {
          // Camel Archer cost reduced from 180 Food to 170 Food.
          items: ["units/camel-archer"],
          civs: ["ab"],
          diff: [["buff", "Cost reduced from 180 Food to 170 Food."]],
        },
        {
          // Fertile Crescent Wood discount increased from 25% to 30%.
          items: ["technologies/fertile-crescent"],
          civs: ["ab"],
          diff: [["buff", "Wood discount increased from 25% to 30%."]],
        },
        {
          // Spice Roads upgrade now correctly modifies gold income for all traders.
          items: ["technologies/spice-roads"],
          civs: ["ab"],
          diff: [["fix", "Spice Roads upgrade now correctly modifies gold income for all traders."]],
        },
      ],
    },
    //                              Ayyubids

    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          // Tower of the Sultan:
          // No longer has Ram melee vulnerability.
          // Build time reduced from 200 to 140 seconds.
          // Garrisoned units increase movement speed for each unit garrisoned.
          // Atabeg’s Supervision and Biology are now multiplicative.
          // Corrected an issue where Desert Raiders ranged weapon was not fully benefitting from their Golden Age 5 attack speed bonus.
          items: ["units/tower-of-the-sultan"],
          civs: ["ay"],
          diff: [
            ["buff", "No longer has Ram melee vulnerability."],
            ["buff", "Build time reduced from 200 to 140 seconds."],
            ["buff", "Garrisoned units increase movement speed for each unit garrisoned."],
            ["fix", "Atabeg’s Supervision and Biology are now multiplicative."],
          ],
        },
        {
          items: ["units/atabeg", "technologies/biology", "abilities/ability-atabeg-supervision"],
          civs: ["ay"],
          diff: [["fix", "Atabeg’s Supervision and Biology are now multiplicative."]],
        },
        {
          items: ["units/desert-raider"],
          civs: ["ay"],
          diff: [["fix", "Corrected an issue where Desert Raiders ranged weapon was not fully benefitting from their Golden Age 5 attack speed bonus."]],
        },
      ],
    },

    //                              Byzantines

    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          // Chierosiphon cost reduced from 200 Wood 100 Gold to 200 Wood 60 Gold.
          // Chierosiphon health increased from 280 to 310.
          // Chierosiphon ranged armor increased from 30 to 50.
          // Chierosiphon bonus damage vs Walls increased from 0 to 5.
          items: ["units/cheirosiphon"],
          civs: ["by"],
          diff: [
            ["buff", "Cost reduced from 200 Wood 100 Gold to 200 Wood 60 Gold."],
            ["buff", "Health increased from 280 to 310."],
            ["buff", "Ranged armor increased from 30 to 50."],
            ["buff", "Bonus damage vs Walls increased from 0 to 5."],
          ],
        },
        {
          // First Mercenary contract choice is now free and instant, saving 100 Olive Oil and 20 seconds of research time.
          items: [
            "buildings/mercenary-house",
            "technologies/eastern-mercenary-contract",
            "technologies/silk-road-mercenary-contract",
            "technologies/western-mercenary-contract",
          ],
          civs: ["by"],
          diff: [["buff", "First Mercenary contract choice is now free and instant, saving 100 Olive Oil and 20 seconds of research time."]],
        },
        {
          // Veteran Mercenary upgrade cost reduced from 100 Food 250 Gold to 50 Food 125 Gold and research time reduced from 60 to 30 seconds.
          items: ["technologies/veteran-mercenaries"],
          civs: ["by"],
          diff: [
            ["buff", "Cost reduced from 100 Food 250 Gold to 50 Food 125 Gold."],
            ["buff", "Research time reduced from 60 to 30 seconds."],
          ],
        },
        {
          // Limitanei Shield wall damage reduction reduced from 40% to 30%.
          items: ["units/limitanei", "abilities/ability-shield-wall"],
          civs: ["by"],
          diff: [["nerf", "Shield Wall Damage reduction reduced from 40% to 30%."]],
        },
        {
          // Mangonel Emplacement damage reduced from 8 to 7.
          items: ["technologies/mangonel-emplacement"],
          civs: ["by"],
          diff: [["nerf", "Damage reduced from 8 to 7."]],
        },
        {
          // Corrected an issue where Mercenary Sipahi and Mercenary Camel Riders would receive Gold from Expilatores upgrade when killing Villagers.
          items: ["technologies/expilatores", "units/camel-rider", "units/sipahi"],
          civs: ["by"],
          diff: [
            ["fix", "Corrected an issue where Mercenary Sipahi and Mercenary Camel Riders would receive Gold from Expilatores upgrade when killing Villagers."],
          ],
        },
        {
          // Greek Fire Projectiles help-text now mentions that patches of Greek Fire can’t stack.
          items: ["technologies/greek-fire-projectiles"],
          civs: ["by"],
          diff: [["fix", "Greek Fire Projectiles help-text now mentions that patches of Greek Fire can’t stack."]],
        },
      ],
    },

    //                                Chinese
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["buildings/barbican-of-the-sun"],
          civs: ["ch"],
          diff: [["buff", "Barbican of the Sun now accepts your tax drop-offs."]],
        },
      ],
    },

    //                            Delhi Sultanate
    // Ghazi Raiders are no longer missing bonus damage versus siege engines.
    // Lightweight Beams now has the correct research time in the Imperial Age.

    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["units/ghazi-raider"],
          civs: ["de"],
          diff: [["fix", "Ghazi Raiders are no longer missing bonus damage versus siege engines."]],
        },
        {
          items: ["technologies/lightweight-beams"],
          civs: ["de"],
          diff: [["fix", "Lightweight Beams now has the correct research time in the Imperial Age."]],
        },
      ],
    },

    //                                   English

    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["buildings/berkshire-palace"],
          civs: ["en"],
          diff: [
            ["fix", "Berkshire Palace weapons are no longer duplicated on their UI."],
            ["fix", "Corrected an issue where one garrison arrow was normal instead of incendiary."],
          ],
        },
      ],
    },

    //                               French

    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          items: ["buildings/keep"],
          civs: ["fr"],
          diff: [
            ["buff", "Keeps now cost 10% less stone to build."],
            ["buff", "Influence range increased by 1 tile."],
          ],
        },
      ],
    },

    //                     Holy Roman Empire

    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["technologies/marching-drills", "units/prelate"],
          civs: ["hr"],
          diff: [["nerf", "Marching Drills is now a civilization bonus and is granted for free at the start of the game, it no longer affects Prelates."]],
        },
        {
          items: ["technologies/inspired-warriors", "units/prelate"],
          civs: ["hr"],
          diff: [["buff", "Inspired Warriors now increases the move speed of Prelates."]],
        },
        {
          items: ["buildings/meinwerk-palace"],
          civs: ["hr"],
          diff: [["buff", "Bonus increased from 40% to 50% cost and research time."]],
        },
      ],
    },

    //                               Japanese

    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["buildings/castle-of-the-crow"],
          civs: ["ja"],
          diff: [
            ["fix", "Corrected an issue where projectiles would be blocked when attacked from certain angles."],
            ["fix", "Help-text now explains that bonus Stone is reduced compared to Food, Gold, and Wood."],
          ],
        },
        {
          items: ["technologies/towara", "technologies/takezaiku", "technologies/fudasashi"],
          civs: ["ja"],
          diff: [["fix", "Previously missing Towara, Takezaiku, and Fudasashi economy pips now appear."]],
        },
      ],
    },

    //                             Jeanne d'Arc
    // (Variant Civilization: French)

    // Consecrate help-text now updates after researching Ordinance Company.
    {
      subtitle: "Jeanne d'Arc",
      civs: ["je"],
      changes: [
        {
          items: ["abilities/ability-consecrate", "technologies/ordinance-company"],
          civs: ["je"],
          diff: [["fix", "Consecrate help-text now updates after researching Ordinance Company."]],
        },
      ],
    },

    //                            Mongols
    // Moving buildings rotation rate reduced so that they do not instantly snap when changing direction.
    // Horse Archers now properly use the Gallop ability.
    // Nest of Bees units now receive the Additional Barrels upgrade.
    // Prayer Tents no longer grant vision on pre-placement after researching Monastic Shrines.
    // Fixed an issue where units could get trapped in a Mongol landmark when its owner was eliminated.
    // A crash relating to The Silver Tree landmark has been fixed.
    // Allies of a Mongol player can now set the Silver Tree as a trade destination while it’s packed up and Traders will only move to it when it’s unpacked.

    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        // Ovoo Stone income in the Dark Age reduced from 80 to 70 per minute.
        {
          items: ["buildings/ovoo"],
          civs: ["mo"],
          diff: [["nerf", "Stone income in the Dark Age reduced from 80 to 70 per minute."]],
        },
        // Khaganate Palace: Rus Knights now properly use Poleaxe.
        {
          items: ["buildings/khaganate-palace", "units/khaganate-elite-knights"],
          civs: ["mo"],
          diff: [["fix", "Rus Knights now properly use Poleaxe."]],
        },
        {
          items: ["buildings/khaganate-palace", "units/khaganate-nest-of-bees"],
          civs: ["mo"],
          diff: [["buff", "Now receive the Additional Barrels upgrade."]],
        },
        {
          items: ["buildings/prayer-tent", "technologies/monastic-shrines"],
          civs: ["mo"],
          diff: [["fix", "Prayer Tents no longer grant vision on pre-placement after researching Monastic Shrines."]],
        },
        {
          items: ["buildings/the-silver-tree"],
          civs: ["mo"],
          diff: [
            ["fix", "Allies of a Mongol player can now set the Silver Tree as a trade destination while it’s packed up."],
            ["fix", "Traders will only move to it when it’s unpacked."],
            ["fix", "A crash relating to The Silver Tree landmark has been fixed."],
          ],
        },
        {
          title: "Moving Buildings",
          items: [],
          civs: ["mo"],
          diff: [["nerf", "Rotation rate reduced so that they do not instantly snap when changing direction."]],
        },
        {
          title: "Landmarks",
          items: [],
          civs: ["mo"],
          diff: [["fix", "Fixed an issue where units could get trapped in a Mongol landmark when its owner was eliminated."]],
        },
      ],
    },

    //                      Order of the Dragon
    // (Variant Civilization: Holy Roman Empire)

    // Aachen Chapel bonus increased from 10% to 15%.
    // Meinwerk Palace bonus increased from 40% to 50% cost and research time.
    // Golden Cuirass cost increased from 50 Food 125 Gold to 100 Food 200 Gold (50 Food 100 Gold discount).
    // Zornhau cost increased from 100 Food 250 Gold to 150 Food 350 Gold (75 Food 175 Gold discount).
    // Bodkin Bolts cost increased from 200 Food 500 Gold to 300 Food 700 Gold (150 Food 350 Gold discount).
    // Corrected Gilded Handcannons missing projectile and muzzle effects.

    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["buildings/aachen-chapel"],
          civs: ["od"],
          diff: [["buff", "Bonus increased from 10% to 15%."]],
        },
        {
          items: ["buildings/meinwerk-palace"],
          civs: ["od"],
          diff: [["buff", "Bonus increased from 40% to 50% cost and research time."]],
        },
        {
          items: ["technologies/golden-cuirass"],
          civs: ["od"],
          diff: [["nerf", "Cost increased from 50 Food 125 Gold to 100 Food 200 Gold (50 Food 100 Gold discount)."]],
        },
        {
          items: ["technologies/zornhau"],
          civs: ["od"],
          diff: [["nerf", "Cost increased from 100 Food 250 Gold to 150 Food 350 Gold (75 Food 175 Gold discount)."]],
        },
        {
          items: ["technologies/bodkin-bolts"],
          civs: ["od"],
          diff: [["nerf", "Cost increased from 200 Food 500 Gold to 300 Food 700 Gold (150 Food 350 Gold discount)."]],
        },
        {
          items: ["units/gilded-handcannoneer"],
          civs: ["od"],
          diff: [["fix", "Corrected Gilded Handcannons missing projectile and muzzle effects."]],
        },
      ],
    },

    //                               Ottomans
    // Great Bombard health reduced from 350 to 300.
    // Great Bombard ranged armor increased by +5.
    // Vizier experience requirements for each level increased from 60/80/120/200/320 to 60/100/150/240/320
    // Military School production speed reduced from 4.5x to 5x the standard production rate.

    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          items: ["units/great-bombard"],
          civs: ["ot"],
          diff: [
            ["nerf", "Health reduced from 350 to 300."],
            ["buff", "Ranged armor increased by +5."],
          ],
        },
        {
          title: "Vizier Points",
          items: [],
          civs: ["ot"],
          diff: [["nerf", "Experience requirements for each level increased from 60/80/120/200/320 to 60/100/150/240/320."]],
        },
        {
          items: ["buildings/military-school"],
          civs: ["ot"],
          diff: [["nerf", "Production speed reduced from 4.5x to 5x the standard production rate."]],
        },
      ],
    },

    //                                 Rus
    // Hunting Cabin build time increased from 25 to 35 seconds.
    // Boyars Fortitude cost increased from 100 Food, 250 Gold to 150 Food, 350 Gold.
    // Corrected an issue where Horse Archers would not retain the Mounted Precision bonuses when advancing to the next tier.

    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["buildings/hunting-cabin"],
          civs: ["ru"],
          diff: [["nerf", "Build time increased from 25 to 35 seconds."]],
        },
        {
          items: ["technologies/boyars-fortitude"],
          civs: ["ru"],
          diff: [["nerf", "Cost increased from 100 Food, 250 Gold to 150 Food, 350 Gold."]],
        },
        {
          items: ["units/horse-archer"],
          civs: ["ru"],
          diff: [["fix", "Corrected an issue where Horse Archers would not retain the Mounted Precision bonuses when advancing to the next tier."]],
        },
      ],
    },

    {
      title: "Ongoing…",
      civs: [],
      changes: [],
      md: `
        ## Known Issues
        For known issues, please visit this page to see what’s being tracked:
        [Known Issues](https://support.ageofempires.com/hc/en-us/articles/4408424670484-Known-Issues-Solutions)`,
    },
    {
      title: "What's on the Horizon",
      civs: [],
      changes: [],
      md: `
        ## Coming Up…
        We’re working on our next update and look forward to sharing more soon.

    `,
    },
  ],
};
