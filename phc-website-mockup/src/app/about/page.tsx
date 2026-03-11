"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  Users,
  ArrowRight,
  ExternalLink,
  FileText,
} from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import { teamMembers, timeline } from "@/lib/data";

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Evidence First",
    description:
      "Every position we take is grounded in rigorous scientific research. We follow the evidence wherever it leads.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "People Before Profit",
    description:
      "As a registered charity, our only interest is improving public health. We accept no funding from the food or pharmaceutical industries.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Practical Solutions",
    description:
      "We translate complex nutrition science into actionable, accessible guidance that real people can follow.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Inclusive Community",
    description:
      "We welcome everyone — patients, healthcare professionals, researchers, and policymakers — into a constructive dialogue.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ===================== PAGE HERO ===================== */}
      <section className="relative bg-gradient-to-br from-phc-navy to-phc-navy-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-phc-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-phc-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 bg-phc-cyan/10 border border-phc-cyan/20 rounded-full text-phc-cyan font-medium text-sm">
              About PHC
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6"
          >
            Championing metabolic health
            <br />
            <span className="text-phc-cyan">for everyone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            The Public Health Collaboration is a UK registered charity on a
            mission to widen access to real food and evidence-based lifestyle
            interventions for preventing and reversing chronic disease.
          </motion.p>
        </div>
      </section>

      {/* ===================== VISION & MISSION ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeInSection>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-phc-cyan-pale text-phc-cyan flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-dark-grey mb-4">
                    Our Vision
                  </h2>
                  <p className="text-warm-grey text-lg leading-relaxed">
                    A world where evidence-based nutrition is at the heart of
                    public health, where chronic metabolic diseases are the
                    exception rather than the norm, and where every person has
                    the knowledge and access to nourish themselves with real
                    food.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-phc-cyan-pale text-phc-cyan flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-dark-grey mb-4">
                    Our Mission
                  </h2>
                  <p className="text-warm-grey text-lg leading-relaxed">
                    To improve the nation&rsquo;s health by promoting
                    evidence-based nutrition and lifestyle medicine. We
                    challenge flawed dietary guidelines, create practical
                    educational resources, and build a community of
                    professionals and patients united by science.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                What Guides Us
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Our core values
              </h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <FadeInSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full hover:shadow-lg hover:shadow-phc-navy/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-phc-cyan-pale text-phc-cyan flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-dark-grey mb-2">
                    {value.title}
                  </h3>
                  <p className="text-warm-grey text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TIMELINE ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                10 years of impact
              </h2>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-phc-cyan/20 -translate-x-1/2" />

            {timeline.map((item, i) => (
              <FadeInSection key={item.year} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-6 mb-12 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-phc-cyan border-4 border-white -translate-x-1/2 z-10 shadow-md" />

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0
                        ? "md:pr-8 md:text-right"
                        : "md:pl-8 md:text-left"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-phc-cyan/10 rounded-full text-phc-cyan font-heading font-bold text-sm mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-dark-grey mb-1">
                      {item.title}
                    </h3>
                    <p className="text-warm-grey text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TEAM ===================== */}
      <section id="team" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Our People
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Team &amp; trustees
              </h2>
              <p className="text-warm-grey max-w-2xl mx-auto mt-4 text-lg">
                PHC is led by a dedicated team of healthcare professionals,
                scientists, and communicators passionate about metabolic health.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <FadeInSection key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:shadow-phc-navy/5 transition-all duration-300 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-phc-navy to-phc-navy-light flex items-center justify-center mx-auto mb-5">
                    <span className="text-white font-heading font-bold text-xl">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-dark-grey">
                    {member.name}
                  </h3>
                  <p className="text-phc-cyan font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-warm-grey text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GOVERNANCE ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Transparency
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Governance &amp; accountability
              </h2>
              <p className="text-warm-grey max-w-2xl mx-auto mt-4 text-lg">
                As a registered charity, we are committed to full transparency
                in how we operate and spend our funds.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-6">
            <FadeInSection>
              <div className="bg-off-white rounded-2xl p-8 border border-gray-100">
                <FileText className="w-8 h-8 text-phc-cyan mb-4" />
                <h3 className="font-heading font-bold text-lg text-dark-grey mb-2">
                  Annual Reports
                </h3>
                <p className="text-warm-grey text-sm leading-relaxed mb-4">
                  Read our latest annual report for a full account of our work,
                  impact, and finances.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-phc-cyan font-semibold text-sm"
                >
                  Download 2025 Report
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="bg-off-white rounded-2xl p-8 border border-gray-100">
                <Shield className="w-8 h-8 text-phc-cyan mb-4" />
                <h3 className="font-heading font-bold text-lg text-dark-grey mb-2">
                  Charity Commission
                </h3>
                <p className="text-warm-grey text-sm leading-relaxed mb-4">
                  PHC is registered with the Charity Commission for England and
                  Wales. View our public record.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-phc-cyan font-semibold text-sm"
                >
                  Charity No. 1170205
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-24 bg-phc-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Join the movement
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Whether you&rsquo;re a healthcare professional, researcher, or
              someone who cares about real food and metabolic health — there&rsquo;s
              a place for you at PHC.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-8 py-4 bg-phc-cyan hover:bg-phc-cyan-light text-phc-navy-dark font-bold rounded-full transition-all hover:scale-105"
              >
                Become a member
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all hover:bg-white/5"
              >
                Volunteer with us
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
