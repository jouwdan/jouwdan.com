interface Job {
  company: string;
  title: string;
  period: string;
  type?: "education" | "work";
  description?: string;
  techStack?: string;
  accomplishments?: string[];
  achievement?: string;
}

interface ExperienceProps {
  badgeText: string;
  title: string;
  highlightText: string;
  description: string;
  jobs: Job[];
}

export function Experience({ 
  badgeText, 
  title, 
  highlightText, 
  description, 
  jobs 
}: ExperienceProps) {
  return (
    <section
      id="experience"
      className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20"></div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
          {badgeText}
        </div>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {title}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            {highlightText}
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {description}
        </p>
      </div>
      <div className="mx-auto max-w-[64rem] mt-12">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
          {jobs.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 dark:bg-slate-900 dark:border-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 font-bold">
                  {index + 1}
                </span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100">
                    {job.title}
                  </div>
                  <time className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {job.period}
                  </time>
                </div>
                <div className="text-slate-900 dark:text-slate-100 font-medium">
                  {job.company}
                </div>
                {job.description && (
                  <p className="mt-2 text-slate-900 dark:text-slate-100">
                    {job.description}
                  </p>
                )}
                {job.techStack && (
                  <div className="mt-2 text-sm text-primary font-medium">
                    {job.techStack}
                  </div>
                )}
                {job.achievement && (
                  <div className="mt-2 text-sm font-medium text-primary">
                    Achievement: {job.achievement}
                  </div>
                )}
                <div className="mt-2">
                  <ul className="space-y-2">
                    {job.accomplishments && job.accomplishments.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 