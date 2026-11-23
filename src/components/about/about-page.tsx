import { company } from "@/content/company";
import { principles } from "@/content/principles";
import { team } from "@/content/team";

export function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            About NewLine
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Software engineering from Butwal, Nepal.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            NewLine Technosoft was established in {company.location} with a singular focus:
            engineering resilient, production-grade software systems without bloated overhead or
            buzzword theater.
          </p>
        </div>

        {/* Story & Context Section */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">Why Butwal?</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Butwal is a central commercial and transit hub in Lumbini Province. While Kathmandu
                has historically concentrated the country&apos;s tech companies, modern engineering
                tools and remote infrastructure allow us to build high-standard software from right
                here.
              </p>
              <p>
                Our location gives us direct access to strong engineering talent across western
                Nepal, sane living rhythms, and low team turnover. We invest in regional craft
                rather than centralization.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">Our Core Focus</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                We do not build speculative hype. We build systems that run reliably day in and day
                out: inventory databases, logistics dispatchers, healthcare management portals, and
                client APIs.
              </p>
              <p>
                Every project is anchored by a written technical specification, continuous automated
                testing, and direct collaboration between client stakeholders and the engineers
                writing the code.
              </p>
            </div>
          </div>
        </div>

        {/* Principles Section */}
        <div className="mt-20">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Guiding Principles
          </h2>
          <h3 className="mt-2 font-display text-3xl font-bold text-foreground">
            How we operate every day.
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-border bg-muted/20 p-6 sm:p-8"
              >
                <span className="font-mono text-sm font-bold text-primary">{principle.number}</span>
                <h4 className="mt-2 font-display text-lg font-bold text-foreground">
                  {principle.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section with Labeled Placeholder Component */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
              The Team
            </h2>
            <h3 className="mt-2 font-display text-3xl font-bold text-foreground">
              The people behind the code.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Real team profiles and photos are being updated.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                {/* Labeled Neutral Placeholder Component */}
                <div className="flex h-44 w-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 font-mono text-xs text-muted-foreground">
                  <span>[PHOTO PLACEHOLDER: {member.name}]</span>
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-foreground">
                  {member.name}
                </h4>
                <p className="font-mono text-xs text-primary">{member.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
