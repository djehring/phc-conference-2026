"use client";

import { useEffect, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

/**
 * Site-wide cross-promo bar for the PHC Scotland conference
 * (Friday 6 November 2026). The whole bar links to the Eventbrite listing.
 * It hides itself in the browser once the event has finished, so it comes
 * down without a redeploy; delete this component after the event.
 */
const SCOTLAND_CONFERENCE_URL =
  "https://www.eventbrite.co.uk/e/empowering-better-health-with-real-food-tickets-1988836032110";
const SCOTLAND_CONFERENCE_ENDS_AT = "2026-11-06T17:00:00Z";

export default function AnnouncementBanner() {
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    setHasEnded(Date.now() >= new Date(SCOTLAND_CONFERENCE_ENDS_AT).getTime());
  }, []);

  if (hasEnded) return null;

  return (
    <a
      href={SCOTLAND_CONFERENCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-phc-cyan text-phc-navy-dark transition-colors hover:bg-phc-cyan-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-phc-navy-dark"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-sm sm:text-base">
        <MapPin className="hidden h-4 w-4 shrink-0 sm:inline-block" aria-hidden="true" />
        <span className="font-heading font-semibold">
          PHC Scotland Conference, 6 November
        </span>
        <span className="hidden text-phc-navy-dark/80 sm:inline">
          · Empowering Better Health with Real Food
        </span>
        <span className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 decoration-phc-navy-dark/40 group-hover:decoration-phc-navy-dark">
          Book tickets
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
