import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Health & Science – Expert Advisory and Research Support",
  description:
    "Health research, scientific advisory, laboratory support, and science-based consulting services from Beltline Global Services Limited.",
};

export default function HealthSciencePage() {
  return (
    <SiteShell
      title="Health & Science – Expert Advisory and Research Support"
      intro="Bridging science and practice with expert advisory, research support, and health-focused consulting."
      bgImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Health & Science Services
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Health Research Advisory</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Expert guidance on research design, methodology, and execution for health and life science projects.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Scientific Consulting</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Strategic advisory for health organizations, research institutions, and science-based businesses.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Laboratory Support</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Technical and operational support for laboratory setups, protocols, and quality assurance.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Biochemistry & Molecular Biology Services</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Specialized support in clinical biochemistry, molecular biology techniques, and diagnostic methodologies.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Health Data Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Data-driven analysis for health outcomes, epidemiological studies, and public health monitoring.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Science Training & Capacity Building</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Training programs in cell biology, genetics, molecular biology, and clinical biochemistry for professionals and institutions.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Research Publication Support</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Assistance with research writing, manuscript preparation, and scientific communication for publication.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Health Program Advisory</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Advisory services for health intervention programs, public health initiatives, and community health projects.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Our Science & Health Expertise
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Area</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">What We Offer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Cell Biology & Genetics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Research advisory, laboratory techniques, and training in cellular and genetic sciences.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Molecular Biology</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">PCR, sequencing, gene expression analysis, and molecular diagnostics support.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Clinical Biochemistry</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Metabolic profiling, biomarker analysis, and clinical laboratory advisory services.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Public Health</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Program design, epidemiological analysis, and health intervention evaluation.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Data Analytics for Health</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Health data visualization, outcome tracking, and performance dashboards.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Who We Support
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Health Organizations</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Research support, program advisory, and data analytics for better health outcomes.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Research Institutions</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Methodology guidance, laboratory support, and publication assistance.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Laboratories</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Quality assurance, protocol development, and operational efficiency improvement.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Public Health Agencies</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Program design, monitoring and evaluation, and health data analytics.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Life Science Businesses</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Scientific advisory, regulatory guidance, and research commercialization support.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
