import { Compass, PenTool, Code2, Brain, Rocket, TrendingUp, CheckCircle } from "lucide-react";
import { LIFECYCLE_STAGES } from "@/data/portfolio";

const lifecycleIconMap: Record<string, typeof Compass> = {
  "01": Compass,
  "02": PenTool,
  "03": Code2,
  "04": Brain,
  "05": Rocket,
  "06": TrendingUp,
};

export default function ChapterValueProp() {
  return (
    <section className="py-28 px-6 sm:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Chapter 07 / What This Means For A Company</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            FROM IDEA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
              TO PRODUCTION.
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Hiring managers, CTOs, and founders look for engineers who eliminate friction between concept and execution.
            Here is how I add compounding value across your entire engineering lifecycle.
          </p>
        </div>

        {/* 6-Stage Lifecycle Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {LIFECYCLE_STAGES.map((item) => {
            const Icon = lifecycleIconMap[item.step] || Compass;
            return (
              <div
                key={item.step}
                className="group p-8 rounded-3xl bg-slate-950/70 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20">
                      STAGE {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-sky-400 group-hover:border-sky-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Takeaway Card */}
        <div className="rounded-3xl p-8 sm:p-10 bg-slate-900/60 border border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-wider mb-2">
              The Executive Takeaway
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Self-Directed, System-Minded, Production-Focused
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              I require minimal hand-holding to bridge high-level product intent with concrete, production-grade
              software and robust AI implementations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-4 py-2.5 rounded-xl border border-emerald-500/25 flex-shrink-0">
            <CheckCircle className="w-4 h-4" />
            <span>HIGH VELOCITY &middot; LOW OVERHEAD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
