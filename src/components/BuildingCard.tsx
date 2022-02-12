import { Link } from "solid-app-router";
import { Component, createMemo, createResource, Show } from "solid-js";
import { PhysicalItem } from "../../data/.scripts/lib/types/units";
import { ITEMS, PRETTY_AGE_MAP } from "../config";
import { getUnitStats } from "../query/stats";
import { Building, civAbbr, civConfig, UnifiedItem, Unit } from "../types/data";
import { Card, CardHeader } from "./Cards";
import { StatBar, StatCosts, StatDps, StatNumber } from "./Stats";

export const BuildingCard: Component<{ unit: UnifiedItem<Building>; baseHref?: string; civ?: civConfig | civAbbr }> = (props) => {
  const [stats] = createResource(() => getUnitStats(ITEMS.BUILDINGS, props.unit, props.civ));

  return (
    <Card item={props.unit}>
      <Show when={stats()}>
        <>
          <div class="flex flex-col gap-4 mb-8">
            <StatBar label="Hitpoints" icon="heart" stat={stats().hitpoints} max={8000} />
            <StatBar label="Siege Attack" icon="meteor" stat={stats().siegeAttack} max={500} />
            <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats().rangedAttack} max={100} />
            <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats().rangedArmor} max={60} displayAlways={true} />
            <StatBar label="Fire Armor" icon="block-brick-fire" stat={stats().fireArmor} max={20} displayAlways={true} />
          </div>
          <div class="flex flex-col gap-4 mt-auto">
            <div class="flex gap-4  flex-wrap">
              <StatNumber label="Atck Spd" stat={stats().attackSpeed} unitLabel="S"></StatNumber>
            </div>
            <StatDps label="Damage" speed={stats().attackSpeed} attacks={[stats().rangedAttack, stats().meleeAttack, stats().siegeAttack]}></StatDps>
            <StatCosts costs={props.unit.variations[0].costs} />
          </div>
        </>
      </Show>
    </Card>
  );
};
