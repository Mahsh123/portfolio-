"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowDown,
  Database,
  Search,
  Cpu,
  Bot,
  MessageSquare,
  Mic,
  Store,
  Users,
  Truck,
  ShoppingBag,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { RAG_FLOW_STEPS } from "@/data/portfolio";

export default function ChapterProjects() {
  const [activeRagIndex, setActiveRagIndex] = useState(2);

  return (
    <section id="projects" className="py-28 px-6 sm:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
            <span>Chapter 05 / What I Actually Build</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            IDEAS ARE EASY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-200 to-white">
              BUILDING THEM IS THE WORK.
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Real architectural designs solving tangible user friction. Each system built with measurable purpose,
            tested integrity, and production-grade stability.
          </p>
        </div>

        <div className="space-y-20">
          {/* ========================================================================= */}
          {/* PROJECT 01: RAG-BASED AI LEARNING SYSTEM                                  */}
          {/* ========================================================================= */}
          <article className="rounded-3xl p-8 sm:p-12 bg-slate-950/80 border border-sky-500/25 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 font-mono text-xs text-sky-400 font-bold mb-2">
                <span>PROJECT 01</span>
                <span>/</span>
                <span className="text-slate-400">APPLIED AI &middot; RAG &middot; LLM</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                RAG-Based AI Learning System
              </h3>

              {/* The Problem & The Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="font-mono text-xs text-rose-400 font-bold uppercase mb-2">
                    The Problem
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Educational curriculum and textbook content is immense, fragmented, and difficult to navigate
                    efficiently for targeted contextual clarification without hallucinations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="font-mono text-xs text-emerald-400 font-bold uppercase mb-2">
                    The Solution
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Transform complex academic corpora into a high-speed retrievable vector knowledge base capable
                    of providing verified, context-aware AI answers grounded strictly in source materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Architecture Flow: DOCUMENTS -> PROCESSING -> ... -> RESPONSE */}
            <div className="rounded-2xl p-6 bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  Visual Data Flow Architecture
                </span>
                <span className="text-xs font-mono text-sky-400">Interactive Pipeline</span>
              </div>

              {/* 7-Step Interactive Pipeline Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
                {RAG_FLOW_STEPS.map((item, idx) => {
                  const isSelected = activeRagIndex === idx;
                  return (
                    <button
                      key={item.step}
                      onClick={() => setActiveRagIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-sky-500/20 border-sky-500/50 shadow-lg shadow-sky-500/10"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <div className="font-mono text-[10px] text-sky-400 font-bold mb-1">{item.step}</div>
                      <div className={`text-xs font-bold ${isSelected ? "text-white" : "text-slate-300"}`}>
                        {item.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Highlight Detail */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-sky-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-sky-400 font-bold">
                    ACTIVE STEP: {RAG_FLOW_STEPS[activeRagIndex].step} &mdash; {RAG_FLOW_STEPS[activeRagIndex].name}
                  </div>
                  <div className="text-sm text-slate-200">{RAG_FLOW_STEPS[activeRagIndex].desc}</div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 hidden sm:inline">
                  Strictly Grounded
                </span>
              </div>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* PROJECT 02: AI SALES CALL SIMULATION                                      */}
          {/* ========================================================================= */}
          <article className="rounded-3xl p-8 sm:p-12 bg-slate-950/80 border border-purple-500/25 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 font-mono text-xs text-purple-400 font-bold mb-2">
                <span>PROJECT 02</span>
                <span>/</span>
                <span className="text-slate-400">CONVERSATIONAL AI &middot; RAG</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                AI Sales Call Simulation
              </h3>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 mb-6">
                <div className="font-mono text-xs text-purple-400 font-bold uppercase mb-2">
                  The Goal
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Create realistic AI-powered conversation and training workflows capable of dynamic objection
                  handling, corporate playbook grounding, and scenario-driven dialogue evaluation.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Context-aware AI conversations powered by intelligent retrieval and scenario-driven workflows.
              </p>
            </div>

            {/* Flow & Conversation Architecture: CONTEXT -> AI REASONING -> CONVERSATION -> RESPONSE */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-purple-400 font-bold mb-1">01 / INPUT</div>
                  <h4 className="text-lg font-bold text-white mb-2">Context Layer</h4>
                  <p className="text-xs text-slate-400">
                    Client persona constraints, enterprise playbook guidelines, and objection trees retrieved in real time.
                  </p>
                </div>
                <div className="mt-4 text-xs font-mono text-purple-300">RAG Context Engine</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-purple-400 font-bold mb-1">02 / COGNITION</div>
                  <h4 className="text-lg font-bold text-white mb-2">AI Reasoning</h4>
                  <p className="text-xs text-slate-400">
                    Semantic analysis of tone, persona compliance, objection difficulty, and coaching metrics.
                  </p>
                </div>
                <div className="mt-4 text-xs font-mono text-purple-300">LLM Orchestration</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-purple-400 font-bold mb-1">03 / INTERACTION</div>
                  <h4 className="text-lg font-bold text-white mb-2">Conversation</h4>
                  <p className="text-xs text-slate-400">
                    Low-latency voice interactions with automated Speech-to-Text and streaming Text-to-Speech synthesis.
                  </p>
                </div>
                <div className="mt-4 text-xs font-mono text-purple-300">Real-Time WebSockets</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-purple-400 font-bold mb-1">04 / OUTPUT</div>
                  <h4 className="text-lg font-bold text-white mb-2">Intelligent Response</h4>
                  <p className="text-xs text-slate-400">
                    Adaptive dialogue moves, objection de-escalation, and post-call analytics feedback scoring.
                  </p>
                </div>
                <div className="mt-4 text-xs font-mono text-purple-300">Scoring &amp; Analytics</div>
              </div>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* PROJECT 03: CARECONNECT                                                   */}
          {/* ========================================================================= */}
          <article className="rounded-3xl p-8 sm:p-12 bg-slate-950/80 border border-teal-500/25 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 font-mono text-xs text-teal-400 font-bold mb-2">
                <span>PROJECT 03</span>
                <span>/</span>
                <span className="text-slate-400">VOICE AI &middot; MOBILE APPLICATION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                CareConnect
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                A voice-enabled application engineered to interpret spoken medical symptoms, categorize intents with NLP,
                and provide hands-free healthcare assistance through an intuitive mobile interface.
              </p>
            </div>

            {/* Architecture Flow: VOICE -> APPLICATION -> API -> NLP -> RESPONSE */}
            <div className="rounded-2xl p-6 bg-slate-900/80 border border-teal-500/30">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-teal-400 font-bold mb-1">1. VOICE</div>
                  <div className="text-sm font-semibold text-white">Audio Stream</div>
                  <div className="text-[11px] text-slate-500 mt-1">Spoken Input</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-teal-400 font-bold mb-1">2. APPLICATION</div>
                  <div className="text-sm font-semibold text-white">React Native</div>
                  <div className="text-[11px] text-slate-500 mt-1">Client Interface</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-teal-400 font-bold mb-1">3. API</div>
                  <div className="text-sm font-semibold text-white">Node.js Services</div>
                  <div className="text-[11px] text-slate-500 mt-1">REST Layer</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-teal-400 font-bold mb-1">4. NLP</div>
                  <div className="text-sm font-semibold text-white">NLP Engine</div>
                  <div className="text-[11px] text-slate-500 mt-1">Intent Parser</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-teal-400 font-bold mb-1">5. RESPONSE</div>
                  <div className="text-sm font-semibold text-white">Triage Guidance</div>
                  <div className="text-[11px] text-slate-500 mt-1">MongoDB Store</div>
                </div>
              </div>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* PROJECT 04: ZYPPA                                                         */}
          {/* ========================================================================= */}
          <article className="rounded-3xl p-8 sm:p-12 bg-slate-950/80 border border-blue-500/25 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 font-mono text-xs text-blue-400 font-bold mb-2">
                <span>PROJECT 04</span>
                <span>/</span>
                <span className="text-slate-400">HYPERLOCAL MARKETPLACE</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Zyppa
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                A connected hyperlocal marketplace connecting local businesses, services, customers, delivery
                couriers, and on-demand pickup with real-time operational synchronization.
              </p>
            </div>

            {/* Ecosystem: LOCAL BUSINESSES <-> CUSTOMERS <-> DELIVERY <-> PICKUP */}
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-blue-500/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-slate-950 border border-blue-500/25">
                  <Store className="w-6 h-6 text-blue-400 mb-3" />
                  <h4 className="text-base font-bold text-white mb-1">Local Businesses</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Live catalogs, inventory queues, orders, and pricing.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-sky-500/25">
                  <Users className="w-6 h-6 text-sky-400 mb-3" />
                  <h4 className="text-base font-bold text-white mb-1">Customers</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Neighborhood discovery, instant checkout, and live tracking.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-indigo-500/25">
                  <Truck className="w-6 h-6 text-indigo-400 mb-3" />
                  <h4 className="text-base font-bold text-white mb-1">Delivery</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated courier dispatch and GPS route telemetry.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-teal-500/25">
                  <ShoppingBag className="w-6 h-6 text-teal-400 mb-3" />
                  <h4 className="text-base font-bold text-white mb-1">Pickup</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero-wait curbside pickups and QR verification.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* PROJECT 05: TRASHECOMATE                                                  */}
          {/* ========================================================================= */}
          <article className="rounded-3xl p-8 sm:p-12 bg-slate-950/80 border border-emerald-500/25 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 font-mono text-xs text-emerald-400 font-bold mb-2">
                <span>PROJECT 05</span>
                <span>/</span>
                <span className="text-slate-400">IOT &middot; SMART SYSTEM &middot; PYTHON</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                TrashEcoMate &ndash; Smart Waste Management
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                An IoT-connected smart waste management application featuring real-time telemetry synchronization and a Python-based predictive analytics backend.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-slate-900/80 border border-emerald-500/30">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-slate-950 border border-emerald-500/20">
                  <div className="font-mono text-xs text-emerald-400 font-bold mb-1">01 / SENSORS &amp; IOT</div>
                  <h4 className="text-base font-bold text-white mb-2">Real-Time Telemetry</h4>
                  <p className="text-xs text-slate-400">
                    Live fill-level monitoring and edge telemetry dispatched to cloud databases with instant synchronization.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-emerald-500/20">
                  <div className="font-mono text-xs text-emerald-400 font-bold mb-1">02 / ANALYTICS CORE</div>
                  <h4 className="text-base font-bold text-white mb-2">Python Engine</h4>
                  <p className="text-xs text-slate-400">
                    Predictive waste generation modeling and route optimization algorithms for efficient collection cycles.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-emerald-500/20">
                  <div className="font-mono text-xs text-emerald-400 font-bold mb-1">03 / INTERFACE</div>
                  <h4 className="text-base font-bold text-white mb-2">Cross-Platform App</h4>
                  <p className="text-xs text-slate-400">
                    Flutter mobile client interface backed by Firebase real-time data layer and status notifications.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
