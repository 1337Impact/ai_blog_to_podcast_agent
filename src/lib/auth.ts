import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export function unauthenticatedResponse() {
  return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
}

export async function getAuthenticatedUserId() {
  const { userId } = await auth();
  return userId;
}

export async function getAuthenticatedClerkUser() {
  const user = await currentUser();
  return user;
}
