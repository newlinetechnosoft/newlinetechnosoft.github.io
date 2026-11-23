import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/components/legal/terms-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: pageMeta(ogPages.terms) }),
  component: TermsPage,
});
