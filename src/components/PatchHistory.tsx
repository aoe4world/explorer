import { Link } from "solid-app-router";
import { Component, createResource, For } from "solid-js";
import { getPatchHistory } from "../query/fetch";
import { UnifiedItem, civConfig } from "../types/data";
import { Icon } from "./Icon";

export const PatchHistory: Component<{ item: UnifiedItem; civ?: civConfig }> = (props) => {
  const [patchHistory] = createResource(() => getPatchHistory(props.item, props.civ ? [props.civ] : undefined));

  return (
    <div>
      <For each={patchHistory()}>
        {(history) => (
          <div class="mb-6">
            <Link
              href={`${props.civ ? `/civs/${props.civ.slug}` : ""}/patches/${history.patch.id}`}
              class="font-bold text-gray-300 mb-1.5 hover:text-white transition"
            >
              {history.patch.name} Changes
            </Link>
            <For each={history.diff}>
              {([type, change]) => (
                <div class="flex items-center py-0.5">
                  <div class="text-xs mr-2">
                    {type == "buff" && <Icon icon="circle-plus" class="text-green-700" />}
                    {type == "nerf" && <Icon icon="circle-minus" class="text-red-700" />}
                    {type == "fix" && <Icon icon="circle-check" class="text-gray-300" />}
                  </div>
                  <p class="text-gray-100 text-base">{change}</p>
                </div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};
