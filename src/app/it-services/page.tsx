import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "IT Services – Technology That Works Smarter",
  description:
    "Software development, website design, data analytics, AI-powered content creation, digital marketing, and IT support from Beltline Global Services Limited.",
};

export default function ITServicesPage() {
  return (
    <SiteShell
      title="IT Services – Technology That Works Smarter"
      intro="From code to content – we build intelligent solutions that drive results."
      bgImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Software & Web Development
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Service</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Custom Software Development</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Tailored applications for Nigerian businesses in operations, finance, logistics, and customer management.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Website Design & Development</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Responsive, SEO-optimized websites with AI-powered features for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Website Features</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Chatbots, recommendation engines, personalization, and content automation.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Agent Development</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Custom autonomous AI agents that perform tasks, process data, and make decisions for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Mobile App Development</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">iOS and Android applications with AI integration for Nigerian users.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">API Integration</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Connect your systems with third-party AI tools, CRMs, and analytics platforms popular in Nigeria.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Data & Business Intelligence
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Service</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Power BI Dashboard Development</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Interactive, real-time dashboards for Nigerian sales, operations, logistics, and finance teams.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Data Analysis & Reporting</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Turn raw data into actionable insights with advanced analytics and visualization for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Data Integration</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Consolidate data from multiple Nigerian sources into a single, reliable view.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Predictive Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Forecast trends, identify risks, and anticipate customer needs in the Nigerian market.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Use machine learning to uncover patterns and opportunities.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            AI-Powered Content & Automation
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Service</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Generative AI Integration</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Seamlessly integrate ChatGPT, Midjourney, DALL-E, and Claude into Nigerian business workflows.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Video Production</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Professional videos with AI avatars, voiceovers, and animations ideal for Nigerian marketing and training.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Content Creation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Blogs, social media posts, email marketing, and ad copy generated with AI for Nigerian audiences.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Design</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Logos, branding materials, social media graphics, and marketing visuals created with AI-assisted design tools.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Workflow Automation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Automate repetitive tasks using Zapier, Make.com, Browse AI, and custom scripts for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Chatbots & Virtual Assistants</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">24/7 customer support and lead generation bots for Nigerian websites and social media.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Training & Support
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Service</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Computer Training</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">From basic computer literacy to advanced software skills for Nigerian professionals.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Awareness Workshops</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Help your Nigerian team understand and leverage AI in their roles.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Power BI Training</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Hands-on training for data visualization and analytics for Nigerian teams.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Digital Marketing Training</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Social media, SEO, content marketing, and email campaigns for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">IT Support</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Reliable technical support for hardware, software, and networks in Nigerian offices.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Digital Marketing
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Service</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Social Media Management</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Content creation, scheduling, engagement, and analytics for Nigerian social media.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Search Engine Optimization (SEO)</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Optimize your website for search engines and AI-driven search in Nigeria.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Email Marketing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Campaign design, automation, and performance tracking for Nigerian email lists.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">PPC & Ad Management</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Google Ads, Facebook Ads, and LinkedIn Ads management for Nigerian markets.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Marketing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Personalization, predictive targeting, and automated campaigns for Nigerian customers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Technology Stack
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Area</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Development</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Python, JavaScript, React, Node.js, HTML/CSS, PHP</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI/ML</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">ChatGPT API, Claude API, Midjourney, DALL-E, Hugging Face</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Data Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Power BI, Excel, SQL, Python (Pandas, NumPy)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Design</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Adobe Suite, Canva, Figma, AI design tools</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Automation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Zapier, Make.com, Browse AI, Custom Python Scripts</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Content</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI video tools, AI writing tools, AI avatars</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Certifications That Power Our Services
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Artificial Intelligence Business Strategy – Vanderbilt University",
              "Generative AI for Business – MIT World Class Enterprise",
              "Generative AI Prompt Engineering – MIT World Class Enterprise",
              "Generative AI Agents – MIT World Class Enterprise",
              "Autonomous AI Agents – MIT World Class Enterprise",
              "Adobe & AI Integration – Adobe Certification",
              "Data Analytics & Power BI – Microsoft Certification",
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
      </div>
    </SiteShell>
  );
}
