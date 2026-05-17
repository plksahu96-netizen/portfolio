import { experience } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-[var(--primary)] font-mono text-sm tracking-wider mb-2">
          EXPERIENCE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-12">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="group bg-[var(--card)] rounded-xl p-6 md:p-8 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-40 shrink-0">
                  <p className="text-sm text-[var(--muted-foreground)] font-mono">
                    {exp.period}
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--muted-foreground)]">
                        {exp.company}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-[var(--muted-foreground)] group-hover:text-[var(--primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
