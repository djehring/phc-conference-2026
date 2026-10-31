import { speakers } from "./data";
import { scheduleData } from "./schedule-data";
import type { ScheduleDay, ScheduleSession } from "@/types";

export function getSpeakerBySlug(slug: string) {
  return speakers.find((s) => s.slug === slug);
}

export function getSessionsForSpeaker(
  slug: string
): { day: ScheduleDay; session: ScheduleSession; role: string }[] {
  const results: { day: ScheduleDay; session: ScheduleSession; role: string }[] = [];

  for (const day of scheduleData) {
    for (const session of day.sessions) {
      if (session.speakerSlugs?.includes(slug)) {
        results.push({ day, session, role: "Speaker" });
      } else if (session.chairSlug === slug) {
        results.push({ day, session, role: "Chair" });
      } else if (session.panelistSlugs?.includes(slug)) {
        results.push({ day, session, role: "Panelist" });
      }
    }
  }

  return results;
}
