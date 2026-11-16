"use client";

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { Heart, MapPin } from "lucide-react";

const BURST_POINTS = 24;
const burstPath = `polygon(${Array.from({ length: BURST_POINTS }, (_, index) => {
  const angle = (index / BURST_POINTS) * Math.PI * 2;
  const radius = index % 2 === 0 ? 50 : 42;
  return `${(50 + Math.cos(angle) * radius).toFixed(2)}% ${(50 + Math.sin(angle) * radius).toFixed(2)}%`;
}).join(", ")})`;

function Draggable({ index, children }: { index: number; children: ReactNode }) {
  const item = useRef<HTMLLIElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const drag = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);

  function start(event: PointerEvent<HTMLLIElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { startX: event.clientX, startY: event.clientY, baseX: offset.current.x, baseY: offset.current.y };
    event.currentTarget.dataset.dragging = "true";
  }

  function move(event: PointerEvent<HTMLLIElement>) {
    const current = drag.current;
    const element = item.current;
    if (!current || !element) return;
    offset.current = { x: current.baseX + event.clientX - current.startX, y: current.baseY + event.clientY - current.startY };
    element.style.setProperty("--x", `${offset.current.x}px`);
    element.style.setProperty("--y", `${offset.current.y}px`);
  }

  function end(event: PointerEvent<HTMLLIElement>) {
    if (!drag.current) return;
    drag.current = null;
    event.currentTarget.dataset.dragging = "false";
  }

  return (
    <li
      ref={item}
      className="pile-item"
      style={{ "--i": index } as CSSProperties}
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={end}
      onPointerCancel={end}
    >
      {children}
    </li>
  );
}

const tilt = (degrees: number) => ({ "--tilt": `${degrees}deg` }) as CSSProperties;

export function StickerPile() {
  const stickers = [
    <div key="name" className="sticker peel name-tag" data-tone="pink" style={tilt(-6)}>
      <div className="name-tag-band">
        <span className="text-2xl leading-none [font-variation-settings:'wght'_880,'ROND'_100]">HELLO</span>
        <span className="text-xs font-semibold">my name is</span>
      </div>
      <div className="name-tag-body">Jordan</div>
    </div>,
    <div key="place" className="sticker peel inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-semibold" data-tone="blue" style={tilt(4)}>
      <MapPin size={18} aria-hidden="true" />
      Portlaoise, Ireland
    </div>,
    <div key="burst" className="burst" data-tone="green" style={tilt(-10)}>
      <div className="burst-shape" style={{ clipPath: burstPath }}>
        <span className="flex flex-col leading-none">
          <span className="text-[11px] font-bold uppercase tracking-widest">Mostly</span>
          <span className="text-xl [font-variation-settings:'wght'_880,'ROND'_100]">open</span>
          <span className="text-xl [font-variation-settings:'wght'_880,'ROND'_100]">source</span>
        </span>
      </div>
    </div>,
    <div key="ticket" className="sticker peel ticket" data-tone="yellow" style={tilt(-3)}>
      <div className="flex flex-col justify-center px-4 py-3">
        <span className="text-[11px] font-bold uppercase tracking-widest">Admit one</span>
        <span className="text-xl leading-tight [font-variation-settings:'wght'_860,'ROND'_80]">Full-stack</span>
      </div>
      <div className="ticket-stub">
        <span className="font-mono text-[11px] uppercase">DB</span>
        <span className="font-mono text-[11px] uppercase">to UI</span>
      </div>
    </div>,
    <div key="ambassador" className="sticker peel rounded-xl px-4 py-2.5 text-sm font-bold" data-tone="paper" style={tilt(5)}>
      v0 Ambassador
    </div>,
    <div key="heart" className="heart-sticker" data-tone="pink" style={tilt(12)}>
      <Heart size={52} fill="currentColor" strokeWidth={0} aria-hidden="true" />
    </div>,
  ];

  return (
    <ul className="pile" aria-label="A few things about me">
      {stickers.map((sticker, index) => (
        <Draggable key={sticker.key} index={index}>{sticker}</Draggable>
      ))}
    </ul>
  );
}
