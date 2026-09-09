"use client";

import { useState } from "react";

import { PodcastHistory } from "@/components/podcast-history";
import { PodcastStudio } from "@/components/podcast-studio";
import type { PodcastRecord } from "@/lib/serialize";

export function StudioApp({
  initialPodcasts,
}: {
  initialPodcasts: PodcastRecord[];
}) {
  const [podcasts, setPodcasts] = useState(initialPodcasts);

  return (
    <div className="grid gap-10">
      <PodcastStudio
        onCreated={(podcast) =>
          setPodcasts((current) => [podcast, ...current])
        }
      />
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
            History
          </p>
          <h2 className="font-heading text-3xl font-normal tracking-tight">
            Your quiet archive
          </h2>
        </div>
        <PodcastHistory
          podcasts={podcasts}
          onDeleted={(id) =>
            setPodcasts((current) =>
              current.filter((podcast) => podcast.id !== id),
            )
          }
        />
      </section>
    </div>
  );
}
