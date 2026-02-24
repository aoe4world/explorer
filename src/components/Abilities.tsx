import { A } from "@solidjs/router";
import { Component, For, Show, createResource } from "solid-js";

import { ItemList, ItemSlug } from "@data/sdk/utils";
import { CivConfig } from "@data/types/civs";
import { Ability } from "@data/types/items";
import { getItemHref } from "./Cards";
import { ItemIcon } from "./ItemIcon";
import { formatSecondsToPhrase } from "./Stats";
const SDK = import("@data/sdk");

export const Abilities: Component<{ abilities: ItemList<Ability>; civ: CivConfig }> = (props) => {
  const sortedMappedAbilities = () => props.abilities.map((ab) => ab.variations[0]).sort((a, b) => (a.active == "manual" ? -1 : 1));
  return (
    <Show when={props.abilities?.length}>
      <h2 class="text-lg text-white font-bold  mt-12 mb-3">Abilities and influences</h2>

      <div class="flex gap-4 flex-col mb-8">
        <For each={sortedMappedAbilities()}>
          {(ability) => (
            <div class="flex flex-row items-start mb-2 group">
              <ItemIcon item={ability} size={10} class={`my-1.5 !p-0 mr-4 scale-100 ${ability.active == "manual" ? "bg-gradient-to-b from-[#5C457B] to-[#4D366E] border border-[#493B65]" : ""}`} />
              <div>
                <p class="text-base font-bold text-white w-full">{ability.name}</p>
                <p class="text-sm text-white/80 break-words w-full leading-relaxed whitespace-pre-wrap">
                  {ability.description}

                  {ability.activatedOn?.length && (
                    <>
                      {ability.active === "toggle"
                        ? " Toggle on "
                        : ability.auraRange === 0
                        ? " Activate on "
                        : ` When ${ability.auraRange >= 1 ? `in ${ability.auraRange} tiles range of` : `near`}`}
                      {ability.activatedOn?.map((id, i, l) => (
                        <>
                          <InlineItemLink itemId={id} civ={props.civ} />
                          {`${i == l.length - 2 ? " or " : i < l.length - 1 ? ", " : ""}`}
                        </>
                      ))}
                      .
                    </>
                  )}

                  {ability.unlockedBy?.length && (
                    <>
                      {" "}
                      Requires{" "}
                      {ability.unlockedBy?.map((id) => (
                        <InlineItemLink itemId={id} civ={props.civ} />
                      ))}
                    </>
                  )}

                  {ability.cooldown && (
                    <>
                      {" "}
                      {formatSecondsToPhrase(ability.cooldown)} cooldown
                      {/* {ability.active == "manual"
                        ? " when activated. "
                        : ability.active == "toggle"
                        ? " when toggled."
                        : ability.active == "always"
                        ? " after triggering"
                        : ""} */}
                    </>
                  )}
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
  const [item] = createResource(props.itemId, async (id) => (await SDK).civilizations.Get(props.civ).Get(id));

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
