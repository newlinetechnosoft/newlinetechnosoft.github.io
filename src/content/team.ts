export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  isPlaceholder?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "[FILL: Engineering Lead]",
    role: "[FILL: Technical Leadership]",
    bio: "Specializing in distributed systems architecture, database design, and technical delivery.",
    isPlaceholder: true,
  },
  {
    name: "[FILL: Full-Stack Engineer]",
    role: "[FILL: Web & Mobile Engineering]",
    bio: "Focusing on TypeScript, reactive user interfaces, and offline-first mobile applications.",
    isPlaceholder: true,
  },
  {
    name: "[FILL: Systems Engineer]",
    role: "[FILL: Backend & Cloud Infrastructure]",
    bio: "Dedicated to PostgreSQL optimization, Linux systems engineering, and deployment reliability.",
    isPlaceholder: true,
  },
];
