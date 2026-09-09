"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { PodcastRecord } from "@/lib/serialize";

type PodcastHistoryProps = {
  podcasts: PodcastRecord[];
  onDeleted: (id: string) => void;
};

export function PodcastHistory({ podcasts, onDeleted }: PodcastHistoryProps) {
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const selected = podcasts.find((podcast) => podcast.id === pendingId);

  async function confirmDelete() {
    if (!pendingId) {
      return;
    }

    setDeleting(true);
    try {
      const response = await fetch(`/api/podcasts/${pendingId}`, {
        method: "DELETE",
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Could not delete episode");
      }

      onDeleted(pendingId);
      setPendingId(null);
      toast.success("Episode removed.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not delete episode",
      );
    } finally {
      setDeleting(false);
    }
  }

  if (podcasts.length === 0) {
    return (
      <Card className="border-dashed border-border/80 bg-card/40 shadow-none">
        <CardContent className="flex min-h-48 flex-col items-center justify-center gap-2 py-12 text-center">
          <p className="font-heading text-2xl">No episodes yet</p>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Your spoken pieces will gather here, quietly, after you grow the
            first one.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <ul className="grid gap-4">
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <Card className="border-border/70 bg-card/75 shadow-none">
              <CardContent className="flex flex-col gap-4 pt-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl leading-tight">
                      {podcast.title || "Untitled episode"}
                    </h3>
                    <a
                      href={podcast.inputUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-sm text-muted-foreground underline-offset-4 hover:underline"
                    >
                      {podcast.inputUrl}
                    </a>
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    {new Date(podcast.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </Badge>
                </div>
                {podcast.summary ? (
                  <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                    {podcast.summary}
                  </p>
                ) : null}
                <audio
                  controls
                  src={podcast.podcastUrl}
                  className="w-full"
                  preload="none"
                >
                  Your browser does not support audio playback.
                </audio>
                <div>
                  <Button
                    type="button"
                    variant="destructive"
                    className="rounded-full"
                    onClick={() => setPendingId(podcast.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <AlertDialog
        open={Boolean(pendingId)}
        onOpenChange={(open) => {
          if (!open && !deleting) {
            setPendingId(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove this episode?</AlertDialogTitle>
            <AlertDialogDescription>
              {selected?.title
                ? `“${selected.title}” will be deleted from your history and audio storage.`
                : "This episode will be deleted from your history and audio storage."}{" "}
              This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Keep it</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={deleting}
              onClick={(event) => {
                event.preventDefault();
                void confirmDelete();
              }}
            >
              {deleting ? "Removing…" : "Delete episode"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
