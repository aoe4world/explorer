import { PatchNotes } from "../../types/patches";

export const patch10148: PatchNotes = {
  id: "patch-10.1.48",
  buildId: "10.1.48",
  name: "Patch 10.1.48",
  season: 7,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-10-1-48/",
  summary: "Cost reduction for Arrow and Springald Ships, major buff to English Abbey, changes to English Campfire and other balance changes.",
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2024/03/S7-Patch-1920x1080-1.webp)
"Happy Patch Day! This minor patch incorporates a few balance tweaks and bugfixes.

Read on to learn more!"`,
  date: new Date("2024-03-27T18:00:00Z"),
  sections: [
    {
      title: "Gameplay",
      civs: [],
      changes: [],
      md: `
      ### General
      - Fixed an issue where Scouts can skip their reload animations.

      ### AI Updates
      - Unique AI names have been shortened to use less screen space.

      ### AI Updates (Nomad Mode)
      - Fixed a problem in Nomad mode where building your Town Center close to an AI’s Town Center could cause the AI to stop playing. Now, the AI will still start building again in a different location.

      ### UX/UI & Menus (All Platforms)
      - Added a separate Free-For-All map pool which contains Megarandom and Land Megarandom only. This pool has one veto and is used when a Free-For-All match is found in Quick Match. We plan to look at how best to expand this pool in future with maps which are more appropriate for the Free-For-All experience.
      - Fixed an issue on Xbox consoles where a permission dialogue would show for settings other than cross play when adjusting Cross Play settings.
      - Fix an issue on Xbox consoles where Pages of History failed to display.
      - Fixed a bug where if the player views a replay from someone else’s profile, after the replay they were viewing their own profile. Now, after a replay, players will view the profile they originally started the replay from.
      - Reduced rose sigil size.
      - Fixed a softlock that may occur when accepting an invite while in a loading screen of the tutorial mission.

      ### Remappable Hotkeys
      - It’s now possible to bind the keys Ctrl+NumLock, Ctrl+Pause and Ctrl+ScrollLock.`,
    },
    {
      title: "Balance & Bugfixes",
      civs: [],
      changes: [],
    },
    {
      subtitle: "General Changes and Bugfixes",
      civs: [],
      changes: [],
      md: `
      - Fixed a bug that required using parameters on Steam for older PCs to avoid a crash during launch.
      - Fixed an issue where Springalds received extra damage from Horseman and Mangonels.
      - Fixed an issue where the HRE Prelate UI counter wasn’t displayed.
      - Fixed a Sync Error that would occur when using the “It Was Known” cheat in a multiplayer match.
`,
    },
    {
      subtitle: "General Balance Changes",
      civs: [],
      changes: [
        {
          // Arrow ships Food cost reduced from 90 to 80.
          items: ["units/galley", "units/dhow", "units/junk", "units/hunting-canoe", "units/light-junk", "units/lodya-galley"],
          civs: [],
          diff: [["buff", "Food cost reduced from 90 to 80."]],
        },
        {
          // Springald ship Food cost reduced from 120 to 110.
          items: ["units/baghlah", "units/war-junk", "units/hulk", "units/war-cog", "units/war-canoe", "units/lodya-attack-ship"],
          civs: [],
          diff: [["buff", "Food cost reduced from 120 to 110."]],
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      civs: [],
      changes: [],
    },

    {
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          // Culture Wing – Medical Centers now applies a healing aura to Town Centers as well as Keeps.
          items: ["technologies/medical-centers", "buildings/town-center", "buildings/capital-town-center"],
          civs: ["ab"],
          diff: [["buff", "Culture Wing – Medical Centers Now applies a healing aura to Town Centers as well as Keeps."]],
        },
      ],
    },
    //                              Ayyubids

    {
      subtitle: "Ayyubids",
      civs: ["ay"],
      changes: [
        {
          // Corrected an issue where Tower of the Sultan would lose Blacksmith upgrades after researching incendiary arrows.
          items: ["units/tower-of-the-sultan"],
          civs: ["ay"],
          diff: [["fix", "Corrected an issue where Tower of the Sultan would lose Blacksmith upgrades after researching incendiary arrows."]],
        },
      ],
    },

    //                              Byzantines

    {
      subtitle: "Byzantines",
      civs: ["by"],
      changes: [
        {
          // Increased the Mercenary Contract research time from 0 to 10 seconds to allow for adjustment in case of a mis-click.
          items: ["technologies/eastern-mercenary-contract", "technologies/silk-road-mercenary-contract", "technologies/western-mercenary-contract"],
          civs: ["by"],
          diff: [["buff", "Research time increased from 0 to 10 seconds."]],
          note: "To allow for adjustment in case of a mis-click.",
        },
      ],
    },

    //                                   English

    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          // Campfire has been removed from the Man-at-Arms and can now be found on the Scout.
          // Campfire now shines brighter with an increase in sight from 3 to 5 tiles.
          // Campfire now has team color on the minimap.
          items: ["units/scout", "abilities/ability-setup-camp"],
          civs: ["en"],
          diff: [
            ["buff", "Campfire has been removed from Man-at-Arms and can now be found on the Scout"],
            ["buff", "Increase sight range from 3 to 5 tiles."],
            ["buff", "Now has team color on the minimap."],
          ],
        },
        {
          // Abbey of Kings Landmark now automatically queues a free King upon completion of the Landmark.
          items: ["buildings/abbey-of-kings", "units/king"],
          civs: ["en"],
          diff: [["buff", "Abbey of Kings Landmark now automatically queues a free King upon completion of the Landmark."]],
        },
        {
          // Berkshire Palace Landmark weapon range bonus reduced from 15 tiles to 14.5 tiles.
          items: ["buildings/berkshire-palace"],
          civs: ["en"],
          diff: [["nerf", "Weapon range bonus reduced from 15 tiles to 14.5 tiles."]],
        },
        {
          // Wynguard Palace Landmark
          // Wynguard Footman cost changed from 200 Food, 500 Gold to 300 Food, 400 Gold.
          items: ["units/wynguard-footmen"],
          civs: ["en"],
          diff: [
            ["buff", "Cost changed from 200 Food, 500 Gold to 300 Food, 400 Gold."],
            ["buff", "Train time reduced from 50 to 45 seconds."],
          ],
        },
        {
          // Ranger and Footman train time reduced from 50 to 45 seconds.
          items: ["units/wynguard-rangers"],
          civs: ["en"],
          diff: [["buff", "Train time reduced from 50 to 45 seconds."]],
        },
      ],
    },

    //                               French

    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          // War Cog Food cost reduced from 85 to 75.
          items: ["units/war-cog"],
          civs: ["fr"],
          diff: [["buff", "Food cost reduced from 85 to 75."]],
        },
      ],
    },

    //                             Jeanne d'Arc
    // (Variant Civilization: French)

    {
      subtitle: "Jeanne d'Arc",
      civs: ["je"],
      changes: [
        {
          // Smithy’s Grace, the French Civilization bonus that provides free Blacksmith Upgrades, is no longer granted to Jeanne d’Arc.
          items: [],
          title: "Smithy’s Grace Civ Bonus",
          civs: ["je"],
          diff: [["nerf", "The French Civilization bonus that provides free Blacksmith Upgrades, is no longer granted to Jeanne d’Arc."]],
        },
      ],
    },

    //                      Order of the Dragon
    // (Variant Civilization: Holy Roman Empire)

    //     Battering Ram build time reduced from 70 seconds to 45 seconds.
    // Siege Tower build time reduced from 30 to 19.5 seconds.
    {
      subtitle: "Order of the Dragon",
      civs: ["od"],
      changes: [
        {
          items: ["units/battering-ram"],
          civs: ["od"],
          diff: [["buff", "Build time reduced from 70 seconds to 45 seconds."]],
        },
        {
          items: ["units/siege-tower"],
          civs: ["od"],
          diff: [["buff", "Build time reduced from 30 to 19.5 seconds."]],
        },
      ],
    },

    //                               Ottomans

    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          //Grand Galley Food cost reduced from 150 to 135.
          items: ["units/grand-galley"],
          civs: ["ot"],
          diff: [["buff", "Food cost reduced from 150 to 135."]],
        },
      ],
    },

    //                                 Rus

    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          //Kremlin’s default arrow and garrison arrow weapon range reduced from 8 to 7 tiles.
          items: ["buildings/kremlin"],
          civs: ["ru"],
          diff: [["nerf", "Default arrow and garrison arrow weapon range reduced from 8 to 7 tiles."]],
        },
      ],
    },

    {
      title: "Ongoing…",
      civs: [],
      changes: [],
      md: `
        ## Known Issues
        We’ve seen reports of players attempting to queue for Free-For-All (FFA) in a party receiving a server error message. Party play is currently not supported while queueing for a FFA match and the option to select the FFA match type should be disabled while in a party. Currently, the option is not disabled properly, and the server error is preventing teams from entering the FFA queue. This is intended, and we plan to make a future fix to disable the FFA option in these circumstances.

        [Known Issues](https://support.ageofempires.com/hc/en-us/articles/4408424670484-Known-Issues-Solutions)`,
    },
    {
      title: "What's on the Horizon",
      civs: [],
      changes: [],
      md: `
        ## Coming Up…
        We’re working on our next update and look forward to sharing more soon.

    `,
    },
  ],
};
