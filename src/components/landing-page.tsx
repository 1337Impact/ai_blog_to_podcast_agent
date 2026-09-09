"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FluidShape, SoftBlob } from "@/components/blobs";
import { FernFrond, OliveBranch, Wildflower } from "@/components/botanical";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { SiteHeader } from "@/components/site-header";

gsap.registerPlugin(useGSAP);

export function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-copy > *", {
        y: 18,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power2.out",
      });
      gsap.to(".blob-drift", {
        y: 18,
        x: 10,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 1.4,
      });
      gsap.to(".frond-sway", {
        rotate: 3,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        transformOrigin: "50% 100%",
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="relative min-h-full overflow-hidden">
      <SoftBlob className="blob-drift pointer-events-none absolute -top-24 -left-16 h-[28rem] w-[28rem] opacity-90" />
      <SoftBlob
        variant="blush"
        className="blob-drift pointer-events-none absolute top-24 -right-20 h-[26rem] w-[26rem]"
      />
      <FluidShape className="blob-drift pointer-events-none absolute -bottom-32 left-1/4 h-[30rem] w-[42rem] opacity-80" />
      <SoftBlob
        variant="mist"
        className="blob-drift pointer-events-none absolute right-1/4 bottom-16 h-64 w-64"
      />

      <FernFrond className="frond-sway pointer-events-none absolute -bottom-8 left-4 hidden h-[28rem] w-36 sm:block" />
      <Wildflower className="pointer-events-none absolute top-36 right-8 hidden h-36 w-20 md:block" />

      <SiteHeader compact />

      <main className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-10 text-center sm:px-10 sm:pt-20">
        <div className="hero-copy flex flex-col items-center gap-8">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            Organic listening
          </p>
          <h1 className="font-heading max-w-3xl text-5xl leading-[1.05] font-light tracking-tight text-balance sm:text-7xl">
            Turn any essay into a quiet podcast.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground text-pretty">
            Fern reads a public blog, writes a spoken summary, and keeps each
            episode in a calm archive. Sign in with Google to begin.
          </p>
          <GoogleSignInButton />
          <OliveBranch className="mt-6 h-16 w-72" />
        </div>
      </main>
    </div>
  );
}
