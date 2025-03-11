import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ButtonLink {
  href: string;
  label: string;
  variant: "default" | "outline";
  icon?: React.ReactNode;
}

interface HeroProps {
  badgeText: string;
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  buttons: ButtonLink[];
}

export function Hero({
  badgeText,
  titleStart,
  titleHighlight,
  titleEnd,
  description,
  buttons,
}: HeroProps) {
  return (
    <section className="py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-[40%] right-0 -z-10 h-[50rem] w-[50rem] rounded-full bg-primary/5 blur-[10rem]"></div>
      <div className="absolute -bottom-[20%] left-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[10rem]"></div>
      <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium flex items-center gap-1.5 group">
          <span>{badgeText}</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
          {titleStart}
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            {titleHighlight}
          </span>
          <br />
          {titleEnd}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {description}
        </p>
        <div className="space-x-4 mt-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              className={`rounded-full px-8 transition-all duration-300 hover:shadow-lg ${
                button.variant === "default"
                  ? "hover:shadow-primary/30"
                  : "hover:border-primary"
              }`}
              asChild>
              <Link href={button.href}>
                {button.label}
                {button.icon && button.icon}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
} 