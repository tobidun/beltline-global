import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Beltline Global Services Limited, its mission, and the leadership behind the company.",
};

const values = [
  "Registered and trusted by clients across Nigeria",
  "Focused on professional delivery and measurable results",
  "Committed to long-term partnerships and dependable service",
];

export default function AboutPage() {
  return (
    <SiteShell
      title="About Beltline Global Services Limited"
      intro="We are a registered company with a strong reputation for dependable, professional support across consulting, IT, logistics, supplies, events, and property services."
      bgImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
            Company background
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Built on integrity, service, and execution
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Beltline Global Services Limited is a registered company with the
            Corporate Affairs Commission (RC: 9648603). We deliver practical,
            high-quality solutions for businesses and institutions seeking
            dependable support in a fast-changing environment across consulting,
            training, IT, logistics, trading, events, and property development.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            Our mission is to create lasting value by combining professionalism,
            attention to detail, and a client-first approach to every
            engagement.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
            Director&apos;s profile
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Adam I. Ajao
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Director
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Adam leads the business with a strong focus on customer
            satisfaction, strategic execution, and reliable service delivery.
            His leadership reflects a commitment to quality and professionalism
            in every project.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {values.map((value) => (
              <li
                key={value}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3"
              >
                {value}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}
