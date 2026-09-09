"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function ChapterHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Subtle Parallax offsets
  const portraitParallaxX = mousePos.x * 12;
  const portraitParallaxY = mousePos.y * 10;
  
  // Cinematic scroll depth transform: pushes portrait deeper into 3D space as user scrolls
  const scrollFade = Math.max(0, 1 - scrollY / 600);
  const scrollScale = Math.max(0.85, 1 - scrollY / 2500);
  const scrollDepth = scrollY * 0.25;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:py-0 px-6 sm:px-10 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Story & Positioning (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/25 text-sky-300 text-xs font-mono mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wider">HELLO, I&apos;M</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">OPEN FOR ENGINEERING ROLES</span>
          </div>

          {/* Large Headline Typography */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.03] mb-5">
            MUHAMMED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              MAHSHOOK
            </span>{" "}
            <span className="text-sky-400">ALI P</span>
          </h1>

          {/* Professional Title */}
          <div className="flex flex-wrap items-center gap-2.5 text-lg sm:text-2xl font-bold tracking-tight mb-6">
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              SOFTWARE ENGINEER
            </span>
            <span className="text-purple-400 font-light px-1">&times;</span>
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              AI ENGINEER
            </span>
          </div>

          {/* Large Statement */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5 max-w-xl">
            BUILDING SOFTWARE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-white">
              THAT THINKS.
            </span>
          </h2>

          {/* Short Supporting Text */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-normal">
            I build scalable software and practical AI-powered systems from idea to production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download="Muhammed_Mahshook_Ali_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-sky-500/40 shadow-sm hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Channels */}
          <div className="flex items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Mahsh123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 flex items-center justify-center text-slate-400 hover:text-sky-300 hover:bg-sky-500/10 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammed-mahshook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 flex items-center justify-center text-slate-400 hover:text-sky-300 hover:bg-sky-500/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>FULL-STACK &amp; APPLIED AI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Borderless Portrait Emerging Naturally from 3D Space (6 cols) */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] pointer-events-none">
          {/* Depth Layer 1: Atmospheric Cyan/Indigo Backlight Silhouette Glow */}
          <div
            className="absolute w-[360px] sm:w-[480px] lg:w-[560px] h-[360px] sm:h-[480px] lg:h-[560px] rounded-full bg-gradient-to-tr from-sky-500/25 via-indigo-500/15 to-purple-500/10 blur-[90px] -z-10 pointer-events-none transform transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${portraitParallaxX * 0.4}px, ${portraitParallaxY * 0.4}px, 0)`,
            }}
          />

          {/* Depth Layer 2: Seamless Cutout Portrait (Zero Box, Zero Card, Soft Edge & Bottom Fade) */}
          <div
            className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${portraitParallaxX}px, ${portraitParallaxY + scrollDepth}px, 0) scale(${scrollScale})`,
              opacity: scrollFade,
            }}
          >
            {/* The Cutout Image with feathered alpha masking and bottom natural fade */}
            <div
              className="relative w-full overflow-visible select-none"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 92% 90% at 50% 40%, black 60%, rgba(0, 0, 0, 0.6) 80%, transparent 100%), linear-gradient(to bottom, black 65%, transparent 98%)",
                maskImage:
                  "radial-gradient(ellipse 92% 90% at 50% 40%, black 60%, rgba(0, 0, 0, 0.6) 80%, transparent 100%), linear-gradient(to bottom, black 65%, transparent 98%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
              }}
            >
              <Image
                src="/images/portrait-cutout.png"
                alt="Muhammed Mahshook Ali P - Software Engineer & AI Engineer"
                width={896}
                height={1200}
                priority
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] filter brightness-[1.02] contrast-[1.03]"
              />

              {/* Seamless Bottom Gradient Grounding into Dark Void */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent pointer-events-none" />
            </div>

            {/* Depth Layer 3: Subtle floating holographic data accent line around right shoulder */}
            <div
              className="absolute -right-4 top-1/3 w-32 h-px bg-gradient-to-r from-sky-400/40 to-transparent pointer-events-none transform rotate-12 transition-transform duration-500"
              style={{
                transform: `translate3d(${-portraitParallaxX * 0.8}px, ${-portraitParallaxY * 0.8}px, 0)`,
              }}
            />
            <div
              className="absolute -left-6 bottom-1/4 w-24 h-px bg-gradient-to-l from-indigo-400/30 to-transparent pointer-events-none transform -rotate-12 transition-transform duration-500"
              style={{
                transform: `translate3d(${-portraitParallaxX * 0.6}px, ${-portraitParallaxY * 0.6}px, 0)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
