"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { workStreams, workImpactStats } from "@/lib/data";

export default function OurWorkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageHero
        badge="Our Projects"
        title="Making a real"
        highlight="difference"
        description="From health coaching and education to community running clubs and digital wellness, discover the projects transforming metabolic health across the UK."
      />

      {/* ===================== PROJECTS GRID ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Our Programmes
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Seven projects, one mission
              </h2>
              <p className="text-warm-grey max-w-2xl mx-auto mt-4 text-lg">
                Each project addresses a different dimension of the metabolic
                health challenge, from clinical coaching to grassroots community action.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workStreams.map((stream, i) => (
              <FadeInSection key={stream.title} delay={i * 0.1}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-phc-navy/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center mb-5 overflow-hidden">
                    <Image
                      src={stream.logo}
                      alt={`${stream.title} logo`}
                      width={72}
                      height={72}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark-grey mb-3">
                    {stream.title}
                  </h3>
                  <p className="text-warm-grey leading-relaxed mb-5">
                    {stream.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {stream.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-warm-grey"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-phc-cyan mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={stream.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-phc-cyan font-semibold text-sm group-hover:gap-2 transition-all mt-auto"
                  >
                    Visit project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== IMPACT STRIP ===================== */}
      <section className="py-16 bg-phc-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {workImpactStats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="text-phc-cyan font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-white/60 text-sm sm:text-base">
                  {stat.label}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to support our work?"
        description="Whether through membership, volunteering, or donations, your support makes our programmes possible. Join thousands helping to transform metabolic health."
        primaryLabel="Get involved"
        primaryHref="/get-involved"
        secondaryLabel="Donate now"
        secondaryHref="/get-involved"
      />
    </div>
  );
}
