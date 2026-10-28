import { Hero } from "@/ui/sections/Hero";
import { SelectedWork } from "@/ui/sections/SelectedWork";
import { About } from "@/ui/sections/About";
import { Contact } from "@/ui/sections/Contact";
import { Writing } from "@/ui/sections/Writing";
import { PortfolioMotion } from "@/ui/sections/PortfolioMotion";

export default function Home() {
  return (
    <main id="main-content">
      <PortfolioMotion>
        <Hero />
        <SelectedWork />
        <About />
        <Writing />
        <Contact />
      </PortfolioMotion>
    </main>
  );
}
