---
description: "Task list for FitForge Gym Landing Page implementation"
---

# Tasks: FitForge Gym Landing Page

**Input**: Design documents from `/specs/001-gym-landing-page/`  
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Tests are NOT requested in the feature specification. This implementation focuses on component development and manual testing.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Path Conventions

- Next.js 15 App Router structure at repository root
- Paths: `app/`, `components/`, `sections/`, `animations/`, `lib/`, `types/`, `public/`

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize Next.js 15 project with all dependencies and base configuration

- [ ] T001 Create Next.js 15 project with TypeScript, Tailwind CSS, and App Router in gym-landing-page/ directory
- [ ] T002 Install core dependencies: framer-motion, lucide-react, react-hook-form, zod, @hookform/resolvers
- [ ] T003 Configure TypeScript strict mode in tsconfig.json with all strict flags enabled
- [ ] T004 Configure Tailwind CSS in tailwind.config.ts with custom colors (neon green #00FF9F, neon red #FF2D55, background #0A0A0A, surface #1F1F1F)
- [ ] T005 Setup global styles in app/globals.css with glassmorphism utilities (.glass, .glass-dark), neon glow effects, and smooth scrolling
- [ ] T006 Configure Inter font in app/layout.tsx with proper metadata (title, description, OpenGraph)
- [ ] T007 [P] Create folder structure: components/ui, components/layout, components/shared, sections, animations, lib, types, public/videos, public/images/trainers, public/images/testimonials
- [ ] T008 [P] Add placeholder video to public/videos/hero-background.mp4 (or use external URL)
- [ ] T009 [P] Add placeholder images to public/images/trainers/ (4 images) and public/images/testimonials/ (3 images)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T010 Create animation variants in animations/motion-variants.ts (fadeInUp, fadeInDown, staggerContainer, scaleOnHover, neonGlow)
- [ ] T011 Create useScrollAnimation custom hook in animations/use-scroll-animation.ts using Framer Motion useInView
- [ ] T012 [P] Create Button component in components/ui/button.tsx with variants (primary, secondary, outline) and neon glow hover effects
- [ ] T013 [P] Create Card component in components/ui/card.tsx with glassmorphism and hover lift effects
- [ ] T014 [P] Create Input component in components/ui/input.tsx with validation error display and neon focus border
- [ ] T015 [P] Create type definitions in types/section.types.ts for common section props
- [ ] T016 [P] Create utility functions in lib/utils.ts (cn for className merging, formatPrice, etc.)
- [ ] T017 [P] Create constants in lib/constants.ts (colors, animation durations, breakpoints)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - First-Time Visitor Exploration (Priority: P1) 🎯 MVP

**Goal**: Enable visitors to explore all gym information (hero, features, pricing, trainers, testimonials) and understand value proposition

**Independent Test**: Navigate through landing page from hero to testimonials, verify all sections display correctly with animations, responsive on mobile/tablet/desktop

### Implementation for User Story 1

**Hero Section (Above Fold - Highest Priority)**

- [ ] T018 [US1] Create Hero section in sections/hero.tsx with video background, dark overlay, glassmorphism content card
- [ ] T019 [US1] Implement Hero headline "Transform Your Body. Forge Your Future." with neon green accent and staggered text reveal animation
- [ ] T020 [US1] Add Hero subheadline and two CTA buttons (Join Now - primary neon green, Watch Experience - secondary outline)
- [ ] T021 [US1] Implement Hero video parallax effect on scroll using useScroll and useTransform
- [ ] T022 [US1] Add Hero scroll indicator at bottom with pulsing animation
- [ ] T023 [US1] Implement Hero mobile fallback: hide video, show static background image via CSS media query

**Navigation (Required for Page Navigation)**

- [ ] T024 [US1] Create Navbar component in components/layout/navbar.tsx with logo, navigation links, and Join Now CTA
- [ ] T025 [US1] Implement Navbar glassmorphism effect that appears on scroll (transparent at top, blurred when scrolled)
- [ ] T026 [US1] Add Navbar mobile hamburger menu with Framer Motion slide-in animation
- [ ] T027 [US1] Implement Navbar smooth scroll to sections on link click
- [ ] T028 [US1] Add Navbar active section highlighting based on scroll position

**Features Section**

- [ ] T029 [P] [US1] Create Feature type definition in types/section.types.ts
- [ ] T030 [US1] Create Features section in sections/features.tsx with title "Why Choose FitForge" and subtitle
- [ ] T031 [US1] Add 3 feature cards: Premium Equipment (Dumbbell icon), Expert Trainers (Award icon), Signature Programs (Trophy icon)
- [ ] T032 [US1] Implement Features scroll-triggered stagger animation (cards appear one by one)
- [ ] T033 [US1] Add Features card hover effects (scale 1.05, neon border glow)
- [ ] T034 [US1] Implement Features responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)

