import { InferModel } from "drizzle-orm";
import { pgTable, varchar, bigint, text } from "drizzle-orm/pg-core";

export const testTable = pgTable("test_table", {
  id: varchar("id").primaryKey(),
  startDate: bigint("start_date", { mode: "number" }),
  endDate: bigint("end_date", { mode: "number" }),
  location: varchar("location"),
  description: text("description"),
  taskId: varchar("task_id"),
  userId: varchar("user_id"),
});
