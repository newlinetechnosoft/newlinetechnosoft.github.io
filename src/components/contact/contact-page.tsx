import { company } from "@/content/company";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Tell us what you&apos;re building.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We&apos;re in Butwal, Lumbini Province. Send us a note about what you need, or visit during
          office hours. We reply within 2 business days.
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
          <ContactForm />

          <aside className="min-w-0 lg:border-l lg:border-border lg:pl-12">
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Where</dt>
                <dd className="mt-1 font-medium text-foreground">{company.location}</dd>
                <dd className="text-muted-foreground">{company.address}</dd>
                <dd className="mt-2">
                  <a
                    href="https://www.openstreetmap.org/search?query=Butwal%2C%20Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                  >
                    Open in OpenStreetMap ↗
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-muted-foreground">Office hours</dt>
                <dd className="mt-1 text-foreground">{company.officeDays}</dd>
              </div>

              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${company.email.general}`}
                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                  >
                    {company.email.general}
                  </a>
                </dd>
                <dd className="mt-1 text-muted-foreground">
                  Hiring:{" "}
                  <a
                    href={`mailto:${company.email.careers}`}
                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                  >
                    {company.email.careers}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="mt-1 text-foreground">{company.phone}</dd>
              </div>
            </dl>

            <p className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              We don&apos;t track you. What you send here is only used to reply to you.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
