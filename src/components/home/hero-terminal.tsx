import { useReducedMotion } from "@/hooks/use-reduced-motion";

const LINES = [
  { indent: false, code: <>const project = &#123;</> },
  {
    indent: true,
    code: (
      <>
        spec: <span className="text-muted-foreground">&quot;written first&quot;</span>,
      </>
    ),
  },
  {
    indent: true,
    code: (
      <>
        tests: <span className="text-muted-foreground">&quot;on every commit&quot;</span>,
      </>
    ),
  },
  {
    indent: true,
    code: (
      <>
        afterLaunch: <span className="text-muted-foreground">&quot;we stay&quot;</span>,
      </>
    ),
  },
  { indent: false, code: <>&#125;;</> },
];

export function HeroTerminal() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[32rem] overflow-hidden rounded-lg border border-border bg-card select-none">
      <div className="flex h-10 items-center border-b border-border px-4 font-mono text-xs text-muted-foreground">
        newline.ts
      </div>

      <div className="p-5 font-mono text-[0.8125rem] leading-[1.7] text-foreground">
        {LINES.map((line, i) => (
          <div key={i} className={`flex items-start gap-4 ${line.indent ? "pl-4" : ""}`}>
            <span className="w-4 text-right text-muted-foreground/50 select-none">{i + 1}</span>
            <p className="flex-1">{line.code}</p>
          </div>
        ))}

        <div className="flex items-center gap-4">
          <span className="w-4 text-right text-muted-foreground/50 select-none">
            {LINES.length + 1}
          </span>
          <p className="flex items-center gap-1.5">
            <span className="text-primary" title="newline">
              ↵
            </span>
            {!reducedMotion && <span className="inline-block h-4 w-1.5 animate-pulse bg-primary/80" />}
          </p>
        </div>
      </div>
    </div>
  );
}
