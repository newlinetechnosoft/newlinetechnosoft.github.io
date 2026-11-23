import { Link } from "@tanstack/react-router";
import { type Job } from "@/content/jobs";
import { ApplicationForm } from "./application-form";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-10 border-t border-border pt-8">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-muted-foreground/50">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function JobDetail({ job }: { job: Job }) {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <Link
          to="/careers"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span> All roles
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">
              {job.team} · {job.type} · {job.location}
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {job.title}
            </h1>

            <p className="mt-5 leading-relaxed text-muted-foreground">{job.summary}</p>

            <ListBlock title="What you'll do" items={job.responsibilities} />
            <ListBlock title="What we look for" items={job.requirements} />
            {job.niceToHave.length > 0 && (
              <ListBlock title="Nice to have" items={job.niceToHave} />
            )}
          </div>

          <div className="h-fit min-w-0 lg:sticky lg:top-24">
            <div className="rounded-lg border border-border bg-card p-5 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground">Apply</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We read every application and reply within 4 business days.
              </p>
              <div className="mt-6">
                <ApplicationForm jobTitle={job.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
