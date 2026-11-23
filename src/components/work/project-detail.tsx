import { Link } from "@tanstack/react-router";
import { type Project } from "@/content/projects";
import { Button } from "@/components/ui/button";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="mb-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>←</span> Back to all work
          </Link>
        </div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>{project.client}</span>
            <span>·</span>
            <span>{project.period}</span>
          </div>

          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 text-xl text-muted-foreground leading-relaxed">{project.summary}</p>
        </div>

        {/* Metrics Banner */}
        <div className="mt-12 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-muted/20 p-6 sm:grid-cols-3 sm:p-8">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="border-l-2 border-primary/50 pl-4">
              <p className="font-mono text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive Breakdown */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
          <div className="min-w-0 space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                The Problem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>

            <div className="border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Our Engineering Approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.approach}
              </p>
            </div>

            <div className="border-t border-border pt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                The Outcome
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">
              <h3 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Technology Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-muted/60 px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="font-display text-base font-semibold text-foreground">
                  Building something similar?
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Discuss your project scope and architecture requirements with our team.
                </p>
                <Button className="mt-4 w-full rounded-xl" render={<Link to="/contact" />}>
                  Start a conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
