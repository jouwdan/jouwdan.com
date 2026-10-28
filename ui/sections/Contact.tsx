"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  useEffect(() => {
    if (copyState !== "copied") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 2400);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("jordan@harrison.to");
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }
  return (
    <section id="contact" className="contact-section site-shell" aria-labelledby="contact-heading">
      <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
      <a href="mailto:jordan@harrison.to" className="contact-heading-link"><h2 id="contact-heading">Let&apos;s make<br /><span className="font-serif italic">something matter.</span></h2><ArrowUpRight className="contact-arrow" strokeWidth={1} /></a>
      <div className="contact-bottom"><p>A project, a collaboration, or a good conversation.<br />My inbox is open.</p><div className="email-actions"><a href="mailto:jordan@harrison.to">jordan@harrison.to</a><button type="button" onClick={copyEmail} aria-label="Copy email address" className="copy-button" data-state={copyState}><span key={copyState} className="copy-icon">{copyState === "copied" ? <Check size={18} /> : <Copy size={18} />}</span></button><span className="copy-feedback" role="status">{copyState === "copied" ? "Copied!" : copyState === "error" ? "Please copy the email above." : ""}</span></div></div>
    </section>
  );
}
