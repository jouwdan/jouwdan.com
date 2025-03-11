export interface NavLink {
  href: string;
  label: string;
}

export interface ButtonLink {
  href: string;
  label: string;
  variant: "default" | "outline";
  icon?: React.ReactNode;
}

export interface Job {
  company: string;
  title: string;
  period: string;
  type?: "education" | "work";
  description?: string;
  techStack?: string;
  accomplishments?: string[];
  achievement?: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export interface HeroData {
  badgeText: string;
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  buttons: ButtonLink[];
}

export interface AboutData {
  badgeText: string;
  title: string;
  titleGradient: string;
  titleAfter: string;
  description: string;
  backgroundTitle: string;
  backgroundDescription1: string;
  backgroundDescription2: string;
  technicalSkillsTitle: string;
  skills: string[];
  serviceCards: {
    title: string;
    description: string;
    iconColor: string;
    iconBgColor: string;
  }[];
}

export interface ExperienceData {
  badgeText: string;
  title: string;
  highlightText: string;
  description: string;
  jobs: Job[];
}

export interface ContactData {
  badgeText: string;
  title: string;
  highlightText: string;
  description: string;
  email: string;
  emailDescription: string;
  socialLinks: SocialLink[];
}

export interface FooterData {
  name: string;
  year: number;
}

export interface HeaderData {
  logoText: string;
  logoInitials: string;
  navLinks: NavLink[];
} 