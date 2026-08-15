type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  embedSrc?: string;
};

const projects: Project[] = [
  {
    title: "Does Song Energy Predict Popularity?",
    description:
      "Analyzed 25,736 Spotify tracks across six genres to test whether a song's energy predicts its popularity. Used Pearson correlation and linear regression with an energy × genre interaction term. Found a statistically significant but very weak negative relationship — energy explains under 1% of the variance in popularity, and it does not meaningfully change across genres.",
    tags: ["R", "tidyverse", "ggplot2", "Linear Regression", "Tableau"],
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/mhashamhussain2001/song-energy-popularity",
      },
      {
        label: "Tableau dashboard",
        href: "https://public.tableau.com/views/SongEnergyandPopularityAcrossGenres/SongEnergyvsPopularityAGenreBreakdown",
      },
      {
        label: "Report (PDF)",
        href: "https://github.com/mhashamhussain2001/song-energy-popularity/blob/main/Report.pdf",
      },
    ],
    embedSrc:
      "https://public.tableau.com/views/SongEnergyandPopularityAcrossGenres/SongEnergyvsPopularityAGenreBreakdown?:showVizHome=no&:embed=true",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-24">
      <h2 className="text-3xl font-bold text-zinc-900">Projects</h2>
      <div className="mt-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-6"
          >
            <h3 className="text-lg font-semibold text-zinc-900">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-zinc-600">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-4 text-sm font-medium">
              {project.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {project.embedSrc && (
              <div className="mt-4 w-full overflow-hidden rounded-lg border border-zinc-200">
                <iframe
                  src={project.embedSrc}
                  title={`${project.title} — Tableau dashboard`}
                  loading="lazy"
                  className="h-[650px] w-full border-0"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
