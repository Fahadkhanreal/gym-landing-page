/**
 * Testimonials Section Component Contract
 *
 * Purpose: Display client success stories in auto-playing carousel
 * Location: sections/testimonials.tsx
 * Type: Client Component (carousel state)
 */

// ============================================================================
// Props Interface
// ============================================================================

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  className?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientImage: string;
  clientImageAlt: string;
  transformationStat: string;
  rating: number;
}

// ============================================================================
// State Management
// ============================================================================

/**
 * Component State:
 * - currentIndex: number (useState)
 * - isAutoPlaying: boolean (useState)
 * - direction: 1 | -1 (for animation direction)
 *
 * Auto-play Logic:
 * - useEffect with setInterval
 * - Interval: 5000ms (default)
 * - Pause on hover (setIsAutoPlaying(false))
 * - Resume on mouse leave
 * - Clear interval on unmount
 *
 * Navigation:
 * - Next/Previous buttons
 * - Dot indicators (click to jump)
 * - Keyboard: Arrow keys
 * - Touch: Swipe gestures (Framer Motion drag)
 */

// ============================================================================
// Accessibility Requirements
// ============================================================================

/**
 * ARIA Requirements:
 * - Carousel: role="region", aria-label="Client testimonials"
 * - Current slide: aria-live="polite"
 * - Navigation buttons: aria-label="Next/Previous testimonial"
 * - Pause button: aria-label="Pause/Play carousel"
 * - Dot indicators: aria-label="Go to testimonial {n}"
 *
 * Keyboard Navigation:
 * - Left/Right arrows: Navigate slides
 * - Tab: Focus navigation controls
 * - Space/Enter: Activate buttons
 * - Escape: Pause auto-play
 */

// ============================================================================
// Animation Specifications
// ============================================================================

/**
 * Framer Motion Animations:
 *
 * 1. Slide Transitions (AnimatePresence):
 *    - Enter from right: x: 100%, opacity: 0
 *    - Center: x: 0, opacity: 1
 *    - Exit to left: x: -100%, opacity: 0
 *    - Duration: 0.5s
 *    - Ease: "easeInOut"
 *
 * 2. Drag Support:
 *    - drag="x"
 *    - dragConstraints: { left: 0, right: 0 }
 *    - dragElastic: 0.2
 *    - onDragEnd: Navigate based on drag distance
 *
 * 3. Card Hover:
 *    - Pause auto-play
 *    - Subtle scale: 1.02
 *    - Glow effect
 *
 * 4. Rating Stars:
 *    - Stagger animation on mount
 *    - Fill animation: scale 0 to 1
 */

// ============================================================================
// Responsive Behavior
// ============================================================================

/**
 * Mobile (<640px):
 * - Single card visible
 * - Swipe gestures enabled
 * - Smaller text sizes
 * - Vertical layout (image top, content bottom)
 *
 * Tablet (640px-1024px):
 * - Single card visible
 * - Larger card size
 * - Horizontal layout (image left, content right)
 *
 * Desktop (>1024px):
 * - Single card visible (centered)
 * - Maximum card width: 800px
 * - Horizontal layout
 * - Navigation arrows outside card
 */

// ============================================================================
// Design Tokens
// ============================================================================

/**
 * Colors:
 * - Card background: rgba(31, 31, 31, 0.7)
 * - Card border: rgba(255, 255, 255, 0.1)
 * - Quote text: #FFFFFF
 * - Client name: #00FF9F
 * - Transformation stat: #A0A0A0
 * - Star filled: #00FF9F
 * - Star empty: #4A4A4A
 * - Navigation buttons: rgba(255, 255, 255, 0.1)
 * - Navigation hover: #00FF9F
 * - Dot inactive: rgba(255, 255, 255, 0.3)
 * - Dot active: #00FF9F
 *
 * Typography:
 * - Quote: text-lg md:text-xl italic
 * - Client name: text-xl font-bold
 * - Transformation: text-sm text-gray-400
 *
 * Spacing:
 * - Card padding: p-8 md:p-12
 * - Image size: w-20 h-20 md:w-32 md:h-32
 * - Image border radius: rounded-full
 */

// ============================================================================
// Performance Considerations
// ============================================================================

/**
 * Optimization:
 * - Preload adjacent slides (currentIndex ± 1)
 * - Lazy load images for non-visible slides
 * - Debounce drag events
 * - Use CSS transforms for animations (GPU-accelerated)
 * - Cleanup intervals on unmount
 */
