# Research: WhatsApp Floating Button

**Feature**: 002-whatsapp-button  
**Date**: 2026-04-15  
**Status**: Complete

## Research Questions & Decisions

### 1. WhatsApp URL Scheme Best Practices

**Question**: What's the correct URL format for opening WhatsApp with pre-filled messages across different platforms?

**Research Findings**:
- WhatsApp Web URL format: `https://wa.me/[PHONE]?text=[MESSAGE]`
- Phone number must be in international format without + or spaces (e.g., 923001234567)
- Message must be URL-encoded using `encodeURIComponent()`
- Mobile devices automatically open WhatsApp app if installed
- Desktop opens WhatsApp Web in browser
- `target="_blank"` ensures new tab/window
- `rel="noopener noreferrer"` required for security

**Decision**: Use `https://wa.me/` URL scheme with proper encoding
```typescript
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
```

**Rationale**: Official WhatsApp URL scheme, works universally across all platforms, no API key required, instant setup.

**Alternatives Considered**:
- WhatsApp Business API: Requires approval, complex setup, overkill for simple contact button
- Custom deep links: Platform-specific, more complex, no advantage over wa.me
- Click-to-chat widget: Third-party dependency, slower, not needed

---

### 2. Framer Motion Continuous Animation Performance

**Question**: How to implement a continuous pulse animation that doesn't impact performance?

**Research Findings**:
- Framer Motion's `animate` prop with array values creates keyframe animations
- `repeat: Infinity` enables continuous animation
- GPU-accelerated properties: `scale`, `opacity`, `transform`
- Avoid animating: `width`, `height`, `margin`, `padding` (causes reflow)
- `ease: 'easeInOut'` provides smooth heartbeat effect
- Animations automatically pause when element is off-screen (Framer Motion optimization)

**Decision**: Use scale-based pulse animation with Framer Motion
```typescript
const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};
```

**Rationale**: Scale is GPU-accelerated, Framer Motion handles optimization automatically, matches existing animation patterns in the project.

**Alternatives Considered**:
- CSS animations: Less flexible, harder to coordinate with other Framer Motion animations
- Opacity pulse: Less noticeable, doesn't create "breathing" effect
- Larger scale range (1.1+): Too aggressive, distracting

---

### 3. Fixed Position Button Z-Index Management

**Question**: What z-index value ensures the button appears above all content without conflicts?

**Research Findings**:
- Existing navbar uses z-50 (from navbar.tsx)
- Modal/overlay typically use z-40-50
- Tooltips use z-60-70 range
- Fixed elements need explicit z-index to avoid stacking context issues
- Higher z-index doesn't impact performance

**Decision**: Use z-index: 60
```css
.whatsapp-button {
  z-index: 60;
}
```

**Rationale**: Above navbar (50) and modals (40-50), below tooltips (70), ensures always accessible, matches project's Z_INDEX pattern.

**Alternatives Considered**:
- z-50: Would be same level as navbar, potential conflicts
- z-70: Unnecessarily high, reserved for tooltips
- z-9999: Anti-pattern, makes future z-index management difficult

---

### 4. Progressive Enhancement Without JavaScript

**Question**: How to ensure the button works as a link when JavaScript is disabled?

**Research Findings**:
- Framer Motion wraps elements but preserves underlying HTML
- `motion.a` renders as `<a>` tag in DOM
- Link functionality works without JavaScript
- Animations gracefully degrade (no animation, but link still works)
- `href` attribute is always present and functional

**Decision**: Use `motion.a` wrapper around standard anchor tag
```typescript
<motion.a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  // Framer Motion animation props
>
```

**Rationale**: Progressive enhancement, accessible without JavaScript, follows web standards, maintains functionality in all scenarios.

**Alternatives Considered**:
- Button with onClick: Doesn't work without JavaScript
- Conditional rendering: More complex, unnecessary
- NoScript fallback: Not needed with motion.a approach

---

### 5. Mobile Safe Area Handling

**Question**: How to ensure the button doesn't overlap with mobile browser UI or notches?

**Research Findings**:
- iOS Safari has bottom toolbar that can overlap fixed elements
- Android Chrome has similar behavior
- CSS `env(safe-area-inset-bottom)` provides safe area padding
- Tailwind's `bottom-6` (24px) is usually sufficient
- Modern browsers handle safe areas automatically for fixed elements

