"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionConfig } from "motion/react";

import { FluidShape, SoftBlob } from "@/components/blobs";
import { FernFrond, Wildflower } from "@/components/botanical";
import { LandingFaq } from "@/components/landing/faq";
import { LandingFinalCta } from "@/components/landing/final-cta";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHero } from "@/components/landing/hero";
import { LandingHow } from "@/components/landing/how";
import { LandingPreview } from "@/components/landing/preview";
import { LandingSources } from "@/components/landing/sources";
import { LandingUseCases } from "@/components/landing/use-cases";
import { landingNav } from "@/components/landing/content";
import { SiteHeader } from "@/components/site-header";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".hero-copy > *", { autoAlpha: 1, y: 0 });
        gsap.set(".reveal", { autoAlpha: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-copy > *", {
          y: 18,
          autoAlpha: 0,
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

        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el, index) => {
          gsap.from(el, {
            y: 22,
            autoAlpha: 0,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              refreshPriority: index,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <MotionConfig reducedMotion="user">
      <div ref={rootRef} className="relative min-h-full overflow-x-hidden">
        <a
          href="#how"
          className="bg-background text-foreground focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:px-4 focus:py-2 sr-only focus:not-sr-only"
        >
          Skip to how it works
        </a>

        <SoftBlob className="blob-drift pointer-events-none absolute -top-24 -left-16 h-[28rem] w-[28rem] opacity-90 will-change-transform" />
        <SoftBlob
          variant="blush"
          className="blob-drift pointer-events-none absolute top-24 -right-20 h-[26rem] w-[26rem] will-change-transform"
        />
        <FluidShape className="blob-drift pointer-events-none absolute top-[70%] left-1/4 h-[30rem] w-[42rem] opacity-70 will-change-transform" />
        <SoftBlob
          variant="mist"
          className="blob-drift pointer-events-none absolute right-1/4 top-[140%] h-72 w-72 will-change-transform"
        />
        <SoftBlob
          variant="sand"
          className="blob-drift pointer-events-none absolute -left-10 top-[220%] h-80 w-80 will-change-transform"
        />

        <div className="frond-sway pointer-events-none absolute -bottom-8 left-4 hidden h-[28rem] w-36 sm:block">
          <FernFrond className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute top-36 right-8 hidden h-36 w-20 md:block">
          <Wildflower className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute right-6 top-[260%] hidden h-64 w-20 opacity-50 lg:block">
          <FernFrond className="h-full w-full" />
        </div>

        <SiteHeader compact sticky links={landingNav} />
        <main>
          <LandingHero />
          <LandingHow />
          <LandingSources />
          <LandingUseCases />
          <LandingPreview />
          <LandingFaq />
          <LandingFinalCta />
        </main>
        <LandingFooter />
      </div>
    </MotionConfig>
  );
}
