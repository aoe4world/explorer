import { ITEMS, DATA_ROOT, MUTED_UNITS } from "../config";
import { Unit, Technology, UnifiedItem, civAbbr } from "../types/data";

type ItemTypes = {
  [ITEMS.UNITS]: Unit;
  [ITEMS.TECHNOLOGIES]: Technology;
};

const itemsCache = {
  [ITEMS.UNITS]: new Map<string, UnifiedItem<Unit>>(),
  [ITEMS.TECHNOLOGIES]: new Map<string, UnifiedItem<Technology>>(),
};

export async function fetchItems<T extends ITEMS>(type: T) {
  const res = await fetchJson<{ data: UnifiedItem<ItemTypes[T]>[] }>(`${DATA_ROOT}/${type}/all-unified.json`, true);
  const items = [];
  for (const item of res.data) {
    if (MUTED_UNITS.includes(item.id)) continue;
    (itemsCache[type] as Map<string, UnifiedItem<ItemTypes[T]>>).set(item.id, item);
    items.push(item);
  }
  return items;
}

export function fetchItem<T extends ITEMS>(type: T, id: string) {
  return fetchJson<UnifiedItem<ItemTypes[T]>>(`${DATA_ROOT}/${type}/unified/${id}.json`, true);
}

export async function getItem<T extends ITEMS>(type: T, id: string) {
  if (!itemsCache[type].size) await fetchItems(type);
  return (itemsCache[type] as Map<string, UnifiedItem<ItemTypes[T]>>).get(id);
}

export async function getItems<T extends ITEMS>(type: T, civ: civAbbr) {
  if (!itemsCache[type].size) await fetchItems(type);
  return [...(itemsCache[type] as Map<string, UnifiedItem<ItemTypes[T]>>).values()].filter((item) => item.civs.includes(civ));
}

const pendingRequests = new Map<string, Promise<any>>();
const cache = new Map();
/** Request a json file and deduplicate requests to single promises, optionally stored in cache */
export async function fetchJson<T = any>(url: string, useCache = false): Promise<T> {
  if (useCache && cache.has(url)) return cache.get(url);
  if (pendingRequests.has(url)) return pendingRequests.get(url);
  const request = new Promise<T>(async (resolve, reject) => {
    const response = await fetch(url);
    if (response.ok) {
      try {
        const data = await response.json();
        if (useCache || cache.has(url)) cache.set(url, data);
        resolve(data);
      } catch {
        reject(new Error("Error parsing response format (not JSON)"));
      } finally {
        pendingRequests.delete(url);
      }
    } else {
      reject(new Error(`${response.status} ${response.statusText}`));
    }
  });

  pendingRequests.set(url, request);
  return request;
}
