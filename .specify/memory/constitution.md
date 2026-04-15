<!--
Sync Impact Report:
- Version change: none → 1.0.0 (initial constitution)
- Modified principles: N/A (initial creation)
- Added sections: All core principles, Tech Stack, Design System, Development Workflow, Governance
- Removed sections: N/A
- Templates requiring updates:
  ✅ constitution.md (this file)
  ⚠ plan-template.md (pending review for alignment)
  ⚠ spec-template.md (pending review for alignment)
  ⚠ tasks-template.md (pending review for alignment)
- Follow-up TODOs: Review dependent templates for consistency with new principles
-->

# FitForge Gym Constitution

**Project Name:** FitForge Gym (Premium Fitness Brand)  
**Developer:** Fahad  
**Core Philosophy:** Spec-First, AI-Generated, Human-Steered, Minimal Manual Coding

## Core Principles

### I. Spec-First Development (NON-NEGOTIABLE)

**Rule:** Never write code directly. All development begins with a clear, detailed specification.

**Requirements:**
- MUST write or update specification before any code generation
- MUST NOT ask AI to "build a feature" without referencing an explicit spec
- Specifications define requirements, design, behavior, and acceptance criteria
- Code is generated from specs, not invented ad-hoc

**Rationale:** Spec-first ensures architectural clarity, maintainability, and creates a strong portfolio narrative. It separates business logic from implementation details, making the codebase easier to understand and modify.

### II. AI-Generated Code

**Rule:** Human role is to write/refine specifications and review output. AI role is to generate full implementations.

**Requirements:**
- Human: Write specs, review generated code, request improvements, update specs
- AI: Generate complete components with TypeScript, Tailwind CSS, and Framer Motion
- Manual code edits ONLY for tiny fixes when absolutely necessary
- All significant changes go through spec update → regeneration cycle

**Rationale:** Leveraging AI for code generation ensures consistency, reduces human error, and allows focus on architecture and requirements rather than syntax.

### III. Living Documentation

**Rule:** Specifications remain the single source of truth throughout the project lifecycle.

**Requirements:**
- MUST update specs when requirements change
- Generated code reflects current spec state
- Specs evolve with the project
- Documentation and code stay synchronized through spec updates

**Rationale:** Living documentation prevents drift between intent and implementation, ensuring long-term maintainability and knowledge preservation.

### IV. Incremental Development

**Rule:** Complete one section or feature fully before moving to the next.

**Requirements:**
- Each section MUST be complete: design + animation + responsiveness + accessibility
- No parallel incomplete features
- Validate completion before proceeding
- Clear definition of "done" for each increment

**Rationale:** Incremental completion reduces complexity, enables early validation, and prevents accumulation of technical debt.

### V. Prompt Discipline

**Rule:** Every AI prompt must follow a structured format with complete context.

**Requirements:**
Every prompt MUST include:
- Reference to exact spec from constitution or spec file
- Tech stack declaration (Next.js 15, TypeScript, Tailwind, Framer Motion)
- Explicit request for TypeScript + Tailwind + Framer Motion
- Responsiveness and accessibility requirements
- Request for clean, reusable code

**Rationale:** Structured prompts ensure consistent, high-quality AI output and reduce iteration cycles.

### VI. Tech Stack Adherence (FIXED)

**Rule:** Technology choices are locked and MUST NOT change without constitutional amendment.

**Approved Stack:**
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS + custom CSS (glassmorphism effects)
- **Animation:** Framer Motion (all animations)
- **UI Components:** shadcn/ui or custom components only when needed
- **Images:** Next/Image for optimization
- **Icons:** Lucide-react

**Rationale:** Fixed tech stack prevents decision fatigue, ensures consistency, and leverages proven technologies for performance and developer experience.

### VII. Design System Consistency

**Rule:** All visual design decisions are codified and MUST be followed exactly.

**Design Standards:**

**Color Palette (FIXED):**
- Background: #0A0A0A (deep black)
- Cards/Surfaces: #1F1F1F (dark gray)
- Primary Accent: #00FF9F (neon green)
- Secondary Accent: #FF2D55 (neon red)

**Visual Effects:**
- Glassmorphism with backdrop-blur on all cards
- Neon glow effects on interactive elements

**Typography:**
- Font Family: Inter
- Headings: Bold weight + tracking-tighter
- Consistent hierarchy across all sections

**Interactive Elements:**
- All CTAs: Large size with glowing hover effect
- Hover state: scale(1.03) + neon glow
- Focus states for accessibility

