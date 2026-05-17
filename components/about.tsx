import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--primary)] font-mono text-sm tracking-wider mb-2">
              ABOUT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              Building the future with AI
            </h2>
            <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
              <p>
                I&apos;m an AI engineer passionate about developing intelligent systems
                that make a real impact. My work spans across machine learning,
                deep learning, and natural language processing.
              </p>
              <p>
                Currently focused on building production-grade ML systems,
                fine-tuning large language models, and architecting scalable AI
                infrastructure. I believe in writing clean, maintainable code
                and shipping models that actually work in the real world.
              </p>
              <p>
                When I&apos;m not training models, you&apos;ll find me contributing to
                open-source projects, writing about AI/ML concepts, or exploring
                the latest research papers.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-[var(--primary)]">3+</p>
                  <p className="text-[var(--muted-foreground)] text-sm mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--primary)]">20+</p>
                  <p className="text-[var(--muted-foreground)] text-sm mt-1">
                    ML Models Deployed
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--primary)]">15+</p>
                  <p className="text-[var(--muted-foreground)] text-sm mt-1">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--primary)]">5+</p>
                  <p className="text-[var(--muted-foreground)] text-sm mt-1">
                    Research Papers
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted-foreground)] mb-2">
                  Location
                </p>
                <p className="text-[var(--foreground)]">{profile.location}</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-[var(--primary)]/10 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
