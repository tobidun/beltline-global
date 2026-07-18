import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "AI-Powered Solutions – Intelligence at Work",
  description:
    "Autonomous AI agents, AI content creation, AI video production, AI-powered design, and data analytics services from Beltline Global Services Limited.",
};

export default function AISolutionsPage() {
  return (
    <SiteShell
      title="AI-Powered Solutions – Intelligence at Work"
      intro="Leverage the power of artificial intelligence to transform your business operations."
      bgImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            AI Agents & Automation
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Autonomous AI Agents</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Self-operating AI systems that perform complex tasks without human intervention for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Custom AI Agents</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Build AI agents tailored to your specific Nigerian business workflows and processes.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Workflow Automation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Automate repetitive tasks with Zapier, Make.com, and custom scripts.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Integration</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Seamlessly integrate AI tools like ChatGPT, Claude, and Midjourney into your Nigerian business.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Business Process Optimization</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Identify and optimize processes using AI-driven analysis.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            AI Content Creation
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Blog Writing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">High-quality blog posts and articles generated with AI and human refinement for Nigerian audiences.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Social Media Content</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Engaging posts for all platforms.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Email Marketing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Personalized email campaigns at scale for Nigerian customers.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Ad Copy</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">High-converting copy for Google, Facebook, and other ad platforms.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Product Descriptions</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Optimized descriptions for e-commerce and catalogs serving Nigerian markets.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            AI Video Production
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Avatars & Presenters</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Professional AI avatars that speak, present, and engage.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Voiceovers</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Natural-sounding voiceovers in multiple Nigerian languages.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Marketing Videos</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Promotional videos, social media reels, and ads for Nigerian brands.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Training Videos</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Educational and instructional content with AI avatars for Nigerian training programs.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Event Recap Videos</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Quick, professional recap videos for Nigerian events.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Video Editing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Automated video editing and enhancement.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            AI-Powered Design
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Logo Design</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Unique, professional logos created with AI and refined by human expertise for Nigerian brands.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Branding Materials</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Business cards, letterheads, banners, and signage.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Marketing Graphics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Social media graphics, ad designs, and promotional materials for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Website Design</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Website visuals, layouts, and user interfaces for Nigerian companies.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Presentation Design</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Professional slide decks and pitch decks for Nigerian businesses.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            AI & Data Analytics
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Business Intelligence</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Advanced analytics with AI-driven insights.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Predictive Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Forecast trends, risks, and opportunities.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Customer Insights</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Analyze customer behavior and preferences in Nigerian markets.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Market Analysis</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI-powered market research and competitor analysis for Nigerian industries.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Power BI Dashboards</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Interactive dashboards with AI insights.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our AI Certifications
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Certification</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Institution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Artificial Intelligence Business Strategy</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Vanderbilt University</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Generative AI for Business</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">MIT World Class Enterprise</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Generative AI Prompt Engineering</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">MIT World Class Enterprise</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Generative AI Agents</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">MIT World Class Enterprise</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Autonomous AI Agents</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">MIT World Class Enterprise</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Adobe & AI Integration</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Adobe</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Data Analytics & Power BI</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Microsoft</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Industries We Serve with AI
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Industry</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">AI Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Logistics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Route optimization, predictive logistics, performance dashboards for Nigerian logistics firms</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Property</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI marketing, facility analytics, market analysis for Nigerian properties</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Events</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI marketing, video production, guest analytics for Nigerian events</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Supplies</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI sourcing, supply chain analytics, supplier tracking for Nigerian businesses</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Education</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI literacy, content creation, training programs for Nigerian institutions</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Consulting</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI strategy, readiness assessments, data-driven advisory for Nigerian organizations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Why Choose Our AI Solutions
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Benefit</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">How We Deliver</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Certified Expertise</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">World-class AI certifications from top institutions.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Practical Implementation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Real-world solutions, not just theory.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Tailored Solutions</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI solutions designed for your specific needs.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Measurable Results</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven tracking of AI solution performance.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Ethical AI</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Responsible AI deployment with clear governance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
