"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { speakers } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function SpeakersSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
            Our Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from world-renowned experts in metabolic health, nutrition science, and lifestyle medicine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-phc-light/20 hover:border-phc-light/40 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
                  {speaker.photo ? (
                    <Image
                      src={`/images/speaker-photos/${speaker.photo}`}
                      alt={speaker.name}
                      fill
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={index < 8}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-phc-light via-phc-dark to-phc-yellow/30">
                      <span className="text-6xl font-bold text-white/90">
                        {speaker.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-phc-dark mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-phc-light font-semibold mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-gray-700 flex-1">
                    {speaker.description}
                  </p>
                  <div className="mt-3 h-5">
                    {speaker.links && (
                      <div className="flex gap-2">
                        {Object.entries(speaker.links).map(([key, url]) => (
                          <a
                            key={key}
                            href={url as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-phc-light hover:text-phc-yellow transition-all hover:scale-110"
                            title={`View ${key}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 relative"
        >
          <p className="text-gray-700 mb-6">
            More speakers to be announced soon!
          </p>
          <a
            href="https://phc26.eventify.io/t2/tickets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-phc-yellow to-phc-light text-phc-dark font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Your Tickets Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-phc-light to-phc-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}