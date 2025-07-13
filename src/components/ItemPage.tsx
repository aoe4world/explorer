import { Link } from "@solidjs/router";
import { Component, createResource, For, Match, ParentComponent, Show, Switch, useTransition } from "solid-js";
import { getItemHref } from "./Cards";
import { CivFlag } from "./CivFlag";
import { TechnologyCard } from "./TechnologyCard";
import { CIVILIZATIONS, ITEMS, PRETTY_AGE_MAP, PRETTY_AGE_MAP_SHORT } from "../config";
import { getItemTechnologies } from "../query/utils";
import { getItemCssClass, itemGridCSSClass, mainIntroductionCSSClass, mainItemTitleCSSClass } from "../styles";
import { civAbbr, civConfig, UnifiedItem } from "../types/data";
import { Icon } from "./Icon";
import { civBackdrops } from "../data/civData";
import { ItemIcon } from "./ItemIcon";
import { CivConfig, CivInfo } from "@data/types/civs";
import dlcFlag from "../../assets/dlc-flag.png";

const Header: Component<{ item: UnifiedItem; civ?: civConfig }> = (props) => {
  const itemCssClass = getItemCssClass(props.item);
  return (
    <div class="flex gap-4 items-center mb-4">
      <ItemIcon item={props.item} size={24} />
      <div>
        <span class={`text-${itemCssClass}-light`}>{props.item.displayClasses.join(", ")}</span>
        <h2 class={mainItemTitleCSSClass}>{props.item.name}</h2>
        {props.civ && (
          <Link href={`/civs/${props.civ.slug}`} class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80">
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
      const producedBy = [...new Set(item.variations.filter((v) => !civ || v.civs.includes(civ)).flatMap((v) => v.producedBy))];
      const items = await Promise.all(producedBy.map(async (b) => (await import("@data/sdk")).buildings.get(b)));
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
            <Link href={`${props.civ ? `/civs/${props.civ.slug}` : ""}/buildings/${building.id}`} class="flex flex-row items-center mb-2 group">
              <ItemIcon item={building} link={true} size={10} class="mr-2" />
              <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{building.name}</span>
            </Link>
          )}
        </For>
      </div>
    </Show>
  );
};

function getItemType(item: UnifiedItem) {
  return item.type === "unit" ? ITEMS.UNITS : item.type === "building" ? ITEMS.BUILDINGS : ITEMS.TECHNOLOGIES;
}