**Pricing Section**

- [ ] T035 [P] [US1] Create PricingPlan type definition in types/pricing.types.ts
- [ ] T036 [US1] Create Pricing section in sections/pricing.tsx with title "Choose Your Membership" and subtitle
- [ ] T037 [US1] Implement Pricing monthly/yearly toggle with "Save 25%" badge using useState
- [ ] T038 [US1] Add 3 pricing cards: Basic (Rs. 4,999/month), Pro (Rs. 8,999/month - highlighted), Elite (Rs. 14,999/month)
- [ ] T039 [US1] Implement Pricing price counter animation when toggle switches using AnimatePresence
- [ ] T040 [US1] Add Pricing "Most Popular" ribbon to Pro card with neon glow effect
- [ ] T041 [US1] Implement Pricing card hover effects and responsive layout

**Trainers Section**

- [ ] T042 [P] [US1] Create Trainer type definition in types/trainer.types.ts
- [ ] T043 [US1] Create Trainers section in sections/trainers.tsx with title "Meet Our Elite Trainers" and subtitle
- [ ] T044 [US1] Add 4 trainer cards: Ahmed Khan (Strength), Sara Malik (HIIT), Usman Raza (Transformation), Fatima Noor (Yoga)
- [ ] T045 [US1] Implement Trainers card hover effects (lift, image zoom, neon glow)
- [ ] T046 [US1] Add Trainers social media links (Instagram, LinkedIn) with hover color change to neon green
- [ ] T047 [US1] Implement Trainers responsive layout (horizontal scroll mobile, 2 columns tablet, 4 columns desktop)

**Testimonials Section**

- [ ] T048 [P] [US1] Create Testimonial type definition in types/testimonial.types.ts
- [ ] T049 [US1] Create Testimonials section in sections/testimonials.tsx with title "Real Results, Real People" and subtitle
- [ ] T050 [US1] Add 3 testimonial cards with client photos, quotes, names, transformation stats, and 5-star ratings
- [ ] T051 [US1] Implement Testimonials carousel with auto-play (5 second interval) using useState and useEffect
- [ ] T052 [US1] Add Testimonials manual navigation (prev/next buttons, dot indicators)
- [ ] T053 [US1] Implement Testimonials drag support using Framer Motion drag="x"
- [ ] T054 [US1] Add Testimonials pause on hover functionality

**Footer**

- [ ] T055 [US1] Create Footer component in components/layout/footer.tsx with logo, tagline, quick links
- [ ] T056 [US1] Add Footer social media icons (Instagram, Facebook, YouTube) with neon hover effects
- [ ] T057 [US1] Add Footer copyright notice "© 2026 FitForge Gym. Made with passion for fitness."

**Page Integration**

- [ ] T058 [US1] Update app/page.tsx to import and render all sections in order: Hero, Features, Pricing, Trainers, Testimonials
- [ ] T059 [US1] Add Navbar and Footer to app/page.tsx layout
- [ ] T060 [US1] Verify all sections have proper spacing and scroll smoothly

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently (complete landing page with all informational sections)

---

