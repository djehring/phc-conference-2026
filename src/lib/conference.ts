// =============================================
// PHC Conference 2027 — single source for the live conference.
//
// Everything that is not yet confirmed is an empty value here, and the page
// hides it. Never put "TBC" or placeholder text in this file: fill a value
// only once it is confirmed.
// =============================================

import type { Speaker } from "@/types";

export const CONFERENCE_NAME = "PHC Conference 2027";
export const CONFERENCE_THEME = "Prevent the preventable, reverse the reversible";

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

export const DINNER: { label: string; time: string; venue: string; price: string } = {
  label: "Saturday 10 April 2027",
  time: "19:00",
  /** Confirmed by Steve, 19 Oct 2026: same venue as the conference. */
  venue: "Warwick Hall, Warwick",
  /** Confirmed by Steve, 19 Oct 2026. Booked separately. Empty = hidden. */
  price: "£89",
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

export type TicketOption = {
  format: "In person" | "Online";
  length: string;
  earlyBird: string;
  earlyBirdMembers: string;
  standard: string;
  standardMembers: string;
};

/**
 * Ticket prices. The price table stays hidden while this list is empty.
 * Leave empty until the trustees confirm prices.
 */
// From Steve's price table, "ticket prices" email of 30 Oct 2026 (14:46), which
// he kept after trustee comments that day. Members, Ambassadors, Associates and
// course participants get £15 off every ticket.
export const TICKET_OPTIONS: TicketOption[] = [
  { format: "In person", length: "2 days", earlyBird: "£99", earlyBirdMembers: "£84", standard: "£149", standardMembers: "£134" },
  { format: "In person", length: "1 day", earlyBird: "£59", earlyBirdMembers: "£44", standard: "£89", standardMembers: "£74" },
  { format: "Online", length: "2 days", earlyBird: "£59", earlyBirdMembers: "£44", standard: "£79", standardMembers: "£64" },
  { format: "Online", length: "1 day", earlyBird: "£35", earlyBirdMembers: "£20", standard: "£45", standardMembers: "£30" },
];

export const EARLY_BIRD_UNTIL = "31 January 2027";

export const TICKET_NOTES: { title: string; text: string; highlight?: boolean }[] = [
  {
    title: "£15 off",
    text: "every ticket for Members, Ambassadors, Associates and course participants",
    highlight: true,
  },
  { title: "Early bird", text: `until ${EARLY_BIRD_UNTIL}` },
  { title: "Recordings", text: "30 days access included with every ticket" },
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
// announced. Wafaa Abdel-Hadi, Glen Jeffery and Christopher Palmer added 29 Oct
// 2026 (David), with bios and photos from the speaker research pack of that date.
// Isabella Cooper removed 30 Oct 2026 (David): not yet confirmed.
// David Cavan agreed to speak, 31 Oct 2026 (David). No photo, title or bio yet:
// his card shows initials until he supplies them.
export const speakers2027: Speaker[] = [
  {
    id: 8,
    name: "Dr Wafaa Abdel-Hadi",
    slug: "wafaa-abdel-hadi",
    title: "Clinical oncologist and functional medicine practitioner",
    description:
      "Founded AWARE Clinic in 2014 after 13 years in clinical oncology. Her work brings together oncology, nutrition and personalised lifestyle approaches.",
    initials: "WA",
    photo: "wafaa-abdel-hadi.jpg",
  },
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
    id: 12,
    name: "Dr David Cavan",
    slug: "david-cavan",
    title: "",
    description: "",
    initials: "DC",
  },
  {
    id: 10,
    name: "Professor Glen Jeffery",
    slug: "glen-jeffery",
    title: "Professor of Neuroscience, UCL",
    description:
      "Researches vision, ageing and how light affects cellular energy production at UCL’s Institute of Ophthalmology, including the effects of red and near-infrared light on mitochondria.",
    initials: "GJ",
    photo: "glen-jeffery.jpg",
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
    id: 11,
    name: "Dr Christopher Palmer",
    slug: "christopher-palmer",
    title: "Assistant Professor of Psychiatry, Harvard Medical School",
    description:
      "Founded the Metabolic and Mental Health Program at McLean Hospital. His work explores metabolic approaches to psychiatric care, including ketogenic diets, and the brain energy theory of mental illness.",
    initials: "CP",
    photo: "christopher-palmer.jpg",
  },
  {
    id: 3,
    name: "Dr Adrian Soto-Mota",
    slug: "adrian-soto-mota",
    title: "Physician scientist, Salvador Zubirán National Institute of Medical Sciences and Nutrition, Mexico City",
    description:
      "Leads the Metabolic Diseases Research Unit. His Lipid Energy Model explains why some lean people see large rises in LDL cholesterol on low carbohydrate diets.",
    initials: "AS",
    photo: "adrian-soto-mota.jpg",
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
 * Hosts of the cookery masterclasses in the family weekend section. They are
 * not conference speakers, so they are kept out of speakers2027 (David, 30 Oct 2026).
 * Portraits from caldesi.com/about: frame removed, background and shoulders
 * extended with AI image generation; the original photo inside the frame is unchanged.
 */
export const COOKERY_HOSTS: { name: string; title: string; description: string; photo: string }[] = [
  {
    name: "Giancarlo Caldesi",
    title: "Chef, restaurateur and cookery teacher",
    description:
      "Tuscan-born chef who runs restaurants and a cookery school with Katie. Putting his type 2 diabetes into remission helped inspire their books on lower-carbohydrate eating.",
    photo: "/images/speaker-photos/giancarlo-caldesi.jpg",
  },
  {
    name: "Katie Caldesi",
    title: "Cookbook author, cookery teacher and recipe developer",
    description:
      "Founded La Cucina Caldesi cookery school with Giancarlo. Her writing and teaching explore Italian food, food history and practical lower-carbohydrate cooking.",
    photo: "/images/speaker-photos/katie-caldesi.jpg",
  },
];

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
