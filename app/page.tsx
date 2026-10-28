import { Hero } from "@/ui/sections/Hero";
import { SelectedWork } from "@/ui/sections/SelectedWork";
import { About } from "@/ui/sections/About";
import { Contact } from "@/ui/sections/Contact";
import { Writing } from "@/ui/sections/Writing";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <About />
      <Writing />
      <Contact />
    </main>
  );
}
