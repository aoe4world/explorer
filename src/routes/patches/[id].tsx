import { Link, useLocation, useParams } from "@solidjs/router";
import { Component, createMemo, onMount, createResource, createSignal, For, Index, Resource, createEffect, Show, onCleanup } from "solid-js";
import { setActivePage } from "../../App";
import { getItemHref } from "@components/Cards";
import { CivFlag } from "@components/CivFlag";
import { Icon } from "@components/Icon";
import { ItemIcon } from "@components/ItemIcon";
import { scrollIntoViewIfNeeded, TableOfContents, useTableOfContents } from "@components/TableOfContents";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG } from "../../config";
import { capitlize, getItemByCanonicalName, sortPatchDiff } from "../../query/utils";
import { getItemCssClass, mainIntroductionCSSClass } from "../../styles";
import { civAbbr, Item, UnifiedItem } from "../../types/data";
import { PatchLine, PatchSection, PatchSet } from "../../types/patches";
import { setHideNav } from "../../global";
import { ItemGroup, ItemSlug } from "@data/sdk/utils";

export const PatchDetailRoute = () => {
  setHideNav(true);
  onCleanup(() => setHideNav(false));
  const params = useParams();
  const [patch] = createResource(async () => (await import("../../data/patches/patch")).patches.find((patch) => patch.id === params.id));
  const [civ, setCiv] = createSignal<civAbbr>(CIVILIZATION_BY_SLUG[params.civ]?.abbr);
  const [items] = createResource(patch, async (patch) => {
    const SDK = await import("@data/sdk/index");
    const items = patch.sections.flatMap((s) => s.changes).flatMap((c) => c.items.map((ci) => [ci, SDK.Get(ci as ItemSlug)] as [string, ItemGroup<Item>]));
    return new Map(items);
  });

  const [filteredPatchNotes] = createResource(
    () => ({ patch: patch(), items: items(), civ: civ() }),
    ({ patch, items, civ }) => {
      if (!patch || !items) return [];
      if (!civ) return patch?.sections;

      return patch?.sections?.reduce((sections, s) => {
        const changes = s.changes.reduce((chs, c) => {
          if (c.civs.length ? c.civs.includes(civ) : !c.items.length || c.items.some((i) => items.get(i)?.civs.includes(civ))) {
            const filterdChange: PatchSet = { ...c };
            filterdChange.items = c.items.filter((i) => !i || items.get(i)?.civs.includes(civ));
            filterdChange.diff = filterdChange.diff.filter(([t, d, c]) => !c?.length || c.includes(civ));
            chs.push(filterdChange);
          }
          return chs;
        }, [] as PatchSet[]);
        if ((!s.civs?.length || (s.civs && s.civs.includes(civ))) && changes.length) sections.push({ ...s, changes });
        return sections;
      }, [] as PatchSection[]);
    }
  );

  const [pagination] = createResource(params.id, async (id) => {
    const { patches } = await import("../../data/patches/patch");
    const i = patches.findIndex((p) => p.id === id);
    return { previous: patches[i - 1], next: patches[i + 1] };
  });

  createEffect(
    () =>
      patch() &&
      setActivePage({
        title: `${patch()?.name} ${civ() ? `– ${CIVILIZATIONS[civ()]?.name}` : ""}`,
        description: patch()?.introduction,
        location: useLocation(),
      })
  );

  return (
    <TableOfContents.Provider>
      <div class="max-w-screen-lg p-4 mx-auto mt-12">
        <div class="mb-6 text-gray-300 space-x-4">
          <Show when={pagination()?.previous}>
            {(prev) => (
              <Link href={`/patches/${prev().id}`} class="hover:text-white">
                <Icon icon="arrow-left-long" class="mr-1"></Icon> {prev().name}
              </Link>
            )}
          </Show>
          <Link href={"/patches/"} class="hover:text-white">
            All
          </Link>
          <Show when={pagination()?.next}>
            {(next) => (
              <Link href={`/patches/${next().id}`} class="hover:text-white">
                {next().name} <Icon icon="arrow-right-long" class="ml-1"></Icon>
              </Link>
            )}
          </Show>
        </div>
        <h1 class="text-3xl font-bold">
          {patch()?.name} {civ() && `– ${CIVILIZATIONS[civ()]?.name}`}
        </h1>
        <div class="text-gray-300 mt-1">
          {patch()?.date.toLocaleDateString("en-US", { dateStyle: "full" })} {patch()?.buildId && <span class="ml-2">#{patch().buildId}</span>}
          <span class="ml-2">
            Season {patch()?.season} {patch()?.type}
          </span>
        </div>
        <div class={mainIntroductionCSSClass}>
          <DirtSimpleMd md={patch()?.introduction} />
        </div>

        {patch()?.officialUrl && (
          <a
            href={patch()?.officialUrl}
            class="mb-8 inline-block text-gray-300 font-bold text-sm bg-gray-600 rounded px-3 py-2 hover:bg-gray-500 hover:text-gray-50 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read full release notes <Icon icon="external-link-alt" class="ml-1" />
          </a>
        )}
        {patch()?.html}
      </div>
      <div class="max-w-screen-lg p-4 mx-auto mb-4 mt-0 flex">
        <div class="mx-2 sm:mx-6 flex-auto ">
          <div class="mb-8">
            <div class="text-sm font-bold">Filter updates by civilization</div>
            <div class="flex flex-wrap gap-2 my-2">
              <Link
                href={`/patches/${params.id}`}
                onClick={() => setCiv(null)}
                class={`w-10 h-6 rounded grid place-content-center bg-gray-400 uppercase text-sm text-white hover:text-gray-50 ${
                  !civ() ? "outline outline-white" : ""
                }`}
              >
                All
              </Link>
              <For each={Object.values(CIVILIZATIONS)}>
                {(c) => (
                  <Link href={`${civ() ? `/civs/${c.slug}` : ""}/patches/${params.id}`} onClick={() => setCiv(c.abbr)}>
                    <CivFlag abbr={c.abbr} class={`w-10 h-5.5 rounded  ${civ() == c.abbr ? "outline outline-white" : ""}`} />
                  </Link>
                )}
              </For>
            </div>
            <div class="text-sm text-gray-200 my-4">Click on different units or technologies to learn more about them.</div>
          </div>

          <For each={filteredPatchNotes()}>{(section) => <Section section={section} items={items()} civ={civ()} />}</For>
        </div>
        <div class="hidden lg:block sticky basis-72 -order-1 top-24 max-h-screen overflow-y-auto pb-24 self-start align-self-start bottom-48">
          {civ() && (
            <div class="my-5 rounded-lg p-4 bg-gray-500  gap-2">
              <p class="text-gray-100 text-sm">
                Showing notes for the <CivFlag abbr={civ()} class="w-7 h-4 ml-1 inline-block" /> {CIVILIZATIONS[civ()]?.name}. Other patch notes are hidden.
              </p>
              <Link
                href={`/patches/${params.id}`}
                onClick={() => setCiv(null)}
                class="rounded basis-full grid place-content-center uppercase p-1 mt-3 bg-gray-400 text-[12px] text-white hover:text-gray-50"
              >
                View the full notes
              </Link>
            </div>
          )}

          <Sidebar />
        </div>
      </div>
    </TableOfContents.Provider>
  );
};

const Section: Component<{ section: PatchSection; items: Map<string, UnifiedItem>; civ: civAbbr }> = (props) => {
  return (
    <div class="mb-10 max-w-prose scroll-mt-24">
      { props.section.title && <TableOfContents.Anchor label={props.section.title} level={1} /> }
      { props.section.subtitle && <TableOfContents.Anchor label={props.section.subtitle} level={2} /> }

      {props.section.title && <h2 class="text-4xl font-bold mb-4 mt-20  border-b pb-3 border-white/20">{props.section.title}</h2>}
      {props.section.subtitle && <h3 class="text-2xl font-bold mb-4 border-b pb-3 border-white/20">{props.section.subtitle}</h3>}
      {props.section.description && <p class="leading-6 text-white/80 my-8 max-w-prose whitespace-pre-wrap">{props.section.description}</p>}
      {props.section.md && <DirtSimpleMd md={props.section.md} />}
      <For each={props.section.changes}>
        {(c) => (
          <div class="mb-8">
            {(c.items.length || c.title) && (
              <div class="flex flex-wrap gap-x-4 gap-y-2 my-3">
                {c.title && <h4 class="font-bold w-full flex-none">{c.title}</h4>}
                <For each={c.items}>
                  {(ci) => {
                    const item = props.items?.get(ci);
                    if (item && props.civ && !item.civs.includes(props.civ)) return null;
                    if (item) {
                      const itemCssClass = getItemCssClass(item);
                      return (
                        <Link
                          href={(item.type as any) == "map" ? `https://aoe4world.com/stats/maps/${item.name}` : getItemHref(item)}
                          class="inline-flex flex-row items-center"
                        >
                          <div class={`flex-none rounded bg-${itemCssClass} w-8 h-8 p-0.5 mr-2`}>
                            <ItemIcon url={item.icon} />
                          </div>
                          <span class="font-bold">{item.name}</span>
                        </Link>
                      );
                    }
                    const unmapped = ci.split("/");
                    console.warn(`Item not found: ${unmapped[1]} in ${unmapped[0]}`);
                    return <span class="font-bold">{capitlize(unmapped[1])}</span>;
                  }}
                </For>
              </div>
            )}
            <DiffList diff={c.diff.sort(sortPatchDiff)} />
            <DevNote note={c.note} />
          </div>
        )}
      </For>
    </div>
  );
};

const DevNote: Component<{ note: string }> = (props) => {
  return (
    props.note && (
      <div class="my-5 rounded-lg p-4 bg-gray-500">
        <h5 class="font-bold text-gray-300 uppercase text-sm mb-1">Developer note</h5>
        <p class="text-gray-100">"{props.note}"</p>
      </div>
    )
  );
};
const DiffList: Component<{ diff: PatchLine[] }> = (props) => (
  <ul>
    <For each={props.diff}>
      {([type, change]) => (
        <li class="flex py-1 ml-2">
          <div class="text-xs mr-3 mt-1 ">
            {type == "buff" && <Icon icon="circle-plus" class="text-green-700" />}
            {type == "nerf" && <Icon icon="circle-minus" class="text-red-700" />}
            {type == "fix" && <Icon icon="circle-check" class="text-gray-300" />}
          </div>
          <p class="text-gray-100 text-base">{change}</p>
        </li>
      )}
    </For>
  </ul>
);

const Sidebar = () => {
  const { headings } = useTableOfContents();

  return (
    <div class="">
      <span class="font-semibold text-gray-400">Jump to</span>
      <For each={headings()}>
        {(s, i) => (
          <a
            href={`#${s.id}`}
            target="_self"
            onClick={(e) => scrollIntoViewIfNeeded(e, s.id)}
            class={`block my-1 text-gray-200 hover:text-gray-50 ${s.level > 1 ? "pl-4" : "font-bold mt-3"}`}
          >
            {s.label}
          </a>
        )}
      </For>
    </div>
  );
};

const DirtSimpleMd: Component<{ md: string }> = (props) => {
  return (
    <div class="mb-8">
      {...(props.md ?? "").split("\n").map((line) => {
        const l = line.trim();
        if (l.startsWith("###")) return <h5 class="text-md font-bold mb-2 mt-4">{l.slice(4)}</h5>;
        if (l.startsWith("##")) return <h4 class="text-lg font-bold mb-2 mt-4">{l.slice(3)}</h4>;
        if (l.startsWith("#")) return <h3 class="text-xl text-white font-bold  mb-2 mt-4">{l.slice(2)}</h3>;
        if (l.startsWith("> ")) return <DevNote note={l.slice(2)} />;
        if (l.startsWith("![") && l.endsWith(")")) {
          const [_, alt, url] = l.match(/!\[(.*)\]\((.*)\)/);
          return <img src={url} alt={alt} class="max-w-full my-8 rounded-md" />;
        }
        if (l.startsWith("[") && l.includes("](") && l.endsWith(")")) {
          const [_, label, url] = l.match(/\[(.*)\]\((.*)\)/);
          return (
            <a href={url} class="bg-white my-2 inline-block font-bold text-black rounded-full px-4 py-2 hover:bg-white/70" target="_blank">
              {label}
            </a>
          );
        }
        if (line.startsWith("    * ") || line.startsWith("    - "))
          return (
            <p class="text-gray-100 pl-12 mb-1 text-base before:content-['●'] before:text-gray-400 before:-ml-4 before:text-xs before:inline-block before:w-6 leading-normal ">
              {line.slice(6)}
            </p>
          );
        if (l.startsWith("* ") || l.startsWith("- "))
          return (
            <p class="text-gray-100 pl-8 mb-2 text-base before:content-['●'] before:text-gray-400 before:text-xs before:-ml-6 before:inline-block before:w-6 leading-normal">
              {l.slice(2)}
            </p>
          );

        return <p class="text-gray-100 text-base my-2">{l}</p>;
      })}
    </div>
  );
};
