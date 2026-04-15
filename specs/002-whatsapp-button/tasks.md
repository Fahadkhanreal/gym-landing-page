---
description: "Task list for WhatsApp Floating Button implementation"
---

# Tasks: WhatsApp Floating Button

**Input**: Design documents from `/specs/002-whatsapp-button/`  
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Tests are NOT requested in the feature specification. This implementation focuses on component development and manual testing.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Path Conventions

- Next.js 16 App Router structure at repository root: `gym-landing-page/`
- Paths: `app/`, `components/ui/`, `lib/`, `animations/`

---

## Phase 1: Setup (Verification)

**Purpose**: Verify all dependencies are installed and project is ready

- [x] T001 Verify all dependencies are installed (Next.js 16, Framer Motion 12, Lucide-react, Tailwind CSS 4)
- [x] T002 Verify feature branch 002-whatsapp-button is checked out
- [x] T003 Verify existing design system colors in gym-landing-page/app/globals.css (--neon-green, --background)

**Checkpoint**: All dependencies verified, no installation needed (zero new dependencies)

---

## Phase 2: Foundational (Configuration)

**Purpose**: Setup configuration that the component will use

- [x] T004 Add WHATSAPP_CONFIG constant to gym-landing-page/lib/constants.ts with phoneNumber and message fields
- [x] T005 Update WHATSAPP_CONFIG with actual gym owner's WhatsApp number (international format: 92XXXXXXXXXX)

**Checkpoint**: Configuration ready for component to import

---

## Phase 3: User Story 1 - Core WhatsApp Button (Priority: P1) 🎯 MVP

**Goal**: Create functional WhatsApp button with animations that opens WhatsApp with pre-filled message

**Independent Test**: Click button on any page, verify WhatsApp opens in new tab with correct pre-filled message, verify animations are smooth

### Implementation for User Story 1

**Component Creation**

- [x] T006 [US1] Create WhatsAppButton component file at gym-landing-page/components/ui/whatsapp-button.tsx with 'use client' directive
- [x] T007 [US1] Import required dependencies in WhatsAppButton: motion and useReducedMotion from framer-motion, MessageCircle from lucide-react, WHATSAPP_CONFIG from @/lib/constants
- [x] T008 [US1] Implement generateWhatsAppUrl helper function that URL-encodes message and returns https://wa.me/[PHONE]?text=[ENCODED_MESSAGE]
- [x] T009 [US1] Create WhatsAppButtonProps interface with optional className property

**Animation Variants**

- [x] T010 [US1] Define pulse animation variant (scale [1, 1.05, 1], duration 2s, repeat Infinity, ease easeInOut)
- [x] T011 [US1] Define entrance animation variant (initial: opacity 0, y 100, scale 0.8; visible: opacity 1, y 0, scale 1; spring transition with 0.5s delay)
- [x] T012 [US1] Implement useReducedMotion hook to disable animations when user prefers reduced motion

**Component Structure**

- [x] T013 [US1] Create motion.a wrapper with href pointing to WhatsApp URL, target="_blank", rel="noopener noreferrer"
- [x] T014 [US1] Apply Tailwind classes for fixed positioning (fixed bottom-6 right-6), z-index (z-[60]), size (w-[55px] h-[55px] md:w-[60px] md:h-[60px])
- [x] T015 [US1] Apply Tailwind classes for styling: bg-[var(--neon-green)], rounded-full, shadow-lg, backdrop-blur-md
- [x] T016 [US1] Apply Tailwind classes for hover effects: hover:shadow-[0_0_40px_rgba(0,255,159,0.8)], transition-all duration-300
- [x] T017 [US1] Apply Tailwind classes for focus: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] focus-visible:ring-offset-2
- [x] T018 [US1] Add MessageCircle icon with className="w-7 h-7 text-white"
- [x] T019 [US1] Add aria-label="Contact us on WhatsApp" for accessibility
- [x] T020 [US1] Apply Framer Motion animations: initial="hidden", animate="visible", variants for entrance, whileHover for scale effect

**Integration**

