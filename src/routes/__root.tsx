import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/toast";
import appleTouchIcon from "@/assets/favicons/apple-touch-icon.png";
import faviconIco from "@/assets/favicons/favicon.ico";
import faviconSvg from "@/assets/favicons/favicon.svg";
import appCss from "@/App.css?url";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ogPages } from "@/lib/og-pages";
import { organizationJsonLd, pageMeta, websiteJsonLd } from "@/lib/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ...pageMeta(ogPages.home),
    ],
    links: [
      { rel: "icon", href: faviconIco, sizes: "32x32" },
      { rel: "icon", type: "image/svg+xml", href: faviconSvg },
      { rel: "apple-touch-icon", sizes: "180x180", href: appleTouchIcon },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd()),
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <Header />
          <main id="main-content">
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Scripts />
      </body>
    </html>
  );
}
