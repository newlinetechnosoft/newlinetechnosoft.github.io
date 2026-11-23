import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { company } from "@/content/company";
import { HeroTerminal } from "./hero-terminal";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh_-_var(--nav-height))] flex-1 items-center overflow-x-clip px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-[var(--container)] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-5 font-mono text-xs text-muted-foreground">{company.location}</p>

          <h1 className="mb-6 font-display text-[clamp(2.4rem,6vw,4rem)] leading-[1.05] font-bold tracking-[-0.03em] text-foreground">
            Software for businesses in Nepal
            <span className="text-primary">, built by people you can call.</span>
          </h1>

          <p className="mb-8 max-w-[32rem] text-lg leading-relaxed text-muted-foreground">
            We&apos;re a small team in Butwal. We build websites, mobile apps and the systems behind
            them, and we stick around after launch to fix what breaks.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button
              size="lg"
              className="h-11 rounded-md px-6 text-[0.9375rem] font-semibold"
              render={<Link to="/contact" />}
            >
              Tell us what you&apos;re building
            </Button>
            <Link
              to="/services"
              className="text-[0.9375rem] font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              What we build
            </Link>
          </div>
        </div>

        <div className="hero-visual w-full">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
