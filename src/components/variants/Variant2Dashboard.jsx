import React, { useState } from 'react';
import { 
  FiTerminal, FiActivity, FiServer, FiDatabase, FiCpu, 
  FiZap, FiRadio, FiShield, FiCornerDownRight, FiCheck 
} from 'react-icons/fi';

const Variant2Dashboard = () => {
  const [commandInput, setCommandInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'INIT_TELEMETRY: CONNECTED TO PROD_CLUSTER_LAGOS_01',
    'QUERY: SELECT count(*) FROM transactions WHERE created_at > NOW() - INTERVAL 1 HOUR; => 1,420 rows',
    'STATUS: WebSockets active on 1,890 concurrent client sockets',
    'HEALTH_CHECK: SQLite write lock latency avg 3.2ms across mobile nodes'
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    const cmd = commandInput.trim();
    let response = `COMMAND_NOT_FOUND: ${cmd}. Try: status, latency, deploy, clear`;
    if (cmd === 'status') {
      response = 'CLUSTER_STATUS: 100% OPERATIONAL. Hermes engine memory: 42MB. Sentry crash rate: 0.08%.';
    } else if (cmd === 'latency') {
      response = 'P50: 18ms | P90: 45ms | P95: 110ms | P99: 180ms';
    } else if (cmd === 'deploy') {
      response = 'EAS_BUILD: Build #418 queued for App Store & Play Store verification.';
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setCommandInput('');
      return;
    }
    setTerminalLogs(prev => [...prev, `$ ${cmd}`, response]);
    setCommandInput('');
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#D1D5DB] font-mono selection:bg-[#F59E0B] selection:text-black">
      
      {/* Top Banner */}
      <header className="border-b border-[#1F2430] bg-[#0C0E14] px-4 py-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <FiTerminal className="text-[#F59E0B]" size={16} />
          <span className="font-bold text-white">PROD_OBSERVABILITY_CONSOLE // V2.6</span>
        </div>
        <div className="flex items-center gap-3 text-white/50 text-[11px]">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            TELEMETRY_STREAM_SYNCED
          </span>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">

        {/* Top KPI Metrics Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="border border-[#1F2430] bg-[#0D0F17] p-4 space-y-1">
            <div className="text-white/40 flex items-center justify-between">
              <span>ACTIVE_WEBSOCKETS</span>
              <FiRadio className="text-[#F59E0B]" />
            </div>
            <div className="text-2xl font-bold text-white">1,890</div>
            <div className="text-[10px] text-emerald-400">Orderbook realtime feed</div>
          </div>
          <div className="border border-[#1F2430] bg-[#0D0F17] p-4 space-y-1">
            <div className="text-white/40 flex items-center justify-between">
              <span>SQLITE_SYNC_LATENCY</span>
              <FiDatabase className="text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white">24.6ms</div>
            <div className="text-[10px] text-emerald-400">Zero delta loss</div>
          </div>
          <div className="border border-[#1F2430] bg-[#0D0F17] p-4 space-y-1">
            <div className="text-white/40 flex items-center justify-between">
              <span>HERMES_HEAP_SIZE</span>
              <FiCpu className="text-[#F59E0B]" />
            </div>
            <div className="text-2xl font-bold text-white">41.8 MB</div>
            <div className="text-[10px] text-emerald-400">GC cycle optimal</div>
          </div>
          <div className="border border-[#1F2430] bg-[#0D0F17] p-4 space-y-1">
            <div className="text-white/40 flex items-center justify-between">
              <span>CRASH_FREE_RATIO</span>
              <FiShield className="text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400">99.2%</div>
            <div className="text-[10px] text-white/50">Swiftpoint release</div>
          </div>
        </div>

        {/* Two Column Layout: Edge Function Tracing & Terminal Execution Bench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column: Real-time Microservice Tracing */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-[#1F2430] bg-[#0D0F17] p-4 space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-[#1F2430] pb-2 text-white">
                <span className="font-bold text-[#F59E0B]">EDGE_FUNCTION_TRACES</span>
                <span className="text-white/40 text-[10px]">SUPABASE RUNTIME</span>
              </div>

              <div className="space-y-2">
                {[
                  { fn: 'POST /v1/wallet/instant-card-create', duration: '142ms', status: '200 OK', env: 'swiift-prod' },
                  { fn: 'POST /v1/telematics/subrogation-fnol', duration: '68ms', status: '200 OK', env: 'gumshoe-tsaron' },
                  { fn: 'GET /v1/exchange/orderbook-depth', duration: '18ms', status: '200 OK', env: 'blockex-prod' },
                  { fn: 'POST /v1/dispatch/driver-geofence', duration: '46ms', status: '200 OK', env: 'kabu-prod' },
                ].map((trace, ti) => (
                  <div key={ti} className="p-2.5 bg-black/40 border border-white/5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-white">{trace.fn}</div>
                      <div className="text-[10px] text-white/40">{trace.env}</div>
                    </div>
                    <div className="text-right space-y-0.5">
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 border border-emerald-500/20">
                        {trace.status}
                      </span>
                      <div className="text-[10px] text-white/50">{trace.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Node Map */}
            <div className="border border-[#1F2430] bg-[#0D0F17] p-4 space-y-3 text-xs">
              <div className="text-white/50 font-bold uppercase tracking-wider text-[10px]">
                PRODUCTION_TOPOLOGY
              </div>
              <div className="space-y-1.5 text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">[*]</span>
                  <span>CLIENT_LAYER: React Native + Expo (Hermes Bytecode)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">[*]</span>
                  <span>LOCAL_STORAGE: SQLite with offline delta queue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">[*]</span>
                  <span>EDGE_ROUTER: Supabase Functions (Lagos / Frankfurt)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">[*]</span>
                  <span>SETTLEMENT: Crypto rails + Stripe webhook idempotency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Command Prompt */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-[#1F2430] bg-black p-4 space-y-4 text-xs h-full flex flex-col justify-between">
              
              <div className="space-y-3 overflow-y-auto max-h-[380px]">
                <div className="text-white/40 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>INTERACTIVE_DEBUGGER [NODE_REPL]</span>
                  <span className="text-[10px] text-white/30">TYPE 'status' OR 'latency'</span>
                </div>

                {terminalLogs.map((log, li) => (
                  <div key={li} className={log.startsWith('$') ? 'text-[#F59E0B] font-bold' : 'text-white/80'}>
                    {log}
                  </div>
                ))}
              </div>

              {/* Command Input Form */}
              <form onSubmit={handleCommand} className="pt-3 border-t border-white/10 flex items-center gap-2">
                <span className="text-[#F59E0B] font-bold">&gt;</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder="type a command: status, latency, deploy, clear..."
                  className="w-full bg-transparent text-white focus:outline-none placeholder-white/30 text-xs font-mono"
                />
              </form>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Variant2Dashboard;
