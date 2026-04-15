---
id: 001
title: FitForge Gym Constitution Creation
stage: constitution
date: 2026-04-13
surface: agent
model: Claude Sonnet 4.6 (1M context)
feature: none
branch: master
user: Fahadkhanreal
command: /sp.constitution
labels: ["constitution", "spec-driven-development", "fitforge-gym", "initial-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

# 🏋️ FitForge Gym – Spec-Driven Development Constitution

**Project Name:** FitForge Gym (Premium Fitness Brand)  
**Version:** 1.1  
**Date:** April 13, 2026  
**Developer:** Fahad  
**Core Principle:** **Spec-First, AI-Generated, Human-Steered, Minimal Manual Coding**

---

## 1. What is Spec-Driven Development (SDD) in this Project?

Spec-Driven Development means:
- **You never write code directly** (or as little as possible).
- You create **clear, detailed specifications** first.
- You give those specs to AI (Grok / Claude / Cursor etc.) in structured prompts.
- AI generates the code/components.
- You only **review, refine the spec**, and ask for fixes/improvements.
- The **spec remains the single source of truth** even after code is generated.

This approach gives:
- Cleaner architecture
- Better quality
- Easier maintenance
- Strong portfolio story ("Built 100% spec-driven with AI")

---

## 2. Core Rules of This Constitution (Must Follow)

1. **Always Spec First**  
   Never ask AI to "build a hero section". First write/update the spec in this document or a separate section spec file.

2. **No Direct Coding**  
   Your job = Write/Refine Specs + Review Output + Ask for improvements.  
   AI's job = Generate full components with TypeScript, Tailwind, Framer Motion.

3. **Spec is Living Document**  
   Keep updating specs when requirements change. Never edit generated code manually unless absolutely necessary (only for tiny fixes).

4. **One Section / Feature at a Time**  
   Complete one section fully (design + animation + responsiveness) before moving to the next.

5. **Prompt Discipline**  
   Every prompt must:
   - Reference the exact spec from this constitution
   - Mention Tech Stack
   - Ask for TypeScript + Tailwind + Framer Motion
   - Demand responsiveness and accessibility
   - Ask for clean, reusable code

---

## 3. Project Constitution & Tech Rules

**Tech Stack (Fixed)**
- Next.js 15 (App Router) + TypeScript (strict mode)
- Tailwind CSS + custom CSS (for glassmorphism)
- Framer Motion (all animations)
- shadcn/ui or custom UI components only when needed
- Next/Image for optimized images
- Lucide-react for icons

**Design Rules (Never Change Without Updating Spec)**
- Dark theme (#0A0A0A background, #1F1F1F cards)
- Accent: Neon Green (#00FF9F) + Neon Red (#FF2D55)
- Glassmorphism + backdrop-blur
- Typography: Inter (headings bold + tracking-tighter)
- All CTAs large and glowing on hover

**Animation Rules**
- Every section must have scroll-triggered fade-in + slide-up (Framer Motion)
- Hover: scale(1.03) + neon glow
- Hero: video parallax + staggered text reveal
- Use `motion.div`, `useInView`, `variants`

**Performance Rules**
- Lazy loading for all images and sections
- No heavy components above the fold
- Aim for 95+ Lighthouse scores

---

## 4. Folder Structure (Fixed)

```bash
/gym-frontend
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 ← Main page that imports all sections
│   ├── globals.css
│   └── sections/                ← All page sections here
├── components/
│   ├── ui/                      ← Reusable buttons, cards, etc.
│   ├── layout/                  ← Navbar, Footer
│   └── shared/
├── sections/                    ← Hero.tsx, Features.tsx, Pricing.tsx etc.
├── animations/                  ← motionVariants.ts, hooks
├── lib/                         ← utils, constants
├── public/                      ← images, videos
└── types/
```

## Response snapshot

Created comprehensive FitForge Gym constitution (v1.0.0) with 9 core principles:

1. **Spec-First Development (NON-NEGOTIABLE)**: All development begins with detailed specifications before any code generation
2. **AI-Generated Code**: Human writes specs and reviews; AI generates complete implementations
3. **Living Documentation**: Specifications remain single source of truth throughout project lifecycle
4. **Incremental Development**: Complete one section fully before moving to next
5. **Prompt Discipline**: Structured AI prompts with complete context (tech stack, responsiveness, accessibility)
6. **Tech Stack Adherence (FIXED)**: Next.js 15, TypeScript strict, Tailwind CSS, Framer Motion, Next/Image, Lucide-react
7. **Design System Consistency**: Fixed color palette (#0A0A0A bg, #00FF9F neon green, #FF2D55 neon red), glassmorphism, Inter typography
8. **Animation Standards**: Scroll-triggered fade-in/slide-up, hover scale(1.03) + glow, 60fps target
9. **Performance Standards**: 95+ Lighthouse scores, lazy loading, optimized images

Added sections for:
- Folder structure (mandatory organization)
- Development workflow (specification process, quality gates, code review standards)
- Governance (constitutional authority, amendment process, compliance, version control)

Constitution includes sync impact report noting templates requiring review for alignment (plan-template.md, spec-template.md, tasks-template.md).

## Outcome

- ✅ Impact: Created foundational governance document establishing spec-driven development methodology for FitForge Gym project
- 🧪 Tests: N/A (documentation artifact)
- 📁 Files: Created .specify/memory/constitution.md (v1.0.0)
- 🔁 Next prompts: Review dependent templates for consistency; create first feature specification following constitutional principles
- 🧠 Reflection: Constitution successfully codifies the spec-first, AI-assisted development approach with clear technical constraints (Next.js 15, TypeScript, Tailwind, Framer Motion) and design system rules (dark theme, neon accents, glassmorphism). The 9 principles provide clear guardrails for maintaining consistency and quality throughout development.

## Evaluation notes (flywheel)

- Failure modes observed: None - initial constitution creation
- Graders run and results (PASS/FAIL): N/A - no automated grading for constitution
- Prompt variant (if applicable): N/A - standard constitution creation
- Next experiment (smallest change to try): Validate constitution principles by creating first feature spec (likely Hero section) following the established workflow
