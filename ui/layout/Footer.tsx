import Link from "next/link";

interface FooterProps {
  name: string;
  year: number;
}

export function Footer({ name, year }: FooterProps) {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4">
            © {year} {name}. All Rights Reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
} 