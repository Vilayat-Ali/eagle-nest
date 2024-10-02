// lib
import { pgTableCreator, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

const createTable = pgTableCreator((tableName) => `project_${tableName}`);

// ===================================================================================
// DATABASE TABLE NAME
// ===================================================================================

export const exampleTable = createTable('example', {
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const insertExampleTableSchema = createInsertSchema(exampleTable);
export const selectExampleTableSchema = createSelectSchema(exampleTable);

// ===================================================================================
