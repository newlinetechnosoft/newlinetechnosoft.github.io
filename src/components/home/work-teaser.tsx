import { Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";

export function WorkTeaser() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent work
          </h2>
          <Link
            to="/work"
            className="text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            All work →
          </Link>
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group grid gap-4 py-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12"
              >
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {project.client} · {project.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <dl className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <dd className="font-mono text-sm font-semibold text-foreground">{m.value}</dd>
                      <dt className="text-xs text-muted-foreground">{m.label}</dt>
                    </div>
                  ))}
                </dl>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
