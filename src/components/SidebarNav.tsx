import { CivSlug } from "@data/sdk/utils";
import { Link, useLocation, useParams } from "@solidjs/router";
import {
  Component,
  For,
  JSX,
  ParentComponent,
  Show,
  Suspense,
  createContext,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  createUniqueId,
  useContext,
} from "solid-js";
import { CIVILIZATION_BY_SLUG } from "../config";
import { splitUnitsIntoGroups, splitBuildingsIntoGroups, splitTechnologiesIntroGroups } from "../query/utils";
import { getItemHref } from "./Cards";
import { ItemIcon } from "./ItemIcon";
import { CivConfig } from "@data/types/civs";
import { getStructuredItems, parseCurrentLocation } from "../global";
import { CivFlag } from "./CivFlag";
import { Icon } from "./Icon";
import { getItemCssClass } from "../styles";
import { UnifiedItem } from "src/types/data";
const SDK = import("@data/sdk");

export const SidebarNav: Component = (props) => {
  const location = useLocation();
  const current = createMemo(() => parseCurrentLocation(location.pathname));
  const civilization = () => CIVILIZATION_BY_SLUG[current().civ as CivSlug] ?? undefined;
  const [data] = createResource(civilization, getStructuredItems);
  const [allData] = createResource(() => getStructuredItems());
  const currentItemType = () => current().itemType || "units";
  return (
    <div class="">
      <Show when={civilization() ? data() : allData()} keyed>
        {(data) => (
          <nav>
            {civilization() ? (
              <Link href={`/civs/${civilization().slug}/`} class="text-xl font-bold white mb-2 flex items-center">
                {civilization() && <CivFlag abbr={civilization().abbr} class="w-auto h-6 mr-2 inline-block rounded" />}
                <span>{data.civ?.info.name}</span>
              </Link>
            ) : (
              <p>All Civilizations</p>
            )}

            <TreeMenu>
              <For each={Object.entries({ units: "Units", buildings: "Buildings", technologies: "Technologies" })}>
                {([type, label]) => (
                  <TreeItem>
                    <TreeGroup label={type} isOpen={currentItemType() == type}>
                      <div class="flex items-center py-2 sticky -top-6 bg-gray-800 z-10">
                        <TreeGroupToggle class="text-sm w-4 outline-none group" toggleClass="block w-3 mr-1" />
                        <Link
                          href={civilization() ? `/civs/${civilization().slug}/${type}` : `/${type}`}
                          class="font-bold my-1 rounded text-lg outline-none focus:underline hover:underline"
                        >
                          {label}
                        </Link>
                      </div>
                      <TreeGroupItems class="pl-0.5 flex flex-col gap-2 mb-4">
                        <For each={Object.entries(data?.[type] ?? {}) as [key: string, items?: UnifiedItem[]][]}>
                          {([key, items]) =>
                            items?.length ? (
                              <TreeItem>
                                <TreeGroup label={key} isOpen>
                                  <TreeGroupToggle
                                    class="text-gray-300 flex items-center group w-full text-sm py-1 outline-none sticky top-5 bg-gray-800"
                                    toggleClass="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 block w-3 mr-1"
                                  >
                                    <p class="uppercase font-bold">{key}</p>
                                  </TreeGroupToggle>
                                  <TreeGroupItems class="flex flex-col gap-1 pl-3">
                                    <For each={items}>
                                      {(item) => (
                                        <TreeItem>
                                          <Link
                                            href={getItemHref(item, civilization())}
                                            role="treeitem"
                                            class={`flex items-center p-1 rounded gap-2 text-white/90 hover:text-white bg-${getItemCssClass(item)} bg-opacity-0 hover:bg-opacity-30 transition-all outline-none border border-transparent focus-visible:border-white`}
                                            activeClass={`!bg-opacity-40 font-bold !text-white`}
                                            end
                                          >
                                            <div class={`w-6 h-6 bg-${getItemCssClass(item)} rounded-sm flex items-center`}>
                                              <ItemIcon url={item.icon} />
                                            </div>
                                            <p
                                              class="whitespace-pre-wrap"
                                              innerHTML={item.name.replace(/(.*?)\((.*?)\)/, '$1<span class="opacity-50">$2</span>')}
                                            ></p>
                                          </Link>
                                        </TreeItem>
                                      )}
                                    </For>
                                  </TreeGroupItems>
                                </TreeGroup>
                              </TreeItem>
                            ) : (
                              <></>
                            )
                          }
                        </For>
                      </TreeGroupItems>
                    </TreeGroup>
                  </TreeItem>
                )}
              </For>
            </TreeMenu>
          </nav>
        )}
      </Show>
    </div>
  );
};

const TreeMenu: ParentComponent = (props) => <ul role="tree">{props.children}</ul>;

const TreeMenuContext = createContext<{ isOpen: () => boolean; toggle: () => boolean; id: string; label: string }>();

const TreeGroup: ParentComponent<{ label: string; isOpen: boolean }> = (props) => {
  const [isOpen, setIsOpen] = createSignal(props.isOpen);
  const id = createUniqueId();
  createEffect(() => setIsOpen(props.isOpen));
  return <TreeMenuContext.Provider value={{ isOpen, toggle: () => setIsOpen((x) => !x), id, label: props.label }}>{props.children}</TreeMenuContext.Provider>;
};

const TreeGroupItems: ParentComponent<JSX.HTMLAttributes<HTMLUListElement>> = (props) => {
  const { isOpen, label, id } = useContext(TreeMenuContext);

  return (
    <Show when={isOpen()}>
      <ul role="group" aria-label={label} id={id} {...props}>
        {props.children}
      </ul>
    </Show>
  );
};

const TreeGroupToggle: ParentComponent<JSX.HTMLAttributes<HTMLButtonElement> & { toggleClass?: string }> = (props) => {
  const { isOpen, toggle, id } = useContext(TreeMenuContext);
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key == "ArrowLeft" && isOpen()) {
      toggle();
      e.stopPropagation();
    }
    if (e.key == "ArrowRight" && !isOpen()) {
      toggle();
      e.stopPropagation();
    }
  };
  return (
    <button role="treeitem" aria-expanded={isOpen()} aria-owns={id} onClick={toggle} tabIndex={0} {...props} onKeyDown={onKeyDown}>
      <span class={props.toggleClass}>{isOpen() ? <Icon icon="caret-down" /> : <Icon icon="caret-right" />}</span>
      {props.children}
    </button>
  );
};
const focusableElements = "button, [href]";
const TreeItem: ParentComponent<{}> = (props) => {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key == "ArrowDown") {
      focusOnElement(focusableElements, "next");
      e.stopPropagation();
    }
    if (e.key == "ArrowUp") {
      focusOnElement(focusableElements, "previous");
      e.stopPropagation();
    }
  };
  return (
    <li role="none" onKeyDown={onKeyDown}>
      {props.children}
    </li>
  );
};

function focusOnElement(selector, direction) {
  const elements = Array.from(document.querySelectorAll(selector));
  const currentlyFocusedIndex = elements.findIndex((element) => element === document.activeElement);
  let nextIndex;
  if (direction === "next") {
    nextIndex = (currentlyFocusedIndex + 1) % elements.length;
  } else if (direction === "previous") {
    nextIndex = (currentlyFocusedIndex - 1 + elements.length) % elements.length;
  }
  const nextElement = elements[nextIndex];
  nextElement.focus();
}
