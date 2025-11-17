# Digital Menu Management System

This repository contains a Next.js + tRPC + Prisma app for managing restaurants, categories and dishes, with email-based OTP login.

## Functional overview

- User registration and login via email verification code (OTP)
- Users can create and manage multiple restaurants
- Manage menu categories and dishes (dishes can belong to multiple categories)
- Customers access menus via QR code or shared links

## Technology Stack

The project uses the following technologies (T3-style stack + additions):

- T3 Stack (Next.js, tRPC, TypeScript, Tailwind CSS)
- Prisma as the ORM
- PostgreSQL (production-ready hosting recommended: Neon — <https://neon.com>)
- shadcn/ui (component primitives and shadcn-based UI)
- Vercel for hosting
- Resend for transactional email delivery (OTP)
- JSON Web Tokens (jose) for session tokens

## Useful npm scripts

- `npm run dev` — start Next.js dev server
- `npm run build` / `npm run preview` — build and preview
- `npm run db:push` — reset database (danger: deletes data)
- `npm run lint:check-fix` —Added prettier and eslint config to format code.
- Use can Bun as well.

### 📽️ Demo Video

[Watch demo video](public/demo/demo.webm)

- You can download if it is not supported

## Quick start (developer)

These steps will get the project running locally on Linux / macOS. For Windows, use WSL or adapt commands.

1. Clone the repo and install dependencies

```bash
git clone https://github.com/Hareesh108/digital-menu-management-system.git
cd digital-menu-management-system
npm install
```

2. Create a `.env` file in the project root. Example:

```
# Postgres database used by Prisma (change the password/port/name as needed)
DATABASE_URL="postgres://postgres:password@localhost:5432/digital_menu_dev"

# JWT secret for session tokens
JWT_SECRET="replace_with_a_long_random_secret"

# Optional - Resend API key for sending real emails (dev falls back to console logging)
# RESEND_API_KEY="re_xxx"

NODE_ENV="development"
```

3. Start a local Postgres database (recommended: Docker)

If you have Docker or Podman installed, run the helper script which reads `DATABASE_URL` from `.env`:

```bash
./start-database.sh
```

Alternatively, run Postgres locally and ensure `DATABASE_URL` points to it.

4. Generate Prisma client and apply schema

```bash
# generate the Prisma client
npm run db:generate

# apply schema (choose one)
npm run db:push      # push schema without migrations
# or
npm run db:migrate  # run migrations (preferred for tracked changes)
```

5. Start the development server

```bash
npm run dev
```

Visit <http://localhost:3000>

## Environment & behavior notes

- Verification emails: When `RESEND_API_KEY` is present the app will send OTPs via Resend. In development (no API key) the verification code is logged to the server console for convenience.
- Sessions: The app uses JWT tokens stored in an httpOnly cookie named `session-token`. Keep `JWT_SECRET` stable across runs.
- If you change Prisma schema, run `npm run db:generate` and either `db:push` or `db:migrate` depending on workflow.

## Troubleshooting

- Database connection issues: ensure `DATABASE_URL` is correct and Postgres is running. Use `npm run db:studio` to inspect.
- Email not received: set `RESEND_API_KEY` or use the console-logged code in dev.
- Session problems: ensure `JWT_SECRET` is set and consistent.

## Deployment

The app deploys well on Vercel. On Vercel set the `DATABASE_URL`, `JWT_SECRET`, and `RESEND_API_KEY` (if used) in Project Environment Variables.
