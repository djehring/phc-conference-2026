"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, ChevronDown, CalendarPlus, Utensils, Clock, Info, Sparkles, Video } from "lucide-react";
import { conferenceInfo, statistics } from "@/lib/data";
import { generateICS } from "@/lib/generateICS";
import Image from "next/image";
import SpeakersSection from "@/components/SpeakersSection";
import ConferenceVideoSlider from "@/components/conference-video-slider";
import MembershipSection from "@/components/membership-section";
import MobileJumpNav from "@/components/MobileJumpNav";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Preload Open Graph image to ensure it's included in build */}
      <link rel="preload" as="image" href="/images/PHC26-Save-The-Date-v2.png" />
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
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-phc-yellow/10 rounded-lg"
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
              src="/images/PHC_logo_white_text.png" 
              alt="Public Health Collaboration" 
              className="h-10 sm:h-16 md:h-20 mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-2 sm:mb-3"
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-phc-yellow/20 backdrop-blur-sm rounded-full text-phc-yellow font-semibold text-xs sm:text-sm">
              10th Anniversary Conference
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-3"
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
            Celebrating 10 years of helping people nourish to flourish! Join us to explore good metabolic health 
            for all the family with dedicated sessions from world-renowned speakers on women's health, 
            men's health, teenage health, and children's health.
          </motion.p>

          {/* Key Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 mx-auto text-phc-yellow" />
              <h3 className="font-semibold text-xs sm:text-sm">Date</h3>
              <p className="text-xs text-white/80">{conferenceInfo.dates}</p>
              <button
                onClick={generateICS}
                className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-phc-yellow/20 hover:bg-phc-yellow/30 text-phc-yellow rounded transition-colors text-xs font-medium"
                aria-label="Add conference to calendar"
              >
                <CalendarPlus className="w-3 h-3" />
                Add to Calendar
              </button>
            </div>
            <a 
              href="https://maps.google.com/?q=The+Light+Euston+London+NW1+2BJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 block hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 mx-auto text-phc-yellow" />
              <h3 className="font-semibold text-xs sm:text-sm">Location</h3>
              <p className="text-xs text-white/80">{conferenceInfo.location}</p>
              <p className="text-xs text-phc-yellow mt-1">Click for directions →</p>
            </a>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 mx-auto text-phc-yellow" />
              <h3 className="font-semibold text-xs sm:text-sm">CPD Points</h3>
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
              href={conferenceInfo.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-phc-yellow to-yellow-400 text-phc-dark font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 inline-block text-xs sm:text-sm"
            >
              <span className="flex items-center gap-1 sm:gap-2">
                Get Tickets
                <span className="text-xs">from £159</span>
              </span>
            </a>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-colors text-xs sm:text-sm"
            >
              Learn More
            </button>
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
      <section id="about" className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-phc-light/5 to-phc-yellow/10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 bg-phc-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-phc-yellow/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
              Celebrating 10 Years
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for the premier metabolic health conference, bringing together world-renowned experts, 
              healthcare professionals, and wellness advocates for two days of transformative learning.
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
                <div className="text-4xl font-bold text-phc-light mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Bird Pricing Section */}
      <section id="pricing" className="relative py-20 px-4 bg-gradient-to-br from-phc-yellow/10 via-white to-phc-light/10 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
              Ticket Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Secure your spot at the premier metabolic health conference of 2026
            </p>
          </motion.div>

          {/* Livestream Ticket - NEW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="relative bg-gradient-to-r from-phc-dark via-phc-light to-phc-dark text-white rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-40 h-40 bg-phc-yellow rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-phc-light rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-phc-yellow/20 rounded-xl">
                    <Video className="w-8 h-8 text-phc-yellow" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="px-3 py-0.5 bg-phc-yellow text-phc-dark text-xs font-bold rounded-full"
                      >
                        NEW
                      </motion.span>
                      <h3 className="text-xl sm:text-2xl font-bold">Livestream Tickets Now Available!</h3>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base">
                      Can't attend in person? Watch all sessions live from anywhere in the world.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="flex gap-4 sm:gap-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">£69</div>
                      <div className="text-xs text-phc-yellow font-semibold">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">£89</div>
                      <div className="text-xs text-white/80">Non-Members</div>
                    </div>
                  </div>
                  <a
                    href={conferenceInfo.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-phc-yellow text-phc-dark font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 whitespace-nowrap"
                  >
                    Get Livestream Access →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* PHC Members Ticket */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative bg-gradient-to-br from-phc-dark to-phc-light text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">PHC Members</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold">£159</div>
                <div className="text-sm opacity-90">2-day ticket</div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li>✓ 2-day conference access</li>
                <li>✓ 16 CPD points</li>
                <li>✓ All sessions included</li>
                <li>✓ Member exclusive pricing</li>
              </ul>
            </motion.div>

            {/* Non-Members Ticket */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-phc-light/30 transform hover:scale-105 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-phc-dark">Non-Members</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-phc-dark">£209</div>
                <div className="text-sm text-gray-500">2-day ticket</div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li>✓ 2-day conference access</li>
                <li>✓ 16 CPD points</li>
                <li>✓ All sessions included</li>
                <li>✓ Networking opportunities</li>
              </ul>
            </motion.div>

            {/* Membership Add-on */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-phc-yellow to-yellow-400 text-phc-dark rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Add Membership</h3>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold">£75</div>
                <div className="text-sm font-semibold mt-1">Annual Membership</div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li>✓ Instant £50 ticket discount</li>
                <li>✓ Year-round benefits</li>
                <li>✓ Exclusive events access</li>
                <li>✓ Support PHC mission</li>
              </ul>
              <div className="text-xs font-semibold">
                Bundle & Save!
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href={conferenceInfo.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-phc-dark to-phc-light text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-lg"
            >
              Get Your Tickets Now →
            </a>
            <p className="mt-4 text-sm text-gray-600">
              ⚠️ Lunch, teas and coffees not included - available for separate purchase
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event-details" className="relative py-20 px-4 bg-gradient-to-br from-phc-dark/5 via-white to-phc-yellow/5 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
              Event Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important details about the conference schedule and special events
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
                <Utensils className="w-8 h-8 text-phc-yellow mr-3" />
                <h3 className="text-2xl font-bold">Evening Fundraiser Dinner</h3>
              </div>
              <div className="space-y-3">
                <p className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-phc-yellow" />
                  Saturday 16th May 2026
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-phc-yellow" />
                  7:00 PM to 10:00 PM
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-phc-yellow" />
                  The Memoir Club, London
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    Welcome drink, 3-course real food meal and half-bottle of wine per person. Only 100 public tickets available!
                  </p>
                  <a
                    href="/dinner"
                    className="mt-3 inline-flex items-center text-phc-yellow font-semibold hover:underline"
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
                <Clock className="w-8 h-8 text-phc-yellow mr-3" />
                <h3 className="text-2xl font-bold">Speaker Schedule</h3>
              </div>
              <div className="space-y-3">
                <p className="text-white/90">
                  The detailed speaker schedule and session timings will be published in March 2026.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <h4 className="font-semibold mb-2">What to expect:</h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Keynote presentations from world-renowned experts
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Dedicated sessions on women's, men's, teenage, and children's health
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Interactive Q&A sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-phc-yellow mr-2">•</span>
                      Networking opportunities between sessions
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Exhibitor Brochure CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href="https://forms.office.com/e/LTaJrbkxmG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-phc-light to-phc-dark text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 text-base sm:text-lg"
            >
              Request Exhibitor Brochure →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section with gradient transition */}
      <div id="speakers" className="relative bg-gradient-to-b from-phc-yellow/10 via-white to-phc-light/5">
        <SpeakersSection />
      </div>

      {/* Conference Videos Section */}
      <section id="videos" className="relative py-20 px-4 bg-gradient-to-br from-phc-light/5 via-white to-phc-dark/5 overflow-hidden">
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-phc-yellow rounded-full blur-3xl"
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

      {/* Membership Section */}
      <div id="membership">
        <MembershipSection />
      </div>
    </div>
  );
}