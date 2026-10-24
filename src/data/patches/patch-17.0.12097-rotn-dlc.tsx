import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-17-0-12097-rotn-dlc",
  buildId: "17.0.12097",
  name: "Raiders of the North Update",
  season: 13,
  type: "update",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-update-17-0/",
  summary: `With Raiders of the North launching soon, the Vikings and Scots join the battlefield, bringing two distinct new civilizations and fresh ways to play Age of Empires IV. Alongside the brand new expansion, this update brings quality-of-life improvements, AI updates, hotkeys, map updates, and targeted balance changes across civilizations.`,
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2025/10/S9_Season_Twelve_Hallows_Hearth_Update_Banner-1080x608.webp)

Big changes are right around the corner! With *Raiders of the North* launching soon, the Vikings and Scots will join the battlefield, bringing two distinct new civilizations and fresh ways to play *Age of Empires IV*.

Alongside the brand new ***Raiders of the North* expansion releasing on October 29**, we’ve got lots of juicy updates to share that improve the experience for everyone. This includes some big quality-of-life improvements and targeted balance changes that support our goals of increasing landmark diversity and bringing civilizations better in-line across the board. Now on to the good stuff!

---

Thanks again to our amazing community members, all of whom have helped to make *Age of Empires* what it is today!

—The *Age of Empires* Team
  `,
  date: new Date("2026-10-22T19:00:00Z"),
  sections: [
    {
      title: "Gameplay",
      subtitle: "Build Spotlight",
      civs: [],
      changes: [
        {
          title: "Observer Mode",
          items: [],
          civs: [],
          uionly: true,
          diff: [
            [
              "change",
              "Adding a new Observer HUD mod category for replays and live observers. Observer HUDs will be able to be subscribed to and enabled independently from Game Mode mods, allowing custom spectator interfaces to be used with Ranked, Quick Match, custom match, and tournament replays. Observer HUDs are loaded only for spectators, improving stability while reducing setup requirements for hosts and players. Mod creators can publish Observer HUDs through a dedicated category in the Mod Editor.",
            ],
          ],
        },
        {
          title: "New Taunts",
          items: [],
          civs: [],
          uionly: true,
          diff: [
            [
              "change",
              "Added 12 new Vikings and Scots themed Taunts available to everyone for use on October 29.",
            ],
          ],
        },
        {
          title: "General",
          items: [],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed placement summary for ranked matches always showing “-2/5 COMPLETED”.",
            ],
            [
              "change",
              "Attack Move behavior change: Added a new setting under Game → Attack Move Targets Buildings to choose whether Attack-Move targets buildings. Siege units which prioritize buildings are not included, so Rams, Trebuchets, and Cannons will still continue to target buildings by default regardless of this setting.",
            ],
            [
              "change",
              "Added a modifier key that can be used to invert the behavior of the Attack Move Targets Buildings toggle, remappable via View and Remap Controls → Game → Inverted Attack Move.",
            ],
            [
              "change",
              "Removed Dark Green and Magenta color options due to readability issues.",
            ],
            [
              "change",
              "Added new customization options when using Team-Based colors to change your own, your ally, and your enemy color to any of your choosing.",
            ],
          ],
        },
        {
          title: "AI Changes",
          items: [],
          civs: [],
          diff: [
            [
              "buff",
              "AI players will now avoid needlessly building a naval presence on Megarandom maps.",
            ],
            [
              "buff",
              "AI players will have a higher priority to build dropoffs when needed.",
            ],
            [
              "buff",
              "The Worker Elephants of Tughlaq Dynasty AI players will now attempt to avoid danger when attacked.",
              ["tug"],
            ],
          ],
        },
        {
          title: "Hotkeys",
          items: [],
          civs: [],
          uionly: true,
          diff: [
            ["change", "New hotkey added: Select all ranged units."],
            ["change", "New hotkey added: Select all ranged units on screen."],
            ["change", "New hotkey added: Select all melee cavalry."],
            ["change", "New hotkey added: Select all melee cavalry on screen."],
            ["change", "New hotkey added: Select all ranged cavalry."],
            ["change", "New hotkey added: Select all ranged cavalry on screen."],
          ],
        },
        {
          title: "Matchmaking",
          items: [],
          civs: [],
          diff: [
            [
              "change",
              "Updated how hidden matchmaking rating (MMR) is adjusted after team games: hidden rating moves toward team true skill more quickly when regularly queuing with the same teammates, and rating gains and losses within a team are weighted by rating relative to teammates.",
            ],
          ],
        },
      ],
    },
    {
      title: "Maps",
      civs: [],
      changes: [
        {
          title: "General Map Changes",
          items: [],
          civs: [],
          diff: [
            [
              "change",
              "Added new terrain type for the Ancient Stele and Herbalist Hut points of interest to be used by mods for custom procedural maps.",
            ],
          ],
        },
        {
          items: ["maps/carmel"],
          civs: [],
          diff: [
            [
              "change",
              "Deer placement in team games now spawn in a more neutral zone.",
            ],
            [
              "change",
              "Cliffs and mountains now spawn more sparsely and to never create big impasses engulfing the center in larger map sizes.",
            ],
            [
              "change",
              "Team game player spawn distribution now uses a new player spawn distribution that sets the players to spawn closer to the center of the map and in equal gaps from each other.",
            ],
            [
              "change",
              "Sacred Sites in larger maps now spawn between the teams rather than having a chance to spawn “behind” a team.",
            ],
          ],
        },
        {
          items: ["maps/craters"],
          civs: [],
          diff: [
            [
              "nerf",
              "The Meteorite now contains 2000 resources of Gold and Stone rather than 4000.",
            ],
            [
              "change",
              "Sheep distribution has been updated to the new method where most sheep spawn close to the player’s base.",
            ],
          ],
        },
        {
          items: ["maps/danube-river"],
          civs: [],
          diff: [
            [
              "change",
              "Player starting locations are now mirrored and symmetrical in 1v1 and team games.",
            ],
            [
              "change",
              "The Ancient Stele point of interest has been added near the top of the cliff by the sacred site.",
            ],
            [
              "change",
              "An additional river crossing towards the center will appear in larger map sizes.",
            ],
            [
              "change",
              "Trade Posts have been moved slightly away from the corners of the map.",
            ],
            [
              "change",
              "Sheep distribution has been updated to the new method where most sheep spawn close to the player’s base.",
            ],
            [
              "fix",
              "Fixed an issue where the central ramp leading between the cliffs would often become an impassable cliff.",
            ],
            [
              "fix",
              "Fixed an issue where stealth forests would fail to spawn in the center of the map by one side of the riverbank.",
            ],
          ],
        },
        {
          items: ["maps/high-view"],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed a team games issue where a player could sometimes spawn on the enemy team’s side.",
            ],
            [
              "fix",
              "Fixed an issue where the fifth Relic would sometimes fail to spawn in 1v1.",
            ],
          ],
        },
        {
          items: ["maps/oasis"],
          civs: [],
          diff: [
            [
              "change",
              "A stealth forest path will lead to the central lake from two opposite ends of the forest ring, with a sacred site at the end of each path.",
            ],
            [
              "change",
              "A single deep sea fish will spawn in the central lake. Two deep sea fish will spawn in larger team games.",
            ],
            [
              "change",
              "Players in solo and team games now spawn the same distance from the central entrances and neutral resources.",
            ],
            [
              "change",
              "Team games now use a new spawn which sets the players closer to the center of the map and in equal distance from other players.",
            ],
          ],
        },
        {
          items: ["maps/prairie"],
          civs: [],
          diff: [
            [
              "buff",
              "The starting Gold Mine is now large instead of small (reverted).",
            ],
          ],
        },
        {
          items: ["maps/snake-river"],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed an issue in free-for-all where not all bridges would spawn.",
            ],
          ],
        },
        {
          items: ["maps/socotra"],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed an issue where static Sacred Sites & Relics would fail to spawn in free-for-all.",
            ],
            [
              "change",
              "Sacred Sites in larger player counts have been moved slightly apart from each other.",
            ],
          ],
        },
        {
          items: ["maps/mountain-clearing"],
          civs: [],
          diff: [
            [
              "change",
              "Sacred Sites in larger player counts have been moved slightly apart from each other.",
            ],
          ],
        },
        {
          items: ["maps/sunkenlands"],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed an issue where a group of 7 Deer would spawn in larger map sizes.",
            ],
          ],
        },
        {
          items: ["maps/west-lake"],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed an issue where large segments of the lake were deep water.",
            ],
          ],
        },
        {
          title: "Biomes",
          items: [],
          civs: [],
          diff: [
            [
              "change",
              "Baobab (250 Wood) trees no longer spawn around player bases.",
            ],
            [
              "fix",
              "Fixed an issue where circular large stealth terrains would not spawn.",
            ],
            [
              "fix",
              "Fixed an issue where large groups of Deer (10) would fail to spawn in Black Sands, Greek Island, and Tundra Summer Biomes.",
            ],
          ],
        },
      ],
    },
    {
      title: "The Crucible",
      civs: [],
      changes: [
        {
          title: "Design Update / Rework",
          items: [],
          civs: [],
          diff: [
            [
              "change",
              "Updated Boon Rarities: Panic Button (Epic → Standard), Supremacy (Epic → Cursed), Growth Fund (Standard → Epic), Permanent Garrison (Standard → Epic).",
            ],
            [
              "buff",
              "Boss unit health now scales more rapidly with each difficulty level.",
            ],
            [
              "buff",
              "Boss units now gain additional health scaling in Castle and Imperial Age.",
            ],
            [
              "buff",
              "Boss unit damage now also scales in Castle and Imperial Age.",
            ],
            ["buff", "Boss unit size increased."],
          ],
        },
        {
          title: "Balance",
          items: [],
          civs: [],
          diff: [
            [
              "buff",
              "Boggy Ground now only applies its debuff to enemy units. Armor corrosion of -1 armor added.",
            ],
            [
              "buff",
              "Burgage Lords House cost increase reduced from 25 → 15 Wood.",
            ],
            ["buff", "Lighter Cavalry attack damage increased from +2 → +4."],
            [
              "nerf",
              "Cavalry Hero aura health buff reduced from 40% → 35%.",
            ],
            [
              "buff",
              "Quality over Quantity bonus increased from 150% → 200%. Also now applies to bonus damage.",
            ],
            [
              "buff",
              "Supremacy immediately grants Elite Man-at-arms on selection.",
            ],
            [
              "buff",
              "Training Dummies now explode on death, dealing damage.",
            ],
            [
              "nerf",
              "Fast Expand bonus reduced from 75% cheaper Town Centers → 60% cheaper.",
            ],
            [
              "buff",
              "Handy Cannons now deal significantly more pierce damage and hit more targets.",
            ],
            [
              "buff",
              "Thorny Economics health bonus increased from +100% → +150%.",
            ],
            [
              "nerf",
              "Giant Nest of Bees Reload time increased from 4 to 8 seconds.",
            ],
          ],
        },
        {
          title: "Bugfixes",
          items: [],
          civs: [],
          diff: [
            [
              "fix",
              "In Crucible, the Golden Horde’s Building Carts can no longer unpack into docks on maps where naval is disabled.",
              ["gol"],
            ],
            [
              "fix",
              "In Crucible, Smite now strikes units fully randomly within the casting area.",
            ],
            [
              "fix",
              "In Crucible, the Forward Outposts 4 Perk no longer provides Cannons to Templar Outposts, Springalds are granted instead.",
              ["kt"],
            ],
            [
              "fix",
              "Capturable Champions now properly benefit from Infinitry and Last Stand Boons.",
            ],
            [
              "fix",
              "Fixed an issue where some heavy cavalry units did not benefit from the Vulnerability boon.",
            ],
          ],
        },
      ],
    },
    {
      title: "Balance & Bugfixes",
      subtitle: "General Changes & Bugfixes",
      civs: [],
      changes: [
        {
          items: ["units/villager"],
          civs: [],
          diff: [
            [
              "fix",
              "Villagers returning to work from the Town Center now accept shift-click queued commands.",
            ],
          ],
        },
        {
          items: [],
          civs: [],
          diff: [
            [
              "fix",
              "Relics will no longer be destroyed if deposited into a building just as it is destroyed.",
            ],
            [
              "fix",
              "Fixed an issue where switching to attacking a unit just after throwing a torch will cause a torch to be thrown at the enemy unit.",
            ],
          ],
        },
        {
          items: ["units/scout"],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed an issue where Scouts attempting to drop a carcass can sometimes fail.",
            ],
          ],
        },
      ],
    },
    {
      title: "Balance & Bugfixes",
      subtitle: "All Civilizations",
      civs: [],
      changes: [
        {
          items: ["buildings/town-center", "buildings/capital-town-center"],
          civs: [],
          diff: [
            [
              "nerf",
              "Town Center construction time increased from 150 → 165 seconds.",
            ],
          ],
        },
        {
          items: ["units/battering-ram"],
          civs: [],
          diff: [["buff", "Ram health increased from 370 → 410."]],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          items: ["technologies/grand-bazaar", "units/trade-ship"],
          civs: ["ab"],
          diff: [
            [
              "fix",
              "Fixed a bug which caused the Trade Ships’ extra resources from Grand Bazaar to be calculated incorrectly.",
            ],
          ],
        },
        {
          items: [
            "technologies/city-planning",
            "buildings/lumber-camp",
            "buildings/mining-camp",
          ],
          civs: ["ab"],
          diff: [
            [
              "buff",
              "The City Planning health bonus is now applied to Lumber Camps and Mining Camps within influence.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [
            [
              "nerf",
              "Cistern gather rate aura reduced from 26% → 24% at water level 5.",
            ],
          ],
        },
        {
          items: ["technologies/teardrop-shields"],
          civs: ["by"],
          diff: [
            [
              "nerf",
              "Teardrop Shields cost increased from 100 Food 250 Gold → 150 Food 350 Gold.",
            ],
          ],
        },
        {
          items: ["buildings/golden-horn-tower"],
          civs: ["by"],
          diff: [
            [
              "nerf",
              "Golden Horn Tower production speed reduced by 10%.",
            ],
          ],
        },
        {
          items: ["buildings/cistern-of-the-first-hill"],
          civs: ["by"],
          diff: [
            [
              "buff",
              "Cistern of the First Hill cooldown per unit reduced from 45 seconds → 30 seconds.",
            ],
          ],
        },
        {
          items: ["units/cheirosiphon"],
          civs: ["by"],
          diff: [
            ["buff", "Cheirosiphon health increased from 310 → 330."],
          ],
        },
        {
          items: ["units/dromon"],
          civs: ["by", "mac"],
          uionly: true,
          diff: [
            [
              "change",
              "Byzantine and Macedonian Dromons are now correctly labelled as “Massive Ship” instead of “Springald Ship”.",
            ],
          ],
        },
        {
          items: [
            "units/royal-knight",
            "technologies/royal-bloodlines",
            "technologies/biology",
          ],
          civs: ["by"],
          diff: [
            [
              "fix",
              "Mercenary Royal Knights no longer lose their Royal Bloodlines after researching Biology.",
            ],
          ],
        },
        {
          items: [
            "units/varangian-guard",
            "abilities/ability-varangian-berserking",
          ],
          civs: ["by"],
          diff: [
            [
              "fix",
              "Fixed an issue causing the Byzantine Elite Varangian Guard to fail to switch to the axe when the Berserking ability is used.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["units/imperial-official"],
          civs: ["ch"],
          diff: [
            [
              "nerf",
              "Imperial Officials can no longer supervise points of interest.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["buildings/wynguard-palace", "units/wynguard-army"],
          civs: ["en"],
          uionly: true,
          diff: [
            [
              "fix",
              "Wynguard Armies no longer display incorrect populations in the score screen.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Golden Horde",
      civs: ["gol"],
      changes: [
        {
          items: ["technologies/khan-and-torguuds"],
          civs: ["gol"],
          diff: [
            [
              "nerf",
              "Discount on Khan and Torguuds reduced from 20% → 15%.",
            ],
            [
              "nerf",
              "Khan and Torguud increased health reduced from +30 → +25.",
            ],
          ],
        },
        {
          items: ["technologies/muscovy-yasak"],
          civs: ["gol"],
          diff: [
            [
              "buff",
              "Muscovy Yasak wood reduction per Heavy Infantry or Heavy Cavalry on the field increased from 2 → 3.",
            ],
          ],
        },
        {
          items: [
            "technologies/increased-supplies",
            "technologies/building-carts",
          ],
          civs: ["gol"],
          diff: [
            [
              "fix",
              "Fixed an issue causing the Increased Supplies technology to not apply correctly to Military Buildings constructed from Building Carts.",
            ],
          ],
        },
        {
          items: ["technologies/building-carts"],
          civs: ["gol"],
          diff: [
            [
              "fix",
              "Fixed an issue where cancelling a Building Cart when unpacking could cause the building to become invisible.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["units/prelate"],
          civs: ["hr"],
          diff: [
            [
              "buff",
              "Prelate Inspiration gather rate increased from 35% → 40%.",
            ],
          ],
        },
        {
          items: ["technologies/inspired-warriors"],
          civs: ["hr"],
          diff: [
            [
              "buff",
              "Inspired Warriors effect duration increased from 60 → 90 seconds.",
            ],
          ],
        },
        {
          items: ["units/black-rider"],
          civs: ["hr"],
          diff: [
            ["buff", "Build limit increased from 5 → 6 per active Keep."],
            [
              "buff",
              "Production time reduced from 35 → 30 seconds.",
            ],
          ],
        },
        {
          items: ["units/landsknecht"],
          civs: ["hr"],
          diff: [
            [
              "buff",
              "Landsknecht cost reduced from 60 Food 100 Gold → 50 Food 100 Gold.",
            ],
          ],
        },
        {
          items: ["buildings/dock"],
          civs: ["hr"],
          diff: [
            [
              "fix",
              "Relics that are deposited in Docks will no longer be lost if the Dock is destroyed.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["units/shinobi", "abilities/ability-sabotage"],
          civs: ["ja"],
          diff: [
            [
              "nerf",
              "Shinobi units can no longer sabotage Golden Tents or Templar capital Town Centers.",
            ],
          ],
        },
        {
          items: ["buildings/castle", "buildings/castle-of-the-crow"],
          civs: ["ja"],
          diff: [
            [
              "fix",
              "Fixed an issue which prevented Japanese rocket emplacements from dealing bonus damage to elephants.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Jin Dynasty",
      civs: ["jin"],
      changes: [
        {
          items: ["units/iron-pagoda"],
          civs: ["jin"],
          diff: [
            [
              "buff",
              "Base damage increased from 16 → 17. Base health increased from 200 → 210.",
            ],
            [
              "buff",
              "Veteran damage increased from 20 → 21. Health increased from 250 → 255.",
            ],
            [
              "buff",
              "Elite damage increased from 23 → 24. Health increased from 290 → 295.",
            ],
            [
              "buff",
              "Far-range area damage increased from 15% → 20%.",
            ],
            [
              "buff",
              "Damage impact time improved from 0.75 → 0.5 seconds.",
            ],
          ],
        },
        {
          items: ["units/bed-crossbow"],
          civs: ["jin"],
          diff: [
            [
              "buff",
              "Feudal Age: Damage increased from 8 → 10, bonus damage vs melee infantry increased from 4 → 6, health increased from 85 → 90.",
            ],
            [
              "buff",
              "Veteran: Damage increased from 10 → 11, bonus damage vs melee infantry increased from 4 → 6, melee armor increased from 0 → 1.",
            ],
            [
              "buff",
              "Elite: Damage increased from 13 → 14, bonus damage vs melee infantry increased from 5 → 7, health increased from 110 → 115, melee armor increased from 0 → 2.",
            ],
          ],
        },
        {
          items: [],
          civs: ["jin"],
          uionly: true,
          diff: [
            [
              "change",
              "Updated the Selection Card Art background for the Jin Dynasty.",
            ],
          ],
        },
        {
          items: ["technologies/mengan-mouke-emplacement"],
          civs: ["jin"],
          diff: [
            [
              "fix",
              "Meng’an Mouke Defenders will now properly spawn from coastal Tributary States.",
            ],
          ],
        },
        {
          items: [
            "technologies/specialized-pick",
            "technologies/shaft-mining",
            "units/mounted-villager",
          ],
          civs: ["jin"],
          diff: [
            [
              "fix",
              "Specialized Pick and Shaft Mining now properly increase the Mounted Villager’s Gold gather rate.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Knights Templar",
      civs: ["kt"],
      changes: [
        {
          items: ["buildings/fortress"],
          civs: ["kt"],
          diff: [
            [
              "nerf",
              "Fortress cost increased from 300 Gold 600 Stone → 350 Gold 650 Stone.",
            ],
          ],
        },
        {
          items: ["technologies/knights-hospitaller"],
          civs: ["kt"],
          diff: [
            [
              "nerf",
              "Bonus worker movement speed reduced from 10% → 8%.",
            ],
            [
              "nerf",
              "Bonus worker health reduced from 30% → 25%.",
            ],
          ],
        },
        {
          title: "Landscape Preservation",
          items: [],
          civs: ["kt"],
          diff: [
            [
              "nerf",
              "Castle Age bonus Wood gather rate reduced from +20% → +15%.",
            ],
            [
              "nerf",
              "Imperial Age bonus Wood gather rate reduced from +20% → +15%.",
            ],
          ],
        },
        {
          items: ["units/condottiero"],
          civs: ["kt"],
          diff: [
            [
              "fix",
              "Fixed a bug which prevented the Condottiero from taking damage as a heavy unit.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Macedonian Dynasty",
      civs: ["mac"],
      changes: [
        {
          items: ["buildings/grand-winery"],
          civs: ["mac"],
          diff: [
            [
              "buff",
              "Improved Food gather rate increased from 30% → 35%.",
            ],
            [
              "buff",
              "Silver generation per garrisoned Relic increased from 80 → 100.",
            ],
          ],
        },
        {
          items: [
            "buildings/imperial-hippodrome",
            "units/hippodrome-horseman",
            "units/hippodrome-riddari",
          ],
          civs: ["mac"],
          diff: [
            [
              "nerf",
              "Champion Horseman spawn time increased from 120 → 130 seconds.",
            ],
            [
              "nerf",
              "Champion Riddari spawn time increased from 195 → 205 seconds.",
            ],
          ],
        },
        {
          items: ["buildings/golden-horn-tower"],
          civs: ["mac"],
          diff: [
            [
              "nerf",
              "Golden Horn Tower crossbowman production time increased from 112 → 135 seconds.",
            ],
          ],
        },
        {
          items: [
            "buildings/cistern-of-the-first-hill",
            "abilities/ability-cisterns-favor",
          ],
          civs: ["mac"],
          diff: [
            [
              "buff",
              "Mills now generate Food when affected by Cistern’s Favor.",
            ],
            [
              "buff",
              "Cistern’s Favor accrual time improved from 90 → 60 seconds.",
            ],
            [
              "buff",
              "Increased maximum number of Cistern’s Favor charges from 9 → 99.",
            ],
          ],
        },
        {
          items: ["units/cheirosiphon"],
          civs: ["mac"],
          diff: [
            ["buff", "Cheirosiphon health increased from 310 → 330."],
          ],
        },
        {
          items: ["units/varangian-guard"],
          civs: ["mac"],
          diff: [
            [
              "nerf",
              "Early Varangian Guard health reduced from 120 → 115.",
            ],
          ],
        },
        {
          items: ["buildings/palatine-school", "units/cataphract"],
          civs: ["mac"],
          diff: [
            [
              "nerf",
              "Cataphract batch production time increased from 20 → 25 seconds.",
            ],
            [
              "nerf",
              "Cataphract batch cost increased from 750 Silver → 780.",
            ],
          ],
        },
        {
          items: [
            "buildings/cistern-of-the-first-hill",
            "abilities/ability-cisterns-favor",
          ],
          civs: ["mac"],
          uionly: true,
          diff: [
            [
              "change",
              "Added a remappable hotkey for the Cistern’s Favor hotkey.",
            ],
          ],
        },
        {
          items: ["technologies/roman-fire", "units/springald"],
          civs: ["mac"],
          diff: [
            [
              "fix",
              "Roman Fire upgrade no longer gives Macedonian Springalds an additional 0.5 range.",
            ],
          ],
        },
        {
          items: [
            "buildings/cistern-of-the-first-hill",
            "abilities/ability-cisterns-favor",
          ],
          civs: ["mac"],
          uionly: true,
          diff: [
            [
              "change",
              "Cistern’s Favor resource production now appears in player resources increment.",
            ],
          ],
        },
        {
          items: ["buildings/imperial-hippodrome"],
          civs: ["mac"],
          diff: [
            [
              "fix",
              "Fixed an exploit which allowed players to train an infinite number of Hippodrome Champions when playing with keyboard and mouse on console.",
            ],
          ],
        },
        {
          items: ["buildings/runestones"],
          civs: ["mac"],
          uionly: true,
          diff: [
            [
              "fix",
              "Runestones no longer overwrite Line Formation when playing on console using keyboard and mouse.",
            ],
          ],
        },
        {
          items: ["units/hippodrome-riddari", "buildings/runestones"],
          civs: ["mac"],
          diff: [
            [
              "fix",
              "Fixed an issue which prevented the Champion Riddari from using Runestones.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: [
            "buildings/grand-fulani-corral",
            "buildings/cattle-ranch",
          ],
          civs: ["ma"],
          diff: [
            [
              "nerf",
              "Fulani Corral Food generation per Cattle reduced from 18 Food → 16 Food.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: [
            "buildings/deer-stones",
            "buildings/the-silver-tree",
            "buildings/kurultai",
            "buildings/steppe-redoubt",
            "buildings/the-white-stupa",
            "buildings/khaganate-palace",
          ],
          civs: ["mo"],
          diff: [
            [
              "buff",
              "Landmark movement speed increased from 0.75 → 0.9.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["units/gilded-landsknecht"],
          civs: ["od"],
          diff: [
            [
              "buff",
              "Gilded Landsknecht cost reduced from 120 Food 200 Gold → 100 Food 200 Gold.",
            ],
          ],
        },
        {
          items: [
            "units/gilded-crossbowman",
            "technologies/incendiary-arrows",
          ],
          civs: ["od"],
          diff: [
            [
              "fix",
              "Fixed an issue where the Gilded Crossbowman would have slower attack speed against buildings than its default attack after researching Incendiary Arrows.",
            ],
          ],
        },
        {
          items: ["buildings/university"],
          civs: ["od"],
          diff: [
            [
              "fix",
              "Fixed an issue which caused Order of the Dragon universities to grant population space.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          items: [
            "buildings/barracks",
            "buildings/archery-range",
            "buildings/stable",
            "buildings/siege-workshop",
            "buildings/blacksmith",
            "buildings/university",
            "buildings/dock",
          ],
          civs: ["ot"],
          diff: [
            [
              "nerf",
              "Building discount reduced from 40% → 30%.",
            ],
          ],
        },
        {
          items: ["units/janissary"],
          civs: ["ot"],
          diff: [
            [
              "nerf",
              "Bonus damage vs Cavalry reduced from 11 → 10.",
            ],
            [
              "nerf",
              "Elite bonus damage vs Cavalry reduced from 13 → 12.",
            ],
          ],
        },
        {
          items: ["units/sipahi"],
          civs: ["ot"],
          diff: [
            [
              "nerf",
              "Sipahi attack range reduced from 0.75 → 0.6 tiles.",
            ],
          ],
        },
        {
          items: ["buildings/sultanhani-trade-network"],
          civs: ["ot"],
          diff: [
            [
              "buff",
              "Sultanhani Trade Network Gold generation increased from 26 → 28 per garrisoned Trader.",
            ],
          ],
        },
        {
          items: ["technologies/field-work"],
          civs: ["ot"],
          diff: [
            [
              "nerf",
              "Dark Age healing rate reduced from 1 to 0.5 health per second.",
            ],
            [
              "nerf",
              "Feudal Age healing rate reduced from 1 to 0.8 health per second (Castle Age & Imperial Age unchanged at 2 and 3 health per second respectively).",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["units/spearman"],
          civs: ["ru"],
          uionly: true,
          diff: [
            [
              "change",
              "Rus Veteran and Elite Spearman now use a different weapon so that it is easier to distinguish them as Spearman.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Sengoku Daimyo",
      civs: ["sen"],
      changes: [
        {
          items: ["units/yatai"],
          civs: ["sen"],
          diff: [
            [
              "buff",
              "Yatai Food Trader spawn requirement reduced from 250 Food → 215 Food.",
            ],
          ],
        },
        {
          items: ["units/ozutsu"],
          civs: ["sen"],
          diff: [
            [
              "buff",
              "Early Ozutsu: Health increased from 130 → 140.",
            ],
            [
              "buff",
              "Early Ozutsu: Damage increased from 22 → 24.",
            ],
            [
              "buff",
              "Early Ozutsu: Bonus damage vs buildings increased from 70 → 80.",
            ],
          ],
        },
        {
          items: ["buildings/castle-of-the-crow"],
          civs: ["sen"],
          uionly: true,
          diff: [
            [
              "change",
              "Updated the text on the Sengoku Castle of the Crow landmark to mention it only applies to ranged siege units.",
            ],
          ],
        },
        {
          items: ["buildings/castle", "buildings/castle-of-the-crow"],
          civs: ["sen"],
          diff: [
            [
              "fix",
              "Fixed an issue which prevented Sengoku Daimyo rocket emplacements from dealing bonus damage to elephants.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Tughlaq Dynasty",
      civs: ["tug"],
      changes: [
        {
          items: ["units/raider-elephant"],
          civs: ["tug"],
          uionly: true,
          diff: [
            [
              "change",
              "Raider Elephants are significantly less trumpety when moving around.",
            ],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Zhu Xi's Legacy",
      civs: ["zx"],
      changes: [
        {
          items: ["buildings/jiangnan-tower"],
          civs: ["zx"],
          diff: [
            [
              "nerf",
              "Jiangnan Tower resources-spent requirement for the first army spawn increased from 2200 → 2400 resources.",
            ],
            [
              "nerf",
              "Jiangnan Tower resources-spent cap increased from 8200 → 8400 resources.",
            ],
          ],
        },
        {
          items: [
            "technologies/advanced-administration",
            "units/imperial-official",
          ],
          civs: ["zx"],
          diff: [
            [
              "buff",
              "The Advanced Administration upgrade now properly increases the Imperial Official build limit.",
            ],
          ],
        },
        {
          items: ["units/imperial-official"],
          civs: ["zx"],
          diff: [
            [
              "nerf",
              "Imperial Officials can no longer supervise points of interest.",
            ],
          ],
        },
      ],
    },
  ],
};
