import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="px-6 pb-20 pt-16 sm:pt-24">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-md border border-border bg-panel px-3 py-1 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
          Open to internships &amp; new-grad roles, 2027
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Muhammad Hasham Hussain
        </h1>
        <p className="mt-4 text-xl font-medium text-accent-blue">
          Data Science &amp; Machine Learning
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          M.S. student building projects across machine learning, statistical
          analysis, and data visualization.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-accent-blue px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            Contact
          </a>
        </div>
      </Reveal>
    </section>
  );
}
