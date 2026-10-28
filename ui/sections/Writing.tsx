import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DevArticles } from "@/ui/sections/DevArticles";

export function Writing() {
  return (
    <section id="writing" className="writing-section site-shell" aria-labelledby="writing-heading">
      <div className="section-heading"><div className="flex items-center gap-3"><span className="section-dot" /><h2 id="writing-heading">Notes from the process</h2></div><Link className="text-link" href="/blog">All writing <ArrowUpRight size={17} /></Link></div>
      <DevArticles limit={2} />
    </section>
  );
}
