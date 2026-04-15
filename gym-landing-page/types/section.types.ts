import { LucideIcon } from 'lucide-react';

/**
 * Common section props
 */
export interface SectionProps {
  className?: string;
}

/**
 * CTA Button
 */
export interface CTAButton {
  text: string;
  href: string;
  ariaLabel?: string;
}

/**
 * Feature card
 */
export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Social media links
 */
export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  youtube?: string;
}

/**
 * Navigation link
 */
export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}
