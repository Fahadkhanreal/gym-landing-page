/**
 * Hero Section Component Contract
 *
 * Purpose: Full-viewport hero section with video background, headline, and CTAs
 * Location: sections/hero.tsx
 * Type: Server Component (static content)
 */

import { LucideIcon } from 'lucide-react';

// ============================================================================
// Props Interface
// ============================================================================

export interface HeroProps {
  /**
   * Main headline text
   * @example "Transform Your Body. Forge Your Future."
   */
  headline: string;

  /**
   * Supporting subheadline text
   * @example "Elite training. World-class trainers. Real results."
   */
  subheadline: string;

  /**
   * Primary call-to-action button
   */
  primaryCTA: CTAButton;

  /**
   * Secondary call-to-action button
   */
  secondaryCTA: CTAButton;

  /**
   * Path to hero background video
   * @example "/videos/hero-background.mp4"
   */
  videoSrc: string;

  /**
   * Fallback image for mobile devices
   * @example "/images/hero-fallback.jpg"
   */
  videoFallbackImage: string;

  /**
   * Optional CSS class name
   */
  className?: string;
}

export interface CTAButton {
  text: string;
  href: string;
  ariaLabel?: string;
}

// ============================================================================
// Return Type
// ============================================================================

/**
 * Hero component returns JSX.Element
 */
export type HeroReturn = JSX.Element;

// ============================================================================
// Accessibility Requirements
// ============================================================================

/**
 * ARIA Requirements:
 * - Video must have aria-hidden="true" (decorative)
 * - Buttons must have descriptive aria-labels
 * - Heading must be h1 (only h1 on page)
 * - Section must have role="banner" or <header> tag
 *
 * Keyboard Navigation:
 * - Both CTAs must be keyboard accessible (Tab, Enter)
 * - Focus visible styles required
 *
 * Screen Reader:
 * - Video background should not be announced
 * - Headline and subheadline must be readable
 * - Button purposes must be clear
 */

// ============================================================================
// Performance Requirements
// ============================================================================

/**
 * Performance Targets:
 * - Video preload: "metadata" only
 * - Video lazy load: No (above fold)
 * - Image optimization: next/image with priority
 * - Animation: GPU-accelerated (transform, opacity only)
 * - LCP target: <1.5s
 */

// ============================================================================
// Animation Specifications
// ============================================================================

/**
 * Framer Motion Animations:
 *
 * 1. Headline: Staggered text reveal
 *    - Initial: opacity 0, y: 60
 *    - Animate: opacity 1, y: 0
 *    - Duration: 0.8s
 *    - Stagger: 0.1s per word
 *
 * 2. Subheadline: Fade in with delay
 *    - Initial: opacity 0, y: 40
 *    - Animate: opacity 1, y: 0
 *    - Delay: 0.4s
 *    - Duration: 0.6s
 *
 * 3. CTAs: Fade in with delay
 *    - Initial: opacity 0, y: 30
 *    - Animate: opacity 1, y: 0
 *    - Delay: 0.8s
 *    - Duration: 0.5s
 *
 * 4. Video: Subtle parallax on scroll
 *    - Use useScroll and useTransform
 *    - Transform: translateY(-20% to 0%)
 *
 * 5. Buttons: Hover effects
 *    - Scale: 1.05
 *    - Glow: 0 0 30px rgba(0, 255, 159, 0.6)
 *    - Duration: 0.3s
 */

// ============================================================================
// Responsive Behavior
// ============================================================================

/**
 * Breakpoints:
 *
 * Mobile (<640px):
 * - Stack CTAs vertically
 * - Reduce headline font size
 * - Show fallback image instead of video
 * - Padding: px-4
 *
 * Tablet (640px-1024px):
 * - CTAs side by side
 * - Medium headline font size
 * - Show video
 * - Padding: px-8
 *
 * Desktop (>1024px):
 * - Full headline size
 * - CTAs side by side with spacing
 * - Video with parallax
 * - Padding: px-12
 */

// ============================================================================
// Design Tokens
// ============================================================================

/**
 * Colors:
 * - Background: #0A0A0A
 * - Overlay: rgba(0, 0, 0, 0.6)
 * - Headline accent: #00FF9F (neon green)
 * - Primary CTA bg: #00FF9F
 * - Primary CTA text: #000000
 * - Secondary CTA border: #00FF9F
 * - Secondary CTA text: #FFFFFF
 *
 * Typography:
 * - Headline: font-bold text-5xl md:text-7xl tracking-tighter
 * - Subheadline: text-lg md:text-xl text-gray-300
 * - Font family: Inter (from layout)
 *
 * Spacing:
 * - Section height: h-screen (100dvh)
 * - Content max-width: max-w-4xl
 * - Button gap: gap-4
 */

// ============================================================================
// Example Usage
// ============================================================================

/**
 * @example
 * ```tsx
 * import Hero from '@/sections/hero';
 *
 * export default function HomePage() {
 *   return (
 *     <Hero
 *       headline="Transform Your Body. Forge Your Future."
 *       subheadline="Elite training. World-class trainers. Real results."
 *       primaryCTA={{
 *         text: "Join Now – First Month Free",
 *         href: "#contact",
 *         ariaLabel: "Join FitForge Gym with first month free"
 *       }}
 *       secondaryCTA={{
 *         text: "Watch the Experience",
 *         href: "#video-modal",
 *         ariaLabel: "Watch FitForge Gym experience video"
 *       }}
 *       videoSrc="/videos/hero-background.mp4"
 *       videoFallbackImage="/images/hero-fallback.jpg"
 *     />
 *   );
 * }
 * ```
 */

// ============================================================================
// Testing Requirements
// ============================================================================

/**
 * Unit Tests:
 * - Renders headline and subheadline correctly
 * - Renders both CTA buttons with correct text
 * - Video element has correct attributes (autoPlay, loop, muted, playsInline)
 * - Fallback image is used on mobile viewport
 *
 * Integration Tests:
 * - CTA buttons navigate to correct hrefs
 * - Video plays automatically on desktop
 * - Animations trigger on mount
 * - Parallax effect works on scroll
 *
 * Accessibility Tests:
 * - h1 heading exists and is unique
 * - Buttons have aria-labels
 * - Keyboard navigation works
 * - Focus visible on interactive elements
 * - Respects prefers-reduced-motion
 *
 * Performance Tests:
 * - LCP < 1.5s
 * - Video file size < 5MB
 * - Animations run at 60fps
 * - No layout shift (CLS = 0)
 */
