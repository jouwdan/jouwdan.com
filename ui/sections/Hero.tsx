import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { PixelHeart } from "@/ui/sections/PixelHeart";
import { ProximityTitle } from "@/ui/sections/ProximityTitle";

const step = (index: number) => ({ "--i": index }) as CSSProperties;

export function Hero() {
  return (
    <section className="site-shell grid gap-x-14 gap-y-10 pb-20 pt-8 md:pb-28 md:pt-14 lg:grid-cols-12 lg:items-end" aria-labelledby="hero-title">
      <div className="hero-copy flex flex-col gap-8 lg:col-span-8">
        <p className="kicker rise" style={step(0)}>Jordan Harrison, developer in Portlaoise, Ireland</p>
        <ProximityTitle id="hero-title" />
        <div className="rise flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between" style={step(3)}>
          <p className="prose-copy max-w-md">
            I can take a project from the database up, but the interface is where I lose track of time.
          </p>
          <a className="btn self-start sm:self-auto" href="#work" style={{ "--dx": 0, "--dy": 1 } as CSSProperties}>
            See the work
            <span className="btn-icon"><ArrowDown size={18} aria-hidden="true" /></span>
          </a>
        </div>
      </div>
      <div className="w-full max-w-xs justify-self-center sm:max-w-sm lg:col-span-4 lg:max-w-none">
        <PixelHeart />
      </div>
    </section>
  );
}
