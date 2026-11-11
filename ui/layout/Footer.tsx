import { ArrowUp, ArrowUpRight } from "lucide-react";

const links = [
  { href: "https://github.com/jouwdan", label: "GitHub" },
  { href: "https://linkedin.com/in/jouwdan", label: "LinkedIn" },
  { href: "https://dev.to/jouwdan", label: "DEV" },
];

export function Footer() {
  return (
    <footer className="site-shell flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8 font-mono text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} Jordan Harrison</span>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a className="link font-normal hover:text-foreground" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </li>
        ))}
        <li>
          <a className="link font-normal hover:text-foreground" href="#top">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
