import { A, useLocation } from "@solidjs/router";
import {
  Component,
  For,
  JSX,
  ParentComponent,
  Show,
  createContext,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  createUniqueId,
  useContext,
} from "solid-js";
import { CivSlug, getCivConfig } from "../config";
import { getStructuredItems, parseCurrentLocation, ITEM_TYPE_LABELS, ItemTypeKey } from "../global";
import { getItemCssClass } from "../styles";
import { UnifiedItem } from "../types/data";
import { BackdropCover } from "./Backdrop";
import { getItemHref } from "./Cards";
import { CivFlag } from "./CivFlag";
import { Icon } from "./Icon";
import { ItemIcon } from "./ItemIcon";
import { ItemName } from "./ItemName";

export const SidebarNav: Component = () => {
  const location = useLocation();
  const current = createMemo(() => parseCurrentLocation(location.pathname));
  const civilization = () => getCivConfig(current().civ);
  const [data] = createResource(civilization, getStructuredItems);
  const [allData] = createResource(() => getStructuredItems());
  const currentItemType = () => current().itemType || "units";
  return (
    <div>
      <Show when={civilization() ? data() : allData()} keyed>
        {(data) => (
          <nav>
            <Show when={civilization()} keyed fallback={
              <p>All Civilizations</p>
            }>
             {(civ) =>
              <A href={`/civs/${civ.slug}/`} class="text-xl font-bold white mb-2 flex items-center">
                <CivFlag abbr={civ.abbr} class="w-auto h-6 mr-2 inline-block rounded" />
                <span>{data.civ?.info.name}</span>
              </A>
             }
            </Show>

            <TreeMenu>
              <For each={Object.entries(ITEM_TYPE_LABELS) as [ItemTypeKey, string][]}>
                {([type, label]) => (
                  <TreeItem>
                    <TreeGroup label={type} isOpen={currentItemType() == type}>
                      <div class="flex items-center py-2 sticky -top-6 z-10">
                        <TreeGroupToggle class="text-sm w-4 outline-none group" toggleClass="block w-3 mr-1" />
                        <A
                          href={civilization() ? `/civs/${civilization()!.slug}/${type}` : `/${type}`}
                          class="font-bold my-1 rounded text-lg outline-none focus:underline hover:underline"
                        >
                          {label}
                        </A>
                        <BackdropCover />
                      </div>
                      <TreeGroupItems class="pl-0.5 flex flex-col gap-2 mb-4">
                        <For each={Object.entries(data?.[type] ?? {}) as [key: string, items?: UnifiedItem[]][]}>
                          {([key, items]) =>
                            items?.length ? (
                              <TreeItem>
                                <TreeGroup label={key} isOpen>
                                  <TreeGroupToggle
                                    class="text-gray-300 flex items-center group w-full text-sm py-1 outline-none sticky top-5"
                                    toggleClass="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 block w-3 mr-1"
                                  >
                                    <p class="uppercase font-bold">{key}</p>
                                    <BackdropCover />
                                  </TreeGroupToggle>
                                  <TreeGroupItems class="flex flex-col gap-1 pl-3">
                                    <For each={items}>
                                      {(item) => (
                                        <TreeItem>
                                          <A
                                            href={getItemHref(item, civilization())}
                                            role="treeitem"
                                            class={`flex items-center p-1 rounded gap-2 text-white/90 hover:text-white bg-${getItemCssClass(item)} bg-opacity-0 hover:bg-opacity-30 transition-all outline-none border border-transparent focus-visible:border-white`}
                                            activeClass={`!bg-opacity-40 font-bold !text-white`}
                                            end
                                          >
                                            <ItemIcon item={item} size={6} />
                                            <ItemName name={item.name} class="whitespace-pre-wrap" />
                                          </A>
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

type TreeMenuContextProps = { isOpen: () => boolean; toggle: () => boolean; id: string; label: () => string; };
const TreeMenuContext = createContext<TreeMenuContextProps>({
  isOpen: () => false,
  toggle: () => false,
  id: "",
  label: () => ""
});

const TreeGroup: ParentComponent<{ label: string; isOpen: boolean }> = (props) => {
  const [isOpen, setIsOpen] = createSignal(props.isOpen); // eslint-disable-line solid/reactivity
  const id = createUniqueId();
  createEffect(() => setIsOpen(props.isOpen));
  return <TreeMenuContext.Provider value={{ isOpen, toggle: () => setIsOpen((x) => !x), id, label: () => props.label }}>{props.children}</TreeMenuContext.Provider>;
};

const TreeGroupItems: ParentComponent<JSX.HTMLAttributes<HTMLUListElement>> = (props) => {
  const { isOpen, label, id } = useContext(TreeMenuContext);
  
  return (
    <Show when={isOpen()}>
      <ul role="group" aria-label={label()} id={id} {...props}>
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
const TreeItem: ParentComponent = (props) => {
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

function focusOnElement(selector: string, direction: 'next' | 'previous') {
  const elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
  if (!elements.length) return;

  const currentlyFocusedIndex = elements.findIndex((element) => element === document.activeElement);
  let nextIndex;
  
  if (direction === "next") {
    nextIndex = (currentlyFocusedIndex + 1) % elements.length;
  } else if (direction === "previous") {
    nextIndex = currentlyFocusedIndex === -1 ? elements.length - 1 : (currentlyFocusedIndex - 1 + elements.length) % elements.length;
  } else {
    return;
  }
  
  const nextElement = elements[nextIndex];
  nextElement.focus();
}
