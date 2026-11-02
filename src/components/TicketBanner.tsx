"use client";

import { Ticket } from "lucide-react";
import { useTicketsOnSale } from "@/hooks/useTicketsOnSale";
import { BOOKING_URL } from "@/lib/conference";

/**
 * Site-wide strip: "Tickets on sale 11 November" until the sale date,
 * then "Tickets now on sale" (linking to booking once BOOKING_URL is set).
 */
export default function TicketBanner() {
  const onSale = useTicketsOnSale();
  const canBook = onSale && BOOKING_URL !== "";

  const content = (
    <span className="inline-flex items-center gap-2">
      <Ticket className="h-4 w-4 shrink-0 text-phc-cyan" aria-hidden="true" />
      <span className="font-heading font-semibold">
        {onSale ? "Tickets now on sale" : "Tickets on sale 11 November"}
      </span>
      <span className="hidden text-white/80 sm:inline">
        · PHC Conference 2027, Warwick Hall, 10 and 11 April
      </span>
      {canBook && (
        <span className="font-semibold underline underline-offset-2">Book your place</span>
      )}
    </span>
  );

  return (
    <a
      href={canBook ? BOOKING_URL : "/#tickets"}
      {...(canBook ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block bg-phc-navy-dark text-sm text-white hover:bg-phc-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-phc-cyan sm:text-base"
    >
      <span className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2 text-center">
        {content}
      </span>
    </a>
  );
}
