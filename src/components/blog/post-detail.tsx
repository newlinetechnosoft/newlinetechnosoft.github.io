import { Link } from "@tanstack/react-router";
import { type BlogPost } from "@/content/posts";

export function PostDetail({ post }: { post: BlogPost }) {
  const paragraphs = post.content.split("\n\n");

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span> All posts
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="font-mono text-xs text-muted-foreground">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            {" · "}
            {post.readingTime}
          </p>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 font-mono text-xs text-muted-foreground/80">
            {post.tags.join(" · ")}
          </p>

          <div className="mt-10 space-y-6 border-t border-border pt-10 text-base leading-[1.75] text-foreground/90">
            {paragraphs.map((para, i) => {
              if (para.startsWith("### ")) {
                return (
                  <h2
                    key={i}
                    className="mt-12 font-display text-2xl font-semibold text-foreground"
                  >
                    {para.replace("### ", "")}
                  </h2>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>

          <p className="mt-16 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            Written by the engineers at NewLine Technosoft in Butwal. Got a question or spotted a
            mistake? Email us, it goes straight to the people who wrote this.
          </p>
        </div>
      </div>
    </article>
  );
}
