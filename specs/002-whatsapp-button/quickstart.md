# Quickstart Guide: WhatsApp Floating Button

**Feature**: 002-whatsapp-button  
**Date**: 2026-04-15  
**Purpose**: Implementation guide for WhatsApp button component

## Prerequisites

Before starting, ensure you have:

- **Node.js**: v18.17.0 or higher (already installed)
- **Git**: Feature branch `002-whatsapp-button` checked out
- **Dependencies**: All required packages already installed (no new dependencies needed)

### Verify Installation

```bash
# Check you're on the correct branch
git branch --show-current
# Should show: 002-whatsapp-button

# Verify dependencies (should all be installed)
npm list framer-motion lucide-react
# framer-motion@12.38.0
# lucide-react@1.8.0
```

## Implementation Steps

### Step 1: Add Configuration to Constants

**File**: `gym-landing-page/lib/constants.ts`

Add the WhatsApp configuration at the end of the file:

```typescript
/**
 * WhatsApp contact configuration
 */
export const WHATSAPP_CONFIG = {
  phoneNumber: '923001234567', // Replace with actual WhatsApp number
  message: 'Hi FitForge Gym! I visited your website and I\'m interested in membership. Please tell me more about your plans and free trial.',
} as const;
```

**Important**: Replace `923001234567` with the actual gym owner's WhatsApp number in international format (country code + number, no spaces or + symbol).

---

### Step 2: Create WhatsApp Button Component

**File**: `gym-landing-page/components/ui/whatsapp-button.tsx`

Use this AI generation prompt:

```prompt
You are an expert Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion 12 developer.

Create a premium floating WhatsApp button component for the FitForge Gym website with these exact specifications:

**Requirements from spec.md**:
- Circular button fixed at bottom-right (bottom-6 right-6)
- Size: 60px desktop, 55px mobile (use Tailwind responsive classes: w-[55px] h-[55px] md:w-[60px] md:h-[60px])
- Background: Neon Green (#00FF9F) - use bg-[var(--neon-green)]
- Icon: White MessageCircle from lucide-react, size w-7 h-7
- Z-index: 60 (z-[60])
- Animations using Framer Motion:
  - Continuous pulse: scale [1, 1.05, 1], duration 2s, repeat Infinity, ease easeInOut
  - Entrance: initial {opacity: 0, y: 100, scale: 0.8}, animate {opacity: 1, y: 0, scale: 1}, spring transition with delay 0.5s
  - Hover: scale 1.15 + enhanced glow (0 0 40px rgba(0, 255, 159, 0.8))
- Opens WhatsApp with pre-filled message in new tab
- Accessible: aria-label "Contact us on WhatsApp", keyboard support, focus indicator
- Respects prefers-reduced-motion using useReducedMotion hook
- Works without JavaScript (use motion.a wrapper around anchor tag)

**Tech Stack**:
- 'use client' directive (client component)
- Next.js 16 App Router
- TypeScript strict mode
- Tailwind CSS 4
- Framer Motion 12 (import motion, useReducedMotion)
- Lucide-react (import MessageCircle)

**Configuration**:
Import WHATSAPP_CONFIG from '@/lib/constants'
Generate URL: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

**Styling**:
- Use Tailwind classes for all styling
- Glassmorphism: backdrop-blur-md bg-[var(--neon-green)]
- Shadow: shadow-lg
- Hover: hover:shadow-[0_0_40px_rgba(0,255,159,0.8)]
- Focus: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] focus-visible:ring-offset-2
- Transition: transition-all duration-300

Return complete, production-ready component code with all imports.
File: components/ui/whatsapp-button.tsx
```

**Expected Output**: A complete TypeScript component file (~80-100 lines)

---

### Step 3: Integrate into Layout

**File**: `gym-landing-page/app/layout.tsx`

Add the import at the top:

```typescript
import WhatsAppButton from '@/components/ui/whatsapp-button';
```

Add the component before the closing `</body>` tag:

```typescript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <WhatsAppButton />  {/* Add this line */}
      </body>
    </html>
  );
}
```

---

### Step 4: Test Locally

```bash
# Start development server
cd gym-landing-page
npm run dev

# Open browser
# Visit: http://localhost:3000
```

**Test Checklist**:
- [ ] Button appears in bottom-right corner
- [ ] Button has neon green background
- [ ] Button shows white WhatsApp icon
- [ ] Button pulses continuously (subtle heartbeat)
- [ ] Button scales up on hover (desktop)
- [ ] Button has entrance animation (fade in + bounce)
- [ ] Clicking opens WhatsApp in new tab
- [ ] WhatsApp opens with pre-filled message
- [ ] Button is responsive (55px on mobile, 60px on desktop)
- [ ] Button doesn't overlap footer or navigation
- [ ] Button is keyboard accessible (Tab to focus, Enter to activate)
- [ ] Focus indicator is visible

---

### Step 5: Test on Mobile

**iOS Safari**:
```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
# or
hostname -I  # Linux

# Visit on iPhone: http://[YOUR_IP]:3000
```

**Android Chrome**:
```bash
# Same IP address as above
# Visit on Android: http://[YOUR_IP]:3000
```

