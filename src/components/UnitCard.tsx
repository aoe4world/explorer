import { Component, createMemo, createResource, Show } from "solid-js";
import { getCivConfig, localizeCiv } from "../config";
import { currentLocale } from "../global";
import { getUnitStats } from "../query/stats";
import { getMostAppropriateVariation } from "../query/utils";
import { civConfig, ITEMS, RecruitedUnit, UnifiedItem, Unit } from "../types/data";
import { Card } from "./Cards";
import { LinkType } from "./common/Link";
import { StatBar, StatCosts, StatDps, StatNumber } from "./Stats";
import { Recruits } from "./Recruits";

const increaseBarSizeForClass = ["siege", "war_elephant", "incendiary_ship"];
function getBarSize(unit: UnifiedItem<Unit>, baseSize: number, increasedSize: number) {
  return unit.classes.some((c) => increaseBarSizeForClass.includes(c)) ? increasedSize : baseSize;
}

export const UnitCard: Component<{ unit: UnifiedItem<Unit>; age?: number; variation?: Unit; civ?: civConfig, selectedTechnologies?: string[], linkType?: LinkType, onCivSelect?: (civ: civConfig) => void, venue?: string }> = (props) => {
  const civ = createMemo(() => props.civ ? localizeCiv(props.civ, currentLocale()) : (props.variation ? getCivConfig(props.variation.civs[0], currentLocale()) : undefined));
  const age = createMemo(() => props.age ?? props.variation?.age);
  const variation = createMemo(() => props.variation ?? getMostAppropriateVariation<Unit>(props.unit, civ()));
  const recruits = () => (variation()?.recruits ?? props.unit.recruits) as RecruitedUnit[] | undefined;
  const costs = () => {
    const v = variation();
    if (props.venue) {
      const pvs = v?.productionVariations ?? props.unit.productionVariations;
      const matched = pvs?.find((pv) => pv.venue === props.venue || pv.venue.endsWith("/" + props.venue));
      if (matched) return matched.costs;
    }
    return v?.costs;
  };

  const [stats] = createResource(
    () => ({selectedTechnologies: props.selectedTechnologies, variation: variation(), civ: civ(), unit: props.unit}),
    ({selectedTechnologies, variation, civ, unit}) => getUnitStats(ITEMS.UNITS, unit, civ, { variation: variation, selectedTechnologies })
  );
  const hasRecruits = () => recruits()?.length;
  const isSiege = () => props.unit.classes.includes("siege");

  return (
    <Card item={props.unit} civ={civ()} age={age()} linkType={props.linkType} onCivSelect={props.onCivSelect}>
      <Show when={stats()}>
        <>
          <Show when={!hasRecruits()}>
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
          </Show>
          <div class="flex flex-col gap-4 mt-auto">
            <div class="flex gap-4  flex-wrap">
              <StatNumber label="Move Spd" stat={stats().moveSpeed} unitLabel="T/S" />
              <StatNumber label="Atck Spd" stat={stats().attackSpeed} unitLabel="S" />
            </div>
            <StatDps label="Damage" speed={stats().attackSpeed} attacks={[stats().rangedAttack || stats().meleeAttack || stats().siegeAttack]} />
            <Recruits recruits={recruits()} civ={civ()} mode="card" />
            <StatCosts costs={costs()} />
          </div>
        </>
      </Show>
    </Card>
  );
};
