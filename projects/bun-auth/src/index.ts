import { cors } from '@elysiajs/cors'
import { openapi } from '@elysiajs/openapi'
import { Elysia } from 'elysia'
import { auth } from './auth'
import { env } from './env'

// Middleware for authentication
const authMiddleware = async ({ request, set }: { request: Request; set: any }) => {
    const session = await auth.api.getSession({ headers: request.headers })

    if (!session) {
        set.status = 401
        return null
    }

    return session
}

new Elysia()
    .use(
        cors({
            origin: true,
            credentials: true,
        })
    )
    .use(openapi())

    // Health check
    .get('/health', () => ({ status: 'ok' }), {
        detail: {
            summary: 'Health Check',
            description: 'Check if API is running',
        },
    })

    // Root endpoint
    .get('/', () => ({ message: 'Authentication API - See /swagger for docs' }), {
        detail: {
            summary: 'API Root',
            description: 'Root endpoint',
        },
    })

    // Better-auth routes
    .all('/api/auth/*', ({ request }) => auth.handler(request))

    // Protected route - Get current user
    .get(
        '/api/me',
        async ({ request, set }) => {
            const session = await authMiddleware({ request, set })
            if (!session) return { error: 'Unauthorized' }

            return {
                user: session.user,
                session: session.session,
            }
        },
        {
            detail: {
                summary: 'Get Current User',
                description: 'Returns the authenticated user information. Requires authentication.',
                tags: ['User'],
            },
        }
    )

    // Protected route - Get user profile
    .get(
        '/api/profile',
        async ({ request, set }) => {
            const session = await authMiddleware({ request, set })
            if (!session) return { error: 'Unauthorized' }

            return {
                message: `Welcome ${session.user.name}!`,
                email: session.user.email,
                userId: session.user.id,
            }
        },
        {
            detail: {
                summary: 'Get User Profile',
                description: 'Returns profile information for authenticated user.',
                tags: ['User'],
            },
        }
    )

    .listen(env.PORT)

console.log(`🦊 Elysia is running at http://localhost:${env.PORT}`)
console.log(`📚 API Documentation: http://localhost:${env.PORT}/swagger`)
console.log(`🔐 Auth endpoints: http://localhost:${env.PORT}/api/auth/*`)
