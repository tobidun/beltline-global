import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Consulting – Strategic Clarity Powered by Data & AI",
  description:
    "Business advisory, strategic planning, AI strategy, digital transformation roadmapping, and training services from Beltline Global Services Limited.",
};

export default function ConsultingPage() {
  return (
    <SiteShell
      title="Consulting – Strategic Clarity Powered by Data & AI"
      intro="Helping organizations operate with clarity, confidence, and intelligence."
      bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Consulting Services
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Service</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Strategy Consulting</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Identify and prioritize AI opportunities across your Nigerian business. We assess readiness, map use cases, and build implementation roadmaps tailored to your goals and resources.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Digital Transformation Roadmapping</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Plan your journey from legacy systems to intelligent operations. We help Nigerian businesses phase technology adoption, manage change, and measure impact.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Readiness Assessment</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Evaluate your data infrastructure, team skills, technology stack, and organizational culture to determine your readiness for AI adoption in Nigeria.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Data-Driven Decision Making</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Move from intuition to insight. We help you establish data governance, build analytics capabilities, and embed data into strategic decisions.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Business Advisory</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Traditional advisory with a modern edge. We bring clarity to complex Nigerian business challenges across operations, finance, and growth.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Strategic Planning</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Develop actionable strategies that align with Nigerian market realities and emerging technologies.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Project Management</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">End-to-end project oversight with data-driven tracking, risk management, and stakeholder communication.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Educational Consultancy</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Advise Nigerian educational institutions on technology integration, curriculum development, and AI literacy programs.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Training & Capacity Building</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Custom workshops on AI awareness, data literacy, Power BI, and digital transformation for Nigerian teams and executives.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Key Differentiators
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Certified in Artificial Intelligence Business Strategy (Vanderbilt University)",
              "Certified in Generative AI for Business (MIT World Class Enterprise)",
              "Certified in Data Analytics & Power BI (Microsoft)",
              "Certified in Digital Design & AI Integration",
              "Proven track record across logistics, property, education, and events",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5 text-sm leading-7 text-slate-600 dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Who We Help
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Sector</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">How We Help</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Small & Medium Businesses</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI adoption roadmaps, operational efficiency, digital marketing for Nigerian SMEs</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Educational Institutions</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI literacy programs, curriculum design, technology integration</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Logistics & Supply Chain</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data analytics, route optimization, performance dashboards for Nigerian logistics firms</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Property & Real Estate</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Market analysis, facility management dashboards, AI marketing for Nigerian properties</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Event & Hospitality</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI marketing, event analytics, digital guest experiences</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Government & Non-Profits</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Strategic planning, program evaluation, data storytelling for Nigerian government and non-profits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Success Snapshot
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <blockquote className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                &ldquo;Our consulting helped a logistics company reduce delivery delays by 34% using Power BI dashboards and route optimization.&rdquo;
              </p>
            </blockquote>
            <blockquote className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                &ldquo;We guided a school through AI literacy integration, improving student engagement by 28%.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
