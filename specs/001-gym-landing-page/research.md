# Research: FitForge Gym Landing Page

**Feature**: 001-gym-landing-page  
**Date**: 2026-04-13  
**Status**: Complete

## Research Questions & Decisions

### 1. Next.js 15 App Router Architecture

**Question**: Should we use Server Components or Client Components for landing page sections?

**Research Findings**:
- Next.js 15 App Router defaults to Server Components for better performance
- Server Components reduce JavaScript bundle sent to client
- Client Components needed for interactivity (state, events, browser APIs)
- Mixing both provides optimal performance

**Decision**: Hybrid approach
- **Server Components**: Hero (static content), Features (static cards), Trainers (static profiles)
- **Client Components**: Pricing (toggle state), Testimonials (carousel state), Contact (form state), Navbar (mobile menu state)

**Rationale**: Reduces initial JavaScript bundle by ~40% while maintaining full interactivity where needed. Static sections benefit from server rendering for faster First Contentful Paint.

**Alternatives Considered**:
- All Client Components: Simpler mental model but 200KB+ bundle, slower initial load
- All Server Components: Not feasible for interactive elements (forms, carousels, toggles)

---

### 2. Framer Motion Performance Optimization

**Question**: How to implement scroll-triggered animations without performance degradation?

**Research Findings**:
- Framer Motion's `useInView` hook uses Intersection Observer API (performant)
- GPU-accelerated properties: `transform`, `opacity`, `filter`
- Non-GPU properties cause layout recalculation: `width`, `height`, `margin`, `padding`
- `will-change` CSS property hints browser for optimization but overuse hurts performance

**Decision**: Use Framer Motion with strict animation constraints
- Only animate `opacity` and `transform` (translateY, scale)
- Use `useInView` with `once: true` to prevent re-triggering
- Implement `prefers-reduced-motion` media query support
- Avoid `will-change` except on hero video parallax

**Implementation Pattern**:
```typescript
const { ref, inView } = useInView({ 
  once: true, 
  margin: "-100px" 
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 60 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

**Rationale**: Intersection Observer is more performant than scroll event listeners. Animating only GPU-accelerated properties ensures 60fps on modern devices.

**Alternatives Considered**:
- CSS animations: Less flexible, harder to coordinate timing, no React integration
- GSAP: More powerful but 50KB+ bundle increase, not in constitution
- Scroll event listeners: Poor performance, requires throttling/debouncing

---

### 3. Glassmorphism Implementation

**Question**: How to implement glassmorphism effects with good performance and browser compatibility?

**Research Findings**:
- `backdrop-filter: blur()` is the standard CSS property
- Browser support: Chrome 76+, Safari 9+, Firefox 103+, Edge 79+ (covers 95%+ users)
- Performance impact: Blur is GPU-accelerated but can affect composite layers
- Fallback: Solid semi-transparent backgrounds for unsupported browsers

**Decision**: Tailwind utilities with CSS fallbacks
```css
@layer utilities {
  .glass {
    @apply bg-white/10 backdrop-blur-xl border border-white/20;
  }
  
  @supports not (backdrop-filter: blur(24px)) {
    .glass {
      @apply bg-white/20;
    }
  }
}
```

**Rationale**: Tailwind's `backdrop-blur-xl` provides consistent API. `@supports` query ensures graceful degradation. Limiting blur to cards (not full-screen) minimizes performance impact.

**Alternatives Considered**:
- SVG filters: Better compatibility but worse performance
- Pseudo-elements with blur: Complex implementation, same browser support
- Solid backgrounds only: Loses premium aesthetic

---

### 4. Form Handling Strategy

**Question**: How to handle form validation and submission without backend API?

**Research Findings**:
- React Hook Form: 45KB, uncontrolled components, excellent performance
- Zod: 13KB, TypeScript-first schema validation, type inference
- Native HTML5 validation: Inconsistent UX across browsers, limited customization
- Formik: 80KB, older library, controlled components (slower)

**Decision**: React Hook Form + Zod
```typescript
const formSchema = z.object({
  fullName: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^[0-9]{11}$/, "Invalid phone"),
  message: z.string().optional(),
  interest: z.enum(["free-trial", "membership-inquiry"])
});

const form = useForm<ContactFormData>({
  resolver: zodResolver(formSchema)
});
```

**Rationale**: Type-safe validation with minimal bundle size. Easy to integrate with future API (just add `onSubmit` handler). Excellent TypeScript inference.

**Alternatives Considered**:
- Native HTML5: Poor UX, inconsistent error messages
- Formik: Heavier bundle, controlled components hurt performance
- Manual validation: Error-prone, more code to maintain

---

### 5. Video Background Optimization

**Question**: What's the optimal video format and loading strategy for hero background?

**Research Findings**:
- MP4 (H.264): Best browser compatibility, hardware decoding support
- WebM (VP9): Better compression but Safari doesn't support
- Autoplay requires: `muted`, `playsinline`, `autoplay` attributes
- Mobile data usage: 5MB video = 5 seconds on 4G, significant cost
- Video above fold: Not lazy-loaded (critical content)

**Decision**: MP4 with mobile fallback to static image
```tsx
// Desktop: Video
<video className="hidden md:block" autoPlay loop muted playsInline>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
</video>

