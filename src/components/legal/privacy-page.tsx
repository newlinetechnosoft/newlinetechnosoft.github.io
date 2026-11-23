import { company } from "@/content/company";

export function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-xl border border-warning/40 bg-warning/10 p-4 text-xs font-mono text-warning-foreground">
          <strong>Notice:</strong> This is an initial plain-language draft document and is subject
          to formal legal review by counsel.
        </div>

        <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last revised: February 2026 · {company.location}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">1. Our Principles</h2>
            <p className="mt-2">
              At {company.name}, we believe data collection should be minimized to what is strictly
              necessary. We do not use third-party behavioral trackers, session recorders, or sell
              data to advertisers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            <p className="mt-2">
              We collect information you explicitly submit through our contact and career
              application forms:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Name and contact details (email address, telephone number).</li>
              <li>Project description or resume links provided in job applications.</li>
              <li>
                Standard technical server logs (IP address, user agent) kept temporarily for DDoS
                defense and security.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">3. How We Use Data</h2>
            <p className="mt-2">
              Data submitted through forms is used solely to respond to inquiries, evaluate
              employment candidacies, and deliver contracted engineering work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              4. Contact for Inquiries
            </h2>
            <p className="mt-2">
              For privacy-related questions or data deletion requests, contact us at{" "}
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
