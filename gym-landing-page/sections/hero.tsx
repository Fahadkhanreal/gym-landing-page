'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/button';
import { pulse } from '@/animations/motion-variants';

export default function Hero() {
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], [0, -100]);

  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--background)]">
      {/* Video Background - Desktop Only */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{ y: videoY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Mobile Fallback - Static Background Image */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-fallback.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-8">
        <motion.div
          className="glass-dark max-w-4xl rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline with staggered animation */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={wordVariants} className="inline-block">
              Transform{' '}
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block">
              Your{' '}
            </motion.span>
            <motion.span
              variants={wordVariants}
              className="inline-block text-[var(--neon-green)]"
            >
              Body.{' '}
            </motion.span>
            <br className="hidden md:block" />
            <motion.span variants={wordVariants} className="inline-block">
              Forge{' '}
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block">
              Your{' '}
            </motion.span>
            <motion.span
              variants={wordVariants}
              className="inline-block text-[var(--neon-green)]"
            >
              Future.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Elite training. World-class trainers. Real results. Join Karachi&apos;s
            most premium fitness experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              aria-label="Join FitForge Gym with first month free"
            >
              Join Now – First Month Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://youtu.be/tUykoP30Gb0"
              aria-label="Watch FitForge Gym experience video"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Experience
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        variants={pulse}
        initial="initial"
        animate="animate"
      >
        <a
          href="#features"
          className="flex flex-col items-center text-white/80 hover:text-[var(--neon-green)] transition-colors"
          aria-label="Scroll to features section"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
