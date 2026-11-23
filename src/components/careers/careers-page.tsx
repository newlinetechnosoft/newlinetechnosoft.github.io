import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jobs } from "@/content/jobs";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";

const HIRING_STEPS = [
  {
    step: "01",
    title: "Application & Code Review",
    desc: "We review your past work, GitHub, or portfolio within 4 business days. We look for clean structure and clear communication.",
  },
  {
    step: "02",
    title: "Technical Discussion",
    desc: "A 45-minute conversation with an engineer about software design and trade-offs. No trick whiteboard puzzles.",
  },
  {
    step: "03",
    title: "Practical Exercise",
    desc: "A focused, paid mini-task modeled after real production tasks (capped at 4 hours). We respect your time.",
  },
  {
    step: "04",
    title: "Transparent Offer",
    desc: "Clear compensation, role expectations, and mutual alignment on start dates.",
  },
];

const BENEFITS = [
  {
    title: "Sane Hours",
    desc: `${company.officeDays}. We believe great engineering comes from rested minds, not late-night panic.`,
  },
  {
    title: "Quality Hardware",
    desc: "Fast workstations, dual displays, and budget for necessary peripheral gear.",
  },
  {
    title: "Learning & Books",
    desc: "Full coverage for engineering books, technical courses, and tooling licenses.",
  },
  {
    title: "Festival & Leave",
    desc: "Paid annual leave, public holidays, Dashain/Tihar festival bonuses, and sick time.",
  },
];

export function CareersPage() {
  const [teamFilter, setTeamFilter] = useState<string>("All");

  const teams = ["All", ...Array.from(new Set(jobs.map((j) => j.team)))];
  const filteredJobs = teamFilter === "All" ? jobs : jobs.filter((j) => j.team === teamFilter);

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Careers
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Build software craft in Butwal.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We are building a calm, high-standard software engineering team in Lumbini Province. We
            look for engineers who care about clean architecture, test automation, and shipping
            software that lasts.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Environment & Benefits
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="mt-20 rounded-3xl border border-border bg-muted/20 p-8 sm:p-12">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            How We Hire
          </h2>
          <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Simple, respectful, and transparent.
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIRING_STEPS.map((s) => (
              <div key={s.step} className="border-l-2 border-primary/50 pl-4">
                <span className="font-mono text-xs font-bold text-primary">{s.step}</span>
                <h4 className="mt-2 font-display text-base font-bold text-foreground">{s.title}</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Roles Section */}
        <div className="mt-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                Open Positions
              </h2>
              <h3 className="mt-1 font-display text-3xl font-bold text-foreground">
                Current opportunities
              </h3>
            </div>

            {teams.length > 2 && (
              <div className="flex gap-2">
                {teams.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTeamFilter(t)}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                      teamFilter === t
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {filteredJobs.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-border p-12 text-center">
              <h4 className="font-display text-lg font-bold text-foreground">
                No active openings matching this filter.
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                We are always interested in meeting disciplined engineers. Send a general
                application.
              </p>
              <Button
                className="mt-5 rounded-full"
                render={
                  <a
                    href={`mailto:${company.email.careers}?subject=General%20Engineering%20Inquiry`}
                  />
                }
              >
                Send general application
              </Button>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {filteredJobs.map((job) => (
                <Link
                  key={job.slug}
                  to="/careers/$slug"
                  params={{ slug: job.slug }}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 sm:flex-row sm:items-center"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-primary">{job.team}</span>
                      <span className="text-muted-foreground/60">·</span>
                      <span className="font-mono text-xs text-muted-foreground">{job.type}</span>
                    </div>
                    <h4 className="mt-2 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
                  </div>

                  <div className="mt-4 sm:mt-0 flex items-center gap-2 font-mono text-xs font-semibold text-primary">
                    <span>View role</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
