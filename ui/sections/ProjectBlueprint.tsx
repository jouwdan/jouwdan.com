import type { CSSProperties } from "react";
import { Braces, Database, Layers, Network } from "lucide-react";

const blueprints = {
  meith: {
    caption: "Top to bottom, as a request travels",
    layers: [
      { icon: Layers, name: "Interface", detail: "Server-rendered threads, typed themes" },
      { icon: Braces, name: "Application", detail: "Next.js, TypeScript, typed plugins" },
      { icon: Database, name: "Foundation", detail: "PostgreSQL for storage, search and jobs" },
    ],
  },
  tutors: {
    caption: "Where the reader sits in the monorepo",
    layers: [
      { icon: Layers, name: "Course reader", detail: "Dashboard shell and course navigation" },
      { icon: Braces, name: "Design system", detail: "Shared Svelte components in TypeScript" },
      { icon: Network, name: "Platform", detail: "Course generators and classroom tools" },
    ],
  },
};

export function ProjectBlueprint({ slug }: { slug: keyof typeof blueprints }) {
  const blueprint = blueprints[slug];
  return (
    <div className="flex min-h-full flex-col justify-center gap-4 p-5 md:p-8">
      <p className="font-mono text-sm text-primary">{blueprint.caption}</p>
      <ol className="flex flex-col gap-2.5" aria-label="Technical layers">
        {blueprint.layers.map(({ icon: Icon, name, detail }, index) => (
          <li key={name} className="layer" style={{ "--i": index } as CSSProperties}>
            <Icon size={20} className="shrink-0 text-primary" aria-hidden="true" />
            <div className="flex min-w-0 flex-col gap-0.5">
              <strong className="font-semibold">{name}</strong>
              <span className="text-sm leading-relaxed text-muted-foreground">{detail}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
