'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    const hasSetPreferences = getCookie('cookie-consent-set');
    if (!hasSetPreferences) {
      setTimeout(() => setShowCookieBanner(true), 1000);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);
    const cookieValue = encodeURIComponent(value) + 
      "; expires=" + expiryDate.toUTCString() + 
      "; path=/; SameSite=Lax";
    document.cookie = name + "=" + cookieValue;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  };

  const acceptAllCookies = () => {
    setCookie('cookie-consent', 'accepted', 180);
    setCookie('cookie-consent-necessary', 'accepted', 180);
    setCookie('cookie-consent-analytics', 'accepted', 180);
    setCookie('cookie-consent-set', 'true', 180);
    setCookie('cookie-consent-date', new Date().toISOString(), 180);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any)['ga-disable-G-7XSQ542D02'] = false;
      (window as any).gtag('config', 'G-7XSQ542D02', { send_page_view: true });
    }
    
    setShowCookieBanner(false);
    setShowCookieSettings(false);
  };

  const rejectAnalyticsCookies = () => {
    setCookie('cookie-consent', 'rejected', 180);
    setCookie('cookie-consent-necessary', 'accepted', 180);
    setCookie('cookie-consent-analytics', 'rejected', 180);
    setCookie('cookie-consent-set', 'true', 180);
    setCookie('cookie-consent-date', new Date().toISOString(), 180);
    
    if (typeof window !== 'undefined') {
      (window as any)['ga-disable-G-7XSQ542D02'] = true;
    }
    
    setShowCookieBanner(false);
    setShowCookieSettings(false);
  };

  return (
    <>
      <footer className="bg-phc-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Link href="https://phcuk.org/" target="_blank" rel="noopener">
                <Image 
                  src="/images/PHC_logo_white_text.png" 
                  alt="Public Health Collaboration" 
                  width={180} 
                  height={80}
                  className="mb-4 h-auto"
                />
              </Link>
              <p className="text-sm text-gray-300">
                Prevention starts with knowledge.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#about" className="hover:text-phc-light transition-colors">About</Link></li>
                <li><Link href="/#speakers" className="hover:text-phc-light transition-colors">Speakers</Link></li>
                <li><Link href="/schedule/" className="hover:text-phc-light transition-colors">Schedule</Link></li>
                <li><Link href="/#venue" className="hover:text-phc-light transition-colors">Venue</Link></li>
                <li><Link href="/dinner" className="hover:text-phc-light transition-colors">Dinner</Link></li>
                <li><Link href="/exhibitors" className="hover:text-phc-light transition-colors">Exhibitors</Link></li>
                <li><Link href="/#tickets" className="hover:text-phc-light transition-colors">Tickets</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="https://phcuk.org/" target="_blank" className="hover:text-phc-light transition-colors">PHC Website</Link></li>
                <li><Link href="https://phcuk.org/membership/" target="_blank" className="hover:text-phc-light transition-colors">Become a Member</Link></li>
                <li>
                  <a 
                    href="https://forms.office.com/e/LTaJrbkxmG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-phc-light transition-colors"
                  >
                    Request Exhibitor Brochure
                  </a>
                </li>
                <li><Link href="/privacy-policy" className="hover:text-phc-light transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-phc-light transition-colors">Terms & Conditions</Link></li>
                <li>
                  <button 
                    onClick={() => setShowCookieSettings(true)}
                    className="hover:text-phc-light transition-colors text-left"
                  >
                    Cookie Settings
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-3 mb-4">
                <a 
                  href="https://x.com/PHCukorg" 
                  target="_blank" 
                  rel="noopener"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/PHCukorg" 
                  target="_blank" 
                  rel="noopener"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/PHCukorg/" 
                  target="_blank" 
                  rel="noopener"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@PHCukorg" 
                  target="_blank" 
                  rel="noopener"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/public-health-collaboration" 
                  target="_blank" 
                  rel="noopener"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-300">
                Email: <a href="mailto:info@phcuk.org" className="hover:text-phc-light transition-colors">info@phcuk.org</a>
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-300">
              © 2025 Public Health Collaboration. Prevention starts with knowledge.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Cookie Preferences</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to improve your experience and analyze site traffic.{' '}
                  <Link href="/privacy-policy#cookies" className="text-phc-dark hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setShowCookieSettings(true)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={rejectAnalyticsCookies}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="px-4 py-2 text-sm bg-phc-dark text-white rounded-lg hover:bg-phc-dark/90 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showCookieSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-2">Manage Cookie Preferences</h3>
            <p className="text-sm text-gray-600 mb-4">
              Last updated: {getCookie('cookie-consent-date') || 'Not set'}
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <span className="text-sm text-gray-500">Always Active</span>
                </div>
                <p className="text-sm text-gray-600">
                  Essential for the website to function properly. Cannot be disabled.
                </p>
              </div>
              
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      defaultChecked={getCookie('cookie-consent-analytics') === 'accepted'}
                      id="analytics-toggle"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-phc-dark"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowCookieSettings(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const analyticsEnabled = (document.getElementById('analytics-toggle') as HTMLInputElement)?.checked;
                  if (analyticsEnabled) {
                    acceptAllCookies();
                  } else {
                    rejectAnalyticsCookies();
                  }
                }}
                className="px-4 py-2 text-sm bg-phc-dark text-white rounded-lg hover:bg-phc-dark/90 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}