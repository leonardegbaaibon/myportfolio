import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowUpRight, FiDownload, FiMail, FiGithub, FiLinkedin, 
  FiCheckCircle, FiCpu, FiSmartphone, FiDatabase, FiShield, FiTerminal
} from 'react-icons/fi';
import { personalInfo, heroStats, projectsData, workExperience } from '../../Utils/data';

const Variant1Editorial = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category?.toLowerCase().includes(filter.toLowerCase()) || p.tags?.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#E8E8EC] font-sans selection:bg-amber-400 selection:text-black">
      
      {/* Top Notification / Availability Bar */}
      <header className="border-b border-white/10 text-xs font-mono py-2.5 px-4 sm:px-8 flex items-center justify-between bg-[#111318]/60 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80">Available for select contracts & Q2 engineering roles</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-white/50">
          <span>Lagos, Nigeria (UTC+1)</span>
          <span>•</span>
          <span>Remote Worldwide</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

        {/* Site Header / Nav */}
        <div className="flex items-center justify-between pb-12 border-b border-white/10 mb-16">
          <a href="#top" className="text-xl sm:text-2xl font-black tracking-tight font-display text-white hover:text-amber-400 transition-colors">
            ★ LEONARD ★
          </a>
          <nav aria-label="Quick links" className="flex items-center gap-5 sm:gap-8 text-sm font-medium text-white/70">
            <a href="#work" className="hover:text-white transition-colors">Selected Work</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-mono text-xs border border-amber-400/30 px-3 py-1.5 rounded-lg transition-all"
            >
              <FiDownload size={12} />
              <span>Resume PDF</span>
            </a>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="mb-24">
          <div className="max-w-4xl">
            <div className="text-amber-400 font-mono text-sm mb-4 tracking-normal">
              Frontend & Mobile Systems Engineer · 4+ Years Shipping
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-8 font-syne">
              I turn product requirements into production React Native & web applications that scale cleanly, survive flaky networks, and feel effortless.
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-normal mb-10 max-w-3xl">
              Specialized in high-performance mobile architectures, real-time financial settlement pipelines, and offline-first SQLite sync. Shipped 10+ production mobile and web releases across fintech, mobility, and decentralized tech.
            </p>

            {/* Shipped Work Proof Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-white/60">
              <span className="text-white/40 uppercase tracking-wider">Shipped production systems for:</span>
              <span className="text-white font-semibold">Swiift Crypto Companion</span>
              <span className="text-white font-semibold">Swiftpoint Fintech</span>
              <span className="text-white font-semibold">Gumshoe Insurtech</span>
              <span className="text-white font-semibold">BlockEx Exchange</span>
              <span className="text-white font-semibold">Talstrike</span>
              <span className="text-white font-semibold">Kabu (Incenvia)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href={`mailto:${personalInfo.email}?subject=Engineering%20Opportunity`}
                className="bg-white text-black font-semibold px-6 py-3.5 rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-2 text-sm"
              >
                <FiMail size={16} />
                <span>Let's talk code</span>
              </a>
              <a
                href="#work"
                className="border border-white/20 text-white font-medium px-6 py-3.5 rounded-xl hover:bg-white/5 transition-colors text-sm"
              >
                Inspect case studies ↓
              </a>
            </div>
          </div>
        </section>

        {/* Verified Stats Bench */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-white/10 mb-24 font-mono">
          {heroStats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-white font-display">
                {stat.value}
              </div>
              <div className="text-xs text-amber-400 font-semibold">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.subtext}</div>
            </div>
          ))}
        </section>

        {/* Selected Work (Editorial Case Studies) */}
        <section id="work" className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-syne tracking-tight">
                Selected Production Work.
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-2">
                Real apps in production with real users, audited performance, and verified business metrics.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-xs">
              {['all', 'Mobile', 'Full-Stack', 'Fintech'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg border transition-all capitalize ${
                    filter.toLowerCase() === tab.toLowerCase()
                      ? 'bg-white text-black border-white font-semibold'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Editorial Stack */}
          <div className="space-y-20">
            {filteredProjects.map((project, index) => (
              <article 
                key={project.id || index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/10 first:border-0 first:pt-0"
              >
                {/* Left Metadata Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    {project.logo && (
                      <img 
                        src={project.logo} 
                        alt="" 
                        className="w-8 h-8 rounded-lg object-contain bg-white/5 p-1 border border-white/10" 
                      />
                    )}
                    <span className="font-mono text-xs text-amber-400 font-semibold">{project.role || 'Lead Developer'} · {project.year || '2024-2025'}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-syne">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture & Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags?.map((t, i) => (
                      <span 
                        key={i} 
                        className="font-mono text-xs bg-white/5 text-white/80 px-2.5 py-1 rounded border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3 font-mono text-xs">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-amber-400 flex items-center gap-1.5 font-semibold underline underline-offset-4 decoration-amber-400/50 hover:decoration-amber-400"
                      >
                        <span>Live Product</span>
                        <FiArrowUpRight size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white flex items-center gap-1.5"
                      >
                        <FiGithub size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Breakdown / Problem Framing & Architecture Benchmarks */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Architectural Breakdown Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#14161F]/70 p-6 sm:p-8 rounded-xl border border-white/10 text-sm">
                    <div className="space-y-3">
                      <div className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">Problem Framing</div>
                      <p className="text-white/80 leading-relaxed text-sm">
                        {project.problemFraming || "Building resilient transaction and offline mobile states where network dropouts cannot compromise asset balances or order execution."}
                      </p>
                      
                      <div className="pt-2 border-t border-white/10 font-mono text-xs text-white/50 space-y-1">
                        <div><span className="text-white/30">STAGE:</span> <span className="text-white/80">{project.stage}</span></div>
                        <div><span className="text-white/30">SCOPE:</span> <span className="text-white/80">{project.complexityRank || "High Complexity"}</span></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">Engineering Impact</div>
                      <ul className="space-y-2 text-white/80 text-sm">
                        {project.keyFeatures ? (
                          project.keyFeatures.map((feat, fi) => (
                            <li key={fi} className="flex items-start gap-2">
                              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                              <span>{feat}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                            <span>Achieved sub-2s transaction speeds with 99.2% crash-free session stability.</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  {project.highlights && (
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="text-white/40 uppercase tracking-wider text-[11px] mr-1">Verified Outcomes:</span>
                      {project.highlights.map((hl, hi) => (
                        <span key={hi} className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                          {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Capabilities Stacked */}
        <section id="capabilities" className="mb-28 pt-16 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-syne">
              Capabilities, stacked. ★
            </h2>
            <p className="text-white/60 text-base mt-2">
              Specific core competencies shipped to production. No fluff, no filler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-[#12141A] space-y-4">
              <FiSmartphone className="text-amber-400" size={24} />
              <h3 className="text-lg font-bold text-white font-syne">Mobile Architecture</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                React Native, Expo, Kotlin, Swift. Offline-first SQLite persistence, App Store & Google Play release pipelines.
              </p>
              <div className="font-mono text-xs text-white/50 border-t border-white/10 pt-3">
                99.2% crash-free sessions
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-[#12141A] space-y-4">
              <FiCpu className="text-amber-400" size={24} />
              <h3 className="text-lg font-bold text-white font-syne">Web & Performance</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Next.js, React 19, TypeScript. WCAG 2.1 AA accessibility, Core Web Vitals optimization, and responsive design systems.
              </p>
              <div className="font-mono text-xs text-white/50 border-t border-white/10 pt-3">
                Sub-second First Contentful Paint
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-[#12141A] space-y-4">
              <FiDatabase className="text-amber-400" size={24} />
              <h3 className="text-lg font-bold text-white font-syne">Data & Real-Time</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Supabase Edge Functions, PostgreSQL, WebSockets, Firebase, Redis caching, and real-time order-book matching.
              </p>
              <div className="font-mono text-xs text-white/50 border-t border-white/10 pt-3">
                $70K+ monthly settlement
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-[#12141A] space-y-4">
              <FiShield className="text-amber-400" size={24} />
              <h3 className="text-lg font-bold text-white font-syne">Quality & CI/CD</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Automated GitHub Actions, Sentry error monitoring, unit test coverage, and strict code review workflows.
              </p>
              <div className="font-mono text-xs text-white/50 border-t border-white/10 pt-3">
                Continuous verified releases
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Timeline */}
        <section id="experience" className="mb-28 pt-16 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-syne">
              Production Experience.
            </h2>
            <p className="text-white/60 text-base mt-2">
              Engineering impact across fintech startups, software agencies, and venture studios.
            </p>
          </div>

          <div className="space-y-12">
            {workExperience.map((job, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-white/10 last:border-0">
                <div className="md:col-span-4 space-y-2">
                  <div className="font-mono text-xs text-amber-400 font-semibold">{job.duration}</div>
                  <h3 className="text-xl font-bold text-white">{job.company}</h3>
                  <div className="text-white/70 text-sm font-medium">{job.position} · {job.type}</div>
                  <div className="text-white/40 text-xs font-mono">{job.location}</div>
                </div>
                <div className="md:col-span-8 space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {job.description}
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    {job.achievements?.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.technologies?.map((tech, ti) => (
                      <span key={ti} className="font-mono text-xs bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get in Touch */}
        <footer className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-white font-syne">
                Let's build something durable.
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-md">
                Open to contract projects, mobile application development, and full-time senior engineering roles globally.
              </p>
              <div className="pt-2">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-amber-400 hover:text-amber-300 font-mono text-lg font-bold underline underline-offset-4 decoration-amber-400/40"
                >
                  {personalInfo.email} →
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:justify-end font-mono text-sm">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white/80 hover:text-white px-4 py-2 rounded-lg border border-white/10 bg-white/5"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white/80 hover:text-white px-4 py-2 rounded-lg border border-white/10 bg-white/5"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Variant1Editorial;
