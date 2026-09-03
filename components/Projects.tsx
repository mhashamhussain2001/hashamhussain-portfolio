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
    title: "Keyword vs. Meaning Search",
    description:
      "A full-stack search engine comparing BM25 (keyword-based ranking) against neural embeddings (semantic ranking) over 500+ real Spotify tracks. Includes live Spotify search integrated as a retrieve-then-rerank layer, with automatic fallback to a precomputed local corpus if the live call fails or times out.",
    tags: ["Python", "FastAPI", "onnxruntime", "rank_bm25", "Spotify Web API", "JavaScript"],
    links: [
      {
        label: "Live demo",
        href: "https://music.hashamhussain.com",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/mhashamhussain2001/keyword-vs-meaning-search",
      },
    ],
  },
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
      <h2 className="text-3xl font-bold text-foreground">Projects</h2>
      <div className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-3 rounded-xl border border-border p-6 transition-colors hover:border-border-strong"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-muted">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-panel px-3 py-1 text-xs font-medium text-muted"
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
                    className="text-accent-blue underline underline-offset-4 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {project.embedSrc && (
              <div className="mt-4 w-full overflow-hidden rounded-lg border border-border">
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
