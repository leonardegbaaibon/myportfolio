import React from 'react';
import { 
  FiArrowUpRight, FiDownload, FiMail, FiGithub, FiLinkedin, 
  FiFileText, FiCheck, FiCornerDownRight 
} from 'react-icons/fi';
import { personalInfo, heroStats, projectsData, workExperience } from '../../Utils/data';

const Variant4ArtisanLedger = () => {
  return (
    <div className="min-h-screen bg-[#111113] text-[#E0E0E2] font-sans selection:bg-white selection:text-black">
      
      {/* Top Ledger Header */}
      <header className="border-b border-white/10 px-6 sm:px-12 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="font-bold text-white tracking-widest uppercase">LEONARD EGBAAIBON</span>
          </div>
          <div className="text-white/50">ENGINEERING LEDGER · 2026 EDITION</div>
        </div>
      </header>

      {/* Main Ledger Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-28">

        {/* Narrative Statement Section */}
        <section className="space-y-8">
          <div className="text-xs font-mono text-white/40 tracking-wider">
            [00] STATEMENT OF INTENT
          </div>

          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight font-serif italic">
            "Four years of engineering mobile and distributed software where a dropped socket or a 3-second UI freeze translates directly into lost capital or stranded drivers."
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
            I am a mobile and frontend systems developer based in Lagos, operating across global time zones. My focus is architecting resilient cross-platform mobile runtimes (React Native, Expo, Kotlin) and high-throughput web frontends (Next.js, TypeScript, Supabase) designed to perform predictably under adversarial network conditions.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-white font-bold underline underline-offset-4 decoration-white/40 hover:decoration-white"
            >
              Direct Email ({personalInfo.email}) →
            </a>
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white"
            >
              Read Curriculum Vitae (PDF)
            </a>
          </div>
        </section>

        {/* Ledger Metrics */}
        <section className="space-y-6 pt-12 border-t border-white/10">
          <div className="text-xs font-mono text-white/40 tracking-wider">
            [01] VERIFIED PRODUCTION PROOFS
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono">
            <div className="space-y-1">
              <div className="text-3xl font-light text-white font-mono">99.2%</div>
              <div className="text-xs text-white/70 font-semibold">Crash-Free Stability</div>
              <div className="text-[11px] text-white/40">Swiftpoint release</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-light text-white font-mono">$70k+</div>
              <div className="text-xs text-white/70 font-semibold">Monthly Settlement</div>
              <div className="text-[11px] text-white/40">BlockEx crypto volume</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-light text-white font-mono">&lt;2.0s</div>
              <div className="text-xs text-white/70 font-semibold">Transaction Latency</div>
              <div className="text-[11px] text-white/40">Edge Function routing</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-light text-white font-mono">10+</div>
              <div className="text-xs text-white/70 font-semibold">Store Releases</div>
              <div className="text-[11px] text-white/40">iOS & Android production</div>
            </div>
          </div>
        </section>

        {/* Chronological Engineering Ledger */}
        <section className="space-y-12 pt-12 border-t border-white/10">
          <div className="text-xs font-mono text-white/40 tracking-wider">
            [02] CASE STUDY ENTRIES
          </div>

          <div className="space-y-16 divide-y divide-white/10">
            {projectsData.map((project, idx) => (
              <article key={idx} className="pt-12 first:pt-0 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {(project.logo || project.icon) && (
                      <img 
                        src={project.logo || project.icon} 
                        alt="" 
                        className="w-7 h-7 rounded-md object-contain bg-white/5 p-1 border border-white/10" 
                      />
                    )}
                    <h2 className="text-2xl font-bold text-white font-grotesk tracking-tight">
                      {project.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-white/40">
                    {project.category} · {project.year || '2024-2025'}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Problem framing & Engineering notes */}
                <div className="bg-white/[0.02] border-l-2 border-white/30 p-4 space-y-2 text-xs font-mono text-white/70">
                  <div className="text-white/40 uppercase tracking-wider text-[10px]">Architectural Lesson</div>
                  <p className="leading-relaxed">
                    {project.problemFraming || "Designed with optimistic local UI mutations and transactional rollbacks to guarantee data integrity across interrupted mobile sessions."}
                  </p>
                </div>

                {/* Stack & Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((t, ti) => (
                      <span key={ti} className="text-white/60">#{t}</span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>Inspect Live Release</span>
                      <FiArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Code of Craftsmanship */}
        <section className="space-y-8 pt-12 border-t border-white/10 text-xs font-mono">
          <div className="text-white/40 tracking-wider">
            [03] ENGINEERING PRINCIPLES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 leading-relaxed">
            <div className="space-y-2">
              <div className="text-white font-bold">1. Offline is Not an Error State</div>
              <p className="text-white/60">
                Network drops are inevitable. All critical mobile states must read and mutate a local SQLite ledger first, syncing deltas in the background when connectivity resumes.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold">2. Restraint Over Clutter</div>
              <p className="text-white/60">
                Interfaces exist to communicate decisions and execute tasks. We eliminate decorative noise, glowing gradients, and unnecessary layout wrapping.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold">3. Verifiable Telemetry</div>
              <p className="text-white/60">
                We measure real production metrics: p95 latency, crash-free session percentages, and memory heaps, rather than relying on happy-path assumptions.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold">4. Strict Accessibility</div>
              <p className="text-white/60">
                High contrast, semantic DOM trees, keyboard navigation, and screen reader labels are baseline requirements, not post-launch add-ons.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4">
          <div>DOCUMENT END // VERIFIED BY LEONARD EGBAAIBON</div>
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GITHUB</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LINKEDIN</a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white">EMAIL</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Variant4ArtisanLedger;
