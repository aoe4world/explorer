import { PatchNotes } from "../../types/patches";

export const season5: PatchNotes = {
  id: "season-5",
  buildId: 705861,
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-five-update-7-0-5861/",
  name: "Season Five Update",
  summary: `"We’re turning up the heat in Season Five with Map Monsters: Summer Party Edition! Scout the land and scour the sea in search for the elusive Wild Man and mysterious Dragon Turtle in our Summer Party event! Start a match off strong in Empire Wars – a new, quick-to-action game mode where players start with a burgeoning empire of pre-built buildings and villagers already tasked to resources. But that’s not all: We’ve packed this update with loads of new content and features, ready for you to dive in starting June 15th!"

  A few highlights include:

* Three new maps: Golden Heights, Migration, and Volcanic Island!
* The start of Ranked Season Five, bringing with it new rewards and an updated map pool rotation!
* Team Voice Chat – strategize with your friends in-match with the new team voice chat! Or use the speech-to-text feature to more easily send communications to your team!
* Visual upgrades, and performance-related improvements!
* New trade updates based directly on community feedback!
* New unique options for every civilization! From unique tech to unique units, we’re making design changes so that each civilization’s personality shines through!
* Additional support for mods that make it easier for everyone in the lobby to start the match.
* … and a whole lot of bug fixes & balance changes!
`,
  html: (
    <div>
      <iframe
        width="889"
        height="500"
        src="https://www.youtube.com/embed/GjDM0Ia7z1w"
        class="w-full aspect-video"
        title="Age of Empires IV: Season Five - Map Monsters: Summer Party Edition Trailer
        "
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="my-5 rounded-lg p-4 bg-gray-500">
        This page foucuses on gameplay and balance changes (manually reviewed and clarified by AoE4 World) which are shown first. To learn more about Ranked
        Season Five Map pool and rewards, and other changes, scroll to the bottom or head over to the
        <a href="https://www.ageofempires.com/news/age-of-empires-iv-season-five-update-7-0-5861/" class="underline font-bold text-white ml-1">
          official patch notes
        </a>
        .
      </div>
    </div>
  ),
  date: new Date("2023-02-16T12:00:00Z"),
  sections: [
    {
      title: "Build Spotlight",
      civs: [],
      changes: [],
      md: `
## New Game Mode: Empire Wars

![Golden throne engraved with roman numerals "Age IV" and surrounded by wood, food, stone, gold, and sheep wearing blue scarves](https://www.ageofempires.com/wp-content/uploads/2023/06/Empire-Wars_tron_final_1920x1080-1080x608.png)

Empire Wars is a new, quick-to-action game mode for *Age of Empires IV.* Players start their game with a burgeoning empire, ready to dive into combat or advance to the next Age! Available in custom and skirmish games, the player starts with a variety of buildings alongside a distribution of working villagers which creates a foothold on the map for players to expand from. Villagers will already be busy working farms, chopping trees, and mining gold and stone. 

Empire Wars has the same win conditions as Standard game mode and is available on all maps. No starting town is the same. Will your empire prevail? 

![Empire Wars image saying "Provides a faster start to the game, with Villagers already assigned to tasks, a Dark Age town in place, and elevated resources.](https://www.ageofempires.com/wp-content/uploads/2023/06/Empire-Wars-Match-Selection.png)

#### Choosing the Mode

Select Empire Wars among the game modes in any Custom or Skirmish game setup. 

![](https://www.ageofempires.com/wp-content/uploads/2023/06/Enable-Empire-Wars.gif)

#### Start Conditions 

In Empire Wars, the player's economy is balanced around expanding your empire quickly. Each player starts with a distinct town, made up of pre-built buildings that maximize their chosen civilization's strengths, as well as villagers and some special units already assigned to different tasks. Choose how you would like to use these resources to quickly gain an advantage. 

![Map showing the Malian's starting point in Empire Wars game mode.](https://www.ageofempires.com/wp-content/uploads/2023/06/EmpireWars_MalianStart_MigrationMap.png)

## Three New Maps

![map showing golden heights](https://www.ageofempires.com/wp-content/uploads/2023/06/golden_heights_icon.png)

### Golden Heights

Opposing factions settle beneath a cliff shimmering in gold, and fertile pond beyond.    

![map showing three islands in migration](https://www.ageofempires.com/wp-content/uploads/2023/06/migration_icon.png)

### Migration

While initially safe, players must soon migrate to more prosperous lands for both space and resources.

![Map showing a large island surrounded by multiple tiny ones in volcanic island](https://www.ageofempires.com/wp-content/uploads/2023/06/volcanic_island_icon.png)

### Volcanic Island

With stone scattered around in the shallows, the once fire-breathing mountain has since overgrown with lush vegetation and now awaits to be conquered. 

## New Feature: Team Voice Chat 

Voice chat is now available between team members during games. Use a standard headset or microphone setup on your PC to communicate and strategize with your teammates while you play. 

Voice chat is only available once the match starts. It is not available in lobbies or party windows in the front end. Text chat remains available in all these situations. 

![](https://www.ageofempires.com/wp-content/uploads/2023/06/Enable-Voice-Chat.gif)

During play, you can mute players if needed. Volume settings are accessible from the game settings menu. 

> Please see our FAQ for more information (https://support.ageofempires.com/hc/en-us/articles/16126586639380-Voice-Chat) on Voice Chat features including How to Report a Player (https://support.ageofempires.com/hc/en-us/articles/4408849382676-How-do-I-report-a-player-).

## Performance Upgrades

This build contains a number of visual upgrades, and performance-related improvements. These kinds of system-based changes, paired with new features, can result in edge case bugs -- please report any crashes by sending in a copy of your Warning Logs (https://support.ageofempires.com/hc/en-us/articles/4408793405460-How-to-find-information-for-troubleshooting-with-Support) before you restart the game. Thank you! 

Significantly improved terrain rendering: 
* We've built a brand-new terrain rendering system which greatly improves our effective terrain texture resolution. Terrain projection, layering and lighting are now done per-pixel, which solves many of the visual and performance issues of our old terrain approach. The new system has a more consistent per frame cost which reduces hitching when quickly panning the camera and during late game large scale battles.  

New ambient occlusion: 
* The new ambient occlusion technique results in notably higher detailed indirect shadows. On High and Medium settings, we've enabled ambient occlusion on foliage which adds a lot of shape to forests and shrubs. 

> The new technique has comparable computational cost as our prior solution.

Improved directional light shadows: 
* Shadows are now higher resolution, better filtered and more performant. The improvements allow for more shadow detail with less distracting flickering artifacts.  

Improved material specular response: 
* Metals and other reflective surfaces now appear livelier and more lifelike.

![in-game view of the old graphics ](https://www.ageofempires.com/wp-content/uploads/2023/06/Rendering-Cliff-Old-1080x607.png)

![in-game view of the old graphics](https://www.ageofempires.com/wp-content/uploads/2023/06/Rendering-Cliff-New-1080x607.png)

Comparison of the old visuals (left) and the new visuals (right). 

## Trade Update

Trade has always been a great source of gold in the late game. However, there are a number of civilization bonuses that make Trade more effective earlier on.  We've updated the formula to streamline the experience and improve overall balance.

Full details on the changes to trade can be found in the Balance & Bugfixes section below. 

## Unique Options for Every Civilization 

Unique units and technologies are major factors that make civilizations feel different from each other, adding excitement and variety. We reviewed the overall enjoyment and effectiveness of every civilization-specific unit and technology for this update, which resulted in a variety of changes -- from minor tweaks to full redesigns! Below you'll find improvements to balance, general gameplay enhancements, as well as some exciting new tools.


## 4K HDR Video Pack

Four of the 4K videos included in the optional free *Age of Empires IV: 4K HDR Video Pack* have been replaced with their 1080p counterparts due to photosensitivity concerns. All other videos in the pack remain the same. Impacted videos include: 

* The Norman Legacy  
* Legacy of the Mongols 
* War's End 
* Swords & Sabers

## Platform Updates

* Steam achievements now properly display progression status on the Steam platform.`,
    },
    {
      title: "Balance & Gameplay",
      civs: [],
      changes: [],
    },
    {
      subtitle: "General Changes & Bugfixes",
      civs: [],
      md: `
* Fixed being able to build stone walls through stone towers when connecting to an existing stone wall. 
* Fixed a rare case where defensive structures would stop firing at visible targets within range.   
* Improved visibility around Sacred Sites by updating the UI to prevent units being blocked from the player’s view. 
* Trees no longer block the cursor when garrisoning into buildings behind them. 
* Fixed a bug where straggler trees would sometimes not be removed when buildings were placed on top of them. 
* Villagers now properly switch weapons to a knife from a crook. 
* As a follow-up fix to the previous Health bar setting optimization work, wild animal Health bars are improved to better reflect player’s expectations. 
  * When Health bars Setting = Always on: 
  * Hostile wild animal health bars stay visible (Boar and Wolf). 
  * Non-hostile wild animal health bars stay hidden until damaged or selected. (Sheep, Cattle, and Deer). 
* Fixed an issue where portions of the minimap were not clickable after it is rotated. 
* Production sounds are functioning now in all Landmarks. 
* Ranked Season name is now localized. 
* Fixed an issue where long win condition descriptions on mods would block players from changing win condition options. 
`,
      changes: [],
    },
    {
      subtitle: "Trade Update",
      civs: [],
      md: `
Gold is now given every time the trader touches a Trade Post or Market instead of at the end of the trip. So, you’ll effectively be getting gold more often, but less gold each time the trader arrives. This also means there’s less need for micromanagement when your trade line is attacked. Simply right click on a market and they’ll go back to trading without having to worry about losing the gold being carried. 

The “Set a Home Market” button has been removed and replaced with a “Restart Trading” button. Traders now always remember the last market they were at and calculate income based off that distance. Restart Trading has traders resume their route after being moved or garrisoned. 
`,
      changes: [],
    },
    {
      subtitle: "Gameplay Changes for All Civilizations",
      civs: [],

      changes: [
        {
          // New Spyglasses technology:
          // Available from the Stables in the Imperial Age.
          // Increases the line of sight of scouts.
          // Scouts no longer gain extra line of sight as the player Ages up.
          // Spyglasses has unique remappable hotkeys for the Abbasid Dynasty, Chinese, Delhi Sultanate, and Malians, as they have unique Stables.
          items: ["technologies/spyglass", "units/scout"],
          civs: [],
          diff: [
            ["buff", "New technology available from the Stables in the Imperial Age increases the line of sight of scouts"],
            ["nerf", "Scouts no longer gain extra line of sight as the player Ages up."],
            ["fix", "Spyglasses has unique remappable hotkeys for the Abbasid Dynasty, Chinese, Delhi Sultanate, and Malians, as they have unique Stables."],
          ],
        },
        {
          // Outpost Landmarks (Barbican of the Sun, Kremlin, and Saharan Trade Network) cannot be built within 8 tiles of Enemy Landmark Town Centers.
          items: ["buildings/barbican-of-the-sun", "buildings/kremlin", "buildings/saharan-trade-network"],
          civs: ["ch", "ru", "ab"],
          diff: [["nerf", "Outpost Landmarks cannot be built within 8 tiles of Enemy Landmark Town Centers."]],
        },
        {
          // Lightweight Beams:
          // Cost increased from 100 wood / 225 gold to 300 wood / 400 gold.
          // Mongols’ Improved Lightweight Beams cost increased from 325 stone to 700 stone.
          // Research time increased from 45 seconds to 60 seconds.
          // Delhi Sultanate’s research time increased from 585 seconds to 780 seconds.
          items: ["technologies/lightweight-beams", "technologies/lightweight-beams-improved"],
          civs: [],
          diff: [
            ["nerf", "Cost increased from 100 wood / 225 gold to 300 wood / 400 gold."],
            ["nerf", "Mongols’ Improved Lightweight Beams cost increased from 325 stone to 700 stone.", ["mo"]],
            ["nerf", "DelhiResearch time increased from 45 seconds to 60 seconds.", ["de"]],
          ],
        },
        {
          // Palisade Gate health decreased from 1500 to 1250.
          items: ["buildings/palisade-gate"],
          civs: [],
          diff: [["nerf", "Health decreased from 1500 to 1250."]],
        },
        {
          // Units standing on walls that idle aggro will no longer leave the safe walls to chase enemy units.
          items: ["buildings/stone-wall"],
          civs: [],
          diff: [["fix", "Units standing on walls that idle aggro will no longer leave the safe walls to chase enemy units."]],
        },
        {
          // All defensive building’s attack radiuses are now made visible to any player when selected.
          // Berkshire Palace\nThe White Tower\nElzbach Palace\nRed Palace\nBarbican of the Sun\nGreat Wall Gatehouse\nCompound of the Defender\nFort of the Huntress\nSaharan Trade Network\nSea Gate Castle\nKremlin\nSpasskaya Tower'
          items: [
            "buildings/keep",
            "buildings/outpost",
            "buildings/toll-outpost",
            "buildings/wooden-fortress",
            // "buildings/berkshire-palace",
            // "buildings/the-white-tower",
            // "buildings/elzbach-palace",
            // "buildings/red-palace",
            // "buildings/barbican-of-the-sun",
            // "buildings/great-wall-gatehouse",
            // "buildings/compound-of-the-defender",
            // "buildings/fort-of-the-huntress",
            // "buildings/saharan-trade-network",
            // "buildings/sea-gate-castle",
            // "buildings/kremlin",
            // "buildings/spasskaya-tower",
          ],
          civs: [],
          diff: [["fix", "All defensive building’s attack radiuses are now made visible to any player when selected."]],
        },
        {
          // Monks can now heal any injured friendly units nearby while patrolling.
          // Heal and Inspire Abilities can now be queued from the command card.
          items: ["units/monk", "units/prelate", "units/imam", "units/scholar", "units/warrior-monk"],
          civs: [],
          diff: [
            ["buff", "Monks can now heal any injured friendly units nearby while patrolling."],
            ["buff", "Heal and Inspire Abilities can now be queued from the command card."],
          ],
        },
      ],
    },
    {
      subtitle: "Naval Updates for All Civilizations",
      civs: [],
      changes: [
        {
          // Armored Hull technology:
          // Cost Reduced from 200 food / 500 gold to 150 food / 350 gold.
          // Research time reduced from 45 seconds to 30 seconds.
          // Delhi Sultanate research time reduced from 225 seconds to 150 seconds.
          items: ["technologies/armored-hull"],
          civs: [],
          diff: [
            ["buff", "Cost Reduced from 200 food / 500 gold to 150 food / 350 gold."],
            ["buff", "Research time reduced from 45 seconds to 30 seconds."],
            ["buff", "Delhi Sultanate research time reduced from 225 seconds to 150 seconds.", ["de"]],
          ],
        },
        {
          // Naval ships under Attack Move orders will now continue along the shortest path to their destination after destroying a target.
          items: [
            "units/galley",
            "units/dhow",
            "units/junk",
            "units/hunting-canoe",
            "units/light-junk",
            "units/lodya-galley",
            "units/hulk",
            "units/baghlah",
            "units/war-cog",
            "units/war-canoe",
            "units/lodya-attack-ship",
            "units/war-junk",
            "units/demolition-ship",
            "units/lodya-demolition-ship",
            "units/explosive-junk",
            "units/explosive-dhow",
            "units/carrack",
            "units/baochuan",
            "units/xebec",
          ],
          civs: [],
          diff: [["fix", "Naval ships under Attack Move orders will now continue along the shortest path to their destination after destroying a target."]],
        },
        // Arrow Ships now target the center of enemy ships correctly, this improves the arrow visuals and communicates when they hit or miss better.
        {
          items: ["units/galley", "units/dhow", "units/junk", "units/hunting-canoe", "units/light-junk", "units/lodya-galley"],
          civs: [],
          diff: [
            [
              "fix",
              "Arrow Ships now target the center of enemy ships correctly, this improves the arrow visuals and communicates when they hit or miss better.",
            ],
          ],
        },
        {
          // Springald Ships now properly target and shoot enemy units that are close by.
          // Increased the Springald Ship’s bonus damage vs buildings from 45 to 55.
          // Developer Note: When looking at this unit’s damage vs a dock relative to its resource cost, the time was too long. We’ve increased the bonus damage to make Springald Ships destroy all buildings faster.
          items: ["units/hulk", "units/baghlah", "units/war-cog", "units/war-canoe", "units/lodya-attack-ship", "units/war-junk"],
          civs: [],
          diff: [
            ["fix", "Springald Ships now properly target and shoot enemy units that are close by."],
            ["buff", "Increased the Springald Ship’s bonus damage vs buildings from 45 to 55."],
          ],
          note: "When looking at this unit’s damage vs a dock relative to its resource cost, the time was too long. We’ve increased the bonus damage to make Springald Ships destroy all buildings faster.",
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
          //         Man-at-Arm unit renamed to Ghulam.
          // This fearsome warrior boasts a powerful double strike that will chew through unarmored units but is less effective vs. enemy Knights and Man-at-Arms.
          // Deals two attacks in quick succession.
          // Attack decreased from 12/14 to 10/12.
          // Attack speed changed from 1.38 to 1.13 (1.63 for the full double strike).
          // Cost increased from 100 food / 20 gold to 120 food / 30 gold.
          // Move speed increased from 1.12 to 1.19.
          // Health increased from 155/180 to 195/225.
          // Train time increased from 22.5 seconds to 26 seconds.
          // Deals 15 damage on a charge attack.
          items: ["units/ghulam"],
          civs: ["ab"],
          diff: [
            ["buff", "New unit 'Ghulam' replaces the Man-at-Arms"],
            [
              "buff",
              "This fearsome warrior boasts a powerful double strike that will chew through unarmored units but is less effective vs. enemy Knights and Man-at-Arms. ",
            ],
            ["buff", "Deals two attacks in quick succession."],
            ["nerf", "Attack decreased from 12/14 to 10/12."],
            ["buff", "Attack speed changed from 1.38 to 1.13 (1.63 for the full double strike)."],
            ["nerf", "Cost increased from 100 food / 20 gold to 120 food / 30 gold."],
            ["buff", "Move speed increased from 1.12 to 1.19."],
            ["buff", "Health increased from 155/180 to 195/225."],
            ["nerf", "Train time increased from 22.5 seconds to 26 seconds."],
            ["buff", "Deals 15 damage on a charge attack."],
          ],
        },
        {
          // House of Wisdom:
          // Corrected help text reference to Proselytization instead of Faith.
          items: ["buildings/house-of-wisdom", "technologies/proselytization"],
          civs: ["ab"],
          diff: [["fix", "Corrected help text reference to Proselytization instead of Faith."]],
        },
        {
          // Preservation of Knowledge technology:
          // Help text updated to reflect that bonus applies to advancing Ages as well.
          // Fixed an issue where Outpost emplacements were affected.
          items: ["buildings/house-of-wisdom", "technologies/preservation-of-knowledge", "buildings/outpost"],
          civs: ["ab"],
          diff: [
            ["fix", "Help text updated to reflect that bonus applies to advancing Ages as well."],
            ["fix", "Fixed an issue where Outpost emplacements were affected."],
          ],
        },
        {
          // Camel Rider cost changed from 180 food / 60 gold to 160 food / 30 gold / 30 wood.
          // Developer Note: We wanted to increase the general cost effectiveness of this unit as well as bring down the food cost so it’s easier to mix into production cycles.
          items: ["units/camel-rider"],
          civs: ["ab"],
          diff: [["buff", "Cost changed from 180 food / 60 gold to 160 food / 30 gold / 30 wood."]],
          note: "We wanted to increase the general cost effectiveness of this unit as well as bring down the food cost so it’s easier to mix into production cycles.",
        },
        {
          // Removed long firing delay on Camel Archers.
          // Developer’s Note: Damage per Second remains the same, but it is now easier to kite and micro the unit.
          items: ["units/camel-archer"],
          civs: ["ab"],
          diff: [["buff", "Removed long firing delay on Camel Archers."]],
          note: "Damage per Second remains the same, but it is now easier to kite and micro the unit.",
        },
        {
          // Camel Rider Shields and Camel Rider Barding technologies are now tier upgrades and share the same UI slot at the Stables.
          items: ["technologies/camel-rider-shields", "technologies/camel-rider-barding"],
          civs: ["ab"],
          diff: [["fix", "Camel Rider Shields and Camel Rider Barding technologies are now tier upgrades and share the same UI slot at the Stables."]],
        },
        {
          // Camel Rider Shields:
          // Cost reduced from 100 food / 250 gold to 75 Food / 200 Gold.
          // Research time reduced from 60 seconds to 45 seconds.
          items: ["technologies/camel-rider-shields"],
          civs: ["ab"],
          diff: [
            ["buff", "Cost reduced from 100 food / 250 gold to 75 Food / 200 Gold."],
            ["buff", "Research time reduced from 60 seconds to 45 seconds."],
          ],
        },
        {
          // Teak Masts technology:
          // Cost reduced from 100 wood / 150 gold to 75 wood / 125 gold.
          // Moved from Castle Age to Feudal Age.
          // Research time reduced from 30 seconds to 20 seconds.
          // Instead of +10% move speed, now adds +10% HP to military ships.
          items: ["technologies/teak-masts"],
          civs: ["ab"],
          diff: [
            ["buff", "Cost reduced from 100 wood / 150 gold to 75 wood / 125 gold."],
            ["buff", "Moved from Castle Age to Feudal Age."],
            ["buff", "Research time reduced from 30 seconds to 20 seconds."],
            ["buff", "Instead of +10% move speed, now adds +10% HP to military ships."],
          ],
        },
        {
          // Imams:
          // Created a more subtle, scaled down version of the conversion sound for single target conversions.
          // Imams with the Proselytization upgrade will no longer try to convert an enemy that has already been converted.
          items: ["units/imam", "technologies/proselytization"],
          civs: ["ab"],
          diff: [
            ["fix", "Created a more subtle, scaled down version of the conversion sound for single target conversions."],
            ["fix", "Imams with the Proselytization upgrade will no longer try to convert an enemy that has already been converted."],
          ],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          //         Reusable Barrels reworked into Additional Barrels.
          // No longer reduces cost of Nest of Bees.
          // Nest of Bees receives +1 additional Rocket Arrows per volley.
          // Cost increased from 150 wood / 350 gold to 200 wood / 500 gold.
          items: ["technologies/additional-barrels", "units/nest-of-bees"],
          civs: ["ch"],
          diff: [
            ["nerf", "Reusable Barrels reworked into Additional Barrels."],
            ["nerf", "No longer reduces cost of Nest of Bees."],
            ["buff", "Nest of Bees receives +1 additional Rocket Arrows per volley."],
            ["nerf", "Cost increased from 150 wood / 350 gold to 200 wood / 500 gold."],
          ],
        },
        {
          // Imperial Palace and Spirit Way Landmarks are now Tax drop-off locations.
          items: ["buildings/imperial-palace", "buildings/spirit-way", "units/imperial-official"],
          civs: ["ch"],
          diff: [["buff", "Imperial Palace and Spirit Way Landmarks are now Tax drop-off locations."]],
        },
        // Barbican of the Sun Landmark:
        // Cannot be built within 8 tiles of Enemy Landmark Town Centers.
        {
          // Zhuge Nu cost adjusted from 20 food / 30 gold / 30 wood to 30 food / 20 gold / 30 wood.
          // Developer Note: We want to have a higher food tax on players making Zhuge Nu so they either have to risk going out on the map or invest wood for a farm transition.
          items: ["units/zhuge-nu"],
          civs: ["ch"],
          diff: [["nerf", "Cost adjusted from 20 food / 30 gold / 30 wood to 30 food / 20 gold / 30 wood."]],
          note: "We want to have a higher food tax on players making Zhuge Nu so they either have to risk going out on the map or invest wood for a farm transition.",
        },
        {
          // Grenadier:
          // Damage decreased from 13 to 10.
          // Damage type changed from ranged to siege (ignores armor).
          // Bonus damage vs buildings reduced from 65 to 20.
          items: ["units/grenadier"],
          civs: ["ch"],
          diff: [
            ["nerf", "Damage decreased from 13 to 10."],
            ["buff", "Damage type changed from ranged to siege (ignores armor)."],
            ["nerf", "Bonus damage vs buildings reduced from 65 to 20."],
          ],
        },
        {
          // Fire Lancer:
          // Torch Damage reduced from 36/40 to 30/34.
          items: ["units/fire-lancer"],
          civs: ["ch"],
          diff: [["nerf", "Torch Damage reduced from 36/40 to 30/34."]],
        },
        {
          // Corrected an issue where the incorrect value on Reload Drills was displayed.
          items: ["technologies/reload-drills"],
          civs: ["ch"],
          diff: [["fix", "Corrected an issue where the incorrect value on Reload Drills was displayed."]],
        },
        {
          // Palace Guard cost increased from 100 food / 20 gold to 100 food / 25 gold.
          items: ["units/palace-guard"],
          civs: ["ch"],
          diff: [["nerf", "Cost increased from 100 food / 20 gold to 100 food / 25 gold."]],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          //         Horseman renamed Ghazi Raider
          // Uses a Mace in combat.
          // Cost increased from 100 food / 20 wood to 110 food / 30 wood.
          // HP increased from 125/155/180 to 140/180/200.
          // Damage increased from 9/11/13 to 12/15/18.
          // Gain +2/3/4 bonus vs Heavy.
          // Attack speed changed from 1.88 to 2.0.
          // Train time increased from 22.5 seconds to 25 seconds.
          items: ["units/ghazi-raider"],
          civs: ["de"],
          diff: [
            ["buff", "New unit 'Ghazi Raider' replaces Horseman."],
            ["buff", "Uses a Mace in combat."],
            ["nerf", "Cost increased from 100 food / 20 wood to 110 food / 30 wood."],
            ["buff", "HP increased from 125/155/180 to 140/180/200."],
            ["buff", "Damage increased from 9/11/13 to 12/15/18."],
            ["buff", "Gain +2/3/4 bonus vs Heavy."],
            ["nerf", "Attack speed changed from 1.88 to 2.0."],
            ["nerf", "Train time increased from 22.5 seconds to 25 seconds."],
          ],
        },
        {
          // Compound of the Defender Landmark:
          // Help text now clarifies technologies bypass Age requirements.
          items: ["buildings/compound-of-the-defender"],
          civs: ["de"],
          diff: [["fix", "Help text now clarifies technologies bypass Age requirements."]],
        },
        {
          // Dome of Faith Landmark:
          // Help text updated to reflect that the Landmark acts as a Mosque.
          items: ["buildings/dome-of-the-faith"],
          civs: ["de"],
          diff: [["fix", "Help text updated to reflect that the Landmark acts as a Mosque."]],
        },
        {
          // Civilization description now states the +50% bonus HP on their fishing ships.
          items: ["units/fishing-boat"],
          civs: ["de"],
          diff: [["fix", "Civilization description now states the +50% bonus HP on their fishing ships."]],
        },
        {
          // Elephants:
          // While they are as big as boats, elephants are no longer attacked by Dock emplacement arrows.
          // Updated targeting priority of elephants to prefer units over buildings.
          items: ["units/war-elephant", "units/tower-elephant"],
          civs: ["de"],
          diff: [
            ["fix", "Elephants are no longer attacked by Dock emplacement arrows."],
            ["buff", "Updated targeting priority of elephants to prefer units over buildings."],
          ],
        },
        {
          // War Elephant:
          // Siege Tusk weapon removed, now uses its Melee Tusk against buildings.
          // Old: Siege Tusk, 100 siege +100 vs buildings, 5.75 attack speed (34 dps).
          // New: Melee Tusk, 50 melee + 45 vs buildings, 2.75 attack speed (34 dps).
          items: ["units/war-elephant"],
          civs: ["de"],
          diff: [["nerf", "Siege Tusk weapon removed, now uses its Melee Tusk against buildings."]],
          note: "Old: Siege Tusk, 100 siege +100 vs buildings, 5.75 attack speed (34 dps). New: Melee Tusk, 50 melee + 45 vs buildings, 2.75 attack speed (34 dps).",
        },
        {
          // Tower Elephant:
          // Siege Tusk weapon removed, now uses its Melee Tusk against buildings.
          // Old: Siege Tusk, 100 siege +50 vs buildings, 5.75 attack speed (26 dps).
          // New: Melee Tusk, 30 melee + 40 vs buildings, 2.75 attack speed (25 dps).
          // Corrected issue with Tower Elephant’s riders skipping Incendiary Arrow class.
          items: ["units/tower-elephant"],
          civs: ["de"],
          diff: [
            ["nerf", "Siege Tusk weapon removed, now uses its Melee Tusk against buildings."],
            ["fix", "Corrected issue with Tower Elephant’s riders skipping Incendiary Arrow class."],
          ],
          note: "Old: Siege Tusk, 100 siege +50 vs buildings, 5.75 attack speed (26 dps). New: Melee Tusk, 30 melee + 40 vs buildings, 2.75 attack speed (25 dps).",
        },
        {
          // Added UI buff icon to units affected by Zeal.
          items: ["technologies/zeal"],
          civs: ["de"],
          diff: [["fix", "Added UI buff icon to units affected by Zeal."]],
        },
        {
          // Scholars will no longer be selected first when cycling through building selections.
          items: ["units/scholar"],
          civs: ["de"],
          diff: [["fix", "Scholars will no longer be selected first when cycling through building selections."]],
        },
        {
          // Sanctity technology gold income bonus reduced from 50% to 25%.
          // Developer Note: Sanctity can create very binary games where the Delhi player has three Sacred Sites and a gigantic advantage or no Sacred Sites and is far behind. We reduced this delta in power and gave them the Ghazi Raider to create a more balanced power curve in the Feudal Age.
          items: ["technologies/sanctity"],
          civs: ["de"],
          diff: [["nerf", "Sanctity technology gold income bonus reduced from 50% to 25%."]],
          note: "Sanctity can create very binary games where the Delhi player has three Sacred Sites and a gigantic advantage or no Sacred Sites and is far behind. We reduced this delta in power and gave them the Ghazi Raider to create a more balanced power curve in the Feudal Age.",
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        // Campfire ability:
        {
          // Campfire ability:
          // Moved from the Longbow to the Man-at-Arms.
          items: ["units/longbowman"],
          civs: ["en"],
          diff: [["nerf", "Set-up camp ability removed from Longbowman"]],
        },
        {
          // Moved from the Longbow to the Man-at-Arms.
          // No longer requires research.
          // Costs 25 wood to deploy.
          // A maximum of 5 Campfires can be deployed at any time.
          // Campfires no longer provide healing, and now provide a +30% sight range increase to units in the area. They also provide some natural sight range if no units are nearby.
          // Developer Note: The campfire ability wasn’t getting much use and we wanted to revitalize the civilization with a new ability that helps the core roster shine. Instead of providing raw power, this ability has multiple interesting scouting potentials such as being put in stealth forests or on tall terrain to enhance a scout even further. Note that these campfires are also attackable by the enemy, and only have one health, so they are best used as strategic times.
          items: ["units/man-at-arms"],
          civs: ["en"],
          diff: [
            ["buff", "Man-at-Arms now has the Set-up Camp ability which was previously on Longbowman and no longer requires research."],
            ["nerf", "Costs 25 wood to deploy."],
            ["fix", "A maximum of 5 Campfires can be deployed at any time."],
            ["nerf", "Campfires no longer provide healing"],
            [
              "buff",
              "Campfires now provide a +30% sight range increase to units in the area. They also provide some natural sight range if no units are nearby.",
            ],
          ],
          note: "The campfire ability wasn’t getting much use and we wanted to revitalize the civilization with a new ability that helps the core roster shine. Instead of providing raw power, this ability has multiple interesting scouting potentials such as being put in stealth forests or on tall terrain to enhance a scout even further. Note that these campfires are also attackable by the enemy, and only have one health, so they are best used as strategic times.",
        },
        {
          // Abbey of Kings Landmark
          // Crown a King cost reduced from 150 food / 150 gold to 100 food / 100 gold.
          // Added an ability button for Kingly Presence on the King which you can hover to see the range of the healing aura.
          // King now heals himself with the aura.
          // Fixed a bug with the Kingly Presence aura radius to match intended size.
          items: ["buildings/abbey-of-kings", "units/king"],
          civs: ["en"],
          diff: [
            ["buff", "Crown a King cost reduced from 150 food / 150 gold to 100 food / 100 gold."],
            ["fix", "Added an ability button for Kingly Presence on the King which you can hover to see the range of the healing aura."],
            ["buff", "King now heals himself with the aura."],
            ["fix", "Fixed a bug with the Kingly Presence aura radius to match intended size."],
          ],
        },
        {
          // Vanguard Man-at-Arms melee armor reduced from 3 to 2.
          items: ["units/man-at-arms"],
          civs: ["en"],
          diff: [["nerf", "Vanguard Man-at-Arms melee armor reduced from 3 to 2."]],
        },
        {
          // Villager hunting bow range increased from 2.875 tiles to 5 tiles.
          items: ["units/villager"],
          civs: ["en"],
          diff: [["buff", "Villager hunting bow range increased from 2.875 tiles to 5 tiles."]],
        },
        {
          // Armor Clad technology cost increased from 100 food / 250 gold to 150 food / 350 gold.
          items: ["technologies/armor-clad"],
          civs: ["en"],
          diff: [["nerf", "Cost increased from 100 food / 250 gold to 150 food / 350 gold."]],
        },
        {
          // Wynguard Footmen now have the proper torch damage for an Imperial Age unit.
          items: ["units/wynguard-footman"],
          civs: ["en"],
          diff: [["fix", "Now has the proper torch damage for an Imperial Age unit."]],
        },
      ],
    },
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          // Hulk renamed to War Cog.
          // Keeps the +1 Pierce Armor (current).
          // Cost reduced from 120 food / 200 wood / 30 gold to 85 food / 200 wood / 30. gold. The total cost is effectively 10% less resources, but realized in food only.
          items: ["units/war-cog"],
          civs: ["fr"],
          diff: [
            ["fix", "Hulk renamed to War Cog."],
            ["buff", "Keeps the +1 Pierce Armor (current)."],
            ["buff", "Cost reduced from 120 food / 200 wood / 30 gold to 85 food / 200 wood / 30. gold."],
          ],
          note: "The total cost is effectively 10% less resources, but realized in food only.",
        },
        {
          // New Merchant Guilds technology:
          // Available in the Imperial Age.
          // Costs 200 food / 500 gold.
          // Active traders generate 1 gold every 6 seconds.
          // Affected by the French economic technologies discount.
          // Available at the Royal Institute.
          items: ["technologies/merchant-guilds"],
          civs: ["fr"],
          diff: [
            ["buff", "New technology: 'Merchant Guilds' available in the Imperial Age."],
            ["buff", "Costs 200 food / 500 gold."],
            ["buff", "Active traders generate 1 gold every 6 seconds."],
            ["buff", "Affected by the French economic technologies discount."],
            ["buff", "Can also be reseearched at the Royal Institute landmark."],
          ],
        },
        {
          // Long Guns technology:
          // Damage bonus increased from +10% to +15% for gunpowder ships.
          // Now also increases bonus damage.
          // Moved to Imperial Age.
          // Cost increased from 150 wood / 350 gold to 200 wood / 500 gold .
          // Added to Royal Institute landmark.
          items: ["technologies/long-guns"],
          civs: ["fr"],
          diff: [
            ["buff", "Damage bonus increased from +10% to +15% for gunpowder ships."],
            ["buff", "Now also increases bonus damage."],
            ["nerf", "Moved to Imperial Age."],
            ["nerf", "Cost increased from 150 wood / 350 gold to 200 wood / 500 gold."],
            ["buff", "Can now also be researched at the Royal Institute landmark."],
          ],
        },
        {
          // Arbalétrier gain +1 range while Pavise is deployed. Fixed a bug where moving after activating ignored ability cooldown. Pavise can now be activated while on stone walls.
          items: ["units/arbaletrier"],
          civs: ["fr"],
          diff: [
            ["buff", "Gain +1 range while Pavise is deployed."],
            ["fix", "Fixed a bug where moving after activating ignored ability cooldown."],
            ["buff", "Pavise can now be activated while on stone walls."],
          ],
        },
        {
          // The Military Academy now increases the production speed of the College of Artillery units.
          items: ["technologies/military-academy"],
          civs: ["fr"],
          diff: [["buff", "Now increases the production speed of the College of Artillery units."]],
        },
        {
          // Corrected the Keep’s help text value of French influence bonus from 25% to 20%.
          items: ["buildings/keep"],
          civs: ["fr"],
          diff: [["fix", "Corrected the Keep’s help text value of French influence bonus from 25% to 20%."]],
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          //           Devoutness and Benediction technologies:
          // Benediction has been removed from the game and merged into Devoutness.
          // Devoutness now provides +10% resource gathering and +25% construction speed, instead of just +15% construction speed.
          items: ["technologies/devoutness"],
          civs: ["hr"],
          diff: [
            ["buff", "Benediction has been removed from the game and merged into Devoutness."],
            ["buff", "Now provides +10% resource gathering and +25% construction speed, instead of just +15% construction speed."],
          ],
        },
        {
          // Corrected issue where The Great Palace of Flensburg Wonder could not use Emergency Repair while under the Palace of Swabia Landmark’s influence.
          items: ["buildings/the-great-palace-of-flensburg"],
          civs: ["hr"],
          diff: [
            [
              "fix",
              "Corrected issue where The Great Palace of Flensburg Wonder could not use Emergency Repair while under the Palace of Swabia Landmark’s influence.",
            ],
          ],
        },
        {
          // Relics are now ejected when docks are destroyed.
          items: ["buildings/dock"],
          civs: ["hr"],
          diff: [["buff", "Relics are now ejected when docks are destroyed."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          //           Fort of the Huntress Landmark:
          // Now properly has 5 fire armor.
          // Lingering stealth aura increased from 10 seconds to 30 seconds.
          items: ["buildings/fort-of-the-huntress"],
          civs: ["ma"],
          diff: [
            ["fix", "Now properly has 5 fire armor."],
            ["buff", "Lingering stealth aura increased from 10 seconds to 30 seconds."],
          ],
        },
        {
          // Farimba Garrison Landmark train speed decreased by 10%:
          // Archer, Donso, and Musofadi Warrior train time increased from 22 seconds to 24 seconds.
          // Javelin Thrower train time increased from 33 seconds to 37 seconds.
          // Musofadi Gunner train time increased from 52 seconds to 57 seconds.
          items: ["buildings/farimba-garrison"],
          civs: ["ma"],
          diff: [
            ["nerf", "Archer, Donso, and Musofadi Warrior train time increased from 22 seconds to 24 seconds."],
            ["nerf", "Javelin Thrower train time increased from 33 seconds to 37 seconds."],
            ["nerf", "Musofadi Gunner train time increased from 52 seconds to 57 seconds."],
          ],
        },
        {
          // Griot Bara Landmark:
          // Festival durations increased from 30 seconds to 60 seconds.
          // Festival cooldown decreased from 60 seconds to 30 seconds.
          items: ["buildings/griot-bara"],
          civs: ["ma"],
          diff: [
            ["buff", "Festival durations increased from 30 seconds to 60 seconds."],
            ["buff", "Festival cooldown decreased from 60 seconds to 30 seconds."],
          ],
        },
        // {
        // Saharan Trade Network Landmark:
        // Cannot be built within 8 tiles of Enemy Landmark Town Centers.
        {
          // Warrior Scout:
          // Warrior Scout regeneration reduced from 2.0 to 1.5 in Feudal Age and Castle Age.
          // Warrior Scout regeneration increased from 2.0 to 2.5 in Imperial Age.
          // Reduced movement speed in Feudal Age from 1.88 to 1.75.
          // Veteran upgrade now grants +100% bonus damage vs ranged units in Castle Age.
          items: ["units/warrior-scout"],
          civs: ["ma"],
          diff: [
            ["nerf", "Health regeneration reduced from 2.0 to 1.5 in Feudal Age and Castle Age."],
            ["buff", "Health regeneration increased from 2.0 to 2.5 in Imperial Age."],
            ["nerf", "Movement speed reduced in Feudal Age from 1.88 to 1.75."],
            ["buff", "Veteran upgrade now grants +100% bonus damage vs ranged units in Castle Age."],
          ],
        },
        {
          // Cattle:
          // Villager cattle gather rate reduced from 0.9 to 0.81 food per second.
          // Food gathering technologies now apply to the passive income of cattle garrisoned in ranches.
          // Fixed a bug to ensure Cattle Population has a display to inform the player there is a limit to how many cattle the user can have.
          // Developer Note: The cattle changes are intended to push players towards garrisoning cattle in ranches in the mid to late game.
          items: ["buildings/mill", "buildings/cattle-ranch"],
          civs: ["ma"],
          diff: [
            ["nerf", "Villager cattle gather rate reduced from 0.9 to 0.81 food per second."],
            ["buff", "Food gathering technologies now apply to the passive income of cattle garrisoned in ranches."],
            ["fix", "Fixed a bug to ensure Cattle Population has a display to inform the player there is a limit to how many cattle the user can have."],
          ],
          note: "The cattle changes are intended to push players towards garrisoning cattle in ranches in the mid to late game.",
        },
        {
          // Canoe Tactics technology:
          // Cost reduced from 100 wood / 250 gold to 50 wood / 125 gold.
          // Research time reduced from 30 seconds to 20 seconds.
          items: ["technologies/canoe-tactics"],
          civs: ["ma"],
          diff: [
            ["buff", "Cost reduced from 100 wood / 250 gold to 50 wood / 125 gold."],
            ["buff", "Research time reduced from 30 seconds to 20 seconds."],
          ],
        },
        {
          // Banco Repairs technology:
          // Effect reduced from +100% to +50% repair speed.
          // Research time reduced from 60 seconds to 30 seconds.
          items: ["technologies/banco-repairs"],
          civs: ["ma"],
          diff: [
            ["nerf", "Effect reduced from +100% to +50% repair speed."],
            ["buff", "Research time reduced from 60 seconds to 30 seconds."],
          ],
        },
        {
          // Imported Armor technology cost increased from 100 food / 250 gold to 150 food / 350 gold.
          items: ["technologies/imported-armor"],
          civs: ["ma"],
          diff: [["nerf", "Cost increased from 100 food / 250 gold to 150 food / 350 gold."]],
        },

        {
          // Corrected an issue where the UI would be hidden after researching Poisoned Arrows.
          items: ["technologies/poisoned-arrows"],
          civs: ["ma"],
          diff: [["fix", "Corrected an issue where the UI would be hidden after researching Poisoned Arrows."]],
        },
        {
          // Updated Civilization Bonuses text to include that research time of veteran unit technologies is reduced by half.
          // Corrected an issue where Age II Town Center, Siege Tower, and Ram were missing from the tech tree.
          items: [],
          civs: ["ma"],
          diff: [
            ["fix", "Updated Civilization Bonuses text to include that research time of veteran unit technologies is reduced by half."],
            ["fix", "Corrected an issue where Age II Town Center, Siege Tower, and Ram were missing from the tech tree."],
          ],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          //           Mongol Lancer renamed to Keshik.
          // Available in Feudal Age.
          // Cost decreased from 140 food/100 gold to 120 food/80 gold.
          // Attack decreased from 19/24/29 to 15/19/23.
          // HP decreased from 190/230/270 to 145/175/205.
          // Attack speed improved from 1.5 to 1.38.
          // Heals 3 health each time it attacks.
          // Train time decreased from 35 seconds to 30 seconds.
          items: ["units/keshik"],
          civs: ["mo"],
          diff: [
            ["buff", "New unit 'Keshik' replaces Mongol Lancer."],
            ["buff", "Cost decreased from 140 food/100 gold to 120 food/80 gold."],
            ["nerf", "Attack decreased from 19/24/29 to 15/19/23."],
            ["nerf", "HP decreased from 190/230/270 to 145/175/205."],
            ["buff", "Attack speed improved from 1.5 to 1.38."],
            ["buff", "Heals 3 health each time it attacks."],
            ["buff", "Train time decreased from 35 seconds to 30 seconds."],
          ],
        },
        {
          // New Steppe Lancers technology:
          // Available in the Imperial Age.
          // Costs 150 food/350 gold.
          // +1 health healed per attack.
          // Increases attack speed by 10%.
          items: ["technologies/steppe-lancers"],
          civs: ["mo"],
          diff: [
            ["buff", "New Steppe Lancers technology available in the Imperial Age."],
            ["buff", "+1 health healed per attack."],
            ["buff", "Increases attack speed by 10%."],
            ["fix", "Costs 150 food/350 gold."],
          ],
        },
        {
          // New Improved Steppe Lancers technology:
          // Available in the Imperial Age.
          // Costs 500 stone.
          // +2 health healed per attack.
          // Increases attack speed by 15%.
          items: ["technologies/steppe-lancers-improved"],
          civs: ["mo"],
          diff: [
            ["buff", "New Improved Steppe Lancers technology available in the Imperial Age."],
            ["buff", "+2 health healed per attack."],
            ["buff", "Increases attack speed by 15%."],
            ["fix", "Costs 500 stone."],
          ],
        },
        {
          // New Improved Yam Network technology:
          // Available in the Imperial Age.
          // Heals traders 1 HP every 2 seconds while within yam aura.
          items: ["technologies/yam-network-improved"],
          civs: ["mo"],
          diff: [
            ["buff", "New Improved Yam Network technology available in the Imperial Age."],
            ["buff", "Heals traders 1 HP every 2 seconds while within yam aura."],
          ],
        },
        {
          // Kurultai Landmark:
          // Corrected issue where Landmark wasn’t healing allied units.
          items: ["buildings/kurultai"],
          civs: ["mo"],
          diff: [["fix", "Corrected issue where Kurultai wasn’t healing allied units."]],
        },
        {
          // Silver Tree Landmark:
          // Discount and production speed bonus reduced from 50% to 40%.
          items: ["buildings/the-silver-tree"],
          civs: ["mo"],
          diff: [["nerf", "Discount and production speed bonus reduced from 50% to 40%."]],
        },
        {
          // Khan
          // Khan’s weapons gain +1 bonus vs deer/wolves/boar.
          // Developer Note: This allows the Khan to two-shot deer which is important when fighting vs RUS players to allow bounty counterplay.
          items: ["units/khan"],
          civs: ["mo"],
          diff: [["buff", "Khan’s weapons gain +1 bonus vs deer/wolves/boar."]],
          note: "This allows the Khan to two-shot deer which is important when fighting vs Rus players to allow bounty counterplay.",
        },
        {
          // Scouting Falcon ability:
          // Can now be summoned from range at player’s cursor location.
          // Cool down reduced from 75 seconds to 60 seconds.
          // Can now see over the tops of trees.
          items: ["units/scout", "units/khan"],
          civs: ["mo"],
          diff: [
            ["buff", "Scouting Falcon ability can now be summoned from range at player’s cursor location."],
            ["buff", "Cool down reduced from 75 seconds to 60 seconds."],
            ["buff", "Can now see over the tops of trees."],
          ],
        },
        {
          // Piracy technology:
          // Cost reduced from 100 food / 250 gold to 50 food / 125 gold.
          // Research time reduced from 30 seconds to 20 seconds.
          items: ["technologies/piracy"],
          civs: ["mo"],
          diff: [
            ["buff", "Cost reduced from 100 food / 250 gold to 50 food / 125 gold."],
            ["buff", "Research time reduced from 30 seconds to 20 seconds."],
          ],
        },
        {
          // Stone Commerce technology:
          // Cost increased from 150 food / 350 gold to 300 food / 700 gold.
          // Research time increased from 60 seconds to 90 seconds.
          items: ["technologies/stone-commerce"],
          civs: ["mo"],
          diff: [
            ["nerf", "Cost increased from 150 food / 350 gold to 300 food / 700 gold."],
            ["nerf", "Research time increased from 60 seconds to 90 seconds."],
          ],
        },
        {
          // Improved Stone Commerce technology cost increased from 500 stone to 1000 stone.
          items: ["technologies/stone-commerce-improved"],
          civs: ["mo"],
          diff: [["nerf", "Cost increased from 500 stone to 1000 stone."]],
        },
        {
          // Added Court Architects technology to Ovoo and The White Stupa Landmark.
          items: ["technologies/court-architects", "buildings/ovoo", "buildings/the-white-stupa"],
          civs: ["mo"],
          diff: [["buff", "Added Court Architects technology to Ovoo and The White Stupa Landmark."]],
        },
        {
          // Packed Buildings:
          // Ger, Steppe Redoubt, and Pasture pack time reduced from 5 seconds to 1 second.
          // Fixed a bug where packed buildings were getting repaired at the same speed as siege weapons. They will now be repaired at the same speed as other buildings.
          // Fixed a bug where packed buildings had large minimap icons.
          items: ["buildings/ger", "buildings/steppe-redoubt", "buildings/pasture"],
          civs: ["mo"],
          diff: [
            ["buff", "Ger, Steppe Redoubt, and Pasture pack time reduced from 5 seconds to 1 second."],
            [
              "fix",
              "Fixed a bug where packed buildings were getting repaired at the same speed as siege weapons. They will now be repaired at the same speed as other buildings.",
            ],
            ["fix", "Fixed a bug where packed buildings had large minimap icons."],
          ],
        },
        {
          // A new Mangudai icon is added to help players differentiate Mangudai Horse Archers from other Horse Archers in the game.
          items: ["units/mangudai"],
          civs: ["mo"],
          diff: [["fix", "A new Mangudai icon is added to help players differentiate Mangudai Horse Archers from other Horse Archers in the game."]],
        },
        {
          // Fixed a bug where the Light Junk wasn’t playing a death animation.
          items: ["units/light-junk"],
          civs: ["mo"],
          diff: [["fix", "Fixed a bug where the Light Junk wasn’t playing a death animation."]],
        },
        {
          // Improved Military Academy by correcting out of date help text and values.
          items: ["technologies/military-academy"],
          civs: ["mo"],
          diff: [["fix", "Fixed Military Academy tooltip by correcting out of date help text and values."]],
        },
        {
          // Fixed an issue where the Mongol AI could gather wood for too long at the start of a match.
          // Fixed issues with the Mongol AI’s packed buildings failed to unpack again when relocating.
          items: [],
          civs: ["mo"],
          diff: [
            ["fix", "Fixed an issue where the Mongol AI could gather wood for too long at the start of a match."],
            ["fix", "Fixed issues with the Mongol AI’s packed buildings failed to unpack again when relocating."],
          ],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          //           Twin Minaret Madrasa Landmark:
          // Adjusted the initial berry spawn time from spawning every 20 seconds to every 35 seconds. Respawn rate remains at 120 seconds.
          // Developer Note: This landmark is intended to sustain a specific number of villagers, with the old placement rate players could put additional villagers on the landmark right after construction to provide an extra burst of food.
          items: ["buildings/twin-minaret-medrese"],
          civs: ["ot"],
          diff: [["nerf", "Adjusted the initial berry spawn time from spawning every 20 seconds to every 35 seconds. Respawn rate remains at 120 seconds."]],
          note: "This landmark is intended to sustain a specific number of villagers, with the old placement rate players could put additional villagers on the landmark right after construction to provide an extra burst of food.",
        },
        {
          // Sipahi:
          // Cost increased from 110 food/20 wood to 120 food/40 wood.
          // Health increased from 135/165/190 to 155/185/220.
          // Damage increased from 9/11/13 to 12/15/18.
          // Speed reduced from 1.88 to 1.75.
          // Attack range increased from 0.29 to 0.75.
          // Developer Note: We wanted to make this unique unit standout further from the standard horseman. The increased range makes it a much more effective raiding unit as it’s able to focus fire.
          items: ["units/sipahi"],
          civs: ["ot"],
          diff: [
            ["nerf", "Cost increased from 110 food/20 wood to 120 food/40 wood."],
            ["buff", "Health increased from 135/165/190 to 155/185/220."],
            ["buff", "Damage increased from 9/11/13 to 12/15/18."],
            ["nerf", "Speed reduced from 1.88 to 1.75."],
            ["buff", "Attack range increased from 0.29 to 0.75."],
          ],
          note: "We wanted to make this unique unit standout further from the standard horseman. The increased range makes it a much more effective raiding unit as it’s able to focus fire.",
        },
        {
          // New Great Bombard Emplacement replaces Cannon Emplacements on Keeps.
          // Cost 250 gold / 500 stone.
          // 60 seconds to research.
          // 100 Ranged Damage with greater Area of Effect.
          // +200 vs. Building.
          // +100 vs. Ship.
          items: ["technologies/great-bombard-emplacement"],
          civs: ["ot"],
          diff: [
            ["buff", "New Great Bombard Emplacement replaces Cannon Emplacements on Keeps."],
            ["nerf", "Cost 250 gold / 500 stone."],
            ["nerf", "60 seconds to research."],
            ["buff", "100 Ranged Damage with greater Area of Effect, +200 bonus vs. Building , +100 bonus vs. Ship."],
          ],
        },
        {
          // Grand Galley:
          // Now has the Gunpowder unit tag to more clearly communicate upgrades that apply to it.
          // Now move towards the player when attempting to garrison units inside it after being upgraded to Military Academy.
          // Fixed a bug where select all military ships wasn’t selecting the Grand Galley.
          items: ["units/grand-galley"],
          civs: ["ot"],
          diff: [
            ["fix", "Now has the Gunpowder unit tag to more clearly communicate upgrades that apply to it."],
            ["fix", "Now move towards the player when attempting to garrison units inside it after being upgraded to Military Academy."],
            ["fix", "Fixed a bug where select all military ships wasn’t selecting the Grand Galley."],
          ],
        },
        {
          // Improved some of the underused Vizier Points:

          // Field Work: Healing aura now scales per Age to 1/1/2 /3 health per second.
          items: ["technologies/field-work"],
          civs: ["ot"],

          diff: [["buff", "Healing aura now scales per Age to 1/1/2 /3 health per second."]],
        },
        {
          // Janissary Company: Now spawns an additional 2 Janissaries from the Capitol Town Center, in addition to the Janissaries at Military Schools.
          items: ["technologies/janissary-company"],
          civs: ["ot"],
          diff: [["buff", "Now spawns an additional 2 Janissaries from the Capitol Town Center, in addition to the Janissaries at Military Schools."]],
        },
        {
          // Trade Bags: Now also applies to the gold generated by the Sultanhani Trade Network.
          // Fixed the requirement text on the Ottoman Trade Bags Imperial Council technology to reference the correct level.
          items: ["technologies/trade-bags"],
          civs: ["ot"],
          diff: [
            ["buff", "Now also applies to the gold generated by the Sultanhani Trade Network."],
            ["fix", "Fixed the requirement text on the Ottoman Trade Bags Imperial Council technology to reference the correct level."],
          ],
        },
        {
          // Mehter:
          // Health now scales per Age instead of a flat 180 it’s now 160/180/200.
          // Changed the toggle text on the Mehter drum abilities to correctly reference the toggle state.
          items: ["units/mehter"],
          civs: ["ot"],
          diff: [
            ["buff", "Health now scales per Age instead of a flat 180 it’s now 160/180/200."],
            ["fix", "Changed the toggle text on the Mehter drum abilities to correctly reference the toggle state."],
          ],
        },
        {
          // Shipping routes (+10% trader and transport ship move speed) now also applies to fishing boats.
          items: ["units/fishing-boat"],
          civs: ["ot"],
          diff: [["buff", "Shipping routes (+10% trader and transport ship move speed civ bonus) now also applies to fishing boats."]],
        },
        {
          // Tech Tree:
          // Corrected an issue where Age II Town Center, Siege Tower, and Ram were missing from the tech tree.
          // Corrected an issue where incorrect cost was displayed on the Siege Workshop.
          items: [],
          civs: ["ot"],
          diff: [
            ["fix", "Corrected an issue where Age II Town Center, Siege Tower, and Ram were missing from the tech tree."],
            ["fix", "Corrected an issue where incorrect cost was displayed on the Siege Workshop."],
          ],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          // Hunting Cabins:
          // Build speed decreased from 40 seconds to 25 seconds.
          // Hunting Cabins with overlapping auras no longer suffer a penalty to gold income. Instead, trees are claimed by Hunting Cabins. This means that a tree in the aura of multiple Hunting Cabins will only generate gold for the first Cabin placed.
          // Gold generation is now fixed to 30 second intervals. Instead of reducing the interval with the Bounty mechanic, tiers now provide a percentage increase to Hunting Cabin gold income at each tier: 10%/25%/65%.
          // Global Income is capped at 300 gold/min cap at tier 0 bounty. With Tier 3 bounty, income caps out at 500 gold/min for all hunting cabins.
          // Hunting Cabins now show a tree counter in their UI when built.
          // Gold kicker text is now visible when cabins generate gold.
          // Adjusted rate of gold generation using a diminishing returns formula to balance the civ on maps with densely packed forests.
          // High Trade House does not contribute to the Hunting Cabin gold generation cap. Also, it doesn’t claim trees or require unclaimed trees to generate gold from nearby trees.
          //           Developer’s Note: We have made a pass on Hunting Cabins to make them less punishing, easier to understand, and better balanced.

          items: ["buildings/hunting-cabin"],
          civs: ["ru"],
          diff: [
            ["buff", "Build speed decreased from 40 seconds to 25 seconds."],
            [
              "buff",
              "Hunting Cabins with overlapping auras no longer suffer a penalty to gold income. Instead, trees are claimed by Hunting Cabins. This means that a tree in the aura of multiple Hunting Cabins will only generate gold for the first Cabin placed.",
            ],
            [
              "buff",
              "Gold generation is now fixed to 30 second intervals. Instead of reducing the interval with the Bounty mechanic, tiers now provide a percentage increase to Hunting Cabin gold income at each tier: 10%/25%/65%.",
            ],
            [
              "nerf",
              "Global Income is capped at 300 gold/min cap at tier 0 bounty. With Tier 3 bounty, income caps out at 500 gold/min for all hunting cabins.",
            ],
            ["fix", "Hunting Cabins now show a tree counter in their UI when built."],
            ["fix", "Gold kicker text is now visible when cabins generate gold."],
            ["nerf", "Adjusted rate of gold generation using a diminishing returns formula to balance the civ on maps with densely packed forests."],
            [
              "buff",
              "High Trade House does not contribute to the Hunting Cabin gold generation cap. Also, it doesn’t claim trees or require unclaimed trees to generate gold from nearby trees.",
            ],
          ],
          note: "We have made a pass on Hunting Cabins to make them less punishing, easier to understand, and better balanced.",
        },
        {
          // Knight Sabers reworked into Knight Poleaxes.
          // Knight’s weapon swaps from a saber into a poleaxe. This is purely a visual change and still adds +4 damage to the melee attacks.
          items: ["technologies/knight-poleaxes"],
          civs: ["ru"],
          diff: [
            [
              "fix",
              "Knight Sabers reworked into Knight Poleaxes. Knight’s weapon swaps from a saber into a poleaxe. This is purely a visual change and still adds +4 damage to the melee attacks.",
            ],
          ],
        },
        {
          // Horse Archer’s Mounted Precision reworked into a new technology called Mounted Training.
          // Unlocks the Gallop ability causing horse archers to move at maximum move speed with +2 weapon range for 8 seconds.
          items: ["technologies/mounted-training"],
          civs: ["ru"],
          diff: [
            [
              "buff",
              "Horse Archer’s Mounted Precision reworked into a new technology called Mounted Training. Unlocks the Gallop ability causing horse archers to move at maximum move speed with +2 weapon range for 8 seconds.",
            ],
          ],
        },
        {
          // Streltsy:
          // Melee damage increased from 50 to 60.
          // This occurs when a unit engages the Streltsy in melee combat.
          // No longer has the Double Time ability.
          // Developer Note: We wanted to further distinguish the roles of Horse Archers and Streltsy. The Horse Archer is weaker and more mobile, the Streltsy is the slow powerhouse.
          items: ["units/streltsy"],
          civs: ["ru"],
          diff: [
            ["buff", "Melee damage increased from 50 to 60."],
            ["fix", "This occurs when a unit engages the Streltsy in melee combat."],
            ["nerf", "No longer has the Double Time ability."],
          ],
          note: "We wanted to further distinguish the roles of Horse Archers and Streltsy. The Horse Archer is weaker and more mobile, the Streltsy is the slow powerhouse.",
        },
        {
          // Kremlin Landmark:
          // No longer gains a ticket upon completion, the first ticket gain occurs after 1 minute.
          // Added a new ability which, when activated, calls ALL available Militia to the Landmark Town Center.
          // Cannot be built within 8 tiles of Enemy Landmark Town Centers.
          items: ["buildings/kremlin"],
          civs: ["ru"],
          diff: [
            ["nerf", "No longer gains a ticket upon completion, the first ticket gain occurs after 1 minute."],
            ["buff", "Added a new ability which, when activated, calls ALL available Militia to the Landmark Town Center."],
            ["fix", "Cannot be built within 8 tiles of Enemy Landmark Town Centers."],
          ],
        },
        {
          // Lodya ships can no longer exceed population cap by converting lower pop cost ships into higher pop ships.
          items: ["units/lodya-attack-ship", "units/lodya-transport-ship", "units/lodya-fishing-boat", "units/lodya-galley"],
          civs: ["ru"],
          diff: [["fix", "Lodya ships can no longer exceed population cap by converting lower pop cost ships into higher pop ships."]],
        },
        {
          // Castle Watch technology:
          // Cost reduced from 100 stone to 50 stone.
          // Time to research reduced from 30 seconds to 15 seconds.
          items: ["technologies/castle-watch"],
          civs: ["ru"],
          diff: [
            ["buff", "Cost reduced from 100 stone to 50 stone."],
            ["buff", "Time to research reduced from 30 seconds to 15 seconds."],
          ],
        },
        {
          // Wooden Fortress health reduced from 2000 to 1750.
          items: ["buildings/wooden-fortress"],
          civs: ["ru"],
          diff: [["nerf", "Wooden Fortress health reduced from 2000 to 1750."]],
        },
      ],
    },
  ],
};
