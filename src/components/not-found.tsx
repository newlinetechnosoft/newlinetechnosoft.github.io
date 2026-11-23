import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-28 text-center">
      <p aria-hidden="true" className="mb-3 font-mono text-5xl text-primary">
        ↵
      </p>
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        404 — Line not found
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        That page doesn&apos;t exist, or it moved. The home page is a good place to start over.
      </p>
      <Button className="mt-8 h-10 rounded-md px-5 text-sm font-semibold" render={<Link to="/" />}>
        Back to home
      </Button>
    </div>
  );
}
