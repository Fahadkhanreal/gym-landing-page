'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '@/animations/use-scroll-animation';
import { staggerContainer, fadeInUp } from '@/animations/motion-variants';
import type { Trainer } from '@/types/trainer.types';

// Custom Instagram Icon (SVG)
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Custom LinkedIn Icon (SVG)
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const trainers: Trainer[] = [
  {
    id: 'ahmed-khan',
    name: 'Ahmed Khan',
    specialty: 'Strength & Conditioning',
    experience: '8+ years',
    imageSrc: '/images/trainers/trainer-5.jpg',
    imageAlt: 'Ahmed Khan - Strength & Conditioning Trainer',
    socialLinks: {
      instagram: 'https://instagram.com/ahmedkhan_fitness',
      linkedin: 'https://linkedin.com/in/ahmedkhan',
    },
  },
  {
    id: 'sara-malik',
    name: 'Sara Malik',
    specialty: 'Functional Training & HIIT',
    experience: '6+ years',
    imageSrc: '/images/trainers/trainer-3.jpg',
    imageAlt: 'Sara Malik - Functional Training & HIIT Trainer',
    socialLinks: {
      instagram: 'https://instagram.com/saramalik_fit',
      linkedin: 'https://linkedin.com/in/saramalik',
    },
  },
  {
    id: 'usman-raza',
    name: 'Usman Raza',
    specialty: 'Body Transformation Specialist',
    experience: '10+ years',
    imageSrc: '/images/trainers/trainer-3.jpg',
    imageAlt: 'Usman Raza - Body Transformation Specialist',
    socialLinks: {
      instagram: 'https://instagram.com/usmanraza_transform',
      linkedin: 'https://linkedin.com/in/usmanraza',
    },
  },
  {
    id: 'fatima-noor',
    name: 'Fatima Noor',
    specialty: 'Yoga & Mobility Expert',
    experience: '7+ years',
    imageSrc: '/images/trainers/trainer-1.jpg',
    imageAlt: 'Fatima Noor - Yoga & Mobility Expert',
    socialLinks: {
      instagram: 'https://instagram.com/fatimanoor_yoga',
      linkedin: 'https://linkedin.com/in/fatimanoor',
    },
  },
];

export default function Trainers() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      id="trainers"
      className="py-20 md:py-32 px-4 md:px-8 bg-[var(--background)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-[var(--neon-green)]">Elite Trainers</span>
          </h2>
          <p className="text-lg text-gray-400">
            Certified professionals who transform lives
          </p>
        </motion.div>

        {/* Trainers Grid - Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          ref={ref}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none hide-scrollbar pb-4"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {trainers.map((trainer) => (
            <motion.article
              key={trainer.id}
              className="glass rounded-xl p-6 min-w-[280px] md:min-w-0 snap-center group hover:scale-103 hover:border-[var(--neon-green)] hover:shadow-[0_0_30px_rgba(0,255,159,0.3)] transition-all duration-300"
              variants={fadeInUp}
              aria-label={`Trainer: ${trainer.name}`}
            >
              {/* Trainer Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={trainer.imageSrc}
                  alt={trainer.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Trainer Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                <p className="text-base text-[var(--neon-green)]">
                  {trainer.specialty}
                </p>
                <p className="text-sm text-gray-400">{trainer.experience}</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                {trainer.socialLinks.instagram && (
                  <a
                    href={trainer.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[var(--neon-green)] hover:scale-120 transition-all"
                    aria-label={`Follow ${trainer.name} on Instagram`}
                  >
                    <InstagramIcon />
                  </a>
                )}
                {trainer.socialLinks.linkedin && (
                  <a
                    href={trainer.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[var(--neon-green)] hover:scale-120 transition-all"
                    aria-label={`Follow ${trainer.name} on LinkedIn`}
                  >
                    <LinkedinIcon />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
