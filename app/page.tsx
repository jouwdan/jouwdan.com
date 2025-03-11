import { Hero } from "@/ui/sections/Hero";
import { About } from "@/ui/sections/About";
import { Experience } from "@/ui/sections/Experience";
import { Contact } from "@/ui/sections/Contact";
import {
  aboutData,
  contactData,
  experienceData,
  heroData,
} from "@/ui/data/site-data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-slate-50 dark:from-background dark:to-slate-900/20">
      <main>
        <Hero
          badgeText={heroData.badgeText}
          titleStart={heroData.titleStart}
          titleHighlight={heroData.titleHighlight}
          titleEnd={heroData.titleEnd}
          description={heroData.description}
          buttons={heroData.buttons}
        />
        <About
          badgeText={aboutData.badgeText}
          description={aboutData.description}
        />
        <Experience
          badgeText={experienceData.badgeText}
          title={experienceData.title}
          highlightText={experienceData.highlightText}
          description={experienceData.description}
          jobs={experienceData.jobs}
        />
        <Contact
          badgeText={contactData.badgeText}
          title={contactData.title}
          highlightText={contactData.highlightText}
          description={contactData.description}
          email={contactData.email}
          emailDescription={contactData.emailDescription}
          socialLinks={contactData.socialLinks}
        />
      </main>
    </div>
  );
}
