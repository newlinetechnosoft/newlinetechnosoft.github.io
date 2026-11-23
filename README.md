# NewLine Technosoft

Marketing website and engineering portfolio for **NewLine Technosoft**, a software engineering company based in **Butwal, Lumbini Province, Nepal**.

Built with TanStack Start, React 19, Tailwind CSS v4, Base UI, and Vite+.

---

## Technical Stack

- **Framework:** TanStack Start & Router (prerendered static site output)
- **Runtime & React:** React 19 with the React Compiler (`babel-plugin-react-compiler`)
- **Styling:** Tailwind CSS v4 with OKLCH semantic color tokens
- **Component Primitives:** shadcn / Base UI (`@base-ui/react`, accessible `render={<a />}` pattern)
- **Typography:** Self-hosted variable fonts (`@fontsource-variable/bricolage-grotesque`, `@fontsource-variable/geist`, `@fontsource-variable/jetbrains-mono`)
- **Icons:** `lucide-react`
- **Toolchain:** Vite+ (`vp`), pnpm, Bun (for OG image rendering and sitemap generation)

---

## Local Development

Install dependencies:

```bash
pnpm install
```

Generate assets and run the development server:

```bash
pnpm dev
```

Run type checks and code formatting/linting:

```bash
pnpm types:check
pnpm check
```

Build static production bundle:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

---

## Form Handling (`VITE_FORM_ENDPOINT`)

The website deploys as static HTML files. Forms (Contact and Job Applications) are orchestrated via `src/lib/forms.ts`:

1. **Configured Endpoint:** Set `VITE_FORM_ENDPOINT` in your environment or hosting provider (e.g., Web3Forms, Formspree, or a custom Cloudflare Worker). Form submissions will POST JSON directly to this endpoint with spam honeypot filtering.
2. **Graceful Fallback:** If `VITE_FORM_ENDPOINT` is unset or empty, the form automatically falls back to generating a prefilled `mailto:` link with all input fields formatted in the user's default email client. A form submission will never silently fail.
3. **File Attachments:** The application form accepts URL links to CVs and portfolios (e.g., Google Drive, GitHub, Dropbox). If file upload attachments are required, point `VITE_FORM_ENDPOINT` to an endpoint that supports multipart form payloads.

---

## Deployment

### GitHub Pages (Current Setup)

The repository deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`. The custom domain is managed via `public/CNAME` pointing to `newlinetechnosoft.com`.

### Switching to Cloudflare Pages

To deploy on Cloudflare Pages:

1. Connect the GitHub repository in the Cloudflare Pages dashboard.
2. Build settings:
   - **Framework preset:** `None`
   - **Build command:** `pnpm build`
   - **Build output directory:** `.output/public`
3. Add environment variable `VITE_FORM_ENDPOINT` (or use Cloudflare Pages Functions to handle `/api/submit` natively).
