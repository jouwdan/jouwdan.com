import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface SocialLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface ContactProps {
  badgeText: string;
  title: string;
  highlightText: string;
  description: string;
  email: string;
  emailDescription: string;
  socialLinks: SocialLink[];
}

export function Contact({ 
  badgeText, 
  title, 
  highlightText, 
  description,
  email,
  emailDescription,
  socialLinks
}: ContactProps) {
  return (
    <section
      id="contact"
      className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24 relative">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
          {badgeText}
        </div>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {title}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            {highlightText}
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {description}
        </p>
      </div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 mt-8">
        <div className="flex flex-col items-center gap-2 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <a
            href={`mailto:${email}`}
            className="text-xl font-medium hover:text-primary transition-colors">
            {email}
          </a>
          <p className="text-muted-foreground text-center max-w-md mt-2">
            {emailDescription}
          </p>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary"
                asChild>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer">
                  <span className="sr-only">{link.label}</span>
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 