# Site Structure Documentation

## Overview
This document provides a comprehensive overview of the Monica Wang portfolio website, including design elements, layout structure, and content organization. This documentation serves as a reference for maintaining consistency across the site and for future development.

## Table of Contents
1. [Design System](#design-system)
   - [Color Palette](#color-palette)
   - [Typography](#typography)
   - [Spacing](#spacing)
   - [Components](#components)
2. [Layout Structure](#layout-structure)
   - [Navigation](#navigation)
   - [Sections](#sections)
   - [Responsive Behavior](#responsive-behavior)
3. [Content Guide](#content-guide)
   - [Hero Section](#hero-section)
   - [About Section](#about-section)
   - [Research Section](#research-section)
   - [Education Section](#education-section)
   - [Skills Section](#skills-section)
   - [Projects & Papers Section](#projects-papers-section)
   - [Contact Section](#contact-section)
4. [Technical Implementation](#technical-implementation)
   - [Framework](#framework)
   - [Key Libraries](#key-libraries)
   - [File Structure](#file-structure)

## Design System

### Color Palette
The site uses a clean, professional color palette with white backgrounds and green accents:

- **Primary**: `#ffffff` (White) - Used for backgrounds and containers
- **Secondary**: `#0D5B11` (Dark Green) - Primary accent color for headings and important elements
- **Accent**: `#187C19` (Medium Green) - Secondary accent color for interactive elements
- **Highlight**: `#69B41E` (Light Green) - Used for highlights and tertiary elements
- **Brightest**: `#8DC71E` (Bright Green) - Used for special highlights and accents
- **Text Primary**: `#2d3748` (Dark Gray) - Main text color
- **Text Secondary**: `#4a5568` (Medium Gray) - Secondary text color
- **Border Color**: `#edf2f7` (Light Gray) - Used for borders and dividers

### Typography
The site uses a clean, modern typography system:

- **Font Family**: 'Inter', system-ui, sans-serif
- **Heading Sizes**:
  - H1: 5xl-7xl (3rem-5rem) - Hero section
  - H2: 3xl-4xl (1.875rem-2.25rem) - Section headings
  - H3: xl-2xl (1.25rem-1.5rem) - Card headings
  - H4: lg (1.125rem) - Subsection headings
- **Body Text**:
  - Regular: base (1rem)
  - Large: lg (1.125rem) - Featured paragraphs
  - Small: sm (0.875rem) - Secondary information
- **Font Weights**:
  - Headings: Bold (700)
  - Subheadings: Semibold (600)
  - Body: Regular (400)
- **Line Heights**:
  - Headings: 1.2
  - Body: 1.6

### Spacing
The site uses a consistent spacing system:

- **Container Width**: max-w-7xl (80rem/1280px)
- **Section Padding**: py-20 md:py-28 (5rem/7rem)
- **Component Spacing**: 
  - Small: 4-6 (1rem-1.5rem)
  - Medium: 8-10 (2rem-2.5rem)
  - Large: 12-16 (3rem-4rem)
- **Grid Gaps**: 6-8 (1.5rem-2rem)

### Components

#### Cards
- White background
- Light border (`border-[var(--secondary)]/10`)
- Rounded corners (rounded-lg)
- Subtle shadow (shadow-sm)
- Hover effect (scale or shadow increase)
- Padding: p-6 (1.5rem)

#### Buttons
- **Primary Button**:
  - Green background (`bg-[var(--secondary)]`)
  - White text
  - Rounded corners (rounded-md)
  - Hover effect (darker green)
  - Padding: py-2.5 px-6
  - Font: Medium, text-sm

- **Secondary Button**:
  - White background
  - Green border and text
  - Hover: Green background, white text
  - Same padding and font as primary

#### Section Headers
- Consistent pattern across sections:
  - Small badge with section category
  - H2 heading
  - Decorative divider (w-24 h-1)
  - Descriptive paragraph

#### Decorative Elements
- Subtle rounded shapes with low opacity
- Nature-inspired SVG patterns
- Gradient overlays
- Rounded corners on all elements

## Layout Structure

### Navigation
- Fixed at top
- Links to all main sections
- Mobile: Hamburger menu
- Desktop: Horizontal links
- Active state for current section

### Sections
Each section follows a consistent structure:
1. Full-width container
2. Section header component
3. Content specific to the section
4. Subtle decorative elements
5. Consistent padding (top and bottom)

### Responsive Behavior
- **Mobile** (<768px):
  - Single column layouts
  - Stacked elements
  - Reduced text sizes
  - Simplified decorative elements

- **Tablet** (768px-1024px):
  - Two-column layouts where appropriate
  - Balanced spacing
  - Moderate text sizes

- **Desktop** (>1024px):
  - Multi-column layouts
  - Optimal spacing
  - Full-size text
  - Complete decorative elements

## Content Guide

### Hero Section
**Purpose**: Create a strong first impression and clearly communicate who Monica is.

**Content**:
- Badge: "Microbial Biology Graduate"
- Name: "Monica Wang"
- Subtitle: "UC Berkeley"
- Brief introduction paragraph highlighting key qualities and experience
- CTA buttons: "Get in Touch" and "View Research"
- Social links: LinkedIn and Email
- Profile image/placeholder
- "Scroll to learn more" indicator

**Design Elements**:
- Full-height section
- Large, bold typography
- Subtle decorative elements
- Prominent profile image/placeholder
- Animation on entry

### About Section
**Purpose**: Provide a personal introduction and overview of Monica's background.

**Content**:
- Section title: "Passionate about Microbial Biology"
- Personal bio paragraph
- Quote highlighting key qualities
- Additional paragraph about experience and location
- Four feature cards:
  1. Bioconjugation
  2. Research
  3. Lab Techniques
  4. Teaching

**Design Elements**:
- Two-column layout on desktop
- Card grid for features
- Subtle decorative elements
- Animated entry for text and cards

### Research Section
**Purpose**: Showcase research experience and leadership roles.

**Content**:
- Section title: "Research & Leadership"
- Tabbed interface with three projects:
  1. Undergraduate Researcher (Niyogi Lab)
  2. Tech Team Leader (KOSMOS)
  3. Director Intern (Glamity)
- Each project includes:
  - Title and organization
  - Time period
  - Description
  - Key responsibilities/highlights
  - Visual representation

**Design Elements**:
- Tabbed navigation
- Detailed project cards
- Visual elements for each project
- Grid layout for content organization

### Education Section
**Purpose**: Present academic background and professional experiences chronologically.

**Content**:
- Section title: "Education & Experience"
- Timeline with four entries:
  1. Bachelor of Science (UC Berkeley)
  2. Undergraduate Researcher (Niyogi Lab)
  3. Tech Team Lead (KOSMOS)
  4. Teaching Assistant (Department of Bioengineering)
- Each entry includes:
  - Title
  - Institution
  - Time period
  - Details/description
  - Icon

**Design Elements**:
- Simple vertical timeline
- Clean, minimal timeline nodes
- Consistent card styling
- Clear chronological order
- Minimal decorative elements for clarity

### Skills Section
**Purpose**: Highlight technical proficiencies and professional capabilities.

**Content**:
- Section title: "Skills & Capabilities"
- Six skill categories:
  1. Laboratory Techniques
  2. Technical Skills
  3. Research Competencies
  4. Teaching & Communication
  5. Leadership & Teamwork
  6. Professional Development
- Each category includes:
  - Category title
  - Icon
  - List of 8 specific skills

**Design Elements**:
- Three-column grid on desktop
- Card for each skill category
- Icon for each category
- List styling with hover effects

### Projects & Papers Section
**Purpose**: Showcase academic papers, research projects, and other significant works.

**Content**:
- Section title: "Projects & Papers"
- Featured projects with:
  - Project title
  - Description
  - Technologies/methods used
  - Visual representation
  - Link to project/paper
- Academic papers with:
  - Paper title
  - Authors
  - Journal/publication
  - Publication date
  - Abstract
  - DOI/link

**Design Elements**:
- Grid layout for projects
- Card-based design
- Featured images for projects
- Citation styling for papers
- Filter/category options

### Contact Section
**Purpose**: Provide multiple ways to get in touch and a contact form.

**Content**:
- Section title: "Contact Me"
- Contact information:
  - Email
  - Location
  - Phone
  - LinkedIn
- Contact form with fields:
  - Name
  - Email
  - Subject (dropdown)
  - Message
  - Submit button

**Design Elements**:
- Two-column layout on desktop
- Card styling for contact info and form
- Icon elements for contact methods
- Form validation and submission feedback

## Technical Implementation

### Framework
- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience

### Key Libraries
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for UI elements
- **React Icons**: Icon library for various UI elements
- **Headless UI**: Accessible UI components

### File Structure
```
src/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main page component
├── components/
│   ├── Hero.tsx          # Hero section component
│   ├── About.tsx         # About section component
│   ├── Research.tsx      # Research section component
│   ├── Education.tsx     # Education section component
│   ├── Skills.tsx        # Skills section component
│   ├── ProjectsPapers.tsx # Projects & Papers section component
│   ├── Contact.tsx       # Contact section component
│   └── [other UI components]
└── [other directories]
public/
├── images/               # Static images
└── [other static assets]
```

---

This documentation is intended to be a living document. As the site evolves, this guide should be updated to reflect the current state of the design system and content structure. 