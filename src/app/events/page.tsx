import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Events – Memorable Experiences, Intelligent Execution",
  description:
    "Professional event planning, coordination, venue sourcing, catering oversight, AI marketing, and hospitality services from Beltline Global Services Limited.",
};

export default function EventsPage() {
  return (
    <SiteShell
      title="Events – Memorable Experiences, Intelligent Execution"
      intro="Professional event planning and coordination with a creative, AI-powered edge."
      bgImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Event Planning & Coordination
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Full-Service Event Planning</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">End-to-end planning from concept to execution.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Event Coordination</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">On-the-day management and seamless execution.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Corporate Events</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Conferences, seminars, team building, product launches for Nigerian organizations.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Social Events</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Weddings, parties, anniversaries, and celebrations across Nigeria.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Educational Events</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Workshops, training sessions, graduation ceremonies for Nigerian institutions.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Virtual & Hybrid Events</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Online and hybrid event coordination.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Venue & Logistics
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Venue Sourcing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Find the perfect venue based on your needs, budget, and guest count in Nigeria.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Venue Negotiation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Secure the best rates and terms.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Catering Oversight</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Menu planning, vendor management, and quality assurance for Nigerian catering standards.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Decorations & Design</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Thematic decorations, floral arrangements, and ambiance design for Nigerian events.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Hospitality Services</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Guest reception, accommodation coordination, and concierge support for Nigerian events.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Technical Production</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Sound, lighting, AV equipment, and staging for Nigerian corporate and social events.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Creative & AI-Powered Event Marketing
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Generated Event Marketing</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Videos, images, and social media content created with AI for Nigerian event promotion.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI-Powered Invitations</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Custom-designed digital and print invitations for Nigerian events.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Event Branding</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Logos, banners, signage, and promotional materials for Nigerian event branding.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Social Media Campaigns</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Pre-event hype, live updates, and post-event content for Nigerian audiences.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">AI Video Highlights</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI-generated event recap videos for memories and marketing for Nigerian clients.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Event Photography & Videography</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Professional capture of your special moments at Nigerian events.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Event Analytics
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Event Performance Dashboards</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Track attendance, engagement, and satisfaction metrics.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Guest Experience Analytics</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Measure and improve guest satisfaction.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">ROI Measurement</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Calculate return on investment for corporate events.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Post-Event Reporting</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Comprehensive reports with insights and recommendations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Types of Events We Support
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-[#1A2A44] dark:text-slate-100">Event Type</th>
                  <th className="pb-3 font-semibold text-[#1A2A44] dark:text-slate-100">Our Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Corporate Conferences</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Full planning, logistics, AV, and event marketing for Nigerian corporate conferences</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Product Launches</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Branding, venue, guest management, and AI marketing for Nigerian product launches</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Weddings & Celebrations</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Venue, decorations, catering, photography, and coordination for Nigerian weddings</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Workshops & Training</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Venue, materials, hospitality, and technical support</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Team Building Events</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Activity planning, logistics, and facilitation</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Virtual Events</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Platform selection, coordination, and virtual guest engagement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#1A2A44] dark:text-slate-100">
            Why Choose Us for Your Event
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
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Professional Execution</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Experienced coordinators and seamless logistics.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Creative Excellence</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">AI-powered design and visual storytelling.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Attention to Detail</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Every element is planned and managed to perfection.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Data-Driven Insights</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">Measure and improve event performance.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1A2A44] dark:text-slate-100">Stress-Free Experience</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">You enjoy the event while we handle everything.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
