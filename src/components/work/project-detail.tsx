import { Link } from "@tanstack/react-router";
import { type Project } from "@/content/projects";
import { Button } from "@/components/ui/button";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span> All work
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="font-mono text-xs text-muted-foreground">
            {project.client} · {project.period}
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{project.summary}</p>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-6 border-y border-border py-8">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dd className="font-mono text-2xl font-semibold text-foreground">{metric.value}</dd>
              <dt className="mt-1 text-sm text-muted-foreground">{metric.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:gap-20">
          <div className="min-w-0 max-w-2xl space-y-10">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                The problem
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{project.problem}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                What we did
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{project.approach}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                How it turned out
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{project.outcome}</p>
            </section>
          </div>

          <aside className="min-w-0">
            <h2 className="font-display font-semibold text-foreground">Built with</h2>
            <p className="mt-3 font-mono text-sm leading-relaxed text-muted-foreground">
              {project.stack.join(" · ")}
            </p>

            <div className="mt-10 border-t border-border pt-6">
              <h2 className="font-display font-semibold text-foreground">
                Building something similar?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us about the scope and we&apos;ll tell you honestly how we&apos;d approach it.
              </p>
              <Button className="mt-4 rounded-md" render={<Link to="/contact" />}>
                Talk to us
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
