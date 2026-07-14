"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
  bgImage,
}: {
  children: ReactNode;
  title: string;
  intro: string;
  bgImage?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-200">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur sticky top-0 z-30">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-2 py-5 lg:px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1A2A44] dark:bg-[#2B5FBF] text-lg font-semibold text-white">
              BG
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1A2A44] dark:text-slate-100">
                Beltline Global
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Services Limited
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-300 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:text-[#2B5FBF] dark:hover:text-[#60a5fa] ${
                    isActive
                      ? "font-semibold text-[#2B5FBF] dark:text-[#60a5fa]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {mounted ? (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm transition hover:border-[#2B5FBF] hover:text-[#2B5FBF] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
              >
                {theme === "dark" ? (
                  <svg
                    className="h-5 w-5 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path
                      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            ) : (
              <div className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" />
            )}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="hidden rounded-full bg-[#2B5FBF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#214c9e] sm:inline-flex"
              >
                Request a Quote
              </Link>
            </motion.div>

            <motion.button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-slate-200 dark:border-slate-800 p-2.5 text-slate-700 dark:text-slate-300 transition hover:border-[#2B5FBF] hover:text-[#2B5FBF] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa] lg:hidden"
            >
              {mobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current stroke-2"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current stroke-2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {mobileOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 right-0 top-full z-20 mt-3 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-lg lg:hidden"
              >
                <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div key={item.href} whileTap={{ scale: 0.98 }}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-xl px-3 py-2 transition ${
                            isActive
                              ? "bg-slate-100 dark:bg-slate-800 text-[#2B5FBF] dark:text-[#60a5fa]"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </header>

      <main>
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden py-16 text-white sm:py-20"
        >
          {bgImage ? (
            <>
              <div className="absolute inset-0 z-0">
                <Image
                  src={bgImage}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A44]/95 via-[#1A2A44]/80 to-transparent" />
              </div>
            </>
          ) : (
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A2A44] via-[#223a5a] to-[#2B5FBF]" />
          )}
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200"
            >
              Beltline Global Services Limited
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mt-4 max-w-3xl font-[family-name:var(--font-montserrat)] text-3xl font-semibold sm:text-4xl lg:whitespace-nowrap"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="mt-4 max-w-2xl text-lg leading-8 text-slate-200"
            >
              {intro}
            </motion.p>
          </div>
        </motion.section>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-6">
          {children}
        </div>
      </main>

      <ChatbotWidget />

      <footer className="bg-[#1A2A44] py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
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
