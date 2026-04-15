/**
 * Color constants matching the design system
 */
export const COLORS = {
  background: '#0A0A0A',
  surface: '#1F1F1F',
  neonGreen: '#00FF9F',
  neonRed: '#FF2D55',
  white: '#FFFFFF',
  gray: {
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
} as const;

/**
 * Animation duration constants (in seconds)
 */
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  verySlow: 1.0,
} as const;

/**
 * Breakpoint constants (in pixels)
 * Matches Tailwind's default breakpoints
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Z-index constants for layering
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;

/**
 * Contact information
 */
export const CONTACT_INFO = {
  phone: '+92 300 1234567',
  email: 'info@fitforge.pk',
  address: '123 Fitness Street, Clifton, Karachi, Pakistan',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1!2d67.0!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzAwLjAiTiA2N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890',
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/fitforge_karachi',
  facebook: 'https://facebook.com/fitforge.karachi',
  youtube: 'https://youtube.com/@fitforge',
  linkedin: 'https://linkedin.com/company/fitforge',
} as const;

/**
 * Testimonial carousel settings
 */
export const CAROUSEL_SETTINGS = {
  autoPlayInterval: 5000, // 5 seconds
  transitionDuration: 500, // 0.5 seconds
} as const;

/**
 * WhatsApp contact configuration
 */
export const WHATSAPP_CONFIG = {
  phoneNumber: '+923482240731', // Replace with actual WhatsApp number
  message: 'Hi FitForge Gym! I visited your website and I\'m interested in membership. Please tell me more about your plans and free trial.',
} as const;
