import { Accessor, Component, createContext, createSignal, useContext } from "solid-js";

type Heading = { label: string; id: string; level: number };
const TableOfContentsContext = createContext<{
  headings: Accessor<Heading[]>;
  createHeadingId(label: string, level?: number): string;
}>({
  headings: () => [],
  createHeadingId: () => "",
});

export const TableOfContentsProvider: Component = (props) => {
  const [headings, setHeadings] = createSignal<Heading[]>([]);
  const value = {
    headings,
    createHeadingId: (label: string, level = 1) => {
      const slugified = label.replace(/\s/g, "-").toLowerCase();
      let id = slugified;
      let i = 0;
      while (headings().find((h) => h.id === id)) id = `${slugified}-${i++}`;
      setHeadings(headings().concat({ label, id, level }));
      return id;
    },
  };

  return <TableOfContentsContext.Provider value={value}>{props.children}</TableOfContentsContext.Provider>;
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
