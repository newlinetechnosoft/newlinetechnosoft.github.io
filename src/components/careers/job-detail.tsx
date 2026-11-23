import { Link } from "@tanstack/react-router";
import { type Job } from "@/content/jobs";
import { ApplicationForm } from "./application-form";

export function JobDetail({ job }: { job: Job }) {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="mb-6">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>←</span> Back to all positions
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1.1fr] lg:gap-16">
          {/* Job Specification */}
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="font-bold text-primary">{job.team}</span>
              <span>·</span>
              <span>{job.type}</span>
              <span>·</span>
              <span>{job.location}</span>
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {job.title}
            </h1>

            <p className="mt-5 text-base text-muted-foreground leading-relaxed">{job.summary}</p>

            <div className="mt-10 border-t border-border pt-8">
              <h2 className="font-display text-xl font-bold text-foreground">What you will do</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <span className="font-mono text-primary font-bold">↵</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <h2 className="font-display text-xl font-bold text-foreground">What we look for</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                {job.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5">
                    <span className="font-mono text-primary font-bold">↵</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.niceToHave.length > 0 && (
              <div className="mt-10 border-t border-border pt-8">
                <h2 className="font-display text-xl font-bold text-foreground">Nice to have</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {job.niceToHave.map((nth) => (
                    <li key={nth} className="flex items-start gap-2.5">
                      <span className="font-mono text-primary font-bold">↵</span>
                      <span>{nth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Application Form Card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Apply for this position
              </h2>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Submit your details below. We review every application and respond within 4 business
                days.
              </p>
              <div className="mt-6 border-t border-border pt-6">
                <ApplicationForm jobTitle={job.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
