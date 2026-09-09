import { eq } from "drizzle-orm";

import { getDb } from "@/db";
import { users } from "@/db/schema";

type AuthUser = {
  id: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
};

export async function upsertUser(user: AuthUser) {
  const db = getDb();

  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.id, user.id))
    .limit(1);

  const values = {
    id: user.id,
    email: user.email,
    name: user.name,
    imageUrl: user.imageUrl,
    updatedAt: new Date(),
  };

  if (existing) {
    const [updated] = await db
      .update(users)
      .set(values)
      .where(eq(users.id, user.id))
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
