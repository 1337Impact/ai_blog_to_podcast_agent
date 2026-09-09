# Fern

Turn any public blog into a calm spoken episode. Fern scrapes the page, writes a conversational summary, voices it, stores the audio in Vercel Blob, and keeps your history in Neon.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS + shadcn/ui
- Clerk (Google sign-in)
- Neon Postgres
- Vercel Blob
- Vercel AI Gateway for summarization
- Firecrawl for scraping
- ElevenLabs for speech

## Local setup

1. Copy environment variables:

   ```bash
   cp .env.example .env.local
   ```

2. Provision services (preferred: Vercel Marketplace after `vercel link`):

   ```bash
   vercel integration add neon
   vercel blob store add
   vercel integration add clerk
   vercel env pull .env.local --yes
   ```

3. In the Clerk dashboard, enable **Google** as the only social connection.

4. Add `FIRECRAWL_API_KEY` and `ELEVENLABS_API_KEY` to Vercel env (and `.env.local`).

5. Push the database schema:

   ```bash
   npm run db:push
   ```

6. Start the app:

   ```bash
   npm run dev
   ```

After Google sign-in, you are sent to `/app` to create podcasts and manage history. History deletions ask for confirmation before removing the Neon row and Blob file.

Unauthenticated `POST /api/podcasts` requests return `{ "error": "Unauthenticated" }` with status `401`.
