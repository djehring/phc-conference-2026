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
  /** Leave empty until the dinner venue is confirmed. */
  venue: "",
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
export const TICKET_PRICES: { label: string; price: string; note: string }[] = [
  { label: "Weekend ticket", price: "", note: "Both days, lunches and refreshments" },
  { label: "Members", price: "", note: "Discounted rate for PHC members" },
  { label: "Conference dinner", price: "", note: "Saturday evening, booked separately" },
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

export const PROGRAMME: Record<
  (typeof DAYS)[number]["id"],
  { title: string; area: AreaKey; description?: string }[]
> = {
  saturday: [
    {
      title: "Welcome and opening keynote",
      area: "keynote",
    },
    {
      title: "Metabolic health",
      area: "metabolic",
      description: "Type 2 diabetes, obesity and fatty liver: preventing and reversing them.",
    },
    {
      title: "Heart and stroke",
      area: "heart",
      description: "Lowering the risk of heart disease and stroke.",
    },
    {
      title: "Panel and questions",
      area: "keynote",
      description: "Put your questions to the day's speakers.",
    },
  ],
  sunday: [
    {
      title: "Brain health",
      area: "brain",
      description: "What we know about lowering the risk of dementia.",
    },
    {
      title: "Cancer",
      area: "cancer",
      description: "The everyday factors that shape cancer risk.",
    },
    {
      title: "Our seven asks",
      area: "asks",
      description: "The policies that would put prevention first, and how you can help.",
    },
    {
      title: "Closing keynote",
      area: "keynote",
    },
  ],
};

// ---------------------------------------------
// Speakers
// ---------------------------------------------

/**
 * Confirmed 2027 speakers only. The speakers section stays hidden while this
 * list is empty. Add a speaker once they have confirmed and approved their bio;
 * photos go in /public/images/speaker-photos/.
 */
export const speakers2027: Speaker[] = [];
