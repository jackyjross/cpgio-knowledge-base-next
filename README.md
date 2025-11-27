# CPGIO Knowledge Base (Next.js)

Production-ready Next.js application for the CPGIO Knowledge Base. Migrated from React-via-CDN prototype with TypeScript, Tailwind CSS, and static site generation.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Static Export (GitHub Pages / Vercel compatible)

## Features

- ✅ TypeScript with strict type checking
- ✅ Tailwind CSS with design tokens from original CSS
- ✅ Server-side rendering (SSR) and Static Site Generation (SSG)
- ✅ Optimized performance (code splitting, lazy loading)
- ✅ SEO-optimized with dynamic meta tags
- ✅ Responsive design
- 🚧 Data layer migration in progress
- 🚧 Component library development
- 🚧 Page routing implementation

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

Generates static HTML/CSS/JS in the `out/` directory.

### Production Preview

```bash
npm run build && npm run start
```

## Project Structure

```
cpgio-knowledge-base-next/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind directives
│   └── (routes)/          # Future route pages
├── components/
│   ├── ui/                 # Base UI components
│   └── layout/             # Layout components
├── lib/
│   ├── data/               # Data layer (TypeScript)
│   │   └── capabilities.ts # Capabilities data
│   ├── types/              # TypeScript types
│   │   └── index.ts        # Core type definitions
│   └── utils/              # Utility functions
│       └── cn.ts           # Class name merger
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.mjs         # Next.js configuration

```

## Migration Status

### Phase 1: Foundation ✅ COMPLETE
- [x] Initialize Next.js project
- [x] Configure TypeScript
- [x] Configure Tailwind with design tokens
- [x] Create type definitions
- [x] Set up project structure
- [x] Test dev server

### Phase 2: Core Pages (In Progress)
- [ ] Convert all capabilities data
- [ ] Convert case studies data
- [ ] Convert RFP answers data
- [ ] Build Homepage with journeys
- [ ] Build Capabilities pages
- [ ] Build Case Studies pages
- [ ] Build RFP Center page

### Phase 3: Interactive Features
- [ ] AI Q&A page
- [ ] RFP Analyzer (Excel upload)
- [ ] Glossary page
- [ ] Global search

### Phase 4: Polish & Deploy
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] SEO optimization
- [ ] Deploy to production

## Design System

Design tokens are defined in `tailwind.config.ts` and mapped from the original CSS custom properties:

- **Colors**: Primary, accent (blue/teal/orange/purple), semantic (success/warning/danger)
- **Typography**: Font sizes from xs (12px) to 5xl (48px)
- **Spacing**: xs (4px) to 3xl (48px)
- **Border Radius**: sm to 2xl
- **Shadows**: sm to xl
- **Transitions**: fast (150ms), base (200ms), slow (300ms)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

### GitHub Pages

1. Build the static export:
   ```bash
   npm run build
   ```

2. The `out/` directory contains the static site

3. Deploy the `out/` directory to GitHub Pages

### Vercel (Recommended)

1. Connect repository to Vercel
2. Vercel auto-detects Next.js and deploys
3. Every git push triggers a new deployment

## Environment Variables

No environment variables required for the current build.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Proprietary - CPGIO Internal Use Only

---

**Migration Guide**: See `../cpgio-knowledge-base/MIGRATION_GUIDE.md` for full migration documentation.

**Version**: 1.0.0 (Phase 1 Complete)
**Last Updated**: November 2025
**Migrated From**: cpgio-knowledge-base (React-via-CDN prototype)
