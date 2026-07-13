"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { ChatbotWidget } from "@/components/chatbot-widget";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({
  children,
  title,
  intro,
}: {
  children: ReactNode;
  title: string;
  intro: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1A2A44] text-lg font-semibold text-white">
              BG
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1A2A44]">
                Beltline Global
              </p>
              <p className="text-xs text-slate-500">Services Limited</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:text-[#2B5FBF] ${
                    isActive ? "font-semibold text-[#2B5FBF]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#2B5FBF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#214c9e] sm:inline-flex"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:border-[#2B5FBF] hover:text-[#2B5FBF] lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current stroke-2"
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {mobileOpen ? (
            <div className="absolute left-0 right-0 top-full z-20 mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg lg:hidden">
              <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-3 py-2 transition ${
                        isActive
                          ? "bg-slate-100 text-[#2B5FBF]"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ) : null}
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-[#1A2A44] via-[#223a5a] to-[#2B5FBF] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
              Beltline Global Services Limited
            </p>
            <h1 className="mt-4 max-w-3xl animate-[fade-in-up_0.6s_ease-out] font-[family-name:var(--font-montserrat)] text-3xl font-semibold sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              {intro}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          {children}
        </div>
      </main>

      <ChatbotWidget />

      <footer className="bg-[#1A2A44] py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-[family-name:var(--font-montserrat)] text-2xl font-semibold">
                Beltline Global Services Limited
              </p>
              <p className="mt-3 text-sm text-slate-300">RC: 9648603</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Quick links
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Support
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-white">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Social
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>
                    <a href="#" className="hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            © 2026 Beltline Global Services Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
