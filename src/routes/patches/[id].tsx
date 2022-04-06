import { Link, useLocation, useParams } from "solid-app-router";
import { Component, createMemo, createResource, createSignal, For, Index, Resource } from "solid-js";
import { setActivePage } from "../../App";
import { getItemHref } from "../../components/Cards";
import { CivFlag } from "../../components/CivFlag";
import { Icon } from "../../components/Icon";
import { scrollIntoViewIfNeeded, TableOfContentsProvider, useTableOfContents } from "../../components/TableOfContents";
import { CIVILIZATIONS, CIVILIZATION_BY_SLUG } from "../../config";
import { fetchItem, getPatch, sortPatchDiff } from "../../query/fetch";
import { capitlize, getItemByCanonicalName } from "../../query/utils";
import { getItemCssClass, mainIntroductionCSSClass } from "../../styles";
import { civAbbr, Item, UnifiedItem } from "../../types/data";
import { PatchLine, PatchSection, PatchSet } from "../../types/patches";

export const PatchDetailRoute = () => {
  const params = useParams();
  const [patch] = createResource(params.id, getPatch);
  const [civ, setCiv] = createSignal<civAbbr>(CIVILIZATION_BY_SLUG[params.civ]?.abbr);
  const [items] = createResource(patch, async (patch) => {
    const items = patch.sections
      .flatMap((s) => s.changes)
      .flatMap((c) => c.items.map((ci) => [ci, getItemByCanonicalName(ci)] as [string, Promise<UnifiedItem>]));
    const awaitedItems = await Promise.all(items.map(([ci, item]) => item));
    return new Map(awaitedItems.map((item, i) => [items[i][0], item]));
  });

  const [filteredPatchNotes] = createResource(
    () => ({ patch: patch(), items: items(), civ: civ() }),
    ({ patch, items, civ }) => {
      if (!patch || !items) return [];
      if (!civ) return patch?.sections;

      return patch?.sections?.reduce((sections, s) => {
        const changes = s.changes.reduce((chs, c) => {
          if (c.civs.length ? c.civs.includes(civ) : c.items.some((i) => items.get(i)?.civs.includes(civ))) {
            const filterdChange: PatchSet = { ...c };
            filterdChange.items = c.items.filter((i) => items.get(i)?.civs.includes(civ));
            filterdChange.diff = filterdChange.diff.filter(([t, d, c]) => !c || c.includes(civ));
            chs.push(filterdChange);
          }
          return chs;
        }, [] as PatchSet[]);
        console.log(changes.length, s.title);
        if ((!s.civs?.length || (s.civs && s.civs.includes(civ))) && changes.length) sections.push({ ...s, changes });
        return sections;
      }, [] as PatchSection[]);
    }
  );

  setActivePage({ title: "Update 1", description: "About the AoE4 Explorer", location: useLocation() });

  return (
    <TableOfContentsProvider>
      <div class="max-w-screen-lg p-4 mx-auto  mt-12">
        <h1 class="text-3xl font-bold">{patch()?.name}</h1>
        <div class={mainIntroductionCSSClass}>{patch()?.summary}</div>
        {patch()?.html}
      </div>
      <div class="max-w-screen-lg p-4 mx-auto mb-4 mt-0 flex">
        <div class="mx-2 sm:mx-6 flex-auto ">
          <div class="mb-8">
            <div class="text-sm font-bold">Filter updates by civilization</div>
            <div class="flex flex-wrap gap-2 my-2">
              <Link
                href={`../../../../patches/${params.id}`}
                onClick={() => setCiv(null)}
                class={`w-10 h-6 rounded grid place-content-center bg-gray-400 uppercase text-sm text-white hover:text-gray-50 ${
                  !civ() ? "outline outline-white" : ""
                }`}
              >
                All
              </Link>
              <For each={Object.values(CIVILIZATIONS)}>
                {(c) => (
                  <Link href={`../../../../civs/${c.slug}/patches/${params.id}`} onClick={() => setCiv(c.abbr)}>
                    <CivFlag abbr={c.abbr} class={`w-10 h-5.5 rounded  ${civ() == c.abbr ? "outline outline-white" : ""}`} />
                  </Link>
                )}
              </For>
            </div>
            <div class="text-sm text-gray-200 my-4">
              Click on different units or technologies to learn more about them.
              <br /> Note: The stats on units will update to reflect the change in this list once the game is released.
            </div>
          </div>

          <For each={filteredPatchNotes()}>{(section) => <Section section={section} items={items()} civ={civ()} />}</For>
        </div>
        <div class="hidden lg:block sticky basis-72 -order-1 top-24 max-h-screen overflow-y-auto pb-24 self-start align-self-start bottom-48">
          <Sidebar />
        </div>
      </div>
    </TableOfContentsProvider>
  );
};

const Section: Component<{ section: PatchSection; items: Map<string, UnifiedItem>; civ: civAbbr }> = (props) => {
  const id = useTableOfContents().createHeadingId(props.section.title ?? props.section.subtitle, props.section.subtitle ? 2 : 1);

  return (
    <div class="mb-10 max-w-prose scroll-mt-24" id={id}>
      {props.section.title && <h2 class="text-4xl font-bold mb-4 mt-20  border-b pb-3 border-white/20">{props.section.title}</h2>}
      {props.section.subtitle && <h2 class="text-xl font-bold mb-4">{props.section.subtitle}</h2>}
      <For each={props.section.changes}>
        {(c) => (
          <div class="mb-8">
            {c.items.length && (
              <div class="flex flex-wrap gap-x-4 gap-y-2 my-3">
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
                            <img src={item.icon} />
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
          </div>
        )}
      </For>
    </div>
  );
};

const DiffList: Component<{ diff: PatchLine[] }> = (props) => (
  <For each={props.diff}>
    {([type, change]) => (
      <div class="flex py-1 ml-2">
        <div class="text-xs mr-3 mt-1">
          {type == "buff" && <Icon icon="circle-plus" class="text-green-700" />}
          {type == "nerf" && <Icon icon="circle-minus" class="text-red-700" />}
          {type == "fix" && <Icon icon="circle-check" class="text-gray-300" />}
        </div>
        <p class="text-gray-100 text-base">{change}</p>
      </div>
    )}
  </For>
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
