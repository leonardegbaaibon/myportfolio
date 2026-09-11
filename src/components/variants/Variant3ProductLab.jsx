import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSmartphone, FiLayers, FiCompass, FiTrendingUp, FiExternalLink, 
  FiCheck, FiDownload, FiMail, FiGithub, FiLinkedin, FiChevronRight, FiPlay 
} from 'react-icons/fi';
import { personalInfo, heroStats, projectsData, workExperience } from '../../Utils/data';

const APPS_FOR_SIMULATOR = [
  {
    id: 'swiift',
    name: 'Swiift Crypto Companion',
    tagline: 'Everyday Crypto Companion & Virtual Debit Cards',
    category: 'Fintech & Digital Assets',
    stat: '99.2% Crash-free Stability',
    image: '/Image/project/swiift-card.png',
    logo: '/Image/company/swiift-icon.png',
    accentColor: '#8B5CF6',
    mockupHeadline: 'Send & Spend Crypto',
    mockupBalance: '$4,289.50',
    tags: ['React Native', 'Expo', 'Redux', 'Crypto Rails'],
    description: 'Engineered cross-platform mobile wallet for everyday crypto transactions, bill payments, and instant virtual card generation.'
  },
  {
    id: 'talstrike',
    name: 'Talstrike Tech Hiring',
    tagline: 'Automated Tech Recruitment & ATS Scoring',
    category: 'Venture & SaaS',
    stat: '10,000+ Candidates Screened',
    image: '/Image/project/talstrike-splash.png',
    logo: '/Image/project/talstrike-icon.jpg',
    accentColor: '#3B82F6',
    mockupHeadline: 'Senior React Engineer',
    mockupBalance: 'Score: 94/100',
    tags: ['React', 'TypeScript', 'Tailwind', 'REST APIs'],
    description: 'Built intuitive candidate screening dashboards, real-time interview pipelines, and structured ATS candidate evaluations.'
  },
  {
    id: 'kabu',
    name: 'Kabu Driver & Dispatch',
    tagline: 'Mobility, Logistics & Geofenced Dispatch',
    category: 'Mobility & Transportation',
    stat: 'Sub-second GPS Tracking',
    image: '/Image/project/kabu-splash.png',
    logo: '/Image/company/kabu-logo.png',
    accentColor: '#10B981',
    mockupHeadline: 'Active Dispatch Order',
    mockupBalance: 'ETA: 4 mins',
    tags: ['React Native', 'Mapbox', 'SQLite', 'WebSockets'],
    description: 'Engineered driver dispatch interface with real-time telemetry, offline trip queueing, and battery-optimized background GPS.'
  },
  {
    id: 'gumshoe',
    name: 'Gumshoe Insurtech Telematics',
    tagline: 'Acoustic Driver Distraction AI & Subrogation Claims',
    category: 'Insurtech & Automotive AI',
    stat: '-60% False Distraction Alerts',
    image: '/Image/gumshoe.png',
    logo: '/Image/gumshoe.png',
    accentColor: '#0284C7',
    mockupHeadline: 'Distraction Telemetry & Subrogation',
    mockupBalance: 'FNOL Verified',
    tags: ['Kotlin', 'Android Native', 'Insurtech', 'DSP AI', 'Subrogation'],
    description: 'Insurtech platform detecting driver distraction via acoustic signal processing, generating tamper-evident telematics ledgers for insurance subrogation claims.'
  }
];

