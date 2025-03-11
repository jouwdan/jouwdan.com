import { ArrowRight, Github, Linkedin } from "lucide-react";
import {
  AboutData,
  ContactData,
  ExperienceData,
  FooterData,
  HeaderData,
  HeroData,
} from "./types";
import React from "react";

export const headerData: HeaderData = {
  logoText: "Jordan Harrison",
  logoInitials: "JH",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ],
};

export const heroData: HeroData = {
  badgeText: "Follow my work on GitHub",
  titleStart: "Hi, I'm Jordan, an",
  titleHighlight: "Enterprise Digital Experience",
  titleEnd: "specialist",
  description:
    "I build digital experiences and craft elegant solutions to complex problems. I'm passionate about creating enterprise-grade technology that transforms business operations and enhances digital engagement.",
  buttons: [
    {
      href: "/blog",
      label: "Read my Blog",
      variant: "default",
      icon: React.createElement(ArrowRight, {
        className:
          "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1",
      }),
    },
    {
      href: "/#contact",
      label: "Get in Touch",
      variant: "outline",
    },
  ],
};

export const aboutData: AboutData = {
  badgeText: "About Me",
  title: "Meet the developer behind the code",
  titleGradient: "Creative",
  titleAfter: "Problem Solver",
  description:
    "I'm a creative software developer with experience building digital experiences that blend technology, design, and interactivity.",
  backgroundTitle: "My Background",
  backgroundDescription1:
    "With a background in both design and development, I bring a unique perspective to digital projects. I started my journey at a young age as a hobbyist graphics designer & photographer before transitioning to web development.",
  backgroundDescription2:
    "I'm passionate about the intersection of creativity and technology, constantly exploring new ways to push the boundaries of what's possible on the web, and taking a holistic approach to creating digital experiences.",
  technicalSkillsTitle: "Technical Skills",
  skills: [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Fastify / Express",
    "Playwright / Jest / Vitest",
    "Azure / AWS",
    "GraphQL / APIs",
    "Git / CI/CD",
    "Tailwind / Shadcn / Chakra",
  ],
  serviceCards: [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications with React, Next.js and various UI frameworks.",
      iconColor: "bg-primary",
      iconBgColor: "bg-primary/10",
    },
    {
      title: "Backend Development",
      description:
        "Creating robust backend services with Node.js, Fastify, and integrating with various data sources.",
      iconColor: "bg-purple-500",
      iconBgColor: "bg-purple-500/10",
    },
    {
      title: "Community Leadership",
      description:
        "Founder of GDG Portlaoise, speaker at tech conferences, and contributor to open source projects.",
      iconColor: "bg-indigo-500",
      iconBgColor: "bg-indigo-500/10",
    },
  ],
};

export const experienceData: ExperienceData = {
  badgeText: "Experience",
  title: "My Professional",
  highlightText: "Journey",
  description: "My professional and educational journey in software development and tech.",
  jobs: [
    {
      company: "Charles River Labs",
      title: "Software Developer",
      period: "Nov 2023 - Present",
      type: "work",
      description: "Building a decoupled frontend, with a progressive rollout, for the company's Drupal-powered client facing website.",
      techStack: "NodeJS, NextJS, React, Chakra UI, JSON API, Drupal",
      accomplishments: [
        "Building a decoupled frontend with Next.js for the company's Drupal website",
        "Implementing progressive rollout strategies",
        "Working with headless CMS architecture"
      ]
    },
    {
      company: "Charles River Labs",
      title: "Software Developer I",
      period: "Jan 2023 - Nov 2023",
      type: "work",
      description: "Working in a full stack capacity, building an MVP of an internal user management application.",
      techStack: "NodeJS, React, Fastify, Vitest, Playwright, Azure, CosmosDB, Gremlin QL",
      accomplishments: [
        "Built MVP of internal user management application",
        "Migrated build system from Webpack to Vite for improved DevEx",
        "Implemented comprehensive test coverage with Vitest and Playwright"
      ]
    },
    {
      company: "Charles River Labs",
      title: "Associate Software Developer",
      period: "Jul 2022 - Dec 2022",
      type: "work",
      description: "Worked on the frontend of Apollo, a large client-facing application, from MVP stage.",
      techStack: "NodeJS, React, Fastify, Jest, Cypress, Azure",
      accomplishments: [
        "Contributed to MVP development of client-facing application",
        "Implemented new functionality for handling large datasets",
        "Collaborated in an agile development environment"
      ]
    },
    {
      company: "South East Technological University",
      title: "Higher Diploma in Computer Science",
      period: "2021 - 2023",
      type: "education",
      achievement: "First Class Honors"
    },
    {
      company: "Glanbia Cheese EU",
      title: "IT Support Officer",
      period: "Nov 2019 - Jul 2022",
      type: "work",
      description: "Overseen and implemented IT infrastructure & systems during the green field build and commissioning phase of a €135 million food processing facility.",
      accomplishments: [
        "Implemented IT infrastructure for €135M facility",
        "Managed all internal IT systems and infrastructure",
        "Delivered projects on-time and under budget"
      ]
    },
    {
      company: "RPS Group",
      title: "Junior IT Administrator",
      period: "Dec 2017 - Nov 2019",
      type: "work",
      description: "First & second line support role to 2 offices of circa 150 users in a heavily CAD focused environment.",
      accomplishments: [
        "Provided IT support for 150+ users in CAD environment",
        "Successfully rolled out Windows 10 ahead of schedule",
        "Managed first and second line support duties"
      ]
    },
    {
      company: "Athlone Institute of Technology",
      title: "Bachelor of Science in Network Management",
      period: "2014 - 2017",
      type: "education",
      achievement: "Merit Grade 2"
    }
  ]
};

export const contactData: ContactData = {
  badgeText: "Contact",
  title: "Let's",
  highlightText: "Connect",
  description:
    "Interested in collaborating? I'm always open to discussing new projects and opportunities.",
  email: "hello@jouwdan.com",
  emailDescription:
    "Feel free to reach out for collaborations, questions, or just to say hello!",
  socialLinks: [
    {
      href: "https://github.com/jouwdan",
      label: "GitHub",
      icon: React.createElement(Github, {
        className: "h-6 w-6",
      }),
    },
    {
      href: "https://linkedin.com/in/jouwdan",
      label: "LinkedIn",
      icon: React.createElement(Linkedin, {
        className: "h-6 w-6",
      }),
    }
  ],
};

export const footerData: FooterData = {
  name: "Jordan Harrison",
  year: new Date().getFullYear(),
}; 