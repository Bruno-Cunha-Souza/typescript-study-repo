import { drizzle } from 'drizzle-orm/node-postgres'
import { schema } from '@/db/schema'
import { env } from '@/env'

export const dbClient = drizzle(env.DATABASE_URL, {
    schema,
    casing: 'snake_case',
})
