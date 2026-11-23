import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about/about-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: pageMeta(ogPages.about) }),
  component: AboutPage,
});
