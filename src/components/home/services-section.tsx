import { Link } from "@tanstack/react-router";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What we build
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Software that businesses depend on day to day, where solid architecture matters more than
          a clever demo.
        </p>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {services.map((service) => (
            <li
              key={service.id}
              className="grid gap-4 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>

              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground/80">
                  {service.stack.join(" · ")}
                </p>
              </div>

              <ul className="list-disc space-y-1.5 pl-4 text-sm text-foreground marker:text-muted-foreground/50">
                {service.deliverables.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <Link
          to="/services"
          className="mt-8 inline-block text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          All services and how we deliver them →
        </Link>
      </div>
    </section>
  );
}
