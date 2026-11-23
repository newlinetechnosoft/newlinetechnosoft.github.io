import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/contact/contact-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: pageMeta(ogPages.contact) }),
  component: ContactPage,
});
