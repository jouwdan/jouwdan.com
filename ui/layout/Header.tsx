import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="site-header site-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Link href="/" className="wordmark" aria-label="Jordan Harrison home">jordan harrison<span className="text-primary">.</span></Link>
      <nav aria-label="Main navigation" className="header-nav"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/blog">Writing</Link><Link href="/#contact" className="header-contact">Let&apos;s talk <ArrowUpRight size={16} /></Link></nav>
    </header>
  );
}
