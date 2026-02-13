"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Utensils, Wine, ExternalLink, Ticket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { conferenceInfo } from "@/lib/data";

export default function DinnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-phc-dark to-phc-light overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/room.jpg"
            alt="The Memoir Club dining room"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-phc-dark/80 to-phc-light/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Utensils className="w-10 h-10 text-phc-yellow mr-3" />
              <span className="text-phc-yellow font-semibold text-lg uppercase tracking-wider">
                Evening Event
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              PHC Annual Conference 2026
              <br />
              <span className="text-phc-yellow">Evening Fundraiser Dinner</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join us for an unforgettable evening of fine dining, networking, and fundraising
              to support the Public Health Collaboration&apos;s mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={conferenceInfo.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-phc-yellow to-yellow-400 text-phc-dark font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                <Ticket className="w-5 h-5 mr-2" />
                Get Dinner Tickets
              </a>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-colors"
              >
                Back to Conference
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-phc-light/5 to-phc-yellow/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-phc-dark mb-4">
              Event Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              An exclusive evening of real food, great company, and a shared commitment to better health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Calendar,
                title: "Date",
                detail: "Saturday 16th May 2026",
              },
              {
                icon: Clock,
                title: "Time",
                detail: "7:00 PM to 10:00 PM",
              },
              {
                icon: MapPin,
                title: "Venue",
                detail: "The Memoir Club, London",
              },
              {
                icon: Users,
                title: "Availability",
                detail: "Only 100 public tickets!",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-phc-dark to-phc-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-phc-dark mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-phc-dark to-phc-light text-white rounded-2xl p-8 md:p-12 shadow-xl mb-16"
          >
            <div className="flex items-center mb-6">
              <Wine className="w-8 h-8 text-phc-yellow mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold">What&apos;s Included</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Welcome Drink",
                  description: "Start the evening with a complimentary welcome drink",
                },
                {
                  title: "3-Course Real Food Meal",
                  description: "A carefully crafted three-course dinner featuring real, wholesome food",
                },
                {
                  title: "Half-Bottle of Wine",
                  description: "Enjoy a half-bottle of wine per person throughout the evening",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <h4 className="font-bold text-phc-yellow mb-2">{item.title}</h4>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-phc-dark mb-4">
              The Venue
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              An elegant setting in the heart of London for a memorable evening.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-4">
                <Image
                  src="/images/tmc.jpg"
                  alt="The Memoir Club exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/room.jpg"
                  alt="The Memoir Club dining room"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-phc-dark mb-4">The Memoir Club</h3>
              <p className="text-gray-600 mb-6">
                Located in the heart of Bloomsbury, The Memoir Club offers a sophisticated and
                stylish setting perfect for our fundraiser dinner. With its elegant interiors and
                exceptional service, it provides the ideal backdrop for an evening of fine dining
                and meaningful connections.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-phc-light mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-phc-dark">Address</p>
                    <p className="text-gray-600">12 Upper Woburn Place, London, WC1H 0HX</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.memoirclublondon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-white border-2 border-phc-dark text-phc-dark font-semibold rounded-full hover:bg-phc-dark hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </a>
                <a
                  href="https://maps.app.goo.gl/LhdqZGuFNoaM2d4v6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-white border-2 border-phc-light text-phc-light font-semibold rounded-full hover:bg-phc-light hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-phc-dark to-phc-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure Your Place
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              With only 100 public tickets available, don&apos;t miss this exclusive evening.
              Book your dinner ticket today!
            </p>
            <a
              href={conferenceInfo.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-phc-yellow to-yellow-400 text-phc-dark font-bold rounded-full hover:scale-105 transition-transform shadow-lg text-lg"
            >
              <Ticket className="w-6 h-6 mr-2" />
              Get Your Dinner Tickets
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
