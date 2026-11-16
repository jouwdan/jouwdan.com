import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { ProximityTitle, type TitleWord } from "@/ui/sections/ProximityTitle";
import { StickerPile } from "@/ui/sections/StickerPile";

const title: TitleWord[][] = [
  [{ text: "Full-stack" }, { text: "mind.", accent: true, tone: "pink", tilt: -3 }],
  [{ text: "Frontend" }, { text: "heart.", accent: true, tone: "yellow", tilt: 2 }],
];

const step = (index: number) => ({ "--i": index }) as CSSProperties;

export function Hero() {
  return (
    <section className="site-shell flex flex-col gap-8 pb-20 pt-8 md:gap-10 md:pb-28 md:pt-14" aria-labelledby="hero-title">
      <div className="rise flex flex-wrap items-center justify-between gap-x-8 gap-y-3" style={step(0)}>
        <p className="kicker" data-tone="paper">Jordan Harrison, developer</p>
        <p className="hidden font-mono text-sm text-muted-foreground [@media(hover:hover)]:block">
          Run your cursor through the headline.
        </p>
      </div>
      <div className="hero-copy">
        <ProximityTitle id="hero-title" lines={title} wave />
      </div>
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="rise flex flex-col gap-7 lg:col-span-5" style={step(3)}>
          <p className="prose-copy max-w-md">
            I can take a project from the database up, but the interface is where I lose track of time.
          </p>
          <a className="btn self-start" data-tone="yellow" href="#work" style={{ "--dx": 0, "--dy": 1 } as CSSProperties}>
            See the work
            <span className="btn-icon"><ArrowDown size={18} aria-hidden="true" /></span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 lg:col-span-7">
          <StickerPile />
          <p className="hidden font-mono text-xs text-muted-foreground [@media(hover:hover)]:block">
            The stickers peel off. Drag them around.
          </p>
        </div>
      </div>
    </section>
  );
}
