'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/animations/use-scroll-animation';
import { fadeInUp } from '@/animations/motion-variants';
import Button from '@/components/ui/button';
import type { PricingPlan, BillingPeriod } from '@/types/pricing.types';
import { formatPrice } from '@/lib/utils';

const plans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 4999,
    yearlyPrice: 49999,
    features: ['Gym access', 'Basic classes', 'Locker'],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 8999,
    yearlyPrice: 89999,
    features: [
      'All Basic features',
      'Personal Training (4 sessions/month)',
      'All classes',
      'Sauna access',
      'Protein bar access',
    ],
    highlighted: true,
    ribbonText: 'Most Popular',
  },
  {
    id: 'elite',
    name: 'Elite',
    monthlyPrice: 14999,
    yearlyPrice: 149999,
    features: [
      'All Pro features',
      'Private coaching',
      'Nutrition plan',
      'Guest passes (2/month)',
      'Priority booking',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const { ref, inView } = useScrollAnimation();

  const getPrice = (plan: PricingPlan) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  return (
    <section
      id="pricing"
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
            Choose Your <span className="text-[var(--neon-green)]">Membership</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">Flexible plans for every goal</p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 glass rounded-full p-2">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-[var(--neon-green)] text-black'
                  : 'text-white hover:text-[var(--neon-green)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                billingPeriod === 'yearly'
                  ? 'bg-[var(--neon-green)] text-black'
                  : 'text-white hover:text-[var(--neon-green)]'
              }`}
            >
              Yearly
              <span className="text-xs bg-[var(--neon-red)] text-white px-2 py-1 rounded-full">
                Save 25%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'glass border-2 border-[var(--neon-green)] shadow-[0_0_40px_rgba(0,255,159,0.5)] scale-105'
                  : 'glass hover:scale-105 hover:border-[var(--neon-green)]'
              }`}
              variants={fadeInUp}
              custom={index}
            >
              {/* Most Popular Ribbon */}
              {plan.ribbonText && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--neon-green)] text-black px-4 py-1 rounded-full text-sm font-bold">
                  {plan.ribbonText}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              {/* Price with Animation */}
              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billingPeriod}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-baseline gap-2"
                  >
                    <span className="text-5xl font-bold">
                      {formatPrice(getPrice(plan))}
                    </span>
                    <span className="text-gray-400">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--neon-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                size="lg"
                className="w-full"
                href="#contact"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
