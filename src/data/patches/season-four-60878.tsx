import { PatchNotes } from "../../types/patches";

export const season4: PatchNotes = {
  id: "season-4",
  buildId: 60878,
  officialUrl: "https://www.ageofempires.com/news/ageiv_seasonfour_update_60878/",
  name: "Season Four Update",
  season: 4,
  type: "update",
  summary:
    "Major changes to Landmarks for most civs, introducing Militia, Wynguard units, English King. Nerfs to deap sea fish, trade and walls. Siege cost decrease, addition of lightweight beams and rams from Siege Workshop.",
  introduction: `"Join us in the Enchanted Grove for Season Four, starting on February 16th! In this update, you can optimize your strategy on three new maps, start from scratch with only a few villagers and no starting Town Center in the new Nomad game mode, build new or improved Landmarks, and more! You’ll also get to explore the new Enchanted Grove Biome as we round out this update with a new season of events, rewards and ranked, as well as quality-of-life updates." 

* New Event and Biome: Enchanted Grove 
* Season Four Ranked 1v1 and Team Ranked 
* New Maps: Four Lakes, Continental, Marshland 
* New Game Mode: Nomad 
* Mod Browser Update 
* UI Improvements 
* Landmark Reworks 
* Art of War Updates 
* New Cheat Code 
`,
  html: (
    <div>
      <iframe
        width="889"
        height="500"
        src="https://www.youtube.com/embed/Qw0dLRskbDU"
        class="w-full aspect-video"
        title="Age of Empires IV Season Four: Enchanted Grove"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="my-5 rounded-lg p-4 bg-gray-500">
        This page foucuses on gameplay and balance changes (manually reviewed and clarified by AoE4 World) which are shown first. To learn more about Ranked
        Season Four Map pool and rewards, the new Minimap Zoom and other UI changes, scroll to the bottom or head over to the
        <a href="https://www.ageofempires.com/news/ageiv_seasonfour_update_60878/" class="underline font-bold text-white ml-1">
          official patch notes
        </a>
        .
      </div>
    </div>
  ),
  date: new Date("2023-02-16T12:00:00Z"),
  sections: [
    {
      title: "Balance & Gameplay",
      civs: [],
      changes: [],
    },
    {
      subtitle: "General Changes & Bugfixes",
      civs: [],
      md: `
* When you are eliminated from a match, remaining units will stop attacking previous targets, villagers will stop gathering, and any other unit commands will also cease. 
* Ability hotkeys that do not conflict with the selected build menu now remain active. 
* Fixed an issue to ensure right click & drag only occurs when right click is held and then the mouse is dragged. 
* Fixed a bug to ensure fishing boats contribute to the economic count. 
* Units will play their voice lines when entering/garrisoning a building. 
* Fixed a bug that prevents re-downloading subscribed mods when you already own the latest version. 
* Destroyed Landmarks can now be repaired in the Ottoman Art of War. 
* Fixed a bug where training Masteries could not be completed. 
* Fixed the “Defend” daily quest to account for English Keeps being built only. 
* Fixed an issue where the map preferences set for quick match may be shown when queueing for a ranked match after clicking the “Play Again” button on the post-game screen. 
* Caster mode: stolen sheep no longer add to conversion counts. 
* Fixed an issue where Crafted Map Beginner mode would not set the right number of players for Large and Gigantic maps.
* Fixed an issue where hotkeys did not work with an active Asian language IME or third party input software (for example, Sougou).
* Fixed localization issues with Royal Rumble mod in some languages.
* Fixed an issue where looking at other player’s Profile UI would incorrectly show viewer’s own monument.
`,
      changes: [],
    },
    {
      subtitle: "Gameplay Changes for All Civilizations",
      civs: [],
      md: `
* Fixed a bug where melee units couldn’t attack on broken wall segments and would stand idle. 
* Fixed a bug where placing a palisade gate sometimes create a gap in the wall. 
* Fix a bug where landmarks could remain standing if destroyed while under construction. 
* Fixed Fishing Ships temporarily stopping when they are re-ordered to garrison in a Dock.
* Influence based effects such as the ones from the Abbasid’s House of Wisdom and Holy Roman Empire’s Emergency Repair influence can now only be extended with fully constructed buildings rather than building stamps.
* Fixed an issue where units sometimes spawned on the wrong side of a unit production building if the rally point was placed too close to the building. 
* Relics will now stay on top of bridges and walls when dropped 
* Relic respawns on the nearest land after being lost in the ocean on a transport 
* Changed the event-cycling behavior to now only focus on Attack notifications. 
* Elite Army Tactics, Heavy Maces and Two-Handed weapons extra damage now properly apply to charge and spear wall weapons. 
* Idle units will now do a better job of finding good targets to attack. This is especially improved when raiding farms as units will now continue to hunt farmers instead of torching farms. 
* Unload Garrison ability can now be rebound to a different hotkey. 
* After repairing a farm or resource drop-off building, villagers will now automatically gather from the farm or nearby resources. 
* Reverted the change to Boar retaliation behavior with feedback from the PUP: the Boar no longer only chases the attacking unit and will instead target the closest unit nearby when attacked. 
* Fixed an issue where the secondary UI panel isn’t accessible when selecting a group of mixed unit types. 
* The villager’s build menu now correctly resets when clearing the selection. 
* Fixed a bug where the UI would incorrectly tell you to repair an enemy’s landmark. 
* Fixed cattle not dying when the “you monster” cheat is used. 
* Fixed villagers restarting their build animation after re-issuing the same build command. 
* Fixed villagers looking like they are gliding if spammed with attack orders to hunt a wolf. 
* Fixed a rare case where defensive structures would stop firing at visible targets within range.   
* Updated various tooltips for techs and landmarks to correct inaccuracies. 
* All units will no longer fire additional shots after hunting any harvestable Gaia. This means that Scouts will now correctly fire two arrows when hunting Deer, instead of three.`,
      changes: [
        {
          civs: [],
          items: ["units/fishing-boat"],
          diff: [
            ["nerf", "Deep Fishing gather rate reduced from 1 to 0.9"],
            ["buff", "Shore Fishing gather rate increased from 0.66 to 0.7"],
          ],
        },
        {
          civs: [],
          items: ["units/lodya-fishing-boat"],
          diff: [["nerf", "Deep fishing gather rate reduced from 1.9 to 1.71"]],
          note: "We wanted to lessen the impact of deep fishing to open up additional strategic opportunities on maps with water. Increasing shore fish gather rates is aimed at making these resources more effective in general for boats as well as creating options around defensive tech-based plays.",
        },
        {
          civs: [],
          items: ["buildings/palisade-wall"],
          diff: [
            ["nerf", "Cost increased from 5 to 7 Wood"],
            ["nerf", "Health reduced from 1500 to 1250"],
          ],
        },
        {
          civs: ["ru"],
          items: ["buildings/fortified-palisade-wall"],
          diff: [
            ["nerf", "Health reduced from 3000 to 2500"],
            ["buff", "Build time reduced from 7 to 3 seconds"],
          ],
        },
        {
          civs: [],
          items: ["buildings/stone-wall"],
          diff: [["nerf", "Health reduced from 3500 to 3000"]],
          note: "Walls are extremely cost effective at shutting down aggression. We are adjusting them to make sure they fill the intended role of being speedbumps that give you time to reposition and react to enemy attacks.",
        },
        {
          civs: [],
          items: ["units/trader", "units/trade-ship"],
          diff: [["nerf", "Reduce gold generated by trade by 10%"]],
          note: "When comparing gold generation from traders vs villagers we found that traders are more effective so we’ve reduced it to create a more compelling choice between the two economic units. We’ll continue to refine trader gold generate rates in future updates.",
        },
        {
          civs: [],
          items: ["units/monk", "units/scholar", "units/imam", "units/prelate", "units/warrior-monk"],
          diff: [["nerf", "Monks now only heal at 50% speed when their target is in combat."]],
        },
        {
          civs: [],
          items: ["units/villager"],
          diff: [["nerf", "Formation catchup speed reduced from 100% to 40% to match all other units in the game."]],
          note: "This will effectively make raiding groups of retreating villagers easier.",
        },
      ],
    },
    {
      subtitle: "Siege Updates",
      civs: [],
      description:
        "A series of updates have been made to siege units. Siege units and tech unique to a civilization are covered in their civ-specific changes further on. ",
      md: `
      * Fixed a bug where siege units could get stuck in their unpacking animation if their target was too close.
      * Field Constructed siege units no longer get stuck in berry bushes`,
      changes: [
        {
          items: ["units/great-bombard"],
          civs: ["ot"],
          diff: [["buff", "Wood cost reduced from 600 to 450"]],
        },
        {
          items: ["units/bombard", "units/cannon", "units/ribauldequin"],
          civs: [],
          diff: [["buff", "Wood cost reduced from 400 to 300"]],
          note: "These siege weapons were feeling too expensive considering how quickly they get killed by anti-siege and melee units. Reducing wood costs helps differentiate them from their predecessors in earlier ages.",
        },

        {
          items: ["units/battering-ram", "buildings/siege-workshop"],
          civs: [],
          diff: [["buff", "Siege Workshop can now produce Battering Rams for all civilizations"]],
        },
        {
          items: ["technologies/lightweight-beams"],
          civs: [],
          diff: [
            ["fix", "New imperial age technology"],
            ["buff", "Increase Battering Ram attack speed by +40% "],
            ["buff", "Reduce Battering Ram field construction time by -50%"],
          ],
          note: "We wanted to give rams better late game scaling and allow for more attacks from multiple angles.",
        },
      ],
    },
    {
      title: "Civ-Specific Changes",
      civs: [],
      changes: [],
    },
    {
      civs: ["ab"],
      subtitle: "Abbasid Dynasty",
      description:
        "We wanted the initial wing choice of the House of Wisdom to align more closely with high level strategies. Military wing for rushing, Culture wing for teching, and Trade/Economic wings for booming. These changes are aimed at increasing the diversity of playstyles available to the Abbasid civilization. ",
      changes: [
        {
          items: ["buildings/house-of-wisdom"],
          civs: ["ab"],
          diff: [
            ["buff", "Now is a Home Market destination that can be traded with."],
            ["fix", "Fixed a bug where golden age wasn’t reducing research times properly."],
            ["fix", "House of Wisdom now displays additional build menu in Caster Mode."],
          ],
        },
        {
          items: ["buildings/house-of-wisdom", "technologies/trade-wing"],
          civs: ["ab"],
          diff: [["buff", "House of Wisdom Spawns 3 Traders once Trade Wing is complete."]],
        },
        {
          items: ["buildings/house-of-wisdom", "technologies/military-wing"],
          civs: ["ab"],
          diff: [
            [
              "buff",
              "House of Wisdom Spawns 1 Archer & 2 Spearmen in the age you complete Military Wing (Feudal: 1 Archer & 2 Spearmen; Castle: 2 Camel Riders; Imperial: 3 Handcannoneers)",
            ],
          ],
        },
        {
          items: ["technologies/camel-rider-shields", "buildings/house-of-wisdom", "technologies/military-wing", "buildings/stable"],
          civs: ["ab"],
          diff: [["buff", "Camel Rider Shields moved to the Stable"]],
        },
        {
          items: ["technologies/composite-bows", "buildings/house-of-wisdom", "technologies/military-wing"],
          civs: ["ab"],
          diff: [
            ["buff", "Composite Bows moved to House of Wisdom"],
            ["buff", "Composite Bows cost reduced from 700 gold 300 wood to 350 gold 150 wood."],
            ["buff", "Composite Bows moved from Imperial Age to Castle Age."],
          ],
        },
        {
          items: ["technologies/fresh-foodstuffs", "buildings/house-of-wisdom", "technologies/economic-wing", "buildings/town-center"],
          civs: ["ab"],
          diff: [
            ["buff", "Fresh Foodstuffs moved from the Economic Wing to Town Center"],
            ["nerf", "Fresh Foodstuffs villager cost bonus reduced from 50% to 35%"],
          ],
        },
        {
          items: ["technologies/fertile-crescent", "buildings/house-of-wisdom", "technologies/economic-wing"],
          civs: ["ab"],
          diff: [
            [
              "buff",
              "Added new technology 'Fertile Crescent' (costs 25 Food 75 Gold), which reduces wood and stone cost of economic buildings and houses by 25%.",
            ],
          ],
        },
        {
          items: ["buildings/house-of-wisdom", "technologies/culture-wing", "technologies/preservation-of-knowledge"],
          civs: ["ab"],
          diff: [
            ["nerf", "Preservation of Knowledge bonus reduced from 30% to 20%"],
            ["buff", "Preservation of Knowledge research time reduced from 60 to 30 seconds"],
            ["buff", "Preservation of Knowledge now applies to age up costs"],
          ],
        },
        {
          items: ["buildings/house-of-wisdom", "technologies/culture-wing", "technologies/proselytization"],
          civs: ["ab"],
          diff: [["fix", "'Faith' renamed to Proselytization which unlocks the 'Proselytize' ability."]],
        },
      ],
    },
    {
      civs: ["ch"],
      subtitle: "Chinese",
      changes: [
        {
          items: ["buildings/astronomical-clocktower"],
          civs: ["ch"],
          diff: [["buff", "Can now produce the Clocktower Battering Rams with bonus health."]],
        },

        {
          items: ["buildings/granary"],
          civs: ["ch"],
          diff: [["fix", "Fixed a bug where Granaries wouldn’t generate taxes when technologies were researched there."]],
        },
        // {
        //   items: ["buildings/town-center", "units/villager"],
        //   civs: ["ch"],
        //   diff: [["nerf", "Song Dynasty Villager production speed bonus reduced from +35% to +25%"]],
        // },
        {
          items: ["units/nest-of-bees"],
          civs: ["ch"],
          diff: [
            [
              "fix",
              "Will now finish its current volley if its target dies or moves out of range. Previously, it would stop firing immediately in those cases.",
            ],
          ],
        },
      ],
    },
    {
      civs: ["de"],
      subtitle: "Delhi Sultanate",
      changes: [
        //             * Compound of the Defender Landmark
        // 	* Contains the following defensive technologies that ignore age requirement:
        // 		* Village Fortress
        // 			* Research time reduced from 5 minutes to 3 minutes and 45 seconds
        // 		* Boiling Oil
        // 		* Court Architects
        // 		* Slow Burning Defenses
        {
          items: [
            "buildings/compound-of-the-defender",
            "technologies/village-fortresses",
            "technologies/boiling-oil",
            "technologies/court-architects",
            "technologies/slow-burning-defenses",
          ],
          civs: ["de"],
          diff: [["buff", "Defensive technologies can now be researched from the Compound of the Defender Landmark without age requirements."]],
        },
        // {
        //   items: ["technologies/village-fortress"],
        //   civs: ["de"],
        //   diff: [["buff", "Research time reduced from 5 minutes to 3 minutes and 45 seconds."]],
        // },

        // * House of Learning Landmark
        // 	* Reinforced Foundations technology allows villagers and infantry to garrison in houses and fire garrison arrows, houses gain +50% HP.
        // 	* Tranquil Venue technology healing per second increased from 1 to 2.
        // 	* Lookout Towers technology now also adds +1 weapon range to Outposts.
        // 	* Hearty Rations technology moved from Imperial Age to Castle Age.
        {
          items: ["buildings/house-of-learning", "technologies/reinforced-foundations"],
          civs: ["de"],
          diff: [
            ["buff", "Reinforced Foundations now allows villagers and infantry to garrison in houses and fire garrison arrows."],
            ["buff", "Reinforced Foundations now increases house hithpoints by 50%."],
          ],
        },
        {
          items: ["buildings/house-of-learning", "technologies/tranquil-venue"],
          civs: ["de"],
          diff: [["buff", "Tranquil Venue's Mosque healing per second increased from 1 to 2."]],
        },
        // * Fixed Lookout Tower technology not affecting outposts built after researching the technology.

        {
          items: ["buildings/house-of-learning", "technologies/lookout-towers"],
          civs: ["de"],
          diff: [
            ["buff", "Lookout Towers now also adds +1 weapon range to Outposts."],
            ["fix", "Fixed Lookout Tower technology not affecting outposts built after researching the technology."],
          ],
        },
        {
          items: ["buildings/house-of-learning", "technologies/hearty-rations"],
          civs: ["de"],
          diff: [["buff", "Hearty Rations moved from Imperial Age to Castle Age."]],
        },

        // * Hisar Academy Landmark
        // 	* Acts as a Madrasa and Food generation increased by 20%.
        {
          items: ["buildings/hisar-academy"],
          civs: ["de"],
          diff: [
            ["buff", "Hisar Academy now acts as a Madrasa."],
            ["buff", "Hisar Academy now generates 20% more food."],
          ],
        },

        // * Palace of the Sultan Landmark
        // 	* Now trains the new unique Sultan’s Elite Tower Elephant, a mounted Elephant with two Handcannoneer riders.
        // 	* While activated, the Palace of the Sultan will train an Elephant every 200 seconds.
        // 	* You can garrison Scholars into the landmark to speed up production, with 4 scholars reducing train time down to 90 seconds.
        {
          items: ["buildings/palace-of-the-sultan"],
          civs: ["de"],
          diff: [
            ["buff", "Now trains the new unique Sultan’s Elite Tower Elephant, a mounted Elephant with two Handcannoneer riders."],
            ["buff", "While activated, the Palace of the Sultan will train an Elephant every 200 seconds."],
            ["buff", "Up to 4 scholars can garrison to speed up production down to 90 seconds."],
            ["nerf", "No longer produces Tower Elephants or War Elephants."],
          ],
        },

        // * Mosques
        // 	* Garrison slots increased from 3 to 5.
        // 	* Dome of Faith now acts as a Mosque.
        {
          items: ["buildings/mosque", "buildings/dome-of-the-faith"],
          civs: ["de"],
          diff: [
            ["buff", "Garrison slots increased from 3 to 5."],
            ["buff", "Dome of the Faith now acts as a Mosque."],
          ],
        },
        // * Village Fortress Technology
        // 	* Research time increased from 3:45 to 5:00.

        // {
        //     items: ["technologies/village-fortress"],
        //     civs: ["de"],
        //     diff: [["nerf", "Research time increased from 3:45 to 5:00."]],
        // }

        // * Zeal Technology
        // 	* Now adds a gold glow to affected units.
        // 	* Buff effect no longer stacks.
        // 	* Fixed a bug where buff was giving much less attack speed than intended.
        {
          items: ["technologies/zeal"],
          civs: ["de"],
          diff: [
            ["buff", "Now adds a gold glow to affected units."],
            ["nerf", "Effect no longer stacks."],
            ["fix", "Fixed a bug where buff was giving much less attack speed than intended."],
          ],
        },

        // * War Elephant
        // 	* Cost reduced from 600 food 400 gold to 400 food 350 gold.
        // 	* HP reduced from 1400 to 850.
        // 	* Armor increased from 4/2 to 4/5.
        // 	* Tusk damage increased from 30 to 50.
        // 	* Spear damage increased from 20 to 25.
        // 	* Tusk Siege damage gains +100 vs buildings.
        {
          items: ["units/war-elephant"],
          civs: ["de"],
          diff: [
            ["buff", "Cost reduced from 600 food 400 gold to 400 food 350 gold."],
            ["nerf", "HP reduced from 1400 to 850."],
            ["buff", "Ranged Armor increased from 2 to 5."],
            ["buff", "Tusk damage increased from 30 to 50."],
            ["buff", "Spear damage increased from 20 to 25."],
            ["buff", "Tusk Siege damage gains +100 vs buildings."],
          ],
        },
        // * Armored Beasts Technology
        // 	* Now grants War Elephants +25% HP and +4 Ranged armor.
        {
          items: ["technologies/armored-beasts", "units/war-elephant"],
          civs: ["de"],
          diff: [
            ["buff", "Now grants War Elephants +25% HP and +4 Ranged armor (up from +3)."],
            ["nerf", "No longer grants War Elephants +3 Melee armor."],
          ],
        },

        // * Tower Elephant
        // 	* Tusk Siege damage gains +50 vs buildings.
        {
          items: ["units/tower-elephant"],
          civs: ["de"],
          diff: [["buff", "Tusk Siege damage gains +50 vs buildings."]],
        },

        // * Siege Elephants
        // 	* Technology renamed to “Howdahs”.
        // 	* In addition to equipping Tower Elephants with crowssbows, grants +30% HP and +4 Ranged armor.
        {
          items: ["technologies/howdahs", "units/tower-elephant"],
          civs: ["de"],
          diff: [
            ["fix", "Siege Elephants renamed to “Howdahs”."],
            ["buff", "Howdahs grants +30% HP and +4 Ranged armor, in addition to equipping crossbows."],
          ],
        },

        // * Fixed a bug where Elite Tower Elephants and regular Tower Elephants were both selected with a double click.
        {
          items: ["units/sultans-elite-tower-elephant"],
          civs: ["de"],
          diff: [["buff", "New unit, “Sultan’s Elite Tower Elephant“, can be trained from the Palace of the Sultan."]],
        },
        // * Scholars
        // 	* Cost reduced from 150 to 130.
        // *Developer Note:*/As the in combat healing nerf hits Delhi the hardest, we wanted to compensate them by making it easier to add in scholars./
        // * Scholars which are garrisoned in a Mosque will now have their automatic healing ability toggled on when leaving the hold.
        {
          items: ["units/scholar"],
          civs: ["de"],
          diff: [
            ["buff", "Cost reduced from 150 to 130."],
            ["buff", "Scholars which are garrisoned in a Mosque will now have their automatic healing ability toggled on when leaving the hold."],
          ],
          note: "As the in combat healing nerf hits Delhi the hardest, we wanted to compensate them by making it easier to add in scholars.",
        },
        // *Naval*
        // * 50% Extra HP on fishing ships.
        // * Fixed an issue where Fishing Ships would not benefit from ranged damage Blacksmith upgrades.
        {
          items: ["units/fishing-boat"],
          civs: ["de"],
          diff: [
            ["buff", "Health increased by 50%"],
            ["fix", "Fishing Ships now correctly benefit from ranged damage Blacksmith upgrades."],
          ],
        },
        // * Manuscript Trade production speed bonus per scholar increased from 20% > 30%.
        {
          items: ["technologies/manuscript-trade"],
          civs: ["de"],
          diff: [["buff", "Manuscript Trade production speed bonus per scholar increased from 20% to 30%."]],
        },
      ],
    },
    {
      civs: ["en"],
      subtitle: "English",
      changes: [
        //             * Abbey of Kings Landmark
        // 	* Now can Crown a King, a cavalry leader with a lesser version of the Abbey’s aura.
        // 		* King Costs 150 food and 150 gold.
        // 		* Only one King may be trained at a time.
        // 		* Heals nearby out of combat units for 2 HP every second.
        // *Developer Note:*/Previously, while it was possible to get a lot of resource value out of the Abbey of Kings, it was often cumbersome in later stages of the game. Now, this option to mobilize the Abbey in the form of a King gives players the ability to engage with aggressive strategies while still getting value out of the Abbey./
        {
          items: ["units/king", "buildings/abbey-of-kings"],
          civs: ["en"],
          diff: [
            ["buff", "Abbey of Kings can Crown a King, a cavalry leader with a lesser version of the Abbey’s aura."],
            ["fix", "King Costs 150 food and 150 gold."],
            ["fix", "Only one King may be trained at a time."],
            ["buff", "Heals nearby out of combat units for 2 HP every second."],
            ["fix", "The King now correctly takes extra damage from Crossbowman."],
          ],
          note: "Previously, while it was possible to get a lot of resource value out of the Abbey of Kings, it was often cumbersome in later stages of the game. Now, this option to mobilize the Abbey in the form of a King gives players the ability to engage with aggressive strategies while still getting value out of the Abbey.",
        },

        // * Council Hall Landmark
        // 	* Changed from producing Longbowmen and their technologies to all Archery Range units and technologies.
        // *Developer Note:*/While the Council Hall is useful in Feudal Age, it’s utility later in the game is limited. The option to quickly produce crossbowman should open the door to more strategies with English in the Castle and Imperial ages./
        // * Fixed an issue where Council Hall hotkeys did not respect Archery Range key bindings.
        {
          items: ["buildings/council-hall"],
          civs: ["en"],
          diff: [
            ["buff", "Now produces all Archery Range units and technologies (100% faster), instead of just longbows"],
            ["fix", "Hotkeys now respect Archery Range key bindings."],
          ],
          note: "While the Council Hall is useful in Feudal Age, it’s utility later in the game is limited. The option to quickly produce crossbowman should open the door to more strategies with English in the Castle and Imperial ages.",
        },

        // * King’s Palace Landmark
        // 	* HP increased from 2500 to 5000.
        // 	* Fixed an issue where English King’s Palace does not respect player key binds for Town Center correctly.
        {
          items: ["buildings/kings-palace"],
          civs: ["en"],
          diff: [
            ["buff", "Health increased from 2500 to 5000."],
            ["fix", "Fixed an issue where English King’s Palace does not respect player key binds for Town Center correctly."],
          ],
        },
        // * White Tower Landmark
        // 	* Now trains units, researches technologies, and builds emplacements 100% faster.
        {
          items: ["buildings/the-white-tower"],
          civs: ["en"],
          diff: [["buff", "Now trains units, researches technologies, and builds emplacements 100% faster."]],
        },
        // * Berkshire Palace Landmark
        // 	* HP increased from 5000 to 6500.
        // 	* Effect changed from projectiles have +50% range and double the amount of base arrows to all projectiles now have 15 tiles range.
        // 	* Arrows from the Berkshire are now incendiary and deal increased damage.
        // 		* Berkshire Garrison Arrow base damage increased from 10 to 12.
        // 		* Berkshire Standard Arrow base damage increased from 12 to 14.
        // *Developer Note:*/We want to create a more compelling choice between the Wynguard Palace and the Berkshire Palace/*.*/This change makes the Berkshire Palace more effective at locking down a position and more dangerous to fight underneath for the opponent./
        {
          items: ["buildings/berkshire-palace"],
          civs: ["en"],
          diff: [
            ["buff", "Health increased from 5000 to 6500."],
            ["buff", "All projectiles now have 15 tiles range (insread of +50%)"],
            ["nerf", "No longer fires double the amount of base arrows."],
            ["buff", "Arrows from the Berkshire are now incendiary and deal increased damage."],
            ["buff", "Berkshire Standard Arrow base damage increased from 12 to 14."],
            ["buff", "Berkshire Garrison Arrow base damage increased from 10 to 12."],
          ],
          note: "We want to create a more compelling choice between the Wynguard Palace and the Berkshire Palace. This change makes the Berkshire Palace more effective at locking down a position and more dangerous to fight underneath for the opponent.",
        },

        // * Wynguard Palace Landmark
        // 	* Now produces 4 distinct armies.
        {
          items: ["buildings/wynguard-palace"],
          civs: ["en"],
          diff: [
            ["buff", "Now produces 4 distinct armies, the Wynguard Army, Wynguard Raiders, Wynguard Rangers, and Wynguard Footmen."],
            ["buff", "Wynguard Palace now has access to the Wynguard Footmen, a more powerful unique variation on the Man-at-arms."],
            ["buff", "Wynguard Rangers now spawns the unique Wynguard Ranger, a powerful longbow with more range."],
            [
              "nerf",
              "Wynguard Army now trains 2 Spearman, 2 Crossbowmen, and 1 Trebuchet instead of 1 Spearman, 1 Man at Arms, 1 Knight, 1 Longbowman, and 1 Trebuchet.",
            ],
          ],
          note: "Previously, the discounted Trebuchet overshadowed the other options at the Wynguard. Now, each army presents a different opportunity for the English player. The Rangers and the Footmen are powerful new units for the late game.",
        },

        // 		* Wynguard Army
        // 			* No longer trains 1 Spearman, 1 Man at Arms, 1 Knight, 1 Longbowman, and 1 Trebuchet.
        // 			* Now trains 2 Spearman, 2 Crossbowmen, and 1 Trebuchet.
        // 			* Cost and train time unchanged at 100 food, 100 wood, 200 gold, and 75 seconds.
        {
          items: ["units/wynguard-army"],
          civs: ["en"],
          diff: [
            ["nerf", "Now trains 2 Spearman, 2 Crossbowmen, and 1 Trebuchet instead of 1 Spearman, 1 Man at Arms, 1 Knight, 1 Longbowman, and 1 Trebuchet"],
            ["fix", "Cost and train time unchanged at 100 food, 100 wood, 200 gold, and 75 seconds."],
          ],
        },
        // * Wynguard Raiders
        // 	* Still trains 3 Horsemen and 3 Knights.
        // 	* Train time increased from 20 to 25.
        {
          items: ["units/wynguard-raiders"],
          civs: ["en"],
          diff: [
            ["nerf", "Train time increased from 20 to 25."],
            ["fix", "Still trains 3 Horsemen and 3 Knights."],
          ],
        },
        // * Wynguard Rangers
        // 	* Train time reduced from 60 to 50 seconds.
        // 	* Damage increased from 10 to 12.
        // 	* Health increased from 110 to 125.
        // 	* Attacks slightly faster, attack speed changed from 1.65 to 1.62 (matches longbow).
        // *Developer Note:*/We wanted the Wynguard Raiders to be a more valuable option based on your feedback from the PUP./
        {
          items: ["units/wynguard-rangers", "units/wynguard-ranger"],
          civs: ["en"],
          diff: [
            ["buff", "Wynguard Rangers no longer trains 3 Crossbowmen and 3 Handcannoneers, instead trains 6 Wynguard Rangers, a powerful new unique unit."],
            ["nerf", "Wynguard Rangers cost and train time changed from 200 food, 100 gold, and 75 seconds to 250 gold, 450 wood, and 50 seconds"],
            ["buff", "Train time reduced from 60 to 50 seconds."],
            ["buff", "Damage increased from 10 to 12."],
            ["buff", "Health increased from 110 to 125."],
          ],
          note: "We wanted the Wynguard Rangers to be a more valuable option based on your feedback from the Public Update Preview.",
        },
        // * *New:**Wynguard Footmen*
        // 	* Footmen – Train time decreased from 60 to 50.
        // 	* HP increased from 190 to 280.
        // 	* Corrected an issue where Wynguard Footmen and King could not be selected with military shortcuts.
        // 	* Fixed a bug where Wynguard Footmen and Man At Arms were both selected with a double click.
        {
          items: ["units/wynguard-footmen", "units/wynguard-footman"],
          civs: ["en"],
          diff: [
            ["buff", "Wynguard Palace now has access to the Wynguard Footmen, a more powerful unique variation on the Man-at-arms."],
            ["nerf", "6 Wynguard Footmen costs 200 food, 500 gold, and takes 60 seconds to train."],
            ["buff", "Train time decreased from 60 to 50 (from the PUP)"],
            ["buff", "HP increased from 190 to 280 (from the PUP)"],
            ["fix", "Corrected an issue where Wynguard Footmen and King could not be selected with military shortcuts."],
            ["fix", "Fixed a bug where Wynguard Footmen and Man At Arms were both selected with a double click."],
          ],
        },

        // *Developer Note:*/Previously, the discounted Trebuchet overshadowed the other options at the Wynguard. Now, each army presents a different opportunity for the English player. The Rangers and the Footmen are powerful new units for the late game./

        // * Enclosures gold generation time increased from every 3.5 second to every 5 seconds.
        {
          items: ["technologies/enclosures", "buildings/farm"],
          civs: ["en"],
          diff: [["nerf", "Enclosures gold generation time increased from 1 gold every 3.5 second to 1 gold every 5 seconds."]],
        },
        {
          items: ["buildings/mill", "buildings/farm"],
          civs: ["en"],
          diff: [["fix", "Fixed a bug where English farm influence lingered after nearby mills were destroyed."]],
        },
        {
          // * Fixed a text bug for Network of Castles to report the correct attack speed value from 25% to 20%. Same for Network of Citadels bonus, text corrected from 50% to 40%.
          // 	* Reduced the values of Network of Castles from 20% to 15%.
          // 	* Reduced the values of Network of Citadels from 40% to 30%.
          // *Developer Note*: Network of Castles and Citadels attack speed bonus is effectively being changed from 20% / 40% to 15% / 30% as the bonus was simply providing too much power.
          items: ["technologies/network-of-citadels"],
          civs: ["en"],
          diff: [
            ["nerf", "Reduced the values of Network of Castles from 20% to 15%."],
            ["nerf", "Reduced the values of Network of Citadels from 40% to 30%."],
            [
              "fix",
              "Fixed a text bug for Network of Castles to report the correct attack speed value from 25% to 20%. Same for Network of Citadels bonus, text corrected from 50% to 40%.",
            ],
          ],
          note: "Network of Castles and Citadels attack speed bonus is effectively being changed from 20% / 40% to 15% / 30% as the bonus was simply providing too much power.",
        },
        // *Units and More*
        // * King
        // 	* Corrected an issue where His Grace would not take extra damage from Crossbowman.
        // * Setup Camp Ability
        // 	* Updated help text clarity on requirement that Setup Camp cannot be activated if already within one.
        {
          items: ["technologies/setup-camp"],
          civs: ["en"],
          diff: [["fix", "Updated help text clarity on requirement that Setup Camp cannot be activated if already within one."]],
        },
        // * Fixed a bug where English farm influence lingered after nearby mills were destroyed.
      ],
    },
    {
      civs: ["fr"],
      subtitle: "French",
      changes: [
        //             Chamber of Commerce Landmark
        // No longer provides additional resources to Traders.
        // Automatically trains one free Trader for each economic technology researched.
        {
          items: ["buildings/chamber-of-commerce"],
          civs: ["fr"],
          diff: [
            ["nerf", "No longer provides additional resources to Traders."],
            ["buff", "Automatically trains one free Trader for each economic technology researched."],
          ],
        },
        // College of Artillery Landmark
        // Royal Artillery bonus damage increased from +20% to +30%.
        // Can research Gunpowder and Siege technologies: Chemistry, Siege Works, Greased Axles.
        // Works 50% faster.
        // Unlocks the Artillery Shot ability on all Cannons:
        // Loads the Cannon for an Artillery Shot, next shot has greatly increased Area of Effect but no bonus against buildings.
        {
          items: ["buildings/college-of-artillery"],
          civs: ["fr"],
          diff: [
            ["buff", "Royal Artillery bonus damage increased from +20% to +30%."],
            ["buff", "Can now research Gunpowder and Siege technologies (Chemistry, Siege Works and Greased Axles)."],
            ["buff", "Now works 50% faster."],
            [
              "buff",
              "Unlocks the Artillery Shot ability on all Cannons: Loads the Cannon for an Artillery Shot, next shot has greatly increased Area of Effect but no bonus against buildings.",
            ],
          ],
        },
        // Red Palace Landmark
        // Now activates an Arbalest weapon on all Keeps and Town Centers.
        {
          items: ["buildings/red-palace"],
          civs: ["fr"],
          diff: [["buff", "Now activates an Arbalest weapon on all Keeps and Town Centers."]],
        },
        // Naval
        // Hulk ranged armor increased from 3 to 4.
        {
          items: ["units/hulk"],
          civs: ["fr"],
          diff: [["buff", "Ranged armor increased from 3 to 4."]],
        },
      ],
    },
    {
      civs: ["hr"],
      subtitle: "Holy Roman Empire",
      changes: [
        //             Meinwerk Palace Landmark
        // Now holds two technologies unique to the landmark.
        {
          items: ["buildings/meinwerk-palace"],
          civs: ["hr"],
          diff: [["buff", "Now holds two technologies unique to the landmark, Riveted Chain Mail and Steel Barding."]],
        },
        // Riveted Chain Mail: Spearmen and Horsemen +2 melee armor, costs 75 food 175 gold.
        // Riveted Chain Mail removed from the Barracks.
        {
          items: ["technologies/riveted-chain-mail"],
          civs: ["hr"],
          diff: [
            ["nerf", "Move from the Barracks to the Meinwerk Palace."],
            ["nerf", "Spearmen gain +2 melee armor instead of +3"],
            ["buff", "Now applies +2 melee armor to Horsemen as well."],
            ["buff", "Cost reduced from 150 food 350 gold to 75 food 175 gold (45 food 105 gold with Meinwerk bonus)"],
          ],
        },
        // Steel Barding: Knights gain +2 armor, costs 200 food 500 gold.
        {
          items: ["technologies/steel-barding"],
          civs: ["hr"],
          diff: [
            ["buff", "New unique technology that grands Knights +2 armor."],
            ["fix", "Costs 200 food 500 gold."],
          ],
        },
        // Fixed an issue where Regnitz Cathedral Landmark does not correctly follow hotkey rebinds for Monastery.
        {
          items: ["buildings/regnitz-cathedral"],
          civs: ["hr"],
          diff: [["fix", "Fixed an issue where Regnitz Cathedral Landmark does not correctly follow hotkey rebinds for Monastery."]],
        },
        // Fixed an issue where the emplacement discount bonus did not apply to naval arrowslit emplacements.
        {
          items: ["technologies/naval-arrowslits"],
          civs: ["hr"],
          diff: [["fix", "Fixed an issue where the emplacement discount bonus did not apply to naval arrowslit emplacements."]],
        },
        // Fixed a bug where the Prelate Inspire ability cooldown could be skipped.
        {
          items: ["units/prelate"],
          civs: ["hr"],
          diff: [["fix", "Fixed a bug where the Prelate Inspire ability cooldown could be skipped."]],
        },
      ],
    },
    {
      civs: ["ma"],
      subtitle: "Malians",
      changes: [
        // Farimba Garrison
        // Farimba Garrison Landmark  footprint decreased from 5×5 to 4×4 so that it matches the size of all other landmarks in the game.
        // Fixed an issue where Javelin Throwers and Archers that are upgraded while in queue at Farimba Garrison Landmark could take up more population than intended.
        // Corrected an issue where Archers couldn’t be further upgraded at the Landmark if first upgraded at the Archery Range.
        // Gold reduction bonus reduced from 20% to 10%.
        {
          items: ["buildings/farimba-garrison"],
          civs: ["ma"],
          diff: [
            ["nerf", "Gold reduction bonus reduced from 20% to 10%."],
            ["fix", "Footprint decreased from 5×5 to 4×4 so that it matches the size of all other landmarks in the game."],
            [
              "fix",
              "Fixed an issue where Javelin Throwers and Archers that are upgraded while in queue at Farimba Garrison Landmark could take up more population than intended.",
            ],
            ["fix", "Corrected an issue where Archers couldn’t be further upgraded at the Landmark if first upgraded at the Archery Range."],
          ],
        },

        // Fort of the Huntress Landmark
        // FFort of the Huntress Landmark footprint decreased from 5×5 to 4×4 so that it matches the size of all other landmarks in the game.
        // Fixed an issue where the Fort of the Huntress preferred Rams as targets over other units.
        {
          items: ["buildings/fort-of-the-huntress"],
          civs: ["ma"],
          diff: [
            ["fix", "Footprint decreased from 5×5 to 4×4 so that it matches the size of all other landmarks in the game."],
            ["fix", "Fixed an issue where the Fort of the Huntress preferred Rams as targets over other units."],
          ],
        },

        // Griot Bara Landmark
        // Corrected tooltip on amount of bonus displayed on the Siege Festival from 100% to 50%.
        {
          items: ["buildings/griot-bara"],
          civs: ["ma"],
          diff: [["fix", "Corrected tooltip on amount of bonus displayed on the Siege Festival from 100% to 50%."]],
        },
        //  Mansa Quarry Landmark no longer displays as a Resource Production unit.
        {
          items: ["buildings/mansa-quarry"],
          civs: ["ma"],
          diff: [["fix", "Mansa Quarry Landmark no longer displays as a Resource Production unit."]],
        },
        // Technology Tree
        // Now mentions that Malian Villagers have a specific bonus for Cattle.
        // Added a missing bonus for cheaper veteran unit technologies to the tech tree.
        // Added a missing bonus that describes Malians ability to reduce research times of future technologies based on successful trades from Traders.
        {
          items: [],
          title: "Technology Tree",
          civs: ["ma"],
          diff: [
            ["fix", "Now mentions that Malian Villagers have a specific bonus for Cattle."],
            ["fix", "Now mentiones 'Farari's Knowledge', that halfs the costs for veteran unit upgrades."],
            ["fix", "Now mentions that research times of future technologies reduced based on successful trades from Traders."],
          ],
        },

        // Malian wonder footprint and structure size increased from 5×5 to 6×6 so it matches the size of all other wonders in the game.
        {
          items: ["buildings/great-mosque"],
          civs: ["ma"],
          diff: [["fix", "Malian wonder footprint and structure size increased from 5×5 to 6×6 so it matches the size of all other wonders in the game."]],
        },

        // Houses health increased from 400 to 500.
        {
          items: ["buildings/house"],
          civs: ["ma"],
          diff: [["buff", "Malian house health increased from 400 to 500."]],
        },

        // Local Knowledge Technology.
        // Moved from Imperial Age to the Castle Age.
        // Cost reduced from 200 Food 500 Gold to 100 Food 250 Gold. Research time reduced from 90 to 60 seconds.
        {
          items: ["technologies/local-knowledge"],
          civs: ["ma"],
          diff: [
            ["buff", "Moved from Imperial Age to the Castle Age."],
            ["buff", "Cost reduced from 200 Food 500 Gold to 100 Food 250 Gold."],
          ],
        },

        // Fixed an issue where the Malian Pit Mine could be built on top of a structure built over a depleted gold deposit.
        {
          items: ["buildings/pit-mine"],
          civs: ["ma"],
          diff: [["fix", "Fixed an issue where the Malian Pit Mine could be built on top of a structure built over a depleted gold deposit."]],
        },

        // Units
        // Musofadi Warriors
        // Damage decreased in the Feudal Age from 9 to 8.
        // Bonus damage increased from 9 to 10.
        // Damage decreased in the Castle Age from 12 to 9.
        // Bonus damage increased from 12 to 15.
        // Damage decreased in the Imperial Age from 15 to 12.
        // Bonus damage increased from 15 to 18.
        {
          items: ["units/musofadi-warrior"],
          civs: ["ma"],
          diff: [
            ["nerf", "Base damaged decreased (Feudal: 9 to 8, Castle: 12 to 9, Imperial: 15 to 12)."],
            ["buff", "Bonus damage vs heavy increased (Feudal: 9 to 10, Castle: 12 to 15, Imperial: 15 to 18)."],
          ],
        },

        // Warrior Scout
        // Health regeneration increased to 2 HP per second starting in the Feudal Age
        {
          items: ["units/warrior-scout"],
          civs: ["ma"],
          diff: [["buff", "Health regeneration increased to 2 HP per second starting in the Feudal Age."]],
        },
        // Known issue: Unit help text will be out of date.
        // Deer are no longer startled by and run from units in stealth.
        // Enemy buildings and Gaia no longer reveal units in stealth.
        {
          items: [],
          title: "Stealth",
          civs: ["ma"],
          diff: [
            ["fix", "Deer are no longer startled by and run from units in stealth."],
            ["fix", "Enemy buildings and Gaia no longer reveal units in stealth."],
          ],
        },
        // Fixed visual issue with Cattle garrisoned in a ranch.
        {
          items: ["buildings/cattle-ranch"],
          civs: ["ma"],
          diff: [["fix", "Fixed visual issue with Cattle garrisoned in a ranch."]],
        },

        // Naval
        //         Manuscript Trade Technology
        // No longer affects the Naval Arrowslits technology.
        // Now applies to the Boiling Oil technology.
        {
          title: "Manuscript Trade Civilization Bonus",
          items: ["technologies/naval-arrowslits", "technologies/boiling-oil"],
          civs: ["ma"],
          diff: [["fix", "No longer affects the Naval Arrowslits technology and now applies to the Boiling Oil technology."]],
        },

        // Coastal Navigation move speed duration increased from 10 seconds to 25.
        {
          title: "Coastal Navigation Civilization Bonus",
          items: ["buildings/dock"],
          civs: ["ma"],
          diff: [["buff", "Bonus move speed near docks duration increased from 10 seconds to 25."]],
        },
        // Hunting Parties naval technology now also gives arrow ships +20 bonus damage when attacking fire ships.
        {
          items: ["technologies/canoe-tactics"],
          civs: ["ma"],
          diff: [["buff", "Canoe Tactics now also gives arrow ships +20 bonus damage when attacking fire ships."]],
        },
      ],
    },
    {
      civs: ["mo"],
      subtitle: "Mongols",
      changes: [
        //             Kurultai Landmark
        // No longer requires the Khan nearby to apply damage buff.
        // Damage buff properly applies to bonus damage.
        // Aura radius increased from 7.5 to 10 tiles.
        {
          items: ["buildings/kurultai"],
          civs: ["mo"],
          diff: [
            ["buff", "No longer requires the Khan nearby to apply damage buff."],
            ["fix", "Damage buff properly applies to bonus damage."],
            ["buff", "Aura radius increased from 7.5 to 10 tiles."],
          ],
        },
        // Khaganate Palace Landmark
        // Automatically rallies a random army from across the Mongol Empire and its dominions:
        // 3 Elite Rus Knights
        // 2 Warrior Monks
        // 5 Elite Horse Archers
        // 1 Nest of Bees
        // 5 Elite Palace Guard
        // 4 Elite Mangudais
        // 1 Hui Hui Pao Trebuchet (Massive Trebuchet with greatly increased range and damage).
        // Train times are scaled based on the unit, but in general spawn much faster than the previous 90 seconds.
        {
          items: ["buildings/khaganate-palace"],
          civs: ["mo"],
          diff: [
            ["buff", "Automatically rallies a random army from across the Mongol Empire and its dominions."],
            ["buff", "Train times are scaled based on the unit, but in general spawn much faster than the previous 90 seconds."],
            // ["fix", "3 Elite Rus Knights"],
            // ["fix", "2 Warrior Monks"],
            // ["fix", "5 Elite Horse Archers"],
            // ["fix", "1 Nest of Bees"],
            // ["fix", "5 Elite Palace Guard"],
            // ["fix", "4 Elite Mangudais"],
            // ["fix", "1 Hui Hui Pao Trebuchet"],
          ],
        },
        {
          items: ["buildings/khaganate-palace", "units/huihui-pao"],
          civs: ["mo"],
          diff: [["buff", "Khaganate Palace can now randomly spawn a Hui Hui Pao (Massive Trebuchet with greatly increased range and damage)"]],
        },
        {
          items: ["buildings/khaganate-palace", "units/khaganate-nest-of-bees"],
          civs: ["mo"],
          diff: [["buff", "Khaganate Palace can now randomly spawn a Chinese Nest of Bees"]],
        },
        {
          items: ["buildings/khaganate-palace", "units/khaganate-palace-guard"],
          civs: ["mo"],
          diff: [["buff", "Khaganate Palace can now randomly spawn 5 Elite Chinese Palace Guards"]],
        },
        {
          items: ["buildings/khaganate-palace", "units/khaganate-warrior-monk"],
          civs: ["mo"],
          diff: [["buff", "Khaganate Palace can now randomly spawn 2 Rus Warrior Monks"]],
        },
        {
          items: ["buildings/khaganate-palace", "units/khaganate-knight"],
          civs: ["mo"],
          diff: [["buff", "Khaganate Palace can now randomly spawn 3 Elite Rus Knights"]],
        },
        {
          items: ["buildings/khaganate-palace", "units/khaganate-mangudai"],
          civs: ["mo"],
          diff: [["buff", "Khaganate Palace can now randomly spawn 4 Elite Mangudais"]],
        },
        {
          items: ["buildings/khaganate-palace", "units/khaganate-horse-archer"],
          civs: ["mo"],
          diff: [["buff", "Khaganate Palace can now randomly spawn 5 Elite Rus Horse Archers"]],
        },

        // Mongol Silver Tree Landmark
        // Fixed an issue where Mongol Silver Tree Landmark does not correctly follow hotkey rebinds for Market.
        // Increased double trader production cost on Silver Tree from 90 > 120.
        {
          items: ["buildings/the-silver-tree"],
          civs: ["mo"],
          diff: [
            ["fix", "Fixed an issue where Mongol Silver Tree Landmark does not correctly follow hotkey rebinds for Market."],
            ["nerf", "Increased double trader production cost in Ovoo influence from 90 stone to 120 stone."],
          ],
        },
        // White Stupa Landmark
        // Now contains Ovoo technologies.
        {
          items: ["buildings/the-white-stupa"],
          civs: ["mo"],
          diff: [["buff", "Now contains all ovoo technologies."]],
        },

        // Units

        // Mangudai
        // Decreased move speed from 1.62 to 1.56.
        // Damage decreased from 7/9/10 to 5/6/8.
        // Now attacks faster, attack speed from 1.25 to 0.88 (dps should remain relatively unchanged against unarmored targets).
        // Developer Note: This unit was tweaked to be less effective in large team games where the mobility and fire on the go is extremely potent. We don’t normally balance units specifically for team games but it was such an outliner in power we felt changes were necessary.
        {
          items: ["units/mangudai"],
          civs: ["mo"],
          diff: [
            ["nerf", "Decreased move speed from 1.62 to 1.56."],
            ["nerf", "Damage decreased from 7/9/10 to 5/6/8 (Feudal/Castle/Imperial)."],
            ["buff", "Attack speed increased from 1.25 to 0.88"],
            ["fix", "DPS should remain relatively unchanged against unarmored targets"],
          ],
          note: "This unit was tweaked to be less effective in large team games where the mobility and fire on the go is extremely potent. We don’t normally balance units specifically for team games but it was such an outliner in power we felt changes were necessary.",
        },
        // Siha Bow Limbs technology requirement increased from Castle Age to Imperial Age.
        {
          items: ["technologies/siha-bow-limbs", "technologies/siha-bow-limbs-improved"],
          civs: ["mo"],
          diff: [["nerf", "Siha Bow Limbs technology requirement increased from Castle Age to Imperial Age."]],
        },

        // Signal Arrow changes
        // Khan Signal Arrow range increased from 25 to 35.
        // Whistling Arrows cost reduced from 100 food 250 gold to 50 food 125 gold.
        // Whistling Arrows (Improved) cost reduced from 350 stone to 175 stone.
        // Activating the Khan’s Scouting Falcon ability no longer cancels the Khan’s current commands.
        {
          title: "Signal Arrow changes",
          items: ["units/khan", "technologies/whistling-arrows", "technologies/whistling-arrows-improved"],
          civs: ["mo"],
          diff: [
            ["buff", "Khan Signal Arrow range increased from 25 to 35."],
            ["buff", "Whistling Arrows cost reduced from 100 food 250 gold to 50 food 125 gold."],
            ["buff", "Whistling Arrows (Improved) cost reduced from 350 stone to 175 stone."],
          ],
        },
        // Fixed a bug where Early Horsemen had less charge damage than their base weapon
        {
          items: ["units/horseman"],
          civs: ["mo"],
          diff: [["fix", "Fixed a bug where Early Horsemen had less charge damage than their base weapon."]],
        },
        // Fixed a bug where dark age spearmen had 12 torch damage instead of the intended 10. Oops!
        {
          items: ["units/spearman"],
          civs: ["mo"],
          diff: [["fix", "Fixed a bug where dark age spearmen had 12 torch damage instead of the intended 10."]],
        },
        // Mongol Packed Landmarks
        // Corrected a help text issue when converting into a packed cart.
        // Mongol buildings now show additional build menus in Caster Mode.
        // Fixed a bug where Improved Textiles upgrade hotkey binding wasn’t functioning properly.
        // Ovoo influence range now shows correctly during selection stage on larger stone deposits.
        // Using the Select all military buildings hotkey no longer selects packed Mongol Prayer Tents.
        {
          title: "Miscellaneous",
          items: [],
          civs: ["mo"],
          diff: [
            ["fix", "Corrected a help text issue when converting into a packed cart."],
            ["fix", "Mongol buildings now show additional build menus in Caster Mode."],
            ["fix", "Fixed a bug where Improved Textiles upgrade hotkey binding wasn’t functioning properly."],
            ["fix", "Ovoo influence range now shows correctly during selection stage on larger stone deposits."],
            ["fix", "Using the Select all military buildings hotkey no longer selects packed Mongol Prayer Tents."],
          ],
        },
      ],
    },
    {
      civs: ["ot"],
      subtitle: "Ottomans",
      changes: [
        //             Fixed the Twin Minaret Medrese Landmark sometimes trapping units in the generated berry bushes.
        {
          items: ["buildings/twin-minaret-medrese"],
          civs: ["ot"],
          diff: [["fix", "Fixed the Twin Minaret Medrese Landmark sometimes trapping units in the generated berry bushes."]],
        },
        // Mehmed Imperial Armory Landmark
        // Can now be toggled to produce Battering Rams.
        {
          items: ["buildings/mehmed-imperial-armory"],
          civs: ["ot"],
          diff: [["buff", "Can now be toggled to produce Battering Rams."]],
        },
        // Istanbul Imperial Palace Landmark
        // Fixed an issue where it was possible for the Landmark to repeatedly stack its bonus effect when killed and repaired.
        {
          items: ["buildings/istanbul-imperial-palace"],
          civs: ["ot"],
          diff: [["fix", "Fixed an issue where it was possible for the Landmark to repeatedly stack its bonus effect when killed and repaired."]],
        },

        // Sea Gate Castle Landmark
        // Fixed an issue where Traders could not garrison within the Landmark.
        // No longer loses its ability to buff Traders when another landmark is destroyed.
        // Fixed when Sea Gate Castle loses its ability to buff Traders when another landmark is destroyed.

        {
          items: ["buildings/sea-gate-castle"],
          civs: ["ot"],
          diff: [
            ["fix", "Fixed an issue where Traders could not garrison within the Landmark."],
            ["fix", "No longer loses its ability to buff Traders when another landmark is destroyed."],
          ],
        },
        // Incendiary Arrows Technology
        // Corrected an issue where Archers and Crossbowmen would lose their fire arrows after upgrading to a new tier.
        // Corrected an issue where Archers and Crossbowmen could attack with melee weapons after upgrading Incendiary Arrows.
        {
          items: ["technologies/incendiary-arrows", "units/archer", "units/crossbowman"],
          civs: ["ot"],
          diff: [
            ["fix", "Corrected an issue where Archers and Crossbowmen would lose their fire arrows after upgrading to a new tier."],
            ["fix", "Corrected an issue where Archers and Crossbowmen could attack with melee weapons after upgrading Incendiary Arrows."],
          ],
        },

        // The sound effect for when Vizier Points are ready to be spent is now linked to Sound Effects Volume in game settings.
        {
          items: [],
          title: "Vizier Points",
          civs: ["ot"],
          diff: [["fix", "The sound effect for when Vizier Points are ready to be spent is now linked to Sound Effects Volume in game settings."]],
        },
        // Units

        // Corrected an issue where Janissaries had .25 seconds of wind-up time in their attacks.
        // Developer Note: Normally this wind-up time would be included in the attack speed, but we decided to keep this as a minor attack speed increase.
        {
          items: ["units/janissary"],
          civs: ["ot"],
          diff: [
            ["buff", "Decreased attack speed from 1.75s to 1.5s"],
            ["fix", "Corrected an issue where Janissaries had .25 seconds of wind-up time in their attacks."],
          ],
          note: "Normally this wind-up time would be included in the attack speed, but we decided to keep this as a minor attack speed increase.",
        },

        // Mehter now correctly activate and apply their aura after being ungarrisoned.
        {
          items: ["units/mehter"],
          civs: ["ot"],
          diff: [["fix", "Mehter now correctly activate and apply their aura after being ungarrisoned."]],
        },
        // Naval

        // Grand Galley attacks much faster, attack speed changed from 5.75 > 4.
        // Ottoman Grand Galley
        // Adjusted help text to reflect that the ship contains garrison slots after converting into a Military School.
        {
          items: ["units/grand-galley"],
          civs: ["ot"],
          diff: [
            ["fix", "Adjusted help text to reflect that the ship contains garrison slots after converting into a Military School."],
            ["buff", "Grand Galley attacks much faster, attack speed changed from 5.75s > 4s."],
          ],
        },
        // Imperial Fleet naval technology production speed and move speed bonuses to gunpowder ships increased from 15% to 25%.
        {
          items: ["technologies/imperial-fleet"],
          civs: ["ot"],
          diff: [["buff", "Imperial Fleet naval technology production speed and move speed bonuses to gunpowder ships increased from 15% to 25%."]],
        },
      ],
    },
    {
      civs: ["ru"],
      subtitle: "Rus",
      changes: [
        //             Kremlin Landmark
        // The Kremlin may now Levy Militia to the Landmark Town Center.
        // Levy Militia Ability cost reduced from 100 to 40 food. Units spawned reduced from 6 to 2 Militia.
        // Levy Militia Ability now requires supplies to be used, with each Levy costing 1 supply.
        // The Kremlin gains +1 supply every 60 seconds automatically and for free.
        // Developer Note: You gave feedback in the PUP that the Militia levy ability could be used too easily for early aggression. We’re addressing this by reducing the lifetime of the Militia by 10 seconds as well as reducing the amount of Militia you can gain immediately when reaching the Feudal Age. It will now take 2 minutes to field 6 Militia after building the Kremlin.
        {
          items: ["buildings/kremlin", "units/militia"],
          civs: ["ru"],
          diff: [
            [
              "buff",
              "The Kremlin can now levy Militia to the Landmark Town Center. Militia are a fast and lightly armored unit that have a 90 second lifetime.",
            ],
            [
              "fix",
              "Levy Militia require 1 'supply' to be used, and spawn 2 Militia. The Kremlin gains +1 supply every 60 seconds automatically and for free.",
            ],
          ],
          note: "With this version of the Kremlin, players are now able to defend multiple parts of their base from raids beyond the direct radius of the Kremlin.",
        },
        {
          items: ["units/militia"],
          civs: ["ru"],
          diff: [
            ["buff", "Cost reduced from 100 to 40 food (change from PUP)."],
            ["nerf", "Units spawned reduced from 6 to 2 Militia (change from PUP)."],
          ],
          note: "You gave feedback in the PUP that the Militia levy ability could be used too easily for early aggression. We’re addressing this by reducing the lifetime of the Militia by 10 seconds as well as reducing the amount of Militia you can gain immediately when reaching the Feudal Age. It will now take 2 minutes to field 6 Militia after building the Kremlin. ",
        },
        // Abbey of the Trinity Landmark
        // Saint’s Reach effect increased from +3 range to +5 range on Warrior Monks blessing activation.
        // Saint’s Reach and Improved Blessing merged into one tech, renamed to Fervor.
        // Fervor: Improve the range of Saint’s Blessing by +5 tiles and the damage granted by +1.
        {
          items: ["buildings/abbey-of-the-trinity", "technologies/fervor", "units/warrior-monk"],
          civs: ["ru"],
          diff: [
            ["buff", "Saint’s Reach effect increased from +3 range to +5 range on Warrior Monks blessing activation."],
            [
              "fix",
              "Saint’s Reach and Improved Blessing merged into one tech, renamed to 'Fervor': Improve the range of Saint’s Blessing by +5 tiles and the damage granted by +1",
            ],
          ],
        },

        // New Technology: Saint’s Veneration
        // Provides +100 HP to Warrior Monks.
        // Cost 425 gold.
        // Available in Imperial Age.
        {
          items: ["buildings/abbey-of-the-trinity", "technologies/saints-veneration", "units/warrior-monk"],
          civs: ["ru"],
          diff: [
            [
              "buff",
              "New Technology: 'Saint’s Veneration' which increases the health of Warriro Monks by +100, costs 425 gold and is available in the Imperial Age.",
            ],
          ],
        },
        // High Trade House Landmark
        // Deer spawn time reverted from 45 to 60 seconds.
        {
          items: ["buildings/high-trade-house"],
          civs: ["ru"],
          diff: [["fix", "Deer spawn time reverted from 45 to 60 seconds (change originally planned in PUP)."]],
        },
        // High Armory Landmark
        // Technologies in the High Armory have been updated (base effect for nearby workshops stays the same).
        {
          items: ["buildings/high-armory"],
          civs: ["ru"],
          diff: [["fix", "Various technologies in the High Armory have been updated, while the base effect for nearby workshops stays the same."]],
          note: "The High Armory sees a lot of use for its discount aura, but since the nerf to Banded Arms the unique technologies are not used as much as we’d like. These changes provide additional utility to the other technologies.",
        },
        // Fine Tuned Guns
        // Effect changed from +20% Bombard Attack Speed to +20% Bombard Damage.
        // Now adds 60 bonus damage vs infantry for bombards.
        // Tech cost increased from 150 wood and 350 gold to 200 wood and 500 gold.
        {
          items: ["technologies/fine-tuned-guns"],
          civs: ["ru"],
          diff: [
            ["buff", "Effect changed from +20% Bombard Attack Speed to +20% Bombard Damage."],
            ["buff", "Now adds 60 bonus damage vs infantry for bombards."],
            ["nerf", "Tech cost increased from 150 wood and 350 gold to 200 wood and 500 gold."],
          ],
        },
        // Siege Crew Training
        // Effect of instant pack/unpack now also applies to Bombards.
        // Still applies to Mangonels and Trebuchets.
        {
          items: ["technologies/siege-crew-training"],
          civs: ["ru"],
          diff: [
            ["buff", "Effect of instant pack/unpack now also applies to Bombards."],
            ["fix", "Still applies to Mangonels and Trebuchets."],
          ],
        },
        // Wandering Town
        // Effect decreased from +100% damage to +50% damage.
        // Now also grants 2 healing per second in combat to rams.
        // Developer Note: The High Armory sees a lot of use for its discount aura, but since the nerf to Banded Arms the unique technologies are not used as much as we’d like. These changes provide additional utility to the other technologies.
        {
          items: ["units/battering-ram"],
          civs: ["ru"],
          diff: [
            ["nerf", "Effect decreased from +100% damage to +50% damage."],
            ["buff", "Now also grants 2 healing per second in combat to rams."],
          ],
        },
        // Spasskaya Tower Landmark
        // Health increased from 8000 to 10000.
        // Fixed a bug where construction of this landmark granted the Siege Crew Training upgrade for free.
        {
          items: ["buildings/spasskaya-tower"],
          civs: ["ru"],
          diff: [
            ["buff", "Health increased from 8000 to 10000."],
            ["fix", "Fixed a bug where construction of this landmark granted the Siege Crew Training upgrade for free."],
          ],
        },
        // Wooden Fortress Arrowslits
        // Corrected an issue with help text that referred to incorrect weapon range and emplacement requirements.
        {
          items: ["buildings/wooden-fortress", "technologies/arrowslits"],
          civs: ["ru"],
          diff: [["fix", "Corrected an issue with help text that referred to incorrect arrowslits weapon range and emplacement requirements."]],
        },
        // Boyars Fortitude
        // Cost reduced from 500 Gold, 200 Food to 250 Gold, 100 Food.
        // Research time reduced from 90 to 60 seconds.
        // Health bonus to cavalry increased from +20 to +30.
        {
          items: ["technologies/boyars-fortitude"],
          civs: ["ru"],
          diff: [
            ["buff", "Cost reduced from 500 Gold, 200 Food to 250 Gold, 100 Food."],
            ["buff", "Research time reduced from 90 to 60 seconds."],
            ["buff", "Health bonus to cavalry increased from +20 to +30."],
          ],
        },
        // Blessing Duration technology renamed to Divine Light.
        {
          items: ["technologies/divine-light"],
          civs: ["ru"],
          diff: [["fix", "Blessing Duration technology renamed to Divine Light."]],
        },
        // Units and Naval

        // Streltsy Unit
        // Corrected an issue with the Static Deployment ability where it was possible for it to trigger for a brief moment despite moving.
        {
          items: ["units/streltsy"],
          civs: ["ru"],
          diff: [["fix", "Corrected an issue with the Static Deployment ability where it was possible for it to trigger for a brief moment despite moving."]],
        },
        // Rus Deep fishing reduced from 1.9 to 1.71.
        // Rus Shore fishing increased from 1.19 to 1.26.
        // Rus Improved Palisade Wall
        // Health reduced from 3000 to 2500.
        // Build time reduced from 7 to 3 seconds.
      ],
    },
    {
      title: "Map Changes",
      civs: [],
      changes: [],
      md: `
## General
* We’re changing the name of the Mediterranean map to Baltic. 
> The reason for this change is that we have a Biome by the name of Mediterranean and it’s causing confusion with the map that is called Mediterranean.
* Maps are now alphabetically ordered in the map selection screen. 
* Biomes are now alphabetically ordered in the biome selection dropdown menu. 
* Made some map quality-of-life improvements: 
    * Cliffs should not generate at corners and block sacred sites 
    * Hills should not generate near shore, allowing dock placement. 
    * Carcasses will no longer drop through bridges. 
* Fixed a soft lock that would occur during the loading screen for Black Forest with certain Map Seeds. 

## Map-Specific Changes
### Altai
* Fixed a rare instance where one or more Trade Posts would fail to generate. 
### Prairie
* Players are pushed ever so slightly further apart from each other and closer to the edge of the map. 
### Mountain Clearing
* The resources surrounding the players are now more spread out and don’t clump up as much. 
* The amount of forest on the map has decreased, creating more space and allowing players more flanking opportunities. 
* Players are moved slightly further away from each other. 
    `,
    },
    {
      title: "AI Changes",
      civs: [],
      changes: [],
      md: `
## General AI Updates
The AI has had several improvements to how it handles its economy as well as its military and naval strategies. 
* Fixed villagers harvesting sheep that are following a scout.   
* Multiple AI fishing ships can now gather from the same deposit closer to their dock. 
* AI now researches military upgrades more effectively.  
> Military research used to heavily rely on knowing what units the enemy brings to a fight. Now it will get generally good upgrades based on it’s own army composition if it is unable to get enough information on the enemy forces./   
* AI Villagers are now assigned to the Drop Off Building they have constructed. 
* AI will now always try to build the first lumberyard near a forest. 
* AI early game economy was optimized to improve its wood gathering while transitioning to the Feudal Age. 
* When playing as the Abbasid Dynasty using ‘Hardest Difficulty’, the AI will prioritize researching the Fresh Foodstuffs upgrade as soon as it becomes available. 
* Adjusted the AI to have trebuchets be higher priority during Castle age and lower in Imperial age. Less infantry/cavalry are required than before to prioritize siege weapons. 
* After a drop-off building was built, the villagers who just built that drop-off should be prioritized to gather resources nearby. 
* Malian AI was adjusted to no longer produce cattle at the start of the game to improve their age up speed. They can start aging up as early as 3-4 minutes into the game. It is permitted to produce cattle after 6 minutes. 
* AI Ottoman war galley will now unload produced units on AI island to be used for future encounters. 
* The Rus AI can activate the Levy Militia ability from the Kremlin when threatened by enemies. 
* Fixed a bug where a scout could get stuck against a deer. 
* Fixed a bug where the AI would ignore some enemy units and may end combat early. 

## AI Naval Updates
* AI will prefer shore positions for building defensive fortification on naval maps. 
* For the AI, we increased the production priority of Transport ships when land military units are available. 
* AI transports will now avoid unloading their units at dangerous areas on enemy islands. 
* Few issues fixed regarding AI army being stuck due to one of the transports getting destroyed during the army loading phase. 
* AI Fire ship targeting selection has been improved, and AI fire ships will attack the enemy ships that will try to attack them at their dock.
* Fixed a bug where AI attempted to build docks and fishing ships on hybrid maps with small ponds. 
* Fixed a bug where the AI would occasionally take breaks from constructing a Landmark building and would prioritize gathering resources before returning to Landmark construction. 
`,
    },
    {
      title: "Ongoing Balance Changes",
      civs: [],
      changes: [],
      md: `
        ### Learnings From Public Update Previews
We appreciate how active you all were during the Public Update Preview! Thanks to your feedback, we were able to take some key actions related to balance. Here’s a quick overview of some of the changes made between the PUP build and now.
* Buff water bonuses for less popular civilizations on those maps.
* Revert changes to boar as everyone polled really likes the current behavior.
* Nerf trade because it’s too effective.
* Delhi Feudal age compensation to make up for reduced scholar healing in combat.
* Reduce Malian critical path strategy of going for the fast Farimba Garrison and pumping out tons of reduced cost units.

### Hard AI Difficulty
We’ve heard your feedback surrounding the recent changes to the Hardest AI difficulty and will be working to address these concerns in a future update. While we’re still working out specific details and timing, the plan is to revert the Hardest Difficulty AI to its previous implementation in the near future while we look into the best way to adapt existing or introduce new AI difficulty options.
`,
    },
    {
      title: "Enchanted Grove",
      civs: [],
      changes: [],
      md: `
        ## Enchanted Grove Event
        We’re starting off Season Four by inviting you to step into the wondrous and new Enchanted Grove, which starts on February 16th and runs through  March 29th. You can Get in the Grove to earn more portraits, coat of arms, and banners by completing challenges.
        ![Event Rewards](https://www.ageofempires.com/wp-content/uploads/2023/02/6.0_Events_Showcase_EnchantedGrove_square_1920x1920.jpg)
        `,
    },
    {
      title: "Ranked Season Four",
      civs: [],
      changes: [],
      md: `
        ## Ranked Play
        For those of you looking to test your mettle and seek glory, we’re excited to announce that ranked play starts right after Season Four begins. Get ready to gather your armies for Ranked Season Four starting on February 17th ! Age up through the ranks and earn your rewards when Ranked Season Four ends on June 7th. 
        ![rewards](https://www.ageofempires.com/wp-content/uploads/2023/02/6.0_RankedRewards_Showcase_1920x1920-1600x1600.jpg)
        
        
        ## Season Four Map Pools
We’re looking to keep things fresh with every new season and Season Four is no exception. We’re always aiming to include new maps a short while after they’re added into the game and mix in older maps when they haven’t been in the rotation for a while. To see which maps you like and know which tend to be popular, we’re always reading your feedback and looking at our data to inform which maps we want to include into our future rotations – so let us know your thoughts on Season Four’s new map rotation! To learn more about the new maps, read on below. 

To keep things fair for competitive ranked play, the Enchanted Grove biome will not be available on ranked maps. 

### 1v1 Ranked Map Pool for Season Four 
* Dry Arabia  
* Prairie  
* Lipany  
* Ancient Spires  
* Wetlands  
* Oasis  
* Altai  
* Boulder Bay  
* Waterholes

### Team Ranked Map Pool for Season Four
* Dry Arabia  
* Lipany  
* Hideout  
* High View  
* Mountain Clearing  
* Hill and Dale  
* Mongolian Heights  
* Baltic  
* Nagari 

`,
    },
    {
      title: "Build Spotlight",
      civs: [],
      changes: [],
      md: `
## New Maps
In Season Four, we’re introducing three new maps you can play on: 
Four Lakes, Continental, and Marshland!

![Four Lakes](https://www.ageofempires.com/wp-content/uploads/2023/02/four_lakes_icon.png)
### Four Lakes
A land surrounded by four lakes invites aggression from all sides, both on land and on water. Fight for control over the land and the lakes at the edge of the map! In this open map, action can happen anywhere and in every corner. Maintaining control over the lakes and islands at the edges of the map could be the key to victory at the center.   

![Continental](https://www.ageofempires.com/wp-content/uploads/2023/02/continental_icon.png)
### Continental
Continental makes its return from the original _Age of Empires_! An extensive island surrounded by ocean — the water holds numerous fish and stealth areas to ambush your foes. With water restricting maneuverability, your Town Center will be in close proximity to others, so take strategic care to balance your military for both water and land!   

![Marshland](https://www.ageofempires.com/wp-content/uploads/2023/02/marshland_icon.png)
### Marshland
Marshland is an open and aggressive environment set deep into the jungle, surrounded by boggy grounds. There are vast amounts of forest you can hide in to surprise your opponents, and though there are plenty of resources scattered in the swamps, beware of the dangerous wildlife lurking in the woods.  

## New Game Mode: Nomad
Start with a fresh slate in the Nomad game mode. Available in custom and skirmish games, Nomad gives you three scattered villagers to begin your rise through the Ages. 
Build your Town Center quickly to get a jump on your opponents or search out the best positioning for better resourcing. Be careful – there are no guarantees an enemy isn’t building right outside your vision range! 
Nomad has all the same options as Standard game mode, save that everyone always starts in random locations. Teams or no, your nomads are scattered across the map. 

![Nomand](https://www.ageofempires.com/wp-content/uploads/2023/02/Screenshot_NomadMode_02-2048x1152.jpg)

### Choosing the Mode
Select Nomad among the game modes in any Custom or Skirmish game setup.  
Note that once Nomad is set as the mode, the option for Teams Together/Apart (in the Map Setup screen) is removed. Scattering is part of the fun in Nomad! 

![Choosing the mode](https://www.ageofempires.com/wp-content/uploads/2023/02/HowTo_NomadGameMode.gif)

### Start Conditions
In Nomad, each player starts the game with three villagers spread around a broad section of the map. 
These villagers can start building a first Town Center. This first Town Center will be your Landmark Town Center and costs no resources. You won’t be able to build additional Town Centers until allowed by your civilization’s normal tech tree. 

![Start Conditions](https://www.ageofempires.com/wp-content/uploads/2023/02/Screenshot_NomadMode_03-2048x1152.jpg)

## Mod Browser Update
In this update, we are making significant improvements to make the Mod Browser experience more intuitive and useful for mod enjoyers:
* Dynamic search – Players can now see mods search results appear as soon as they start typing in the search input bar, without needing to click on a search button. 
* More relevant search results – We’ve made changes in how the server returns search results based on player’s search criteria.   
* Popular Search – Search results will now be sorted based on their “popularity” score which is calculated based on subscription numbers and ratings, so popular mods would appear first. 
* Official mods toggle – Players can now filter mods using the new “official” toggle to find official mods, as well as see a new official label on them. 
* Subscriber count display – We’ve added subscriber count on mod tiles to help players find popular mods quickly. 
* Pagination system – Players can now view search results with a new paging system to view them page by page, jump to a specific page or the first/last page.

## UI/UX Updates
### Minimap Zooming
You can now change the size of the minimap via the “Minimap Zoom Level” setting, by using the “Change Minimap Zoom Level” hotkey (default key: M), or the zoom button to the lower right of the minimap HUD. 
* Three sizes are available: Normal, 125%, and 150%. 
* The “Change Minimap Zoom Level” hotkey can be reassigned to a different key under Hotkey Settings. 
![New minimap](https://www.ageofempires.com/wp-content/uploads/2023/02/Screenshot_Minimap_Zoom.jpg)

### Improved Unit HUD
In this update, we are making an effort to improve the HUD’s unit stats panel with the following changes: 
* Movement speed will now be shown on the top level (previously shown in the detail stats overlay).
* Additional weapons and their stats are now available in the detail stats overlay. (i.e. Primary and secondary weapons for units, as well as emplacement weapons for keeps, towers, etc.) 
![Improved Unit Hud](https://www.ageofempires.com/wp-content/uploads/2023/02/new_ui.png)

* Duplicate weapons are now combined into one, and showing the number of times it repeats for better clarity.  (i.e. 12 Bow x 3 – Ranged)
![Improved Unit Hover](https://www.ageofempires.com/wp-content/uploads/2023/02/new_ui2.png)

> While there are still a few bugs with duplicate weapons, we wanted to get this quality of life feature into your hands sooner to start enjoying!/  

### Garrison UI Improvements
We have improved the garrison UI to ensure that when selecting a garrisoned building you can see both the Building’s Information panel (previously missing) and the Garrisoned Units on the right side of the Building base stats. 

![Improved Garrison UI](https://www.ageofempires.com/wp-content/uploads/2023/02/garrisonui.jpg)

### Improved Multiplayer Team UI
We’ve heard your feedback that in multiplayer games, you’d like to see team members displayed as grouped together to help you quickly understand who’s on what team. With this update, we made the change to display team members together clearly in the gameplay HUD to improve quick legibility. You’ll see this change in UI areas such as the Post Match Summary UI, Player Score, and Match History. 
### Tribute Changes*
In addition to the UI improvements, you’ll also now have the ability to bulk-tribute your gathered resources to your teammates in the tribute menu. 
* Hold down Shift key and click on resources to send x5 resources, Control key to send x10 resources. 

![Tribute UI](https://www.ageofempires.com/wp-content/uploads/2023/02/tribute.jpg)

## Landmark Reworks
Big changes here! We’ve taken a hard look at the landmark designs and changed some dramatically. Don’t worry, your favorites like the Golden Gate Landmark are untouched. We’ve looked at our data from the least used landmarks as well as many personal accounts from the community to target the underperformers. Our aims for these are to open up additional strategic options for the civilizations, create Landmarks that have more active and engaging strategies, and make the gameplay between Landmarks more unique. So we’ve buffed lesser used Landmarks and added more fun! 
Full details on the Landmark changes can be found under each civilization’s Civ-Specific Changes below. 

![Sultans Palace](https://www.ageofempires.com/wp-content/uploads/2023/02/Screenshot_Landmark_PalaceoftheSultan.jpg)

## Art of War Updates
While we knew some of you would survive long enough to get gold easily, we were surprised to see just _how_long a few people managed to make it with the Ottoman Art of War Challenges! These changes are aimed at those that made gold look trivial. 
* In the Ottoman Art of War challenge, enemy stone walls are now invulnerable. 
* In the Ottoman Art of War challenge, enemy waves continue to scale up after the gold medal is achieved. 

## Daily Challenges
All civilizations have new Daily Quests for all civilizations specific-challenges! 

## New Cheat Code
The newly-added cheat “minimally minimal” hides all UI. Perfect for screenshots, GIFs, villager selfies… whatever you want to capture! 

![wow](https://www.ageofempires.com/wp-content/uploads/2023/02/EnchantedBiome_02-Villager.gif)`,
    },
  ],
};
