import Link from "next/link";

import { OliveBranch } from "@/components/botanical";
import { Button } from "@/components/ui/button";

import { LandingPrimaryCta } from "./primary-cta";

export function LandingFinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="relative z-10 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
          Begin when you are ready
        </p>
        <h2
          id="final-heading"
          className="font-heading mt-4 text-4xl font-light tracking-tight text-balance sm:text-5xl"
        >
          Open the studio and paste the first page.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground text-pretty">
          Sign in with Google, grow an episode, and keep it in a quiet archive.
          The rest of the site stays out of the way.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LandingPrimaryCta />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-6 text-base"
          >
            <Link href="/sign-in">Go to sign in</Link>
          </Button>
        </div>
        <OliveBranch className="mx-auto mt-12 h-14 w-64" />
      </div>
    </section>
  );
}
