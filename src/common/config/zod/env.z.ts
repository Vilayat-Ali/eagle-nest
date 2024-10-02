// lib
import { z } from 'zod';

export const envValidationSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.string().min(4).max(4).default('8000'),

  // database configs
  DATABASE_HOST: z.string().min(1),
  DATABASE_PORT: z.string().min(1),
  DATABASE_USERNAME: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
  DATABASE_NAME: z.string().min(1),
});

export type ValidatedEnvs = z.infer<typeof envValidationSchema>;
