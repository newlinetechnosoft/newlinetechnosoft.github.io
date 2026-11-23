import { Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";

export function WorkPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Case Studies
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Shipped systems and case studies.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A selection of platforms, applications, and architectures delivered for clients.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-muted-foreground">Case studies are currently being documented.</p>
            <Button className="mt-4 rounded-full" render={<Link to="/contact" />}>
              Start a project with us
            </Button>
          </div>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span>{project.client}</span>
                    <span>{project.period}</span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-8 border-t border-border/60 pt-6">
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-base font-bold text-foreground">{m.value}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground leading-tight">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-muted/40 px-2 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
