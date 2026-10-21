"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink, Clock, Users, Mic, ChevronRight } from "lucide-react";
import { getSpeakerBySlug, getSessionsForSpeaker } from "@/lib/2026/utils";

export default function SpeakerPageContent({ slug }: { slug: string }) {
  const speaker = getSpeakerBySlug(slug);
  const sessions = getSessionsForSpeaker(slug);

  if (!speaker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-phc-dark mb-4">Speaker not found</h1>
          <Link href="/2026/#speakers" className="text-phc-light hover:underline">
            Back to 2026 speakers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-phc-dark to-phc-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-phc-yellow rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 sm:py-28">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/2026/#speakers"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to 2026 speakers
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl bg-white">
                {speaker.photo ? (
                  <Image
                    src={`/images/speaker-photos/${speaker.photo}`}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-phc-light via-phc-dark to-phc-yellow/30">
                    <span className="text-6xl font-bold text-white/90">
                      {speaker.initials}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left text-white"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                {speaker.name}
              </h1>
              <p className="text-xl text-phc-yellow font-semibold mb-4">
                {speaker.title}
              </p>
              <p className="text-white/90 text-lg max-w-2xl">
                {speaker.description}
              </p>

              {speaker.links && Object.keys(speaker.links).length > 0 && (
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  {Object.entries(speaker.links).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm text-white hover:bg-white/25 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-2" />
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      {speaker.bio && (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-phc-light/5">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-phc-dark mb-6">About {speaker.name}</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                {speaker.bio.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Schedule Appearances */}
      {sessions.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-phc-dark mb-6">
                <Calendar className="w-6 h-6 inline-block mr-2 text-phc-light" />
                Schedule Appearances
              </h2>
              <div className="space-y-4">
                {sessions.map(({ day, session, role }) => (
                  <Link
                    key={session.id}
                    href={`/2026/schedule/#${session.id}`}
                    className="block border-l-4 border-l-phc-light bg-gradient-to-r from-phc-light/5 to-white rounded-r-xl p-5 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-phc-light">
                            {session.time}
                          </span>
                          <span className="text-xs text-gray-400">|</span>
                          <span className="text-xs text-gray-500">{day.date}</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            role === "Chair"
                              ? "bg-phc-dark/10 text-phc-dark"
                              : role === "Panelist"
                              ? "bg-phc-dark/10 text-phc-dark"
                              : "bg-phc-light/10 text-phc-light"
                          }`}>
                            {role}
                          </span>
                        </div>
                        <h3 className="font-bold text-phc-dark">{session.title}</h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-phc-light transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-phc-dark to-phc-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            {speaker.name} spoke at PHC Conference 2026
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8">
            PHC Conference 2027 is at Warwick Hall, Warwick, on 10 and 11 April 2027.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-phc-cyan text-phc-navy-dark font-bold rounded-full hover:bg-phc-cyan-light transition-colors shadow-lg"
            >
              See the 2027 conference
            </Link>
            <Link
              href="/2026/schedule/"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-colors"
            >
              View the 2026 schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
