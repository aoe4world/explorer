import { Component, Show, createSignal, createMemo } from "solid-js";
import { UnifiedItem, Unit } from "../../types/data";
import { UnitCard } from "../UnitCard";
import { CivConfig } from "@data/types/civs";
import { CIVILIZATIONS } from "@data/lib/config/civs";
import { TechnologySelector } from "./TechnologySelector";
import { getItemHref } from "@components/Cards";
import { Link } from "@solidjs/router";
import { getBattleStats } from "../../query/battlereport";

function formatExplosiveMessage(stats1, stats2) {
  if (stats1.isExplosive && stats2.isExplosive) {
    if (stats1.attacksRequired > 1 && stats2.attacksRequired > 1)
      return <div class="text-center">A strange game.<br/>The only winning move is not to play.</div>;
  } else if (stats1.isExplosive) {
    if (stats1.attacksRequired > 1) {
      if (!stats2.attacksRequired) {
        return <div class="text-left">Throwing a tantrum...</div>;
      } else {
        return <div class="text-left">Going out with a bang...</div>;
      }
    }
  } else if (stats2.isExplosive) {
    if (stats2.attacksRequired > 1) {
      if (!stats1.attacksRequired) {
        return <div class="text-right">Throwing a tantrum...</div>;
      } else {
        return <div class="text-right">Going out with a bang...</div>;
      }
    }
  }

  return <div class="text-center">These explosive delights<br/>have violent ends...</div>;
}

