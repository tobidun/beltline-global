import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Beltline Global Services Limited for quotes, projects, or partnership enquiries.",
};

const faqs = [
  {
    question: "What kinds of projects do you support?",
    answer:
      "We support a wide range of business needs, including consulting, IT enablement, logistics coordination, supply support, events, and property-related services.",
  },
  {
    question: "How quickly can I expect a response?",
    answer:
      "Most enquiries receive a prompt follow-up so we can understand your needs and share the next steps as quickly as possible.",
  },
  {
    question: "Can I request a quote for a one-off job?",
    answer:
      "Yes. We are happy to discuss both short-term requests and ongoing support arrangements depending on your project scope.",
  },
];

export default function ContactPage() {
  return (
    <SiteShell
      title="Contact Us"
      intro="Reach out to discuss your project, request a quote, or learn more about how we can support your organization."
      bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Get in touch
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:+2348125097090"
              className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-semibold text-[#1A2A44] dark:text-slate-200 bg-white dark:bg-slate-950 transition hover:border-[#2B5FBF] hover:text-[#2B5FBF] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
            >
              Call now
            </a>
            <a
              href="https://wa.me/2348125097090"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-semibold text-[#1A2A44] dark:text-slate-200 bg-white dark:bg-slate-950 transition hover:border-[#2B5FBF] hover:text-[#2B5FBF] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
            >
              WhatsApp
            </a>
            <Link
              href="/services"
              className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-semibold text-[#1A2A44] dark:text-slate-200 bg-white dark:bg-slate-950 transition hover:border-[#2B5FBF] hover:text-[#2B5FBF] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
            >
              Explore services
            </Link>
          </div>
          <ContactForm />
        </section>

        <section className="space-y-8">
          <div className="relative overflow-hidden rounded-3xl p-8 text-white shadow-sm">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Our office location background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A2A44]/90" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold">Our office</h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Shop 4, Bangor Estate Junction, Ilorin, Kwara State.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Phone: 08125097090
                <br />
                Email: info@beltlineglobal.com
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Beltline Global office location"
                  src="https://www.google.com/maps?q=Shop+4,+Bangor+Estate+Junction,+Kulende,+Ilorin,+Kwara+State&z=14&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1A2A44] dark:text-slate-100">
              FAQs
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4"
                >
                  <p className="font-semibold text-[#1A2A44] dark:text-slate-100">
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
