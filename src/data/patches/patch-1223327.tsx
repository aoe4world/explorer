import { PatchNotes } from "../../types/patches";

export const patch1223327: PatchNotes = {
  id: "patch-1223327",
  buildId: 1223327,
  name: "Patch 12.2.3327",
  season: 9,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-12-2-3327/",
  summary: "Scout and siege unit adjustments, civilization balance changes including Japanese barracks cost reduction and Malian buffs.",
  introduction: `"Happy belated New Year, Age IV community! We shared some exciting news last week (read here if you haven’t already). And now we’re back with more of what you’re looking for: balance updates, bug fixes, plus a brand new seasonal event and game mode. 
  `,
  date: new Date("2024-02-13T18:00:00Z"),
  sections: [
    {
      title: "Balance",
      subtitle: "Global Changes",
      civs: [],
      changes: [
        {
          items: ["units/scout"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 70 to 65 food."],
            ["buff", "Train time reduced from 25 to 23 seconds."],
            ["buff", "Malian Scout train time reduced from 15 to 14 seconds.", ["ma"]],
          ],
        },
        {
          items: ["technologies/professional-scouts"],
          civs: [],
          diff: [
            ["nerf", "Movement speed penalty increased from 35% to 40%."],
            ["nerf", "Cost increased from 75 wood 275 gold to 100 wood 275 gold."],
          ],
          note: " The team is aware of the current state of professional scouts in the meta, we will continue to monitor the situation and potentially address it in the next update.",
        },
        {
          items: ["units/bombard", "units/cannon", "units/culverin"],
          civs: [],
          diff: [
            ["buff", "Bombard damage increased from 50 to 55."],
            ["buff", "Cannon damage increased from 55 to 60."],
            ["buff", "Culverin damage increased from 35 to 40."],
          ],
        },
        {
          items: ["units/springald"],
          civs: [],
          diff: [["buff", "Projectile now has a significantly larger hitbox."]],
        },
        {
          items: ["technologies/adjustable-crossbars"],
          civs: [],
          diff: [["nerf", "Projectile blast radius and projectile scatter reduced from +100% to +75%."]],
        },
        {
          items: ["units/spearman"],
          civs: [],
          diff: [["buff", "Now gain an additional +3/4/5/6 bonus damage versus elephants with Base/Hardened/Veteran/Elite tiers."]],
        },
        {
          items: ["units/crossbowman"],
          civs: [],
          diff: [
            ["nerf", "Base damage decreased from 12 to 11."],
            ["buff", "Bonus damage increased from 9 to 10."],
            ["nerf", "Elite damage decreased from 15 to 14."],
            ["buff", "Elite bonus damage increased from 11 to 12."],
          ],
        },
        {
          items: ["technologies/elite-army-tactics"],
          civs: [],
          diff: [
            ["nerf", "Effect adjusted from 20% to 15% damage (still affects bonus damage)."],
            ["nerf", "Cost increased from 400 food 800 gold to 500 food 1000 gold."],
            ["nerf", "Effect changed from +4 melee armor to +15% health."],
          ],
        },
        {
          items: ["technologies/elite-army-tactics-improved"],
          civs: ["mo"],
          diff: [["buff", "Now grants +20% damage and health, costing 1500 stone"]],
        },
      ],
    },
    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          items: ["units/tower-elephant"],
          civs: ["by"],
          diff: [["fix", "Fixed an issue where Mercenary Tower Elephants would not benefit from Incendiary Arrows."]],
        },
        {
          items: ["units/cataphract"],
          civs: ["by"],
          diff: [["fix", "Cataphracts now use Byzantine shields."]],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["buildings/madrasa"],
          civs: ["de"],
          diff: [["nerf", "No longer gain three free scholars with first Madrasa."]],
        },
        {
          items: ["buildings/dome-of-the-faith"],
          civs: ["de"],
          diff: [["nerf", "Discount reduced; scholars now train for 75 gold."]],
        },
        {
          items: ["technologies/incendiary-arrows", "technologies/biology", "technologies/elite-army-tactics"],
          civs: ["de"],
          diff: [["nerf", "Research time increased from 22 minutes to 23."]],
        },
        {
          items: ["technologies/silk-bowstrings"],
          civs: ["de"],
          diff: [["nerf", "Research time increased from 12 minutes to 18."]],
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          items: ["technologies/network-of-citadels"],
          civs: ["en"],
          diff: [["fix", "Fixed an issue where Network of Citadels had an outdated description."]],
        },
        {
          items: ["units/wynguard-ranger"],
          civs: ["en"],
          diff: [["fix", "Fixed an issue where Wynguard Rangers could see over stealth forests."]],
        },
      ],
    },
    {
      subtitle: "Japanese",
      civs: ["ja"],
      changes: [
        {
          items: ["buildings/barracks"],
          civs: ["ja"],
          diff: [["buff", "New Bonus: Barracks cost -50% wood."]],
        },
        {
          items: ["units/fishing-boat"],
          civs: ["ja"],
          diff: [["nerf", "Fishing ship wood discount changed from 40% to 25%."]],
        },
        {
          items: ["units/samurai"],
          civs: ["ja"],
          diff: [["nerf", "Train speed reduced from 23 to 20 seconds."]],
        },
        {
          items: ["technologies/tatara"],
          civs: ["ja"],
          diff: [
            ["buff", "Cost reduced from 25 stone 50 gold to 15 stone 35 gold."],
            ["buff", "Research time reduced from 30 to 15 seconds."],
          ],
        },
        {
          items: ["technologies/hizukuri"],
          civs: ["ja"],
          diff: [
            ["buff", "Cost reduced from 75 stone 100 gold to 50 stone 100 gold."],
            ["buff", "Research time reduced from 60 to 45 seconds."],
          ],
        },
        {
          items: ["buildings/daimyo-manor"],
          civs: ["ja"],
          diff: [["buff", "Cost reduced from 225 to 175 stone."]],
        },
        {
          items: ["buildings/floating-gate"],
          civs: ["ja"],
          diff: [
            ["nerf", "Yorishiro bonus: Dock and Military Building Production speed reduced from 150% to 125%."],
            ["nerf", "Yorishiro bonus: Farmhouse/Lumbercamp/Forge RPM reduced from 75f/w to 70 f/w, 60g to 50g."],
          ],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          items: ["buildings/house"],
          civs: ["ma"],
          diff: [["buff", "Health increased from 500 to 550."]],
        },
        {
          items: ["buildings/pit-mine"],
          civs: ["ma"],
          diff: [
            ["buff", "Health increased from 1500 to 1600."],
            ["buff", "Gold generation increased from 35 to 36 per minute."],
          ],
        },
        {
          items: ["buildings/town-center"],
          civs: ["ma"],
          diff: [["buff", "Cost reduced from 400 wood 450 gold to 400 wood 400 gold."]],
        },
        {
          items: ["units/sofa"],
          civs: ["ma"],
          diff: [
            ["buff", "Feudal Age health increased from 155 to 160."],
            ["buff", "Feudal Age attack increased from 16 to 17."],
          ],
        },
        {
          items: ["units/scout"],
          civs: ["ma"],
          diff: [
            ["fix", "Scout renamed to Vanguard Scout."],
            ["buff", "Train time reduced from 15 to 14 seconds."],
          ],
        },
        {
          items: ["units/musofadi-warrior"],
          civs: ["ma"],
          diff: [
            ["buff", "Health increased from 90 to 95."],
            ["buff", "Veteran Health increased from 110 to 115."],
            ["buff", "Elite Health increased from 135 to 140."],
          ],
        },
        {
          items: ["buildings/pit-mine"],
          civs: ["ma"],
          diff: [
            ["fix", "Fixed an issue with incorrect cap on Pit Mines for maps with extremely close gold mines creating overlapping influences."],
            ["fix", "Fixed an issue where small Pit Mines would generate 1% less gold than intended with full saturation."],
          ],
        },
        {
          items: ["buildings/farimba-garrison"],
          civs: ["ma"],
          diff: [["fix", "Fixed an issue where Mansa Javelineers could be unlocked from the Archery Range without building the Farimba Garrison."]],
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
          diff: [["fix", "Fixed an issue where Khan's Hunter double production was using the Mangudai icon."]],
        },
        {
          items: ["buildings/the-white-stupa"],
          civs: ["mo"],
          diff: [["fix", "Fixed an issue where the White Stupa wasn't selected by the Select All Technology Buildings hotkey."]],
        },
        {
          items: ["technologies/superior-mobility"],
          civs: ["mo"],
          diff: [["fix", "Fixed an issue where researching the improved version Superior Mobility first would not grant the faster unpacking effect."]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          items: ["units/akinji"],
          civs: ["ot"],
          diff: [
            ["fix", "Cavalry Archer renamed to Akinji."],
            ["buff", "Cost reduced from 100 food 80 wood to 90 food 80 wood."],
            ["buff", "Production time reduced from 27 seconds to 25 seconds."],
            ["fix", "Cavalry Archer Vizier Point renamed to Akinji System."],
          ],
        },
        {
          items: [
            "buildings/blacksmith",
            "buildings/university",
            "buildings/barracks",
            "buildings/dock",
            "buildings/archery-range",
            "buildings/stable",
            "buildings/siege-workshop",
            "buildings/town-center",
            "buildings/university",
            "buildings/wall-yard",
            "buildings/workshop",
            "buildings/yorishiro",
          ],
          civs: ["ot"],
          diff: [["buff", "Military and Technology Building discount increased from 33% to 40%."]],
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
            ["fix", "Fixed an issue where the last Atabeg could not be retrained and was permanently lost."],
            ["fix", "Atabegs no longer incorrectly use Malian Camel Trader skins."],
          ],
        },
        {
          items: ["units/desert-raider"],
          civs: ["ay"],
          diff: [["fix", "Fixed an issue where Desert Raiders would benefit from Silk Bowstrings on their melee weapons."]],
        },
      ],
    },
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["units/gilded-spearman"],
          civs: ["od"],
          diff: [["buff", "Gilded Spearmen now gain +6/8/10/12 additional bonus damage versus Elephants with Base/Hardened/Veteran/Elite tiers."]],
        },
        {
          items: ["buildings/aachen-chapel"],
          civs: ["od"],
          diff: [["fix", "Fixed an issue where the Inspire ability range for the Order of the Dragon Aachen Chapel was shorter than its visual range."]],
        },
      ],
    },
  ],
};
