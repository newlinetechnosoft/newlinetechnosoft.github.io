import { Link } from "@tanstack/react-router";
import { services } from "@/content/services";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Capabilities
          </h2>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Software built for operational reality.
          </h3>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            We focus on core engineering disciplines where architecture, stability, and speed
            directly determine business success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <div>
                <h4 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>

                <div className="mt-5 border-t border-border/60 pt-4">
                  <p className="font-mono text-[0.6875rem] font-medium text-muted-foreground uppercase tracking-wider">
                    Core Deliverables
                  </p>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-foreground">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="font-mono text-primary font-bold">↵</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-3">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/80 bg-muted/60 px-2 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="rounded-full" render={<Link to="/services" />}>
            View detailed service specifications
          </Button>
        </div>
      </div>
    </section>
  );
}
