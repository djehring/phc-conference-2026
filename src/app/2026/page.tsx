"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, ChevronDown, Utensils, Clock, Info, Video } from "lucide-react";
import { conferenceInfo, speakers, statistics } from "@/lib/2026/data";
import Image from "next/image";
import SpeakersSection from "@/components/SpeakersSection";
import ConferenceVideoSlider from "@/components/conference-video-slider";
import MobileJumpNav from "@/components/MobileJumpNav";
import { YOUTUBE_URL } from "@/lib/brand";


export default function Conference2026Archive() {
  return (
    <div className="min-h-screen">
      <MobileJumpNav />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-phc-dark to-phc-light overflow-hidden py-20 sm:py-0">
        {/* Floating shapes */}
        <div className="absolute inset-0 pt-8 sm:pt-12 md:pt-16 hidden sm:block">
          <motion.div
            className="absolute top-8 left-2 sm:top-12 sm:left-10 md:top-20 md:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image 
              src="/images/NourishToFlourish - Blue - JUST LOGO.png"
              alt="Nourish to Flourish"
              width={100}
              height={100}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-phc-light/10 rounded-lg"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          {/* PHC Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 sm:mb-4"
          >
            <img
              src="/images/PHC_logo_reversed.svg"
              alt="Preventive Health Collaboration"
              width={830}
              height={180}
              className="h-10 sm:h-14 md:h-16 w-auto mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-2 sm:mb-3"
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 font-semibold text-xs sm:text-sm">
              PHC Conference 2026 · 10th anniversary
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-3"
          >
            Nourish to Flourish
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-white/90"
          >
            {conferenceInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-white/80 max-w-3xl mx-auto leading-relaxed px-2"
          >
            In 2026 we celebrated 10 years of helping people nourish to flourish, exploring good metabolic
            health for all the family with sessions from world-renowned speakers on women&apos;s health,
            men&apos;s health, teenage health and children&apos;s health.
          </motion.p>

          {/* Key Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 mx-auto text-white/90" />
              <h3 className="font-heading font-semibold text-xs sm:text-sm">Date</h3>
              <p className="text-xs text-white/80">{conferenceInfo.dates}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 mx-auto text-white/90" />
              <h3 className="font-heading font-semibold text-xs sm:text-sm">Location</h3>
              <p className="text-xs text-white/80">{conferenceInfo.location}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 mx-auto text-white/90" />
              <h3 className="font-heading font-semibold text-xs sm:text-sm">CPD Points</h3>
              <p className="text-xs text-white/80">{conferenceInfo.cpdPoints} Points Available</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center"
          >
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-phc-cyan text-phc-navy-dark font-bold rounded-full hover:bg-phc-cyan-light hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              <Video className="w-4 h-4" aria-hidden="true" />
              Watch past talks
            </a>
            <a
              href="/2026/schedule/"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-colors text-xs sm:text-sm inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              View the 2026 schedule
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 bg-gradient-to-br from-off-white via-phc-light/5 to-phc-light/10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 bg-phc-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-phc-dark mb-6">
              Celebrating 10 Years
            </h2>
            <p className="text-lg text-dark-grey max-w-3xl mx-auto">
              The 2026 conference brought together world-renowned experts, healthcare professionals
              and wellness advocates for two days of learning.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-phc-light/5 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-phc-light/10"
              >
                <div className="font-heading text-4xl font-bold text-warm-amber mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-grey">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="schedule" className="relative py-20 px-4 bg-gradient-to-br from-phc-dark/5 via-white to-phc-light/5 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-phc-dark mb-6">
              2026 event information
            </h2>
            <p className="text-lg text-dark-grey max-w-3xl mx-auto">
              The 2026 schedule, fundraiser dinner and exhibitors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Fundraiser Dinner Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-phc-dark to-phc-light text-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Utensils className="w-8 h-8 text-white/90 mr-3" />
                <h3 className="font-heading text-2xl font-bold">
                  Evening Fundraiser Dinner
                </h3>
              </div>
              <div className="space-y-3">
                <p className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-white/90" />
                  Saturday 16th May 2026
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-white/90" />
                  7:00 PM to 10:00 PM
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-white/90" />
                  The Memoir Club, London
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    Welcome drink, 3-course real food meal and half-bottle of wine per person.
                  </p>
                  <a
                    href="/2026/dinner/"
                    className="mt-3 inline-flex items-center text-white font-semibold hover:underline"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    View full details &rarr;
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Speaker Schedule Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-phc-light to-phc-dark text-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-white/90 mr-3" />
                <h3 className="font-heading text-2xl font-bold">Speaker Schedule</h3>
              </div>
              <div className="space-y-3">
                <p className="text-white/90">
                  Two packed days of keynote presentations, expert panels, and interactive sessions.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <h4 className="font-heading font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start">
                      <span className="text-phc-light mr-2">•</span>
                      Day 1: Men&apos;s Health & Teenage Health
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-light mr-2">•</span>
                      Day 2: Women&apos;s Health & Dietary Guidelines
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-light mr-2">•</span>
                      Expert panels with Q&A
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-light mr-2">•</span>
                      Evening Fundraiser Dinner
                    </li>
                  </ul>
                  <a
                    href="/2026/schedule/"
                    className="mt-5 inline-flex items-center px-6 py-3 bg-white text-phc-dark font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    View Full Schedule →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Exhibitors CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href="/2026/exhibitors/"
              className="inline-block px-8 py-4 bg-phc-cyan text-phc-navy-dark font-bold rounded-full hover:bg-phc-cyan-light hover:shadow-2xl transition-all hover:scale-105 text-base sm:text-lg"
            >
              View the 2026 exhibitors and sponsors →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section with gradient transition */}
      <div id="speakers" className="relative bg-gradient-to-b from-off-white via-white to-phc-light/5">
        <SpeakersSection
          speakers={speakers}
          profileBasePath="/2026/speakers"
          heading="2026 speakers"
          intro="World-renowned experts in metabolic health, nutrition science and lifestyle medicine"
        />
      </div>

      {/* Conference Videos Section */}
      <section id="videos" className="relative pt-8 pb-20 px-4 bg-gradient-to-br from-phc-light/5 via-white to-phc-dark/5 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-phc-light rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-phc-light rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="relative">
          <ConferenceVideoSlider />
        </div>
      </section>

    </div>
  );
}