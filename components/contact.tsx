import { profile } from "@/lib/data";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[var(--primary)] font-mono text-sm tracking-wider mb-2">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-[var(--muted-foreground)] mb-12">
            Have an AI project in mind? I&apos;m always interested in discussing new
            opportunities and collaborations.
          </p>

          <div className="bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)]">
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--secondary)] transition-colors group"
              >
                <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                  <Mail size={20} className="text-[var(--primary)]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[var(--muted-foreground)]">Email</p>
                  <p className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--secondary)] transition-colors group"
              >
                <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                  <Phone size={20} className="text-[var(--primary)]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[var(--muted-foreground)]">Phone</p>
                  <p className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {profile.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                  <MapPin size={20} className="text-[var(--primary)]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Location
                  </p>
                  <p className="text-[var(--foreground)]">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Connect with me
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--secondary)] rounded-lg text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--secondary)] rounded-lg text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--secondary)] rounded-lg text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
