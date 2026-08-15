export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[80vh] scroll-mt-16 flex-col items-start justify-center gap-6 px-6"
    >
      <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
        Muhammad Hasham Hussain
      </h1>
      <p className="max-w-xl text-xl text-zinc-600">
        Data Science & Machine Learning
      </p>
      <a
        href="#projects"
        className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700"
      >
        See my work
      </a>
    </section>
  );
}
