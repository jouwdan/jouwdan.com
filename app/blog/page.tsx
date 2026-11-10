import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { DevArticles } from "@/ui/sections/DevArticles";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles by Jordan Harrison on open-source software and frontend development, published on DEV and collected here.",
};

export default function BlogPage() {
  return (
    <main id="main-content" className="site-shell flex min-h-[75vh] flex-col gap-10 pb-24 pt-8 md:pt-14">
      <div className="hero-copy flex flex-col gap-6">
        <p className="kicker rise">Writing</p>
        <h1 className="hero-title rise" style={{ "--i": 1 } as React.CSSProperties}>
          Things I wrote <span className="text-primary">down.</span>
        </h1>
        <p className="prose-copy rise max-w-lg" style={{ "--i": 2 } as React.CSSProperties}>
          When I work something out, I write it up on{" "}
          <a href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-primary decoration-2 underline-offset-4">DEV</a>
          . Everything I&apos;ve published there is listed below.
        </p>
      </div>
      <DevArticles showDescriptions />
      <a href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer" className="link self-start">
        My DEV profile <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </main>
  );
}
