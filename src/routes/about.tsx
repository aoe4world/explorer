import { useLocation } from "solid-app-router";
import { createSignal, For } from "solid-js";
import { setActivePage } from "../App";
import { CivFlag } from "@components/CivFlag";
import { Icon } from "@components/Icon";
import { ReportButton } from "@components/ReportButton";
import { mainIntroductionCSSClass } from "../styles";

export const AboutRoute = () => {
  setActivePage({ title: "About", description: "About the AoE4 Explorer", location: useLocation() });
  const [x] = createSignal(true);
  return (
    <div class="max-w-screen-lg p-4 mx-auto mb-4 mt-12">
      <div class="mx-2 sm:mx-6">
        <h1 class="text-3xl font-bold">AoE4 Explorer</h1>
        <p class="text-2xl mt-2 text-gray-200">Discover all units, buildings and technologies in the game.</p>
        <p class={mainIntroductionCSSClass}>
          AoE4 World Explorer provides you with a detailed breakdown on what specific upgrades, tecnologies and bonuses make units perform better.
          <br />
          <br />
          Use the tool to explore different civilizations, buidlings and army units and get a better understanding of Age of Empires 4.
        </p>
      </div>

      <div class="flex flex-col sm:grid sm:grid-cols-2 gap-7 my-12">
        <div class="bg-gray-900 rounded-md p-6">
          <div class="h-32 grid place-content-center -mt-6">
            <div class="flex items-center justify-around bg-gray-600 pointer-events-none h-10 rounded-md w-36">
              <Icon icon="angle-left" />
              <span class="hidden md:inline">Age IV</span>
              <Icon icon="angle-right" />
            </div>
          </div>
          <h2 class="text-lg text-gray-200 font-bold mb-2">Filter by age</h2>
          <p>
            When viewing the stats for one or multiple units, use the Age switcher in the top right to change the age. Any upgrades and technologies not
            available in the selected age will be excluded from the stats.
          </p>
        </div>

        <div class="bg-gray-900 rounded-md p-6">
          <div class="h-32 grid place-content-center -mt-6">
            <div class="w-64">
              <div class="mb-2 flex flex-row items-center">
                <span class="text-white text-[14px] flex-auto flex items-center">
                  <Icon icon="swords" class="text-[xs] mr-0.5" />
                  19
                  <span class="text-white/60 ml-3">
                    <Icon icon="arrow-up-right" class="text-xs mr-0.5" /> 38
                  </span>
                </span>
                <span class="text-white/50 uppercase text-xs font-bold tracking-widest">Melee Attack</span>
              </div>
              <div class="h-4 md:h-3 bg-gray-50/10 flex flex-row relative">
                <div class="h-full bg-bar-base" style="width: 30%; margin-right: 2px; "></div>
                <div class="h-full bg-bar-upgrade" style="width: 15%; margin-right: 2px; "></div>
                <div class="h-full bg-bar-technology" style="width: 10%; margin-right: 2px; "></div>
                <div class="h-full bg-bar-unique" style="width: 15%; margin-right: 2px; "></div>
                <div class="h-full bg-white/20 " style="width: 20%; margin-right: 2px; "></div>
              </div>
            </div>
          </div>
          <h2 class="text-lg text-gray-200 font-bold mb-2">Inspect combat stats</h2>
          <p>Hover over specific parts of a bar to see how statistics like hitpoints, attack and armor are build up. Hover over the label to see the totals.</p>
        </div>

        <div class="bg-gray-900 rounded-md p-6">
          <div class="h-32 grid place-content-center -mt-6">
            <div class="flex gap-4">
              <CivFlag abbr="fr" class="w-16 h-9 rounded" />
              <CivFlag abbr="hr" class="w-16 h-9 rounded" />
              <CivFlag abbr="en" class="w-16 h-9 rounded" />
              <CivFlag abbr="ch" class="w-16 h-9 rounded" />
            </div>
          </div>
          <h2 class="text-lg text-gray-200 font-bold mb-2">Compare civs</h2>
          <p>Click through the flags to see what bonuses and stats a unit gets for different civilizations.</p>
        </div>

        <div class="bg-gray-900 rounded-md p-6">
          <div class="h-32 grid place-content-center -mt-6">
            <ReportButton />
          </div>
          <h2 class="text-lg text-gray-200 font-bold mb-2">Help us improve</h2>
          <p>Notice anything wrong? Do let us know!</p>
        </div>

        <div class="bg-gray-900 rounded-md col-span-2 p-6 flex gap-4 flex-wrap">
          <For
            each={[
              ["base", "Base value"],
              ["upgrade", "Unit Upgrades"],
              ["building", "Building Upgrades"],
              ["technology", "Technology Research"],
              ["unique", "Unique Upgrade"],
              ["bonus", "Bonus"],
            ]}
          >
            {([type, label]) => (
              <div>
                <span class={`bg-bar-${type} inline-block w-3 h-3 rounded-full mr-1`}></span> {label}
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="mx-2 sm:mx-6">
        <h2 class="font-bold text-xl my-4">Credits & Contributors</h2>
        <p>
          AoE4 Explorer is created by{" "}
          <a href="https://github.com/robertvanhoesel" class="underline font-bold underline-offset-2" target="_blank">
            Robert van Hoesel
          </a>{" "}
          with help from{" "}
          <a href="https://github.com/reneklacan" class="underline font-bold underline-offset-2" target="_blank">
            René Klačan
          </a>
          . The data is sourced from game files, communities and for the most part pulled from the{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1LG0We2pTFZsbFm_k1SKLix8gxSq_9n5R_Ic3G2tVzBg/"
            class="underline font-bold underline-offset-2"
            target="_blank"
          >
            AOE4 Quick Sheet
          </a>{" "}
          created by{" "}
          <a href="https://www.reddit.com/user/-MugenNoSora-" class="underline font-bold underline-offset-2" target="_blank">
            MugenNoSora
          </a>
          . Special thanks to{" "}
          <a href="https://twitter.com/rudyairlines" class="underline font-bold underline-offset-2" target="_blank">
            rudyairlines
          </a>{" "}
          and{" "}
          <a href="https://github.com/aoemods/attrib" class="underline font-bold underline-offset-2" target="_blank">
            aoemods
          </a>
          .
        </p>

        <p class="my-4">If you would like to contribute that is certainly appreciated, here are ways you can help:</p>
        <ul class="list-disc list-inside">
          <li>
            <a href="https://github.com/aoe4world/explorer" class="underline font-bold underline-offset-2" target="_blank">
              Donate code
            </a>{" "}
            by joining the project, we're coding in TypeScript and SolidJs
          </li>
          <li>
            <a href="https://ko-fi.com/reneklacan" class="underline font-bold underline-offset-2" target="_blank">
              Donate Sheep
            </a>{" "}
            to AoE4 World to help with hosting.
          </li>
          <li>
            <a href="https://github.com/aoe4world/explorer/discussionsJoin" class="underline font-bold underline-offset-2" target="_blank">
              Join the discussion
            </a>{" "}
            in our Github Repo and help with improving data.
          </li>
        </ul>

        <h2 class="font-bold text-xl mb-4 mt-12">Use the data!</h2>
        <p>
          Interested in using the data of the explorer in your own project? All the data on units, buildings, technologies and civs is open source and available
          in JSON over at{" "}
          <a href="https://github.com/aoe4world/data" class="underline font-bold underline-offset-2" target="_blank">
            aoe4world/data
          </a>
          . Use it to speed up the development of your awesome tools and do let us know if you build something.
        </p>
      </div>
    </div>
  );
};
