const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold text-zinc-900">
          Muhammad Hasham Hussain
        </a>
        <ul className="flex gap-6 text-sm font-medium text-zinc-600">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-zinc-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
