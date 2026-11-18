# Abdul Tharik M — Graphic Designer Portfolio Website

A responsive, modern Graphic Designer, Photo Editor, and Video Editor portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, **JavaScript**, and **Lucide React**.

## 1. Placing Your Original Design Images

Create the folder `public/assets/portfolio/` inside the project root and copy your 9 original design images into it using their exact filenames:

- `public/assets/portfolio/1000634785.jpg`
- `public/assets/portfolio/1000628864.jpg`
- `public/assets/portfolio/1000628858.jpg`
- `public/assets/portfolio/1000628857.jpg`
- `public/assets/portfolio/1000628856.jpg`
- `public/assets/portfolio/1000628850.jpg`
- `public/assets/portfolio/1000628848.jpg`
- `public/assets/portfolio/1000634784.jpg`
- `public/assets/portfolio/1000628855.jpg`

> Note: Keep lowercase extensions (`.jpg`) matching the paths in `src/data/portfolioData.js` so that Linux-based Vercel build servers resolve every image reliably.

## 2. Local Development & Production Build Test

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Verify production build
npm run build
