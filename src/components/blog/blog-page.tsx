import { Link } from "@tanstack/react-router";
import { posts } from "@/content/posts";

export function BlogPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Engineering Blog
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Technical notes and architecture write-ups.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Observations, performance post-mortems, and engineering practices from our team in
            Butwal.
          </p>
        </div>

        <div className="mt-14 space-y-6 max-w-3xl">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group block rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/50"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 className="mt-3 font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{post.summary}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-muted/40 px-2 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
