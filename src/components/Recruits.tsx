import { Component, For, Show } from "solid-js";
import { CivConfig } from "../config";
import { RecruitedUnit } from "../types/data";
import { InlineItemLink } from "./Abilities";

export const Recruits: Component<{
  recruits?: RecruitedUnit[];
  civ?: CivConfig;
  mode?: "card" | "detail";
}> = (props) => {
  const mode = () => props.mode ?? "detail";

  return (
    <Show when={props.recruits?.length}>
      <Show
        when={mode() === "card"}
        fallback={
          <div class="mt-6 mb-6">
            <h3 class="text-xs uppercase font-bold text-white/50 mb-3 tracking-wider">Recruits</h3>
            <div class="flex flex-wrap gap-3">
              <For each={props.recruits}>
                {(r) => (
                  <div class="inline-flex items-center text-sm text-white/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <span class="font-bold mr-2 text-white">{r.count}×</span>
                    <InlineItemLink itemId={r.item} civ={props.civ} />
                  </div>
                )}
              </For>
            </div>
          </div>
        }
      >
        <div class="flex flex-wrap gap-2 items-center mb-4">
          <span class="text-xs text-white/50 uppercase font-semibold">Recruits:</span>
          <For each={props.recruits}>
            {(r) => (
              <div class="inline-flex items-center text-xs text-white/90 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                <span class="font-bold mr-1.5 text-white">{r.count}×</span>
                <InlineItemLink itemId={r.item} civ={props.civ} />
              </div>
            )}
          </For>
        </div>
      </Show>
    </Show>
  );
};
