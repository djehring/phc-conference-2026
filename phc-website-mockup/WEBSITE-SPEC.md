# PHC Website Redesign - Formal Content Specification

> Compiled from live site scrape of phcuk.org (March 2026).
> This document captures the real content from the current WordPress site to inform the Next.js redesign.

---

## Table of Contents

1. [Brand & Organisation](#1-brand--organisation)
2. [Navigation & Information Architecture](#2-navigation--information-architecture)
3. [Homepage](#3-homepage)
4. [About Page](#4-about-page)
5. [Our Work (Projects) Page](#5-our-work-projects-page)
6. [Evidence Page](#6-evidence-page)
7. [Get Involved Page](#7-get-involved-page-new)
8. [News & Blog Page](#8-news--blog-page)
9. [Membership Page](#9-membership-page)
10. [Donate Page](#10-donate-page)
11. [Contact Page](#11-contact-page)
12. [Volunteer / Ambassadors Page](#12-volunteer--ambassadors-page)
13. [Resources Page](#13-resources-page)
14. [Footer](#14-footer)
15. [FAQs](#15-faqs)
16. [Social Media](#16-social-media)
17. [Key Statistics](#17-key-statistics)
18. [SEO & Metadata](#18-seo--metadata)

---

## 1. Brand & Organisation

| Field | Value |
|-------|-------|
| **Name** | Public Health Collaboration (PHC) |
| **Type** | UK Registered Charity |
| **Charity No. (England & Wales)** | 1171887 |
| **Charity No. (Scotland)** | SC052248 |
| **Website** | phcuk.org |
| **Logo (SVG)** | https://phcuk.org/wp-content/uploads/PHC_logo.svg |
| **Favicon (SVG)** | https://phcuk.org/wp-content/uploads/PHC_favicon.svg |
| **Tagline** | "Dedicated to helping cultivate a society where everyone enjoys good metabolic health" |

### Vision
> A society where everyone enjoys good metabolic health.

### Mission
> To empower, inspire and educate people that most chronic diseases can be prevented and reversed by maintaining good metabolic health through sustainable lifestyle changes.

### Three Ambitions
1. Reverse the type 2 diabetes and prediabetes epidemic.
2. Get food addiction recognised as an official diagnosis.
3. Undo the childhood obesity crisis.

### Values
| Value | Description |
|-------|-------------|
| **Ambitious** | We have a strong desire and determination to create the change we want to see. |
| **Attentive** | We listen to everyone with care and attention. |
| **Compassionate** | We appreciate everyone's perspective and will do our best to support them. |
| **Inquisitive** | We like to ask questions and are always eager to learn. |
| **Proactive** | We like to take action and create the change we want to see. |
| **Sincere** | We genuinely want humanity to become healthier and happier. |

### Core Team
| Name | Role | Image |
|------|------|-------|
| Sam Feltham | Director | Sam-Feltham-Circle.png |
| Sarah James | Operations Manager | Sarah-James-Circle.png |
| Ellen Bennett RD | Liberate Operations Manager | Ellen-Calteau.png |
| Elizabeth LePla | Volunteer Manager | Liz.png |
| Shauna Davis | Social Media Manager | Shauna.png |

**Additional leadership:** Board of Trustees (/trustees/), Scientific Advisory Committee (/sac/), Patrons (/patrons/)

---

## 2. Navigation & Information Architecture

### Current Site (WordPress)
```
Home
About ─── About / FAQ / Annual Reports / Patrons / S.A.C. / Trustees / Director / Conference
Conference
Projects
Resources ─── Evidence / Support Course / Ambassadors / Case Studies / Videos / Sugar Charts / Booklets / Map / Testimonials / FAQs / Papers (multiple)
Donate ─── Donate / Membership / Fundraise / Give As You Live / Not Just Travel / Volunteer
Study (external)
Lifestyle (/support/)
Volunteer (/ambassadors/)
```

### Proposed Redesign IA (simplified)
```
Home
About ─── Mission & Values / Team / Trustees / Patrons / Annual Reports
Our Work ─── 7 Projects (TLC, Liberate, RFR, Real Food Runners, Volunteer Network, Star Jump, Elevate)
Evidence ─── Research Papers / FAQs / Resources & Downloads
Get Involved ─── Membership / Volunteer / Donate / Fundraise / Events
News ─── Blog articles + Press releases
Contact
```

---

## 3. Homepage

### Hero Section
- **Heading:** "HELPING EVERYONE ENJOY GOOD METABOLIC HEALTH"
- **Subtext:** "We are a UK registered charity dedicated to improving public health and saving the NHS money at the same time through sustainable lifestyle changes."
- **Primary CTA:** Conference 2026 Tickets → /conference
- **Secondary CTA:** Join Our Support Group → /support

### Feature Cards (5 cards on live site)
1. **Conference 2026 Tickets** — "Celebrating our 10th anniversary, join us in London on 16th and 17th May 2026. With the likes of Dr Ben Bikman, Nina Teicholz and many more world renowned speakers, this will be our biggest and brightest event ever."
2. **Donate to Real Food Rebellion** — "Support our schools programme, Real Food Rebellion by clicking here to find out more and donate what you can to help us in our efforts to undo the childhood obesity crisis."
3. **Sugar Infographics** — "These sugar infographics help people understand the approximate affect various foods may have on their blood sugar in terms of a 4 gram teaspoon of sugar." → /sugar/
4. **Watch Conference Videos** — "Watch videos from all of our previous conferences. Click here to watch for free on YouTube." → YouTube
5. **Join Our Support Group** — "Through our Ambassadors Programme we host a weekly online lifestyle support group." → /support

### What / Why / How Cards
| Card | Content |
|------|---------|
| **WHAT?** | A UK registered charity dedicated to informing and implementing healthy decisions for better public health. |
| **WHY?** | In the UK, 25% of adults are obese and type 2 diabetes has risen by 65% in 10 years, both cost the NHS 16 billion a year. |
| **HOW?** | By informing healthcare professionals and the public with evidence-based reports and implementing initiatives. |

### Membership Promotion
- **Heading:** "THINKING ABOUT BECOMING A MEMBER?"
- **Body:** "Whether you're a passionate healthcare professional or a passionate member of the public, as a PHC member you will receive our monthly newsletter, a members t-shirt and 3 sets of real food booklet packs to help spread the word. However, a PHC annual membership doesn't just mean getting all of these bits and bobs. It means you're part of a movement that wants to turn the tide on public health and support the cause of eating real food, avoiding fake food and being active everyday."
- **CTA:** BECOME A MEMBER → /plans/memberships/

### FAQ Section
See [Section 15: FAQs](#15-faqs) for full content.

---

## 4. About Page

### Section 1: Introduction
**Heading:** "WHAT IS THE PUBLIC HEALTH COLLABORATION?"

**Body:** "Public Health Collaboration (PHC) is a UK registered charity (1171887 / SC052248) dedicated to improving the health of the public and saving the NHS money at the same time. We do this through various projects, but at the heart of it all is our passion to help people become healthier and happier. If you would like to support our work, please consider becoming a volunteer or donate to us by becoming a member."

### Section 2: Vision
> A society where everyone enjoys good metabolic health.

### Section 3: Mission
> To empower, inspire and educate people that most chronic diseases can be prevented and reversed by maintaining good metabolic health through sustainable lifestyle changes.

### Section 4: Values
(See Brand section above — 6 values: Ambitious, Attentive, Compassionate, Inquisitive, Proactive, Sincere)

### Section 5: Ambitions
1. Reverse the type 2 diabetes and prediabetes epidemic.
2. Get food addiction recognised as an official diagnosis.
3. Undo the childhood obesity crisis.

**Supporting text:** "We will achieve these ambitions by delivering high-quality projects, collaborating with universities to conduct robust research and advocating for the changes we want to see. Through this process we aim to build a society where everyone enjoys good metabolic health."

### Section 6: Vision Card
- Downloadable PDF: Public-Health-Collaboration-Vision-Card.pdf
- Image preview available

### Section 7: Team
(See Core Team table above)

**Links to:** Board of Trustees, Scientific Advisory Committee

---

## 5. Our Work (Projects) Page

### Introduction
"At the Public Health Collaboration we have many projects happening and below you can explore what we're up to to help as many people as possible obtain and maintain a healthy lifestyle."

### 7 Active Projects

#### 1. The Lifestyle Club (TLC)
- **URL:** https://www.thelifestyleclub.uk/
- **Logo:** project-logos/tlc.png
- **Description:** HSJ Award-winning, QISMET-accredited online health coaching programme. 8-week diet and lifestyle course for people living with Type 2 diabetes and prediabetes.
- **Key facts:**
  - Small groups (max 12) with printed 100-page handbook
  - Over 700 people helped, many achieving T2D remission
  - Average 7kg weight loss and HbA1c reduction of -10.9

#### 2. Liberate
- **URL:** https://liberatetoday.org/
- **Logo:** project-logos/liberate.png
- **Description:** Online, peer-supported psychoeducational programme for adults who self-identify with ultra-processed food addiction. Freedom from obsessive eating.
- **Key facts:**
  - 8-week course with one year of ongoing support
  - Two pathways: abstinence or harm-reduction approach
  - Peer-reviewed research published in Frontiers in Psychiatry

#### 3. Real Food Rebellion (RFR)
- **URL:** https://phcuk.org/rfr/
- **Logo:** project-logos/rfr.png
- **Description:** School-based educational initiative teaching children and young people to make healthier food choices by understanding the dangers of ultra-processed foods.
- **Key facts:**
  - Curriculum for primary and secondary schools
  - Teaches students to spot misleading food marketing
  - Developed collaboratively by teachers and health professionals

#### 4. Real Food Runners
- **URL:** https://realfoodrunners.org/
- **Logo:** project-logos/rfr-runners.png
- **Description:** Informal, inclusive running club for individuals and families passionate about improving their health through real food lifestyles and community activity.
- **Key facts:**
  - Affiliated parkrun group and regional meetups
  - Welcomes all fitness levels and families
  - Active community raising metabolic health awareness

#### 5. Volunteer Network (Ambassadors)
- **URL:** https://phcuk.org/ambassadors/
- **Logo:** project-logos/volunteer.png (PHC logo)
- **Description:** Hundreds of volunteers across the UK and internationally helping cultivate a society where everyone enjoys good metabolic health, working through GP practices and communities.
- **Key facts:**
  - Ambassadors partner with GP practices for lifestyle groups
  - International associates support remotely
  - Impact documented in BMJ and BJGP publications
- **Interactive map:** Google My Map showing 100+ ambassador locations across the UK

#### 6. The Star Jump Challenge
- **URL:** https://thestarjumpchallenge.org/
- **Logo:** project-logos/starjump.png
- **Description:** Fundraising and awareness campaign: 25 star jumps per day for 25 days around World Diabetes Day, inspired by the 25 daily diabetes-related amputations in the UK.
- **Key facts:**
  - Five difficulty levels accessible to all fitness levels
  - Funds NHS-delivered T2D remission courses
  - Supports research collaboration with University of Surrey

#### 7. Elevate
- **URL:** https://elevate-me.life/
- **Logo:** project-logos/elevate.png
- **Description:** Comprehensive digital health platform providing evidence-based support across nutrition, exercise, sleep, and mental wellbeing — built on the award-winning TLC programme.
- **Key facts:**
  - AI-enhanced meal planning with 60+ nutritional data points
  - Structured exercise, sleep, and mental wellbeing tools
  - Professional dashboard for healthcare practitioners

### Impact Statistics
| Metric | Value |
|--------|-------|
| TLC programme participants | 700+ |
| Members and supporters | 9,000+ |
| Star Jump Challenge days | 25 |
| Annual conferences held | 10 |

---

## 6. Evidence Page

### Introduction
The live evidence page is a simple list of links to research papers and evidence documents.

### Evidence Links (11 items)
1. **Healthy Eating Guidelines & Weight Loss Advice For The UK** → /evidence/healthy-eating-guidelines-weight-loss-advice-for-the-uk/
2. **Ambassador & Healthcare Professionals Case Study Book** → /evidence/casestudybook/
3. **RCTs Table Comparing Low-Carb To Low-Fat Diets** → /evidence/rcts/
4. **RCTs Table Comparing Low-Carb To Low-Fat Diets With Type 2 Diabetes** → /evidence/t2d/
5. **Eat Fat, Cut The Carbs and Avoid Snacking To Reverse Obesity and Type 2 Diabetes (NOF)** → /evidence/eat-fat-cut-the-carbs.../
6. **BMJ Paper — Dr Unwin's 6 Year Results** → https://dx.doi.org/10.1136/bmjnph-2020-000072
7. **BMJ Paper — Ambassador Evaluation Study** → https://dx.doi.org/10.1136/bmjnph-2020-000219
8. **BMJ Paper — Healthcare Professional Qualitative Study** → https://dx.doi.org/10.1136/bmjnph-2021-000240
9. **BJGP Paper — Adapting Diabetes Medication** → https://doi.org/10.3399/bjgp19X704525
10. **BDA Paper — Dietary strategies for remission of type 2 diabetes** → https://doi.org/10.1111/jhn.12938
11. **BMJ Paper — Dr David Unwin Obesity Editorial** → https://doi.org/10.1136/bmjnph-2023-000836

### Key Research Data Points
| Data | Value | Source |
|------|-------|--------|
| RCTs comparing low-carb vs low-fat | 67 total | PHC RCTs table |
| RCTs where low-carb won significantly | 36 of 67 | PHC RCTs table |
| RCTs where low-fat won significantly | 0 of 67 | PHC RCTs table |

---

## 7. Get Involved Page (NEW)

> **Note:** The live site has NO `/get-involved/` page (returns 404). This is a new page for the redesign that consolidates multiple existing pages into one hub.

### Proposed Content (consolidating from live site sections)

#### Audience Pathways
Three cards targeting different audiences:
1. **Healthcare Professionals** — Partner with us through our Volunteer Network, access evidence-based resources, and join our community of practitioners transforming metabolic health.
2. **General Public** — Become a member, join a support group, attend our conference, or simply donate to help us achieve our mission.
3. **Organisations** — Sponsor our conference, partner on research, or support our projects through corporate giving.

#### Involvement Options

**1. Membership** (from /plans/memberships/)
- UK Membership: £75/year
- UK Pensioner: £50/year
- UK Student: £50/year
- International: £100/year
- Benefits: Monthly newsletter, #RealFoodRocks t-shirt, printed reports, 3 sets of real food booklet packs, conference ticket discount

**2. Volunteer** (from /ambassadors/)
- **Ambassador** (UK only): Local representatives who liaise with GP practices to set up and run lifestyle support groups. 2-3 hours/week.
- **Associate** (UK & International): Help promote activities online and be notified of volunteer opportunities. 2-3 hours/month.
- Interview process required for both roles.

**3. Donate** (from /donate/)
- Direct donation via JustGiving: https://checkout.justgiving.com/c/3626028
- eNewsletter subscriber: £1 via NowDonate
- Give As You Live: Free funds when shopping online

**4. Fundraise** (from /fundraise/)
- Start your own fundraiser via JustGiving: https://www.justgiving.com/phcukorg

**5. Events**
- Annual Conference (10th anniversary in 2026)
- Star Jump Challenge
- Support groups via Ambassador network

### Member Testimonials (from membership page)
1. > "I feel I am supporting a new healthier way of living and playing a small part in the movement towards this."
2. > "Brilliant to have such a dedicated team working on solutions to breaking the control of big food and big pharma over dietary advice - based on science and evidence."
3. > "As a healthcare professional I have often felt exposed and isolated when giving patients advice that is contrary to that given by other healthcare professionals. Being part of the PHC has helped me feel less isolated and empowered."

---

## 8. News & Blog Page

### Current State
The live site has two separate feeds:
- `/news-feed/` — BuddyBoss community activity feed (member profile updates — NOT real news)
- `/blog/` — Traditional WordPress blog with actual articles

### Blog Articles (11 total, from phcuk.org/blog/)

| # | Title | Date | Author | Has Image |
|---|-------|------|--------|-----------|
| 1 | A Summary Report of the PHC Conference 2025 | Sep 5, 2025 | Sam Feltham | Yes |
| 2 | PHC, BDA and X-PERT Health Urge NICE to Update Their Type 2 Diabetes Guidelines | Mar 24, 2025 | Sam Feltham | Yes |
| 3 | Thank You, Helen! | Mar 10, 2025 | Sam Feltham | No |
| 4 | The Weight Loss Jab Debate: PHC's Response to BBC Panorama | Jan 17, 2025 | Sam Feltham | Yes |
| 5 | Say 'Yes!' to Our Children's Real Food Rebellion | Nov 20, 2024 | Sam Feltham | No |
| 6 | BSEM Scientific Conference - Unravelling Brain Health | Sep 17, 2024 | Sam Feltham | No |
| 7 | PHC Brings World's Metabolic Health Experts to the UK | May 9, 2024 | Sam Feltham | No |
| 8 | We're Looking for a Social Media Manager to Join Team PHC | Mar 13, 2024 | Sam Feltham | No |
| 9 | New Chair of Trustees Announcement | Jul 27, 2023 | Sam Feltham | No |
| 10 | We're Looking for an Administrator to Join Team PHC | Jul 24, 2023 | Sam Feltham | No |
| 11 | TO HELP US 'FIX THE NHS — ONE PERSON AT A TIME' | Mar 30, 2023 | Olivia Khwaja | No |

### Article Excerpts

**1. Conference 2025 Summary:**
"This year's conference was another outstanding event that saw over 20 world-renowned experts convene in London to share their knowledge."

**2. NICE Guidelines Open Letter:**
"Alongside colleagues from the British Dietetics Association (BDA) and X-PERT Health we have written an open letter to NICE (National Institute for Health and Care Excellence)..."

**3. Thank You, Helen:**
"The Lifestyle Club (TLC), Public Health Collaboration's flagship project, has exceeded all expectations as a proof-of-concept for scaling up type 2 diabetes remission..."

**4. Weight Loss Jab Debate:**
"FOR IMMEDIATE RELEASE - This week's BBC Panorama programme on the emerging weight-loss injections, hailed as a..."

**5. Real Food Rebellion:**
"The rising childhood obesity crisis demands action, and we're ready to lead the charge through the Real Food Rebellion. We aim to empower 5,000 children..."

### Observations
- No categories or tags used
- Irregular posting frequency (every 1-3 months)
- Primary author: Sam Feltham (10 of 11)
- Only 3-4 articles have featured images
- Content themes: conference summaries, health policy, project updates, press releases, hiring

---

## 9. Membership Page

**URL:** /plans/memberships/

### Introductory Text
"Whether you're a passionate healthcare professional or a passionate member of the public, as a PHC member you become an eNewsletter subscriber, receive a #RealFoodRocks t-shirt alongside printed reports as and when they're published posted to you. Plus you get 3 sets of real food patient booklet packs and finally, a discount on your ticket for our annual conference."

### Pricing Tiers

| Tier | Price | CTA URL |
|------|-------|---------|
| PHC Annual UK Membership | £75/year | /join/phc-annual-uk-membership/ |
| PHC Annual UK Pensioner Membership | £50/year | /join/phc-annual-uk-pensioner-membership/ |
| PHC Annual UK Student Membership | £50/year | /join/phc-annual-uk-student-membership/ |
| International PHC Membership | £100/year | /join/international-phc-annual-membership/ |

### Benefits
- Monthly eNewsletter
- #RealFoodRocks t-shirt
- Printed reports posted when published
- 3 sets of real food patient booklet packs
- Discount on annual conference ticket

### Closing Text
"A PHC annual membership doesn't just mean getting all of these bits and bobs. It means that you're part of a movement that wants to turn the tide in public health and fully support the cause for which we fight for."

---

## 10. Donate Page

### Hero
- **Heading:** "WE ARE A REGISTERED UK CHARITY"
- **Body:** "We're a blossoming charity with big ambitions. Help us reverse the type 2 diabetes epidemic, get food addiction recognised and undo the childhood obesity crisis by donating what you can."
- **CTA:** DONATE TODAY → https://checkout.justgiving.com/c/3626028

### Donation Options
1. **Direct Donation** — JustGiving checkout
2. **Buy The T-Shirt** — Become a member → /plans/memberships/
3. **Start Your Own Fundraiser** — "Run, walk, swim, cycle, skate, ski, hop, moonwalk, whatever you do, do it with purpose!" → JustGiving
4. **Give As You Live** — Raise FREE FUNDS every time you shop online → giveasyoulive.com/join/phc
5. **eNewsletter Subscriber** — £1 via NowDonate → "Instead of buying a bar of dark chocolate become an eNewsletter subscriber"
6. **Become a PHC Member** — Member rewards + booklet packs

---

## 11. Contact Page

### Content
- **Intro:** "Please use the form below to contact us. However, if you are unhappy about any aspect of Public Health Collaboration, please follow our complaints procedure by clicking here."
- **Complaints procedure:** PDF download at /wp-content/uploads/PHC-Complaints-Procedure-v1.2.pdf

### Contact Form Fields (all required)
1. Name
2. Email
3. Phone Number
4. Question (textarea)

### Notes
- No physical address displayed
- No phone number displayed
- No email address displayed
- Contact is form-only (currently Microsoft Forms)

---

## 12. Volunteer / Ambassadors Page

### Main Content
"With hundreds of volunteers across the country, the Public Health Collaboration nurture a network of people to help cultivate a society where everyone enjoys good metabolic health."

"Whether you're a healthcare professional or a member of the public, you can become a volunteer for the PHC. However, if you're just looking for someone to talk to locally about becoming healthier, then please zoom in on the map to find the contact details for your local Ambassador."

### Interactive Map
Google My Map showing 100+ ambassador locations across the UK (64,427 views on the map).

### Volunteer Roles

| Role | Scope | Time Commitment |
|------|-------|-----------------|
| **Ambassador** | UK only | 2-3 hours/week |
| **Associate** | UK & International | 2-3 hours/month |

**Ambassador duties:** Liaise with GP practices to set up and run lifestyle support groups.
**Associate duties:** Promote activities online, help at events, be notified of opportunities.

Both roles require an interview process.

### Application Form Fields
1. Name (required)
2. Email (required)
3. Phone Number (required)
4. Location (required)
5. Volunteer type (dropdown: Ambassador / Associate)
6. Why would you like to become a PHC Volunteer? (textarea, required)

### Embedded Videos
1. "8 Week Low Carb Lifestyle Programme | Social Prescribing Care Merseyside" (6:20)
2. "PHC Ambassadors Spreading The Word On Real Food Lifestyles" (7:58)

### Resources
- Downloadable poster about volunteer impact (by St Andrews researcher Ana Pavao)
- Case study book (flipbook + PDF download)

---

## 13. Resources Page

### Resource Links (14 items)
1. A5 Low Carb Booklet by Dr David Unwin (PDF)
2. Norwood Protocol for Doctors and Nurses (DOCX)
3. Sugar Infographics by Dr David Unwin → /sugar/
4. Ambassadors Programme → /ambassadors/
5. Evidence → /evidence/
6. Conference Videos → YouTube
7. Real Food GP Map → /map/
8. Real Food Rocks Cook Book → Amazon
9. Real Food Booklets → /booklets/
10. Freshwell Low Carb Project App → lowcarbfreshwell.co.uk/app-2/
11. Real Food Testimonials → /testimonials/
12. Adapting Diabetes Medication (BJGP paper)
13. RCGP eLearning Module
14. BANT Nutritional Therapists → bant.org.uk

---

## 14. Footer

### Column Structure
| Column | Links |
|--------|-------|
| **Popular** | Dr Unwin's Sugar Charts, Conference, Blog, Media Centre, RCTs, Contact & Complaints |
| **Membership** | Members |
| **Donations** | Become A Member, Donate, Fundraise, Volunteer |
| **Legals** | Disclaimer, Cookie Policy, Privacy Policy, Safeguarding Policy, Terms and Conditions |

### Copyright
"(c) 2026 - Public Health Collaboration | Registered Charity 1171887 / SC052248 | Contact Us"

---

## 15. FAQs

### Tab 1: About PHC (5 questions)

**Q: What is the Public Health Collaboration?**
A: Registered charity (No. 1171887) dedicated to informing and implementing healthy decisions for better public health.

**Q: How are you funded?**
A: Funded by individual members of the public.

**Q: Where can I confirm your findings about the UK public health statistics?**
A: NHS Digital and Diabetes UK websites.

**Q: Where can I confirm your findings about the UK population's eating habits?**
A: Government website (National Diet and Nutrition Survey).

**Q: Why are your services free?**
A: Funded by individual members of the public who want to help the UK become healthier and save the NHS money.

### Tab 2: Healthcare Professionals (1 question)

**Q: Can healthcare professionals working within the NHS advise low-carbohydrate diets?**
A: Yes. References NICE guidelines (1.3.6), Diabetes UK 2017 position statement, RCGP e-learning module by Dr David Unwin, published results in BMJ Nutrition, Prevention & Health, and BJGP article on adapting diabetes medication.

### Tab 3: Members (1 question)

**Q: What do I get as a member?**
A: Monthly newsletter, members t-shirt, 3 sets of real food booklet packs.

### Tab 4: Real Food (5 questions)

**Q: The Real Food Lifestyle includes butter, doesn't this cause cardiovascular disease?**
A: Multiple meta-analyses show saturated fat is not associated with CVD. Five study citations provided.

**Q: If butter doesn't cause heart disease, what does?**
A: Sugar and refined carbohydrates.

**Q: The Real Food Lifestyle looks expensive?**
A: No. Example meal: carrots 6p + broccoli 12p + pork chops 64p = 82p. Mixed nuts 58p extra.

**Q: Why is The Real Food Lifestyle For Weight Loss a low-carbohydrate diet?**
A: Meta-analysis shows low-carb diets result in better weight loss and health outcomes. 36 of 67 RCTs favour low-carb; 0 of 67 favour low-fat.

**Q: Can a low-carbohydrate diet of real foods help with type 2 diabetes?**
A: Yes. Meta-analysis found low-carb more effective than low-fat for weight, HbA1c, HDL cholesterol and triglycerides.

### Tab 5: Low Carb (7 questions)

**Q: No cereals! What can I eat for breakfast?**
A: Full fat yogurt with nuts and berries; eggs, bacon, mushroom, tomato; breakfast omelette with cheese; hard-boiled eggs and ham for on-the-go.

**Q: Just started low carb: I have a headache/cramps/feel lousy?**
A: Normal for first few days. Drink water, add extra salt. Magnesium supplements may help with cramps.

**Q: I am on prescribed medication, does that matter?**
A: Yes — especially diabetes medications and SGLT2 inhibitors. Consult your doctor. Metformin is fine with low-carb.

**Q: Constipation. Help!**
A: Check fluid intake. Magnesium supplements help. Milled linseed on yoghurt and raspberries.

**Q: What about when I'm travelling or at work?**
A: Slices of meat/cheese/crudités. Boxed salads with olives, eggs, cheese. Almonds and 90% dark chocolate for emergencies.

**Q: What can I have to drink?**
A: Water with lemon, coffee (avoid lattes), tea, herb teas. Alcohol in moderation: spirits with sugar-free mixers, red wine, champagne. Avoid beer.

**Q: Can I have a cheat meal or snack?**
A: May slow weight loss by reverting to sugar burning. Be honest about addiction. Snacks: raw carrot and cheese, nuts, almonds.

---

## 16. Social Media

| Platform | URL | Handle |
|----------|-----|--------|
| Facebook | https://www.facebook.com/PHCukorg | @PHCukorg |
| Instagram | https://www.instagram.com/PHCukorg | @PHCukorg |
| LinkedIn | https://www.linkedin.com/company/public-health-collaboration | public-health-collaboration |
| YouTube | https://www.youtube.com/PHCukorg | @PHCukorg |
| X (Twitter) | https://twitter.com/PHCukorg | @PHCukorg |

---

## 17. Key Statistics

### Public Health Stats (from homepage)
| Stat | Value |
|------|-------|
| UK adults who are obese | 25% |
| Type 2 diabetes rise over 10 years | 65% |
| Annual NHS cost (obesity + T2D) | £16 billion |

### Evidence Stats
| Stat | Value |
|------|-------|
| RCTs comparing low-carb vs low-fat | 67 total |
| Low-carb significantly won | 36 of 67 |
| Low-fat significantly won | 0 of 67 |

### Organisation Stats
| Stat | Value |
|------|-------|
| TLC participants | 700+ |
| Members & supporters | 9,000+ |
| Conferences held | 10 |
| Ambassador locations on map | 100+ |
| Volunteer map views | 64,427 |
| Blog articles published | 11 |

### Conference 2026
| Detail | Value |
|--------|-------|
| Date | 16-17 May 2026 |
| Location | London |
| Milestone | 10th anniversary |
| Notable speakers | Dr Ben Bikman, Nina Teicholz |

---

## 18. SEO & Metadata

### Key URLs to Maintain/Redirect
| Current URL | Purpose | Redesign Route |
|-------------|---------|---------------|
| phcuk.org/ | Homepage | / |
| phcuk.org/about/ | About | /about |
| phcuk.org/projects/ | Projects | /our-work |
| phcuk.org/evidence/ | Evidence | /evidence |
| phcuk.org/resources/ | Resources | /evidence (merged) |
| phcuk.org/donate/ | Donate | /get-involved |
| phcuk.org/plans/memberships/ | Membership | /get-involved |
| phcuk.org/ambassadors/ | Volunteers | /get-involved |
| phcuk.org/volunteer/ | Volunteer form | /get-involved |
| phcuk.org/blog/ | Blog | /news |
| phcuk.org/contact/ | Contact | /contact |
| phcuk.org/sugar/ | Sugar charts | /evidence/sugar |
| phcuk.org/conference/ | Conference | External link to conference site |
| phcuk.org/support/ | Support group | /get-involved |
| phcuk.org/rfr/ | Real Food Rebellion | External link |
| phcuk.org/map/ | GP Map | /get-involved or /our-work |
| phcuk.org/booklets/ | Booklets | /evidence |
| phcuk.org/testimonials/ | Testimonials | /about or /get-involved |

### Technology Notes (Current vs. Redesign)
| Aspect | Current | Redesign |
|--------|---------|----------|
| CMS | WordPress 6.9.4 | Next.js 16 (static) |
| Ecommerce | WooCommerce 10.5.3 | External (JustGiving, NowDonate) |
| Community | BuddyBoss Platform | N/A (strip out) |
| Forms | Microsoft Forms | Native form or Formspree |
| Maps | Google My Maps (embed) | Google Maps embed or Mapbox |
| Video | YouTube embeds | YouTube embeds (keep) |
| Hosting | WordPress hosting | Vercel (static) |
| Contact | Microsoft Forms | Native contact form |
