"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Pause, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { sampleEpisode } from "./content";

const BARS = [
  34, 58, 46, 78, 40, 86, 52, 70, 44, 92, 38, 64, 80, 48, 74, 36, 68, 54, 88,
  42, 76, 50, 62, 84, 40, 72, 56, 90,
];

export function LandingPreview() {
  const [playing, setPlaying] = useState(false);
  const waveRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const bars = waveRef.current?.querySelectorAll<HTMLElement>(".preview-bar");
      if (!bars?.length) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!playing) {
          gsap.to(bars, {
            scaleY: 1,
            duration: 0.5,
            ease: "sine.out",
            overwrite: true,
          });
          return;
        }

        const tween = gsap.to(bars, {
          scaleY: () => gsap.utils.random(0.35, 1.15),
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: { each: 0.04, from: "center" },
        });

        return () => {
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: waveRef, dependencies: [playing], revertOnUpdate: true },
  );

  return (
    <section
      id="listen"
      aria-labelledby="listen-heading"
      className="relative z-10 scroll-mt-28 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="reveal mb-10 text-center">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            In the studio
          </p>
          <h2
            id="listen-heading"
            className="font-heading mt-4 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            A quiet player for each episode.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground text-pretty">
            After Fern finishes, the piece looks like this: title, source,
            spoken summary, and a player. This preview is a sketch of that
            listening card.
          </p>
        </div>

        <article className="reveal rounded-3xl border border-border/70 bg-card/80 p-6 shadow-none sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1">
              <h3 className="font-heading text-2xl leading-tight">
                {sampleEpisode.title}
              </h3>
              <p className="break-all text-sm text-muted-foreground">
                {sampleEpisode.source}
              </p>
            </div>
            <Badge variant="secondary" className="rounded-full">
              {sampleEpisode.date}
            </Badge>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {sampleEpisode.summary}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button
              type="button"
              className="size-12 rounded-full"
              aria-pressed={playing}
              aria-label={playing ? "Pause preview waveform" : "Play preview waveform"}
              onClick={() => setPlaying((current) => !current)}
            >
              {playing ? <Pause /> : <Play />}
            </Button>
            <div
              ref={waveRef}
              className="flex h-14 flex-1 items-end gap-[3px]"
              aria-hidden="true"
            >
              {BARS.map((height, index) => (
                <span
                  key={index}
                  className="preview-bar w-1 origin-bottom rounded-full bg-primary/50 sm:w-1.5"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {playing
              ? "A visual stand-in for playback — your real episodes use a browser audio player."
              : "Press play to see the waveform breathe."}
          </p>
        </article>

        <p className="reveal mt-8 text-center text-sm text-muted-foreground">
          Signed-in episodes are created from a URL in the studio, then listed
          under your quiet archive.
        </p>
      </div>
    </section>
  );
}
