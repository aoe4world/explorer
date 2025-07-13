import { Component, createMemo, createResource, Show } from "solid-js";
import { LinkType } from "./common/Link";
import { CIVILIZATION_BY_SLUG, ITEMS } from "../config";
import { getUnitStats } from "../query/stats";
import { getMostAppropriateVariation } from "../query/utils";
import { civConfig, UnifiedItem, Unit } from "../types/data";
import { Card } from "./Cards";
import { StatBar, StatCosts, StatDps, StatNumber } from "./Stats";

const increaseBarSizeForClass = ["siege", "war_elephant", "incendiary_ship"];
function getBarSize(unit: UnifiedItem<Unit>, baseSize: number, increasedSize: number) {
  return unit.classes.some((c) => increaseBarSizeForClass.includes(c)) ? increasedSize : baseSize;
}

export const UnitCard: Component<{ unit: UnifiedItem<Unit>; age?: number; variation?: Unit; civ?: civConfig, selectedTechnologies?: string[], linkType?: LinkType, onCivSelect?: (civ: civConfig) => void }> = (props) => {
  const civ = createMemo(() => props.civ ?? (props.variation ? CIVILIZATION_BY_SLUG[props.variation.civs[0]] : null));
  const age = createMemo(() => props.age ?? props.variation?.age);
  const variation = createMemo(() => props.variation ?? getMostAppropriateVariation<Unit>(props.unit, civ()));

  const [stats] = createResource(
    () => ({selectedTechnologies: props.selectedTechnologies, variation: variation()}),
    ({selectedTechnologies, variation}) => getUnitStats(ITEMS.UNITS, props.unit, civ(), { variation: variation, selectedTechnologies })
  );
  const isSiege = () => props.unit.classes.includes("siege");

  return (
    <Card item={props.unit} civ={civ()} age={age()} linkType={props.linkType} onCivSelect={props.onCivSelect}>
      <Show when={stats()}>
        <>
          <div class="flex flex-col gap-4 mb-8">
            <StatBar label="Hitpoints" icon="heart" stat={stats().hitpoints} max={getBarSize(props.unit, 500, 1000)} item={props.unit} />
            <StatBar label="Siege Attack" icon="meteor" stat={stats().siegeAttack} max={500} multiplier={stats().burst} item={props.unit} />
            <StatBar label="Melee Attack" icon="swords" stat={stats().meleeAttack} max={getBarSize(props.unit, 50, 100)} item={props.unit} />
            <StatBar
              label="Ranged Attack"
              icon="bow-arrow"
              stat={stats().rangedAttack}
              max={getBarSize(props.unit, 50, 300)}
              multiplier={stats().burst}
              item={props.unit}
            />
            <StatBar
              label={props.unit.classes.includes("incendiary_ship") ? "Fire Attack" : "Torch Attack"}
              icon="fire"
              stat={stats().fireAttack}
              max={getBarSize(props.unit, 50, 300)}
              item={props.unit}
            />
            <StatBar label="Melee Armor" icon="shield-blank" stat={stats().meleeArmor} max={20} displayAlways={true} item={props.unit} />
            <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats().rangedArmor} max={20} displayAlways={!isSiege()} item={props.unit} />
            <StatBar label="Ranged Resistance" icon="bullseye-arrow" stat={stats().rangedResistance} max={100} displayAlways={isSiege()} item={props.unit} unit="%" />
            <StatBar label="Fire Armor" icon="block-brick-fire" stat={stats().fireArmor} max={20} item={props.unit} />
          </div>
          <div class="flex flex-col gap-4 mt-auto">
            <div class="flex gap-4  flex-wrap">
              <StatNumber label="Move Spd" stat={stats().moveSpeed} unitLabel="T/S"></StatNumber>
              <StatNumber label="Atck Spd" stat={stats().attackSpeed} unitLabel="S"></StatNumber>
            </div>
            <StatDps label="Damage" speed={stats().attackSpeed} attacks={[stats().rangedAttack || stats().meleeAttack || stats().siegeAttack]}></StatDps>
            <StatCosts costs={variation().costs} />
          </div>
        </>
      </Show>
    </Card>
  );
};
