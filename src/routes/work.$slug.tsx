import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { ProjectDetail } from "@/components/work/project-detail";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/constants";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return {};

    return {
      meta: pageMeta({
        id: `work-${project.slug}`,
        path: `/work/${project.slug}`,
        title: `${project.title} | ${siteConfig.name}`,
        description: project.summary,
        eyebrow: "Case Study",
        heading: project.title,
        imageAlt: `${project.title} Case Study`,
        image: `og/work-${project.slug}.webp`,
      }),
    };
  },
  component: ProjectRouteComponent,
});

function ProjectRouteComponent() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    throw notFound();
  }

  return <ProjectDetail project={project} />;
}