- [x] T021 [US1] Import WhatsAppButton component in gym-landing-page/app/layout.tsx
- [x] T022 [US1] Add <WhatsAppButton /> component before closing </body> tag in layout.tsx

**Desktop Testing**

- [ ] T023 [US1] Test button appears in bottom-right corner on desktop (1920px viewport)
- [ ] T024 [US1] Test button has neon green background and white icon
- [ ] T025 [US1] Test continuous pulse animation is visible and smooth
- [ ] T026 [US1] Test hover effect: button scales to 1.15x and shows enhanced glow
- [ ] T027 [US1] Test entrance animation: button fades in with bounce effect on page load
- [ ] T028 [US1] Test clicking button opens WhatsApp Web in new tab
- [ ] T029 [US1] Test WhatsApp opens with correct pre-filled message
- [ ] T030 [US1] Test keyboard navigation: Tab to focus button, Enter to activate
- [ ] T031 [US1] Test focus indicator is visible when button is focused

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently (WhatsApp button works on desktop with all animations)

---

## Phase 4: User Story 2 - Mobile-First Experience (Priority: P1)

**Goal**: Ensure button is fully responsive and optimized for mobile devices

**Independent Test**: Access site on mobile devices (320px-768px), verify button is tappable, correctly sized, and doesn't overlap content

### Mobile Validation Tasks

- [ ] T032 [US2] Test button on mobile viewport (375px width): verify size is 55px and easily tappable
- [ ] T033 [US2] Test button on small mobile (320px width): verify button remains visible and doesn't overflow
- [ ] T034 [US2] Test button on tablet (768px width): verify button scales to 60px (desktop size)
- [ ] T035 [US2] Test button doesn't overlap with footer on mobile devices
- [ ] T036 [US2] Test button doesn't overlap with navbar on mobile devices
- [ ] T037 [US2] Test button position on mobile landscape mode
- [ ] T038 [US2] Test tapping button on mobile opens WhatsApp app (not web) if installed
- [ ] T039 [US2] Test pre-filled message appears correctly in WhatsApp mobile app
- [ ] T040 [US2] Test button is within safe areas on iOS devices (no notch overlap)
- [ ] T041 [US2] Test button is within safe areas on Android devices (no navigation bar overlap)

**Checkpoint**: Button verified responsive and functional on all mobile devices

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, accessibility, and performance checks

**Accessibility Validation**

- [ ] T042 [P] Test with WAVE or axe DevTools: verify zero accessibility violations
- [ ] T043 [P] Test keyboard navigation: verify all interactive states work with keyboard only
- [ ] T044 [P] Test with screen reader (NVDA/VoiceOver): verify button announces correctly as "Contact us on WhatsApp, link"
- [ ] T045 [P] Test with reduced motion enabled: verify animations are disabled, button appears instantly
- [ ] T046 [P] Verify color contrast meets WCAG AA (neon green on dark background)
- [ ] T047 [P] Test without JavaScript: verify button appears as regular link and opens WhatsApp

**Performance Validation**

- [ ] T048 [P] Run Lighthouse audit on desktop: verify Performance score doesn't decrease (should remain 95+)
- [ ] T049 [P] Run Lighthouse audit on mobile: verify Performance score doesn't decrease (should remain 90+)
- [ ] T050 [P] Verify button loads instantly (no external dependencies)
- [ ] T051 [P] Test animation performance: verify 60fps maintained using Chrome DevTools Performance tab
- [ ] T052 [P] Verify Core Web Vitals not impacted: check FCP, LCP, CLS remain unchanged

**Cross-Browser Testing**

- [ ] T053 [P] Test on Chrome (desktop and mobile)
- [ ] T054 [P] Test on Firefox (desktop)
- [ ] T055 [P] Test on Safari (desktop and iOS)
- [ ] T056 [P] Test on Edge (desktop)

**Final Validation**

