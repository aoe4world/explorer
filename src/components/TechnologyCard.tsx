import { Component, createMemo } from "solid-js";
import { getItemDescription } from "../global";
import { getMostAppropriateVariation } from "../query/utils";
import { UnifiedItem, Technology, civConfig, RecruitedUnit } from "../types/data";
import { Card } from "./Cards";
import { StatCosts } from "./Stats";
import { Recruits } from "./Recruits";

export const TechnologyCard: Component<{ item: UnifiedItem<Technology>; civ?: civConfig; venue?: string }> = (props) => {
  const variation = createMemo(() => getMostAppropriateVariation<Technology>(props.item, props.civ));

  const costs = () => {
    const v = variation();
    if (props.venue) {
      const pvs = v?.productionVariations ?? props.item.productionVariations;
      const matched = pvs?.find((pv) => pv.venue === props.venue || pv.venue.endsWith("/" + props.venue));
      if (matched) return matched.costs;
    }
    return v?.costs;
  };
  const recruits = () => (variation()?.recruits ?? props.item.recruits) as RecruitedUnit[] | undefined;

  return (
    <Card item={props.item} civ={props.civ}>
      <div class="flex flex-col flex-auto">
        <p class="mb-3 grow">{getItemDescription(variation() ?? props.item)}</p>
        <Recruits recruits={recruits()} civ={props.civ} mode="card" />
        <StatCosts costs={costs()} />
      </div>
    </Card>
  );
};
