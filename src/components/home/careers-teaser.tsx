import { Link } from "@tanstack/react-router";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";

export function CareersTeaser() {
  return (
    <section className="border-t border-border py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[var(--container)] gap-8 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join us in Butwal.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Focused technical work, reasonable hours ({company.officeDays}), and a team that cares
            more about good code than arbitrary deadlines.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:justify-end">
          <Button size="lg" className="rounded-md" render={<Link to="/careers" />}>
            See open roles
          </Button>
          <Link
            to="/about"
            className="text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  );
}
