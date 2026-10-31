import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND_NAME, CONTACT_EMAIL, LEGAL_LINE, MAIN_SITE_URL } from '@/lib/brand';
import { CONFERENCE_NAME, DATES_LABEL, EARLY_BIRD_UNTIL, VENUE } from '@/lib/conference';

export const metadata: Metadata = {
  title: 'Terms and conditions',
  description: `Terms and conditions for ${CONFERENCE_NAME} tickets.`,
  alternates: { canonical: '/terms/' },
};

// Updated for 2027 from Steve's price table (30 Oct 2026). The refund dates keep the
// 2026 pattern moved to the April 2027 dates and need confirming by Steve and Giles.
export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-phc-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg">{CONFERENCE_NAME}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last updated: 31 October 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Conference Registration</h2>
            <p className="mb-4">
              {CONFERENCE_NAME} takes place at {VENUE.name}, {VENUE.town}, on {DATES_LABEL}. By
              booking a ticket you agree to these terms and conditions. Bookings are subject to
              availability and confirmation by {BRAND_NAME}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Tickets and Payment</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Tickets are available in person or online, for both days or for one day</li>
              <li>Full payment is required at the time of booking</li>
              <li>Early bird prices are available until {EARLY_BIRD_UNTIL}</li>
              <li>
                Members, Ambassadors, Associates and course participants receive 20% off every
                ticket, up to a maximum of £15 per ticket
              </li>
              <li>The conference dinner on Saturday evening is booked and paid for separately</li>
              <li>All prices are in GBP and include VAT where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
            <h3 className="text-lg font-semibold mb-2">Attendee Cancellations</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Up to 28 February 2027: full refund minus a £25 admin fee</li>
              <li>1 to 26 March 2027: 50% refund</li>
              <li>From 27 March 2027: no refund available</li>
              <li>Substitutions are permitted at no extra charge</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Event Cancellation</h3>
            <p className="mb-4">
              In the unlikely event that we need to cancel the conference, full refunds will be issued.
              We are not responsible for travel or accommodation costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Online Tickets and Recordings</h2>
            <p className="mb-4">
              Online tickets give access to the live stream of the days you have booked. Every
              ticket, in person or online, includes 30 days of access to the session recordings.
              Recordings are for your personal use and must not be shared or republished.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. CPD</h2>
            <p className="mb-4">
              Certificates of attendance are available for continuing professional development.
              Please ask us at registration if you need one.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Photography and Recording</h2>
            <p className="mb-4">
              By attending the conference, you consent to being photographed or recorded for
              promotional purposes. If you prefer not to be photographed, please inform us at
              registration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Code of Conduct</h2>
            <p className="mb-4">
              All attendees are expected to behave professionally and respectfully. We reserve
              the right to refuse admission or remove anyone who violates our code of conduct,
              without refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Dietary Requirements</h2>
            <p className="mb-4">
              We will make reasonable efforts to accommodate dietary requirements notified to us
              at least 14 days before the event. Late requests cannot be guaranteed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Accessibility</h2>
            <p className="mb-4">
              Please contact us if you have specific accessibility requirements so we can make
              arrangements with {VENUE.name} before the event.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Intellectual Property</h2>
            <p className="mb-4">
              All conference materials, presentations, and content remain the intellectual property
              of their respective owners. Recording of sessions is prohibited without prior permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Liability</h2>
            <p className="mb-4">
              {BRAND_NAME} accepts no responsibility for loss or damage to personal property, or for
              personal injury sustained during the conference, except where caused by our negligence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Data Protection</h2>
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
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Registered attendees will be
              notified of any significant changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of England and Wales. Any disputes will be
              subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">{BRAND_NAME}</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-phc-dark hover:underline">{CONTACT_EMAIL}</a></p>
              <p>Website: <a href={MAIN_SITE_URL} className="text-phc-dark hover:underline">phcuk.org</a></p>
              <p className="mt-2 text-sm text-gray-600">{LEGAL_LINE}</p>
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
