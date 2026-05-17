import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-[var(--primary)] font-mono text-sm tracking-wider mb-2">
          SKILLS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-12">
          Technical expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm bg-[var(--secondary)] text-[var(--foreground)] rounded-lg hover:bg-[var(--primary)]/20 hover:text-[var(--primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
