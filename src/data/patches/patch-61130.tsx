import { PatchNotes } from "../../types/patches";

export const patch61130: PatchNotes = {
  id: "patch-61130",
  buildId: 61130,
  name: "Patch 6.1.130",
  season: 4,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-four-patch-6-1-130/",
  introduction: `"Our Enchanted Grove event comes to a close with the release of Patch 6.1.130. We hope you had an enchanting time in the biome but now both the biome and the Enchanted Stag have trotted off to parts unknown.

  In this new patch we have listened to your feedback and reverted the resource-gathering boost which was added to the Hardest AI. Instead, we have added multiple additional new levels of AI difficulty beyond the Hardest setting making use of the boosted resource-gathering in those difficulties. We can’t wait to hear your feedback on the new AI Difficulty levels! There are also improvements to in-game balance, fixes to known issues, and slight tweaks to trade as our team previews some of our larger goals with that mechanic – read more below! Thanks again to our amazing community members, all of whom have helped to make Age of Empires what it is today!
  
  —The Age of Empires Team"`,
  date: new Date("2023-04-04"),
  sections: [
    {
      title: "General",
      changes: [],
      civs: [],
      md: `
      ## Return of Hardest AI & New Difficulty Selections
      Earlier this year, we introduced a new Hardest AI that gathered resources faster and took quicker military action. You let us know that the resource-gathering boost created too much of a step-up in difficulty from Hard to Hardest and indicated that more difficulty options would be preferable. We’re pleased to provide the following updates:
      * We have reverted the resource-gathering boost which we had given to Hardest AI but kept other improvements made in January’s 5.2.131 patch.
      * We have added not 1, not 2, but 3 new AI Difficulty levels beyond the Hardest setting which have been given incremental resource-gathering boosts. The resource-gathering boosts are set at 1.2x, 1.5x and 2x the normal rate We believe these changes provide a better range of opportunities based on the amount of challenge you’re seeking. This will provide new ways of playing with and against the AI allowing for more varied battles and even more fun! 
      
      ## Age Insider Rewards
      We’ve unlocked several Insider rewards for all players starting with this update. This is to thank everyone who’s played and given feedback from before launch until now. You will find the Fishing Boat Monument, Insider Portrait, Dual Fish Coat of Arms, and Fishing Net Sigil Frame within your in-game profile options. Thank you for joining us on our journey thus far!
            
      `,
    },
    {
      title: "General Bug Fixes & Changes",
      md: `
      * Fishing boats will now always return to the nearest dock. 
* Cancelled building blueprints no longer block future placements. 
* Added additional HUD feedback when building limits have been reached for certain buildings or units, for example the Ottoman’s Military School and Grand Galley. 
* Fixed an issue to ensure units only display weapons that are currently available to them. Upgraded weapons are shown when upgraded, the basic version is hidden after upgrading. 
* Fixed issue where some Cheats not intended for Campaign were usable in campaign missions and potentially breaking them. 
* Fixed some Masteries and Achievements to make sure playing with new AI Difficulties would still allow for completion. – Fixed an issue with Training Mastery that would not progress for some players and added Art of War challenges for Ottoman and Malians.
`,
      changes: [],
      civs: [],
    },
    {
      title: "Balance Changes",
      changes: [],
      civs: [],
    },
    {
      subtitle: "General",
      civs: [],
      changes: [
        {
          // * Trader income reduced by 10%
          // > Developer’s Note: This balance change is a stepping stone on our way to bigger changes to the trade system. Thanks to everyone for all the feedback and discussion on the topic. We are listening and have future plans for additional improvements.
          items: ["units/trader"],
          civs: [],
          diff: [["nerf", "Trader income reduced by 10%"]],
          note: "This balance change is a stepping stone on our way to bigger changes to the trade system. Thanks to everyone for all the feedback and discussion on the topic. We are listening and have future plans for additional improvements.",
        },
        {
          // * Trebuchet Changes
          // 	* Counter-weight Trebuchet
          // 	* Cost reduced from 500 wood 250 gold to 400 wood 150 gold
          // 	* Health reduced from 210 to 170
          // 	* Damage reduced from 50 to 40
          // 	* Bonus damage vs buildings reduced from 450 to 375.
          // 	* Build time reduced from 35 seconds to 30 seconds
          items: ["units/counterweight-trebuchet"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 500 wood 250 gold to 400 wood 150 gold"],
            ["nerf", "Health reduced from 210 to 170"],
            ["nerf", "Damage reduced from 50 to 40"],
            ["nerf", "Bonus damage vs buildings reduced from 450 to 375."],
            ["buff", "Build time reduced from 35 seconds to 30 seconds"],
          ],
        },
        {
          // * Mongol Traction Trebuchet
          // 	* Cost reduced from 400 wood 150 gold to 300 wood 100 gold
          // 	* Health reduced from 190 to 150
          // 	* Damage reduced from 50 to 40
          // 	* Bonus damage vs. buildings reduced from 250 to 200
          // 	* Build time reduced from 35 seconds to 30 seconds
          items: ["units/traction-trebuchet"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 400 wood 150 gold to 300 wood 100 gold"],
            ["nerf", "Health reduced from 190 to 150"],
            ["nerf", "Damage reduced from 50 to 40"],
            ["nerf", "Bonus damage vs. buildings reduced from 250 to 200"],
            ["buff", "Build time reduced from 35 seconds to 30 seconds"],
          ],
          // > Developer’s Note: Our goal with the trebuchet changes are to allow players to react more easily & quickly to enemy structures by reducing the initial investment cost. It does make trebuchets less population efficient in the late game, however, with the recent update we buffed rams and bombards in the late-game to provide different options.
          note: "Our goal with the trebuchet changes are to allow players to react more easily & quickly to enemy structures by reducing the initial investment cost. It does make trebuchets less population efficient in the late game, however, with the recent update we buffed rams and bombards in the late-game to provide different options.",
        },
        {
          // * Cannon Emplacement Upgrade cost increased from 75 gold 300 stone to 125 gold 375 stone
          items: ["technologies/cannon-emplacement"],
          civs: [],
          diff: [["nerf", "Cannon Emplacement Upgrade cost increased from 75 gold 300 stone to 125 gold 375 stone"]],
        },
      ],
    },
    {
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          // * House of Wisdom Landmark
          // * Trade Wing
          // * Provides 3/4/5 Traders depending on which Age this wing is selected
          items: ["technologies/trade-wing", "buildings/house-of-wisdom"],
          civs: ["ab"],
          diff: [["buff", "Trade Wing now provides 3 (Feudal), 4 (Castle) or 5 (Imperial) Traders depending on which Age this wing is selected"]],
        },
        {
          // * Military Wing
          // * Provides another Archer in the Feudal Age Total 2 Spearman and 2 Archers
          items: ["technologies/military-wing", "buildings/house-of-wisdom"],
          civs: ["ab"],
          diff: [["buff", "Military Wing now provides another Archer in the Feudal Age, totaling 2 Spearmen and 2 Archers"]],
        },
        {
          // * Culture Wing
          // * Preservation of Knowledge cost reduced from 50 wood 125 gold to 25 wood 75 gold

          items: ["technologies/preservation-of-knowledge", "buildings/house-of-wisdom", "technologies/culture-wing"],
          civs: ["ab"],
          diff: [["buff", "Preservation of Knowledge cost reduced from 50 wood 125 gold to 25 wood 75 gold"]],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          // * Fixed a bug where Chinese Palisade Walls were not being built 50% faster than other Civilizations.
          items: ["buildings/palisade-wall"],
          civs: ["ch"],
          diff: [["fix", "Fixed a bug where Chinese Palisade Walls were not being built 50% faster than other Civilizations."]],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          // * Compound of the Defender Landmark’s discount on Stone for buildings and emplacements reduced from 25% to 20%
          items: ["buildings/compound-of-the-defender"],
          civs: ["de"],
          diff: [["nerf", "Compound of the Defender Landmark’s discount on Stone for buildings and emplacements reduced from 25% to 20%"]],
        },
        {
          // * Village Fortresses Technology research time increased from 5 to 6 minutes
          items: ["technologies/village-fortresses"],
          civs: ["de"],
          diff: [["nerf", "Research time increased from 5 to 6 minutes"]],
        },
        {
          // * When using Seek Shelter as the Delhi Sultanate, Villagers will no longer stand idle next to Houses before researching the Reinforced Foundations technology.
          items: ["technologies/reinforced-foundations"],
          civs: ["de"],
          diff: [
            [
              "fix",
              "When using Seek Shelter as the Delhi Sultanate, Villagers will no longer stand idle next to Houses before researching the Reinforced Foundations technology.",
            ],
          ],
        },
        {
          // * Fishing Ships are no longer selected with Military selection hotkeys.
          items: ["units/fishing-boat"],
          civs: ["de"],
          diff: [["fix", "Fishing Ships are no longer selected with Military selection hotkeys."]],
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          // * Network of Citadels Technology cost increased from 75 stone 200 gold to 150 stone 350 gold
          items: ["technologies/network-of-citadels"],
          civs: ["en"],
          diff: [["nerf", "Cost increased from 75 stone 200 gold to 150 stone 350 gold"]],
        },
        {
          // * Wynguard Footmen now take bonus damage from “vs Heavy” attack types.
          items: ["units/wynguard-footman"],
          civs: ["en"],
          diff: [["fix", "Wynguard Footmen now correctly take bonus damage from “vs Heavy” attack types."]],
        },
      ],
    },
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          // * Civilization Bonus: Town Center production rate bonus increased from 10/10/15/20% to 10/15/20/25%
          items: ["buildings/town-center"],
          civs: ["fr"],
          diff: [["buff", "Town Center production rate bonus increased from 10/10/15/20% to 10/15/20/25%"]],
        },
        {
          // * Royal Knights now correctly deal damage on their next attack after charging.
          items: ["units/royal-knight"],
          civs: ["fr"],
          diff: [["fix", "Royal Knights now correctly deal damage on their first attack after charging."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          // * Sofa train time reduced from 30 to 26 seconds ## Developer’s Note: This puts Sofa inline with knights in terms of cost and power level per second spent training.
          items: ["units/sofa"],
          civs: ["ma"],
          diff: [["buff", "Train time reduced from 30 to 26 seconds"]],
          note: "This puts Sofa inline with knights in terms of cost and power level per second spent training.",
        },
        {
          // * Malian Age Up keybinds now function correctly.
          items: [],
          civs: ["ma"],
          diff: [["fix", "Malian Age Up keybinds now function correctly."]],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          // * Civilization Bonus: Silk Road resource bonus trade requirements changed from 3/5/7/9 to 5/10/15/20
          items: ["units/trader"],
          civs: ["mo"],
          diff: [["nerf", "Silk Road resource bonus trader count requirements changed from 3/5/7/9 to 5/10/15/20"]],
        },
        {
          // * Kurultai Landmark bonus damage reduced from 25% to 20%
          items: ["buildings/kurultai"],
          civs: ["mo"],
          diff: [["nerf", "Kurultai Landmark bonus damage reduced from 25% to 20%"]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          // * Civilization Bonus: Blacksmith and University production influence bonus reduced from 25/33/40% to 20/30/40%
          items: ["buildings/blacksmith", "buildings/university"],
          civs: ["ot"],
          diff: [["nerf", "Blacksmith and University production influence bonus reduced from 25/33/40% to 20/30/40%"]],
        },
        {
          // * Sea Gate Castle Landmark Trader move speed bonus reduced from 40% to 30% Trader armor bonus reduced from 10 to 8
          items: ["buildings/sea-gate-castle"],
          civs: ["ot"],
          diff: [
            ["nerf", "Trader move speed bonus reduced from 40% to 30%"],
            ["nerf", "Trader armor bonus reduced from 10 to 8"],
          ],
        },
        {
          // * The name of the Ottoman Knight has been changed to Lancer.
          items: ["units/knight"],
          civs: ["ot"],
          diff: [["fix", "The name of the Ottoman Knight has been changed to Lancer."]],
        },
      ],
    },
    {
      title: "Map Pool",
      changes: [],
      civs: [],
      md: `
The map pool for Season Four has been updated. The following maps are now available:      
### Solo Ranked
* Mountain Clearing
* Dry Arabia
* Prairie
* Four Lakes
* French Pass
* Hideout
* High View
* Lipany
* Baltic

### Team Ranked
* Altai
* Ancient Spires
* Continental
* Dry Arabia
* Prairie
* Four Lakes
* Hideout
* Lipany
* The Pit`,
    },
    {
      title: "Coming up",
      changes: [],
      civs: [],
      md: `
There’s still plenty to do in Season Four 
* We’re celebrating our busy villagers who help make the world go round! Join us April 20th through May 18th for our Villager Appreciation Celebration and complete challenges to unlock up to 20 new portraits in-game! Details are coming so look out for more!
* Season Four has been extended through June 14th, but you can rest assured we’ll keep the fun rolling with Season Five. Some monstrous events are even ready for a return!
        `,
    },
  ],
};
