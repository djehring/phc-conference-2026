# PHC Website Redesign Plan

## Executive Summary

A comprehensive plan to redesign phcuk.org from its current dated WordPress-style layout into a modern, authoritative digital platform that reflects PHC's position as a leading evidence-based public health charity. The new site should immediately communicate **who PHC is, what they do, and why it matters** — within seconds of landing.

---

## 1. Analysis of Current State

### Current PHC Website (phcuk.org) — Problems Identified

The archived site reveals a WordPress theme with significant issues:

- **Visually dated**: Basic list-style navigation, no hero section, no visual hierarchy
- **No clear value proposition**: The homepage doesn't immediately explain PHC's mission
- **Poor information architecture**: Navigation items (About, Conference, Projects, Resources, Donate, Study, Lifestyle, Volunteer) are flat and unclear
- **No storytelling**: Content is informational but not engaging — no impact statistics, no human stories, no visual evidence of work
- **Weak calls to action**: No clear pathways for different audiences (public, professionals, policymakers)
- **Mobile experience**: Likely poor given the era of design
- **Brand underutilised**: The PHC logo colours (deep navy #2D2E83 and cyan #4ABFD8) are barely leveraged

### What Works (Content to Preserve)
- Real Food Booklets and educational resources
- Evidence pages with scientific backing
- Elevate app (elevate-me.life)
- Volunteer/Ambassador network
- Weekly Lifestyle Support Group
- Conference/events content
- FAQ content

---

## 2. Brand Colour System (Derived from Logo)

The PHC logo uses two primary colours that should form the backbone of the design system:

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| **PHC Navy** | `#2D2E83` | Primary brand colour — headers, hero backgrounds, key CTAs, footer |
| **PHC Cyan** | `#4ABFD8` | Secondary brand — accents, links, highlights, interactive elements |

### Extended Palette (Complementary)
| Token | Hex | Usage |
|-------|-----|-------|
| **PHC Navy Light** | `#3A3B9A` | Hover states, secondary backgrounds |
| **PHC Navy Dark** | `#1E1F5E` | Deep backgrounds, text on light |
| **PHC Cyan Light** | `#7DD4E6` | Subtle highlights, progress bars, badges |
| **PHC Cyan Pale** | `#E8F7FB` | Section backgrounds, cards, callout boxes |
| **White** | `#FFFFFF` | Primary background, card surfaces |
| **Off-White** | `#F8F9FC` | Alternate section backgrounds |
| **Warm Grey** | `#6B7280` | Body text |
| **Dark Grey** | `#1F2937` | Headings on light backgrounds |
| **Success Green** | `#10B981` | Positive metrics, health improvements |
| **Warm Amber** | `#F59E0B` | Attention/highlight, featured content |

### Typography
- **Headings**: A modern geometric sans-serif (e.g., **Plus Jakarta Sans** or **Inter**) — conveys authority and modernity
- **Body**: **Inter** or **Source Sans 3** — excellent readability, professional feel
- **Accent/Stats**: A heavier weight of the heading font for impact numbers

---

## 3. Design Inspiration — What to Borrow

### From The Food Foundation (foodfoundation.org.uk)
- **Strong hero section** with clear mission statement and supporting video
- **Three-column "pillar" cards** below the hero that explain key work areas
- **Featured content carousel** with news, reports and publications
- **"Key Pillars of our work"** section with image + description layout
- **Newsletter signup** integrated mid-page
- **Footer** with comprehensive sitemap

### From Institute for Optimum Nutrition (ion.ac.uk)
- **Clean navigation** with well-organised dropdowns (Courses, Resources, About, Students)
- **Hero carousel** with seasonal/topical content
- **Professional credibility signals** (accreditation, course outcomes)
- **Green/natural colour palette** conveying health (PHC should use its own navy/cyan equivalent)

### From realfood.gov
- **Bold, confident typography** — oversized hero text that commands attention
- **Dark hero section** creating dramatic contrast
- **Data-driven storytelling** — animated statistics that reveal the scale of the problem
- **Interactive food pyramid/guide** — interactive educational content
- **AI-powered Q&A section** — innovative engagement tool
- **FAQ accordion** section — clear, scannable answers
- **Single-page narrative flow** — scrolling tells a complete story

---

## 4. Recommended Site Architecture

### Primary Navigation (5 items max + CTA)

```
[PHC Logo]    About    Our Work    Evidence    Get Involved    News    [Donate] [Search]
```

### Detailed Page Structure

#### 4.1 Homepage
The single most important page. Must answer three questions instantly:
1. Who is PHC?
2. What do they do?
3. Why does it matter?

**Sections (in scroll order):**

1. **Hero Section**
   - Bold headline: "Better health through better evidence"
   - Sub-headline: PHC's mission in one sentence
   - Background: Subtle gradient (navy → deep navy) or documentary-style hero image
   - Two CTAs: "Learn what we do" | "Join the movement"
   - Optional: Short 30-60s brand video (like Food Foundation)

2. **Impact Statistics Bar**
   - Animated counters on scroll-in:
     - "X years championing metabolic health"
     - "X,000+ members and supporters"
     - "X annual conferences held"
     - "X real food resources published"
   - Design: PHC Cyan numbers on navy background strip

3. **What We Do — Three Pillars** (inspired by Food Foundation)
   - Card 1: **Advocacy & Policy** — Challenging dietary guidelines with science
   - Card 2: **Education & Resources** — Real Food Booklets, evidence library, Elevate app
   - Card 3: **Community & Events** — Annual conference, volunteer network, support groups
   - Each card: Icon/illustration + title + 2-line description + "Learn more" link

4. **The Problem We're Solving** (inspired by realfood.gov)
   - Compelling data visualisation section
   - Key statistics about metabolic health crisis in the UK (type 2 diabetes, obesity, NHS costs)
   - Quote or callout: "We believe real food is the foundation of good health"
   - Design: Dark navy background with cyan accent data points

5. **Featured Content / Latest**
   - 3-4 card grid showing latest news, blog posts, or publications
   - Each card: Image + category tag + title + excerpt + date
   - "View all" link to news/blog archive

6. **Real Food Section** (email magnet opportunity)
   - Interactive preview of the metabolic health calculator or Real Food guide
   - CTA: "Check your metabolic health" or "Download the Real Food guide"
   - Email capture integrated via Twilio

7. **Testimonials / Impact Stories**
   - 2-3 quotes from healthcare professionals, patients, or community members
   - Carousel or stacked layout with attribution and photos

8. **Newsletter Signup**
   - Simple, prominent email capture
   - "Stay informed — evidence-based health insights delivered to your inbox"
   - Powered by Twilio integration

9. **Partners & Credibility Bar**
   - Logos of collaborating organisations, universities, media mentions
   - Charity Commission registration number, governance links

#### 4.2 About Section
- `/about` — Vision, mission, core beliefs (plain English, no jargon)
- `/about/team` — Team and trustees with photos and bios
- `/about/governance` — Annual reports, charity registration, transparency
- `/about/history` — Timeline of PHC's journey and milestones

#### 4.3 Our Work Section
- `/our-work` — Overview of all work streams
- `/our-work/advocacy` — Policy influence, dietary guidelines challenge
- `/our-work/education` — Real Food Booklets, courses, study programmes
- `/our-work/real-food-rebellion` — Schools programme
- `/our-work/phc-connect` — The app
- `/our-work/support-groups` — Weekly lifestyle support
- `/our-work/conference` — Annual conference (links to dedicated conference site)

#### 4.4 Evidence Section
- `/evidence` — Landing page with search/filter
- `/evidence/research` — Published research and position statements
- `/evidence/faq` — Frequently asked questions (accordion style, like realfood.gov)
- `/evidence/resources` — Downloadable resources, booklets, infographics

#### 4.5 Get Involved Section
- `/get-involved` — Overview with clear pathways for each audience
- `/get-involved/membership` — Join PHC, benefits, pricing tiers
- `/get-involved/volunteer` — Ambassador programme, volunteer sign-up
- `/get-involved/donate` — Donation page with impact messaging
- `/get-involved/events` — Upcoming events calendar
- `/get-involved/partnerships` — For organisations wanting to collaborate

#### 4.6 News & Blog
- `/news` — Filterable grid of articles, sorted by date
- `/news/[slug]` — Individual article pages with share buttons, related articles
- Category tags: News, Blog, Research, Opinion, Press

#### 4.7 Footer Pages
- Privacy Policy, Terms, Cookie Policy
- Contact page with form
- Press/Media enquiries
- Sitemap

---

## 5. Key Features & Functionality

### 5.1 Email Marketing Integration (Twilio)
- Newsletter signup forms on homepage, blog sidebar, and dedicated page
- Email magnets:
  - **Metabolic Health Calculator** — interactive tool, results delivered by email
  - **Real Food Shopping Guide** — downloadable PDF in exchange for email
  - **"5 Things Your Doctor Doesn't Know About Metabolic Health"** — content download
- Automated welcome sequence for new subscribers
- Segmentation by audience type (public, healthcare professional, educator)

### 5.2 Content Management
- Headless CMS recommended (e.g., **Sanity**, **Strapi**, or **Contentful**) for easy staff updates
- Alternatively, a well-configured **WordPress** with a modern theme if staff prefer familiar tools
- Blog/news section with categories, tags, and author attribution
- Events section with date-based filtering

### 5.3 Interactive Elements
- **Metabolic Health Calculator** — lead magnet and engagement tool
- **FAQ Accordion** — expandable answers (like realfood.gov)
- **Impact Statistics** — animated counters on scroll
- **Resource Library** — searchable/filterable downloads
- **Event Calendar** — with registration links

### 5.4 Performance & Accessibility
- Target: Lighthouse score 90+ across all metrics
- WCAG 2.1 AA compliance minimum
- Core Web Vitals optimised
- Mobile-first responsive design
- Semantic HTML with proper heading hierarchy
- Alt text on all images, keyboard navigation support

### 5.5 SEO & Analytics
- Structured data (Schema.org) for organisation, articles, events
- Open Graph and Twitter Card meta tags
- Google Analytics 4 or privacy-respecting alternative (e.g., Plausible)
- Sitemap.xml and robots.txt
- Canonical URLs and proper internal linking

---

## 6. Technical Recommendations

### Option A: Next.js + Headless CMS (Recommended)
- **Framework**: Next.js 15 (App Router) — same stack as conference site
- **CMS**: Sanity.io or Contentful for content management
- **Styling**: Tailwind CSS v4 with PHC design tokens
- **Animations**: Framer Motion (subtle, purposeful)
- **Email**: Twilio SendGrid integration
- **Hosting**: Vercel or Netlify
- **Pros**: Fast, modern, excellent developer experience, easy to maintain, seamless CMS for non-technical staff
- **Cons**: Requires developer for structural changes

### Option B: WordPress with Modern Theme
- **Platform**: WordPress 6.x with block editor
- **Theme**: Custom theme or Flavor theme (Flavors of the theme matching PHC brand)
- **Plugins**: ACF Pro, Yoast SEO, WP Rocket, Contact Form 7
- **Hosting**: WP Engine or Cloudways
- **Pros**: Staff can edit content easily, large plugin ecosystem, familiar to many
- **Cons**: Slower, more maintenance, security patching needed, harder to achieve the design ambition

### Recommendation
**Option A (Next.js + Headless CMS)** — aligns with the conference site stack, enables the dynamic, data-driven design ambitions in the spec, and delivers superior performance. Sanity.io provides an excellent content editing experience for non-technical staff.

---

## 7. Design Approach — Page-by-Page Visual Direction

### Homepage Visual Flow

```
┌──────────────────────────────────────────────────────────┐
│  [Nav: Logo | About | Our Work | Evidence | Get Involved | News | Donate | Search] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│            HERO SECTION (Navy gradient bg)                │
│                                                          │
│     "Better health through better evidence"              │
│     Subtitle: Challenging dietary misinformation         │
│     with rigorous science since 2016                     │
│                                                          │
│     [ Learn what we do ]  [ Join the movement ]          │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ 10 yrs  │  │ 9,000+  │  │ 100+    │  │ 500+    │    │
│  │ of work │  │ members │  │ events  │  │ resources│    │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │
│          IMPACT STATISTICS (Cyan on Navy strip)          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│   │  Advocacy &  │ │  Education & │ │  Community & │    │
│   │    Policy    │ │  Resources   │ │    Events    │    │
│   │              │ │              │ │              │    │
│   │  Learn more →│ │  Learn more →│ │  Learn more →│    │
│   └──────────────┘ └──────────────┘ └──────────────┘    │
│            THREE PILLARS (White bg, cards)                │
├──────────────────────────────────────────────────────────┤
│                                                          │
│     THE METABOLIC HEALTH CRISIS (Dark navy bg)           │
│                                                          │
│     "The UK faces a metabolic health emergency"          │
│     [Animated stats: diabetes, obesity, NHS costs]       │
│     "We believe real food is the answer"                 │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   LATEST NEWS & RESOURCES (3-4 card grid)                │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐                           │
│   │    │ │    │ │    │ │    │                           │
│   └────┘ └────┘ └────┘ └────┘                           │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   EMAIL MAGNET: Metabolic Health Calculator              │
│   [Interactive preview] → [Get your results via email]   │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   TESTIMONIALS / IMPACT STORIES                          │
│   "PHC changed how I practice medicine" — Dr X           │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   NEWSLETTER SIGNUP (Cyan bg strip)                      │
│   [Email input] [Subscribe]                              │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   FOOTER (Navy bg)                                       │
│   Sitemap | Social links | Charity number | Legal        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 8. Content Strategy Recommendations

### Tone of Voice
- **Confident, not aggressive**: "The evidence shows..." not "They're lying to you..."
- **Inclusive, not exclusive**: Welcoming to all audiences, not just low-carb converts
- **Plain English**: Explain metabolic health simply, link to deeper evidence for those who want it
- **Constructive**: Focus on solutions, not just criticism of current guidelines
- **Evidence-first**: Always lead with data, studies, and professional expertise

### Key Messages for Homepage
1. "We're a UK charity dedicated to metabolic health for everyone"
2. "We challenge outdated dietary advice with rigorous science"
3. "Real food, not ultra-processed food, is the foundation of good health"
4. "Join thousands of healthcare professionals and members of the public"

### Content Priorities (Phase 1)
1. Homepage — the critical first impression
2. About page — clearly articulate vision, mission, values
3. Our Work overview — showcase all programmes
4. Evidence landing page — demonstrate scientific rigour
5. Get Involved — clear membership and donation pathways
6. News/Blog migration — bring across existing content

---

## 9. Success Metrics

| Metric | Current (Estimated) | Target |
|--------|-------------------|--------|
| Lighthouse Performance | ~60 | 90+ |
| Time to understand PHC mission | >30 seconds | <5 seconds |
| Average session duration | ~1 min | 3+ min |
| Pages per session | ~1.5 | 3+ |
| Newsletter signup rate | Minimal | 3-5% of visitors |
| Mobile usability score | Poor | 95+ |
| Bounce rate | ~70% | <45% |
| Monthly organic traffic | Baseline TBD | +50% within 6 months |

---

## 10. Summary

The PHC deserves a website that matches the quality and ambition of its mission. The current site undersells a serious, impactful charity. By combining the **structural clarity** of the Food Foundation, the **professional credibility** of ION, and the **bold confidence** of realfood.gov — all wrapped in PHC's distinctive navy and cyan brand identity — the new site will position PHC as the authoritative voice on metabolic health in the UK.

The design should feel like walking into a modern, well-lit clinic: **clean, confident, trustworthy, and human**.
