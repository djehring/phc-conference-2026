"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Evidence", href: "/evidence" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News", href: "/news" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/PHC_logo.png"
              alt="Public Health Collaboration"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium text-sm transition-colors relative group ${
                    isActive
                      ? "text-phc-navy font-semibold"
                      : "text-dark-grey hover:text-phc-navy"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-phc-cyan transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button className="p-2 text-warm-grey hover:text-phc-navy transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-phc-navy hover:bg-phc-navy-light text-white font-semibold text-sm rounded-full transition-colors"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-dark-grey"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block font-medium text-lg ${
                      isActive
                        ? "text-phc-navy font-semibold"
                        : "text-dark-grey hover:text-phc-navy"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-phc-navy text-white font-semibold rounded-full w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Heart className="w-4 h-4" />
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
