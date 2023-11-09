import { Link, useLocation } from "@solidjs/router";
import { createResource, onCleanup } from "solid-js";
import { setActivePage } from "../../App";
import { Icon } from "@components/Icon";
import { PatchNotes } from "../../types/patches";
import { CivAbbr } from "@data/sdk/utils";
import { mainIntroductionCSSClass } from "../../styles";
import { setHideNav } from "../../global";

export const PatchListRoute = () => {
  setHideNav(true);
  onCleanup(() => setHideNav(false));
  const [patches] = createResource(async () => [...(await import("../../data/patches/patch")).patches].reverse().map(patchSummary));

  setActivePage({ title: "Patches", location: useLocation() });

  return (
    <div class="max-w-screen-lg p-4 mx-auto mt-12">
      <h1 class="text-3xl font-bold">Age of Empires IV Patch History</h1>
      <p class={mainIntroductionCSSClass}>
        An overview of all balance patches released since Season One. Hotfixes without balance changes are excluded. Click on a Patch to learn more.
      </p>

      <div class="flex flex-wrap text-sm gap-2 my-2 text-gray-300">
        <p>
          <Icon icon="circle-plus" class="text-green-500" /> buffs
        </p>
        <p>
          <Icon icon="circle-minus" class="text-red-500" /> nerfs
        </p>
        <p>
          <Icon icon="circle-check" class="text-gray-300" /> fixes
        </p>
      </div>

      <ul class="flex flex-col lg:gap-2 my-6 relative py-4">
        <div class="absolute top-0 left-2 sm:left-40 ml-1 z-10 w-0.5 h-full bg-gray-400" />
        {patches()?.map((patch) => (
          <li
            class={
              "relative flex flex-col sm:flex-row sm:gap-4 pl-8 py-3 sm:py-2 sm:pl-0 sm:items-center rounded " +
              (patch.notes.type == "update" ? "bg-gray-600" : "")
            }
          >
            <p class="text-gray-300 w-36 flex-none sm:text-right" title={`${patch.daysSinceLastPatch} days since previous patch`}>
              {patch.notes.date.toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric" })}
            </p>
            <div class="bg-gray-400 rounded-full flex-none w-2.5 h-2.5 absolute top-5 left-2 sm:relative sm:top-0 sm:left-0" />
            <div class="flex flex-auto flex-col lg:flex-row py-3 gap-2 lg:items-center">
              <Link href={`/patches/${patch.notes.id}`} class="basis-1/3 group">
                <p class="-my-1 group-hover:underline font-bold text-lg text-white group-hover:text-white ">{patch.notes.name}</p>
                <span class="capitalize font-normal text-sm text-gray-300">
                  S{patch.notes.season} {patch.notes.type}
                </span>
              </Link>

              <div class="basis-2/3 shrink-0">
                <p class="mb-3 text-gray-100">{patch.notes.summary}</p>
                <div class="max-w-2xl h-2 w-[300px] flex rounded-full overflow-hidden">
                  <div class="bg-green-500 flex-shrink" style={{ "flex-basis": patch.buffed * 1.5 + "px" }}></div>
                  <div class="bg-red-500 flex-shrink" style={{ "flex-basis": patch.nerfed * 1.5 + "px" }}></div>
                  <div class="bg-white/20 flex-shrink" style={{ "flex-basis": patch.fixed * 1.5 + "px" }}></div>
                </div>
              </div>
            </div>

            {/* <div class="basis-1/3">
              <div class="flex flex-wrap gap-2 text-sm">
                {patch.buffed > 0 && (
                  <p>
                    <Icon icon="circle-plus" class="text-green-500" /> {patch.buffed} buffs
                  </p>
                )}
                {patch.nerfed > 0 && (
                  <p>
                    <Icon icon="circle-minus" class="text-red-500" /> {patch.nerfed} nerfs
                  </p>
                )}
                {patch.fixed > 0 && (
                  <p>
                    <Icon icon="circle-check" class="text-gray-300" /> {patch.fixed} fixes
                  </p>
                )}
              </div> 
            </div> */}

            {/* <div class="flex flex-wrap gap-2 basis-1/3">
              {patch.civs.map((civ) => (
                <CivFlag abbr={civ} class="w-6 h-3" />
              ))}
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

function patchSummary(notes: PatchNotes, i: number, patches: PatchNotes[]) {
  let buffed = 0,
    nerfed = 0,
    fixed = 0;

  let civs = new Set<CivAbbr>();
  for (const change of notes.sections.flatMap((section) => section.changes)) {
    change.civs.forEach((x) => civs.add(x));
    for (const [type] of change.diff) {
      if (type === "buff") buffed++;
      else if (type === "nerf") nerfed++;
      else if (type === "fix") fixed++;
    }
  }

  const daysSinceLastPatch = Math.ceil(i < patches.length - 1 ? (notes.date.getTime() - patches[i + 1].date.getTime()) / 1000 / 60 / 60 / 24 : 0);

  return {
    buffed,
    nerfed,
    fixed,
    civs: [...civs],
    notes,
    daysSinceLastPatch,
  };
}
