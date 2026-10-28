"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Code2, Layers, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Meith", slug: "meith", domain: "meith.dev", href: "https://meith.dev",
    repo: "https://github.com/meith-dev/meith", category: "COMMUNITY, ON YOUR TERMS",
    summary: "A proper home for your community.",
    description: "Open-source forums for conversations worth keeping. Your domain, your data, your little corner of the internet.",
    role: "Creator · Full-stack development", image: "/images/meith.png",
    alt: "Meith forum interface with discussion categories, latest threads and community posts",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    frontend: "Server-rendered discussions, accessible interfaces, and a typed theme system that lets every community feel like itself. Reading and posting work even without JavaScript.",
    backend: "PostgreSQL-backed storage, search and background work. A typed plugin system, migrations from MyBB and phpBB, and self-hosted deployment with Docker, Coolify or Vercel.",
    note: "Self-hosted. Open source. Yours to keep.",
  },
  {
    name: "Tutors", slug: "tutors", domain: "tutors.dev", href: "https://tutors.dev",
    repo: "https://github.com/tutors-sdk/tutors-mono-repo", category: "A BETTER WAY TO LEARN",
    summary: "Less friction. More lightbulb moments.",
    description: "An open learning toolkit, reimagined with a fresh, dashboard-like design system. Clearer navigation. More room to learn.",
    role: "Contributor · Frontend & design system", image: "/images/tutors-current.png",
    alt: "The redesigned Tutors Reference Manual dashboard with persistent sidebar navigation, learning resource cards, and a reference panel",
    stack: ["Svelte", "TypeScript", "Design systems"],
    frontend: "I recently rebuilt Tutors with a fresh, dashboard-like design system: a persistent navigation shell, clearer course structure, and a consistent visual language across the learning experience. This builds on my earlier Svelte migration and collaboration with educators and Red Hat engineers.",
    backend: "Part of a wider open-source platform: a course reader, course generators, live classroom tools and activity tracking, organised into a typed, layered monorepo. Used for remote courses at SETU Waterford.",
    note: "Recognised with the Red Hat-sponsored SETU Best Project award, 2023.",
  },
];

export function SelectedWork() {
  const [lens, setLens] = useState<"experience" | "engineering">("experience");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" className="work-section site-shell" aria-labelledby="work-heading">
      <div className="section-heading">
        <div className="flex items-center gap-3"><span className="section-dot" /><h2 id="work-heading">Selected work</h2><span className="section-aside">Always a work in progress.</span></div>
        <div className="lens-switch" aria-label="Project perspective">
          <button type="button" aria-pressed={lens === "experience"} onClick={() => setLens("experience")} className={cn(lens === "experience" && "is-active")}><Layers size={15} /> The experience</button>
          <button type="button" aria-pressed={lens === "engineering"} onClick={() => setLens("engineering")} className={cn(lens === "engineering" && "is-active")}><Code2 size={16} /> Under the hood</button>
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.slug} className={cn("project", `project-${project.slug}`)}>
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-stage" aria-label={`Visit ${project.name} — opens in a new tab`}>
              <div className="stage-top"><span className="project-wordmark">{project.name.toLowerCase()}<span>.</span></span><span className="stage-category">{project.category}</span><span className="project-open"><ArrowUpRight size={23} /></span></div>
              <div className="project-image-wrap"><Image src={project.image} alt={project.alt} width={1568} height={1004} sizes="(max-width: 760px) 95vw, 50vw" className="project-image" /></div>
              <div className="stage-bottom"><span>{project.domain}</span><span>Explore project <ArrowUpRight size={15} /></span></div>
            </a>
            <div className="project-caption"><span>{project.role}</span><a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source on GitHub`}>Source code <ArrowUpRight size={15} /></a></div>
            <h3>{project.summary}</h3>
            <p className="project-description" aria-live="polite">{lens === "experience" ? project.description : project.backend}</p>
            <div className="project-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}<span className="open-source-tag">Open source <ArrowUpRight size={12} /></span></div>
            <button className="project-details-trigger" type="button" aria-expanded={expanded === project.slug} aria-controls={`${project.slug}-details`} onClick={() => setExpanded(expanded === project.slug ? null : project.slug)}>A closer look {expanded === project.slug ? <Minus size={16} /> : <Plus size={16} />}</button>
            <div id={`${project.slug}-details`} hidden={expanded !== project.slug} className="project-details"><h4>The frontend</h4><p>{project.frontend}</p><h4>The foundations</h4><p>{project.backend}</p><p className="project-note">{project.note}</p><a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">Explore the code <ArrowRight size={16} /></a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
