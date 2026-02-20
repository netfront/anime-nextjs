# AniList Explorer — Coding Challenge

Welcome! This repo is a Next.js 14 application that displays trending anime from the AniList GraphQL API. Please complete the three tasks below.

## Getting Started

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`. There are three routes:
- `/` — Homepage (trending anime grid)
- `/anime/[id]` — Anime detail page
- `/fetch` — Alternative anime list page

---

## Task 1: Add Filtering to the Homepage

The homepage currently displays a static list of trending anime fetched via server-side rendering. Your task is to add filtering capabilities.

**Requirements:**
- Add a **free text search** input that filters anime by title
- Add the ability to **sort by popularity** (in addition to the current trending sort)
- The AniList GraphQL API (`https://graphql.anilist.co`) supports `search` and `sort` parameters on the `Page.media` field
- The homepage is currently server-rendered (`app/page.tsx`). You will need to convert it to handle client-side data fetching so that filter changes trigger new requests

**Acceptance criteria:**
- Users can type a search term and see filtered results
- Users can toggle between trending and popularity sort order
- The UI remains responsive during loading states

---

## Task 2: Fix Accessibility Issues

There are several accessibility violations across both pages of the app. Your task is to identify and fix them.

**Approach:**
- Use a tool like [WAVE](https://wave.webaim.org/), [axe DevTools](https://www.deque.com/axe/devtools/), or Lighthouse to audit both the homepage (`/`) and a detail page (`/anime/[id]`)
- Look for issues related to: color contrast, heading structure, interactive element labeling, focus management, and semantic HTML
- Fix all issues you find

---

## Task 3: Refactor the Fetch Page

The `/fetch` page (`app/fetch/page.tsx`) fetches anime data using Apollo Client, but it uses a **deprecated and anti-pattern approach**. Your task is to identify what's wrong and refactor it.

**Requirements:**
- Identify the deprecated Apollo Client pattern being used
- Refactor the component to use modern, idiomatic Apollo Client patterns
- Ensure the page still works correctly after refactoring (loading, error, and success states)


## Task 4: Log of issues

As you are going through the app, you won't be able to do fix everything, nor do you need to. But, there are standards and patterns that are questionable throughout. Please make a note of anything you would change to ensure the long term maintainability of the application.

---

Good luck!