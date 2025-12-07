# TypeScript Small Projects

A collection of small projects and rapid prototypes in TypeScript, exploring different stacks and modern technologies.

## 📚 Projects

### 1. **Bun Auth** - Authentication API

Modern authentication built with the Bun ecosystem.

**Stack:**

- **Runtime**: [Bun](https://bun.sh)
- **Framework**: [Elysia](https://elysiajs.com)
- **ORM**: [Drizzle](https://orm.drizzle.team)
- **Auth**: [Better-auth](https://better-auth.com)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Validation**: [Zod](https://zod.dev/)

**Features:**

- ✅ Sign up with email
- ✅ Sign in with email
- ✅ Session management
- ✅ Protected routes
- ✅ OpenAPI documentation (Swagger)

For more details, see the [bun-auth README](./bun-auth/README.md)

---

## 🚀 Quick Start

Each project has its own setup instructions. Navigate to the desired project folder:

```bash
cd bun-auth
bun install
docker-compose up -d
bun run db:push
bun run dev
```

## 🛠️ General Prerequisites

- [Bun](https://bun.sh) installed
- [Docker](https://www.docker.com/) and Docker Compose
- Node.js (compatibility with some projects)

## 📖 Structure

```txt
typescript/
├── bun-auth/           # Authentication API with Better-auth
├── README.md           # This file
└── [future projects]
```

## 📝 Purpose

This repository serves as a space to:

- Explore new technologies and frameworks in TypeScript
- Create rapid prototypes and POCs
- Share patterns and best practices
- Learn with practical examples

## 📚 Useful Resources

- [TypeScript Docs](https://www.typescriptlang.org/)
- [Better Auth Documentation](https://better-auth.com/docs)
- [Elysia Guide](https://elysiajs.com/introduction.html)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)

## 📄 License

Each project may have its own license. Check the LICENSE file in each folder.

---

**Built with ❤️ in TypeScript**
