import { Component, createResource, createSignal, For } from "solid-js";
import { UnifiedItem, Unit, Technology, civConfig } from "../../types/data";
import { getItemTechnologies, getMostAppropriateVariation } from "../../query/utils";
import { ItemIcon } from "../ItemIcon";
import { ITEMS, ModifyableProperty } from "@data/types/items";
import { getItemCssClass, tooltipCSSClass } from "../../styles";
import { Tooltip } from "../Tooltip";
import { Icon } from "../Icon";

const RelevantProperties: ModifyableProperty[] = [
  "burst",
  "hitpoints",
  "meleeArmor",
  "rangedArmor",
  "meleeResistance",
  "rangedResistance",
  "meleeAttack",
  "rangedAttack",
  "siegeAttack",
  "fireAttack",
  "fireArmor",
  "moveSpeed",
  "attackSpeed",
];

// Note some of these we simply don't support as dynamic yet, such as cost and build time.
const IgnoredProperties: ModifyableProperty[] = [
  "huntGatherRate",
  "foodCost",
  "foodGatherRate",
  "goldCost",
  "goldGatherRate",
  "goldGeneration",
  "stoneCost",
  "stoneGatherRate",
  "woodCost",
  "woodGatherRate",
  "berryGatherRate",
  "farmGatherRate",
  "populationCost",
  "healingRate",
  "repairRate",
  "maxPopulation",
  "buildTime",
  "productionSpeed",
  "researchSpeed",
];

function getTechStatProperty(tech: UnifiedItem<Technology>) {
  const effects = tech.variations.flatMap(v => v.effects);
  const statProperties = [...new Set(effects.map(v => v.property))];
  return statProperties[0];
}

function sortBy<T>(a: T, b: T, ...compares: ((item: T) => any)[]) {
  for (let func of compares) {
    const va = func(a);
    const vb = func(b);
    if (va < vb) return -1;
    if (va > vb) return 1;
  }
  return 0;
}

export const TechnologySelector: Component<{
  item: UnifiedItem<Unit>;
  civ?: civConfig;
  age?: number;
  onChange: (selectedTechnologies: string[]) => void;
}> = (props) => {
  const [technologies] = createResource(() => ({age: props.age, civ: props.civ}), ({age, civ}) => {
    let techs = getItemTechnologies(ITEMS.UNITS, props.item, props.civ);
    techs = techs.filter(v => getTechStatProperty(v) !== "unknown");

    let listedTechs = techs.map(tech => {
      const variations = tech.variations.filter(v => !civ || v.civs.includes(civ.abbr));
      const minAge = Math.min(...variations.map(v => v.age));
      return {
        tech: tech,
        disabled: (age && minAge > age || IgnoredProperties.includes(getTechStatProperty(tech))),
      };
    });
    listedTechs.sort((a, b) => sortBy(a, b, (v) => v.disabled, (v) => -RelevantProperties.includes(getTechStatProperty(v.tech)), (v) => getTechStatProperty(v.tech), (v) => v.tech.minAge));
    return listedTechs;
  });
  const [selected, setSelected] = createSignal<string[]>([]);

  const toggleTechnology = (techId: string) => {
    const newSelected = selected().includes(techId)
      ? selected().filter((id) => id !== techId)
      : [...selected(), techId];
    setSelected(newSelected);
    props.onChange(newSelected);
  };

  const toggleAllTechnologies = () => {
    const allTechIds = technologies()?.filter(t => !t.disabled).map(t => t.tech.id) || [];
    const allSelected = allTechIds.every(id => selected().includes(id));

    const newSelected = allSelected ? [] : allTechIds;
    setSelected(newSelected);
    props.onChange(newSelected);
  };

  return (
    <div class="flex flex-wrap gap-2 mx-4">
      <div
        onClick={toggleAllTechnologies}
        class={`border-2 rounded-md m-1 w-5 h-5 flex items-center justify-center text-xs font-bold bg-gray-500 hover:opacity-90 cursor-pointer`}
        classList={{ "border-green-500": technologies()?.every(t => selected().includes(t.tech.id) || t.disabled), "border-transparent opacity-70": !technologies()?.every(t => selected().includes(t.tech.id) || t.disabled) }}
      >
        <Icon icon={technologies()?.every(t => selected().includes(t.tech.id) || t.disabled) ? "minus" : "plus"} />
      </div>
      <For each={technologies()}>
        {(tech) => {
          let iconEl;
          return (
            <div
              ref={iconEl}
              onClick={() => !tech.disabled && toggleTechnology(tech.tech.id)}
            >
              <ItemIcon item={tech.tech} size={7} class={`border-2 hover:opacity-90 ${tech.disabled ? "!opacity-30" : "cursor-pointer"} ${selected().includes(tech.tech.id) ? "border-green-500" : "border-transparent opacity-70"}`}
               />
              <Tooltip attachTo={iconEl}>
                <div class={tooltipCSSClass}>
                  <div class="text-lg mb-4">
                    <strong>{tech.tech.name}</strong>
                  </div>
                  <p class="my-2 whitespace-pre-wrap">{tech.tech.description}</p>
                </div>
              </Tooltip>
            </div>
          );
        }}
      </For>
    </div>
  );
};
