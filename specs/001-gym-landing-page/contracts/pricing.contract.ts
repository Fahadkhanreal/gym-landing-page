/**
 * Pricing Section Component Contract
 *
 * Purpose: Display 3 membership tiers with monthly/yearly toggle
 * Location: sections/pricing.tsx
 * Type: Client Component (interactive state)
 */

// ============================================================================
// Props Interface
// ============================================================================

export interface PricingProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  savingsPercentage: number;
  className?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  ribbonText?: string;
}

export type BillingPeriod = 'monthly' | 'yearly';

// ============================================================================
// State Management
// ============================================================================

/**
 * Component State:
 * - billingPeriod: BillingPeriod (useState)
 * - Default: 'monthly'
 *
 * State Updates:
 * - Toggle switch updates billingPeriod
 * - Price display updates with animation
 */

// ============================================================================
// Accessibility Requirements
// ============================================================================

/**
 * ARIA Requirements:
 * - Toggle switch: role="switch", aria-checked
 * - Highlighted card: aria-label="Most popular plan"
 * - Price changes: aria-live="polite" for screen readers
 *
 * Keyboard Navigation:
 * - Toggle: Space/Enter to switch
 * - Cards: Tab to focus, Enter to select
 */

// ============================================================================
// Animation Specifications
// ============================================================================

/**
 * Framer Motion Animations:
 *
 * 1. Price Counter Animation:
 *    - Use AnimatePresence for exit/enter
 *    - Initial: opacity 0, y: -20
 *    - Animate: opacity 1, y: 0
 *    - Exit: opacity 0, y: 20
 *    - Duration: 0.3s
 *
 * 2. Cards: Fade in + slide up
 *    - Stagger: 0.15s
 *    - Scale on hover: 1.03
 *
 * 3. Highlighted Card:
 *    - Neon glow: 0 0 40px rgba(0, 255, 159, 0.5)
 *    - Border: 2px solid #00FF9F
 *    - Ribbon animation: slide in from top
 */

// ============================================================================
// Design Tokens
// ============================================================================

/**
 * Colors:
 * - Card background: rgba(31, 31, 31, 0.6)
 * - Highlighted card: rgba(0, 255, 159, 0.05)
 * - Highlighted border: #00FF9F
 * - Toggle active: #00FF9F
 * - Toggle inactive: #4A4A4A
 * - Ribbon: #00FF9F background, #000 text
 * - Check icon: #00FF9F
 *
 * Typography:
 * - Plan name: text-2xl font-bold
 * - Price: text-5xl font-bold
 * - Currency: text-xl
 * - Features: text-base text-gray-300
 */
