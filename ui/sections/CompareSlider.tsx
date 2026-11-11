"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

interface CompareImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function CompareSlider({ before, after, label }: { before: CompareImage; after: CompareImage; label: string }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="compare" style={{ "--pos": `${position}%` } as CSSProperties}>
      <div className="compare-before">
        <Image src={before.src} alt={before.alt} width={before.width} height={before.height} sizes="(max-width: 1024px) 110vw, 800px" />
      </div>
      <div className="compare-after">
        <Image src={after.src} alt={after.alt} width={after.width} height={after.height} sizes="(max-width: 1024px) 95vw, 700px" />
      </div>
      <span className="compare-tag left-3" aria-hidden="true">Earlier</span>
      <span className="compare-tag right-3" aria-hidden="true">Now</span>
      <input
        type="range"
        className="compare-range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={label}
        aria-valuetext={`${position}% earlier version, ${100 - position}% current version`}
      />
      <span className="compare-handle" aria-hidden="true">
        <span className="compare-knob"><ChevronsLeftRight size={20} /></span>
      </span>
    </div>
  );
}
