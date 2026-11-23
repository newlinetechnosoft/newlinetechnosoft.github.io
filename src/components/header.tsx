import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import newlineLogo from "@/assets/logos/newline.svg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, siteConfig } from "@/constants";
import { ModeToggle } from "./mode-toggle";
import { MenuSvg } from "./icons";

type NavItemData = (typeof NAV_ITEMS)[number];

function isCurrent(to: string, pathname: string) {
  const base = to.endsWith("/") ? to : `${to}/`;
  return pathname === to || pathname.startsWith(base);
}

function NavItem({
  item,
  active,
  onNavigate,
  className,
}: {
  item: NavItemData;
  active: boolean;
  onNavigate?: () => void;
  className: string;
}) {
  return (
    <Link
      to={item.to}
      className={className}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav
      aria-label="Primary"
      className="site-piece pointer-events-auto relative hidden h-[var(--nav-piece-height)] items-center gap-0.5 rounded-full px-[0.4rem] lg:mx-auto lg:flex"
    >
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.label}
          item={item}
          active={isCurrent(item.to, pathname)}
          className="relative z-[1] inline-flex h-8 items-center rounded-full border border-transparent px-[0.85rem] text-sm font-medium whitespace-nowrap text-muted-foreground no-underline transition-colors duration-[180ms] hover:text-foreground focus-visible:border-ring aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground"
        />
      ))}
    </nav>
  );
}

function MobileNav({
  open,
  setOpen,
  pathname,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  pathname: string;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label="Open menu"
          />
        }
      >
        <MenuSvg />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Main website navigation links</SheetDescription>
        </SheetHeader>

        <nav aria-label="Primary" className="min-h-0 flex-1 overflow-y-auto p-4">
          <ul className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavItem
                  item={item}
                  active={isCurrent(item.to, pathname)}
                  onNavigate={() => setOpen(false)}
                  className="flex items-center rounded-xl border border-transparent px-3.5 py-2.5 text-[0.9375rem] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:border-ring aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground"
                />
              </li>
            ))}
          </ul>
        </nav>

        <SheetFooter className="flex-col gap-3 border-t border-border p-4">
          <Button
            className="w-full rounded-xl font-medium"
            render={<Link to="/contact" onClick={() => setOpen(false)} />}
          >
            Contact Us
          </Button>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">Theme</span>
            <ModeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="pointer-events-none relative z-[2] mx-auto flex w-full max-w-[var(--container)] items-center justify-between gap-2">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="site-piece group inline-flex h-[var(--nav-piece-height)] flex-none items-center gap-2.5 rounded-full pr-4 pl-[0.85rem] font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-foreground no-underline focus-visible:border-ring"
          aria-label={`${siteConfig.name} home`}
        >
          <img
            src={newlineLogo}
            alt=""
            aria-hidden="true"
            className="size-5 transition-transform duration-[0.35s] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.12] group-hover:rotate-[-6deg]"
          />
          <span>{siteConfig.shortName}</span>
        </Link>

        <DesktopNav pathname={pathname} />

        <div className="site-piece flex h-[var(--nav-piece-height)] items-center gap-1.5 rounded-full px-2 max-lg:px-1">
          <div className="hidden lg:block">
            <Button
              size="sm"
              className="h-8 rounded-full px-3.5 text-xs font-semibold"
              render={<Link to="/contact" />}
            >
              Contact
            </Button>
          </div>
          <div className="hidden lg:block">
            <ModeToggle />
          </div>
          <MobileNav open={menuOpen} setOpen={setMenuOpen} pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
