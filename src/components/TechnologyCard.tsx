import { Component, createMemo } from "solid-js";
import { getMostAppropriateVariation } from "../query/utils";
import { UnifiedItem, Technology, civConfig } from "../types/data";
import { Card } from "./Cards";
import { StatCosts } from "./Stats";

export const TechnologyCard: Component<{ item: UnifiedItem<Technology>; civ?: civConfig }> = (props) => {
  const variation = createMemo(() => getMostAppropriateVariation<Technology>(props.item, props.civ));

  const costs = () => variation()?.costs;

  return (
    <Card item={props.item} civ={props.civ}>
      <div class="flex flex-col flex-auto">
        <p class="mb-5 grow">{variation()?.description}</p>
        <StatCosts costs={costs()} />
      </div>
    </Card>
  );
};
