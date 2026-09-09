import { auth } from "@/auth";
import { NextResponse } from "next/server";

export function unauthenticatedResponse() {
  return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
}

export async function getAuthenticatedUser() {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    return null;
  }

  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    imageUrl: session.user.image ?? null,
  };
}

export async function getAuthenticatedUserId() {
  const user = await getAuthenticatedUser();
  return user?.id ?? null;
}
