import fs from "node:fs/promises";

// Paths and Mark definition
// 64x64 grid, stem width 8.5px, 2px gap to left stem
const MARK_PATH =
  "M10 9h8.5v46H10z M18.5 9h9l19.5 31.5V9h9v38a8 8 0 0 1-8 8H29v4.5l-8.5-8.5 8.5-8.5V47h17a2 2 0 0 0 2-2V26L27.5 9h-9z";

// 1. newline-mark.svg (currentColor)
const newlineMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
  <title>NewLine Technosoft</title>
  <path d="${MARK_PATH}"/>
</svg>
`;

// Monochrome white & black mark
const newlineMarkWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#ffffff">
  <title>NewLine Technosoft</title>
  <path d="${MARK_PATH}"/>
</svg>
`;

const newlineMarkBlackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#000000">
  <title>NewLine Technosoft</title>
  <path d="${MARK_PATH}"/>
</svg>
`;

// 2. Horizontal lockup (224 x 64)
const WORDMARK_PATHS = `  <path d="M72 18h5.2l12.8 20.8V18h5.2v26h-5.2L77.2 23.2V44H72z"/>
  <path d="M115 33.5h-12c.3-3 2.4-5.5 5.5-5.5 2.4 0 4.3 1.3 5 3.3h5.2c-1-4.8-4.8-8.3-10.2-8.3-6 0-10.5 4.7-10.5 11s4.5 11 10.5 11c5.5 0 9.8-3.8 10.5-9.5H115zm-12 3.5h11.8c-.5 3-2.8 5.2-5.8 5.2-3.1 0-5.5-2.2-6-5.2z"/>
  <path d="M118 25l3.8 19h4.2l2.8-12.5 2.8 12.5h4.2l3.8-19h-5l-1.8 12.5-2.7-12.5h-3.4l-2.7 12.5-1.8-12.5z"/>
  <path d="M144 18h5.2v21h11.8v5H144z"/>
  <path d="M164 18h5.2v5.2H164zm0 7h5.2v19H164z"/>
  <path d="M173 25h5.2v2.8c1.4-2.2 3.8-3.5 7-3.5 5 0 8.2 3.4 8.2 8.8V44h-5.2V33.5c0-3.4-1.7-5-4.8-5-3 0-5.2 2-5.2 6V44H173z"/>
  <path d="M210 33.5h-12c.3-3 2.4-5.5 5.5-5.5 2.4 0 4.3 1.3 5 3.3h5.2c-1-4.8-4.8-8.3-10.2-8.3-6 0-10.5 4.7-10.5 11s4.5 11 10.5 11c5.5 0 9.8-3.8 10.5-9.5H210zm-12 3.5h11.8c-.5 3-2.8 5.2-5.8 5.2-3.1 0-5.5-2.2-6-5.2z"/>`;

const newlineLockupSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 64" fill="currentColor">
  <title>NewLine Technosoft</title>
  <path d="${MARK_PATH}"/>
${WORDMARK_PATHS}
</svg>
`;

const newlineLockupWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 64" fill="#ffffff">
  <title>NewLine Technosoft</title>
  <path d="${MARK_PATH}"/>
${WORDMARK_PATHS}
</svg>
`;

const newlineLockupBlackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 64" fill="#000000">
  <title>NewLine Technosoft</title>
  <path d="${MARK_PATH}"/>
${WORDMARK_PATHS}
</svg>
`;

// 3. Stacked lockup (160 x 124)
// Mark centered at top: x: 57..103 (offset by +47), y: 8..54 (offset by -1)
// Wordmark centered below: offset from x=72 to x=11 (offset by -61), y: 72..98 (offset by +54)
const STACKED_MARK_PATH =
  "M57 8h8.5v46H57z M65.5 8h9l19.5 31.5V8h9v38a8 8 0 0 1-8 8H76v4.5l-8.5-8.5 8.5-8.5V46h17a2 2 0 0 0 2-2V25L74.5 8h-9z";
const STACKED_WORDMARK_PATHS = `  <path d="M11 72h5.2l12.8 20.8V72h5.2v26h-5.2L16.2 77.2V98H11z"/>
  <path d="M54 87.5H42c.3-3 2.4-5.5 5.5-5.5 2.4 0 4.3 1.3 5 3.3h5.2c-1-4.8-4.8-8.3-10.2-8.3-6 0-10.5 4.7-10.5 11s4.5 11 10.5 11c5.5 0 9.8-3.8 10.5-9.5H54zm-12 3.5h11.8c-.5 3-2.8 5.2-5.8 5.2-3.1 0-5.5-2.2-6-5.2z"/>
  <path d="M57 79l3.8 19h4.2l2.8-12.5 2.8 12.5h4.2l3.8-19h-5l-1.8 12.5-2.7-12.5h-3.4l-2.7 12.5-1.8-12.5z"/>
  <path d="M83 72h5.2v21h11.8v5H83z"/>
  <path d="M103 72h5.2v5.2H103zm0 7h5.2v19H103z"/>
  <path d="M112 79h5.2v2.8c1.4-2.2 3.8-3.5 7-3.5 5 0 8.2 3.4 8.2 8.8V98h-5.2V87.5c0-3.4-1.7-5-4.8-5-3 0-5.2 2-5.2 6V98H112z"/>
  <path d="M149 87.5h-12c.3-3 2.4-5.5 5.5-5.5 2.4 0 4.3 1.3 5 3.3h5.2c-1-4.8-4.8-8.3-10.2-8.3-6 0-10.5 4.7-10.5 11s4.5 11 10.5 11c5.5 0 9.8-3.8 10.5-9.5H149zm-12 3.5h11.8c-.5 3-2.8 5.2-5.8 5.2-3.1 0-5.5-2.2-6-5.2z"/>`;

const newlineLockupStackedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" fill="currentColor">
  <title>NewLine Technosoft</title>
  <path d="${STACKED_MARK_PATH}"/>
${STACKED_WORDMARK_PATHS}
</svg>
`;

// 4. Favicon SVG with prefers-color-scheme
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <title>NewLine Technosoft</title>
  <style>
    :root {
      --bg: #4f46e5;
      --fg: #ffffff;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #1e1b4b;
        --fg: #a5b4fc;
      }
    }
  </style>
  <rect width="64" height="64" rx="14" fill="var(--bg)"/>
  <path d="M13 12h7v38h-7z M20 12h7.2l16 26V12h7.5v31.5a6.5 6.5 0 0 1-6.5 6.5H28.5v3.8l-7-7 7-7v3.2h14a1.5 1.5 0 0 0 1.5-1.5V26L27.5 12H20z" fill="var(--fg)"/>
</svg>
`;

// Write all logo files
await fs.writeFile("src/assets/logos/newline-mark.svg", newlineMarkSvg);
await fs.writeFile("src/assets/logos/newline-mark-white.svg", newlineMarkWhiteSvg);
await fs.writeFile("src/assets/logos/newline-mark-black.svg", newlineMarkBlackSvg);
await fs.writeFile("src/assets/logos/newline.svg", newlineMarkSvg); // backwards compatibility

await fs.writeFile("src/assets/logos/newline-lockup.svg", newlineLockupSvg);
await fs.writeFile("src/assets/logos/newline-lockup-white.svg", newlineLockupWhiteSvg);
await fs.writeFile("src/assets/logos/newline-lockup-black.svg", newlineLockupBlackSvg);

await fs.writeFile("src/assets/logos/newline-lockup-stacked.svg", newlineLockupStackedSvg);

await fs.writeFile("src/assets/favicons/favicon.svg", faviconSvg);

console.log("Wrote all primary SVG assets successfully.");
