import { principles } from "@/content/principles";

export function PrinciplesSection() {
  return (
    <section className="border-t border-border bg-muted/20 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            How We Work
          </h2>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineering principles, not sales promises.
          </h3>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Good software is the outcome of disciplined habits, clear written communication, and
            automated verification.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle.number} className="rounded-xl border border-border bg-card p-6">
              <span className="font-mono text-xs font-bold text-primary">{principle.number}</span>
              <h4 className="mt-3 font-display text-base font-bold text-foreground">
                {principle.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
