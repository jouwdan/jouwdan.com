"use client";

import useSWR from "swr";
import { ArrowUpRight, RotateCw } from "lucide-react";

interface DevArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
}

const feedUrl = "https://dev.to/api/articles?username=jouwdan&per_page=30";

async function fetchArticles(url: string): Promise<DevArticle[]> {
  const response = await fetch(url, { signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error("DEV articles are temporarily unavailable.");
  const articles: unknown = await response.json();
  if (!Array.isArray(articles)) throw new Error("Invalid DEV feed.");
  return articles.filter((article): article is DevArticle => (
    typeof article.id === "number" &&
    typeof article.title === "string" &&
    typeof article.description === "string" &&
    typeof article.url === "string" &&
    article.url.startsWith("https://dev.to/jouwdan/") &&
    typeof article.published_at === "string" &&
    Number.isFinite(Date.parse(article.published_at)) &&
    typeof article.reading_time_minutes === "number"
  )).sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at));
}

export function DevArticles({ limit, showDescriptions = false }: { limit?: number; showDescriptions?: boolean }) {
  const { data, error, isLoading, mutate } = useSWR(feedUrl, fetchArticles, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
    errorRetryCount: 1,
  });

  if (isLoading) return <div className="feed-message" role="status">Loading the latest from DEV…</div>;
  if (!data && error) return <div className="feed-message"><p role="status">The DEV feed is taking a break. You can still read everything on my profile.</p><div className="flex flex-wrap items-center gap-6"><a className="text-link" href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer">Read on DEV <ArrowUpRight size={16} /></a><button className="text-link" type="button" onClick={() => void mutate()}>Try again <RotateCw size={15} /></button></div></div>;
  if (!data?.length) return <div className="feed-message"><p>No published articles to show just yet.</p><a className="text-link" href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer">Find me on DEV <ArrowUpRight size={16} /></a></div>;

  return (
    <div className="writing-list" data-feed="dev-to">
      {data.slice(0, limit ?? data.length).map((article) => (
        <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer" className="writing-item">
          <time className="writing-date" dateTime={article.published_at}>{new Date(article.published_at).toLocaleDateString("en-IE", { month: "short", year: "numeric", timeZone: "UTC" })}</time>
          <div className="archive-post"><h3>{article.title}</h3>{showDescriptions && <><p>{article.description}</p><span className="article-reading-time">{article.reading_time_minutes} min read · Published on DEV</span></>}</div>
          <ArrowUpRight size={23} className="shrink-0" /><span className="sr-only"> (opens on DEV in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
