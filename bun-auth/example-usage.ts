#!/usr/bin/env bun
/**
 * Example script to test the authentication API
 * Run with: bun run example-usage.ts
 */

const BASE_URL = 'http://localhost:3000'

async function main() {
    console.log('🧪 Testing Authentication API\n')

    // Test data
    const testUser = {
        email: `test-${Date.now()}@example.com`,
        password: 'Password123!',
        name: 'Test User',
    }

    try {
        // 1. Create account
        console.log('1️⃣  Creating new account...')
        const signUpResponse = await fetch(`${BASE_URL}/api/auth/sign-up/email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testUser),
            credentials: 'include',
        })

        if (!signUpResponse.ok) {
            const error = await signUpResponse.json()
            throw new Error(`Error creating account: ${JSON.stringify(error)}`)
        }

        const signUpData = await signUpResponse.json()
        console.log('✅ Account created successfully!')
        console.log(`   User: ${signUpData.user.name}`)
        console.log(`   Email: ${signUpData.user.email}`)
        console.log(`   ID: ${signUpData.user.id}\n`)

        // Extrair cookies da resposta
        const cookies = signUpResponse.headers.get('set-cookie') || ''

        // 2. Fazer login
        console.log('2️⃣  Fazendo login...')
        const signInResponse = await fetch(`${BASE_URL}/api/auth/sign-in/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookies,
            },
            body: JSON.stringify({
                email: testUser.email,
                password: testUser.password,
            }),
            credentials: 'include',
        })

        if (!signInResponse.ok) {
            const error = await signInResponse.json()
            throw new Error(`Error logging in: ${JSON.stringify(error)}`)
        }

        const signInData = await signInResponse.json()
        console.log('✅ Login successful!')
        console.log(`   Session ID: ${signInData.session.id}\n`)

        // Update cookies
        const loginCookies = signInResponse.headers.get('set-cookie') || cookies

        // 3. Check session
        console.log('3️⃣  Checking session...')
        const sessionResponse = await fetch(`${BASE_URL}/api/auth/session`, {
            headers: { Cookie: loginCookies },
            credentials: 'include',
        })

        if (sessionResponse.ok) {
            const sessionData = await sessionResponse.json()
            console.log('✅ Valid session!')
            console.log(`   Logged in user: ${sessionData.user.name}\n`)
        }

        // 4. Access protected route /api/me
        console.log('4️⃣  Accessing protected route /api/me...')
        const meResponse = await fetch(`${BASE_URL}/api/me`, {
            headers: { Cookie: loginCookies },
            credentials: 'include',
        })

        if (!meResponse.ok) {
            throw new Error('Error accessing /api/me')
        }

        const meData = await meResponse.json()
        console.log('✅ Data retrieved successfully!')
        console.log(`   Name: ${meData.user.name}`)
        console.log(`   Email: ${meData.user.email}\n`)

        // 5. Access protected route /api/profile
        console.log('5️⃣  Accessing protected route /api/profile...')
        const profileResponse = await fetch(`${BASE_URL}/api/profile`, {
            headers: { Cookie: loginCookies },
            credentials: 'include',
        })

        if (!profileResponse.ok) {
            throw new Error('Error accessing /api/profile')
        }

        const profileData = await profileResponse.json()
        console.log('✅ Profile retrieved successfully!')
        console.log(`   ${profileData.message}\n`)

        // 6. Logout
        console.log('6️⃣  Logging out...')
        const logoutResponse = await fetch(`${BASE_URL}/api/auth/sign-out`, {
            method: 'POST',
            headers: { Cookie: loginCookies },
            credentials: 'include',
        })

        if (logoutResponse.ok) {
            console.log('✅ Logout successful!\n')
        }

        // 7. Try to access protected route after logout
        console.log('7️⃣  Trying to access protected route after logout...')
        const afterLogoutResponse = await fetch(`${BASE_URL}/api/me`, {
            headers: { Cookie: loginCookies },
            credentials: 'include',
        })

        if (afterLogoutResponse.status === 401) {
            console.log('✅ Access correctly denied (401 Unauthorized)\n')
        }

        console.log('🎉 All tests passed successfully!')
    } catch (error) {
        console.error('❌ Error during tests:', error)
        process.exit(1)
    }
}

// Run only if it's the main script
if (import.meta.main) {
    main()
}
