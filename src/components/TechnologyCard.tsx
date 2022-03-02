import { Component, createMemo } from "solid-js";
import { CIVILIZATIONS, PRETTY_AGE_MAP } from "../config";
import { UnifiedItem, Technology, civConfig } from "../types/data";
import { Card, CardHeader } from "./Cards";
import { StatCosts } from "./Stats";

export const TechnologyCard: Component<{ item: UnifiedItem<Technology>; civ?: civConfig }> = (props) => {
  const mostAppropriateVariation = createMemo(
    () =>
      (props.civ ? props.item.variations.sort((a, b) => a.civs.length - b.civs.length) : props.item.variations.sort((a, b) => b.civs.length - a.civs.length))[0]
  );

  return (
    <Card item={props.item} civ={props.civ}>
      <div class="flex-auto">
        <p class="mb-5">{mostAppropriateVariation().description}</p>
        <StatCosts costs={mostAppropriateVariation().costs} />
      </div>
    </Card>
  );
};
