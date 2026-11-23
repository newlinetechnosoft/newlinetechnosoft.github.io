import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { brotliCompressSync, constants, gzipSync } from "node:zlib";

const publicDir = join(import.meta.dirname, "../.output/public");

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
