"use client";

import { useRef, type CSSProperties, type ElementType, type HTMLAttributes, type PointerEvent } from "react";

type ProximityProps = HTMLAttributes<HTMLElement> & {
  as?: "h1" | "a" | "span";
  href?: string;
};

export function Proximity({ as = "span", children, ...props }: ProximityProps) {
  const Tag = as as ElementType;
  const target = useRef<HTMLElement>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const frame = useRef(0);

  function paint() {
    frame.current = 0;
    const letters = target.current?.querySelectorAll<HTMLElement>(".prox-letter");
    if (!letters) return;
    const position = pointer.current;
    if (!position) {
      letters.forEach((letter) => letter.style.removeProperty("--pull"));
      return;
    }
    const bounds = Array.from(letters, (letter) => letter.getBoundingClientRect());
    letters.forEach((letter, index) => {
      const box = bounds[index];
      const distance = Math.hypot(position.x - (box.left + box.width / 2), position.y - (box.top + box.height / 2));
      const pull = Math.max(0, 1 - distance / (box.height * 1.5)) ** 2;
      letter.style.setProperty("--pull", pull.toFixed(3));
    });
  }

  function schedulePaint() {
    if (!frame.current) frame.current = requestAnimationFrame(paint);
  }

  function track(event: PointerEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    pointer.current = { x: event.clientX, y: event.clientY };
    schedulePaint();
  }

  function release() {
    pointer.current = null;
    schedulePaint();
  }

  function releaseTouch(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") release();
  }

  return (
    <Tag
      ref={target}
      onPointerDown={track}
      onPointerMove={track}
      onPointerLeave={release}
      onPointerUp={releaseTouch}
      onPointerCancel={release}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Letters({ text, start = 0 }: { text: string; start?: number }) {
  return [...text].map((letter, index) => (
    <span key={index} className="prox-letter" style={{ "--n": start + index } as CSSProperties}>{letter}</span>
  ));
}
