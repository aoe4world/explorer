import { Link, useLocation } from "solid-app-router";
import { For } from "solid-js";
import { setActivePage } from "../App";
import { CivFlag } from "../components/CivFlag";
import { Icon } from "../components/Icon";
import { CIVILIZATIONS } from "../config";
import { mainIntroductionCSSClass } from "../styles";
const buttonClass = `block font-bold px-7 py-2 rounded-full transition hover:opacity-70`;
export const CivOverviewRoute = () => {
  setActivePage({ title: "Civilizations", description: "Overview of all civilizations", location: useLocation() });
  return (
    <>
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
          <div class="flex flex-wrap gap-5 mt-12 mb-16">
            <Link href="/about" class={buttonClass + " bg-white text-black hover:bg-gray-100 "}>
              Learn more
              <Icon icon="arrow-right" class="ml-3" />
            </Link>
            <Link href="/units" class={buttonClass + " outline outline-white "}>
              <Icon icon="sword" class="mr-3" />
              Explore All Units
            </Link>
            <Link href="/buildings" class={buttonClass + " outline outline-white "}>
              <Icon icon="landmark" class="mr-3" />
              Explore All Buildings
            </Link>
          </div>
        </div>
        <div class="md:grid-cols-2 grid gap-6 mb-4 ">
          <For each={Object.values(CIVILIZATIONS)}>
            {(civ) => (
              <Link href={`/civs/${civ.slug}`} class="flex items-center bg-gray-900 p-2 rounded-md hover:white text-gray-100 hover:bg-black ">
                <CivFlag abbr={civ.abbr} class="flex-none self-start w-18 h-12 rounded m-2" />
                <h1 class=" md:text-xl font-bold ml-3">{civ.name}</h1>
                <Icon icon="chevron-right" class="ml-auto mr-6" />
              </Link>
            )}
          </For>
        </div>
      </div>
      <div
        class="absolute top-28 w-screen h-screen opacity-20 saturate-0	-z-10 bg-right-top bg-contain bg-no-repeat"
        style={{
          "background-image": `url(https://www.ageofempires.com/wp-content/themes/ageOfEmpires/dist/images/defaults/default-news-section-bg-right-desk.png)`,
        }}
      ></div>
      <div
        class="absolute top-28 w-screen h-screen opacity-20 saturate-0	-z-10 bg-left-bottom bg-contain bg-no-repeat"
        style={{ "background-image": `url(https://www.ageofempires.com/wp-content/themes/ageOfEmpires/dist/images/bgs/bg-insider-signup-desk.png)` }}
      ></div>
    </>
  );
};
