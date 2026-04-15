# Implementation Plan: FitForge Gym Landing Page

**Branch**: `001-gym-landing-page` | **Date**: 2026-04-13 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-gym-landing-page/spec.md`

## Summary

Build a premium, high-performance landing page for FitForge Gym featuring 7 major sections (Hero, Features, Pricing, Trainers, Testimonials, Contact, Navigation/Footer). The page will showcase the gym's premium positioning through dark theme design with neon accents, glassmorphism effects, and smooth Framer Motion animations. Built with Next.js 15 App Router, TypeScript strict mode, and Tailwind CSS, targeting 95+ Lighthouse performance scores and full responsiveness across all devices.

**Technical Approach**: Single-page Next.js application with component-based architecture, scroll-triggered animations, and optimized asset loading. No backend required initially (form submissions log to console). Follows spec-driven development methodology with AI-generated components based on detailed specifications.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode enabled)  
**Primary Dependencies**: 
- Next.js 15 (App Router)
- React 18+
- Tailwind CSS 3.x
- Framer Motion 11+
- Lucide-react (icons)
- shadcn/ui (optional, for specific UI components)

**Storage**: N/A (static landing page; future backend integration for form submissions)  
**Testing**: Jest + React Testing Library (unit), Playwright (E2E), Lighthouse CI (performance)  
**Target Platform**: Web (Chrome, Firefox, Safari, Edge - last 2 years)  
**Project Type**: Web frontend (single Next.js application)  
**Performance Goals**: 
- Lighthouse score: 95+ (desktop), 90+ (mobile)
- First Contentful Paint: <1.5s on 4G
- Time to Interactive: <3s
- Animations: 60fps on modern devices (last 3 years)

**Constraints**: 
- No backend API initially (form submissions console.log only)
- Must be deployable to Vercel/Netlify/similar Next.js hosting
- Browser support: Modern browsers from last 2 years only
- Accessibility: WCAG 2.1 AA compliance minimum

**Scale/Scope**: 
- Single landing page with 7 sections
- ~10-15 React components total
- Expected bundle size: <200KB (gzipped)
- Target audience: Karachi fitness enthusiasts
- Expected traffic: 1000-5000 monthly visitors initially

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Spec-First Development ✅
- **Status**: PASS
- **Evidence**: Complete specification created in spec.md with 51 functional requirements, 4 user stories, 12 success criteria
- **Compliance**: All development will reference spec.md; no ad-hoc code generation

### Principle II: AI-Generated Code ✅
- **Status**: PASS
- **Evidence**: Plan includes structured prompts for each section; human reviews output against spec
- **Compliance**: Components will be AI-generated using prompts that reference spec and constitution

### Principle III: Living Documentation ✅
- **Status**: PASS
- **Evidence**: Spec.md is version-controlled and will be updated when requirements change
- **Compliance**: Spec remains single source of truth; code regenerated when spec updates

### Principle IV: Incremental Development ✅
- **Status**: PASS
- **Evidence**: Plan defines section-by-section implementation order (Hero → Features → Pricing → Trainers → Testimonials → Contact → Navigation/Footer)
- **Compliance**: Each section completed fully (design + animation + responsiveness + accessibility) before moving to next

### Principle V: Prompt Discipline ✅
- **Status**: PASS
- **Evidence**: Structured prompt templates created for each section in user input
- **Compliance**: All prompts include: spec reference, tech stack, TypeScript + Tailwind + Framer Motion requirements, responsiveness, accessibility, clean code request

### Principle VI: Tech Stack Adherence ✅
- **Status**: PASS
- **Evidence**: Technical Context matches constitutional requirements exactly
- **Approved Stack Used**:
  - Framework: Next.js 15 (App Router) ✅
  - Language: TypeScript (strict mode) ✅
  - Styling: Tailwind CSS + custom CSS (glassmorphism) ✅
  - Animation: Framer Motion ✅
  - UI Components: shadcn/ui or custom ✅
  - Images: Next/Image ✅
  - Icons: Lucide-react ✅

### Principle VII: Design System Consistency ✅
- **Status**: PASS
- **Evidence**: Spec defines exact colors, typography, effects
- **Design Standards Applied**:
  - Background: #0A0A0A ✅
  - Cards: #1F1F1F ✅
  - Primary Accent: #00FF9F (neon green) ✅
  - Secondary Accent: #FF2D55 (neon red) ✅
  - Typography: Inter, bold headings, tracking-tighter ✅
  - Effects: Glassmorphism + backdrop-blur ✅
  - Interactive: Large CTAs with glow hover ✅

### Principle VIII: Animation Standards ✅
- **Status**: PASS
- **Evidence**: Spec includes 6 animation requirements (FR-037 through FR-042)
- **Animation Patterns Defined**:
  - Scroll-triggered fade-in + slide-up (all sections) ✅
  - Hover: scale(1.03) + neon glow ✅
  - Hero: video parallax + staggered text reveal ✅
  - Use motion.div, useInView, variants ✅
  - 60fps target ✅
  - Respect prefers-reduced-motion ✅

### Principle IX: Performance Standards ✅
- **Status**: PASS
- **Evidence**: Spec includes 4 performance requirements (FR-048 through FR-051) and success criteria SC-003, SC-006, SC-007
- **Performance Targets**:
  - Lazy loading: images and below-fold sections ✅
  - Optimized video background ✅
  - 60fps animations ✅
  - Code splitting ✅
  - 95+ Lighthouse (desktop), 90+ (mobile) ✅
  - <1.5s First Contentful Paint ✅

**Overall Gate Status**: ✅ PASS - All 9 constitutional principles satisfied

## Project Structure

### Documentation (this feature)

```text
specs/001-gym-landing-page/
├── plan.md              # This file (/sp.plan command output)
├── spec.md              # Feature specification (already created)
├── research.md          # Phase 0 output (technology decisions, best practices)
├── data-model.md        # Phase 1 output (component data structures)
├── quickstart.md        # Phase 1 output (setup and development guide)
├── contracts/           # Phase 1 output (component interfaces, prop types)
│   ├── hero.contract.ts
│   ├── features.contract.ts
│   ├── pricing.contract.ts
│   ├── trainers.contract.ts
│   ├── testimonials.contract.ts
│   ├── contact.contract.ts
│   └── navigation.contract.ts
├── checklists/
│   └── requirements.md  # Spec quality checklist (already created)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
gym-landing-page/
├── app/
│   ├── layout.tsx              # Root layout with Inter font, metadata
│   ├── page.tsx                # Main page importing all sections
│   ├── globals.css             # Global styles, Tailwind directives, glassmorphism utilities
│   └── favicon.ico
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx          # Primary/secondary button variants
│   │   ├── card.tsx            # Glassmorphic card component
│   │   └── input.tsx           # Form input with validation styles
│   ├── layout/                 # Layout components
│   │   ├── navbar.tsx          # Sticky glassmorphic navbar
│   │   └── footer.tsx          # Footer with links and social icons
│   └── shared/                 # Shared utility components
│       └── scroll-indicator.tsx
├── sections/                   # Main page sections
│   ├── hero.tsx                # Hero section with video background
│   ├── features.tsx            # 3-card features section
│   ├── pricing.tsx             # Pricing with monthly/yearly toggle
│   ├── trainers.tsx            # 4 trainer profiles
│   ├── testimonials.tsx        # Carousel testimonials
│   └── contact.tsx             # Contact form + map
├── animations/                 # Animation utilities
│   ├── motion-variants.ts      # Reusable Framer Motion variants
│   └── use-scroll-animation.ts # Custom hook for scroll animations
├── lib/                        # Utilities and helpers
│   ├── utils.ts                # General utility functions (cn, etc.)
│   └── constants.ts            # Color constants, config values
├── types/                      # TypeScript type definitions
│   ├── section.types.ts        # Section component prop types
│   ├── pricing.types.ts        # Pricing plan types
│   ├── trainer.types.ts        # Trainer profile types
│   └── testimonial.types.ts    # Testimonial types
├── public/                     # Static assets
│   ├── videos/
│   │   └── hero-background.mp4 # Hero section video (placeholder)
│   ├── images/
│   │   ├── trainers/           # Trainer photos
│   │   └── testimonials/       # Client photos
│   └── placeholder.svg         # Generic placeholder
├── package.json
├── tsconfig.json               # TypeScript strict mode config
├── tailwind.config.ts          # Tailwind with custom colors, animations
├── next.config.js              # Next.js config (image domains, etc.)
└── README.md
```

**Structure Decision**: Selected Next.js 15 App Router structure (Option 2 variant - web application, frontend only). This structure follows the constitutional folder organization exactly, with clear separation between sections (main content), components (reusable UI), animations (motion utilities), and types (TypeScript definitions). The App Router approach enables optimal performance through automatic code splitting and server components where applicable.

## Complexity Tracking

> **No violations detected** - Constitution Check passed all 9 principles without exceptions.

## Phase 0: Research & Technology Decisions

### Research Topics

1. **Next.js 15 App Router Best Practices**
   - Server vs Client Components for landing page sections
   - Metadata API for SEO optimization
   - Image optimization strategies with next/image

2. **Framer Motion Performance Optimization**
   - Scroll-triggered animations without layout shift
   - Reducing motion for accessibility (prefers-reduced-motion)
   - GPU-accelerated transforms for 60fps

3. **Glassmorphism Implementation**
   - Tailwind CSS backdrop-blur utilities
   - Browser compatibility and fallbacks
   - Performance impact of blur effects

4. **Form Handling Without Backend**
   - Client-side validation patterns
   - Console logging for development
   - Future API integration preparation

5. **Video Background Optimization**
   - Optimal video format and compression (MP4 vs WebM)
   - Lazy loading strategies
   - Mobile fallback to static image

### Technology Decisions

**Decision 1: Server vs Client Components**
- **Chosen**: Mix of Server Components (static sections) and Client Components (interactive sections)
- **Rationale**: 
  - Hero, Features, Trainers: Server Components (static content, better performance)
  - Pricing, Testimonials, Contact, Navbar: Client Components (interactive state, animations)
  - Reduces JavaScript bundle size while maintaining interactivity
- **Alternatives Considered**: 
  - All Client Components: Simpler but larger bundle, slower initial load
  - All Server Components: Not feasible for interactive elements

**Decision 2: Animation Strategy**
- **Chosen**: Framer Motion with useInView hook for scroll-triggered animations
- **Rationale**:
  - Constitutional requirement (Principle VIII)
  - Excellent performance with GPU acceleration
  - Built-in accessibility support (respects prefers-reduced-motion)
  - Declarative API matches React patterns
- **Alternatives Considered**:
  - CSS animations: Less flexible, harder to coordinate
  - GSAP: More powerful but heavier bundle, not in constitution
  - Intersection Observer API: Lower-level, more code required

**Decision 3: Styling Approach**
- **Chosen**: Tailwind CSS with custom utilities for glassmorphism
- **Rationale**:
  - Constitutional requirement (Principle VI)
  - Utility-first approach speeds development
  - Excellent tree-shaking reduces bundle size
  - Custom utilities in globals.css for glassmorphism effects
- **Implementation**:
  ```css
  @layer utilities {
    .glass {
      @apply bg-white/10 backdrop-blur-xl border border-white/20;
    }
    .glass-dark {
      @apply bg-black/40 backdrop-blur-xl border border-white/10;
    }
  }
  ```

**Decision 4: Form Validation**
- **Chosen**: React Hook Form with Zod schema validation
- **Rationale**:
  - Type-safe validation with TypeScript
  - Excellent performance (uncontrolled components)
  - Easy to integrate with future API
  - Industry standard for Next.js forms
- **Alternatives Considered**:
  - Native HTML5 validation: Less flexible, inconsistent UX
  - Formik: Heavier bundle, older library
  - Manual validation: More code, error-prone

**Decision 5: Video Background Strategy**
- **Chosen**: HTML5 video with MP4 format, mobile fallback to static image
- **Rationale**:
  - Best browser compatibility with MP4
  - Autoplay works reliably when muted
  - CSS media query for mobile fallback reduces data usage
  - Lazy loading not needed (above fold, critical content)
- **Implementation**:
  - Desktop: Looping muted video with dark overlay
  - Mobile (<768px): Static hero image via CSS background-image
  - Video specs: 1920x1080, H.264 codec, <5MB file size

**Decision 6: Icon Library**
- **Chosen**: Lucide-react
- **Rationale**:
  - Constitutional requirement (Principle VI)
  - Modern, consistent design
  - Tree-shakeable (only import used icons)
  - Excellent TypeScript support
- **Icons Needed**:
  - Dumbbell (Premium Equipment)
  - Award (Expert Trainers)
  - Trophy (Signature Programs)
  - Check (Pricing features)
  - Instagram, Linkedin (Trainer socials)
  - ChevronDown (Scroll indicator)
  - Menu, X (Mobile navigation)

**Decision 7: Deployment Platform**
- **Chosen**: Vercel (primary), Netlify (alternative)
- **Rationale**:
  - Vercel built by Next.js creators, optimal performance
  - Zero-config deployment for Next.js 15
  - Automatic HTTPS, CDN, image optimization
  - Free tier sufficient for initial launch
- **Configuration**: Standard Next.js deployment, no special config needed

## Phase 1: Design & Data Models

### Component Data Models

**Hero Section**
```typescript
interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  videoSrc: string;
  videoFallbackImage: string;
}
```

**Features Section**
```typescript
interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesContent {
  title: string;
  subtitle: string;
  features: Feature[];
}
```

**Pricing Section**
```typescript
type BillingPeriod = 'monthly' | 'yearly';

interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  ribbonText?: string;
}

interface PricingContent {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  savingsPercentage: number;
}
```

**Trainers Section**
```typescript
interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  imageSrc: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
  };
}

interface TrainersContent {
  title: string;
  subtitle: string;
  trainers: Trainer[];
}
```

**Testimonials Section**
```typescript
interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientImage: string;
  transformationStat: string;
  rating: number;
}

interface TestimonialsContent {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  autoPlayInterval: number;
}
```

**Contact Section**
```typescript
interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  interest: 'free-trial' | 'membership-inquiry';
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
}

interface ContactContent {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo;
}
```

**Navigation**
```typescript
interface NavLink {
  label: string;
  href: string;
}

interface NavigationContent {
  logo: string;
  links: NavLink[];
  ctaButton: {
    text: string;
    href: string;
  };
}
```

### Animation Variants

**Standard Scroll Animation**
```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
```

**Hover Effects**
```typescript
export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.3 }
  }
};

export const neonGlow = {
  rest: { boxShadow: '0 0 0 rgba(0, 255, 159, 0)' },
  hover: { 
    boxShadow: '0 0 30px rgba(0, 255, 159, 0.6)',
    transition: { duration: 0.3 }
  }
};
```

### Component Contracts

See `contracts/` directory for detailed TypeScript interfaces for each section component. Each contract defines:
- Props interface
- Return type
- Event handlers
- Accessibility requirements

## Phase 2: Implementation Order

**Note**: Phase 2 (task generation) is handled by `/sp.tasks` command, not this plan.

**Recommended Implementation Sequence**:
1. Project setup (Next.js 15, dependencies, Tailwind config)
2. Global styles and utilities (glassmorphism, colors, fonts)
3. Animation utilities (motion-variants.ts, hooks)
4. Reusable UI components (Button, Card, Input)
5. Hero section (highest priority, above fold)
6. Navbar (needed for navigation)
7. Features section
8. Pricing section
9. Trainers section
10. Testimonials section
11. Contact section
12. Footer
13. Performance optimization and testing
14. Accessibility audit and fixes

## Quickstart Guide

See [quickstart.md](./quickstart.md) for detailed setup instructions.

**Quick Setup**:
```bash
# Create Next.js 15 project
npx create-next-app@latest gym-landing-page --typescript --tailwind --app

