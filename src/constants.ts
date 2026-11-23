import { company } from "./content/company";

export const siteConfig = {
  name: company.name,
  shortName: company.shortName,
  url: company.domain,
  description: `${company.name} is a software engineering company based in ${company.location}.`,
  location: company.location,
};

export const NAV_ITEMS = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
] as const;
