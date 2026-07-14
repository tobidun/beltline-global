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
      bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
    >
      <ProjectList projects={projects} />
    </SiteShell>
  );
}
