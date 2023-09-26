import { PatchNotes } from "../../types/patches";

export const serverSidePatch51148: PatchNotes = {
  id: "server-side-patch-51148",
  buildId: 14681,
  name: "Server-Side Patch 5.1.148 ",
  season: 3,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-server-side-patch-5-1-148-1/",
  introduction: `"To help keep the meta fresh, we're making tweaks to some of the top-performing civilizations. In this patch, you’ll find that it will take more time to build walls and defensive structures, you'll see a few adjustments to the Chinese civilization, and other balance changes to the Malians and Mongol civilizations. Read on to learn more!"`,
  date: new Date("2022-12-08T20:00:00.000Z"),
  sections: [
    {
      title: "General",
      civs: [],
      changes: [
        {
          // • Stone Wall cost increased from 15 stone to 20 stone.
          // • Developer Note: Stone walls are a very powerful option for shutting down raids. We wanted their cost to more closely match their effect in game.
          items: ["buildings/stone-wall"],
          civs: [],
          diff: [["nerf", "Cost increased from 15 stone to 20 stone."]],
          note: "Stone walls are a very powerful option for shutting down raids. We wanted their cost to more closely match their effect in game.",
        },
      ],
    },
    {
      title: "Chinese",
      civs: ["ch"],
      changes: [
        {
          // • Fixed an issue where fortifications were not properly built 50% faster.
          items: ["buildings/palisade-wall", "buildings/palisade-gate", "buildings/stone-wall", "buildings/stone-gate"],
          civs: ["ch"],
          diff: [["fix", "Fixed an issue where fortifications were not properly built 50% faster."]],
        },
        {
          // • Stone wall build time increased from 8 seconds to 10.5.
          items: ["buildings/stone-wall"],
          civs: ["ch"],
          diff: [["nerf", "Build time increased from 8 seconds to 10.5."]],
        },
        {
          // • Palisade Walls build increased from 2 seconds to 2.5.
          items: ["buildings/palisade-wall"],
          civs: ["ch"],
          diff: [["nerf", "Build time increased from 2 seconds to 2.5."]],
        },
        {
          // • Keeps build time increased from 1 minute 45 seconds to 2 minutes.
          items: ["buildings/keep"],
          civs: ["ch"],
          diff: [["nerf", "Build time increased from 1 minute 45 seconds to 2 minutes."]],
        },
        {
          // • Outposts build time decreased from 45 seconds to 40.
          items: ["buildings/outpost"],
          civs: ["ch"],
          diff: [["buff", "Build time decreased from 45 seconds to 40."]],
        },
        {
          // • Song Dynasty Villager bonus changed from 35% reduction in time to a 33% increase to production. speed. This means villagers will build in 15 seconds instead of 13.
          //   • Developer Note: As we made Town Centers more difficult to build, this had the unintended effect of making Song Dynasty a relatively stronger economic option with less resource investment.
          items: ["units/villager"],
          civs: ["ch"],
          diff: [["nerf", "Song Dynasty Villager production speed changed from 13 seconds to 15 seconds (33% reduction bonus instead of 35%)."]],
          note: "As we made Town Centers more difficult to build, this had the unintended effect of making Song Dynasty a relatively stronger economic option with less resource investment.",
        },
        {
          // • Barbican and Village garrison slots reduced from 10 to 8.
          //   • Developer Note: We wanted to allow more counterplay options when attacking a booming or teching China player.
          items: ["buildings/barbican-of-the-sun", "buildings/village"],
          civs: ["ch"],
          diff: [["nerf", "Garrison slots reduced from 10 to 8."]],
          note: "We wanted to allow more counterplay options when attacking a booming or teching China player.",
        },
      ],
    },
    {
      title: "Malians",
      civs: ["ma"],
      changes: [
        {
          // • Cattle cost increased from 75 gold to 90 gold.
          // • Developer Note: We found that at 75 gold it was so cost efficient that players would completely ignore farms and exclusively eat cows. Cattle are meant as a supplement to farms and not a total replacement.
          items: [],
          title: "Cattle",
          civs: ["ma"],
          diff: [["nerf", "Cost increased from 75 gold to 90 gold."]],
          note: "We found that at 75 gold it was so cost efficient that players would completely ignore farms and exclusively eat cows. Cattle are meant as a supplement to farms and not a total replacement.",
        },
      ],
    },
    {
      title: "Mongols",
      civs: ["mo"],
      changes: [
        {
          // .  • Pastures Sheep spawn time increased from 120 seconds to 140 seconds.
          //   • Developer Note: Pastures are still more cost effective than farms, we just wanted to reduce the delta in power level between these options.
          items: ["buildings/pasture"],
          civs: ["mo"],
          diff: [["nerf", "Sheep spawn time increased from 120 seconds to 140 seconds."]],
          note: "Pastures are still more cost effective than farms, we just wanted to reduce the delta in power level between these options.",
        },
      ],
    },
    {
      title: "What’s Next? ",
      civs: [],
      md: `As we prepare to head into the Winter Holiday, we’ve got lots of plans up our sleeves for next year! You can read about some of what’s coming in Season Four in our community roadmap, and we’ll have more news to share with you about the next Public Update Preview (PUP) in January! 

January won’t just be PUP-focused, however. We’ll also have a new Season Three event kicking off late in the month! Our team has also heard your feedback on making the Hardest AI more difficult to play against, so you’ll see those adjustments in our next minor patch early next year as well. We hope you’re ready for a challenge -- our Balance Team is already breaking a sweat testing some early concepts of the Hardest AI update!`,
      changes: [],
    },
  ],
};
