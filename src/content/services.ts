export interface Service {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  stack: string[];
  process: { step: string; description: string }[];
}

export const services: Service[] = [
  {
    id: "web-applications",
    title: "Web Application Engineering",
    summary:
      "We design and build fast, maintainable web applications with TypeScript, React, and modern full-stack frameworks. Built for speed, search visibility, and longevity.",
    deliverables: [
      "Custom SaaS and internal web portals",
      "Prerendered and server-rendered web applications",
      "Interactive data dashboards and management consoles",
      "API integration and state management architecture",
    ],
    stack: ["TypeScript", "React", "Next.js", "TanStack", "Tailwind CSS", "Node.js"],
    process: [
      {
        step: "01 Architecture",
        description: "Define data models, API contracts, and user flows before code.",
      },
      {
        step: "02 Iterative Build",
        description: "Weekly demonstrable milestones with end-to-end type safety.",
      },
      {
        step: "03 Performance Audit",
        description: "Core Web Vitals tuning, bundle analysis, and accessibility review.",
      },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    summary:
      "Cross-platform mobile applications for iOS and Android that feel native, start fast, and work reliably even in intermittent network conditions.",
    deliverables: [
      "Cross-platform iOS and Android applications",
      "Offline-first synchronization engines",
      "Native device integration (camera, location, sensors, push notifications)",
      "App Store and Google Play deployment management",
    ],
    stack: ["React Native", "Flutter", "TypeScript", "SQLite", "Expo"],
    process: [
      {
        step: "01 Platform Specs",
        description: "Design according to iOS Human Interface and Material Design standards.",
      },
      {
        step: "02 Offline Architecture",
        description: "Local database caching with deterministic conflict resolution.",
      },
      {
        step: "03 Device Testing",
        description: "Physical device verification across low-end and flagship hardware.",
      },
    ],
  },
  {
    id: "backend-infrastructure",
    title: "Backend & Cloud Infrastructure",
    summary:
      "High-throughput, resilient server systems, relational database architecture, and automated cloud deployments tailored to your scale.",
    deliverables: [
      "RESTful and GraphQL API backends",
      "PostgreSQL schema design, query optimization, and migrations",
      "Authentication, role-based authorization, and session systems",
      "Containerized deployment pipelines and infrastructure-as-code",
    ],
    stack: ["PostgreSQL", "Go", "Node.js", "Redis", "Docker", "Linux", "Cloudflare"],
    process: [
      {
        step: "01 Schema Design",
        description: "Strict relational modeling with automated migration testing.",
      },
      {
        step: "02 API Implementation",
        description: "Idempotent endpoints, structured logging, and thorough input validation.",
      },
      {
        step: "03 Deployment Setup",
        description: "Zero-downtime rolling updates with monitoring and automated backups.",
      },
    ],
  },
  {
    id: "technical-consulting",
    title: "Codebase Audits & Consulting",
    summary:
      "In-depth architectural reviews, security audits, and performance profiling for teams seeking technical clarity on existing systems.",
    deliverables: [
      "Comprehensive codebase architecture and health reports",
      "Frontend bundle optimization and Core Web Vitals remediation",
      "Database query profiling and indexing strategy",
      "Security posture and vulnerability assessments",
    ],
    stack: ["Lighthouse", "SQL Profiling", "Oxlint", "TypeScript", "Linux Perf"],
    process: [
      {
        step: "01 Inspection",
        description: "Non-destructive deep dive into source, dependencies, and infrastructure.",
      },
      {
        step: "02 Written Report",
        description: "Categorized findings ranked by impact, risk, and remediation effort.",
      },
      {
        step: "03 Guided Fixes",
        description: "Direct pairing with your engineering team to execute critical patches.",
      },
    ],
  },
];