export const BattleReportView: Component<{ unit1: UnifiedItem<Unit>; unit2: UnifiedItem<Unit>; age1?: number; age2?: number; variation1: Unit; variation2: Unit, onCivSelect?: (civ: CivConfig, unitNumber: 1 | 2) => void }> = (props) => {
  const [selectedTechs1, setSelectedTechs1] = createSignal<string[]>([]);
  const [selectedTechs2, setSelectedTechs2] = createSignal<string[]>([]);

  const battleStats = createMemo(() =>
    getBattleStats(props.variation1, props.variation2, props.age1, props.age2, props.unit1, props.unit2, selectedTechs1(), selectedTechs2())
  );

  const stats1 = () => battleStats()?.stats1;
  const stats2 = () => battleStats()?.stats2;

  const winnerClass = "text-green-400 font-bold";
  const drawClass = "text-yellow-400 font-bold";

  const Unit = ({unit}) => <span class="text-sm text-gray-300 text-center pl-1">{unit}</span>;

  const formatNumber = (value?: number, fixed?: number) => {
    if (typeof value === "string") return value;
    if (value === undefined || isNaN(value) || value == Infinity) return "-";
    if (fixed !== undefined) return value.toFixed(fixed);
    return value.toString();
  }
  const StatLine = (props: {
    sizeClass?: string;
    class?: string,
    leftStats: ReturnType<typeof stats1>,
    rightStats: ReturnType<typeof stats1>,
    styleFunc?: (stat, other) => string | null
    valueFunc: (stat, other) => any,
    fixed?: number,
    unit?: string
  }) => {
    return <>
      <div class={`${props.sizeClass ?? "text-xl"} ${props.class} ${props.styleFunc ? props.styleFunc(props.leftStats, props.rightStats) : ''}`}>{formatNumber(props.valueFunc(props.leftStats, props.rightStats), props.fixed)}{props.unit && <Unit unit={props.unit}/>}</div>
      <div class={`col-start-3 ${props.sizeClass ?? "text-xl"} ${props.class} ${props.styleFunc ? props.styleFunc(props.rightStats, props.leftStats) : ''}`}>{formatNumber(props.valueFunc(props.rightStats, props.leftStats), props.fixed)}{props.unit && <Unit unit={props.unit}/>}</div>
    </>;
  };

  const battleReportHref = props.variation1 && props.variation2 && getItemHref(props.unit1, CIVILIZATIONS[props.variation1.civs[0]] as any as CivConfig) + "/versus/" + CIVILIZATIONS[props.variation2.civs[0]].slug + "/units/" + props.unit2.id + `?age=${props.variation1.age}&targetAge=${props.variation2.age}`;

  return (
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-[3fr_2fr_3fr] gap-4">
        <UnitCard unit={props.unit1} age={props.age1} variation={props.variation1} civ={CIVILIZATIONS[props.variation1.civs[0]] as any as CivConfig} selectedTechnologies={selectedTechs1()} linkType="blank" onCivSelect={(civ) => props.onCivSelect?.(civ, 1)} />

          <div class="grid grid-cols-[auto_1fr_auto] text-md mb-auto">
            <h4 class="col-span-3 font-bold text-white text-xl text-center pb-10">
              {battleReportHref ? <Link href={battleReportHref} target="about:blank">Battle Report</Link> : <>Battle Report</>}
            </h4>

            {/* Hitpoints */}
            <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Hitpoints</div>
            <StatLine leftStats={stats2()} rightStats={stats1()} valueFunc={(stat) => stat?.targetHitpoints} unit="hp" />

            {/* Armor */}
            <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Armor</div>
            <StatLine class="capitalize text-gray-200" sizeClass="text-md" leftStats={stats2()} rightStats={stats1()} valueFunc={(stat) => stat?.targetArmorType} />
            <div class="text-xl">
              <Show when={stats2()?.targetArmor || !stats2()?.targetResistance}>{stats2()?.targetArmor?.toFixed(0)}<Unit unit="armor"/></Show>
              <Show when={stats2()?.targetResistance}>{stats2()?.targetResistance?.toFixed(0)}<Unit unit="% resistance"/></Show>
            </div>
            <div class="col-start-3 text-xl">
              <Show when={stats1()?.targetArmor || !stats1()?.targetResistance}>{stats1()?.targetArmor?.toFixed(0)}<Unit unit="armor"/></Show>
              <Show when={stats1()?.targetResistance}>{stats1()?.targetResistance?.toFixed(0)}<Unit unit="% resistance"/></Show>
            </div>


            {/* Damage per shot */}
            <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Applied Damage</div>
            <StatLine class="capitalize text-gray-200" sizeClass="text-md" leftStats={stats1()} rightStats={stats2()} valueFunc={(stat) => stat?.damageType} />
            <StatLine leftStats={stats1()} rightStats={stats2()} valueFunc={(stat) => stat?.damage} fixed={1} unit="dmg" />

            {/* Shots to kill */}
            <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold mt-4">Shots to kill</div>
            <StatLine leftStats={stats1()} rightStats={stats2()} styleFunc={(stat, other) => stat?.attacksRequired < other?.attacksRequired ? winnerClass : drawClass} valueFunc={(stat) => stat?.attacksRequired} unit="shots" />
            <Show when={stats1()?.isExplosive || stats2()?.isExplosive}>
              <div class="col-span-3 text-sm text-gray-300">{formatExplosiveMessage(stats1(), stats2())}</div>
            </Show>

            {/* Time to kill */}
            <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Time to kill</div>
            <StatLine leftStats={stats1()} rightStats={stats2()} styleFunc={(stat, other) => stat?.timeRequired < other?.timeRequired ? winnerClass : drawClass} valueFunc={(stat) => stat?.timeRequired} fixed={1} unit="sec" />

            {/* Hitpoints */}
            <div class="col-span-3 mt-4 uppercase text-center text-gray-100 font-bold">Remaining HP</div>
            <StatLine leftStats={stats1()} rightStats={stats2()} valueFunc={(stat) => stat?.hitpointRemaining} fixed={0} unit="hp" />

          </div>

        <Show when={props.variation2} fallback={<div class="bg-item-unit rounded-2xl bg-opacity-10 hover:bg-opacity-20"/>}>
          <UnitCard unit={props.unit2} age={props.age2} variation={props.variation2} civ={CIVILIZATIONS[props.variation2.civs[0]] as any as CivConfig} selectedTechnologies={selectedTechs2()} linkType="blank" onCivSelect={(civ) => props.onCivSelect?.(civ, 2)} />
        </Show>

        <div>
          <TechnologySelector item={props.unit1} civ={CIVILIZATIONS[props.variation1.civs[0]] as any as CivConfig} age={props.age1} onChange={setSelectedTechs1} />
        </div>
        <div class="col-start-3">
          <Show when={props.variation2}>
            <TechnologySelector item={props.unit2} civ={CIVILIZATIONS[props.variation2.civs[0]] as any as CivConfig} age={props.age2} onChange={setSelectedTechs2} />
          </Show>
        </div>
      </div>
    </div>
  );
};

