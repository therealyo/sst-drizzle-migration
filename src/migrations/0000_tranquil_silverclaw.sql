CREATE TABLE IF NOT EXISTS "test_table" (
	"id" varchar PRIMARY KEY NOT NULL,
	"start_date" bigint,
	"end_date" bigint,
	"location" varchar,
	"description" text,
	"task_id" varchar,
	"user_id" varchar
);
