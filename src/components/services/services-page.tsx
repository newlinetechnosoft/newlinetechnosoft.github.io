import { Link } from "@tanstack/react-router";
import { services } from "@/content/services";
import { Button } from "@/components/ui/button";

export function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Engineering Services
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Software built for durability and performance.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We partner with organizations to build, optimize, and scale software systems. We
            prioritize clean architecture, strict type safety, and automated verification over quick
            hacks.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 rounded-3xl border border-border bg-card p-8 sm:p-12 transition-colors"
            >
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>

                  <div className="mt-8">
                    <h3 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                      Deliverables
                    </h3>
                    <ul className="mt-3.5 space-y-2 text-sm text-foreground">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="font-mono text-primary font-bold">↵</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 bg-muted/20 p-6 sm:p-8">
                  <h3 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Delivery Process
                  </h3>
                  <div className="mt-5 space-y-5">
                    {service.process.map((step) => (
                      <div key={step.step} className="border-l-2 border-primary/40 pl-4">
                        <p className="font-mono text-xs font-bold text-foreground">{step.step}</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-border/60 pt-6">
                    <Button size="sm" className="w-full rounded-xl" render={<Link to="/contact" />}>
                      Inquire about {service.title}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
