import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { writeOgImage } from "./og/index.ts";
import { ogPages } from "../src/lib/og-pages.ts";
import { projects } from "../src/content/projects.ts";
import { jobs } from "../src/content/jobs.ts";
import { posts } from "../src/content/posts.ts";

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), "../public");

// 1. Static Pages
for (const page of Object.values(ogPages)) {
  const output = await writeOgImage({
    output: resolve(publicDir, page.image),
    eyebrow: page.eyebrow,
    title: page.heading,
    description: page.description,
  });

  console.log(`Generated ${output}`);
}

// 2. Projects
for (const p of projects) {
  const output = await writeOgImage({
    output: resolve(publicDir, `og/work-${p.slug}.webp`),
    eyebrow: "Case Study",
    title: p.title,
    description: p.summary,
  });
  console.log(`Generated ${output}`);
}

// 3. Jobs
for (const j of jobs) {
  const output = await writeOgImage({
    output: resolve(publicDir, `og/career-${j.slug}.webp`),
    eyebrow: `Careers · ${j.team}`,
    title: j.title,
    description: j.summary,
  });
  console.log(`Generated ${output}`);
}

// 4. Posts
for (const post of posts) {
  const output = await writeOgImage({
    output: resolve(publicDir, `og/blog-${post.slug}.webp`),
    eyebrow: "Engineering Blog",
    title: post.title,
    description: post.summary,
  });
  console.log(`Generated ${output}`);
}