## Phase 4: User Story 2 - Membership Inquiry Submission (Priority: P2)

**Goal**: Enable visitors to submit contact inquiries with form validation

**Independent Test**: Fill out and submit contact form with valid/invalid data, verify validation errors and success message

### Implementation for User Story 2

- [ ] T061 [P] [US2] Create ContactFormData type and Zod schema in types/section.types.ts (fullName, email, phone, message, interest)
- [ ] T062 [US2] Create Contact section in sections/contact.tsx with title "Ready to Transform?" and subtitle
- [ ] T063 [US2] Implement Contact form using React Hook Form with Zod validation (name min 2 chars, email format, phone 11 digits)
- [ ] T064 [US2] Add Contact form fields: Full Name, Email, Phone, Message (optional), Interest dropdown (Free Trial / Membership Inquiry)
- [ ] T065 [US2] Implement Contact form validation error messages with neon red color
- [ ] T066 [US2] Add Contact form submit handler that logs to console and shows success message
- [ ] T067 [US2] Implement Contact success message animation (fade in, scale up) using Framer Motion
- [ ] T068 [US2] Add Contact embedded Google Map with placeholder Karachi location
- [ ] T069 [US2] Add Contact info display (phone, email, address) next to form
- [ ] T070 [US2] Implement Contact responsive layout (stacked mobile, split desktop with form left 60% and map right 40%)
- [ ] T071 [US2] Update app/page.tsx to add Contact section before Footer

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently (complete landing page with contact form)

---

## Phase 5: User Story 3 - Mobile Experience (Priority: P1) ✅ Cross-Cutting

**Goal**: Ensure all sections are fully responsive and functional on mobile devices

**Independent Test**: Access site on mobile devices (320px-768px), verify all sections readable, buttons tappable, layouts adapt properly

**Note**: Mobile responsiveness is built into each component during implementation. This phase validates the complete mobile experience.

### Mobile Validation Tasks

- [ ] T072 [US3] Test Hero section on mobile: verify video fallback to static image, stacked CTAs, readable text without zoom
- [ ] T073 [US3] Test Navbar on mobile: verify hamburger menu opens/closes, links work, smooth scroll functions
- [ ] T074 [US3] Test Features section on mobile: verify single column layout, cards stack vertically, icons and text readable
- [ ] T075 [US3] Test Pricing section on mobile: verify toggle works, cards stack vertically, prices readable, features list clear
- [ ] T076 [US3] Test Trainers section on mobile: verify horizontal scroll works, swipe gestures smooth, cards snap properly
- [ ] T077 [US3] Test Testimonials section on mobile: verify carousel swipe works, auto-play functions, controls accessible
- [ ] T078 [US3] Test Contact section on mobile: verify form stacks above map, inputs tappable, keyboard doesn't obscure fields
- [ ] T079 [US3] Test Footer on mobile: verify links stack vertically, social icons tappable, text readable
- [ ] T080 [US3] Verify no horizontal scrolling on any mobile viewport (320px-768px)
- [ ] T081 [US3] Test on real devices: iOS Safari and Android Chrome

**Checkpoint**: All sections verified responsive and functional on mobile devices

---

## Phase 6: User Story 4 - Visual Engagement and Animation (Priority: P2) ✅ Cross-Cutting

**Goal**: Ensure all animations are smooth, purposeful, and performant at 60fps

**Independent Test**: Scroll through entire page, interact with all elements, verify animations smooth and respect prefers-reduced-motion

**Note**: Animations are built into each component during implementation. This phase validates animation quality and performance.

### Animation Validation Tasks

