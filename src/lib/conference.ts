// =============================================
// PHC Conference 2027 — single source for the live conference.
//
// Everything that is not yet confirmed is an empty value here, and the page
// hides it. Never put "TBC" or placeholder text in this file: fill a value
// only once it is confirmed.
// =============================================

import type { Speaker } from "@/types";

export const CONFERENCE_NAME = "PHC Conference 2027";
export const CONFERENCE_THEME = "Prevent the preventable";

export const VENUE = {
  name: "Warwick Hall",
  town: "Warwick",
  mapUrl: "https://maps.google.com/?q=Warwick+Hall,+Warwick",
} as const;

export const DATES_LABEL = "Saturday 10 and Sunday 11 April 2027";

export const DAYS = [
  {
    id: "saturday",
    label: "Saturday 10 April",
    start: "9:30",
    end: "17:00",
    // ISO times for the calendar file (BST, UTC+1)
    startIso: "2027-04-10T09:30:00+01:00",
    endIso: "2027-04-10T17:00:00+01:00",
  },
  {
    id: "sunday",
    label: "Sunday 11 April",
    start: "9:30",
    end: "16:00",
    startIso: "2027-04-11T09:30:00+01:00",
    endIso: "2027-04-11T16:00:00+01:00",
  },
] as const;

export const DINNER: { label: string; time: string; venue: string } = {
  label: "Saturday 10 April 2027",
  time: "19:00",
  /** Confirmed by Steve, 19 Oct 2026: same venue as the conference. */
  venue: "Warwick Hall, Warwick",
};

// ---------------------------------------------
// Tickets
// ---------------------------------------------

/**
 * The moment the site switches from "coming soon" to "on sale".
 * Checked in the visitor's browser, so the static site flips without a redeploy.
 * 00:00 GMT on 11 November 2026 (the UK is on GMT in November).
 */
export const TICKETS_ON_SALE_AT: string = "2026-11-11T00:00:00Z";

/**
 * The booking page. Leave empty until the booking system is ready.
 * If it is still empty after TICKETS_ON_SALE_AT, the buttons read
 * "Booking opens shortly" instead of linking anywhere.
 */
export const BOOKING_URL: string = "";

/** Dinner booking, if it differs from the main booking page. Falls back to BOOKING_URL. */
export const DINNER_BOOKING_URL: string = "";

/**
 * Ticket prices. Each one shows only when it has a value, e.g. "£195".
 * Leave empty until the trustees confirm prices.
 */
// Confirmed by Steve, 19 Oct 2026. Online-only tickets are announced closer to the event.
export const TICKET_PRICES: { label: string; price: string; note: string }[] = [
  { label: "Early bird", price: "£99", note: "Both days, for a limited time" },
  { label: "Full ticket", price: "£149", note: "Both days" },
  { label: "Ambassadors and Associates", price: "£49", note: "Both days, for PHC volunteers" },
  { label: "Conference dinner", price: "£89", note: "Saturday evening at Warwick Hall, booked separately" },
];

// ---------------------------------------------
// Programme (by prevention area, no speaker names)
// ---------------------------------------------

export type AreaKey = "keynote" | "metabolic" | "heart" | "brain" | "cancer" | "asks";

export const AREA_STYLES: Record<AreaKey, { bar: string; dot: string }> = {
  keynote: { bar: "border-l-phc-navy", dot: "bg-phc-navy" },
  metabolic: { bar: "border-l-area-metabolic", dot: "bg-area-metabolic" },
  heart: { bar: "border-l-area-heart", dot: "bg-area-heart" },
  brain: { bar: "border-l-area-brain", dot: "bg-area-brain" },
  cancer: { bar: "border-l-area-cancer", dot: "bg-area-cancer" },
  asks: { bar: "border-l-phc-navy", dot: "bg-phc-navy" },
};

/**
 * Sessions per day. Empty until Steve confirms the programme: the programme
 * section and its nav links stay hidden while every day is empty.
 */
export const PROGRAMME: Record<
  (typeof DAYS)[number]["id"],
  { title: string; area: AreaKey; description?: string }[]
> = {
  saturday: [],
  sunday: [],
};

export const HAS_PROGRAMME = Object.values(PROGRAMME).some((sessions) => sessions.length > 0);

