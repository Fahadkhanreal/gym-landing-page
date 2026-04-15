import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassmorphism?: boolean;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', glassmorphism = true, hover = true }, ref) => {
    const baseStyles = 'rounded-xl p-6 transition-all duration-300';
    const glassStyles = glassmorphism ? 'glass' : 'bg-[var(--surface)]';
    const hoverStyles = hover ? 'hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,255,159,0.3)] hover:border-[var(--neon-green)]' : '';

    const combinedClassName = `${baseStyles} ${glassStyles} ${hoverStyles} ${className}`;

    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={combinedClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={combinedClassName}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
