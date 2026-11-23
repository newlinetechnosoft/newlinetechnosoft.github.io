export interface Job {
  slug: string;
  title: string;
  team: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  location: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export const jobs: Job[] = [
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer (TypeScript & React)",
    team: "Engineering",
    type: "Full-time",
    location: "Butwal, Nepal (On-site or Hybrid)",
    posted: "2026-01-15",
    summary:
      "We are looking for a frontend engineer who cares deeply about UI performance, accessible HTML, and robust TypeScript codebases.",
    responsibilities: [
      "Build and maintain user interfaces using TypeScript, React 19, and Tailwind CSS.",
      "Work closely with product requirements to implement responsive, accessible layouts.",
      "Ensure web performance budgets, Core Web Vitals, and keyboard accessibility standards are met.",
      "Write automated integration and component tests.",
    ],
    requirements: [
      "Strong proficiency in modern JavaScript, TypeScript, and React.",
      "Deep understanding of the DOM, semantic HTML, and CSS layout models.",
      "Experience interacting with RESTful and WebSocket APIs.",
      "Clear written and verbal technical communication.",
    ],
    niceToHave: [
      "Experience with TanStack Router and full-stack React frameworks.",
      "Familiarity with performance profiling tools in Chromium or WebKit.",
      "Contributions to open-source software.",
    ],
  },
  {
    slug: "backend-systems-engineer",
    title: "Backend Systems Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Butwal, Nepal (On-site or Hybrid)",
    posted: "2026-02-01",
    summary:
      "Join us to design resilient backend services, optimize relational databases, and operate containerized production environments.",
    responsibilities: [
      "Design, build, and maintain APIs in Node.js, TypeScript, or Go.",
      "Design PostgreSQL database schemas, write migrations, and optimize slow queries.",
      "Implement secure authentication, authorization, and audit logging.",
      "Configure automated testing, CI/CD pipelines, and cloud hosting infrastructure.",
    ],
    requirements: [
      "Demonstrated experience designing backend web services and REST APIs.",
      "Solid knowledge of relational database principles (PostgreSQL preferred).",
      "Familiarity with Linux environments, Docker containers, and Git workflows.",
      "Pragmatic approach to software architecture and testing.",
    ],
    niceToHave: [
      "Experience with Go or Rust in production services.",
      "Knowledge of Redis caching patterns and background job queues.",
      "Experience deploying on Cloudflare Workers or AWS.",
    ],
  },
];
