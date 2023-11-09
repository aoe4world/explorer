import { Ability, ITEMS } from "@data/types/items";
import { CivAbbr, ItemList, ItemSlug } from "@data/sdk/utils";
import { formatSecondsToPhrase, formatSecondsToTime } from "./Stats";
import { Component, Show, For, createResource } from "solid-js";
import { ItemIcon } from "./ItemIcon";
import { ITEM_TYPES } from "@data/lib/config";
import { Link } from "@solidjs/router";
import { civConfig } from "@data/types/civs";
import { getItemHref } from "./Cards";

export const Abilities: Component<{ abilities: ItemList<Ability>; civ: civConfig }> = (props) => {
  const sortedMappedAbilities = () => props.abilities.map((ab) => ab.variations[0]).sort((a, b) => (a.active == "manual" ? -1 : 1));
  return (
    <Show when={props.abilities?.length}>
      <h2 class="text-lg text-white font-bold  mt-12 mb-3">Abilities and influences</h2>

      <div class="flex gap-4 flex-col mb-8">
        <For each={sortedMappedAbilities()}>
          {(ability) => (
            <div class="flex flex-row items-start mb-2 group ">
              <div
                class={`flex-none rounded w-10 my-1.5 p-0 h-10 mr-4 ${
                  ability.active == "manual" ? "bg-gradient-to-b from-[#5C457B] to-[#4D366E] border border-[#493B65]" : ""
                  // ability.active == "manual" ? "bg-gradient-to-b from-[#3D4E68] to-[#222535] border border-item-ability" : ""
                }`}
              >
                <ItemIcon url={ability.icon ?? ""} class="scale-100" />
              </div>
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

const InlineItemLink: Component<{ itemId: ItemSlug; civ: civConfig }> = (props) => {
  const SDK = import("@data/sdk/index");
  const [item] = createResource(props.itemId, async (id) => (await SDK).civilizations.Get(props.civ).Get(id));

  return (
    <Show when={item()} keyed>
      {(item) => (
        <Link href={getItemHref(item, props.civ)} class="whitespace-nowrap">
          <div class={`inline-block w-[1.2em] h-[1.2em] mb-[-0.2em] p-0 mx-[0.3em] bg-item-${item.type}`}>
            <ItemIcon url={item.icon} />
          </div>
          <span class="font-bold">{item.name}</span>
        </Link>
      )}
    </Show>
  );
};
