import { Component, createMemo } from "solid-js";
import { CIVILIZATIONS, PRETTY_AGE_MAP } from "../config";
import { getMostAppropriateVariation } from "../query/utils";
import { UnifiedItem, Technology, civConfig } from "../types/data";
import { Card, CardHeader } from "./Cards";
import { StatCosts } from "./Stats";

export const TechnologyCard: Component<{ item: UnifiedItem<Technology>; civ?: civConfig }> = (props) => {
  const variation = createMemo(() => getMostAppropriateVariation<Technology>(props.item, props.civ));
  return (
    <Card item={props.item} civ={props.civ}>
      <div class="flex-auto">
        <p class="mb-5">{variation()?.description}</p>
        <StatCosts costs={variation()?.costs} />
      </div>
    </Card>
  );
};
