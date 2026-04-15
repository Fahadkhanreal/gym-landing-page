/**
 * Contact Section Component Contract
 *
 * Purpose: Contact form with validation and location map
 * Location: sections/contact.tsx
 * Type: Client Component (form state)
 */

import { z } from 'zod';

// ============================================================================
// Props Interface
// ============================================================================

export interface ContactProps {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo;
  className?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
}

// ============================================================================
// Form Schema & Types
// ============================================================================

export const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string()
    .email("Invalid email address"),
  phone: z.string()
    .regex(/^[0-9]{11}$/, "Phone must be 11 digits (e.g., 03001234567)"),
  message: z.string()
    .max(500, "Message must be less than 500 characters")
    .optional(),
  interest: z.enum(['free-trial', 'membership-inquiry'], {
    required_error: "Please select your interest"
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ============================================================================
// State Management
// ============================================================================

/**
 * Form State (React Hook Form):
 * - form: useForm<ContactFormData>
 * - isSubmitting: boolean
 * - isSuccess: boolean
 * - error: string | null
 *
 * Form Submission:
 * - Validate with Zod schema
 * - Console.log form data (no backend yet)
 * - Show success message
 * - Reset form after 3 seconds
 */

// ============================================================================
// Accessibility Requirements
// ============================================================================

/**
 * ARIA Requirements:
 * - Form: role="form", aria-labelledby
 * - Inputs: aria-required, aria-invalid, aria-describedby (for errors)
 * - Error messages: role="alert", aria-live="assertive"
 * - Success message: role="status", aria-live="polite"
 *
 * Keyboard Navigation:
 * - Tab through all form fields
 * - Enter to submit
 * - Escape to clear (optional)
 */

// ============================================================================
// Animation Specifications
// ============================================================================

/**
 * Framer Motion Animations:
 *
 * 1. Form: Fade in + slide up
 *    - Initial: opacity 0, y: 40
 *    - Animate: opacity 1, y: 0
 *    - Duration: 0.6s
 *
 * 2. Success Message:
 *    - Initial: opacity 0, scale: 0.8
 *    - Animate: opacity 1, scale: 1
 *    - Exit: opacity 0, scale: 0.8
 *    - Duration: 0.4s
 *
 * 3. Submit Button:
 *    - Hover: scale 1.05, glow effect
 *    - Loading: pulse animation
 */

// ============================================================================
// Responsive Behavior
// ============================================================================

/**
 * Mobile (<768px):
 * - Stack form and map vertically
 * - Form full width
 * - Map height: 300px
 *
 * Desktop (>768px):
 * - Split layout: form left (60%), map right (40%)
 * - Map height: match form height
 */

// ============================================================================
// Design Tokens
// ============================================================================

/**
 * Colors:
 * - Input background: rgba(31, 31, 31, 0.8)
 * - Input border: rgba(255, 255, 255, 0.2)
 * - Input focus border: #00FF9F
 * - Error text: #FF2D55
 * - Success background: rgba(0, 255, 159, 0.1)
 * - Submit button: #00FF9F background, #000 text
 *
 * Typography:
 * - Label: text-sm font-medium text-gray-300
 * - Input: text-base text-white
 * - Error: text-sm text-[#FF2D55]
 * - Success: text-base text-[#00FF9F]
 */
