# TypeScript Study & Practice

Repository for studying and practicing TypeScript, containing theoretical documentation, configuration examples, and hands-on projects.

## Structure

```txt
typescript/
├── docs/               # Theoretical study documentation
│   ├── FUNCTION.md     # Functions in TypeScript
│   ├── OOP.md          # Object-Oriented Programming
│   └── TYPES.md        # Type system
├── configs/            # Configuration file examples
│   ├── biome.json      # Biome configuration (linter/formatter)
│   └── tsconfig.json   # TypeScript configuration
└── projects/           # Hands-on practice projects
    └── bun-auth/       # Authentication API with Better-auth
```

## Documentation (docs/)

Study notes on fundamental TypeScript concepts:

- **TYPES.md** - Array, Tuple, Enum, Union, Intersection, Literal Types, Type Aliases
- **FUNCTION.md** - Declaration, Expression, Arrow Functions, Parameters, Overloading
- **OOP.md** - Classes, Inheritance, Encapsulation, Polymorphism, Interfaces, Abstract Classes

## Projects (projects/)

### Bun Auth

Modern authentication API built with the Bun ecosystem.

**Stack:** Bun, Elysia, Drizzle ORM, Better-auth, PostgreSQL, Zod

**Features:** Email sign up/in, session management, protected routes, OpenAPI documentation

```bash
cd projects/bun-auth
bun install
docker-compose up -d
bun run db:push
bun run dev
```

For more details, see the [bun-auth README](./projects/bun-auth/README.md)

## Prerequisites

- [Bun](https://bun.sh)
- [Docker](https://www.docker.com/) and Docker Compose
- Node.js (compatibility with some projects)

## Useful Resources

- [TypeScript Docs](https://www.typescriptlang.org/)
- [Better Auth Documentation](https://better-auth.com/docs)
- [Elysia Guide](https://elysiajs.com/introduction.html)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)
