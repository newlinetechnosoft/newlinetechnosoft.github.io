# Migration Plan: NewLine Technosoft Website

## 1. What to Delete

- All mango-specific features and assets:
  - `src/components/brand/` (mango logo previewer, color palette export)
  - `src/components/layouts/` (mango window-manager layout interactive simulator)
  - `src/components/showcase/` (mango desktop community screenshots & videos)
  - `src/components/sponsor/` (mango GitHub sponsors widgets and qr codes)
  - `src/lib/showcase-data.ts` & `src/lib/showcase-media.ts`
  - `src/routes/brand.tsx`, `src/routes/showcase.tsx`, `src/routes/sponsor.tsx`
  - `scripts/generate-showcase.ts`
  - `public/sponsor-qr.png`, `public/showcase/`
  - `src/assets/logos/mangowm.svg`
- Discord links, mango GitHub links, docs/settings references.

## 2. What to Keep

- **Core Architecture & Stack:**
  - TanStack Start + Router with static prerender configuration (`nitro: preset: "github_pages"`).
  - React 19 with React Compiler (`babel-plugin-react-compiler`) — strictly no manual `useMemo`/`useCallback`/`memo`.
  - Tailwind CSS v4 with OKLCH theme semantic tokens.
  - shadcn UI primitives built on Base UI (`@base-ui/react`), `cva`, and `cn`.
  - Icons via `lucide-react`.
  - Toolchain with Vite+ (`vp`), pnpm, and Bun for OG generation.
- **Design & Experience Foundations:**
  - Floating pill header navigation with active indicator (`aria-current="page"`).
  - Mobile sheet menu drawer.
  - Grouped-links footer with animated underline hover effects.
  - Clean light/dark/system theme toggle without flash.
  - Accessibility: Skip-to-content landmark link, visible focus rings (`focus-visible`), full `prefers-reduced-motion` compliance.

## 3. What to Adapt

- **Identity & Concept:**
  - Company: **NewLine Technosoft** (short form: **NewLine**), based in **Butwal, Lumbini Province, Nepal**.
  - Motif: The newline character (`\n`) and return key mark (`↵`).
  - Logo: Clean custom SVG mark (`↵`) + refined geometric wordmark (`src/assets/logos/newline.svg`).
  - Favicons: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` in the new NewLine brand.
  - Palette: Green/Teal NewLine Technosoft brand palette (Green `oklch(0.75 0.16 160)` light / `oklch(0.80 0.17 158)` dark, Teal `oklch(0.47 0.08 190)`, Ink `oklch(0.28 0.05 209)`) against fresh, high-contrast surfaces with guaranteed WCAG 2.2 AA contrast.
  - Self-Hosted Typography: Integrated `@fontsource-variable/bricolage-grotesque`, `@fontsource-variable/geist`, and `@fontsource-variable/jetbrains-mono` directly into CSS, eliminating runtime external Google Fonts requests.
  - Hero Visual: Replace the window manager layout demo with a lightweight (<6KB), responsive, CSS/SVG/React animation inspired by a code terminal where a command/code snippet is keyed in, `↵` is struck, and a clean digital product/screen outcome resolves.
  - Footer Signature Wordmark: Adapted to `newline ↵` with the smooth ambient background shimmer effect.
  - Deployment: Added `public/CNAME` pointing to `newlinetechnosoft.com`.

## 4. Final Route List

| Path             | Title              | Description                                                                                                                  |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `/`              | NewLine Technosoft | Engineering digital products & software systems. Hero, Services overview, Approach, Tech stack, Careers teaser, Contact CTA. |
| `/services`      | Services           | Detailed breakdown of software engineering, web apps, mobile systems, and technical consulting.                              |
| `/work`          | Selected Work      | Case studies of shipped client systems, architectures, and outcomes.                                                         |
| `/work/$slug`    | Case Study Detail  | Detailed breakdown: Problem, Architecture, Approach, Stack, and Measurable Outcomes.                                         |
| `/about`         | About NewLine      | Company story, engineering principles, Butwal/Nepal context, and team structure.                                             |
| `/careers`       | Careers            | Engineering culture, benefits, hiring process, and open roles with filters.                                                  |
| `/careers/$slug` | Job Detail & Apply | In-depth role requirements, responsibilities, and direct application form.                                                   |
| `/blog`          | Engineering Blog   | Technical articles, engineering notes, and architectural write-ups.                                                          |
| `/blog/$slug`    | Article Detail     | Technical post with structured reading layout and code blocks.                                                               |
| `/contact`       | Contact Us         | Direct inquiry form, email, phone, Butwal office hours (NPT UTC+5:45), and map coordinates.                                  |
| `/privacy`       | Privacy Policy     | Plain-language, transparent privacy commitments (draft).                                                                     |
| `/terms`         | Terms of Service   | Clear, plain-language engineering and service agreement terms (draft).                                                       |
| `/rss.xml`       | RSS Feed           | Public syndication feed for engineering articles.                                                                            |
| `404`            | Not Found          | Clean, friendly 404 with navigation back to safety.                                                                          |

## 5. Content Model (`src/content/`)

- `company.ts`: The single source of truth for company facts, location (Butwal, Lumbini Province, Nepal), office hours in NPT, contact details, and greppable `[FILL]` placeholders.
- `services.ts`: Structured array of service offerings, deliverables, stacks, and execution steps.
- `projects.ts`: Typed list of case studies with problem/solution/outcomes/metrics.
- `jobs.ts`: Typed job listings (`Job { slug, title, team, type, location, posted, summary, responsibilities[], requirements[], niceToHave[] }`) plus empty state handling.
- `team.ts`: Team structure and neutral placeholder component.
- `posts.ts`: Typed blog posts with publication dates, tags, summaries, and full body content.

## 6. Forms & Integrations (`src/lib/forms.ts`)

- Client-side validated forms for Contact and Job Applications.
- Direct submission to `import.meta.env.VITE_FORM_ENDPOINT` (compatible with Web3Forms, Formspree, or Cloudflare Worker).
- Automatic fallback to prefilled `mailto:` links with subject and body if the endpoint is not set.
- Honeypot anti-spam field, inline ARIA error messaging, accessible loading/disabled states, and toast notifications.

## 7. Phased Implementation Roadmap

- **Phase 1:** Purge mangowm code, establish tokens, self-host fonts, create NewLine logos/favicons, implement Header, Footer, and 404.
- **Phase 2:** Build Home page, content sections, and the lightweight newline hero animation.
- **Phase 3:** Build Services, About, and Contact pages with the contact form.
- **Phase 4:** Build Careers list, Job detail view, and Job application form.
- **Phase 5:** Build Work (case studies), Blog, RSS feed, and Legal pages (Privacy & Terms).
- **Phase 6:** Configure JSON-LD structured data, generate OG images, update sitemap & prerender registration, verify Lighthouse & build health.
