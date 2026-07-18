import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Property – Intelligent Management, Attention to Detail",
  description:
    "Property development, real estate, facility management, cleaning, building maintenance, and AI-powered marketing services from Beltline Global Services Limited.",
};

export default function PropertyPage() {
  return (
    <SiteShell
      title="Property – Intelligent Management, Attention to Detail"
      intro="Property development, real estate, and facility management with accountability and intelligence."
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Property Development
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Property Development Support</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Advisory and support throughout the development lifecycle for Nigerian real estate projects.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Project Management</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Oversight of construction, renovation, and development projects across Nigeria.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Real Estate Facilitation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Support with buying, selling, and leasing properties in the Nigerian real estate market.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Land Acquisition & Feasibility</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Site analysis, feasibility studies, and acquisition support for Nigerian land and properties.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Building Permits & Approvals</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Assistance with regulatory requirements and documentation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Facility Management
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Facility Management</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Comprehensive management of commercial and residential properties.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Building Maintenance</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Regular maintenance to preserve and enhance property value.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Cleaning Services</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Professional cleaning for offices, residential buildings, and events across Nigerian cities.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Repairs & Renovations</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Quality repairs and renovations by trusted contractors.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Landscaping & Grounds Maintenance</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Outdoor maintenance for properties.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Property Intelligence
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Property Analytics Dashboards</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Track occupancy rates, maintenance costs, and property performance for Nigerian properties.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Facility Management Reporting</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven reports on maintenance, costs, and asset performance.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Property Analysis</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Market trend analysis and investment insights for the Nigerian real estate market.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Property Valuation Support</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-backed valuation for buying, selling, and leasing Nigerian properties.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Property Marketing
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Generated Property Visuals</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Professional images, virtual tours, and 3D renderings for Nigerian property listings.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Property Video Tours</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI-generated walkthrough videos for marketing.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Property Listing Content</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI-assisted property descriptions and marketing copy.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Real Estate Digital Marketing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Social media, email, and online advertising for properties.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Property Management Advantage
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Advantage</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">How We Deliver</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Accountability</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Transparent reporting and clear communication.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Attention to Detail</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Meticulous care in every aspect of property management.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Intelligence</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven decisions for property performance.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Reliability</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Dependable maintenance and facility management.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Innovation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI-powered marketing and analytics for properties.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
