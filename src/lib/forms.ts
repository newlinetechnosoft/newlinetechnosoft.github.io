import { company } from "@/content/company";

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  fallbackToMailto?: boolean;
}

export async function submitForm(
  formData: Record<string, string>,
  subject: string,
): Promise<FormSubmissionResult> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  // Spam protection: check honeypot
  if (formData.botcheck || formData._gotcha) {
    return { success: true, message: "Inquiry received." };
  }

  // If no endpoint is configured in env, fallback gracefully to mailto
  if (!endpoint || endpoint.trim() === "") {
    const targetEmail =
      subject.toLowerCase().includes("career") || subject.toLowerCase().includes("application")
        ? company.email.careers
        : company.email.hello;

    const emailRecipient = targetEmail.includes("[FILL")
      ? "hello@newlinetechnosoft.com"
      : targetEmail;

    const bodyLines = Object.entries(formData)
      .filter(([k]) => !k.startsWith("_") && k !== "botcheck")
      .map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`);

    const mailtoUrl = `mailto:${encodeURIComponent(emailRecipient)}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n\n"))}`;

    window.open(mailtoUrl, "_blank", "noopener,noreferrer");

    return {
      success: true,
      message: "Form endpoint not configured; opened email draft in your default client.",
      fallbackToMailto: true,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _subject: subject,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you. Your message has been transmitted successfully.",
      };
    }

    const errData = await response.json().catch(() => null);
    const errorMsg = (errData && (errData.message || errData.error)) || "Failed to submit form.";
    return { success: false, message: errorMsg };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error transmitting form.",
    };
  }
}
