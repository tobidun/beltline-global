import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell title={project.title} intro={project.summary}>
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-72 w-full">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-[#2B5FBF]">
              {project.category}
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1">
              Result: {project.result}
            </span>
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
              <p className="font-semibold text-[#1A2A44]">Client</p>
              <p className="mt-2">{project.client}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
              <p className="font-semibold text-[#1A2A44]">Timeline</p>
              <p className="mt-2">{project.timeline}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
              <p className="font-semibold text-[#1A2A44]">Outcome</p>
              <p className="mt-2">{project.result}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm"
              >
                {highlight}
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
            {project.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-flex text-sm font-semibold text-[#2B5FBF] hover:text-[#214c9e]"
          >
            ← Back to projects
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
