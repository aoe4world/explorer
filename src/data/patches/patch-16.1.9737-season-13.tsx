import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-16-1-9737-season-13",
  buildId: "16.1.9737",
  name: "Season 13 Update",
  season: 13,
  type: "update",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-update-16-1-9737-and-yue-feis-legacy-dlc-release-preview/",
  summary: `In addition to Age of Empires IV: Yue Fei’s Legacy officially shipping and bringing the Jin Dynasty and a new 8-mission campaign, this update brings quality of life features, balance changes, AI improvements, stability fixes, and a comprehensive calendar for Ranked Season and Event rotations.`,
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2026/04/Update_Festival_AgeIV_1920x1080-1080x608.webp)

Big changes are right around the corner! In addition to [*Age of Empires IV: Yue Fei’s Legacy*](https://www.ageofempires.com/games/age-of-empires-iv/yue-feis-legacy/) officially shipping and bringing the [Jin Dynasty](https://www.ageofempires.com/games/age-of-empires-iv/civilizations/jin-dynasty/) and a new 8-mission campaign with it on May 7th, we will also roll out some great quality of life features as well as balance changes, AI improvements, stability fixes, and more.

With this update, we’re also introducing even more changes to the way Ranked Seasons and Events are managed to allow for more predictability in the future.

Read on to learn more before jumping in game!

---

Thanks again to our amazing community members, all of whom have helped to make *Age of Empires* what it is today!

—The *Age of Empires* Team
  `,
  date: new Date("2026-04-30T19:04:10Z"),
  sections: [
    {
      title: "Gameplay",
      subtitle: "Build Spotlight",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          uionly: true,
          diff: [
            ["change", "New Player Colors: Introduced magenta and dark green."],
            ["change", "New Civilization Tech Tree: The Technology Tree has been updated for all civilizations to provide a clearer overview. Added an option to toggle on Advanced Tooltips, which adds attacks, armor, and health values when hovering a unit or building. Hovering over an ability now shows its cost if it has one."],
          ],
        },
        {
          items: [],
          civs: [],
          diff: [
            ["change", "Random Map & Biome Options: Introduced options to randomly select a map or biome to play on."],
            ["change", "Parties will remain intact once a match has ended so they can more easily get back into a match together."],
            ["change", "End Game and Summary screen load times have been improved, allowing players to progress through the Match End phase much quicker."],
            ["change", "Lobby settings when creating a lobby will be saved once a match has started. When hosting a new lobby, the settings from the most recently hosted lobby will be automatically selected."],
          ],
        },
        {
          title: "Villager Drop-Off Option",
          items: ["units/villager", "units/fishing-boat"],
          civs: [],
          diff: [
            ["change", "Added a new hotkey and ability button for Villagers and Fishing Boats. Villagers that receive this command immediately stop what they are doing, drop off held resources at the closest valid drop-off location, and go back to their current task."],
          ],
        },
        {
          title: "Points of Interest",
          items: [],
          civs: [],
          diff: [
            ["change", "Herbalist Hut: Heals nearby units of the controlling player for 2 health per second."],
            ["change", "Ancient Stele: Contains the technology “Ancient Knowledge,” which increases the health of all current buildings & military units by +5%. This technology can be researched multiple times (costs 400 gold, takes 270 seconds)."],
          ],
        },
        {
          title: "Visual Improvements",
          items: [],
          civs: [],
          diff: [
            ["change", "Building Range indicators are now measured from the center of a building instead of the edge of the structure’s hitbox, more accurately depicting when a target is in range."],
          ],
        },
        {
          title: "AI Update",
          items: [],
          civs: [],
          diff: [
            ["buff", "AI players will now employ more efficient tactics to pursue win conditions."],
            ["buff", "AI players will now scout more efficiently."],
            ["buff", "When playing in a team, AI players will now coordinate in defending their controlled Sacred Sites."],
            ["fix", "Fixed an issue where AI villagers would travel great distances to gather from shoreline fish when playing on river maps."],
            ["buff", "AI players will now avoid building naval military when it isn’t necessary to do so."],
            ["fix", "Fixed an issue that caused the AI to produce more Springalds vs armies of siege units rather than armies of melee infantry."],
            ["buff", "AI religious units are now taking less dangerous paths towards relics."],
            ["buff", "Macedonian AI players’ Varangian units will now use their unique abilities."],
            ["buff", "The AI player will now build and use the Koka Township landmark when playing as the Sengoku civilization."],
            ["buff", "Tughlaq Dynasty AI players will now purchase Springald and Cannon Emplacement upgrades for the Tughlaqabad Forts."],
            ["buff", "Tughlaq Dynasty AI players can now have war elephants trample their enemies."],
            ["buff", "Tughlaq Dynasty AI players will now utilize their Bhakkar and Jalor governor bonuses more effectively."],
            ["buff", "Golden Horde AI players will now take less time to age up, train Bombards, and purchase upgrades for their ovoo gather rates."],
          ],
        },
        {
          title: "Hotkeys & UI",
          items: [],
          civs: [],
          uionly: true,
          diff: [
            ["fix", "Xbox Keyboard and Mouse (KBM) Fully Remappable mode now works correctly."],
            ["fix", "Fixed main menu stuttering and blocking input when certain USB devices are plugged into the system."],
            ["change", "The civilization drop down menu in a lobby now has larger flags."],
            ["fix", "Fixed an issue that causes the online matchmaking migration banner text to appear regardless of whether there is a new build."],
            ["fix", "Fixed an issue on PS5 where user settings may reset due to corrupted downloads from PS+ cloud saves."],
            ["fix", "PS5 only: Fixed an issue where the game could crash on the settings screen when switching from keyboard/mouse and controller."],
            ["fix", "Greek localization now correctly uppercases letters and removes accents."],
          ],
        },
        {
          items: ["buildings/mount-lu-academy"],
          civs: ["zx"],
          uionly: true,
          diff: [
            ["fix", "Mount Lu Academy is no longer selected with the “Select All Keeps” hotkey."],
          ],
        },
        {
          items: ["buildings/guild-hall"],
          civs: ["fr"],
          uionly: true,
          diff: [
            ["fix", "Guild Hall is now selected with “Select All Military Buildings” hotkeys in campaigns."],
          ],
        },
      ],
    },
    {
      title: "Maps",
      civs: [],
      changes: [
        {
          title: "New Maps",
          items: ["maps/ascension"],
          civs: [],
          diff: [
            ["buff", "New Map: A river cascades down a steep hill. At the top of the hill lie riches in gold and stone. Teams face off across the river from each other and must work their way up the hill for access to gold, stone, trade and sacred sites. The river is too deep at the bottom to cross but is passable higher up the hill."],
          ],
        },
        {
          items: ["maps/fangs"],
          civs: [],
          diff: [
            ["buff", "New Map: Jagged mountains rise up to the sky surrounded by dense woods and a shrouded layer of stealth woods. Penetrate the stealth woods to harvest lumber but beware of the wolves! This mostly open map still provides some opportunity for fortifications."],
          ],
        },
        {
          items: ["maps/snake-river"],
          civs: [],
          diff: [
            ["buff", "New Map: A mighty river snakes around opposing teams creating protection and opportunity. Use the river strategically to gather fish, help defend your base, and grant you access to resources."],
          ],
        },
        {
          items: ["maps/west-lake"],
          civs: [],
          diff: [
            ["buff", "New Map: A large shallow lake dominates the center of the map. The lake is traversable by foot and at its center lies a difficult to defend sacred site. Docks and ships cannot be built on this map, making control of the center of the map more challenging."],
          ],
        },
        {
          title: "General Map Changes",
          items: [],
          civs: [],
          diff: [
            ["change", "The new DLC maps, as well as Dry Arabia, Baltic, and Gorge feature an updated Sheep distribution which places more sheep near each player’s starting base while leaving a smaller number of neutral sheep across the map."],
            ["change", "Increased the number of map vetoes in Quickmatch to 27."],
          ],
        },
        {
          items: ["maps/baltic"],
          civs: [],
          diff: [
            ["fix", "Fixed a map bug that could cause a crash on Baltic in 2v2 matches with Random Positions selected."],
          ],
        },
        {
          items: ["maps/ocean-gateway"],
          civs: [],
          diff: [
            ["fix", "Berry Bushes and Sacred Sites will no longer block valid Dock construction locations."],
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
          diff: [
            ["change", "Landmarks now have to be fully repaired to regain their sight."],
            ["change", "Sheep can no longer be assigned to building blueprints."],
            ["fix", "Corrected a bug which caused the Ronin to not use voice lines."],
            ["fix", "Fixed multiple crashes specific to console, including one that occurred while viewing match results."],
            ["fix", "Fixed a bug where the camera would become frozen after opening the minimap from a radial menu."],
          ],
        },
        {
          items: ["buildings/monastery", "units/monk"],
          civs: [],
          diff: [
            ["change", "Relics will now keep track of their cooldown when placed in a Monastery instead of refreshing. When removing a relic with a monk, the one which has been in the building for the longest will be removed."],
          ],
        },
        {
          items: ["units/villager", "buildings/town-center"],
          civs: [],
          diff: [
            ["fix", "Villagers in the Forgotten Ruins Point of Interest will no longer be ungarrisoned by the Return All to Work ability at the Town Center."],
          ],
        },
        {
          items: ["units/nest-of-bees", "units/mangonel"],
          civs: ["ch", "zx"],
          diff: [
            ["change", "When playing the Season’s Feast game mode, Chinese and Zhu Xi’s Legacy players will now receive a Nest of Bees instead of a Mangonel."],
          ],
        },
        {
          items: ["buildings/farmhouse"],
          civs: ["ja"],
          diff: [
            ["fix", "Burgage Lords Boon now properly works with Japanese Farmhouses."],
          ],
        },
        {
          items: ["buildings/dock", "units/worker-elephant"],
          civs: ["tug"],
          diff: [
            ["fix", "Docks will no longer attack worker elephants when nearby."],
          ],
        },
      ],
    },
    {
      subtitle: "Points of Interest",
      civs: [],
      changes: [
        {
          title: "Wolf Den Gameplay Update",
          items: [],
          civs: [],
          diff: [
            ["change", "Wolf Dens now only spawn 5 Pack Wolves (previously produced replacement wolves indefinitely)."],
            ["buff", "Wolf Den initial spawn delay reduced from 4 → 3 minutes."],
            ["nerf", "Wolf Den spawn burn bounty reduced from 150 Gold → 50 Gold."],
            ["buff", "Pack Wolves spawned from the Wolf Den now grant 15 Gold when defeated."],
            ["buff", "Additional Wolves spawn increased at health thresholds: at 70% health increased from 2 → 3 Wolves; at 30% health increased from 2 → 5 Wolves."],
            ["change", "Pack Wolves now retaliate to the closest attacker rather than chasing the first enemy they see (behavior similar to Boars)."],
          ],
        },
      ],
    },
    {
      subtitle: "All Civilizations",
      civs: [],
      changes: [
        {
          items: ["buildings/town-center"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 400 Wood 350 Stone → 400 Wood 300 Stone."],
          ],
        },
        {
          items: ["buildings/palisade"],
          civs: [],
          diff: [
            ["buff", "Health increased from 1250 → 1350."],
          ],
        },
        {
          items: ["units/spearman"],
          civs: [],
          diff: [
            ["buff", "Spearwall cooldown reduced from 4 seconds → 0.25 seconds for all Spearman-type units."],
            ["buff", "Elite Spearmen health increased from 130 → 140."],
            ["buff", "Elite Spearmen movement speed increased from 1.25 → 1.3."],
          ],
        },
        {
          items: ["units/springald", "technologies/roller-shutter-triggers"],
          civs: [],
          diff: [
            ["nerf", "Springald no longer benefits from the ranged attack Blacksmith upgrades."],
            ["buff", "Springald damage increased from 14 → 15."],
            ["buff", "Roller Shutter Triggers upgrade now grants +30% attack speed (up from +25%)."],
          ],
        },
        {
          items: ["units/man-at-arms"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 100 Food 20 Gold → 90 Food 20 Gold."],
            ["buff", "Production time reduced from 22.5 → 20.5 seconds."],
          ],
          note: "Civilizations with unique Man-at-Arms are described individually.",
        },
        {
          items: ["units/trader", "units/trade-caravan", "units/monk"],
          civs: [],
          diff: [
            ["buff", "Traders, Pilgrims and Monks are no longer attacked by lone Wolves (Wolf Den Pack Wolves are still aggressive to all units)."],
            ["nerf", "Units that are being attacked but are not attacking an enemy themselves are now counted as “in-combat” for the purposes of reducing Monk healing."],
          ],
          note: "Villagers which are gathering while being attacked will now receive reduced healing.",
        },
        {
          items: ["technologies/silk-bowstrings"],
          civs: [],
          diff: [
            ["buff", "Cost decreased from 300 Wood 700 Gold → 200 Wood 500 Gold."],
            ["nerf", "Bonus range to Archers reduced from 1.5 tiles → 1 tile."],
            ["nerf", "Bonus range to Mounted Archers reduced from 0.8 tiles → 0.5 tiles."],
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
          items: ["units/ghulam"],
          civs: ["ab"],
          diff: [
            ["buff", "Cost reduced from 120 Food 30 Gold → 110 Food 30 Gold."],
            ["buff", "Production time reduced from 26 → 25 seconds."],
          ],
        },
        {
          items: [],
          civs: ["ab"],
          uionly: true,
          diff: [
            ["change", "Golden Age now has a new widget to indicate progression towards the next tier."],
          ],
        },
        {
          items: ["technologies/grand-bazaar", "technologies/spice-roads", "buildings/market"],
          civs: ["ab"],
          diff: [
            ["fix", "Fixed a bug which prevented the player from collecting Food from the Market using the Grand Bazaar technology if Spice Roads had also been researched."],
          ],
        },
      ],
    },
    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          items: ["units/ghulam"],
          civs: ["ay"],
          diff: [
            ["buff", "Cost reduced from 120 Food 30 Gold → 110 Food 30 Gold."],
            ["buff", "Production time reduced from 26 → 25 seconds."],
          ],
        },
        {
          items: ["units/manjaniq"],
          civs: ["ay"],
          diff: [
            ["nerf", "Number of incendiary projectiles reduced from 12 → 10."],
            ["buff", "Incendiary weapon bonus damage increased from 16 → 19."],
            ["nerf", "Area damage range per incendiary projectile reduced from 1.5 tiles → 0.9 tiles."],
          ],
        },
        {
          items: ["units/dervish"],
          civs: ["ay"],
          diff: [
            ["nerf", "Mass Heal reduced from 2 health per second to 1.5 health per second."],
            ["buff", "Mass Heal now scales to 1.75 health per second in Castle Age and 2 in Imperial Age."],
          ],
        },
        {
          items: [],
          civs: ["ay"],
          uionly: true,
          diff: [
            ["change", "Golden Age now has a new widget to indicate progression towards the next tier."],
          ],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["units/limitanei"],
          civs: ["by"],
          diff: [
            ["buff", "Elite Limitanei health increased from 140 → 150."],
            ["buff", "Elite Limitanei movement speed increased from 1.25 → 1.3."],
          ],
        },
        {
          items: ["units/longbowman", "units/keshik", "units/javelin-thrower"],
          civs: ["by"],
          diff: [
            ["nerf", "Mercenary Longbowmen batch size reduced from 5 → 4."],
            ["buff", "Mercenary Longbowmen batch cost reduced from 500 Olive Oil → 420 Olive Oil."],
            ["buff", "Mercenary Keshik batch cost reduced from 400 Olive Oil → 380 Olive Oil."],
            ["buff", "Mercenary Javelin Thrower batch cost reduced from 480 Olive Oil → 460 Olive Oil."],
          ],
        },
        {
          items: ["units/ghulam"],
          civs: ["by"],
          diff: [
            ["buff", "Mercenary Ghulam batch cost reduced from 450 Olive Oil → 420 Olive Oil."],
            ["buff", "Mercenary Ghulam batch production time reduced from 75 → 72 seconds."],
          ],
        },
        {
          items: ["buildings/foreign-engineering-company", "units/royal-cannon", "units/cannon"],
          civs: ["by"],
          diff: [
            ["nerf", "The Royal Cannon has been replaced with the regular Cannon at the Foreign Engineering Company landmark."],
          ],
        },
        {
          items: ["units/varangian-guard"],
          civs: ["by"],
          diff: [
            ["buff", "Cost reduced from 90 Food 40 Gold → 80 Food 40 Gold."],
          ],
        },
        {
          items: ["technologies/mangonel-emplacement"],
          civs: ["by"],
          diff: [
            ["nerf", "Mangonel Emplacement damage reduced from 7 → 6."],
          ],
        },
        {
          items: ["buildings/golden-horn-tower"],
          civs: ["by"],
          diff: [
            ["nerf", "Golden Horn Tower now produces units 15% more slowly."],
          ],
        },
        {
          items: ["technologies/heavy-dromon", "units/dromon"],
          civs: ["by"],
          diff: [
            ["change", "The Heavy Dromon upgrade no longer reduces the cooldown of Man the Sails and instead increases the range of Dromons by +0.5 and their damage by +1."],
          ],
        },
        {
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [
            ["buff", "The Cistern can now select its influence toggle while under construction. If completed before a toggle has been selected, it defaults to the military production toggle."],
          ],
        },
        {
          items: ["buildings/foreign-engineering-company", "technologies/biology", "units/keshik", "units/mangudai", "units/royal-knight"],
          civs: ["by"],
          diff: [
            ["fix", "Fixed an issue that granted Mercenary Keshiks, Mercenary Mangudai, and Mercenary Royal Knights more health than intended after aging up with the Foreign Engineering Company and researching Biology."],
          ],
        },
        {
          items: ["buildings/foreign-engineering-company", "units/nest-of-bees", "technologies/additional-barrels"],
          civs: ["by"],
          diff: [
            ["fix", "Mercenary Nest of Bees trained from the Foreign Engineering Company now benefit from the Additional Barrels technology."],
          ],
        },
        {
          items: ["buildings/foreign-engineering-company", "units/camel-rider", "technologies/camel-handling"],
          civs: ["by"],
          diff: [
            ["fix", "Fixed an issue that prevented the Mercenary Camel Rider from benefiting from the Camel Handling upgrade after aging up with the Foreign Engineering Company."],
          ],
        },
        {
          items: ["buildings/golden-horn-tower", "buildings/mercenary-house", "units/landsknecht", "units/camel-rider"],
          civs: ["by"],
          diff: [
            ["fix", "Fixed an issue which prevented the Landsknecht and Camel Rider from being upgraded to Elite if the Elite Mercenary upgrade was researched from the Golden Horn Tower rather than the Mercenary House."],
          ],
        },
        {
          items: ["buildings/mercenary-house"],
          civs: ["by"],
          uionly: true,
          diff: [
            ["change", "When choosing a Mercenary Contract, the first unit in the contract will be displayed in the foundations of every Mercenary House to indicate which contract has been picked."],
          ],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["units/imperial-official", "units/villager", "units/fishing-boat"],
          civs: ["ch"],
          diff: [
            ["change", "Taxes: No longer deposits 1 Gold each time a Villager drops off regardless of carry amount. Instead, drop-off Taxes are generated at 8% of the total resources dropped off (4% for Fishing Ships)."],
          ],
        },
        {
          items: ["units/fire-lancer"],
          civs: ["ch"],
          diff: [
            ["buff", "Damage increased from 11 → 13."],
            ["buff", "Elite Fire Lancer damage increased from 13 → 16."],
          ],
        },
        {
          items: ["units/grenadier"],
          civs: ["ch"],
          diff: [
            ["buff", "Movement speed increased from 1.125 → 1.25."],
          ],
        },
        {
          items: ["units/palace-guard"],
          civs: ["ch"],
          diff: [
            ["buff", "Cost reduced from 100 Food 25 Gold → 90 Food 25 Gold."],
            ["buff", "Production time reduced from 22.5 → 20.5 seconds."],
          ],
        },
        {
          items: ["buildings/great-wall-gatehouse"],
          civs: ["ch"],
          diff: [
            ["buff", "Attacking with the Great Wall Gatehouse now causes its Nest of Bees to attack that target. Nest of Bees can now be individually selected and commanded to attack."],
          ],
        },
        {
          items: ["units/imperial-official"],
          civs: ["ch"],
          diff: [
            ["fix", "Fixed a bug which allowed more Imperial Officials to be queued than it was possible to train."],
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
            ["fix", "The Tower of Victory now correctly grants +20% attack speed (~5% improvement to attack speed for each infantry unit)."],
          ],
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["units/man-at-arms"],
          civs: ["en"],
          diff: [
            ["nerf", "Call to Arms production time bonus for Men-at-Arms reduced from +50% → +40% faster."],
          ],
        },
        {
          items: ["buildings/the-white-tower"],
          civs: ["en"],
          diff: [
            ["nerf", "Garrison slots reduced from 20 → 15."],
          ],
        },
        {
          items: ["buildings/kings-palace"],
          civs: ["en"],
          diff: [
            ["buff", "The King’s Palace now produces Villagers +10% faster."],
          ],
        },
        {
          items: ["units/longbowman", "abilities/ability-place-palings"],
          civs: ["en"],
          diff: [
            ["buff", "Palings damage now increases from 19 damage to 24 damage in Castle Age and 30 damage in Imperial Age."],
          ],
        },
        {
          items: ["units/longbowman", "abilities/ability-place-palings"],
          civs: ["en"],
          uionly: true,
          diff: [
            ["fix", "Fixed a bug where the Palings description incorrectly stated that it dealt more than 19 damage."],
          ],
        },
      ],
    },
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          items: ["buildings/chamber-of-commerce", "units/trader"],
          civs: ["fr"],
          diff: [
            ["buff", "Free Traders spawned from the Chamber of Commerce are now trained instantly."],
          ],
        },
      ],
    },
    {
      subtitle: "Golden Horde",
      civs: ["gol"],
      changes: [
        {
          items: [],
          civs: ["gol"],
          diff: [
            ["nerf", "Starting Wood reduced from 225 → 200."],
            ["nerf", "Production Edict reduced from +20% → +15% bonus production speed."],
          ],
        },
        {
          items: ["units/man-at-arms"],
          civs: ["gol"],
          diff: [
            ["buff", "Batch cost reduced from 200 Food 40 Gold → 180 Food 40 Gold."],
            ["buff", "Batch train time reduced from 45 seconds → 41 seconds."],
          ],
        },
        {
          items: ["technologies/ovoo-offering"],
          civs: ["gol"],
          diff: [
            ["nerf", "Ovoo Offering bonus stone generation reduced from +30% → +20%."],
          ],
        },
        {
          items: ["technologies/ovoo-ceremony"],
          civs: ["gol"],
          diff: [
            ["nerf", "Ovoo Ceremony bonus stone generation reduced from +30% → +20%."],
          ],
        },
        {
          items: ["buildings/town-center"],
          civs: ["gol"],
          diff: [
            ["buff", "Cost reduced from 850 Wood → 750 Wood to match Mongols."],
          ],
        },
        {
          items: ["technologies/padded-armor"],
          civs: ["gol"],
          diff: [
            ["nerf", "Armor granted by the Padded Armor technology has been reduced from +2 → +1."],
          ],
        },
        {
          items: ["units/scout", "buildings/stable"],
          civs: ["gol"],
          diff: [
            ["nerf", "Scouts trained from Stables now train in a batch of 1 rather than 2."],
          ],
        },
        {
          items: [
            "technologies/archery-range-reinforcements",
            "technologies/barracks-reinforcements",
            "technologies/stables-reinforcements",
          ],
          civs: ["gol"],
          diff: [
            ["fix", "Reinforcements Upgrades now properly apply to newly constructed buildings."],
          ],
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["units/landsknecht"],
          civs: ["hr"],
          diff: [
            ["buff", "Health increased from 85 → 90."],
            ["buff", "Elite Landsknecht health increased from 100 → 105."],
          ],
        },
      ],
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
          items: ["buildings/manor"],
          civs: ["hl"],
          diff: [
            ["buff", "Cost reduced from 225 Wood 100 Stone → 175 Wood 100 Stone."],
          ],
        },
        {
          items: ["units/earls-guard"],
          civs: ["hl"],
          diff: [
            ["buff", "Cost reduced from 100 Food 20 Gold → 90 Food 20 Gold."],
            ["buff", "Production time reduced from 22.5 → 20.5 seconds."],
            ["nerf", "Dagger throw cooldown increased from 15 seconds → 17 seconds."],
          ],
        },
        {
          items: ["buildings/the-white-tower"],
          civs: ["hl"],
          diff: [
            ["nerf", "Garrison slots reduced from 20 → 15."],
          ],
        },
        {
          items: ["buildings/kings-college"],
          civs: ["hl"],
          diff: [
            ["buff", "The King’s College technology discount increased from 15% → 20%."],
          ],
        },
        {
          items: [
            "buildings/lancaster-castle",
            "technologies/muster-the-nobles",
            "technologies/shire-levy",
            "technologies/exact-militia-program",
          ],
          civs: ["hl"],
          diff: [
            ["buff", "Muster the Nobles units spawned increased from 4 Demilancers → 5 Demilancers."],
            ["buff", "Shire Levy units spawned increased from 10 Yeomen → 12 Yeomen."],
            ["buff", "Exact Militia Program units spawned increased from 9 Demilancers, 9 Yeomen, and 9 Earl’s Guards → 10 of each."],
          ],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["units/samurai"],
          civs: ["ja"],
          diff: [
            ["buff", "Cost reduced from 100 Food 30 Gold → 90 Food 30 Gold."],
          ],
        },
        {
          items: ["units/katana-bannerman"],
          civs: ["ja"],
          diff: [
            ["buff", "Cost reduced from 100 Food 30 Gold → 90 Food 30 Gold."],
          ],
        },
        {
          items: ["units/yumi-bannerman"],
          civs: ["ja"],
          diff: [
            ["buff", "Cost reduced from 100 Food 30 Gold → 90 Food 30 Gold."],
          ],
        },
        {
          items: ["units/shinobi"],
          civs: ["ja"],
          diff: [
            ["buff", "Ranged armor increased from 0 → 1."],
          ],
        },
        {
          items: ["buildings/temple-of-equality", "technologies/five-mountain-ministries"],
          civs: ["ja"],
          diff: [
            ["buff", "Five Mountain Ministries technology is now granted immediately when Temple of Equality is constructed."],
          ],
        },
        {
          items: ["abilities/ability-deflective-armor"],
          civs: ["ja"],
          diff: [
            ["nerf", "Deflective Armor cooldown increased from 8 → 15 seconds while out of combat."],
          ],
        },
        {
          items: ["units/shinobi", "abilities/ability-sabotage"],
          civs: ["ja"],
          diff: [
            ["nerf", "Shinobi can no longer use the Sabotage ability on indestructible Points of Interest."],
          ],
        },
        {
          items: ["units/spearman", "technologies/nagae-yari"],
          civs: ["ja"],
          diff: [
            ["fix", "Fixed a bug causing existing Spearmen to lose the Nagae Yari weapon when upgraded to Hardened, Veteran, or Elite."],
          ],
        },
      ],
    },
    {
      subtitle: "Jeanne d’Arc",
      civs: ["je"],
      changes: [
        {
          items: ["units/jeannes-champion"],
          civs: ["je"],
          diff: [
            ["buff", "Cost reduced from 160 Food 40 Gold → 150 Food 40 Gold."],
            ["buff", "Production time reduced from 30 → 28 seconds."],
          ],
        },
        {
          items: ["buildings/chamber-of-commerce", "units/trader"],
          civs: ["je"],
          diff: [
            ["buff", "Free Traders spawned from the Chamber of Commerce are now trained instantly."],
          ],
        },
        {
          items: ["technologies/companion-equipment", "buildings/blacksmith"],
          civs: ["je"],
          diff: [
            ["fix", "Fixed an issue where Jeanne d’Arc would not benefit from the Companion Equipment upgrade if it was researched from the Blacksmith."],
          ],
        },
      ],
    },
    {
      subtitle: "Knights Templar",
      civs: ["kt"],
      changes: [
        {
          items: ["units/condottiero"],
          civs: ["kt"],
          diff: [
            ["buff", "Damage reduction vs gunpowder damage improved from -33% → -50%."],
          ],
        },
        {
          items: ["units/heavy-spearman"],
          civs: ["kt"],
          diff: [
            ["buff", "Elite Heavy Spearman health increased from 170 → 180."],
          ],
        },
      ],
    },
    {
      subtitle: "Macedonian Dynasty",
      civs: ["mac"],
      changes: [
        {
          items: ["buildings/foreign-engineering-company", "units/royal-cannon", "units/cannon"],
          civs: ["mac"],
          diff: [
            ["nerf", "The Royal Cannon has been replaced with the regular Cannon at the Foreign Engineering Company landmark."],
          ],
        },
        {
          items: ["units/varangian-guard"],
          civs: ["mac"],
          diff: [
            ["buff", "Cost reduced from 90 Food 40 Gold → 80 Food 40 Gold."],
            ["nerf", "Feudal Varangian Guard health reduced from 125 → 120."],
          ],
        },
        {
          items: ["units/riddari"],
          civs: ["mac"],
          diff: [
            ["nerf", "Health reduced from 240 → 230."],
            ["nerf", "Elite health reduced from 280 → 270."],
          ],
        },
        {
          items: ["units/atgeirmadr"],
          civs: ["mac"],
          diff: [
            ["buff", "Elite Atgeirmaðr health increased from 140 → 150."],
            ["buff", "Elite Atgeirmaðr movement speed increased from 1.25 → 1.3."],
          ],
        },
        {
          items: [
            "buildings/imperial-hippodrome",
            "units/hippodrome-scout",
            "units/hippodrome-horseman",
            "units/hippodrome-riddari",
          ],
          civs: ["mac"],
          diff: [
            ["nerf", "Hippodrome Scout health reduced from 220 → 200."],
            ["nerf", "Hippodrome Horseman health reduced from 220 → 200."],
            ["nerf", "Hippodrome Riddari health reduced from 280 → 250."],
            ["nerf", "Hippodrome Riddari melee armor reduced from 4 → 3."],
          ],
        },
        {
          items: ["buildings/varangian-warcamp"],
          civs: ["mac"],
          uionly: true,
          diff: [
            ["change", "The Varangian Warcamp now has a new UI widget over the structure indicating progress towards the next batch of units."],
          ],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["buildings/town-center"],
          civs: ["ma"],
          diff: [
            ["buff", "Cost reduced from 400 Wood 400 Gold → 400 Wood 350 Gold."],
          ],
        },
        {
          items: ["buildings/farimba-garrison"],
          civs: ["ma"],
          diff: [
            ["buff", "The Farimba Garrison can now enlist three upgraded units in Castle Age. The first unit is enlisted for free and the other two may be enlisted for an additional cost of 100 Food 250 Gold."],
          ],
        },
        {
          items: ["technologies/imported-armor"],
          civs: ["ma"],
          diff: [
            ["nerf", "Cost increased from 150 Food 350 Gold → 175 Food 500 Gold."],
          ],
        },
        {
          items: ["units/donso"],
          civs: ["ma"],
          diff: [
            ["buff", "Elite Donso health increased from 140 → 150."],
            ["buff", "Elite Donso movement speed increased from 1.25 → 1.3."],
          ],
        },
        {
          items: ["buildings/cattle-ranch"],
          civs: ["ma"],
          diff: [
            ["nerf", "Cost increased from 100 Wood → 125 Wood."],
          ],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["buildings/town-center"],
          civs: ["mo"],
          diff: [
            ["buff", "Cost reduced from 800 Wood → 750 Wood."],
          ],
        },
        {
          items: ["units/man-at-arms"],
          civs: ["mo"],
          diff: [
            ["buff", "Stone cost for producing 2 Men-at-Arms reduced from 240 Stone → 220 Stone."],
          ],
        },
        {
          items: [
            "buildings/khaganate-palace",
            "technologies/military-academy",
            "units/huihui-pao",
            "units/nest-of-bees",
          ],
          civs: ["mo"],
          diff: [
            ["nerf", "Military Academy no longer applies its production speed improvement to Khaganate Palace."],
            ["nerf", "The Hui Hui Pao and Nest of Bees are now less likely to spawn from Khaganate Palace than other units."],
          ],
        },
        {
          items: ["units/scout"],
          civs: ["mo"],
          diff: [
            ["fix", "Mongol double production for Scouts now has the correct cost of 65 Food 65 Stone."],
          ],
        },
        {
          items: ["units/villager"],
          civs: ["mo"],
          uionly: true,
          diff: [
            ["fix", "Console-only: The Villager Priority System will no longer attempt to assign Mongol villagers to stone."],
          ],
        },
      ],
    },
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["units/gilded-man-at-arms"],
          civs: ["od"],
          diff: [
            ["buff", "Cost reduced from 200 Food 40 Gold → 180 Food 40 Gold."],
            ["buff", "Production time reduced from 27 seconds → 25 seconds."],
            ["nerf", "Feudal Age health reduced from 230 → 220."],
          ],
        },
        {
          items: ["units/gilded-landsknecht"],
          civs: ["od"],
          diff: [
            ["buff", "Health increased from 180 → 185."],
            ["buff", "Elite Gilded Landsknecht health increased from 220 → 225."],
          ],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          items: ["units/sipahi", "abilities/ability-fortitude"],
          civs: ["ot"],
          diff: [
            ["nerf", "Sipahi Fortitude ability bonus attack speed reduced from +50% → +40%."],
          ],
        },
        {
          items: ["buildings/sea-gate-castle"],
          civs: ["ot"],
          diff: [
            ["buff", "The Sea Gate Castle now increases the damage of all defensive structures by 20%."],
          ],
        },
        {
          items: ["buildings/istanbul-imperial-palace"],
          civs: ["ot"],
          diff: [
            ["buff", "Now increases vizier experience gained globally."],
            ["buff", "Number of extra Vizier Points granted increased from 3 → 4."],
          ],
        },
        {
          items: ["units/akinji"],
          civs: ["ot"],
          diff: [
            ["buff", "Akinji System moved from tier 2 → tier 1 in the Imperial Council."],
            ["nerf", "Number of free Akinji granted reduced from 3 → 1."],
          ],
        },
        {
          items: ["technologies/anatolian-hills"],
          civs: ["ot"],
          diff: [
            ["nerf", "Anatolian Hills moved from tier 1 → tier 2 in the Imperial Council."],
            ["buff", "Number of Sheep granted increased from 10 → 12."],
          ],
        },
        {
          items: ["buildings/sultanhani-trade-network"],
          civs: ["ot"],
          diff: [
            ["buff", "Trader income increased from 24 → 26 Gold per minute."],
          ],
        },
        {
          items: ["buildings/istanbul-observatory"],
          civs: ["ot"],
          diff: [
            ["nerf", "Production speed bonus reduced from 100% → 90%."],
          ],
        },
        {
          items: ["buildings/siege-workshop"],
          civs: ["ot"],
          diff: [
            ["buff", "Corrected the cost of the Ottoman Siege Workshop from 166 Wood → 150 Wood."],
          ],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["buildings/abbey-of-the-trinity", "technologies/fervor"],
          civs: ["ru"],
          diff: [
            ["buff", "Fervor cost and research time reduced from 275 Gold, 45 seconds → 150 Gold, 25 seconds."],
          ],
        },
        {
          items: ["buildings/kremlin"],
          civs: ["ru"],
          diff: [
            ["buff", "Militia levy cost reduced from 55 Food → 30 Food."],
            ["buff", "Upon reaching Castle Age the levy now spawns an extra Militia Handcannoneer."],
          ],
        },
        {
          items: ["buildings/fortified-palisade-wall"],
          civs: ["ru"],
          diff: [
            ["buff", "Improved Palisade Wall health increased from 2500 → 2700."],
          ],
        },
      ],
    },
    {
      subtitle: "Sengoku Daimyo",
      civs: ["sen"],
      changes: [
        {
          items: ["technologies/survival-techniques"],
          civs: ["sen"],
          diff: [
            ["nerf", "No longer receives Survival Techniques for free at the start of the game."],
          ],
        },
        {
          items: ["units/samurai"],
          civs: ["sen"],
          diff: [
            ["change", "Cost changed from 100 Food 20 Gold → 90 Food 30 Gold."],
          ],
        },
        {
          items: ["units/mounted-samurai"],
          civs: ["sen"],
          diff: [
            ["nerf", "Cost increased from 140 Food 100 Gold → 140 Food 110 Gold."],
          ],
        },
        {
          items: ["technologies/samurai-bow", "units/samurai"],
          civs: ["sen"],
          diff: [
            ["buff", "Samurai Bow upgrade cost reduced from 100 Food 250 Gold → 75 Food 175 Gold."],
            ["buff", "Samurai Yumi bow damage increased: Dark Age 5 → 8, Feudal Age 6 → 9, Castle Age 8 → 11, Imperial Age 10 → 13."],
          ],
        },
        {
          items: ["units/mounted-samurai", "technologies/mounted-samurai-odachi"],
          civs: ["sen"],
          diff: [
            ["fix", "Fixed a bug where Elite Mounted Samurai could get +1 base damage from the Odachi upgrade."],
          ],
        },
        {
          items: ["abilities/ability-deflective-armor"],
          civs: ["sen"],
          diff: [
            ["nerf", "Deflective Armor cooldown increased from 8 → 15 seconds while out of combat."],
          ],
        },
        {
          items: ["units/daimyo"],
          civs: ["sen"],
          diff: [
            ["nerf", "Fixed an issue where the Daimyo aura attack speed bonus applied a larger than intended modifier in Castle and Imperial ages."],
          ],
        },
        {
          items: ["units/ikko-ikki-monk", "abilities/ability-soheis-sutra"],
          civs: ["sen"],
          diff: [
            ["fix", "Fixed an issue which allowed the Ikko-Ikki Monk to apply the Sohei Sutra debuff in some situations."],
          ],
        },
      ],
    },
    {
      subtitle: "Tughlaq Dynasty",
      civs: ["tug"],
      changes: [
        {
          items: ["units/worker-elephant"],
          civs: ["tug"],
          diff: [
            ["fix", "Worker Elephants now always return to their previous position when using the ‘Return To Work’ button."],
          ],
        },
        {
          items: ["units/ballista-elephant"],
          civs: ["tug"],
          diff: [
            ["nerf", "No longer benefits from the ranged attack Blacksmith upgrades."],
            ["buff", "Damage increased from 17 → 18."],
            ["buff", "Elite version damage increased from 19 → 20."],
          ],
        },
        {
          items: ["buildings/dock"],
          civs: ["tug"],
          diff: [
            ["nerf", "Can no longer garrison monks."],
            ["nerf", "Garrison space reduced from 4 → 3."],
          ],
        },
        {
          items: ["units/amir-warrior"],
          civs: ["tug"],
          diff: [
            ["nerf", "Feudal Age: Armor reduced from 5 → 3."],
            ["buff", "Castle Age: Armor increased from 3 → 5."],
            ["buff", "Imperial Age: Health increased from 180 → 200, damage increased from 12 → 14."],
          ],
        },
      ],
    },
    {
      subtitle: "Zhu Xi's Legacy",
      civs: ["zx"],
      changes: [
        {
          items: ["units/imperial-official", "units/villager", "units/fishing-boat"],
          civs: ["zx"],
          diff: [
            ["change", "Taxes: No longer deposits 1 Gold each time a Villager drops off regardless of carry amount. Instead, drop-off Taxes are generated at 8% of the total resources dropped off (4% for Fishing Ships)."],
          ],
        },
        {
          items: ["units/grenadier"],
          civs: ["zx"],
          diff: [
            ["buff", "Movement speed increased from 1.125 → 1.25."],
          ],
        },
        {
          items: ["units/palace-guard"],
          civs: ["zx"],
          diff: [
            ["buff", "Cost reduced from 100 Food 25 Gold → 90 Food 25 Gold."],
            ["buff", "Production time reduced from 22.5 → 20.5 seconds."],
          ],
        },
        {
          items: ["buildings/jiangnan-tower"],
          civs: ["zx"],
          diff: [
            ["change", "Jiangnan Tower Reworked: No longer grants a free military unit whenever a military building is constructed. Now produces free armies whenever a military building or military unit is produced in influence (each subsequent army requires progressively more resources to be spent, until 12 have been trained)."],
          ],
        },
        {
          items: ["buildings/meditation-gardens"],
          civs: ["zx"],
          diff: [
            ["change", "Meditation Gardens Reworked: No longer generates resources per minute based on nearby resources. Now gradually increases resources in nearby deposits up to a maximum of 60%, generating bonus resources once the cap is hit and again when depleted (trees half as effective)."],
          ],
        },
        {
          items: ["units/fishing-boat", "units/imperial-official"],
          civs: ["zx"],
          diff: [
            ["fix", "Fixed an issue where Zhu Xi fishing ships would not generate taxes when dropping off resources."],
          ],
        },
        {
          items: ["technologies/roar-of-the-dragon", "units/horseman"],
          civs: ["zx"],
          diff: [
            ["fix", "Roar of the Dragon now correctly creates visual explosions for Horsemen when charging enemies."],
          ],
        },
        {
          items: ["buildings/jiangnan-tower", "buildings/mount-lu-academy"],
          civs: ["zx"],
          uionly: true,
          diff: [
            ["fix", "Jiangnan Tower and Mount Lu Academy icons have been swapped to more accurately portray their respective buildings."],
          ],
        },
      ],
    },
  ],
};
