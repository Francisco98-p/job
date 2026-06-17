# RemoteRecruit – Features Page

A responsive recreation of the **RemoteRecruit – Home/Features** page based on the provided [Figma design](https://www.figma.com/design/EtejDtLu3wavBclhHY6JNa/Design?node-id=1-131).

## Live Demo

Deploy via [Vercel](https://vercel.com) by importing the GitHub repository (see Deployment below).

**Repository:** [https://github.com/Francisco98-p/job](https://github.com/Francisco98-p/job)

## Tech Stack

- **React 19** – Component-based UI
- **Vite 8** – Build tool and dev server
- **Tailwind CSS 4** – Utility-first styling
- **Framer Motion** – Scroll reveal animations

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Reusable components (Navbar, Button, FeatureRow, PricingCard, etc.)
- Scroll-triggered fade-in / slide-up animations
- Hover states and transitions on buttons and links
- Scroll-to-top button
- Lazy-loaded images via Intersection Observer
- Accessibility: semantic HTML, ARIA labels, skip link, keyboard focus styles

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── mockups/      # Feature section UI mockups
│   ├── sections/     # Hero, Features, Support, FAQ, Pricing
│   └── ui/           # Button, ScrollToTop, LazyImage, AnimatedSection
├── data/             # Mock data (features, FAQ, pricing)
├── App.jsx
├── main.jsx
└── index.css
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/Francisco98-p/job.git
cd job
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel (recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the repository `Francisco98-p/job`
3. Keep the default Vite settings and click **Deploy**

Or from the CLI after `vercel login`:

```bash
npx vercel --prod
```

## Known Issues & Limitations

- Feature section mockups are built with CSS/SVG components rather than exported Figma assets, since design assets were not provided separately.
- Social media links point to placeholder URLs.
- Login and CTA buttons are visual only (no backend integration).

## License

This project was created as a technical examination submission.
