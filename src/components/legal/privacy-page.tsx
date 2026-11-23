import { company } from "@/content/company";

export function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last revised February 2026 · {company.location}
        </p>
        <p className="mt-4 border-l-2 border-border pl-4 text-sm text-muted-foreground">
          This is a plain-language draft that is still waiting on formal legal review.
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">The short version</h2>
            <p className="mt-2">
              At {company.name} we collect only what we need. We don&apos;t use third-party
              behavioral trackers or session recorders, and we never sell data to advertisers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              What we collect
            </h2>
            <p className="mt-2">
              Only what you send us through the contact and job application forms:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Your name and contact details (email address, phone number).</li>
              <li>The project description, or the CV and portfolio links, you include.</li>
              <li>
                Standard server logs (IP address, user agent), kept briefly for security and to
                defend against DDoS attacks.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              How we use it
            </h2>
            <p className="mt-2">
              To reply to your inquiry, to evaluate job applications, and to deliver contracted
              engineering work. Nothing else.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">Questions</h2>
            <p className="mt-2">
              For privacy questions or to ask us to delete your data, email{" "}
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
