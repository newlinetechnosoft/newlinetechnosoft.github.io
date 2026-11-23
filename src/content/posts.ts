export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "react-compiler-in-production",
    title: "Shipping React 19 with the React Compiler in Production",
    publishedAt: "2026-02-10",
    summary:
      "Why eliminating manual useMemo and useCallback hooks improves codebase maintainability and eliminates cognitive overhead without sacrificing rendering speed.",
    readingTime: "4 min read",
    tags: ["React", "TypeScript", "Performance"],
    content: `
For years, React codebases accumulated manual memoization hooks: \`useMemo\`, \`useCallback\`, and \`React.memo\`. While necessary to prevent wasteful re-renders in earlier architectures, they introduced significant mental friction and frequently hid subtle dependency-array bugs.

### Automatic Memoization at Build Time

With React 19 and the React Compiler (\`babel-plugin-react-compiler\`), memoization shifts from manual developer annotations to an automated static analysis pass.

The compiler analyzes pure JavaScript semantics, tracks mutation boundaries, and inserts optimized memoization blocks directly into compiled output. As a result:

1. **Developers write plain JavaScript and React components** without second-guessing closure identity or memoization dependencies.
2. **Codebases become smaller and easier to read**, eliminating thousands of lines of defensive boilerplate.
3. **Runtime performance remains consistent**, with fewer unnecessary component re-renders across dynamic interfaces.

### Our Experience

In our production applications at NewLine Technosoft, adopting the React Compiler alongside Vite+ and TanStack Router allowed us to delete every manual memoization hook. Type-checking remains instant, build times remain under 2 seconds, and UI reactivity is rock solid.
    `.trim(),
  },
  {
    slug: "designing-offline-first-mobile-apps",
    title: "Designing Resilient Offline-First Mobile Architectures",
    publishedAt: "2026-01-22",
    summary:
      "How we structure local SQLite caching, queued mutations, and conflict resolution for field applications operating in low-bandwidth regions.",
    readingTime: "6 min read",
    tags: ["Mobile", "Architecture", "SQLite"],
    content: `
Building software in Nepal requires designing for realities where mobile data connections drop in transit, in remote valleys, or during seasonal storms. An app that hangs on a loading spinner when offline is fundamentally broken for operational use.

### The Offline-First Contract

We treat the local device storage as the primary source of truth for read operations, rather than a transient cache:

- **Local-first reads:** UI components read synchronously from the local SQLite database. Data is always visible instantly.
- **Append-only mutation queue:** User actions (creating a record, submitting a form, updating a status) append an event to a local sync queue with a unique UUID and timestamp.
- **Background synchronization:** A lightweight worker drains the queue whenever network connectivity is verified.
- **Deterministic conflict resolution:** Where multiple devices update overlapping state, timestamps and explicit server merge rules resolve conflicts deterministically.

This architecture ensures that field workers, drivers, and medical staff can continue their work uninterrupted, regardless of connectivity.
    `.trim(),
  },
  {
    slug: "postgres-indexing-practical-rules",
    title: "Practical Rules for PostgreSQL Indexing in High-Traffic Systems",
    publishedAt: "2025-11-30",
    summary:
      "B-tree index mechanics, composite key ordering, and how to avoid index bloat while maintaining sub-millisecond query execution.",
    readingTime: "5 min read",
    tags: ["PostgreSQL", "Database", "Backend"],
    content: `
Database query performance rarely degrades gradually; it falls off a cliff when table scans replace index scans as row counts grow. Over-indexing, however, degrades write throughput and bloats memory buffers.

### Core Guidelines We Follow

1. **Order composite index columns by equality first, then range:** If your query filters on \`organization_id = $1 AND created_at > $2\`, the index must be defined as \`(organization_id, created_at)\`, never the reverse.
2. **Use partial indexes for status queues:** For tables where 98% of rows are marked \`completed\`, indexing only \`WHERE status = 'pending'\` yields an index orders of magnitude smaller that fits permanently into RAM.
3. **Index foreign keys by default:** PostgreSQL does not automatically create indexes on foreign keys. Without them, deleting or updating parent records triggers full table locks and scans on child tables.

Systematic indexing based on actual query plans (\`EXPLAIN ANALYZE\`) keeps production response times under 50 milliseconds even as data sets scale into millions of rows.
    `.trim(),
  },
];
