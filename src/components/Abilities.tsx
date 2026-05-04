import { A } from "@solidjs/router";
import { Component, For, Show, createResource } from "solid-js";

import { Ability, CivConfig, ItemList, ItemSlug } from "../config";
import { getItemHref } from "./Cards";
import { ItemIcon } from "./ItemIcon";
import { formatSecondsToPhrase } from "./Stats";
const SDK = import("@data/sdk");

export const Abilities: Component<{ abilities: ItemList<Ability>; civ: CivConfig }> = (props) => {
  const sortedMappedAbilities = () => props.abilities?.map((ab) => ab.variations[0]).sort((a, b) => (a.active === "manual" ? 0 : 1) - (b.active === "manual" ? 0 : 1)) ?? [];
  return (
    <Show when={props.abilities?.length}>
      <h2 class="text-lg text-white font-bold  mt-12 mb-3">Abilities and influences</h2>

      <div class="flex gap-4 flex-col mb-8">
        <For each={sortedMappedAbilities()}>
          {(ability) => (
            <div class="flex flex-row items-start mb-2 group">
              <ItemIcon item={ability} size={10} class={`my-1.5 !p-0 mr-4 scale-100 ${ability.active === "manual" ? "bg-gradient-to-b from-[#5C457B] to-[#4D366E] border border-[#493B65]" : ""}`} />
              <div>
                <p class="text-base font-bold text-white w-full">{ability.name}</p>
                <p class="text-sm text-white/80 break-words w-full leading-relaxed whitespace-pre-wrap">
                  {ability.description}

                  <Show when={ability.activatedOn?.length}>
                    {ability.active === "toggle"
                      ? " Toggle on "
                      : !ability.auraRange
                      ? " Activate on "
                      : ` When ${ability.auraRange >= 1 ? `in ${ability.auraRange} tiles range of` : `near`}`}
                    <For each={ability.activatedOn}>
                      {(id, i) => (
                        <>
                          <InlineItemLink itemId={id} civ={props.civ} />
                          {`${i() === (ability.activatedOn?.length ?? 0) - 2 ? " or " : i() < (ability.activatedOn?.length ?? 0) - 1 ? ", " : ""}`}
                        </>
                      )}
                    </For>
                    .
                  </Show>

                  <Show when={ability.unlockedBy?.length}>
                    {" "}
                    Requires{" "}
                    <For each={ability.unlockedBy}>{(id) => <InlineItemLink itemId={id} civ={props.civ} />}</For>
                  </Show>

                  <Show when={ability.cooldown}>
                    {(cooldown) => (
                      <>
                        {" "}
                        {formatSecondsToPhrase(cooldown())} cooldown
                        {/* {ability.active == "manual"
                          ? " when activated. "
                          : ability.active == "toggle"
                          ? " when toggled."
                          : ability.active == "always"
                          ? " after triggering"
                          : ""} */}
                      </>
                    )}
                  </Show>
                </p>
              </div>
            </div>
          )}
        </For>
      </div>
    </Show>
  );
};

const InlineItemLink: Component<{ itemId: ItemSlug; civ: CivConfig }> = (props) => {
  const [item] = createResource(
    () => props.itemId && { itemId: props.itemId, civ: props.civ },
    async ({ itemId, civ }) => (await SDK).civilizations.Get(civ).Get(itemId)
  );

  return (
    <Show when={item()} keyed>
      {(item) => (
        <A href={getItemHref(item, props.civ)} class="whitespace-nowrap">
          <ItemIcon item={item} size={'inline'} />
          <span class="font-bold">{item.name}</span>
        </A>
      )}
    </Show>
  );
};
