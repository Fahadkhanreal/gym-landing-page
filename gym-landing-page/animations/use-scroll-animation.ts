import { useInView, type UseInViewOptions } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Uses Framer Motion's useInView to detect when element enters viewport
 *
 * @param options - Configuration options
 * @param options.once - Whether animation should trigger only once (default: true)
 * @param options.margin - Margin around viewport for triggering (default: "-100px")
 * @returns Object with ref to attach to element and inView boolean
 */
export function useScrollAnimation(options?: {
  once?: boolean;
  margin?: UseInViewOptions['margin'];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '-100px',
  });

  return { ref, inView };
}