# Install dependencies
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers

# Install dev dependencies
npm install -D @types/node @types/react @types/react-dom

# Run development server
npm run dev
```

## Performance Optimization Strategy

1. **Image Optimization**
   - Use next/image for all images
   - Provide width/height to prevent layout shift
   - Use placeholder blur for better perceived performance
   - Lazy load below-fold images

2. **Code Splitting**
   - Dynamic imports for heavy components (Testimonials carousel, Contact map)
   - Separate client components from server components
   - Tree-shake unused Lucide icons

3. **Animation Performance**
   - Use transform and opacity only (GPU-accelerated)
   - Avoid animating layout properties (width, height, margin)
   - Use will-change sparingly
   - Respect prefers-reduced-motion

4. **Bundle Optimization**
   - Minimize third-party dependencies
   - Use Tailwind's purge to remove unused styles
   - Enable Next.js production optimizations
   - Analyze bundle with @next/bundle-analyzer

5. **Loading Strategy**
   - Critical CSS inline in <head>
   - Defer non-critical JavaScript
   - Preload hero video
   - Lazy load below-fold sections with Intersection Observer

## Accessibility Checklist

- [ ] Semantic HTML (header, nav, main, section, footer)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation support (Tab, Enter, Escape)
- [ ] Focus visible styles (outline on focus)
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] Alt text for all images
- [ ] Form labels and error messages
- [ ] Skip to main content link
- [ ] Reduced motion support (prefers-reduced-motion)
- [ ] Screen reader testing (NVDA/JAWS)

## Risk Assessment

**High Risk**:
- Video background performance on low-end devices
  - Mitigation: Mobile fallback to static image, compressed video
- Animation performance on older devices
  - Mitigation: Respect prefers-reduced-motion, GPU-accelerated transforms only

**Medium Risk**:
- Glassmorphism browser compatibility
  - Mitigation: Fallback to solid backgrounds in unsupported browsers
- Form submission without backend
  - Mitigation: Clear messaging, console logging, easy API integration path

**Low Risk**:
- Bundle size exceeding target
  - Mitigation: Code splitting, tree-shaking, bundle analysis
- Accessibility violations
  - Mitigation: Automated testing with axe, manual screen reader testing

## Success Metrics

**Performance** (from spec.md SC-003, SC-006, SC-007):
- Lighthouse score: 95+ (desktop), 90+ (mobile)
- First Contentful Paint: <1.5s on 4G
- Animations: 60fps on devices from last 3 years

**Accessibility** (from spec.md SC-008):
- Zero violations in WAVE/axe DevTools

**User Experience** (from spec.md SC-001, SC-002, SC-009):
- Value proposition clear within 10 seconds
- Contact form submission in <2 minutes
- No horizontal scrolling on mobile

**Technical**:
- TypeScript strict mode: 0 errors
- Bundle size: <200KB gzipped
- All sections responsive: 320px - 2560px

## Next Steps

1. ✅ Specification complete (spec.md)
2. ✅ Implementation plan complete (this file)
3. ⏭️ Run `/sp.tasks` to generate task breakdown
4. ⏭️ Begin implementation following task order
5. ⏭️ Test each section against acceptance criteria
6. ⏭️ Performance audit with Lighthouse
7. ⏭️ Accessibility audit with WAVE/axe
8. ⏭️ Deploy to Vercel for staging review
