import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View selected Beltline Global Services Limited projects that reflect the company’s delivery standards and service quality.",
};

export default function ProjectsPage() {
  return (
    <SiteShell
      title="Projects"
      intro="Our recent work reflects a consistent commitment to professional delivery, responsiveness, and results-oriented collaboration."
    >
      <ProjectList projects={projects} />
    </SiteShell>
  );
}
