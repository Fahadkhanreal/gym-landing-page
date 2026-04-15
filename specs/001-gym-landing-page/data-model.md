# Data Model: FitForge Gym Landing Page

**Feature**: 001-gym-landing-page  
**Date**: 2026-04-13  
**Purpose**: Define data structures for all landing page components

## Overview

This document defines the TypeScript interfaces and data structures for all components in the FitForge Gym landing page. These models are derived from the functional requirements in spec.md and inform the component contracts in the `/contracts` directory.

## Core Entities

### Hero Section

**Purpose**: Full-screen hero with video background, headline, and CTAs

```typescript
interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  videoSrc: string;
  videoFallbackImage: string;
}

interface CTAButton {
  text: string;
  href: string;
  ariaLabel?: string;
}
```

**Data Source**: Static content in component (no external API)

**Validation Rules**:
- `headline`: Required, max 100 characters
- `subheadline`: Required, max 200 characters
- `videoSrc`: Required, must be valid video file path
- `videoFallbackImage`: Required, must be valid image path

**Example Data**:
```typescript
const heroContent: HeroContent = {
  headline: "Transform Your Body. Forge Your Future.",
  subheadline: "Elite training. World-class trainers. Real results. Join Karachi's most premium fitness experience.",
  primaryCTA: {
    text: "Join Now – First Month Free",
    href: "#contact",
    ariaLabel: "Join FitForge Gym with first month free"
  },
  secondaryCTA: {
    text: "Watch the Experience",
    href: "#video-modal",
    ariaLabel: "Watch FitForge Gym experience video"
  },
  videoSrc: "/videos/hero-background.mp4",
  videoFallbackImage: "/images/hero-fallback.jpg"
};
```

---

### Features Section

**Purpose**: Showcase 3 key gym differentiators

```typescript
interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesContent {
  title: string;
  subtitle: string;
  features: Feature[];
}
```

**Data Source**: Static content in component

**Validation Rules**:
- `features`: Required, exactly 3 items
- `feature.title`: Required, max 50 characters
- `feature.description`: Required, max 150 characters

**Example Data**:
```typescript
import { Dumbbell, Award, Trophy } from 'lucide-react';

const featuresContent: FeaturesContent = {
  title: "Why Choose FitForge",
  subtitle: "Built for serious results",
  features: [
    {
      id: "premium-equipment",
      icon: Dumbbell,
      title: "State-of-the-Art Equipment",
      description: "Latest gym machines from Technogym, Hammer Strength & more."
    },
    {
      id: "expert-trainers",
      icon: Award,
      title: "Certified Professional Trainers",
      description: "15+ years experienced trainers with proven transformation records."
    },
    {
      id: "signature-programs",
      icon: Trophy,
      title: "Result-Driven Programs",
      description: "Customized strength, HIIT, functional & transformation programs."
    }
  ]
};
```

---

### Pricing Section

**Purpose**: Display 3 membership tiers with monthly/yearly toggle

```typescript
type BillingPeriod = 'monthly' | 'yearly';

interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  ribbonText?: string;
}

interface PricingContent {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  savingsPercentage: number;
}
```

**Data Source**: Static content in component

**Validation Rules**:
- `plans`: Required, exactly 3 items
- `monthlyPrice`: Required, positive number
- `yearlyPrice`: Required, positive number, should be < monthlyPrice * 12
- `features`: Required, min 3 items
- `highlighted`: Only one plan should be true

**Example Data**:
```typescript
const pricingContent: PricingContent = {
  title: "Choose Your Membership",
  subtitle: "Flexible plans for every goal",
  savingsPercentage: 25,
  plans: [
    {
      id: "basic",
      name: "Basic",
      monthlyPrice: 4999,
      yearlyPrice: 49999,
      features: [
        "Gym access",
        "Basic classes",
        "Locker"
      ],
      highlighted: false
    },
    {
      id: "pro",
      name: "Pro",
      monthlyPrice: 8999,
      yearlyPrice: 89999,
      features: [
        "All Basic features",
        "Personal Training (4 sessions/month)",
        "All classes",
        "Sauna access",
        "Protein bar access"
      ],
      highlighted: true,
      ribbonText: "Most Popular"
    },
    {
      id: "elite",
      name: "Elite",
      monthlyPrice: 14999,
      yearlyPrice: 149999,
      features: [
        "All Pro features",
        "Private coaching",
        "Nutrition plan",
        "Guest passes (2/month)",
        "Priority booking"
      ],
      highlighted: false
    }
  ]
};
```

**State Management**:
```typescript
interface PricingState {
  billingPeriod: BillingPeriod;
  setBillingPeriod: (period: BillingPeriod) => void;
}
```

---

### Trainers Section

**Purpose**: Showcase 4 trainer profiles

