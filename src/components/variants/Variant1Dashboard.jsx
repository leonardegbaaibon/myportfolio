import React, { useState } from 'react';
import { 
  FiCheckCircle, FiAlertCircle, FiActivity, FiGitCommit, FiTerminal, 
  FiCpu, FiSmartphone, FiDatabase, FiLayers, FiRefreshCw, FiExternalLink 
} from 'react-icons/fi';
import { heroStats } from '../../Utils/data';

const Variant1Dashboard = () => {
  const [selectedService, setSelectedService] = useState('swiift');

  const deployments = [
    {
      id: 'swiift',
      name: 'Swiift Mobile App (iOS / Android)',
      version: 'v2.4.1-prod',
      status: 'Healthy',
      crashFree: '99.2%',
      bundleSize: '4.8 MB (Hermes Bytecode)',
      p95Latency: '180ms',
      lastDeployed: '14 mins ago',
      environment: 'Production (App Store & Play Store)',
      commit: 'feat(wallet): virtual debit card instant provisioning flow (a9b2c34)',
      telemetry: {
        activeUsers: '14,280',
        tps: '48 req/s',
        sqliteSyncLatency: '24ms',
        unhandledExceptions: 0
      }
    },
    {
      id: 'blockex',
      name: 'BlockEx Digital Asset Exchange',
      version: 'v1.9.0-main',
      status: 'Healthy',
      crashFree: '99.9%',
      bundleSize: '78 kB (First Load JS)',
      p95Latency: '42ms',
      lastDeployed: '2 hours ago',
      environment: 'Production (Vercel Edge & Supabase)',
      commit: 'perf(ws): orderbook depth delta compression pipeline (7f8e12d)',
      telemetry: {
        activeUsers: '3,840',
        tps: '112 req/s',
        wsConnections: '1,890',
        unhandledExceptions: 0
      }
    },
    {
      id: 'kabu',
      name: 'Kabu Driver Dispatch & Logistics',
      version: 'v3.1.2-rc',
      status: 'Healthy',
      crashFree: '99.1%',
      bundleSize: '6.2 MB (Mapbox Native SDK)',
      p95Latency: '110ms',
      lastDeployed: '1 day ago',
      environment: 'Staging & Pilot Fleet',
      commit: 'fix(gps): battery-optimized background geofence ping (4e3c90a)',
      telemetry: {
        activeUsers: '820 drivers',
        tps: '64 req/s',
        gpsAccuracy: '< 4.5m',
        unhandledExceptions: 0
      }
    },
    {
      id: 'gumshoe',
      name: 'Gumshoe Insurtech Telematics (Tsaron)',
      version: 'v2.1.0-prod',
      status: 'Healthy',
      crashFree: '99.4%',
      bundleSize: '3.9 MB (DSP Kotlin Core)',
      p95Latency: '92ms',
      lastDeployed: '3 hours ago',
      environment: 'Production (Telematics & Claims Gateway)',
      commit: 'feat(claims): automated FNOL subrogation accident reconstruction ledger (c82f91a)',
      telemetry: {
        activeUsers: '2,140 vehicles',
        tps: '96 req/s',
        distractionAccuracy: '98.4%',
        unhandledExceptions: 0
      }
    }
  ];

  const activeDeployment = deployments.find(d => d.id === selectedService) || deployments[0];

  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#E8E8EC] font-sans selection:bg-amber-400 selection:text-black">
      
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#111318]/90 backdrop-blur-md px-6 py-4 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-black font-black flex items-center justify-center font-display text-sm">
            ★
          </div>
          <div>
            <h1 className="text-sm font-bold text-white font-syne tracking-tight">
              Engineering Workstation & Release Telemetry
            </h1>
            <p className="text-xs text-white/50 font-mono">
              Real-time production health across Leonard Egbaaibon's shipped platforms
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            All 3 Production Clusters Nominal
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-white/10 bg-[#12141A] font-mono space-y-1">
            <div className="text-xs text-white/50">Crash-Free Stability</div>
            <div className="text-2xl font-bold text-white font-display">99.2%</div>
            <div className="text-[11px] text-emerald-400">Zero critical regressions</div>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-[#12141A] font-mono space-y-1">
            <div className="text-xs text-white/50">Monthly Volume</div>
            <div className="text-2xl font-bold text-white font-display">$70,000+</div>
            <div className="text-[11px] text-amber-400">BlockEx order settlement</div>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-[#12141A] font-mono space-y-1">
            <div className="text-xs text-white/50">P95 Response Time</div>
            <div className="text-2xl font-bold text-white font-display">&lt; 180ms</div>
            <div className="text-[11px] text-emerald-400">Edge Function routing</div>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-[#12141A] font-mono space-y-1">
            <div className="text-xs text-white/50">Deploy Pipeline</div>
            <div className="text-2xl font-bold text-white font-display">Passing</div>
            <div className="text-[11px] text-emerald-400">EAS & GitHub Actions</div>
          </div>
        </div>

        {/* Workstation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Service Selector */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-mono uppercase text-white/50 tracking-wider">
              Active Production Deployments
            </h2>
            <div className="space-y-2">
              {deployments.map((dep) => {
                const isSelected = selectedService === dep.id;
                return (
                  <button
                    key={dep.id}
                    onClick={() => setSelectedService(dep.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#181B24] border-amber-400/50 shadow-md'
                        : 'bg-[#12141A] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white font-syne">{dep.name}</span>
                      <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                        {dep.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-white/50">
                      <span>{dep.version}</span>
                      <span>{dep.lastDeployed}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Architecture Decision Records (ADRs) */}
            <div className="p-5 rounded-xl border border-white/10 bg-[#12141A] space-y-3 font-mono text-xs">
              <div className="text-white/50 uppercase tracking-wider text-[11px]">
                Active Architecture Decisions
              </div>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">#ADR-04</span>
                  <span>Adopted WatermelonDB + SQLite for offline-first wallet persistence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">#ADR-03</span>
                  <span>Migrated WebSocket orderbook delta calculation to Supabase Edge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">#ADR-02</span>
                  <span>Hermes bytecode pre-compilation enabled across all Android builds.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Deep Inspection Panel */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-[#12141A] space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">
                    {activeDeployment.name}
                  </h3>
                  <div className="text-xs font-mono text-white/50 mt-0.5">
                    Target: {activeDeployment.environment} · Current: {activeDeployment.version}
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/70">
                    P95: {activeDeployment.p95Latency}
                  </span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                  <div className="text-[11px] text-white/50">Crash-Free Rate</div>
                  <div className="text-lg font-bold text-emerald-400">{activeDeployment.crashFree}</div>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                  <div className="text-[11px] text-white/50">Bundle Footprint</div>
                  <div className="text-lg font-bold text-white">{activeDeployment.bundleSize}</div>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                  <div className="text-[11px] text-white/50">Throughput</div>
                  <div className="text-lg font-bold text-amber-400">{activeDeployment.telemetry.tps}</div>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                  <div className="text-[11px] text-white/50">Fatal Sentry Logs</div>
                  <div className="text-lg font-bold text-emerald-400">0 in 72h</div>
                </div>
              </div>

              {/* Latest Commit Detail */}
              <div className="p-4 bg-black/50 rounded-xl border border-white/10 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <FiGitCommit />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Latest Deployed Commit</span>
                </div>
                <p className="text-white/80 font-mono">
                  {activeDeployment.commit}
                </p>
              </div>

              {/* Simulated Live Log Feed */}
              <div className="p-4 bg-black rounded-xl border border-white/10 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-white/40 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FiTerminal />
                    <span>Real-time Stream [STDOUT]</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">CONNECTED</span>
                </div>
                <div className="space-y-1 text-white/70 text-[11px] overflow-x-auto">
                  <div>[2026-09-11 11:42:01] INFO  edge_worker: Request routed to Lagos edge pop in 18ms.</div>
                  <div>[2026-09-11 11:42:04] INFO  sqlite_sync: Synced 12 pending offline records without conflict.</div>
                  <div>[2026-09-11 11:42:09] INFO  auth_gateway: Biometric token validated successfully.</div>
                  <div>[2026-09-11 11:42:15] DEBUG hermes_gc: Memory footprint stable at 42.1MB.</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Variant1Dashboard;
