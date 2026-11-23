import { createFileRoute, notFound } from "@tanstack/react-router";
import { posts } from "@/content/posts";
import { PostDetail } from "@/components/blog/post-detail";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/constants";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
      meta: pageMeta({
        id: `blog-${post.slug}`,
        path: `/blog/${post.slug}`,
        title: `${post.title} | ${siteConfig.name}`,
        description: post.summary,
        eyebrow: "Engineering Note",
        heading: post.title,
        imageAlt: `${post.title} on ${siteConfig.name} Blog`,
        image: `og/blog-${post.slug}.webp`,
      }),
    };
  },
  component: BlogPostRouteComponent,
});

function BlogPostRouteComponent() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw notFound();
  }

  return <PostDetail post={post} />;
}
