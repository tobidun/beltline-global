import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Beltline Global Services Limited offers reliable consulting, IT, logistics, supplies, events, and property services across Nigeria.",
};

const services = [
  {
    title: "Consulting",
    description:
      "Business advisory, strategic planning, educational consultancy, training, project management, and strategy support for growth-focused organizations.",
    icon: "💼",
    href: "/consulting",
  },
  {
    title: "IT Services",
    description:
      "Software development, website design, computer training, digital marketing, data analysis, AI-powered content creation, and dependable IT support services.",
    icon: "💻",
    href: "/it-services",
  },
  {
    title: "Logistics",
    description:
      "Reliable transport, haulage, supply chain coordination, and distribution support delivered with accountability and speed.",
    icon: "🚚",
    href: "/logistics",
  },
  {
    title: "Supplies",
    description:
      "General trading, import and export, and the sourcing of equipment, stationery, electronics, food items, clothing, and other merchandise.",
    icon: "📦",
    href: "/supplies",
  },
  {
    title: "Events",
    description:
      "Professional event planning, venue sourcing, catering coordination, decorations, and hospitality services for memorable occasions.",
    icon: "🎉",
    href: "/events",
  },
  {
    title: "Property",
    description:
      "Property development support, real estate facilitation, facility management, cleaning, and building maintenance services with attention to detail.",
    icon: "🏢",
    href: "/property",
  },
  {
    title: "Health & Science",
    description:
      "Health research advisory, scientific consulting, laboratory support, and science-based solutions for organizations.",
    icon: "🔬",
    href: "/health-science",
  },
  {
    title: "AI Solutions",
    description:
      "Autonomous AI agents, AI content creation, AI video production, AI-powered design, and data analytics services.",
    icon: "🤖",
    href: "/ai-solutions",
  },
];

const stats = [
  { value: "10+", label: "Clients Served" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const projects = [
  {
    title: "Operational Transformation",
    tag: "Consulting",
    summary:
      "Structured advisory support that improved planning, coordination, and execution clarity across a fast-moving engagement.",
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Rollout Support",
    tag: "IT Services",
    summary:
      "A practical technology support initiative focused on smoother implementation, stronger communication, and easier adoption.",
    cover:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Logistics Coordination",
    tag: "Logistics",
    summary:
      "Reliable delivery and coordination support that helped keep operations steady and service expectations aligned.",
    cover:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Beltline Global Services delivered excellent IT training and professional support for our team.",
    author: "A. Yusuf",
    role: "Operations Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their logistics and supply coordination were prompt, transparent, and dependable across every assignment.",
    author: "S. Bamidele",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The team was thoughtful, responsive, and committed to seeing our delivery goals through.",
    author: "M. Okafor",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Every engagement felt organized, professional, and focused on real business outcomes.",
    author: "T. Ibrahim",
    role: "Business Consultant",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "We appreciated the calm approach, clear updates, and dependable follow-through on every request.",
    author: "R. Bello",
    role: "Program Coordinator",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their support helped our team stay confident, informed, and aligned throughout the project.",
    author: "K. Adeyemi",
    role: "Senior Manager",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
  },
];

const posts = [
  {
    slug: "partnerships-business-resilience",
    title:
      "How modern businesses are improving efficiency with strategic partnerships",
    category: "Insights",
    excerpt:
      "A closer look at why dependable partnerships strengthen execution and long-term resilience.",
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
  },
  {
    slug: "streamlined-logistics-operations",
    title:
      "Why reliable logistics support matters in today’s fast-moving market",
    category: "News",
    excerpt:
      "Practical reasons operational coordination has become central to client satisfaction and delivery confidence.",
    cover:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min read",
  },
  {
    slug: "technology-support-service-delivery",
    title:
      "The value of integrated consulting and technology support for growth",
    category: "Articles",
    excerpt:
      "How aligned advisory and digital support create a stronger foundation for sustainable growth.",
    cover:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
  },
];

export default function Home() {
  return (
    <SiteShell
      title="Your reliable partner for consulting, IT, logistics, and property solutions in Nigeria."
      intro="Beltline Global Services Limited is a registered company delivering excellence across Nigeria with a commitment to professionalism, integrity, and value."
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
              Why choose us
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1A2A44] dark:text-slate-100">
              Trusted by clients who value clarity, speed, and dependable
              execution.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Registered business with a strong local presence",
                "Flexible support across consulting, IT, logistics, and property services",
                "Transparent communication and responsive follow-through",
                "Practical solutions tailored to real delivery needs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 text-sm leading-7 text-slate-600 dark:text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl p-8 text-white shadow-xl">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Business growth partner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A2A44]/90" />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                Trusted partner for business growth
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Professional support for organizations that value dependable
                delivery.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                We provide a wide range of services that help businesses and
                institutions operate with confidence, accountability, and strong
                execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#2B5FBF] px-6 py-3 font-semibold text-white transition hover:bg-[#214c9e]"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
              Our services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A2A44] dark:text-slate-100 sm:text-4xl lg:whitespace-nowrap">
              Professional support for every stage of growth.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-[#1A2A44] dark:text-slate-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex text-sm font-semibold text-[#2B5FBF] dark:text-[#60a5fa] hover:text-[#214c9e] dark:hover:text-[#93c5fd]"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl py-16 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Stats overview background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1A2A44]/85" />
          </div>
          <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md"
              >
                <p className="text-4xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A2A44] dark:text-slate-100 sm:text-4xl lg:whitespace-nowrap">
              Selected work that reflects our commitment to delivery.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2B5FBF] dark:text-[#60a5fa]">
                    {project.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#1A2A44] dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>
                  <Link
                    href="/projects"
                    className="mt-4 inline-flex text-sm font-semibold text-[#2B5FBF] dark:text-[#60a5fa] hover:text-[#214c9e] dark:hover:text-[#93c5fd]"
                  >
                    View project →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#2B5FBF] dark:text-[#60a5fa]">
                Trusted by businesses
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Consulting • IT • Logistics • Property
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Professional delivery",
                "Responsive support",
                "Clear communication",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 text-center text-sm font-semibold text-[#1A2A44] dark:text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A2A44] dark:text-slate-100 sm:text-4xl lg:whitespace-nowrap">
              What clients say about our work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm"
              >
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                  “{item.quote}”
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-200 dark:border-slate-800">
                    <Image
                      src={item.image}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A2A44] dark:text-slate-100">
                      {item.author}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
              Latest news
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A2A44] dark:text-slate-100 sm:text-4xl lg:whitespace-nowrap">
              Insights and updates from the Beltline team.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
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
                  <h3 className="mt-4 text-xl font-semibold text-[#1A2A44] dark:text-slate-100">
                    {post.title}
                  </h3>
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
        </section>
      </div>
    </SiteShell>
  );
}
