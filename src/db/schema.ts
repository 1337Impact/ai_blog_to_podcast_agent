import { relations } from "drizzle-orm";
import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const podcasts = pgTable(
  "podcasts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    inputUrl: text("input_url").notNull(),
    podcastUrl: text("podcast_url").notNull(),
    blobPathname: text("blob_pathname"),
    title: text("title"),
    summary: text("summary"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [index("podcasts_user_id_idx").on(table.userId)],
);

export const usersRelations = relations(users, ({ many }) => ({
  podcasts: many(podcasts),
}));

export const podcastsRelations = relations(podcasts, ({ one }) => ({
  user: one(users, {
    fields: [podcasts.userId],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type Podcast = typeof podcasts.$inferSelect;
