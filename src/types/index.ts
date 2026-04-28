export interface Speaker {
  id: number;
  name: string;
  slug: string;
  title: string;
  description: string;
  initials: string;
  photo?: string;
  bio?: string;
  links?: Record<string, string>;
}

export type SessionType = 'talk' | 'panel' | 'break' | 'registration' | 'lunch' | 'opening' | 'closing' | 'dinner';

export interface ScheduleSession {
  id: string;
  time: string;
  title: string;
  type: SessionType;
  speakerSlugs?: string[];
  chairSlug?: string;
  panelistSlugs?: string[];
  description?: string;
}

export interface ScheduleDay {
  date: string;
  theme: string;
  sessions: ScheduleSession[];
}

export interface ConferenceInfo {
  name: string;
  theme: string;
  tagline: string;
  dates: string;
  time: string;
  location: string;
  cpdPoints: number;
  ticketUrl: string;
  galaDinner: {
    date: string;
    time: string;
    details: string;
  };
}

export interface Statistic {
  number: string;
  label: string;
  icon: string;
}

export interface FocusArea {
  title: string;
  icon: string;
  description: string;
}