- [ ] T057 [P] Verify button appears on all pages (home, features, pricing, trainers, testimonials, contact)
- [ ] T058 [P] Verify button z-index (60) doesn't conflict with other fixed elements
- [ ] T059 [P] Verify WhatsApp URL format is correct: https://wa.me/[PHONE]?text=[ENCODED_MESSAGE]
- [ ] T060 [P] Verify message is properly URL-encoded (spaces, special characters)
- [ ] T061 [P] Test clicking button multiple times: verify each click opens new WhatsApp tab
- [x] T062 [P] Verify TypeScript compiles without errors: run npx tsc --noEmit
- [x] T063 [P] Run ESLint: verify no linting errors in whatsapp-button.tsx

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Story 1 (Phase 3)**: Depends on Foundational phase completion - Can proceed independently
- **User Story 2 (Phase 4)**: Depends on User Story 1 completion - Validates mobile experience
- **Polish (Phase 5)**: Depends on User Stories 1 and 2 completion

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Depends on User Story 1 - Validates mobile optimization of the core button

### Within Each User Story

**User Story 1 (Core WhatsApp Button)**:
- Configuration (T004-T005) FIRST
- Component creation (T006-T009) SECOND
- Animation variants (T010-T012) can be done in parallel with component structure
- Component structure (T013-T020) THIRD
- Integration (T021-T022) FOURTH
- Desktop testing (T023-T031) LAST

**User Story 2 (Mobile-First Experience)**:
- All mobile validation tasks (T032-T041) can be done in parallel after US1 complete

### Parallel Opportunities

**Setup Phase (Phase 1)**:
- T001, T002, T003 can run in parallel (verification tasks)

**Foundational Phase (Phase 2)**:
- T004 and T005 must be sequential (T005 updates T004's work)

**User Story 1 (Phase 3)**:
- T010-T012 (animation variants) can be done in parallel with T013-T020 (component structure) if variants are defined inline
- T023-T031 (desktop testing) can be done in parallel after integration complete

**User Story 2 (Phase 4)**:
- T032-T041 (mobile validation) can all be done in parallel

**Polish Phase (Phase 5)**:
- T042-T063 can all be done in parallel (independent validation tasks)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational (T004-T005)
3. Complete Phase 3: User Story 1 (T006-T031)
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Click button on desktop
   - Verify WhatsApp opens with pre-filled message
   - Verify all animations work smoothly
   - Test keyboard navigation
5. Deploy to staging for review

**MVP Delivers**: Functional WhatsApp button on all pages with animations, opens WhatsApp with pre-filled message. Works on desktop.

### Incremental Delivery

1. Complete Setup + Foundational → Configuration ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP! 🎯)
3. Add User Story 2 → Test mobile experience → Deploy/Demo (Mobile optimized)
4. Complete Polish phase → Final validation → Production deployment

Each increment adds value without breaking previous functionality.

### Single Developer Strategy

Since this is a simple single-component feature:

1. Complete Setup + Foundational (T001-T005) - 5 minutes
2. Create component (T006-T020) - 20 minutes
3. Integrate and test desktop (T021-T031) - 10 minutes
4. Test mobile (T032-T041) - 10 minutes
5. Final validation (T042-T063) - 15 minutes

**Total Estimated Time**: 60 minutes (1 hour)

---

## Notes

- [P] tasks = different files or independent validation, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after completing each phase
- Stop at any checkpoint to validate story independently
- Tests are NOT included (not requested in spec)
- Focus on component implementation and manual testing
- All tasks follow strict checklist format: `- [ ] [ID] [P?] [Story?] Description with file path`

---

## Task Summary

**Total Tasks**: 63
- Setup: 3 tasks
- Foundational: 2 tasks
- User Story 1: 26 tasks (Configuration, Component, Animations, Integration, Desktop Testing)
- User Story 2: 10 tasks (Mobile validation)
- Polish: 22 tasks (Accessibility, Performance, Cross-browser, Final validation)

**Parallel Opportunities**: 35+ tasks can run in parallel (marked with [P])

**MVP Scope**: Phases 1-3 (31 tasks) deliver functional WhatsApp button on desktop

**Independent Test Criteria**:
- US1: Click button on desktop, verify WhatsApp opens with pre-filled message, verify animations smooth
- US2: Test on mobile devices, verify button tappable and correctly sized, verify no content overlap

**Estimated Timeline**: 1 hour for full implementation (single developer)

**Complexity**: Low - Single component, no new dependencies, straightforward implementation
