import { Link } from "@tanstack/react-router";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Tell us what you need, when you need it, and what you already have in place. We&apos;ll
          reply within two business days with a first look at how we&apos;d approach it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button size="lg" className="rounded-md px-6" render={<Link to="/contact" />}>
            Get in touch
          </Button>
          <a
            href={`mailto:${company.email.hello}`}
            className="text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            or email {company.email.hello}
          </a>
        </div>
      </div>
    </section>
  );
}
