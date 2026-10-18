import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Castle, Clock, Heart, MapPin, PlayCircle, Store, Trees, Users, Utensils, Archive } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import AddToCalendarButton from "@/components/AddToCalendarButton";
import TicketsSection from "@/components/TicketsSection";
import SpeakersSection from "@/components/SpeakersSection";
import { CONTACT_URL, PROMISE_TEXT, VOLUNTEER_URL, YOUTUBE_URL } from "@/lib/brand";
import {
  AREA_STYLES,
  CONFERENCE_NAME,
  CONFERENCE_THEME,
  DATES_LABEL,
  DAYS,
  DINNER,
  DINNER_BOOKING_URL,
  HAS_PROGRAMME,
  PROGRAMME,
  TICKET_PRICES,
  VENUE,
  WARWICK_IMAGES,
  speakers2027,
} from "@/lib/conference";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const confirmedPrices = TICKET_PRICES.filter((p) => p.price.trim() !== "");

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-phc-cyan" : "text-phc-navy"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-phc-navy-dark via-phc-navy to-phc-navy px-4 py-16 text-white sm:py-24">
        <img
          src="/images/PHC_mark_reversed.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -bottom-16 w-72 opacity-[0.07] sm:w-[28rem]"
        />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow light>{CONFERENCE_NAME}</Eyebrow>
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-6xl">
            {CONFERENCE_THEME}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">{PROMISE_TEXT}</p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-phc-cyan">When</p>
              <p className="mt-1 font-heading text-lg font-semibold">{DATES_LABEL}</p>
              <ul className="mt-1 space-y-0.5 text-sm text-white/90">
                {DAYS.map((day) => (
                  <li key={day.id}>
                    {day.label.split(" ")[0]}: {day.start} to {day.end}
                  </li>
                ))}
              </ul>
              <AddToCalendarButton className="mt-3 text-white" />
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-phc-cyan">Where</p>
              <p className="mt-1 font-heading text-lg font-semibold">
                {VENUE.name}, {VENUE.town}
              </p>
              <p className="mt-1 text-sm text-white/90">
                Conference dinner on the Saturday evening
              </p>
              <a
                href={VENUE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded text-sm font-semibold underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phc-cyan"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Map<span className="sr-only"> of {VENUE.name} (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookingButton />
            <a
              href="#family"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-white hover:text-phc-navy sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phc-cyan"
            >
              Plan a family weekend
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>A family conference weekend</Eyebrow>
            <h2 className="font-heading text-3xl font-bold text-phc-navy sm:text-4xl">
              The UK&apos;s conference on prevention
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-dark-grey">
              Doctors, scientists, campaigners and the public, together for two days on how to
              prevent the diseases of modern life, in the historic town of Warwick at the end of
              the Easter holidays. Bring the family and make a weekend of it.
            </p>
          </div>

          {confirmedPrices.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2" aria-label="Ticket prices">
              {confirmedPrices.map((p) => (
                <li key={p.label} className="rounded-xl border border-phc-navy/15 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-warm-grey">{p.label}</p>
                  <p className="mt-1 font-heading text-3xl font-bold text-phc-navy">{p.price}</p>
                  <p className="mt-1 text-sm text-dark-grey">{p.note}</p>
                </li>
              ))}
            </ul>
          ) : (
            <dl className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-phc-navy/15 bg-white p-5 shadow-sm">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-warm-grey">
                  <Calendar className="h-4 w-4" aria-hidden="true" /> When
                </dt>
                <dd className="mt-1 font-heading font-semibold text-phc-navy">10 and 11 April 2027</dd>
              </div>
              <div className="rounded-xl border border-phc-navy/15 bg-white p-5 shadow-sm">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-warm-grey">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> Where
                </dt>
                <dd className="mt-1 font-heading font-semibold text-phc-navy">
                  {VENUE.name}, {VENUE.town}
                </dd>
              </div>
              <div className="rounded-xl border border-phc-navy/15 bg-white p-5 shadow-sm">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-warm-grey">
                  <Utensils className="h-4 w-4" aria-hidden="true" /> Dinner
                </dt>
                <dd className="mt-1 font-heading font-semibold text-phc-navy">
                  Saturday evening, {DINNER.time}
                </dd>
              </div>
              <div className="rounded-xl border border-phc-navy/15 bg-white p-5 shadow-sm">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-warm-grey">
                  <Clock className="h-4 w-4" aria-hidden="true" /> Tickets
                </dt>
                <dd className="mt-1 font-heading font-semibold text-phc-navy">
                  <a href="#tickets" className="underline underline-offset-2 hover:no-underline">
                    On sale 11 November 2026
                  </a>
                </dd>
              </div>
            </dl>
          )}
        </div>
      </section>

      <TicketsSection />

      {/* Programme: hidden until the programme is confirmed */}
      {HAS_PROGRAMME && (
      <section id="programme" className="scroll-mt-4 bg-off-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Programme</Eyebrow>
          <h2 className="font-heading text-3xl font-bold text-phc-navy sm:text-4xl">
            Sessions by prevention area
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-dark-grey">
            Each session focuses on one of our four prevention areas, with opening and closing
            keynotes and a session on our seven asks. Speakers and session times will be added
            here as they are confirmed.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {DAYS.map((day) => (
              <div key={day.id} className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-off-white pb-3">
                  <h3 className="font-heading text-xl font-bold text-phc-navy">{day.label}</h3>
                  <p className="text-sm font-semibold text-dark-grey">
                    {day.start} to {day.end}
                  </p>
                </div>
                <ul className="mt-3 space-y-2">
                  {PROGRAMME[day.id].map((session) => (
                    <li
                      key={session.title}
                      className={`border-l-4 ${AREA_STYLES[session.area].bar} py-2 pl-4`}
                    >
                      <p className="font-heading font-semibold text-phc-navy">{session.title}</p>
                      {session.description && (
                        <p className="text-sm text-dark-grey">{session.description}</p>
                      )}
                    </li>
                  ))}
                  {day.id === "saturday" && (
                    <li className="border-l-4 border-l-warm-amber bg-warm-amber/10 py-2 pl-4">
                      <p className="font-heading font-semibold text-phc-navy">
                        {DINNER.time} Conference dinner
                      </p>
                      <p className="text-sm text-dark-grey">
                        <a href="#dinner" className="underline underline-offset-2 hover:no-underline">
                          About the dinner
                        </a>
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Speakers: hidden until speakers are confirmed */}
      {speakers2027.length > 0 && (
        <div id="speakers" className="scroll-mt-4 bg-white">
          <SpeakersSection
            speakers={speakers2027}
            heading="Speakers"
            intro="Confirmed speakers for PHC Conference 2027."
          />
        </div>
      )}

      {/* Family weekend */}
      <section id="family" className="scroll-mt-4 bg-off-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <Eyebrow>Bring the family</Eyebrow>
              <h2 className="font-heading text-3xl font-bold text-phc-navy sm:text-4xl">
                A family weekend in Warwick
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-dark-grey">
                Bring the family. Spend the weekend in Warwick. Attend the conference while they
                explore. Come together in the evenings.
              </p>
              <p className="mt-4 leading-relaxed text-dark-grey">
                Health is not something that happens only in the consulting room. It is built
                through the way we eat, move, connect and live together, so we want partners and
                children to feel genuinely welcome.
              </p>
              <p className="mt-4 leading-relaxed text-dark-grey">
                The conference falls on the last weekend of the Easter holidays, with Warwick
                Castle, the river and the old town a short walk away. Arrive on the Friday,
                settle in, and head home on Sunday afternoon in time for school and work on
                Monday.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                {
                  icon: Castle,
                  title: "Warwick Castle on the doorstep",
                  text: "One of England’s best-loved castles, minutes from the conference, for a day out while the sessions run.",
                },
                {
                  icon: Trees,
                  title: "The river, the town and the outdoors",
                  text: "Riverside walks, parks and a historic market town to explore together.",
                },
                {
                  icon: Heart,
                  title: "Time together in the evenings",
                  text: "Delegates, partners and children, all welcome when the day’s sessions end.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-phc-navy/15 bg-white p-5 shadow-sm"
                  >
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-phc-navy" aria-hidden="true" />
                    <div>
                      <h3 className="font-heading font-bold text-phc-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-dark-grey">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Photo strip: hidden until licensed Warwick photos are added */}
          {WARWICK_IMAGES.length > 0 && (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Warwick">
              {WARWICK_IMAGES.map((img) => (
                <li key={img.src} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <figure>
                    <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                    <figcaption className="px-3 py-2 text-xs text-warm-grey">
                      Photo:{" "}
                      {img.creditUrl ? (
                        <a href={img.creditUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:no-underline">
                          {img.credit}
                        </a>
                      ) : (
                        img.credit
                      )}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-8 text-sm text-dark-grey">
            We will share family activities, accommodation and the full programme when tickets go
            on sale.
          </p>
        </div>
      </section>

      {/* Dinner */}
      <section id="dinner" className="scroll-mt-4 bg-phc-navy-dark px-4 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow light>Saturday evening</Eyebrow>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">The conference dinner</h2>
            <p className="mt-4 text-lg text-white/90">
              A real food dinner with speakers, members and supporters.
            </p>
            <div className="mt-8">
              <BookingButton bookLabel="Book the dinner" href={DINNER_BOOKING_URL || undefined} />
            </div>
          </div>
          <dl className="space-y-4 rounded-2xl bg-white/10 p-6">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-phc-cyan" aria-hidden="true" />
              <div>
                <dt className="sr-only">Date</dt>
                <dd className="font-semibold">{DINNER.label}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-phc-cyan" aria-hidden="true" />
              <div>
                <dt className="sr-only">Time</dt>
                <dd className="font-semibold">From {DINNER.time}</dd>
              </div>
            </div>
            {DINNER.venue && (
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-phc-cyan" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Venue</dt>
                  <dd className="font-semibold">{DINNER.venue}</dd>
                </div>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* Get involved */}
      <section id="get-involved" className="scroll-mt-4 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Get involved</Eyebrow>
          <h2 className="font-heading text-3xl font-bold text-phc-navy sm:text-4xl">
            Be part of the weekend
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Store,
                eyebrow: "Exhibit",
                title: "Exhibit or sponsor",
                text: "Stands for organisations that share our values.",
                cta: "Enquire",
                href: CONTACT_URL,
                external: true,
              },
              {
                icon: Users,
                eyebrow: "Volunteer",
                title: "Help on the day",
                text: "Join the volunteer team for the weekend.",
                cta: "Volunteer",
                href: VOLUNTEER_URL,
                external: true,
              },
              {
                icon: PlayCircle,
                eyebrow: "Past conferences",
                title: "Watch past talks",
                text: "Talks from previous PHC conferences on our YouTube channel.",
                cta: "Watch",
                href: YOUTUBE_URL,
                external: true,
              },
              {
                icon: Archive,
                eyebrow: "2026",
                title: "Watch or revisit 2026",
                text: "Speakers, schedule and exhibitors from PHC Conference 2026, Nourish to Flourish.",
                cta: "Revisit 2026",
                href: "/2026/",
                external: false,
              },
            ].map((card) => {
              const Icon = card.icon;
              const linkClass =
                "mt-4 inline-flex items-center gap-1 font-heading font-bold text-phc-navy underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']";
              return (
                <li
                  key={card.title}
                  className="relative flex flex-col rounded-2xl border border-phc-navy/15 bg-white p-6 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-phc-cyan hover:shadow-md"
                >
                  <Icon className="mb-4 h-7 w-7 text-phc-navy" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-warm-grey">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-phc-navy">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-dark-grey">{card.text}</p>
                  {card.external ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {card.cta}
                      <span className="sr-only">: {card.title} (opens in a new tab)</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={card.href} className={linkClass}>
                      {card.cta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