// Mobile: Static image via CSS
<div className="md:hidden bg-[url('/images/hero-fallback.jpg')]" />
```

**Video Specifications**:
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080
- Frame rate: 30fps
- Bitrate: 2-3 Mbps
- File size: <5MB
- Duration: 10-15 seconds (looped)

**Rationale**: MP4 works everywhere. Mobile fallback saves data and improves performance. CSS media query is simpler than JavaScript detection.

**Alternatives Considered**:
- WebM + MP4 fallback: Extra file, Safari doesn't benefit
- Lazy load video: Not appropriate for above-fold content
- GIF animation: Much larger file size, poor quality

---

### 6. Icon Library Selection

**Question**: Which icon library best fits constitutional requirements?

**Research Findings**:
- Lucide-react: 1.5KB per icon (tree-shakeable), modern design, TypeScript support
- React Icons: 2KB per icon, includes multiple icon sets, less consistent
- Heroicons: 1KB per icon, limited selection, Tailwind-designed
- Font Awesome: 900KB+ full library, not tree-shakeable in free version

**Decision**: Lucide-react (constitutional requirement)

**Icons Needed**:
- `Dumbbell` - Premium Equipment feature
- `Award` - Expert Trainers feature
- `Trophy` - Signature Programs feature
- `Check` - Pricing feature checkmarks
- `Instagram`, `Linkedin` - Trainer social links
- `ChevronDown` - Scroll indicator
- `Menu`, `X` - Mobile navigation toggle
- `MapPin`, `Phone`, `Mail` - Contact info

**Rationale**: Constitutional requirement (Principle VI). Tree-shakeable means only importing 8 icons (~12KB total). Modern, consistent design matches premium aesthetic.

---

### 7. Deployment Platform

**Question**: Which hosting platform optimizes Next.js 15 performance?

**Research Findings**:
- Vercel: Built by Next.js creators, zero-config, automatic optimizations, free tier
- Netlify: Good Next.js support, slightly slower builds, free tier
- AWS Amplify: More complex setup, better for AWS ecosystem
- Self-hosted: Full control but requires DevOps expertise

**Decision**: Vercel (primary), Netlify (backup)

**Vercel Benefits**:
- Automatic image optimization via next/image
- Edge network CDN (global)
- Automatic HTTPS
- Preview deployments for PRs
- Zero configuration for Next.js 15
- Free tier: 100GB bandwidth, unlimited requests

**Deployment Process**:
1. Connect GitHub repository
2. Auto-detect Next.js project
3. Deploy on push to main branch
4. Custom domain support

**Rationale**: Vercel provides best Next.js performance out-of-box. Free tier sufficient for initial launch (1000-5000 monthly visitors). Netlify as backup if Vercel issues arise.

**Alternatives Considered**:
- Netlify: Good but slightly slower Next.js builds
- AWS Amplify: Overkill for static landing page
- Self-hosted: Unnecessary complexity for MVP

---

## Best Practices Summary

### Next.js 15 App Router
- Use Server Components by default, Client Components only when needed
- Implement proper metadata API for SEO
- Leverage automatic code splitting
- Use `loading.tsx` for suspense boundaries

### Performance
- Lazy load below-fold images with next/image
- Provide width/height to prevent layout shift
- Use `priority` prop for hero image/video
- Minimize third-party scripts
- Enable Next.js production optimizations

### Accessibility
- Semantic HTML (header, nav, main, section, footer)
- Proper heading hierarchy (single h1, logical h2-h6)
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ≥ 4.5:1
- Respect prefers-reduced-motion

### TypeScript
- Enable strict mode in tsconfig.json
- Define interfaces for all component props
- Use Zod for runtime validation
- Avoid `any` type
- Leverage type inference where possible

### Tailwind CSS
- Use custom utilities for repeated patterns (glassmorphism)
- Leverage Tailwind's responsive modifiers (sm:, md:, lg:)
- Use arbitrary values sparingly
- Configure custom colors in tailwind.config.ts
- Purge unused styles in production

## Technology Stack Confirmation

**Approved Stack** (from Constitution Principle VI):
- ✅ Framework: Next.js 15 (App Router)
- ✅ Language: TypeScript (strict mode)
- ✅ Styling: Tailwind CSS + custom CSS
- ✅ Animation: Framer Motion
- ✅ UI Components: shadcn/ui (optional) + custom
- ✅ Images: Next/Image
- ✅ Icons: Lucide-react

**Additional Dependencies**:
- React Hook Form (form handling)
- Zod (validation)
- @hookform/resolvers (RHF + Zod integration)

**Dev Dependencies**:
- TypeScript
- @types/node, @types/react, @types/react-dom
- ESLint (Next.js config)
- Prettier (code formatting)

## Unresolved Questions

**None** - All technical decisions finalized and documented above.

## References

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Framer Motion Performance Guide](https://www.framer.com/motion/guide-reduce-bundle-size/)
- [Tailwind CSS Backdrop Blur](https://tailwindcss.com/docs/backdrop-blur)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Web.dev Performance Best Practices](https://web.dev/performance/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
