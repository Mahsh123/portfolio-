import { Code2, Brain, Server, CheckCircle2 } from "lucide-react";
import { ENGINEERING_DOMAINS } from "@/data/portfolio";

const domainIconMap: Record<string, typeof Code2> = {
  software: Code2,
  intelligence: Brain,
  production: Server,
};

export default function ChapterEngineer() {
  return (
    <section id="about" className="py-28 px-6 sm:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Chapter 03 / The Engineer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            I DON&apos;T JUST BUILD FEATURES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-white">
              I BUILD SYSTEMS.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            For CEOs, CTOs, and Engineering Directors asking: <br className="hidden sm:inline" />
            <span className="text-white font-semibold italic">&ldquo;Can this person build something end-to-end?&rdquo;</span> &mdash; the answer is a decisive, proven <span className="text-sky-400 font-bold">YES</span>.
          </p>
        </div>

        {/* The Three Worlds - Large Spatial Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ENGINEERING_DOMAINS.map((domain) => {
            const Icon = domainIconMap[domain.id] || Code2;
            return (
              <div
                key={domain.id}
                className="group relative rounded-3xl p-8 bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-slate-500 font-bold tracking-wider">
                      {domain.tag}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${domain.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                    {domain.title}
                  </h3>

                  <div className="text-xs font-mono font-medium text-slate-400 mb-6">
                    {domain.headline}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Technologies &amp; Disciplines
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Proof of End-to-End Delivery */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-sky-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              End-to-End System Ownership
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              From conceptual design and database schemas to intelligent RAG pipelines and Kubernetes pods.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-sky-300 bg-sky-500/10 px-4 py-2.5 rounded-xl border border-sky-500/30">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>FULL LIFECYCLE CAPABILITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
