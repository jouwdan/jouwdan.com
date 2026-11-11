"use client";

import { useState, type FocusEvent, type SyntheticEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/#contact", label: "Say hello", contact: true },
];

export function NavLinks() {
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [active, setActive] = useState(false);

  function follow(event: SyntheticEvent<HTMLAnchorElement>) {
    const link = event.currentTarget;
    setPill({ left: link.offsetLeft, width: link.offsetWidth });
    setActive(true);
  }

  function release(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setActive(false);
  }

  return (
    <nav aria-label="Main navigation" className="relative flex items-center" onPointerLeave={() => setActive(false)} onBlur={release}>
      <span aria-hidden="true" className="nav-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width, opacity: active ? 1 : 0 }} />
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={cn("nav-link", link.contact && "hidden sm:inline-flex")} onPointerEnter={follow} onFocus={follow}>
          {link.label}
          {link.contact && <ArrowUpRight size={16} aria-hidden="true" />}
        </Link>
      ))}
    </nav>
  );
}
