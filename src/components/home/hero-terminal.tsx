import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroTerminal() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-[0_24px_50px_-12px_color-mix(in_oklab,var(--color-brand)_15%,transparent)] select-none">
      {/* Terminal Titlebar */}
      <div className="flex h-10 items-center justify-between border-b border-border/80 bg-muted/40 px-4">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">main.ts</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-primary">
          <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" />
          <span>TypeScript · Butwal</span>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-5 font-mono text-[0.8125rem] leading-[1.7] text-foreground">
        <div className="flex items-start gap-3">
          <span className="w-5 text-right text-muted-foreground/50 select-none">1</span>
          <p className="flex-1">
            <span className="text-primary font-medium">import</span> &#123; deliver &#125;{" "}
            <span className="text-primary font-medium">from</span>{" "}
            <span className="text-muted-foreground">&quot;@newline/core&quot;</span>;
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-5 text-right text-muted-foreground/50 select-none">2</span>
          <p className="flex-1">
            <span className="text-primary font-medium">export default await</span>{" "}
            <span className="text-foreground font-semibold">deliver</span>(&#123;
          </p>
        </div>

        <div className="flex items-start gap-3 pl-3">
          <span className="w-5 text-right text-muted-foreground/50 select-none">3</span>
          <p className="flex-1">
            spec: <span className="text-muted-foreground">&quot;production-grade&quot;</span>,
          </p>
        </div>

        <div className="flex items-start gap-3 pl-3">
          <span className="w-5 text-right text-muted-foreground/50 select-none">4</span>
          <p className="flex-1">
            region: <span className="text-muted-foreground">&quot;butwal-nepal&quot;</span>,
          </p>
        </div>

        <div className="flex items-start gap-3 pl-3">
          <span className="w-5 text-right text-muted-foreground/50 select-none">5</span>
          <p className="flex-1">
            architecture: <span className="text-muted-foreground">&quot;deterministic&quot;</span>,
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-5 text-right text-muted-foreground/50 select-none">6</span>
          <p className="flex-1 flex items-center gap-1.5">
            <span>&#125;);</span>
            <span
              className={`inline-flex items-center rounded bg-primary/10 px-1 py-0.5 text-[0.7rem] font-bold text-primary ${
                reducedMotion ? "" : "animate-bounce"
              }`}
              title="newline return key"
            >
              ↵
            </span>
            {!reducedMotion && (
              <span className="inline-block h-4 w-1.5 bg-primary/80 animate-pulse" />
            )}
          </p>
        </div>
      </div>

      {/* Terminal Output Tray */}
      <div className="border-t border-border bg-muted/30 px-5 py-3 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✓</span>
            <span className="text-foreground font-medium">Type check passed</span>
            <span className="text-[0.6875rem] text-muted-foreground/70">(0 errors)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✓</span>
            <span className="text-foreground font-medium">Build: 100/100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
