import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-28 text-center">
      <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl border border-border bg-card font-mono text-xl font-bold text-primary">
        ↵
      </div>
      <h1 className="mb-2 font-display text-4xl font-bold tracking-tight text-foreground">
        404 — Line not found
      </h1>
      <p className="mb-8 max-w-sm text-balance text-muted-foreground">
        The page you are looking for does not exist or has been moved to a new route.
      </p>
      <Button
        size="lg"
        className="h-10 rounded-full px-6 text-sm font-semibold"
        render={<Link to="/" />}
      >
        Return to Home
      </Button>
    </div>
  );
}
