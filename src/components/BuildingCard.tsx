import { Component, createMemo, createResource, Show } from "solid-js";
import { ITEMS } from "../../data/src/types/items";
import { getUnitStats } from "../query/stats";
import { getMostAppropriateVariation } from "../query/utils";
import { Building, civConfig, UnifiedItem } from "../types/data";
import { Card } from "./Cards";
import { StatBar, StatCosts, StatDps, StatNumber } from "./Stats";

export const BuildingCard: Component<{ item: UnifiedItem<Building>; civ?: civConfig }> = (props) => {
  const [stats] = createResource(() => getUnitStats(ITEMS.BUILDINGS, props.item, props.civ));
  const variation = createMemo(() => getMostAppropriateVariation<Building>(props.item, props.civ));

  return (
    <Card item={props.item} civ={props.civ}>
      <Show when={stats()}>
        <>
          <div class="flex flex-col gap-4 mb-8">
            <StatBar label="Hitpoints" icon="heart" stat={stats().hitpoints} max={10000} item={props.item} />
            <StatBar label="Siege Attack" icon="meteor" stat={stats().siegeAttack} max={500} multiplier={stats().burst} item={props.item} />
            <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats().rangedAttack} max={100} multiplier={stats().burst} item={props.item} />
            <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats().rangedArmor} max={60} displayAlways={true} item={props.item} />
            <StatBar label="Fire Armor" icon="block-brick-fire" stat={stats().fireArmor} max={20} displayAlways={true} item={props.item} />
          </div>
          <div class="flex flex-col gap-4 mt-auto">
            <div class="flex gap-4  flex-wrap">
              <StatNumber label="Atck Spd" stat={stats().attackSpeed} unitLabel="S"></StatNumber>
            </div>
            <StatDps label="Damage" speed={stats().attackSpeed} attacks={[stats().rangedAttack || stats().meleeAttack || stats().siegeAttack]}></StatDps>
            <StatCosts costs={variation()?.costs} />
          </div>
        </>
      </Show>
    </Card>
  );
};
