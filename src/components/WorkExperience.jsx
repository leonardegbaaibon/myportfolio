import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { workExperience } from '../Utils/data';
import { 
  FiBriefcase, FiCalendar, FiMapPin, FiExternalLink, 
  FiCheckCircle, FiArrowUpRight, FiLayers, FiCode, FiActivity,
  FiPlay, FiShield, FiTrendingUp, FiCreditCard, FiClock, FiCheck, FiZap
} from 'react-icons/fi';
import { 
  SiReact, SiVuedotjs, SiKotlin, SiTypescript, SiJavascript, 
  SiTailwindcss, SiRedux, SiExpo, SiSupabase, SiFirebase
} from 'react-icons/si';

const getTechIcon = (tech) => {
  const map = {
    'React': SiReact,
    'React.js': SiReact,
    'React Native': SiReact,
    'Vue.js': SiVuedotjs,
    'TypeScript': SiTypescript,
    'JavaScript': SiJavascript,
    'Kotlin': SiKotlin,
    'Tailwind CSS': SiTailwindcss,
    'TailwindCSS': SiTailwindcss,
    'Redux': SiRedux,
    'Redux Toolkit': SiRedux,
    'Expo': SiExpo,
    'Supabase': SiSupabase,
    'Firebase': SiFirebase,
  };
  return map[tech] || FiCode;
};

/* --- Custom Landing Page Visual Widgets --- */

// 1. Swiift Landing Preview Widget
const SwiiftLandingWidget = ({ isDarkMode }) => (
  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#18132B] via-[#0F111D] to-[#0A0C16] border border-violet-500/30 text-white shadow-xl overflow-hidden flex flex-col justify-between h-full">
    <div className="flex items-center justify-between text-[11px] text-violet-300 pb-2 border-b border-violet-500/20">
      <div className="flex items-center gap-2 font-bold">
        <img src="/Image/company/swiift-icon.png" alt="Swiift" className="w-5 h-5 object-contain rounded" />
        <span className="text-[10px] text-violet-300">EVERYDAY CRYPTO BUDDY</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-200 text-[10px] font-mono">99.2% Uptime</span>
    </div>

    {/* Interactive Wallet UI Card */}
    <div className="my-2.5 p-3.5 rounded-xl bg-gradient-to-r from-violet-950/80 to-purple-900/60 border border-violet-500/30 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] text-violet-300/80 uppercase font-mono tracking-wider">Multi-Currency Balance</span>
          <div className="text-xl font-black text-white font-mono">$4,289.50 <span className="text-xs font-normal text-violet-300">USD</span></div>
        </div>
        <div className="w-8 h-6 rounded bg-violet-400/20 border border-violet-400/40 flex items-center justify-center text-[9px] font-bold text-violet-200">
          VIRTUAL
        </div>
      </div>

      {/* Action Pills */}
      <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px] font-semibold text-center">
        <div className="py-1 rounded bg-violet-500/30 hover:bg-violet-500/50 text-white border border-violet-400/30 transition-colors">
          + Buy
        </div>
        <div className="py-1 rounded bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">
          → Send
        </div>
        <div className="py-1 rounded bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">
          💳 Card
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between text-[10px] text-violet-200/80 font-mono pt-1">
      <span>⚡ &lt;2s Settlement</span>
      <span>🔒 Biometric Auth</span>
    </div>
  </div>
);

// 2. Talstrike Landing Preview Widget
const TalstrikeLandingWidget = ({ isDarkMode }) => (
  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#0A261D] via-[#091C28] to-[#07131F] border border-emerald-500/30 text-white shadow-xl overflow-hidden flex flex-col justify-between h-full">
    <div className="flex items-center justify-between text-[11px] text-emerald-300 pb-2 border-b border-emerald-500/20">
      <div className="flex items-center gap-1.5 font-extrabold uppercase tracking-wider text-emerald-400">
        <img src="/Image/company/talstrike-logo.png" alt="Talstrike" className="h-4 w-auto object-contain" />
        <span>Athletic Video Hub</span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 text-[10px]">Global Scouting</span>
    </div>

    {/* Interactive Scouting Profile Card */}
    <div className="my-2.5 p-3 rounded-xl bg-black/40 border border-emerald-500/30 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-bold text-emerald-300 text-xs">
            TS
          </div>
          <div>
            <div className="text-xs font-bold text-white">Player Audition Reel</div>
            <div className="text-[10px] text-emerald-300 font-mono">1080p · 60 FPS Telemetry</div>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
          94% ATS
        </span>
      </div>

      <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[10px] text-gray-300">
        <span>Scout Message Pipeline</span>
        <span className="text-emerald-400 font-semibold">Active</span>
      </div>
    </div>

    <p className="text-[11px] text-gray-300 leading-relaxed">
      High-performance video streaming architecture connecting athletes with scout discovery networks.
    </p>
  </div>
);

