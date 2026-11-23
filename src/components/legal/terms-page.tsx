import { company } from "@/content/company";

export function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Terms of service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last revised February 2026 · {company.location}
        </p>
        <p className="mt-4 border-l-2 border-border pl-4 text-sm text-muted-foreground">
          This is a plain-language draft that is still waiting on formal legal review.
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">About these terms</h2>
            <p className="mt-2">
              These terms cover your use of the marketing website run by {company.name} (
              {company.domain}). Software engineering contracts and Master Services Agreements
              (MSAs) are signed separately and take priority over these general website terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Who owns what
            </h2>
            <p className="mt-2">
              Website content, articles, design tokens and trademarks belong to {company.name}{" "}
              unless credited otherwise. Open-source code samples in our blog stay under their own
              MIT or Apache licenses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Governing law</h2>
            <p className="mt-2">
              This website is run from Lumbini Province, Nepal. Any dispute about it falls under the
              laws and courts of Nepal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Questions</h2>
            <p className="mt-2">
              For questions about these terms, email{" "}
              <a
                href={`mailto:${company.email.hello}`}
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {company.email.hello}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
