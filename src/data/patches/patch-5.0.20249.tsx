import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-5.0.20249",
  buildId: "5.0.20249",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-20249/",
  name: "Patch 20249",
  season: 2,
  type: "patch",
  summary: "Cost decrease for Rams, dark age unit upgrades and survival techniques. Nerf to Herbal Medicine, Town Center garrison attacks and Outposts.",
  introduction: `"Welcome back to an exciting patch for Age of Empires IV! Starting tomorrow, August 4th, we’ll be rolling out balance changes, bug fixes, and more. And yes, that means we’re also including the Prelate Attack move bug you’ve reported! We’re also adding more improvements to hotkey features, including the ability to batch-queue units properly when using shift, mapping more hotkeys for civ-specific commands. Here are a few highlights that you can look forward to in tomorrow’s update!"

* Remappable Hotkey Fixes
* Map Balance Changes
* Other Balance Features
* Quality-of-Life Bug Fixes

  `,
  date: new Date("2022-08-04 21:00:00 UTC"),
  sections: [
    {
      title: "Hotkeys",
      civs: [],
      changes: [],
      md: `### Remappable Hotkeys
      * When using the Fully Remappable hotkey layout, holding down a hotkey now correctly queues up multiple units in a production building, and buys/sells large quantities of resources at the market.

      * Cancel Construction hotkey is now remappable.
      * Wooden Fortresses now respect bindings made under the Outpost category.
      * Golden Gate keys are now properly mapped to match the Market.
      * Khan Attack Speed Arrow is now remappable.
      * Mongol Town Center double production keys now mirror the Town Center keys properly.
      * Professional Scouts (Improved) now mirrors the base hotkey.
      * English unique technology Admiralty is now remappable.
      * White Tower unit production hotkeys now update properly.
      * Wynguard Palace unit production is now remappable.
      * Astronomical Clocktower siege is now remappable.
      * Barbican of the Sun emplacement upgrades are now remappable.
      * Palace of Swabia Prelates now mirror the Town Center binding.
      * Burgrave Palace is now fully remappable.
      * Delhi Sultanate Assign Scholar Directly is now remappable`,
    },
    {
      title: "Mods",
      civs: [],
      changes: [],
      md: `We’ve added additional terrain types for modders that spawn just one instance of each main resource type:
* Gold (small and large)
* Stone (small and large)
* Berries (small and large)
* Deer (small and large, so 3 and 7)
* Sheep (single, double, triple).`,
    },
    {
      title: "Balance Changes",
      civs: [],
      changes: [],
    },
    {
      subtitle: "Technologies",
      civs: [],
      changes: [
        {
          // * Herbal Medicine Healing rate improvement reduced from 100% to 60%.
          // > With the addition of Attack move healing in the last major update we’re seeing you all bringing far more Monks to the battlefield! This change is mostly targeted at the Delhi Sultanate who can stack really high healing on Elephants, but it’s also a way to temper the effects of Attack move healing in general.
          items: ["technologies/herbal-medicine"],
          civs: [],
          diff: [["nerf", "Healing rate improvement reduced from 100% to 60%."]],
          note: "With the addition of Attack move healing in the last major update we’re seeing you all bringing far more Monks to the battlefield! This change is mostly targeted at the Delhi Sultanate who can stack really high healing on Elephants, but it’s also a way to temper the effects of Attack move healing in general.",
        },
        {
          // * Survival Techniques Cost reduced from 100 Gold, 50 Wood to 75 Gold, 25 Wood. Research time reduced from 45 to 25 seconds.
          items: ["technologies/survival-techniques"],
          civs: [],
          diff: [
            ["buff", "Cost reduced from 100 Gold, 50 Wood to 75 Gold, 25 Wood."],
            ["buff", "Research time reduced from 45 to 25 seconds."],
          ],
        },
        {
          // * Siege Engineering Research time reduced from 45 to 30 seconds.
          items: ["technologies/siege-engineering"],
          civs: [],
          diff: [["buff", "Research time reduced from 45 to 30 seconds."]],
        },
      ],
    },
    {
      subtitle: "Units",
      civs: [],
      changes: [
        {
          // * Ram Cost decreased from 300 to 250.
          // > These changes are aimed at making a defense against a Tower Rush easier, by reducing the time to access Ram construction and the cost of building a defensive Ram. We’re also aiming to make Feudal aggression more viable against turtling players.
          items: ["units/battering-ram"],
          civs: [],
          diff: [["buff", "Cost decreased from 300 to 250."]],
          note: "These changes are aimed at making a defense against a Tower Rush easier, by reducing the time to access Ram construction and the cost of building a defensive Ram. We’re also aiming to make Feudal aggression more viable against turtling players.",
        },
        {
          // * Scout production time increased from 20 to 25 seconds.
          // * Scout Health regeneration reduced by 50%.
          // * Reducing the height of Stealth forests from 500 to 100 to allow for Scouts to see through them reliably without obstruction.
          // > Scouts could sometimes have their vision blocked due to terrain height or placement of certain stealth trees. We’ve updated their vision to be able to see through stealth forests more reliably.
          items: ["units/scout"],
          civs: [],
          diff: [
            ["nerf", "Production time increased from 20 to 25 seconds."],
            ["nerf", "Health regeneration reduced by 50%."],
            ["fix", "Scouts can now see through Stealth Forests reliably."],
          ],
          note: "Reducing the height of Stealth forests from 500 to 100. Scouts could sometimes have their vision blocked due to terrain height or placement of certain stealth trees. We’ve updated their vision to be able to see through stealth forests more reliably.",
        },

        // * Early Horseman, Vanguard Man-at-Arms and Spearman Cost to advance to the next tier reduced from 75 Gold, 25 Food to 35 Gold, 15 Food. Research time reduced from 30 to 15 seconds.
        {
          items: ["units/horseman"],
          civs: ["mo"],
          diff: [
            ["buff", "Early Horseman (I) to Horseman (II) upgrade cost reduced from 75 Gold, 25 Food to 35 Gold, 15 Food."],
            ["buff", "Early Horseman (I) to Horseman (II) research time reduced from 30 to 15 seconds."],
          ],
        },
        {
          items: ["units/man-at-arms"],
          civs: ["en"],
          diff: [
            ["buff", "Vanguard Man-at-Arms (I) to Early Mant-at-Arms (II) upgrade cost reduced from 75 Gold, 25 Food to 35 Gold, 15 Food."],
            ["buff", "Vanguard Man-at-Arms (I) to Early Mant-at-Arms (II) research time reduced from 30 to 15 seconds."],
          ],
        },
        {
          items: ["units/spearman"],
          civs: ["ab", "ch", "de", "fr", "hr", "mo", "ru"],
          diff: [
            ["buff", "Early Spearman (I) to Spearman (II) upgrade cost reduced from 75 Gold, 25 Food to 35 Gold, 15 Food."],
            ["buff", "Early Spearman (I) to Spearman (II) research time reduced from 30 to 15 seconds."],
          ],
        },
      ],
    },
    {
      subtitle: "Buildings",
      civs: [],
      changes: [
        {
          // * Defenses No longer favor Rams as a target.
          // > When defending a Ram push, defenses will get stuck attacking Rams since they do so little damage. It’s possible to force defenses to attack other targets manually but we want to give defenders more breathing space to focus on managing more interesting elements of combat.
          items: ["buildings/town-center", "buildings/capital-town-center", "buildings/keep", "buildings/outpost", "units/battering-ram"],
          civs: [],
          diff: [["buff", "Defenses no longer favor Rams as a target."]],
          note: "When defending a Ram push, defenses will get stuck attacking Rams since they do so little damage. It’s possible to force defenses to attack other targets manually but we want to give defenders more breathing space to focus on managing more interesting elements of combat.",
        },
        {
          // * Town Center Default weapon attack interval increased from 1.12 to 1.88.
          // * Town Center Garrison arrow attack interval increased from 1.12 to 1.88.
          // * Town Center Garrison slots reduced from 20 to 15.
          // > This change in combination with the change to prevent defenses from prioritizing attacking Rams helps to even out the defender advantage. We want pushes in the Feudal Age to be more viable at punishing heavy greed strategies.
          items: ["buildings/town-center", "buildings/capital-town-center"],
          civs: [],
          diff: [
            ["nerf", "Default weapon attack interval increased from 1.12 to 1.88."],
            ["nerf", "Garrison arrow attack interval increased from 1.12 to 1.88."],
            ["nerf", "Garrison slots reduced from 20 to 15."],
          ],
          note: "This change in combination with the change to prevent defenses from prioritizing attacking Rams helps to even out the defender advantage. We want pushes in the Feudal Age to be more viable at punishing heavy greed strategies.",
        },
        {
          // * Outpost Health reduced from 1000 to 750.
          // * Outpost Build time increased from 45 to 60 seconds.
          // * Outpost garrison attack interval increased from 1.12 to 1.88.
          // > Tower Rushing has been a consistently strong strategy for a long while and our changes to Towers are to make it more difficult to place them offensively. Now they take longer to build and have less health it should give defenders a larger window for counter play.
          items: ["buildings/outpost"],
          civs: [],
          diff: [
            ["nerf", "Health reduced from 1000 to 750."],
            ["nerf", "Build time increased from 45 to 60 seconds."],
            ["nerf", "Garrison attack interval increased from 1.12 to 1.88."],
          ],
          note: "Tower Rushing has been a consistently strong strategy for a long while and our changes to Towers are to make it more difficult to place them offensively. Now they take longer to build and have less health it should give defenders a larger window for counter play.",
        },
      ],
    },
    {
      // ### Delhi Sultanate
      // * Tower War Elephant Health reduced from 860 to 600.
      // * Tower War Elephant Ranged armor increased from 4 to 7.
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          items: ["units/tower-elephant"],
          civs: [],
          diff: [
            ["nerf", "Health reduced from 860 to 600."],
            ["buff", "Ranged armor increased from 4 to 7."],
          ],
        },
      ],
    },
    {
      // ### French
      // * Town Center production speed bonus in Feudal decreased from 15% to 10%, and Castle Age from 20% to 15%. Dark Age (10%) and Imperial Age (20%) remain the same.
      // > Our data shows that the French are exceptionally strong around the 10-20 minute range, so this slight nerf to their Town Center bonus is aimed at addressing their run-away economy in the early stages of the game. (Known Issue: Help text currently reflects old values.)
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          items: ["buildings/town-center"],
          civs: [],
          diff: [
            [
              "nerf",
              "Production speed bonus in Feudal decreased from 15% to 10%, and Castle Age from 20% to 15%.  Dark Age (10%) and Imperial Age (20%) remain the same.",
            ],
          ],
          note: "Our data shows that the French are exceptionally strong around the 10-20 minute range, so this slight nerf to their Town Center bonus is aimed at addressing their run-away economy in the early stages of the game. (Known Issue: Help text currently reflects old values.)",
        },
      ],
    },
    {
      // ### Holy Roman Empire
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          // * HRE Emergency Repairs cooldown increased from 60 to 75.
          // > In combination with this change, we feel that the Town Center changes and the ram changes should make the HRE fast tech strategy much riskier and will make punishing greedy HRE players much easier than before.

          items: [],
          civs: [],
          diff: [["nerf", "Emergency Repairs cooldown increased from 60 to 75."]],
          note: "In combination with this change, we feel that the Town Center changes and the ram changes should make the HRE fast tech strategy much riskier and will make punishing greedy HRE players much easier than before.",
        },
        {
          // * Prelate Inspiration Ability now respects cooldown time.
          // > Prelates, like life, have found a way to exploit their shiny new Attack move behavior. We have ensured they respect the cooldown of the Inspiration ability correctly.
          items: ["units/prelate"],
          civs: [],
          diff: [["nerf", "Prelate Inspiration Ability now respects cooldown time."]],
          note: "Prelates, like life, have found a way to exploit their shiny new Attack move behavior. We have ensured they respect the cooldown of the Inspiration ability correctly.",
        },
      ],
    },
    {
      // ### Mongols
      // * Mongols now begin the game with a packed Ger.
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["buildings/ger"],
          civs: [],
          diff: [["buff", "Mongols now begin the game with a packed Ger."]],
        },
      ],
    },

    {
      title: "Maps",
      civs: [],
      changes: [],
      md: `## Altai
        * The gold generation locations on Altai have been given a pass after seeing instances of both large and small gold spawns favoring one player. Now, to ensure that both starting small gold deposits don’t spawn forward for one player, the far starting gold deposit has been moved to the Accessible resources distribution and will spawn behind the player in a safer location. Additionally, the large gold deposits have been moved out of Balanced distribution and will now always spawn on the outside lanes, on opposite sides of the Sacred Sites. So, if the Sacred Sites spawn in the northwest and southeast corners, the large gold deposits will spawn in the northeast and southwest corners, ensuring that both players get equal access.
        * Starting large forests should also no longer spawn in between the mountains and the edge of the map, which before could block one of the map lanes.
        * Additionally, fixes for team game spawning (3v3 and 4v4) were put in that now should prevent players from spawning outside the mountain range in larger games.

        ## Ancient Spires
        * We’ve put in a check in the Ancient Spires map script to fix an issue where a player’s starting pond could stomp out one of the trade posts. The map should always spawn 2 trade posts on opposing sides of the map.`,
    },

    {
      title: "Bug Fixes",
      civs: [],
      changes: [],
      md: `* Horse Archer Incendiary Arrows no longer loose attack speed when they are upgraded.
        * Fixed a crash that could occur when clicking on a match summary and attempting to view the replay immediately after loading the main menu.
        * Fixed a bug whereby it was possible to repair structures even when you don’t have the necessary resources.
        * Villagers will no longer T-pose while reloading after shooting Gaia. `,
    },
    {
      title: "UI/UX Changes",
      civs: [],
      changes: [],
      md: `* New icons were created for the Abbasid Market – Toggle Secondary Trade Resource.
        * Post-Match Timeline UI French’s third and fourth Age-up markers will now be displayed properly on Post-Match Timeline UI.
        * Fixed an issue where the “Time To Age IV” column in the post-game Statistics tab under Technology was missing.
        * Player Color Mini-map Changes Adjusted the orange player color so that it’s easier to distinguish it from the red.
        * Updated the black outline thickness of unit icons on the Minimap so that their color stands out more.
        * Wynguard Rangers and Raiders added to the English tech tree.`,
    },
    {
      title: "What’s on the Horizon",
      civs: [],
      changes: [],
      md: `### Coming Up…
        In future patches, we’ll be addressing other issues like Shift interfering with Grid Keys under the Grid Key Layout, as well as Shift queuing not resetting after releasing Shift.

        Last month, we shared an early view of the Season Three roadmap including key features like Team Ranked, Taunts and Cheats that will launch with our next major update. We’ve heard since that some of you would like to hear an update on Naval Balance! Significant balance changes like this require time and a number of different steps and teams acting in unison. In short, it’s a bigger change than you’d expect, which touches balance, gameplay and our presentation team. It’s something we have been working on, but it’s something that needs to be presented in a completed package, so these are changes you might see in our Season Three Update.

        Here’s some of what we have planned for Naval Balance:
        * Enhanced tactical RPS gameplay – Starting in the Feudal Age you’ll have access to three ships which have strong bonuses against each other, making for exciting tactical engagements.
        * Earlier Engagements – We’re making ships more affordable so expect to have bigger battles that start earlier in the game.
        * Responsiveness tuning – Faster movement speed and more responsive turning of all ships.
        * Reworked Balance – New costs, stats, and enhancements available for all ships!
        * Naval Map Changes – Adding more wood and ensuring fairer distributions of fish, along with many other improvements to Naval maps!`,
    },
  ],
};
