import { Variants } from 'framer-motion';

/**
 * WhatsApp Button Component Contract
 *
 * A floating button that opens WhatsApp with a pre-filled message.
 * Appears fixed in bottom-right corner on all pages.
 *
 * @example
 * ```tsx
 * import WhatsAppButton from '@/components/ui/whatsapp-button';
 *
 * export default function Layout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <WhatsAppButton />
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */

/**
 * Props for WhatsAppButton component
 */
export interface WhatsAppButtonProps {
  /**
   * Optional additional CSS classes for customization
   * @default undefined
   */
  className?: string;
}

/**
 * WhatsApp configuration object
 * Stored in lib/constants.ts as WHATSAPP_CONFIG
 */
export interface WhatsAppConfig {
  /**
   * WhatsApp phone number in international format
   * Format: Country code + number without spaces or special characters
   * @example '923001234567' for Pakistan
   */
  phoneNumber: string;

  /**
   * Pre-filled message that appears in WhatsApp chat
   * Will be automatically URL-encoded by the component
   * @example 'Hi FitForge Gym! I visited your website and I'm interested in membership.'
   */
  message: string;
}

/**
 * Generates WhatsApp URL with pre-filled message
 *
 * @param config - WhatsApp configuration object
 * @returns Formatted WhatsApp URL
 *
 * @example
 * ```typescript
 * const url = generateWhatsAppUrl({
 *   phoneNumber: '923001234567',
 *   message: 'Hi FitForge Gym!'
 * });
 * // Returns: 'https://wa.me/923001234567?text=Hi%20FitForge%20Gym!'
 * ```
 */
export function generateWhatsAppUrl(config: WhatsAppConfig): string {
  const { phoneNumber, message } = config;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Animation variants for WhatsApp button
 */
export interface WhatsAppAnimations {
  /**
   * Continuous pulse animation (heartbeat effect)
   * Scale: 1 → 1.05 → 1
   * Duration: 2s
   * Repeat: Infinite
   */
  pulse: Variants;

  /**
   * Entrance animation (fade in + bounce from bottom)
   * Initial: opacity 0, y 100, scale 0.8
   * Final: opacity 1, y 0, scale 1
   * Delay: 0.5s
   */
  entrance: Variants;

  /**
   * Hover animation (scale up + enhanced glow)
   * Rest: scale 1, subtle glow
   * Hover: scale 1.15, strong glow
   * Duration: 0.3s
   */
  hover: Variants;
}

/**
 * Pulse animation variant
 */
export const whatsappPulse: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Entrance animation variant
 */
export const whatsappEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.5,
    },
  },
};

/**
 * Hover animation variant
 */
export const whatsappHover: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 0 20px rgba(0, 255, 159, 0.4)',
  },
  hover: {
    scale: 1.15,
    boxShadow: '0 0 40px rgba(0, 255, 159, 0.8)',
    transition: {
      duration: 0.3,
    },
  },
};

/**
 * Component return type
 */
export type WhatsAppButtonComponent = React.FC<WhatsAppButtonProps>;
