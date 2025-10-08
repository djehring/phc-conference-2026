"use client";

import { useState, useEffect } from "react";
import { Clock, Sparkles, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

interface CountdownProps {
  endDate: string;
  label: string;
  highlight?: boolean;
}

export default function EarlyBirdCountdown({ endDate, label, highlight = false }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (isExpired) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        highlight 
          ? "bg-gradient-to-r from-phc-yellow via-yellow-400 to-phc-yellow shadow-xl" 
          : "bg-white/10 backdrop-blur-sm"
      } rounded-xl p-3 sm:p-4 border ${
        highlight ? "border-yellow-500/30" : "border-white/20"
      }`}
    >
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-1 sm:gap-2">
          {highlight ? (
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-phc-dark animate-pulse" />
          ) : (
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-phc-yellow" />
          )}
          <h3 className={`font-bold text-sm sm:text-base ${
            highlight ? "text-phc-dark" : "text-white"
          }`}>
            {label}
          </h3>
          {highlight && (
            <span className="px-1.5 py-0.5 sm:px-2 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse hidden sm:inline-block">
              LIMITED TIME
            </span>
          )}
        </div>
        {highlight && (
          <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-phc-dark" />
        )}
      </div>
      
      <div className="grid grid-cols-4 gap-1 sm:gap-2">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className={`text-lg sm:text-xl font-bold ${
              highlight ? "text-phc-dark" : "text-white"
            }`}>
              {value.toString().padStart(2, '0')}
            </div>
            <div className={`text-xs uppercase ${
              highlight ? "text-phc-dark/70" : "text-white/60"
            }`}>
              {unit}
            </div>
          </div>
        ))}
      </div>

      {highlight && (
        <motion.div 
          className="mt-3 pt-3 border-t border-phc-dark/20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm font-semibold text-phc-dark text-center">
            Save up to £30 on tickets!
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}