export interface Project {
  slug: string;
  title: string;
  client: string;
  period: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "lumbini-logistics-platform",
    title: "Fleet & Freight Dispatch Platform",
    client: "Regional Freight Operator",
    period: "2025",
    summary:
      "A distributed freight tracking and route management system built for regional supply chains operating across western Nepal.",
    problem:
      "Drivers and dispatchers relied on manual phone calls and paper manifests. Unreliable network connectivity in transit led to lost shipment statuses and billing delays.",
    approach:
      "Engineered an offline-first mobile dispatcher with local SQLite caching that syncs to a centralized PostgreSQL database whenever a cellular connection is detected. Replaced manual logs with real-time status updates.",
    outcome:
      "Eliminated paperwork delays, automated manifest generation, and gave dispatchers real-time visibility across all active regional routes.",
    stack: ["TypeScript", "React Native", "Node.js", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      { label: "Manifest Processing", value: "< 2 min" },
      { label: "Offline Sync Reliability", value: "99.9%" },
      { label: "Active Regional Routes", value: "40+" },
    ],
  },
  {
    slug: "himalayan-health-records",
    title: "Clinic Operations & EHR Suite",
    client: "Healthcare Provider Network",
    period: "2024",
    summary:
      "A fast, HIPAA-aligned electronic medical record system and patient queue management platform for multi-specialty regional clinics.",
    problem:
      "Legacy desktop software crashed frequently during peak morning hours and lacked role-based security controls across doctors, pharmacists, and billing staff.",
    approach:
      "Built a web-first application with sub-second page transitions, strict relational auditing, and granular access control. Migrated over 80,000 historic patient files without downtime.",
    outcome:
      "Reduced patient registration time, eliminated record look-up delays, and unified prescription orders directly with the on-site pharmacy.",
    stack: ["TypeScript", "React", "TanStack Router", "Go", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Patient Check-in Time", value: "-65%" },
      { label: "Historic Records Migrated", value: "80k+" },
      { label: "Query Response Time", value: "< 45ms" },
    ],
  },
];
