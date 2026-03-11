"use client";

import {
  Stethoscope,
  Heart,
  Building,
  UserPlus,
  HandHeart,
  Gift,
  Calendar,
  Handshake,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { audiencePaths, involvementPaths } from "@/lib/data";

const audienceIcons: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Building: <Building className="w-8 h-8" />,
};

const involvementIcons: Record<string, React.ReactNode> = {
  UserPlus: <UserPlus className="w-7 h-7" />,
  HandHeart: <HandHeart className="w-7 h-7" />,
  Gift: <Gift className="w-7 h-7" />,
  Calendar: <Calendar className="w-7 h-7" />,
  Handshake: <Handshake className="w-7 h-7" />,
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageHero
        badge="Get Involved"
        title="Join the"
        highlight="movement"
        description="There are many ways to be part of PHC — from membership and volunteering to corporate partnerships. Find the path that's right for you."
      />

      {/* ===================== AUDIENCE PATHWAYS ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Who Are You?
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                Find your path
              </h2>
              <p className="text-warm-grey max-w-2xl mx-auto mt-4 text-lg">
                Whether you&rsquo;re a clinician, a curious individual, or an
                organisation — we have resources and opportunities for you.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {audiencePaths.map((path, i) => (
              <FadeInSection key={path.title} delay={i * 0.15}>
                <div className="group bg-gradient-to-br from-phc-navy to-phc-navy-dark rounded-2xl p-8 hover:shadow-2xl hover:shadow-phc-navy/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col text-center">
                  <div className="w-16 h-16 rounded-2xl bg-phc-cyan/10 text-phc-cyan flex items-center justify-center mx-auto mb-5">
                    {audienceIcons[path.icon]}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {path.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 flex-1">
                    {path.description}
                  </p>
                  <Link
                    href={path.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-phc-cyan hover:bg-phc-cyan-light text-phc-navy-dark font-bold rounded-full transition-all hover:scale-105 text-sm"
                  >
                    {path.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INVOLVEMENT OPTIONS ===================== */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-phc-cyan font-semibold text-sm uppercase tracking-wider">
                Ways to Contribute
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark-grey mt-3">
                How you can help
              </h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {involvementPaths.map((path, i) => (
              <FadeInSection key={path.title} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-2xl p-8 border h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-phc-navy/5 ${
                    path.featured
                      ? "border-phc-cyan ring-2 ring-phc-cyan/20"
                      : "border-gray-100"
                  }`}
                >
                  {path.featured && (
                    <span className="inline-block w-fit px-3 py-0.5 bg-phc-cyan/10 text-phc-cyan text-xs font-bold rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-phc-cyan-pale text-phc-cyan flex items-center justify-center mb-4">
                    {involvementIcons[path.icon]}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark-grey mb-2">
                    {path.title}
                  </h3>
                  {"price" in path && path.price && (
                    <p className="text-phc-cyan font-heading font-bold text-lg mb-2">
                      {path.price}
                    </p>
                  )}
                  <p className="text-warm-grey text-sm leading-relaxed flex-1 mb-6">
                    {path.description}
                  </p>
                  <Link
                    href={path.href}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm rounded-full transition-all ${
                      path.featured
                        ? "bg-phc-cyan hover:bg-phc-cyan-light text-phc-navy-dark hover:scale-105"
                        : "bg-phc-navy hover:bg-phc-navy-light text-white"
                    }`}
                    {...(path.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {path.cta}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DONATION HIGHLIGHT ===================== */}
      <section className="py-24 bg-gradient-to-br from-phc-navy to-phc-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <Heart className="w-12 h-12 text-phc-cyan/30 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Your donation makes a difference
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Every pound supports our free educational resources, advocacy work,
              and community programmes. PHC accepts no industry funding — we
              rely entirely on the generosity of people who believe in
              evidence-based health.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-8 py-4 bg-phc-cyan hover:bg-phc-cyan-light text-phc-navy-dark font-bold rounded-full transition-all hover:scale-105"
              >
                Donate now
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all hover:bg-white/5"
              >
                Set up monthly giving
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div>
                <div className="text-phc-cyan font-heading font-extrabold text-2xl sm:text-3xl">
                  £10
                </div>
                <div className="text-white/40 text-xs mt-1">
                  funds 20 Real Food Booklets
                </div>
              </div>
              <div>
                <div className="text-phc-cyan font-heading font-extrabold text-2xl sm:text-3xl">
                  £50
                </div>
                <div className="text-white/40 text-xs mt-1">
                  trains a volunteer ambassador
                </div>
              </div>
              <div>
                <div className="text-phc-cyan font-heading font-extrabold text-2xl sm:text-3xl">
                  £100
                </div>
                <div className="text-white/40 text-xs mt-1">
                  sponsors a support group for a month
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <CTASection
        title="Ready to make a difference?"
        description="Join thousands of healthcare professionals and health-conscious individuals who are championing evidence-based metabolic health across the UK."
        primaryLabel="Become a member"
        primaryHref="https://phcuk.org/membership/"
        secondaryLabel="Contact us"
        secondaryHref="/get-involved"
      />
    </div>
  );
}
