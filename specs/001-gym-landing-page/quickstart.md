# Quickstart Guide: FitForge Gym Landing Page

**Feature**: 001-gym-landing-page  
**Date**: 2026-04-13  
**Purpose**: Setup instructions and development workflow

## Prerequisites

Before starting, ensure you have:

- **Node.js**: v18.17.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **Git**: For version control
- **Code Editor**: VS Code recommended (with extensions below)

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

## Project Setup

### 1. Create Next.js 15 Project

```bash
# Navigate to project root
cd "D:\Governor Sindh It Initiative\code\gym-landing page"

# Create Next.js 15 app with TypeScript and Tailwind
npx create-next-app@latest gym-frontend --typescript --tailwind --app --no-src-dir

# Navigate into project
cd gym-frontend
```

**Configuration prompts**:
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ App Router: Yes
- ❌ src/ directory: No
- ✅ Import alias (@/*): Yes

### 2. Install Dependencies

```bash
# Core dependencies
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers

# Dev dependencies (if not already installed)
npm install -D @types/node @types/react @types/react-dom eslint-config-next
```

**Dependency Versions** (as of 2026-04-13):
- framer-motion: ^11.0.0
- lucide-react: ^0.400.0
- react-hook-form: ^7.51.0
- zod: ^3.23.0
- @hookform/resolvers: ^3.3.0

### 3. Configure TypeScript (Strict Mode)

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    },
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 4. Configure Tailwind CSS

Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#1F1F1F",
        neon: {
          green: "#00FF9F",
          red: "#FF2D55",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
```

### 5. Setup Global Styles

Update `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-white antialiased;
  }
}

@layer utilities {
  /* Glassmorphism utilities */
  .glass {
    @apply bg-white/10 backdrop-blur-xl border border-white/20;
  }
  
  .glass-dark {
    @apply bg-black/40 backdrop-blur-xl border border-white/10;
  }
  
  /* Neon glow effects */
  .glow-green {
    box-shadow: 0 0 30px rgba(0, 255, 159, 0.6);
  }
  
  .glow-red {
    box-shadow: 0 0 30px rgba(255, 45, 85, 0.6);
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Hide scrollbar but keep functionality */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
```

### 6. Create Folder Structure

```bash
# Create all required directories
mkdir -p components/ui components/layout components/shared
mkdir -p sections
mkdir -p animations
mkdir -p lib
mkdir -p types
mkdir -p public/videos public/images/trainers public/images/testimonials
```

### 7. Setup Root Layout

Update `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FitForge Gym - Transform Your Body. Forge Your Future.",
  description: "Elite training. World-class trainers. Real results. Join Karachi's most premium fitness experience.",
  keywords: ["gym", "fitness", "karachi", "training", "workout"],
  authors: [{ name: "FitForge Gym" }],
  openGraph: {
    title: "FitForge Gym - Premium Fitness in Karachi",
    description: "Elite training. World-class trainers. Real results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

## Development Workflow

### Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### Build for Production

```bash
npm run build
npm run start
```

### Lint Code

```bash
npm run lint
```

### Type Check

```bash
npx tsc --noEmit
```

## Implementation Order

Follow this sequence for building components:

### Phase 1: Foundation (Day 1)

1. **Setup animation utilities**
   - Create `animations/motion-variants.ts`
   - Create `animations/use-scroll-animation.ts`

2. **Create reusable UI components**
   - `components/ui/button.tsx`
   - `components/ui/card.tsx`
   - `components/ui/input.tsx`

3. **Setup type definitions**
   - `types/section.types.ts`
   - `types/pricing.types.ts`
   - `types/trainer.types.ts`
   - `types/testimonial.types.ts`

### Phase 2: Core Sections (Days 2-4)

4. **Hero Section** (Priority 1)
   - Create `sections/hero.tsx`
   - Add placeholder video to `public/videos/`
   - Test animations and responsiveness

5. **Navigation** (Priority 2)
   - Create `components/layout/navbar.tsx`
   - Implement smooth scroll
   - Test mobile menu

6. **Features Section** (Priority 3)
   - Create `sections/features.tsx`
   - Import Lucide icons
   - Test scroll animations

### Phase 3: Interactive Sections (Days 5-6)

7. **Pricing Section**
   - Create `sections/pricing.tsx`
   - Implement toggle state
   - Test price animations

8. **Trainers Section**
   - Create `sections/trainers.tsx`
   - Add placeholder images
   - Test mobile scroll

9. **Testimonials Section**
   - Create `sections/testimonials.tsx`
   - Implement carousel logic
   - Test auto-play and drag

### Phase 4: Contact & Polish (Day 7)

10. **Contact Section**
    - Create `sections/contact.tsx`
    - Setup React Hook Form + Zod
    - Test form validation

11. **Footer**
    - Create `components/layout/footer.tsx`
    - Add social links

12. **Main Page Integration**
    - Update `app/page.tsx`
    - Import all sections
    - Test full page flow

### Phase 5: Testing & Optimization (Day 8)

13. **Performance Audit**
    - Run Lighthouse
    - Optimize images
    - Check bundle size

14. **Accessibility Audit**
    - Run WAVE/axe DevTools
    - Test keyboard navigation
    - Test screen reader

15. **Cross-browser Testing**
    - Chrome, Firefox, Safari, Edge
    - Mobile devices (iOS, Android)

## Component Development Template

When creating a new component, follow this structure:

```typescript
'use client'; // Only if component needs interactivity

import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/motion-variants';

interface ComponentProps {
  // Define props with JSDoc comments
}

export default function Component({ ...props }: ComponentProps) {
  // 1. State declarations
  // 2. Refs
  // 3. Effects
  // 4. Event handlers
  // 5. Render helpers
  
  return (
    <section className="...">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Component content */}
      </motion.div>
    </section>
  );
}
```

## Testing Strategy

### Manual Testing Checklist

For each component:
- [ ] Renders correctly on mobile (320px)
- [ ] Renders correctly on tablet (768px)
- [ ] Renders correctly on desktop (1920px)
- [ ] Animations work smoothly (60fps)
- [ ] Hover effects work
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] No console errors
- [ ] TypeScript compiles without errors

### Performance Testing

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run Lighthouse
lhci autorun --collect.url=http://localhost:3000
```

**Target Scores**:
- Performance: 95+ (desktop), 90+ (mobile)
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Accessibility Testing

1. **Automated**: Use axe DevTools browser extension
2. **Keyboard**: Tab through entire page, test all interactions
3. **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
4. **Color Contrast**: Use WebAIM Contrast Checker

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables

Create `.env.local` (not committed to git):

```env
# Future: Add API keys, backend URLs, etc.
NEXT_PUBLIC_SITE_URL=https://fitforge.pk
```

### Build Optimization

In `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.com'], // Add image domains
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
```

## Troubleshooting

### Common Issues

**Issue**: Framer Motion animations not working
- **Solution**: Ensure component is marked as `'use client'`
- Check that `initial`, `animate`, and `variants` props are correct

**Issue**: Tailwind classes not applying
- **Solution**: Check `tailwind.config.ts` content paths
- Restart dev server after config changes

**Issue**: TypeScript errors in strict mode
- **Solution**: Explicitly type all props and state
- Avoid `any` type, use `unknown` if needed

**Issue**: Images not loading
- **Solution**: Check file paths in `public/` directory
- Ensure `next/image` is used with correct props

**Issue**: Video not autoplaying
- **Solution**: Ensure `muted`, `playsInline`, and `autoPlay` attributes are set
- Check browser autoplay policies

## Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)

### Design References
- [Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Lucide Icons](https://lucide.dev/)

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Accessibility Tools
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Next Steps

After completing the landing page:

1. **Backend Integration**
   - Setup API for form submissions
   - Add email notifications
   - Store leads in database

2. **CMS Integration**
   - Make content editable
   - Add admin panel
   - Version control for content

3. **Analytics**
   - Add Google Analytics
   - Track conversions
   - Monitor performance

4. **SEO Optimization**
   - Add structured data
   - Optimize meta tags
   - Submit sitemap

5. **Marketing Features**
   - Add blog section
   - Integrate social media feeds
   - Add newsletter signup

---

**Ready to start?** Run the setup commands above and begin with Phase 1!
