"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PodcastRecord } from "@/lib/serialize";

type PodcastStudioProps = {
  onCreated: (podcast: PodcastRecord) => void;
};

export function PodcastStudio({ onCreated }: PodcastStudioProps) {
  const [url, setUrl] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    try {
      const response = await fetch("/api/podcasts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const payload = (await response.json()) as {
        podcast?: PodcastRecord;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(payload.error || "Could not create podcast");
      }

      if (!payload.podcast) {
        throw new Error("Podcast was created without a response body");
      }

      onCreated(payload.podcast);
      setUrl("");
      toast.success("Your episode is ready.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not create podcast",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="border-border/70 bg-card/80 shadow-none backdrop-blur-sm">
      <CardHeader className="gap-2">
        <CardTitle className="font-heading text-3xl font-normal tracking-tight">
          Grow an episode
        </CardTitle>
        <CardDescription className="max-w-xl text-base leading-relaxed">
          Paste a public blog URL. Fern will read it, write a calm spoken
          summary, and keep the recording in your garden of episodes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="blog-url">Blog URL</Label>
            <Input
              id="blog-url"
              type="url"
              required
              placeholder="https://example.com/essay"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              className="h-11 rounded-2xl bg-background"
            />
          </div>
          <Button
            type="submit"
            disabled={pending}
            className="h-11 rounded-full px-6"
          >
            {pending ? "Listening to the page…" : "Create podcast"}
          </Button>
          {pending ? (
            <p className="text-sm text-muted-foreground">
              Scraping, summarizing, and voicing the piece. This can take a
              minute.
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
