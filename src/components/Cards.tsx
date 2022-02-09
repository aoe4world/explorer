import { Link } from "solid-app-router";
import { Component, createMemo, createResource, For, Show } from "solid-js";
import { PhysicalItem, Technology } from "../../data/.scripts/lib/types/units";
import { CIVILIZATIONS, PRETTY_AGE_MAP } from "../config";
import { getUnitStats } from "../query/stats";
import { Building, civAbbr, civConfig, UnifiedItem, Unit } from "../types/data";
import { CivFlag } from "./CivFlag";
import { Icon } from "./Icon";
import { StatBar, StatCosts, StatDps, StatNumber } from "./Stats";
import { globalAgeFilter } from "./Toolbar";

const typeToPathMap = {
  building: "buildings",
  unit: "units",
  technology: "technologies",
};
function getItemHref(item: UnifiedItem, civ?: civConfig) {
  if (item.civs.length == 1 && !civ) civ = CIVILIZATIONS[item.civs[0]];
  return `${civ ? `/civs/${civ.slug}` : ""}/${typeToPathMap[item.type]}/${item.id}`;
}

export const Card: Component<{ item: UnifiedItem; civ?: civConfig }> = (props) => {
  return (
    <div
      class="text-white rounded-2xl p-4 z-0  transition-all flex flex-col bg-opacity-10 hover:bg-opacity-20 group"
      className={`bg-item-${props.item.type}`}
      style={{ opacity: globalAgeFilter() >= props.item.minAge ? 1 : 0.5 }}
    >
      {props.item.type == "technology" ? (
        <CardHeader item={props.item} civ={props.civ} />
      ) : (
        <Link href={getItemHref(props.item, props.civ)}>
          <CardHeader item={props.item} civ={props.civ} />
        </Link>
      )}

      {props.children}

      {props.civ ? (
        props.item.civs.length == 1 && (
          <div class="flex h-6 mt-5  items-center gap-2">
            <span class="text-unique text-sm font-semibold">
              <Icon icon="sparkles" /> Unique to {props.civ.name}
            </span>
          </div>
        )
      ) : (
        <div class="flex h-6 mt-5  items-center gap-2">
          <For each={props.item.civs}>
            {(civ) =>
              props.item.type != "technology" ? (
                <Link href={getItemHref(props.item, CIVILIZATIONS[civ])}>
                  <CivFlag abbr={civ} class="h-3.5 w-5 object-cover rounded-sm transition-opacity opacity-30 group-hover:opacity-80  hover:!opacity-100" />
                </Link>
              ) : (
                <CivFlag abbr={civ} class="h-3.5 w-5 object-cover rounded-sm opacity-30 transition-opacity group-hover:opacity-100" />
              )
            }
          </For>
          {props.item.civs.length == 1 && (
            <span class="text-unique text-sm font-semibold ml-auto">
              <Icon icon="sparkles" /> Unique
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export const CardHeader: Component<{ item: UnifiedItem; civ?: civConfig }> = (props) => {
  return (
    <div class="flex gap-4 items-center mb-4">
      <div class="flex-none self-start rounded-md w-16 h-16 p-1" className={`bg-item-${props.item.type}`}>
        <img src={props.item.icon} />
      </div>
      <div class="flex-auto">
        <div class="flex flex-row items-center">
          <h2 class="text-lg font-bold flex-auto leading-tight ">{props.item.name}</h2>
          <span class="text-sm uppercase whitespace-nowrap text-opacity-50" className={`text-item-${props.item.type}-light`}>
            {PRETTY_AGE_MAP[props.item.minAge]}
          </span>
        </div>
        <p class="text-sm leading-relaxed" className={`text-item-${props.item.type}-light`}>
          {props.item.displayClasses.join(", ")}
        </p>
      </div>
    </div>
  );
};

// const increaseBarSizeForClass = ["Siege", "Elephant"];
// function getBarSize(unit: UnifiedItem<PhysicalItem>, baseSize: number, increasedSize: number) {
//   return unit.classes.some((c) => increaseBarSizeForClass.includes(c)) ? increasedSize : baseSize;
// }

// export const Card: Component<{ unit: UnifiedItem<(Building | Unit | Technology)>; baseHref?: string; civ?: civConfig | civAbbr }> = (props) => {
//   const [stats] = createResource(() => getUnitStats(props.unit, props.civ));
//   const minAge = createMemo(() => props.unit.variations.sort((a, b) => a.age - b.age)[0].age);

//   return (
//     <div
//       class="bg-item-building/10 text-white rounded-2xl p-4 z-0 hover:bg-item-building/20 transition-all flex flex-col"
//       style={{ opacity: globalAgeFilter() >= minAge() ? 1 : 0.5 }}
//     >
//       <Link href={`${props.baseHref ?? ""}/units/${props.unit.id}`} state={false} class="text-white">
//         <div class="flex gap-4 items-center mb-4">
//           <div class="flex-none self-start rounded-md bg-item-building w-16 h-16 p-1">
//             <img src={props.unit.icon} />
//           </div>
//           <div class="flex-auto">
//             <div class="flex flex-row items-center">
//               <h2 class="text-lg font-bold flex-auto leading-tight ">{props.unit.name}</h2>
//               <span class="text-item-building-light/50 text-sm uppercase whitespace-nowrap">{PRETTY_AGE_MAP[minAge()]}</span>
//             </div>
//             <p class="text-item-building-light text-sm leading-relaxed">{props.unit.classes.join(", ")}</p>
//           </div>
//         </div>
//       </Link>
//       <Show when={stats()}>
//         <>
//           <div class="flex flex-col gap-4 mb-8">
//             <StatBar label="Hitpoints" icon="heart" stat={stats().hitpoints} max={8000} />
//             <StatBar label="Siege Attack" icon="meteor" stat={stats().siegeAttack} max={500} />
//             {/* <StatBar label="Melee Attack" icon="swords" stat={stats().meleeAttack} max={getBarSize(props.unit, 50, 100)} /> */}
//             <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats().rangedAttack} max={100} />
//             {/* <StatBar label="Melee Armor" icon="shield-blank" stat={stats().meleeArmor} max={20} displayAlways={true} /> */}
//             <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats().rangedArmor} max={50} displayAlways={true} />
//           </div>
//           <div class="flex flex-col gap-4 mt-auto">
//             <div class="flex gap-4  flex-wrap">
//               <StatNumber label="Atck Spd" stat={stats().attackSpeed} unitLabel="S"></StatNumber>
//             </div>
//             <StatDps label="Damage" speed={stats().attackSpeed} attacks={[stats().rangedAttack, stats().meleeAttack, stats().siegeAttack]}></StatDps>
//             <StatCosts costs={props.unit.variations[0].costs} />
//           </div>
//         </>
//       </Show>
//     </div>
//   );
// };
