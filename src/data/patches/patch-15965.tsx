import { PatchNotes } from "../../types/patches";

export const patch15965: PatchNotes = {
  id: "patch-15965",
  buildId: 15965,
  name: "Patch 15965",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-patch-15965/",
  summary: `"In Patch 15965, we’re bringing you fixes to the shift-queue bug that we know you’ve been asking for. Villagers are putting away their sheep shears and will now be using the correct weapons against enemy troops, and you can now queue as many buildings as your pockets allow."`,
  date: new Date("2022-05-25"),
  sections: [
    {
      title: "Balance Changes",
      civs: [],
      changes: [
        {
          items: ["units/villager"],
          civs: [],
          diff: [["fix", "Fixed a bug where villagers would sometimes use their wolf or sheep hunting weapons against enemy troops."]],
        },
      ],
    },
    {
      title: "General Fixes",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          diff: [
            [
              "fix",
              "Fixed a bug where units would ignore commands given to them when using shift. This happened when the physical distance between locations was very close.",
            ],
            ["fix", "Fixed a bug where the player could not shift queue attack moves without multiple presses of the “A” key."],
            [
              "fix",
              "You can now queue up building as many structures as you can afford. Previously the placement of the last building(s) would be cancelled due to available resource miscalculation.",
            ],
          ],
        },
      ],
    },
    {
      title: "What’s Next",
      description: `We’ll be looking to bring the next Public Update Preview (PUP) your way in the next month or so!
  
        During the PUP, you’ll be able to try out some of the new features planned for Season Two early. While the PUP is designed to help us lock down, catch any unexpected issues and ensure polish when we’re delivering major updates, this time around we’re also testing a new experimental camera angle and zoom option to determine how and when to best introduce it into the game. We’ll be relying on your feedback to make some important decisions about which game modes this option applies to and more, so keep an eye out for more news on the PUP in the future!
        
        As well, the team is also investigating changes to Rank Point distribution for Season Two. We don’t have any specific details to share at this time, but we’re monitoring your feedback.
        
        Finally, we’re also continuing to celebrate the Festival of Ages! Keep an eye out for more rewards coming soon. Have any feedback to share with us about this patch or other topics?`,
      civs: [],
      changes: [],
    },
  ],
};
