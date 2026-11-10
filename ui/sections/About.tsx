import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "Day job", value: "Charles River Laboratories" },
  { label: "Community", value: "GDG Portlaoise" },
  { label: "Also", value: "v0 Ambassador" },
];

const links = [
  { href: "https://github.com/jouwdan", label: "GitHub" },
  { href: "https://linkedin.com/in/jouwdan", label: "LinkedIn" },
  { href: "https://dev.to/jouwdan", label: "DEV" },
];

export function About() {
  return (
    <section id="about" data-section className="site-shell grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:items-center" aria-labelledby="about-heading">
      <div className="flex flex-col gap-7 lg:col-span-7">
        <p className="kicker">About</p>
        <h2 id="about-heading" className="section-title">I got here through design and a camera.</h2>
        <div className="flex max-w-xl flex-col gap-5">
          <p className="prose-copy">
            I started out in graphic design and photography, then found out the web would let me build the things I was drawing. I never stopped caring about how they look and feel.
          </p>
          <p className="prose-copy">
            These days I work on digital experiences at Charles River Laboratories, and I bring local developers together through GDG Portlaoise. The projects I enjoy most are open source, because someone else gets to use what I made.
          </p>
        </div>
        <dl className="max-w-xl border-t border-border">
          {facts.map((fact) => (
            <div key={fact.label} className="fact-row">
              <dt className="font-mono text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="text-right font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="flex flex-wrap gap-x-7 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <figure className="snapshot mx-auto w-full max-w-md lg:col-span-5">
        <Image
          src="/images/nodeconf-eu-2022-small.jpg"
          alt="The NodeConf EU stage before a session, with pixel-art characters on the screen under the words The show starts soon"
          width={1400}
          height={787}
          sizes="(max-width: 1024px) 90vw, 440px"
          className="h-auto w-full rounded-sm"
        />
        <figcaption className="pt-2.5 font-mono text-sm">NodeConf EU, 2022</figcaption>
      </figure>
    </section>
  );
}
