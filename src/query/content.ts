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
let featuredContent: ContentItem[];
export async function getRelatedContent(
  { item, civilization, featured }: { item?: Item | UnifiedItem; civilization?: civConfig; featured?: boolean } = { featured: true }
) {
  if (featured) featuredContent ??= await fetchContent(true);
  else content ??= await fetchContent(false);
  return (featured ? featuredContent : content).filter(
    (c) =>
      (item && c.relatedItems?.some((i) => i.includes("baseId" in item ? item.baseId : item.id))) ||
      (civilization && c.civilizations.some((civ) => civ.toLowerCase() === civilization.slug))
  );
}

async function fetchContent(featured: boolean): Promise<ContentItem[]> {
  try {
    const res = await fetch(CURATED_CONTENT_API + (featured ? "featured.json" : "content.json"));
    const items = await res.json();
    if (!items[0].url || !items[0].title) throw "Response not in expected format";
    return items;
  } catch (e) {
    console.error(e);
  }
}
