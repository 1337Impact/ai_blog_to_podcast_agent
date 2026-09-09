import Link from "next/link";

import { FernFrond } from "@/components/botanical";

export function LandingFooter() {
  return (
    <footer className="relative z-10 border-t border-border/60 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <FernFrond className="h-7 w-3.5" />
          <span className="font-heading text-lg tracking-tight">Fern</span>
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <Link href="#how" className="underline-offset-4 hover:underline">
            How it works
          </Link>
          <Link href="/sign-in" className="underline-offset-4 hover:underline">
            Sign in
          </Link>
          <Link href="/app" className="underline-offset-4 hover:underline">
            Studio
          </Link>
        </nav>
      </div>
    </footer>
  );
}
