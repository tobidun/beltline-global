import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Supplies – Sourcing with Intelligence",
  description:
    "General trading, import and export, product sourcing, and data-driven procurement services from Beltline Global Services Limited.",
};

export default function SuppliesPage() {
  return (
    <SiteShell
      title="Supplies – Sourcing with Intelligence"
      intro="Global trading and strategic sourcing backed by data and AI."
      bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            General Trading
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">General Merchandise Trading</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Trading across multiple product categories including electronics, stationery, clothing, and more for Nigerian businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Bulk Procurement</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Cost-effective bulk purchasing for businesses and organizations.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Product Sourcing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Find and source quality products from local and international markets.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Supplier Identification</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Connect with reliable suppliers across various industries.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Import & Export
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Import Services</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Sourcing and importing products from international markets into Nigeria.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Export Services</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Helping Nigerian businesses export products to global markets.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Customs Clearance Support</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Assistance with documentation, duties, and clearance processes.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">International Trade Compliance</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Ensure compliance with trade regulations and standards.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Product Categories We Supply
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Category</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Office & School Supplies</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Stationery, furniture, printing materials, classroom supplies for Nigerian schools and offices</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Electronics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Computers, phones, accessories, appliances, IT equipment for Nigerian organizations</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Food Items</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Packaged foods, beverages, ingredients, catering supplies for Nigerian events and businesses</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Clothing & Textiles</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Apparel, uniforms, fabrics, accessories for Nigerian organizations</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Equipment</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Industrial, medical, agricultural, and commercial equipment for Nigerian industries</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Promotional Items</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Branded merchandise, gifts, giveaways for Nigerian corporate events</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Data-Driven Sourcing
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Supply Chain Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven procurement and sourcing decisions.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Supplier Performance Tracking</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Dashboards to evaluate and monitor suppliers.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Market Trend Analysis</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Use AI and data to identify market trends and opportunities.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Price Optimization</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven pricing strategies for competitive advantage.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Sourcing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Leverage AI to identify suppliers, analyze markets, and forecast demand.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Sourcing Advantage
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Quality Assurance</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Rigorous supplier vetting and quality checks.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Competitive Pricing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven negotiation and bulk purchasing.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Reliable Delivery</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Coordinated logistics for timely delivery.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Diverse Product Range</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Wide network of suppliers across multiple categories.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Intelligence</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI and data analytics for smarter sourcing decisions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
