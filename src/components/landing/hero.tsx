import Link from "next/link";

import { OliveBranch } from "@/components/botanical";
import { Button } from "@/components/ui/button";

import { LandingPrimaryCta } from "./primary-cta";

export function LandingHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-8 text-center sm:px-10 sm:pt-16 sm:pb-28"
    >
      <div className="hero-copy flex flex-col items-center gap-7">
        <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
          Blog to podcast
        </p>
        <h1
          id="hero-heading"
          className="font-heading max-w-3xl text-5xl leading-[1.05] font-light tracking-tight text-balance sm:text-7xl"
        >
          Listen to the page you meant to finish.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground text-pretty">
          Paste a public blog, essay, or document URL. Fern reads it, writes a
          calm spoken summary, and keeps the recording in your archive.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <LandingPrimaryCta />
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 rounded-full px-5 text-base"
          >
            <Link href="#how">See how it works</Link>
          </Button>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">
          After Google sign-in you land in the studio. One URL field. Then a
          player you can return to.
        </p>
        <OliveBranch className="mt-2 h-14 w-64 sm:h-16 sm:w-72" />
      </div>
    </section>
  );
}
