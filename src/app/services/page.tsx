import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Beltline Global Services Limited's consulting, IT, logistics, supplies, events, and property service offerings.",
};

const services = [
  {
    title: "Consulting",
    body: "We provide business advisory, strategic planning, educational consultancy, training, project management, and strategy support to help organizations operate with clarity and confidence.",
  },
  {
    title: "IT Services",
    body: "Our technology support covers software development, website design, computer training, digital marketing, data analysis, and practical IT support services.",
  },
  {
    title: "Logistics",
    body: "We coordinate dependable transport, haulage, supply chain support, and distribution services tailored to operational needs and timelines.",
  },
  {
    title: "Supplies",
    body: "We handle general trading, import and export, and the sourcing of equipment, stationery, electronics, food items, clothing, and other merchandise.",
  },
  {
    title: "Events",
    body: "From planning to coordination, we support memorable events with professional execution, venue sourcing, catering oversight, decorations, and hospitality services.",
  },
  {
    title: "Property",
    body: "We provide property development support, real estate facilitation, facility management, cleaning, and building maintenance services with attention to detail and accountability.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell
      title="Our Services"
      intro="Beltline Global offers a wide range of services designed to support organizations at every stage of growth and operations."
      bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1A2A44] dark:text-slate-100">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              {service.body}
            </p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
