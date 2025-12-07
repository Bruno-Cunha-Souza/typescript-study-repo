// TypeScript Client for the Authentication API
// Can be used in frontend applications (React, Vue, etc)

export interface User {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string
    createdAt: Date
    updatedAt: Date
}

export interface Session {
    id: string
    userId: string
    expiresAt: Date
    token: string
}

export interface AuthResponse {
    user: User
    session: Session
}

export class AuthClient {
    private baseUrl: string

    constructor(baseUrl: string = 'http://localhost:3000') {
        this.baseUrl = baseUrl
    }

    /**
     * Create a new account
     */
    async signUp(email: string, password: string, name: string): Promise<AuthResponse> {
        const response = await fetch(`${this.baseUrl}/api/auth/sign-up/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password, name }),
        })

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || 'Error creating account')
        }

        return response.json()
    }

    /**
     * Login
     */
    async signIn(email: string, password: string): Promise<AuthResponse> {
        const response = await fetch(`${this.baseUrl}/api/auth/sign-in/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || 'Error logging in')
        }

        return response.json()
    }

    /**
     * Logout
     */
    async signOut(): Promise<void> {
        const response = await fetch(`${this.baseUrl}/api/auth/sign-out`, {
            method: 'POST',
            credentials: 'include',
        })

        if (!response.ok) {
            throw new Error('Error logging out')
        }
    }

    /**
     * Get current session
     */
    async getSession(): Promise<AuthResponse | null> {
        const response = await fetch(`${this.baseUrl}/api/auth/session`, {
            credentials: 'include',
        })

        if (!response.ok) {
            return null
        }

        return response.json()
    }

    /**
     * Get authenticated user data
     */
    async getMe(): Promise<{ user: User; session: Session }> {
        const response = await fetch(`${this.baseUrl}/api/me`, {
            credentials: 'include',
        })

        if (!response.ok) {
            throw new Error('Not authenticated')
        }

        return response.json()
    }

    /**
     * Get user profile
     */
    async getProfile(): Promise<{ message: string; email: string; userId: string }> {
        const response = await fetch(`${this.baseUrl}/api/profile`, {
            credentials: 'include',
        })

        if (!response.ok) {
            throw new Error('Not authenticated')
        }

        return response.json()
    }
}

// Usage example:
/*
const auth = new AuthClient()

// Create account
await auth.signUp('user@example.com', 'password123', 'John Silva')

// Login
const { user, session } = await auth.signIn('user@example.com', 'password123')
console.log('Logged in as:', user.name)

// Check session
const currentSession = await auth.getSession()
if (currentSession) {
  console.log('Authenticated user:', currentSession.user.name)
}

// Get profile
const profile = await auth.getProfile()
console.log(profile.message)

// Logout
await auth.signOut()
*/
