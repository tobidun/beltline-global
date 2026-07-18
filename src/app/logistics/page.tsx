import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Logistics – Smarter Movement, Measurable Results",
  description:
    "Transport, haulage, supply chain coordination, distribution, and data-driven logistics services from Beltline Global Services Limited.",
};

export default function LogisticsPage() {
  return (
    <SiteShell
      title="Logistics – Smarter Movement, Measurable Results"
      intro="Reliable transport and supply chain coordination powered by data intelligence."
      bgImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Transport & Haulage
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Freight Transport</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Road, air, and sea freight coordination for domestic and international shipments across Nigeria and West Africa.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Haulage Services</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Heavy goods transport with reliable scheduling and tracking across Nigerian routes.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Last-Mile Delivery</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Efficient delivery services to end customers with real-time visibility.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Fleet Management</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Vehicle tracking, maintenance scheduling, and performance monitoring.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Supply Chain Support
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Supply Chain Coordination</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">End-to-end visibility and management of your supply chain within Nigeria and beyond.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Procurement Support</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Sourcing, negotiation, and supplier relationship management.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Warehousing & Storage</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Secure storage solutions with inventory management.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Distribution Services</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Efficient distribution networks for products and goods.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Data-Driven Logistics
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Logistics Data Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Track and optimize delivery times, costs, and performance metrics.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Route Optimization</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI and data-driven route planning to reduce fuel costs and delivery times on Nigerian roads.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Inventory Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven inventory management to reduce waste and stockouts.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Supplier Performance Dashboards</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Monitor and evaluate supplier reliability, cost, and quality.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Real-Time Tracking</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Live monitoring of shipments and deliveries across Nigeria.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Performance Reporting</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Automated reports on KPIs like on-time delivery, cost per mile, and asset utilization for Nigerian operations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Custom Solutions
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Logistics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Predictive logistics for demand forecasting and capacity planning.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Logistics Automation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Automate order processing, shipment tracking, and customer notifications.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Custom Dashboard Development</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Tailored Power BI dashboards for your logistics operations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Why Choose Our Logistics Services
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Reliability</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Dependable partners and real-time tracking across Nigerian states.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Cost Efficiency</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Optimized routes and data-driven decision-making.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Visibility</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Real-time dashboards and performance analytics.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Flexibility</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Services tailored to Nigerian operational needs, timelines, and infrastructure realities.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Intelligence</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI and data analytics to continuously improve performance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Sample Performance Metrics We Track
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Metric</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">What We Measure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">On-Time Delivery Rate</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Percentage of deliveries completed on schedule</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Cost Per Mile/Kilometer</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Transportation cost efficiency</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Delivery Time Variance</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Actual vs. estimated delivery times</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Supplier Reliability</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Supplier performance over time</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Inventory Turnover</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">How quickly inventory moves through your supply chain</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Customer Satisfaction</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Delivery experience ratings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
