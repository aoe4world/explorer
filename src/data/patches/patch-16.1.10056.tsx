import { PatchNotes } from "../../types/patches";

export const patch: PatchNotes = {
  id: "patch-16-1-10056",
  buildId: "16.1.10056",
  name: "Patch 16.1.10056",
  season: 13,
  type: "patch",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-minor-patch-16-1-10056/",
  summary: `While we’re still planning for a larger patch in a few weeks, we heard your concerns about the Jin Dynasty feeling a bit too weak and the Sengoku Daimyo still feeling too strong and have made some changes to address this feedback.`,
  introduction: `
![](https://cdn.ageofempires.com/aoe/wp-content/uploads/2026/05/AoE-IV-S13-Patch-1920x1080-1-1080x608.webp)

We’re excited to follow up on last week’s release of *Yue Fei’s Legacy* and the Season Thirteen update with a few additional changes! While we’re still planning for a larger patch in a few weeks, we heard your concerns about the Jin Dynasty feeling a bit too weak and the Sengoku Daimyo still feeling too strong and have made some changes to address this feedback. Read on to learn more about the latest balance changes, as well as a handful of fixes we’ve made in response to recent reports.

Additionally, as of late last week, we’ve disabled Ranked Decay as the team continues to investigate how to improve upon this functionality in the future.

---

Thanks again to our amazing community members, all of whom have helped to make *Age of Empires* what it is today!

—The *Age of Empires* Team
  `,
  date: new Date("2026-05-12T16:15:13Z"),
  sections: [
    {
      title: "Bugfixes",
      subtitle: "General Changes & Bugfixes",
      civs: [],
      changes: [
        {
          items: [],
          civs: [],
          uionly: true,
          diff: [
            ["fix", "Fixed Caster Mode “View Next Player” button, which was previously unresponsive."],
          ],
        },
        {
          items: [],
          civs: [],
          diff: [
            ["fix", "Fixed a crash that could occasionally occur when loading into campaign missions or skirmish matches."],
            ["fix", "Previously, we’d received reports of distorted audio occurring, most prominently during FFA matches or 8-player matches with the Jin Dynasty. We’ve made some changes that should greatly improve on this issue; however, you may notice more limited ambient noise in some scenarios. The team is investigating ongoing improvements."],
          ],
        },
      ],
    },
    {
      title: "Balance Changes",
      subtitle: "Jin Dynasty",
      civs: ["jin"],
      changes: [
        {
          items: ["units/mohe-tribesman"],
          civs: ["jin"],
          diff: [
            ["buff", "Base attack increased from 4 → 5."],
            ["buff", "Veteran attack increased from 6 → 7."],
            ["buff", "Elite attack increased from 7 → 8."],
          ],
        },
        {
          items: ["buildings/great-wall-bastion"],
          civs: ["jin"],
          diff: [
            ["buff", "Bedcrossbow weapon projectile hitbox increased slightly (hits more units)."],
            ["buff", "Bedcrossbow weapon damage increased from 14 → 28."],
          ],
        },
        {
          items: ["units/bed-crossbow"],
          civs: ["jin"],
          diff: [
            ["buff", "Projectile hitbox increased in size (hits more units)."],
            ["buff", "Base attack increased from 7 → 8."],
            ["buff", "Veteran attack increased from 9 → 10."],
            ["buff", "Elite attack increased from 12 → 13."],
          ],
        },
      ],
    },
    {
      subtitle: "Sengoku Daimyo",
      civs: ["sen"],
      changes: [
        {
          items: ["technologies/horse-training"],
          civs: ["sen"],
          diff: [
            ["nerf", "Horse Training upgrade cost increased from 50 Food 125 Gold → 100 Food 250 Gold."],
            ["nerf", "Horse Training movement speed reduced from 10% → 5%."],
          ],
        },
        {
          items: ["buildings/ryokan"],
          civs: ["sen"],
          diff: [
            ["nerf", "Ryokan healing reduced from 4 health every 5 seconds → 4 health every 6 seconds."],
          ],
        },
        {
          items: ["buildings/sword-hunt-statue"],
          civs: ["sen"],
          diff: [
            ["nerf", "Sword Hunt Statue attack speed reduced from 40% → 35%."],
          ],
        },
        {
          items: ["units/mounted-samurai", "technologies/mounted-samurai-odachi"],
          civs: ["sen"],
          diff: [
            ["nerf", "Mounted Samurai Odachi weapon bonus damage versus infantry reduced from 4 → 3."],
          ],
        },
        {
          items: ["units/yatai"],
          civs: ["sen"],
          diff: [
            ["nerf", "Base gather rate reduced from 20 → 10."],
            ["nerf", "Health reduced from 370 → 320."],
            ["nerf", "Repair rate reduced from 20 → 5 health per second."],
          ],
        },
        {
          items: ["buildings/sake-brewery"],
          civs: ["sen"],
          diff: [
            ["nerf", "Toko-Koji Mat gather rate reduced from 1.45 → 1.35."],
          ],
        },
      ],
    },
  ],
};
