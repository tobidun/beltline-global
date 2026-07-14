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
    <SiteShell title={project.title} intro={project.summary} bgImage={project.cover}>
      <article className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <div className="relative h-72 w-full">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-[#2B5FBF] dark:text-[#60a5fa]">
              {project.category}
            </span>
            <span className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
              Result: {project.result}
            </span>
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm">
              <p className="font-semibold text-[#1A2A44] dark:text-slate-100">Client</p>
              <p className="mt-2">{project.client}</p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm">
              <p className="font-semibold text-[#1A2A44] dark:text-slate-100">Timeline</p>
              <p className="mt-2">{project.timeline}</p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm">
              <p className="font-semibold text-[#1A2A44] dark:text-slate-100">Outcome</p>
              <p className="mt-2">{project.result}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm"
              >
                {highlight}
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {project.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-flex text-sm font-semibold text-[#2B5FBF] dark:text-[#60a5fa] hover:text-[#214c9e] dark:hover:text-[#93c5fd]"
          >
            ← Back to projects
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
