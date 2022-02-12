import { Link, useLocation, useNavigate, useParams } from "solid-app-router";
import { Component, createEffect, createResource, createSignal, For, on, Show, Suspense, useTransition } from "solid-js";
import { RESOURCES } from "../../../assets";
import { setActivePage } from "../../App";
import { CivFlag } from "../../components/CivFlag";
import { ReportButton } from "../../components/ReportButton";
import { StatNumber, StatBar, StatDps, StatCosts } from "../../components/Stats";
import { TechnologyCard } from "../../components/TechnologyCard";
import { Tooltip } from "../../components/Tooltip";
import { UnitCard } from "../../components/UnitCard";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG, ITEMS, SIMILAIR_UNITS } from "../../config";
import { getCivData } from "../../data/civData";
import { getItem, getItems } from "../../query/fetch";
import { getUnitStats } from "../../query/stats";
import { filterItems, getItemTechnologies } from "../../query/utils";
import { itemGridCSSClass, mainIntroductionCSSClass, mainItemTitleCSSClass } from "../../styles";
import { Building, civAbbr, civConfig, UnifiedItem, Unit } from "../../types/data";

export function BuildingDetailRoute() {
  const params = useParams();
  const [pending] = useTransition();
  const [unmatched, setUnmatched] = createSignal(false);
  const navigate = useNavigate();
  const civConfig = () => CIVILIZATION_BY_SLUG[params.slug];

  const [civ] = createResource(
    () => CIVILIZATION_BY_SLUG[params.slug],
    (civ) => civ && getCivData(civ.abbr)
  );

  const [unfilteredItem] = createResource(
    () => params.id,
    (id) => getItem(ITEMS.BUILDINGS, id)
  );

  const [item] = createResource(
    () => [unfilteredItem(), 4, civConfig()] as [UnifiedItem<Building>, number, civAbbr],
    ([id, maxAge, civs]) => unfilteredItem() && filterItems([id], { maxAge, civs })[0]
  );

  createEffect(
    on([unfilteredItem, civ], () => {
      !unfilteredItem.loading &&
        !civ.loading &&
        setActivePage({
          title: unfilteredItem()?.name + (civ()?.name ? ` — ${civ()?.name}` : ""),
          description: unfilteredItem()?.description,
          location: useLocation(),
        });
    })
  );

  createEffect(async () => {
    if (params.id && civConfig() && unfilteredItem()) {
      let closestMatch: UnifiedItem<Building>;
      if (!unfilteredItem().civs.includes(civConfig().abbr)) {
        const similair = SIMILAIR_UNITS.find((units) => units.includes(params.id));
        closestMatch = similair && (await getItems(ITEMS.BUILDINGS, civConfig().abbr)).find((i) => similair.includes(i.id));
        if (closestMatch) navigate(`/civs/${params.slug}/buildings/${closestMatch.id}`);
        else setUnmatched(true);
      } else setUnmatched(false);
    } else setUnmatched(false);
  });

  const [technologies] = createResource(
    () => [params.id, CIVILIZATION_BY_SLUG[params.slug]?.abbr] as [string, civConfig],
    async ([item, civ]) => item && (await getItemTechnologies(ITEMS.BUILDINGS, item, civ, true))
    //.flatMap((x) => x.variations)
    // We're not really picking up the variations right now
  );

  const [units] = createResource(
    () => [params.id, CIVILIZATION_BY_SLUG[params.slug]?.abbr] as [string, civAbbr],
    async ([item, civ]) =>
      item && (await getItems(ITEMS.UNITS, civ)).filter((u) => u.variations.some((v) => (!civ || v.civs.includes(civ)) && v.producedBy.includes(item)))
  );

  const [research] = createResource(
    () => [params.id, CIVILIZATION_BY_SLUG[params.slug]?.abbr] as [string, civAbbr],
    async ([item, civ]) =>
      item && (await getItems(ITEMS.TECHNOLOGIES, civ)).filter((u) => u.variations.some((v) => (!civ || v.civs.includes(civ)) && v.producedBy.includes(item)))
  );

  const [stats] = createResource(
    () => ({ unit: unfilteredItem(), civ: civConfig()?.abbr }),
    (x) => getUnitStats(ITEMS.BUILDINGS, x.unit, x.civ)
  );

  return (
    <>
      <div
        class="absolute top-28 w-screen h-screen opacity-20 saturate-0	-z-10 bg-right-top bg-contain bg-no-repeat transition-[background-image] duration-400"
        style={{ "background-image": `url(${civ()?.backdrop})` }}
        classList={{ "opacity-0": pending() }}
      ></div>
      <div class="max-w-screen-lg p-4 mx-auto gap-4 mb-4 mt-8">
        <Show when={item()}>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="basis-2/3 py-4 shrink-0">
              <div class="flex gap-4 items-center mb-4">
                <div class="flex-none self-start rounded-md bg-item-building h-24 w-24 p-2">
                  <img src={item().icon} />
                </div>
                <div>
                  <span class="text-item-building-light">{item().displayClasses.join(", ")}</span>
                  <h2 class={mainItemTitleCSSClass}>{item()?.name}</h2>
                  {civ() && civConfig() && (
                    <Link href="../../" class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80">
                      <CivFlag abbr={civConfig().abbr} class="h-3 w-4.5 rounded-sm  " />
                      {civ()?.name}
                    </Link>
                  )}
                </div>
              </div>
              <div class={mainIntroductionCSSClass}>{item()?.description}</div>

              {!civConfig() && (
                <>
                  <h3 class="text-lg text-white font-bold mb-4">Civilizations</h3>
                  <p class="text-sm text-white/80 mb-6 max-w-prose">
                    This unit is available for the below civilizations, viewing a unit for a civ shows you more detailed information, including civ specific
                    bonuses and upgrades
                  </p>
                  <ViewForCivs id={item()?.id} civs={item().civs} baseHref="../../" />
                </>
              )}

              <div class="my-8">
                <ReportButton />
              </div>
              <Show when={units()?.length}>
                <h2 class="text-lg text-white font-bold  mt-12 mb-3">Produces</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-2 flex-wrap mb-2">
                  <For each={units()}>
                    {(unit) => {
                      let el;
                      return (
                        <Link href={`../../units/${unit.id}`} class="flex flex-row items-center mb-2 group " ref={el}>
                          <div class="flex-none  rounded bg-item-unit/80 group-hover:bg-item-unit/100 w-10 h-10 p-0.5 mr-2 transition">
                            <img src={unit.icon} />
                          </div>
                          <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{unit.name}</span>
                          <Tooltip attachTo={el}>
                            <div class="max-w-md bg-gray-800 rounded-2xl border border-item-unit">
                              <UnitCard unit={unit} civ={civConfig()} />
                            </div>
                          </Tooltip>
                        </Link>
                      );
                    }}
                  </For>
                </div>
              </Show>
              <Show when={research()?.length}>
                <h2 class="text-lg text-white font-bold mt-12 mb-3">Research</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-2 flex-wrap mb-2">
                  <For each={research()}>
                    {(tech) => {
                      let el;
                      return (
                        <div class="flex flex-row items-center mb-2 group " ref={el}>
                          <div class="flex-none  rounded bg-item-technology/80 group-hover:bg-item-technology/100 w-10 h-10 p-0.5 mr-2 transition">
                            <img src={tech.icon} />
                          </div>
                          <span class="text-xs text-ellipsis font-bold break-words w-full text-left opacity-80 group-hover:opacity-100">{tech.name}</span>
                          <Tooltip attachTo={el}>
                            <div class="max-w-md bg-gray-800 rounded-2xl border border-item-technology">
                              <TechnologyCard item={tech} civ={civConfig()} />
                            </div>
                          </Tooltip>
                        </div>
                      );
                    }}
                  </For>
                </div>
              </Show>
            </div>
            <div class="flex-auto flex flex-col gap-8">
              <div class=" bg-black/70 rounded-2xl p-6 ">
                <StatCosts costs={item()?.variations[0].costs} />
                <Show when={item().variations[0].popcapIncrease}>
                  {(amount) => (
                    <div class="mt-4">
                      <div class="text-white/50 uppercase text-xs font-bold tracking-widest">Effects</div>
                      <p>Increases max population by {amount}</p>
                    </div>
                  )}
                </Show>
                <Show when={item().variations[0].garrison}>
                  {(g) => (
                    <div class="mt-4">
                      <div class="text-white/50 uppercase text-xs font-bold tracking-widest">Garrison</div>
                      <p>Can garrison up to {g.capacity} units</p>
                    </div>
                  )}
                </Show>
              </div>
              <Show when={stats()}>
                {(stats) => (
                  <>
                    {" "}
                    <div class="flex flex-col gap-5 bg-black/70 rounded-2xl p-6 ">
                      <StatBar label="Hitpoints" icon="heart" stat={stats.hitpoints} max={1000} />
                      <StatBar label="Siege Attack" icon="meteor" stat={stats.siegeAttack} max={500} />
                      <StatBar label="Melee Attack" icon="swords" stat={stats.meleeAttack} max={50} />
                      <StatBar label="Ranged Attack" icon="bow-arrow" stat={stats.rangedAttack} max={50} />
                      <StatBar label="Fire Armor" icon="block-brick-fire" stat={stats.fireArmor} max={20} displayAlways={true} />
                      <StatBar label="Ranged Armor" icon="bullseye-arrow" stat={stats.rangedArmor} max={60} displayAlways={true} />
                    </div>
                    <div class="flex gap-5 flex-wrap bg-black/70 rounded-2xl p-6 ">
                      {stats.attackSpeed && (
                        <div class="w-full">
                          <StatDps label="Damage" speed={stats.attackSpeed} attacks={[stats.rangedAttack, stats.meleeAttack, stats.siegeAttack]}></StatDps>
                        </div>
                      )}
                      <StatNumber label="Move Speed" stat={stats.moveSpeed} unitLabel="T/S"></StatNumber>
                      <StatNumber label="Attack Speed" stat={stats.attackSpeed} unitLabel="S"></StatNumber>
                      <StatNumber label="Min Range" stat={stats.minRange} unitLabel="TILES"></StatNumber>
                      <StatNumber label="Range" stat={stats.maxRange} unitLabel="TILES"></StatNumber>
                      <StatNumber
                        label="Line of Sight"
                        stat={stats.lineOfSight}
                        unitLabel="TILES"
                        helper="Maximum line of sight for a unit, only reached when on elevation"
                      ></StatNumber>
                    </div>
                  </>
                )}
              </Show>
            </div>
          </div>

          <Show when={technologies()}>
            <h2 class="text-xl font-bold text-white mt-6 mb-4">Technology Upgrades</h2>
            <div class={itemGridCSSClass}>
              <For each={technologies()}>{(tech) => <TechnologyCard item={tech}></TechnologyCard>}</For>
            </div>
          </Show>
        </Show>
        <Show when={unmatched()}>
          <div class="flex gap-4 items-center mb-4 mt-4">
            <div class="flex-none self-start rounded-md bg-item-unit h-24 w-24 p-2">
              <img src={unfilteredItem().icon} />
            </div>
            <div>
              <span class="text-item-unit-light">{unfilteredItem().classes.join(", ")}</span>
              <h2 class={mainItemTitleCSSClass}>{unfilteredItem()?.name}</h2>
              <div class="flex">
                <For each={unfilteredItem().civs}>
                  {(civ) => (
                    <Link
                      href={`../../../civs/${CIVILIZATIONS[civ].slug}/units/${unfilteredItem().id}`}
                      class="flex gap-2 mt-2 items-center font-bold text-sm text-white/80 mr-3"
                    >
                      <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
                    </Link>
                  )}
                </For>
              </div>
            </div>
          </div>
          <p class={mainIntroductionCSSClass}>
            The {unfilteredItem().name} is an unique unit, and not available for <strong>{civ()?.name}</strong>.
          </p>

          <ViewForCivs id={unfilteredItem().id} civs={unfilteredItem().civs} baseHref="../../../../" />
        </Show>
        <Show when={unfilteredItem.error}>
          <div class="text-red-600">Error!</div>
        </Show>
      </div>
    </>
  );
}

const ViewForCivs: Component<{ id: string; civs: civAbbr[]; baseHref: string }> = (props) => (
  <>
    <div class="md:grid-cols-2 grid gap-6 mb-4 mt-2">
      <For each={props.civs}>
        {(civ) => (
          <Link
            href={`${props.baseHref}civs/${CIVILIZATIONS[civ].slug}/buildings/${props.id}`}
            class="flex gap-2 items-center font-bold text-base  mr-3 bg-gray-900 p-2 rounded-md hover:text-white text-gray-100 hover:bg-black"
          >
            <CivFlag abbr={civ} class="h-3 w-4.5 rounded-sm " /> {CIVILIZATIONS[civ].name}
          </Link>
        )}
      </For>
    </div>
  </>
);