- [ ] T082 [US4] Verify Hero animations: staggered text reveal on load, video parallax on scroll, button hover glow, scroll indicator pulse
- [ ] T083 [US4] Verify Features animations: scroll-triggered stagger (cards appear one by one), card hover lift and glow
- [ ] T084 [US4] Verify Pricing animations: price counter animation on toggle, card hover effects, "Most Popular" ribbon glow
- [ ] T085 [US4] Verify Trainers animations: scroll-triggered fade in, card hover lift and image zoom, social icon hover
- [ ] T086 [US4] Verify Testimonials animations: carousel slide transitions, auto-play smooth, drag gestures responsive
- [ ] T087 [US4] Verify Contact animations: form fade in on scroll, success message animation, input focus effects
- [ ] T088 [US4] Verify Navbar animations: backdrop blur fade in on scroll, mobile menu slide animation, link hover effects
- [ ] T089 [US4] Test animations at 60fps using browser DevTools Performance tab
- [ ] T090 [US4] Verify prefers-reduced-motion: all animations disabled when user has reduced motion preference
- [ ] T091 [US4] Test animation performance on mid-range devices (3-year-old phones/laptops)

**Checkpoint**: All animations verified smooth, performant, and accessible

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final optimizations, testing, and deployment preparation

- [ ] T092 [P] Run Lighthouse audit on desktop: verify Performance 95+, Accessibility 100, Best Practices 100, SEO 100
- [ ] T093 [P] Run Lighthouse audit on mobile: verify Performance 90+, Accessibility 100, Best Practices 100, SEO 100
- [ ] T094 [P] Optimize images: compress trainer and testimonial photos, ensure proper next/image configuration
- [ ] T095 [P] Optimize video: compress hero background video to <5MB, ensure proper format (MP4 H.264)
- [ ] T096 [P] Run accessibility audit with WAVE or axe DevTools: verify zero violations
- [ ] T097 [P] Test keyboard navigation: Tab through all interactive elements, verify focus visible, Enter/Space activate
- [ ] T098 [P] Test screen reader: verify all content announced correctly, ARIA labels present, heading hierarchy logical
- [ ] T099 [P] Verify color contrast: all text meets WCAG 2.1 AA minimum (4.5:1 ratio)
- [ ] T100 [P] Test cross-browser: Chrome, Firefox, Safari, Edge on desktop
- [ ] T101 [P] Test cross-device: iPhone (Safari), Android (Chrome), iPad, various screen sizes
- [ ] T102 [P] Verify TypeScript: run `npx tsc --noEmit` and fix any type errors
- [ ] T103 [P] Run ESLint: fix any linting errors or warnings
- [ ] T104 [P] Check bundle size: verify <200KB gzipped using `npm run build` and analyze
- [ ] T105 [P] Add README.md with project description, setup instructions, and deployment guide
- [ ] T106 Deploy to Vercel: connect GitHub repo, configure environment variables, deploy to production

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational phase completion - Can proceed independently
- **User Story 2 (Phase 4)**: Depends on Foundational phase completion - Can proceed independently (parallel with US1)
- **User Story 3 (Phase 5)**: Depends on US1 and US2 completion - Validates mobile experience
- **User Story 4 (Phase 6)**: Depends on US1 and US2 completion - Validates animations
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent from US1 (can run in parallel)
- **User Story 3 (P1)**: Cross-cutting validation - Depends on US1 and US2 being implemented
- **User Story 4 (P2)**: Cross-cutting validation - Depends on US1 and US2 being implemented

### Within Each User Story

**User Story 1 (First-Time Visitor Exploration)**:
- Hero section FIRST (above fold, highest priority)
- Navbar SECOND (needed for navigation)
- Features, Pricing, Trainers, Testimonials can proceed in parallel after Hero + Navbar
- Footer LAST
- Page integration after all sections complete

**User Story 2 (Membership Inquiry)**:
- Type definitions and Zod schema FIRST
- Contact form implementation
- Form validation and success handling
- Map and contact info display
- Responsive layout
- Page integration

### Parallel Opportunities

**Setup Phase (Phase 1)**:
- T007, T008, T009 can run in parallel (folder structure, placeholder assets)

**Foundational Phase (Phase 2)**:
- T012, T013, T014 can run in parallel (UI components)
- T015, T016, T017 can run in parallel (types, utils, constants)

