import { Link } from "@tanstack/react-router";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="border-t border-border bg-background py-20 text-center sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-2xl border border-border bg-muted/50 font-mono text-xl font-bold text-primary">
            ↵
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Tell us about your requirements, timeline, and current system. We will reply within two
            business days with an initial technical assessment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full px-8" render={<Link to="/contact" />}>
              Get in touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              render={<a href={`mailto:${company.email.hello}`} />}
            >
              Email hello
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