const AvailableUpgrades: Component<{ item: UnifiedItem; civ: civConfig }> = (props) => {
  const [technologies] = createResource(
    () => ({ item: props.item, civ: props.civ }),
    async ({ item, civ }) => item && getItemTechnologies(getItemType(item), item, civ, true)
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

const Wrapper: ParentComponent<{ civ?: civConfig }> = (props) => {
  const [pending] = useTransition();
  return (
    <>
      {/* <div
        class="fixed top-10 left-0 right-0 h-screen opacity-20 saturate-0 -z-10 bg-right-top bg-contain bg-no-repeat transition-[background-image] duration-400"
        style={{ "background-image": `url(${civBackdrops[props.civ?.abbr]})` }}
        classList={{ "opacity-0": pending() }}
      ></div> */}
      <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 mt-8">
        {props.children}
        <div
          class="fixed top-10 w-screen h-screen opacity-20 saturate-0	-z-10 bg-top bg-cover bg-no-repeat transition-all duration-400"
          style={{ "background-image": `url(${civBackdrops[props.civ?.abbr]})`, opacity: pending() ? "0" : "0.4" }}
        >
          <div class="bg-gradient-to-r from-gray-800 to-transparent w-full h-full"></div>
        </div>
      </div>
    </>
  );
};

const UnavailableForCiv: Component<{ item: UnifiedItem; civ: civConfig }> = (props) => {
  const itemCssClass = getItemCssClass(props.item);
  return (
    <div>
      <div class="flex gap-4 items-center mb-4 mt-4">
        <ItemIcon item={props.item} size={24} />
        <div>
          <span class={`text-${itemCssClass}-light`}>{props.item.displayClasses}</span>
          <h2 class={mainItemTitleCSSClass}>{props.item.name}</h2>
          <div class="flex">
            <For each={props.item.civs}>
              {(civ) => (
                <Link href={getItemHref(props.item, CIVILIZATIONS[civ] as unknown as civConfig)} class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80 mr-3">
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

      <CivOptionsForItem item={props.item} civs={props.item.civs} prefix="Show for">
        <Link
          href={["/civs", props.civ.slug, getItemType(props.item)].join("/")}
          class="flex gap-2 items-center font-bold text-base  mr-3 bg-gray-900 p-2 rounded-md hover:text-white text-gray-100 hover:bg-black"
        >
          <CivFlag abbr={props.civ.abbr} class="h-3 w-4.5 rounded-sm " />
          {props.civ.name}'s {getItemType(props.item)}
          <Icon icon="arrow-right" class="ml-auto mr-2" />
        </Link>
      </CivOptionsForItem>
    </div>
  );
};

const CivOptionsForItem: ParentComponent<{ item: UnifiedItem; civs: civAbbr[]; prefix?: string }> = (props) => (
  <>
    <div class="md:grid-cols-2 grid gap-6 mb-4 mt-2">
      {props.children}
      <For each={props.civs}>
        {(civ) => (
          <Link
            href={getItemHref(props.item, CIVILIZATIONS[civ] as unknown as civConfig)}
            class="flex gap-2 items-center font-bold text-base  mr-3 bg-gray-900 p-2 rounded-md hover:text-white text-gray-100 hover:bg-black"
          >
            <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {props.prefix} {CIVILIZATIONS[civ].name}
            <Icon icon="arrow-right" class="ml-auto mr-2" />
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

const AgeTabs: Component<{ age: () => number; setAge: (age: number) => void; minAge?: number }> = (props) => (
  <div class="flex w-full gap-px rounded-t-2xl overflow-hidden">
    {[1, 2, 3, 4].map((a) => (
      <button
        onClick={() => props.setAge(a)}
        class={`basis-1/4 p-2  ${
          props.minAge && a >= props.minAge
            ? props.age() == a
              ? "cursor-default text-white"
              : "bg-gray-400/30 hover:bg-gray-500/50 text-gray-100"
            : "bg-gray-400/30 text-gray-400"
        }`}
        disabled={props.minAge && a < props.minAge}
      >
        {PRETTY_AGE_MAP_SHORT[a]}
      </button>
    ))}
  </div>
);

const ExpansionInfo: Component<{ civ: CivConfig }> = (props) => (
  <>
    <Show when={props.civ?.expansion.includes("sultans-ascend")}>
      <div class="bg-purple-700/20 p-1 flex items-center gap-2 rounded-xl mb-8">
        <img src={dlcFlag} class="w-6 ml-3 -my-2" />
        <div class="p-2">
          <p>
            {props.civ.name} is part of the <strong>Sultans Ascend</strong> expansion
          </p>
          <p class="text-sm opacity-90 mt-1">
            <span>Get it on</span>
            <a
              href="https://store.steampowered.com/app/1959430?utm_source=aoe4world"
              target="_blank"
              data-anal-event="buy_dlc_steam"
              class="whitespace-nowrap font-bold inline-flex items-center mx-1 hover:underline"
            >
              <i class="fab fa-steam mx-1"></i> Steam
            </a>
            <a
              href="https://www.xbox.com/en-us/games/store/age-of-empires-iv-the-sultans-ascend/9mvghsscmnsg"
              data-anal-event="buy_dlc_xbox"
              class="whitespace-nowrap font-bold inline-flex items-center mx-1 hover:underline"
            >
              <i class="fab fa-xbox mx-1 "></i> Xbox
            </a>
            <a
              href="https://www.microsoft.com/store/productid/9NQMNQDS4QQL"
              data-anal-event="buy_dlc_ms"
              class="whitespace-nowrap font-bold inline-flex items-center mx-1 hover:underline"
            >
              <i class="fab fa-microsoft mx-1"></i> MS Store
            </a>
          </p>
        </div>
      </div>
    </Show>
    <Show when={props.civ?.expansion.includes("knights-of-cross-and-rose")}>
      <div class="bg-purple-700/20 p-1 flex items-center gap-2 rounded-xl mb-8">
        <img src={dlcFlag} class="w-6 ml-3 -my-2" />
        <div class="p-2">
          <p>
            {props.civ.name} is part of the <strong>Knights of Cross and Rose</strong> expansion
          </p>
          <p class="text-sm opacity-90 mt-1">
            <span>Get it on</span>
            <a
              href="https://store.steampowered.com/app/3144890?utm_source=aoe4world"
              target="_blank"
              data-anal-event="buy_dlc_steam"
              class="whitespace-nowrap font-bold inline-flex items-center mx-1 hover:underline"
            >
              <i class="fab fa-steam mx-1"></i> Steam
            </a>
            <a
              href="https://www.xbox.com/en-us/games/store/age-of-empires-iv-knights-of-cross-and-rose/9p2gds0547jz"
              data-anal-event="buy_dlc_xbox"
              class="whitespace-nowrap font-bold inline-flex items-center mx-1 hover:underline"
            >
              <i class="fab fa-xbox mx-1 "></i> Xbox
            </a>
            <a
              href="https://www.microsoft.com/store/productid/9p20k049mht5"
              data-anal-event="buy_dlc_ms"
              class="whitespace-nowrap font-bold inline-flex items-center mx-1 hover:underline"
            >
              <i class="fab fa-microsoft mx-1"></i> MS Store
            </a>
          </p>
        </div>
      </div>
    </Show>
  </>
);

export const ItemPage = {
  Wrapper,
  Header,
  ProducedAt,
  UnavailableForCiv,
  AvailableUpgrades,
  CivPicker,
  AgeTabs,
  ExpansionInfo,
};
