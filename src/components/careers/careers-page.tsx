import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { jobs } from "@/content/jobs";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";

const HIRING_STEPS = [
  {
    title: "We read your work",
    desc: "We look through your GitHub or portfolio and reply within 4 business days. Clear structure and clear writing count for a lot.",
  },
  {
    title: "A conversation",
    desc: "45 minutes with an engineer about design and trade-offs. No whiteboard puzzles.",
  },
  {
    title: "A small paid task",
    desc: "Something close to real production work, capped at 4 hours. We pay you for your time.",
  },
  {
    title: "An offer",
    desc: "Pay, role and start date in plain terms, so nothing comes as a surprise.",
  },
];

const BENEFITS = [
  {
    title: "Reasonable hours",
    desc: `${company.officeDays}. Rested people write better code, and we'd rather not fix things at midnight.`,
  },
  {
    title: "Good equipment",
    desc: "Fast workstations, two monitors, and a budget for whatever else you need.",
  },
  {
    title: "Learning",
    desc: "We cover books, courses and the tools you need to do the job.",
  },
  {
    title: "Leave and festivals",
    desc: "Paid annual leave, public holidays, Dashain and Tihar bonuses, and sick leave.",
  },
];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-16 grid gap-6 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function CareersPage() {
  const [teamFilter, setTeamFilter] = useState<string>("All");

  const teams = ["All", ...Array.from(new Set(jobs.map((j) => j.team)))];
  const filteredJobs = teamFilter === "All" ? jobs : jobs.filter((j) => j.team === teamFilter);

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Work with us in Butwal.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We&apos;re building a calm, careful engineering team in Lumbini Province. If you like clean
          architecture, tests that actually catch bugs, and software that lasts, we&apos;d like to
          meet you.
        </p>

        <Section title="Open roles">
          {teams.length > 2 && (
            <div className="mb-4 flex flex-wrap gap-x-5 gap-y-1">
              {teams.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTeamFilter(t)}
                  aria-pressed={teamFilter === t}
                  className={`text-sm underline-offset-[6px] transition-colors ${
                    teamFilter === t
                      ? "font-medium text-foreground underline decoration-primary decoration-2"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {filteredJobs.length === 0 ? (
            <div className="max-w-xl">
              <p className="font-display text-lg font-semibold text-foreground">
                Nothing open right now.
              </p>
              <p className="mt-2 text-muted-foreground">
                If you think we should talk anyway, send us a note and tell us what you&apos;d like
                to work on.
              </p>
              <Button
                className="mt-5 rounded-md"
                render={
                  <a
                    href={`mailto:${company.email.careers}?subject=General%20Engineering%20Inquiry`}
                  />
                }
              >
                Email us
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {filteredJobs.map((job) => (
                <li key={job.slug}>
                  <Link
                    to="/careers/$slug"
                    params={{ slug: job.slug }}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {job.team} · {job.type} · {job.location}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section title="How we hire">
          <ol className="grid max-w-2xl gap-x-10 gap-y-7 sm:grid-cols-2">
            {HIRING_STEPS.map((s, i) => (
              <li key={s.title}>
                <p className="font-mono text-xs text-muted-foreground">{i + 1}</p>
                <h3 className="mt-1 font-display font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="What it's like">
          <dl className="grid max-w-2xl gap-x-10 gap-y-7 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title}>
                <dt className="font-display font-semibold text-foreground">{b.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    </div>
  );
}
