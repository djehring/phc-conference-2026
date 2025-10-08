'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Users, 
  Megaphone, 
  Calendar, 
  Zap,
  Sparkles,
  TrendingDown
} from 'lucide-react';

const benefits = [
  {
    icon: Search,
    title: 'Stay Informed',
    description: 'Access the latest science on nutrition and lifestyle medicine through our curated research summaries and expert analysis.'
  },
  {
    icon: BookOpen,
    title: 'Expert Resources',
    description: 'Participate in exclusive webinars, download evidence-based resources, and access our growing library of educational materials.'
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Join a supportive network of clinicians, researchers, and health advocates all working toward a common goal of better health outcomes.'
  },
  {
    icon: Megaphone,
    title: 'Shift the Narrative',
    description: 'Help transform healthcare from reactive sick-care to proactive self-care through education and advocacy.'
  },
  {
    icon: Calendar,
    title: 'Event Privileges',
    description: 'Save £30 on conference tickets! Enjoy early access, special member pricing, and exclusive networking opportunities at all PHC events.',
    highlight: true
  },
  {
    icon: Zap,
    title: 'Drive Change',
    description: 'Be an integral part of a movement that\'s transforming healthcare from the ground up through evidence-based approaches.'
  }
];

export default function MembershipSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-phc-yellow to-yellow-400 text-phc-dark rounded-full text-sm font-bold">
              <Sparkles className="w-4 h-4 mr-2" />
              SAVE £30 ON EARLY BIRD TICKETS WITH MEMBERSHIP
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-phc-dark mb-6">
            Why Join the Public Health Collaboration?
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Become part of a growing community dedicated to transforming healthcare through 
            prevention-focused approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${
                  benefit.highlight 
                    ? 'bg-gradient-to-br from-phc-yellow/10 to-white border-2 border-phc-yellow' 
                    : 'bg-white'
                } rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${
                      benefit.highlight ? 'bg-phc-yellow' : 'bg-phc-dark'
                    } rounded-full flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${
                        benefit.highlight ? 'text-phc-dark' : 'text-white'
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-phc-dark mb-3">
                      {benefit.title}
                      {benefit.highlight && (
                        <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                          HOT
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-gradient-to-r from-phc-yellow/20 to-phc-light/20 rounded-xl border-2 border-phc-yellow">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingDown className="w-5 h-5 text-phc-dark" />
              <p className="text-lg font-bold text-phc-dark">
                Early Bird Special: Join now and save £30 on conference tickets!
              </p>
              <TrendingDown className="w-5 h-5 text-phc-dark" />
            </div>
            <p className="text-sm text-gray-700">
              Annual membership is just £75 - instantly save £30 on your conference ticket
            </p>
          </div>
          <p className="text-xl text-gray-700 mb-8">
            Ready to be part of a healthcare revolution?
          </p>
          <a
            href="https://phcuk.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-phc-dark to-phc-light text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105"
          >
            Become a Member Today
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}