import { Link } from "@solidjs/router";
import { Component, createResource, createSignal, For } from "solid-js";
import { getPatchHistory } from "../query/utils";
import { UnifiedItem, civConfig } from "../types/data";
import { Icon } from "./Icon";
import { CivFlag } from "./CivFlag";

export const PatchHistory: Component<{ item: UnifiedItem; civ?: civConfig }> = (props) => {
  const [patchHistory] = createResource(() => getPatchHistory(props.item, props.civ ? [props.civ] : undefined));
  const [patchesExpanded, setPatchesExpanded] = createSignal(false);
  return (
    <div class="my-8">
      {patchHistory()?.length && <h3 class="text-lg text-white font-bold mb-4">Patch History</h3>}
      <For each={patchHistory()?.slice(0, patchesExpanded() ? undefined : 2)}>
        {(history) => {
          const [expanded, setExpanded] = createSignal(false);
          return (
            <div class="mb-6">
              <Link
                href={`${props.civ ? `/civs/${props.civ.slug}` : ""}/patches/${history.patch.id}`}
                class="font-bold text-gray-300 mb-1.5 hover:text-white transition"
              >
                {history.patch.name}
              </Link>
              {history.patch.date.valueOf() > Date.now() && (
                <p class="my-3 text-gray-200 items-center  flex">
                  <Icon icon="calendar-clock" class="text-gray-300 mr-4" />
                  <span class="text-[12px] uppercase">
                    To be released on {history.patch.date.toLocaleDateString("en-US", { dateStyle: "long" })}. This page will be updated when the patch is
                    released.
                  </span>
                </p>
              )}
              <For each={history.diff.filter((_, i) => i < 6 || expanded())}>
                {([type, change, civs]) => (
                  <div class="flex  py-0.5">
                    <div class="text-xs mr-3 mt-1 ">
                      {type == "buff" && <Icon icon="circle-plus" class="text-green-700" />}
                      {type == "nerf" && <Icon icon="circle-minus" class="text-red-700" />}
                      {type == "fix" && <Icon icon="circle-check" class="text-gray-300" />}
                    </div>
                    <p class="text-gray-100 text-base max-w-prose white">
                      {!props.civ && civs?.length >= 1 ? civs.map((c) => <CivFlag abbr={c} class="h-3 rounded-sm mr-1.5 mb-0.5 inline" />) : <></>}
                      {change}
                    </p>
                  </div>
                )}
              </For>
              {history.diff.length > 6 && !expanded() && (
                <button onClick={() => setExpanded(true)} class="text-gray-300 p-2">
                  + {history.diff.length - 6} more changes
                </button>
              )}
            </div>
          );
        }}
      </For>
      {patchHistory()?.length > 2 && !patchesExpanded() && (
        <button onClick={() => setPatchesExpanded(true)} class="text-gray-100 font-bold hover:underline">
          + Show {patchHistory().length - 2} more patches
        </button>
      )}
    </div>
  );
};
