import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { ProximityTitle, type TitleWord } from "@/ui/sections/ProximityTitle";

const title: TitleWord[][] = [
  [{ text: "Full-stack" }, { text: "mind.", accent: true }],
  [{ text: "Frontend" }, { text: "heart.", accent: true }],
];

const step = (index: number) => ({ "--i": index }) as CSSProperties;

export function Hero() {
  return (
    <section className="site-shell flex flex-col gap-8 pb-20 pt-8 md:gap-10 md:pb-28 md:pt-14" aria-labelledby="hero-title">
      <div className="rise flex flex-wrap items-center justify-between gap-x-8 gap-y-2" style={step(0)}>
        <p className="kicker">Jordan Harrison, developer in Portlaoise, Ireland</p>
        <p className="hidden font-mono text-sm text-muted-foreground [@media(hover:hover)]:block">
          Run your cursor through the headline.
        </p>
      </div>
      <div className="hero-copy">
        <ProximityTitle id="hero-title" lines={title} wave />
      </div>
      <div className="rise flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between" style={step(3)}>
        <p className="prose-copy max-w-md">
          I can take a project from the database up, but the interface is where I lose track of time.
        </p>
        <a className="btn self-start sm:self-auto" href="#work" style={{ "--dx": 0, "--dy": 1 } as CSSProperties}>
          See the work
          <span className="btn-icon"><ArrowDown size={18} aria-hidden="true" /></span>
        </a>
      </div>
    </section>
  );
}
