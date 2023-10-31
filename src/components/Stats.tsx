import { Component, createEffect, createMemo, createSignal, Index, on, Show } from "solid-js";
import { RESOURCES } from "../../assets";
import { CIVILIZATIONS, PRETTY_AGE_MAP } from "../config";
import { calculateStatParts, roundToDecimals } from "../query/stats";
import { statLabelCSSClass, tooltipCSSClass } from "../styles";
import { Item, UnifiedItem } from "../types/data";
import { CalculatedStats, Stat, StatPart } from "../types/stats";
import { Icon } from "./Icon";
import { globalAgeFilter, globalCivFilter } from "./Toolbar";
import { Tooltip } from "./Tooltip";

export const StatBar: Component<{
  label: string;
  icon?: string;
  item: UnifiedItem<Item>;
  stat: Stat;
  /** Event when the total value is zero, display the graph,
   * useful for i.e. armor or other properties that will always be present in a
   * later age or after upgrades */
  displayAlways?: boolean;
  multiplier?: Stat;
  max: number;
}> = (props) => {
  let totalEl;

  const [parts, setParts] = createSignal([] as StatPart<number>[]);
  const [values, setValues] = createSignal({ base: 0, upgrades: 0, technologies: 0, bonus: 0, total: 0 });
  createEffect(
    on([globalAgeFilter, globalCivFilter], () => {
      const { parts, ...rest } = calculateStatParts(props.stat, globalAgeFilter(), { item: props.item });
      setParts(parts.map(([v, ...p]) => [v * multiplier(), ...p]));
      setValues(Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, v * multiplier()])) as any);
    })
  );
  const multiplier = createMemo(() => props.multiplier?.parts?.reduce((sum, [v]) => sum + v, 0) ?? 1);
  const formattedMultiplier = () => (props.multiplier ? `${multiplier()}× ` : "");
  return (
    <Show when={parts().length > 0 || props.displayAlways}>
      <div classList={{ "opacity-20": !values().total }}>
        <div class="mb-2 flex flex-row items-center">
          <span class="text-white text-[14px] flex-auto flex items-center" ref={totalEl}>
            {props.icon && <Icon icon={props.icon} class="mr-1.5 text-[12px]" />}
            {values().base}
            {props.multiplier && <>*</>}
            {values().total > values().base && (
              <span class="text-white/60 ml-3">
                <Icon icon="arrow-up-right" class="text-xs mr-0.5" />
                {values().total}
              </span>
            )}
            {values().bonus && (
              <span class="text-white/40 ml-2">
                {" "}
                <Icon icon="plus" class="text-xs" />
                {values().bonus}
              </span>
            )}
          </span>
          {/* {props.multiplier && (
            <span class="text-gray-200 font-bold  text-[14px] mr-2">
              &divide; {multiplier()}
              <Icon icon="ball-pile" class="ml-1 mr-1 text-xs " />
            </span>
          )} */}
          <span class={statLabelCSSClass}> {props.label}</span>
        </div>
        {values().total && (
          <Tooltip attachTo={totalEl}>
            <div class={tooltipCSSClass}>
              {props.multiplier && <p class="text-[12px] mb-4">*Total of {multiplier()} projectiles</p>}
              Base
              <span class="float-right ml-4">
                {props.multiplier && (
                  <span class="opacity-50 mr-2">
                    {formattedMultiplier()}
                    {values().base / multiplier()} =
                  </span>
                )}
                {values().base}
              </span>
              <br />
              {values().upgrades && (
                <>
                  <Icon icon="arrow-up-right" class="text-sm mr-1" />
                  Upgrades
                  <span class="text-item-unit-light float-right ml-4">
                    {props.multiplier && (
                      <span class="opacity-50 mr-2">
                        {formattedMultiplier()}
                        {values().upgrades / multiplier()} =
                      </span>
                    )}
                    + {values().upgrades}
                  </span>
                  <br />
                </>
              )}
              {values().technologies && (
                <>
                  <Icon icon="arrow-up-right" class="text-sm mr-1" />
                  Technologies
                  <span class="text-item-tech-light float-right ml-4">
                    {props.multiplier && (
                      <span class="opacity-50 mr-2">
                        {formattedMultiplier()}
                        {values().technologies / multiplier()} =
                      </span>
                    )}
                    + {values().technologies}
                  </span>
                  <br />
                </>
              )}
              <hr class="my-3" />
              Total <span class="float-right ml-4">{values().total}</span>
              {values().bonus && (
                <div class="opacity-50">
                  <Icon icon="plus" class="text-xs mr-1" />
                  Bonus{" "}
                  <span class="float-right ml-4">
                    {props.multiplier && (
                      <span class="opacity-50 mr-2">
                        {formattedMultiplier()}
                        {values().bonus / multiplier()} =
                      </span>
                    )}
                    + {values().bonus}
                  </span>
                </div>
              )}
              <Show when={multiplier() > 1}>
                {() => {
                  const projectiles = multiplier();
                  const base = values().base / projectiles;
                  return (
                    <div class="bg-gray-500 rounded-sm p-2 flex gap-2 items-center mt-4">
                      <p class="text-xl px-2">{projectiles}×</p>
                      <div class="text-sm text-gray-200">
                        <p class="font-bold mb-1 text-xs">Every volley has {projectiles} projectiles</p>
                        <p class="text-xs text-gray-200">Target armor has effect on each individual projectile</p>
                        <div class="uppercase text-gray-50 text-[10px] mt-2">Example</div>
                        <div class="py-1">
                          (<span class="bg-lime-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-lime-200">projectile damage</span>
                          {` - `}
                          <span class="bg-pink-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-pink-200">target armor</span>) ×{" "}
                          <span class="bg-teal-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-teal-200">projectiles</span> ={" "}
                          <span class="bg-blue-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-blue-200">total damage</span>
                        </div>
                        <div class="py-1">
                          (<span class="bg-lime-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-lime-200">{base}</span>
                          {` - `}
                          <span class="bg-pink-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-pink-200">2</span>) ×{" "}
                          <span class="bg-teal-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-teal-200">{projectiles}</span> ={" "}
                          <span class="bg-blue-900/50 uppercase py-0.5 px-1 text-[10px] font-bold rounded text-blue-200">{(base - 2) * projectiles}</span>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </Show>
            </div>
          </Tooltip>
        )}
        <div class="h-4 md:h-3 bg-gray-50/10 flex flex-row relative">
          {/* {formattedMultiplier()} */}
          <Index each={parts()}>
            {(part, i) => {
              const [value, id, age, variation, type, label] = part();

              let partEl;
              const isBase = ["unit", "building"].includes(variation.type) && i == 0;
              let className = isBase
                ? "bg-bar-base" + (value < props.max * 0.75 ? " shrink-0" : "")
                : type == "bonus"
                ? "bg-white/20 !text-white shrink"
                : type == "upgrade" && ["building"].includes(variation.type)
                ? "bg-bar-building shrink"
                : type == "upgrade" ?? ["unit"].includes(variation.type)
                ? "bg-bar-upgrade shrink-0"
                : variation.unique
                ? "bg-bar-unique"
                : type == "technology"
                ? "bg-bar-technology"
                : "bg-bar-base shrink-0";
              const hide = () => part()[0] <= 0;
              return (
                <div
                  class="h-full hover:bg-white"
                  ref={partEl}
                  className={className}
                  style={{
                    width: hide() ? "0" : `min(max(5px, calc(${(part()[0] / props.max) * 100}% - 2px)), 100%)`,
                    "margin-right": hide() ? "0" : "2px",
                    opacity: hide() ? 0 : 1,
                    transition: "all 0.2s ease-in",
                  }}
                >
                  <Tooltip attachTo={partEl}>
                    <div class={tooltipCSSClass}>
                      <div class="text-lg mb-4">
                        <span class=" text-white font-bold rounded-sm px-2 py-1 inline-flex flex-col items-center" className={className}>
                          <span class="text-xs uppercase ">{type}</span>
                          {!isBase && "+"} {value ?? 0}
                        </span>
                        <span class="float-right ml-4 opacity-50">{PRETTY_AGE_MAP[age]}</span>
                      </div>
                      {type == "upgrade" && `${PRETTY_AGE_MAP[age]} upgrade for `}
                      <strong>{variation.name}</strong>
                      {label && <p class="mb-6">{label}</p>}
                      {variation.unique && (
                        <p class="text-bar-unique">
                          <i class="fas fa-sparkles"></i> Unique to {CIVILIZATIONS[variation.civs[0]].name}
                        </p>
                      )}

                      {!["upgrade", "base"].includes(type) && <p class="my-2 whitespace-pre-wrap">{variation.description}</p>}
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
  helper?: string;
  unitLabel?: string;
  multiplier?: number;
  stat: Stat;
}> = (props) => {
  const [parts, setParts] = createSignal<StatPart<number>[]>([]);
  const [values, setValues] = createSignal({ base: 0, upgrades: 0, technologies: 0, bonus: 0, total: 0 });
  createEffect(
    on(globalAgeFilter, () => {
      const { parts, ...rest } = calculateStatParts(props.stat, globalAgeFilter(), { decimals: 3 });
      setValues(rest);
      setParts(parts);
    })
  );

  let el;
  let helperEl;

  return (
    <Show when={values().base || props.displayAlways}>
      <div class="flex flex-col">
        <span class={statLabelCSSClass}>
          {props.label}
          <span ref={helperEl}>{props.helper && <Icon icon="circle-question" class="ml-2 text-white/40"></Icon>}</span>
        </span>
        {props.helper && (
          <Tooltip attachTo={helperEl}>
            <div class={tooltipCSSClass}>
              <p>{props.helper}</p>
            </div>
          </Tooltip>
        )}

        <span class="text-white text-xl flex-auto" ref={el}>
          {values().base}
          {values().total != values().base && (
            <span class="text-white/60">
              <Icon icon="arrow-up-right" class="text-sm ml-1" /> {values().total}
            </span>
          )}
          {props.unitLabel && <span class="text-white/60 text-sm ml-1">{props.unitLabel}</span>}
          {values().bonus && <span class="text-white/40 text-sm">(+ {values().bonus})</span>}
          {props.multiplier && <span class="text- text-sm">&times; {props.multiplier}</span>}
        </span>
        <Tooltip attachTo={el}>
          <div class={tooltipCSSClass}>
            <Index each={parts()}>
              {(part, i) => {
                const [value, id, age, variation, type, label] = part();
                return value ? (
                  <>
                    {type == "base" ? (
                      <div class="text-lg mb-2">
                        Base ({PRETTY_AGE_MAP[age]}) <span class="text-white/80 float-right ml-4">{value}</span>
                      </div>
                    ) : type == "upgrade" ? (
                      <div>
                        {variation.name} ({PRETTY_AGE_MAP[age]})<span class="text-item-unit-light float-right ml-4"> + {value}</span>
                      </div>
                    ) : type == "technology" ? (
                      <div>
                        {variation.name} ({PRETTY_AGE_MAP[age]})
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
    </Show>
  );
};

function dps(attackDuration: number, damage: number) {
  return attackDuration && damage ? roundToDecimals(damage / attackDuration, 2) : 0;
}

function calculateDpsParts(speed: CalculatedStats, attacks: CalculatedStats[]) {
  return attacks.reduce(
    (acc, attack) => {
      acc.base += dps(speed.base, attack.base);
      acc.upgrades += dps(speed.base + speed.upgrades, attack.upgrades);
      acc.technologies += dps(speed.total, attack.technologies) + (acc.upgrades - dps(speed.total, attack.upgrades));
      acc.bonus += dps(speed.total + speed.bonus, attack.bonus);
      acc.total += dps(speed.total, attack.total);
      return acc;
    },
    { base: 0, upgrades: 0, technologies: 0, total: 0, bonus: 0 }
  );
}

export const StatDps: Component<{
  label: string;
  displayAlways?: boolean;
  helper?: string;
  speed: Stat;
  attacks: Stat[];
}> = (props) => {
  const [values, setValues] = createSignal({ base: 0, upgrades: 0, technologies: 0, bonus: 0, total: 0 });

  createEffect(
    on(globalAgeFilter, () => {
      const attackSpeed = calculateStatParts(props.speed, globalAgeFilter(), { decimals: 3 });
      const attacks = props.attacks.map((attack) => calculateStatParts(attack, globalAgeFilter(), { decimals: 0 }));
      setValues(calculateDpsParts(attackSpeed, attacks));
    })
  );

  let el;
  let helperEl;

  return (
    <Show when={values().base || props.displayAlways}>
      <div class="flex flex-col">
        <span class={statLabelCSSClass}>
          {props.label}
          <span ref={helperEl}>{props.helper && <Icon icon="circle-question" class="ml-2"></Icon>}</span>
        </span>
        {props.helper && (
          <Tooltip attachTo={helperEl}>
            <div class={tooltipCSSClass}>
              <p>{props.helper}</p>
            </div>
          </Tooltip>
        )}

        <span class="text-white text-xl flex-auto" ref={el}>
          {values().base}
          {<span class="text-white/60 text-sm ml-1">DPS</span>}
          {values().total != values().base && (
            <span class="text-white/40 text-sm ml-2">
              <Icon icon="arrow-up-right" class="text-xs" /> {values().total}
            </span>
          )}
          {values().bonus && (
            <span class="text-white/40  text-sm ml-1">
              {" "}
              <Icon icon="plus" class="text-xs" /> {values().bonus}
            </span>
          )}
        </span>
        <Tooltip attachTo={el}>
          <div class={tooltipCSSClass}>
            <div class="text-lg mb-2">
              Base <span class="text-white/80 float-right ml-4">{values().base} dps</span>
            </div>
            Upgrades <span class="text-item-unit-light float-right ml-4">{values().upgrades} dps</span>
            <br />
            Technologies <span class="text-item-tech-light float-right ml-4">{values().technologies} dps</span>
            <hr class="my-3" />
            Total <span class="float-right ml-4">{values().total} dps</span>
            <br />
            Bonus <span class="text-item-bonus-light float-right ml-4">{values().bonus} dps</span>
          </div>
        </Tooltip>
      </div>
    </Show>
  );
};

export function formatSecondsToTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  return `${h > 0 ? `${h}:` : ""}${h && m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
}

export function formatSecondsToPhrase(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  // 1 hour 2 minutes 3 seconds
  return `${h > 0 ? `${h} hr${h > 1 ? "s" : ""} ` : ""}${m > 0 ? `${m} min${m > 1 ? "s" : ""} ` : ""}${s > 0 ? `${s} sec${s > 1 ? "s" : ""}` : ""}`;
}
function formatCurreny(number: number) {
  return number > 2500 ? `${number / 1000}k` : number;
}

export const StatCosts: Component<{ costs: Item["costs"] }> = (props) => (
  <div>
    <div class={statLabelCSSClass}>Costs</div>
    <div class="flex items-center gap-4 mt-1">
      {["time", "food", "wood", "gold", "stone", "popcap"].map(
        (type) =>
          (type == "popcap" ? props.costs[type] > 1 : props.costs[type] > 0) && (
            <div class="flex items-center gap-1">
              <div class="text-white">{type == "time" ? formatSecondsToTime(props.costs[type]) : formatCurreny(props.costs[type])}</div>
              <img src={RESOURCES[type]} class="h-4 object-contain w-5" />
            </div>
          )
      )}
    </div>
  </div>
);
