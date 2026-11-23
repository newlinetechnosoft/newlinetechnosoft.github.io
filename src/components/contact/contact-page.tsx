import { company } from "@/content/company";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Get In Touch
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Start a project or visit our office.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We are based in Butwal, Lumbini Province, Nepal. Contact us to discuss software
            development, systems architecture, or engineering partnerships.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          {/* Form */}
          <div className="min-w-0 rounded-3xl border border-border bg-card p-5 sm:p-8 md:p-10 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Fill out the details below. We review inquiries directly with our engineering team and
              respond within 2 business days.
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <ContactForm />
            </div>
          </div>

          {/* Details & Map Link-Out */}
          <div className="min-w-0 space-y-8">
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                Office Information
              </h2>

              <div className="mt-6 space-y-6 text-sm">
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground uppercase">Location</h3>
                  <p className="mt-1 font-semibold text-foreground">{company.location}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{company.address}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-muted-foreground uppercase">
                    Office Hours
                  </h3>
                  <p className="mt-1 text-foreground">{company.officeDays}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-muted-foreground uppercase">
                    Direct Email
                  </h3>
                  <div className="mt-1 space-y-1 font-mono text-xs">
                    <p>
                      <span className="text-muted-foreground">General: </span>
                      <a
                        href={`mailto:${company.email.general}`}
                        className="text-primary hover:underline"
                      >
                        {company.email.general}
                      </a>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Careers: </span>
                      <a
                        href={`mailto:${company.email.careers}`}
                        className="text-primary hover:underline"
                      >
                        {company.email.careers}
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-muted-foreground uppercase">Telephone</h3>
                  <p className="mt-1 font-mono text-xs text-foreground">{company.phone}</p>
                </div>
              </div>

              {/* Link-out Map (No embedded iframe) */}
              <div className="mt-8 border-t border-border pt-6">
                <a
                  href="https://www.openstreetmap.org/search?query=Butwal%2C%20Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <span>View Butwal on OpenStreetMap</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/20 p-6">
              <h3 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                Privacy Notice
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                We do not track you across the web. Information sent via this form is strictly used
                to evaluate and reply to your project inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
