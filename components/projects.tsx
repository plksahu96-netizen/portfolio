import { projects } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[var(--primary)] font-mono text-sm tracking-wider mb-2">
          PROJECTS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
          Things I&apos;ve built
        </h2>
        <p className="text-[var(--muted-foreground)] mb-12 max-w-2xl">
          A selection of AI/ML projects showcasing computer vision, NLP, and
          production ML systems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                  <Github size={24} className="text-[var(--primary)]" />
                </div>
                <Link
                  href={project.link}
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                {project.title}
              </h3>

              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs font-mono text-[var(--primary)] bg-[var(--primary)]/10 rounded"
                  >
                    {tool}
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
