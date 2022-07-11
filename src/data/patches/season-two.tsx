import { PatchNotes } from "../../types/patches";

export const season2: PatchNotes = {
  id: "season-two",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-update-17718/",
  name: "Season Two Update",
  summary: `Welcome to an exciting Season Two starting tomorrow, July 12th! We’re kicking off with an update full of new key features, quality of life improvements, more customization options, and even more say in how you play – you won’t want to miss out! No matter how you choose to play Age IV, be it single player, campaign, or ranked, we’ve got you covered. Here are a few highlights that you can look forward to in tomorrow’s update!

  * Map Preference System
  * Player Color Picker
  * Remappable Hotkeys
  * Fully Unlocked Campaigns

  ## Age of Discovery Event
  The wait is almost over for Ranked Season Two! You can jump into all the fun on July 14th! More information will be on its way then – so stay tuned! `,
  buildId: 17718,
  date: new Date("2022-07-12 19:00:00 UTC"),
  sections: [
    {
      title: "Overview",
      civs: [],
      changes: [],
      md: `
      Welcome to an exciting Season Two starting tomorrow, July 12th! We’re kicking off with an update full of new key features, quality of life improvements, more customization options, and even more say in how you play – you won’t want to miss out! No matter how you choose to play Age IV, be it single player, campaign, or ranked, we’ve got you covered. Here are a few highlights that you can look forward to in tomorrow’s update!

* Map Preference System
* Player Color Picker
* Remappable Hotkeys
* Fully Unlocked Campaigns

### Age of Discovery Event
The wait is almost over for Ranked Season Two! You can jump into all the fun on July 14th! More information will be on its way then – so stay tuned!`,
    },
    {
      title: "New Features and Highlights",
      civs: [],
      changes: [],
      md: `## Map Preference System
For some time, we have heard community requests for a way to give you a say over the maps they play in Quick Play and Ranked multiplayer matches. With this update, we are adding our first version of a Map Preference system that will give you influence over the maps that you will encounter in ladder play.
Each queue (Quick Play and Ranked) will provide you with a set of Downvotes that they can apply to maps that appear in the respective queues. In Quick Play, you will have up to 5 downvotes you can choose to apply, while in Ranked, you will have up to 3. Your downvote choices can be made in the search preference screen before you start your match search. 
The map that ends up being chosen for the match will be selected from the subset of maps that receives the lowest collective number of downvotes amongst players in the match. Due to how many votes can be present in larger Team Games (up to 40 votes in a 4v4!), you may sometimes still load into a map that you individually downvoted, since that map could be tied for lowest number of overall downvotes in the lobby.
For example, in 1v1 Quickplay, if Player 1 decides they do not want to play any choke point maps during their play session, they can downvote maps like Black Forest, Mountain Pass, Confluence, Mongolian Heights and French Pass to be left with a selection of more open or hybrid maps.
If player 2 decides to downvote only water and hybrid maps, the 2 players will be left with open maps having received no downvotes, and the final map selection will be chosen from those maps only.
In order to help players quickly find maps that fit into various playstyles, we have added filter tabs to the Map Preference UI. These will allow you to quickly see things like all naval maps in your queue. Categories showing a blue dot indicate that a map within that category has been downvoted, for quick at-a-glance reference. 
If playing in a group for Team Games, the Map Preference selections of the group host will be used for the group search.

## Reorganization of Hotkey Menus
We’ve heard your request to play your way: hotkeys are now easier to find and remap to your preference!

## New Fully Remappable Hotkey Layout
When switching into Fully Remappable mode for the first time, the default keys will be set to align with the default Grid Key layout.
Once in the Fully Remappable layout you can now independently reassign any hotkey binding. 

## Changes to how Hotkey Conflicts Work
Previously, when a new hotkey conflict was created, any existing keys with the same binding would be unbound. As of this update, hotkey conflicts are allowed and creating a new conflict will provide you with an alert that lists all of the currently conflicting keys. 
Pressing “Continue” on this alert will assign the conflicting keys, while “Cancel” will revert the newly assigned key to its previous state. 

## “Warn Conflicts” Toggle
Should you wish to disable the conflict alerts, a new toggle has been added called “Warn conflicts”, which will prevent any new alerts from appearing when disabled.

## New Camera Zoom Options
While playing Age IV, we want you to feel like a battlefield general and city architect. The classic camera provides a closer more intimate feel that doesn’t get across this feeling. We’ve added a new camera zoom level and rotation to provide a grander vantage point on the battlefield and more holistic view of the base. When making these changes we experimented with many different settings to determine the optional position. Zooming out further caused issues with unit selection and readability, while not offering much benefit. We have found these new values enhance gameplay feel, battlefield clarity, and base management. This new camera mode, dubbed “Panoramic” is now a UI option you’ll have access to. If selected while in a match, you’ll need to exit back to the main menu for the setting to take effect.

## New Map
A new map, called The Pit, has been added to the game. This is an open map that features a stealth forest-filled valley housing one of the map’s 3 Sacred Sites right in the center, with small hills in each of the 4 corners that are home to the neutral markets and some of the few large resource deposits. You will spawn close to the opening of the central pit, so use the terrain to either an offensive or defensive advantage!

## Player Color Picker
We know you’ve been requesting this one for a while now… and it’s here! You will now be able to choose a color for your civ in the following game modes: 
    * Single Player Skirmish
    * Multiplayer Custom Match
    * Unranked Automatch 
    * Ranked Automatch

You can either choose a color or have a color randomly assigned at the start of the match. In order to see the chosen color in-game, it will require you to set the Player Colors option to Unique. You can find this in Settings > Game > Player Colors
      `,
    },
    {
      title: "Balance Changes",
      civs: [],
      changes: [],
    },
    {
      subtitle: "Melee vs Siege Rework",
      description: `"We wanted to add more strategic considerations to army positioning around siege weapons while increasing realism in the interaction between siege and non-siege units. To accomplish this, we’ve made all units (except villagers) use their normal weapons vs siege units. This means the knight charge will be a powerful option vs siege if there aren’t any nearby spearman to brace. Units not using torches means they will have to get closer to their targets so it’s easier to block them and protect the siege. 

Of course, we still want there to be multiple counter play options to siege weapons. To get the balance correct with this feature we’ve done a large readjustment. With torches, melee units were able to stack and push each other, allowing many units to all hit the same siege target. Now melee units obey normal pathing rules so there are only a few that can hit siege weapons at a time. To account for this, we reduced the health of siege weapons. Units like horsemen remain strong counters as we have   given their melee attacks bonus damage vs siege weapons."`,
      civs: [],
      changes: [
        // * Units that attack with melee weapons no longer switch to torches when targeting siege units
        // * Other torches no longer deal bonus damage vs siege

        {
          items: [],
          civs: [],
          diff: [
            ["buff", "Units that attack with melee weapons no longer switch to torches when targeting siege units"],
            ["nerf", "Torches no longer deal bonus damage vs Siege"],
          ],
        },
        // * Villagers continue to use torches against siege units. Bonus damage reduced from +10 to +2
        // > Damage was reduced inline with reduction to siege health so villagers should be killing siege weapons in about the same amount of time.
        {
          items: ["units/villager"],
          civs: [],
          diff: [["nerf", "Villagers Torch Bonus damage vs Siege reduced from +10 to +2"]],
          note: "Damage was reduced inline with reduction to siege health so villagers should be killing siege weapons in about the same amount of time.",
        },
        // * Horseman melee weapons gain +10 bonus damage to siege
        {
          items: ["units/horseman"],
          civs: [],
          diff: [["buff", "Horseman melee weapons gain +10 bonus damage vs Siege"]],
        },

        // * Villager repair rate of Siege units reduced from 20 health/s to 5 health/s
        // > Part of the reason this was such a dramatic change is that siege weapons now have less health and will take damage slower from infantry armies… and also it was really good before.
        {
          items: ["units/villager"],
          civs: [],
          diff: [["nerf", "Villager repair rate of Siege units reduced from 20 health/s to 5 health/s"]],
          note: "Part of the reason this was such a dramatic change is that siege weapons now have less health and will take damage slower from infantry armies… and also it was really good before.",
        },

        // * Ranged armor increased to 20 for all siege weapons
        // * Bombards and Cannons have 30 ranged armor

        // * Siege Works armor bonus increased from 3 to 10. Mongols’ improved version increased from 4 to 15
        // > Increasing the armor scaling on Siege Works helps reinforce the resilience of siege to late game ranged attacks such as the Handcannon.
        {
          items: ["technologies/siege-works"],
          civs: [],
          diff: [
            ["buff", "Siege Works armor bonus increased from 3 to 10"],
            ["buff", "Mongols' Improved Siege Works armor bonus increased from 4 to 15", ["mo"]],
          ],
        },
        // * Reduced the height of Trebuchet and defensive cannon projectile trajectories to make them easier to read.
        {
          items: ["units/trebuchet", "technologies/cannon-emplacement"],
          civs: [],
          diff: [["fix", "Reduced the height of projectile trajectories to make them easier to read"]],
        },

        //  * Rams
        //     *    Ram health reduced from 700 to 420
        {
          items: ["units/battering-ram"],
          civs: [],
          diff: [["nerf", "Health reduced from 700 to 420 HP"]],
        },
        // * Mangonel
        //     *    Mangonel health reduced from 240 to 140
        //     *    Mangonel ranged armor increased from 8 to 20
        {
          items: ["units/mangonel"],
          civs: [],
          diff: [
            ["nerf", "Health reduced from 240 to 140 HP"],
            ["buff", "Ranged armor increased from 8 to 20"],
          ],
        },
        // * Springalds
        //     *    Springald health reduced from 200 to 125
        //     *    Springald ranged armor increased from 8 to 20
        //     *    Springald bonus damage reduced from 90 to 70
        //     *    Clocktower Springald health reduced from 300 to 190
        //     *    Clocktower Springald ranged armor increased from 8 to 20
        {
          items: ["units/springald"],
          civs: [],
          diff: [
            ["nerf", "Health reduced from 200 to 125 HP"],
            ["buff", "Ranged armor increased from 8 to 20"],
            ["nerf", "Bonus damage vs Siege reduced from 90 to 70"],
            ["nerf", "Clocktower Health reduced from 300 to 190 HP", ["ch"]],
            ["buff", "Clocktower Ranged armor increased from 8 to 20", ["ch"]],
          ],
        },
        // * Ribauldequins
        //     *    Ribauldequin health reduced from 480 to 350
        //     *    Ribauldequin fire armor reduced from 10 to 0
        //     *    Ribauldequin melee armor increased from 0 to 10

        {
          items: ["units/ribauldequin"],
          civs: ["en", "fr"],
          diff: [
            ["nerf", "Health reduced from 480 to 350 HP"],
            ["nerf", "Fire armor reduced from 10 to 0"],
            ["buff", "Melee armor increased from 0 to 10"],
          ],
        },
        // * Royal Ribauldequins
        //     *    Royal Ribauldequin health reduced from 480 to 350
        //     *    Royal Ribauldequin fire armor reduced from 10 to 0
        //     *    Royal Ribauldequin melee armor increased from 0 to 10
        {
          items: ["units/royal-ribauldequin"],
          civs: ["fr"],
          diff: [
            ["nerf", "Health reduced from 480 to 350 HP"],
            ["nerf", "Fire armor reduced from 10 to 0"],
            ["buff", "Melee armor increased from 0 to 10"],
          ],
        },

        // * Culverins
        //     *    Culverin health reduced from 400 to 220
        //     *    Culverin ranged armor increased from 12 to 20
        //     *    Culverin damage increased from 75 to 85
        //     *    Culverin bonus damage reduced from 200 to 100
        {
          items: ["units/culverin"],
          civs: ["hr", "ab"],
          diff: [
            ["nerf", "Health reduced from 400 to 220 HP"],
            ["buff", "Ranged armor increased from 12 to 20"],
            ["buff", "Damage increased from 75 to 85"],
            ["nerf", "Bonus damage vs Siege reduced from 200 to 100"],
          ],
        },
        // * Royal Culverins
        //     *    Royal Culverin bonus damage vs. siege reduced from 204 to 120
        //     *    Royal Culverin bonus damage vs. naval increased from 204 to 240
        //     *    Royal Culverin health reduced from 400 to 220
        //     *    Royal Culverin ranged armor increased from 12 to 20
        {
          items: ["units/royal-culverin"],
          civs: ["fr"],
          diff: [
            ["nerf", "Bonus damage vs Siege reduced from 204 to 120"],
            ["buff", "Bonus damage vs Naval increased from 204 to 240"],
            ["nerf", "Health reduced from 400 to 220 HP"],
            ["buff", "Ranged armor increased from 12 to 20"],
          ],
        },
        // * Bombards
        //     *    Bombard health reduced from 400 to 240
        //     *    Bombard ranged armored increased from 12 to 30
        //     *    Bombard damage reduced from 170 to 100
        //     *    Bombard bonus damage vs. naval & buildings increased from 340 to 410
        {
          items: ["units/bombard"],
          civs: ["ab", "ch", "de", "en", "hr", "mo", "ru"],
          diff: [
            ["nerf", "Health reduced from 400 to 240 HP"],
            ["buff", "Ranged armor increased from 12 to 30"],
            ["nerf", "Damage reduced from 170 to 100"],
            ["buff", "Bonus damage vs Naval & Buildings increased from 340 to 410"],
          ],
        },
        // * Cannon
        //     *    Cannon health reduced from 320 to 190
        //     *    Cannon ranged armor increased from 12 to 30
        //     *    Cannon damage reduced from 200 to 100
        //     *    Cannon bonus damage vs. naval & buildings increased from 400 to 500
        {
          items: ["units/cannon"],
          civs: ["fr"],
          diff: [
            ["nerf", "Health reduced from 320 to 190 HP"],
            ["buff", "Ranged armor increased from 12 to 30"],
            ["nerf", "Damage reduced from 200 to 100"],
            ["buff", "Bonus damage vs Naval & Buildings increased from 400 to 500"],
          ],
        },
        // * Royal Cannon
        //     *    Royal Cannon health reduced from 320 to 190
        //     *    Royal Cannon ranged armor increased from 12 to 30
        //     *    Royal Cannon damage reduced from 240 to 120
        //     *    Royal Cannon bonus damage vs. naval & buildings increased from 480 to 600
        {
          items: ["units/royal-cannon"],
          civs: ["fr"],
          diff: [
            ["nerf", "Health reduced from 320 to 190 HP"],
            ["buff", "Ranged armor increased from 12 to 30"],
            ["nerf", "Damage reduced from 240 to 120"],
            ["buff", "Bonus damage vs Naval & Buildings increased from 480 to 600"],
          ],
        },
        // * Trebuchets
        //     *    Traction Trebuchet health reduced from 320 to 190
        //     *    Traction Trebuchet ranged armor increased from 8 to 20
        //     *    Traction Trebuchet damage reduced from 100 to 50
        //     *    Traction Trebuchet bonus damage increased from 200 to 250
        {
          items: ["units/traction-trebuchet"],
          civs: ["mo"],
          diff: [
            ["nerf", "Health reduced from 320 to 190 HP"],
            ["buff", "Ranged armor increased from 8 to 20"],
            ["nerf", "Damage reduced from 100 to 50"],
            ["buff", "Bonus damage vs Building increased from 200 to 250"],
          ],
        },
        //     *    Counterweight Trebuchet health reduced from 400 to 210
        //     *    Counterweight Trebuchet ranged armor increased from 8 to 20
        //     *    Counterweight Trebuchet damage reduced from 100 to 50
        //     *    Counterweight Trebuchet bonus damage increased from 450 to 500
        //     *    Clocktower Counterweight Trebuchet health reduced from 600 to 300
        //     *    Clocktower Counterweight Trebuchet ranged armor increase from 8 to 20
        {
          items: ["units/trebuchet"],
          civs: [],
          diff: [
            ["nerf", "Health reduced from 400 to 210 HP"],
            ["buff", "Ranged armor increased from 8 to 20"],
            ["nerf", "Damage reduced from 100 to 50"],
            ["buff", "Bonus damage vs Building increased from 450 to 500"],
            ["nerf", "Clocktower Health reduced from 600 to 300 HP", ["ch"]],
            // ["buff", "Clocktower Ranged armor increased from 8 to 20", ["ch"]],
          ],
        },
        // * Nest of Bees
        //     *    Nest of Bees health reduced from 200 to 140
        //     *    Nest of Bees ranged armor increased from 8 to 20
        //     *    Clocktower Nest of Bees health reduced from 300 to 210
        //     *    Clocktower Nest of Bees ranged armor increased from 8 to 20
        {
          items: ["units/nest-of-bees"],
          civs: ["ch"],
          diff: [
            ["nerf", "Health reduced from 200 to 140 HP"],
            ["buff", "Ranged armor increased from 8 to 20"],
            ["nerf", "Clocktower Health reduced from 300 to 210 HP", ["ch"]],
            // ["buff", "Clocktower Ranged armor increased from 8 to 20", ["ch"]],
          ],
        },
      ],
    },
    {
      subtitle: "Buildings",
      civs: [],
      changes: [
        // Units will be able to attack Stone Wall Gates which are under construction. Once construction is completed, they will no longer be able to.
        // > This is already the case for Stone Walls, we are just standardizing the behavior
        {
          items: ["buildings/stone-wall-gate"],
          civs: [],
          diff: [["nerf", "Stone Wall Gates under construction can be attacked by any unit"]],
          note: "This is already the case for Stone Walls, we are just standardizing the behavior",
        },
        // * Building emplacement bonus damage vs boats now applies to demolition ships and non-combat ships.
        {
          items: ["technologies/springald-emplacement", "technologies/arrow-slits", "technologies/handcannon-slits", "technologies/cannon-emplacement"],
          civs: [],
          diff: [["buff", "Bonus damage vs Naval now also applies to demolition ships and non-combat ships"]],
        },
        // * Arrow slit emplacements bonus range decreased from +2 to +1
        // > All emplacements are overperforming. We’re seeing players build towers near the enemy base just to get emplacements for extra fire power. The biggest beneficiary of the arrow slit emplacements has been offensive towers, so we’re reducing the range bonus to give players extra breathing room.
        {
          items: ["technologies/arrow-slits"],
          civs: [],
          diff: [["nerf", "Bonus range decreased from +2 to +1"]],
          note: "All emplacements are overperforming. We’re seeing players build towers near the enemy base just to get emplacements for extra fire power. The biggest beneficiary of the arrow slit emplacements has been offensive towers, so we’re reducing the range bonus to give players extra breathing room.",
        },
        // * Springald emplacement damage decreased from 60 to 40. Attack speed decreased from 6.25 to 4.5
        // > The high range and burst damage on Springald towers makes them extremely powerful. Their low cost makes them spammable. Note that these changes in combination with the increased armor on siege weapons means Springald Emplacements are now less cost effective.
        {
          items: ["technologies/springald-emplacement"],
          civs: [],
          diff: [
            ["nerf", "Damage decreased from 60 to 40"],
            ["nerf", "Attack speed decreased from 6.25 to 4.5"],
          ],
          note: "The high range and burst damage on Springald towers makes them extremely powerful. Their low cost makes them spammable. Note that these changes in combination with the increased armor on siege weapons means Springald Emplacements are now less cost effective.",
        },
        // * Cannon emplacement damage decreased from 85 to 70. Damage type changes from siege to ranged.
        // > Cannon emplacements deal 100% of their damage in AoE around the initial target. We wanted to retain this cool feature while making them less effective vs single targets like Bombards.
        {
          items: ["technologies/cannon-emplacement"],
          civs: [],
          diff: [
            ["nerf", "Damage decreased from 85 to 70"],
            ["nerf", "Damage type changes from Siege to Ranged"],
          ],
          note: "Cannon emplacements deal 100% of their damage in AoE around the initial target. We wanted to retain this cool feature while making them less effective vs single targets like Bombards.",
        },
        // * Buildings that cost exclusively Stone (Keeps, Stone Wall Towers, Stone Walls, and Stone Wall Gates) now cost Stone to repair instead of Wood.
        // > We’re looking to help resolve stalemate games and give a more realistic feel to the repair mechanic. Repair rate is still 1 resource per second. All other buildings cost Wood to repair. Keep style Landmarks continue to cost Wood to repair. We wanted a clean and easy-to-understand rule that didn’t restrict repairing a victory condition to the rare stone resource.
        {
          items: ["buildings/keep", "buildings/stone-wall-tower", "buildings/stone-wall", "buildings/stone-wall-gate"],
          civs: [],
          diff: [["nerf", "Stone buildings now cost Stone to repair instead of Wood"]],
          note: "We’re looking to help resolve stalemate games and give a more realistic feel to the repair mechanic. Repair rate is still 1 resource per second. All other buildings cost Wood to repair. Keep style Landmarks continue to cost Wood to repair. We wanted a clean and easy-to-understand rule that didn’t restrict repairing a victory condition to the rare stone resource.",
        },
        // * Relic limit on all Monasteries and Landmarks that act as Monasteries set to 3
        // > This adds an additional cost to players who get more than 3 Relics and helps streamline the system between buildings. It also makes the HRE power of garrisoning into keeps/towers more valuable.
        {
          items: ["buildings/monastery", "buildings/mosque", "buildings/prayer-tent", "buildings/regnitz-cathedral", "buildings/abbey-of-the-trinity"],
          civs: [],
          diff: [["nerf", "Relic limit on all Monasteries and Landmarks that act as Monasteries set to 3"]],
          note: "This adds an additional cost to players who get more than 3 Relics and helps streamline the system between buildings. It also makes the HRE power of garrisoning into keeps/towers more valuable.",
        },
        // * Keep Landmarks now correctly activate a new weapon for each of their garrison slots.
        {
          items: [
            "buildings/kremlin",
            "buildings/the-white-tower",
            "buildings/berkshire-palace",
            "buildings/red-palace",
            "buildings/spasskaya-tower",
            "buildings/elzbach-palace",
          ],
          civs: [],
          diff: [["fix", "Keep Landmarks now correctly activate a new weapon for each of their garrison slots"]],
        },
        // * Fixed a bug where Capital Town Centers didn’t fire an additional weapon for each of their garrison slots after 13. Note that English were always working correctly.
        {
          items: ["buildings/town-center"],
          civs: [],
          diff: [["fix", "Fixed a bug where Capital Town Centers didn’t fire an additional weapon for each of their garrison slots after 13."]],
          note: "Note that English were always working correctly.",
        },
        // * Food deposit buildings can now be placed closer to Fish resources in shallow water.
        {
          items: ["buildings/mill", "buildings/ger", "buildings/hunting-cabin", "buildings/dock", "buildings/aachen-chapel"],
          civs: [],
          diff: [["fix", "Food deposit buildings can now be placed closer to Fish resources in shallow water."]],
        },
        // * Stone Wall health when construction begins reduced from 10% to 1%
        // > Our intention is that an enemy army would be able to tear down a stone wall that is constructed right under its nose.
        {
          items: ["buildings/stone-wall"],
          civs: [],
          diff: [["nerf", "Construction begins at 1% health, reduced from 10%"]],
          note: "Our intention is that an enemy army would be able to tear down a stone wall that is constructed right under its nose.",
        },
        // * Fixed a bug that would sometimes result in Scholars getting stuck garrisoning or ungarrisoning from structures.
        {
          items: ["units/scholar"],
          civs: [],
          diff: [["fix", "Fixed a bug that would sometimes result in Scholars getting stuck garrisoning or ungarrisoning from structures."]],
        },
        // * Fixed a bug when multiple buildings are selected, units could not be queued for production if one of the buildings already had a full queue. Units can be queued as long as at least one of the selected buildings has room in its queue.
        {
          items: [],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed a bug when multiple buildings are selected, units could not be queued for production if one of the buildings already had a full queue. Units can be queued as long as at least one of the selected buildings has room in its queue.",
            ],
          ],
        },
        // * Fixed a bug where Cavalry units would sometimes be unresponsive to acquiring buildings as idle aggro targets.
        {
          items: ["units/horseman", "units/lancer", "units/knight", "units/royal-knight", "units/fire-lancer", "units/camel-rider", "units/war-elephant"],
          civs: [],
          diff: [["fix", "Fixed a bug where Cavalry units would sometimes be unresponsive to acquiring buildings as idle aggro targets."]],
        },
        // * Added new visual effect to Keeps and Stone Wall Towers when burning oil is triggered.
        {
          items: ["technologies/boiling-oil", "buildings/keep", "buildings/stone-wall-tower"],
          civs: [],
          diff: [["fix", "Added new visual effect to Keeps and Stone Wall Towers when burning oil is triggered."]],
        },
      ],
    },
    {
      subtitle: "Units",
      civs: [],
      changes: [
        // * Units with activated abilities will now be able to activate their ability from within a mixed multi-selection
        // > For example if you have an army of Knights and Arbaletrier, the Pavis ability can now be activated.
        {
          items: [],
          civs: [],
          diff: [["fix", "You can now activate units' unique abilities from within a selection of mixed units."]],
          note: "For example if you have an army of Knights and Arbaletrier, the Pavis ability can now be activated.",
        },
        // * Trade Ships no longer return additional Gold, instead they return +100% of the trade value as Wood. Effectively meaning they get the same amount of Gold and Wood.
        {
          items: ["units/trade-ship"],
          civs: [],
          diff: [["nerf", "Trade Ships no longer return additional Gold, instead they return +100% of the trade value as Wood."]],
        },
        // * Normalized all Naval units to have the same target priority
        // > Naval units will no longer prefer buildings like docks when there are still enemy boats in their range.
        {
          items: [
            "units/light-junk",
            "units/lodya-attack-ship",
            "units/dhow",
            "units/galley",
            "units/junk",
            "units/hulk",
            "units/war-junk",
            "units/baghlah",
            "units/galleass",
            "units/carrack",
            "units/xebec",
            "units/baochuan",
          ],
          civs: [],
          diff: [["fix", "Naval target priority normalized to prefer enemey boats"]],
          note: "Naval units will no longer prefer buildings like docks when there are still enemy boats in their range.",
        },
        // * Spearmen perform the Spearwall animation faster and do not trigger their Spearwall until charging cavalry is closer
        // > This reduces the instances where spearmen would Spearwall behind friendly troops, makes Spearwall feel more responsive, and gives you more time to control your troops as they spend less time in the Spearwall animation.
        {
          items: ["units/spearman"],
          civs: [],
          diff: [["buff", "Spearmen perform the Spearwall animation faster and do not trigger their Spearwall until charging cavalry is closer"]],
          note: "This reduces the instances where spearmen would Spearwall behind friendly troops, makes Spearwall feel more responsive, and gives you more time to control your troops as they spend less time in the Spearwall animation.",
        },
        // * Horseman armor scaling increased from 1/2/2/2 to 1/2/3/4
        // > This increases the late game scaling of the unit when there are more buildings blocking pathing and less surface area to fight vs large masses of ranged units.
        {
          items: ["units/horseman"],
          civs: [],
          diff: [
            ["buff", "Veteran Horseman (III) ranged armor increased from 2 to 3 "],
            ["buff", "Elite Horseman (IV) ranged armor increased from 2 to 4"],
          ],
          note: "This increases the late game scaling of the unit when there are more buildings blocking pathing and less surface area to fight vs large masses of ranged units.",
        },
        // * Handcannon hitpoints decreased from 150 > 130
        // > Our vision for handcannons is that they are a frail high damage output unit. With the previous stats it felt like they were too cost effective vs most units, even intended counters like cavalry with good positioning. This change is aimed at making more diverse lategame armies that focus more attention on battlefield positioning.
        {
          items: ["units/handcannoneer"],
          civs: [],
          diff: [["nerf", "Hit points decreased from 150 to 130"]],
          note: "Our vision for handcannons is that they are a frail high damage output unit. With the previous stats it felt like they were too cost effective vs most units, even intended counters like cavalry with good positioning. This change is aimed at making more diverse lategame armies that focus more attention on battlefield positioning.",
        },
        // * Monk train time reduced from 45 to 30 seconds.
        // > These changes are aimed at getting more religious units out on the battlefield and involved in combat.
        {
          items: ["units/monk", "units/shaman", "units/imam"],
          civs: [],
          diff: [["buff", "Train time reduced from 45 to 30 seconds"]],
          note: "These changes are aimed at getting more religious units out on the battlefield and involved in combat.",
        },
        // * Fixed an issue where units using attack move wouldn’t prioritize attacking defensive landmarks.
        {
          items: [],
          civs: [],
          diff: [["fix", "Fixed an issue where units using attack move wouldn’t prioritize attacking defensive landmarks."]],
        },
        // * Reduced the travel distance Villagers will scan for new resources after exhausting a Stone Outcropping, Gold Vein, or forest.
        // > This reduces the instances of villagers traveling very long distances to gather resources when it’s much better to go idle and alert the player that they need to build a new resource drop-off building.
        {
          items: ["units/villager"],
          civs: [],
          diff: [["fix", "Reduced the travel distance Villagers will scan for new resources after exhausting a Stone Outcropping, Gold Vein, or forest."]],
          note: "This reduces the instances of villagers traveling very long distances to gather resources when it’s much better to go idle and alert the player that they need to build a new resource drop-off building.",
        },
      ],
    },
    {
      subtitle: "General Balance Changes",
      civs: [],
      changes: [
        // * Herbal Medicine technology cost reduced from 350 Gold to 275 Gold and research time from 60 to 45 seconds
        // * Delhi Sultanate version research time increased from 180 to 225
        {
          items: ["technologies/herbal-medicine"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 350 Gold to 275 Gold"],
            ["buff", "Research time reduced from 60 to 45 seconds"],
            ["buff", "Delhi Sultanate research time increased from 180 to 225", ["de"]],
          ],
        },
        // * Siege Engineering technology research time reduced from 60 to 45 seconds
        // > As the path to utilize this technology is long in the early game (Blacksmith, technology research, create infantry to make Ram) in some cases the window of opportunity was closed before Rams could be utilized. We’ve sped this up a touch to give more aggressive options early on.
        {
          items: ["technologies/siege-engineering"],
          civs: [],
          diff: [["buff", "Research time reduced from 60 to 45 seconds"]],
          note: "As the path to utilize this technology is long in the early game (Blacksmith, technology research, create infantry to make Ram) in some cases the window of opportunity was closed before Rams could be utilized. We’ve sped this up a touch to give more aggressive options early on.",
        },
        // * Professional Scouts Drop Carcass command can now be queued before holding a carcass.
        {
          items: ["units/scout", "technologies/professional-scouts"],
          civs: [],
          diff: [["buff", "Drop Carcass command can now be queued before holding a carcass"]],
        },
        // * Fixed an issue where units using attack move wouldn’t prioritize defensive Landmarks.
        // * Fixed a bug where under some conditions units could attack faster than intended by issuing a move command after attacking to cancel the cooldown between hits.
        // * Certain units were being stubborn about responding to attack commands in specific situations. These units have been disciplined and will to do better next time. (Sorry Beasty!)
        {
          items: [],
          civs: [],
          diff: [
            ["fix", "Fixed an issue where units using attack move wouldn’t prioritize defensive Landmarks."],
            [
              "fix",
              "Fixed a bug where under some conditions units could attack faster than intended by issuing a move command after attacking to cancel the cooldown between hits.",
            ],
            [
              "fix",
              "Certain units were being stubborn about responding to attack commands in specific situations. These units have been disciplined and will to do better next time. (Sorry Beasty!)",
            ],
          ],
        },
        // * Fixed a villager t-pose issue while attacking boar or wolves.
        // * Fixes issue where villagers would occasionally get stuck within Stone Walls while building them.
        {
          items: ["units/villager"],
          civs: [],
          diff: [
            ["fix", "Fixed a villager t-pose issue while attacking boar or wolves."],
            ["fix", "Fixes issue where villagers would occasionally get stuck within Stone Walls while building them."],
          ],
        },
        // * Small stone deposit decreased from 1500 to 1200. Large stone deposit decreased from 3000 to 2400
        // > Late game was leading to a lot of stalemates when there was such a large number of keeps that both players could create. We’ve pulled back the stone on the map so that there are less defenses and thus each is a key strategic point that is important to battle over.
        {
          items: ["buildings/mining-camp"],
          civs: [],
          diff: [
            ["nerf", "Small stone deposit decreased from 1500 to 1200"],
            ["nerf", "Large stone deposit decreased from 3000 to 2400"],
          ],
          note: "Late game was leading to a lot of stalemates when there was such a large number of keeps that both players could create. We’ve pulled back the stone on the map so that there are less defenses and thus each is a key strategic point that is important to battle over.",
        },
        // * Scouts given an attack command will now properly target villagers  instead of a nearby carcass they are gathering.
        {
          items: ["units/scout"],
          civs: [],
          diff: [["fix", "Scouts given an attack command will now properly target villagers  instead of a nearby carcass they are gathering."]],
        },
        // * There was a mismatch between the UI displayed value for the attack speed of some units and its output. Rus Horse Archers were a prominent example and now match the intended value.
        // * Units given queued commands no longer lose those commands when receiving a tier upgrade (IE becoming Veteran or Elite).
        // * Fixed an issue where units would target the backside of a wall tower instead of the front.
        // * Fixed crash that could occur when using rallying Villagers to a resource drop off.
        {
          items: [],
          civs: [],
          diff: [
            ["fix", "There was a mismatch between the UI displayed value for the attack speed of some units and its output."],
            ["fix", "Units given queued commands no longer lose those commands when receiving a tier upgrade (IE becoming Veteran or Elite)."],
            ["fix", "Fixed an issue where units would target the backside of a wall tower instead of the front."],
            ["fix", "Fixed crash that could occur when using rallying Villagers to a resource drop off."],
          ],
        },
        // * Transport Ship help text updated to highlight that the ship will use the line of sight of units inside its garrison.
        {
          items: ["units/transport-ship"],
          civs: [],
          diff: [["fix", "Transport Ship help text updated to highlight that the ship will use the line of sight of units inside its garrison."]],
        },
        // * Fixed an issue where construction of rams, walls, and some other items could remove nearby berry bushes.
        {
          items: [],
          civs: [],
          diff: [["fix", "Fixed an issue where construction of rams, walls, and some other items could remove nearby berry bushes."]],
        },
      ],
    },
    //   ## Abbasid (ABB)
    {
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        // * Golden Age Tier 1 bonus changed from +10% gather rate to +15% gather rate.
        // > Abbasid is a successful civilization late game, but we’ve been noticing they still struggle early. This boost should help them be more competitive in the early states and makes hitting the first golden age tier more rewarding.
        {
          items: ["buildings/house-of-wisdom"],
          civs: [],
          diff: [["buff", "Golden Age Tier 1 bonus changed from +10% gather rate to +15% gather rate."]],
          note: "Abbasid is a successful civilization late game, but we’ve been noticing they still struggle early. This boost should help them be more competitive in the early states and makes hitting the first golden age tier more rewarding.",
        },
        // * Mill influence range increased +1 tile to allow for easy connections to the House of Wisdom’s influence.
        {
          items: ["buildings/mill"],
          civs: [],
          diff: [["buff", "Influence range increased +1 tile to allow for easy connections to the House of Wisdom’s influence."]],
        },
        // * Camel Barding has been renamed to Camel Rider Barding so it’s more clear which unit is affected
        {
          items: ["technologies/camel-barding"],
          civs: [],
          diff: [["fix", "Camel Barding has been renamed to Camel Rider Barding so it’s more clear which unit is affected"]],
        },
        // * Spice Roads technology now correctly increases Trade Ship gold income by 30%.
        {
          items: ["technologies/spice-roads"],
          civs: [],
          diff: [["fix", "Spice Roads technology now correctly increases Trade Ship gold income by 30%"]],
        },
        // * Traders and Trade Ships will now correctly return 25% secondary resources after researching Grand Bazaar.
        {
          items: ["technologies/grand-bazaar", "units/trader", "units/trade-ship"],
          civs: [],
          diff: [["fix", "Traders and Trade Ships will now correctly return 25% secondary resources after researching Grand Bazaar."]],
        },
        // * Preservation of Knowledge technology no longer applies twice to techs researched in the House of Wisdom.
        {
          items: ["technologies/preservation-of-knowledge"],
          civs: [],
          diff: [["fix", "Preservation of Knowledge technology no longer applies twice to techs researched in the House of Wisdom."]],
        },
        // * Field constructed Mangonels and Springalds now have the correct hotkeys in the construction menu.
        {
          items: ["units/mangonel", "units/springald"],
          civs: [],
          diff: [["fix", "Field constructed Mangonels and Springalds now have the correct hotkeys in the construction menu."]],
        },
        // * Camel Archers can now be selected with select military hotkeys.
        {
          items: ["units/camel-archer"],
          civs: [],
          diff: [["fix", "Camel Archers can now be selected with select military hotkeys."]],
        },
        // * Incendiary Arrow visual is no longer lost when Composite Bows is upgraded.
        {
          items: ["technologies/composite-bows", "technologies/incendiary-arrows"],
          civs: [],
          diff: [["fix", "Incendiary Arrow visual is no longer lost when Composite Bows is upgraded."]],
        },
      ],
    },

    // ## Chinese (CHI)
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        // * Fire Lancer move speed increased from 6 to 6.5
        // > We’ve got more plans for the Fire Lancer in the future. This was an easy win to help fit it into its intended raiding role.
        // * Fire Lancer time between attacks reduced from 1.75 to 1.62
        // > We made some backend changes to attack speeds which resulted in some units attacking slightly slower. This change helps set the unit back to its original strength.
        {
          items: ["units/fire-lancer"],
          civs: [],
          diff: [
            ["buff", "Fire Lancer move speed increased from 6 to 6.5"],
            ["buff", "Fire Lancer time between attacks reduced from 1.75 to 1.62"],
          ],
          note: "We’ve got more plans for the Fire Lancer in the future. The move speed increase was an easy win to help fit it into its intended raiding role.  We made some backend changes to attack speeds which resulted in some units attacking slightly slower. The attack speed change helps set the unit back to its original strength.",
        },
        // * Grenadier damage decreased from 15 to 13. Weapon range decreased from 4 to 3. AoE Falloff damage reduced from 100%/75%/50% to 100%/66%/33%
        // > In addition to having no unit counter from the core unit roster Grenadiers also deal great damage to buildings. These stat tweaks make them a bit less cost effective and create a bigger risk when damaging buildings.
        {
          items: ["units/grenadier"],
          civs: [],
          diff: [
            ["nerf", "Damage decreased from 15 to 13"],
            ["nerf", "Weapon range decreased from 4 to 3"],
            ["nerf", "Area of effect falloff damage reduced from 100%/75%/50% to 100%/66%/33%"],
          ],
          note: "In addition to having no unit counter from the core unit roster Grenadiers also deal great damage to buildings. These stat tweaks make them a bit less cost effective and create a bigger risk when damaging buildings.",
        },
        // * Pyrotechnics only affects Handcannoneers instead of all gunpowder units. Weapon range bonus changed from +20% to +1.5 tiles. Total cost reduced from 1000 to 500 resources.
        // > Chinese were stacking bonuses onto their gunpowder units, creating super units like the Clocktower Bombard that is too good in too many roles. Focusing Pyrotechnics just on the Handcannoneers allows it to stand out more from other Handcannoneers and lets us buff some of the other unique gunpowder technologies like Reload Drills.
        {
          items: ["technologies/pyrotechnics", "units/handcannoneer"],
          civs: [],
          diff: [
            ["nerf", "Now only affects Handcannoneers instead of all gunpowder units."],
            ["nerf", "Weapon range bonus changed from +20% to +1.5 tiles"],
            ["buff", "Total cost reduced from 1000 to 500 resources"],
          ],
          note: "Chinese were stacking bonuses onto their gunpowder units, creating super units like the Clocktower Bombard that is too good in too many roles. Focusing Pyrotechnics just on the Handcannoneers allows it to stand out more from other Handcannoneers and lets us buff some of the other unique gunpowder technologies like Reload Drills.",
        },
        // * Reload Drills attack speed increased from 25% to 33%
        // > Power level increased to help offset the loss of Pyrotechnics. Tooltip is slightly incorrect here as it still refers to reload speed instead of attack speed.
        {
          items: ["technologies/reload-drills"],
          civs: [],
          diff: [["buff", "Attack speed bonus increased from 25% to 33%"]],
          note: "Power level increased to help offset the loss of Pyrotechnics. Tooltip is slightly incorrect here as it still refers to reload speed instead of attack speed.",
        },
        // * The Nest of Bees and all Clocktower siege units are included in the Melee v Siege Rework (see above)
        // {
        //   items: ["units/nest-of-bees", "buildings/clocktower"],
        //   civs: [],
        //   diff: [["fix", "The Nest of Bees and all Clocktower siege units are included in the Melee v Siege Rework"]],
        // },
        // * Granary cost reduced from 250 Wood to 150 Wood
        // > 250 is a very high cost to ask when farm transitions are being made. This lower cost is also more commensurate with the 10% increase to gathering rates this building provides.
        {
          items: ["buildings/granary"],
          civs: [],
          diff: [["nerf", "Cost reduced from 250 Wood to 150 Wood"]],
          note: "250 is a very high cost to ask when farm transitions are being made. This lower cost is also more commensurate with the 10% increase to gathering rates this building provides.",
        },
        // * Barbican of the Sun Landmark now has the ability to purchase Springald and Cannon Emplacements
        // > These changes give the landmark better late game scaling potential as enemy army sizes get much bigger.
        {
          items: ["buildings/barbican-of-the-sun"],
          civs: [],
          diff: [["buff", "Now has the ability to purchase Springald and Cannon Emplacements"]],
          note: "These changes give the landmark better late game scaling potential as enemy army sizes get much bigger.",
        },
        // * The Imperial Academy Landmark can now train Imperial Officials.
        // > This change allows the Chinese to train additional villagers at the town center, giving them access to more strategic paths early in the game.
        {
          items: ["buildings/imperial-academy", "units/imperial-official"],
          civs: [],
          diff: [["buff", "The Imperial Academy Landmark can now train Imperial Officials."]],
          note: "This change allows the Chinese to train additional villagers at the town center, giving them access to more strategic paths early in the game.",
        },
        // * Great Wall Gatehouse Landmark changes
        //     * No longer provides damage bonuses to units locally around the Landmark
        //     * No longer provides bonus health to Stone Walls and Gates
        //     * Now comes with a Nest of Bees emplacement that fires a burst of 16 arrows.
        //     * Now provides all your units on Stone Walls with +25% ranged damage.
        // > The Great Wall Gatehouse led to a passive style of gameplay that relied on building a huge mass of Stone Walls that took too long to get through. We’ve refocused the gameplay around making the placement of the building impactful and encouraging combat on and around walls.
        {
          items: ["buildings/great-wall-gatehouse"],
          civs: [],
          diff: [
            ["nerf", "No longer provides damage bonuses to units locally around the Landmark"],
            ["nerf", "No longer provides bonus health to Stone Walls and Gates"],
            ["buff", "Now comes with a Nest of Bees emplacement that fires a burst of 16 arrows"],
            ["buff", "Now provides all your units on Stone Walls with +25% ranged damage"],
          ],
          note: "The Great Wall Gatehouse led to a passive style of gameplay that relied on building a huge mass of Stone Walls that took too long to get through. We’ve refocused the gameplay around making the placement of the building impactful and encouraging combat on and around walls.",
        },

        // * Spirit Way Landmark changes
        //     * Spirit Way Landmark no longer reduces the cost of dynasty units in Stables and Archery Ranges around the Landmark.
        //     * Spirit Way Landmark now houses technologies to upgrade dynasty units which can be researched for -50% cost and +100% research speed.
        //     * When a dynasty unit dies, all nearby units will receive +20% attack speed and +20 health over 10 seconds.
        // > We wanted the landmark to add more adaptive and dynamic elements to the Chinese gameplan. Previously you committed to 1 building type around the spirit way and were locked into those units. Now you can mix in different forces based on your current dynasty and combat needs.
        {
          items: ["buildings/spirit-way"],
          civs: [],
          diff: [
            ["nerf", "Spirit Way Landmark no longer reduces the cost of dynasty units in Stables and Archery Ranges around the Landmark"],
            ["buff", "Now houses technologies to upgrade dynasty units which can be researched for -50% cost and +100% research speed"],
            ["buff", "When a dynasty unit dies, all nearby units will receive +20% attack speed and +20 health over 10 seconds"],
          ],
          note: "We wanted the landmark to add more adaptive and dynamic elements to the Chinese gameplan. Previously you committed to 1 building type around the spirit way and were locked into those units. Now you can mix in different forces based on your current dynasty and combat needs.",
        },

        // * Fixed a bug where Chinese Scouts lost their Tang Dynasty bonus vision when advancing to the feudal age.
        {
          items: ["units/scout"],
          civs: [],
          diff: [["fix", "Fixed a bug where Chinese Scouts lost their Tang Dynasty bonus vision when advancing to the feudal age."]],
        },
        // * Fixed a bug where The Ming Dynasty bonus was increasing the health of Keeps, Stone Wall Towers, and Outposts.
        {
          items: ["buildings/keep", "buildings/stone-wall-tower", "buildings/outpost"],
          civs: [],
          diff: [["fix", "Fixed a bug where The Ming Dynasty bonus was increasing the health of Keeps, Stone Wall Towers, and Outposts."]],
        },
        // * Fixed a bug where Imperial Official ignored shift queued tax drop off when carrying max gold.
        {
          items: ["units/imperial-official"],
          civs: [],
          diff: [["fix", "Fixed a bug where Imperial Official ignored shift queued tax drop off when carrying max gold."]],
        },
      ],
    },

    // ## Delhi Sultanate (SUL)
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        // * Delhi Sultanate Imperial Age tech time multiplier reduced from 15x to 12x
        // > Delhi free Imperial technologies provide a gigantic amount of Gold. But that doesn’t matter if you die before the research completes. We’ve adjusted the values to find a median point between time and savings.
        {
          items: ["buildings/blacksmith", "buildings/madrasa"],
          civs: [],
          diff: [["buff", "Delhi Sultanate Imperial Age tech time multiplier reduced from 15x to 12x"]],
        },

        // Biology 1350s -> 1080s
        // Chemistry   1350s -> 1080s
        // Adjustable Crossbars    1350s -> 1080s
        // Chaser Cannons  1350s -> 1080s
        // Court Architects    1350s -> 1080s
        // Elite Army Tactics  1350s -> 1080s
        // Incendiary Arrows   1350s -> 1080s
        // Siege Works 1350s -> 1080s
        {
          items: [
            "technologies/biology",
            "technologies/chemistry",
            "technologies/adjustable-crossbars",
            "technologies/chaser-cannons",
            "technologies/court-architects",
            "technologies/elite-army-tactics",
            "technologies/incendiary-arrows",
            "technologies/siege-works",
          ],
          civs: [],
          diff: [["buff", "Research time reduced from 1350 to 1080 seconds"]],
        },
        // Crosscut Saw    1125s -> 900s
        // Cupellation 1125s  -> 900s
        // Precision Cross-Breeding	1125s -> 900s
        {
          items: ["technologies/crosscut-saw", "technologies/cupellation", "technologies/precision-cross-breeding"],
          civs: [],
          diff: [["buff", "Research time reduced from 1125 to 900 seconds"]],
        },
        // Angled Surfaces 900s -> 720s
        // Damascus Steel  900s -> 720s
        // Explosives  900s -> 720s
        // Master Smiths 900s -> 720s
        // Platecutter Point		900s -> 720s
        // Roller Shutter 900s -> 720s
        // Tithe Barns 900s -> 720s
        {
          items: [
            "technologies/angled-surfaces",
            "technologies/damascus-steel",
            "technologies/explosives",
            "technologies/master-smiths",
            "technologies/platecutter-point",
            "technologies/roller-shutter-triggers",
            "technologies/tithe-barns",
          ],
          civs: [],
          diff: [["buff", "Research time reduced from 900 to 720 seconds"]],
        },
        // Geometry    675s -> 540s
        {
          items: ["technologies/geometry"],
          civs: [],
          diff: [["buff", "Research time reduced from 675 to 540 seconds"]],
        },

        // * When toggling the Palace of the Sultan Landmark’s automatic Elephant production off, Elephants in queue will now be correctly cancelled.
        {
          items: ["buildings/palace-of-the-sultan"],
          civs: [],
          diff: [
            ["fix", "When toggling the Palace of the Sultan Landmark’s automatic Elephant production off, Elephants in queue will now be correctly cancelled."],
          ],
        },
        // * Dome of Faith Landmark changes
        //     * Changed from -50% cost to -40% cost and +50% production time.
        // > These changes keep Dome of Faith at the same power level in spite of the new decreases in Scholar train time.
        {
          items: ["buildings/dome-of-the-faith"],
          civs: [],
          diff: [["buff", "Scholar production bonus changed from -50% cost to -40% cost and +50% production time."]],
          note: "These changes keep Dome of Faith at the same power level in spite of the new decreases in Scholar train time.",
        },
        // * Technology research time adjustments:
        //     * Boiling Oil increased from 300 to 450 seconds
        {
          items: ["technologies/boiling-oil"],
          civs: [],
          diff: [["nerf", "Research time increased from 300 to 450 seconds"]],
        },
        //     * All Seeing eye increased from 135 to 157
        {
          items: ["technologies/all-seeing-eye"],
          civs: [],
          diff: [["nerf", "Research time increased from 135 to 157 seconds"]],
        },
        //     * Swiftness increased from 270 to 450 seconds
        {
          items: ["technologies/swiftness"],
          civs: [],
          diff: [["nerf", "Research time increased from 270 to 450 seconds"]],
        },
        //     * Professional Scouts increased from 210 to 262
        {
          items: ["technologies/professional-scouts"],
          civs: [],
          diff: [["nerf", "Research time increased from 210 to 262 seconds"]],
        },
        //     * Survival Techniques decreased from 225 to 135
        {
          items: ["technologies/survival-techniques"],
          civs: [],
          diff: [["buff", "Research time decreased from 225 to 135 seconds"]],
        },
        //     * Herbal Medicine increased from 180 to 225
        {
          items: ["technologies/herbal-medicine"],
          civs: [],
          diff: [["nerf", "Research time increased from 180 to 225 seconds"]],
        },

        // * Tower Elephant Adjustments:
        //     * Tower Elephant health reduced from 960 to 860
        //     * Ranged units riding the Tower Elephant  are now properly affected by all damage upgrades (Blacksmith and university).
        {
          items: ["units/tower-elephant"],
          civs: [],
          diff: [
            ["nerf", "Health reduced from 960 to 860"],
            ["fix", "Ranged units riding the Tower Elephant are now properly affected by all damage upgrades (Blacksmith and university)"],
          ],
        },
        // * Reduced the formation catchup speed of elephants from 100% to 40%.
        // > This puts them inline with all other units in the game and will make chasing them down with Spearmen more manageable.
        {
          items: ["units/tower-elephant", "units/war-elephant"],
          civs: [],
          diff: [["nerf", "Formation catchup speed reduced from 100% to 40%"]],
          note: "This puts them inline with all other units in the game and will make chasing them down with Spearmen more manageable.",
        },
        // * Fixed a bug where technologies researched in Delhi keeps did not adjust research time if started before Scholars are garrisoned.
        {
          items: ["units/scholar", "buildings/keep"],
          civs: [],
          diff: [["fix", "Fixed a bug where technologies researched in Delhi keeps did not adjust research time if started before Scholars are garrisoned."]],
        },
        // * Fixed a bug where The Hisar Academy Landmark was generating Food while under construction.
        {
          items: ["buildings/hisar-academy"],
          civs: [],
          diff: [["fix", "Fixed a bug where The Hisar Academy Landmark was generating Food while under construction."]],
        },
        // * The Textiles technology now increases food produced by the Hisar Academy.
        {
          items: ["buildings/hisar-academy", "technologies/textiles"],
          civs: [],
          diff: [["buff", "The Textiles technology now increases food produced by the Hisar Academy."]],
        },
      ],
    },
    // ## English (ENG)
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        // * English Naval civilization bonus and Unique technology swapped.
        //     * Shipwrights renamed to Admiralty.
        //     * Admiralty now provides +1 range to all English combat ships.
        //     * English now has a global discount to Naval units of 10%.
        // > It was a pretty big tempo loss to spend all the time and resources to get Shipwrights, so we rolled it into the base stats for the civ. This should also help English on water maps as their main economic advantage is extra Food.
        {
          items: ["technologies/shipwrights", "technologies/admiralty"],
          civs: [],
          diff: [
            ["fix", "Shipwrights renamed to Admiralty"],
            ["buff", "Admiralty now provides +1 range to all English combat ships"],
            ["buff", "English now has a global discount to Naval units of 10%"],
          ],
          note: "It was a pretty big tempo loss to spend all the time and resources to get Shipwrights, so we rolled it into the base stats for the civ. This should also help English on water maps as their main economic advantage is extra Food.",
        },
        // * Wynguard Palace Landmark has 2 new additional production options:
        //     * Wynguard Raiders spawns an army of 3 Knights and 3 Horsemen.
        //     * Wynguard Rangers spawns an army of 3 Handcannoneers and 3 Crossbowmen.
        {
          items: ["buildings/wynguard-palace"],
          civs: [],
          diff: [
            ["buff", "New production option 'Wynguard Raiders' spawns an army of 3 Knights and 3 Horsemen"],
            ["buff", "New production option 'Wynguard Rangers' spawns an army of 3 Handcannoneers and 3 Crossbowmen"],
          ],
        },
        // * Abbey of Kings Landmark changes
        //     * Radius increased from 6.25 to 7.5 tiles.
        // > The increased radius makes it easier to fit an army around this building as well as making it easier to benefit boats when built on the coast.
        {
          items: ["buildings/abbey-of-kings"],
          civs: [],
          diff: [["buff", "Healing Radius increased from 6.25 to 7.5 tiles"]],
          note: "The increased radius makes it easier to fit an army around this building as well as making it easier to benefit boats when built on the coast.",
        },
      ],
    },
    // ## French (FRE)
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        // * Royal Institute discount increased from 20% to 30%.
        // > While we are seeing this landmark in some matchups, we’d like it to be more competitive with the Guild Hall.
        {
          items: ["buildings/royal-institute"],
          civs: [],
          diff: [["buff", "Royal Institute discount increased from 20% to 30%"]],
          note: "While we are seeing this landmark in some matchups, we’d like it to be more competitive with the Guild Hall.",
        },
        // * Red Palace default weapons decreased from 3 to 2 Arbalest.
        // > We want the main power of the Red Palace to come from adding units to activate its powerful garrison weapons. This allows for more counterplay if you can kill nearby villagers or attack it when the enemy army is on another part of the map.
        {
          items: ["buildings/red-palace"],
          civs: [],
          diff: [["nerf", "Default weapons decreased from 3 to 2 Arbalest"]],
          note: "We want the main power of the Red Palace to come from adding units to activate its powerful garrison weapons. This allows for more counterplay if you can kill nearby villagers or attack it when the enemy army is on another part of the map.",
        },
        // * College of Artillery’s Royal siege units are included in the Melee v Siege Rework (see above)
        // * Chamber of Commerce was giving no bonus to trade value, it now gives the proper +30%. Wow!
        {
          items: ["buildings/chamber-of-commerce"],
          civs: [],
          diff: [["buff", "Chamber of Commerce was giving no bonus to trade value, it now gives the proper +30%"]],
        },
        // * French Trade Ship bonus changed from +20% Gold to +20% all resources on trades.
        {
          items: ["units/trade-ship"],
          civs: [],
          diff: [["buff", "French Trade Ship bonus changed from +20% Gold to +20% all resources on trades"]],
        },
        // * Chivalry cost increased from 50 Wood 125 Gold to 100 Wood 200 Gold.
        // > French Knights are a very strong harassment tool early on and can constantly re-engage with the Chivalry tech. We love this playstyle but want there to be a bigger sacrifice and more strategic consideration for when to invest in Chivalry.
        {
          items: ["technologies/chivalry"],
          civs: [],
          diff: [["buff", "Cost increased from 50 Wood 125 Gold to 100 Wood 200 Gold"]],
          note: "French Knights are a very strong harassment tool early on and can constantly re-engage with the Chivalry tech. We love this playstyle but want there to be a bigger sacrifice and more strategic consideration for when to invest in Chivalry.",
        },
      ],
    },
    // ## Holy Roman Empire (HRE)
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        // * The Regnitz Cathedral Landmark now provides +100% Gold from all captured Relics instead of +200% Gold from 2 Relics garrisoned within. It also is now a fully functional Monastery.
        // > We want HRE to engage more frequently with their mechanic to garrison relics in defensive buildings to power them up. With the updated design you no longer lose out on gold by having relics in keeps.
        {
          items: ["buildings/regnitz-cathedral"],
          civs: [],
          diff: [
            ["buff", "Now provides +100% Gold from all Relics garrisoned in any building instead of +200% Gold from 2 Relics garrisoned within the cathedral"],
          ],
          note: "We want HRE to engage more frequently with their mechanic to garrison relics in defensive buildings to power them up. With the updated design you no longer lose out on gold by having relics in keeps.",
        },
        // * HRE Prelates will also inspire units when they start healing.
        // > This makes the Inspired Warriors tech more valuable and means healing damaged villagers has a smaller hit to your economy.
        {
          items: ["units/prelate", "technologies/inspired-warriors"],
          civs: [],
          diff: [["buff", "Prelates willl also inspire units while they start healing"]],
          note: "This makes the Inspired Warriors tech more valuable and means healing damaged villagers has a smaller hit to your economy.",
        },
        // * Fixed a bug where Dark Age and Feudal age Prelates were only healing for 3.5 per second instead of the intended 7.
        {
          items: ["units/prelate"],
          civs: [],
          diff: [["fix", "Fixed a bug where Dark Age and Feudal age Prelates were only healing for 3.5 per second instead of the intended 7."]],
        },
        // * Fixed a bug that was preventing Prelates from garrisoning into the Aachen Chapel after it had been repaired by Emergency Repairs.
        // * Aachen Chapel Landmark now accepts the drop-off of all resources.
        {
          items: ["buildings/aachen-chapel"],
          civs: [],
          diff: [
            ["buff", "Now accepts the drop-off of all resources"],
            ["fix", "Fixed a bug that was preventing Prelates from garrisoning into the Aachen Chapel after it had been repaired by Emergency Repairs"],
          ],
        },
        // * Meinwerk Palace Landmark discount and research speed increased from 30% to 40%.
        {
          items: ["buildings/meinwerk-palace"],
          civs: [],
          diff: [
            ["buff", "Research discount increased from 30% to 40%"],
            ["buff", "Research speed bonus increased from 30% to 40%"],
          ],
        },
      ],
    },
    // ## Mongols (MON)
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        // * Mangudai time between attacks reduced from 1.38 to 1.25
        // > We made some backend changes to attack speeds which resulted in some units attacking slightly slower. This change helps set the unit back to it’s original strength.
        {
          items: ["units/mangudai"],
          civs: [],
          diff: [["buff", "Time between attacks reduced from 1.38 to 1.25"]],
          note: "We made some backend changes to attack speeds which resulted in some units attacking slightly slower. This change helps set the unit back to it’s original strength.",
        },
        // * The Traction Trebuchet unit and the Improved Siege Works research are included in the Melee v Siege Rework (see above)

        // * Improved economy technologies
        // 	* Bonus of the improved economy technologies increased from 5 to 7.5%.
        // Acid Distilization € (Improved)
        // Crosscut Saw € (Improved)
        // Cupellation € (Improved)
        // Double Broadaxe € (Improved)
        // Fertilization € (Improved)
        // Horticulture € (Improved)
        // Lumber Preservation € (Improved)
        // Precision Cross-Breeding € (Improved)
        // Specialized Pick € (Improved)
        // Survival Techniques € (Improved)
        {
          items: [
            "technologies/acid-distilization-improved",
            "technologies/crosscut-saw-improved",
            "technologies/cupellation-improved",
            "technologies/double-broadaxe-improved",
            "technologies/fertilization-improved",
            "technologies/horticulture-improved",
            "technologies/lumber-preservation-improved",
            "technologies/precision-cross-breeding-improved",
            "technologies/specialized-pick-improved",
            "technologies/survival-techniques-improved",
          ],
          civs: [],
          diff: [["buff", "Improved economy technology bonus increased from 5 to 7.5%"]],
        },
        // * Kurultai Landmark changes
        // 	* Kurultai Aura radius increased from 4 to 7.5 tiles. Healing effect no longer requires the Khan to be present within its aura.
        // > Increased radius makes it easier to get your entire army to benefit from the Kurultai bonuses. Remove the Khan requirement means the building still provides value and is worth engaging with while the Khan is dead.
        {
          items: ["buildings/kurultai"],
          civs: [],
          diff: [
            ["buff", "Healing auro radius increased from 4 to 7.5 tiles"],
            ["buff", "Healing effect no longer requires the Khan to be present within its aura"],
          ],
          note: "Increased radius makes it easier to get your entire army to benefit from the Kurultai bonuses. Remove the Khan requirement means the building still provides value and is worth engaging with while the Khan is dead.",
        },
        // * Mongols now have access to the Geometry and Geometry (Improved) technologies in the Siege Workshop.
        {
          items: ["buildings/siege-workshop", "technologies/geometry", "technologies/geometry-improved"],
          civs: [],
          diff: [["buff", "Mongols now have access to the Geometry and Geometry (Improved, +15% extra) technologies in the Siege Workshop"]],
        },
        // * Improved Tithe Barns now generates the correct amount of resources.
        {
          items: ["technologies/tithe-barns-improved"],
          civs: [],
          diff: [["fix", "Improved Tithe Barns now generates the correct amount of resources"]],
        },
        // * Packed Pastures and Barracks now have the same health as their unpacked versions.
        {
          items: ["buildings/pasture", "buildings/barracks"],
          civs: [],
          diff: [["buff", "Packed Pastures and Barracks now have the same health as their unpacked versions"]],
        },
        // * Fixed a bug where Mongol Silver Tree landmark sometimes prevented Yam Network tech from working.
        {
          items: ["buildings/the-silver-tree", "technologies/yam-network"],
          civs: [],
          diff: [["fix", "Fixed a bug where Mongol Silver Tree landmark sometimes prevented Yam Network tech from working."]],
        },
      ],
    },
    // ## Rus (RUS)
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        // * Horse Archer time between attacks reduced from 2.62 to 2.125
        // > We made some backend changes to attack speeds which resulted in some units attacking slightly slower. This change helps set the unit back to it’s original strength.
        {
          items: ["units/horse-archer"],
          civs: [],
          diff: [["buff", "Time between attacks reduced from 2.62 to 2.125"]],
          note: "We made some backend changes to attack speeds which resulted in some units attacking slightly slower. This change helps set the unit back to it’s original strength.",
        },
        // * Spaskaya Tower Landmark now unlocks the building of Stone Walls
        // > This gives unique functionality to the weakest of the Imperial Age Keep landmarks and makes a more compelling choice when compared to the High Armory.
        {
          items: ["buildings/spasskaya-tower"],
          civs: [],
          diff: [["buff", "Spasskaya Tower Landmark now unlocks the building of Stone Walls"]],
          note: "This gives unique functionality to the weakest of the Imperial Age Keep landmarks and makes a more compelling choice when compared to the High Armory.",
        },
        // #### Kremlin Landmark changes
        // * Influence range increased from 4 to 8 tiles
        // * Default weapon range increased from 6 to 8
        // * Garrison arrow range increased from 6 to 8
        // > These changes should allow for more flexible placement to get the Kremlin in a good defensive position while also providing a bonus to Wood gather rates.
        {
          items: ["buildings/kremlin"],
          civs: [],
          diff: [
            ["buff", "Influence range increased from 4 to 8 tiles"],
            ["buff", "Default weapon range increased from 6 to 8"],
            ["buff", "Garrison arrow range increased from 6 to 8"],
          ],
          note: "These changes should allow for more flexible placement to get the Kremlin in a good defensive position while also providing a bonus to Wood gather rates.",
        },

        // * High Trade House Landmark changes
        //     * Fixed the aura indicator on the High Trade House to represent the correct tree counting range. Note that the area is now visually bigger, but this is now an accurate representation of what trees are being counted by the Landmark.
        // > Gold penalty for the High Trade House adheres to the radius that the Hunting Cabin uses for tree counting.
        {
          items: ["buildings/high-trade-house"],
          civs: [],
          diff: [["buff", "Fixed the aura indicator on the High Trade House to represent the correct tree counting range."]],
          note: " Note that the area is now visually bigger, but this is now an accurate representation of what trees are being counted by the Landmark. Gold penalty for the High Trade House adheres to the radius that the Hunting Cabin uses for tree counting.",
        },

        // * Lodya Attack Ships now retain their +8 damage vs Incendiary Ships after researching Incendiary Arrows.
        // * Lodya ships were scaled to different sizes, they are all normalized now.
        {
          items: ["units/lodya-attack-ship"],
          civs: [],
          diff: [
            ["fix", "Lodya Attack Ships now retain their +8 damage vs Incendiary Ships after researching Incendiary Arrows."],
            ["fix", "Lodya ships were scaled to different sizes, they are all normalized now."],
          ],
        },
      ],
    },
    {
      title: "Game",
      civs: [],
      changes: [],
      md: `## Event Queue & Notifications
      > When there are too many alerts on the map they can become meaningless noise. We trimmed out redundant and not useful information so you can focus on critical events.
      * Reduced number of map pings when multiple attacks occur next to each other.
      * Increased notification re-trigger time when buildings are attacked from 0 to 15 seconds.
      * Removed map ping on upgrade complete.
      * Ally under attack ping changed from red to blue.
      * Ally under attack ping triggers less frequently when multiple units are fighting near each other
      
      ## UI/UX
      * Added an option in the settings menu to disable campaign missions from auto-saving.
      * Players can no longer complete masteries in matches that use custom game modes, custom maps, or tuning packs Note that players should still be able to complete masteries when mods are downloaded, installed, and enabled but are not active when loading into a multiplayer custom game or single player skirmish.
      * Fixed an issue where player colors would sometimes change between Team-based and Unique colors during the match loading screen.
      * Fixed an issue where the map preview image in the Map Setup tab would be cropped for Crafted Maps.
      * Fixed an issue where sometimes the player colors in match history did not match the colors used in game.
      * Fixed an issue where the ‘Quit Match’ button did not work after encountering a desync error.
      * Fixed an issue where the X button for clearing a hotkey binding could become stuck in a disabled state.
      * Siege queued for construction in the field will only be seen in the global build queue after your infantry has started constructing them.
      * Fixed an issue where the text in the Remap Controls settings notification bar at the bottom of the page would be cut off in some non-English languages using a large scaled font.
      * Updated the Wonder Tracker for observer/replays more clear to indicate the closest time to Wonder Victory.
      * Fixed an issue where observers could visually clear the build queues, this would not affect the actual game.
      * Fixed some high contrast issues with texts in the menus.
      * Camera panning now works even while holding Shift.
      * Fixed text truncation issue with the event panel.
      * All missions of the four single-player campaigns are now unlocked.
      * Reduced the initial size of the ping animation on the minimap when under attack.
      * Fixed a bug that was causing the Events/Challenges panels to appear blank if all challenges were completed.
      * Added camera zoom setting for default Camera Mode: Panoramic / Classic.
      * Fixed an issue where events can take several minutes to appear when idle on the main menu.
      * After failing to update a mod due to detected ill content the status in the notification is now “Unpublished” instead of “Published”.
      
      ## Shortcuts & Remappable Keys
      * Council Hall Landmark can now be selected with Archery Range shortcuts.
      * The White Tower Landmark can now be selected with Keep shortcuts.
      * Berkshire Palace Landmark can now be selected with Keep shortcuts.
      * Red Palace Landmark can now be selected with Keep shortcuts.
      * Spasskaya Tower Landmark can now be selected with Keep shortcuts.
      * Elzbach Palace Landmark can now be selected with Keep shortcuts.
      * House of Learning Landmark can now be selected with technology building shortcuts.
      * Palace of the Sultan Landmark changed from a Religious to Military Landmark and can now be selected with military shortcuts.
      * Astronomical Clocktower Landmark can now be selected with Siege Workshops shortcuts.
      * Royal Institute Landmark can now be selected with technology shortcuts.
      * College of Artillery Landmark can now be selected with Siege Workshop shortcuts.
      * Abbey of the Trinity Landmark is now included with Military building shortcuts.
      * High Armory Landmark changed from Military to Technology Landmark and can now be accessed with technology building shortcuts.
      * Steppe Redoubt Landmark can now be selected with economy building shortcuts.
      * Select all military units, Select all idle military units, and Cycle through idle military units, hotkeys will no longer include Monks, Delhi Sultanate Fishing Ships or Mongol Packed Buildings.
      * Using the Select all Barracks hotkey will no longer select Docks.
      * Select all Hunting Cabins hotkey is now merged with Select all Mills.
      * Select all Wooden Fortresses hotkey is now merged with Select all Outposts.
      * Select all Mosques hotkey is now merged with Select all Monasteries and Prayer Tents.
      * Select all Madrassas hotkey is now merged with Select all Universities.
      * Monasteries will no longer be selected with military building shortcuts.
      > Rus Monasteries and Abbey of the Trinity Landmark will still be selected in this way due to the Warrior Monk.
      * Fixed a bug where Monastery buildings, including the Regnitz Cathedral Landmark and Abbey of the Trinity Landmark, were selectable using the Military Buildings hotkeys instead of the Technology Buildings hotkeys.
          `,
    },
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `
       
      ## General
      * Fixed an issue where giving sheep the move command while near your scout could result in the sheep converting to neutral.
      * Fixed a bug that allowed you to withdraw and deposit Relics from Religious buildings in rapid succession and earn extra gold in the process.
      * Fixed a bug that would prevent Imams from responding to Conversion commands while healing.
      * Units will now respect formation changes after finding a target to attack from idle.
      * It is no longer possible to animation cancel with units in order to gain additional attack speed.
      * Fixed a rare exploit where units on walls could gain a permanent range increase.
      * Fixed a bug when the game hangs after quitting when your Town Center has been destroyed.
      * Villagers will repair buildings over naval units when the damaged units are overlapped.
      * Fixed issue where Mongol players could increase score by unpacking and packing buildings
      * Fixed a bug where siege units sometimes target the back of a gate instead of the front.
      * Fixed an issue where gates do not have enough room for siege units to pass through.
      * Villagers will surround groups of enemy units properly instead of looping back and forth.
      * Updated the notification message when publishing and unpublishing mods to make the status clearer.
        * Updated the Chinese Mastery Path of the Spirit to require researching all upgrades within the Spirit Way Landmark.
          * *Developer Note:* Recent balance changes to the Spirit Way Landmark’s aura functionality meant that this mastery could not be completed. Changing the requirements here will ensure that you can keep progressing the Chinese mastery and earning those sweet rewards!
      * Mongol mastery: Kettle and Smoke, changed to require 2 Villagers produced via Improved Production instead of 6
        * *Developer Note:* Following balance changes made to the Mongols, this mastery had become more difficult to complete than we intended. Reducing the number of Villagers required to complete this mastery will bring it more in line with its original difficulty level.
      * Publishing the crafted map Arena which is inspired by the classic /Age of Empires/ map where players are surrounded by defensive walls.
      * Fixed an issue where the “Wolves and Rain” mastery was not completed after killing 30 units within the Yam speed aura.
      * Fixed a bug where smoke was missing from chimneys of various buildings.
      ## Fixes
      * Fixed an issue where hills would prevent straight shot units like crossbows and springalds from attacking. This caused the units to move closer, often much closer than their max range before attacking.
      > This change will result in units sometimes shooting through terrain. We find that to be an acceptable tradeoff in order to make units behave in a consistent and predictable manner. We don’t want you to guess what will happen when issuing a command.
      * Standardized the selection box for trees.
      > Previously tree selection boxes used the exact geometry of the tree model. This meant that it was easy to accidently click between branches or roots instead of clicking on the actual tree. It also made targeting a specific tree difficult as the overlap between branches of multiple trees lead to unexpected results. Selecting the tree you want is now much more reliable.
      * Selection logic will now prefer villagers instead of clicking the corpse they are harvesting.
      * Fixed an issue where it was difficult to have villagers gather sheep they were standing next to.
      > Selection was previously preferring villagers. It will now always make villagers gather sheep when you issue a right click or gather command.
      * Fixed a bug where the footprint of walls could be seen in the (explored) fog of war when attempting to place a building.
      * Fixed a bug where fishing ships would not drop off at the closest dock when building new docks. Also resolved an issue where fishing boats would sometimes go idle instead of returning fish to the dock.
      * Ranged units given an attack command will no longer walk all the way around a wall or river to attack their target.
      > This could occur when you had an archer/springald/etc behind your palisade wall and told it to attack an enemy unit outside it’s range. This caused your unit to walk all the way around the wall. Now it will instead move up to the wall and attack.
      * Religious units will now heal when using an Attack Move command.
      > Religious units used to run into enemy armies instead of prioritizing healing wounded units when using attack commands. Previously, healing efficiently required too much micromanagement and now players can easily include religious units with military units when attacking. Rus Warrior Monks are an exception to this and will focus on attacking for Saints Blessing enhancements.
      * Deer and Sheep which are blocking a building foundation now move out of the area much, much, much faster. Remember the Mongol TC rush? It’s faster than that.
      * Building docks no longer stomps adjacent Shore Fish and River Fish.
      * Slowed down projectile speed of Cannons, Culverin, and Handcannon slits so the projectiles can be seen with the human eye
      * Landmark Victory condition in Team Games updated so that players will only be eliminated when all allied Landmarks are destroyed
      > We found it too easy and frustrating for players to get knocked out of team games when they still had plenty of units and buildings remaining. This change allows for more comeback potential and keeps everyone in the game and having fun the whole time.`,
    },

    {
      title: "Maps",
      civs: [],
      changes: [],
      md: `
      ## General Changes 
      * Improved how contested resources are spawned when the contested resource count doesn’t line up with team count. For example: If there are 2 teams and 3 sacred sites, each team may get 1 sacred site favoring them in the contested space. Before, the third site would also be favored towards one team. Now, the third site will spawn in a neutrally contested location.
          * Fixed a separate issue where contested spawns that are biased towards players would sometimes not alternate teams, resulting in one team having more contested resources favoring them than the other team. (a more optional note to add, may help explain cases where it seems “not fixed”
      > this only affects resources that are spawned by automatic balancing system, not ones spawned by the map script.
      * We’ve added some additional details to the Map Seed tooltip to more thoroughly explain how to recreate a map. In order to re-generate an identical map, you need to:
          * use the same seed
          * use the correct map layout (eg Lipany)
          * use the same map size 
          * use the same biome (some biomes distribute different visuals and decorations, which can cause resources to spawn differently)
          * use the same team configuration (same number of players, team sizes, and Teams Together/Random Positions setting)
      * Berry bush clusters and deer herds now require a bit more room when looking where to spawn, to avoid cases where they would spawn on rugged terrain with no room to place a mill.
      * Fixed a bug in the new Map Preference system where the blue pip did not appear on downvoted maps in the “High Resource” category.
      Fixed an issue where the map preview image in the Map Setup tab would be cropped for Crafted Maps.
      
      ## Specific-Map Changes
      ### Black Forest
      * Resolved a former Known Issue with the spawn areas for the Black Forest map, where 1v1 matches on the micro map size could cause the Town Center to spawn underwater, as well as gold veins and stone outcroppings to not spawn near player start at all.
      
      ### Boulder Bay and Megarandom
      * On Boulder Bay and Megarandom, we have added a new special distribution of deepwater fish that are guaranteed to spawn within scout vision of the shoreline at consistent spacing. This is to ensure that players or teams do not get an economic advantage from having unequal access to deepwater fish, and to make the opening dock placement much less of a make or break decision. 
      
      ### Danube River
      * Danube River now will spawn teammates in a staggered line on each side of the river when using the Teams Together setting. This should fix instances where a single teammate in larger games could spawn on the enemy side of the river.
      * Danube River Map Misnamed in Some Menus
      > We are aware that the Danube River map is misnamed as “Rolling Rivers” or “The Riverlands” in some menus. 
      
      ### Dry Arabia
      * Dry Arabia sheep have been adjusted to now spawn in 4 groups of 2, instead of 2 groups of 3. This should spread sheep out and not have such an early game swing for getting lucky when sending the scout on the first sheep collection pass.
      
      ### French Pass
      * Fixed an issue on French Pass where in 2v2 matches on the Small map size, one Sacred Site would fail to spawn (and one player would spawn more forward than intended)
      
      ### Mongolian Heights
      * Mongolian Heights has been updated to ensure that cliffs do not surround Sacred Sites and Trade Posts. The number of crossings on the map has been updated from 3 to 5, and each crossing is now wider. This should result in less turtle-y gameplay, as we often saw match stalemates when the 3 narrow crossings were heavily fortified. Defensive play on this map should still be possible, but it will require more investment, opening up different strategies.
      
      ### Mountain Pass
      * Mountain Pass’ titular pass has received some tweaks - it will now scale up in size based on the map size. On larger sizes, expect to see a much longer opening, which will reinforce the need to use teamwork to defend the opening.
      
      ### Nagari
      * The water level of the central lake on Nagari was brought up slightly to improve dock placement ability on the shorelines. Sometimes, when the slope of the terrain going into the land is too steep, it can block the ability to place docks, so bringing up the water level should help alleviate this issue. 
      
      ### Ancient Spires
      * The Ancient Spires map has received an overhaul with the high level goal of distributing the small lakes evenly between teams.
      > Now, each lake will be placed in relation to the distance between teams. For example, if one lake is placed 10 tiles from player 1, a corresponding lake will be placed 10 tiles from player 2. Each lake contains 5 shore fish. The number of lakes increases with map size and number of teams.
      
      ### Lipany
      * We’ve done a tuning pass on the distribution of Sacred Sites on Lipany. We have more robust changes coming in a future update that should help ensure that sites are placed fairly with even higher consistency, but we felt like this interim tuning has resulted in less clumped spawns than before.`,
    },
    {
      title: "A.I.",
      civs: [],
      changes: [],
      md: `
* Restricted the amount of simultaneous harass attacks the AI will attempt to perform to reduce instances where the AI’s army is being spread too thin at once.
* Mongol AI are now building Steppe Redoubt near gold deposits and using it as gold drop-off.
* Reduced number of Scouts the AI tries to maintain.
* Improved AI scouting and sheep gathering behavior.
* Fixed an issue that would cause the AI to have trouble sending attacks against packed buildings.
* Chinese AI have been tuned to prefer to place farms near Granaries and production buildings near the Imperial Academy to better take advantage of their influence bonus.
* French AI have been tuned to prefer to place military production buildings near Keeps to benefit from their influence bonus.
* Rus AI have been tuned to prefer to place siege workshops near the High Armory to better take advantage of its influence bonus.
* Sultanate AI have been tuned to prefer to place research buildings near Mosques and the Tower of Victory near Barracks/Archery Ranges to better take advantage of their influence bonus.
* AI Chinese Imperial Officials will now take safety by garrisoning buildings if threatened.
* AI will consider gathering from resources with better gather rating.
* AI can now use their demolition ships properly and can use them to destroy enemy ships and buildings.
* Hard/Expert AI early game economy tuned to prioritize resources and resource upgrades more efficiently.
* Fixed an issue that prevented the AI from hunting boar and killing wolves.
* AI early game naval economy tuned to prioritize producing fishing ships earlier.
* Fixed an issue where sometimes the AI scout would be stalled for a long time at a given point and seem to be idle.
* Slightly increased maximum number of villagers the Hardest AI will produce.
* Sultanate and Abbasid AI tuned to prioritize gathering from berries.
* AI scouts now collect sheep in Revealed games.`,
    },
    {
      title: "Modding",
      civs: [],
      changes: [],
      md: `* Fixed an issue affecting mod authors where after publishing an update to an existing mod, the published version of the mod will remain out of date for the author’s client until a game restart. The Mod author publishes an update to a local mod in My Mods/Mod Publisher.
      * Fixed an issue affecting mod authors where mods always appear as out of date in the My Mods/Mod Publisher tab.
        > In My Mods: Mod Manager, the corresponding published mod will be out-of-date with the old title, description, picture, etc. There will be no option to update the out-of-date mod until the mod author restarts their game client. 
      * After deleting a mod, it’s now possible to re-subscribe and download it.
      * You can now obtain debug information for generated maps.
      * Fixed a bug where you are no longer able to publish a mod after being asked to change its name.
      * Fixed an issue where pressing the ‘ESC’ key while in the Mod creation Wizard or the layout tool showed a pop-up window instead of closing the editor.
      * Fixed an issue when cloning specific extensions would not clone the specified extensions.
      * Fixed a crash when trying to add a variable to an Entity Blueprint.
      * Fix to the Three Village SP Mission template by adding a new “Scenario” win condition that will show up when loading a match instead of the default “None.”
      * Fixed a bug in the Royal Rumble mod where you could not access the Tribute button and functionality.
      * Fixed an issue with the winning condition templates where they were missing the event cues (Aging up UI).
      * Fixed a bug when selecting an unsubscribed mod in a Skirmish game automatically resubscribed to the mod.
      ## Crafted Maps
      * When using the Intermediate Crafted Map mod option, painting ocean terrain with the Terrain Painter Tool will now automatically adjust ocean water height to ensure that crafted maps containing ocean terrain have water as expected. 
      > if you manually override the ocean height, your specified ocean height will be used.
      * When creating a Crafted Map mod, the Random Scenario generator window now has additional descriptions on each of the Distribution Categories to help modders identify what kinds of objects are included with each toggleable distribution category.
      * We have added a large number of new terrain types for use in modded generated maps.`,
    },
  ],
};
