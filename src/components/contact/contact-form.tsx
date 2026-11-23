import { useState, type FormEvent } from "react";
import { submitForm } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "",
  });

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "A valid email address is required.";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required.";
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast.add({
        title: "Validation Error",
        description: "Please check the required fields below.",
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
        title: "Message Sent",
        description: result.message,
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        botcheck: "",
      });
      setErrors({});
    } else {
      toast.add({
        title: "Transmission Failed",
        description: result.message,
        type: "error",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="botcheck"
        value={formData.botcheck}
        onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="contact-name" className="block text-xs font-medium text-foreground">
          Your Name <span className="text-primary">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          disabled={loading}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
          placeholder="Ramesh Shrestha"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-medium text-foreground">
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          disabled={loading}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
          placeholder="ramesh@company.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-medium text-foreground">
          Subject / Project Type <span className="text-primary">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          disabled={loading}
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
          placeholder="Web platform rewrite / Mobile app development"
        />
        {errors.subject && (
          <p id="contact-subject-error" className="mt-1 text-xs text-destructive">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-foreground">
          Message & Requirements <span className="text-primary">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          disabled={loading}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
          placeholder="Briefly describe what you are building, target timeline, and existing systems."
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-full rounded-xl font-medium">
        {loading ? "Sending message..." : "Send Message"}
      </Button>
    </form>
  );
}
