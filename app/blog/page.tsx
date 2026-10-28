import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { DevArticles } from "@/ui/sections/DevArticles";

export const metadata: Metadata = { title: "Writing", description: "Jordan Harrison's latest writing from DEV: open-source software, frontend development, and the things learned along the way." };

export default function BlogPage() {
  return (
    <main id="main-content" className="site-shell writing-archive">
      <span className="eyebrow"><span className="section-dot" />NOTES FROM THE PROCESS</span>
      <h1>Making things.<br /><span className="font-serif italic text-secondary">Making notes.</span></h1>
      <p className="archive-intro">A few thoughts on the web, the tools we use, and what happens along the way. Published on <a href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">DEV</a>, collected here.</p>
      <DevArticles showDescriptions />
      <a href="https://dev.to/jouwdan" target="_blank" rel="noopener noreferrer" className="text-link mt-8">More on DEV <ArrowUpRight size={17} /></a>
    </main>
  );
}
