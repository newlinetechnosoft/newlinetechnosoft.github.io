import { createFileRoute, notFound } from "@tanstack/react-router";
import { jobs } from "@/content/jobs";
import { JobDetail } from "@/components/careers/job-detail";
import { jobPostingJsonLd, pageMeta } from "@/lib/seo";
import { siteConfig } from "@/constants";

export const Route = createFileRoute("/careers/$slug")({
  head: ({ params }) => {
    const job = jobs.find((j) => j.slug === params.slug);
    if (!job) return {};

    return {
      meta: pageMeta({
        id: `career-${job.slug}`,
        path: `/careers/${job.slug}`,
        title: `${job.title} | ${siteConfig.name}`,
        description: job.summary,
        eyebrow: "Careers",
        heading: job.title,
        imageAlt: `${job.title} at ${siteConfig.name}`,
        image: `og/career-${job.slug}.webp`,
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jobPostingJsonLd(job)),
        },
      ],
    };
  },
  component: JobRouteComponent,
});

function JobRouteComponent() {
  const { slug } = Route.useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    throw notFound();
  }

  return <JobDetail job={job} />;
}
