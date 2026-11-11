"use client";

import { useState } from "react";
import Image from "next/image";
import { AppWindow, ArrowUpRight, Code2, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { CompareSlider } from "@/ui/sections/CompareSlider";
import { ProjectBlueprint } from "@/ui/sections/ProjectBlueprint";

type Lens = "interface" | "internals";

const projects = [
  {
    slug: "meith" as const,
    name: "Meith",
    domain: "meith.dev",
    href: "https://meith.dev",
    repo: "https://github.com/meith-dev/meith",
    role: "Creator, full-stack",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    interface: {
      title: "Forum software you host yourself.",
      body: "Meith is open-source forum software for communities that want their own domain and their own data. Threads render on the server, so you can read and post with JavaScript switched off. A typed theme system means no two boards have to look alike.",
    },
    internals: {
      title: "One Postgres database, on a server you own.",
      body: "Meith is built to be self-hosted, so your community's data stays with you and not with a hosting platform. Storage, search and background jobs all run on a single PostgreSQL database, and it deploys to your own server with Docker or Coolify. Plugins are typed, and there are importers for MyBB and phpBB boards.",
    },
  },
  {
    slug: "tutors" as const,
    name: "Tutors",
    domain: "tutors.dev",
    href: "https://tutors.dev",
    repo: "https://github.com/tutors-sdk/tutors-mono-repo",
    role: "Contributor, frontend and design system",
    stack: ["Svelte", "TypeScript", "Design systems"],
    interface: {
      title: "A learning platform, rebuilt around a dashboard.",
      body: "Tutors is an open learning toolkit used for remote courses at SETU Waterford. I moved it to Svelte a while back, then recently rebuilt the interface with a sidebar that stays put and a course structure you can read at a glance. Drag the handle to compare the two.",
    },
    internals: {
      title: "One reader in a much bigger monorepo.",
      body: "The course reader I work on is one package in a typed, layered monorepo, next to the course generators and the live classroom tools. I built it alongside educators and Red Hat engineers, and it won the Red Hat-sponsored Best Project award at SETU in 2023.",
    },
  },
];

const hints: Record<Lens, string> = {
  interface: "Showing the interface. Flip the switch to see what runs underneath.",
  internals: "Showing the engineering. Flip back for the part people actually click on.",
};

export function SelectedWork() {
  const [lens, setLens] = useState<Lens>("interface");

  return (
    <section id="work" data-section className="site-shell flex flex-col gap-12 py-20 md:gap-16 md:py-28" aria-labelledby="work-heading">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5">
          <p className="kicker">Work</p>
          <h2 id="work-heading" className="section-title max-w-2xl">Two projects I keep coming back to.</h2>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <div className="lens-switch" data-lens={lens} role="group" aria-label="Choose what the projects show">
            <button type="button" aria-pressed={lens === "interface"} onClick={() => setLens("interface")}>
              <AppWindow size={16} aria-hidden="true" /> Interface
            </button>
            <button type="button" aria-pressed={lens === "internals"} onClick={() => setLens("internals")}>
              <Cpu size={16} aria-hidden="true" /> Internals
            </button>
          </div>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground" role="status">{hints[lens]}</p>
        </div>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((project, index) => (
          <article key={project.slug} className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className={cn("lg:col-span-7", index % 2 === 1 && "lg:order-2")}>
              <div className="window">
                <div className="window-bar">
                  <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
                  <a className="window-url" href={project.href} target="_blank" rel="noopener noreferrer">
                    <span className="truncate">{project.domain}</span>
                    <ArrowUpRight size={15} className="shrink-0" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
                <div key={lens} className={cn("window-body", lens === "internals" && "lg:aspect-[16/10]")}>
                  {lens === "internals" ? (
                    <ProjectBlueprint slug={project.slug} />
                  ) : project.slug === "tutors" ? (
                    <CompareSlider
                      label="Compare the same Full Stack Web Development course in the earlier Tutors and the current redesign"
                      before={{ src: "/images/tutors-full-stack-earlier-light.png", width: 1600, height: 1000, alt: "The Full Stack Web Development course in the earlier Tutors, with white topic cards from Node to JWT under two dark toolbars of icon buttons" }}
                      after={{ src: "/images/tutors-full-stack-current-light.png", width: 1600, height: 1000, alt: "The same Full Stack Web Development course in the redesigned Tutors, with a labelled sidebar beside the same topic cards from Node to JWT" }}
                    />
                  ) : (
                    <Image
                      src="/images/meith.png"
                      alt="A Meith forum showing discussion categories beside the latest threads and posts"
                      width={2560}
                      height={1640}
                      sizes="(max-width: 1024px) 95vw, 700px"
                      className="aspect-[16/10] w-full object-cover object-left-top"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <p className="kicker">{project.role}</p>
              <div key={lens} className="project-copy flex flex-col gap-4">
                <h3 className="text-balance text-3xl font-semibold leading-tight tracking-tight">{project[lens].title}</h3>
                <p className="prose-copy">{project[lens].body}</p>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={`${project.name} is built with`}>
                {project.stack.map((item) => <li key={item} className="chip">{item}</li>)}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <a className="btn" href={project.href} target="_blank" rel="noopener noreferrer">
                  Visit {project.domain}
                  <span className="btn-icon"><ArrowUpRight size={18} aria-hidden="true" /></span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a className="btn-outline" href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Code2 size={17} aria-hidden="true" /> Source
                  <span className="sr-only">for {project.name} on GitHub (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
