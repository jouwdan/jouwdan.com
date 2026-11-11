import Link from "next/link";
import { NavLinks } from "@/ui/layout/NavLinks";

export function Header() {
  return (
    <header className="site-shell flex h-20 items-center justify-between gap-4">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Link href="/" className="wordmark" aria-label="Jordan Harrison, home">
        <span className="wordmark-mark" aria-hidden="true" />
        <span className="hidden whitespace-nowrap min-[360px]:inline">
          jordan<span className="hidden min-[440px]:inline"> harrison</span>
        </span>
      </Link>
      <NavLinks />
    </header>
  );
}
