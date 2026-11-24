import { Component, createMemo, createResource, Show } from "solid-js";
import { getUnitStats } from "../query/stats";
import { getMostAppropriateVariation } from "../query/utils";
import { Building, civConfig, ITEMS, UnifiedItem } from "../types/data";
import { Card } from "./Cards";
import { StatBar, StatCosts, StatDps, StatNumber } from "./Stats";
import { Icon } from "@components/Icon";
import * as icons from "@components/icons";

export const BuildingCard: Component<{ item: UnifiedItem<Building>; civ?: civConfig }> = (props) => {
  const [stats] = createResource(() => getUnitStats(ITEMS.BUILDINGS, props.item, props.civ));
  const variation = createMemo(() => getMostAppropriateVariation<Building>(props.item, props.civ));

  const costs = () => variation()?.costs;

  return (
    <Card item={props.item} civ={props.civ}>
      <Show when={stats()}>
        {(stats) => (
          <>
            <div class="flex flex-col gap-4 mb-8">
              <StatBar label="Hitpoints" icon={icons.Heart} stat={stats().hitpoints} max={10000} item={props.item} />
              <StatBar label="Siege Attack" icon={icons.Meteor} stat={stats().siegeAttack} max={500} multiplier={stats().burst} item={props.item} />
              <StatBar label="Ranged Attack" icon={icons.BowArrow} stat={stats().rangedAttack} max={100} multiplier={stats().burst} item={props.item} />
              <StatBar label="Ranged Armor" icon={icons.BullseyeArrow} stat={stats().rangedArmor} max={60} displayAlways={true} item={props.item} />
              <StatBar label="Ranged Resistance" icon={icons.BullseyeArrow} stat={stats().rangedResistance} max={100} displayAlways={false} item={props.item} unit="%" />
              <StatBar label="Fire Armor" icon={icons.BlockBrickFire} stat={stats().fireArmor} max={20} displayAlways={true} item={props.item} />
            </div>
            <div class="flex flex-col gap-4 mt-auto">
              <div class="flex gap-4  flex-wrap">
                <StatNumber label="Atck Spd" stat={stats().attackSpeed} unitLabel="S" />
              </div>
              <StatDps label="Damage" speed={stats().attackSpeed} attacks={[stats().rangedAttack || stats().meleeAttack || stats().siegeAttack]} />
              <StatCosts costs={costs()} />
            </div>
          </>
        )}
      </Show>
    </Card>
  );
};
