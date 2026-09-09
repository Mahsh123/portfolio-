import { Building2, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { EXPERIENCE_MILESTONES } from "@/data/portfolio";

export default function ChapterExperience() {
  return (
    <section id="experience" className="py-28 px-6 sm:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Chapter 04 / Proof Through Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            A TRACK RECORD OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
              BUILDING REAL SYSTEMS.
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Not simulated classroom tasks, but concrete engineering contributions across enterprise AI,
            voice applications, and production clouds.
          </p>
        </div>

        {/* Milestone Cards - Large Editorial Layout */}
        <div className="space-y-12">
          {EXPERIENCE_MILESTONES.map((m) => (
            <div
              key={m.company + m.role}
              className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 backdrop-blur-md ${
                m.isHighlight
                  ? "bg-slate-950/80 border-sky-500/30 shadow-2xl shadow-sky-500/5"
                  : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-sky-400 font-bold tracking-wider">
                      {m.num}
                    </span>
                    {m.isHighlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Key Engineering Milestone
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {m.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mt-1">
                    <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {m.company}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {m.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 self-start lg:self-center">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{m.period}</span>
                </div>
              </div>

              {/* Narrative Statement */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-4xl font-normal">
                {m.narrative}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 mb-8">
                {m.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-500 uppercase mr-2">Technologies:</span>
                {m.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Flow Banner */}
        <div className="mt-16 text-center text-xs sm:text-sm font-mono text-slate-400 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="text-sky-400 font-bold">EXPERIENCE</span>
          <span className="text-slate-600">&rarr;</span>
          <span className="text-indigo-400 font-bold">EXPERIMENTATION</span>
          <span className="text-slate-600">&rarr;</span>
          <span className="text-purple-400 font-bold">REAL SYSTEMS</span>
          <span className="text-slate-600">&rarr;</span>
          <span className="text-teal-400 font-bold">CONTINUOUS GROWTH</span>
        </div>
      </div>
    </section>
  );
}
