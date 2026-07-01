import React, { useState, useEffect } from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

interface MediumItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

interface ParsedArticle {
  id: string;
  title: string;
  link: string;
  date: string;
  formattedDate: string;
  category: string;
  tags: string[];
  description: string;
  image: string | null;
  readingTime: string;
}

export default function MediumArticles() {
  const [articles, setArticles] = useState<ParsedArticle[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getFeed() {
      try {
        const username = "geetansh810";
        const feedUrl = `https://medium.com/feed/@${username}`;
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch articles from Medium");
        }

        const data = await response.json();
        
        if (data.status !== "ok") {
          throw new Error(data.message || "Failed to load feed");
        }

        const items: MediumItem[] = data.items || [];
        
        const parsed: ParsedArticle[] = items.map((item, index) => {
          // Extract cover image from description/content
          const content = item.content || item.description || "";
          const imgMatch = content.match(/<img[^>]+src="([^">]+)"/) || content.match(/<img[^>]+src='([^'>]+)'/);
          const image = imgMatch ? imgMatch[1] : null;

          // Compute reading time (approx 200 words per minute)
          const textOnly = content.replace(/<[^>]*>/g, " ");
          const words = textOnly.trim().split(/\s+/).filter(Boolean).length;
          const readTimeMinutes = Math.max(1, Math.ceil(words / 200));

          // Clean date
          const dateObj = new Date(item.pubDate.replace(/-/g, "/"));
          const formattedDate = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(dateObj);

          // Clean categories/tags
          const itemTags = item.categories.map((t) => t.toLowerCase()) || [];
          const mainCategory = itemTags[0] || "general";

          // Clean short description
          const cleanDesc = textOnly
            .replace(/\s+/g, " ")
            .trim();
          const description = cleanDesc.substring(0, 140) + (cleanDesc.length > 140 ? "..." : "");

          return {
            id: item.guid || `medium-${index}`,
            title: item.title,
            link: item.link,
            date: item.pubDate,
            formattedDate,
            category: mainCategory,
            tags: itemTags,
            description,
            image,
            readingTime: `${readTimeMinutes} min read`,
          };
        });

        setArticles(parsed);

        // Gather unique categories
        const uniqueCats = ["All", ...new Set(parsed.map((a) => a.category))];
        setCategories(uniqueCats);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An error occurred while loading articles.");
      } finally {
        setLoading(false);
      }
    }

    getFeed();
  }, []);

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  if (loading) {
    return (
      <div className="space-y-8 py-4 animate-pulse">
        {/* Category Pills Skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 w-20 bg-muted rounded-full" />
          ))}
        </div>

        {/* Article Cards Skeleton */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-4 border border-border/50 rounded-xl p-4 bg-muted/10">
              <div className="w-full h-36 sm:w-24 sm:h-20 md:w-32 md:h-24 bg-muted rounded-lg shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-muted rounded w-1/4" />
                <div className="h-6 bg-muted rounded w-3/4" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-destructive font-semibold mb-2">Oops! Couldn't load articles.</p>
        <p className="text-muted-foreground text-sm max-w-md">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 border rounded-md text-sm hover:bg-muted duration-150"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-4">
      {/* Category Filters */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Category filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 capitalize select-none cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-sm scale-105"
                  : "bg-muted/10 text-muted-foreground border-border/80 hover:border-muted-foreground hover:bg-muted/20"
              }`}
            >
              {cat.replace(/-/g, " ")}
            </button>
          ))}
        </div>
      )}

      {/* Articles List */}
      <div className="space-y-6">
        {filteredArticles.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No articles found in this category.</p>
        ) : (
          filteredArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch sm:items-center p-4 border border-border/50 hover:border-border rounded-xl bg-card/25 hover:bg-muted/15 shadow-sm hover:shadow transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="w-full h-36 sm:w-24 sm:h-20 md:w-32 md:h-24 rounded-lg overflow-hidden shrink-0 border border-border/30 bg-muted/10 relative">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 text-2xl font-bold uppercase select-none">
                    {article.category.substring(0, 2)}
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {article.category.replace(/-/g, " ")}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="size-3" />
                      {article.formattedDate}
                    </span>
                    <span className="text-muted-foreground/30 text-[10px]">•</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3" />
                      {article.readingTime}
                    </span>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2 pr-4">
                    {article.title}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-1 mt-2">
                  {article.description}
                </p>
              </div>

              {/* Click Indicator */}
              <div className="self-end sm:self-auto shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors duration-200 pl-2 mt-2 sm:mt-0">
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
