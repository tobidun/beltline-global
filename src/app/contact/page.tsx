import type { Metadata } from "next";
import Link from "next/link";
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
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#1A2A44]">
            Get in touch
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:+2348125097090"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#1A2A44] transition hover:border-[#2B5FBF] hover:text-[#2B5FBF]"
            >
              Call now
            </a>
            <a
              href="https://wa.me/2348125097090"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#1A2A44] transition hover:border-[#2B5FBF] hover:text-[#2B5FBF]"
            >
              WhatsApp
            </a>
            <Link
              href="/services"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#1A2A44] transition hover:border-[#2B5FBF] hover:text-[#2B5FBF]"
            >
              Explore services
            </Link>
          </div>
          <ContactForm />
        </section>

        <section className="space-y-8">
          <div className="rounded-3xl bg-[#1A2A44] p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Our office</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Shop 4, Bangor Estate Junction, Kulende, Ilorin, Kwara State.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Phone: 08125097090
              <br />
              Email: adam_i41@yahoo.com
            </p>
            <div className="mt-8 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-[#2B5FBF] to-[#1A2A44]" />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1A2A44]">FAQs</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <p className="font-semibold text-[#1A2A44]">
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
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
