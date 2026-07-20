import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Beltline Global Services Limited's consulting, IT, logistics, supplies, events, property, health and science, and AI solution offerings.",
};

const services = [
  {
    title: "Consulting",
    body: "Business advisory, strategic planning, educational consultancy, training, project management, and AI-driven strategy support for growth-focused Nigerian organizations.",
    href: "/consulting",
  },
  {
    title: "IT Services",
    body: "Software development, website design, computer training, digital marketing, data analysis, AI-powered content creation, and dependable IT support services for Nigerian businesses.",
    href: "/it-services",
  },
  {
    title: "Logistics",
    body: "Reliable transport, haulage, supply chain coordination, and distribution support delivered with accountability and speed across Nigeria.",
    href: "/logistics",
  },
  {
    title: "Supplies",
    body: "General trading, import and export, and the sourcing of equipment, stationery, electronics, food items, clothing, and other merchandise for Nigerian organizations.",
    href: "/supplies",
  },
  {
    title: "Events",
    body: "Professional event planning, venue sourcing, catering coordination, decorations, and hospitality services for memorable occasions across Nigeria.",
    href: "/events",
  },
  {
    title: "Property",
    body: "Property development support, real estate facilitation, facility management, cleaning, and building maintenance services with attention to detail in the Nigerian market.",
    href: "/property",
  },
  {
    title: "Health & Science",
    body: "Health research advisory, scientific consulting, laboratory support, and science-based solutions for health organizations and research institutions.",
    href: "/health-science",
  },
  {
    title: "AI Solutions",
    body: "Autonomous AI agents, AI content creation, AI video production, AI-powered design, and data analytics services for Nigerian businesses.",
    href: "/ai-solutions",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell
      title="Our Services"
      intro="Beltline Global offers a wide range of services designed to support Nigerian organizations at every stage of growth and operations."
      bgImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-[#1A2A44]">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {service.body}
            </p>
          </Link>
        ))}
      </div>
    </SiteShell>
  );
}
