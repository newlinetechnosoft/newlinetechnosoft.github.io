import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { company } from "@/content/company";
import { HeroTerminal } from "./hero-terminal";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh_-_var(--nav-height))] flex-1 items-center overflow-x-clip px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-[var(--container)] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-mono text-muted-foreground">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            <span>{company.location}</span>
          </div>

          <h1 className="mb-6 font-display text-[clamp(2.6rem,6.5vw,4.4rem)] leading-[1.04] font-bold tracking-[-0.035em] text-balance text-foreground">
            <span>Reliable software systems,</span>{" "}
            <span className="text-primary block lg:inline">engineered with precision.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-[34rem] text-lg leading-[1.6] text-pretty text-muted-foreground lg:mx-0">
            NewLine Technosoft is a software engineering company based in Butwal. We build resilient
            web platforms, mobile applications, and backend cloud systems for teams that value craft
            and longevity.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              size="lg"
              className="h-11 rounded-full px-7 text-[0.9375rem] font-semibold"
              render={<Link to="/contact" />}
            >
              Start a project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-6 text-[0.9375rem] font-semibold"
              render={<Link to="/services" />}
            >
              Explore services
            </Button>
          </div>
        </div>

        <div className="hero-visual w-full">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
