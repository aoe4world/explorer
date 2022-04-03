import { Link } from "solid-app-router";
import { Component, createResource, For, Show, useTransition } from "solid-js";
import { getItemHref } from "./Cards";
import { CivFlag } from "./CivFlag";
import { TechnologyCard } from "./TechnologyCard";
import { CIVILIZATIONS, ITEMS } from "../config";
import { getCivData } from "../data/civData";
import { getItem } from "../query/fetch";
import { getItemTechnologies } from "../query/utils";
import { getItemCssClass, itemGridCSSClass, mainIntroductionCSSClass, mainItemTitleCSSClass } from "../styles";
import { civAbbr, civConfig, UnifiedItem } from "../types/data";

const Header: Component<{ item: UnifiedItem; civ?: civConfig }> = (props) => {
  const itemCssClass = getItemCssClass(props.item);
  return (
    <div class="flex gap-4 items-center mb-4">
      <div class={`flex-none self-start rounded-md bg-${itemCssClass} h-24 w-24 p-2`}>
        <img src={props.item.icon} />
      </div>
      <div>
        <span class={`text-${itemCssClass}-light`}>{props.item.displayClasses.join(", ")}</span>
        <h2 class={mainItemTitleCSSClass}>{props.item.name}</h2>
        {props.civ && (
          <Link href="../../" class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80">
            <CivFlag abbr={props.civ.abbr} class="h-3 w-4.5 rounded-sm  " />
            {props.civ?.name}
          </Link>
        )}
      </div>
    </div>
  );
};

const CivPicker: Component<{ item: UnifiedItem }> = (props) => {
  return (
    <>
      <h3 class="text-lg text-white font-bold mb-4">
        {props.item.civs.length > 1
          ? `Available for ${props.item.civs.length == Object.keys(CIVILIZATIONS).length ? "all" : props.item.civs.length} civilizations`
          : `Exclusively available to one civialization`}
      </h3>
      <p class="text-sm text-white/80 mb-6 max-w-prose">
        This unit is available for the below civilizations. Click on a civilization to see more detailed information, including specific bonuses and upgrades.
      </p>
      <CivOptionsForItem item={props.item} civs={props.item.civs} />
    </>
  );
};

const ProducedAt: Component<{ item: UnifiedItem; civ: civConfig; title?: string }> = (props) => {
  const [productionBuildings] = createResource(
    () => ({ item: props.item, civ: props.civ?.abbr }),
    async ({ item, civ }) => {
      const producedBy = [...new Set(item.variations.flatMap((v) => v.producedBy))];
      const items = await Promise.all(producedBy.map((b) => getItem(ITEMS.BUILDINGS, b)));
      if (items.length != producedBy.length) console.warn("Some buildings were not found", producedBy, items);
      return (civ ? items.filter((i) => !!i && i.civs.includes(civ)) : items).filter(Boolean).sort((a, b) => b.civs?.length - a.civs?.length);
    }
  );

  return (
    <Show when={productionBuildings()?.length}>
      <h2 class="text-lg text-white font-bold mb-4">{props.title ?? "Produced at"}</h2>
      <div class="flex gap-10 flex-wrap mb-8">
        <For each={productionBuildings()}>
          {(building) => (
            <Link href={`../../buildings/${building.id}`} class="flex flex-row items-center mb-2 group ">
              <div class="flex-none  rounded bg-item-building/80 group-hover:bg-item-building/100 w-10 h-10 p-0.5 mr-2 transition">
                <img src={building.icon} />
              </div>
              <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{building.name}</span>
            </Link>
          )}
        </For>
      </div>
    </Show>
  );
};

function getUnitType(item: UnifiedItem) {
  return item.type === "unit" ? ITEMS.UNITS : item.type === "building" ? ITEMS.BUILDINGS : ITEMS.TECHNOLOGIES;
}

