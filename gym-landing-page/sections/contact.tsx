'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/animations/use-scroll-animation';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { CONTACT_INFO } from '@/lib/constants';

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^[0-9]{11}$/, 'Phone must be 11 digits (e.g., 03001234567)'),
  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional(),
  interest: z.enum(['free-trial', 'membership-inquiry']),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref, inView } = useScrollAnimation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success message
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    }
  };

  return (
    <section
      id="contact"
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
            Ready to <span className="text-[var(--neon-green)]">Transform</span>?
          </h2>
          <p className="text-lg text-gray-400">
            Join Karachi&apos;s premium fitness community today
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Form - 60% width on desktop */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <Input
                  label="Full Name"
                  {...register('fullName')}
                  error={errors.fullName?.message}
                  placeholder="John Doe"
                  required
                />

                {/* Email */}
                <Input
                  label="Email"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                  placeholder="john@example.com"
                  required
                />

                {/* Phone */}
                <Input
                  label="Phone"
                  type="tel"
                  {...register('phone')}
                  error={errors.phone?.message}
                  placeholder="03001234567"
                  required
                />

                {/* Interest */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Interest
                    <span className="text-[var(--neon-red)] ml-1">*</span>
                  </label>
                  <select
                    {...register('interest')}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-white/20 text-white focus:outline-none focus:border-[var(--neon-green)] focus:ring-2 focus:ring-[var(--neon-green)]/50 transition-all duration-300"
                  >
                    <option value="">Select your interest</option>
                    <option value="free-trial">Free Trial</option>
                    <option value="membership-inquiry">Membership Inquiry</option>
                  </select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-[var(--neon-red)]">
                      {errors.interest.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <Input
                  label="Message (Optional)"
                  {...register('message')}
                  error={errors.message?.message}
                  placeholder="Tell us about your fitness goals..."
                  isTextarea
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg bg-[var(--neon-green)]/10 border border-[var(--neon-green)] flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle className="w-6 h-6 text-[var(--neon-green)]" />
                    <p className="text-[var(--neon-green)] font-medium">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Contact Info & Map - 40% width on desktop */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--neon-green)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--neon-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-white hover:text-[var(--neon-green)] transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--neon-green)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--neon-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-white hover:text-[var(--neon-green)] transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--neon-green)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--neon-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-white">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="glass rounded-2xl p-2 h-[300px]">
              <iframe
                src={CONTACT_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FitForge Gym Location"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
