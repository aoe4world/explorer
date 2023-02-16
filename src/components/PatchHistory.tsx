import { Link } from "solid-app-router";
import { Component, createResource, createSignal, For } from "solid-js";
import { getPatchHistory } from "../query/utils";
import { UnifiedItem, civConfig } from "../types/data";
import { Icon } from "./Icon";

export const PatchHistory: Component<{ item: UnifiedItem; civ?: civConfig }> = (props) => {
  const [patchHistory] = createResource(() => getPatchHistory(props.item, props.civ ? [props.civ] : undefined));

  return (
    <div class="my-8">
      {patchHistory()?.length && <h3 class="text-lg text-white font-bold mb-4">Patch History</h3>}
      <For each={patchHistory()}>
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
                {([type, change]) => (
                  <div class="flex  py-0.5">
                    <div class="text-xs mr-3 mt-1 ">
                      {type == "buff" && <Icon icon="circle-plus" class="text-green-700" />}
                      {type == "nerf" && <Icon icon="circle-minus" class="text-red-700" />}
                      {type == "fix" && <Icon icon="circle-check" class="text-gray-300" />}
                    </div>
                    <p class="text-gray-100 text-base max-w-prose">{change}</p>
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
    </div>
  );
};