const AvailableUpgrades: Component<{ item: UnifiedItem; civ: civConfig }> = (props) => {
  const [technologies] = createResource(
    () => ({ item: props.item, civ: props.civ }),
    async ({ item, civ }) => item && (await getItemTechnologies(getUnitType(item), item, civ, true))
    //.flatMap((x) => x.variations)
    // We're not really picking up the variations right now
  );
  return (
    <Show when={technologies()}>
      <h2 class="text-xl font-bold text-white mt-6 mb-4">Technology Upgrades</h2>
      <div class={itemGridCSSClass}>
        <For each={technologies()}>{(tech) => <TechnologyCard item={tech} civ={props.civ}></TechnologyCard>}</For>
      </div>
    </Show>
  );
};

const Wrapper: Component<{ civ?: civConfig }> = (props) => {
  const [pending] = useTransition();
  const [civData] = createResource(() => props.civ?.abbr, getCivData);
  return (
    <>
      {" "}
      <div
        class="absolute top-28 w-screen h-screen opacity-20 saturate-0 -z-10 bg-right-top bg-contain bg-no-repeat transition-[background-image] duration-400"
        style={{ "background-image": `url(${civData()?.backdrop})` }}
        classList={{ "opacity-0": pending() }}
      ></div>
      <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 mt-8">{props.children}</div>
    </>
  );
};

const UnavailableForCiv: Component<{ item: UnifiedItem; civ: civConfig }> = (props) => {
  const itemCssClass = getItemCssClass(props.item);
  return (
    <div>
      <div class="flex gap-4 items-center mb-4 mt-4">
        <div class={`flex-none self-start rounded-md bg-${itemCssClass} h-24 w-24 p-2`}>
          <img src={props.item.icon} />
        </div>
        <div>
          <span class={`text-${itemCssClass}-light`}>{props.item.displayClasses}</span>
          <h2 class={mainItemTitleCSSClass}>{props.item.name}</h2>
          <div class="flex">
            <For each={props.item.civs}>
              {(civ) => (
                <Link href={getItemHref(props.item, CIVILIZATIONS[civ])} class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80 mr-3">
                  <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
                </Link>
              )}
            </For>
          </div>
        </div>
      </div>
      <p class={mainIntroductionCSSClass}>
        The {props.item.name} is unique, and not available for <strong>{props.civ.name}</strong>.
      </p>
      <CivOptionsForItem item={props.item} civs={props.item.civs} />
    </div>
  );
};

const CivOptionsForItem: Component<{ item: UnifiedItem; civs: civAbbr[] }> = (props) => (
  <>
    <div class="md:grid-cols-2 grid gap-6 mb-4 mt-2">
      <For each={props.civs}>
        {(civ) => (
          <Link
            href={getItemHref(props.item, CIVILIZATIONS[civ])}
            class="flex gap-2 items-center font-bold text-base  mr-3 bg-gray-900 p-2 rounded-md hover:text-white text-gray-100 hover:bg-black"
          >
            <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
          </Link>
        )}
      </For>
    </div>
  </>
);

// const Fandom: Component<{ query: string }> = (props) => {
//   const [content] = createResource(async () => {
//     const res = await fetch(
//       `https://corsanywhere.herokuapp.com/https://ageofempires.fandom.com/wikia.php?controller=UnifiedSearchSuggestionsController&method=getSuggestions&query=${props.query}&format=json`
//     );
//     const results = await res.json();
//     console.log(results);
//     const bestMatch = Object.entries(results.ids).find(([title, id]) => title.toUpperCase().includes("IV"));
//     return bestMatch?.[0] ?? (Object.keys(results.ids)[0] as string);
//   });

//   return (
//     <a href={`https://ageofempires.fandom.com/wiki/${content()}`} target="_blank">
//       View on Fandom
//     </a>
//   );
// };

export const ItemPage = {
  Wrapper,
  Header,
  ProducedAt,
  UnavailableForCiv,
  AvailableUpgrades,
  CivPicker,
};
