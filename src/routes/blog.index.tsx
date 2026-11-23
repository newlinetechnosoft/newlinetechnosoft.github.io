import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/blog/blog-page";
import { ogPages } from "@/lib/og-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: pageMeta(ogPages.blog) }),
  component: BlogPage,
});
