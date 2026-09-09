import { NextResponse } from "next/server";

import {
  getAuthenticatedUserId,
  unauthenticatedResponse,
} from "@/lib/auth";
import { deletePodcastForUser } from "@/lib/podcast";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, context: RouteContext) {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return unauthenticatedResponse();
  }

  const { id } = await context.params;

  try {
    const deleted = await deletePodcastForUser(userId, id);
    if (!deleted) {
      return NextResponse.json({ error: "Podcast not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete podcast", error);
    return NextResponse.json(
      { error: "Failed to delete podcast" },
      { status: 500 },
    );
  }
}
