// lib
import { z } from 'zod';

export const envValidationSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.string().min(4).max(4).default('8000'),
});

export type ValidatedEnvs = z.infer<typeof envValidationSchema>;