**Mobile Test Checklist**:
- [ ] Button is 55px (easily tappable)
- [ ] Tapping opens WhatsApp app (not web)
- [ ] Pre-filled message appears correctly
- [ ] Button doesn't overlap with mobile browser UI
- [ ] Button is visible on all screen sizes (320px+)

---

### Step 6: Verify Accessibility

**Keyboard Navigation**:
1. Press Tab repeatedly until button is focused
2. Verify focus indicator is visible (ring around button)
3. Press Enter or Space to activate
4. Verify WhatsApp opens

**Screen Reader** (Optional):
1. Enable VoiceOver (Mac) or NVDA (Windows)
2. Navigate to button
3. Verify it announces: "Contact us on WhatsApp, link"

**Reduced Motion**:
1. Enable reduced motion in OS settings
2. Reload page
3. Verify animations are disabled (button appears instantly, no pulse)

---

### Step 7: Deploy

```bash
# Commit changes
git add .
git commit -m "Add WhatsApp floating button component

- Created WhatsAppButton component with Framer Motion animations
- Added WHATSAPP_CONFIG to constants
- Integrated into root layout
- Tested on desktop and mobile

Co-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>"

# Push to remote
git push origin 002-whatsapp-button

# Deploy to Vercel (if auto-deploy enabled)
# Or manually deploy via Vercel dashboard
```

---

## Configuration Updates

### Update Phone Number

**File**: `gym-landing-page/lib/constants.ts`

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: '923009876543', // Update this line
  message: 'Hi FitForge Gym! I visited your website...',
} as const;
```

### Update Message Template

**File**: `gym-landing-page/lib/constants.ts`

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: '923001234567',
  message: 'Your new message template here', // Update this line
} as const;
```

**Note**: Changes take effect immediately in development (hot reload). In production, requires rebuild and redeploy.

---

## Troubleshooting

### Issue 1: Button not appearing

**Symptoms**: No button visible on page

**Fixes**:
1. Check browser console for errors
2. Verify component is imported in `layout.tsx`
3. Verify `'use client'` directive at top of component file
4. Check z-index isn't being overridden by other elements

### Issue 2: WhatsApp not opening

**Symptoms**: Button clicks but nothing happens

**Fixes**:
1. Verify phone number format (no spaces, no + symbol)
2. Check browser console for blocked popup
3. Verify `target="_blank"` attribute is present
4. Test with different phone number

### Issue 3: Animations not working

**Symptoms**: Button appears but doesn't animate

**Fixes**:
1. Verify Framer Motion is installed: `npm list framer-motion`
2. Check `'use client'` directive is present
3. Verify motion.a is used (not regular <a>)
4. Check browser console for Framer Motion errors

### Issue 4: Button overlaps footer

**Symptoms**: Button covers footer content on mobile

**Fixes**:
1. Adjust bottom spacing: change `bottom-6` to `bottom-8` or `bottom-10`
2. Add responsive classes: `bottom-6 md:bottom-6 lg:bottom-8`
3. Check footer z-index isn't higher than button (should be <60)

### Issue 5: Message not pre-filled

**Symptoms**: WhatsApp opens but message is empty

**Fixes**:
1. Verify message is URL-encoded: `encodeURIComponent(message)`
2. Check for special characters in message (quotes, apostrophes)
3. Verify URL format: `https://wa.me/[PHONE]?text=[ENCODED_MESSAGE]`
4. Test with simple message first: "Hello"

---

## Performance Validation

### Lighthouse Audit

```bash
# Build production version
npm run build

# Start production server
npm run start

# Run Lighthouse in Chrome DevTools
# Target scores:
# - Performance: 95+ (should not decrease)
# - Accessibility: 100
# - Best Practices: 100
# - SEO: 100 (should not decrease)
```

### Animation Performance

```bash
# Open Chrome DevTools
# Go to Performance tab
# Record while scrolling and hovering button
# Verify: 60fps maintained, no frame drops
```

---

## Next Steps

After completing implementation:

1. **Create Pull Request**:
   - Title: "Add WhatsApp floating button"
   - Description: Reference spec.md and list changes
   - Request review from team

2. **User Acceptance Testing**:
   - Share staging URL with stakeholders
   - Verify phone number is correct
   - Test message template is appropriate
   - Confirm button position and styling

3. **Production Deployment**:
   - Merge to main branch
   - Deploy to production
   - Monitor for errors in first 24 hours
   - Track WhatsApp contact rate increase

4. **Analytics** (Optional - Future Enhancement):
   - Add click tracking with Google Analytics
   - Monitor conversion rate
   - A/B test different messages

---

## Resources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WhatsApp Click to Chat](https://faq.whatsapp.com/5913398998672934)

### Design References
- [Existing Button Component](../../gym-landing-page/components/ui/button.tsx)
- [Existing Animation Variants](../../gym-landing-page/animations/motion-variants.ts)
- [Design System Colors](../../gym-landing-page/app/globals.css)

### Testing Tools
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Mobile Simulator](https://www.browserstack.com/)

---

**Estimated Implementation Time**: 30-45 minutes  
**Difficulty**: Easy ⭐⭐☆☆☆  
**Dependencies**: None (all packages already installed)
