# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Soumya Purani, deployed to GitHub Pages at https://soumyapurani.github.io. Built with React 19, Three.js (via React Three Fiber), and Tailwind CSS v4, bundled with Vite.

## Commands

- `npm run dev` — Start local dev server
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint
- `npm run deploy` — Build and deploy to GitHub Pages via `gh-pages`

## Deployment

Pushes to `master` trigger a GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`) that runs `npm ci && npm run build` and deploys the `dist/` folder to GitHub Pages.

## Architecture

Single-page React app with no routing. `src/main.jsx` renders `App.jsx`, which composes all sections in order.

### Source layout (`src/`)

- **`3D/`** — Three.js components using `@react-three/fiber` and `@react-three/drei`: `HeroBackground3D` (background canvas), `ParticleField` (particle animation), `ProjectCard3D` (3D project cards)
- **`Sections/`** — Page sections rendered top-to-bottom in App.jsx: Home, About, Experience, Education, Projects, Freelance, Contact, Footer
- **`UI/`** — Shared UI components: Navbar, MobileMenu, LoadingScreenAnimation (shown before content), Logo, RevealOnScroll (intersection observer animation), TypingEffect

### Key patterns

- App.jsx manages two top-level states: `isLoaded` (loading screen completion) and `isMenuOpen` (mobile nav toggle)
- `LoadingScreenAnimation` renders first, then fades in the main content via `isLoaded`
- `RevealOnScroll` wraps sections to animate them on viewport entry
- Tailwind CSS v4 is integrated as a Vite plugin (not PostCSS); styles are in `src/index.css`
- ESLint flat config with react-hooks and react-refresh plugins; unused vars starting with uppercase or `_` are allowed
