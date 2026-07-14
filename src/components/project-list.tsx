"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ProjectItem } from "@/lib/content";

export function ProjectList({ projects }: { projects: ProjectItem[] }) {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return projects;
    }

    return projects.filter((project) => {
      return [project.title, project.summary, project.category, project.client]
        .join(" ")
        .toLowerCase()
        .includes(value);
    });
  }, [projects, query]);

  return (
    <>
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <label
          className="text-sm font-medium text-slate-600"
          htmlFor="project-search"
        >
          Search projects
        </label>
        <input
          id="project-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by sector, client, or project name"
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2B5FBF]"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2B5FBF]">
                {project.category}
              </div>
              <h2 className="mt-3 text-xl font-semibold text-[#1A2A44]">
                {project.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {project.summary}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-[#2B5FBF] hover:text-[#214c9e]"
              >
                View case study →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
          No matching projects were found. Try a broader search.
        </p>
      ) : null}
    </>
  );
}
