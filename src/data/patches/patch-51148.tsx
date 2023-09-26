import { PatchNotes } from "../../types/patches";

export const patch51148: PatchNotes = {
  id: "patch-51148",
  buildId: 51148,
  name: "Patch 5.1.148",
  season: 3,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-51148/",
  summary: "Buffs to Springald Ships and Malian Cattle and Pit Mines + misc fixes.",
  introduction: `"Welcome to our first minor patch of Season Three, Patch 5.1.148! In this patch, we’re making some balance changes to Forest Ponds, Hideout, and Waterholes according to your feedback from our Season Three Public Update Preview, you’ll see some new UI improvements, and you’ll also see better general stability and performance of the game! Thia time, we’re mixing up the Season Three Map Pool, we’re giving some visual updates to the unit healthbar settings, as well as more balance work on the Malian and Ottoman Civilizations.  

  In addition to all of the above, we’re also taking some time to address some of the feedback we’ve heard from you. Special thanks as well to those of you who filled out our Season Three Survey – your feedback is incredibly helpful to us, so please keep sharing your thoughts!"
  
  `,
  date: new Date("2022-12-01 18:00:00 UTC"),
  sections: [
    {
      title: "Build Spotlight",
      civs: [],
      changes: [],
      md: `
# In-Game Languages
* Fixed an issue where the Microsoft Store version of the game would not launch in Hindi and instead launched in English.

# Healthbar Update
We’ve been making an on-going effort to improve the visibility of unit selections. Since the Season Three PUP, we introduced fully-opaque white outlines around healthbars when you select your units, and this worked well to boost visibility in general. However, we’ve also heard your feedback that this change can be visually distracting in certain scenarios, so we are now iterating on this design. In Patch 5.1.148, healthbars will have a better balance with a 50% opacity outline and a black inner border for improved contrast.

When you toggle the Healthbars Setting to “Always on”:
    * All unit healthbars (owned, allied, enemy units) stay visible in 90% opacity, regardless if units are damaged.
    * Healthbars opacity will increase to 100% when hovered or selected.
    * All selected units will now have a white glow with 50% opacity around their healthbars as opposed to 100%. (same as command card unit cycling effects)
When you toggle the Healthbars Setting to “Smart”:
    * All unit healthbars (owned, allied, enemy units) stay hidden until damaged or selected.

![Healthbar Update](https://www.ageofempires.com/wp-content/uploads/2022/11/Healthbar_UI_ageiv-2048x1152.png)

# Ranked Map Pool Rotation
You’ve shared with us your thoughts on the Season Three Map pool, so we’re freshening up the Ranked map pools! We’ll be swapping out some maps that have been in the pool for multiple seasons with some of the brand-new maps that we introduced in the Anniversary Update. We wanted to hit the goal of providing you a good variety of map styles, while diversifying the maps between 1v1 and Team Game queues. As for voting, you’ll still have three votes in the map preference system to prioritize your favorite maps from the map selection.

## 1v1 Ranked Pool
* Dry Arabia
* French Pass
* King of the Hill
* Lipany
* Mediterranean
* Mongolian Heights
* Prairie
* The Pit
* Wetlands

### Team Ranked Pool
* Altai
* Black Forest
* Boulder Bay
* Dry Arabia
* Forest Ponds
* Hideout
* Hill and Dale
* The Pit
* Wetlands

## Caster Mode
* Resolved a Hotkey conflict between Observer Mode’s “Toggle fog of war” and the global command “Cycle through Villagers gathering Food”. All Cycle villager commands will now be using “Ctrl+Shift+Key” format, and reserving “Ctrl+F” for fog of war only.
`,
    },
    {
      title: "UX/UI",
      civs: [],
      changes: [],
      md: `   
* Fixed a bug where if the team ranked season ended while you were searching for a team ranked game, then the error message shown to the player would appear multiple times. Now the error message should only appear once.
* Improved the spacing between the display of the unit name and its tag on the unit card.
* Fixed an issue where clicking the “Play Again” button in the post match screen sometimes did not remember what civ you had chosen previously.
* Fixed an issue where your randomly selected civ did not change between consecutive matches.
* Fixed an issue in Hindi where the unit name was not readable.
* The clarity of the minimap has been improved when running at resolutions greater than 1080p.

## Hotkeys
* Fixed an issue where unassigned Hotkeys would still appear in the gameplay HUD.
`,
    },
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `  
## General
* Monks rallying to garrisonable mosques that contain relics will now garrison instead of retrieving relics.
* Fixed war elephants, tower elephants, and certain siege units sometimes being unable to garrison into a hold that is near its garrison cap.
* Fixed a bug that allowed religious units to bypass the cooldown between conversions.
* Fixed an issue with Delhi Sultanates Mastery 5 Tooltip.
* Fixed an issue with the Abbasid Mastery “The Path Taken” where not all chosen technologies would complete the mastery.

## AI
* Fixed an issue where the AI would still desire fishing boats when its naval military is at a large disadvantage.
> The AI will now deprioritize land units more often when more navy is needed. AI will also deprioritize navy more often when its island is being invaded by land units.
* Fixed the bug where villagers would remain idle if a deposit was too far away from the drop-off buildings.
* AI will abandon capturing a sacred site if its base is under attack and is lacking defense.
* AI will no longer try to build trade ships early in the match.
* AI villagers will now retaliate against wolves.
* AI will now focus on gathering more wood at the start of the game to increase naval gameplay, especially on island maps.
        `,
    },

    {
      title: "Balance",
      civs: [],
      changes: [],
    },
    {
      subtitle: "Naval Balance Changes",
      civs: [],
      changes: [
        {
          // Bonus damage vs. Arrow Ships increased from 40 to 45.
          items: [
            "units/baghlah",
            "units/war-junk",
            "units/baghlah",
            "units/hulk",
            "units/hulk",
            "units/hulk",
            "units/war-canoe",
            "units/war-junk",
            "units/hulk",
            "units/lodya-attack-ship",
          ],
          civs: [],
          diff: [["buff", "Bonus damage vs. Arrow Ships increased from 40 to 45."]],
        },
        {
          // * Health decreased from 2000 to 1750.
          // * Dock buildings can now be re-targeted to other naval units.
          items: ["buildings/dock"],
          civs: [],
          diff: [
            ["nerf", "Health decreased from 2000 to 1750."],
            ["buff", "Dock buildings can now be re-targeted to other naval units."],
          ],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          //             Cattle

          // Cost reduced from 100 to 75 Gold.
          // Allied player gather rate reduced from 0.9 to 0.66.
          // Added a Cattle Population UI element to display the current number and the population limit. You might also notice a small stylistic element in the screenshot below that will be coming soon!
          // Cattle ui in game for the malian civilization
          items: [],
          title: "Cattle",
          civs: ["ma"],
          diff: [
            ["buff", "Cattle cost reduced from 100 to 75 Gold."],
            ["nerf", "Allied player gather rate reduced from 0.9 to 0.66."],
            [
              "fix",
              "Added a Cattle Population UI element to display the current number and the population limit. You might also notice a small stylistic element in the screenshot below that will be coming soon!",
            ],
          ],
        },
        {
          // Malian Pit Mine

          // Increased Gold rate from 30 to 35.
          // Health increased from 1200 to 1500.
          items: ["buildings/pit-mine"],
          civs: ["ma"],
          diff: [
            ["buff", "Increased Gold rate from 30 to 35."],
            ["buff", "Health increased from 1200 to 1500."],
          ],
        },
        {
          // Corrected an issue where Malian Transport Ships’ ability to throw javelins when garrisoned was missing from the civilization tech tree and bonuses.
          items: ["units/transport-ship"],
          civs: ["ma"],
          diff: [
            [
              "fix",
              "Corrected an issue where Malian Transport Ships’ ability to throw javelins when garrisoned was missing from the civilization tech tree and bonuses.",
            ],
          ],
        },
        {
          // Corrected an issue where Malian markets had reduced penalties for buying and selling resources.

          items: ["buildings/market"],
          civs: ["ma"],
          diff: [["fix", "Corrected an issue where Malian markets had reduced penalties for buying and selling resources."]],
        },
        {
          // Corrected an issue where the defensive weapon upgrades were not present on the Saharan Trade Network Landmark.

          items: ["buildings/saharan-trade-network"],
          civs: ["ma"],
          diff: [["fix", "Corrected an issue where the defensive weapon upgrades were not present on the Saharan Trade Network Landmark."]],
        },
        {
          // Corrected an issue where the Military & Technology cost reduction bonus was missing from the tech tree.
          // Ships, Trading, and Landmarks
          civs: ["ma"],
          items: [],
          diff: [["fix", "Corrected an issue where the Military & Technology cost reduction bonus was missing from the tech tree."]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          // Mehter unit will no longer incorrectly apply multiple buffs in certain conditions.
          // Corrected an issue where the Mehter’s Attack Drums were giving more attack speed than intended.
          items: ["units/mehter"],
          civs: ["ot"],
          diff: [
            ["fix", "Mehter unit will no longer incorrectly apply multiple buffs in certain conditions."],
            ["fix", "Corrected an issue where the Mehter’s Attack Drums were giving more attack speed than intended."],
          ],
        },
        {
          items: ["units/sipahi"],
          // Corrected an issue where the Sipahi unit’s Fortitude ability would not activate correctly when within a Mehter unit’s Attack Drum aura.
          // Corrected an issue where Sipahi’s Fortitude ability was giving more attack speed than intended.
          civs: ["ot"],
          diff: [
            ["fix", "Corrected an issue where the Sipahi unit’s Fortitude ability would not activate correctly when within a Mehter unit’s Attack Drum aura."],
            ["fix", "Corrected an issue where Sipahi’s Fortitude ability was giving more attack speed than intended."],
          ],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          items: ["units/warrior-monk"],
          civs: ["ru"],
          diff: [["fix", "Rus Warrior Monks can no longer be pushed by other units when casting conversion."]],
        },
      ],
    },
    {
      title: "Maps",
      civs: [],
      md: `
## Forest Ponds
* The primary large gold deposit has been changed to a small gold deposit.
* Boars have been pushed further away from the player’s Town Centers.
* The number of deer per herd has been reduced by two.

## Hideout
* The number of deer generating around the player’s initial Town Center has decreased.
* The number of deer in each neutral herd has decreased.
* The number of neutral deer herds has increased.
* All neutral stone deposits have been changed to small deposits.
* The space between all neutral gold deposits has been increased, ultimately decreasing the number of total deposits.
* Resources near the player’s Town Centers are moved slightly further away.
* The number of neutral herdable has been reduced.

## Waterholes
* Neutral resources are clumped up much tighter to decrease the generation distance variance that could result in some players having the resources generate much closer to them.
* The number of deer on the map has been halved.
* Schools of fish now generate more evenly in the waterholes.
        `,
      changes: [],
    },
  ],
};
