import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DevArticles } from "@/ui/sections/DevArticles";

export function Writing() {
  return (
    <section id="writing" data-section className="site-shell flex flex-col gap-10 py-20 md:py-28" aria-labelledby="writing-heading">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-5">
          <p className="kicker">Writing</p>
          <h2 id="writing-heading" className="section-title">What I wrote down recently.</h2>
        </div>
        <Link className="link self-start sm:self-auto" href="/blog">All writing <ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
      <DevArticles limit={2} />
    </section>
  );
}
