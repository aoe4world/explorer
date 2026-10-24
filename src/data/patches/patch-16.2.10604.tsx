import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-16-2-10604",
  buildId: "16.2.10604",
  name: "Patch 16.2.10604",
  season: 13,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-16-2-10475/",
  summary: `With this one, we’re addressing a number of balance issues and bugs with previously released maps, as well as continuing to balance our civilizations, with a special focus on the Jin Dynasty.`,
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2026/05/AoE_IV_Update_Festival-1080x608.webp)

Happy May to our *Age of Empires IV* community, and thanks for all of your feedback after our recent update and patch. With this one, we’re addressing a number of balance issues and bugs with previously released maps, as well as continuing to balance our civilizations, with a special focus on the Jin Dynasty.

In addition to these changes, starting today, you’ll be able to swap between the Keyboard and Mouse and Controller User Interfaces (UI) on PC, including using controller-specific automation tools like the Villager Priority System when using the Controller UI. Not only that, but these changes also allow for more accessible play on the Steam Deck and ROG Xbox Ally devices.

Read on to learn more before jumping in game!

---

Thanks again to our amazing community members, all of whom have helped to make *Age of Empires* what it is today!

—The *Age of Empires* Team
  `,
  date: new Date("2026-06-01T21:23:07Z"),
  sections: [
    {
      title: "Gameplay",
      subtitle: "Build Spotlight",
      civs: [],
      changes: [
        {
          title: "Controller UI on PC",
          items: [],
          civs: [],
          uionly: true,
          diff: [
            ["change", "Starting with this patch, you can now switch between the standard PC mouse and keyboard UI and the controller UI on Steam or Microsoft Store, including access to controller-specific features like the Site Menu System and Villager Priority System."],
            ["change", "Optimized player experience for certain handheld devices including Steam Deck, ROG Xbox Ally, ROG Xbox Ally X, ASUS ROG Ally, and ASUS ROG Ally X (limited to 4 players total)."],
          ],
        },
        {
          title: "Campaign",
          items: [],
          civs: [],
          diff: [
            ["change", "Reduced the use of the attack horn sound effect in several campaign missions."],
            ["fix", "Fixed an issue where the player could build multiple instances of Landmarks in several campaign missions."],
            ["fix", "Fixed an exploit in the Northern Expedition mission where players could avoid enemy encounters by completing the objectives out of order."],
            ["change", "Adjusted timings for enemy attacks in the Central Plains mission."],
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
            ["change", "Sheep distribution has been tuned to spawn mainly around player bases and only sparsely around the neutral parts of the map on Oasis, Nagari, Flankwoods, Rocky River, High View, Carmel, Socotra, and Hill and Dale."],
            ["change", "Herbalist hut and Ancient Stele POIs were added to the distribution attributes and can now be used by the modding community for custom generated maps."],
          ],
        },
        {
          items: ["maps/socotra"],
          civs: [],
          diff: [
            ["change", "Herbalist-Hut Point of Interest added, and will spawn at the center of the map by the boar."],
            ["fix", "Fixed a bug where the map could have spawned with its center flooded."],
            ["fix", "Fixed an issue where the island could spawn with an irregular shape favoring one faction or limiting the other."],
          ],
        },
        {
          items: ["maps/dry-arabia"],
          civs: [],
          diff: [
            ["fix", "Neutral markets now spawn mirrored / flipped in a symmetrically correct way."],
            ["change", "Neutral Markets can no longer spawn in the safe area between the player’s TC to the nearest map corner (“behind” the player) in 1v1s."],
            ["nerf", "The number of neutral sheep in 1v1s has been reduced from 10 to 6."],
          ],
        },
        {
          items: ["maps/nagari"],
          civs: [],
          diff: [
            ["change", "The central lake is now generated more symmetrically with similar distance to the edge of the map on both sides."],
            ["fix", "Fixed an issue where one player would have less starting territory around their base compared to the opponent."],
            ["fix", "Fixed an issue where too many mountains would spawn on one side of the map."],
            ["fix", "Fixed an issue where the starting pond would “spill” across the map."],
            ["fix", "Fixed an issue where fish would spawn outside the water and inside the mountains."],
          ],
        },
        {
          items: ["maps/carmel"],
          civs: [],
          diff: [
            ["fix", "Fixed an issue where sometimes all deer would spawn only on one side of the map."],
            ["nerf", "Total amount of neutral deer has been slightly decreased."],
            ["buff", "Total amount of tiny neutral gold mines increased."],
          ],
        },
        {
          items: ["maps/flankwoods"],
          civs: [],
          diff: [
            ["nerf", "All starting gold deposits in player bases have been reduced from small to tiny deposits."],
            ["fix", "Boars now consistently spawn in the neutral zone in all ranked team game configurations."],
            ["fix", "Starting resources in 1v1 spawn more consistently."],
          ],
        },
        {
          items: ["maps/gorge"],
          civs: [],
          diff: [
            ["fix", "Fixed an issue in team games where large golds often spawned in a line close to each other and closer to one team more than the other."],
            ["fix", "Fixed an issue where gold, trees, or stone could rarely spawn in the lower path between the teams."],
          ],
        },
        {
          items: ["maps/enlightened-horizon"],
          civs: [],
          diff: [
            ["fix", "Fixed a bug where one player would have one extra relic on their side of the map in 1v1."],
          ],
        },
        {
          items: ["maps/hill-and-dale"],
          civs: [],
          diff: [
            ["fix", "Forests can no longer form a “Wall” dividing the map into 2 through the center."],
          ],
        },
        {
          items: ["maps/high-view"],
          civs: [],
          diff: [
            ["fix", "Fixed a bug where the 2nd deer packs would frequently fail to spawn."],
            ["fix", "The 2nd deer pack is now set to spawn before the stealth woodlines at the bottom of the player’s starting “hill.”"],
          ],
        },
        {
          items: ["maps/oasis"],
          civs: [],
          diff: [
            ["change", "Boars and sacred sites were moved out of the central clearing and into the outer neutral zone."],
            ["change", "Deep fish no longer spawn at the central pond."],
            ["fix", "Relics can no longer spawn trapped in the center of the map."],
          ],
        },
        {
          items: ["maps/prairie"],
          civs: [],
          diff: [
            ["change", "Players’ starting resources now have a more consistent distance from the players."],
            ["nerf", "The starting gold deposit has decreased from a large to a small (4k) deposit."],
            ["nerf", "The starting stone deposit has decreased from large to small deposit."],
          ],
        },
        {
          items: ["maps/waterholes"],
          civs: [],
          diff: [
            ["change", "Decreased the size of the ponds."],
            ["change", "Forests are more evenly distributed on the map, creating a more open environment."],
            ["buff", "Added small groups of huntable animals to the center of the map."],
          ],
        },
        {
          items: ["maps/haywire"],
          civs: [],
          diff: [
            ["change", "Drastically increased the forest clearings to reach the outside of the map when only two players were present."],
          ],
        },
        {
          items: ["maps/wetlands"],
          civs: [],
          diff: [
            ["change", "Forests and ponds are now more evenly distributed across the map."],
            ["change", "The forest coverage has decreased slightly."],
          ],
        },
        {
          items: ["maps/mountain-clearing"],
          civs: [],
          diff: [
            ["nerf", "All gold deposits have been reduced from large to small deposits."],
            ["buff", "Increased the neutral number of huntable animals on the map."],
          ],
        },
        {
          items: ["maps/hideout"],
          civs: [],
          diff: [
            ["change", "Pushed settlements and holy sites closer to the center of the map."],
            ["buff", "Slight increase to the amount of neutral resources."],
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
          items: [],
          civs: [],
          uionly: true,
          diff: [
            ["fix", "Caster mode: the “View Next Player” button now functions properly."],
            ["fix", "Fixed issue where enabling some community event challenges causes the game to be disconnected to the server."],
            ["fix", "PS5 only: fixed an issue that causes the cursor to not be visible when changing the preferred input device from controller to keyboard & mouse."],
          ],
        },
        {
          items: ["units/monk"],
          civs: [],
          uionly: true,
          diff: [
            ["fix", "Fixed an issue where the idle religious unit selection hotkey would not select idle Monks."],
          ],
        },
        {
          items: ["units/nest-of-bees"],
          civs: [],
          diff: [
            ["fix", "Fixed an issue where ranged siege that fire multiple shots would not fire fully when holding position."],
          ],
        },
        {
          items: [],
          civs: [],
          diff: [
            ["fix", "Fixed an issue where units would sometimes not properly chase their target when ordered to attack or attack move."],
            ["fix", "Crucible: Meng’an Mouke Defenders and Mounted Grenadiers are no longer affected by the Quality over Quantity boon."],
          ],
        },
        {
          items: ["buildings/takeda-clan-daimyo-estate"],
          civs: ["sen"],
          uionly: true,
          diff: [
            ["fix", "Takeda Clan now displays the correct icon in the Tech Tree."],
          ],
        },
        {
          items: ["units/khans-hunter", "buildings/archery-range"],
          civs: ["mo"],
          uionly: true,
          diff: [
            ["fix", "The Khan’s Hunter is now correctly connected to the Archery Range in the Mongol Tech Tree."],
          ],
        },
        {
          items: ["units/springald"],
          civs: [],
          diff: [
            ["fix", "Fixed a bug which caused Trade Posts to intercept Springald projectiles."],
          ],
        },
        {
          items: ["units/battering-ram"],
          civs: ["gol"],
          diff: [
            ["fix", "Fixed a sync error caused by Golden Horde’s Battering Ram converted to Beachhead when it tries to find nearby enemies to attack."],
          ],
        },
        {
          items: ["units/gilded-handcannoneer"],
          civs: ["od"],
          uionly: true,
          diff: [
            ["fix", "The tech tree for the Order of the Dragon now shows the correct Handcannoneer unit."],
          ],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          items: [
            "technologies/city-planning",
            "technologies/siege-directive",
            "technologies/grand-bazaar",
            "technologies/armored-caravans",
            "technologies/spice-roads",
            "buildings/house-of-wisdom",
          ],
          civs: ["ab"],
          diff: [
            ["change", "Trade Wing reworked: Now called the Administrative Wing."],
            ["nerf", "No longer grants 4/5/6 traders upon completion."],
            ["buff", "Now passively provides a +50% bonus to each tier of Golden Age bonuses."],
            ["nerf", "Spice Roads technology removed."],
            ["nerf", "Armored Caravans moved from House of Wisdom to Market; armor reduced from +3 → +2."],
            ["buff", "New Age II technology: City Planning – Identical buildings placed adjacent to each other within Golden Age influence are each granted +8% health and +8% work rate."],
            ["buff", "New Age III technology: Siege Directive – Siege Weapons deal +25% bonus damage and are field-constructed 50% faster."],
            ["change", "Grand Bazaar moved from Castle Age to Imperial Age (Age IV)."],
          ],
        },
        {
          items: ["technologies/algebra", "technologies/medical-centers", "buildings/house-of-wisdom", "buildings/keep"],
          civs: ["ab"],
          diff: [
            ["buff", "Culture Wing: New upgrade Algebra replaces Medical Centers. The House of Wisdom generates 3 Food, 3 Wood, and 2 Gold for each military technology researched."],
            ["nerf", "Medical Centers moved to the Keep, requires Imperial Age, and healing is reduced from 2 → 1."],
          ],
        },
        {
          items: ["units/villager", "units/camel-rider", "units/trader"],
          civs: ["ab"],
          diff: [
            ["change", "Golden Age now has 5 tiers instead of 3: Tier 1 (10 buildings) +15% Villager gather rate; Tier 2 (20 buildings) +20% Construction speed; Tier 3 (30 buildings) +15% Camel Rider damage; Tier 4 (50 buildings) +20% Trader income; Tier 5 (75 buildings) +10% Melee infantry damage."],
          ],
        },
      ],
    },
    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          items: ["units/atabeg"],
          civs: ["ay"],
          diff: [
            ["buff", "Atabeg health bonus increased from +20% → +25%."],
          ],
        },
        {
          items: [
            "technologies/feudal-culture-wing-advancement",
            "technologies/castle-culture-wing-advancement",
            "technologies/imperial-culture-wing-advancement",
          ],
          civs: ["ay"],
          diff: [
            ["buff", "Advancement Wing Feudal Age cost reduced from 225 Food 100 Gold → 200 Food 100 Gold."],
            ["buff", "Advancement Wing Castle Age cost reduced from 900 Food 500 Gold → 850 Food 500 Gold."],
            ["buff", "Advancement Wing Imperial Age cost reduced from 1500 Food 750 Gold → 1350 Food 700 Gold."],
          ],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["buildings/golden-horn-tower"],
          civs: ["by"],
          uionly: true,
          diff: [
            ["fix", "The Golden Horn Tower unit production toggle no longer appears when the landmark is selected together with other buildings."],
          ],
        },
        {
          items: ["buildings/olive-grove"],
          civs: ["by"],
          diff: [
            ["nerf", "Olive Grove oil income reduced from 20% → 15% of Food gathered."],
          ],
        },
        {
          items: ["units/cataphract", "abilities/ability-trample", "technologies/numeri"],
          civs: ["by"],
          diff: [
            ["nerf", "Trample Damage reduced from 12 → 10."],
            ["nerf", "Numeri effect reduced from 15% for 12 seconds → 10% for 10 seconds."],
          ],
        },
        {
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [
            ["buff", "Cistern cost reduced from 125 → 100 Stone."],
          ],
        },
        {
          items: ["buildings/mercenary-house"],
          civs: ["by"],
          diff: [
            ["buff", "Mercenary Camp cost reduced from 150 → 100 Wood."],
          ],
        },
        {
          items: ["units/limitanei"],
          civs: ["by"],
          diff: [
            ["buff", "Hardened Limitanei health increased from 100 → 105."],
          ],
        },
        {
          items: ["buildings/imperial-hippodrome", "abilities/ability-triumph"],
          civs: ["by"],
          diff: [
            ["buff", "Imperial Hippodrome: Triumph health regeneration for cavalry increased from 2 → 2.5 per second."],
          ],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["units/fishing-boat", "buildings/imperial-academy"],
          civs: ["ch"],
          diff: [
            ["fix", "Fixed an issue which caused Fishing Ships to drop off significantly more resources to buildings within the Imperial Academy’s influence."],
          ],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["buildings/tower-of-victory"],
          civs: ["de"],
          diff: [
            ["buff", "The Tower of Victory now contains Blacksmith technologies in addition to improving infantry attack speed."],
          ],
        },
        {
          items: ["buildings/compound-of-the-defender"],
          civs: ["de"],
          diff: [
            ["buff", "Compound of the Defender fortification discount improved from 20% → 25%."],
            ["fix", "Fixed a bug which prevented the Compound of the Defender from reducing the cost of emplacements."],
          ],
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["units/wynguard-footman"],
          civs: ["en"],
          uionly: true,
          diff: [
            ["fix", "Fixed a bug causing the Wynguard Footman to be significantly more difficult to select compared to similar units."],
          ],
        },
      ],
    },
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          items: [
            "buildings/college-of-artillery",
            "units/royal-cannon",
            "units/royal-ribauldequin",
            "abilities/ability-artillery-shot",
          ],
          civs: ["fr"],
          diff: [
            ["nerf", "College of Artillery is no longer capable of producing Royal Culverins."],
            ["change", "The Artillery Shot ability is now exclusive to Royal Cannons and is no longer granted to regular Cannons."],
            ["buff", "Now additionally grants Royal Ribauldequins the new ‘Fortify Ribauldequin’ ability: deploys 5 palings and grants +30% range until the Ribauldequin moves."],
            ["buff", "Royal Cannons and Royal Ribauldequins now cost 25% less Gold."],
          ],
        },
      ],
    },
    {
      subtitle: "Golden Horde",
      civs: ["gol"],
      changes: [
        {
          items: ["units/torguud"],
          civs: ["gol"],
          diff: [
            ["nerf", "Torguud health reduced from 220 → 200."],
          ],
        },
        {
          items: ["buildings/stockyard"],
          civs: ["gol"],
          diff: [
            ["nerf", "Stockyard cost increased from 250 Wood → 275 Wood."],
          ],
        },
        {
          items: ["units/kipchak-archer", "technologies/incendiary-arrows"],
          civs: ["gol"],
          diff: [
            ["fix", "Fixed an issue causing Kipchak Archers to have 1 less damage than intended after researching Incendiary Arrows."],
          ],
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["technologies/inspired-warriors"],
          civs: ["hr"],
          diff: [
            ["buff", "Inspired Warriors now also inspires units adjacent to the target in a 0.5 tile radius."],
            ["nerf", "Inspired Warriors damage effect reduced from +15% → +10%."],
          ],
        },
        {
          items: ["buildings/university"],
          civs: ["hr"],
          diff: [
            ["buff", "New civilization bonus: Bursae – Universities provide +30 population space, and University technologies are 10% cheaper."],
          ],
        },
        {
          items: ["technologies/concave-lens", "buildings/university"],
          civs: ["hr"],
          diff: [
            ["buff", "New technology Concave Lens: Available at the University (150 Food 350 Gold), increases the Line of Sight of all units and ships by +2 tiles."],
          ],
        },
      ],
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
          items: ["buildings/lancaster-castle"],
          civs: ["hl"],
          diff: [
            ["buff", "Lancaster Castle now has 8 garrison slots that provide garrison arrows."],
          ],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["units/shinobi", "abilities/ability-shunshin"],
          civs: ["ja"],
          diff: [
            ["buff", "Shinobi Shunshin ability range increased from 4 → 5 tiles."],
          ],
        },
      ],
    },
    {
      subtitle: "Jeanne d’Arc",
      civs: ["je"],
      changes: [
        {
          items: [
            "buildings/college-of-artillery",
            "units/royal-cannon",
            "units/royal-ribauldequin",
            "abilities/ability-artillery-shot",
          ],
          civs: ["je"],
          diff: [
            ["nerf", "College of Artillery is no longer capable of producing Royal Culverins."],
            ["change", "The Artillery Shot ability is now exclusive to Royal Cannons and is no longer granted to regular Cannons."],
            ["buff", "Now additionally grants Royal Ribauldequins the new ‘Fortify Ribauldequin’ ability: deploys 5 palings and grants +30% range until the Ribauldequin moves."],
            ["buff", "Royal Cannons and Royal Ribauldequins now cost 25% less Gold."],
          ],
        },
      ],
    },
    {
      subtitle: "Jin Dynasty",
      civs: ["jin"],
      changes: [
        {
          items: ["buildings/grassland"],
          civs: ["jin"],
          diff: [
            ["buff", "Grassland Horse spawn time reduced from 90 → 75 seconds in Feudal Age."],
          ],
        },
        {
          items: ["units/mounted-villager"],
          civs: ["jin"],
          diff: [
            ["fix", "Jin Mounted Villagers can now correctly gather from all types of shoreline fish."],
            ["fix", "Fixed an issue where Jin could convert and keep mounted villagers as mounted villagers from enemy Jin players. Now correctly converts mounted villagers into villagers as Jin vs Jin."],
          ],
        },
        {
          items: ["buildings/mountain-hall"],
          civs: ["jin"],
          diff: [
            ["fix", "Fixed a bug which caused the Mountain Hall to start anywhere from 0 to 100 Karma upon being constructed; now always starts with 100 Karma."],
          ],
        },
        {
          items: ["units/emissary", "units/monk"],
          civs: ["jin"],
          diff: [
            ["fix", "Fixed an issue with Bribe and Conversion being able to target garrisoned units."],
          ],
        },
        {
          items: ["buildings/great-wall-bastion"],
          civs: ["jin"],
          diff: [
            ["fix", "Fixed an issue which prevented the Great Wall Bastion from being damaged by Bombard, Culverin, or Cannon projectiles at certain angles."],
          ],
        },
        {
          items: ["technologies/mengan-mouke-emplacement", "buildings/outpost"],
          civs: ["jin"],
          diff: [
            ["fix", "Fixed a bug which caused Meng’an Mouke to fail to attack non-aggressive enemies like Monks, Imperial Officials, and packed up siege weapons."],
            ["fix", "Meng’an Mouke now properly spawns for Monk-type units."],
            ["fix", "Meng’an Mouke now properly return to their outpost if there is a Greek Fire patch lingering on the ground but no nearby enemies."],
          ],
        },
        {
          items: ["units/mohe-tribesman", "buildings/grassland", "technologies/incendiary-arrows"],
          civs: ["jin"],
          uionly: true,
          diff: [
            ["fix", "Mohe Tribesman trained from a Grassland now correctly get the fire visual when Incendiary Arrows is researched."],
          ],
        },
        {
          items: ["units/spearman", "technologies/storm-lances"],
          civs: ["jin"],
          diff: [
            ["fix", "Fixed an issue where Jin Spearman that are converted with the Storm Lances technology researched will no longer fire the ranged projectiles after being converted."],
          ],
        },
        {
          items: ["buildings/flower-garden"],
          civs: ["jin"],
          uionly: true,
          diff: [
            ["fix", "The Flower Garden’s VFX are no longer visible to enemies in the fog of war."],
          ],
        },
        {
          items: ["buildings/war-stable"],
          civs: ["jin"],
          uionly: true,
          diff: [
            ["change", "War Stable outskirts visually updated."],
          ],
        },
        {
          items: ["units/mounted-villager"],
          civs: ["jin"],
          uionly: true,
          diff: [
            ["fix", "Fixed an issue which prevented many of the gathering sounds from playing while a Mounted Villager was gathering resources."],
          ],
        },
        {
          items: ["technologies/handcannon-slits"],
          civs: ["jin"],
          uionly: true,
          diff: [
            ["fix", "Handcannon Slits now have the ‘Unique to’ icon."],
          ],
        },
      ],
    },
    {
      subtitle: "Knights Templar",
      civs: ["kt"],
      changes: [
        {
          items: ["technologies/safe-passage"],
          civs: ["kt"],
          diff: [
            ["nerf", "Pilgrim income reduced by ~10% (the cap remains unchanged at 130 Gold if the Pilgrims travel far enough)."],
          ],
        },
      ],
    },
    {
      subtitle: "Macedonian Dynasty",
      civs: ["mac"],
      changes: [
        {
          items: ["buildings/golden-horn-tower"],
          civs: ["mac"],
          uionly: true,
          diff: [
            ["fix", "The Golden Horn Tower unit production toggle no longer appears when the landmark is selected together with other buildings."],
          ],
        },
        {
          items: ["buildings/varangian-warcamp"],
          civs: ["mac"],
          diff: [
            ["nerf", "Varangian Warcamp reinforcement cost changed from 6x → 7x the cost of fallen units."],
          ],
        },
        {
          items: ["buildings/imperial-hippodrome"],
          civs: ["mac"],
          diff: [
            ["nerf", "Hippodrome Champion healing reduced from 1 → 0.6 health per second."],
          ],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["buildings/griot-bara"],
          civs: ["ma"],
          uionly: true,
          diff: [
            ["change", "The Military Festival at the Griot Bara has been renamed to the Production Festival and its description has been updated to more accurately reflect that it affects all units except Traders."],
          ],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["units/mangudai"],
          civs: ["mo"],
          diff: [
            ["buff", "Attack speed cap while Mangudai are moving improved from 1.97 → 1.66."],
          ],
        },
        {
          items: ["units/villager", "buildings/town-center"],
          civs: ["mo"],
          diff: [
            ["buff", "Double Villager production cost reduced from 125 → 120 Stone."],
          ],
        },
        {
          items: ["buildings/ovoo"],
          civs: ["mo"],
          diff: [
            ["buff", "Ovoo Castle Age gather rate increased from 130 → 140."],
            ["buff", "Ovoo Imperial Age gather rate increased from 160 → 170."],
          ],
        },
        {
          items: ["technologies/lightweight-beams-improved", "units/battering-ram", "buildings/siege-workshop"],
          civs: ["mo"],
          diff: [
            ["fix", "Fixed an issue causing the Improved version of the Lightweight Beams technology to quadruple Ram train time from the Siege Workshop."],
          ],
        },
      ],
    },
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["units/gilded-villager"],
          civs: ["od"],
          diff: [
            ["nerf", "Gilded Villager gather rate reduced from 28% → 27%."],
          ],
        },
        {
          items: ["technologies/inspired-warriors"],
          civs: ["od"],
          diff: [
            ["buff", "Inspired Warriors now also inspires units adjacent to the target in a 0.5 tile radius."],
            ["nerf", "Inspired Warriors damage effect reduced from +15% → +10%."],
          ],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          items: ["units/sipahi"],
          civs: ["ot"],
          diff: [
            ["nerf", "Cost increased from 120 Food 40 Wood → 120 Food 45 Wood."],
            ["nerf", "Production time increased from 30 → 31 seconds."],
          ],
        },
        {
          items: ["technologies/anatolian-hills", "units/akinji"],
          civs: ["ot"],
          uionly: true,
          diff: [
            ["fix", "Anatolian Hills and Akinji System are now in the correct locations on the Xbox Vizier radial menu."],
          ],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["buildings/wooden-fortress"],
          civs: ["ru"],
          diff: [
            ["buff", "Wooden Fortress cost reduced from 175 → 150 Wood."],
          ],
        },
        {
          items: ["buildings/hunting-cabin"],
          civs: ["ru"],
          diff: [
            ["buff", "Bounty Food gather rate bonus increased from 5/10/15% → 10/15/20% per tier."],
          ],
        },
      ],
    },
    {
      subtitle: "Tughlaq Dynasty",
      civs: ["tug"],
      changes: [
        {
          items: ["units/ballista-elephant"],
          civs: ["tug"],
          diff: [
            ["buff", "Cost reduced from 300 Food 350 Gold → 250 Food 350 Gold."],
            ["buff", "Train time reduced from 45 → 40 seconds."],
          ],
        },
        {
          items: ["buildings/compound-of-the-defender"],
          civs: ["tug"],
          diff: [
            ["buff", "Compound of the Defender discount increased from 20% → 25%."],
          ],
        },
        {
          items: ["units/fishing-boat"],
          civs: ["tug"],
          diff: [
            ["nerf", "Fishing Ships no longer benefit from the Elephant Economics bonus."],
          ],
        },
      ],
    },
    {
      subtitle: "Zhu Xi's Legacy",
      civs: ["zx"],
      changes: [
        {
          items: ["buildings/shaolin-monastery", "buildings/jiangnan-tower"],
          civs: ["zx"],
          diff: [
            ["fix", "The Shaolin Monastery is now able to connect to the Jiangnan Tower’s influence."],
          ],
        },
      ],
    },
  ],
};
