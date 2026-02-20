# Anime Explorer

A Next.js application for browsing trending anime, powered by the AniList GraphQL API.

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Apollo Client 3.x](https://www.apollographql.com/docs/react/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Project Structure

```
app/                    # Next.js App Router pages
components/             # React components
hooks/                  # GraphQL query hooks
lib/                    # Apollo client configuration
utils/                  # Shared utilities
```

## API

This project uses the [AniList GraphQL API](https://anilist.gitbook.io/anilist-apiv2-docs/) which is publicly available and requires no authentication.
