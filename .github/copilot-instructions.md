# Copilot Instructions for Apple Website Clone

This project is a high-fidelity clone of the Apple iPhone 15 Pro website, built with React, Vite, GSAP, and Three.js.

## Tech Stack & Architecture

- **Framework**: React 18 with Vite.
- **Animations**: GSAP (GreenSock Animation Platform) using `@gsap/react`.
- **3D Rendering**: Three.js via `@react-three/fiber` and `@react-three/drei`.
- **Styling**: Tailwind CSS with extensive use of custom utility classes defined in [src/index.css](src/index.css).

## Coding Conventions

### GSAP Animations

- Use the `useGSAP` hook for all GSAP animations to handle lifecycle management.
- Prefer using CSS selectors (IDs or classes) for targets when elements are unique or part of a list.
- Example:
  ```javascript
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
  }, []);
  ```
- Always register GSAP plugins if used: `gsap.registerPlugin(ScrollTrigger)`.
- Use `animateWithGsap` and `animateWithGsapTimeline` from [src/utils/animation.js](src/utils/animation.js) for reusable scroll-triggered animations.

### Three.js / React Three Fiber

- Use the `View` and `View.Port` pattern from `@react-three/drei` to render multiple 3D views within a single global `Canvas`.
- Models are typically wrapped in a `Group` and manipulated via refs.
- Use `useFrame` for per-frame updates when necessary.
- See [src/components/Model.jsx](src/components/Model.jsx) and [src/components/modelView.jsx](src/components/modelView.jsx) for implementation details.

### Styling with Tailwind

- Avoid raw CSS; use Tailwind classes.
- Use the custom utility classes defined in [src/index.css](src/index.css) for consistency:
  - `flex-center`: `@apply flex items-center justify-center`
  - `common-padding`: `@apply sm:py-32 py-20 sm:px-10 px-5`
  - `section-heading`: Standardizes section titles with entrance animations.
  - `btn`: Standard Apple-style button.
  - `hero-title`: Specific styling for hero section headings.

### Data & Asset Management

- **Constants**: Store text content, slider data, and model configurations in [src/constants/index.js](src/constants/index.js).
- **Assets**: Raw assets (models, videos, images) reside in `public/`. Export them as formatted references from [src/utils/index.js](src/utils/index.js).
- **Video Handling**: Use `key={videoSrc}` on video elements to force re-render when switching sources (e.g., responsive videos).

## Key Workflows

- **Development**: `npm run dev` starts the Vite dev server.
- **Adding a New Section**:
  1. Define section content in [src/constants/index.js](src/constants/index.js).
  2. Create a new component in `src/components/`.
  3. Use `common-padding` and `section-heading` for consistency.
  4. Implement entrance animations using `useGSAP` or `animateWithGsap`.
- **Responsive Design**: Handle viewport changes via state and `window.addEventListener('resize', ...)` where CSS is insufficient (e.g., video source switching).
