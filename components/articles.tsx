import { articles } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Articles() {
  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[var(--primary)] font-mono text-sm tracking-wider mb-2">
              WRITING
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Thoughts on AI
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors flex items-center gap-1 text-sm"
          >
            View all
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {article.categories.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors text-balance">
                {article.title}
              </h3>

              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                <span>{article.date}</span>
                <span>{article.readTime} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
