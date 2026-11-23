import { Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";

export function WorkPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Things we&apos;ve shipped.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A selection of platforms and applications we&apos;ve built for clients.
        </p>

        {projects.length === 0 ? (
          <div className="mt-16 max-w-xl">
            <p className="text-muted-foreground">
              We&apos;re still writing up our case studies. Ask us directly and we&apos;ll tell you
              what we&apos;ve built.
            </p>
            <Button className="mt-4 rounded-md" render={<Link to="/contact" />}>
              Talk to us
            </Button>
          </div>
        ) : (
          <ul className="mt-14 divide-y divide-border border-y border-border">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="group grid gap-6 py-9 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14"
                >
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {project.client} · {project.period}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-foreground underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    <dl className="flex flex-wrap gap-x-8 gap-y-3">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <dd className="font-mono text-base font-semibold text-foreground">
                            {m.value}
                          </dd>
                          <dt className="text-xs text-muted-foreground">{m.label}</dt>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-5 font-mono text-xs text-muted-foreground/80">
                      {project.stack.join(" · ")}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
