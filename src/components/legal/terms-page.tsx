import { company } from "@/content/company";

export function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-xl border border-warning/40 bg-warning/10 p-4 text-xs font-mono text-warning-foreground">
          <strong>Notice:</strong> This is an initial plain-language draft document and is subject
          to formal legal review by counsel.
        </div>

        <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last revised: February 2026 · {company.location}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">1. Overview</h2>
            <p className="mt-2">
              These terms govern the use of the marketing website operated by {company.name} (
              {company.domain}). Commercial software engineering contracts and Master Services
              Agreements (MSAs) are executed separately and supersede these general website terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. Intellectual Property
            </h2>
            <p className="mt-2">
              All website content, engineering articles, design tokens, and trademarks are the
              property of {company.name} unless otherwise attributed. Open-source code samples
              referenced in our blog are licensed under their respective MIT/Apache licenses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">3. Governing Law</h2>
            <p className="mt-2">
              This website is operated from Lumbini Province, Nepal. Any disputes relating to this
              website are subject to the laws and courts of Nepal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">4. Inquiries</h2>
            <p className="mt-2">
              For questions regarding these terms, reach our legal contact at{" "}
              <a href={`mailto:${company.email.hello}`} className="text-primary hover:underline">
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
