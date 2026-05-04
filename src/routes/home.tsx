import { CivFlag } from "@components/CivFlag";
import { Icon } from "@components/Icon";
import { Tooltip } from "@components/Tooltip";
import { A, useLocation } from "@solidjs/router";
import { For } from "solid-js";
import { setActivePage } from "../App";
import { CIVILIZATIONS } from "../config";
import { mainIntroductionCSSClass, tooltipCSSClass } from "../styles";

const buttonClass = `block font-bold px-7 py-2 rounded-full transition hover:opacity-70`;
export const CivOverviewRoute = () => {
  setActivePage({ title: "Civilizations", description: "Overview of all civilizations", location: useLocation() });
  let el: HTMLAnchorElement | undefined; // eslint-disable-line no-unassigned-vars
  return (
    <>
      <div class="max-w-screen-lg p-4 mx-auto mb-4 mt-12">
        <div class="mx-2 sm:mx-6">
          <div class="flex flex-wrap items-center">
            <h1 class="text-3xl font-bold mr-6">AoE4 Explorer</h1>
            <A
              href="/patches/patch-15-3-8338"
              class="text-xs px-3 uppercase font-bold py-1 rounded-full text-gray-100 bg-black border border-gray-300"
              ref={el}
            >
              <i class="fas fa-asterisk mr-1" /> Patch 15.3.8338
            </A>
            <Tooltip attachTo={el}>
              <div class={tooltipCSSClass}>The Explorer includes all changes introduced with Patch 15.3.8338</div>
            </Tooltip>
          </div>
          <p class="text-2xl mt-2 text-gray-200">Discover all units, buildings and technologies in the game.</p>

          <p class={mainIntroductionCSSClass}>
            AoE4 World Explorer provides you with a detailed breakdown on what specific upgrades, tecnologies and bonuses make units perform better.
            <br />
            <br />
            Use the tool to explore different civilizations, buidlings and army units and get a better understanding of Age of Empires 4.
            <br />
            <br />
          </p>
          <div class="flex flex-wrap gap-5 mt-12 mb-16">
            <A href="/about" class={buttonClass + " bg-white text-black hover:bg-gray-100 "}>
              Learn more
              <Icon icon="arrow-right" class="ml-3" />
            </A>
            <A href="/units" class={buttonClass + " outline outline-white "}>
              <Icon icon="sword" class="mr-3" />
              Explore All Units
            </A>
            <A href="/buildings" class={buttonClass + " outline outline-white "}>
              <Icon icon="landmark" class="mr-3" />
              Explore All Buildings
            </A>
          </div>
        </div>
        <div class="md:grid-cols-2 grid gap-6 mb-4 ">
          <For each={Object.values(CIVILIZATIONS)}>
            {(civ) => (
              <A href={`/civs/${civ.slug}`} class="flex items-center bg-gray-900 p-2 rounded-md hover:white text-gray-100 hover:bg-black ">
                <CivFlag abbr={civ.abbr} class="flex-none self-start w-18 h-12 rounded m-2" />
                <h1 class=" md:text-xl font-bold ml-3">{civ.name}</h1>
                <Icon icon="chevron-right" class="ml-auto mr-6" />
              </A>
            )}
          </For>
        </div>
      </div>
    </>
  );
};
