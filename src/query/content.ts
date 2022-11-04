import { CURATED_CONTENT_API } from "../config";
import { civConfig, Item, UnifiedItem } from "../types/data";

interface ContentItem {
  title: string;
  type: string;
  relatedItems?: string[];
  approved: boolean;
  tags: string[];
  creator: string;
  civilizations: string[];
  url: string;
  description: string;
  creator_url?: string;
  youtube_data?: Youtubedata;
  thumbnail?: string;
}

interface Youtubedata {
  title: string;
  videoId: string;
  channelId: string;
}

let content: ContentItem[];
export async function getRelatedContent({ item, civilization }: { item?: Item | UnifiedItem; civilization?: civConfig }) {
  content ??= await fetchContent();
  return content.filter(
    (c) =>
      (item && c.relatedItems?.some((i) => i.includes("baseId" in item ? item.baseId : item.id))) ||
      (civilization && c.civilizations.some((civ) => civ.toLowerCase() === civilization.slug))
  );
}

async function fetchContent(): Promise<ContentItem[]> {
  try {
    const res = await fetch(CURATED_CONTENT_API);
    const items = await res.json();
    if (!items[0].url || !items[0].title) throw "Response not in expected format";
    return items;
  } catch (e) {
    console.error(e);
  }
}
