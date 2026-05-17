import { profile } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[var(--muted-foreground)] text-sm">
            <span>&copy; {currentYear} {profile.name}.</span>
            <span>Built with Next.js.</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#about"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
