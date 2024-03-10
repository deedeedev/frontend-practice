import { sql } from "drizzle-orm"
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const sessions = sqliteTable("sessions", {
  id: text("id").notNull().primaryKey(),
  userId: integer("user_id", { mode: "number" }).notNull(),
  token: text("token").notNull(),
  expiresAt: text("expires_at").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})

export type SelectSession = typeof sessions.$inferSelect
export type InsertSession = typeof sessions.$inferInsert
