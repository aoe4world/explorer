import { Link, useLocation, useParams } from "solid-app-router";
import { Component, createMemo, createResource, createSignal, For, Index } from "solid-js";
import { setActivePage } from "../../App";
import { getItemHref } from "../../components/Cards";
import { CivFlag } from "../../components/CivFlag";
import { Icon } from "../../components/Icon";
import { CIVILIZATIONS } from "../../config";
import { fetchItem, getPatch, sortPatchDiff } from "../../query/fetch";
import { getItemByCanonicalName } from "../../query/utils";
import { getItemCssClass } from "../../styles";
import { civAbbr, UnifiedItem } from "../../types/data";
import { PatchSection, PatchSet } from "../../types/patches";

export const PatchDetailRoute = () => {
  const [patch] = createResource(useParams().id, getPatch);
  const [civ, setCiv] = createSignal<civAbbr>(null);
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
    <div class="max-w-screen-lg p-4 mx-auto mb-4 mt-12">
      <div class="mx-2 sm:mx-6">
        <h1 class="text-3xl font-bold">{patch()?.name}</h1>
        <div class="text-gray-600">{patch()?.summary}</div>

        <div class="mb-8">
          <div class="text-sm font-bold">Filter updates by civilization</div>
          <div class="flex flex-wrap gap-2 my-2">
            <button
              onClick={() => setCiv(null)}
              class={`w-10 h-6 rounded grid place-content-center bg-gray-400 uppercase text-sm text-white hover:text-gray-50 ${
                !civ() ? "outline outline-white" : ""
              }`}
            >
              All
            </button>
            <For each={Object.values(CIVILIZATIONS)}>
              {(c) => (
                <button onClick={() => setCiv(c.abbr)}>
                  <CivFlag abbr={c.abbr} class={`w-10 h-5.5 rounded  ${civ() == c.abbr ? "outline outline-white" : ""}`} />
                </button>
              )}
            </For>
          </div>
        </div>

        <For each={filteredPatchNotes()}>
          {(section) => (
            <div class="mb-10 max-w-prose">
              {section.title && <h2 class="text-4xl font-bold mb-4 mt-20  border-b pb-3 border-white/20">{section.title}</h2>}
              {section.subtitle && <h2 class="text-xl font-bold mb-4">{section.subtitle}</h2>}
              <For each={section.changes}>
                {(c) => (
                  <div class="mb-8">
                    {c.items.length && (
                      <div class="flex flex-wrap gap-x-4 gap-y-2 my-3">
                        <For each={c.items}>
                          {(ci) => {
                            const item = items()?.get(ci);
                            if (item && civ() && !item.civs.includes(civ())) return null;
                            if (item) {
                              const itemCssClass = getItemCssClass(item);
                              return (
                                <Link href={getItemHref(item)} class="inline-flex flex-row items-center">
                                  <div class={`flex-none rounded bg-${itemCssClass} w-8 h-8 p-0.5 mr-2`}>
                                    <img src={item.icon} />
                                  </div>
                                  <span class="font-bold">{item.name}</span>
                                </Link>
                              );
                            }
                            const unmapped = ci.split("/");
                            console.warn(`Item not found: ${unmapped[1]} in ${unmapped[0]}`);
                            return <span class="font-bold">{unmapped[1].charAt(0).toUpperCase() + unmapped[1].slice(1)}</span>;
                          }}
                        </For>
                      </div>
                    )}

                    <For each={c.diff.sort(sortPatchDiff)}>
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
                  </div>
                )}
              </For>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
