export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  size: 'small' | 'medium' | 'large';
}

export interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  status: 'upcoming' | 'past';
  location?: string;
  time?: string;
  fullDescription?: string;
  googleCalendarUrl?: string;
  registrationLink?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  size: 'small' | 'medium' | 'large';
  imagePosition?: string;
}