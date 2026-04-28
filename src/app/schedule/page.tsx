"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Coffee, Utensils, Users, Mic, ChevronRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { scheduleData } from "@/lib/schedule-data";
import { getSpeakerBySlug } from "@/lib/utils";
import { conferenceInfo } from "@/lib/data";
import type { ScheduleSession } from "@/types";

function SessionIcon({ type }: { type: ScheduleSession["type"] }) {
  switch (type) {
    case "registration":
      return <Clock className="w-5 h-5" />;
    case "talk":
    case "opening":
      return <Mic className="w-5 h-5" />;
    case "panel":
      return <Users className="w-5 h-5" />;
    case "break":
      return <Coffee className="w-5 h-5" />;
    case "lunch":
      return <Utensils className="w-5 h-5" />;
    case "dinner":
      return <Utensils className="w-5 h-5" />;
    case "closing":
      return <Clock className="w-5 h-5" />;
    default:
      return <Calendar className="w-5 h-5" />;
  }
}

function sessionBorderColor(type: ScheduleSession["type"]) {
  switch (type) {
    case "talk":
    case "opening":
      return "border-l-phc-light";
    case "panel":
      return "border-l-phc-dark";
    case "dinner":
      return "border-l-phc-dark";
    default:
      return "border-l-gray-300";
  }
}

function sessionBadge(type: ScheduleSession["type"]) {
  switch (type) {
    case "talk":
      return { label: "Talk", className: "bg-phc-light/10 text-phc-light" };
    case "panel":
      return { label: "Panel", className: "bg-phc-dark/10 text-phc-dark" };
    case "opening":
      return { label: "Opening", className: "bg-phc-dark/10 text-phc-dark" };
    case "dinner":
      return { label: "Dinner", className: "bg-phc-dark/10 text-phc-dark" };
    default:
      return null;
  }
}

function SpeakerPhoto({ slug, className = "" }: { slug: string; className?: string }) {
  const speaker = getSpeakerBySlug(slug);
  if (!speaker) return null;
  return (
    <Link
      href={`/speakers/${speaker.slug}/`}
      className={`relative block overflow-hidden rounded-lg flex-shrink-0 group/photo ${className}`}
    >
      {speaker.photo ? (
        <Image
          src={`/images/speaker-photos/${speaker.photo}`}
          alt={speaker.name}
          fill
          className="object-cover group-hover/photo:scale-105 transition-transform duration-300"
          sizes="80px"
        />
      ) : (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-phc-light to-phc-dark">
          <span className="text-lg font-bold text-white">{speaker.initials}</span>
        </div>
      )}
    </Link>
  );
}

function SpeakerName({ slug }: { slug: string }) {
  const speaker = getSpeakerBySlug(slug);
  if (!speaker) return null;
  return (
    <Link
      href={`/speakers/${speaker.slug}/`}
      className="text-phc-light hover:text-phc-dark hover:underline transition-colors font-medium text-sm"
    >
      {speaker.name}
    </Link>
  );
}

function getAllSlugsForSession(session: ScheduleSession): string[] {
  const slugs: string[] = [];
  if (session.speakerSlugs) slugs.push(...session.speakerSlugs);
  if (session.chairSlug) slugs.push(session.chairSlug);
  if (session.panelistSlugs) slugs.push(...session.panelistSlugs);
  return slugs;
}

