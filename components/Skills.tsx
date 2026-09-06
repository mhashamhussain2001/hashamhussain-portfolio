type SkillGroup = {
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Python", "SQL", "R"] },
  { category: "ML / Data Science", items: ["scikit-learn", "PyTorch", "pandas"] },
  { category: "Visualization", items: ["Matplotlib", "Tableau", "Plotly"] },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-24">
      <h2 className="font-display text-3xl font-bold text-foreground">Skills</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm bg-panel px-2 py-1 font-mono text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
