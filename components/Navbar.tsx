"use client";

import { useState, useEffect } from "react";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Story", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Tech", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-sky-500/10 py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-slate-200 hover:text-white transition-colors"
          aria-label="Muhammed Mahshook Ali P Portfolio"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-semibold group-hover:border-sky-400/50 group-hover:bg-sky-500/20 transition-all">
            M
          </span>
          <span className="font-sans font-bold text-base tracking-tight text-white">
            MAHSHOOK<span className="text-sky-400">.</span>DEV
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume & Mobile Toggle) */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Muhammed_Mahshook_Ali_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/25 hover:border-sky-400/50 transition-all duration-200 shadow-sm hover:shadow-sky-500/10 hover:translate-y-[-1px]"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden bg-[#050B17]/95 border-b border-sky-500/15 px-6 py-5 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800/80 mt-2">
              <a
                href="/resume.pdf"
                download="Muhammed_Mahshook_Ali_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30 hover:bg-sky-500/25"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