function SessionCard({ session, index }: { session: ScheduleSession; index: number }) {
  const badge = sessionBadge(session.type);
  const isNonSpeaker = ["break", "lunch", "registration", "closing"].includes(session.type);
  const allSlugs = getAllSlugsForSession(session);
  const hasSpeakers = allSlugs.length > 0;

  return (
    <motion.div
      id={session.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={`border-l-4 ${sessionBorderColor(session.type)} ${
        isNonSpeaker ? "bg-gray-50" : "bg-white"
      } rounded-r-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden scroll-mt-8`}
    >
      <div className={`flex ${hasSpeakers ? "flex-row" : ""}`}>
        {/* Speaker photo(s) on the left */}
        {hasSpeakers && (
          <div className="flex flex-shrink-0 p-2">
            {allSlugs.length === 1 ? (
              <SpeakerPhoto slug={allSlugs[0]} className="w-20 sm:w-24 h-auto aspect-[3/4]" />
            ) : allSlugs.length === 2 ? (
              <div className="flex w-20 sm:w-24">
                {allSlugs.map((slug) => (
                  <SpeakerPhoto key={slug} slug={slug} className="w-1/2 h-auto aspect-[3/8]" />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap w-20 sm:w-24">
                {allSlugs.slice(0, 4).map((slug) => (
                  <SpeakerPhoto key={slug} slug={slug} className="w-1/2 h-auto aspect-[3/4]" />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-1">
            <span className={`${isNonSpeaker ? "text-gray-400" : "text-phc-light"}`}>
              <SessionIcon type={session.type} />
            </span>
            <span className={`font-semibold text-sm ${isNonSpeaker ? "text-gray-500" : "text-phc-dark"}`}>
              {session.time}
            </span>
            {badge && (
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badge.className}`}>
                {badge.label}
              </span>
            )}
            {session.isRemote && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-warm-amber/15 text-warm-amber">
                Remote
              </span>
            )}
          </div>

          <h3 className={`font-bold ${isNonSpeaker ? "text-gray-500" : "text-phc-dark"}`}>
            {session.title}
          </h3>

          {session.speakerSlugs && session.speakerSlugs.length > 0 && (
            <p className="text-sm mt-1">
              {session.speakerSlugs.map((slug, i) => (
                <span key={slug}>
                  {i > 0 && " & "}
                  <SpeakerName slug={slug} />
                </span>
              ))}
            </p>
          )}

          {session.type === "panel" && session.chairSlug && (
            <p className="text-sm mt-1">
              <span className="text-gray-500">Chaired by </span>
              <SpeakerName slug={session.chairSlug} />
            </p>
          )}

          {session.type === "panel" && session.panelistSlugs && session.panelistSlugs.length > 0 && (
            <p className="text-sm mt-1">
              <span className="text-gray-500">Panelists: </span>
              {session.panelistSlugs.map((slug, i) => (
                <span key={slug}>
                  {i > 0 && ", "}
                  <SpeakerName slug={slug} />
                </span>
              ))}
            </p>
          )}

          {session.description && (
            <p className="text-sm text-gray-500 mt-1 italic">{session.description}</p>
          )}

          {session.type === "dinner" && (
            <Link
              href="/dinner/"
              className="inline-flex items-center text-sm text-phc-light hover:text-phc-dark mt-2 font-medium transition-colors"
            >
              View dinner details <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Find which day contains this session
    const dayIndex = scheduleData.findIndex((day) =>
      day.sessions.some((s) => s.id === hash)
    );
    if (dayIndex >= 0 && dayIndex !== activeDay) {
      setActiveDay(dayIndex);
    }

    // Scroll to the element after a short delay to allow tab switch to render
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 300);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-phc-dark to-phc-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-phc-light rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white py-20">
          {/* Back to Conference */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Conference
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* PHC Logo */}
            <div className="mb-6">
              <Image
                src="/images/PHC_logo_white_text.png"
                alt="Public Health Collaboration"
                width={180}
                height={80}
                className="mx-auto h-14 sm:h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-white/80 mr-3" />
              <span className="text-white/80 font-semibold text-lg uppercase tracking-wider">
                Conference Programme
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Conference Schedule
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-4">
              Two days of world-class speakers, panels, and networking at The Light, Euston, London.
            </p>
            <p className="text-sm text-white/60">
              Please note: This schedule is subject to change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-phc-light/5">
        <div className="max-w-4xl mx-auto">
          {/* Day Tabs */}
          <div className="flex gap-2 mb-10 justify-center">
            {scheduleData.map((day, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  activeDay === i
                    ? "bg-phc-dark text-white shadow-lg"
                    : "bg-white text-phc-dark border-2 border-phc-dark/20 hover:border-phc-dark/50"
                }`}
              >
                <span className="hidden sm:inline">Day {i + 1}: </span>
                {day.date}
              </button>
            ))}
          </div>

          {/* Day Theme */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-phc-light/10 text-phc-dark font-semibold text-sm rounded-full border border-phc-light/20">
                {scheduleData[activeDay].theme}
              </span>
            </div>

            {/* Sessions */}
            <div className="space-y-3">
              {scheduleData[activeDay].sessions.map((session, index) => (
                <SessionCard key={session.id} session={session} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 space-y-4"
          >
            <p className="text-sm text-gray-500 italic">
              Please note: This schedule is subject to change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={conferenceInfo.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-phc-light text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105"
              >
                Get Your Tickets Now
              </a>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-phc-dark text-phc-dark font-semibold rounded-full hover:bg-phc-dark hover:text-white transition-colors"
              >
                Back to Conference
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
