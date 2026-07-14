import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell title={post.title} intro={post.excerpt} bgImage={post.cover}>
      <article className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <div className="relative h-72 w-full">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 font-semibold uppercase tracking-[0.25em] text-[#2B5FBF] dark:text-[#60a5fa]">
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 md:grid-cols-3">
            {post.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm"
              >
                {highlight}
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-flex text-sm font-semibold text-[#2B5FBF] dark:text-[#60a5fa] hover:text-[#214c9e] dark:hover:text-[#93c5fd]"
          >
            ← Back to blog
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
