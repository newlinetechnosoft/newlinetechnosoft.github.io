import { Link } from "@tanstack/react-router";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";

export function CareersTeaser() {
  return (
    <section className="border-t border-border bg-muted/20 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                Work With Us
              </span>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Engineering in Lumbini Province.
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                We offer focused technical work, reasonable office hours ({company.officeDays}), and
                an environment built around quality code rather than arbitrary deadlines.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button size="lg" className="rounded-full" render={<Link to="/careers" />}>
                View open positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                render={<Link to="/about" />}
              >
                Our story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
