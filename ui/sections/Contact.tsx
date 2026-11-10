"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { LocalTime } from "@/ui/sections/LocalTime";

const EMAIL = "jordan@harrison.to";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 2600);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <section id="contact" data-section className="site-shell py-10 md:py-16" aria-labelledby="contact-heading">
      <div className="contact-panel flex flex-col gap-8 px-6 py-10 md:gap-12 md:px-14 md:py-16">
        <div className="flex flex-col gap-4">
          <h2 id="contact-heading" className="section-title">Say hello.</h2>
          <p className="max-w-md text-lg leading-relaxed">
            A project or a question, either is a good reason to write. I read everything that lands here.
          </p>
        </div>
        <a href={`mailto:${EMAIL}`} className="email-link self-start" aria-label={`Email ${EMAIL}`}>
          {[...EMAIL].map((letter, index) => (
            <span key={index} className="email-letter" aria-hidden="true">{letter}</span>
          ))}
        </a>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" onClick={copyEmail} className="copy-button" data-state={copyState}>
              <span key={copyState} className="copy-icon" aria-hidden="true">{copyState === "copied" ? <Check size={18} /> : <Copy size={18} />}</span>
              {copyState === "copied" ? "Copied" : "Copy address"}
            </button>
            <span className="font-mono text-sm" role="status">{copyState === "error" ? "Copying is blocked here, select the address above." : ""}</span>
          </div>
          <LocalTime />
        </div>
      </div>
    </section>
  );
}