const Variant3ProductLab = () => {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const currentApp = APPS_FOR_SIMULATOR[activeAppIndex];

  return (
    <div className="min-h-screen bg-[#0E1117] text-[#E6EDF3] font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Top Studio Nav */}
      <header className="border-b border-white/10 bg-[#161B22]/80 backdrop-blur-md px-4 sm:px-8 py-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500 text-black font-black flex items-center justify-center font-display text-sm">
              LE
            </span>
            <div>
              <div className="text-sm font-bold text-white font-grotesk tracking-tight">
                LEONARD PRODUCT LAB
              </div>
              <div className="text-[11px] text-emerald-400 font-mono">
                Venture Engineering & Mobile Apps
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="bg-emerald-500 text-black font-bold px-3.5 py-2 rounded-lg hover:bg-emerald-400 transition-colors"
            >
              Start a Product Sprint
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-24">

        {/* Split Screen Hero + Interactive Device Simulator */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Zero-to-One Mobile & Web Specialist</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white font-grotesk tracking-tight leading-[1.1]">
              From napkin architecture to App Store release.
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              I partner with founders and product teams to engineer cross-platform mobile apps and reactive web platforms that achieve high retention, withstand poor connectivity, and deploy with zero friction.
            </p>

            {/* Metric Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono">
              <div>
                <div className="text-2xl font-bold text-white font-display">99.2%</div>
                <div className="text-xs text-emerald-400 font-medium">Crash-Free Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-display">+25%</div>
                <div className="text-xs text-emerald-400 font-medium">Retention Lift</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-display">10+</div>
                <div className="text-xs text-white/50 font-medium">Stores Shipped</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={personalInfo.scheduling}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold px-6 py-3.5 rounded-xl hover:bg-emerald-400 transition-colors text-sm"
              >
                Schedule Technical Discovery
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white font-medium px-5 py-3.5 rounded-xl hover:bg-white/5 transition-colors text-sm font-mono flex items-center gap-2"
              >
                <FiDownload />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Device Frame Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Simulator App Tab Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-[#161B22] border border-white/10 rounded-xl mb-4 text-xs font-mono overflow-x-auto max-w-full">
              {APPS_FOR_SIMULATOR.map((app, idx) => (
                <button
                  key={app.id}
                  onClick={() => setActiveAppIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                    activeAppIndex === idx
                      ? 'bg-emerald-500 text-black font-bold shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {app.id.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Phone Mockup Container */}
            <div className="w-[300px] sm:w-[320px] h-[580px] bg-black rounded-[40px] border-4 border-[#30363D] shadow-2xl p-3 flex flex-col justify-between relative overflow-hidden">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#21262D] rounded-full z-20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-black/60 mr-2" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
              </div>

              {/* Inside Screen Content */}
              <div className="w-full h-full bg-[#161B22] rounded-[30px] pt-8 p-4 flex flex-col justify-between overflow-hidden relative border border-white/5">
                
                {/* Simulated Screen Header */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <img 
                      src={currentApp.logo} 
                      alt="" 
                      className="w-7 h-7 rounded-lg object-contain bg-white/10 p-0.5" 
                    />
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      LIVE BUILD
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] text-white/50 font-mono">{currentApp.category}</div>
                    <div className="text-base font-bold text-white font-grotesk">{currentApp.name}</div>
                  </div>
                </div>

                {/* Simulated Screen Body Card */}
                <div className="bg-[#21262D] p-4 rounded-2xl border border-white/10 space-y-3 shadow-md my-auto">
                  <div className="text-xs text-white/60 font-mono">Active State</div>
                  <div className="text-xl font-bold text-white font-display">
                    {currentApp.mockupBalance}
                  </div>
                  <div className="text-[11px] text-white/80">
                    {currentApp.mockupHeadline}
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span>{currentApp.stat}</span>
                    <span>PROD READY</span>
                  </div>
                </div>

                {/* Simulated Screen Footer */}
                <div className="space-y-2 pb-2">
                  <div className="flex flex-wrap gap-1">
                    {currentApp.tags.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[9px] font-mono bg-white/5 text-white/70 px-1.5 py-0.5 rounded border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-[10px] text-white/40 text-center font-mono">
                    Touch-interactive Expo simulator
                  </div>
                </div>

              </div>

            </div>

            {/* App Detail Below Frame */}
            <div className="text-center mt-4 max-w-xs space-y-1">
              <div className="text-xs font-bold text-white font-grotesk">{currentApp.tagline}</div>
              <div className="text-[11px] text-white/60">{currentApp.description}</div>
            </div>

          </div>

        </section>

        {/* Venture Sprint Process Section */}
        <section className="space-y-8 pt-12 border-t border-white/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-grotesk tracking-tight">
              The Venture Engineering Stack
            </h2>
            <p className="text-white/60 text-sm mt-1">
              How products transition from wireframes to scalable, store-approved releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-3">
              <div className="text-emerald-400 font-bold">01. WIREFRAME &amp; UX</div>
              <div className="text-sm font-bold text-white font-sans">User Flow Architecture</div>
              <p className="text-white/60 font-sans">
                Figma wireframing, high-contrast user flows, edge-case validation, and micro-interaction definition.
              </p>
            </div>

            <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-3">
              <div className="text-emerald-400 font-bold">02. NATIVE CORE</div>
              <div className="text-sm font-bold text-white font-sans">Offline-First Engine</div>
              <p className="text-white/60 font-sans">
                React Native + Expo core, SQLite persistence, biometric authentication, and battery profiling.
              </p>
            </div>

            <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-3">
              <div className="text-emerald-400 font-bold">03. EDGE ROUTING</div>
              <div className="text-sm font-bold text-white font-sans">Supabase &amp; WebSockets</div>
              <p className="text-white/60 font-sans">
                Serverless Edge Functions, real-time message brokering, payment webhooks, and sub-second data streaming.
              </p>
            </div>

            <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-3">
              <div className="text-emerald-400 font-bold">04. STORE RELEASE</div>
              <div className="text-sm font-bold text-white font-sans">CI/CD &amp; Store Approval</div>
              <p className="text-white/60 font-sans">
                EAS automated pipelines, App Store &amp; Play Store guideline compliance, and Sentry telemetry tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Selected Projects Grid with Device Frames */}
        <section className="space-y-8 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-grotesk tracking-tight">
                Venture Portfolio
              </h2>
              <p className="text-white/60 text-sm mt-1">
                Real mobile and web products shipped to users.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 6).map((p, idx) => (
              <div key={idx} className="p-6 bg-[#161B22] rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {(p.logo || p.icon) && (
                        <img 
                          src={p.logo || p.icon} 
                          alt="" 
                          className="w-6 h-6 rounded-md object-contain bg-white/10 p-0.5 border border-white/10" 
                        />
                      )}
                      <span className="text-xs font-mono text-emerald-400 font-bold">{p.category}</span>
                    </div>
                    <span className="text-xs font-mono text-white/40">{p.year || '2024-2025'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-grotesk">{p.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{p.description}</p>
                </div>

                {p.image && (
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0E1117] my-2">
                    <img src={p.image} alt={p.title} className="w-full h-48 object-cover object-top" />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
                  <div className="flex flex-wrap gap-1">
                    {p.tags?.slice(0, 3).map((t, i) => (
                      <span key={i} className="bg-white/5 text-white/60 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1 font-bold">
                      <span>OPEN</span>
                      <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-mono">
          <div>LEONARD EGBAAIBON · VENTURE PRODUCT LAB</div>
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 hover:underline">{personalInfo.email}</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Variant3ProductLab;
