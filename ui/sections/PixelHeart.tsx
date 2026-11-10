"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";

const PATTERN = [
  "...............",
  "...###...###...",
  "..#o###.#####..",
  ".#o###########.",
  ".#############.",
  ".#############.",
  ".#############.",
  "..###########..",
  "...#########...",
  "....#######....",
  ".....#####.....",
  "......###......",
  ".......#.......",
  "...............",
];

const COLS = PATTERN[0].length;
const ROWS = PATTERN.length;
const LENS_RADIUS = 3.2;

const cells = PATTERN.flatMap((row, y) =>
  [...row].map((symbol, x) => ({
    kind: symbol === "#" ? "fill" : symbol === "o" ? "shine" : "empty",
    distance: Math.hypot(x + 0.5 - COLS / 2, y + 0.5 - ROWS / 2).toFixed(2),
  })),
);

export function PixelHeart() {
  const grid = useRef<HTMLDivElement>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const frame = useRef(0);
  const [pokes, setPokes] = useState(0);

  function paintLens() {
    frame.current = 0;
    const element = grid.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const cellWidth = bounds.width / COLS;
    const cellHeight = bounds.height / ROWS;
    const position = pointer.current;
    for (let index = 0; index < element.children.length; index++) {
      let strength = 0;
      if (position) {
        const centreX = bounds.left + ((index % COLS) + 0.5) * cellWidth;
        const centreY = bounds.top + (Math.floor(index / COLS) + 0.5) * cellHeight;
        strength = Math.max(0, 1 - Math.hypot(position.x - centreX, position.y - centreY) / cellWidth / LENS_RADIUS);
      }
      (element.children[index] as HTMLElement).style.setProperty("--p", strength.toFixed(3));
    }
  }

  function schedulePaint() {
    if (!frame.current) frame.current = requestAnimationFrame(paintLens);
  }

  function trackPointer(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType === "touch") return;
    pointer.current = { x: event.clientX, y: event.clientY };
    schedulePaint();
  }

  function releasePointer() {
    pointer.current = null;
    schedulePaint();
  }

  function sendBeat(event: MouseEvent<HTMLButtonElement>) {
    setPokes((count) => count + 1);
    const element = grid.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = element.getBoundingClientRect();
    const fromKeyboard = event.detail === 0;
    const originX = fromKeyboard ? COLS / 2 : ((event.clientX - bounds.left) / bounds.width) * COLS;
    const originY = fromKeyboard ? ROWS / 2 : ((event.clientY - bounds.top) / bounds.height) * ROWS;
    Array.from(element.children).forEach((cell, index) => {
      const distance = Math.hypot((index % COLS) + 0.5 - originX, Math.floor(index / COLS) + 0.5 - originY);
      cell.animate([{ scale: 1 }, { scale: 1.6, offset: 0.3 }, { scale: 1 }], {
        duration: 560,
        delay: distance * 36,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      });
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="heart-button"
        aria-label="Pixel heart. Press it to send a heartbeat."
        onClick={sendBeat}
        onPointerMove={trackPointer}
        onPointerLeave={releasePointer}
      >
        <div ref={grid} className="heart-grid" style={{ "--cols": COLS } as CSSProperties} aria-hidden="true">
          {cells.map((cell, index) => (
            <span key={index} className="heart-cell" data-kind={cell.kind} style={{ "--d": cell.distance } as CSSProperties} />
          ))}
        </div>
      </button>
      <p className="font-mono text-sm leading-relaxed text-muted-foreground" aria-live="polite">
        {pokes === 0
          ? `${cells.length} spans in one CSS grid. No canvas. Go on, poke it.`
          : `Poked ${pokes} ${pokes === 1 ? "time" : "times"}. It can take it.`}
      </p>
    </div>
  );
}
