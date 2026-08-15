const links = [
  { label: "Email", href: "mailto:mhashamhussain2001@gmail.com" },
  { label: "GitHub", href: "https://github.com/mhashamhussain2001" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mhashamhussain/" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <h2 className="text-3xl font-bold text-zinc-900">Contact</h2>
      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
        Open to data science and ML roles. Feel free to reach out.
      </p>
      <ul className="mt-8 flex flex-wrap gap-6 text-base font-medium">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
