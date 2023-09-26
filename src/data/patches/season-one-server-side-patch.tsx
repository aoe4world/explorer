import { PatchNotes } from "../../types/patches";

export const s1ServerSide1: PatchNotes = {
  id: "season-one-server-side-patch",
  name: "Server Side Patch 12793",
  season: 1,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-server-side-patch-12973/",
  introduction: `"Following on the heels of the Season One update, we’re excited to introduce a brand new path for bringing you smaller, more pointed changes with Server-Side Patches."   
      `,
  buildId: 12793,
  date: new Date("2022-04-11"),
  sections: [
    {
      title: "Core Units",
      civs: [],
      changes: [
        {
          items: ["units/mangonel"],
          civs: [],
          diff: [["nerf", "Mangonel projectile area of effect radius reduced from 1.25 to 0.75 tiles"]],
          note: "We realize this is a dramatic reduction to the power level of Mangonels. Our goal is to push gameplay away from siege heavy compositions.",
        },
        {
          items: ["units/battering-ram"],
          civs: [],
          diff: [["buff", "Ram bonus damage vs Walls increased by +100"]],
          note: "We want to provide more options for countering both wooden and stone walls in the early and midgame.",
        },
        {
          items: ["units/monk"],
          civs: [],
          diff: [
            ["buff", "Monk move speed increased from 4 to 4.5"],
            ["nerf", "Monk move speed reduced by 25% while carrying a Relic"],
          ],
          note: "We'd like monks to generally be more useful in your armies without slowing down group formation movement. However! It's also important that there's plenty of opportunity to battle over relic spawns.",
        },
        {
          items: ["units/villager"],
          civs: [],
          diff: [["fix", "Villagers will no longer be interrupted by attacks while gathering resources"]],
        },
      ],
    },

    {
      title: "Mongols",
      civs: ["mo"],
      changes: [
        {
          items: ["units/khan"],
          civs: ["mo"],
          // Khan weapon range reduced to 5.5 in Feudal, Castle, and Imperial Age
          // Khan weapon damage reduced from 4 to 3 in the Feudal Age
          // Khan weapon damage reduced from 8 to 6 in the Castle Age
          // Khan melee and ranged armor reduced from 1 to 0 in the Castle Age
          // Developer Note: Power level of the Khan is tricky as it’s a free respawning unit that’s fast, ranged, and fires while moving. The perfect stats for a harassing unit. As the general of the Mongol civilization we’re nudging him away from the effective harassment role.
          diff: [
            ["nerf", "Weapon range reduced to 5.5 in Feudal, Castle, and Imperial Age"],
            ["nerf", "Damage reduced from 4 to 3 in the Feudal Age"],
            ["nerf", "Damage reduced from 8 to 6 in the Castle Age"],
            ["nerf", "Melee and Ranged armor reduced from 1 to 0 in the Castle Age"],
          ],
          note: "Power level of the Khan is tricky as it’s a free respawning unit that’s fast, ranged, and fires while moving. The perfect stats for a harassing unit. As the general of the Mongol civilization we’re nudging him away from the effective harassment role.",
        },
      ],
    },

    {
      title: "Abbassid Dynasty",
      civs: ["ab"],
      changes: [
        {
          //           Camel Archer move speed reduced from 1.69 Tiles/s to 1.62 Tiles/s
          // Camel Archer health reduced from 175/210/250 to 140/170/200 per Age
          // Developer Note: We wanted to provide a clear weakness for the camel archer unit so it’s easier to counter and provides more incentive to build mixing armies.
          items: ["units/camel-archer"],
          civs: ["ab"],
          diff: [
            ["nerf", "Move speed reduced from 1.69 Tiles/s to 1.62 Tiles/s"],
            ["nerf", "Health reduced from 175/210/250 to 140/170/200 per Age"],
          ],
          note: "We wanted to provide a clear weakness for the camel archer unit so it’s easier to counter and provides more incentive to build mixing armies.",
        },
      ],
    },
  ],
};