// ---------------------------------------------
// Speakers
// ---------------------------------------------

/**
 * Confirmed 2027 speakers only. The speakers section stays hidden while this
 * list is empty. Add a speaker once they have confirmed and approved their bio;
 * photos go in /public/images/speaker-photos/.
 */
// Confirmed by Steve Bennett, 18–19 Oct 2026: Ben Bikman, Richard Johnson,
// Adrian Soto-Mota, David Unwin, Steve Bennett and David Jehring, with more to be
// announced. Isabella Cooper is not yet confirmed, so she is not listed.
export const speakers2027: Speaker[] = [
  {
    id: 1,
    name: "Professor Ben Bikman",
    slug: "ben-bikman",
    title: "Professor of Cell Biology and Physiology, Brigham Young University",
    description:
      "Studies insulin, insulin resistance and ketones, and their role in obesity and chronic disease. Author of Why We Get Sick.",
    initials: "BB",
    photo: "ben-bikman.jpg",
  },
  {
    id: 2,
    name: "Professor Richard J. Johnson",
    slug: "richard-johnson",
    title: "Professor of Medicine, University of Colorado Anschutz Medical Campus",
    description:
      "Kidney specialist whose research on fructose and uric acid led to the survival switch theory. Author of Nature Wants Us to Be Fat.",
    initials: "RJ",
    photo: "richard-johnson.jpg",
    links: {
      university: "https://som.cuanschutz.edu/Profiles/Faculty/Profile/9426",
    },
  },
  {
    id: 3,
    name: "Dr Adrian Soto-Mota",
    slug: "adrian-soto-mota",
    title: "Clinical scientist, human metabolism and cardiometabolic disease",
    description:
      "Oxford-trained clinical scientist leading studies on ketones, heart health and cholesterol, including why cholesterol rises in some people on low carbohydrate diets.",
    initials: "AS",
  },
  {
    id: 4,
    name: "Dr David Unwin FRCGP",
    slug: "david-unwin",
    title: "NHS GP and Chair of our Scientific Advisory Committee",
    description:
      "Founding member of PHC whose work at Norwood Surgery in Southport has helped many patients put type 2 diabetes into remission.",
    initials: "DU",
    photo: "david-unwin.png",
  },
  {
    id: 5,
    name: "Steve Bennett",
    slug: "steve-bennett",
    title: "Chief Executive, Preventive Health Collaboration",
    description:
      "Turned his own health around after living with obesity for over 25 years. Author of Primal Cure and Fat & Furious.",
    initials: "SB",
    photo: "steve-bennett.png",
  },
  {
    id: 6,
    name: "Dr David Jehring",
    slug: "david-jehring",
    title: "Chair of Trustees, Preventive Health Collaboration",
    description:
      "Former NHS family doctor and chief executive of Black Pear Software, putting joined-up health records in the hands of patients and clinicians.",
    initials: "DJ",
    photo: "david-jehring.png",
  },
];

// ---------------------------------------------
// Family weekend (David's proposal, 30 Sep 2026)
// ---------------------------------------------

/**
 * Photos of Warwick Castle and the town for the family weekend section.
 * Only add images we have the right to use (record the licence and credit).
 * The photo strip stays hidden while this list is empty.
 */
// All three are under the Unsplash License (free to use, credit appreciated).
export const WARWICK_IMAGES: { src: string; alt: string; credit: string; creditUrl?: string }[] = [
  {
    src: "/images/warwick/warwick-castle-river.jpg",
    alt: "Warwick Castle above the River Avon, reflected in the water on a sunny day",
    credit: "Tom Podmore on Unsplash",
    creditUrl: "https://unsplash.com/photos/7y26n59RJIw",
  },
  {
    src: "/images/warwick/warwick-castle-towers.jpg",
    alt: "The towers and battlements of Warwick Castle under a blue sky",
    credit: "A Perry on Unsplash",
    creditUrl: "https://unsplash.com/photos/umvsom3rVBo",
  },
  {
    src: "/images/warwick/warwick-castle-grounds.jpg",
    alt: "Visitors walking across the lawns inside the walls of Warwick Castle",
    credit: "Neven Myst on Unsplash",
    creditUrl: "https://unsplash.com/photos/w2gAlgEpzdI",
  },
];
