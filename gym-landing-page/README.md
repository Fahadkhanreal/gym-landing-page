# FitForge Gym Landing Page

A premium, high-performance landing page for FitForge Gym built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features dark theme design with neon accents, glassmorphism effects, and smooth scroll-triggered animations.

## 🎯 Features

- **Hero Section** - Full-viewport hero with video background and staggered text animations
- **Features Section** - 3 key differentiators with icons and hover effects
- **Pricing Section** - Monthly/yearly toggle with 3 membership tiers
- **Trainers Section** - 4 elite trainer profiles with social links
- **Testimonials Section** - Auto-playing carousel with drag support
- **Contact Section** - Form with validation, Google Maps integration
- **Responsive Design** - Fully responsive from 320px to 2560px
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation
- **Performance** - Optimized for 95+ Lighthouse scores

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + Custom CSS
- **Animation:** Framer Motion 12
- **Form Handling:** React Hook Form + Zod
- **Icons:** Lucide React
- **Image Optimization:** Next/Image

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd gym-landing-page

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🚀 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
gym-landing-page/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Inter font
│   ├── page.tsx           # Main page (imports all sections)
│   └── globals.css        # Global styles + glassmorphism utilities
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Button with variants
│   │   ├── card.tsx       # Glassmorphic card
│   │   └── input.tsx      # Form input with validation
│   └── layout/            # Layout components
│       ├── navbar.tsx     # Sticky navbar with mobile menu
│       └── footer.tsx     # Footer with social links
├── sections/              # Page sections
│   ├── hero.tsx          # Hero with video background
│   ├── features.tsx      # Features grid
│   ├── pricing.tsx       # Pricing cards with toggle
│   ├── trainers.tsx      # Trainer profiles
│   ├── testimonials.tsx  # Testimonial carousel
│   └── contact.tsx       # Contact form + map
├── animations/            # Animation utilities
│   ├── motion-variants.ts      # Framer Motion variants
│   └── use-scroll-animation.ts # Scroll animation hook
├── lib/                   # Utilities
│   ├── utils.ts          # Helper functions
│   └── constants.ts      # App constants
├── types/                 # TypeScript types
│   ├── section.types.ts
│   ├── pricing.types.ts
│   ├── trainer.types.ts
│   └── testimonial.types.ts
└── public/               # Static assets
    ├── images/
    │   ├── trainers/     # Trainer photos
    │   └── testimonials/ # Client photos
    └── videos/
        └── hero-background.mp4
```

## 🎨 Design System

### Colors
- **Background:** #0A0A0A (deep black)
- **Surface:** #1F1F1F (dark gray)
- **Primary Accent:** #00FF9F (neon green)
- **Secondary Accent:** #FF2D55 (neon red)

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold weight + tracking-tighter
- **Body:** Regular weight

### Effects
- **Glassmorphism:** backdrop-blur with semi-transparent backgrounds
- **Neon Glow:** Box shadows on hover for interactive elements
- **Animations:** Scroll-triggered fade-in + slide-up

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Environment Variables

**Contact Form Setup (Required for Production):**

The contact form uses **Resend** to send emails. To enable it:

1. Sign up at [resend.com](https://resend.com) (FREE - 3,000 emails/month)
2. Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Add your credentials to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_actual_api_key
   GYM_EMAIL=your-gym-email@example.com
   ```

**📖 Detailed Setup Guide:** See [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) for complete instructions and alternative solutions.

**For Vercel Deployment:** Add environment variables in Vercel Dashboard → Settings → Environment Variables

## 📝 Customization

### Update Content

1. **Hero Section:** Edit `sections/hero.tsx` - Update headline, subheadline, CTAs
2. **Features:** Edit `sections/features.tsx` - Modify features array
3. **Pricing:** Edit `sections/pricing.tsx` - Update plans array with your pricing
4. **Trainers:** Edit `sections/trainers.tsx` - Update trainers array with your team
5. **Testimonials:** Edit `sections/testimonials.tsx` - Update testimonials array
6. **Contact Info:** Edit `lib/constants.ts` - Update CONTACT_INFO object

### Update Colors

Edit `app/globals.css`:

```css
:root {
  --background: #0A0A0A;
  --foreground: #ffffff;
  --surface: #1F1F1F;
  --neon-green: #00FF9F;
  --neon-red: #FF2D55;
}
```

### Add Images

1. Place images in `public/images/`
2. Update image paths in section components
3. Use Next/Image component for optimization

## ✅ Performance Checklist

- [x] Lazy loading for images
- [x] Code splitting with dynamic imports
- [x] Optimized animations (GPU-accelerated)
- [x] Minimal JavaScript bundle
- [x] Proper image sizing with Next/Image
- [x] Glassmorphism with fallbacks
- [x] Reduced motion support

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible styles
- Color contrast compliance (WCAG 2.1 AA)
- Alt text for all images
- Reduced motion support

## 🐛 Known Issues

- Video background requires actual video file (currently placeholder)
- Trainer and testimonial images are placeholders
- Contact form logs to console (backend integration needed)
- Google Maps requires API key for production

## 📄 License

This project is part of the Governor Sindh IT Initiative.

## 🤝 Contributing

This is a learning project. Feel free to fork and customize for your own gym or fitness business.

## 📞 Support

For questions or issues, please refer to the project documentation or contact the development team.

---

**Built with ❤️ using Next.js 15 and TypeScript**
