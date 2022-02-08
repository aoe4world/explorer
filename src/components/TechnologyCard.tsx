import { Component, createMemo } from "solid-js";
import { CIVILIZATIONS, PRETTY_AGE_MAP } from "../config";
import { UnifiedItem, Technology, civConfig } from "../types/data";
import { Card, CardHeader } from "./Cards";
import { StatCosts } from "./Stats";

export const TechnologyCard: Component<{ item: UnifiedItem<Technology>; civ?: civConfig }> = (props) => {
  const mostCommonCosts = createMemo(() => props.item.variations.sort((a, b) => b.civs.length - a.civs.length)[0].costs);

  return (
    <Card item={props.item} civ={props.civ}>
      <div class="flex-auto">
        <p class="mb-5">{props.item.description}</p>
        <StatCosts costs={mostCommonCosts()} />
      </div>
    </Card>
  );
};
