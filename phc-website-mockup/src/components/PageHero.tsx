"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function PageHero({ badge, title, highlight, description }: PageHeroProps) {
  return (
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
            {badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6"
        >
          {title}
          <br />
          <span className="text-phc-cyan">{highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
