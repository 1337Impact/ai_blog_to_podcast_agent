import { eq } from "drizzle-orm";

import { getDb } from "@/db";
import { users } from "@/db/schema";

type ClerkUserLike = {
  id: string;
  fullName: string | null;
  imageUrl: string;
  emailAddresses: { emailAddress: string }[];
};

export async function upsertUserFromClerk(clerkUser: ClerkUserLike) {
  const db = getDb();
  const email = clerkUser.emailAddresses[0]?.emailAddress;

  if (!email) {
    throw new Error("Authenticated user is missing an email address");
  }

  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.id, clerkUser.id))
    .limit(1);

  const values = {
    id: clerkUser.id,
    email,
    name: clerkUser.fullName,
    imageUrl: clerkUser.imageUrl,
    updatedAt: new Date(),
  };

  if (existing) {
    const [updated] = await db
      .update(users)
      .set(values)
      .where(eq(users.id, clerkUser.id))
      .returning();
    return updated;
  }

  const [created] = await db
    .insert(users)
    .values({
      ...values,
      createdAt: new Date(),
    })
    .returning();

  return created;
}
