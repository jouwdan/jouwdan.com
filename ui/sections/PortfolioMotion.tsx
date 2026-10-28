"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const sections = root.current?.querySelectorAll<HTMLElement>(".about-section, .writing-section, .contact-section");
    function setup() {
      observer?.disconnect();
      sections?.forEach((section) => section.removeAttribute("data-reveal"));
      if (media.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      sections?.forEach((section) => {
        if (section.getBoundingClientRect().top > window.innerHeight) {
          section.dataset.reveal = "waiting";
          observer?.observe(section);
        }
      });
    }
    setup();
    media.addEventListener("change", setup);
    return () => { observer?.disconnect(); media.removeEventListener("change", setup); };
  }, []);

  return <div ref={root}>{children}</div>;
}
