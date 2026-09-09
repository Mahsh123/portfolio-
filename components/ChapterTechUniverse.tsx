"use client";

import { useState } from "react";
import { Code2, Brain, Cloud, Database, Cpu } from "lucide-react";
import { TECH_NODES } from "@/data/portfolio";

export default function ChapterTechUniverse() {
  const [activeSphere, setActiveSphere] = useState<string>("all");

  const filteredNodes =
    activeSphere === "all" ? TECH_NODES : TECH_NODES.filter((n) => n.category === activeSphere);

  return (
    <section id="skills" className="py-28 px-6 sm:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Chapter 06 / The Technology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            THE TOOLS BEHIND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-200 to-white">
              THE THINKING.
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Technologies are not an assortment of buzzwords. They are precise instruments connected together
            to solve architectural, cognitive, and operational challenges.
          </p>
        </div>

        {/* Sphere Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: "ALL DISCIPLINES", icon: Cpu },
            { id: "software", label: "SOFTWARE ENGINEERING", icon: Code2 },
            { id: "ai", label: "ARTIFICIAL INTELLIGENCE", icon: Brain },
            { id: "infra", label: "INFRASTRUCTURE & CLOUD", icon: Cloud },
            { id: "data", label: "DATA & STORAGE", icon: Database },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveSphere(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                activeSphere === cat.id
                  ? "bg-slate-900 text-white border-sky-500/50 shadow-lg shadow-sky-500/10"
                  : "bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <cat.icon className="w-3.5 h-3.5 text-sky-400" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* The Connected Tech Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredNodes.map((node) => (
            <div
              key={node.name}
              className="group p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {node.name}
                </span>
                <span className={`w-2 h-2 rounded-full border ${node.color} bg-current`} />
              </div>

              <div className="text-xs font-mono text-slate-400">
                {node.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
