import { PatchNotes } from "../../types/patches";

export const patch1304343: PatchNotes = {
  id: "patch-1304343",
  buildId: 1304343,
  name: "Patch 13.0.4343",
  season: 10,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-13-0-4343/",
  summary:
    "Patch to address House of Lancaster strength and some Knights Templar balance adjustments",
  introduction: `
    We have heard your feedback regarding the variant civilizations released with Age of Empires IV – Knights of Cross and Rose. It seems that the House of Lancaster hit the battlefield with a little too much muscle, so we are scaling back their power in today’s patch to get them to a more balanced state. We are also adjusting some of the Knights Templar’s numbers to redistribute their power more fairly.
  `,
  date: new Date("2025-04-09T20:00:00Z"),
  sections: [
    {
      title: "General Changes & Bugfixes",
      subtitle: "",
      civs: [],
      changes: [
        {
          items: [],
          title: "Single Player",
          civs: [],
          diff: [["fix", "Fixes potential crash in Agincourt Historical Battle."]],
        },
      ],
    },
    {
      subtitle: "House of Lancaster",
      civs: ["hl"],
      changes: [
        {
          items: ["units/villager"],
          civs: ["hl"],
          title: "Civilization Trait - Wool Industries",
          diff: [["nerf", "Additional gather rate from sheep decreased from 25% to 20%. "]],
        },
        {
          items: ["units/demilancer"],
          civs: ["hl"],
          diff: [
            ["nerf", "Veteran Demilancer health decreased from 170 to 160."],
            ["nerf", "Veteran Demilancer damage decreased from 10 to 9 (charge from 15 to 14)."],
            ["nerf", "Elite Demilancer health decreased from 240 to 200."],
            ["nerf", "Elite Demilancer damage decreased from 18 to 14 (charge from 27 to 21)."],
          ],
        },
        {
          items: ["technologies/billmen"],
          civs: ["hl"],
          diff: [["nerf", "Armor reduction effect decreased from -2/-2 to -1/-1."]],
        },
        {
          items: ["technologies/synchronized-shot"],
          civs: ["hl"],
          diff: [["nerf", "Damage decreased from 6/7/8 → 5/6/7 (Feudal/Veteran/Elite tiers)."]],
        },
        {
          items: ["buildings/manor"],
          civs: ["hl"],
          diff: [
            ["nerf", "Manor income decreased from 70 food and 45 wood → 60 food and 45 wood."],
          ],
        },
        {
          items: ["technologies/open-field-system"],
          civs: ["hl"],
          diff: [
            ["nerf", "Cost increased from 150 wood and 350 gold to 200 wood and 400 gold."]
          ],
        },
      ],
    },
    {
      subtitle: "Knights Templar",
      civs: ["kt"],
      changes: [
        {
          items: ["units/serjeant"],
          civs: ["kt"],
          diff: [
            ["nerf", "Health increased from 95 to 105. Veteran and Elite unchanged."],
          ],
        },
        {
          items: ["units/heavy-spearman"],
          civs: ["kt"],
          diff: [
            ["nerf", "Cost increased from 70 food and 30 gold → 80 food and 30 gold."],
          ],
        },
        {
          items: [],
          civs: ["kt"],
          title: "Pilgrims",
          diff: [
            ["fix", "Can no longer travel on Stone Walls."],
            ["nerf", "Pilgrim Ship speed reduced from 1.5 to 1.0."],
          ],
        },
      ],
    },
  ],
};
