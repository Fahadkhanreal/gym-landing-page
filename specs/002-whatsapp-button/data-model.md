# Data Model: WhatsApp Floating Button

**Feature**: 002-whatsapp-button  
**Date**: 2026-04-15  
**Purpose**: Define data structures for WhatsApp button component

## Overview

This document defines the TypeScript interfaces and data structures for the WhatsApp floating button component. The component is stateless and configuration-driven, with all data stored in constants.

## Core Entities

### WhatsApp Button Component

**Purpose**: Floating button that opens WhatsApp with pre-filled message

```typescript
interface WhatsAppButtonProps {
  /**
   * Optional additional CSS classes for customization
   */
  className?: string;
}
```

**Data Source**: Component receives no dynamic data - all configuration from constants

**Validation Rules**:
- `className`: Optional, string type, used for additional Tailwind classes

**Example Usage**:
```typescript
<WhatsAppButton className="custom-class" />
// or
<WhatsAppButton />
```

---

### WhatsApp Configuration

**Purpose**: Configuration object for phone number and message template

```typescript
interface WhatsAppConfig {
  /**
   * WhatsApp phone number in international format
   * Format: Country code + number without spaces or special characters
   * Example: '923001234567' for Pakistan
   */
  phoneNumber: string;
  
  /**
   * Pre-filled message that appears in WhatsApp chat
   * Will be automatically URL-encoded by the component
   */
  message: string;
}
```

**Data Source**: Static configuration in `lib/constants.ts`

**Validation Rules**:
- `phoneNumber`: Required, must be digits only, international format (no + or spaces)
- `message`: Required, string, will be URL-encoded automatically

**Example Data**:
```typescript
export const WHATSAPP_CONFIG: WhatsAppConfig = {
  phoneNumber: '923001234567',
  message: 'Hi FitForge Gym! I visited your website and I\'m interested in membership. Please tell me more about your plans and free trial.',
};
```

---

### Animation Variants

**Purpose**: Framer Motion animation configurations

```typescript
import { Variants } from 'framer-motion';

interface WhatsAppAnimations {
  pulse: Variants;
  entrance: Variants;
  hover: Variants;
}
```

**Pulse Animation** (Continuous heartbeat):
```typescript
const pulse: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
```

**Entrance Animation** (Fade in + bounce):
```typescript
const entrance: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.5,
    },
  },
};
```

**Hover Animation** (Scale + glow):
```typescript
const hover: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 0 20px rgba(0, 255, 159, 0.4)',
  },
  hover: {
    scale: 1.15,
    boxShadow: '0 0 40px rgba(0, 255, 159, 0.8)',
    transition: {
      duration: 0.3,
    },
  },
};
```

---

## Shared Types

### URL Generation

```typescript
/**
 * Generates WhatsApp URL with pre-filled message
 * @param config - WhatsApp configuration object
 * @returns Formatted WhatsApp URL
 */
function generateWhatsAppUrl(config: WhatsAppConfig): string {
  const { phoneNumber, message } = config;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
```

**Input**: WhatsAppConfig object  
**Output**: String (WhatsApp URL)  
**Example**:
```typescript
const url = generateWhatsAppUrl({
  phoneNumber: '923001234567',
  message: 'Hi FitForge Gym!'
});
// Returns: 'https://wa.me/923001234567?text=Hi%20FitForge%20Gym!'
```

---

## Data Flow Diagram

```
Constants (lib/constants.ts)
       ↓
WHATSAPP_CONFIG
       ↓
WhatsAppButton Component
       ↓
generateWhatsAppUrl()
       ↓
WhatsApp URL
       ↓
User clicks button
       ↓
Opens WhatsApp Web/App
```

**Flow Description**:
1. Configuration loaded from constants on component mount
2. Component generates WhatsApp URL using helper function
3. URL includes encoded message and phone number
4. User clicks button → opens WhatsApp in new tab
5. No state changes, no API calls, no data persistence

---

## Type Safety Strategy

1. **Strict TypeScript**: All types explicitly defined, no `any`
2. **Const Assertions**: Use `as const` for WHATSAPP_CONFIG to ensure immutability
3. **Type Inference**: Component props use explicit interface
4. **Validation**: Phone number format validated at build time (TypeScript)
5. **URL Encoding**: Automatic via `encodeURIComponent()` - no manual encoding needed

---

## Component State

**State Management**: None required

The component is **stateless** and **pure**:
- No useState hooks
- No useEffect hooks
- No context consumption
- No external data fetching
- Configuration is static and immutable

**Rationale**: 
- Simple component with single responsibility
- No dynamic behavior requiring state
- Configuration changes require code update (intentional)
- Improves performance (no re-renders)

---

## Configuration Updates

**How to Update Phone Number**:
```typescript
// In lib/constants.ts
export const WHATSAPP_CONFIG = {
  phoneNumber: '923009876543', // Update here
  message: 'Hi FitForge Gym! I visited your website...',
} as const;
```

**How to Update Message**:
```typescript
// In lib/constants.ts
export const WHATSAPP_CONFIG = {
  phoneNumber: '923001234567',
  message: 'New message template here', // Update here
} as const;
```

**No restart required**: Next.js hot reload will update the component automatically in development.

---

## Future Enhancements

**Phase 2** (If needed):
- Add `businessHours` field to show availability status
- Add `department` field for routing to different numbers
- Add `language` field for multi-language message templates
- Add analytics tracking (click events)

**Phase 3** (Advanced):
- Make configuration editable via admin panel
- Add A/B testing for different messages
- Add conversation history tracking
- Integrate with CRM system

**Current Scope**: Phase 1 only - static configuration, single phone number, single message template.

---

## References

- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- Framer Motion Types: https://www.framer.com/motion/
- WhatsApp URL Scheme: https://faq.whatsapp.com/5913398998672934
