import { Show } from "solid-js";
import { getItemName } from "../global";
import { Item, UnifiedItem } from "../types/data";
import { CivConfig } from "../config";
import { getMostAppropriateVariation } from "../query/utils";

export function ItemName(props: { item?: Item | UnifiedItem; civ?: CivConfig; name?: string; class?: string }) {
  const name = () => {
    if (props.item) {
      if (props.civ && "variations" in props.item) {
        const v = getMostAppropriateVariation(props.item, props.civ);
        if (v) return getItemName(v);
      }
      return getItemName(props.item);
    }
    return props.name ?? "";
  };
  return (
    <Show when={name().match(/(.*?)\((.*?)\)/)} fallback={<span class={props.class}>{name()}</span>}>
      {(match) => (
        <span class={props.class}>
          {match()[1]}
          <span class="opacity-50">{match()[2]}</span>
        </span>
      )}
    </Show>
  );
}