// 3. NidiDrive Landing Preview Widget
const NidiDriveLandingWidget = ({ isDarkMode }) => (
  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#2B1115] via-[#1B1124] to-[#100C19] border border-[#F06548]/40 text-white shadow-xl overflow-hidden flex flex-col justify-between h-full">
    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#F06548]/20">
      <div className="flex items-center gap-1.5 font-bold text-[#FF8C73]">
        <img src="/Image/nidi.svg" alt="Nidi" className="w-4 h-4 rounded" />
        Nidi Mobility Marketplace
      </div>
      <span className="px-2 py-0.5 rounded-full bg-[#F06548]/20 text-[#FF8C73] text-[10px] font-bold">Lagos Live</span>
    </div>

    <div className="my-3 p-3 rounded-xl bg-black/40 border border-[#F06548]/30 space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-300">Driver Dispatch</span>
        <span className="text-[#F06548] font-bold text-[11px]">Sub-second GPS</span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#F06548] to-amber-400 w-3/4 rounded-full" />
      </div>
      <div className="flex items-center justify-between text-[10px] text-gray-400">
        <span>-40% Crash Rate</span>
        <span>-35% App Load Time</span>
      </div>
    </div>

    {/* Buttons matching real landing page */}
    <div className="flex gap-2">
      <div className="flex-1 py-1.5 px-2 rounded-lg bg-[#F06548] text-white text-center text-[10px] font-bold flex items-center justify-center gap-1 shadow">
        <span>Download Nidi App</span>
      </div>
      <div className="flex-1 py-1.5 px-2 rounded-lg bg-[#F06548]/80 text-white text-center text-[10px] font-bold flex items-center justify-center gap-1 shadow">
        <span>Car Owner App</span>
      </div>
    </div>
  </div>
);

