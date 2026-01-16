<div align="center">
  <img src="./public/assets/images/apple.svg" alt="Apple Logo" width="80" height="120" />

# Apple iPhone 15 Pro Clone

A high-fidelity clone of the Apple iPhone 15 Pro website, featuring interactive 3D models and smooth cinematic animations.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactj.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r161-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)](https://gsap.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[Overview](#overview) • [Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Architecture](#architecture)

</div>

## Overview

This project is a meticulously crafted clone of Apple's promotional website for the iPhone 15 Pro. It demonstrates advanced front-end techniques, combining modern web frameworks with powerful 3D rendering and animation libraries to recreate Apple's signature user experience.

> [!TIP]
> This project utilizes the `View.Port` pattern from `@react-three/drei` to host multiple 3D views within a single global canvas, significantly improving performance for multi-model scenes.

## Features

- **Cinematic Animations**: Smooth entrance and scroll-triggered animations powered by GSAP.
- **Interactive 3D Models**: Real-time rendering of the iPhone 15 Pro with color and size switching.
- **Dynamic Video Carousel**: Custom-built video slider with synchronized progress tracking.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Apple UI/UX**: Authentic styling using custom Tailwind utility classes to match Apple's aesthetic (e.g., `flex-center`, `common-padding`, `section-heading`).

## Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/apple-website-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd apple-website-clone
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Architecture

The project follows a modular structure focused on performance and reusability:

- **`src/components`**: Contains individual UI sections (`Hero`, `Model`, `Highlights`, etc.).
- **`src/constants`**: Centralized data management for text, model specs, and carousel metadata.
- **`src/utils`**: Reusable animation helpers and asset loaders.
- **`public/models`**: Optimized GLTF/GLB 3D models.

### Key Patterns

- **Global Canvas**: 3D views are rendered through a single `<Canvas>` using `@react-three/drei`'s `View` components, avoiding multiple WebGL context overhead.
- **Lifecycle Management**: GSAP animations are managed within the `useGSAP` hook for safe cleanup and optimized performance during React re-renders.

---

⭐ If you found this project helpful, give it a star on GitHub!
