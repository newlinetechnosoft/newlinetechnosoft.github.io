import { Link } from "@tanstack/react-router";
import { type BlogPost } from "@/content/posts";

export function PostDetail({ post }: { post: BlogPost }) {
  // Render paragraphs and code blocks cleanly
  const paragraphs = post.content.split("\n\n");

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>←</span> Back to all articles
          </Link>
        </div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-10 text-foreground">
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-base leading-relaxed text-foreground/90">
              {paragraphs.map((para, i) => {
                if (para.startsWith("### ")) {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl font-bold text-foreground mt-8 mb-4"
                    >
                      {para.replace("### ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-muted/20 p-6 sm:p-8">
            <p className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              Author Note
            </p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Written by the NewLine Technosoft engineering team in Butwal, Nepal. If you have
              questions or technical feedback on this post, email our engineers directly.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
