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

function FeedMessage({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-5 border-t border-border py-8 text-muted-foreground">{children}</div>;
}

export function DevArticles({ limit, showDescriptions = false }: { limit?: number; showDescriptions?: boolean }) {
  const { data, error, isLoading, mutate } = useSWR(feedUrl, fetchArticles, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
    errorRetryCount: 1,
  });

  if (isLoading) {
    return (
      <div className="border-t border-border" role="status">
        <span className="sr-only">Loading articles from DEV</span>
        {Array.from({ length: limit ?? 3 }, (_, index) => (
          <div key={index} className="flex items-center gap-4 border-b border-border py-6" aria-hidden="true">
            <div className="flex flex-1 flex-col gap-3">
              <span className="skeleton h-4 w-24" />
              <span className="skeleton h-6 w-4/5" />
            </div>
            <span className="skeleton size-9 rounded-full" />
          </div>
        ))}
      </div>
    );
  }

  if (!data && error) {
    return (
      <FeedMessage>
        <p role="status">DEV isn&apos;t answering right now. The articles are all still on my profile.</p>
        <div className="flex flex-wrap items-center gap-6 text-foreground">
          <a className="link" href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer">Read on DEV <ArrowUpRight size={16} aria-hidden="true" /></a>
          <button className="link" type="button" onClick={() => void mutate()}>Try again <RotateCw size={15} aria-hidden="true" /></button>
        </div>
      </FeedMessage>
    );
  }

  if (!data?.length) {
    return (
      <FeedMessage>
        <p>Nothing published yet.</p>
        <a className="link self-start text-foreground" href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer">Find me on DEV <ArrowUpRight size={16} aria-hidden="true" /></a>
      </FeedMessage>
    );
  }

  return (
    <div className="border-t border-border" data-feed="dev-to">
      {data.slice(0, limit ?? data.length).map((article) => (
        <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer" className="post-row">
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <p className="font-mono text-sm text-muted-foreground">
              <time dateTime={article.published_at}>{new Date(article.published_at).toLocaleDateString("en-IE", { month: "short", year: "numeric", timeZone: "UTC" })}</time>
              {showDescriptions && <span> / {article.reading_time_minutes} min read</span>}
            </p>
            <h3 className="text-pretty text-xl font-semibold leading-snug tracking-tight md:text-2xl">{article.title}</h3>
            {showDescriptions && <p className="prose-copy max-w-2xl">{article.description}</p>}
          </div>
          <span className="post-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          <span className="sr-only">(opens on DEV in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
