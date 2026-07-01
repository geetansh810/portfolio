import type { CollectionEntry } from "astro:content";

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  description: string;
  image?: string;
  body: string;
}

export function parseMediumRSS(xml: string): MediumArticle[] {
  const items: MediumArticle[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemContent = match[1];

    // Extract title (handling CDATA if present)
    const titleMatch = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || itemContent.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : "";

    // Extract link
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
    const link = linkMatch ? linkMatch[1].trim() : "";

    // Extract pubDate
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : "";

    // Extract categories
    const categoryRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
    const categories: string[] = [];
    let catMatch;
    while ((catMatch = categoryRegex.exec(itemContent)) !== null) {
      categories.push(catMatch[1].trim());
    }

    if (categories.length === 0) {
      const categoryRegexNoCData = /<category>([\s\S]*?)<\/category>/g;
      let catMatchNoCData;
      while ((catMatchNoCData = categoryRegexNoCData.exec(itemContent)) !== null) {
        categories.push(catMatchNoCData[1].trim());
      }
    }

    // Extract image from content:encoded
    const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) || itemContent.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/);
    let image: string | undefined = undefined;
    let description = "";
    let body = "";

    if (contentMatch) {
      const content = contentMatch[1];
      
      // Look for first img src
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/) || content.match(/<img[^>]+src='([^'>]+)'/);
      if (imgMatch) {
        image = imgMatch[1];
      }

      // Extract a clean text description by removing tags
      const cleanText = content
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      body = cleanText;
      description = cleanText.substring(0, 160) + (cleanText.length > 160 ? "..." : "");
    } else {
      // Fallback to description tag
      const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || itemContent.match(/<description>([\s\S]*?)<\/description>/);
      if (descMatch) {
        const cleanText = descMatch[1]
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        body = cleanText;
        description = cleanText.substring(0, 160) + (cleanText.length > 160 ? "..." : "");
      }
    }

    items.push({
      title,
      link,
      pubDate,
      categories,
      description,
      image,
      body,
    });
  }

  return items;
}

export async function fetchMediumArticles(username: string = "geetansh810"): Promise<CollectionEntry<"blog">[]> {
  try {
    const url = `https://medium.com/feed/@${username}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Medium feed: ${response.statusText}`);
    }
    const xml = await response.text();
    const parsed = parseMediumRSS(xml);

    return parsed.map((item, index) => {
      // Find a clean category and map others to tags
      const category = item.categories[0] || "medium";
      
      return {
        id: `medium-${index}`,
        collection: "blog" as const,
        data: {
          pubDatetime: new Date(item.pubDate),
          title: item.title,
          category: category,
          tags: item.categories.length > 0 ? item.categories : ["medium"],
          description: item.description,
          link: item.link,
          image: item.image,
          draft: false,
        },
        body: item.body,
      } as CollectionEntry<"blog">;
    });
  } catch (error) {
    console.error("Error fetching/parsing Medium feed:", error);
    return [];
  }
}