// 4. Glamorgram Landing Preview Widget
const GlamorgramLandingWidget = ({ isDarkMode }) => (
  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#2A1515] via-[#1E1216] to-[#120B0F] border border-[#E07A70]/40 text-white shadow-xl overflow-hidden flex flex-col justify-between h-full">
    <div className="flex items-center justify-between text-[11px] text-[#F8D7D0] pb-2 border-b border-[#E07A70]/20">
      <div className="flex items-center gap-1.5 font-serif italic font-bold text-[#F8D7D0]">
        <img src="/Image/company/glamorgram-icon.png" alt="Glamorgram" className="h-4 w-auto object-contain rounded" />
        <span>Modern Beauty Automation</span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-[#E07A70]/20 text-[#F8D7D0] text-[10px]">24/7 Booking</span>
    </div>

    {/* Flow Nodes matching landing page */}
    <div className="my-2.5 space-y-2">
      <div className="p-2.5 rounded-xl bg-white/10 border border-[#E07A70]/30 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <img src="/Image/company/glamorgram-icon.png" alt="Client" className="w-7 h-7 rounded-full object-cover border border-[#E07A70]/40" />
          <div>
            <p className="font-bold text-white text-[11px]">Sarah Mitchell</p>
            <p className="text-[10px] text-[#F8D7D0]">Classic Lashes • Jun 12</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-bold">Confirmed</span>
      </div>

      <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 text-gray-300">
          <FiCheck className="text-emerald-400" />
          <span>Payment Received</span>
        </div>
        <span className="font-mono font-bold text-emerald-400">€80.00</span>
      </div>
    </div>

    <p className="text-[11px] text-[#F8D7D0]/80 leading-relaxed">
      Seamless appointment booking, automated client reminders, and integrated mobile checkout.
    </p>
  </div>
);

// 5. BlockEx Landing Preview Widget
const BlockExLandingWidget = ({ isDarkMode }) => (
  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#082033] via-[#091526] to-[#070D18] border border-cyan-400/40 text-white shadow-xl overflow-hidden flex flex-col justify-between h-full">
    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-cyan-500/20">
      <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
        <img src="/Image/company/blockex-logo.png" alt="BlockEx" className="h-4 w-auto object-contain rounded" />
        <span>BlockEX Trading Hub</span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">$70K+/mo</span>
    </div>

    <div className="my-2.5 p-3 rounded-xl bg-black/40 border border-cyan-500/30 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gray-300">Multi-Asset Custody</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">99.9% Uptime</span>
      </div>
      <div className="text-lg font-bold text-cyan-400 font-mono tracking-wide">
        $247.6 USD <span className="text-[10px] text-gray-400 font-normal">/ Naira Rail</span>
      </div>
      <div className="text-[10px] text-gray-400 flex items-center justify-between pt-1 border-t border-white/10">
        <span>CryptoLens AI Active</span>
        <span>Supabase Edge Functions</span>
      </div>
    </div>

    <p className="text-[11px] text-gray-300 leading-relaxed">
      B2B blockchain remittance exchange, virtual card generation, and automated multi-currency orders.
    </p>
  </div>
);

// 6. Baye Capital Landing Preview Widget
const BayeCapitalLandingWidget = ({ isDarkMode }) => (
  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#241E12] via-[#16141D] to-[#080A12] border border-amber-400/40 text-white shadow-xl overflow-hidden flex flex-col justify-between h-full">
    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-amber-500/20">
      <div className="flex items-center gap-1.5 font-serif tracking-wider text-[#E5C07B] font-bold">
        <img src="/Image/company/baye.png" alt="Baye Capital" className="h-4 w-auto object-contain rounded" />
        <span>VENTURE STUDIO</span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px]">Est. 2013</span>
    </div>

    {/* Proptech Workflow Card */}
    <div className="my-2.5 p-3 rounded-xl bg-black/40 border border-amber-500/30 space-y-2 text-xs">
      <div className="flex items-center justify-between">
        <span className="text-amber-200 font-bold">Buildsure Proptech</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Lease Engine</span>
      </div>
      <div className="space-y-1 text-[10px] text-white/80 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400">✓</span>
          <span>Automated Contract Generation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400">✓</span>
          <span>Interactive Property Booking</span>
        </div>
      </div>
    </div>

    <p className="text-[11px] text-amber-200/80 leading-relaxed">
      African-focused venture studio building scalable mobile & web portfolio ventures.
    </p>
  </div>
);

// 7. Tsaron Technologies / Gumshoe Insurtech Preview Widget
const TsaronLandingWidget = ({ isDarkMode }) => (
  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#081F33] via-[#091626] to-[#060D1A] border border-sky-500/40 text-white shadow-xl overflow-hidden flex flex-col justify-between h-full">
    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-sky-500/20">
      <div className="flex items-center gap-2 text-sky-300 font-bold">
        <img src="/Image/gumshoe.png" alt="Gumshoe" className="w-5 h-5 object-contain rounded" />
        <span>GUMSHOE INSURTECH</span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-mono">Acoustic AI</span>
    </div>

    {/* Insurtech Telematics Metrics */}
    <div className="my-2.5 p-3 rounded-xl bg-black/40 border border-sky-500/30 space-y-2 text-xs">
      <div className="flex items-center justify-between">
        <span className="text-gray-300">Driver Phone Distraction</span>
        <span className="text-emerald-400 font-mono font-bold">-60% False Positives</span>
      </div>
      <div className="space-y-1 text-[10px] text-white/80 font-mono">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Claims Subrogation Ledger:</span>
          <span className="text-sky-300">Verified</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Crash Impact DSP:</span>
          <span className="text-emerald-400">Real-time CAN-bus</span>
        </div>
      </div>
    </div>

    <p className="text-[11px] text-gray-300 leading-relaxed">
      Insurtech platform for accident reconstruction, acoustic in-cabin distraction detection, and subrogation claim processing.
    </p>
  </div>
);

// Generic Fallback Widget
const GenericLandingWidget = ({ experience, brandColor, isDarkMode }) => (
  <div 
    className="rounded-2xl p-4 shadow-xl border flex flex-col justify-between h-full"
    style={{
      backgroundColor: isDarkMode ? '#111827' : '#F9FAFB',
      borderColor: `${brandColor}40`
    }}
  >
    <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-200 dark:border-white/10">
      <span className="font-bold text-text-light dark:text-text-dark">{experience.company} Deliverable</span>
      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
        Production App
      </span>
    </div>

    {experience.projects && experience.projects[0]?.image && (
      <div className="my-2.5 aspect-video rounded-xl overflow-hidden relative">
        <img src={experience.projects[0].image} alt={experience.company} className="w-full h-full object-cover" />
      </div>
    )}

    <p className="text-xs text-text-mutedLight dark:text-text-mutedDark leading-relaxed">
      {experience.projects?.[0]?.description || experience.tagline}
    </p>
  </div>
);

// Helper to select the exact visual widget matching each company's landing page
const getCompanyLandingWidget = (company, experience, brandColor, isDarkMode) => {
  switch (company.toLowerCase()) {
    case 'swiift':
      return <SwiiftLandingWidget isDarkMode={isDarkMode} />;
    case 'talstrike':
      return <TalstrikeLandingWidget isDarkMode={isDarkMode} />;
    case 'nididrive':
      return <NidiDriveLandingWidget isDarkMode={isDarkMode} />;
    case 'glamorgram':
      return <GlamorgramLandingWidget isDarkMode={isDarkMode} />;
    case 'blockspace technologies':
    case 'blockex':
      return <BlockExLandingWidget isDarkMode={isDarkMode} />;
    case 'baye capital':
      return <BayeCapitalLandingWidget isDarkMode={isDarkMode} />;
    case 'tsaron technologies':
    case 'tsaron':
      return <TsaronLandingWidget isDarkMode={isDarkMode} />;
    default:
      return <GenericLandingWidget experience={experience} brandColor={brandColor} isDarkMode={isDarkMode} />;
  }
};

/* --- The Stacking Card Component --- */
const ExperienceStackCard = ({ experience, index, isDarkMode }) => {
  const brandColor = experience.brandColor || '#3B82F6';
  const brandAccent = experience.brandAccent || brandColor;

  return (
    <div
      style={{
        top: `calc(85px + ${Math.min(index * 16, 160)}px)`,
        zIndex: index + 10,
        willChange: 'transform',
      }}
      className="sticky mb-12 sm:mb-16 last:mb-0"
    >
      <div
        style={{
          borderTop: `2.5px solid ${brandColor}`,
          boxShadow: isDarkMode 
            ? `0 24px 60px -15px rgba(0,0,0,0.85), 0 0 35px -12px ${brandColor}35`
            : `0 20px 45px -10px rgba(0,0,0,0.12), 0 0 25px -10px ${brandColor}25`
        }}
        className={`relative overflow-hidden p-6 sm:p-8 lg:p-10 rounded-3xl transition-shadow duration-300 ${
          isDarkMode 
            ? 'bg-[#0c111e]/98 border border-white/10' 
            : 'bg-white/98 border border-gray-200/90'
        } backdrop-blur-2xl`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: brandColor }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ backgroundColor: brandAccent }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Brand Hero Presentation, Role & Achievements (7 cols on lg, 8 on xl) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between space-y-5">
            
            {/* Landing Page Top Bar / Brand Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  {/* Brand Logo Avatar */}
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center p-2.5 shrink-0 shadow-lg"
                    style={{
                      backgroundColor: '#ffffff',
                      border: `2px solid ${brandColor}80`,
                      boxShadow: `0 4px 20px ${brandColor}25`,
                    }}
                  >
                    {experience.logo ? (
                      <img 
                        src={experience.logo} 
                        alt={experience.company} 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : (
                      <div 
                        className="w-full h-full rounded-xl flex items-center justify-center font-black text-lg text-white shadow-inner tracking-wider"
                        style={{ 
                          background: `linear-gradient(135deg, ${brandColor}, ${brandAccent || brandColor})` 
                        }}
                      >
                        {experience.initials || experience.company.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Company Name & Role */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span 
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md font-bold"
                        style={{
                          backgroundColor: `${brandColor}20`,
                          color: brandColor,
                          border: `1px solid ${brandColor}40`
                        }}
                      >
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-text-light dark:text-text-dark tracking-tight">
                        {experience.company}
                      </h3>
                      
                      {/* Employment Type Badge */}
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold ${
                        experience.type === 'Full-time'
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          : experience.type === 'Part-time'
                            ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                            : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      }`}>
                        {experience.type}
                      </span>
                    </div>

                    <p 
                      className="text-base sm:text-lg font-bold mt-0.5"
                      style={{ color: brandColor }}
                    >
                      {experience.position}
                    </p>
                  </div>
                </div>

                {/* Date & Location Pills */}
                <div className="flex flex-row sm:flex-col sm:items-end gap-1.5 text-xs font-semibold text-text-mutedLight dark:text-text-mutedDark shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    <FiCalendar style={{ color: brandColor }} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    <FiMapPin style={{ color: brandColor }} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Landing Page Headline & Tagline Banner */}
              <div 
                className="p-4 rounded-2xl transition-all mb-4"
                style={{
                  backgroundColor: isDarkMode ? `${brandColor}12` : `${brandColor}0a`,
                  borderLeft: `4px solid ${brandColor}`,
                }}
              >
                {experience.headline && (
                  <p className="text-sm sm:text-base font-black tracking-tight mb-1 text-text-light dark:text-text-dark">
                    {experience.headline}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-text-mutedLight dark:text-text-mutedDark leading-relaxed">
                  {experience.tagline}
                </p>
              </div>

              {/* Key Engineering Impact Achievements */}
              <div className="space-y-2.5">
                {experience.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-text-light dark:text-text-dark/95">
                    <FiCheckCircle 
                      className="text-base shrink-0 mt-1" 
                      style={{ color: brandColor }} 
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Visit Official Site Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-white/10 mt-auto">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold text-text-mutedLight dark:text-text-mutedDark uppercase tracking-wider mr-1">
                  Stack:
                </span>
                {experience.technologies.map((tech) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold ${
                        isDarkMode 
                          ? 'bg-surface-darkElevated text-gray-200 border border-white/10' 
                          : 'bg-gray-100 text-gray-800 border border-gray-200/80'
                      }`}
                    >
                      <Icon className="text-xs" style={{ color: brandColor }} />
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>

              {experience.website && (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: `${brandColor}20`,
                    color: brandColor,
                    borderColor: `${brandColor}50`
                  }}
                  className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full font-bold border transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <span>Explore {experience.company}</span>
                  <FiArrowUpRight className="text-sm" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Customized Landing Page Interactive Showcase Widget (5 cols on lg, 4 on xl) */}
          <div className="lg:col-span-5 xl:col-span-4 w-full flex flex-col">
            <div className="space-y-2 h-full flex flex-col">
              <div className="text-xs font-bold uppercase tracking-wider text-text-mutedLight dark:text-text-mutedDark flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <FiLayers style={{ color: brandColor }} /> Landing UI Showcase
                </span>
                <span 
                  className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                  style={{
                    backgroundColor: `${brandColor}20`,
                    color: brandColor
                  }}
                >
                  Production Deliverable
                </span>
              </div>

              {/* Render Company Specific Landing Page Widget */}
              <div className="flex-1 flex flex-col">
                {getCompanyLandingWidget(experience.company, experience, brandColor, isDarkMode)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="experience" className="py-24 relative bg-transparent overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 shadow-sm">
            <FiBriefcase className="text-sm" /> Career Trajectory
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Professional Experience
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Scroll down to explore production deliverables and engineering roles stacked seamlessly in sequence.
          </p>

          {/* Animated Header Energy Beam Line */}
          <div className="relative w-48 sm:w-64 h-1 mx-auto mt-6 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10">
            <motion.div
              className="absolute inset-y-0 w-24 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              animate={{
                x: [-100, 300],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Stacking Container with Left Animated Glowing Line Spine */}
        <div className="relative pb-24 flex items-start">
          
          {/* Glowing Animated Connector Spine (Visible on md and larger screens) */}
          <div className="hidden lg:flex flex-col items-center mr-8 sticky top-28 h-[600px] shrink-0 select-none pointer-events-none">
            {/* Top Node Indicator */}
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <FiZap className="text-blue-400 text-xs animate-pulse" />
            </div>

            {/* Glowing SVG Spine with Flowing Laser Particles */}
            <div className="relative w-6 h-full flex items-center justify-center">
              <svg className="w-6 h-full" viewBox="0 0 24 500" fill="none">
                <defs>
                  <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="35%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F06548" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="spineGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Dashed background rail */}
                <line 
                  x1="12" y1="0" x2="12" y2="500" 
                  stroke={isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                />

                {/* Vibrant glowing core line */}
                <line 
                  x1="12" y1="0" x2="12" y2="500" 
                  stroke="url(#spineGradient)" 
                  strokeWidth="2.5" 
                  filter="url(#spineGlow)" 
                />

                {/* Traveling Energy Laser Pulse 1 */}
                <circle r="4" fill="#60A5FA" filter="url(#spineGlow)">
                  <animateMotion
                    path="M 12 0 L 12 500"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Traveling Energy Laser Pulse 2 */}
                <circle r="3.5" fill="#C084FC" filter="url(#spineGlow)">
                  <animateMotion
                    path="M 12 0 L 12 500"
                    dur="4.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>

            {/* Bottom Node */}
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
          </div>

          {/* Sticky Stacking Cards */}
          <div className="flex-1 w-full min-w-0">
            {workExperience.map((experience, index) => (
              <ExperienceStackCard
                key={experience.company + index}
                experience={experience}
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;