import { PatchNotes } from "../../types/patches";

export const season3: PatchNotes = {
  id: "season-3",
  buildId: 24916,
  officialUrl: "https://www.ageofempires.com/news/age_of_empires_iv_update_24916_season3/",
  name: "Season Three Update",
  summary: `"We’re excited to celebrate with you all and thought we’d get the party started with an early and in-depth view of everything you can expect from Season Three, including new civilizations, challenges, achievements, features and more. Whether you’re interested in honing new strategies with the Malians and Ottomans, building your skillset with Art of War challenges, competing in 1v1 Solo Ranked or competing with friends in the all-new Team Ranked, or earning a set of Age-themed rewards, we’ve got a little bit of something for every play-style coming your way with the Season Three: Anniversary.  
  
 * Two new civilizations, the Ottomans and Malians, along with corresponding Art of War challenges, Masteries and Achievements! 
 * The start of Ranked Season Three, the introduction of Team Ranked and brand new rewards!  
 * Use Taunts against your opponents and spice up your games with Cheats! 
 * Eight New Maps and Two New Biomes!
 * Naval Balance Rework brings new opportunity to Naval matches!
 * Waypoint Markers to set unit paths! `,
  html: (
    <div>
      <img src="https://www.ageofempires.com/wp-content/uploads/2022/10/S3_25Anni_Update_1920x1080.jpg" class="w-full" />
      <div class="my-5 rounded-lg p-4 bg-gray-500">
        This page focuses exclusively on gameplay and balance changes. To learn more about Ranked Season 3, new maps, taunts & cheats and caster modes in the
        <a href="https://www.ageofempires.com/news/age_of_empires_iv_update_24916_season3/#Build-Spotlight" class="underline font-bold text-white ml-1">
          official patch notes
        </a>
        .
      </div>
    </div>
  ),
  date: new Date("2022-10-25 17:00:00 UTC"),
  sections: [
    {
      title: "Balance Changes",
      civs: [],
      changes: [],
    },
    {
      subtitle: "Naval Balance Rework",
      civs: [],
      md: `
      "In this update we’re making sweeping changes to Naval, all of which are listed below. Naval changes specific to a civilization are included in their civilization-specific updates further on."
      
      Here’s a summary of our largest changes and what they mean for Naval gameplay:
      
      * Each class of ship now shares the same stats, this means that a Baouchuan and Carrack are both equal in cost and power. We intend to add ship variations back in the future as we look to refine Naval balance further, however, our goal with this update is to create a solid foundation that we can continue to build from.
      * We moved the Springald Ship and Incendiary Ship to the Feudal Age for all civilizations, this makes Naval combat far more exciting in the early stages of the game now that there’s a classic rock, paper, scissors counter system in place. We also made the counter system much stronger, making mixed army compositions far more important than before.
      * Archer Ship > Incendiary Ship > Springald Ship > Archer Ship.
      * Now that there are no naval units unlocked in the Castle Age we added a number of tiering upgrades which are available to all civilizations. Each ship type has a Castle Age and Imperial Age upgrade available to it, as well as the new Armored Hull and Shipwrights upgrades which improve the health and armor of all ships.
      * Ship costs have been changed across the board, including adding food cost to Archer Ships and Warships. We want to ensure that there are interesting economic decisions when playing Naval maps, and introducing a food cost to certain Naval units ensures that there’s enough demand on the resource. This is especially important as you look to expand their economy onto the water with additional fishing ships.
      * Ships are also generally cheaper and train faster than before, meaning that you can field more units faster and earlier in the game.
      * We made a lot of adjustments to the movement speed and turn rates of ships to make them feel more responsive and fun to use.
      * Ships no longer cancel a garrison command upon colliding with another unit.
      * Ships can no longer go under bridges.
      * Fishing deposits can now be reliably selected.
      
      As part of our rework of how you would approach water maps and the naval experience overall, there have been numerous changes. Below are the changes which impact all civilizations collectively. Naval changes specific to a civilization are included in their civilization-specific updates further on.* 
      
      * Ships no longer cancel a garrison command upon colliding with another unit.
      * Ships can no longer go under bridges.
      * Fishing deposits can now be reliably selected.
      * Springald Ship bonus damage vs Buildings increased from +40 to +45.
      * Naval Ship Deaths are now correctly confirmed for challenges.
      * Fire ships burning visual effects now display when the ship is built while off screen.
      * Naval Traders return 40% less resources from trade routes.      
      `,
      changes: [
        {
          // * *Fishing Ships:*
          // 	* Can now see into stealth fog on water, like a Scout.
          // 	* Fishing Boat line of sight set to 14 tiles
          // 	* Speech lines play when fishing boat is commanded to fish.
          civs: [],
          items: ["units/fishing-boat", "units/lodya-fishing-boat"],
          diff: [
            ["buff", "Can now see into stealth fog on water, like a Scout."],
            ["buff", "Fishing Boat line of sight set to 14 tiles"],
            ["fix", "Speech lines play when fishing boat is commanded to fish."],
          ],
        },
        {
          // * *Trade Ships:*
          // 	* Wood cost reduced from 300 to 100
          // 	* Train time reduced from 60 to 30 seconds
          // 	* Health reduced from 300 to 225
          // 	* Fixed a bug where trade ships were receiving armor upgrades from the blacksmith.
          // *Developer Note:*/We want to make trading on Naval maps much more accessible. The goal is to reward you for holding water control and for expanding onto the map beyond the safety of their docks./
          civs: [],
          items: ["units/trade-ship", "units/lodya-trade-ship"],
          diff: [
            ["buff", "Wood cost reduced from 300 to 100"],
            ["buff", "Train time reduced from 60 to 30 seconds"],
            ["nerf", "Health reduced from 300 to 225"],
            ["nerf", "Naval Traders return 40% less resources from trade routes."],
            ["fix", "Fixed a bug where trade ships were receiving armor upgrades from the blacksmith."],
          ],
          note: "We want to make trading on Naval maps much more accessible. The goal is to reward you for holding water control and for expanding onto the map beyond the safety of their docks.",
        },
        {
          // * *Transport Ship:*
          // 	* Health reduced from 600 to 400
          civs: [],
          items: ["units/transport-ship", "units/lodya-transport-ship"],
          diff: [["nerf", "Health reduced from 600 to 400"]],
        },
        {
          // * *Springald Ship (Hulk/Baghlah/War Junk/Lodya Springald Ship/War Canoe):*
          // 	* Moved from Castle Age to Feudal Age
          // 	* Class set to “Springald Ship” from “Attack Ship”
          // 	* Food cost set to 120
          // 	* Wood cost set to 200
          // 	* Gold cost set to 30
          // 	* Train time set to 30
          // 	* Population cost set to 3
          // 	* Health set to 450
          // 	* Ranged Armor set to 3
          // 	* Attack speed set to 4.12s
          // 	* Move speed set to 1.38 tiles/s
          // 	* Turn rate set to 185
          // 	* Range set to 6 tiles
          // 	* Damage set to 35
          // 	* Bonus damage vs Archer Ships set to +40
          // 	* Bonus damage vs Buildings set to +40
          // 	* Reduced firing cone angle so they turn almost 90° to shoot
          // 	* Added “Man-the-sails” ability, which allows the units to move faster for some time, till it enters combat
          // 	* Springald Ships and Warships can no longer spin to win. Both sides of the ship now share the same weapon cooldown.
          // 	* Broadside ships will now correctly chase enemies when they move out of range.
          // 	* When chasing enemy ships, broadside ships will chase further before turning to shoot to account for the turn time.
          civs: [],
          items: ["units/hulk", "units/baghlah", "units/war-junk", "units/war-canoe", "units/lodya-attack-ship"],
          diff: [
            ["buff", "Moved from Castle Age to Feudal Age"],
            // ["buff", "Costs, armor, HP and damage now equal across all Attack Ships"],
            // ["buff", "Added +40 bonus damage vs Archer Ships and buildings"],
            ["fix", "Class set to “Springald Ship” from “Attack Ship”"],
            ["buff", "Cost changed to 120 Food, 200 Wood, 30 Gold"],
            ["buff", "Train time set to 30 from 45 seconds"],
            // ["buff", "Population cost set to 3"],
            ["nerf", "Health reduced to 450"],
            ["nerf", "Ranged Armor reduced to 3"],
            ["nerf", "Attack speed set to 4.12s"],
            ["buff", "Move speed set to 1.38 tiles/s"],
            ["nerf", "Turn rate set to 185"],
            ["buff", "Range set to 6 tiles"],
            ["nerf", "Damage set to 35"],
            ["buff", "Bonus damage vs Archer Ships set to +40"],
            ["buff", "Bonus damage vs Buildings set to +40"],
            ["fix", "Reduced firing cone angle so they turn almost 90° to shoot"],
            ["buff", "Added “Man-the-sails” ability, which allows the units to move faster for some time, till it enters combat"],
            ["fix", "Springald Ships and Warships can no longer spin to win. Both sides of the ship now share the same weapon cooldown."],
            ["fix", "Broadside ships will now correctly chase enemies when they move out of range."],
            ["fix", "When chasing enemy ships, broadside ships will chase further before turning to shoot to account for the turn time."],
          ],
        },
        {
          // 	* *Incendiary Ship:*
          // 		* Moved from Castle Age to Feudal Age
          // 		* Wood cost set to 80
          // 		* Train time set to 15 seconds
          // 		* Attack set to 95
          // 		* Bonus attack vs Broadside Ships and Buildings set to 300
          // 		* Health set to 145
          // 		* Rotation Rate increased from 260 to 330
          // 		* Population Cost set to 2
          // 		* Move speed set to 2.00 tiles/s
          // 		* Improving the quality of life for our naval units has been on the radar for a long time and we are happy to announce that we have been able to teach our Incendiary Ships how to better utilize Attack Move commands that they are given! Incendiary ships will no longer sail uselessly toward the Attack Move destination. Instead, they will now scan for targets along the way and if an enemy unit is within range they will move toward that target and detonate when close enough. These changes should go a long way towards improving the average utility of Demolition ships.
          // 			* That said, we don’t believe in automating away the value of good micro so the optimal use of Incendiary Ships will always be through direct player management.
          // 		* Incendiary Ships deal damage more reliably against targets that are moving directly away from them.

          civs: [],
          items: ["units/demolition-ship", "units/lodya-demolition-ship", "units/explosive-dhow", "units/explosive-junk"],
          diff: [
            ["buff", "Moved from Castle Age to Feudal Age"],
            ["buff", "Wood cost reduce from 160 to 80"],
            ["buff", "Train time set from 35 to 15 seconds"],
            ["nerf", "Attack set from 400 to 95"],
            ["buff", "Bonus attack vs Springald Ships and Buildings set to 300"],
            ["nerf", "Health set to 145"],
            ["buff", "Rotation Rate increased from 260 to 330"],
            // ["buff", "Population Cost set to 2"],
            ["buff", "Move speed set to from 1.5 to 2.0 tiles/s"],
            ["fix", "Incendiary Ships deal damage more reliably against targets that are moving directly away from them."],
          ],
          note: "Improving the quality of life for our naval units has been on the radar for a long time and we are happy to announce that we have been able to teach our Incendiary Ships how to better utilize Attack Move commands that they are given! Incendiary ships will no longer sail uselessly toward the Attack Move destination. Instead, they will now scan for targets along the way and if an enemy unit is within range they will move toward that target and detonate when close enough. These changes should go a long way towards improving the average utility of Demolition ships. That said, we don’t believe in automating away the value of good micro so the optimal use of Incendiary Ships will always be through direct player management.",
        },
        {
          // 	* *Warship (Carrack/Baochuan/Xebec):*
          // 		* Health set to 700
          // 		* Wood cost set to 200
          // 		* Food cost set to 200
          // 		* Gold cost set to 200
          // 		* Damage set to 45
          // 		* Number of cannons fired per burst set to 3
          // 		* Bonus Damage vs Buildings set to +70
          // 		* Move speed set to 1.25 tiles/s
          // 		* Attack Range set to 9
          // 		* Damage type changed from Ranged to Siege
          // 		* Population reduced from 6 to 5
          // 		* Springald Ships and Warships can no longer spin to win. Both sides of the ship now share the same weapon cooldown.
          civs: [],
          items: ["units/carrack", "units/baochuan", "units/xebec"],
          diff: [
            ["nerf", "Health set to 700"],
            ["buff", "Cost set to 200 wood, 200 food, 200 gold"],
            ["nerf", "Damage set to 45"],
            // ["nerf", "Number of cannons fired per burst set to 3"],
            ["nerf", "Bonus Damage vs Buildings set to +70"],
            ["buff", "Move speed set to 1.25 tiles/s"],
            ["buff", "Attack Range set to 9"],
            ["buff", "Damage type changed from Ranged to Siege"],
            ["buff", "Population reduced from 6 to 5"],
            ["fix", "Springald Ships and Warships can no longer spin to win. Both sides of the ship now share the same weapon cooldown."],
          ],
        },
        {
          // 	* *Archer Ship (War Galley/ Light Junk/ Dhow/ Hunting Canoe):*
          // 		* Food cost set to 90
          // 		* Wood cost set to 150
          // 		* Gold cost set to 0
          // 		* Train set to 25 seconds
          // 		* Health set to 300
          // 		* Ranged Armor set to 1
          // 		* Sight range set to 12 tiles
          // 		* Move speed set to 1.75 tiles/s
          // 		* Turn rate set to 330
          // 		* Population set to 3
          // 		* Range set to 6.5 tiles
          // 		* Attack speed set to 1.5s
          // 		* Archer Ships now fire 5 arrows in a single burst which scatter toward the target location.
          // 		* Damage set to 6
          // 		* Bonus damage vs Incendiary Ships set to 18
          civs: [],
          items: ["units/galley", "units/lodya-galley", "units/light-junk", "units/junk", "units/dhow", "units/hunting-canoe"],
          diff: [
            ["buff", "Cost set to 90 Food, 150 Wood"],
            ["buff", "Train set to 25 seconds"],
            ["nerf", "Health set to 300"],
            ["nerf", "Ranged Armor set to 1"],
            ["buff", "Sight range set to 12 tiles"],
            ["buff", "Move speed set to 1.75 tiles/s"],
            ["buff", "Turn rate set to 330"],
            // ["buff", "Population set to 3"],
            ["nerf", "Range set to 6.5 tiles"],
            ["buff", "Attack speed set to 1.5s"],
            ["fix", "Archer Ships now fire 5 arrows in a single burst which scatter toward the target location."],
            ["nerf", "Damage set to 6"],
            ["buff", "Bonus damage vs Incendiary Ships set to 18"],
          ],
        },
        {
          // 	* *Galleass:*
          // 		* Health reduced from 1200 to 700
          // 		* Ranged armor reduced from 3 to 1
          civs: [],
          items: ["units/galleass"],
          diff: [
            ["nerf", "Health reduced from 1200 to 700"],
            ["nerf", "Ranged armor reduced from 3 to 1"],
          ],
        },
      ],
    },
    {
      subtitle: "Buildings & Siege",
      civs: [],
      changes: [
        {
          // * *Dock:*
          //     * Health set to 2000
          //     * Healing nerfed from 5HP/s to 3 HP/s
          //     * Gain defensive Emplacement
          //         * Cost: 125s/75w
          //         * 10 damage (+25 vs Ships)
          //         * 11 range
          //         * 3s weapon reload
          //     * Dock placement has been made more flexible.
          civs: [],
          items: ["buildings/dock"],
          diff: [
            ["buff", "Health increased from 1500 to 2000"],
            ["nerf", "Healing rate chaned from from 5 to 3 HP/s"],
            // ["buff", "New defensive Emplacement"],
            ["fix", "Placement has been made more flexible."],
          ],
        },
        {
          // * *Dock:*
          //     * Health set to 2000
          //     * Healing nerfed from 5HP/s to 3 HP/s
          //     * Gain defensive Emplacement
          //         * Cost: 125s/75w
          //         * 10 damage (+25 vs Ships)
          //         * 11 range
          //         * 3s weapon reload
          //     * Dock placement has been made more flexible.
          civs: [],
          items: ["buildings/dock", "technologies/naval-arrowslits"],
          diff: [["buff", "New defensive Emplacement 'Naval Arrowslits' added with 10 damage (+25 bonus vs Ships), 11 range, 3s attack speed."]],
        },
        {
          // * *Arrowslits/Garrison Arrows/Keep Arrows:*
          //     * Bonus vs Ships reduced from +25 to +10
          civs: [],
          items: ["technologies/arrowslits", "buildings/keep"],
          diff: [["nerf", "Arrowslits and garrison arrow bonus vs Ships reduced from +25 to +10"]],
        },
        {
          // * *Trebuchet:*
          //     * Bonus vs Ships reduced from +500 to +200
          civs: [],
          items: ["units/counterweight-trebuchet"],
          diff: [["nerf", "Bonus damage vs Ships reduced from +500 to +200"]],
        },
        {
          // * *Culverin:*
          //     * Bonus vs Ships reduced from +200 to +100
          civs: [],
          items: ["units/culverin"],
          diff: [["nerf", "Bonus damage vs Ships reduced from +200 to +100"]],
        },
      ],
    },
    {
      subtitle: "Technologies",
      civs: [],
      changes: [
        {
          // * *Extended Lines:*
          // 	* Cost changed from 175g 75f to 175g 75w
          // 	* Research time reduced from 45 to 30 seconds
          civs: [],
          items: ["technologies/extended-lines"],
          diff: [
            ["nerf", "Cost changed from 175 Gold, 75 Food to 175 Gold 75 Wood"],
            ["buff", "Research time reduced from 45 to 30 seconds"],
          ],
        },
        {
          // * *Drift Nets:*
          // 	* Cost changed from 350g 150f to 350g 150w
          // 	* Added: Increase move speed of Fishing Boats by +10%
          civs: [],
          items: ["technologies/drift-nets"],
          diff: [
            ["nerf", "Cost changed from 350 Gold, 150 Food to 350 Gold 150 Wood"],
            ["buff", "Now also increases move speed of Fishing Boats by +10%"],
          ],
        },
        {
          // * *Explosives:*
          // 	* Research time reduced from 60 to 45 seconds
          civs: [],
          items: ["technologies/explosives"],
          diff: [["buff", "Research time reduced from 60 to 45 seconds"]],
        },

        {
          // * *Extra Hammocks:*
          // 	* Removed from the Chinese civilization
          // 	* Cost set to 100w 250g
          // 	* Research time set to 30s
          // 	* Arrow Ships fire +1 arrow in each burst attack
          civs: [],
          items: ["technologies/extra-hammocks"],
          diff: [
            ["buff", "No longer exclusive to Chinese"],
            // ["nerf", "Cost set to 100w 250g"],
            ["buff", "Research time reduced from 60s to 30s"],
            ["buff", "Arrow Ships fire +1 arrow in each burst attack"],
          ],
        },
        {
          // * *Armored Hull:*
          // 	* Cost changed from 150f 250g to 200f 500g
          // 	* Research time reduced from 60 to 45 seconds
          // 	* All military ships gain +20% Health
          // 	* All military ships gain +1 Ranged Armor

          civs: [],
          items: ["technologies/armored-hull"],
          diff: [
            ["nerf", "Cost changed from 150 Food, 250 Gold to 200 Food 500 Gold"],
            ["buff", "Research time reduced from 60 to 45 seconds"],
            ["buff", "All military ships gain +20% Health"],
            ["nerf", "All military ships gain +1 Ranged Armor, down from +2"],
          ],
        },
        {
          // * *(NEW) Shipwrights:*
          // 	* Requires Armored Hull
          // 	* Cost set to 300f 550g
          // 	* Research time set to 50s
          // 	* All military ships gain +20% Health
          // 	* All military ships gain +1 Ranged Armor
          civs: [],
          items: ["technologies/shipwrights"],
          diff: [
            ["buff", "New technology which can be researched after Armored Hull"],
            ["fix", "Cost set to 300 Food 550 Gold and 50s to research"],
            // ["buff", "Research time reduced from 60s to 50s"],
            ["buff", "All military ships gain an extra +1 Ranged Armor"],
            ["buff", "All military ships gain an extra +20% Health"],
          ],
        },
        {
          // * *(NEW) Incendiaries:*
          // 	* Cost set to 100f 250g
          // 	* Research time set to 30s
          // 	* Incendiary Ships gain +20% attack radius
          civs: [],
          items: ["technologies/incendiaries"],
          diff: [
            ["buff", "New technology which adds +20% attack radius to Incendiary Ships"],
            ["fix", "Cost set to 100 Food 250 Gold and 30s to research"],
          ],
        },
        {
          // * *(NEW) Springald Crews:*
          // 	* Cost set to 150f 350g
          // 	* Research time set to 35s
          // 	* Springald Ships gain +1 Range
          // 	* Springald Ships gain +20% attack speed
          civs: [],
          items: ["technologies/springald-crews"],
          diff: [
            ["buff", "New technology which adds +1 Range and +20% attack speed to Springald Ships"],
            ["fix", "Cost set to 150 Food 350 Gold and 35s to research"],
          ],
        },
        {
          // * *(NEW) Swivel Cannon:*
          // 	* Cost set to 150f 350
          // 	* Research time set to 45s
          // 	* Adds a Swivel Cannon to the Springald Ship, which deals 15 damage and can fire in 360 degrees
          civs: [],
          items: ["technologies/swivel-cannon"],
          diff: [
            ["buff", "New technology which adds a Swivel Cannon to the Springald Ship, which deals 15 damage and can fire in 360 degrees"],
            ["fix", "Cost set to 150 Food 350 Gold and 45s to research"],
          ],
        },
        {
          // * *(NEW) Heated Shots:*
          // 	* Cost set to 200w 500g
          // 	* Research time set to 45s
          // 	* Arrow Ships set enemy ships on fire dealing 30 damage over 10 seconds (not stacking with each arrow)
          civs: [],
          items: ["technologies/heated-shot"],
          diff: [
            ["buff", "New technology where Arrow Ship arrows set enemy ships on fire dealing 30 damage over 10 seconds (not stacking with each arrow)"],
            ["fix", "Cost set to 200 Wood 500 Gold and 45s to research"],
          ],
        },
      ],
    },
    {
      title: "Gameplay",
      changes: [],
      md: `
* We’ve added a new setting called “Show Waypoint Markers For Single Actions.”
* Siege Units will now automatically unpack, pack, and chase enemy units, when issued a force attack command.
* Fixed an issue where villagers could not spawn on the side of the building closest to a designated rally point.
* Fixed a notification issue where some unique technologies did not inform you of your completion.
* Fixed an issue where arrows fired from Towers, Town Centers, and Arrow Ships, would not play any audio.
* Changes to how sheep behave with allies:
  * Allied Scouts cannot steal unguarded sheep.
  * Enemy Scouts cannot steal sheep that are near allies.
  * You can use the Herd ability to give sheep to allies.
* Fixed an issue where sheep would slow down, when their approach neared the Town Center, after having been herded towards it.
* Fixed an issue where newly queued Patrol commands would fail to queue, if a previously queued Patrol command was interrupted.
* Fixed an issue where voice lines would not play when a unit was commanded to Patrol.
* Fixed “Classic” queue command mode. Now, the last command issued after releasing the queue modifier key, is queued correctly instead of overwriting all previous commands.
* Units will now respect their future state when executing queued commands.  i.e.: Monks can be queued to pick up a Relic and then return it to a Monastery.
* Fixed an issue where Bombards/Cannons could not damage University buildings.
* Fixed an issue with Bombards misfiring audio and impact effects.
* The attack range on Town Centers now displays correctly for all civilizations.
* Units exiting rams or other transports will now become selected by default instead of the transport.
* All buildings set for a weapon priority of 80, so units will just attack the closest building instead of targeting specific ones. Note that they will still prioritize buildings that attack them.
* Relic gold generation reduced from 100 to 80.
> When you collect relics it leads to a significant economic advantage for the rest of the game that’s significantly more difficult to raid than a villager lead. We wanted to keep the gold value high enough that it is worth collecting, but not feel like the enemy player is at a hopeless disadvantage./
* Torch range increased by 0.25 tiles for non-villager units.
`,
      civs: [],
    },
    {
      subtitle: "Units",
      civs: [],
      changes: [
        {
          // *Scout*
          // * Scout weapon damage reduced from 2 to 1.
          // *Developer Note:*/Scout damage is being decreased so they are less effective at early game villager harassment./
          // 	* Scouts will now be grouped with other Cavalry when in group formation.
          // *Developer Note:*/Scouts leading formations often led themselves to their deaths in far too many situations./
          civs: [],
          items: ["units/scout"],
          diff: [
            ["nerf", "Weapon damage reduced from 2 to 1"],
            ["fix", "Scouts will now be grouped with other Cavalry when in group formation"],
          ],
          note: "Scout damage is being decreased so they are less effective at early game villager harassment. Scouts leading formations often led themselves to their deaths in far too many situations.",
        },
        {
          // *Spearman*
          // * Spearman health increased from 70 to 80.
          // * Spearman damage increased from 6 to 7.
          // *Developer Note:*/These changes are aimed at making Dark Age Spearman better at dealing with early Knight harassment, as well as increasing their effectiveness when fighting English Man-At-Arms/.
          civs: [],
          items: ["units/spearman"],
          diff: [
            ["buff", "Health increased from 70 to 80"],
            ["buff", "Damage increased from 6 to 7"],
          ],
          note: "These changes are aimed at making Dark Age Spearman better at dealing with early Knight harassment, as well as increasing their effectiveness when fighting English Man-At-Arms.",
        },
        {
          // *Infantry Charge*
          // * Minimum trigger distance reduced from 2 to 1 tiles.
          // * Duration increased from 5 to 7 seconds.
          civs: [],
          items: ["units/spearman", "units/man-at-arms", "units/palace-guard"],
          diff: [
            ["buff", "Charge minimum trigger distance reduced from 2 to 1 tiles"],
            ["buff", "Charge duration increased from 5 to 7 seconds"],
          ],
        },
        {
          // *Ram*
          // * Weapon range increased from 0.2875 to 05375 tiles.
          // * Bonus damage to walls increased from +100 to +200.
          // *Developer Note:*/Increased range makes it easier for multiple Rams to all hit the same target. We also bumped up the bonus damage vs Walls, so they are a more effective (yet risky, compared to longer range) siege counter to all types of walls throughout all phases of the game/.
          civs: [],
          items: ["units/battering-ram"],
          diff: [
            ["buff", "Range increased from 0.2875 to 0.5375 tiles"],
            ["buff", "Bonus damage to walls increased from +100 to +200"],
          ],
          note: "Increased range makes it easier for multiple Rams to all hit the same target. We also bumped up the bonus damage vs Walls, so they are a more effective (yet risky, compared to longer range) siege counter to all types of walls throughout all phases of the game.",
        },
        {
          // *Counter-weight Trebuchet*
          // * Bonus damage reduced from +500 to +450.
          civs: [],
          items: ["units/counterweight-trebuchet"],
          diff: [["nerf", "Bonus damage vs Buildings reduced from +500 to +450"]],
        },
        {
          // *Traction Trebuchet*
          // * Weapon range increased from 13 to 14.
          // *Developer Note:*/With the changes to melee troops killing siege faster, the long range of Trebs is now a more significant advantage. We want to further the distinction between roles of Trebs vs Cannons. Trebs are a slow burn from distance, Cannons are short range and powerful./
          civs: ["mo"],
          items: ["units/traction-trebuchet"],
          diff: [["buff", "Range increased from 13 to 14"]],
          note: "With the changes to melee troops killing siege faster, the long range of Trebs is now a more significant advantage. We want to further the distinction between roles of Trebs vs Cannons. Trebs are a slow burn from distance, Cannons are short range and powerful.",
        },
      ],
    },
    {
      subtitle: "Economy",
      civs: [],
      changes: [
        {
          civs: [],
          items: ["technologies/double-broadax", "technologies/horticulture", "technologies/specialized-pick"],
          diff: [
            ["buff", "Research time reduced from 75 to 45 seconds"],
            ["buff", "Total cost reduced from 250 to 150"],
          ],
        },
        {
          civs: [],
          items: ["technologies/lumber-preservation", "technologies/fertilization", "technologies/acid-distillation"],
          diff: [
            ["buff", "Research time reduced from 75 to 60 seconds"],
            ["buff", "Total cost reduced from 500 to 350"],
          ],
        },
        {
          civs: [],
          items: ["technologies/crosscut-saw", "technologies/precision-cross-breeding", "technologies/cupellation"],
          diff: [["buff", "Total cost reduced from 1000 to 750"]],
          note: "We wanted to make these technologies more cost effective in the early game to increase the depth of economic decision making. Often you would skip these technologies in the Feudal Age, as it was more cost effective to go to Castle Age first, or wait until high villager counts.",
        },
        //   * Reduced the research times and costs of economic technologies (food gathering, wood gathering, mining.
        //   * Feudal Age research times reduced from 75 to 45 seconds; total resource costs reduced from 250 to 150.
        //   * Castle Age research times reduced from 70 to 60 seconds; total resource costs reduced from 500 to 350.
        //   * Imperial Age total resource costs reduced from 1000 to 750.
        // *Developer Note:* /We wanted to make these technologies more cost effective in the early game to increase the depth of economic decision making. Often you would skip these technologies in the Feudal Age, as it was more cost effective to go to Castle Age first, or wait until high villager counts./

        {
          // * Villager repair animations will now look smooth and loop properly when repairing.
          // * Fixed an issue where Villagers would drop off only partial resources if their drop-off action was cancelled or interrupted.
          // * Fixed an issue where Villagers would “A-Pose” briefly before harvesting sheep.
          // * Fixed an issue where Villagers would be interrupted while dropping off resources when being struck by an attacker.
          // * The Return-to-Work command now occurs on all selected structures simultaneously, instead of just one building in the selection.
          // * Villager torch bonus damage vs siege increased from 0 to +2.
          // * Fixed an issue where Villagers could sometimes idle when constructing a wall with two or more villagers.
          civs: [],
          items: ["units/villager"],
          diff: [
            ["buff", "Villager torch bonus damage vs siege increased from 0 to +2"],
            ["fix", "Villager repair animations will now look smooth and loop properly when repairing"],
            ["fix", "Fixed an issue where Villagers would drop off only partial resources if their drop-off action was cancelled or interrupted"],
            ["fix", "Fixed an issue where Villagers would “A-Pose” briefly before harvesting sheep"],
            ["fix", "Fixed an issue where Villagers would be interrupted while dropping off resources when being struck by an attacker"],
            ["fix", "The Return-to-Work command now occurs on all selected structures simultaneously, instead of just one building in the selection"],
            ["fix", "Fixed an issue where Villagers could sometimes idle when constructing a wall with two or more villagers"],
          ],
        },
        {
          //           * Market build time reduced from 30 to 20 seconds.
          civs: [],
          items: ["buildings/market"],
          diff: [["buff", "Build time reduced from 30 to 20 seconds"]],
        },
        {
          // * Traders will now move out of the way if they were preventing a Stone Wall Gate from being constructed.
          // * Traders no longer stop moving when you assign them to a new home.
          // * Trader cost reduced from 75w/75g to 60w/60g. Build time reduced 35 seconds to 25 seconds.
          // *Developer Note:* /We’d like to see more trade earlier in the game. This is a step in that direction, we have more efforts planned for future updates./
          civs: [],
          items: ["units/trader"],
          diff: [
            ["buff", "Cost reduced from 75 Wood, 75 Gold to 60W, 60G"],
            ["buff", "Build time reduced 35 seconds to 25 seconds"],
            ["fix", "Traders will now move out of the way if they were preventing a Stone Wall Gate from being constructed"],
            ["fix", "Traders no longer stop moving when you assign them to a new home"],
          ],
          note: "We’d like to see more trade earlier in the game. This is a step in that direction, we have more efforts planned for future updates.",
        },
        {
          // * Building multiple farms by shift-queuing on top of a Mill or Town Center (or Granary) will now consistently and predictably populate around that structure.
          civs: [],
          items: ["buildings/farm"],
          diff: [
            [
              "fix",
              "Building multiple farms by shift-queuing on top of a Mill or Town Center (or Granary) will now consistently and predictably populate around that structure",
            ],
          ],
        },
        {
          // Fixed an issue where latency affected building placement.
          // Fixed an issue where Villagers could sometimes idle when constructing a wall with two or more villagers.
          // Fixed an issue where walls and other buildings could sometimes stomp trees in dense forests, which could result in walls having a gap.
          civs: [],
          items: [],
          diff: [
            ["fix", "Fixed an issue where latency affected building placement"],
            ["fix", "Fixed an issue where Villagers could sometimes idle when constructing a wall with two or more villagers."],
            ["fix", "Fixed an issue where walls and other buildings could sometimes stomp trees in dense forests, which could result in walls having a gap"],
          ],
        },
      ],
    },
    {
      //       *Buildings*
      subtitle: "Buildings",
      civs: [],
      changes: [
        {
          // Town Centers
          // * Stone cost increased from 300 to 350.
          // * Build time increased from 120 to 150 seconds.
          // *Developer Note:*/It’s out intention that rush, boom, and tech strategies are equally viable. We’ve seen the villager boom taking over and wanted to add more risk to that path./
          civs: [],
          items: ["buildings/town-center"],
          diff: [
            ["nerf", "Stone cost increased from 300 to 350"],
            ["nerf", "Build time increased from 120 to 150 seconds"],
          ],
          note: "It’s out intention that rush, boom, and tech strategies are equally viable. We’ve seen the villager boom taking over and wanted to add more risk to that path.",
        },
        {
          // * Keep build time increased from 140 to 180 seconds.
          // *Developer Note:*/Forward keeps should be an exciting and risky strategy. We’ve pulled the build time back so there’s more risk and counterplay options for dealing with keeps built near or in the enemy base./
          civs: [],
          items: ["buildings/keep"],
          diff: [["nerf", "Build time increased from 140 to 180 seconds"]],
          note: "Forward keeps should be an exciting and risky strategy. We’ve pulled the build time back so there’s more risk and counterplay options for dealing with keeps built near or in the enemy base.",
        },
      ],
    },
    {
      title: "Civilization-Specific Changes",
      civs: [],
      changes: [],
    },
    {
      //       *Abbasid Dynasty*
      subtitle: "Abbasid Dynasty",
      civs: ["ab"],
      changes: [
        {
          // * Reduced visual scale of the Hall of Uqba to better line up with other Wonders.
          civs: ["ab"],
          items: ["buildings/prayer-hall-of-uqba"],
          diff: [["fix", "Reduced visual scale of the Hall of Uqba to better line up with other Wonders"]],
        },
        {
          // * Abbasid Dynasty have a celebratory audio notification when they unlock new levels in their House of Wisdom.
          civs: ["ab"],
          items: ["buildings/house-of-wisdom"],
          diff: [["fix", "Abbasid Dynasty have a celebratory audio notification when they unlock new levels in their House of Wisdom"]],
        },
        {
          // * Fixed a Minimap issue where Abbasid Dynasty’s main Town Center displays a normal Town Center icon instead of a Capital Icon.
          civs: ["ab"],
          items: ["buildings/capital-town-center"],
          diff: [["fix", "Fixed a Minimap issue where Abbasid Dynasty’s main Town Center displays a normal Town Center icon instead of a Capital Icon"]],
        },
        {
          // * Trader units can no longer trade for Stone.
          // *Developer Note:*/Stone is intended as a rare resource so that adding keeps and defensive structures is done with strategic intention./
          civs: ["ab"],
          items: ["units/trader"],
          diff: [["nerf", "Trader units can no switch to Stone as additional resource"]],
          note: "Stone is intended as a rare resource so that adding keeps and defensive structures is done with strategic intention.",
        },
        {
          // * Naval Rework:
          // 	* *Teak Masts* (Abbasids):
          // 		* Cost set to 200w 300g
          // 		* Research time set to 40s
          // 		* Abbasid Dynasty’s Arrow Ship, Springald Ship and War Ship gain 10% move speed
          civs: ["ab"],
          items: ["technologies/teak-masts"],
          diff: [
            ["nerf", "Cost changed from 100 Food, 250 Gold to 200 Wood, 300 Gold"],
            ["buff", "Research time reduced from 60s to 40s"],
            ["buff", "Abbasid Dynasty’s military ships gain 10% move speed"],
          ],
        },
      ],
    },
    {
      subtitle: "Chinese",
      civs: ["ch"],
      changes: [
        {
          //         * Fixed an issue where Grenadiers would not display proper visual effects when in shallow waters.
          civs: ["ch"],
          items: ["units/grenadier"],
          diff: [["fix", "Fixed an issue where Grenadiers would not display proper visual effects when in shallow waters"]],
        },
        {
          // * Fixed an issue where the Great Wall Gatehouse Landmark could be permanently destroyed by destroying the walls surrounding it.
          civs: ["ch"],
          items: ["buildings/great-wall-gatehouse"],
          diff: [["fix", "Fixed an issue where the Great Wall Gatehouse Landmark could be permanently destroyed by destroying the walls surrounding it"]],
        },
        {
          // * Imperial Official hotkey is now remappable in the Imperial Academy Landmark hotkey section.
          // * Added two new hotkeys for Imperial Officials: Select, and Cycle.
          // * Fixed an issue where the Imperial Official could not manually drop off taxes at expansion Town Centers.
          civs: ["ch"],
          items: ["units/imperial-official"],
          diff: [
            ["fix", "Imperial Official hotkey is now remappable in the Imperial Academy Landmark hotkey section"],
            ["buff", "Added two new hotkeys for Imperial Officials: Select, and Cycle"],
            ["fix", "Fixed an issue where the Imperial Official could not manually drop off taxes at expansion Town Centers"],
          ],
        },
        {
          // * Barbican of the Sun Landmark
          // 	* Help text now properly reflects that it can be upgraded with weaponry.
          civs: ["ch"],
          items: ["buildings/barbican-of-the-sun"],
          diff: [["fix", "Help text now properly reflects that it can be upgraded with weaponry"]],
        },
        {
          // * Reload Drills
          // 	* Research time reduced from 90 to 60 seconds.
          // 	* Total resource cost reduced from 1000 to 500.
          civs: ["ch"],
          items: ["technologies/reload-drills"],
          diff: [
            ["nerf", "Research time reduced from 90 to 60 seconds"],
            ["nerf", "Total resource cost reduced from 1000 to 500"],
          ],
        },
        {
          // * Granary
          // 	* Now contains economic technologies.
          // 	* Can now be accessed with economy building shortcuts.
          civs: ["ch"],
          items: ["buildings/granary"],
          diff: [
            ["buff", "Now contains economic technologies"],
            ["buff", "Can now be accessed with economy building shortcuts"],
          ],
        },
        {
          // * Spirit Way Landmark
          // 	* Research speed bonus increased from 100% to 150%.
          civs: ["ch"],
          items: ["buildings/spirit-way"],
          diff: [["buff", "Research speed bonus increased from 100% to 150%"]],
        },
        {
          // * Fire Lancer
          // 	* Fire Lancer ranged armor increased from 0 to 1.
          // 	* Elite Fire Lancer ranged armor increased from 0 to 2.
          civs: ["ch"],
          items: ["units/fire-lancer"],
          diff: [
            ["buff", "Ranged armor increased from 0 to 1"],
            ["buff", "Elite Fire Lancer ranged armor increased from 0 to 2"],
          ],
        },
        {
          // * Naval Rework:
          // 	* *Thunderclap Bombs* (Chinese):
          // 		* Cost set to 200w 500g
          // 		* Research time set to 45s
          // 		* Baochuans gain a Nest of Bees emplacement: 8 damage, 8 burst damage, 9 weapon range
          civs: ["ch"],
          items: ["technologies/thunderclap-bombs"],
          diff: [
            ["buff", "New technology Thunderclap Bombs adds a Nest of Bees emplacement to Baochuans with 8 damage, 8 burst damage, 9 weapon range"],
            ["fix", "Cost set to 200 Wood, 500 Gold and 45s research time"],
          ],
        },
      ],
    },
    {
      subtitle: "Delhi Sultanate",
      civs: ["de"],
      changes: [
        {
          //         * Tower of Victory now buffs all infantry produced from buildings in influence, instead of units who move near the landmark.
          civs: ["de"],
          items: ["buildings/tower-of-victory"],
          diff: [["buff", "Tower of Victory now buffs all infantry produced from buildings in influence, instead of units who move near the landmark"]],
        },
        {
          // * Fixed an exploit allowing multiple free Scholars to be provided when two (first) Mosques finish construction simultaneously.
          civs: ["de"],
          items: ["buildings/mosque"],
          diff: [["fix", "Fixed an exploit allowing multiple free Scholars to be provided when two (first) Mosques finish construction simultaneously"]],
        },
        {
          // * Clarified the Dome of Faith Landmark’s tooltip – it produces scholars cheaper but at a slower production speed.
          civs: ["de"],
          items: ["buildings/dome-of-the-faith"],
          diff: [["fix", "Clarified the Dome of Faith Landmark’s tooltip – it produces scholars cheaper but at a slower production speed"]],
        },
        {
          // * Houses built after researching Reinforced Foundations will now correctly add and remove the correct amount of population.
          civs: ["de"],
          items: ["technologies/reinforced-foundations", "buildings/house"],
          diff: [["fix", "Houses built after researching Reinforced Foundations will now correctly add and remove the correct amount of population"]],
        },
        {
          // * Fixed an issue where Scholars garrisoned in a Madrasa were immediately killed when the building was destroyed.
          // * Scholars will now be removed from the global Scholar count when a Mosque or Madrassa with garrisoned Scholars is destroyed.
          civs: ["de"],
          items: ["units/scholar", "buildings/madrasa"],
          diff: [
            ["fix", "Fixed an issue where Scholars garrisoned in a Madrasa were immediately killed when the building was destroyed"],
            ["fix", "Scholars will now be removed from the global Scholar count when a Mosque or Madrasa with garrisoned Scholars is destroyed"],
          ],
        },
        {
          // * Fixed a bug where infantry would assist in the construction of walls before Compound of the Defender Landmark is built.
          civs: ["de"],
          items: ["buildings/compound-of-the-defender"],
          diff: [["fix", "Fixed a bug where infantry would assist in the construction of walls before Compound of the Defender Landmark is built"]],
        },
        {
          // * Fixed an issue where research progress at docks wasn’t saved when the technologies were cancelled.
          civs: ["de"],
          items: ["buildings/dock"],
          diff: [["fix", "Fixed an issue where research progress at docks wasn’t saved when the technologies were cancelled"]],
        },
        {
          // * Fixed an issue where Forced March’s speed bonus was removed before the unit committed an actual attack.
          civs: ["de"],
          items: ["technologies/forced-march"],
          diff: [["fix", "Fixed an issue where Forced March’s speed bonus was removed before the unit committed an actual attack"]],
        },

        {
          // * Naval Rework:
          // 	* *Manuscript Trade:*
          // 		* Cost set to 0
          // 		* Research time set to 30s
          // 		* Allows Scholars to garrison in Docks, each scholar increases production speed of local Docks by 20% & if connected to the Delhi Sultanate influence in docks garrisoned Scholars contribute to global tech time discount
          civs: ["de"],
          items: ["technologies/manuscript-trade"],
          diff: [
            [
              "buff",
              "New technology Manuscript Trade allows Scholars to garrison in Docks, each scholar increases production speed of local Docks by 20% & if connected to the Delhi Sultanate influence in docks garrisoned Scholars contribute to global tech time discount",
            ],
            ["fix", "Research time set to 30s"],
          ],
        },
      ],
    },
    {
      subtitle: "English",
      civs: ["en"],
      changes: [
        {
          //         * Berkshire Palace Landmark placement rules now work like other keeps – it can be placed directly on the coast.
          civs: ["en"],
          items: ["buildings/berkshire-palace"],
          diff: [["fix", "Berkshire Palace Landmark placement rules now work like other keeps – it can be placed directly on the coast"]],
        },
        {
          // * Fixed an issue where the King’s Palace Landmark had less Line of Sight than other Town Centers.
          civs: ["en"],
          items: ["buildings/king-s-palace"],
          diff: [["fix", "Fixed an issue where the King’s Palace Landmark had less Line of Sight than other Town Centers"]],
        },
        {
          // * Fixed an issue where Keeps were constructing in less time than intended.
          civs: ["en"],
          items: ["buildings/keep"],
          diff: [["fix", "Fixed an issue where Keeps were constructing in less time than intended"]],
        },
        {
          // 	* Naval Rework:
          // 		* *Admiralty* (English):
          // 			* Cost set to 150f 350g
          // 			* Research time set to 30s
          // 			* Archer Ships, Springald Ships, War Ships gain +1 range
          civs: ["en"],
          items: ["technologies/admiralty"],
          diff: [
            ["nerf", "Cost increased from 50 Food, 125 Gold to 150 Food, 350 Gold"],
            ["buff", "Research time decreased from 45s to 30s"],
            ["buff", "Archer Ships, Springald Ships, War Ships gain +1 range"],
          ],
        },
      ],
    },
    {
      subtitle: "French",
      civs: ["fr"],
      changes: [
        {
          //         * Fixed an issue where the economic technology discount was not applying to fishing technologies.
          civs: ["fr"],
          items: ["buildings/dock"],
          diff: [["fix", "Fixed an issue where the economic technology discount was not applying to fishing technologies"]],
        },
        {
          // * Trader units can no longer trade for Stone.
          // *Developer Note:*/Stone is intended as a rare resource so that adding keeps and defensive structures is done with strategic intention./
          civs: ["fr"],
          items: ["units/trader"],
          diff: [["fix", "Trader units can no longer trade for Stone"]],
          note: "Stone is intended as a rare resource so that adding keeps and defensive structures is done with strategic intention",
        },
        {
          // * Naval Rework:
          // 	* *Long Guns* (French):
          // 		* Cost set to 150w 350g
          // 		* Research time set to 30s
          // 		* Naval Guns (Galleass & Warship) get +10% damage
          civs: ["fr"],
          items: ["technologies/long-guns"],
          diff: [
            ["nerf", "Cost increased from 100 Food, 250 Gold to 150 Wood, 350 Gold"],
            ["buff", "Research time decreased from 60s to 30s"],
            ["buff", "Naval Guns get +10% damage"],
          ],
        },
      ],
    },
    {
      subtitle: "Holy Roman Empire",
      civs: ["hr"],
      changes: [
        {
          //         * Fixed an issue where arrows from the Palace of Swabia Landmark would spawn in the incorrect position.
          // * Fixed a bug where Palace of Swabia Landmark wasn’t increasing population limit like other town centers.
          civs: ["hr"],
          items: ["buildings/palace-of-swabia"],
          diff: [
            ["fix", "Fixed an issue where arrows from the Palace of Swabia Landmark would spawn in the incorrect position"],
            ["fix", "Fixed a bug where Palace of Swabia Landmark wasn’t increasing population limit like other town centers"],
          ],
        },
        {
          // * Fixed an issue where the Elzbach Palace’s weapon range UI was not displaying.
          // * The Elzbach Palace now shows the influence icon properly when within influence.
          // * The Emergency Repairs icon now displays properly over the Elzbach Palace Landmark when the Emergency Repairs ability is used.
          civs: ["hr"],
          items: ["buildings/elzbach-palace"],
          diff: [
            ["fix", "Fixed an issue where the Elzbach Palace’s weapon range UI was not displaying"],
            ["fix", "The Elzbach Palace now shows the influence icon properly when within influence"],
            ["fix", "The Emergency Repairs icon now displays properly over the Elzbach Palace Landmark when the Emergency Repairs ability is used"],
          ],
        },
        {
          // * Fixed an issue where the Two-Handed Weapons technology was also granting its bonus to torches. The torches are still one handed.
          civs: ["hr"],
          items: ["technologies/two-handed-weapons"],
          diff: [["fix", "Fixed an issue where the bonus was granting its bonus to torches. The torches are still one handed"]],
        },
        {
          // * Fixed an issue with the Tithe Barns technology where it was providing only 20 stone every minute, instead of the intended 30.
          civs: ["hr"],
          items: ["technologies/tithe-barns"],
          diff: [["fix", "Fixed an issue with the Tithe Barns technology where it was providing only 20 stone every minute, instead of the intended 30"]],
        },
        {
          // * Naval Rework:
          // 	* *Fire Stations:*
          // 		* Cost set to 100f 250g
          // 		* Research time set to 30s
          // 		* All HRE ships regen 1hp every 2s out of combat
          civs: ["hr"],
          items: ["technologies/fire-stations"],
          diff: [
            ["nerf", "Cost increased from 50 Food, 125 Gold to 100 Food, 250 Gold"],
            ["buff", "Research time decreased from 45s to 30s"],
            ["buff", "All HRE ships regen 1hp every 2s out of combat, instead of 100% faster around docks"],
          ],
        },
      ],
    },
    {
      subtitle: "Mongols",
      civs: ["mo"],
      changes: [
        {
          // * Early Horseman health increased from 100 to 110.
          // * Early Horseman damage increased from 7 to 8.
          civs: ["mo"],
          items: ["units/horseman"],
          diff: [
            ["buff", "Early Horseman health increased from 100 to 110"],
            ["buff", "Early Horseman damage increased from 7 to 8"],
          ],
        },
        {
          //         * Fixed an issue where incorrect team colors would display on Mongol Ovoos.
          // * Fixed an issue where units could get stuck in large stone deposits when building and cancelling an Ovoo.
          // * Fixed an issue where Ovoos would count as a villager working stone on the villager tracker UI element.
          // * Multiple players can no longer build Ovoos on the same stone deposit.
          civs: ["mo"],
          items: ["buildings/ovoo"],
          diff: [
            ["fix", "Fixed an issue where incorrect team colors would display on Mongol Ovoos"],
            ["fix", "Fixed an issue where units could get stuck in large stone deposits when building and cancelling an Ovoo"],
            ["fix", "Fixed an issue where Ovoos would count as a villager working stone on the villager tracker UI element"],
            ["fix", "Multiple players can no longer build Ovoos on the same stone deposit"],
          ],
        },
        {
          // * Fixed an issue where idle Villagers would sometimes automatically path to a Mongol building that was in the middle of Unpacking.
          civs: ["mo"],
          items: ["units/villager"],
          diff: [["fix", "Fixed an issue where idle Villagers would sometimes automatically path to a Mongol building that was in the middle of Unpacking"]],
        },
        {
          // * Fixed an issue where the Prayer Tent’s command card could sometimes display unintended duplicate buttons.
          civs: ["mo"],
          items: ["buildings/prayer-tent"],
          diff: [["fix", "Fixed an issue where the Prayer Tent’s command card could sometimes display unintended duplicate buttons"]],
        },
        {
          // * Added new hotkey to Select All Packed Buildings.
          civs: ["mo"],
          items: ["buildings/ger"],
          diff: [["fix", "Added new hotkey to Select All Packed Buildings"]],
        },
        {
          // * The Raid technology’s help text now correctly includes buildings that are destroyed while under construction.
          civs: ["mo"],
          items: ["technologies/raid-bounty"],
          diff: [["fix", "The Raid technology’s help text now correctly includes buildings that are destroyed while under construction"]],
        },

        {
          // * Fixed an issue with Silver Tree tooltip where it was described a 100% bonus to build speed instead of the intended 50% faster production.
          civs: ["mo"],
          items: ["buildings/the-silver-tree"],
          diff: [
            ["fix", "Fixed an issue with Silver Tree tooltip where it was described a 100% bonus to build speed instead of the intended 50% faster production"],
          ],
        },
        {
          // * Fixed an issue where the Piracy technology failed to grant the intended resources when destroying ships.
          // * Naval Rework:
          // 	* *Piracy:*
          // 		* Cost set to 100f 250g
          // 		* Research time set to 30s
          // 		* Gain 25w/25g per killed enemy ship
          // 		* (Currently does not work for kills with demolition ships)
          civs: ["mo"],
          items: ["technologies/piracy"],
          diff: [
            ["fix", "Fixed an issue where the Piracy technology failed to grant the intended resources when destroying ships"],
            // ["nerf", "Cost increased from 100 Food, 250 Gold to 100 Food, 250 Gold"],
            ["buff", "Research time decreased from 60s to 30s"],
            ["nerf", "Bounty per killed enemy ship decreased from 50 Wood, 50 Gold to 25 Wood, 25 Gold"],
            ["nerf", "No bounty is granted for kills with demolition ships"],
          ],
        },
      ],
    },
    {
      subtitle: "Rus",
      civs: ["ru"],
      changes: [
        {
          // * RUS no longer gain bounty from killing sheep.
          // *Developer Note:*/We wanted to pull down the huge burst of gold RUS are able to get at the start of the game from killing gaia./
          civs: ["ru"],
          items: [],
          diff: [["nerf", "Rus no longer gain bounty from killing sheep"]],
          note: "We wanted to pull down the huge burst of gold RUS are able to get at the start of the game from killing gaia.",
        },
        {
          //         * Fixed an issue where Streltsy would switch to a melee weapon when attacked by Grenadiers.
          // * Streltsy static deployment no longer provides a stacking bonus. It now gives a flat +30% attack speed after 10 seconds.
          // *Developer Note:*/This provides visual clarity around the mechanic and as soon as the bonus kicks in it’s high impact for attacker and defender./
          civs: ["ru"],
          items: ["units/streltsy"],
          diff: [
            ["buff", "Streltsy static deployment no longer provides a stacking bonus. It now gives a flat +30% attack speed after 10 seconds"],
            ["fix", "Fixed an issue where Streltsy would switch to a melee weapon when attacked by Grenadiers"],
          ],
          note: "This provides visual clarity around the mechanic and as soon as the bonus kicks in it’s high impact for attacker and defender.",
        },
        {
          // * The Fine Tuned Guns technology secondary cost of 150 food changed to be 150 wood to better match the theme of technology.
          civs: ["ru"],
          items: ["technologies/fine-tuned-guns"],
          diff: [["nerf", "Cost changed from 150 Food, 350 Gold to 150 Wood, 350 Gold"]],
        },
        {
          // * Warrior Monk train time reduced from 45 to 35 seconds to match other units with 240 total resource cost.
          civs: ["ru"],
          items: ["units/warrior-monk"],
          diff: [["buff", "Train time decreased from 45s to 35s"]],
          note: "Now the train time matches other units with 240 total resource cost",
        },
        {
          // * Town Center Influence increased from 0 to 1 tiles.
          civs: ["ru"],
          items: ["buildings/town-center"],
          diff: [["buff", "Influence increased from 0 to 1 tiles"]],
        },
        {
          // * Rus Fortified Palisade build time increased from 3 to 7 seconds.
          civs: ["ru"],
          items: ["buildings/fortified-palisade-wall"],
          diff: [["nerf", "Build time increased from 3s to 7s"]],
        },
        {
          // * Naval Rework:
          // 	* *Adaptable Hulls:*
          // 		* Cost set to 75f 175g
          // 		* Research time set to 20s
          // 		* Removes conversion cost penalty of Rus ships + conversions happen faster: 25w penalty removed + 100% faster
          civs: ["ru"],
          items: ["technologies/adaptable-hulls"],
          diff: [
            ["buff", "New technology 'Adaptable Hulls' which removes the 25 Wood conversion penalty of Lodya ships and conversions happen 100% faster"],
            ["fix", "Cost set to 75 Food, 175 Gold and research time set to 20s"],
          ],
        },
        {
          // 		* *Mounted Guns* (Malians/Rus):
          // 			* Cost set to 200w 500g
          // 			* Research time set to 45s
          // 			* Replaces the ballistae from the Springald Ships with Cannons with increased range and damage
          civs: ["ru"],
          items: ["technologies/mounted-guns"],
          diff: [
            ["buff", "New technology 'Mounted Guns' which replaces the ballistae from the Springald Ships with Cannons with increased range and damage"],
            ["fix", "Cost set to 200 Wood, 500 Gold and research time set to 45s"],
          ],
        },
      ],
    },
    {
      subtitle: "Malians",
      civs: ["ma"],
      changes: [
        {
          //           * Naval Rework:
          // 	* *Naval Skirmishers* (Malians):
          // 		* Cost set to 100w 250g
          // 		* Research time set to 30s
          // 		* Adds Javelins to Arrow Ships – 6 damage 3 Burst attack
          civs: ["ma"],
          items: ["technologies/canoe-tactics"],
          diff: [
            ["buff", "New technology 'Naval Skirmishers' which adds Javelins to Arrow Ships, which deal 4 damage in a 2 Burst attack"],
            ["fix", "Cost set to 100 Wood, 250 Gold and research time set to 30s"],
            //   ],
            // },
            // {
            //   // 		* Canoe Tactics
            //   // 			* Archer Ship Javelins in burst reduced from 3 to 2
            //   // 			* Archer Ship Javelin damage reduced from 6 to 4
            //   civs: ["ma"],
            //   items: ["technologies/canoe-tactics"],
            //   diff: [
            ["nerf", "Archer Ship Javelins in burst reduced from 3 to 2"],
            ["nerf", "Archer Ship Javelin damage reduced from 6 to 4"],
          ],
        },
        {
          // 		* *Mounted Guns* (Malians/Rus):
          // 			* Cost set to 200w 500g
          // 			* Research time set to 45s
          // 			* Replaces the ballistae from the Springald Ships with Cannons with increased range and damage
          civs: ["ma"],
          items: ["technologies/mounted-guns"],
          diff: [
            ["buff", "New technology 'Mounted Guns' which replaces the ballistae from the Springald Ships with Cannons with increased range and damage"],
            ["fix", "Cost set to 200 Wood, 500 Gold and research time set to 45s"],
          ],
        },
        {
          // 		* Transport Javelin damage reduced from 12 to 7
          civs: ["ma"],
          items: ["units/transport-ship"],
          diff: [["nerf", "Javelin damage reduced from 12 to 7"]],
        },

        {
          // * Fixed an exploit in the Malian trade tax mechanic.
          civs: ["ma"],
          items: ["units/trader"],
          diff: [["fix", "Fixed an exploit in the Malian trade tax mechanic"]],
        },
        {
          // * Fixed a bug where Poison Arrows would stop functioning when upgrading archers at the Farimba Garrison.
          civs: ["ma"],
          items: ["technologies/poisoned-arrows"],
          diff: [["fix", "Fixed a bug where Poison Arrows would stop functioning when upgrading archers at the Farimba Garrison"]],
        },
        {
          // * Fixed a bug where Donso would play looping attack animations while their spear throw was on cooldown.
          civs: ["ma"],
          items: ["units/donso"],
          diff: [["fix", "Fixed a bug where Donso would play looping attack animations while their spear throw was on cooldown"]],
        },
        {
          // * Warrior Scouts Health regeneration reduced from 5 to 1 health per second.
          civs: ["ma"],
          items: ["units/warrior-scout"],
          diff: [["nerf", "Health regeneration reduced from 5 to 1 health per second"]],
        },
        {
          // * Reduced detection radius of buildings and units for seeing Musufadi in Stealth. Outposts and scouts remain unchanged and continue to be the intended counters.

          civs: ["ma"],
          items: ["units/musofadi-warrior", "units/musofadi-gunner"],
          diff: [
            [
              "nerf",
              "Reduced detection radius of buildings and units for seeing Musofadi in Stealth. Outposts and scouts remain unchanged and continue to be the intended counters.",
            ],
          ],
        },
      ],
    },
    {
      subtitle: "Ottomans",
      civs: ["ot"],
      changes: [
        {
          // * Ottoman starting wood increased from 150 to 200.
          // * Core military and technology buildings are 33% cheaper.
          // *Developer Note:*/Ottomans were very wood starved because of how expensive military schools are. This change aims at providing more flexibility to Ottoman build orders./
          civs: ["ot"],
          items: [],
          diff: [
            ["buff", "Ottoman starting wood increased from 150 to 200"],
            ["buff", "Core military and technology buildings are 33% cheaper"],
          ],
          note: "Ottomans were very wood starved because of how expensive military schools are. This change aims at providing more flexibility to Ottoman build orders.",
        },
        //         * Naval Rework:
        {
          // 	* *Imperial Fleet* (Ottomans):
          // 		* Cost set to 150f 350g
          // 		* Research time set to 45s
          // 		* Cannon Ships (Grand Galley & War Ship) train and move 15% faster
          civs: ["ot"],
          items: ["technologies/imperial-fleet"],
          diff: [
            ["buff", "New technology 'Imperial Fleet' which makes the Grand Galley and Carrack train and move 15% faster"],
            ["fix", "Cost set to 150 Food, 350 Gold and research time set to 45s"],
          ],
        },
        {
          // * Janissary Build time reduced from 28 to 24.
          // * Janissary is no longer considered a “Ranged” unit. This means it will no longer take bonus damage from Horsemen and Mangonel units.
          civs: ["ot"],
          items: ["units/janissary"],
          diff: [
            ["nerf", "Janissary build time reduced from 28s to 24s"],
            ["nerf", "Janissary is no longer considered a “Ranged” unit. This means it will no longer take bonus damage from Horsemen and Mangonel units"],
          ],
        },
        {
          // * The Ottoman Grand Galley now fires all three of it’s weapons instead of only one.
          civs: ["ot"],
          items: ["units/grand-galley"],
          diff: [["fix", "The Ottoman Grand Galley now fires all three of it’s weapons instead of only one"]],
        },
      ],
    },
    {
      title: "Maps",
      civs: [],
      changes: [],
      md: `
      ## Naval Map Rework
### Archipelago & Warring Islands
* With our Season 3 Naval rework effort, we are dusting off Archipelago and Warring Islands and giving them a bit of sprucing up. (get it?) To accommodate the high wood upkeep cost of a naval fleet, we have greatly increased the amount of forests that spawn on islands. We have reduced the amount of other resources a bit (reduced large gold mines) to give more space for additional trees.
* Island coastlines have been altered to eliminate coastal cliffs and mountains, giving more room for docks, transport ship landings, and shoreline fish, as well as trees. Deepwater fish are now placed in a very even fashion off each coastline.
	* Archipelago, specifically, now has more reliable Sacred Site and trade post spawning.
	* Warring Islands now features much more forested islands.
	* In the ladder, when you play Archipelago and Warring Islands, you will be playing on a size larger than usual in order to accommodate the reduced land coverage and to allow for more forests per player. We have found this greatly improves the map quality in our internal playtesting, and we suggest you try this in custom games as well! (1v1s on Small, 2v2s on Medium, 3v3s on Large, 4v4s on Gigantic)
* Archipelago has seen a behind the scenes rework to how it places Sacred Sites – instead of using the balanced resource system, the map will now find the 2 largest neutral islands and place a Sacred Site at the center of them. In the case of having only a single neutral island, the sites will be placed at opposing ends of the island. This greatly helps improve consistency in spawning.
* Archipelago now spawns relics by placing one on each player’s starting island and distributing the remaining 3 neutral relics on initially uninhabited islands.

## Maps
### Boulder Bay
* On Boulder Bay, we have shrunk the overall size of the bay to provide a more even split between land and water engagements.
### Hill and Dale
* We have adjusted some generation rules on Hill and Dale to ensure that team games spawn plateaus for each team in the intended, even configuration. Additionally, we’ve put some constraints on the trade posts to ensure that they do not spawn behind player plateaus.
	* We have recently added a new Balanced Resource distribution category for forests, and have applied these settings to Hill and Dale. The map will now spawn a larger number of small forests, with larger forests’ spawn locations being controlled by the system that places important objects like relics and large gold deposits. This should ensure that forests are placed more fairly between players and teams on this map.
### Lipany
* We have implemented some new resource balancing levers to better distribute Sacred Sites. To start, we have tuned Lipany, as we were seeing some of the more unbalanced spawns on this map specifically, especially in team games. With the new tuning, we now treat Sacred Sites as a “Team Resource”, and when looking at the contested parts of a map, we can now more intelligently determine all placement options for uneven numbers of important objects.
	* Previously, for low object count resources, we would only look at individual players on each team and try to find a spot to place the object (in this case, a Sacred Site). If there was no space in that particular player’s contested region, due to things like blocking terrain or enemy player proximity, we would greatly reduce the Sacred Site avoidance radius, which could result in Sacred Sites clumping together on one side of the map, or in some cases, spawning behind players. Now, if a given player on one team does not have adequate room in their contested zone to spawn a Sacred Site, it will check the contested zones of everyone else on the team for potential placement locations, since a Sacred Site is a victory condition for the entire team. This should help to ensure more even placement, and we will be continuing to tune these distributions on various maps going forward.
* Lipany has had tuning done to improve the distribution of Sacred Sites such that they should no longer spawn in favor of one team.
	* Players on Lipany in team games should now no longer spawn dangerously close to their opponents.
	* The number of berries on Lipany has been tuned down – the mid-map large berry clusters have been replaced with standard berry clusters, and the overall number of them has been slightly reduced.
### MegaRandom
* We’ve tweaked MegaRandom island generations to place players closer to the center of generated islands instead of right on a shoreline.
### Mongolian Heights
* Mongolian Heights should now spawn sheep more evenly across the 2 sides of the river.
### Mountain Pass
* Mountain Pass has received a Team Game resource balancing pass. Like in the 1v1 configuration, all even team games should have the same amount of resources spread between both sides of the mountain range, and less resources should be clumped together near the pass.
### Prairie
* The number of deer in each herd has decreased.
* Spawns 1 boar per player instead of 2
* The boar has been pushed slightly further away from the player’s town center.
### Wetlands
* The amount of forest on the map has been reduced.
* The number of ponds on the map has been reduced.
* The number of fish in each pond has been reduced.
* Ponds have been pushed slightly further away from the player’s starting town center.
* Decreased the number of deer in each herd.
* The boars have moved further away from the player’s starting town center.
* Reduced the chance of resources being trapped in resources.
## Miscellaneous Map Updates
* We’ve done a general pass on resource distribution for Team Games (2v2 and larger).
	* Our goals for this resource pass have been to continue to try to ensure that each team gets an even split of the map’s resources, but to widen the central band in which they can spawn. Before tuning, there was a trend of having much of a map’s resource bounty spawn in a line between players – this was intended, as that creates the “contested zone” of the map, but was not optimal and could lead to boring or stale gameplay. Our new tuning widens this contested area, making resources able to spawn a bit closer to each team, with the caveat that if a gold deposit is a bit closer to you, it’ll be a bit closer to your opponent, too! This should lead to more of the map being important, and give more opportunity for each team to expand further out on their side without being directly in the center. This tuning was done at baseline to affect all gold, stone, relics and boar spawns on team game map sizes.
	* On divided maps, like Mountain Pass and Mongolian Heights, we’ve ensured that each resource is distributed in an even amount, such that each side of the map gets the same quantity of each distributed resource. For more open maps, we’ve widened the center band.
* The Asian Subtropical and Chalk Downs biomes should now be spawning additional varieties of trees on some maps that were erroneously missing.
* Reduced how often Sacred Sites are placed very close together; Sacred Sites now search for placement room on every team member’s contested zone before compromising.
* Fixed an issue where players would spawn in random locations after restarting a match that used fixed spawn locations.
`,
    },
    {
      title: "AI",
      civs: [],
      md: `
      ### Scouting
Several improvements have been made to how the AI utilizes Scouts:
* AI’s Scouts are now more aware of threats, avoiding them when possible and running away when attacked. They should avoid running through areas of high enemy concentration and no longer trail a large number of sheep into the opponent’s base. Sorry, no more free sheep deliveries.
* Fixed issue where AI Scouts would get hung up on returning to only one area of the map. If a Scout is attacked at a location, it will now scout other locations for a while before returning.
* AI’s Scouts will move more aggressively to locate the player earlier. On harder difficulties, this should make the AI able to execute early rushes and enhance their difficulty. (With Concealed and Explored map settings only)
* AI with multiple Scouts now divvy up the world for scouting instead of crossing over into each other’s territories. (On Concealed and Explored map settings only)
* Fixed an issue where the AI would unnecessarily use Scouts to observe the opponent when playing a game that has the Revealed map setting.
* Fixed an issue where the AI’s Scouts were sometimes indecisive about what they should do when attacked by a wolf. Scouts will now attack a wolf if they can or flee.
* AI will use fishing boats for scouting as minimally as possible, prioritizing fishing. This has helped increase the speed of the AI’s start on water maps.
* AI Naval Scout scouting patterns have been improved and Scouts will actively seek out the enemy islands.

### Map Interactions
The AI has learned some new ways to interact with its environment:
* AI will now detect some map choke points (including river crossings and bridges) and will build Outposts and Keeps in these areas to control them.
How the AI scouts and utilizes resources on a water map has also been improved:
* AI will colonize other islands on water maps and will take advantage of available resources.
* AI land Scouts on water maps will make better decisions about where to land and monitor other players.
* AI will move extra Villagers to colonized islands on water maps, which will result in better gathering and economy.
* AI Fishing Boats will now garrison docks if they are threatened.
* AI will now send Fishing Boats to gather deep sea fish.

### Threat Assessment
The AI has a better sense of threats that players might pose, and can respond better to them:
* Fixed an issue where the AI could sometimes over-react to the presence of a few enemy Scouts and then prioritize building Walls.
* When facing multiple monks with relics, the AI now recognizes the extra monks as threats instead of only the first monk.
* AI’s military units will always try to run away from a monk-unit performing conversion now (unless they are confident that they can kill the monk very quickly).
* AI monk-units will not attempt to collect relics in dangerous areas and will flee if attacked while on its way to pick up a relic.
* Fixed some cases of AI not bringing siege weapons when trying to attack enemy buildings behind Stone Walls.
* Improved AI combat logic to reduce instances where the AI’s ranged units could get distracted and attack harmless buildings instead of helping the rest of its army fight enemy military units.
* Fixed a bug where the AI sometimes failed to put a high enough priority on building military ships when behind in naval military power.
* Fixed an issue where the AI could get stuck and not Age Up while at maximum population because its military is too weak.
* Fixed an issue where sometimes groups of AI units would get distracted from their main objective by a side combat. The AI should complete the side combat and then continue onto, if possible, to their original target.
* AI’s retreating armies won’t use formation anymore, so that they can get away faster.
* Fixed an issue where the AI could frequently stop its army to grab only a couple additional units to add to it instead of keeping its army on task.

### Approaching the End Game
How the AI approaches and responds to the end game has been improved.
* AI now will prioritize finishing off enemies when it has advantage to do so.
* Fixed an issue where the AI could save towards building a wonder even though it has a very strong military advantage.
* Tuned the AI so that it is less picky about its army strength when the enemy religious victory timer is getting low. Before this could cause the AI to not attack enough even though the situation was desperate.
* AI will now build more farms later in the game to support its larger armies.
### Civ-Specific AI Changes
How the AI plays some civilizations has changed:
* English (ENG) AI now knows it can build units at the Wynguard Palace Landmark.
* Holy Roman Empire (HRE) AI now knows that it can garrison a monk in the Aachen Chapel Landmark.
* Mongols (MON) AI will no longer idle while waiting for its Scout to locate a Stone Deposit, and their scouting logic has been improved to ensure they locate Stone Deposits earlier.

### Other AI Changes
* Easy AI won’t launch early raids against players anymore, especially during 1v1 matches.
* Fixed a bug where the AI was not researching the technology Horticulture.
* Fixed an issue where a group of the AI’s units could get separated after combat. The units should now maintain better group cohesion before and after combat.
* Tuned AI market trading for resources so that the AI will trade when the needs for it are more important (such as Aging Up or being under immediate threat).
* Fixed an issue where AI players were not attacking landmarks.

      `,
      changes: [],
    },
    {
      title: "Modding",
      civs: [],
      changes: [],
      md: `
      ### Mods
* Thick Woods: Fixed an issue where cut trees could not be selected and Villagers could not be sent to gather those trees.
* Royal Rumble: added Malians and Ottomans to the mod
* Double Villagers: added Malians and Ottomans to the mod
### Content Editor Updates
* Fixed a bug for created maps where larger maps with only 2 spawn locations would still be available for more than 2 players to play it.
* Fixed impasse interactivity for modded maps. Units can no longer walk-through impasse/non-interactive zones.
* Fixed an editor crash that could occur when resizing a map with water and then using procedural map gen.
`,
    },
    {
      title: "Game",
      civs: [],
      changes: [],
      md: `
      ### Stability & Performance
We’ve introduced mitigations for several networking issues, especially ones that cause disconnects & slowdowns during matchmaking, chatting, and loading. Networking in these scenarios should improve, but we are still working to fix the root cause. As we continue to monitor the situation, please let us know if you’re experiencing any issue by creating a ticket!
* Fixed a rare crash that would occur with scouting in skirmish games.
* Fixed a crash when quitting the game while a save is in progress.
### Hotkey Updates
* Fixed a Shift-queuing inconsistency issue found between the Grid Key and Remappable Hotkey layouts, so now shift-queuing functionality will be consistently prioritized over global hotkeys when available in both layouts. This means players can now press Shift + Q + A to queue multiple Farms quickly, or Shift + A to queue Attack Moves. Please note that assigning any other combo keys with Shift key will likely cause hotkey conflicts.
* Players can now rebind the “Train scout” key under the “Mill / Hunting Cabin” category in the Fully Remappable Hotkeys layout.
* A tooltip now appears in the hotkeys menu when a long hotkey name is trimmed for being too long.
* Added new hotkeys for selecting naval military units exclusively from land military.
### Shortcuts & Remappable Keys
* Council Hall can now be accessed with Archery Range shortcuts.
* The White Tower can now be accessed with Keep shortcuts.
* Berkshire Palace can now be accessed with Keep shortcuts.
* Red Palace can now be accessed Keep shortcuts.
* Spasskaya Tower can now be accessed with Keep shortcuts.
* Elzbach Palace can now be accessed with Keep shortcuts.
* Astronomical Clocktower can now be accessed with Siege Workshops shortcuts.
* College of Artillery can now be accessed with Siege Workshop shortcuts.
* Palace of the Sultan changed from a Religious to Military Landmark and can now be accessed with Military shortcuts.
* Abbey of the Trinity can now be accessed with Military shortcuts.
* High Armory changed from Military to Technology Landmark and can now be accessed with Technology shortcuts.
* House of Learning can now be accessed with Technology shortcuts
* Royal Institute can now be accessed with Technology shortcuts.
* Steppe Redoubt can now be accessed with Economy shortcuts.
`,
    },

    {
      title: "Campaign",
      civs: [],
      changes: [],
      md: `
      ### General
* The Panoramic Camera setting now works while playing Campaign and Art of War.
### Art of War
* The Art of War introduction cutscenes will no longer be skipped by any input except the ESC key.
### Campaign Missions
* The school of Cavalry now applies it’s 20% production speed bonus to itself in campaign.
* Fixed the tooltip for Geoffroy Du Bois in the mission Combat of the Thirty.
* Song Fortress mission now plays the correct video for Latin American Spanish players.
* In the mission Novgorod, units no longer get stuck when dropped onto stone walls by a siege tower.
* Fixed a potential crash in the Bremule Mission if you have active vision on all of the map when hidden units spawn.
`,
    },
  ],
};
