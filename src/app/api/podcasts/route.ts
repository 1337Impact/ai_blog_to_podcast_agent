import { NextResponse } from "next/server";
import { z } from "zod";

import {
  getAuthenticatedClerkUser,
  getAuthenticatedUserId,
  unauthenticatedResponse,
} from "@/lib/auth";
import { createPodcastFromUrl, listPodcastsForUser } from "@/lib/podcast";
import { upsertUserFromClerk } from "@/lib/users";

export const maxDuration = 300;

const createPodcastSchema = z.object({
  url: z.string().url("Please provide a valid blog URL"),
});

export async function GET() {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return unauthenticatedResponse();
  }

  try {
    const history = await listPodcastsForUser(userId);
    return NextResponse.json({ podcasts: history });
  } catch (error) {
    console.error("Failed to load podcast history", error);
    return NextResponse.json(
      { error: "Failed to load podcast history" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return unauthenticatedResponse();
  }

  const clerkUser = await getAuthenticatedClerkUser();
  if (!clerkUser) {
    return unauthenticatedResponse();
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = createPodcastSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid request" },
      { status: 400 },
    );
  }

  try {
    await upsertUserFromClerk(clerkUser);
    const podcast = await createPodcastFromUrl(userId, parsed.data.url);
    return NextResponse.json({ podcast }, { status: 201 });
  } catch (error) {
    console.error("Failed to create podcast", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to create podcast",
      },
      { status: 500 },
    );
  }
}
