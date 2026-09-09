import type { Podcast } from "@/db/schema";

export type PodcastRecord = {
  id: string;
  userId: string;
  inputUrl: string;
  podcastUrl: string;
  blobPathname: string | null;
  title: string | null;
  summary: string | null;
  createdAt: string;
};

export function serializePodcast(podcast: Podcast): PodcastRecord {
  return {
    id: podcast.id,
    userId: podcast.userId,
    inputUrl: podcast.inputUrl,
    podcastUrl: podcast.podcastUrl,
    blobPathname: podcast.blobPathname,
    title: podcast.title,
    summary: podcast.summary,
    createdAt: podcast.createdAt.toISOString(),
  };
}
