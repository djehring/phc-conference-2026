"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

export default function MobileJumpNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("top");

  const sections: Section[] = [
    { id: "top", label: "Top" },
    { id: "about", label: "About" },
    { id: "schedule", label: "Schedule" },
    { id: "speakers", label: "Speakers" },
    { id: "videos", label: "Videos" },
    { id: "membership", label: "Membership" },
    { id: "tickets", label: "Get Tickets" },
  ];

  useEffect(() => {
    const checkVisibility = () => {
      // Only show on phones (< 640px)
      const isPhone = window.innerWidth < 640;
      const scrolled = window.scrollY > 100;
      setIsVisible(isPhone && scrolled);
    };

    const handleScroll = () => {
      checkVisibility();
      
      // Update current section based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.id === "top") {
          if (window.scrollY < 100) {
            setCurrentSection("top");
            break;
          }
          continue;
        }
        
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(section.id);
          break;
        }
      }
    };

    checkVisibility();
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkVisibility);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  const jumpToSection = (sectionId: string, e?: React.MouseEvent) => {
    // Prevent any default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionId === "schedule") {
      window.location.href = "/schedule/";
    } else if (sectionId === "tickets") {
      // Special handling for tickets - open in new tab
      const ticketUrl = "https://phc26.eventify.io/t2/tickets";
      window.open(ticketUrl, "_blank", "noopener,noreferrer");
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 60; // Account for sticky nav height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsOpen(false);
  };

  if (!isVisible) return null;

  const currentSectionLabel = sections.find(s => s.id === currentSection)?.label || "Navigate";

  return (
    <div className="fixed top-4 left-4 right-4 z-50 sm:hidden">
      <div className="relative">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
          aria-label="Jump to section"
          aria-expanded={isOpen}
        >
          <span className="text-sm font-medium text-gray-700">
            Jump to: <span className="text-phc-dark">{currentSectionLabel}</span>
          </span>
          <ChevronDown 
            className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
              {sections.map((section) => {
                // Use anchor tag for tickets, button for others
                if (section.id === "tickets") {
                  return (
                    <a
                      key={section.id}
                      href="https://phc26.eventify.io/t2/tickets"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        // Use location.href for mobile compatibility
                        window.location.href = "https://phc26.eventify.io/t2/tickets";
                      }}
                      className={`w-full px-4 py-3 text-left text-sm hover:bg-phc-light/10 transition-colors flex items-center justify-between block ${
                        currentSection === section.id ? "bg-phc-light/5 text-phc-dark font-semibold" : "text-gray-700"
                      }`}
                    >
                      {section.label}
                      <span className="text-xs text-phc-light">External →</span>
                    </a>
                  );
                }
                
                return (
                  <button
                    key={section.id}
                    onClick={(e) => jumpToSection(section.id, e)}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-phc-light/10 transition-colors flex items-center justify-between ${
                      currentSection === section.id ? "bg-phc-light/5 text-phc-dark font-semibold" : "text-gray-700"
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}