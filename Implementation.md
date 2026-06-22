# Premium Minimalist Portfolio Prototype

This plan outlines the architecture and design approach for building your minimalist, high-impact portfolio website. We will focus on a clean, premium aesthetic with smooth animations and a structure that is extremely easy for you to modify later.

## User Review Required

> [!IMPORTANT]
> **Tech Stack Approval**
> I propose using **Vite + React (TypeScript)**. It offers excellent performance and an amazing developer experience. For styling, we will use **Vanilla CSS with CSS Variables** as per best practices for maximum control, along with **Framer Motion** for premium, buttery-smooth micro-animations (fade-ins, scroll reveals). Do you approve of this stack?

> [!TIP]
> **Aesthetic Direction**
> I suggest a sleek, modern **Dark Mode** default (e.g., deep charcoal background `#0a0a0b`, subtle borders `#27272a`, and clean white text `#fafafa` with a primary accent color) inspired by high-end tech products. Let me know if you prefer a light theme!

## Open Questions

1. **Content Management**: To make this prototype easily modifiable, I plan to extract all your content (summary, experience, skills, etc.) into a single `src/data/content.ts` file. This means you won't have to touch the UI code to update your CV. Does this approach work for you?
2. **Order of Sections**: I propose the following logical flow: 
   `Summary (Hero) -> Work Experience -> Projects -> Skills -> Academics -> Certifications -> Volunteerism -> Contact`
   Are you okay with this initial order?

## Proposed Architecture

We will initialize the project in `c:\Shubham\Antigravity\Portfolio`.

### Core Setup
- Run `npx -y create-vite@latest . --template react-ts`
- Install dependencies: `framer-motion` (animations), `lucide-react` (beautiful minimalist icons).

### Directory Structure & Components
The codebase will be highly modularized.

#### `src/styles/`
- `index.css` - Global resets, CSS variables for our premium design tokens (colors, typography, spacing).
- `animations.css` - Utility classes for any CSS-only animations.

#### `src/data/`
- `content.ts` - The single source of truth for your CV data.

#### `src/components/ui/`
- Reusable UI elements: `Button`, `SectionHeading`, `Card`, `SkillBadge`.

#### `src/components/sections/`
- `Hero.tsx` (Summary)
- `Experience.tsx`
- `Projects.tsx`
- `Skills.tsx`
- `Academics.tsx`
- `Certifications.tsx`
- `Volunteerism.tsx`
- `Contact.tsx`

#### `src/components/layout/`
- `Navbar.tsx` - Minimalist sticky header with smooth-scroll links.
- `Footer.tsx`

## Verification Plan

### Automated Steps
1. Run `npm install` and `npm run dev` to start the development server.
2. Verify that there are no TypeScript or build errors.

### Manual Verification
1. I will capture browser screenshots/recordings of the resulting site.
2. I will demonstrate the smooth scroll behavior and entry animations.
3. I will show how changing a value in `content.ts` instantly reflects on the UI.
