import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { submitForm } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

const INPUT =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring disabled:opacity-60";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
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

const emptyForm = { name: "", email: "", subject: "", message: "", botcheck: "" };

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState(emptyForm);

  const set =
    (key: keyof typeof emptyForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "That email address doesn't look right.";
    }
    if (!formData.subject.trim()) errs.subject = "Add a short subject so we know where to start.";
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Tell us a little more (at least 10 characters).";
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
    const result = await submitForm(
      formData,
      `Project Inquiry: ${formData.subject} - ${formData.name}`,
    );
    setLoading(false);

    if (result.success) {
      toast.add({
        title: "Message sent",
        description: result.message,
        type: "success",
      });
      setFormData(emptyForm);
      setErrors({});
    } else {
      toast.add({
        title: "Couldn't send that",
        description: result.message,
        type: "error",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="min-w-0 space-y-5">
      <input
        type="text"
        name="botcheck"
        value={formData.botcheck}
        onChange={set("botcheck")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Your name" error={errors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            disabled={loading}
            value={formData.name}
            onChange={set("name")}
            className={INPUT}
            placeholder="Ramesh Shrestha"
          />
        </Field>

        <Field id="contact-email" label="Email" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            disabled={loading}
            value={formData.email}
            onChange={set("email")}
            className={INPUT}
            placeholder="ramesh@company.com"
          />
        </Field>
      </div>

      <Field id="contact-subject" label="What's it about?" error={errors.subject}>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          disabled={loading}
          value={formData.subject}
          onChange={set("subject")}
          className={INPUT}
          placeholder="Rebuilding our web app, a mobile app for our shop…"
        />
      </Field>

      <Field id="contact-message" label="Tell us more" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          disabled={loading}
          value={formData.message}
          onChange={set("message")}
          className={`${INPUT} resize-y`}
          placeholder="What are you building, when do you need it, and what do you already have in place?"
        />
      </Field>

      <Button type="submit" disabled={loading} className="rounded-md px-6 font-medium">
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