**User Story 1 (Phase 3)**:
- After Hero + Navbar complete:
  - T029-T034 (Features) can run in parallel with T035-T041 (Pricing)
  - T042-T047 (Trainers) can run in parallel with T048-T054 (Testimonials)
  - T055-T057 (Footer) can run in parallel with above

**User Story 2 (Phase 4)**:
- T061 (types) must complete first
- T063-T070 can proceed sequentially (form implementation)

**Polish Phase (Phase 7)**:
- T092-T105 can all run in parallel (testing and optimization tasks)

---

## Parallel Example: User Story 1

```bash
# After Foundational phase completes, launch User Story 1 sections in parallel:

# Developer A: Hero + Navbar (sequential, highest priority)
Task: "T018-T023: Implement Hero section with video background and animations"
Task: "T024-T028: Implement Navbar with mobile menu and smooth scroll"

# Developer B: Features + Pricing (parallel)
Task: "T029-T034: Implement Features section with 3 cards and animations"
Task: "T035-T041: Implement Pricing section with toggle and 3 plans"

# Developer C: Trainers + Testimonials (parallel)
Task: "T042-T047: Implement Trainers section with 4 profiles"
Task: "T048-T054: Implement Testimonials carousel with auto-play"

# Developer D: Footer + Page Integration
Task: "T055-T057: Implement Footer with social links"
Task: "T058-T060: Integrate all sections into main page"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T009)
2. Complete Phase 2: Foundational (T010-T017) - CRITICAL, blocks all stories
3. Complete Phase 3: User Story 1 (T018-T060)
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Navigate through entire landing page
   - Verify all sections display correctly
   - Test responsiveness on mobile/tablet/desktop
   - Verify animations smooth
5. Deploy MVP to staging for review

**MVP Delivers**: Complete landing page with Hero, Features, Pricing, Trainers, Testimonials, Navigation, and Footer. Visitors can explore all gym information.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP! 🎯)
3. Add User Story 2 → Test independently → Deploy/Demo (Contact form added)
4. Validate User Story 3 → Test mobile experience → Deploy/Demo (Mobile optimized)
5. Validate User Story 4 → Test animations → Deploy/Demo (Animations polished)
6. Complete Polish phase → Final testing → Production deployment

Each increment adds value without breaking previous functionality.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together (T001-T017)
2. Once Foundational is done:
   - **Developer A**: Hero + Navbar (T018-T028) - Sequential, highest priority
   - **Developer B**: Features + Pricing (T029-T041) - Can start after Hero visible
   - **Developer C**: Trainers + Testimonials (T042-T054) - Can start after Hero visible
   - **Developer D**: Footer + Contact (T055-T071) - Can start after Hero visible
3. Integrate all sections (T058-T060, T071)
4. Validate mobile (T072-T081) and animations (T082-T091)
5. Polish and deploy (T092-T106)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Tests are NOT included (not requested in spec)
- Focus on component implementation and manual testing
- All tasks follow strict checklist format: `- [ ] [ID] [P?] [Story?] Description with file path`

---

## Task Summary

**Total Tasks**: 106
- Setup: 9 tasks
- Foundational: 8 tasks
- User Story 1: 43 tasks (Hero, Navbar, Features, Pricing, Trainers, Testimonials, Footer, Integration)
- User Story 2: 11 tasks (Contact form)
- User Story 3: 10 tasks (Mobile validation)
- User Story 4: 10 tasks (Animation validation)
- Polish: 15 tasks (Testing, optimization, deployment)

**Parallel Opportunities**: 35+ tasks can run in parallel (marked with [P])

**MVP Scope**: Phases 1-3 (60 tasks) deliver complete landing page

**Independent Test Criteria**:
- US1: Navigate through all sections, verify content and animations
- US2: Submit contact form, verify validation and success
- US3: Test on mobile devices, verify responsiveness
- US4: Scroll and interact, verify animation smoothness

**Estimated Timeline**: 8-10 days for full implementation (following quickstart.md roadmap)
