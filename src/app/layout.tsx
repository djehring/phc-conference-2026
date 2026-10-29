import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import TicketBanner from "@/components/TicketBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const SITE_TITLE = "PHC Conference 2027: Prevent the preventable, reverse the reversible";
const SITE_DESCRIPTION =
  "The Preventive Health Collaboration conference on preventing the diseases of modern life. Warwick Hall, Warwick, Saturday 10 and Sunday 11 April 2027. Tickets on sale 11 November 2026.";
const OG_IMAGE = {
  url: "/images/og-conference-2027.png",
  width: 1200,
  height: 630,
  alt: "PHC Conference 2027: Prevent the preventable, reverse the reversible. Warwick Hall, Warwick, 10 and 11 April 2027. Preventive Health Collaboration.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://phcukconference.org"),
  title: {
    default: SITE_TITLE,
    template: "%s | Preventive Health Collaboration",
  },
  description: SITE_DESCRIPTION,
  keywords:
    "PHC, Preventive Health Collaboration, prevention, conference, Warwick, 2027, metabolic health, heart and stroke, brain health, cancer",
  applicationName: "PHC Conference",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "https://phcukconference.org",
    images: [OG_IMAGE],
    siteName: "PHC Conference · Preventive Health Collaboration",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
    creator: "@PHCukorg",
    site: "@PHCukorg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7XSQ542D02"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Check for analytics consent
            const hasAnalyticsConsent = 
              document.cookie.split(';').some(c => {
                return c.trim().startsWith('cookie-consent-analytics=accepted');
              });
            
            // Only activate GA if user has consented
            window['ga-disable-G-7XSQ542D02'] = !hasAnalyticsConsent;
            
            gtag('config', 'G-7XSQ542D02', {
              send_page_view: hasAnalyticsConsent,
              anonymize_ip: true
            });
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-phc-navy"
        >
          Skip to content
        </a>
        <TicketBanner />
        <AnnouncementBanner />
        <SiteHeader />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