**Rationale:** Consistent design system creates professional appearance, reinforces brand identity, and improves user experience.

### VIII. Animation Standards

**Rule:** All animations use Framer Motion with consistent patterns.

**Animation Requirements:**
- Every section MUST have scroll-triggered fade-in + slide-up animation
- Use `motion.div`, `useInView`, and `variants` pattern
- Hover animations: scale(1.03) + neon glow transition
- Hero section: video parallax + staggered text reveal
- Smooth, performant transitions (60fps target)

**Rationale:** Consistent animations create polish and professionalism while maintaining performance through optimized animation library.

### IX. Performance Standards

**Rule:** Performance is non-negotiable. Target 95+ Lighthouse scores.

**Performance Requirements:**
- Lazy loading for all images and sections
- No heavy components above the fold
- Optimized images via Next/Image
- Code splitting and dynamic imports where appropriate
- Minimal JavaScript bundle size
- Fast Time to Interactive (TTI)

**Rationale:** Performance directly impacts user experience, SEO rankings, and conversion rates. Premium brand requires premium performance.

## Folder Structure (FIXED)

**Mandatory Organization:**

```
/gym-frontend
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page (imports all sections)
│   ├── globals.css             # Global styles
│   └── sections/               # Page sections (if using app dir structure)
├── components/
│   ├── ui/                     # Reusable UI components (buttons, cards)
│   ├── layout/                 # Navbar, Footer
│   └── shared/                 # Shared components
├── sections/                   # Hero.tsx, Features.tsx, Pricing.tsx, etc.
├── animations/                 # motionVariants.ts, animation hooks
├── lib/                        # Utils, constants, helpers
├── public/                     # Static assets (images, videos)
└── types/                      # TypeScript type definitions
```

**Rules:**
- MUST follow this structure exactly
- No arbitrary folder creation
- Clear separation of concerns
- Predictable file locations

**Rationale:** Consistent structure improves navigation, onboarding, and maintenance. Follows Next.js best practices.

## Development Workflow

### Specification Process

1. **Identify Feature/Section:** Clearly define what needs to be built
2. **Write Detailed Spec:** Document requirements, design, behavior, acceptance criteria
3. **Review Spec:** Ensure completeness before code generation
4. **Generate Prompt:** Create structured AI prompt referencing spec
5. **AI Generation:** Let AI generate complete implementation
6. **Review Output:** Check against spec and quality standards
7. **Iterate if Needed:** Update spec and regenerate, or request targeted improvements
8. **Validate Completion:** Verify all acceptance criteria met
9. **Move to Next Feature:** Only after current feature is complete

### Quality Gates

Before marking any feature complete, verify:
- ✅ Matches specification exactly
- ✅ TypeScript strict mode passes with no errors
- ✅ Responsive on mobile, tablet, desktop
- ✅ Animations work smoothly (60fps)
- ✅ Accessibility standards met (WCAG 2.1 AA minimum)
- ✅ Performance targets achieved
- ✅ Design system consistency maintained
- ✅ Code is clean and reusable

### Code Review Standards

When reviewing AI-generated code:
- Verify adherence to tech stack
- Check design system consistency
- Validate animation implementation
- Confirm responsiveness
- Test accessibility
- Measure performance
- Ensure TypeScript types are correct
- Look for reusability opportunities

## Governance

### Constitutional Authority

This constitution supersedes all other development practices and decisions. When conflicts arise, constitutional principles take precedence.

### Amendment Process

**To amend this constitution:**
1. Identify the principle or section requiring change
2. Document the rationale for the amendment
3. Update the specification
4. Increment version according to semantic versioning:
   - **MAJOR:** Backward-incompatible changes (principle removal/redefinition)
   - **MINOR:** New principles or material expansions
   - **PATCH:** Clarifications, wording improvements, typo fixes
5. Update LAST_AMENDED_DATE
6. Propagate changes to dependent templates and documentation
7. Create Architecture Decision Record (ADR) if architecturally significant

### Compliance

**All development activities MUST:**
- Verify compliance with constitutional principles
- Reference this constitution in decision-making
- Justify any exceptions (which should be rare and documented)
- Update constitution when patterns emerge that should be codified

### Version Control

**Version**: 1.0.0 | **Ratified**: 2026-04-13 | **Last Amended**: 2026-04-13

### Related Documentation

- Specifications: `specs/<feature>/spec.md`
- Architecture Plans: `specs/<feature>/plan.md`
- Task Breakdowns: `specs/<feature>/tasks.md`
- Prompt History: `history/prompts/`
- Architecture Decisions: `history/adr/`
