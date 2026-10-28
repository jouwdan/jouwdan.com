import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero site-shell" aria-labelledby="hero-title">
      <div className="hero-eyebrow entrance">
        <span className="eyebrow"><span className="status-dot" />Independent projects. Shared possibilities.</span>
        <span className="hero-coordinate">Based in Ireland · Building for everywhere</span>
      </div>
      <h1 id="hero-title" className="hero-title entrance">
        Full-stack mind.<br />
        <span className="hero-second-line"><span className="font-serif italic">Frontend</span> heart<span className="hero-period">.</span></span>
      </h1>
      <div className="hero-bottom entrance">
        <div className="hero-intro">
          <span className="intro-mark" aria-hidden="true">jh<span>.</span></span>
          <p>I&apos;m Jordan Harrison. I build thoughtful digital experiences, from the first interaction to the infrastructure behind it.</p>
        </div>
        <a className="text-link hero-work-link" href="#work">Explore my work <span className="round-icon"><ArrowDown size={18} /></span></a>
      </div>
      <div className="hero-footnote entrance">
        <span>Developer by trade. Maker by nature.</span>
        <a href="https://github.com/jouwdan" target="_blank" rel="noopener noreferrer">Building in the open <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