```typescript
interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: SocialLinks;
}

interface SocialLinks {
  instagram?: string;
  linkedin?: string;
}

interface TrainersContent {
  title: string;
  subtitle: string;
  trainers: Trainer[];
}
```

**Data Source**: Static content in component

**Validation Rules**:
- `trainers`: Required, exactly 4 items
- `name`: Required, max 50 characters
- `specialty`: Required, max 100 characters
- `experience`: Required, format "X+ years"
- `imageSrc`: Required, valid image path
- `socialLinks`: At least one link required

**Example Data**:
```typescript
const trainersContent: TrainersContent = {
  title: "Meet Our Elite Trainers",
  subtitle: "Certified professionals who transform lives",
  trainers: [
    {
      id: "ahmed-khan",
      name: "Ahmed Khan",
      specialty: "Strength & Conditioning",
      experience: "8+ years",
      imageSrc: "/images/trainers/ahmed-khan.jpg",
      imageAlt: "Ahmed Khan - Strength & Conditioning Trainer",
      socialLinks: {
        instagram: "https://instagram.com/ahmedkhan_fitness",
        linkedin: "https://linkedin.com/in/ahmedkhan"
      }
    },
    {
      id: "sara-malik",
      name: "Sara Malik",
      specialty: "Functional Training & HIIT",
      experience: "6+ years",
      imageSrc: "/images/trainers/sara-malik.jpg",
      imageAlt: "Sara Malik - Functional Training & HIIT Trainer",
      socialLinks: {
        instagram: "https://instagram.com/saramalik_fit",
        linkedin: "https://linkedin.com/in/saramalik"
      }
    },
    {
      id: "usman-raza",
      name: "Usman Raza",
      specialty: "Body Transformation Specialist",
      experience: "10+ years",
      imageSrc: "/images/trainers/usman-raza.jpg",
      imageAlt: "Usman Raza - Body Transformation Specialist",
      socialLinks: {
        instagram: "https://instagram.com/usmanraza_transform",
        linkedin: "https://linkedin.com/in/usmanraza"
      }
    },
    {
      id: "fatima-noor",
      name: "Fatima Noor",
      specialty: "Yoga & Mobility Expert",
      experience: "7+ years",
      imageSrc: "/images/trainers/fatima-noor.jpg",
      imageAlt: "Fatima Noor - Yoga & Mobility Expert",
      socialLinks: {
        instagram: "https://instagram.com/fatimanoor_yoga",
        linkedin: "https://linkedin.com/in/fatimanoor"
      }
    }
  ]
};
```

---

### Testimonials Section

**Purpose**: Display client success stories in carousel

```typescript
interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientImage: string;
  clientImageAlt: string;
  transformationStat: string;
  rating: number;
}

interface TestimonialsContent {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  autoPlayInterval: number;
}
```

**Data Source**: Static content in component

**Validation Rules**:
- `testimonials`: Required, min 3 items
- `quote`: Required, max 200 characters
- `rating`: Required, integer 1-5
- `transformationStat`: Required, format "-Xkg" or "+Xkg"
- `autoPlayInterval`: Required, milliseconds (recommended 5000)

**Example Data**:
```typescript
const testimonialsContent: TestimonialsContent = {
  title: "Real Results, Real People",
  subtitle: "Don't just take our word for it",
  autoPlayInterval: 5000,
  testimonials: [
    {
      id: "bilal-ahmed",
      quote: "Lost 28kg in 6 months. Best decision ever!",
      clientName: "Bilal Ahmed",
      clientImage: "/images/testimonials/bilal-ahmed.jpg",
      clientImageAlt: "Bilal Ahmed - FitForge Client",
      transformationStat: "-28kg in 6 months",
      rating: 5
    },
    {
      id: "ayesha-khan",
      quote: "Gained 12kg muscle and confidence. Trainers are world-class.",
      clientName: "Ayesha Khan",
      clientImage: "/images/testimonials/ayesha-khan.jpg",
      clientImageAlt: "Ayesha Khan - FitForge Client",
      transformationStat: "+12kg muscle",
      rating: 5
    },
    {
      id: "hassan-malik",
      quote: "Best gym in Karachi. Atmosphere and facilities are unmatched.",
      clientName: "Hassan Malik",
      clientImage: "/images/testimonials/hassan-malik.jpg",
      clientImageAlt: "Hassan Malik - FitForge Client",
      transformationStat: "6 months member",
      rating: 5
    }
  ]
};
```

**State Management**:
```typescript
interface TestimonialsState {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  isAutoPlaying: boolean;
  setIsAutoPlaying: (playing: boolean) => void;
}
```

---

### Contact Section

**Purpose**: Contact form and location information

```typescript
interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  interest: InterestType;
}

type InterestType = 'free-trial' | 'membership-inquiry';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
}

interface ContactContent {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo;
}
```

