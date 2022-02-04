import { Component } from "solid-js";
import { UnifiedItem, Technology } from "../types/data";

export const TechnologyCard: Component<{ item: UnifiedItem<Technology> }> = (props) => {
  return (
    <div class="bg-item-tech/10 text-white rounded-2xl p-4 hover:bg-tech-unit/20 transition-all flex flex-col">
      <div class="flex gap-4 items-center mb-4">
        <div class="flex-none self-start rounded-md bg-item-tech w-16 h-16 p-1">
          <img src={props.item.icon} />
        </div>
        <div>
          <h2 class="text-xl font-bold">{props.item.name}</h2>
          <div class="text-item-tech-light text-sm truncate">{props.item.classes.join(", ")}</div>
        </div>
      </div>

      <p>{props.item.description}</p>

      <div class="flex-auto"> </div>
    </div>
  );
};
