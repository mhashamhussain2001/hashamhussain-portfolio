import Image from "next/image";
import Reveal from "@/components/Reveal";

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
  image?: { src: string; alt: string; width: number; height: number };
};

const projects: Project[] = [
  {
    title: "Keeper — Songwriting Voice Memo Organizer",
    description:
      "Finds the takes in long songwriting voice memos and files them by what you said. An Audio Spectrogram Transformer on a Modal GPU separates singing and playing from speech and silence, then Meta's Muse Spark reads the spoken commands around each take (\"file that as a verse\", \"scrap that\") and sorts takes into sections, keeping scrapped ones in a Rejected folder. Takes can be arranged on a song canvas, played through like a rough demo, and exported as a WAV or stems. Built solo for the Meta Global AI Developer Hackathon; hand-checked on one demo memo (5 of 6 takes found, 4 of 5 commands handled).",
    tags: ["Python", "FastAPI", "Modal", "Audio Spectrogram Transformer", "Muse Spark", "Web Audio API", "JavaScript"],
    links: [
      {
        label: "Live demo",
        href: "https://mhashamhussain2001--keeper-web.us-east.modal.run",
      },
      {
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=dG-uOieTylM",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/mhashamhussain2001/keeper",
      },
    ],
    image: {
      src: "/images/keeper.png",
      alt: "Keeper showing a voice memo waveform with takes labeled Verse 1, Unlabeled 1 and Bridge 1, spoken commands marked beneath, and a takes list beside the song canvas",
      width: 1092,
      height: 650,
    },
  },
  {
    title: "shadenav — Shade-Aware Pedestrian Routing",
    description:
      "A routing tool that models where building shadows fall at any date and time, scores every street segment by sun exposure, and finds walking routes that trade a little extra distance for a lot less time in direct sun. Built on an end-to-end geospatial pipeline over the Chico State campus: OpenStreetMap street networks and building footprints, sun-position modeling, shadow-casting geometry, and shade-weighted shortest-path routing. Validated across 200 routes — a mild shade preference cuts sun exposure by roughly 20% for about 2% extra distance.",
    tags: ["Python", "pvlib", "NetworkX", "OpenStreetMap", "Geospatial"],
    links: [
      {
        label: "Live demo",
        href: "https://shadenav.streamlit.app",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Prabin-Hasham/shadenav",
      },
    ],
    image: {
      src: "/images/shadenav.png",
      alt: "shadenav map showing a shortest route and a shadier alternate route between two campus points, with a sun-exposure comparison panel",
      width: 1380,
      height: 810,
    },
  },
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
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
      </Reveal>
      <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const demo = project.links.find((link) => link.label === "Live demo");
          const accent = index % 2 === 0 ? "border-t-accent-blue" : "border-t-accent-orange";
          return (
            <Reveal key={project.title}>
              <div
                className={`flex h-full flex-col gap-3 border-t-2 ${accent} bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {demo ? (
                    <a
                      href={demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-blue"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.image && (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    className="w-full rounded-lg border border-border"
                  />
                )}
                <p className="text-sm leading-6 text-muted">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm bg-background px-2 py-1 font-mono text-xs text-muted"
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
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