**Decision**: Use Tailwind's `bottom-6 right-6` with responsive adjustments
```typescript
className="fixed bottom-6 right-6 md:bottom-6 md:right-6"
```

**Rationale**: 24px provides adequate clearance on most devices, Tailwind responsive utilities handle different screen sizes, no need for complex safe-area calculations.

**Alternatives Considered**:
- CSS safe-area-inset: Overkill for this use case, 24px is sufficient
- Larger bottom spacing: Would push button too far up on desktop
- Dynamic positioning: Unnecessary complexity

---

### 6. Icon Selection and Styling

**Question**: Which icon best represents WhatsApp while maintaining design consistency?

**Research Findings**:
- Lucide-react already installed (zero new dependencies)
- MessageCircle icon is recognizable and clean
- Phone icon is alternative but less specific
- Custom WhatsApp SVG would be most accurate but adds complexity
- White icon on neon green background provides excellent contrast

**Decision**: Use Lucide-react MessageCircle icon
```typescript
import { MessageCircle } from 'lucide-react';
<MessageCircle className="w-7 h-7 text-white" />
```

**Rationale**: Already available, recognizable, matches existing icon style (used in contact section), tree-shakeable, zero bundle size increase.

**Alternatives Considered**:
- Custom WhatsApp SVG: More accurate branding but adds file, not worth the complexity
- Phone icon: Less specific, could be confused with phone call
- Emoji: Poor cross-platform consistency, not professional

---

### 7. Animation Timing and Reduced Motion

**Question**: How to respect user's motion preferences while maintaining visual appeal?

**Research Findings**:
- `prefers-reduced-motion` media query detects user preference
- Framer Motion respects this automatically when using `useReducedMotion` hook
- Can also use CSS media query: `@media (prefers-reduced-motion: reduce)`
- Animations should be disabled entirely, not just slowed down
- Static button is still functional and accessible

**Decision**: Use Framer Motion's built-in reduced motion support
```typescript
const shouldReduceMotion = useReducedMotion();

<motion.a
  animate={shouldReduceMotion ? {} : pulseVariants.animate}
  // Other props
>
```

**Rationale**: Framer Motion handles this automatically, respects user preferences, maintains accessibility, follows WCAG guidelines.

**Alternatives Considered**:
- CSS media query only: Doesn't work with Framer Motion animations
- Ignore reduced motion: Accessibility violation, poor UX
- Slow down animations: Not recommended, should disable entirely

---

## Best Practices Summary

### Framer Motion Animations
- Use GPU-accelerated properties only (scale, opacity, transform)
- Implement continuous animations with `repeat: Infinity`
- Respect `prefers-reduced-motion` with `useReducedMotion` hook
- Use variants for reusable animation patterns
- Keep animation durations reasonable (2s for pulse, 0.3s for hover)

### WhatsApp Integration
- Use official `wa.me` URL scheme
- Always URL-encode message text
- Use international phone format without + or spaces
- Open in new tab with `target="_blank"`
- Include `rel="noopener noreferrer"` for security

### Fixed Position Elements
- Use explicit z-index to control stacking
- Provide adequate spacing from edges (24px minimum)
- Test on various mobile devices for safe area handling
- Ensure doesn't overlap with footer or navigation

### Accessibility
- Use semantic HTML (anchor tag for links)
- Provide descriptive aria-label
- Ensure keyboard accessibility (focusable, Enter/Space activation)
- Show visible focus indicator
- Respect reduced motion preferences
- Maintain sufficient color contrast

### Performance
- No external dependencies (use existing packages)
- GPU-accelerated animations only
- Fixed position (no reflow on scroll)
- Minimal component size (<100 lines)
- Tree-shaken icon imports

## Technology Stack Confirmation

**Approved Stack** (from Constitution Principle VI):
- ✅ Framework: Next.js 16 (App Router)
- ✅ Language: TypeScript (strict mode)
- ✅ Styling: Tailwind CSS 4
- ✅ Animation: Framer Motion 12
- ✅ Icons: Lucide-react

**No New Dependencies Required**: All technologies already installed in project

## Unresolved Questions

**None** - All technical decisions finalized and documented above.

## References

- [WhatsApp Click to Chat](https://faq.whatsapp.com/5913398998672934)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WCAG 2.1 Animation Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)
