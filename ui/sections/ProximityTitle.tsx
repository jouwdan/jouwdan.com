import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { Letters, Proximity } from "@/ui/sections/Proximity";

export type TitleWord = { text: string; accent?: boolean };

function withLetterOffsets(lines: TitleWord[][]) {
  let count = 0;
  return lines.map((words) =>
    words.map((word) => {
      const start = count;
      count += word.text.length;
      return { ...word, start };
    }),
  );
}

export function ProximityTitle({ id, lines, wave = false }: { id?: string; lines: TitleWord[][]; wave?: boolean }) {
  const label = lines.map((words) => words.map((word) => word.text).join(" ")).join(" ");

  return (
    <Proximity as="h1" id={id} className={cn("hero-title", wave && "prox-wave")}>
      <span className="sr-only">{label}</span>
      {withLetterOffsets(lines).map((words, lineIndex) => (
        <span key={lineIndex} className="hero-line rise" style={{ "--i": lineIndex + 1 } as CSSProperties} aria-hidden="true">
          {words.map((word, wordIndex) => (
            <span key={word.start}>
              {wordIndex > 0 && " "}
              <span className={cn("inline-block", word.accent && "text-primary")}>
                <Letters text={word.text} start={word.start} />
              </span>
            </span>
          ))}
        </span>
      ))}
    </Proximity>
  );
}
