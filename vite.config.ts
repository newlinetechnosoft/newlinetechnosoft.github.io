import path from "node:path";
import { defineConfig } from "vite-plus";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const prerenderRoutes = [
  "/",
  "/services",
  "/work",
  "/work/lumbini-logistics-platform",
  "/work/himalayan-health-records",
  "/about",
  "/careers",
  "/careers/frontend-engineer",
  "/careers/backend-systems-engineer",
  "/blog",
  "/blog/react-compiler-in-production",
  "/blog/designing-offline-first-mobile-apps",
  "/blog/postgres-indexing-practical-rules",
  "/contact",
  "/privacy",
  "/terms",
];

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
      sitemap: {
        enabled: true,
        host: process.env.VITE_SITE_URL || "https://newlinetech.vercel.app",
      },
    }),
    react(),
    babel({
      plugins: ["babel-plugin-react-compiler"],
    }),
    nitro({
      preset: "github_pages",
      prerender: {
        crawlLinks: false,
        routes: prerenderRoutes,
      },
    }),
  ],
});
