import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read insights and updates on strategy, service delivery, and business growth from Beltline Global Services Limited.",
};

export default function BlogPage() {
  return (
    <SiteShell
      title="Blog"
      intro="Read insights and updates focused on strategy, service delivery, and business growth."
    >
      <BlogList posts={blogPosts} />
    </SiteShell>
  );
}
