import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND_NAME, LEGAL_LINE } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How the Preventive Health Collaboration conference website uses your information.',
  alternates: { canonical: '/privacy-policy/' },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-phc-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold mb-4">Privacy policy</h1>
          <p className="text-lg">PHC Conference website</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last updated: October 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              {BRAND_NAME} (&quot;we&quot;, &quot;our&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This privacy policy explains how we collect, use, disclose and safeguard your information
              when you visit our conference website.
            </p>
            <p className="mb-4 text-sm text-gray-600">{LEGAL_LINE}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <p className="mb-4">
              When you register for the conference or contact us, we may collect:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Name and contact information</li>
              <li>Professional details (organisation, role)</li>
              <li>Dietary requirements and accessibility needs</li>
              <li>Payment information (processed securely via third-party providers)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8 scroll-mt-4" id="ticket-alerts">
            <h2 className="text-2xl font-semibold mb-4">Ticket alerts</h2>
            <p className="mb-4">
              If you ask us to tell you when tickets go on sale, we collect your first name and email
              address. We use these details only to email you once, when tickets for PHC Conference 2027
              go on sale. We will not add you to any other mailing list or use your details for anything
              else.
            </p>
            <p className="mb-4">
              Your details are held by our website host (Netlify) and our email service provider, and are
              deleted after that email has been sent. Our lawful basis is your consent, which you can
              withdraw at any time by emailing{' '}
              <a href="mailto:info@phcuk.org" className="text-phc-navy underline">info@phcuk.org</a>.
            </p>
          </section>

          <section className="mb-8" id="cookies">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies to enhance your experience on our website. These include:
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Necessary Cookies</h3>
            <p className="mb-4">
              Essential for the website to function properly:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li><strong>cookie-consent-necessary</strong>: Records your consent for necessary cookies</li>
              <li><strong>cookie-consent-set</strong>: Records that you have set your cookie preferences</li>
              <li><strong>cookie-consent-date</strong>: Records when you set your cookie preferences</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
            <p className="mb-4">
              Help us understand how visitors interact with our website:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li><strong>cookie-consent-analytics</strong>: Records your consent for analytics cookies</li>
              <li><strong>Google Analytics</strong>: Tracks website usage and visitor behaviour</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Process conference registrations and payments</li>
              <li>Send important conference updates and information</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Respond to your enquiries and support requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell or rent your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Service providers who assist with conference operations</li>
              <li>Payment processors for secure transaction handling</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="mb-4">Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="mb-4">
              Our conference and website are not intended for children under 16 years of age. 
              We do not knowingly collect personal information from children under 16.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">{BRAND_NAME}</p>
              <p>Email: <a href="mailto:info@phcuk.org" className="text-phc-navy hover:underline">info@phcuk.org</a></p>
              <p>Website: <a href="https://phcuk.org/" className="text-phc-navy hover:underline">phcuk.org</a></p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="text-phc-navy hover:underline">
              ← Back to the conference website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}