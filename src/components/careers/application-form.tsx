import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { submitForm } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

const INPUT =
  "mt-1.5 w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring disabled:opacity-60";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {optional && <span className="font-normal text-muted-foreground"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

const emptyForm = (role: string) => ({
  name: "",
  email: "",
  phone: "",
  role,
  profileUrl: "",
  cvLink: "",
  note: "",
  botcheck: "",
});

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState(emptyForm(jobTitle));

  const set =
    (key: keyof ReturnType<typeof emptyForm>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "That email address doesn't look right.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please add a phone number (+977 preferred).";
    }
    if (!formData.cvLink.trim() || !formData.cvLink.startsWith("http")) {
      errs.cvLink = "Please add a link to your CV (Google Drive, Dropbox, GitHub, anything that opens).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast.add({
        title: "Something's missing",
        description: "A few fields need another look.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    const result = await submitForm(formData, `Job Application: ${jobTitle} - ${formData.name}`);
    setLoading(false);

    if (result.success) {
      toast.add({
        title: "Application received",
        description: result.message,
        type: "success",
      });
      setFormData(emptyForm(jobTitle));
      setErrors({});
    } else {
      toast.add({
        title: "That didn't go through",
        description: result.message,
        type: "error",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="botcheck"
        value={formData.botcheck}
        onChange={set("botcheck")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Field id="app-name" label="Your name" error={errors.name}>
        <input
          id="app-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "app-name-error" : undefined}
          disabled={loading}
          value={formData.name}
          onChange={set("name")}
          className={INPUT}
          placeholder="Aayush Sharma"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="app-email" label="Email" error={errors.email}>
          <input
            id="app-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "app-email-error" : undefined}
            disabled={loading}
            value={formData.email}
            onChange={set("email")}
            className={INPUT}
            placeholder="aayush@example.com"
          />
        </Field>

        <Field id="app-phone" label="Phone" error={errors.phone}>
          <input
            id="app-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "app-phone-error" : undefined}
            disabled={loading}
            value={formData.phone}
            onChange={set("phone")}
            className={INPUT}
            placeholder="+977 9800000000"
          />
        </Field>
      </div>

      <Field id="app-cv" label="Link to your CV" error={errors.cvLink}>
        <input
          id="app-cv"
          name="cvLink"
          type="url"
          required
          aria-invalid={!!errors.cvLink}
          aria-describedby={errors.cvLink ? "app-cv-error" : undefined}
          disabled={loading}
          value={formData.cvLink}
          onChange={set("cvLink")}
          className={`${INPUT} font-mono text-xs`}
          placeholder="https://drive.google.com/file/d/..."
        />
      </Field>

      <Field id="app-profile" label="GitHub or portfolio" optional>
        <input
          id="app-profile"
          name="profileUrl"
          type="url"
          disabled={loading}
          value={formData.profileUrl}
          onChange={set("profileUrl")}
          className={`${INPUT} font-mono text-xs`}
          placeholder="https://github.com/..."
        />
      </Field>

      <Field id="app-note" label="Anything you'd like us to know" optional>
        <textarea
          id="app-note"
          name="note"
          rows={3}
          disabled={loading}
          value={formData.note}
          onChange={set("note")}
          className={`${INPUT} resize-y`}
          placeholder="What you've worked on recently, and why this role."
        />
      </Field>

      <Button
        type="submit"
        disabled={loading}
        className="h-auto min-h-10 w-full rounded-md px-4 py-2.5 text-center leading-snug font-medium break-words whitespace-normal"
      >
        {loading ? "Sending…" : "Send application"}
      </Button>
    </form>
  );
}
