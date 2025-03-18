import { PatchNotes } from "../../types/patches";

export const patch1212638: PatchNotes = {
  id: "patch-1212638",
  buildId: 1212638,
  name: "Hotfix 12.1.2638",
  season: 9,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-hotfix-12-1-2638/",
  summary: "Hotfix for Malian Mansa Javelineer unlock bug.",
  introduction: `"Hello, Age IV community! We delivered what we thought would be our final patch of the year on November 19th, and then your diligent eyes spotted a bug. We've wrapped up one final gift as part of this year's Season's Feast, and today's hotfix brings with it a quick Malians bug fix heading into the holidays."`,
  date: new Date("2023-12-03T18:00:00Z"),
  sections: [
    {
      title: "Bug Fixes",
      civs: [],
      changes: [
        {
          items: ["units/mansa-javelineer", "buildings/archery-range", "buildings/farimba-garrison"],
          civs: ["ma"],
          diff: [["fix", "Fixed an issue with the Malian Mansa Javelineer's Farimba unlock being available at the Archery Range in Feudal Age."]],
        },
      ],
    },
  ],
};
