import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and conditions',
  description: 'Terms and conditions for PHC Conference registration.',
  alternates: { canonical: '/terms/' },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-phc-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg">PHC Conference 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>
          <p className="mb-6 rounded bg-phc-cyan/15 p-4 text-phc-navy">
            These terms applied to PHC Conference 2026. Terms for PHC Conference 2027 will be published
            here when tickets go on sale.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Conference Registration</h2>
            <p className="mb-4">
              By registering for the PHC Conference 2026, you agree to these terms and conditions. 
              Registration is subject to availability and confirmation by Public Health Collaboration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Full payment is required at the time of registration</li>
              <li>Early bird discounts are available until March 31, 2026</li>
              <li>PHC members receive a £50 discount on conference tickets</li>
              <li>All prices are in GBP and include VAT where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
            <h3 className="text-lg font-semibold mb-2">Attendee Cancellations</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Before March 31, 2026: Full refund minus £25 admin fee</li>
              <li>April 1-30, 2026: 50% refund</li>
              <li>After April 30, 2026: No refund available</li>
              <li>Substitutions are permitted at no extra charge</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Event Cancellation</h3>
            <p className="mb-4">
              In the unlikely event that we need to cancel the conference, full refunds will be issued. 
              We are not responsible for travel or accommodation costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. CPD Accreditation</h2>
            <p className="mb-4">
              The conference offers 16 CPD points. Certificates will be provided to all attendees 
              who complete the full two-day program. Partial attendance certificates are available 
              upon request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Photography and Recording</h2>
            <p className="mb-4">
              By attending the conference, you consent to being photographed or recorded for 
              promotional purposes. If you prefer not to be photographed, please inform us at 
              registration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Code of Conduct</h2>
            <p className="mb-4">
              All attendees are expected to behave professionally and respectfully. We reserve 
              the right to refuse admission or remove anyone who violates our code of conduct, 
              without refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Dietary Requirements</h2>
            <p className="mb-4">
              We will make reasonable efforts to accommodate dietary requirements notified to us 
              at least 14 days before the event. Late requests cannot be guaranteed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Accessibility</h2>
            <p className="mb-4">
              The Light at Friends House is fully accessible. Please contact us if you have 
              specific accessibility requirements so we can ensure your comfort during the event.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="mb-4">
              All conference materials, presentations, and content remain the intellectual property 
              of their respective owners. Recording of sessions is prohibited without prior permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Liability</h2>
            <p className="mb-4">
              Public Health Collaboration accepts no responsibility for loss or damage to personal 
              property, or for personal injury sustained during the conference, except where caused 
              by our negligence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Data Protection</h2>
            <p className="mb-4">
              Your personal data will be processed in accordance with our{' '}
              <Link href="/privacy-policy" className="text-phc-dark hover:underline">
                Privacy Policy
              </Link>
              . We will use your information solely for conference administration and PHC communications 
              unless you opt-in to additional communications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Registered attendees will be 
              notified of any significant changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of England and Wales. Any disputes will be 
              subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Public Health Collaboration</p>
              <p>Email: <a href="mailto:info@phcuk.org" className="text-phc-dark hover:underline">info@phcuk.org</a></p>
              <p>Website: <a href="https://phcuk.org/" className="text-phc-dark hover:underline">phcuk.org</a></p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="text-phc-dark hover:underline">
              ← Back to Conference Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}