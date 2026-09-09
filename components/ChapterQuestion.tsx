import { Sparkles, ArrowDown } from "lucide-react";

export default function ChapterQuestion() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center relative py-28 px-6 sm:px-10 text-center z-10">
      {/* Narrative tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-8">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Chapter 02 / The Question</span>
      </div>

      {/* Monumental Typography with generous negative space */}
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-slate-400 tracking-tight leading-tight">
          SOFTWARE <br />
          <span className="font-extrabold text-white">CAN DO A LOT.</span>
        </h2>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto my-6" />

        <h3 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-200 to-sky-500">
          BUT WHAT IF <br />
          IT COULD THINK?
        </h3>

        <p className="text-slate-400 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed pt-6">
          I started as a software engineer building applications and real-world products. Then I moved deeper into
          Artificial Intelligence and discovered that software becomes exponentially more transformative when
          intelligence is native to the system architecture.
        </p>
      </div>

      {/* Downward indicator */}
      <div className="mt-16 text-slate-600 flex flex-col items-center gap-2 font-mono text-xs">
        <span>THE EVOLUTION</span>
        <ArrowDown className="w-4 h-4 text-sky-500 animate-bounce" />
      </div>
    </section>
  );
}
