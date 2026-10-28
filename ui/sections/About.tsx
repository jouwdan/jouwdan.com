import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="about-section site-shell" aria-labelledby="about-heading">
      <div className="about-label"><span className="eyebrow"><span className="section-dot" />A LITTLE ABOUT ME</span></div>
      <div className="about-content">
        <h2 id="about-heading">Good software is technical.<br /><span className="font-serif italic">Great software is human.</span></h2>
        <div className="about-copy"><p>I&apos;ve always been drawn to where creativity meets technology. What started with graphic design and photography turned into a love for building things on the web—and caring just as much about how they feel as how they work.</p><p>These days, I&apos;m a frontend-led full-stack developer in Portlaoise, Ireland. I work on digital experiences at Charles River Laboratories, build open-source projects, and bring developers together through GDG Portlaoise.</p><p>I like thoughtful interfaces, understandable code, and projects that give something back. Preferably all three.</p></div>
        <div className="about-links"><a href="https://github.com/jouwdan" target="_blank" rel="noopener noreferrer">Find me on GitHub <ArrowUpRight size={16} /></a><a href="https://linkedin.com/in/jouwdan" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a><span>v0 Ambassador</span></div>
      </div>
    </section>
  );
}
