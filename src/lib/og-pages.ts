import { siteConfig } from "../constants.ts";

export type OgPageId =
  | "home"
  | "services"
  | "work"
  | "about"
  | "careers"
  | "blog"
  | "contact"
  | "privacy"
  | "terms";

export interface OgPage {
  id: OgPageId | string;
  path: string;
  title: string;
  description: string;
  eyebrow?: string;
  heading: string;
  imageAlt: string;
  image: string;
}

function pageTitle(name: string) {
  return `${name} | ${siteConfig.name}`;
}

export const ogPages: Record<OgPageId, OgPage> = {
  home: {
    id: "home",
    path: "/",
    title: `${siteConfig.name} — Software Engineering`,
    description: `Engineering digital products, cloud platforms, and custom software systems from ${siteConfig.location}.`,
    eyebrow: "Software Engineering",
    heading: "NewLine Technosoft",
    imageAlt: `${siteConfig.name} — Software engineering based in ${siteConfig.location}`,
    image: "og/home.webp",
  },
  services: {
    id: "services",
    path: "/services",
    title: pageTitle("Services"),
    description:
      "Web platforms, mobile applications, distributed systems, and technical consulting.",
    eyebrow: "Capabilities",
    heading: "Our Services",
    imageAlt: `Engineering capabilities at ${siteConfig.name}`,
    image: "og/services.webp",
  },
  work: {
    id: "work",
    path: "/work",
    title: pageTitle("Selected Work"),
    description: "Case studies in software architecture, reliability, and delivered systems.",
    eyebrow: "Case Studies",
    heading: "Selected Work",
    imageAlt: `Selected work from ${siteConfig.name}`,
    image: "og/work.webp",
  },
  about: {
    id: "about",
    path: "/about",
    title: pageTitle("About"),
    description: `Our story, engineering principles, and team in ${siteConfig.location}.`,
    eyebrow: "Company",
    heading: "About NewLine",
    imageAlt: `About ${siteConfig.name}`,
    image: "og/about.webp",
  },
  careers: {
    id: "careers",
    path: "/careers",
    title: pageTitle("Careers"),
    description: "Join our engineering team in Butwal. High standards, sane hours, real craft.",
    eyebrow: "Careers",
    heading: "Work With Us",
    imageAlt: `Careers at ${siteConfig.name}`,
    image: "og/careers.webp",
  },
  blog: {
    id: "blog",
    path: "/blog",
    title: pageTitle("Engineering Blog"),
    description: "Technical notes, systems architecture, and engineering principles from our team.",
    eyebrow: "Engineering Notes",
    heading: "Technical Blog",
    imageAlt: `${siteConfig.name} Engineering Blog`,
    image: "og/blog.webp",
  },
  contact: {
    id: "contact",
    path: "/contact",
    title: pageTitle("Contact"),
    description: `Start a project with ${siteConfig.name} or reach our Butwal office.`,
    eyebrow: "Get In Touch",
    heading: "Contact NewLine",
    imageAlt: `Contact ${siteConfig.name}`,
    image: "og/contact.webp",
  },
  privacy: {
    id: "privacy",
    path: "/privacy",
    title: pageTitle("Privacy Policy"),
    description: "Our plain-language data privacy commitments.",
    eyebrow: "Legal",
    heading: "Privacy Policy",
    imageAlt: `${siteConfig.name} Privacy Policy`,
    image: "og/privacy.webp",
  },
  terms: {
    id: "terms",
    path: "/terms",
    title: pageTitle("Terms of Service"),
    description: "Terms governing our software engineering and services.",
    eyebrow: "Legal",
    heading: "Terms of Service",
    imageAlt: `${siteConfig.name} Terms of Service`,
    image: "og/terms.webp",
  },
};
