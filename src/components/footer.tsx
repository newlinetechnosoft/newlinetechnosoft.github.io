import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logos/logo.webp";
import { company } from "@/content/company";
import { NAV_ITEMS, siteConfig } from "@/constants";

const LINK_CLASS =
  "relative inline-block w-fit text-[0.8125rem] text-muted-foreground transition-colors duration-150 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:text-foreground hover:after:scale-x-100 focus-visible:text-foreground focus-visible:after:scale-x-100";

const LABEL_CLASS = "text-xs text-muted-foreground/80";

export function Footer() {
  const signatureRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const element = signatureRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) element.dataset.wave = entry.isIntersecting ? "on" : "off";
      },
      { rootMargin: "240px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="site-footer">
      <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-8">
        <div className="grid gap-10 py-10 sm:py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:py-14">
          <div ref={signatureRef} className="site-footer-wordmark">
            <Link
              to="/"
              aria-label={`${siteConfig.name} home`}
              className="site-footer-signature-word footer-brand inline-flex items-center gap-3"
            >
              <img
                src={logoImg}
                alt=""
                width={48}
                height={48}
                aria-hidden="true"
                className="size-10 flex-none object-contain sm:size-12"
              />
              <span>newline</span>
              <span className="site-footer-signature-arrow">↵</span>
            </Link>
            <p className="mt-2 text-xs text-muted-foreground">
              Software engineering from {company.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-4">
            <div className="grid grid-cols-[5.25rem_1fr] items-baseline gap-3">
              <h2 className={LABEL_CLASS}>Pages</h2>
              <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className={LINK_CLASS}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className={LINK_CLASS}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-[5.25rem_1fr] items-baseline gap-3">
              <h2 className={LABEL_CLASS}>Fine print</h2>
              <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
                <li>
                  <Link to="/privacy" className={LINK_CLASS}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className={LINK_CLASS}>
                    Terms
                  </Link>
                </li>
                <li>
                  <a href="/rss.xml" className={LINK_CLASS}>
                    RSS
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-[5.25rem_1fr] items-baseline gap-3">
              <h2 className={LABEL_CLASS}>Say hello</h2>
              <p className="text-[0.8125rem] text-muted-foreground">
                <a href={`mailto:${company.email.general}`} className={LINK_CLASS}>
                  {company.email.general}
                </a>
                <span className="mt-1 block">{company.officeDays}</span>
              </p>
            </div>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {currentYear} {company.name}
          </p>
          <p className="font-mono text-[0.6875rem]">{company.registration}</p>
        </div>
      </div>
    </footer>
  );
}
