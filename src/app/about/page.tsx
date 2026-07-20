import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About Us – Certified Expertise, Global Standards",
  description:
    "Learn about Beltline Global Services Limited, our mission, values, certifications, and the team behind our multidisciplinary professional services.",
};

const certifications = [
  {
    title: "Artificial Intelligence Business Strategy",
    institution: "Vanderbilt University",
    details: [
      "AI strategy development and implementation",
      "AI opportunity identification",
      "Organizational AI readiness",
      "AI governance and ethics",
    ],
  },
  {
    title: "Generative AI for Business",
    institution: "MIT World Class Enterprise",
    details: [
      "Generative AI applications across business functions",
      "Integration of ChatGPT, Midjourney, and other tools",
      "Business case development for AI adoption",
    ],
  },
  {
    title: "Generative AI Prompt Engineering",
    institution: "MIT World Class Enterprise",
    details: [
      "Advanced prompt design for AI models",
      "Optimizing AI outputs for business use",
      "AI content generation excellence",
    ],
  },
  {
    title: "Generative AI Agents",
    institution: "MIT World Class Enterprise",
    details: [
      "Building and deploying AI agents",
      "AI agent workflow design",
      "Multi-agent systems",
    ],
  },
  {
    title: "Autonomous AI Agents",
    institution: "MIT World Class Enterprise",
    details: [
      "Self-operating AI systems",
      "Autonomous decision-making",
      "Advanced AI agent deployment",
    ],
  },
  {
    title: "Adobe & AI Integration",
    institution: "Adobe Certification",
    details: [
      "AI-powered design and creative tools",
      "Digital content creation",
      "Creative workflow automation",
    ],
  },
  {
    title: "Data Analytics & Power BI",
    institution: "Microsoft Certification",
    details: [
      "Business intelligence and reporting",
      "Data visualization",
      "Predictive analytics",
      "Data-driven decision-making",
    ],
  },
];

const values = [
  {
    value: "Excellence",
    meaning: "We deliver professional services of the highest quality.",
  },
  {
    value: "Innovation",
    meaning: "We embrace emerging technologies to solve problems creatively.",
  },
  {
    value: "Accountability",
    meaning: "We take responsibility for our work and results.",
  },
  {
    value: "Integrity",
    meaning: "We act ethically and transparently in all we do.",
  },
  {
    value: "Client Focus",
    meaning: "We succeed when our clients succeed.",
  },
];

const promises = [
  {
    promise: "Certified Expertise",
    how: "All solutions backed by world-class certifications.",
  },
  {
    promise: "Practical Solutions",
    how: "Real-world, actionable results, not just theory.",
  },
  {
    promise: "Clear Communication",
    how: "Transparent, jargon-free communication.",
  },
  {
    promise: "Continuous Improvement",
    how: "We learn, adapt, and improve constantly.",
  },
  {
    promise: "Measurable Results",
    how: "We track and deliver tangible outcomes.",
  },
];

const scienceBackground = [
  "Cell Biology & Genetics – undergraduate foundation in cellular and genetic sciences",
  "Molecular Biology – postgraduate specialization at the University of Lagos",
  "Clinical Biochemistry – master's degree from the United Kingdom",
  "Applied research experience across laboratory, diagnostic, and health science settings",
];

export default function AboutPage() {
  return (
    <SiteShell
      title="About Us – Certified Expertise, Global Standards"
      intro="Professional services backed by world-class certifications and scientific expertise."
      bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <p className="text-lg italic leading-8 text-slate-600 dark:text-slate-300">
            &ldquo;Professional services backed by world-class certifications and scientific expertise.&rdquo;
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            We are a multidisciplinary professional services firm with a commitment to excellence, innovation, and accountability. Our team holds prestigious certifications from Vanderbilt University, MIT World Class Enterprise, Adobe, and Microsoft, enabling us to deliver cutting-edge solutions across consulting, IT, logistics, supplies, events, property, and health & science.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Science & Health Credentials
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            Our health and science services are grounded in rigorous academic and research experience, including:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {scienceBackground.map((item) => (
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
            Our Certifications
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B5FBF] dark:text-[#60a5fa]">
                  {cert.institution}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#1A2A44] dark:text-slate-100">
                  {cert.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {cert.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2B5FBF] dark:bg-[#60a5fa]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-[#1A2A44] p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-lg italic leading-8 text-slate-200">
            &ldquo;To empower organizations with intelligence – combining human expertise with AI, data, and design to deliver measurable results.&rdquo;
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Values
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Value</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {values.map((item) => (
                  <tr key={item.value}>
                    <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">{item.value}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-300">{item.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Service Promise
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Promise</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">How We Deliver</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {promises.map((item) => (
                  <tr key={item.promise}>
                    <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">{item.promise}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-300">{item.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


      </div>
    </SiteShell>
  );
}
