import { siteConfig } from "../constants.ts";
import { company } from "../content/company.ts";
import type { Job } from "../content/jobs.ts";
import type { OgPage } from "./og-pages.ts";

export function pageMeta(page: OgPage) {
  const url = new URL(page.path, siteConfig.url).href;
  const image = new URL(page.image, siteConfig.url).href;

  return [
    { title: page.title },
    { name: "description", content: page.description },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: page.imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: page.imageAlt },
  ];
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.shortName,
    url: company.domain,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Butwal",
      addressRegion: "Lumbini Province",
      addressCountry: "NP",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: company.domain,
    description: `${company.name} is a software engineering company based in ${company.location}.`,
  };
}

export function jobPostingJsonLd(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary,
    datePosted: job.posted,
    employmentType: job.type === "Full-time" ? "FULL_TIME" : "OTHER",
    hiringOrganization: {
      "@type": "Organization",
      name: company.name,
      sameAs: company.domain,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Butwal",
        addressRegion: "Lumbini Province",
        addressCountry: "NP",
      },
    },
  };
}
