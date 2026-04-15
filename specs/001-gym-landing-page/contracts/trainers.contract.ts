/**
 * Trainers Section Component Contract
 *
 * Purpose: Showcase 4 trainer profiles with photos and social links
 * Location: sections/trainers.tsx
 * Type: Server Component (static content)
 */

// ============================================================================
// Props Interface
// ============================================================================

export interface TrainersProps {
  title: string;
  subtitle: string;
  trainers: Trainer[];
  className?: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
}

// ============================================================================
// Accessibility Requirements
// ============================================================================

/**
 * ARIA Requirements:
 * - Each trainer card: article with aria-label="Trainer: {name}"
 * - Images: alt text with trainer name and role
 * - Social links: aria-label="Follow {name} on {platform}"
 *
 * Keyboard Navigation:
 * - Social links: Tab accessible
 * - Focus visible on all interactive elements
 */

// ============================================================================
// Animation Specifications
// ============================================================================

/**
 * Framer Motion Animations:
 *
 * 1. Cards: Staggered fade in + slide up
 *    - Initial: opacity 0, y: 60
 *    - Animate: opacity 1, y: 0
 *    - Stagger: 0.15s
 *    - Duration: 0.6s
 *
 * 2. Hover Effects:
 *    - Card: scale 1.03, lift shadow
 *    - Image: scale 1.1 (zoom in)
 *    - Border: neon glow
 *    - Duration: 0.3s
 *
 * 3. Social Icons:
 *    - Hover: scale 1.2, color to neon green
 *    - Duration: 0.2s
 *
 * 4. Mobile: Drag support
 *    - Use motion.div with drag="x"
 *    - Drag constraints
 *    - Momentum scrolling
 */

// ============================================================================
// Responsive Behavior
// ============================================================================

/**
 * Mobile (<640px):
 * - Horizontal scroll (overflow-x-auto)
 * - Cards: min-w-[280px]
 * - Snap scroll: snap-x snap-mandatory
 * - Drag support with Framer Motion
 *
 * Tablet (640px-1024px):
 * - 2 columns grid
 * - gap-6
 *
 * Desktop (>1024px):
 * - 4 columns grid
 * - gap-8
 */

// ============================================================================
// Design Tokens
// ============================================================================

/**
 * Colors:
 * - Card background: rgba(31, 31, 31, 0.6)
 * - Card border: rgba(255, 255, 255, 0.1)
 * - Hover border: #00FF9F
 * - Name: #FFFFFF
 * - Specialty: #00FF9F
 * - Experience: #A0A0A0
 * - Social icons: #FFFFFF
 * - Social icons hover: #00FF9F
 *
 * Typography:
 * - Name: text-xl font-bold
 * - Specialty: text-base text-[#00FF9F]
 * - Experience: text-sm text-gray-400
 *
 * Spacing:
 * - Card padding: p-6
 * - Image aspect ratio: aspect-square
 * - Image border radius: rounded-lg
 */

// ============================================================================
// Image Optimization
// ============================================================================

/**
 * Next/Image Configuration:
 * - width: 400
 * - height: 400
 * - quality: 85
 * - placeholder: "blur" (if blurDataURL provided)
 * - loading: "lazy" (below fold)
 * - sizes: "(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
 */
