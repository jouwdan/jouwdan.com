import Link from "next/link";
import { NavLinks } from "@/ui/layout/NavLinks";

const MARK = [".##.##.", "#######", "#######", ".#####.", "..###..", "...#..."];

export function Header() {
  return (
    <header className="site-shell flex h-20 items-center justify-between gap-4">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Link href="/" className="wordmark" aria-label="Jordan Harrison, home">
        <svg className="wordmark-heart" viewBox="0 0 7 6" aria-hidden="true" shapeRendering="crispEdges">
          {MARK.flatMap((row, y) => [...row].map((cell, x) => (cell === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null)))}
        </svg>
        <span className="hidden whitespace-nowrap min-[360px]:inline">
          jordan<span className="hidden min-[440px]:inline"> harrison</span>
        </span>
      </Link>
      <NavLinks />
    </header>
  );
}
