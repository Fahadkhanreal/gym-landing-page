'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '@/lib/constants';

/**
 * WhatsApp Button Props
 */
interface WhatsAppButtonProps {
  className?: string;
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Pulse animation variant (continuous heartbeat)
 */
const pulseVariants: Variants = {
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
 * Entrance animation variant (fade in + bounce from bottom)
 */
const entranceVariants: Variants = {
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
 * WhatsApp Floating Button Component
 *
 * A premium floating button that opens WhatsApp with a pre-filled message.
 * Appears fixed in bottom-right corner on all pages.
 */
export default function WhatsAppButton({ className = '' }: WhatsAppButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const whatsappUrl = generateWhatsAppUrl(
    WHATSAPP_CONFIG.phoneNumber,
    WHATSAPP_CONFIG.message
  );

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={`
        fixed bottom-6 right-6 z-[60]
        w-[55px] h-[55px] md:w-[60px] md:h-[60px]
        bg-[var(--neon-green)] rounded-full shadow-lg backdrop-blur-md
        flex items-center justify-center
        hover:shadow-[0_0_40px_rgba(0,255,159,0.8)]
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] focus-visible:ring-offset-2
        ${className}
      `}
      initial="hidden"
      animate={shouldReduceMotion ? 'visible' : ['visible', 'animate']}
      variants={shouldReduceMotion ? entranceVariants : { ...entranceVariants, ...pulseVariants }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </motion.a>
  );
}
