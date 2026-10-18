"use client";

import { useTicketsOnSale } from "@/hooks/useTicketsOnSale";
import { BOOKING_URL } from "@/lib/conference";

interface BookingButtonProps {
  /** Label once tickets are on sale and a booking URL is set. */
  bookLabel?: string;
  /** Booking URL override (e.g. dinner). Falls back to BOOKING_URL. */
  href?: string;
  className?: string;
}

/**
 * The main call to action.
 * - Before the sale date: "Tell me when tickets go on sale" (jumps to the alert form).
 * - After the sale date with a booking URL: "Book your place".
 * - After the sale date without a booking URL: "Booking opens shortly" (not a link).
 */
export default function BookingButton({
  bookLabel = "Book your place",
  href,
  className = "",
}: BookingButtonProps) {
  const onSale = useTicketsOnSale();
  const url = href || BOOKING_URL;
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-heading font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-phc-cyan";

  if (!onSale) {
    return (
      <a
        href="#ticket-alerts"
        className={`${base} bg-phc-cyan text-phc-navy-dark hover:bg-phc-cyan-light ${className}`}
      >
        Tell me when tickets go on sale
      </a>
    );
  }

  if (!url) {
    return (
      <span
        className={`${base} cursor-default border-2 border-dashed border-current/50 bg-transparent ${className}`}
        role="status"
      >
        Booking opens shortly
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-phc-cyan text-phc-navy-dark hover:bg-phc-cyan-light ${className}`}
    >
      {bookLabel}
    </a>
  );
}
