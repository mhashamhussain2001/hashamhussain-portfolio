type SkillGroup = {
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Python", "SQL", "R"] },
  { category: "ML / Data Science", items: ["scikit-learn", "PyTorch", "pandas"] },
  { category: "Data Engineering", items: ["Airflow", "Spark", "dbt"] },
  { category: "Visualization", items: ["Matplotlib", "Tableau", "Plotly"] },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-24">
      <h2 className="text-3xl font-bold text-zinc-900">Skills</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
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
