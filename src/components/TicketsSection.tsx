"use client";

import { useTicketsOnSale } from "@/hooks/useTicketsOnSale";
import { BOOKING_URL } from "@/lib/conference";
import BookingButton from "@/components/BookingButton";
import TicketAlertForm from "@/components/TicketAlertForm";

/** The #tickets section: sign-up form before the sale date, booking after it. */
export default function TicketsSection() {
  const onSale = useTicketsOnSale();

  return (
    <section id="tickets" className="scroll-mt-4 bg-phc-cyan/15 px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-phc-navy">Tickets</p>
          <h2 className="font-heading text-3xl font-bold text-phc-navy sm:text-4xl">
            {onSale ? "Tickets now on sale" : "Tickets on sale 11 November"}
          </h2>
          {!onSale && (
            <p className="mt-4 text-lg text-dark-grey">
              Leave your first name and email address and we will email you once, on the morning
              of 11 November, when tickets go on sale.
            </p>
          )}
          {onSale && (
            <>
              <p className="mt-4 text-lg text-dark-grey">
                {BOOKING_URL
                  ? "Book your place for both days, and for the Saturday conference dinner."
                  : "Booking opens shortly. Please check back soon."}
              </p>
              {BOOKING_URL && (
                <div className="mt-6">
                  <BookingButton />
                </div>
              )}
            </>
          )}
        </div>
        {!onSale && (
          <div id="ticket-alerts" className="scroll-mt-4">
            <TicketAlertForm />
          </div>
        )}
      </div>
    </section>
  );
}
