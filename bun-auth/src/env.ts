import { z } from 'zod'

const envSchema = z.object({
    DATABASE_URL: z.string().url().startsWith('postgresql://'),
    BETTER_AUTH_SECRET: z.string().min(32),
    BETTER_AUTH_URL: z.string().url(),
    PORT: z.string().default('3000').pipe(z.coerce.number()),
})

export const env = envSchema.parse(Bun.env)
