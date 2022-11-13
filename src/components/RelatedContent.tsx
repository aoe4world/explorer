import { Link } from "solid-app-router";
import { Component, createResource, createSignal, For, Suspense } from "solid-js";
import { getRelatedContent } from "../query/content";
import { getItemCssClass } from "../styles";
import { civConfig, Item, UnifiedItem } from "../types/data";
import { getItemHref } from "./Cards";
import { Icon } from "./Icon";
import { ItemIcon } from "./ItemIcon";

const defaultLimit = 3;
export const RelatedContent: Component<{ item?: Item | UnifiedItem; civ?: civConfig; title?: string }> = (props) => {
  const [related] = createResource(() => ({ item: props.item, civilization: props.civ, featured: true }), getRelatedContent);
  const [limit, setLimit] = createSignal(defaultLimit);
  return (
    <div class="flex flex-col gap-6">
      <Suspense>
        {props.title && related()?.length && (
          <div class="flex">
            <h3 class="text-xl font-bold flex-auto">{props.title}</h3>
            <a href="https://airtable.com/shraFjFgC03xmCgZj" target="_blank" class="text-gray-400 hover:text-gray-300 text-sm">
              <Icon icon="plus" /> Suggest
            </a>
          </div>
        )}
        <For each={related()?.slice(0, limit())}>
          {(content) => {
            const [relatedItems] = createResource(() => content.relatedItems?.filter((x) => !props.item || !x.endsWith(props.item.id)), getRelatedItems);
            return (
              <div class="flex gap-8 items-center">
                <a
                  href={content.url}
                  target="_blank"
                  rel="noopener ugc nofollow"
                  class="basis-36 md:basis-48 shrink-0 aspect-video rounded-md overflow-hidden relative outline outline-black focus-visible:outline-white hover:outline-white/60 group"
                >
                  {content.thumbnail ? (
                    <>
                      <img src={content.thumbnail} class="block object-cover w-full h-full transition group-hover:scale-110" />
                      <div class="from-black to-transparent absolute inset-0 bg-gradient-to-t opacity-90 grid place-content-center">
                        <Icon icon="play" class=" text-white text-4xl" />
                      </div>
                    </>
                  ) : (
                    <div class="from-black to-transparent absolute inset-0 bg-gradient-to-t opacity-90 grid place-content-center">
                      <Icon icon="arrow-up-right-from-square" class=" text-white/50 text-2xl" />
                    </div>
                  )}
                </a>

                <div>
                  <a href={content.url} target="_blank" rel="noopener ugc nofollow" class="block font-bold hover:underline  mb-2">
                    {content.title}
                  </a>
                  <p class="hidden md:line-clamp-2 text-gray-300 text-sm leading-relaxed  max-w-prose">{content.description}</p>
                  <small class="text-gray-400 mt-1 text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <div class="text-gray-200">
                      {content.creator_url ? (
                        <Link href={content.creator_url} class="hover:underline" target="_blank" rel="noopener ugc nofollow">
                          {content.creator}
                        </Link>
                      ) : (
                        content.creator
                      )}
                    </div>
                    <div>{content.type}</div>
                    <Suspense>
                      <For each={relatedItems()}>
                        {(item) => (
                          <Link href={getItemHref(item, props.civ)} class={`inline-flex min-w-0 items-center  text-${getItemCssClass(item)}-light`}>
                            <ItemIcon url={item.icon} class="w-5 h-5 mr-1" />
                            <span class="truncate max-w-[100px]">{item.name}</span>
                          </Link>
                        )}
                      </For>
                    </Suspense>
                  </small>
                </div>
              </div>
            );
          }}
        </For>
        {related()?.length > limit() && (
          <button onClick={() => setLimit(limit() + 10)} class="text-gray-300 hover:text-gray-100 font-bold inline-block">
            Show more
          </button>
        )}
      </Suspense>
    </div>
  );
};

async function getRelatedItems(ids: string[]) {
  const sdk = await import("../../data/src/sdk/index");
  let Get = sdk.Get;

  const items: UnifiedItem[] = [];
  for (const id of ids) {
    try {
      const item = Get(id.split("/").slice(-2).join("/") as any);
      if (item) items.push(item);
    } catch (e) {
      console.error(`Could not find related item with ${id}`, e);
    }
  }
  return items;
}
