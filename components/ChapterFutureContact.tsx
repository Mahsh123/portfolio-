"use client";

import { Mail, ArrowUpRight, Sparkles, Terminal, Phone, Award, GraduationCap, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { CONTACT_INFO, CERTIFICATIONS, EDUCATION } from "@/data/portfolio";

export default function ChapterFutureContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="contact" className="relative z-10">
      {/* ========================================================================= */}
      {/* CHAPTER 08: THE FUTURE                                                    */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-10 border-t border-slate-900/80">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter 08 / The Horizon</span>
          </div>

          <div className="max-w-5xl">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[1.05] mb-8">
              THE NEXT GENERATION <br />
              OF SOFTWARE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                IS INTELLIGENT.
              </span>
            </h2>

            <p className="text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed max-w-3xl">
              I want to work on meaningful products where strong software engineering and artificial intelligence
              come together to create lasting, scalable impact.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CHAPTER: CONTACT / LET'S BUILD WHAT'S NEXT                          */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 sm:px-10 border-t border-slate-900 bg-[#02050e]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-14">
            <div className="font-mono text-xs text-sky-400 uppercase tracking-wider mb-4">
              Final Chapter / Direct Channels
            </div>

            <h3 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              LET&apos;S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                WHAT&apos;S NEXT.
              </span>
            </h3>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Interested in building scalable software or practical AI-powered products? Let&apos;s connect.
            </p>
          </div>

          {/* Primary Direct Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mb-16">
            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Email</div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors truncate max-w-[150px]">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </a>

            {/* LinkedIn */}
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">LinkedIn</div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    muhammed-mahshook
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </a>

            {/* GitHub */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-sky-300">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">GitHub</div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    Mahsh123
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </a>

            {/* Phone / Location */}
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
              className="group p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Line</div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {CONTACT_INFO.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </a>
          </div>

          {/* Education & Certifications Row from Resume */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mb-24">
            {/* Education */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90 backdrop-blur-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider mb-1">
                  Academic Foundation &middot; {EDUCATION.period}
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {EDUCATION.degree}
                </div>
                <div className="text-xs text-slate-400">
                  {EDUCATION.institution}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90 backdrop-blur-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="w-full">
                <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-2">
                  Professional Certifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((cert) => (
                    <span
                      key={cert.title}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-purple-500/30 text-xs font-mono text-slate-200 flex items-center gap-1.5"
                    >
                      <span className="text-purple-400 font-bold">{cert.issuer}:</span>
                      <span>{cert.title}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Footer Row */}
          <div className="pt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono">
            <div>
              &copy; 2026 Muhammed Mahshook Ali P. Software Engineer &amp; AI Engineer.
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>Next.js &middot; Three.js &middot; TypeScript</span>
              </span>
              <span>&bull;</span>
              <button
                onClick={scrollToTop}
                className="hover:text-sky-300 transition-colors cursor-pointer"
              >
                Back to Top &uarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
