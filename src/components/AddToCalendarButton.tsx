"use client";

import { CalendarPlus } from "lucide-react";
import { downloadConferenceICS } from "@/lib/ics";

export default function AddToCalendarButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={downloadConferenceICS}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phc-cyan rounded ${className}`}
    >
      <CalendarPlus className="h-4 w-4" aria-hidden="true" />
      Add to calendar
    </button>
  );
}
