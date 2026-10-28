"use client";

import { useState, type PointerEvent, type FocusEvent } from "react";
import { ProjectBlueprint } from "./ProjectBlueprint";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Code2, Layers, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

function tiltPreview(event: PointerEvent<HTMLAnchorElement>) {
  if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const target = event.currentTarget;
  const bounds = target.getBoundingClientRect();
  target.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -5}deg`);
  target.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 5}deg`);
}

function resetPreview(event: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>) {
  event.currentTarget.style.removeProperty("--tilt-x");
  event.currentTarget.style.removeProperty("--tilt-y");
}

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
        <div className="lens-switch" data-lens={lens} role="group" aria-label="Project perspective" aria-controls="project-perspectives">
          <button type="button" aria-pressed={lens === "experience"} onClick={() => setLens("experience")} className={cn(lens === "experience" && "is-active")}><Layers size={15} /> The experience</button>
          <button type="button" aria-pressed={lens === "engineering"} onClick={() => setLens("engineering")} className={cn(lens === "engineering" && "is-active")}><Code2 size={16} /> Under the hood</button>
        </div>
      </div>
      <p className="lens-description" role="status"><span className="section-dot" />{lens === "experience" ? "The finished experience. Explore what each project feels like." : "Blueprint mode. Explore the interfaces, systems, and foundations behind the experience."}</p>
      <div id="project-perspectives" className="project-grid" data-lens={lens}>
        {projects.map((project) => (
          <article key={project.slug} className={cn("project", `project-${project.slug}`)}>
            <a href={lens === "experience" ? project.href : project.repo} target="_blank" rel="noopener noreferrer" className="project-stage" onPointerMove={tiltPreview} onPointerLeave={resetPreview} onBlur={resetPreview} aria-label={`${lens === "experience" ? "Visit" : "Explore the source of"} ${project.name} — opens in a new tab`}>
              <div className="stage-top"><span className="project-wordmark">{project.name.toLowerCase()}<span>.</span></span><span className="stage-category">{lens === "experience" ? project.category : "SYSTEM BLUEPRINT"}</span><span className="project-open"><ArrowUpRight size={23} /></span></div>
              <div className="project-stage-content" key={lens}>
                {lens === "engineering" ? <ProjectBlueprint slug={project.slug as "meith" | "tutors"} /> : <div className="project-image-wrap"><Image src={project.image} alt={project.alt} width={1568} height={1004} sizes="(max-width: 760px) 95vw, 50vw" className="project-image" /></div>}
              </div>
              <div className="stage-bottom"><span>{lens === "experience" ? project.domain : "Open source / inspect the build"}</span><span>{lens === "experience" ? "Explore project" : "View source"} <ArrowUpRight size={15} /></span></div>
            </a>
            <div className="project-caption"><span>{project.role}</span><a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source on GitHub`}>Source code <ArrowUpRight size={15} /></a></div>
            <div className="project-copy" key={lens}>
              <h3>{lens === "experience" ? project.summary : project.slug === "meith" ? "From interface to infrastructure." : "A design system for open learning."}</h3>
              <p className="project-description">{lens === "experience" ? project.description : project.backend}</p>
            </div>
            <div className="project-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}<span className="open-source-tag">Open source <ArrowUpRight size={12} /></span></div>
            <button className="project-details-trigger" type="button" aria-expanded={expanded === project.slug} aria-controls={`${project.slug}-details`} onClick={() => setExpanded(expanded === project.slug ? null : project.slug)}>A closer look {expanded === project.slug ? <Minus size={16} /> : <Plus size={16} />}</button>
            <div id={`${project.slug}-details`} hidden={expanded !== project.slug} className="project-details"><h4>The frontend</h4><p>{project.frontend}</p><h4>The foundations</h4><p>{project.backend}</p><p className="project-note">{project.note}</p><a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">Explore the code <ArrowRight size={16} /></a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
