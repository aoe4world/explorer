import { PatchNotes } from "../../types/patches";

export const patch14681: PatchNotes = {
  id: "patch-14681",
  buildId: 14681,
  name: "Patch 14681",
  season: 1,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-14681/",
  summary: "Decrease in Team Game Map Sizes, Chinese Extra Materials nerf, and stone walls under construction can now be attacked.",
  introduction: `"In Patch 14681, we’re excited to share some changes we’ve made based on your feedback. To start, we know you’ve been asking for Team Game Map Size changes, and this patch introduces the option to choose smaller or larger maps in multiplayer – whatever your preference! We’ve also put some focus towards tuning specific maps to be better for all types of multiplayer and skirmish modes. While there’s still more we’d like to do for maps that we weren’t able to get to in this patch, we’d especially like to thank you for continuing to share your thoughts. Your map feedback has been incredibly helpful to us! 
  
  For balance, we know you’ve been wanting your units to be able to attack stone walls under construction… and now you can! We’re also making a few adjustments for Chinese Extra Materials, and while balance changes for Mangonels aren’t quite ready for Patch 14681, we’ll be looking at focusing their role so they aren’t as powerful in all situations and have a more defined place in the unit counter system in a future patch."`,
  date: new Date("2022-05-02"),
  sections: [
    {
      title: "Balance Changes",
      civs: [],
      changes: [
        {
          // Stone walls under construction can now be attacked by all units
          items: ["buildings/stone-wall"],
          civs: [],
          diff: [["nerf", "Stone walls under construction can now be attacked by all units"]],
        },
        {
          // Chinese Extra Materials no longer stacks on single wall segments
          // Chinese Extra Materials now repairs all wall segments within range. Chinese Extra Materials repair range reduced from 12.5 tiles to 4 tiles
          // Added an aura UI which shows the ability range of Chinese Towers and Outposts after researching Extra Materials
          items: ["technologies/extra-materials", "buildings/stone-wall", "buildings/outpost"],
          civs: ["ch"],
          diff: [
            ["nerf", "Chinese Extra Materials no longer stacks on single wall segments"],
            ["buff", "Chinese Extra Materials now repairs all wall segments within range."],
            ["nerf", "Chinese Extra Materials repair range reduced from 12.5 tiles to 4 tiles"],
            ["fix", "Added an aura UI which shows the ability range of Chinese Towers and Outposts after researching Extra Materials"],
          ],
        },
      ],
    },
    {
      title: "Bug Fixes",
      civs: [],
      changes: [
        {
          // Fixed a bug where villagers could become stuck gathering from sheep if they had previously been gathering from deer or boar
          items: ["units/villager"],
          civs: [],
          diff: [["fix", "Fixed a bug where villagers could become stuck gathering from sheep if they had previously been gathering from deer or boar"]],
        },

        {
          // Fixed a bug where Nest of Bees reload time could be avoided by cancelling in the middle of an attack
          items: ["units/nest-of-bees"],
          civs: ["ch"],
          diff: [["fix", "Fixed a bug where reload time could be avoided by cancelling in the middle of an attack"]],
        },
      ],
    },
    {
      title: "Map Changes",
      description: "Team game map sizes have been reduced across the board.",
      civs: [],
      changes: [
        {
          // We now support playing 4v4 on the Large map size, and 3v3 on the Medium map size – these options are now supported for custom games
          // In Quick Match, 2v2 games will now be played on Small (down from Medium), 3v3 games on Medium (down from Large), and 4v4 on Large (down from Gigantic)
          // Gigantic maps are still available for custom games. Please continue to give us feedback on how map sizes feel in team games!
          items: [],
          civs: [],
          diff: [
            ["fix", "We now support playing 4v4 on the Large map size, and 3v3 on the Medium map size – these options are now supported for custom games"],
            [
              "buff",
              "In Quick Match, 2v2 games will now be played on Small (down from Medium), 3v3 games on Medium (down from Large), and 4v4 on Large (down from Gigantic)",
            ],
          ],
          note: "Gigantic maps are still available for custom games. Please continue to give us feedback on how map sizes feel in team games!",
        },
        {
          items: ["maps/warring-islands"],
          civs: [],
          diff: [
            [
              "buff",
              "Updated how the spawns on Warring Islands work in the case of uneven teams (where the difference between the largest and smallest team is greater than 2 (e.g. in a 4v2v1v1).",
            ],
          ],
          note: "In cases like this, each player will now get their own island in order to ensure that the larger team doesn’t have a distinct resource and build space advantage. Teammates’ islands should be in close proximity though, so controlling the seas with your teammates is still important!",
        },
        {
          //         Altai
          // The amount of trees on Altai has been increased. In addition to starting dense forests, numerous small dense forests have been added
          // Dev note: We saw that games pushing into Imperial Age on Altai could often result in the entire map being harvested of wood, so we’ve added numerous small dense woods around the map to help alleviate the wood starvation late-game. The forests we added were small forests to make sure they did not choke up the openings on the map, as we want Altai to remain a relatively open map.
          items: ["maps/altai"],
          civs: [],
          diff: [
            ["buff", "The amount of trees on Altai has been increased. In addition to starting dense forests, numerous small dense forests have been added"],
          ],
          note: "We saw that games pushing into Imperial Age on Altai could often result in the entire map being harvested of wood, so we’ve added numerous small dense woods around the map to help alleviate the wood starvation late-game. The forests we added were small forests to make sure they did not choke up the openings on the map, as we want Altai to remain a relatively open map.",
        },
        {
          // Mountain Pass
          // Trade Posts on Mountain Pass have been moved to spawn halfway between the corner of the map and wherever the mountain range hits the map edge. This should help ease cases of trade being too vulnerable as soon as one team loses the central pass
          items: ["maps/mountain-pass"],
          civs: [],
          diff: [
            [
              "buff",
              "Trade Posts on Mountain Pass have been moved to spawn halfway between the corner of the map and wherever the mountain range hits the map edge.",
            ],
          ],
          note: "This should help ease cases of trade being too vulnerable as soon as one team loses the central pass.",
        },
        {
          // French Pass
          // To open up the map a bit more on French Pass, we’ve shortened the mountain ranges
          // Dev note: French Pass was playing as a quite turtle-y map, with the mountains reaching far enough towards the map edge that walling off entire sides of the map was quite cheap to do. We’ve cut the mountain ranges a bit shorter on both sides to open up the sides of the map for more dynamic engagements and army maneuvering.
          items: ["maps/french-pass"],
          civs: [],
          diff: [["buff", "To open up the map a bit more on French Pass, we’ve shortened the mountain ranges"]],
          note: "French Pass was playing as a quite turtle-y map, with the mountains reaching far enough towards the map edge that walling off entire sides of the map was quite cheap to do. We’ve cut the mountain ranges a bit shorter on both sides to open up the sides of the map for more dynamic engagements and army maneuvering.",
        },

        {
          // Boulder Bay
          // Boulder Bay has had tuning done to player spawning to ensure that the maps loaded correctly, and placed players and their team in the correct areas
          items: ["maps/boulder-bay"],
          civs: [],
          diff: [
            [
              "fix",
              "Boulder Bay has had tuning done to player spawning to ensure that the maps loaded correctly, and placed players and their team in the correct areas",
            ],
          ],
        },
        {
          // The Danube River
          // The Danube River map has had a few tweaks to make trade more viable and open up more play options for the hill side of the map.
          // Both trade posts will now spawn in opposing corners of the hill
          // Dev note: this should allow for both teams to have equal access to trade independent of water control.
          // Sacred Sites have been moved slightly – one is now near the edge of the map on the island, where the old island trade post spawned, and one is in the center of the hill, with a new path leading down to the bridge
          // Dev note: we wanted to open up play on the hill more than was happening before. The added path, along with shorter cliffs overall, should make this a more interesting area to control and contest.
          // Two boar have been added to the center of the island to maintain its’ economic importance
          items: ["maps/danube-river"],
          civs: [],
          diff: [
            ["buff", "The Danube River map has had a few tweaks to make trade more viable and open up more play options for the hill side of the map."],
            ["buff", "Both trade posts will now spawn in opposing corners of the hill"],
            [
              "fix",
              "Sacred Sites have been moved slightly – one is now near the edge of the map on the island, where the old island trade post spawned, and one is in the center of the hill, with a new path leading down to the bridge",
            ],
            ["fix", "Two boar have been added to the center of the island to maintain its’ economic importance"],
          ],
          note: "This should allow for both teams to have equal access to trade independent of water control. Qe wanted to open up play on the hill more than was happening before. The added path, along with shorter cliffs overall, should make this a more interesting area to control and contest.",
        },
      ],
    },
  ],
};
