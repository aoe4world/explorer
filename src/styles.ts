import { UnifiedItem } from "./types/data";

export const mainIntroductionCSSClass = `leading-8 text-white/80 text-lg lg:text-xl my-8 max-w-prose whitespace-pre-wrap`;
export const mainItemTitleCSSClass = `text-3xl font-bold text-white`;
export const statLabelCSSClass = `text-white/50 uppercase text-xs font-bold tracking-widest`;
export const tooltipCSSClass = `bg-gray-800 outline-2 outline outline-white/20 p-4 max-w-sm drop-shadow-lg rounded`;
export const itemGridCSSClass = `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7`;
export const secondaryButtonClass = `text-gray-300 font-bold text-sm bg-gray-600 rounded px-3 py-2 hover:bg-gray-500 hover:text-gray-50 transition`;

export function getItemCssClass(item: UnifiedItem) {
  return item.type === "unit" ? "item-unit" :
    item.type == "building" ? "item-building" :
      item.type == "technology" ? "item-tech" :
        item.type == "ability" ? "item-ability" : "item-building";
}
