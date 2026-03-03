import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "About PHC": [
    { label: "Our Mission", href: "/about" },
    { label: "Team & Trustees", href: "/about#team" },
    { label: "Governance", href: "#" },
    { label: "Annual Reports", href: "#" },
  ],
  "Our Work": [
    { label: "Advocacy & Policy", href: "#" },
    { label: "Education", href: "#" },
    { label: "Real Food Rebellion", href: "#" },
    { label: "Elevate App", href: "https://elevate-me.life/" },
    { label: "Annual Conference", href: "#" },
  ],
  "Get Involved": [
    { label: "Become a Member", href: "#" },
    { label: "Volunteer", href: "#" },
    { label: "Donate", href: "#" },
    { label: "Events", href: "#" },
    { label: "Partnerships", href: "#" },
  ],
  Resources: [
    { label: "Evidence Library", href: "#" },
    { label: "Real Food Booklets", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "News & Blog", href: "#" },
    { label: "Press Enquiries", href: "#" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-phc-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/PHC_logo.png"
                alt="Public Health Collaboration"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The Public Health Collaboration is a UK registered charity
              dedicated to improving metabolic health through evidence-based
              education.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@phcuk.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-phc-cyan text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Public Health Collaboration.
            Registered Charity No. 1170205
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
