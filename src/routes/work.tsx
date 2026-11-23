import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/work/work-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: pageMeta(ogPages.work) }),
  component: WorkPage,
});
