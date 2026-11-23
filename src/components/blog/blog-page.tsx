import { Link } from "@tanstack/react-router";
import { posts } from "@/content/posts";

export function BlogPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[var(--container)] px-5 sm:px-8">
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Notes from the team
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Write-ups, post-mortems and things we&apos;ve learned building software in Butwal.
        </p>

        <ul className="mt-14 max-w-3xl divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group grid gap-2 py-7 sm:grid-cols-[8rem_1fr] sm:gap-8"
              >
                <div className="font-mono text-xs text-muted-foreground sm:pt-1.5">
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                  <p className="mt-1">{post.readingTime}</p>
                </div>

                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.summary}
                  </p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground/80">
                    {post.tags.join(" · ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
