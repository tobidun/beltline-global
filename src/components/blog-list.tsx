"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/content";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return posts;
    }

    return posts.filter((post) => {
      return [post.title, post.excerpt, post.category, post.author]
        .join(" ")
        .toLowerCase()
        .includes(value);
    });
  }, [posts, query]);

  return (
    <>
      <div className="mb-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
        <label
          className="text-sm font-medium text-slate-600 dark:text-slate-400"
          htmlFor="blog-search"
        >
          Search articles
        </label>
        <input
          id="blog-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by topic, category, or author"
          className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 outline-none focus:border-[#2B5FBF] text-slate-800 dark:text-slate-100"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-[#2B5FBF] dark:text-[#60a5fa]">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-[#1A2A44] dark:text-slate-100">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-[#2B5FBF] dark:text-[#60a5fa] hover:text-[#214c9e] dark:hover:text-[#93c5fd]"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-sm text-slate-600 dark:text-slate-400">
          No matching articles were found. Try a broader search.
        </p>
      ) : null}
    </>
  );
}
