import type { ReactNode } from "react";
import { company } from "@/content/company";
import { principles } from "@/content/principles";
import { team } from "@/content/team";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-16 grid gap-6 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          We build software from Butwal.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          NewLine Technosoft started in {company.location} with a simple aim: build software that
          works properly and keeps working, without the padding and the buzzwords.
        </p>

        <Section title="Why Butwal?">
          <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Butwal is a commercial and transit hub for Lumbini Province. Most of Nepal&apos;s tech
              companies are in Kathmandu, but you no longer have to be there to build good software.
              Modern tools and remote work let us do the same job from here.
            </p>
            <p>
              Being here also means we can hire engineers from across western Nepal, people keep a
              saner pace of life, and they tend to stay. We&apos;d rather help grow the scene
              outside the capital than add to the crowd in it.
            </p>
          </div>
        </Section>

        <Section title="What we work on">
          <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Things people rely on every day: inventory databases, logistics dispatch, healthcare
              management portals, client APIs. Not much of it is glamorous, and that&apos;s fine.
            </p>
            <p>
              Every project starts with a written spec. We test as we build, and you talk directly
              to the engineers writing the code.
            </p>
          </div>
        </Section>

        <Section title="How we work">
          <ol className="max-w-2xl divide-y divide-border">
            {principles.map((principle) => (
              <li
                key={principle.number}
                className="grid gap-1 py-5 first:pt-0 sm:grid-cols-[3rem_1fr] sm:gap-4"
              >
                <span className="font-mono text-sm text-muted-foreground">{principle.number}</span>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="The team">
          <ul className="max-w-2xl divide-y divide-border">
            {team.map((member, i) => (
              <li key={i} className="py-5 first:pt-0">
                <p className="font-display font-semibold text-foreground">{member.name}</p>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
