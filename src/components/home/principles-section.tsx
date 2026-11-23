import { principles } from "@/content/principles";

export function PrinciplesSection() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How we work
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Written specs, plain communication and automated tests. Nothing exotic, just done
          consistently.
        </p>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <li key={principle.number} className="border-t border-border pt-5">
              <span className="font-mono text-xs text-muted-foreground">{principle.number}</span>
              <h3 className="mt-2 font-display font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
