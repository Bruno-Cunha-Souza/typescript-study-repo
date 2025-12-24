# Bun + Elysia + Drizzle ORM + Better-auth

Authentication API built with modern technologies from the Bun ecosystem.

## 🚀 Stack

- **Runtime**: [Bun](https://bun.sh)
- **Framework**: [Elysia](https://elysiajs.com)
- **ORM**: [Drizzle](https://orm.drizzle.team)
- **Auth**: [Better-auth](https://better-auth.com)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Validation**: [Zod](https://zod.dev/)

## 📋 Prerequisites

- Bun installed
- Docker and Docker Compose

## 🛠️ Setup

1. **Clone and install dependencies**:

```bash
bun install
```

2. **Configure environment variables**:

```bash
cp .env.example .env
```

Edit `.env` and add a secure secret:

```bash
# Generate a random secret
openssl rand -base64 32
```

3. **Start the database**:

```bash
docker-compose up -d
```

4. **Run migrations**:

```bash
bun run db:generate
bun run db:push
```

## 🏃 Development

Start the development server:

```bash
bun run dev
```

The server will be available at `http://localhost:3000`

## 📚 Available Endpoints

### Auth (Better-auth)

- `POST /api/auth/sign-up/email` - Create account
- `POST /api/auth/sign-in/email` - Login
- `POST /api/auth/sign-out` - Logout
- `GET /api/auth/session` - Check session

### API

- `GET /` - Hello world
- `GET /user/:id` - Public route example
- `GET /api/me` - Authenticated user data (protected)
- `GET /api/profile` - User profile (protected)

### Documentation

- `GET /swagger` - OpenAPI documentation

## 🧪 Testing the API

### 1. Create an account

```bash
curl -X POST http://localhost:3000/api/auth/sign-up/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "Test User"
  }'
```

### 2. Login

```bash
curl -X POST http://localhost:3000/api/auth/sign-in/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }' \
  -c cookies.txt
```

### 3. Access protected route

```bash
curl http://localhost:3000/api/me \
  -b cookies.txt
```

## 🗄️ Database

### Available scripts

- `bun run db:generate` - Generate migrations
- `bun run db:push` - Push schema directly to database
- `bun run db:migrate` - Run migrations
- `bun run db:studio` - Open Drizzle Studio

### Schema

The database schema includes Better-auth tables:

- `users` - Users
- `sessions` - Active sessions
- `accounts` - Linked accounts (providers)
- `verifications` - Verification tokens

## 📦 Scripts

```json
{
  "dev": "Start server in watch mode",
  "db:generate": "Generate Drizzle migrations",
  "db:migrate": "Run migrations",
  "db:push": "Push schema directly to database",
  "db:studio": "Open database visual interface",
  "example": "Run automated test script"
}
```

## 🔐 Security

- Make sure to use a strong `BETTER_AUTH_SECRET` in production
- Never commit the `.env` file
- Use HTTPS in production
- Configure CORS properly

## 📖 Resources

- [Better-auth Docs](https://better-auth.com/docs)
- [Elysia Docs](https://elysiajs.com/introduction.html)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)
