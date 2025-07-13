import { Component, JSX, createMemo, splitProps } from "solid-js";
import { UnifiedItem, Item } from "@data/types/items";
import { getItemCssClass } from "../styles";

export type ItemIconSize = 24 | 12 | 8 | number | 'inline' | null;

function getIconSizeClasses(size: ItemIconSize) {
  if (size === null) return "";
  if (size === 'inline') return "inline-block rounded-sm w-[1.2em] h-[1.2em] p-0 align-text-bottom mx-[0.3em]"; // class="mb-[-0.2em]"  (was mb instead of align-text-bottom)
  let classes = `w-${size} h-${size}`;
  if (size >= 24) classes += ' p-2 rounded-md';
  else if (size >= 16) classes += ' p-1 rounded-md';
  else if (size >= 8) classes += ' p-0.5 rounded-sm';
  else classes += ' p-0.5 rounded-sm';
  return classes;
}

export type ItemIconProps = JSX.ImgHTMLAttributes<any> & ({ url?: string; item?: UnifiedItem | Item; link?: boolean; size?: ItemIconSize; });

export const ItemIcon: Component<ItemIconProps> = (props) => {
  const [local, imgProps] = splitProps(props, ["url", "item", "link", "class", "size", "title"]);

  const useLocal = (import.meta.env.DEV || window.location.hostname.endsWith('pages.dev'));
  const inRuby = !!import.meta.env.VITE_RUBY_SOURCE_CODE_DIR;

  const data = createMemo(() => {
    let { url, title } = local;
    let classes: string[] = [];

    if (local.class) classes.push(local.class);

    if (local.item) {
      const itemClass = getItemCssClass(local.item);
      classes.push(local.link ? `bg-${itemClass}/80 group-hover:bg-${itemClass}/100 transition` : `bg-${itemClass}`);
      if (itemClass === 'item-commanderie') classes.push("!p-0"); // commanderies have no borders, so nuke any padding
      url ??= local.item.icon;
      title ??= local.item.name;
    }

    console.log(props);

    return {
      src: useLocal ? url?.replace(/https?:\/\/[a-z0-9.]+\/images/, inRuby ? '/vite-dev/lib/explorer/data/images' : '') : url,
      title: title,
      class: classes.join(' ')
    };
  });

  return (
    <div class={`flex-none content-center self-start ${getIconSizeClasses(local.size)} ${data().class}`}>
      <img src={data().src} title={data().title} {...imgProps} />
    </div>
  );
};
