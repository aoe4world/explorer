import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-15-2-7380-season-13",
  buildId: "15.2.7380",
  name: "Season 13 Update",
  season: 13,
  type: "update",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-update-15-2-7380/",
  summary: `This patch brings additional fixes to issues resulting in lost Perk Points, changes to our Ranked Map Pool, and adjustments to units like the Torguud, Worker Elephant, and Healer Elephant.`,
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/11/S9_Event_2_Patch_Banner-1080x608.webp)
Happy December to our Age of Empires IV community! 2025 has been an exciting year for Age IV – filled with updates, patches, our launch on PlayStation 5, as well as the releases of Knights of Cross and Rose and Dynasties of the East – and we can’t wait to see you in 2026!

Before we start prepping for the New Year, however, we wanted to deliver on some important bug fixes and balance changes, many of which impact content newly introduced in Dynasties of the East.

This patch brings additional fixes to issues resulting in lost Perk Points, changes to our Ranked Map Pool, and adjustments to units like the Torguud, Worker Elephant, and Healer Elephant.

Thanks again to our amazing community members, all of whom have helped to make Age of Empires what it is today!

—The Age of Empires Team
  `,
  date: new Date("2025-12-04T18:20:42Z"),
  sections: [
    {
      title: "Gameplay",
      civs: [],
      changes: [
        {
          title: "Visual Improvements",
          items: ["buildings/cistern", "buildings/cistern-of-the-first-hill"],
          civs: ["by"],
          diff: [["buff", "Improved Cistern and Cistern of the First Hill water visuals."]],
        },
        {
          title: "AI Update",
          items: [],
          civs: [],
          diff: [
            ["buff", "AI player will now train units from Imperial Age Landmarks when playing as the Golden Horde."],
            ["buff", "Golden Horde AI will use Stone Armies to produce more than just Kharash."],
            ["buff", "AI player will now train units from Imperial Landmarks for Macedonian civilization."],
          ],
        },
        {
          title: "UX/UI & Menus (Console)",
          items: [],
          civs: [],
          diff: [["fix", "The VPS can now construct Stockyards when playing as the Golden Horde on console."]],
        },
      ],
    },
    {
      title: "Bugfixes",
      subtitle: "General Bugfixes",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [
            ["fix", "Ongoing stability fixes to resolve a crash related to physics when Aging up right after damaging a building."],
            ["fix", "Fixed an issue where sending a gather command and an ability command in the same game tick would not register the gather command. This would cause Villagers to return to the wrong location when returning to work."],
            ["fix", "Placing a building as the game is paused will no longer cause the stamp to be removed with no refund given."],
            ["fix", "All cavalry units are now stunned by Palings."],
            ["fix", "Fixed an issue where “Select Idle” hotkeys were selecting units in combat from idle aggression."],
            ["fix", "Military units in Hold Position mode are no longer selected by idle military hotkeys."],
            ["fix", "Civilizations that cannot gather from Boar will no longer destroy the corpse after killing a Boar. The corpse will now remain gatherable for all civilizations that are allowed to gather from it."],
            ["fix", "Fixed an issue causing deer to continue to lose food over time if the Scout that was carrying them was killed."],
            ["fix", "Fixed an issue where unit idle combat scan range did not match attack move scan range. This would result in units at maximum range no longer being able to continue attacking when entering hold position."],
            ["fix", "Fixed a bug where converting a Villager did not always convert it to the correct civilization type."],
            ["fix", "Fixed an issue where siege carts would sometimes become invisible."],
            ["fix", "Fixed a rare crash in Full Moon game mode that appeared when the werewolves returned to their passive behavior."],
            ["fix", "Fixed a rare crash in “Blockade at Lumen Shan” that can occur when destroying the blockade."],
          ],
        },
      ],
    },
    {
      subtitle: "All Civilizations",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [
            ["fix", "Corrected a visual bug where tier 3 Delhi Sultanate, Abbasid Dynasty, and Ayyubid spearman used Tughlaq Dynasty’s improved spearman weapon."],
            ["fix", "Disabled Mongols and Golden Horde gaining stone when mining the meteorite."],
          ],
        },
      ],
    },
    {
      subtitle: "Golden Horde",
      civs: ["gol"],
      changes: [
        {
          items: ["units/shaman"],
          civs: ["gol"],
          uionly: true,
          diff: [["fix", "Fixed an issue where the Golden Horde Shaman could duplicate a relic if a relic Ovoo is built while conversion is active."]],
        },
        {
          items: ["units/kharash"],
          civs: ["gol"],
          diff: [["fix", "Fixed a bug where Kharash did not take bonus damage as a light infantry unit."]],
        },
        {
          items: ["technologies/triple-shot"],
          civs: ["gol"],
          diff: [["fix", "Removed the unintentional area damage from the Kipchak Archers Triple Shot upgrade."]],
        },
        {
          items: ["units/torguud"],
          civs: ["gol"],
          diff: [["fix", "Fixed an issue where Torguud would heal when attacking buildings without the Sarai Lancers tech."]],
        },
        {
          items: ["technologies/khan-debuff-arrow"],
          civs: ["gol"],
          diff: [["fix", "Fixed the Batu Khan Debuff Arrow from being able to block charging units."]],
        },
        {
          items: ["units/rus-tribute"],
          civs: ["gol"],
          diff: [["fix", "Fixed the Rus Tribute units constructing the incorrect field constructed siege weapons."]],
        },
        {
          items: ["technologies/khan-and-torguuds"],
          civs: ["gol"],
          diff: [["fix", "Fixed issues with the cost discount from the Khan and Torguud upgrade in later ages."]],
        },
        {
          items: [],
          civs: ["gol"],
          diff: [["fix", "Fixed some cost and production time inconsistent values on Golden Horde naval units."]],
        },
        {
          items: ["units/kipchak-archer", "units/rus-tribute"],
          civs: ["gol"],
          diff: [["fix", "Fixed the Kipchak Archer and Rus Tributes not getting the Glorious Charge buff."]],
        },
        {
          items: ["technologies/stone-armies"],
          civs: ["gol"],
          diff: [["fix", "Fixed the production speed of the Kipchak Archer stone armies not being faster; production time reduced from 48 to 24 seconds."]],
        },
        {
          items: [],
          civs: ["gol"],
          diff: [["fix", "Fixed a bug with the Dominion win condition where eliminating an enemy Monarch did not increase maximum population properly."]],
        },
        {
          items: ["abilities/ability-khan-combat-buff"],
          civs: ["gol"],
          uionly: true,
          diff: [["fix", "Fixed a tooltip issue with the Golden Horde Khan combat buff info."]],
        },
        {
          items: ["buildings/stockyard"],
          civs: ["gol"],
          uionly: true,
          diff: [["fix", "Fixed the description text of the Stockyard Grazing upgrades to correctly reference Stockyards rather than Pastures."]],
        },
        {
          items: [],
          civs: ["gol"],
          uionly: true,
          diff: [["fix", "Fixed the disabled text on the production speed edict to show +20%."]],
        },
        {
          items: ["technologies/muscovy-yasak"],
          civs: ["gol"],
          uionly: true,
          diff: [["fix", "Added a buff indicator for the units that get shields from the Muscovy Yasak age upgrade."]],
        },
        {
          items: ["units/kipchak-archer"],
          civs: ["gol"],
          uionly: true,
          diff: [["fix", "Fixed voice lines not playing for the Kipchak Archer in Age 4."]],
        },
        {
          items: ["units/kipchak-archer"],
          civs: ["gol"],
          diff: [["fix", "Corrected an issue which prevented the Kipchak from being upgraded to Elite Kipchak when playing on console."]],
        },
        {
          items: ["units/scout"],
          civs: ["gol"],
          diff: [["fix", "Fixed Scouts having only half health when produced from the Stables."]],
        },
        {
          items: ["buildings/stockyard"],
          civs: ["gol"],
          uionly: true,
          diff: [["fix", "The console VPS can now construct Stockyards when playing as the Golden Horde."]],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["units/shinobi"],
          civs: ["ja"],
          uionly: true,
          diff: [["fix", "The Shinobi’s Shunshin ability can now be cancelled if an attack move command is issued mid-animation."]],
        },
      ],
    },
    {
      subtitle: "Macedonian Dynasty",
      civs: ["mac"],
      changes: [
        {
          items: ["buildings/stone-wall"],
          civs: ["mac"],
          uionly: true,
          diff: [["fix", "Fixed an issue where damaged units on top of stone walls would produce many healing kickers."]],
        },
        {
          items: ["buildings/varangian-warcamp"],
          civs: ["mac"],
          diff: [["fix", "Fixed an issue where Varangian Warcamp reinforced ships could get stuck on land."]],
        },
        {
          items: ["technologies/polutasvarf"],
          civs: ["mac"],
          diff: [["fix", "Fixed an issue with the Polutasvarf where Varangians could be awarded Silver on dead or unrepaired landmarks."]],
        },
        {
          items: ["buildings/runestones"],
          civs: ["mac"],
          uionly: true,
          diff: [
            ["fix", "Runestones can now be cancelled during blueprints/unfinished construction."],
            ["fix", "Runestones help text improved for clarity."],
            ["fix", "Runestones ability range now displayed when selecting a Runestone."],
          ],
        },
        {
          items: ["units/dromon", "units/attack-ship"],
          civs: ["mac"],
          diff: [["fix", "Dromons and Attack Ships are no longer selected together when double-clicking."]],
        },
        {
          items: ["technologies/stronghold-defensive-arrowslits"],
          civs: ["mac"],
          diff: [["fix", "Fixed an issue where Spearman tier upgrades were blocked by Stronghold Defensive Arrowslits technology on console KBM."]],
        },
        {
          items: [],
          civs: ["mac"],
          diff: [["fix", "Fixed an issue where Monks were blocked by Food technologies on console KBM."]],
        },
        {
          items: ["buildings/varangian-warcamp"],
          civs: ["mac"],
          diff: [["fix", "Fixed a bug where Macedonian Dynasty Varangian Warcamps were being selected by the Select Dock hotkeys."]],
        },
        {
          items: [],
          civs: ["mac"],
          diff: [["fix", "Silver Deposits now immediately show silver visuals."]],
        },
        {
          items: ["buildings/town-center"],
          civs: ["mac"],
          diff: [["fix", "Units garrisoned in a Town Center when destroyed are no longer lost in an invisible void."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["buildings/mansa-quarry"],
          civs: ["ma"],
          diff: [["fix", "Fixed an issue where the Mansa Quarry was not properly destroyed."]],
        },
      ],
    },
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["units/gilded-archer"],
          civs: ["od"],
          diff: [["fix", "Elite Gilded Archers now correctly benefit from the Incendiary Arrows upgrade when attacking buildings."]],
        },
      ],
    },
    {
      subtitle: "Sengoku Daimyo",
      civs: ["sen"],
      changes: [
        {
          items: ["units/yatai"],
          civs: ["sen"],
          diff: [["fix", "Fixed an issue where the Yatai could be targeted by Rams but couldn’t be attacked."]],
        },
        {
          items: ["buildings/hojo-clan-daimyo-estate", "buildings/oda-clan-daimyo-estate", "buildings/takeda-clan-daimyo-estate"],
          civs: ["sen"],
          uionly: true,
          diff: [
            ["fix", "Daimyo Estates are no longer selected with Barracks selection hotkeys."],
            ["fix", "Daimyo Estates are no longer selected with Barracks on double click."],
          ],
        },
        {
          items: ["buildings/takeda-clan-daimyo-estate"],
          civs: ["sen"],
          diff: [["fix", "Fixed the Takeda Clan Daimyo Estate not getting bonus health on construction."]],
        },
        {
          items: ["units/tanegashima-ashigaru"],
          civs: ["sen"],
          uionly: true,
          diff: [["fix", "Fixed an issue where Castle Age Tanegashima Ashigaru missed their speech."]],
        },
        {
          items: ["technologies/silk-bowstrings", "units/naginata-samurai"],
          civs: ["sen"],
          diff: [["fix", "Fixed an issue where the Silk Bowstrings tech applies to the melee weapon on the Naginata Samurai."]],
        },
        {
          items: ["units/naginata-samurai"],
          civs: ["sen"],
          diff: [["fix", "Fixed an issue where Naginata Samurai with the Samurai Bow tech could get into a state where they fired constantly."]],
        },
        {
          items: ["units/yatai"],
          civs: ["sen"],
          diff: [["fix", "In Nomad mode, the Yatai being spawned after the first Town Center construction completes has been removed."]],
        },
        {
          items: ["units/ozutsu"],
          civs: ["sen"],
          uionly: true,
          diff: [["fix", "Fixed the Castle Age Ozutsu not playing voice lines."]],
        },
        {
          items: ["units/shinobi"],
          civs: ["sen"],
          uionly: true,
          diff: [["fix", "Fixed the unit description of the Sengoku Shinobi to be unique instead of shared with the Japanese version."]],
        },
        {
          items: ["technologies/yatai-farm-gather"],
          civs: ["sen"],
          uionly: true,
          diff: [["fix", "Fixed the Yatai Farm Gathering tech from causing the wrong base Food rate to be displayed on the Yatai. Added the increase of the Max rate to the tech descriptive text."]],
        },
        {
          items: ["units/yatai"],
          civs: ["sen"],
          diff: [["fix", "Fixed an issue where the Yatai could get multiple Ryokan healing buffs."]],
        },
        {
          items: ["units/trader", "units/yatai"],
          civs: ["sen"],
          diff: [["fix", "Fixed the Trader and Yatai not healing when they have the Ryokan healing buff."]],
        },
        {
          items: ["units/yatai"],
          civs: ["sen"],
          uionly: true,
          diff: [["fix", "Added select all and cycle through hot keys for the Yatai."]],
        },
        {
          items: ["buildings/hojo-clan-daimyo-estate", "buildings/oda-clan-daimyo-estate", "buildings/takeda-clan-daimyo-estate"],
          civs: ["sen"],
          uionly: true,
          diff: [["fix", "Added select and cycle hotkeys for the Daimyo Estate."]],
        },
        {
          items: ["units/kanabo-samurai"],
          civs: ["sen"],
          diff: [["fix", "Fixed an issue where the Kanabo Samurai can get the Yumi ranged weapon."]],
        },
        {
          items: ["units/yatai"],
          civs: ["sen"],
          diff: [["fix", "Fixed an issue where the Yatai could be targeted by the Naval Arrowslits."]],
        },
        {
          items: ["technologies/survival-techniques"],
          civs: ["sen"],
          uionly: true,
          diff: [["fix", "Removed Survival Techniques from the Sengoku Daimyo Farmhouse on the Tech Tree since it’s researched by default at the start of a match."]],
        },
        {
          items: ["abilities/ability-shinobi-ambush"],
          civs: ["sen"],
          diff: [["fix", "Fixed an issue where Sengoku Daimyo Shinobi Ambush could be used on partially constructed buildings, they must be fully constructed now."]],
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
          uionly: true,
          diff: [
            ["fix", "Worker Elephants are no longer selected when using “Select all cavalry”."],
            ["fix", "Produce Worker Elephant can now be found in the Town Centers remappable section."],
            ["fix", "Cycle through Worker Elephants can now be mapped to hotkeys."],
            ["fix", "Worker Elephant icon background color changed from military to economy."],
            ["fix", "Worker Elephant’s technology menu no longer uses Town Center icon."],
          ],
        },
        {
          items: ["technologies/professional-scouts"],
          civs: ["tug"],
          diff: [["fix", "Fixed a bug where Tughlaq Dynasty Scouts did not have the drop carcass ability after researching Professional Scouts."]],
        },
        {
          items: ["technologies/curse-of-auliya"],
          civs: ["tug"],
          uionly: true,
          diff: [["fix", "Fixed an issue where the Curse of Auliya upgrade did not provide a UI tooltip."]],
        },
        {
          items: ["buildings/madrasa"],
          civs: ["tug"],
          diff: [["fix", "Removed the ability to garrison in the Madrassa."]],
        },
        {
          items: ["buildings/house-of-learning"],
          civs: ["tug"],
          uionly: true,
          diff: [["fix", "Corrected House of Learning placement of technologies in the tech tree."]],
        },
        {
          items: ["buildings/tughlaqabad-fort"],
          civs: ["tug"],
          uionly: true,
          diff: [["fix", "Corrected Governor of Bhakkar’s passive ability text at tier 4 on Forts."]],
        },
        {
          items: ["buildings/tughlaqabad-fort"],
          civs: ["tug"],
          uionly: true,
          diff: [
            ["fix", "When multi-selecting Tughlaqabad Forts, the Springald Emplacement no longer changes position."],
            ["fix", "Tughlaqabad Fort Overwatch no longer appears in its own section on the dock when using console KBM."],
          ]
        },
      ],
    },
    {
      title: "Balance Changes",
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          items: ["technologies/preservation-of-knowledge"],
          civs: ["ab"],
          diff: [
            ["nerf", "Preservation of Knowledge upgrade no longer reduces Naval Arrowslit emplacement cost."]
          ]
        }
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["units/dromon"],
          civs: ["by"],
          diff: [
            ["buff", "Move speed increased from 1.5 to 1.62."],
            ["buff", "Damage increased from 6 to 7."],
            ["buff", "Added +3 bonus damage vs Incendiary Ships."],
            ["buff", "Ranged Armor increased from 3 to 4."],
          ],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["units/war-elephant"],
          civs: ["de"],
          diff: [["nerf", "War Elephant health reduced from 850 to 800."]],
        },
      ],
    },
    {
      subtitle: "Golden Horde",
      civs: ["gol"],
      changes: [
        {
          items: ["buildings/ger"],
          civs: ["gol"],
          diff: [["buff", "Ger cost reduced from 75 to 50 Wood."]],
        },
        {
          items: ["technologies/muscovy-yasak", "technologies/relic-ovoos", "technologies/stone-armies", "technologies/yam-network-trade"],
          civs: ["gol"],
          diff: [["buff", "Castle and Imperial Age upgrade production times reduced to match the Feudal Age time of 110 seconds."]],
        },
        {
          items: ["units/kipchak-archer"],
          civs: ["gol"],
          diff: [["nerf", "Kipchak Archer triple shot additional arrow damage from 50% to 30% and damage reduction now also affects the bleed damage applied from the additional arrows."]],
        },
        {
          items: ["technologies/stone-armies"],
          civs: ["gol"],
          diff: [
            ["nerf", "Stone armies Torguud discount reduced from 50% to 20%."],
            ["buff", "Kheshik cost reduced from 220 to 130 Stone."],
            ["buff", "Kipchak cost reduced from 100 to 80 Stone."],
            ["buff", "Trebuchet only produce a single unit and cost changed from 250 to 200 Stone."],
          ],
        },
        {
          items: ["units/torguud"],
          civs: ["gol"],
          diff: [
            ["nerf", "Torguud production time increased from 60/40/20 to 60/45/35 seconds."],
            ["nerf", "Torguud health reduced from 240/280/320 to 220/260/300."],
            ["nerf", "Torguud Damage reduced from 10/14/19 to 10/12/17."],
          ],
        },
        {
          items: ["technologies/increased-supplies"],
          civs: ["gol"],
          diff: [["nerf", "Increased Supplies no longer applies to the Golden Tent."]],
        },
      ],
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
          items: ["units/lord-of-lancaster"],
          civs: ["hl"],
          diff: [
            ["nerf", "Feudal Age health reduced from 220 to 200. Damage reduced from 16 to 14."],
            ["nerf", "Castle Age health reduced from 245 to 225. Damage reduced from 18 to 16."],
            ["nerf", "Imperial Age health reduced from 270 to 250. Damage reduced from 20 to 18."],
          ],
        },
        {
          items: ["buildings/lancaster-castle"],
          civs: ["hl"],
          diff: [["change", "No longer spawns additional units per Manor. Instead, costs of the levies are now reduced by 50 for each active Manor."]],
        },
        {
          items: ["technologies/muster-the-nobles"],
          civs: ["hl"],
          diff: [
            ["change", "Cost changed to 250 Food 250 Gold."],
            ["change", "Now spawns 4 Demilancers."],
          ],
        },
        {
          items: ["technologies/shire-levy"],
          civs: ["hl"],
          diff: [["buff", "Shire Levy: Now spawns 10 Yeomen."]],
        },
        {
          items: ["technologies/exact-militia-program"],
          civs: ["hl"],
          diff: [["buff", "Exact Militia Program: Now spawns 9 Demilancers, 9 Yeomen, and 9 Earl’s Guards."]],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["units/yumi-ashigaru"],
          civs: ["ja"],
          diff: [["nerf", "Increased the Food cost of the Yumi Ashigaru from 25 to 30."]],
        },
      ],
    },
    {
      subtitle: "Macedonian Dynasty",
      civs: ["mac"],
      changes: [
        {
          items: ["units/riddari"],
          civs: ["mac"],
          diff: [["nerf", "Riddari movement speed reduced from 1.75 to 1.7."]],
        },
        {
          items: ["units/dromon"],
          civs: ["mac"],
          diff: [
            ["buff", "Move speed increased from 1.5 to 1.62."],
            ["buff", "Damage increased from 6 to 7."],
            ["buff", "Added +3 bonus damage vs Incendiary Ships."],
            ["buff", "Ranged Armor increased from 3 to 4."],
          ],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["buildings/grand-fulani-corral"],
          civs: ["ma"],
          diff: [["nerf", "Fulani Corral food generation per Cattle reduced from 20 to 18."]],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["buildings/hunting-cabin"],
          civs: ["ru"],
          diff: [["buff", "Hunting Cabin cost decreased from 100 to 75 Wood."]],
        },
      ],
    },
    {
      subtitle: "Sengoku Daimyo",
      civs: ["sen"],
      changes: [
        {
          items: ["units/yumi-ashigaru"],
          civs: ["sen"],
          diff: [["nerf", "Increased the Food cost of the Yumi Ashigaru from 25 to 30."]],
        },
        {
          items: ["buildings/hojo-clan-daimyo-estate", "buildings/oda-clan-daimyo-estate", "buildings/takeda-clan-daimyo-estate"],
          civs: ["sen"],
          diff: [["buff", "Daimyo Estate base cost reduced from 150/150 to 125/125."]],
        },
        {
          items: ["units/yatai"],
          civs: ["sen"],
          diff: [["buff", "Yatai no longer cost population."]],
        },
        {
          items: ["units/shinobi"],
          civs: ["sen"],
          diff: [
            ["nerf", "Removed Shinobi health and damage scaling in the Castle and Imperial Age."],
            ["nerf", "Shinobi Ambush cooldown increased from 90 to 120 seconds."],
            ["nerf", "Shinobi duration reduced from 90 to 45 seconds."],
            ["nerf", "Shinobi Torinoko Grenade movement slow reduced from 30% to 25%."],
            ["nerf", "Shinobi Torinoko Grenade target increased damage taken effect reduced from 50% to 40%."],
          ],
        },
      ],
    },
    {
      subtitle: "Tughlaq Dynasty",
      civs: ["tug"],
      changes: [
        {
          items: ["units/healer-elephant"],
          civs: ["tug"],
          diff: [
            ["nerf", "Healer Elephant mounted Imam healing reduced from 7 to 5 health per second."],
            ["nerf", "Healer Elephant health reduced from 450 to 400."],
            ["nerf", "Elite Healer Elephant upgrade armor reduced from +3/4 to +2/3."],
          ],
        },
        {
          items: ["units/worker-elephant"],
          civs: ["tug"],
          diff: [
            ["nerf", "Worker Elephant no longer receives Blacksmith upgrades."],
            ["nerf", "Worker Elephant no longer capture sheep from outside vision range."],
          ],
        },
        {
          items: ["units/war-elephant"],
          civs: ["tug"],
          diff: [["nerf", "War Elephant health reduced from 850 to 800."]],
        },
        {
          items: ["units/raider-elephant"],
          civs: ["tug"],
          diff: [["buff", "Raider Elephant cost reduced from 200 Food 40 Wood to 180 Food 40 Wood."]],
        },
        {
          items: ["buildings/tower-of-victory"],
          civs: ["tug"],
          diff: [["buff", "Tower of Victory bonus increased from 15% to 20%."]],
        },
        {
          items: ["buildings/tughlaqabad-fort"],
          civs: ["tug"],
          diff: [
            ["buff", "Tughlaqabad Fort cost decreased from 425 to 400 Stone."],
            ["buff", "Tughlaqabad Fort Tier 1 upgrade cost reduced from 350 to 275 Stone"],
            ["buff", "Tughlaqabad Fort Tier 2 upgrade cost reduced from 350 to 300 Stone."],
          ],
        },
        {
          items: ["units/amir-warrior"],
          civs: ["tug"],
          diff: [["fix", "Amir Warriors can no longer be converted by monks."]],
        },
        {
          items: ["buildings/tughlaqabad-fort"],
          civs: ["tug"],
          diff: [["fix", "Governor of Uch no longer reduces Naval Arrowslits emplacement cost."]],
        },
      ],
    },
  ],
};
