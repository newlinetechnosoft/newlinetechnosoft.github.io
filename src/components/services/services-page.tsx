import { Link } from "@tanstack/react-router";
import { services } from "@/content/services";
import { Button } from "@/components/ui/button";

export function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          What we build, and how.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We build, improve and scale software for organizations. We&apos;d rather get the
          architecture right, keep the types strict and test automatically than ship a quick hack.
        </p>

        <div className="mt-16 space-y-16">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24 border-t border-border pt-10"
            >
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.summary}</p>

                  <h3 className="mt-8 font-display font-semibold text-foreground">
                    What you get
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground marker:text-muted-foreground/50">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-8 font-mono text-xs leading-relaxed text-muted-foreground">
                    {service.stack.join(" · ")}
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground">How it goes</h3>
                  <ol className="mt-4 space-y-5 border-l border-border pl-5">
                    {service.process.map((step) => (
                      <li key={step.step}>
                        <p className="text-sm font-medium text-foreground">{step.step}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-8 rounded-md"
                    render={<Link to="/contact" />}
                  >
                    Ask about {service.title}
                  </Button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
