"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  HelpCircle,
  Download,
  ChevronDown,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import {
  evidenceCategories,
  faqItems,
  featuredResearch,
  downloadableResources,
} from "@/lib/data";

const categoryIcons: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-8 h-8" />,
  HelpCircle: <HelpCircle className="w-8 h-8" />,
  Download: <Download className="w-8 h-8" />,
};

function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-off-white/50 transition-colors"
      >
        <h3 className="font-heading font-semibold text-dark-grey pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-phc-cyan flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-warm-grey leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EvidencePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageHero
        badge="The Evidence"
        title="Science-backed"
        highlight="health guidance"
        description="Explore our curated collection of research, FAQs, and practical resources — all grounded in the latest metabolic health science."
      />

      {/* ===================== EVIDENCE CATEGORIES ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Browse By Category
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Evidence library
              </h2>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {evidenceCategories.map((cat, i) => (
              <FadeInSection key={cat.title} delay={i * 0.15}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-phc-navy/5 transition-all duration-300 hover:-translate-y-1 h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-phc-cyan-pale text-phc-cyan flex items-center justify-center mx-auto mb-5 group-hover:bg-phc-cyan group-hover:text-white transition-colors">
                    {categoryIcons[cat.icon]}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark-grey mb-2">
                    {cat.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-phc-cyan/10 rounded-full text-phc-cyan text-sm font-semibold mb-4">
                    {cat.count} items
                  </span>
                  <p className="text-warm-grey leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED RESEARCH ===================== */}
      <section className="py-24 bg-phc-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Highlighted Studies
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
                Featured research
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mt-4 text-lg">
                Key studies that support real food approaches to metabolic
                health.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredResearch.map((study, i) => (
              <FadeInSection key={study.title} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-phc-cyan" />
                    <span className="text-phc-cyan text-sm font-medium">
                      {study.year}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-3 line-clamp-3">
                    {study.title}
                  </h3>
                  <p className="text-white/40 text-sm mb-4 italic">
                    {study.journal}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    {study.finding}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-phc-cyan font-semibold text-sm mt-6"
                  >
                    Read summary
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Common Questions
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Frequently asked questions
              </h2>
              <p className="text-warm-grey max-w-2xl mx-auto mt-4 text-lg">
                Clear, evidence-based answers to the questions we hear most
                often.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <FadeInSection key={faq.question} delay={i * 0.05}>
                <FAQAccordion question={faq.question} answer={faq.answer} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RESOURCE PREVIEW ===================== */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Downloads
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Practical resources
              </h2>
              <p className="text-warm-grey max-w-2xl mx-auto mt-4 text-lg">
                Free, downloadable materials for patients and healthcare
                professionals.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, i) => (
              <FadeInSection key={resource.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:shadow-phc-navy/5 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-2.5 py-0.5 bg-phc-cyan/10 rounded-full text-phc-cyan text-xs font-semibold">
                      {resource.type}
                    </span>
                    <span className="text-warm-grey/60 text-xs">
                      {resource.downloads} downloads
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-dark-grey mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-warm-grey text-sm leading-relaxed flex-1">
                    {resource.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-phc-navy hover:bg-phc-navy-light text-white font-semibold text-sm rounded-full transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download free
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question?"
        description="Can't find what you're looking for? Our team is happy to help point you to the evidence or connect you with the right resources."
        primaryLabel="Contact us"
        primaryHref="/get-involved"
        secondaryLabel="Browse all FAQs"
        secondaryHref="/evidence"
      />
    </div>
  );
}
