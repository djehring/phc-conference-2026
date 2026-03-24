"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { speakers } from "@/lib/data";
import { ExternalLink, ChevronRight } from "lucide-react";

export default function SpeakersSection() {
  const router = useRouter();

  return (
    <section className="relative pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-phc-dark mb-6">
            Our Speakers
          </h2>
          <p className="text-lg text-dark-grey max-w-3xl mx-auto">
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
              className="group cursor-pointer"
              onClick={() => router.push(`/speakers/${speaker.slug}/`)}
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
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-phc-light via-phc-dark to-phc-navy-dark">
                      <span className="font-heading text-6xl font-bold text-white/90">
                        {speaker.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white flex-1 flex flex-col">
                  <h3 className="font-heading font-bold text-lg text-phc-dark mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-phc-cyan font-semibold mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-dark-grey flex-1">
                    {speaker.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      {speaker.links && Object.entries(speaker.links).map(([key, url]) => (
                        <a
                          key={key}
                          href={url as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-phc-cyan hover:text-phc-cyan-light transition-all hover:scale-110"
                          title={`View ${key}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                    <span className="text-xs text-phc-cyan font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      View Profile <ChevronRight className="w-3 h-3 ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}