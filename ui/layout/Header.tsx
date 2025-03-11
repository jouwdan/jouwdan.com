"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/ui/theme/theme-toggle";
import { MobileNav } from "@/ui/layout/MobileNav";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  logoText: string;
  logoInitials: string;
  navLinks: NavLink[];
}

export function Header({ logoText, logoInitials, navLinks }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
              {logoInitials}
            </div>
            <span className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              {logoText}
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-foreground hover:underline decoration-primary decoration-2 underline-offset-4",
                  isActive(link.href)
                    ? "text-foreground underline"
                    : "text-muted-foreground"
                )}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileNav navLinks={navLinks} logoText={logoText} logoInitials={logoInitials} />
          </nav>
        </div>
      </div>
    </header>
  );
} 