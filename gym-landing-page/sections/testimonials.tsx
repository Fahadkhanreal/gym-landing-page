'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/animations/use-scroll-animation';
import type { Testimonial } from '@/types/testimonial.types';
import { CAROUSEL_SETTINGS } from '@/lib/constants';

const testimonials: Testimonial[] = [
  {
    id: 'bilal-ahmed',
    quote: 'Lost 28kg in 6 months. Best decision ever!',
    clientName: 'Bilal Ahmed',
    clientImage: '/images/testimonials/client-1.jpg',
    clientImageAlt: 'Bilal Ahmed - FitForge Client',
    transformationStat: '-28kg in 6 months',
    rating: 5,
  },
  {
    id: 'ayesha-khan',
    quote: 'Gained 12kg muscle and confidence. Trainers are world-class.',
    clientName: 'Ayesha Khan',
    clientImage: '/images/testimonials/client-2.jpg',
    clientImageAlt: 'Ayesha Khan - FitForge Client',
    transformationStat: '+12kg muscle',
    rating: 5,
  },
  {
    id: 'hassan-malik',
    quote: 'Best gym in Karachi. Atmosphere and facilities are unmatched.',
    clientName: 'Hassan Malik',
    clientImage: '/images/testimonials/client-3.jpg',
    clientImageAlt: 'Hassan Malik - FitForge Client',
    transformationStat: '6 months member',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, inView } = useScrollAnimation();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, CAROUSEL_SETTINGS.autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, inView]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      handlePrevious();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 px-4 md:px-8 bg-[var(--background)]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real <span className="text-[var(--neon-green)]">Results</span>, Real People
          </h2>
          <p className="text-lg text-gray-400">Don&apos;t just take our word for it</p>
        </motion.div>

        {/* Carousel Container */}
        <div ref={ref} className="relative">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              >
                <div className="glass rounded-2xl p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-8">
                  {/* Client Image */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-[var(--neon-green)]">
                    <Image
                      src={testimonials[currentIndex].clientImage}
                      alt={testimonials[currentIndex].clientImageAlt}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating Stars */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[var(--neon-green)] text-[var(--neon-green)]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl italic text-white mb-4">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </blockquote>

                    {/* Client Info */}
                    <div>
                      <p className="text-xl font-bold text-[var(--neon-green)]">
                        {testimonials[currentIndex].clientName}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentIndex].transformationStat}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[var(--neon-green)] hover:text-black transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[var(--neon-green)] w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[var(--neon-green)] hover:text-black transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
