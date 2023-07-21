import { PatchNotes } from "../../types/patches";

export const patch71113: PatchNotes = {
  id: "patch-71113",
  buildId: 71113,
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-season-five-update-7-1-113/",
  name: "Season Five Patch 7.1.113",
  summary: `"Plenty of changes are coming with the release of our latest minor patch. The Wild Man and Dragon Turtle have faded back into legend, and we hope you enjoyed the monstrous start to Season Five! Here is a peak at what is included":


*  Updates to Ranked Season Rewards! 
*  Upcoming seasonal events! 
*  Changes to address Queue Dodging & Cheating in Ranked. 
* … plus bug fixes and balance changes. 

`,

  date: new Date("2023-07-20T12:00:00Z"),
  sections: [
    {
      title: "Ranked Season Updates",
      civs: [],
      changes: [],
      md: `
![Ships going into a cave filled with treasure](https://www.ageofempires.com/wp-content/uploads/2023/06/s5_keyart_rankedseason-2048x1152.png)
## Map Pool Change
Since our Map Monsters have left for the season, they will no longer be appearing on ranked maps. The ranked map pool is otherwise unchanged. Battle your way up the ranked ladder before the season ends on October 23rd at 11:59 pm PDT (Oct 24th at 06:59 UTC)

## Ranked Rewards
Mentioned in both our  Season Five release notes, and  our follow-up post , progress continues to be made on changing the Ranked Rewards system. Starting with this patch, players should now see the **highest**rank they’ve achieved this season on their profile and on the multiplayer ranked screen.

## Queue Dodging
We’ve updated the game servers’ backend to better detect when a player purposefully disconnects from their match. The system should now apply queue dodging cooldown punishments more instantly than previous configurations. Purposefully disconnecting from a Ranked Team or Ranked 1v1 lobby or load screen, as well as any time during Ranked 1v1 matches, will now also count as a loss for the disconnecting player in addition to the cooldown punishment.  
These changes, in congruence with some of our other changes, should reduce the frequency of queue dodging. We are continuing to monitor this closely and may further tighten queue dodging punishments to be more in-line with other Age titles. 
Additionally, we remain aware queue dodging is more frequent at the high and low extremes of ELO levels and are continuing our work to address the matchmaking process for these extremes, to further reduce the frequency of queue dodging for these players.

## Ranked Cheating
In our  update kicking off the start of Season 5 (https://www.ageofempires.com/news/age-of-empires-iv-season-five-update-7-0-5861/#ongoing) , we mentioned our continued investigation of cheating on the Ranked ladder, especially in Teams games.  Thanks in part to reports sent in from players, we have taken some keys steps to reduce cheating in Ranked.
`,
    },
    {
      title: "Mods",
      civs: [],
      md: "* Fixed issue where mod creators on the Windows Store game version were unable to publish newly created mods using and see them on the Mod Publisher page. ",
      changes: [],
    },
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `
### AI Updates
* Fixed a rare issue where the AI would build too many Lumber camps on some maps. 
* Fixed a crash bug related to AI trading. 
### UX/UI & Menus
* Fixed an issue where the user was unable to zoom while in replays when using Caster Mode.   
* When launching the game in Malay or Hindi languages, the Daily Challenges, News Feed and Events will now be in the correct language. 
* Fixed the alignment of the Season Four painting sigil frame, which was off-center. 
* Fixed a bug to ensure that if a player’s communications are set to blocked no one will be able to chat to that player in-game.
* Thanks in part to players sending in their warning logs, we were able to quickly identify and implement a fix for another set of conditions that were causing a crash on age up for several players. If you continue to encounter crashes, please reach out to Customer Support so that we may investigate.
### Campaign
* Fixed a crash that was preventing campaign save files from loading.
`,
    },
    {
      title: "Maps",
      civs: [],
      changes: [],
      md: `
### Prairie 
* Fixed an issue on Prairie where one of the neutral markets would sometime not spawn. 
### Golden Heights 
* Golden Heights now appears in the correct alphabetical order on the map selection list. 
* Fixed an occasional unequal boar distance distribution issue on Golden Heights 1v1. `,
    },
    {
      title: "Balance & Bugfixes",
      civs: [],
      changes: [],
    },
    {
      subtitle: "General Changes & Bugfixes",
      civs: [],
      md: `
* Fixed a hitching issue seen when felling trees on certain maps. 
* Fixed a potential crash that was linked to using Voice Chat. 
`,
      changes: [],
    },
    {
      subtitle: "Balance & Gameplay Changes for All Civilizations",
      civs: [],

      changes: [
        {
          //         Monks will no longer stutter when attack-move healing.
          // Patrolling Monks will no longer heal while patrolling.
          // Developer’s Note: This is an unintentional change that we aim to fix in a future update.
          items: ["units/monk"],
          civs: [],
          diff: [
            ["fix", "Monks will no longer stutter when attack-move healing."],
            ["nerf", "Patrolling Monks will no longer heal while patrolling."],
          ],
          note: "This is an unintentional change that we aim to fix in a future update.",
        },
        {
          // Keeps
          // All civilizations’ Keep Stone cost increased from 800 to 900.
          items: ["buildings/keep"],
          civs: [],
          diff: [["fix", "Stone cost increased from 800 to 900."]],
        },
        {
          // Bombard Emplacement range reduced from 10 to 9.5.
          items: ["buildings/keep", "technologies/cannon-emplacement"],
          civs: [],
          diff: [["nerf", "Cannon Emplacement range reduced from 10 to 9.5."]],
        },
        {
          // Boiling Oil range reduced from 2 to 1.5.
          // Boiling Oil damage area changed from a 2.5×1.5 rectangle to a 1 radius circle.
          // Developer Note: Overall keep and bombard emplacements are too effective when comparing their costs to the costs of their counters. Making keeps more expensive means they will be a bit slower to hit the field and thus their positioning will be more important. Boiling oil changes are aimed at overall reducing the area a bit and making the damage area more consistent. In a future update we’re looking at a new visual effect to communicate the area more precisely.
          items: ["buildings/keep", "technologies/boiling-oil"],
          civs: [],
          diff: [
            ["nerf", "Boiling Oil range reduced from 2 to 1.5."],
            ["nerf", "Boiling Oil damage area changed from a 2.5×1.5 rectangle to a 1 radius circle."],
          ],
          note: "Overall keep and bombard emplacements are too effective when comparing their costs to the costs of their counters. Making keeps more expensive means they will be a bit slower to hit the field and thus their positioning will be more important. Boiling oil changes are aimed at overall reducing the area a bit and making the damage area more consistent. In a future update we’re looking at a new visual effect to communicate the area more precisely.",
        },
        {
          // Bombard move speed increased from 0.62 to 0.75.
          // Developer Note: Overall we’ve been seeing a lot of ram play because of their low cost and ease of use, this change is targeted at helping the bombard which has to pack and unpack get into the action faster.
          items: ["units/bombard", "units/great-bombard"],
          civs: [],
          diff: [["buff", "Bombard move speed increased from 0.62 to 0.75."]],
          note: "Overall we’ve been seeing a lot of ram play because of their low cost and ease of use, this change is targeted at helping the bombard which has to pack and unpack get into the action faster.",
        },
        {
          // Villagers no longer use Bow weapons to attack Boars, they now always use a Spear.
          // Developer Note: This change is aimed at making taking boars more accessible by reducing the micro requirement for fighting them.
          items: ["units/villager"],
          civs: [],
          diff: [["fix", "Villagers no longer use Bow weapons to attack Boars, they now always use a Spear."]],
          note: "This change is aimed at making taking boars more accessible by reducing the micro requirement for fighting them.",
        },
        {
          // Selecting an active Trader displays the amount of gold that will be earned at its destination.
          items: ["units/trader"],
          civs: [],
          diff: [["fix", "Selecting an active Trader displays the amount of gold that will be earned at its destination."]],
        },
        {
          // Fixed a bug where previously idle units will move to the position of an enemy they defeated.
          items: [],
          civs: [],
          diff: [["fix", "Fixed a bug where previously idle units will move to the position of an enemy they defeated."]],
        },
        {
          // Fixed an issue where ranged siege units would fail to reposition when too close to an obstruction, such as a Stone Wall, if their target was otherwise within their range. Ranged siege units will now pack-up and reposition to a better angled shot or find another target.
          items: ["units/mangonel", "units/bombard", "units/great-bombard", "units/springald", "units/traction-trebuchet", "units/counterweight-trebuchet"],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed an issue where ranged siege units would fail to reposition when too close to an obstruction, such as a Stone Wall, if their target was otherwise within their range.",
            ],
            ["fix", "Ranged siege units will now pack-up and reposition to a better angled shot or find another target."],
          ],
        },
      ],
    },
    {
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          // Fresh Foodstuffs Technology cost reduced from 50 food/125 gold to 50 food/75 gold.
          // Developer Note: We like the decision point here of technology vs villager, but reduced the price so the technology payoff time is faster.
          items: ["technologies/fresh-foodstuffs"],
          civs: ["ab"],
          diff: [["buff", "Fresh Foodstuffs Technology cost reduced from 50 food/125 gold to 50 food/75 gold."]],
          note: "We like the decision point here of technology vs villager, but reduced the price so the technology payoff time is faster.",
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          //           Great Wall Landmark
          // Great Wall Gatehouse damage reduced from 15 to 13.
          items: ["buildings/great-wall-gatehouse"],
          civs: ["ch"],
          diff: [["nerf", "Great Wall Gatehouse damage reduced from 15 to 13."]],
        },
        {
          // Keeps
          // Damage reduced from 50 to 25.
          // Attack speed increased from 3.12 to 1.37.
          items: ["buildings/keep"],
          civs: ["ch"],
          diff: [
            ["nerf", "Keeps Handcannon damage reduced from 50 to 25."],
            ["buff", "Keeps Handcannon attack speed increased from 3.12 to 1.37."],
          ],
        },
        {
          // Ancient Techniques Technology gather bonus reduced from 5% to 4%.
          items: ["technologies/ancient-techniques"],
          civs: ["ch"],
          diff: [["nerf", "Ancient Techniques Technology gather bonus reduced from 5% to 4%."]],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          //           Dome of Faith Landmark
          // No longer has a 50% production speed penalty.
          // Gives a discount of -50 gold instead of –65 gold.
          // Developer Note: We wanted to give the Dome of Faith more tempo with faster train time on Scholars. Additional it generates increased resources per minute while constant training. This is balanced by the fact that the building generally has more idle time than other production buildings as it’s creating a more specialized unit.
          items: ["buildings/dome-of-the-faith"],
          civs: ["de"],
          diff: [
            ["buff", "No longer has a 50% production speed penalty."],
            ["nerf", "Monk discount decresed from 65 gold to 50 gold."],
          ],
          note: "We wanted to give the Dome of Faith more tempo with faster train time on Scholars. Additional it generates increased resources per minute while constant training. This is balanced by the fact that the building generally has more idle time than other production buildings as it’s creating a more specialized unit.",
        },
        {
          // House of Learning Landmark
          // Hearty Rations carry capacity increased from 5 to 10.
          // Hearty Rations research time reduced from 5:00 to 3:45.
          items: ["buildings/house-of-learning", "technologies/hearty-rations"],
          civs: ["de"],
          diff: [
            ["buff", "Hearty Rations carry capacity increased from 5 to 10."],
            ["buff", "Hearty Rations research time reduced from 5:00 to 3:45."],
          ],
        },
        {
          // Tranquil Venue Technology healing increased from 2 to 4 per second.
          items: ["buildings/house-of-learning", "technologies/tranquil-venue"],
          civs: ["de"],
          diff: [["buff", "Tranquil Venue Technology healing increased from 2 to 4 per second."]],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          //           Griot Bara Landmark
          // Siege Festival no longer affects the Springald, Mangonel, and Culverin.
          // Siege Festival help text times corrected to read 60 seconds.
          items: ["buildings/griot-bara"],
          civs: ["ma"],
          diff: [
            ["nerf", "Siege Festival no longer affects the Springald, Mangonel, and Culverin."],
            ["fix", "Siege Festival help text times corrected to read 60 seconds."],
          ],
        },
        {
          // Musofadi Warrior health increased from 85/105/130 to 90/110/135.
          items: ["units/musofadi-warrior"],
          civs: ["ma"],
          diff: [["buff", "Musofadi Warrior health increased from 85/105/130 to 90/110/135."]],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          // Sipahi train speed increased from 24 to 28 seconds.
          items: ["units/sipahi"],
          civs: ["ot"],
          diff: [["buff", "Training time increased from 24 to 28 seconds."]],
        },
        {
          // Anatolian Hills Technology mining speed bonus increased from 10% to 15%.
          items: ["technologies/anatolian-hills"],
          civs: ["ot"],
          diff: [["buff", "Mining speed bonus increased from 10% to 15%."]],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          //           Kremlin Landmark
          // Levy Militia lifetime reduced from 80 to 65 seconds.
          // Levy Militia automatic torch scaling by Age removed.
          items: ["buildings/kremlin", "units/militia"],
          civs: ["ru"],
          diff: [
            ["nerf", "Levy Militia lifetime reduced from 80 to 65 seconds."],
            ["nerf", "Levy Militia automatic torch scaling by Age removed."],
          ],
        },
        {
          // Fixed a bug where Hunting Cabins built adjacent to no Trees generate negative gold.
          items: ["buildings/hunting-cabin"],
          civs: ["ru"],
          diff: [["fix", "Fixed a bug where Hunting Cabins built adjacent to no Trees generate negative gold."]],
        },
        {
          // Boyar’s Fortitude Technology health bonus reduced from +30 to +25.
          items: ["technologies/boyars-fortitude"],
          civs: ["ru"],
          diff: [["nerf", "Boyar’s Fortitude Technology health bonus reduced from +30 to +25."]],
        },
      ],
    },
  ],
};
