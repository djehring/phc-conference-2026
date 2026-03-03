"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, Star, Medal, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { conferenceInfo } from "@/lib/data";

interface Exhibitor {
  name: string;
  url: string;
  logo: string;
}

interface SponsorTier {
  name: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  borderColor: string;
  badgeColor: string;
  exhibitors: Exhibitor[];
}

const sponsorTiers: SponsorTier[] = [
  {
    name: "Platinum Sponsors",
    icon: Trophy,
    color: "text-gray-700",
    bgGradient: "from-gray-100 via-white to-gray-100",
    borderColor: "border-gray-300",
    badgeColor: "bg-gradient-to-r from-gray-600 to-gray-400",
    exhibitors: [
      { name: "ClubWell", url: "https://clubwell.com/", logo: "clubwell.jpg" },
      { name: "fu:di", url: "https://wearefudi.com/", logo: "fudi.jpg" },
    ],
  },
  {
    name: "Gold Sponsors",
    icon: Award,
    color: "text-yellow-600",
    bgGradient: "from-yellow-50 via-white to-yellow-50",
    borderColor: "border-yellow-300",
    badgeColor: "bg-gradient-to-r from-yellow-600 to-yellow-400",
    exhibitors: [
      { name: "Nico", url: "https://nico.live/", logo: "nico.jpg" },
      { name: "VibeInside", url: "https://vibeinside.com/", logo: "vibeinside.jpg" },
      { name: "ChemoThermia", url: "https://chemothermia.com/", logo: "chemothermia.jpg" },
    ],
  },
  {
    name: "Silver Sponsors",
    icon: Star,
    color: "text-gray-500",
    bgGradient: "from-gray-50 via-white to-gray-50",
    borderColor: "border-gray-300",
    badgeColor: "bg-gradient-to-r from-gray-500 to-gray-300",
    exhibitors: [
      { name: "Institute for Optimum Nutrition", url: "https://www.ion.ac.uk/", logo: "institute-for-optimum-nutrition.jpg" },
      { name: "Genova Diagnostics", url: "https://www.gdx.net/", logo: "genova-diagnostics.png" },
      { name: "London Nootropics", url: "https://londonnootropics.com/", logo: "london-nootropics.png" },
    ],
  },
  {
    name: "Bronze Sponsors",
    icon: Medal,
    color: "text-amber-700",
    bgGradient: "from-amber-50 via-white to-amber-50",
    borderColor: "border-amber-300",
    badgeColor: "bg-gradient-to-r from-amber-700 to-amber-500",
    exhibitors: [
      { name: "College of Functional Wellness", url: "https://www.functional-wellness.co.uk/", logo: "college-of-functional-wellness.png" },
      { name: "X-PERT Health", url: "https://www.xperthealth.org.uk/", logo: "xpert-health.jpg" },
      { name: "Integrative & Personalised Medicine Congress", url: "https://ipmcongress.com/", logo: "integrative-personalised-medicine-congress.jpg" },
    ],
  },
];

export default function ExhibitorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-phc-dark to-phc-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-phc-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-phc-light rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="w-10 h-10 text-phc-yellow mr-3" />
              <span className="text-phc-yellow font-semibold text-lg uppercase tracking-wider">
                Our Sponsors
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              Conference Exhibitors
              <br />
              <span className="text-phc-yellow">&amp; Sponsors</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              We are proud to partner with these organisations who share our commitment
              to evidence-based nutrition and metabolic health.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-colors"
            >
              Back to Conference
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      {sponsorTiers.map((tier, tierIndex) => (
        <section
          key={tier.name}
          className={`py-16 px-4 ${
            tierIndex % 2 === 0
              ? "bg-gradient-to-br from-gray-50 via-white to-phc-light/5"
              : "bg-white"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'transparent' }}>
                <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-bold ${tier.badgeColor}`}>
                  <tier.icon className="w-5 h-5" />
                  {tier.name}
                </span>
              </div>
            </motion.div>

            <div
              className={`grid gap-8 ${
                tier.exhibitors.length === 2
                  ? "md:grid-cols-2 max-w-4xl mx-auto"
                  : "md:grid-cols-3"
              }`}
            >
              {tier.exhibitors.map((exhibitor, index) => (
                <motion.a
                  key={exhibitor.name}
                  href={exhibitor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative bg-gradient-to-br ${tier.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border ${tier.borderColor} flex flex-col items-center text-center`}
                >
                  <div className="relative w-full h-32 mb-6 flex items-center justify-center">
                    <Image
                      src={`/images/exhibitor-images/${exhibitor.logo}`}
                      alt={exhibitor.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-phc-dark mb-2">
                    {exhibitor.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-phc-light group-hover:text-phc-dark transition-colors">
                    Visit website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Become a Sponsor CTA */}
      <section className="py-20 bg-gradient-to-br from-phc-dark to-phc-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Exhibiting?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Showcase your brand at the premier metabolic health conference.
              Request our exhibitor brochure for sponsorship packages and pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://forms.office.com/e/LTaJrbkxmG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-phc-yellow to-yellow-400 text-phc-dark font-bold rounded-full hover:scale-105 transition-transform shadow-lg text-lg"
              >
                Request Exhibitor Brochure
              </a>
              <a
                href={conferenceInfo.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-colors text-lg"
              >
                Get Conference Tickets
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
