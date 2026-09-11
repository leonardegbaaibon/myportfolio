import React, { useState } from 'react';
import { 
  FiSmartphone, FiTrendingUp, FiCheckCircle, FiToggleRight, 
  FiToggleLeft, FiDownloadCloud, FiShield, FiUsers, FiStar 
} from 'react-icons/fi';

const Variant3Dashboard = () => {
  const [featureFlags, setFeatureFlags] = useState({
    instant_virtual_cards: true,
    biometric_payout_gate: true,
    offline_osm_geocoding: true,
    multi_currency_funding_v2: true,
    experimental_wasm_sim: false
  });

  const toggleFlag = (key) => {
    setFeatureFlags(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#0E1117] text-[#E6EDF3] font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Dashboard Top Header */}
      <header className="border-b border-white/10 bg-[#161B22]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 text-black font-bold flex items-center justify-center font-mono text-sm">
            PL
          </div>
          <div>
            <h1 className="text-sm font-bold text-white font-grotesk tracking-tight">
              Product Growth & Store Operations Command
            </h1>
            <p className="text-xs text-white/50 font-mono">
              App Store & Play Store metrics for shipped applications
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            EAS Remote Build Pipeline: Active
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 sm:p-8 space-y-8">
        
        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-2">
            <div className="text-xs font-mono text-white/50">App Store Rating</div>
            <div className="text-2xl font-bold text-white font-display flex items-center gap-2">
              <span>4.8</span>
              <FiStar className="text-amber-400 fill-amber-400" size={18} />
            </div>
            <div className="text-xs text-emerald-400 font-mono">Based on 1,200+ user reviews</div>
          </div>
          <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-2">
            <div className="text-xs font-mono text-white/50">Onboarding Retention</div>
            <div className="text-2xl font-bold text-white font-display">+25% Lift</div>
            <div className="text-xs text-emerald-400 font-mono">Post-redesign flow</div>
          </div>
          <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-2">
            <div className="text-xs font-mono text-white/50">Production Stability</div>
            <div className="text-2xl font-bold text-white font-display">99.2%</div>
            <div className="text-xs text-emerald-400 font-mono">Crash-free session rate</div>
          </div>
          <div className="p-5 bg-[#161B22] rounded-xl border border-white/10 space-y-2">
            <div className="text-xs font-mono text-white/50">Daily Volume</div>
            <div className="text-2xl font-bold text-white font-display">$2.4K+</div>
            <div className="text-xs text-emerald-400 font-mono">Settled via edge rails</div>
          </div>
        </div>

        {/* Feature Flag Remote Config Bench & App Store Releases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: App Store & Play Store Release Queue */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-[#161B22] rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold text-white font-grotesk">Store Release Trackers</h3>
                <span className="text-xs font-mono text-white/40">EAS AUTO-DEPLOY</span>
              </div>

              <div className="space-y-3">
                {[
                  { app: 'Swiift Crypto Companion', target: 'iOS App Store', version: 'v2.4.1 (Build 49)', status: 'Approved & Live', statusColor: 'emerald' },
                  { app: 'Swiift Crypto Companion', target: 'Google Play Store', version: 'v2.4.1 (Build 49)', status: 'Approved & Live', statusColor: 'emerald' },
                  { app: 'Kabu Driver Dispatch', target: 'Android Enterprise APK', version: 'v3.1.2 (Build 18)', status: 'Internal Pilot Fleet', statusColor: 'amber' },
                  { app: 'Talstrike Mobile Recruiter', target: 'TestFlight Beta', version: 'v1.2.0 (Build 8)', status: 'Ready for Review', statusColor: 'blue' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-[#0E1117] rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{item.app}</div>
                      <div className="text-xs text-white/50 font-mono">{item.target} · {item.version}</div>
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      item.statusColor === 'emerald'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : item.statusColor === 'amber'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Feature Flag Remote Switcher */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-[#161B22] rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white font-grotesk">Live Feature Flags</h3>
                  <p className="text-xs text-white/50 font-mono">Edge-synchronized dynamic configurations</p>
                </div>
                <span className="text-xs font-mono text-emerald-400">SUPABASE REALTIME</span>
              </div>

              <div className="space-y-3">
                {Object.entries(featureFlags).map(([key, isEnabled]) => (
                  <div key={key} className="p-3 bg-[#0E1117] rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-white font-bold">{key}</div>
                      <div className="text-[11px] text-white/50 font-mono">
                        {isEnabled ? 'Serving 100% active traffic' : 'Disabled / Internal QA only'}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFlag(key)}
                      className={`text-2xl transition-colors ${isEnabled ? 'text-emerald-400' : 'text-white/30'}`}
                    >
                      {isEnabled ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Variant3Dashboard;
