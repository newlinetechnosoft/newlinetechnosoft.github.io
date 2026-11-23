import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/legal/privacy-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: pageMeta(ogPages.privacy) }),
  component: PrivacyPage,
});
