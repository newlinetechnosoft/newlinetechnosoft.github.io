import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { projects } from "../src/content/projects.ts";
import { jobs } from "../src/content/jobs.ts";
import { posts } from "../src/content/posts.ts";

const baseUrl = "https://newlinetechnosoft.com";
const today = new Date().toISOString().split("T")[0];

const staticPaths = [
  "",
  "/services",
  "/work",
  "/about",
  "/careers",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

const allPaths = [
  ...staticPaths,
  ...projects.map((p) => `/work/${p.slug}`),
  ...jobs.map((j) => `/careers/${j.slug}`),
  ...posts.map((post) => `/blog/${post.slug}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve("public/sitemap.xml"), xml.trim() + "\n");
console.log(`Generated public/sitemap.xml with ${allPaths.length} URLs`);
