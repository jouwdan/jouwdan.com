import { ArrowDown, Braces, Database, Layers, Network } from "lucide-react";

const blueprints = {
  meith: {
    title: "Community, end to end",
    layers: [
      { icon: Layers, name: "Interface", detail: "Server-rendered discussions · Typed themes" },
      { icon: Braces, name: "Application", detail: "Next.js · TypeScript · Plugin system" },
      { icon: Database, name: "Foundation", detail: "PostgreSQL · Search · Background work" },
    ],
    note: "Self-hostable by design",
  },
  tutors: {
    title: "A connected learning toolkit",
    layers: [
      { icon: Layers, name: "Experience", detail: "Dashboard shell · Course navigation" },
      { icon: Braces, name: "Interface system", detail: "Svelte · TypeScript · Shared components" },
      { icon: Network, name: "Platform", detail: "Course generators · Classroom tools" },
    ],
    note: "Built in a layered monorepo",
  },
};

export function ProjectBlueprint({ slug }: { slug: keyof typeof blueprints }) {
  const blueprint = blueprints[slug];
  return (
    <div className="project-blueprint">
      <div className="blueprint-heading"><CodeLabel /> <span>{blueprint.title}</span></div>
      <ol className="blueprint-layers" aria-label="Technical layers">
        {blueprint.layers.map(({ icon: Icon, name, detail }, index) => (
          <li key={name} style={{ animationDelay: `${index * 70}ms` }}>
            <div className="blueprint-layer"><Icon size={19} aria-hidden="true" /><div><strong>{name}</strong><span>{detail}</span></div><span className="blueprint-index" aria-hidden="true">0{index + 1}</span></div>
            {index < blueprint.layers.length - 1 && <ArrowDown className="blueprint-connector" size={14} aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <div className="blueprint-note"><span className="section-dot" />{blueprint.note}</div>
    </div>
  );
}

function CodeLabel() {
  return <span className="blueprint-code" aria-hidden="true">{"</>"}</span>;
}
