"use client";

import { useRef, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

const lines = [
  [{ text: "Full-stack" }, { text: "mind.", className: "text-secondary" }],
  [{ text: "Frontend" }, { text: "heart.", className: "text-primary" }],
];

const REST = { weight: 620, width: 90 };
const PEAK = { weight: 860, width: 118 };

export function ProximityTitle({ id }: { id: string }) {
  const title = useRef<HTMLHeadingElement>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const frame = useRef(0);

  function paint() {
    frame.current = 0;
    const letters = title.current?.querySelectorAll<HTMLElement>(".prox-letter");
    if (!letters) return;
    const position = pointer.current;
    const bounds = position ? Array.from(letters, (letter) => letter.getBoundingClientRect()) : [];
    letters.forEach((letter, index) => {
      if (!position) {
        letter.style.removeProperty("--w");
        letter.style.removeProperty("--wd");
        return;
      }
      const box = bounds[index];
      const distance = Math.hypot(position.x - (box.left + box.width / 2), position.y - (box.top + box.height / 2));
      const pull = Math.max(0, 1 - distance / (box.height * 1.5)) ** 2;
      letter.style.setProperty("--w", String(Math.round(REST.weight + (PEAK.weight - REST.weight) * pull)));
      letter.style.setProperty("--wd", (REST.width + (PEAK.width - REST.width) * pull).toFixed(1));
    });
  }

  function schedulePaint() {
    if (!frame.current) frame.current = requestAnimationFrame(paint);
  }

  function trackPointer(event: PointerEvent<HTMLHeadingElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    pointer.current = { x: event.clientX, y: event.clientY };
    schedulePaint();
  }

  function releasePointer() {
    pointer.current = null;
    schedulePaint();
  }

  return (
    <h1 id={id} ref={title} className="hero-title" onPointerMove={trackPointer} onPointerLeave={releasePointer}>
      <span className="sr-only">Full-stack mind. Frontend heart.</span>
      {lines.map((words, lineIndex) => (
        <span key={lineIndex} className="hero-line rise" style={{ "--i": lineIndex + 1 } as React.CSSProperties} aria-hidden="true">
          {words.map((word, wordIndex) => (
            <span key={word.text}>
              {wordIndex > 0 && " "}
              <span className={cn("inline-block", word.className)}>
                {[...word.text].map((letter, letterIndex) => (
                  <span key={letterIndex} className="prox-letter">{letter}</span>
                ))}
              </span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
