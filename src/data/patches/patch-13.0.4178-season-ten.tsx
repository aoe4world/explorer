import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-13.0.4178-season-ten",
  buildId: "13.0.4178",
  name: "Season 10 Update",
  season: 10,
  type: "update",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-ten-update-preview/",
  summary:
    "Major siege combat adjustments including villager repair nerfs and Springald changes. Naval formations added, Professional Scouts nerfed, and significant civilization updates including Abbasid/Ayyubid Trade Caravans, HRE Black Riders, and Byzantine mercenary cost reductions.",
  introduction: `
  ![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2025/03/COC_Update_1920x1080.webp)
  "Spring is officially here, and Age of Empires IV is almost ready to blossom with a new ranked season! This update brings with it a fresh map pool and a bundle of balance changes, along with the kickoff of Ranked Season Ten. Be on the lookout for the Clash of Champions mini event, along with a unique new map feature.
Alongside this update, we will be releasing the Knights of Cross and Rose DLC across all platforms! Players can look forward to two new variant civilizations, the valorous Knights Templar and the ever-capable House of Lancaster. Additionally, the DLC will contain the new Historical Battles game mode, ten unique maps, and new achievements.
  `,
  date: new Date("2025-04-03T18:00:00Z"),
  sections: [
    {
      title: "General Changes & Bugfixes",
      subtitle: "",
      civs: [],
      changes: [
        {
          items: [],
          title: "Siege Units",
          civs: [],
          diff: [["fix", "Fixed a bug where siege units could become frozen when being commanded to turn while already turning."]],
        },
      ],
    },
    {
      title: "Balance",
      subtitle: "Global Changes",
      civs: [],
      changes: [
        {
          items: ["units/villager"],
          civs: [],
          diff: [["nerf", "Repair rate on Siege Engines reduced by 20%."]],
        },
        {
          items: ["buildings/stone-wall-tower"],
          civs: [],
          diff: [["buff", "Cost decreased from 300 to 250 stone."]],
        },
        {
          items: ["units/springald"],
          civs: [],
          diff: [
            ["nerf", "Base damage decreased from 16 to 14."],
            ["buff", "Bonus damage vs melee infantry increased from 10 to 12."],
          ],
        },
        {
          items: ["technologies/professional-scouts"],
          civs: [],
          diff: [
            ["nerf", "Cost increased from 100 wood 275 gold to 150 wood 300 gold."],
            ["nerf", "Movement speed penalty for Scouts carrying carcasses increased from 40% to 55%."],
          ],
        },
        {
          items: ["buildings/town-center"],
          civs: [],
          diff: [["buff", "Town Centers can now see into stealth forests."]],
        },
        {
          items: [],
          title: "Empire Wars",
          civs: [],
          diff: [["nerf", "All civilizations starting economy reduced by approximately 3 villagers."]],
        },
        {
          items: ["units/ships"],
          civs: [],
          diff: [["buff", "Ships now have access to Line, Column, and Staggered formations."]],
        },
      ],
    },
    {
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          items: ["buildings/house-of-wisdom"],
          civs: ["ab"],
          diff: [
            ["buff", "Added Golden Age UI Widget above Resource Panel showing current age and progress."],
            ["buff", "Widget displays Golden Age information on hover and selects House of Wisdom when clicked."],
          ],
        },
        {
          items: ["units/trader"],
          civs: ["ab"],
          diff: [
            ["buff", "Trader replaced with Trade Caravan."],
            ["fix", "Rides a Camel with Camel Unease aura."],
            ["nerf", "Health reduced from 90 to 60."],
            ["buff", "Speed increased from 1 to 1.56."],
            ["nerf", "Resource per minute income reduced by ~12% compared to normal trader."],
          ],
          note: "This is to compensate the increased speed, which increases the flow of gold and the survivability of the traders.",
        },
        {
          items: ["units/dervish"],
          civs: ["ab"],
          diff: [["fix", "Fixed an issue where the Passive Mass Heal ability was always shown for Dervishes."]],
        },
      ],
    },
    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          items: ["buildings/house-of-wisdom"],
          civs: ["ay"],
          diff: [
            ["buff", "Added Golden Age UI Widget above Resource Panel showing current age and progress."],
            ["buff", "Widget displays Golden Age information on hover and selects House of Wisdom when clicked."],
          ],
        },
        {
          items: ["units/trader"],
          civs: ["ay"],
          diff: [
            ["buff", "Trader replaced with Trade Caravan."],
            ["fix", "Details identical to Abbasid's Trade Caravan."],
            ["fix", "Atabeg appearance updated to be distinct from Trade Caravan."],
          ],
        },
        {
          items: ["technologies/master-smiths"],
          civs: ["ay"],
          diff: [["buff", "Now also grants Military Academy for free in addition to previous effects."]],
        },
        {
          items: ["technologies/feudal-economic-wing-industry"],
          civs: ["ay"],
          diff: [["buff", "Now also grants villagers +30/40/50% faster construction speed in addition to previous effects."]],
        },
        {
          items: ["technologies/feudal-economic-wing-growth"],
          civs: ["ay"],
          diff: [
            ["fix", "Fixed an issue where the villager gather rate increased would affect all villagers (including enemies)."],
            ["fix", "Fixed an issue where gather rate enhancement did not apply to newly produced villagers."],
          ],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["buildings/stone-wall-tower"],
          civs: ["by"],
          diff: [["nerf", "Mangonel emplacement damage reduced from 8 to 7."]],
        },
        {
          items: ["buildings/cistern"],
          civs: ["by"],
          diff: [["nerf", "Cost no longer scales with number built, now fixed at 125 stone."]],
        },
        {
          items: ["units/musofadi-warrior"],
          civs: ["by"],
          diff: [["buff", "Mercanery Musofadi Warrior batch cost reduced from 400 to 360 olive oil"]],
        },
        {
          items: ["units/camel-archer"],
          civs: ["by"],
          diff: [["buff", "Mercenary Camel Archer batch cost reduced from 480 to 440 olive oil"]],
        },
        {
          items: ["units/sipahi"],
          civs: ["by"],
          diff: [["buff", "Mercenary Sipahi batch cost reduced from 480 to 450 olive oil"]],
        },
        {
          items: ["units/arbaletrier"],
          civs: ["by"],
          diff: [["buff", "Mercenary Arbalétrier batch cost reduced from 480 to 440 olive oil"]],
        },
        {
          items: ["units/zhuge-nu"],
          civs: ["by"],
          diff: [["buff", "Mercenary Zhuge Nu batch cost reduced from 400 to 360 olive oil"]],
        },
        {
          items: ["units/war-elephant"],
          civs: ["by"],
          diff: [["buff", "Mercenary War Elephant cost reduced from 750 to 680 olive oil"]],
        },
        {
          items: ["units/royal-knight"],
          civs: ["by"],
          diff: [["buff", "Mercenary Royal Knight batch cost reduced from 480 to 460 olive oil"]],
        },
        {
          items: ["units/horse-archer"],
          civs: ["by"],
          diff: [["buff", "Mercenary Horse Archer batch cost reduced from 360 to 330 olive oil"]],
        },
        {
          items: ["units/mangudai"],
          civs: ["by"],
          diff: [["buff", "Mercenary Mangudai batch cost reduced from 480 to 435 olive oil"]],
        },
        {
          items: ["units/desert-raider"],
          civs: ["by"],
          diff: [["buff", "Mercenary Desert Raider batch cost reduced from 540 to 495 olive oil"]],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          items: ["units/nest-of-bees"],
          civs: ["ch"],
          diff: [
            ["nerf", "Health reduced from 130 to 120."],
            ["nerf", "Number of projectiles reduced from 8 to 7."],
          ],
        },
        {
          items: ["technologies/additional-barrels", "units/nest-of-bees"],
          civs: ["ch"],
          diff: [["buff", "Additional projectiles increased from 2 to 3."]],
        },
        {
          items: ["buildings/great-wall-gatehouse"],
          civs: ["ch"],
          diff: [["buff", "Now adorned with 2 emplaced Nest of Bees instead of its default weapon."]],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["units/fishing-boat"],
          civs: ["de"],
          diff: [
            ["nerf", "Base damage reduced from 6 to 4."],
            ["buff", "Now does +1 bonus damage versus Ships."],
            ["fix", "Damage now scales with age 4/6/7/8 (+1/+2/+3/+4 vs Ships)"],
          ],
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          items: ["units/black-rider"],
          civs: ["hr"],
          diff: [
            ["buff", "New Imperial Age unit: Black Rider (150 food, 150 gold)"],
            ["fix", "Mounted Gunpowder Heavy Cavalry, wielding an Arquebus with high ranged damage."],
            ["fix", "Trained at the Archery Range."],
            ["fix", "Can only train 5 per standing Keep (8 with Elzbach Palace)."],
            ["fix", "Has the Caracole Ability: Moves 10% faster and can fire while moving for 30 seconds. Cannot fire at targets directly behind."],
          ],
        },
        {
          items: ["technologies/cistercian-churches"],
          civs: ["hr"],
          diff: [
            ["buff", "New Castle Age technology: Cistercian Churches (75 wood, 200 gold)"],
            ["fix", "Each Monastery acts as a drop off building and inspires villagers in an area when a Prelate garrisons inside."],
            ["fix", "Radius is smaller than Aachen."],
            ["fix", "Prelates can be trained directly into hold like Delhi Scholars."],
            ["fix", "Works on Regnitz Cathedral."],
          ],
        },
        {
          items: ["buildings/burgrave-palace"],
          civs: ["hr"],
          diff: [["buff", "Infantry gain +50% increased charge damage."]],
        },
        {
          items: ["buildings/palace-of-swabia"],
          civs: ["hr"],
          diff: [["nerf", "Discount reduced from 20% to 10%."]],
        },
        {
          items: ["technologies/devoutness"],
          civs: ["hr"],
          diff: [["nerf", "Gather rate bonus reduced from 10% to 5%, construction bonus unchanged."]],
        },
        {
          items: ["buildings/elzbach-palace"],
          civs: ["hr"],
          diff: [
            ["nerf", "Damage reduction reduced from 33% to 25%."],
            ["buff", "Keeps support 8 Black Riders instead of 5."],
          ],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["buildings/floating-gate"],
          civs: ["ja"],
          diff: [["fix", "Fixed a bug where Yorishiro would not increase dock production speed."]],
        },
        {
          items: ["buildings/stone-wall-tower"],
          civs: ["ja"],
          diff: [["fix", "Fixed a bug causing Stone Wall Towers to take longer to construct than other civilizations."]],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["units/scout", "units/khan"],
          civs: ["mo"],
          diff: [["fix", "Scouting falcon no longer telepathically blocks charge attacks."]],
        },
        {
          items: ["technologies/elite-army-tactics-improved"],
          civs: ["mo"],
          diff: [["fix", "Fixed an issue with Mongols Improved Elite Army Tactics not reflecting the intended effect."]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          items: ["buildings/stone-wall-tower", "technologies/extensive-fortifications"],
          civs: ["ot"],
          diff: [["fix", "Stone Wall Towers are now correctly discounted after researching the Extensive Fortifications upgrade."]],
        },
      ],
    },
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["buildings/palace-of-swabia"],
          civs: ["od"],
          diff: [["nerf", "Discount reduced from 20% to 10%."]],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: [],
          title: "Bounty",
          civs: ["ru"],
          diff: [
            ["nerf", "Tier 2 bounty requirement increased from 250 to 400 gold."],
            ["nerf", "Tier 3 bounty requirement increased from 750 to 1000 gold."],
          ],
        },
      ],
    },
    {
      subtitle: "Zhu Xi's Legacy",
      civs: ["zx"],
      changes: [
        {
          items: ["technologies/additional-barrels"],
          civs: ["zx"],
          diff: [["buff", "Now has access to the Additional Barrels technology in the Imperial Age."]],
        },
        {
          items: ["units/nest-of-bees"],
          civs: ["zx"],
          diff: [
            ["nerf", "Health reduced from 130 to 120."],
            ["nerf", "Number of projectiles reduced from 8 to 7."],
            ["buff", "Projectiles granted from Additional Barrels technology increased from 2 to 3."],
          ],
        },
      ],
    },
  ],
};
