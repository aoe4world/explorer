import { Component, createEffect, createSignal, Index, on, Show } from "solid-js";
import { CIVILIZATIONS } from "../config";
import { calculateStatParts } from "../query/stats";
import { Stat, StatPart } from "../types/stats";
import { globalAgeFilter, globalCivFilter } from "./Toolbar";
import { Tooltip } from "./Tooltip";

const prettyAgeMap = ["", "Age I", "Age II", "Age III", "Age IV"];

export const StatBar: Component<{
  label: string;
  icon?: string;
  stat: Stat;
  /** Event when the total value is zero, display the graph,
   * useful for i.e. armor or other properties that will always be present in a
   * later age or after upgrades */
  displayAlways?: boolean;
  max: number;
}> = (props) => {
  let totalEl;

  const [parts, setParts] = createSignal([] as StatPart<number>[]);
  const [values, setValues] = createSignal({ base: 0, upgrades: 0, technologies: 0, bonus: 0, total: 0 });
  createEffect(
    on([globalAgeFilter, globalCivFilter], () => {
      const { parts, ...rest } = calculateStatParts(props.stat, globalAgeFilter());
      setParts(parts);
      setValues(rest);
    })
  );
  return (
    <Show when={parts().length > 0 || props.displayAlways}>
      <div>
        <div class="mb-2 flex flex-row">
          <span class="text-white text-[14px] flex-auto" ref={totalEl}>
            <Show when={props.icon}>
              <i class={`fas fa-${props.icon}  mr-2`}></i>
            </Show>
            {values().base}
            {values().total > values().base && <span class="text-white/60"> / {values().total}</span>}
            {values().bonus && <span class="text-white/40"> + {values().bonus}</span>}
          </span>
          <Tooltip attachTo={totalEl}>
            <div class="bg-gray-600 p-4 -mt-2 drop-shadow-lg">
              Base <span class="float-right ml-4">{values().base}</span>
              <br />
              {values().upgrades && (
                <>
                  Upgrades
                  <span class="text-item-unit-light float-right ml-4"> + {values().upgrades}</span>
                  <br />
                </>
              )}
              {values().technologies && (
                <>
                  Technologies
                  <span class="text-item-tech-light float-right ml-4"> + {values().technologies}</span>
                  <br />
                </>
              )}
              <hr class="my-3" />
              Total <span class="float-right ml-4">{values().total}</span>
              {values().bonus && (
                <div class="opacity-50">
                  Bonus <span class="float-right ml-4">+ {values().bonus}</span>
                </div>
              )}
            </div>
          </Tooltip>
          <span class="text-white/50 uppercase text-[10px] font-bold tracking-widest"> {props.label}</span>
        </div>

        <div class="h-2 bg-black/30 flex flex-row relative">
          <Index each={parts()}>
            {(part, i) => {
              const [value, id, age, variation, type, label] = part();

              let partEl;
              const isBase = variation.type == "unit" && i == 0;
              let className = isBase
                ? "bg-bar-base" + (value < props.max * 0.75 ? " shrink-0" : "")
                : type == "bonus"
                ? "bg-white/20 shrink"
                : type == "upgrade" ?? variation.type == "unit"
                ? "bg-bar-upgrade shrink-0"
                : variation.unique
                ? "bg-bar-uniqiue"
                : type == "technology"
                ? "bg-bar-tech"
                : "bg-bar-base shrink-0";
              const hide = () => part()[0] <= 0;
              return (
                <div
                  class="h-full "
                  ref={partEl}
                  className={className + " hover:bg-white"}
                  style={{
                    width: hide() ? "0" : `max(5px, calc(${(part()[0] / props.max) * 100}% - 2px))`,
                    "margin-right": hide() ? "0" : "2px",
                    opacity: hide() ? 0 : 1,
                    transition: "all 0.2s ease-in",
                  }}
                >
                  <Tooltip attachTo={partEl}>
                    <div class="bg-gray-600 p-4 max-w-sm">
                      <div class="text-lg mb-2">
                        <span class="bg-white text-black font-bold rounded-sm px-2 py-1">
                          {!isBase && "+"} {value ?? 0}
                        </span>
                        <span class="float-right ml-4 opacity-50">{prettyAgeMap[age]}</span>
                      </div>
                      {label ? (
                        <p>{label}</p>
                      ) : (
                        <>
                          <strong>{variation.name}</strong>
                          {variation.type == "technology" && <p>{variation.description}</p>}
                          {variation.unique && (
                            <p class="text-bar-uniqiue">
                              <i class="fas fa-sparkles"></i> Unique to {CIVILIZATIONS[variation.civs[0]].name}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </Tooltip>
                </div>
              );
            }}
          </Index>
        </div>
      </div>
    </Show>
  );
};

export const StatNumber: Component<{
  label: string;
  displayAlways?: boolean;
  unitLabel?: string;
  stat: Stat;
}> = (props) => {
  const [parts, setParts] = createSignal<StatPart<number>[]>([]);
  const [values, setValues] = createSignal({ base: 0, upgrades: 0, technologies: 0, bonus: 0, total: 0 });
  createEffect(
    on([globalAgeFilter, globalCivFilter], () => {
      const { parts, ...rest } = calculateStatParts(props.stat, globalAgeFilter(), { decimals: 2 });
      setValues(rest);
      setParts(parts);
    })
  );

  let el;

  return (
    <div class="flex flex-col" ref={el}>
      <span class="text-white/50 uppercase text-[10px] font-bold tracking-widest">{props.label}</span>

      <span class="text-white text-xl flex-auto">
        {values().base}
        {values().total != values().base && <span class="text-white/60"> / {values().total}</span>}
        {values().bonus && <span class="text-white/40"> + {values().bonus}</span>}
        {props.unitLabel && <span class="text-white/60 text-sm ml-1">{props.unitLabel}</span>}
      </span>
      <Tooltip attachTo={el}>
        <div class="bg-gray-700 p-4 max-w-sm drop-shadow-lg rounded">
          <Index each={parts()}>
            {(part, i) => {
              const [value, id, age, variation, type, label] = part();
              return value ? (
                <>
                  {type == "base" ? (
                    <div class="text-lg mb-2">
                      Base ({prettyAgeMap[age]}) <span class="text-white/80 float-right ml-4">{value}</span>
                    </div>
                  ) : type == "upgrade" ? (
                    <div>
                      {variation.name} ({prettyAgeMap[age]})<span class="text-item-upgrade-light float-right ml-4"> + {value}</span>
                    </div>
                  ) : type == "technology" ? (
                    <div>
                      {variation.name} ({prettyAgeMap[age]})
                      <span class="text-item-tech-light float-right ml-4">
                        {" "}
                        {value > 1 && "+"}
                        {value}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              );
            }}
          </Index>
        </div>
      </Tooltip>
    </div>
  );
};
