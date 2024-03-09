import { sql } from "drizzle-orm"
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: integer("id", { mode: "number" })
    .notNull()
    .primaryKey({ autoIncrement: true }),
  username: text("name").notNull().unique(),
  password: text("password").notNull(),
  verified: integer("verified", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})

export type SelectUser = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert
