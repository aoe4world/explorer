import { Link } from "solid-app-router";
import { Component, createMemo, createResource, Show } from "solid-js";
import { RESOURCES } from "../../assets";
import { getUnitStats } from "../query/stats";
import { civAbbr, civConfig, UnifiedItem, Unit } from "../types/data";
import { StatNumber, StatBar } from "./Stats";
import { globalAgeFilter } from "./Toolbar";

const increaseBarSizeForClass = ["Siege", "Elephant"];
function getBarSize(unit: UnifiedItem<Unit>, baseSize: number, increasedSize: number) {
  return unit.classes.some((c) => increaseBarSizeForClass.includes(c)) ? increasedSize : baseSize;
}

export const UnitCard: Component<{ unit: UnifiedItem<Unit>; baseHref?: string; civ?: civConfig | civAbbr }> = (props) => {
  const [stats] = createResource(() => getUnitStats(props.unit, props.civ));
  const inAge = createMemo(() => props.unit.variations.some((x) => x.age <= globalAgeFilter()));

  return (
    <div class="bg-item-unit/10 text-white rounded-2xl p-4 z-0 hover:bg-item-unit/20 transition-all flex flex-col" style={{ opacity: inAge() ? 1 : 0.5 }}>
      <Link href={`${props.baseHref ?? ""}/units/${props.unit.id}`} state={false} class="text-white">
        <div class="flex gap-4 items-center mb-4">
          <div class="flex-none self-start rounded-md bg-item-unit w-16 h-16 p-1">
            <img src={props.unit.icon} />
          </div>
          <div>
            <h2 class="text-xl font-bold">{props.unit.name}</h2>
            <span class="text-item-unit-light">{props.unit.classes.join(", ")}</span>
          </div>
        </div>
      </Link>
      <Show when={stats()}>
        <div class="flex flex-col gap-4">
          <StatBar label="Hitpoints" icon="heart" stat={stats().hitpoints} max={getBarSize(props.unit, 500, 1000)} />
          <StatBar label="Siege Attack" icon="meteor" stat={stats().siegeAttack} max={500} />
          <StatBar label="Melee Attack" icon="swords" stat={stats().meleeAttack} max={getBarSize(props.unit, 50, 100)} />
          <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats().rangedAttack} max={getBarSize(props.unit, 50, 300)} />
          <StatBar label="Melee Armor" icon="shield-blank" stat={stats().meleeArmor} max={20} displayAlways={true} />
          <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats().rangedArmor} max={20} displayAlways={true} />

          <div class="flex gap-4 mt-auto">
            <StatNumber label="Move Spd" stat={stats().moveSpeed} unitLabel="T/S"></StatNumber>
            <StatNumber label="Atck Spd" stat={stats().attackSpeed} unitLabel="S"></StatNumber>
          </div>
          <div>
            <div class="text-white/60 uppercase text-sm font-bold tracking-widest">Costs</div>
            <div class="flex items-center gap-3 mt-1">
              {["food", "wood", "gold", "stone"].map(
                (type) =>
                  !!props.unit.variations[0].costs[type] && (
                    <>
                      <img src={RESOURCES[type]} class="h-4 object-fit w-5" />
                      <div class="text-white">{props.unit.variations[0].costs[type]}</div>
                    </>
                  )
              )}
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};
