export interface Principle {
  number: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Written specifications before code",
    description:
      "We document architecture, data contracts, and boundary conditions before writing code. Clear writing eliminates ambiguity and prevents expensive mid-flight course corrections.",
  },
  {
    number: "02",
    title: "Direct communication with engineers",
    description:
      "You collaborate directly with the engineers designing, implementing, and operating your systems. No layers of relay or distorted technical translation.",
  },
  {
    number: "03",
    title: "Deterministic testing and continuous delivery",
    description:
      "Every code change is strictly type-checked, linted, and run against automated test suites before merging. Deployments are small, reversible, and predictable.",
  },
  {
    number: "04",
    title: "Pragmatic longevity over technology hype",
    description:
      "We choose battle-tested, observable technologies—TypeScript, PostgreSQL, Go, Linux—that remain maintainable, performant, and reliable over a multi-year horizon.",
  },
];
