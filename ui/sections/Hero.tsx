import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { StickerPile } from "@/ui/sections/StickerPile";
import { WaveTitle, type TitleWord } from "@/ui/sections/WaveTitle";

const title: TitleWord[][] = [
  [{ text: "Full-stack" }, { text: "mind.", accent: true, tone: "pink" }],
  [{ text: "Frontend" }, { text: "heart.", accent: true, tone: "yellow" }],
];

const step = (index: number) => ({ "--i": index }) as CSSProperties;

export function Hero() {
  return (
    <section className="site-shell flex flex-col gap-8 pb-20 pt-8 md:gap-10 md:pb-28 md:pt-14" aria-labelledby="hero-title">
      <p className="kicker rise" data-tone="paper" style={step(0)}>Jordan Harrison, developer</p>
      <div className="hero-copy">
        <WaveTitle id="hero-title" lines={title} />
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
