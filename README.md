# Digital Menu Management System

## Useful npm scripts

* `npm run dev` — start Next.js dev server
* `npm run build` / `npm run preview` — build and preview
* `npm run db:push` — reset database (danger: deletes data)
* `npm run lint:check-fix` —Added prettier and eslint config to format code.
* Use can Bun as well.

### 📽️ Demo Video

[Watch demo video](public/demo/demo.webm)

* You can download if it is not supported

## 📄 Assessment Submission Details

## ✅ GitHub Repository

**[Github](https://github.com/Hareesh108/digital-menu-management-system)**

## ✅ Deployed App (Vercel)

**[Live](https://digital-menu-management-system-qt8o.vercel.app/)**

---

## 🧠 Approach to Solving the Assignment

I built a **full-stack Digital Menu Management System** using the **T3 stack (Next.js, tRPC, Prisma, Tailwind, shadcn/ui), Resend (email)** with the goal of creating a complete, production-ready menu management workflow:

### 🔹 Key features I implemented

* **Email OTP authentication** (Resend integration)
* **Restaurant, Category, and Dish management**
* **Dynamic menu UI with categories, dish previews, spice-level indicators, veg/non-veg markers**
* **Dialog-based dish creation & editing using use state form + Zod**
* **QR/slug-based public menu viewer**
* **Mobile-responsive menu layout with sticky category headers**
* **Static image selection + reusable components**

### 🔹 My overall approach

1. **Start with database modelling**
   I carefully designed the Prisma schema using normalized relationships:

   * `Restaurant`, `Category`, `Dish`, `DishCategory`, `User`

2. **Build APIs using tRPC**

   * CRUD for restaurants, categories, dishes
   * Server-side validation using zod
   * Proper relational creation using Prisma (Dish ↔ Category many-to-many).

3. **Frontend development using shadcn/ui**

   * Created forms using `Zod validations and react local states`
   * Used reusable input components
   * Ensured full mobile responsiveness

4. **Menu Viewer**

   * Smooth category scrolling
   * Sticky title
   * Dialog pop-up on item click
   * Recommended items section based on user interaction

5. **Polish & UX**

   * Error pages (404, error.tsx) with polished UI
   * Loading states, skeletons, toasts
   * Simple, clean UI with shadcn components

---

## 🧰 IDE Used

* **VS Code**
  Extensions used:

  * Prisma
  * Tailwind CSS IntelliSense
  * ESLint + Prettier
  * TypeScript tooling

---

## 🤖 AI Tools Used

### Tools

* **OpenAI ChatGPT (GPT-5.1) (Free Version)**
* **Cursor (minor autocomplete) (Free version). With paid subscription my productivity will increase**

### Why used

* To speed up UI polishing
* To refine TypeScript validation logic
* To generate reusable components
* To help with Zod schema transformations

I always manually reviewed and corrected all generated output.

---

## 💬 AI Prompts Used (Summary)

Some of the main prompts I used during development:

* “Improve this Next.js error page design using shadcn UI.”
* “Write a Dialog form using zod + shadcn UI.”
* “Create reusable components with validation states.”
* “Fix TypeScript error: unknown row type in table renderer.”
* “Format date using a custom fDateTime util and render safely.”
* “Build a country dropdown using countries-list package.”

I used **ChatGPT primarily for architecture and code refinement**, not for generating full files blindly.

---

## ✔️ How Helpful Was AI?

### What AI helped with

* Creating clean UI code quickly
* Suggesting Zod patterns (string → number transforms)
* Fixing TypeScript narrowings
=* Reusable component patterns
* Debugging some Prisma errors

### Mistakes the AI made (and I manually fixed)

* Some Zod schemas were wrong (string/number mismatch) → fixed manually
* Gave non-responsive layouts → I optimized for mobile
* Incorrect TypeScript narrowing for unknown → I fixed using `row as { createdAt: ... }`
* Gave React components without proper key handling → corrected manually

AI was helpful but needed **manual supervision**, especially around:

* tRPC typing
* Prisma relations
* Shadcn UI component usage patterns

---

## 🔍 Edge Cases & Error Scenarios I Handled

### ✔️ 1. Email Verification

* Show resend email
* Show which email the code was sent to
* Prevent resend when email is missing
* Disabled UI while sending code
* Error toast when API fails

### ✔️ 2. Dish Form Handling

* Price accepts both string/number → validated → transformed into number
* isVeg allows:

  * **true (Veg)**
  * **false (Non-Veg)**
  * **null (Unspecified)**
* Spice level validated + converted from string → number
* Empty image allowed
* Category validation (cannot assign categories from another restaurant)

### ✔️ 3. Prisma API validation

* Ensure restaurant exists
* Ensure categories belong to restaurant
* Prevent duplicate dish-category assignments

### ✔️ 4. UI Edge Cases

* No categories available → show message
* No dishes available → show message
* Menu viewer with empty categories → hide sections gracefully
* Sticky header logic when scrolling between categories
* Handle dish images of varying aspect ratios

### ✔️ 5. Next.js Error + Not Found Pages

* Full responsive fallback pages
* Working back/home navigation

---

## ⏳ Edge Cases I Could Handle With More Time

### 1. Image Uploads (dynamic uploads instead of static FOOD_ITEMS)

Would add:

* Cloud storage (S3 / Supabase / UploadThing)
* Cropping
* Compression
* Fallback images

### 2. Rate Limiting on Resend Email

To avoid:

* Abuse
* Spam triggers
* API blocks (403 from Resend)

### 3. More granular Authorization

Only owners should:

* Edit restaurants
* Modify dishes
* Delete categories

### 4. Offline sync for mobile users

Useful for restaurants with poor connectivity.

### 5. Advanced analytics

* Dish views
* Category popularity
* Customer behavior insights

## Functional overview

* User registration and login via email verification code (OTP)
* Users can create and manage multiple restaurants
* Manage menu categories and dishes (dishes can belong to multiple categories)
* Customers access menus via QR code or shared links

## Technology Stack

The project uses the following technologies (T3-style stack + additions):

* T3 Stack (Next.js, tRPC, TypeScript, Tailwind CSS)
* Prisma as the ORM
* PostgreSQL (production-ready hosting recommended: Neon — <https://neon.com>)
* shadcn/ui (component primitives and shadcn-based UI)
* Vercel for hosting
* Resend for transactional email delivery (OTP)

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

* Verification emails: When `RESEND_API_KEY` is present the app will send OTPs via Resend. In development (no API key) the verification code is logged to the server console for convenience.
* Sessions: The app uses JWT tokens stored in an httpOnly cookie named `session-token`. Keep `JWT_SECRET` stable across runs.
* If you change Prisma schema, run `npm run db:generate` and either `db:push` or `db:migrate` depending on workflow.

## Troubleshooting

* Database connection issues: ensure `DATABASE_URL` is correct and Postgres is running. Use `npm run db:studio` to inspect.
* Email not received: set `RESEND_API_KEY` or use the console-logged code in dev.
* Session problems: ensure `JWT_SECRET` is set and consistent.

## Deployment

The app deploys well on Vercel. On Vercel set the `DATABASE_URL`, `JWT_SECRET`, and `RESEND_API_KEY` (if used) in Project Environment Variables.
