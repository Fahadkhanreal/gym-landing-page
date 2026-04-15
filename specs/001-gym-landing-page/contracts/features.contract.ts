/**
 * Features Section Component Contract
 *
 * Purpose: Showcase 3 key gym differentiators with icons
 * Location: sections/features.tsx
 * Type: Server Component (static content)
 */

import { LucideIcon } from 'lucide-react';

// ============================================================================
// Props Interface
// ============================================================================

export interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  className?: string;
}

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// ============================================================================
// Accessibility Requirements
// ============================================================================

/**
 * ARIA Requirements:
 * - Section must have aria-labelledby pointing to title
 * - Each card must be a semantic article or div with proper structure
 * - Icons must have aria-hidden="true" (decorative)
 *
 * Keyboard Navigation:
 * - Cards should be focusable if interactive
 * - Tab order: left to right
 */

// ============================================================================
// Animation Specifications
// ============================================================================

/**
 * Framer Motion Animations:
 *
 * 1. Container: Stagger children
 *    - Use staggerContainer variant
 *    - Stagger delay: 0.2s
 *
 * 2. Each Card: Fade in + slide up
 *    - Initial: opacity 0, y: 60
 *    - Animate: opacity 1, y: 0
 *    - Duration: 0.6s
 *    - Trigger: useInView with once: true
 *
 * 3. Hover: Scale + glow
 *    - Scale: 1.05
 *    - Box shadow: 0 0 30px rgba(0, 255, 159, 0.3)
 *    - Border glow: border-[#00FF9F]
 */

// ============================================================================
// Responsive Behavior
// ============================================================================

/**
 * Mobile (<640px): 1 column, gap-6
 * Tablet (640px-1024px): 2 columns, gap-8
 * Desktop (>1024px): 3 columns, gap-10
 */

// ============================================================================
// Design Tokens
// ============================================================================

/**
 * Colors:
 * - Card background: rgba(31, 31, 31, 0.5) with backdrop-blur
 * - Icon color: #00FF9F
 * - Title: #FFFFFF
 * - Description: #A0A0A0
 * - Border: rgba(255, 255, 255, 0.1)
 * - Hover border: #00FF9F
 *
 * Typography:
 * - Title: text-2xl font-bold
 * - Subtitle: text-lg text-gray-400
 * - Feature title: text-xl font-semibold
 * - Feature description: text-gray-300
 */
