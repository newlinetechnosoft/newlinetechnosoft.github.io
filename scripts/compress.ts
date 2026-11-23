import { copyFileSync, existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { brotliCompressSync, constants, gzipSync } from "node:zlib";

const publicDir = join(import.meta.dirname, "../.output/public");
const assetsDir = join(publicDir, "assets");

// 1. Reconcile SSR and Client assets: copy any SSR assets into .output/public/assets
const ssrAssetsDir = join(import.meta.dirname, "../node_modules/.nitro/vite/services/ssr/assets");
if (existsSync(ssrAssetsDir)) {
  for (const file of readdirSync(ssrAssetsDir)) {
    const src = join(ssrAssetsDir, file);
    const dest = join(assetsDir, file);
    if (!existsSync(dest)) {
      copyFileSync(src, dest);
      console.log(`Copied SSR asset ${file} to .output/public/assets/`);
    }
  }
}

// 2. Scan all HTML files for referenced CSS files and guarantee they exist in .output/public/assets
function getHtmlFiles(dir: string, list: string[] = []): string[] {
  try {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        getHtmlFiles(fullPath, list);
      } else if (entry.endsWith(".html")) {
        list.push(fullPath);
      }
    }
  } catch {}
  return list;
}

const existingCssFiles = existsSync(assetsDir)
  ? readdirSync(assetsDir).filter((f) => f.startsWith("App-") && f.endsWith(".css"))
  : [];

for (const htmlFile of getHtmlFiles(publicDir)) {
  const content = readFileSync(htmlFile, "utf-8");
  const matches = content.matchAll(/\/assets\/(App-[^"'\s>]+\.css)/g);
  for (const match of matches) {
    const cssName = match[1];
    const firstExisting = existingCssFiles[0];
    if (cssName && firstExisting) {
      const targetPath = join(assetsDir, cssName);
      if (!existsSync(targetPath)) {
        copyFileSync(join(assetsDir, firstExisting), targetPath);
        console.log(`Guaranteed CSS asset ${cssName} in .output/public/assets/ from ${firstExisting}`);
      }
    }
  }
}

const COMPRESSIBLE_EXTENSIONS = new Set([
  ".html",
  ".css",
  ".js",
  ".svg",
  ".json",
  ".xml",
  ".txt",
]);

function walk(dir: string, fileList: string[] = []): string[] {
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath, fileList);
      } else {
        const ext = entry.slice(entry.lastIndexOf(".")).toLowerCase();
        if (COMPRESSIBLE_EXTENSIONS.has(ext) && stat.size > 256) {
          fileList.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error("Directory not found or error walking:", dir, err);
  }
  return fileList;
}

console.log("Pre-compressing static assets in .output/public with Brotli and Gzip...");
const files = walk(publicDir);
let totalOriginal = 0;
let totalBrotli = 0;
let totalGzip = 0;

for (const file of files) {
  const content = readFileSync(file);
  totalOriginal += content.length;

  // Maximum Brotli compression
  const br = brotliCompressSync(content, {
    params: {
      [constants.BROTLI_PARAM_QUALITY]: 11,
    },
  });
  writeFileSync(`${file}.br`, br);
  totalBrotli += br.length;

  // Maximum Gzip compression
  const gz = gzipSync(content, {
    level: 9,
  });
  writeFileSync(`${file}.gz`, gz);
  totalGzip += gz.length;
}

console.log(`Compressed ${files.length} static assets:`);
console.log(`Original: ${(totalOriginal / 1024).toFixed(1)} KB`);
console.log(
  `Gzip:     ${(totalGzip / 1024).toFixed(1)} KB (${Math.round((1 - totalGzip / totalOriginal) * 100)}% reduction)`,
);
console.log(
  `Brotli:   ${(totalBrotli / 1024).toFixed(1)} KB (${Math.round((1 - totalBrotli / totalOriginal) * 100)}% reduction)`,
);