**Data Source**: 
- Form data: User input
- Contact info: Static content

**Validation Rules** (Zod Schema):
```typescript
import { z } from 'zod';

const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string()
    .email("Invalid email address"),
  phone: z.string()
    .regex(/^[0-9]{11}$/, "Phone must be 11 digits"),
  message: z.string()
    .max(500, "Message must be less than 500 characters")
    .optional(),
  interest: z.enum(['free-trial', 'membership-inquiry'])
});

type ContactFormData = z.infer<typeof contactFormSchema>;
```

**Example Data**:
```typescript
const contactContent: ContactContent = {
  title: "Ready to Transform?",
  subtitle: "Join Karachi's premium fitness community today",
  contactInfo: {
    phone: "+92 300 1234567",
    email: "info@fitforge.pk",
    address: "123 Fitness Street, Clifton, Karachi, Pakistan",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=..."
  }
};
```

**Form State**:
```typescript
interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
```

---

### Navigation

**Purpose**: Site navigation and branding

```typescript
interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface NavigationContent {
  logo: string;
  links: NavLink[];
  ctaButton: CTAButton;
}
```

**Data Source**: Static content in component

**Example Data**:
```typescript
const navigationContent: NavigationContent = {
  logo: "FITFORGE",
  links: [
    { label: "Features", href: "#features", ariaLabel: "View gym features" },
    { label: "Pricing", href: "#pricing", ariaLabel: "View membership pricing" },
    { label: "Trainers", href: "#trainers", ariaLabel: "Meet our trainers" },
    { label: "Testimonials", href: "#testimonials", ariaLabel: "Read client testimonials" },
    { label: "Contact", href: "#contact", ariaLabel: "Contact us" }
  ],
  ctaButton: {
    text: "Join Now",
    href: "#contact",
    ariaLabel: "Join FitForge Gym"
  }
};
```

**State Management**:
```typescript
interface NavigationState {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}
```

---

### Footer

**Purpose**: Site footer with links and social media

```typescript
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

interface FooterContent {
  logo: string;
  tagline: string;
  quickLinks: FooterLink[];
  socialLinks: SocialLink[];
  copyright: string;
}
```

**Data Source**: Static content in component

**Example Data**:
```typescript
import { Instagram, Facebook, Youtube } from 'lucide-react';

const footerContent: FooterContent = {
  logo: "FITFORGE",
  tagline: "Transform Your Body. Forge Your Future.",
  quickLinks: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Trainers", href: "#trainers" },
    { label: "Contact", href: "#contact" }
  ],
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://instagram.com/fitforge_karachi",
      icon: Instagram,
      ariaLabel: "Follow FitForge on Instagram"
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/fitforge.karachi",
      icon: Facebook,
      ariaLabel: "Follow FitForge on Facebook"
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@fitforge",
      icon: Youtube,
      ariaLabel: "Subscribe to FitForge on YouTube"
    }
  ],
  copyright: "© 2026 FitForge Gym. Made with passion for fitness."
};
```

---

## Shared Types

### Common UI Types

```typescript
// Button variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
}

// Card component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassmorphism?: boolean;
  hover?: boolean;
}

// Input component
interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
}
```

### Animation Types

```typescript
import { Variants } from 'framer-motion';

// Standard animation variants
interface AnimationVariants {
  fadeInUp: Variants;
  fadeInDown: Variants;
  fadeIn: Variants;
  staggerContainer: Variants;
  scaleOnHover: Variants;
  neonGlow: Variants;
}

// Scroll animation hook
interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  inView: boolean;
  controls: AnimationControls;
}
```

---

## Data Flow Diagram

```
User Interaction
       ↓
Component State (useState, useForm)
       ↓
Local Data Validation (Zod schemas)
       ↓
UI Update (React re-render)
       ↓
Animation Trigger (Framer Motion)
       ↓
Console Log (form submissions)
       ↓
Future: API Call (backend integration)
```

---

## Type Safety Strategy

1. **Strict TypeScript**: All types explicitly defined, no `any`
2. **Zod Validation**: Runtime validation for user inputs
3. **Type Inference**: Use `z.infer<typeof schema>` for form types
4. **Const Assertions**: Use `as const` for static data
5. **Discriminated Unions**: Use for variant types (button, billing period)

---

## Future Enhancements

**Phase 2** (Backend Integration):
- Add `id` fields to all entities for database mapping
- Add `createdAt`, `updatedAt` timestamps
- Add API response types
- Add loading/error states for async operations

**Phase 3** (CMS Integration):
- Make all content editable via CMS
- Add content versioning
- Add multi-language support types

---

## References

- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- Zod Documentation: https://zod.dev/
- React Hook Form Types: https://react-hook-form.com/ts
- Framer Motion Types: https://www.framer.com/motion/
