import { profile } from "@/lib/data";
import { Github, Linkedin, Twitter, ArrowDown, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-[var(--primary)] font-mono text-sm tracking-wider mb-4">
            AI ENGINEER
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--foreground)] mb-6 text-balance">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="#projects"
              className="px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[var(--muted-foreground)]" size={24} />
        </div>
      </div>
    </section>
  );
}
