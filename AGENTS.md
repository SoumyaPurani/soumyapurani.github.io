# AGENTS.md

Compact guidance for OpenCode sessions. See CLAUDE.md for full project overview.

## Commands

```bash
npm run dev       # Start local dev server (Vite + React)
npm run build     # Production build to dist/
npm run preview   # Build then preview with wrangler dev
npm run lint      # ESLint flat config
npm run deploy    # Build then deploy to Cloudflare Workers
```

## Architecture

**Entry:** src/main.jsx -> App.jsx -> sections in order.

**No routing** -- single-page app with scrollable sections.

**Section order (6 sections):**
1. Home -- Hero with 3D background, punchy headline, typing name effect
2. About -- Bento grid layout (bio + photo, skills pills, tools pills)
3. Experience -- Professional career timeline (work only, 4 entries)
4. Education -- Academic journey with credentials and coursework (brutalist-academic aesthetic)
5. Projects -- Merged personal + client work with filter tabs
6. Contact -- Split layout: text side + underline-input form

**Source layout:**
- src/3D/ -- Three.js components. Only HeroBackground3D is active (hero only). ParticleField and ProjectCard3D are legacy/dead.
- src/Sections/ -- Page sections rendered top-to-bottom
- src/UI/ -- Shared UI components (Navbar, MobileMenu, Logo, LoadingScreenAnimation, RevealOnScroll, TypingEffect)

**Key patterns:**
- App.jsx manages isLoaded (loading screen completion) and isMenuOpen
- RevealOnScroll wraps section content for viewport animations (not used on Home -- Home has its own CSS keyframe animations)
- LoadingScreenAnimation renders first, fades in main content via isLoaded
- Hero uses HeroBackground3D (distorted sphere + particles at 12% opacity) -- the only 3D section background

## Design Language

**Aesthetic:** Brutalist-Editorial Hybrid -- terminal identity meets magazine structure.

**Color palette:**
- --bg-color: #0C0C0C (warm near-black)
- --bg-surface: #1A1A1A (card/surface background)
- --primary-color: #E8FF47 (electric chartreuse -- signature accent)
- --accent-color: #FF6B35 (warm orange -- secondary accent)
- --secondary-color: #F5F5F5 (near-white -- high contrast)
- --text-color: #EDEDED (primary text)
- --text-muted: #6B6B6B (muted/secondary text)
- --text-dim: #999 (dimmed text)

**Typography:**
- Display: Clash Display (fontshare.com) -- via .font-display and .section-heading
- Body: Satoshi (fontshare.com) -- default body font
- Mono: JetBrains Mono -- labels, dates, code, loading terminal

**Background:** Noise grain overlay (SVG feTurbulence at 3.5% opacity) via body::after. No dot-grid.

**Card patterns:** No glass morphism. Flat dark surfaces with accent-border (left 2px primary-color) or accent-top (top 2px primary-color). Technology tags use .pill class (left-border accent pills).

## Toolchain Quirks

**Tailwind CSS v4:** Integrated as Vite plugin (not PostCSS). See vite.config.js.
- Import in src/index.css: @import "tailwindcss";

**ESLint:** Flat config. Unused vars starting with uppercase or _ are allowed:
```js
'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]
```

**Deployment:**
- Cloudflare Workers: npm run deploy uses wrangler
- predeploy hook runs npm run build automatically before deploy

**Dependencies:**
- React 19, Three.js (r183), Tailwind v4
- picomatch override: >=4.0.4 (security override in package.json)

## Workflow Notes

- dist/ is gitignored but is the build output
- preview command builds first, then runs wrangler dev -- for testing production build locally
- No tests in this repo -- only lint verification

## Legacy / Dead Code

- src/3D/ParticleField.jsx -- was used on every section, now removed from all imports. File exists but is dead.
- src/3D/ProjectCard3D.jsx -- was used for tilt effect on project cards, now removed. File exists but is dead.
- src/Sections/Education.jsx -- Academic credentials section with brutalist-academic aesthetic (added 2026-04-20)
- src/Sections/Freelance.jsx -- deleted. Content absorbed into Projects with filter.

## Recent Changes

- Complete visual redesign: cyan to chartreuse (#E8FF47), editorial brutalist aesthetic
- Fonts changed: Syne to Clash Display, Google Sans Flex to Satoshi
- Education section restored: Split from Experience into standalone section (2026-04-20)
- Sections consolidated: 6 sections total (Home, About, Experience, Education, Projects, Contact)
- ParticleField removed from all sections; HeroBackground3D (distorted sphere) added to hero only
- About section: bento grid with skill/tool pills instead of icon grid with tooltips
- Projects section: filter tabs (All/Personal/Client), live badge for deployed client work
- Contact section: split layout with underline-input form style
- Noise grain overlay replaces dot-grid background
- Glass morphism replaced with flat dark surfaces + accent borders
