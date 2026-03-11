"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-24 bg-phc-navy">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            {title}
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-phc-cyan hover:bg-phc-cyan-light text-phc-navy-dark font-bold rounded-full transition-all hover:scale-105"
            >
              {primaryLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all hover:bg-white/5"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
