import { PatchNotes } from "../../types/patches";

export const serverSidePatch14681: PatchNotes = {
  id: "server-side-patch-14681",
  buildId: 14681,
  name: "Server-Side Patch 14681 ",
  officialUrl: "https://www.ageofempires.com/news/age-of-empires-iv-server-side-patch-14681/",
  summary: `"In Server-Side Patch 14681, we’re bringing you changes to Mangonels! We recognize there’s been a lot of discussion around Mangonels, and we believe these changes build upon the unit’s uniqueness. We’re always open to more feedback, however! You may also be excited to know that the HRE’s Prelates have remembered how to shuffle their feet and no longer get stuck when inspiring their allies. "`,
  date: new Date("2022-05-16T20:00:00.000Z"),
  sections: [
    {
      title: "Balance Changes",
      civs: [],
      changes: [
        {
          // Mangonel now deals 50% more damage to ranged units. Attack radius increased from 0.75 tiles to 0.875.  (Developer Note: We want to focus the Mangonel role to be strong versus ranged units like archers and handcannons while the Ribauldequin is powerful versus melee units.)
          items: ["units/mangonel"],
          civs: [],
          diff: [
            ["buff", "Added 50% bonus damage to ranged units"],
            ["buff", "Attack radius increased from 0.75 tiles to 0.875"],
          ],
          note: "We want to focus the Mangonel role to be strong versus ranged units like archers and handcannons while the Ribauldequin is powerful versus melee units.",
        },
      ],
    },
    {
      subtitle: "Abbassid",
      civs: ["ab"],
      changes: [
        {
          // Reduced research time for House of Wisdom first tier techs (Fresh Foodstuffs, Boot Camp, Preservation of Knowledge, and Grand Bazaar) from 60 seconds to 30.  (Developer Note: Other civilizations get to use their Landmark bonuses immediately upon age up, while Abbasid Dynasty has to wait for the research to complete. This change is aimed at overcoming this deficit in the early stages of the game.)
          items: ["technologies/fresh-foodstuffs", "technologies/boot-camp", "technologies/preservation-of-knowledge", "technologies/grand-bazaar"],
          civs: ["ab"],
          diff: [["buff", "Reduced research time for House of Wisdom first tier techs from 60 seconds to 30."]],
          note: "Other civilizations get to use their Landmark bonuses immediately upon age up, while Abbasid Dynasty has to wait for the research to complete. This change is aimed at overcoming this deficit in the early stages of the game.",
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        // HRE will now start the game with a prelate and -100 gold (Developer Note: We did some modeling and found the HRE generate less resources than other civilizations, leading to a weaker Feudal Age and less options. Removing the starting gold ensures they don't have a bonkers Feudal Age speed, and now bolster a competitive number of resources in Feudal age.)
        {
          items: [],
          civs: ["hr"],
          diff: [["nerf", "HRE will now start the game with 0 gold (down from 100 gold)"]],
          note: "We did some modeling and found the HRE generate less resources than other civilizations, leading to a weaker Feudal Age and less options. Removing the starting gold ensures they don't have a bonkers Feudal Age speed, and now bolster a competitive number of resources in Feudal age.",
        },
        {
          //Prelates no longer become stuck inspiring an out-of-range target. (Developer Note: Sometimes, when a Player moved a Prelate away from a unit that was just starting to Inspire, it was possible for that Prelate to get stuck targeting that unit. This meant that when the Prelate arrived at a new group of units that the Player intended to Inspire, it would be stuck attempting to Inspire the original target that was too far away. The Prelate would not be able to acquire a new target until the old one was Inspired by a different source or killed, resulting in a "Prelate.“ This fix has added logic to the Prelate that will ensure that it can no longer get stuck on any target and will always look for a new one when becoming idle.)
          items: ["units/prelate"],
          civs: ["hr"],
          diff: [
            ["buff", "A free prelate will spawn at the beginning of the game"],
            ["fix", "Prelates no longer become stuck inspiring an out-of-range target"],
          ],
          note: 'Sometimes, when a Player moved a Prelate away from a unit that was just starting to Inspire, it was possible for that Prelate to get stuck targeting that unit. This meant that when the Prelate arrived at a new group of units that the Player intended to Inspire, it would be stuck attempting to Inspire the original target that was too far away. The Prelate would not be able to acquire a new target until the old one was Inspired by a different source or killed, resulting in a "Prelate." This fix has added logic to the Prelate that will ensure that it can no longer get stuck on any target and will always look for a new one when becoming idle.',
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          // * Mongol Outposts Yam speed aura now only applies to units within the radius and no longer lingers for 10 seconds. (Developer Note: As movement speed is extremely strong, we want players to have to dedicate more time and resources to this bonus if they'd like it on more parts of the map. Doing this creates more risk in setting up outposts closer to the enemy base.)
          items: ["buildings/outpost"],
          civs: ["mo"],
          diff: [["nerf", "Mongol Yam speed Aura now only applies to units within the radius and no longer lingers for 10 seconds."]],
          note: "As movement speed is extremely strong, we want players to have to dedicate more time and resources to this bonus if they'd like it on more parts of the map. Doing this creates more risk in setting up outposts closer to the enemy base.",
        },
        {
          // * Mongol Khan Can no longer fire while on the move in the Dark Age.  (Developer Note: This change is targeted at Khans following enemy scouts and killing their sheep. It's compounded by the fact that Mongols are often able to apply early pressure to enemies who are then out of sheep and low on options. This change will retain the Khan's fire while moving attack in all other ages.)
          items: ["units/khan"],
          civs: ["mo"],
          diff: [["nerf", "Mongol Khan Can no longer fire while on the move in the Dark Age."]],
          note: "This change is targeted at Khans following enemy scouts and killing their sheep. It's compounded by the fact that Mongols are often able to apply early pressure to enemies who are then out of sheep and low on options. This change will retain the Khan's fire while moving attack in all other ages.",
        },
      ],
    },
    {
      title: "Maps",
      civs: [],
      description:
        "Danube River was having a bit of a boar problem on the island, and so a royal hunt was called. The map will now spawn boar in the following configuration",
      changes: [
        {
          //         * Danube River was having a bit of a boar problem on the island, and so a royal hunt was called. The map will now spawn boar in the following configuration:
          //     * Micro size - only 2 boar will spawn, both on the island.
          //     * Small size - the 2 island boar, along with 1 additional boar in the centre of the map's contested region will spawn.
          //     * Medium size - the 2 island boar, along with 2 additional boar in the centre of the map's contested region will spawn.
          //     * Large size - the 2 island boar, along with 3 additional boar in the centre of the map's contested region will spawn.
          //     * Gigantic size - the 2 island boar, along with 4 additional boar in the centre of the map's contested region will spawn.
          // (Developer Note: The new boar amounts should now line up with the standard allotment of boar per map size, but with the added specificity of there being always at least 2 of them that spawn on the central island.)
          items: ["maps/danube-river"],
          civs: [],
          diff: [
            [
              "fix",
              "Two boars will spawn on the island, along with additional boars in the contested region for larger maps (+1 on micro, +2 on small, +3 on medium, +4 on large, +5 on gigantic)",
            ],
          ],
          note: "The new boar amounts should now line up with the standard allotment of boar per map size, but with the added specificity of there being always at least 2 of them that spawn on the central island.",
        },
      ],
    },
    {
      title: "What’s Next? ",
      civs: [],
      description: `"We’ve heard from players that shift-queue commands needs some attention, and we’re investigating our options now. As we can only provide specific changes via Server-Side Patch, we are not able to include any changes to Shift-Queue in this one, but we’re looking to issue a fix for this in the near future. We’re also continuing to celebrate the Festival of Ages, so keep an eye out for more rewards coming soon! "`,
      changes: [],
    },
  ],
};
