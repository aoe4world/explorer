import { Accessor, Component, createContext, createSignal, onCleanup, onMount, useContext } from "solid-js";

type Heading = { label: string; id: string; level: number };
type TocContext = {
  headings: Accessor<Heading[]>;
  add(label: string, level?: number): string;
  remove(id: string): void;
};
const TableOfContentsContext = createContext<TocContext>({
  headings: () => [],
  add: () => "",
  remove: () => null,
});

export const TableOfContentsProvider: Component = (props) => {
  const [headings, setHeadings] = createSignal<Heading[]>([]);
  const value: TocContext = {
    headings,
    add: (label: string, level = 1) => {
      const slugified = label.replace(/\s/g, "-").toLowerCase();
      let id = slugified;
      let i = 0;
      while (headings().find((h) => h.id === id)) id = `${slugified}-${i++}`;
      setHeadings(headings().concat({ label, id, level }));
      return id;
    },
    remove: (id: string) => setHeadings(headings().filter((h) => h.id !== id)),
  };

  onMount(() => {
    const id = window.location.hash?.replace("#", "");
    if (!id) return;
    headings()?.find((h) => h.id === id) && requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  });

  return <TableOfContentsContext.Provider value={value}>{props.children}</TableOfContentsContext.Provider>;
};

export const TableOfContentsAnchor: Component<{ label: string; level?: number }> = (props) => {
  const { add: createHeadingId, remove: removeHeading } = useContext(TableOfContentsContext);
  const id = createHeadingId(props.label, props.level);
  onCleanup(() => removeHeading(id));
  return <a id={id}></a>;
};

export function useTableOfContents() {
  return useContext(TableOfContentsContext);
}

export function scrollIntoViewIfNeeded(e: MouseEvent, id: string) {
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    e.stopImmediatePropagation();
    history.pushState({}, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return false;
  }
}

export const TableOfContents = {
  Provider: TableOfContentsProvider,
  Anchor: TableOfContentsAnchor,
};
