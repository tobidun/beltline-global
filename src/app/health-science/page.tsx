import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Health & Science – Expert Advisory and Research Support",
  description:
    "Health research, scientific advisory, laboratory support, and science-based consulting services from Beltline Global Services Limited.",
};

const trustIndicators = [
  { label: "AI Certifications", value: "7+" },
  { label: "Science Degrees", value: "3" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Clients Served", value: "10+" },
];

const categories = [
  {
    title: "Data & Analytics",
    icon: "📊",
    services: [
      { name: "Health Data Analytics", detail: "Data-driven analysis for health outcomes, epidemiological studies, and public health monitoring." },
      { name: "Program Evaluation", detail: "Monitoring and evaluation for health interventions and public health programs." },
      { name: "Predictive Modeling", detail: "Forecast health trends, disease patterns, and resource needs using advanced analytics." },
    ],
  },
  {
    title: "Laboratory & Research",
    icon: "🧪",
    services: [
      { name: "Laboratory Support", detail: "Technical and operational support for laboratory setups, protocols, and quality assurance." },
      { name: "Research Advisory", detail: "Expert guidance on research design, methodology, and execution for health and life science projects." },
      { name: "Molecular Biology Services", detail: "PCR, sequencing, gene expression analysis, and molecular diagnostics support." },
    ],
  },
  {
    title: "Education & Training",
    icon: "📚",
    services: [
      { name: "Science Training", detail: "Training programs in cell biology, genetics, molecular biology, and clinical biochemistry." },
      { name: "Research Publication Support", detail: "Assistance with research writing, manuscript preparation, and scientific communication." },
      { name: "Curriculum Development", detail: "Design science curricula and educational materials for institutions." },
    ],
  },
  {
    title: "Consulting & Advisory",
    icon: "🏥",
    services: [
      { name: "Scientific Consulting", detail: "Strategic advisory for health organizations, research institutions, and science-based businesses." },
      { name: "Health Program Advisory", detail: "Advisory services for health intervention programs, public health initiatives, and community health projects." },
      { name: "Strategic Planning", detail: "Develop actionable strategies for health and science organizations." },
    ],
  },
  {
    title: "AI-Powered Solutions",
    icon: "🤖",
    services: [
      { name: "AI-Generated Animations", detail: "Scientific animations for education, training, and research communication." },
      { name: "Molecular Dynamics", detail: "AI-assisted modeling and simulation for molecular biology and biochemistry." },
      { name: "Custom AI Tools", detail: "Tailored AI solutions for research workflows, data analysis, and laboratory automation." },
    ],
  },
];

const whoWeHelp = [
  {
    sector: "Health Organizations",
    challenge: "Limited data analytics capacity",
    solution: "Build Power BI dashboards for real-time outcomes tracking and health data visualization.",
  },
  {
    sector: "Research Institutions",
    challenge: "Time-consuming data analysis",
    solution: "Use AI to accelerate research data processing and statistical analysis.",
  },
  {
    sector: "Laboratories",
    challenge: "Inefficient workflows",
    solution: "Implement AI-driven lab automation tools and digital workflow optimization.",
  },
  {
    sector: "Public Health Agencies",
    challenge: "Limited disease surveillance",
    solution: "Deploy AI models for outbreak prediction, monitoring, and health intervention evaluation.",
  },
  {
    sector: "Life Science Businesses",
    challenge: "Slow research commercialization",
    solution: "Provide AI strategy for drug discovery, diagnostics, and research commercialization.",
  },
];

const caseStudies = [
  {
    title: "AI-Powered Biology Animations for University Education",
    client: "University of Ilorin",
    challenge: "Needed engaging biology animations for undergraduate genetics course to improve student comprehension.",
    solution: "Developed AI-generated animations using EduGen and Manim for DNA replication, cell division, and genetic inheritance.",
    result: "Student engagement increased significantly; animations adopted across 3 departments for undergraduate and postgraduate programs.",
  },
  {
    title: "Health Outcomes Dashboard for Hospital Performance",
    client: "Kwara State Hospital",
    challenge: "Needed better tracking of patient outcomes and health indicators across departments.",
    solution: "Built Power BI dashboards with predictive analytics for patient risk stratification and resource allocation.",
    result: "Improved clinical decision-making, better resource allocation, and enhanced patient care outcomes.",
  },
];

const tools = [
  { name: "EduGen", purpose: "AI Animation" },
  { name: "Manim", purpose: "Python Code" },
  { name: "MDGen", purpose: "MIT Simulation" },
  { name: "Power BI", purpose: "Microsoft Analytics" },
  { name: "Synthesia", purpose: "Video AI" },
  { name: "Runway ML", purpose: "AI Video" },
  { name: "Video Agent", purpose: "Research" },
  { name: "ChatGPT", purpose: "AI Content" },
];

export default function HealthSciencePage() {
  return (
    <SiteShell
      title="Health & Science – Expert Advisory and Research Support"
      intro="Bridging science and practice with expert advisory, research support, and health-focused consulting."
      bgImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Advancing Health & Science Through AI-Powered Excellence
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Bridging cutting-edge AI with deep scientific expertise to transform health research, education, and clinical practice.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-[#2B5FBF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#214c9e]"
            >
              Book a Consultation
            </a>
            <a
              href="/services"
              className="rounded-full border border-slate-200 dark:border-slate-800 px-5 py-2.5 text-sm font-semibold text-[#1A2A44] dark:text-slate-200 transition hover:border-[#2B5FBF] hover:text-[#2B5FBF] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
            >
              View Our Services
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Backed by 7 AI Certifications + MSc Molecular Biology | BSc Cell Biology & Genetics
          </p>
        </section>

        {/* Trust Indicators */}
        <section>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustIndicators.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5 text-center"
              >
                <p className="text-2xl font-semibold text-[#2B5FBF] dark:text-[#60a5fa]">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services by Category */}
        <section id="services">
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Services
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
            Comprehensive health and science solutions organized by area of impact.
          </p>
          <div className="mt-10 space-y-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-[#1A2A44] dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="rounded-2xl p-5"
                    >
                      <p className="text-sm font-semibold text-[#1A2A44] dark:text-slate-100">
                        {service.name}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {service.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Help */}
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Who We Help
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
            We solve real challenges for organizations across the health and science ecosystem.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Client Type</th>
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Challenge</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">How We Solve It</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {whoWeHelp.map((item) => (
                  <tr key={item.sector}>
                    <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">{item.sector}</td>
                    <td className="py-3 pr-4 text-slate-600 dark:text-slate-300">{item.challenge}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-300">{item.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Studies */}
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Case Studies
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
            Real examples of how we have delivered measurable results.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B5FBF] dark:text-[#60a5fa]">
                  {cs.client}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#1A2A44] dark:text-slate-100">
                  {cs.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="font-semibold text-[#1A2A44] dark:text-slate-200">Challenge: </span>
                    {cs.challenge}
                  </div>
                  <div>
                    <span className="font-semibold text-[#1A2A44] dark:text-slate-200">Solution: </span>
                    {cs.solution}
                  </div>
                  <div>
                    <span className="font-semibold text-[#1A2A44] dark:text-slate-200">Result: </span>
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-[#1A2A44] p-8 text-white shadow-sm">
          <h2 className="text-3xl font-semibold">Why Choose Beltline Global?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Deep Scientific Expertise – MSc Molecular Biology",
              "AI-Powered Solutions – 7 AI Certifications",
              "Research-Grade Tools – EduGen, Manim, Power BI",
              "Nigerian Context – Understanding of local health systems",
              "End-to-End Support – From research design to publication",
              "Multidisciplinary Team – Science + Technology + Strategy",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Cutting-Edge Tools & Technologies
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
            We leverage industry-leading tools to deliver world-class health and science solutions.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5 text-center"
              >
                <p className="text-sm font-semibold text-[#1A2A44] dark:text-slate-100">{tool.name}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{tool.purpose}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-[#1A2A44] p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Ready to Transform Your Health or Research Project?</h2>
          <p className="mt-3 text-base leading-8 text-slate-200">
            Let&apos;s discuss how our scientific expertise and AI-powered solutions can accelerate your goals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1A2A44] transition hover:bg-slate-100"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us for a Quote
            </a>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
