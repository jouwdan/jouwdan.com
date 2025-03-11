import { aboutData } from "@/ui/data/site-data";

interface AboutProps {
  badgeText?: string;
  description?: string;
}

export function About({ badgeText = aboutData.badgeText, description = aboutData.description }: AboutProps) {
  return (
    <section id="about" className="container mx-auto space-y-8 py-8 md:py-12 lg:py-24 relative">
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38%] h-[25rem] w-[80%] dark:opacity-70 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-600/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary/30 dark:to-purple-600/30"></div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{badgeText}</div>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            {aboutData.titleGradient}
          </span>{" "}
          {aboutData.titleAfter}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {description}
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {aboutData.serviceCards.map((card, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl border bg-background p-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex flex-col justify-between rounded-lg p-6">
              <div className="space-y-2">
                <div className={`h-12 w-12 rounded-full ${card.iconBgColor} flex items-center justify-center mb-4`}>
                  <div className={`h-6 w-6 rounded-full ${card.iconColor}`}></div>
                </div>
                <h3 className="font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto grid max-w-[64rem] grid-cols-1 gap-8 md:grid-cols-2 mt-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{aboutData.backgroundTitle}</h3>
          <p className="text-muted-foreground">
            {aboutData.backgroundDescription1}
          </p>
          <p className="text-muted-foreground">
            {aboutData.backgroundDescription2}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{aboutData.technicalSkillsTitle}</h3>
          <div className="grid grid-cols-2 gap-2">
            {aboutData.skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 