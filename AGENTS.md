# AGENTS.md

Compact guidance for OpenCode sessions. See `CLAUDE.md` for full project overview.

## Commands

```bash
npm run dev          # Start local dev server (Vite + React)
npm run build        # Production build → dist/
npm run preview      # Build then preview with wrangler dev
npm run lint         # ESLint flat config
npm run deploy       # Build then deploy to Cloudflare Workers
```

## Architecture

**Entry:** `src/main.jsx` → `App.jsx` → sections in order.

**No routing** — single-page app with scrollable sections.

**Source layout:**
- `src/3D/` — Three.js components (react-three/fiber)
- `src/Sections/` — Page sections rendered top-to-bottom
- `src/UI/` — Shared UI components

**Key patterns:**
- App.jsx manages `isLoaded` (loading screen completion) and `isMenuOpen`
- `RevealOnScroll` wraps sections for viewport animations
- `LoadingScreenAnimation` renders first, fades in main content via `isLoaded`

## Toolchain Quirks

**Tailwind CSS v4:** Integrated as Vite plugin (not PostCSS). See `vite.config.js`.
- Import in `src/index.css`: `@import "tailwindcss";`

**ESLint:** Flat config. Unused vars starting with uppercase or `_` are allowed:
```js
'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]
```

**Deployment:**
- **Cloudflare Workers:** `npm run deploy` uses wrangler
- `predeploy` hook runs `npm run build` automatically before deploy

**Dependencies:**
- React 19, Three.js (r183), Tailwind v4
- `picomatch` override: `>=4.0.4` (security override in `package.json`)

## Workflow Notes

- `dist/` is gitignored but is the build output
- `preview` command builds first, then runs `wrangler dev` — for testing production build locally
- No tests in this repo — only lint verification

## Recent Changes

- Loading screen has been updated with a developer-themed terminal UI
- 3D elements integrated with loading animation
- Boot sequence messages and code snippets added for visual effect
