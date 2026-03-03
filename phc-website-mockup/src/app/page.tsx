"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Scale,
  BookOpen,
  Users,
  Play,
  ChevronRight,
  Mail,
  Quote,
  TrendingUp,
  AlertTriangle,
  Heart,
} from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  impactStats,
  pillars,
  crisisStats,
  featuredContent,
  testimonials,
} from "@/lib/data";

const pillarIcons: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categoryColors: Record<string, string> = {
  Research: "bg-phc-cyan/10 text-phc-cyan",
  News: "bg-warm-amber/10 text-warm-amber",
  Resources: "bg-success-green/10 text-success-green",
  Blog: "bg-phc-navy/10 text-phc-navy",
};

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-phc-navy via-phc-navy-dark to-phc-navy overflow-hidden pt-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-phc-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-phc-cyan/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-phc-navy-light/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 bg-phc-cyan/10 border border-phc-cyan/20 rounded-full text-phc-cyan font-medium text-sm">
              UK Registered Charity No. 1170205
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Better health through
            <br />
            <span className="text-phc-cyan">better evidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We&rsquo;re a UK charity challenging outdated dietary advice with
            rigorous science. Real food, not ultra-processed food, is the
            foundation of good health.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-phc-cyan hover:bg-phc-cyan-light text-phc-navy-dark font-bold rounded-full transition-all hover:scale-105"
            >
              Learn what we do
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all hover:bg-white/5"
            >
              <Play className="w-5 h-5" />
              Watch our story
            </Link>
          </motion.div>
        </div>

      </section>

      {/* ===================== IMPACT STATS ===================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-phc-navy rounded-2xl shadow-2xl shadow-phc-navy/20 p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {impactStats.map((stat, i) => (
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

      {/* ===================== THREE PILLARS ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Three pillars of our mission
              </h2>
              <p className="text-warm-grey max-w-2xl mx-auto mt-4 text-lg">
                We work across advocacy, education, and community to transform
                how the UK approaches metabolic health.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <FadeInSection key={pillar.title} delay={i * 0.15}>
                <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-phc-navy/5 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-xl bg-phc-cyan-pale text-phc-cyan flex items-center justify-center mb-5 group-hover:bg-phc-cyan group-hover:text-white transition-colors">
                    {pillarIcons[pillar.icon]}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark-grey mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-warm-grey leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1 text-phc-cyan font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE CRISIS ===================== */}
      <section className="py-24 bg-phc-navy-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-warm-amber font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                The Problem We&rsquo;re Solving
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
                The UK metabolic health crisis
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mt-4 text-lg">
                Decades of flawed dietary advice have fuelled an epidemic. The
                numbers speak for themselves.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {crisisStats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="text-warm-amber font-heading font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="bg-gradient-to-r from-phc-cyan/10 to-phc-cyan/5 border border-phc-cyan/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <Quote className="w-10 h-10 text-phc-cyan/30 mx-auto mb-4" />
              <blockquote className="font-heading font-semibold text-xl sm:text-2xl text-white leading-relaxed">
                &ldquo;We believe real food is the foundation of good health —
                and the evidence supports it.&rdquo;
              </blockquote>
              <p className="text-phc-cyan mt-4 font-medium">
                Public Health Collaboration
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== FEATURED CONTENT ===================== */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                  Latest
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                  News &amp; resources
                </h2>
              </div>
              <Link
                href="#"
                className="hidden sm:inline-flex items-center gap-1 text-phc-navy font-semibold hover:gap-2 transition-all"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-phc-navy/5 transition-all duration-300 group h-full flex flex-col">
                  {/* Placeholder image area */}
                  <div className="h-40 bg-gradient-to-br from-phc-navy/5 to-phc-cyan/5 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-phc-navy/20" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${categoryColors[item.category] || "bg-gray-100 text-gray-600"}`}
                    >
                      {item.category}
                    </span>
                    <h3 className="font-heading font-semibold text-dark-grey group-hover:text-phc-navy transition-colors mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-grey text-sm leading-relaxed flex-1 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <p className="text-warm-grey/60 text-xs mt-3">
                      {item.date}
                    </p>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-phc-navy font-semibold"
            >
              View all news &amp; resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== EMAIL MAGNET ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-gradient-to-br from-phc-navy to-phc-navy-dark rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-3 py-1 bg-phc-cyan/10 border border-phc-cyan/20 rounded-full text-phc-cyan font-medium text-sm mb-4">
                  Free Tool
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
                  Check your metabolic health
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  Use our interactive calculator to assess your metabolic health
                  markers. Get personalised insights and actionable
                  recommendations based on the latest evidence.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-phc-cyan hover:bg-phc-cyan-light text-phc-navy-dark font-bold rounded-full transition-all hover:scale-105"
                >
                  Try the calculator
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="w-full lg:w-80 h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-phc-cyan/20 flex items-center justify-center mb-3">
                    <Heart className="w-8 h-8 text-phc-cyan" />
                  </div>
                  <p className="text-white/40 text-sm">
                    Interactive calculator preview
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Impact Stories
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                What people say about PHC
              </h2>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.author} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-phc-cyan/20 mb-4" />
                  <p className="text-dark-grey leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="font-heading font-semibold text-dark-grey">
                      {t.author}
                    </p>
                    <p className="text-warm-grey text-sm">{t.role}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER ===================== */}
      <section className="py-16 bg-phc-cyan">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeInSection>
            <Mail className="w-10 h-10 text-phc-navy-dark/30 mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-phc-navy-dark mb-3">
              Stay informed
            </h2>
            <p className="text-phc-navy-dark/70 mb-8 text-lg">
              Evidence-based health insights delivered to your inbox. No spam,
              just science.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/90 border-0 text-dark-grey placeholder:text-warm-grey/60 focus:outline-none focus:ring-2 focus:ring-phc-navy/30"
              />
              <button
                type="button"
                className="px-8 py-3.5 bg-phc-navy hover:bg-phc-navy-light text-white font-bold rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-phc-navy-dark/40 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== PARTNERS BAR ===================== */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-center text-warm-grey/60 text-sm uppercase tracking-wider mb-8">
              Trusted by healthcare professionals and organisations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
              {["NHS", "BMJ", "University of Oxford", "Kings College London", "The Lancet"].map(
                (partner) => (
                  <div
                    key={partner}
                    className="font-heading font-bold text-lg text-dark-grey"
                  >
                    {partner}
                  </div>
                )
              )}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
