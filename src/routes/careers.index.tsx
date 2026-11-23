import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/components/careers/careers-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/careers/")({
  head: () => ({ meta: pageMeta(ogPages.careers) }),
  component: CareersPage,
});
