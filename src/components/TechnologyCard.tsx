import { Component, createMemo } from "solid-js";
import { CIVILIZATIONS, PRETTY_AGE_MAP } from "../config";
import { UnifiedItem, Technology } from "../types/data";
import { StatCosts } from "./Stats";

export const TechnologyCard: Component<{ item: UnifiedItem<Technology> }> = (props) => {
  const minAge = createMemo(() => props.item.variations.sort((a, b) => a.age - b.age)[0].age);
  const mostCommonCosts = createMemo(() => props.item.variations.sort((a, b) => b.civs.length - a.civs.length)[0].costs);

  return (
    <div class="bg-item-tech/10 text-white rounded-2xl p-4 hover:bg-tech-unit/20 transition-all flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <div class="flex-none self-start rounded-md bg-item-tech w-16 h-16 p-1">
          <img src={props.item.icon} />
        </div>
        <div>
          <h2 class="text-lg font-bold">{props.item.name}</h2>
          <div class="text-item-tech-light text-sm  leading-1 ">
            {PRETTY_AGE_MAP[minAge()]}, {props.item.classes.join(", ")}
          </div>
        </div>
      </div>

      <div class="flex-auto">
        <p>{props.item.description}</p>

        {props.item.civs.length == 1 && (
          <p class="text-bar-uniqiue my-2">
            <i class="fas fa-sparkles"></i> Unique to {CIVILIZATIONS[props.item.civs[0]].name}
          </p>
        )}
      </div>
      <StatCosts costs={mostCommonCosts()} />
    </div>
  );
};
