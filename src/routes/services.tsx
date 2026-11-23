import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/services/services-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: pageMeta(ogPages.services) }),
  component: ServicesPage,
});
