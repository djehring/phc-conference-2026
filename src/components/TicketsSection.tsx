"use client";

import { useTicketsOnSale } from "@/hooks/useTicketsOnSale";
import { BOOKING_URL, TICKET_NOTES, TICKET_OPTIONS, type TicketOption } from "@/lib/conference";
import BookingButton from "@/components/BookingButton";
import TicketAlertForm from "@/components/TicketAlertForm";

function PriceRow({ label, price, members }: { label: string; price: string; members: string }) {
  return (
    <div className="px-5 py-4">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-warm-grey">{label}</p>
      <p className="mt-1 font-heading text-4xl font-bold text-phc-navy">{price}</p>
      <p className="mt-2 inline-block rounded-full bg-phc-cyan/15 px-3 py-1 text-sm font-semibold text-phc-navy">
        Members {members}
      </p>
    </div>
  );
}

function TicketCard({ option }: { option: TicketOption }) {
  const inPerson = option.format === "In person";
  return (
    <li className="overflow-hidden rounded-2xl border border-phc-navy/15 bg-white shadow-sm">
      <div className={`px-5 py-4 ${inPerson ? "bg-phc-navy text-white" : "bg-phc-cyan text-phc-navy-dark"}`}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">{option.format}</p>
        <h3 className="font-heading text-2xl font-bold">{option.length}</h3>
      </div>
      <div className="divide-y divide-phc-navy/10">
        <PriceRow label="Early bird" price={option.earlyBird} members={option.earlyBirdMembers} />
        <PriceRow label="Standard" price={option.standard} members={option.standardMembers} />
      </div>
    </li>
  );
}

/** The #tickets section: prices, then the sign-up form before the sale date and booking after it. */
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
                  ? "Book your place in person or online, and for the Saturday conference dinner."
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

      {TICKET_OPTIONS.length > 0 && (
        <div className="mx-auto mt-12 max-w-6xl">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Ticket prices">
            {TICKET_OPTIONS.map((option) => (
              <TicketCard key={`${option.format}-${option.length}`} option={option} />
            ))}
          </ul>
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {TICKET_NOTES.map((note) => (
              <li
                key={note.title}
                className={`rounded-2xl p-5 ${note.highlight ? "bg-phc-navy text-white" : "bg-white text-phc-navy"}`}
              >
                <p className={`font-heading text-xl font-bold ${note.highlight ? "text-phc-cyan" : ""}`}>
                  {note.title}
                </p>
                <p className="mt-1 text-sm">{note.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
