'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Award, Trophy } from 'lucide-react';
import { useScrollAnimation } from '@/animations/use-scroll-animation';
import { staggerContainer, fadeInUp } from '@/animations/motion-variants';
import type { Feature } from '@/types/section.types';

const features: Feature[] = [
  {
    id: 'premium-equipment',
    icon: Dumbbell,
    title: 'State-of-the-Art Equipment',
    description: 'Latest gym machines from Technogym, Hammer Strength & more.',
  },
  {
    id: 'expert-trainers',
    icon: Award,
    title: 'Certified Professional Trainers',
    description: '15+ years experienced trainers with proven transformation records.',
  },
  {
    id: 'signature-programs',
    icon: Trophy,
    title: 'Result-Driven Programs',
    description: 'Customized strength, HIIT, functional & transformation programs.',
  },
];

export default function Features() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      id="features"
      className="py-20 md:py-32 px-4 md:px-8 bg-[var(--background)] relative"
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(var(--neon-green) 1px, transparent 1px), linear-gradient(90deg, var(--neon-green) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-[var(--neon-green)]">FitForge</span>
          </h2>
          <p className="text-lg text-gray-400">Built for serious results</p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="glass rounded-xl p-8 group hover:scale-105 hover:border-[var(--neon-green)] hover:shadow-[0_0_30px_rgba(0,255,159,0.3)] transition-all duration-300"
                variants={fadeInUp}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-[var(--neon-green)]/10 flex items-center justify-center group-hover:bg-[var(--neon-green)]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[var(--neon-green)]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
