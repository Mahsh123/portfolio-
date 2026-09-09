import SceneWrapper from "@/components/SceneWrapper";
import Navbar from "@/components/Navbar";
import ChapterHero from "@/components/ChapterHero";
import ChapterQuestion from "@/components/ChapterQuestion";
import ChapterEngineer from "@/components/ChapterEngineer";
import ChapterExperience from "@/components/ChapterExperience";
import ChapterProjects from "@/components/ChapterProjects";
import ChapterTechUniverse from "@/components/ChapterTechUniverse";
import ChapterValueProp from "@/components/ChapterValueProp";
import ChapterFutureContact from "@/components/ChapterFutureContact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      {/* Real Persistent Fullscreen 3D WebGL Background Scene */}
      <SceneWrapper />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Story-Driven Cinematic Narrative */}
      <main id="main-content" className="relative z-10 flex flex-col" aria-label="Portfolio content" tabIndex={-1}>
        {/* Chapter 1: First Impression (Fullscreen Hero) */}
        <ChapterHero />

        {/* Chapter 2: The Question (Software Can Do A Lot. But What If It Could Think?) */}
        <ChapterQuestion />

        {/* Chapter 3: The Engineer (I Don't Just Build Features. I Build Systems.) */}
        <ChapterEngineer />

        {/* Chapter 4: Proof Through Experience (Aionpixel, Infosys Springboard, Edunet) */}
        <ChapterExperience />

        {/* Chapter 5: What I Actually Build (RAG Learning, Sales Simulation, CareConnect, Zyppa) */}
        <ChapterProjects />

        {/* Chapter 6: The Technology (The Tools Behind The Thinking) */}
        <ChapterTechUniverse />

        {/* Chapter 7: What This Means For A Company (From Idea To Production) */}
        <ChapterValueProp />

        {/* Chapter 8 & Finale: The Future & Direct Channels */}
        <ChapterFutureContact />
      </main>
    </div>
  );
}
