"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useTicketsOnSale } from "@/hooks/useTicketsOnSale";

const FORM_NAME = "ticket-alerts";

/**
 * "Tell me when tickets go on sale" sign-up, handled by Netlify Forms.
 *
 * The form is in the exported HTML (and mirrored in public/__forms.html) so
 * Netlify detects it at deploy time. Submissions are posted to the static
 * /__forms.html file, which Netlify's form handler intercepts.
 *
 * Once tickets are on sale the form is no longer needed and is hidden.
 */
export default function TicketAlertForm() {
  const onSale = useTicketsOnSale();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(
        Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)])
      ).toString();
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (onSale) return null;

  if (status === "done") {
    return (
      <div
        className="rounded-2xl bg-white p-6 sm:p-8 text-center shadow-lg"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-success-green" aria-hidden="true" />
        <h3 className="font-heading text-xl font-bold text-phc-navy">Thank you</h3>
        <p className="mt-2 text-dark-grey">
          We will email you once, on 11 November, when tickets go on sale.
        </p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg text-left"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ta-first-name" className="block text-sm font-semibold text-phc-navy">
            First name
          </label>
          <input
            id="ta-first-name"
            name="first-name"
            type="text"
            required
            autoComplete="given-name"
            className="mt-1 w-full rounded-lg border border-warm-grey/50 px-3 py-2.5 text-dark-grey focus:border-phc-navy focus:outline-none focus:ring-2 focus:ring-phc-cyan"
          />
        </div>
        <div>
          <label htmlFor="ta-email" className="block text-sm font-semibold text-phc-navy">
            Email address
          </label>
          <input
            id="ta-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-warm-grey/50 px-3 py-2.5 text-dark-grey focus:border-phc-navy focus:outline-none focus:ring-2 focus:ring-phc-cyan"
          />
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <input
          id="ta-consent"
          name="consent"
          type="checkbox"
          value="yes"
          required
          className="mt-1 h-5 w-5 shrink-0 accent-phc-navy"
        />
        <label htmlFor="ta-consent" className="text-sm text-dark-grey">
          Email me once when tickets go on sale. We will use these details for nothing else.
          See our{" "}
          <Link href="/privacy-policy/#ticket-alerts" className="font-semibold text-phc-navy underline">
            privacy policy
          </Link>
          .
        </label>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm font-semibold text-red-700" role="alert">
          Sorry, that did not go through. Please try again, or email info@phcuk.org.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-phc-navy px-6 py-3 font-heading font-bold text-white transition-colors hover:bg-phc-navy-dark disabled:opacity-60 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-phc-cyan"
      >
        {status === "sending" ? "Sending…" : "Tell me when tickets go on sale"}
      </button>
    </form>
  );
}
