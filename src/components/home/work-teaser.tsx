import { Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";

export function WorkTeaser() {
  return (
    <section className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
              Case Studies
            </h2>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Selected client work.
            </h3>
          </div>
          <Button variant="outline" className="w-fit rounded-full" render={<Link to="/work" />}>
            View all work
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="group block rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/50 hover:shadow-sm"
            >
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{project.client}</span>
                <span>{project.period}</span>
              </div>
              <h4 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {project.summary}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border/60 pt-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-sm font-bold text-foreground">{m.value}</p>
                    <p className="text-[0.6875rem] text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
