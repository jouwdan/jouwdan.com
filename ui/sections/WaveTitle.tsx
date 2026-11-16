"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type StickerTone = "yellow" | "pink" | "blue" | "green" | "paper";
export type TitleWord = { text: string; accent?: boolean; tone?: StickerTone };

// Same shape as Allo's hero wall: weight and roundness ride two travelling sine waves.
const WEIGHT = { speed: 1, length: 1, lineOffset: 1.24, lightest: 100, heaviest: 900, breath: 0.5 };
const ROUND = { speed: 1.05, length: 0.7, offset: 1.2, sharpest: 0, roundest: 100 };
const MEASURE_WEIGHT = WEIGHT.lightest + 0.65 * (WEIGHT.heaviest - WEIGHT.lightest);
const WEIGHT_STEP = 10;
const ROUND_STEP = 5;

const quantize = (value: number, step: number) => Math.round(value / step) * step;

export function WaveTitle({ id, lines, animate = true }: { id?: string; lines: TitleWord[][]; animate?: boolean }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const label = lines.map((words) => words.map((word) => word.text).join(" ")).join(" ");

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const letters = Array.from(title.querySelectorAll<HTMLElement>(".wave-letter"));
    const rows = letters.map((letter) => Number(letter.dataset.row));
    const applied: string[] = [];
    let positions: number[] = [];
    let phase = 0;
    let lastFrame = 0;
    let frame = 0;
    let visible = false;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    const paint = (time: number) => {
      letters.forEach((letter, index) => {
        const row = rows[index];
        const x = positions[index] ?? 0;
        const weightAngle = 2 * Math.PI * WEIGHT.length * x - time * WEIGHT.speed + row * WEIGHT.lineOffset;
        const roundAngle = 2 * Math.PI * ROUND.length * x - time * ROUND.speed + ROUND.offset + row * WEIGHT.lineOffset;
        const weightMix = 0.5 + 0.5 * Math.sin(weightAngle + WEIGHT.breath * Math.sin(weightAngle));
        const roundMix = 0.5 + 0.5 * Math.sin(roundAngle);
        const weight = quantize(WEIGHT.lightest + (WEIGHT.heaviest - WEIGHT.lightest) * weightMix, WEIGHT_STEP);
        const round = quantize(ROUND.sharpest + (ROUND.roundest - ROUND.sharpest) * roundMix, ROUND_STEP);
        const settings = `"wght" ${weight}, "ROND" ${round}`;
        if (applied[index] !== settings) {
          letter.style.fontVariationSettings = settings;
          applied[index] = settings;
        }
      });
    };

    // Lock every letter to its width at a mid weight so the wave never reflows the line.
    const measure = () => {
      letters.forEach((letter) => {
        letter.style.width = "";
        letter.style.fontVariationSettings = `"wght" ${MEASURE_WEIGHT}, "ROND" 50`;
      });
      const titleBox = title.getBoundingClientRect();
      const boxes = letters.map((letter) => letter.getBoundingClientRect());
      positions = boxes.map((box) => (box.left + box.width / 2 - titleBox.left) / Math.max(titleBox.width, 1));
      letters.forEach((letter, index) => {
        letter.style.width = `${boxes[index].width.toFixed(2)}px`;
      });
      applied.length = 0;
      paint(phase);
    };

    const tick = (now: number) => {
      const delta = lastFrame ? Math.min(now - lastFrame, 64) / 1000 : 0;
      lastFrame = now;
      phase += delta;
      paint(phase);
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const start = () => {
      if (frame || !animate || reducedMotion.matches || !visible || document.hidden) return;
      lastFrame = 0;
      frame = requestAnimationFrame(tick);
    };

    const sync = () => (animate && !reducedMotion.matches && visible && !document.hidden ? start() : stop());

    let resizeFrame = 0;
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(measure);
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });

    measure();
    document.fonts?.ready.then(measure);
    resizeObserver.observe(title);
    visibilityObserver.observe(title);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);

    return () => {
      stop();
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, [animate]);

  return (
    <h1 ref={titleRef} id={id} className="hero-title">
      <span className="sr-only">{label}</span>
      {lines.map((words, row) => (
        <span key={row} className="hero-line rise" style={{ "--i": row + 1 } as CSSProperties} aria-hidden="true">
          {words.map((word, wordIndex) => (
            <span key={wordIndex}>
              {wordIndex > 0 && " "}
              <span className={cn("inline-block", word.accent && "wave-accent")} data-tone={word.accent ? word.tone ?? "yellow" : undefined}>
                {[...word.text].map((letter, index) => (
                  <i key={index} className="wave-letter" data-row={row}>{letter}</i>
                ))}
              </span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
