import { Link, useLocation } from "solid-app-router";
import { For } from "solid-js";
import { setActivePage } from "../../App";
import { CivFlag } from "../../components/CivFlag";
import { CIVILIZATIONS } from "../../config";

export const CivOverviewRoute = () => {
  setActivePage({ title: "Civilizations", description: "Overview of all civilizations", location: useLocation() });
  return (
    <div class="max-w-screen-lg p-4 mx-auto md:grid-cols-2 grid gap-6 mb-4 mt-12">
      <For each={Object.values(CIVILIZATIONS)}>
        {(civ) => (
          <Link href={civ.slug} class="flex items-center bg-gray-900 p-2 rounded-md hover:white text-gray-100 hover:bg-black ">
            <CivFlag abbr={civ.abbr} class="flex-none self-start w-18 h-12 rounded " />
            <h1 class=" md:text-xl font-bold ml-3">{civ.name}</h1>
          </Link>
        )}
      </For>
    </div>
  );
};
