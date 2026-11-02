import { CONFERENCE_NAME, CONFERENCE_THEME, DAYS, VENUE } from "@/lib/conference";

function toIcsUtc(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** Download a calendar file with both conference days. */
export function downloadConferenceICS() {
  const stamp = toIcsUtc(new Date().toISOString());
  const events = DAYS.map(
    (day, i) => `BEGIN:VEVENT
UID:phc-conference-2027-day${i + 1}@phcukconference.org
DTSTAMP:${stamp}
DTSTART:${toIcsUtc(day.startIso)}
DTEND:${toIcsUtc(day.endIso)}
SUMMARY:${CONFERENCE_NAME}: ${CONFERENCE_THEME} (day ${i + 1})
LOCATION:${VENUE.name}\\, ${VENUE.town}
URL:https://phcukconference.org/
END:VEVENT`
  ).join("\n");

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Preventive Health Collaboration//PHC Conference 2027//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events}
END:VCALENDAR`.replace(/\n/g, "\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "phc-conference-2027.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
