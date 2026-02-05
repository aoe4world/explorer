import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-15-3-8338",
  buildId: "15.3.8338",
  name: "Patch 15.3.8338",
  season: 12,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-15-3-8338/",
  summary: `For now, we wanted to start the year off with some additional bug fixes and balance changes, as well as follow-up with a bulk reward of Perk Points for players who may have lost Perk Points from Masteries after the initial release of Dynasties of the East.`,
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/08/Season_Eight_Patch_Banner_1920x1080-1080x608.webp)
Happy New Year, Age IV players! 2026 is going to be another big year for Age of Empires IV, and we look forward to sharing more details in the future about the two DLCs we announced late last year.

For now, we wanted to start the year off with some additional bug fixes and balance changes, as well as follow-up with a bulk reward of Perk Points for players who may have lost Perk Points from Masteries after the initial release of Dynasties of the East. 

Read on to learn more about what’s new with this patch!
  `,
  date: new Date("2026-02-04T17:14:37Z"),
  sections: [
    {
      title: "Gameplay",
      civs: [],
      changes: [
        {
          title: "AI Update",
          items: [],
          civs: [],
          diff: [
            ["fix", "AI player will no longer issue conflicting commands to naval units, which results in the unit getting stuck in a command loop."],
          ],
        },
        {
            title: "UX/UI & Menus (All Platforms)",
            items: [],
            civs: [],
            diff: [
                ["fix", "While we’ve previously fixed other instances of the main menu stuttering when certain USB devices were plugged into the system, we now believe we’ve resolved all instances of this issue across all platforms."],
            ],
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
                  ["fix", "Various stability fixes made to reduce crashes across all platforms."],
                  ["fix", "Corrected issue where some units and their projectiles would not appear from the Fog of War after attacking."],
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
                ["fix", "Fixed an issue with the Beachhead Ram not gaining additional arrows from garrisoned units when the ability is activated."],
                ["fix", "Relics can no longer be duplicated using multiple Shamans with the Relic Ovoo ability."],
            ],
        },
      ],
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
            items: ["buildings/the-white-tower"],
            civs: ["hl"],
            diff: [
                ["fix", "The White Tower no longer researches technologies more quickly than other Keeps when playing as the House of Lancaster."],
            ],
        },
        {
            items: ["technologies/muster-the-nobles"],
            civs: ["hl"],
            uionly: true,
            diff: [
                ["fix", "Muster the Nobles tooltip now correctly states that it spawns four Demilancers rather than five."],
            ],
        },
      ],
    },
    {
        subtitle: "Mongols",
        civs: ["mo"],
        changes: [
            {
                items: ["units/khan"],
                civs: ["mo"],
                diff: [
                    ["fix", "The Khan will now properly shoot an arrow into the air when using one of the signal arrow abilities in the Imperial Age."],
                    ["fix", "Fixed an issue which prevented the Khan from granting nearby units +2 armor with the Defense Arrow ability."],
                ],
            },
            {
                items: [], // TODO: Monastery
                civs: ["mo"],
                diff: [
                    ["fix", "Queued Monastery units and upgrades are no longer lost when Monastic Shrines is researched."],
                ],
            },
        ],
    },
    {
      subtitle: "Sengoku Daimyo",
      civs: ["sen"],
      changes: [
        {
            items: ["buildings/hojo-clan-daimyo-estate"],
            civs: ["sen"],
            uionly: true,
            diff: [
                ["fix", "Fixed two Hojo Daimyo Estate upgrades that were mislabeled in the Remappable Hotkey list."],
            ],
        },
        {
            items: ["units/yatai"],
            civs: ["sen"],
            diff: [
                ["fix", "Fixed an issue where English villager units were unable to attack the Yatai."],
            ],
        },
        {
            items: ["abilities/ability-shinobi-ambush"],
            civs: ["sen"],
            diff: [
                ["fix", "Shinobi ambush ability can no longer be cast on walls."],
            ],
        },
        {
            items: ["buildings/sake-brewery"],
            civs: ["sen"],
            diff: [
                ["fix", "Villagers gathering from the Sake Brewery’s Toko-Koji mats no longer benefit from mining upgrades."],
            ],
        },
        {
            items: ["units/ikko-ikki-monk"],
            civs: ["sen"],
            diff: [
                ["fix", "Ikko Ikki Monks will now properly attack fleeing enemies after researching Mountain Top Training."],
            ],
        },
        {
            items: ["units/shinobi"],
            civs: ["sen"],
            diff: [
                ["fix", "Shinobi can no longer throw grenades without decreasing the grenade counter."],
            ],
        },
      ],
    },
    {
        subtitle: "Zhu Xi's Legacy",
        civs: ["zx"],
        changes: [
            {
                items: [], // TODO: Imperial Red Seals upgrade
                civs: ["zx"],
                diff: [
                    ["fix", "Fixed a bug where cancelling & requeuing the Imperial Red Seals upgrade would spawn extra Imperial Officials once the upgrade was researched."],
                ],
            },
        ],
    },
    {
      title: "Balance Changes",
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
            items: [],
            civs: ["ab"],
            diff: [
                ["buff", "Age up research time reduced from 105 seconds → 100 seconds for all Ages."],
            ],
        },
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
            items: ["buildings/ovoo"],
            civs: ["gol"],
            diff: [
                ["buff", "Ovoo health increased from 1500 → 1750."],
            ],
        },
        {
            items: ["units/keshik"],
            civs: ["gol"],
            diff: [
                ["buff", "Feudal Age health increased from 145 → 150."],
                ["buff", "Castle Age health increased from 175 → 180."],
                ["buff", "Imperial Age health increased from 210 → 215."],
            ],
        },
        {
            items: [], // TODO: Beachhead
            civs: ["gol"],
            diff: [
                ["buff", "Beachhead cost reduced from 500 Stone → 400 Stone."],
            ],
        },
        {
            items: [], // TODO: Barracks, Stable, and Archery Range reinforcements upgrades
            civs: ["gol"],
            diff: [
                ["nerf", "Barracks, Stable, and Archery Range reinforcements upgrades cost increased from 950 Stone → 1100 Stone."],
            ],
        },
        {
            items: ["technologies/padded-armor"],
            civs: ["gol"],
            diff: [
                ["nerf", "Padded Armor upgrade armor reduced from +2 → +1."],
            ],
        },
        {
            items: ["technologies/khan-debuff-arrow"],
            civs: ["gol"],
            diff: [
                ["nerf", "Debuff Arrow duration reduced from 15 seconds → 10 seconds."],
            ],
        },
      ],
    },
    {
        subtitle: "Holy Roman Empire",
        civs: ["hr"],
        changes: [
            {
                items: [],
                civs: ["hr"],
                diff: [
                    ["buff", "Inspiration duration increased from 35 → 38 seconds."],
                ],
            },
            {
                items: ["buildings/aachen-chapel"],
                civs: ["hr"],
                diff: [
                    ["buff", "Aachen Chapel aura range increased from 6.5 → 7 tiles."],
                ],
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
            ["nerf", "Feudal Age health reduced from 200 → 170."],
            ["nerf", "Castle Age health reduced from 225 → 200."],
            ["nerf", "Imperial Age health reduced from 250 → 235."],
          ],
        },
        {
            items: ["units/hobelar"],
            civs: ["hl"],
            diff: [
                ["nerf", "Increase Hobelar cost from 70 Food 20 Gold → 75 Food 20 Gold"],
            ],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
            items: ["units/uma-bannerman"],
            civs: ["ja"],
            diff: [
                ["nerf", "Uma Bannerman damage aura reduced from +15% → +10%."],
            ],
        },
      ],
    },
    {
        subtitle: "Knights Templar",
        civs: ["kt"],
        changes: [
            {
                items: ["units/genoese-crossbowman"],
                civs: ["kt"],
                diff: [
                    ["buff", "Genoese Crossbowman cost reduced from 100 Gold → 90 Gold."],
                ],
            },
            {
                items: ["technologies/safe-passage"],
                civs: ["kt"],
                diff: [
                    ["buff", "Safe Passage upgrade cost reduced from 100 Food 200 Wood → 50 Food 200 Wood."],
                ],
            },
            {
                items: ["technologies/sanctuary"],
                civs: ["kt"],
                diff: [
                    ["buff", "Cost reduced from 200 Food 250 Wood → 150 Food 250 Wood."],
                    ["buff", "Research time reduced from 20 → 15 seconds."],
                ],
            },
        ],
    },
    {
      subtitle: "Macedonian Dynasty",
      civs: ["mac"],
      changes: [
        {
            items: ["units/varangian-guard"],
            civs: ["mac"],
            diff: [
                ["nerf", "Dark Age damage reduced from 12 → 11."],
                ["nerf", "Berserk damage reduced from 6 → 5. Berserk damage remains unchanged in the Caste Age and Imperial Age."],
            ],
        },
        {
          items: ["units/riddari"],
          civs: ["mac"],
          diff: [
            ["nerf", "Damage reduced from 26 → 24."],
            ["nerf", "Elite damage reduced from 31 → 29."],
        ],
        },
        {
            items: ["technologies/butted-chainmail-tier2", "technologies/butted-chainmail-tier3", "technologies/lamellar-armor-tier2", "technologies/lamellar-armor-tier3", "technologies/scale-barding-tier2", "technologies/scale-barding-tier3"],
            civs: ["mac"],
            diff: [
                ["nerf", "Tier 2 costs increased from 500 Silver → 550 Silver."],
                ["nerf", "Tier 3 costs increased from 1000 Silver → 1100 Silver."],
            ],
        },
        {
            items: ["buildings/runestones"],
            civs: ["mac"],
            diff: [
                ["nerf", "Runestones requirements increased from 5 defeated enemies to 10 defeated enemies."],
            ],
        },
        {
            items: ["buildings/imperial-hippodrome"],
            civs: ["mac"],
            diff: [
                ["nerf", "Champion Scout damage reduced from 7 → 5."],
                ["nerf", "Champion Scout torch damage aura reduced from +35% → +25%."],
                ["nerf", "Champion Riddari infantry movement speed aura reduced from +15% → +10%."],
            ],
        },
      ],
    },
    {
        subtitle: "Mongols",
        civs: ["mo"],
        changes: [
            {
                items: ["units/keshik"],
                civs: ["mo"],
                diff: [
                    ["buff", "Feudal Age health increased from 145 → 150."],
                    ["buff", "Castle Age health increased from 175 → 180."],
                    ["buff", "Imperial Age health increased from 210 → 215."],
                ],
            },
            {
                items: ["buildings/ovoo"],
                civs: ["mo"],
                diff: [
                    ["buff", "Health increased from 1500 → 1750."],
                    ["buff", "Stone generation rate increased from 120 → 130 in the Castle Age."],
                    ["buff", "Stone generation rate increased from 150 → 160 in the Imperial Age."],
                ],
            },
            {
                items: ["units/horseman"],
                civs: ["mo"],
                diff: [
                    ["buff", "Early Horseman health increased from 110 → 115."],
                    ["buff", "Mongols now produce Horsemen +25% faster."],
                ],
            },
            {
                items: ["units/mangudai"],
                civs: ["mo"],
                diff: [
                    ["change", "After moving for 1 second, attack speed will begin to slow down from 0.88 → 1.97 seconds per attack."],
                    ["change", "Attack speed rapidly returns to normal when the unit stops moving."],
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
                    ["nerf", "Feudal Age health reduced from 155 → 145."],
                    ["nerf", "Castle Age health reduced from 185 → 175."],
                    ["nerf", "Imperial Age health reduced from 220 → 210."],
                ],
            },
        ],
    },
    {
      subtitle: "Sengoku Daimyo",
      civs: ["sen"],
      changes: [
        {
            items: ["buildings/ryokan"],
            civs: ["sen"],
            diff: [
                ["buff", "Ryokan healing increased from 3 every 6 seconds → 4 every 5 seconds."],
            ],
        },
      ],
    },
    {
      subtitle: "Tughlaq Dynasty",
      civs: ["tug"],
      changes: [
        {
            items: ["buildings/hisar-academy"],
            civs: ["tug"],
            diff: [
                ["buff", "Hisar Academy resource generation per active Governor increased from 50 Food 50 Gold → 70 Food 70 Gold."],
            ],
        },
        {
            items: ["buildings/tughlaqabad-fort"],
            civs: ["tug"],
            diff: [
                ["buff", "Shahi Walls cost reduced from 275 Stone → 250 Stone."],
                ["buff", "Red Brick Bastions cost reduced from 100 Gold 300 Stone → 75 Gold 275 Stone."],
                ["buff", "Tughlaqabad Fort Benefactor cost reduced from 100 Gold 350 Stone → 50 Gold 200 Stone."],
            ],
        },
        {
            items: ["buildings/house-of-learning"],
            civs: ["tug"],
            diff: [
                ["buff", "Neza Training cost reduced from 75 Food 250 Gold → 60 Food 150 Gold."],
                ["buff", "Khanda Drills cost reduced from 50 Food 200 Gold → 60 Food 150 Gold."],
                ["buff", "Elephant Caretakers cost reduced from 90 Food 225 Gold → 60 Food 150 Gold."],
                ["buff", "Collateral Damage cost reduced from 90 Food 225 Gold → 60 Food 150 Gold."],
            ],
        },
        {
            items: ["units/ballista-elephant"],
            civs: ["tug"],
            diff: [
                ["change", "Population cost increased from 3 → 4."],
                ["buff", "Damage increased from 16 → 18; bonus vs Infantry increased from 12 → 14."],
                ["buff", "Elite damage increased from 17 → 19; bonus vs Infantry increased from 14 → 18."],
            ],
        },
      ],
    },
  ],
};