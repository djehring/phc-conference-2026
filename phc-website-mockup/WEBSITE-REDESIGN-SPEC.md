# PHC Website Redesign — Implementation Specification

> **Basis:** The approved mockup site (Next.js, `/phc-website-mockup/`).
> The mockup defines the design, structure, and UX. This document maps the real content from the live site (phcuk.org) onto the mockup, and identifies gaps where content must be sourced, corrected, or created.

> **March 2026 — CONFIDENTIAL**

---

## Table of Contents

1. [Design Foundation (Mockup)](#1-design-foundation-mockup)
2. [Navigation & Information Architecture](#2-navigation--information-architecture)
3. [Homepage](#3-homepage)
4. [About Page](#4-about-page)
5. [Our Work Page](#5-our-work-page)
6. [Evidence Page](#6-evidence-page)
7. [Get Involved Page](#7-get-involved-page)
8. [News Page](#8-news-page)
9. [Footer](#9-footer)
10. [Contact Page (NEW — not in mockup)](#10-contact-page)
11. [Brand & Organisation Data](#11-brand--organisation-data)
12. [SEO & URL Mapping](#12-seo--url-mapping)
13. [Technology Stack](#13-technology-stack)
14. [Gap Analysis — Content Required](#14-gap-analysis--content-required)

---

## 1. Design Foundation (Mockup)

The approved mockup establishes the visual language and component library for the redesign. All pages should follow these conventions.

### Colour Palette

| Token | Hex / Description | Usage |
|-------|-------------------|-------|
| `phc-navy` / `phc-navy-dark` | Deep navy blue | Backgrounds, text, primary buttons |
| `phc-cyan` / `phc-cyan-light` | Teal/cyan accent | CTAs, highlights, active states, icons |
| `warm-amber` | Amber | Crisis/stat emphasis (homepage crisis section) |
| `success-green` | Green | Resource category pills |
| `off-white` | Light grey | Alternating section backgrounds |
| `dark-grey` | Dark grey | Body text |
| `warm-grey` | Medium grey | Secondary text |

### Typography

| Role | Font | Tailwind Class |
|------|------|----------------|
| Headings | Plus Jakarta Sans | `font-heading` |
| Body | Inter | `font-sans` |

### Design Patterns
- Cards: `rounded-2xl` with hover `shadow + -translate-y-1` lift effect
- Animations: Framer Motion — staggered fade-up on heroes, `FadeInSection` scroll wrapper throughout, `AnimatePresence` for accordions/menus
- Section rhythm: alternating white ↔ off-white backgrounds, navy sections for CTAs and stat strips
- Cyan used sparingly as accent: buttons, underlines, badges, stat numbers
- Heroes: reusable `PageHero` component — badge pill, large heading with cyan highlight word, subtitle, decorative blur orbs

### Shared Components (from mockup)
- **`Navbar`** — Fixed white/95 + backdrop blur. Logo left, 5 nav links centre, search icon + "Donate" pill right. Mobile: hamburger with animated slide-down.
- **`PageHero`** — Reusable dark navy hero with badge, animated heading, subtitle, decorative elements.
- **`CTASection`** — Dark navy CTA strip with title, description, primary + optional secondary button.
- **`SiteFooter`** — 5-column grid: brand + 4 link columns + bottom bar.
- **`FadeInSection`** — Scroll-triggered fade-in wrapper.
- **`AnimatedCounter`** — Scroll-triggered count-up numbers.

---

## 2. Navigation & Information Architecture

The mockup defines a simplified 5-page navigation (plus homepage):

```
Home
About           → /about
Our Work        → /our-work
Evidence        → /evidence
Get Involved    → /get-involved
News            → /news
```

**Action required:** Add a **Contact** page (`/contact`). The live site has one but the mockup omits it. The footer currently links to the contact page but there's no mockup page for it.

### Notes
- The live site's deep mega-menus (About with 8 sub-items, Resources with 20+ sub-items, Donate with 6 sub-items) are intentionally flattened into this simpler structure.
- "Conference" is treated as an **external link** (to the separate conference site), not a nav item.
- No sub-navigation or dropdowns — everything is single-level.

---

## 3. Homepage

The mockup homepage has 9 sections. Below, each section is described as built, with notes on what real content should replace the placeholder text.

### 3.1 Hero

| Element | Mockup Content | Live Site Content | Action |
|---------|---------------|-------------------|--------|
| Badge | "UK Registered Charity No. 1170205" | Charity No. 1171887 / SC052248 | **Fix charity number** |
| Heading | "Better health through **better evidence**" | "HELPING EVERYONE ENJOY GOOD METABOLIC HEALTH" | **Decision needed**: keep mockup wording or use live site's. Mockup wording is stronger. |
| Subtext | "We're a UK charity challenging outdated dietary advice with rigorous science. Real food, not ultra-processed food, is the foundation of good health." | "We are a UK registered charity dedicated to improving public health and saving the NHS money at the same time through sustainable lifestyle changes." | **Decision needed**: mockup copy is punchier — recommend keeping it. |
| Primary CTA | "Learn what we do" → `/about` | "Conference 2026 Tickets" → /conference | **Decision needed**: mockup's is evergreen; live site's is time-sensitive. Consider keeping mockup's but adding conference promo as a Feature Card. |
| Secondary CTA | "Watch our story" (play icon) | "Join Our Support Group" → /support | **Action needed**: source or commission an "our story" video, OR swap for a different CTA. |

### 3.2 Impact Stats (floating card below hero)

| Mockup | Live Site | Action |
|--------|-----------|--------|
| 10 Years | 10 conferences | **Keep** — same idea |
| 9,000+ Members | 9,000+ members | **Keep** |
| 100+ Events | N/A | **Verify**: is 100+ events accurate? |
| 500+ Resources | N/A | **Verify**: is 500+ resources accurate? |

### 3.3 Three Pillars ("Three pillars of our mission")

The mockup has three cards: Advocacy & Policy, Education & Resources, Community & Events. These link to `/our-work`, `/evidence`, and `/get-involved` respectively.

**Action:** This is mockup-original content (not from the live site). **Keep as-is** — it maps well to the site structure.

The live site's equivalent is the "What / Why / How" section:

| Card | Live Content |
|------|-------------|
| WHAT? | A UK registered charity dedicated to informing and implementing healthy decisions for better public health. |
| WHY? | 25% of UK adults are obese, T2D has risen 65% in 10 years, costing the NHS £16bn/year. |
| HOW? | By informing healthcare professionals and the public with evidence-based reports and implementing initiatives. |

**Decision needed:** The mockup's Three Pillars work better as navigation signposts. The live site's "What/Why/How" could be integrated into the About page or the Crisis section instead.

### 3.4 The Crisis Section (dark navy, amber stats)

| Element | Mockup Content | Live Site Content | Action |
|---------|---------------|-------------------|--------|
| Badge | "The Problem We're Solving" | N/A | **Keep** |
| Heading | "The UK metabolic health crisis" | N/A | **Keep** |
| Stat 1 | 4.4M with T2D | N/A | **Verify with PHC team** |
| Stat 2 | 64% overweight/obese | 25% obese (live site) | **Reconcile** — different metrics. 64% = overweight + obese; 25% = obese only. Both may be correct. |
| Stat 3 | £10B NHS cost | £16 billion (live site) | **Reconcile** — different figures. Use PHC's preferred/sourced figure. |
| Stat 4 | 1 in 3 pre-diabetic | T2D risen 65% in 10 years (live site) | **Decision needed**: keep mockup's or use live stat? |
| Quote | "We believe real food is the foundation..." | N/A | **Keep** — good messaging |

### 3.5 Featured Content ("News & resources")

4 placeholder article cards. **Replace with real blog articles** from the live site (see Section 8 for content).

### 3.6 Email Magnet

**Remove the "Check your metabolic health" calculator section.** Replace with a simpler CTA — e.g., newsletter signup or a link to download the Real Food Booklet.

### 3.7 Testimonials

| Mockup (placeholder names) | Live Site (real testimonials) |
|----------------------------|------------------------------|
| Dr Sarah Mitchell, GP | "As a healthcare professional I have often felt exposed and isolated when giving patients advice that is contrary to that given by other healthcare professionals. Being part of the PHC has helped me feel less isolated and empowered." |
| Emma Thompson, Member | "I feel I am supporting a new healthier way of living and playing a small part in the movement towards this." |
| James Okafor, Nutritional Therapist | "Brilliant to have such a dedicated team working on solutions to breaking the control of big food and big pharma over dietary advice — based on science and evidence." |

**Action:** Replace placeholder names and quotes with the real testimonials above. **Source real names and photos** for attributions (live site has quotes but no attributions).

### 3.8 Newsletter Signup

Full-width cyan section with email input. **Action needed:** Integrate with Mailchimp or chosen email provider. The live site uses Mailchimp.

### 3.9 Partners Bar

The mockup shows placeholder logos (NHS, BMJ, University of Oxford, etc.). **PHC does not have partnerships with these organisations.** These must be removed.

**Action:** Ask PHC for a list of any organisations, partners, or supporters whose logos they'd like displayed here. If none, remove this section entirely.

---

## 4. About Page

### 4.1 Hero

| Element | Mockup | Live Site | Action |
|---------|--------|-----------|--------|
| Badge | "About PHC" | N/A | **Keep** |
| Heading | "Championing metabolic health **for everyone**" | "WHAT IS THE PUBLIC HEALTH COLLABORATION?" | **Keep mockup wording** — more compelling |
| Description | "The Public Health Collaboration is a UK registered charity on a mission to widen access to real food and evidence-based lifestyle interventions..." | "Public Health Collaboration (PHC) is a UK registered charity (1171887 / SC052248) dedicated to improving the health of the public and saving the NHS money at the same time." | **Merge**: use mockup's tone but add charity numbers from live site |

### 4.2 Vision & Mission

| Element | Mockup | Live Site | Action |
|---------|--------|-----------|--------|
| Vision | "A world where evidence-based nutrition is at the heart of public health..." | "A society where everyone enjoys good metabolic health." | **Use live site's** — it's the official charity vision |
| Mission | "To improve the nation's health by promoting evidence-based nutrition and lifestyle medicine..." | "To empower, inspire and educate people that most chronic diseases can be prevented and reversed by maintaining good metabolic health through sustainable lifestyle changes." | **Use live site's** — it's the official charity mission |

### 4.3 Core Values

| Mockup Values | Live Site Values |
|---------------|-----------------|
| Evidence First | Ambitious |
| People Before Profit | Attentive |
| Practical Solutions | Compassionate |
| Inclusive Community | Inquisitive |
| | Proactive |
| | Sincere |

**Action: Replace mockup values with the live site's 6 official values.** The mockup has 4 generic values; the live site has 6 specific, branded values with descriptions. Redesign the cards to accommodate 6 values (2×3 grid instead of 4-column).

### 4.4 Timeline

The mockup includes a timeline with milestones from 2016–2026. Most of these are placeholder — only the founding date is confirmed. **The Elevate app has not yet launched** (currently in pilot, launch planned for May 2026).

**Action:** Ask PHC for a list of key milestones to feature. The founding date (2016) is confirmed. All other events in the mockup should be removed and replaced with whatever PHC provides.

### 4.5 Team & Trustees

**Critical replacement needed.** The mockup has placeholder/incorrect team members:

| Mockup (placeholder) | Live Site (real) |
|----------------------|-----------------|
| Dr Sam Mayze | **Sam Feltham** — Director |
| Dr David Unwin | **Sarah James** — Operations Manager |
| Dr Jen Unwin | **Ellen Bennett RD** — Liberate Operations Manager |
| Chris Hill | **Elizabeth LePla** — Volunteer Manager |
| Dr Campbell Murdoch | **Shauna Davis** — Social Media Manager |
| Barbara Sheridan | (no 6th team member) |

**Actions:**
1. Replace all placeholder names with real team members above
2. Source hi-res photos (live site only has 150×150 circle crops — need min 400×400)
3. Source 2–3 sentence bios for each team member
4. Add links to Board of Trustees and Scientific Advisory Committee pages
5. **Source Trustee bios & photos** — names are listed on live site at /trustees/ but not scraped
6. **Source SAC member bios & photos** — page exists at /sac/ but not scraped
7. **Source Patron bios & photos** — page exists at /patrons/ but not scraped

### 4.6 Governance & Accountability

Mockup has: Annual Reports download card + Charity Commission card (No. 1170205).

**Fix charity number to 1171887 / SC052248.**

### 4.7 Three Ambitions

The mockup does **not** include the Three Ambitions, but the live site features them prominently:

1. Reverse the type 2 diabetes and prediabetes epidemic.
2. Get food addiction recognised as an official diagnosis.
3. Undo the childhood obesity crisis.

**Action:** Add the Three Ambitions as a section on the About page. These are core to PHC's identity. Could be placed after the Vision/Mission section.

### 4.8 Vision Card

The live site has a downloadable Vision Card PDF. The mockup doesn't include this.

**Action:** Add as a download in the Governance section or as a standalone card.

---

## 5. Our Work Page

### 5.1 Hero

Mockup: Badge "Our Projects", heading "Making a real **difference**". **Keep as-is.**

### 5.2 Projects Grid

The mockup already contains the correct 7 projects with accurate descriptions and external links. **Minor content adjustments only:**

| Project | Mockup Status | Action |
|---------|--------------|--------|
| The Lifestyle Club | Correct — HSJ award, 700+ helped, 7kg avg | **Keep** |
| Liberate | Correct — UPF addiction, peer-reviewed | **Keep** |
| Real Food Rebellion | Correct — schools programme | **Keep** |
| Real Food Runners | Correct — inclusive running club | **Keep** |
| Volunteer Network | Correct — ambassadors at GP practices | **Keep** |
| Star Jump Challenge | Correct — 25/25, World Diabetes Day | **Keep** |
| Elevate | **Not yet launched** — currently in pilot, launch planned May 2026 | **Update** — description should reflect pilot status |

**Actions:**
- Verify all project descriptions are current with PHC team
- Source consistent project logo images (mockup uses `/images/project-logos/` — check these exist and look good)
- Source lifestyle/action photography for each project (optional enhancement)

### 5.3 Impact Stats Strip

| Mockup | Live Site | Action |
|--------|-----------|--------|
| 700+ TLC participants | 700+ | **Keep** |
| 9,000+ members | 9,000+ | **Keep** |
| 25 days Star Jump | 25 | **Keep** |
| 10 conferences | 10 | **Keep** |

All match. **Keep as-is.**

### 5.4 CTA Section

"Want to support our work?" — "Get involved" + "Donate now". **Keep as-is.**

### 5.5 Missing: Introduction Text

The live site has an introduction paragraph: "At the Public Health Collaboration we have many projects happening and below you can explore what we're up to to help as many people as possible obtain and maintain a healthy lifestyle."

**Decision needed:** Add intro text above the grid, or is the hero subtitle sufficient?

---

## 6. Evidence Page

### 6.1 Hero

Mockup: Badge "The Evidence", heading "Science-backed **health guidance**". **Keep.**

### 6.2 Evidence Library ("Browse By Category")

The mockup has 3 cards with placeholder counts:

| Category | Mockup Count | Action |
|----------|-------------|--------|
| Research | 120 items | **Replace with real count** — live site lists 11 evidence links |
| FAQs | 45 items | **Replace with real count** — live site has 19 FAQ questions |
| Resources | 80 items | **Replace with real count** — live site has 14 resource links |

### 6.3 Featured Research

The mockup has 3 placeholder papers:

| Mockup (placeholder) | Action |
|---------------------|--------|
| "Low-carbohydrate diets for Type 2 diabetes" — BMJ Nutrition (2025) | Replace with real paper |
| "Ultra-processed food consumption and metabolic syndrome" — The Lancet (2024) | Replace with real paper |
| "Real food interventions in primary care" — Journal of Insulin Resistance (2024) | Replace with real paper |

**Replace with actual PHC research papers from the live site:**

1. Healthy Eating Guidelines & Weight Loss Advice For The UK
2. Ambassador & Healthcare Professionals Case Study Book
3. RCTs Table Comparing Low-Carb To Low-Fat Diets (67 RCTs; low-carb won 36, low-fat won 0)
4. BMJ Paper — Dr Unwin's 6 Year Results
5. BMJ Paper — Ambassador Evaluation Study
6. BMJ Paper — Healthcare Professional Qualitative Study
7. BJGP Paper — Adapting Diabetes Medication
8. BDA Paper — Dietary strategies for remission of type 2 diabetes
9. BMJ Paper — Dr David Unwin Obesity Editorial
10. NOF — Eat Fat, Cut The Carbs and Avoid Snacking
11. RCTs Table Comparing Low-Carb To Low-Fat With T2D

**Action:** Select 3 to feature, list all 11 in the Evidence Library section.

### 6.4 FAQ Accordion

The mockup has 8 generic questions. **Replace with the real 19 FAQs from the live site**, organised into tabs/categories:

| Tab | Questions | Topics |
|-----|-----------|--------|
| About PHC | 5 | What is PHC, funding, statistics sources, free services |
| Healthcare Professionals | 1 | Can NHS professionals advise low-carb? (Yes, with references) |
| Members | 1 | Membership benefits |
| Real Food | 5 | Butter/CVD, heart disease causes, cost, low-carb evidence, T2D |
| Low Carb | 7 | Breakfast ideas, keto flu, medication, constipation, travel, drinks, cheat meals |

**Decision needed:** Keep the mockup's accordion format or switch to a tabbed layout matching the live site's 5 tabs? Recommend: **tabbed accordion** — tabs to filter by category, accordion within each tab.

### 6.5 Practical Resources ("Downloads")

| Mockup (placeholder counts) | Live Site Equivalent | Action |
|-----------------------------|---------------------|--------|
| Real Food Booklet (50,000+ downloads) | Real Food Booklets at /booklets/ | **Replace** — source actual PDFs and real download count |
| Sugar Infographic (25,000+ downloads) | Sugar Infographics at /sugar/ | **Replace** — source actual infographic images |
| Healthcare Professional Pack (8,000+ downloads) | Low Carb Booklet by Dr Unwin (PDF) | **Replace** — source actual PDF |

**Additional resources from the live site to include:**
- Norwood Protocol for Doctors and Nurses (DOCX)
- Vision Card (PDF)
- Real Food Rocks Cook Book (Amazon link)
- Freshwell Low Carb Project App
- RCGP eLearning Module
- Conference Videos (YouTube)

### 6.6 Key Research Data (not in mockup)

The live site prominently features this data:

| Data Point | Value |
|------------|-------|
| RCTs comparing low-carb vs low-fat | 67 total |
| Low-carb significantly won | 36 of 67 |
| Low-fat significantly won | 0 of 67 |

**Action:** Add as a highlight section on the Evidence page — this is compelling and unique to PHC.

---

## 7. Get Involved Page

### 7.1 Hero

Mockup: Badge "Get Involved", heading "Join the **movement**". **Keep.**

### 7.2 Audience Pathways ("Find your path")

The mockup has 3 cards matching the live site's proposed audience segmentation:

| Mockup | Live Site | Action |
|--------|-----------|--------|
| Healthcare Professional — clinical network, CPD | Healthcare Professionals — Volunteer Network, evidence-based resources | **Merge** — use live site's specific offerings |
| Member of the Public — real food resources, local support | General Public — become a member, join support group, attend conference, donate | **Merge** |
| Organisation — workplace wellness, conference sponsorship | Organisations — sponsor conference, partner on research, corporate giving | **Merge** |

### 7.3 Involvement Options

| Mockup | Live Site Content to Insert | Action |
|--------|---------------------------|--------|
| Membership — £75/year (FEATURED, "Most Popular") | UK: £75/yr, Pensioner: £50/yr, Student: £50/yr, International: £100/yr | **Add all 4 tiers** — mockup only shows one price |
| Volunteer — ambassador programme | Ambassador (UK, 2-3hrs/week) + Associate (International, 2-3hrs/month) | **Add both roles** with details |
| Donate — funds resources | JustGiving, Give As You Live, eNewsletter £1, T-Shirt | **Add specific donation channels** |
| Events | Annual Conference, Star Jump Challenge, Support Groups | **Keep** |
| Partnerships | N/A on live site | **Keep** — aspirational but good |

**Membership benefits (from live site):**
- Monthly eNewsletter
- #RealFoodRocks t-shirt
- Printed reports posted when published
- 3 sets of real food patient booklet packs
- Discount on annual conference ticket

### 7.4 Donation Highlight

| Element | Mockup | Action |
|---------|--------|--------|
| "PHC accepts NO industry funding" | **Verify** with PHC team — live site says "funded by individual members of the public" |
| £10 = 20 booklets | **Verify** — is this accurate? |
| £50 = train an ambassador | **Verify** |
| £100 = support group for a month | **Verify** |
| Donate button | Link to JustGiving: `https://checkout.justgiving.com/c/3626028` |
| "Set up monthly giving" button | **Source URL** — not currently on live site |

### 7.5 Member Testimonials

**Replace mockup placeholder testimonials with real ones from the live site:**

1. > "I feel I am supporting a new healthier way of living and playing a small part in the movement towards this."

2. > "Brilliant to have such a dedicated team working on solutions to breaking the control of big food and big pharma over dietary advice — based on science and evidence."

3. > "As a healthcare professional I have often felt exposed and isolated when giving patients advice that is contrary to that given by other healthcare professionals. Being part of the PHC has helped me feel less isolated and empowered."

**Action needed:** Source names and photos for attribution (live site has quotes only).

### 7.6 Volunteer Application Form (not in mockup)

The live site has a volunteer application form with 6 fields. **Decision needed:** Include on the Get Involved page or handle via external link?

| Field | Required |
|-------|----------|
| Name | Yes |
| Email | Yes |
| Phone Number | Yes |
| Location | Yes |
| Volunteer type (Ambassador / Associate) | Yes |
| Why would you like to become a PHC Volunteer? | Yes |

### 7.7 Ambassador Map (not in mockup)

The live site has a Google My Map with 100+ ambassador locations (64,427 views).

**Action:** Embed on the Get Involved page or the Our Work page under "Volunteer Network".

---

## 8. News Page

### 8.1 Hero

Mockup: Badge "Latest", heading "News & **insights**". **Keep.**

### 8.2 Category Filter

Mockup has pill toggles: All | News | Research | Resources | Blog. **Keep this UX pattern.**

### 8.3 Articles

Replace 8 placeholder articles with the 11 real blog posts from the live site:

| # | Title | Date | Has Image |
|---|-------|------|-----------|
| 1 | A Summary Report of the PHC Conference 2025 | Sep 5, 2025 | Yes |
| 2 | PHC, BDA and X-PERT Health Urge NICE to Update Their Type 2 Diabetes Guidelines | Mar 24, 2025 | Yes |
| 3 | Thank You, Helen! | Mar 10, 2025 | No |
| 4 | The Weight Loss Jab Debate: PHC's Response to BBC Panorama | Jan 17, 2025 | Yes |
| 5 | Say 'Yes!' to Our Children's Real Food Rebellion | Nov 20, 2024 | No |
| 6 | BSEM Scientific Conference — Unravelling Brain Health | Sep 17, 2024 | No |
| 7 | PHC Brings World's Metabolic Health Experts to the UK | May 9, 2024 | No |
| 8 | We're Looking for a Social Media Manager to Join Team PHC | Mar 13, 2024 | No |
| 9 | New Chair of Trustees Announcement | Jul 27, 2023 | No |
| 10 | We're Looking for an Administrator to Join Team PHC | Jul 24, 2023 | No |
| 11 | TO HELP US 'FIX THE NHS — ONE PERSON AT A TIME' | Mar 30, 2023 | No |

**Actions:**
- Assign categories (News, Research, Resources, Blog) to each article for filter functionality
- Source featured images for articles that don't have them (only 3 of 11 have images)
- Scrape full article content from the live site for individual article pages
- The mockup does not include an individual article/post page — **one needs to be designed**

### 8.4 Newsletter Signup

Same as homepage newsletter. **Keep, integrate with email provider.**

---

## 9. Footer

### Mockup Structure (5 columns)

| Column | Mockup Links | Live Site Links | Action |
|--------|-------------|----------------|--------|
| **Brand** | Logo, tagline, info@phcuk.org, "United Kingdom" | No email displayed on live site | **Verify** info@phcuk.org is correct |
| **About PHC** | Our Mission, Team & Trustees, Governance, Annual Reports | N/A | **Keep** |
| **Our Work** | Advocacy & Policy, Education, Real Food Rebellion, Elevate App, Annual Conference | N/A | **Keep** — adjust links to match actual pages |
| **Get Involved** | Become a Member, Volunteer, Donate, Events, Partnerships | Become A Member, Donate, Fundraise, Volunteer | **Merge** |
| **Resources** | Evidence Library, Real Food Booklets, FAQs, News & Blog, Press Enquiries | Sugar Charts, Conference, Blog, Media Centre, RCTs, Contact | **Keep mockup's** — cleaner |

### Bottom Bar

| Element | Mockup | Live Site | Action |
|---------|--------|-----------|--------|
| Charity number | 1170205 | 1171887 / SC052248 | **Fix** |
| Legal links | Privacy Policy, Terms, Cookie Policy | Disclaimer, Cookie Policy, Privacy Policy, Safeguarding, Terms | **Add Disclaimer and Safeguarding** to mockup |

---

## 10. Contact Page

The mockup does **not** include a Contact page, but the live site has one and the footer links to it.

### Content to Build

| Element | Live Site Content |
|---------|------------------|
| Intro text | "Please use the form below to contact us. However, if you are unhappy about any aspect of Public Health Collaboration, please follow our complaints procedure by clicking here." |
| Complaints procedure | PDF download |
| Form fields | Name, Email, Phone Number, Question (all required) |
| Physical address | Not displayed on live site |

**Action:** Design a Contact page following the mockup's design language (PageHero + form). Use the mockup's form styling patterns. Decide on form backend: Formspree, Netlify Forms, or custom.

---

## 11. Brand & Organisation Data

### Correct Details (use these everywhere)

| Field | Value |
|-------|-------|
| Name | Public Health Collaboration (PHC) |
| Type | UK Registered Charity |
| Charity No. (England & Wales) | **1171887** |
| Charity No. (Scotland) | **SC052248** |
| Website | phcuk.org |
| Tagline | "Dedicated to helping cultivate a society where everyone enjoys good metabolic health" |
| Vision | "A society where everyone enjoys good metabolic health." |
| Mission | "To empower, inspire and educate people that most chronic diseases can be prevented and reversed by maintaining good metabolic health through sustainable lifestyle changes." |

**The mockup uses charity number 1170205 in multiple places — this must be corrected to 1171887 / SC052248.**

### Three Ambitions
1. Reverse the type 2 diabetes and prediabetes epidemic.
2. Get food addiction recognised as an official diagnosis.
3. Undo the childhood obesity crisis.

### Values (6)
| Value | Description |
|-------|-------------|
| Ambitious | We have a strong desire and determination to create the change we want to see. |
| Attentive | We listen to everyone with care and attention. |
| Compassionate | We appreciate everyone's perspective and will do our best to support them. |
| Inquisitive | We like to ask questions and are always eager to learn. |
| Proactive | We like to take action and create the change we want to see. |
| Sincere | We genuinely want humanity to become healthier and happier. |

### Core Team
| Name | Role |
|------|------|
| Sam Feltham | Director |
| Sarah James | Operations Manager |
| Ellen Bennett RD | Liberate Operations Manager |
| Elizabeth LePla | Volunteer Manager |
| Shauna Davis | Social Media Manager |

### Social Media
| Platform | URL | Handle |
|----------|-----|--------|
| Facebook | facebook.com/PHCukorg | @PHCukorg |
| Instagram | instagram.com/PHCukorg | @PHCukorg |
| LinkedIn | linkedin.com/company/public-health-collaboration | public-health-collaboration |
| YouTube | youtube.com/PHCukorg | @PHCukorg |
| X (Twitter) | twitter.com/PHCukorg | @PHCukorg |

---

## 12. SEO & URL Mapping

### Redirects Required

| Current URL | New Route | Notes |
|-------------|-----------|-------|
| phcuk.org/ | / | Direct |
| phcuk.org/about/ | /about | Direct |
| phcuk.org/projects/ | /our-work | Redirect |
| phcuk.org/evidence/ | /evidence | Direct |
| phcuk.org/resources/ | /evidence | Merge into evidence |
| phcuk.org/donate/ | /get-involved | Redirect |
| phcuk.org/plans/memberships/ | /get-involved | Redirect |
| phcuk.org/ambassadors/ | /get-involved | Redirect |
| phcuk.org/volunteer/ | /get-involved | Redirect |
| phcuk.org/blog/ | /news | Redirect |
| phcuk.org/contact/ | /contact | Direct |
| phcuk.org/sugar/ | /evidence (or anchor) | Redirect |
| phcuk.org/conference/ | External link | Redirect to conference site |
| phcuk.org/support/ | /get-involved | Redirect |
| phcuk.org/rfr/ | External link | |
| phcuk.org/map/ | /get-involved or /our-work | Redirect |
| phcuk.org/booklets/ | /evidence | Redirect |
| phcuk.org/testimonials/ | /about or /get-involved | Redirect |

---

## 13. Technology Stack

| Aspect | Mockup / Redesign | Current (WordPress) |
|--------|-------------------|---------------------|
| Framework | Next.js 15 (static export) | WordPress 6.9.4 |
| Styling | Tailwind CSS v4 | Theme CSS |
| Animations | Framer Motion | N/A |
| Ecommerce | External (JustGiving) | WooCommerce |
| Community | N/A (removed) | BuddyBoss Platform |
| Forms | Formspree / Netlify Forms (TBD) | Microsoft Forms |
| Maps | Google Maps embed | Google My Maps embed |
| Video | YouTube embeds | YouTube embeds |
| Hosting | Netlify (static) | WordPress hosting |
| Email | Mailchimp integration (TBD) | Mailchimp |

---

## 14. Data Requests — What We Need From PHC

**The mockup's design and structure are approved. To complete the site, we need specific content from the PHC team. Please work through each checklist below and email the items to the dev team.**

**Priority key:** 🔴 **Blocks launch** | 🟠 **Needed soon after launch** | 🟢 **Nice to have**

---

### 14.1 People: Bios & Photos 🔴

We need a **2–3 sentence bio** and a **hi-res headshot photo** (minimum 400×400px, consistent style) for each person. The mockup has placeholder names — none of these go live until replaced with real people.

**Note:** The live site only has 150×150px circle crops — we need the original high-resolution source files.

#### Core Team

- ☐ **Sam Feltham** (Director) — bio (2–3 sentences) + hi-res headshot
- ☐ **Sarah James** (Operations Manager) — bio + hi-res headshot
- ☐ **Ellen Bennett RD** (Liberate Ops Manager) — bio + hi-res headshot
- ☐ **Elizabeth LePla** (Volunteer Manager) — bio + hi-res headshot
- ☐ **Shauna Davis** (Social Media Manager) — bio + hi-res headshot

#### Director Extended Bio

- ☐ **Sam Feltham full bio** — background, qualifications, how PHC was founded, personal story (approx. 150–250 words). This appears on the About page.

#### Board of Trustees

- ☐ **List of all current trustees** — for each: name, 1–2 sentence bio, hi-res headshot

#### Scientific Advisory Committee

- ☐ **List of all current SAC members** — for each: name, credentials/affiliation, 1–2 sentence bio, hi-res headshot

#### Patrons 🟠

- ☐ **List of all current patrons** — for each: name, 1–2 sentence bio, hi-res headshot

---

### 14.2 Statistics & Facts to Verify 🟠

The mockup contains placeholder statistics. Please confirm or correct each one and provide source citations.

#### Homepage — Crisis Section

The mockup uses these figures. The live site uses different ones (25% obese, 65% T2D rise, £16bn). Please confirm which PHC wants to use.

- ☐ "4.4 million people living with Type 2 diabetes" — correct? If not, what figure and source?
- ☐ "64% of UK adults are overweight or obese" — correct? If not, what figure and source?
- ☐ "£10 billion annual cost to the NHS" — correct? If not, what figure and source?
- ☐ "1 in 3 adults are pre-diabetic" — correct? If not, what figure and source?

#### Homepage — Impact Stats

- ☐ "10 Years" — correct?
- ☐ "9,000+ Members" — correct?
- ☐ "100+ Events" — correct? (not on the live site — needs verifying)
- ☐ "500+ Resources" — correct? (not on the live site — needs verifying)

#### Get Involved — Donation Impact Amounts

- ☐ "£10 provides 20 Real Food Booklets" — correct?
- ☐ "£50 can train an ambassador" — correct?
- ☐ "£100 supports a group for a month" — correct?
- ☐ "PHC accepts NO industry funding" — correct?

---

### 14.3 Partners / Supporters Bar 🔴

The mockup shows placeholder logos (NHS, BMJ, University of Oxford, Kings College London, The Lancet). **PHC does not have partnerships with these organisations**, so they will be removed.

- ☐ **Please provide a list of any organisations, partners, or supporters whose logos you'd like displayed.** If none, we'll remove this section entirely.

---

### 14.4 Timeline Milestones 🟠

The About page has a timeline. The founding date (2016) is confirmed. All other events in the mockup are placeholder (note: the Elevate app has not yet launched — it's in pilot with launch planned for May 2026).

- ☐ **Please provide a list of key milestones** (year + event) for the timeline. Examples: first conference, first project launch, major publications, awards, membership milestones, etc.

---

### 14.5 Testimonials — Names & Attribution 🟠

The live site has these 3 testimonials but no names or photos attached. We need attributions to use them on the website.

- ☐ **Who said this?** "I feel I am supporting a new healthier way of living and playing a small part in the movement towards this." — name, role, photo
- ☐ **Who said this?** "Brilliant to have such a dedicated team working on solutions to breaking the control of big food and big pharma over dietary advice — based on science and evidence." — name, role, photo
- ☐ **Who said this?** "As a healthcare professional I have often felt exposed and isolated when giving patients advice that is contrary to that given by other healthcare professionals. Being part of the PHC has helped me feel less isolated and empowered." — name, role, photo
- ☐ **Any additional testimonials?** If so, please provide: quote, person's name, role/title, and a photo.

---

### 14.6 Editorial Decisions

These are design/content choices where the mockup and live site differ. Please indicate your preference.

#### Homepage Hero Heading

- ☐ **Option A (mockup):** "Better health through better evidence"
- ☐ **Option B (live site):** "Helping everyone enjoy good metabolic health"
- ☐ **Option C:** Something else — please provide wording

#### Homepage Hero Subtext

- ☐ **Option A (mockup):** "We're a UK charity challenging outdated dietary advice with rigorous science. Real food, not ultra-processed food, is the foundation of good health."
- ☐ **Option B (live site):** "We are a UK registered charity dedicated to improving public health and saving the NHS money at the same time through sustainable lifestyle changes."
- ☐ **Option C:** Something else — please provide wording

#### Homepage Hero CTA Buttons

- ☐ **Primary button:** "Learn what we do" (evergreen) / "Conference 2026 Tickets" (time-sensitive) / Other
- ☐ **Secondary button:** "Watch our story" (do you have a video?) / "Join Our Support Group" / Other

#### Our Work — Introduction Text

- ☐ Add the live site's intro text above the projects grid
- ☐ The hero subtitle is sufficient — no intro text needed
- ☐ New intro text — please provide wording

#### FAQ Format

- ☐ Single accordion list (simpler, as in mockup)
- ☐ Tabbed by category like the live site (About PHC, Healthcare Professionals, Members, Real Food, Low Carb)

#### Ambassador Map Placement

- ☐ Get Involved page / Our Work page / Both / Don't include

#### Volunteer Application Form

- ☐ Include on the Get Involved page
- ☐ Link to an external form — please provide URL
- ☐ Not needed for launch

---

### 14.7 Accounts, Credentials & Integrations

We need access details to connect the following services.

- ☐ **Mailchimp** 🔴 — API key or embed code for newsletter signup form
- ☐ **Google Analytics** 🟠 — GA4 Measurement ID (G-XXXXXXXXXX)
- ☐ **JustGiving (donations)** 🔴 — confirm checkout URL still active: `checkout.justgiving.com/c/3626028`
- ☐ **JustGiving (fundraising)** 🟠 — confirm URL: `justgiving.com/phcukorg`
- ☐ **Give As You Live** 🟠 — confirm URL: `giveasyoulive.com/join/phc`
- ☐ **NowDonate (£1 eNewsletter)** 🟠 — is this still active? If so, provide URL
- ☐ **Contact email** 🔴 — mockup uses `info@phcuk.org` — is this correct?
- ☐ **Google My Maps (ambassador map)** 🟠 — embed code or sharing link
- ☐ **Monthly giving** 🟠 — is there a monthly giving / direct debit URL?

---

### 14.8 Assets to Provide

Please email or share via folder. All items listed with minimum specifications.

#### Photos & Images 🔴

- ☐ Hi-res team headshots (5 people) — min 400×400px, consistent style, PNG or JPG
- ☐ Trustee headshots — min 400×400px
- ☐ SAC member headshots — min 400×400px
- ☐ Patron headshots — min 400×400px
- ☐ Hero/banner photography — landscape, min 1920×1080px, lifestyle/health themed
- ☐ Project photography (7 projects) — action/lifestyle shots for each project

#### Documents & PDFs 🔴

- ☐ Privacy Policy (full text, current version)
- ☐ Terms & Conditions (full text, current version)
- ☐ Cookie Policy (full text, current version)
- ☐ Disclaimer (full text, current version)
- ☐ Safeguarding Policy (full text, current version)
- ☐ Complaints Procedure PDF
- ☐ Annual Report(s) PDF — most recent year(s)
- ☐ Vision Card PDF
- ☐ Real Food Booklet PDFs — all packs from /booklets/
- ☐ Low Carb Booklet (Dr Unwin) PDF
- ☐ Norwood Protocol DOCX

#### Brand Assets 🔴

- ☐ PHC logo — SVG and high-res PNG, light and dark versions
- ☐ PHC favicon — SVG or ICO format
- ☐ Project logos (7 projects) — consistent format, transparent background
- ☐ Sugar infographic images — all from /sugar/ page

---

### 14.9 Content We Can Scrape (No Action Required From PHC)

These items will be pulled directly from the live site by the development team. Listed for transparency — **no action required.**

| Item | Source | Status |
|------|--------|--------|
| 11 blog post articles (full text) | phcuk.org/blog/ | Will scrape |
| 19 FAQ questions & answers | Already captured in this spec | ✅ Done |
| 11 evidence paper titles & DOIs | Already captured in this spec | ✅ Done |
| Membership tiers & pricing | Already captured in this spec | ✅ Done |
| Donation options & URLs | Already captured in this spec | ✅ Done |
| Volunteer role descriptions | Already captured in this spec | ✅ Done |
| Social media links & handles | Already captured in this spec | ✅ Done |
| Values (6) with descriptions | Already captured in this spec | ✅ Done |
| Vision, Mission, Ambitions text | Already captured in this spec | ✅ Done |
| Contact form field structure | Already captured in this spec | ✅ Done |

---

### 14.10 Summary

| Category | From PHC | To Scrape | To Design/Build |
|----------|----------|-----------|-----------------|
| 🔴 **Blocks launch** | 17 | 6 | 4 |
| 🟠 **Soon after launch** | 11 | 3 | 4 |
| 🟢 **Nice to have** | 0 | 0 | 2 |
| **Total** | **28** | **9** | **10** |

**Grand total: 47 items** (28 from PHC team, 9 scraped from live site, 10 designed/built by dev team)

---

### Next Steps

1. **PHC team:** Work through Sections 14.1–14.8 above and email items to the dev team.
2. **Dev team this week:** Scrape live site content (blog posts, legal pages, sugar infographics, booklet PDFs).
3. **Dev team in parallel:** Fix all known errors in the mockup (charity number, vision, mission, values). Remove calculator section. Remove placeholder partners bar. Update Elevate description to reflect pilot status.
4. **Once PHC responds:** Replace placeholder team, trustees, SAC, testimonials with real content.
5. **Design:** Contact page, blog post page, Three Ambitions section, RCTs highlight section.
6. **Integration:** Form backend, Mailchimp, cookie consent, analytics.
7. **Launch review:** All 🔴 items resolved, redirects configured, final sign-off.
