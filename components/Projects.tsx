type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "[Project title]",
    description: "[Short description of the project and its impact.]",
    tags: ["Python", "Pandas"],
    href: "#",
  },
  {
    title: "[Project title]",
    description: "[Short description of the project and its impact.]",
    tags: ["scikit-learn", "SQL"],
    href: "#",
  },
  {
    title: "[Project title]",
    description: "[Short description of the project and its impact.]",
    tags: ["PyTorch", "Visualization"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-24">
      <h2 className="text-3xl font-bold text-zinc-900">Projects</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400"
          >
            <h3 className="text-lg font-semibold text-zinc-900">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-zinc-600">
              {project.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
