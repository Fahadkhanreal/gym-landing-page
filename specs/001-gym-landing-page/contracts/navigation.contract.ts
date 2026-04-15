/**
 * Navigation Component Contract
 *
 * Purpose: Sticky glassmorphic navbar with mobile menu
 * Location: components/layout/navbar.tsx
 * Type: Client Component (mobile menu state)
 */

// ============================================================================
// Props Interface
// ============================================================================

export interface NavigationProps {
  logo: string;
  links: NavLink[];
  ctaButton: CTAButton;
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface CTAButton {
  text: string;
  href: string;
  ariaLabel?: string;
}

// ============================================================================
// State Management
// ============================================================================

/**
 * Component State:
 * - isMobileMenuOpen: boolean (useState)
 * - activeSection: string (useState)
 * - isScrolled: boolean (useState)
 *
 * Scroll Detection:
 * - useEffect with scroll listener
 * - Add backdrop blur when scrolled > 50px
 * - Update activeSection based on scroll position
 *
 * Mobile Menu:
 * - Toggle with hamburger button
 * - Close on link click
 * - Close on outside click
 * - Close on Escape key
 */

// ============================================================================
// Accessibility Requirements
// ============================================================================

/**
 * ARIA Requirements:
 * - Nav: role="navigation", aria-label="Main navigation"
 * - Mobile menu button: aria-expanded, aria-controls
 * - Mobile menu: aria-hidden when closed
 * - Active link: aria-current="page"
 * - Logo link: aria-label="FitForge Gym home"
 *
 * Keyboard Navigation:
 * - Tab through all links
 * - Enter/Space to activate
 * - Escape to close mobile menu
 * - Focus trap in mobile menu when open
 */

// ============================================================================
// Animation Specifications
// ============================================================================

/**
 * Framer Motion Animations:
 *
 * 1. Mobile Menu:
 *    - Enter: x: 100%, opacity: 0
 *    - Animate: x: 0, opacity: 1
 *    - Exit: x: 100%, opacity: 0
 *    - Duration: 0.3s
 *
 * 2. Mobile Menu Links:
 *    - Stagger: 0.05s
 *    - Initial: opacity 0, x: 20
 *    - Animate: opacity 1, x: 0
 *
 * 3. Hamburger Icon:
 *    - Animate to X when open
 *    - Duration: 0.2s
 *
 * 4. Navbar Background:
 *    - Fade in backdrop blur on scroll
 *    - Duration: 0.3s
 */

// ============================================================================
// Responsive Behavior
// ============================================================================

/**
 * Mobile (<768px):
 * - Show hamburger menu button
 * - Hide desktop links
 * - Full-screen mobile menu overlay
 * - Logo left, hamburger right
 *
 * Desktop (>768px):
 * - Show all links inline
 * - Hide hamburger button
 * - Logo left, links center, CTA right
 */

// ============================================================================
// Design Tokens
// ============================================================================

/**
 * Colors:
 * - Background (scrolled): rgba(10, 10, 10, 0.8)
 * - Background (top): transparent
 * - Backdrop blur: backdrop-blur-xl
 * - Border bottom: rgba(255, 255, 255, 0.1)
 * - Logo accent: #00FF9F (first letter)
 * - Link: #FFFFFF
 * - Link hover: #00FF9F
 * - Active link: #00FF9F
 * - CTA button: #00FF9F background, #000 text
 * - Mobile menu background: rgba(10, 10, 10, 0.95)
 *
 * Typography:
 * - Logo: text-2xl font-bold
 * - Links: text-base font-medium
 * - Mobile links: text-xl
 *
 * Spacing:
 * - Height: h-20
 * - Padding: px-4 md:px-8
 * - Sticky: top-0
 * - Z-index: z-50
 */

// ============================================================================
// Smooth Scroll Behavior
// ============================================================================

/**
 * Scroll to Section:
 * - Prevent default link behavior
 * - Use scrollIntoView with smooth behavior
 * - Offset for fixed navbar height
 * - Update activeSection state
 *
 * Implementation:
 * ```typescript
 * const handleLinkClick = (href: string) => {
 *   const element = document.querySelector(href);
 *   if (element) {
 *     element.scrollIntoView({
 *       behavior: 'smooth',
 *       block: 'start'
 *     });
 *   }
 * };
 * ```
 */
