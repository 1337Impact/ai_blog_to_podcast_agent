import { del, put } from "@vercel/blob";
import { generateText } from "ai";
import { and, desc, eq } from "drizzle-orm";

import { getDb } from "@/db";
import { podcasts } from "@/db/schema";
import { serializePodcast } from "@/lib/serialize";

import { synthesizePodcast } from "./elevenlabs";
import { scrapeBlog } from "./firecrawl";

const SUMMARY_CHAR_LIMIT = 2000;

function clipForSpeech(text: string) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= SUMMARY_CHAR_LIMIT) {
    return cleaned;
  }
  return `${cleaned.slice(0, SUMMARY_CHAR_LIMIT - 1).trimEnd()}…`;
}

export async function createPodcastFromUrl(userId: string, inputUrl: string) {
  const { markdown, title } = await scrapeBlog(inputUrl);

  const { text } = await generateText({
    model: "openai/gpt-5.4",
    prompt: [
      "You write spoken podcast scripts from blog posts.",
      "Create a concise, conversational episode (max 2000 characters).",
      "Capture the main points, keep a calm tone, and avoid markdown.",
      "Do not include stage directions or speaker labels.",
      `Title: ${title}`,
      `Source URL: ${inputUrl}`,
      "Article:",
      markdown.slice(0, 24000),
    ].join("\n\n"),
  });

  const summary = clipForSpeech(text);
  if (!summary) {
    throw new Error("Failed to generate a podcast summary");
  }

  const audio = await synthesizePodcast(summary);
  const pathname = `podcasts/${userId}/${crypto.randomUUID()}.mp3`;
  const blob = await put(pathname, audio, {
    access: "public",
    contentType: "audio/mpeg",
    addRandomSuffix: false,
  });

  const db = getDb();
  const [podcast] = await db
    .insert(podcasts)
    .values({
      userId,
      inputUrl,
      podcastUrl: blob.url,
      blobPathname: blob.pathname,
      title,
      summary,
    })
    .returning();

  return serializePodcast(podcast);
}

export async function listPodcastsForUser(userId: string) {
  const db = getDb();
  return db
    .select()
    .from(podcasts)
    .where(eq(podcasts.userId, userId))
    .orderBy(desc(podcasts.createdAt))
    .then((rows) => rows.map(serializePodcast));
}

export async function deletePodcastForUser(userId: string, podcastId: string) {
  const db = getDb();
  const [podcast] = await db
    .select()
    .from(podcasts)
    .where(and(eq(podcasts.id, podcastId), eq(podcasts.userId, userId)))
    .limit(1);

  if (!podcast) {
    return null;
  }

  if (podcast.blobPathname || podcast.podcastUrl) {
    await del(podcast.blobPathname || podcast.podcastUrl);
  }

  await db
    .delete(podcasts)
    .where(and(eq(podcasts.id, podcastId), eq(podcasts.userId, userId)));

  return podcast;
}
