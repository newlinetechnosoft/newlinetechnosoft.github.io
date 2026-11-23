import { useState, type FormEvent } from "react";
import { submitForm } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: jobTitle,
    profileUrl: "",
    cvLink: "",
    note: "",
    botcheck: "",
  });

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "A valid email address is required.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required (+977 format preferred).";
    }
    if (!formData.cvLink.trim() || !formData.cvLink.startsWith("http")) {
      errs.cvLink =
        "A valid link to your CV/Resume is required (Google Drive, Dropbox, GitHub, etc.).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast.add({
        title: "Validation Error",
        description: "Please resolve the highlighted fields before submitting.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    const result = await submitForm(formData, `Job Application: ${jobTitle} - ${formData.name}`);
    setLoading(false);

    if (result.success) {
      toast.add({
        title: "Application Received",
        description: result.message,
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: jobTitle,
        profileUrl: "",
        cvLink: "",
        note: "",
        botcheck: "",
      });
      setErrors({});
    } else {
      toast.add({
        title: "Submission Error",
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
        onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="app-name" className="block text-xs font-medium text-foreground">
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          id="app-name"
          type="text"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "app-name-error" : undefined}
          disabled={loading}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
          placeholder="Aayush Sharma"
        />
        {errors.name && (
          <p id="app-name-error" className="mt-1 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="app-email" className="block text-xs font-medium text-foreground">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="app-email"
            type="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "app-email-error" : undefined}
            disabled={loading}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
            placeholder="aayush@example.com"
          />
          {errors.email && (
            <p id="app-email-error" className="mt-1 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="app-phone" className="block text-xs font-medium text-foreground">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            id="app-phone"
            type="tel"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "app-phone-error" : undefined}
            disabled={loading}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
            placeholder="+977 9800000000"
          />
          {errors.phone && (
            <p id="app-phone-error" className="mt-1 text-xs text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="app-cv" className="block text-xs font-medium text-foreground">
          CV / Resume Link <span className="text-primary">*</span>
        </label>
        <input
          id="app-cv"
          type="url"
          required
          aria-invalid={!!errors.cvLink}
          aria-describedby={errors.cvLink ? "app-cv-error" : undefined}
          disabled={loading}
          value={formData.cvLink}
          onChange={(e) => setFormData({ ...formData, cvLink: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none transition-colors focus-visible:border-ring font-mono text-xs"
          placeholder="https://drive.google.com/file/d/..."
        />
        {errors.cvLink && (
          <p id="app-cv-error" className="mt-1 text-xs text-destructive">
            {errors.cvLink}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="app-profile" className="block text-xs font-medium text-foreground">
          GitHub or Portfolio Link (Optional)
        </label>
        <input
          id="app-profile"
          type="url"
          disabled={loading}
          value={formData.profileUrl}
          onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none transition-colors focus-visible:border-ring font-mono text-xs"
          placeholder="https://github.com/..."
        />
      </div>

      <div>
        <label htmlFor="app-note" className="block text-xs font-medium text-foreground">
          Short Note / Introduction
        </label>
        <textarea
          id="app-note"
          rows={3}
          disabled={loading}
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground outline-none transition-colors focus-visible:border-ring"
          placeholder="Tell us what you have worked on recently and why you want to work here."
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full rounded-xl font-medium">
        {loading ? "Transmitting application..." : `Submit Application for ${jobTitle}`}
      </Button>
    </form>
  );
}
