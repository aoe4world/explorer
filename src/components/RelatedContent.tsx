import { Component, createResource, createSignal, For, Suspense } from "solid-js";
import { getRelatedContent } from "../query/content";
import { civConfig, Item, UnifiedItem } from "../types/data";
import { Icon } from "./Icon";

const defaultLimit = 3;
export const RelatedContent: Component<{ item?: Item | UnifiedItem; civ?: civConfig; title?: string }> = (props) => {
  const [related] = createResource(() => ({ item: props.item, civilization: props.civ }), getRelatedContent);
  const [limit, setLimit] = createSignal(defaultLimit);
  return (
    <div class="flex flex-col gap-6">
      <Suspense>
        {props.title && related()?.length && <h3 class="text-xl font-bold">{props.title}</h3>}
        <For each={related()?.slice(0, limit())}>
          {(item) => (
            <div class="flex gap-8 items-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener ugc nofollow"
                class="basis-36 md:basis-48 shrink-0 aspect-video rounded-md overflow-hidden relative outline outline-black focus-visible:outline-white hover:outline-white/60 group"
              >
                {item.thumbnail ? (
                  <>
                    <img src={item.thumbnail} class="block object-cover w-full h-full transition group-hover:scale-110" />
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
                <a href={item.url} target="_blank" rel="noopener ugc nofollow" class="block font-bold hover:underline  mb-2">
                  {item.title}
                </a>
                <p class="hidden md:line-clamp-2 text-gray-300 text-sm leading-relaxed  max-w-prose">{item.description}</p>
                <small class="text-gray-400 mt-1 text-sm flex flex-wrap gap-4">
                  <div>
                    {item.creator_url ? (
                      <a href={item.creator_url} class="hover:underline" target="_blank" rel="noopener ugc nofollow">
                        {item.creator}
                      </a>
                    ) : (
                      item.creator
                    )}
                  </div>
                  <div>{item.type}</div>
                </small>
              </div>
            </div>
          )}
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
