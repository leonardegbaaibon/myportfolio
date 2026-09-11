import React from 'react';
import { FiLayout, FiActivity, FiLayers, FiTerminal, FiSmartphone, FiBookOpen } from 'react-icons/fi';

export const VARIANTS = [
  {
    id: 'editorial',
    name: '01. Editorial Engineer',
    tag: 'Seyi Inspo',
    desc: 'High craft, Swiss typography, star branding, deep case studies',
    icon: FiLayout,
    theme: 'Warm Monochrome & Ink'
  },
  {
    id: 'terminal',
    name: '02. Systems Architect',
    tag: 'Impeccable Brutalist',
    desc: 'High-density telemetry, monospace logs, verified system benchmarks',
    icon: FiTerminal,
    theme: 'Deep Obsidian & Amber'
  },
  {
    id: 'productlab',
    name: '03. Venture Studio',
    tag: 'Tactile Product Craft',
    desc: 'Interactive mobile simulator, store deployment pipelines, live app previews',
    icon: FiSmartphone,
    theme: 'Tactile Slate & Emerald'
  },
  {
    id: 'artisan',
    name: '04. Artisan Ledger',
    tag: 'Deep Narrative Ledger',
    desc: 'Bespoke line rules, architectural journal, zero card containers',
    icon: FiBookOpen,
    theme: 'Minimalist Charcoal & Bone'
  },
];

const VariantSwitcher = ({ 
  currentVariant, 
  onSelectVariant, 
  viewMode, // 'landing' | 'dashboard'
  onToggleViewMode
}) => {
  return (
    <aside 
      aria-label="Design Variant Controls"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[96vw] sm:max-w-max"
    >
      <div className="bg-[#0f1117]/95 text-white/90 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-2xl px-3 py-2 sm:px-4 sm:py-2.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
        
        {/* Mode Selector (Landing vs Dashboard) */}
        <div className="flex items-center bg-white/10 rounded-xl p-0.5 border border-white/10">
          <button
            type="button"
            onClick={() => onToggleViewMode('landing')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'landing'
                ? 'bg-white text-black shadow-sm font-semibold'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <FiLayers size={13} />
            <span>Landing</span>
          </button>
          <button
            type="button"
            onClick={() => onToggleViewMode('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'dashboard'
                ? 'bg-emerald-500 text-black shadow-sm font-semibold'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <FiActivity size={13} />
            <span>Dashboard</span>
          </button>
        </div>

        <div className="h-4 w-px bg-white/15 hidden sm:block" />

        {/* Variant Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5 max-w-full">
          {VARIANTS.map((v) => {
            const Icon = v.icon;
            const isSelected = currentVariant === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => onSelectVariant(v.id)}
                title={`${v.name}: ${v.desc}`}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-white/20 text-white border border-white/30 shadow-inner'
                    : 'text-white/60 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                <Icon size={13} className={isSelected ? 'text-amber-400' : 'text-white/50'} />
                <span className="font-medium hidden md:inline">{v.name}</span>
                <span className="font-medium md:hidden">{v.name.split('.')[0]}</span>
              </button>
            );
          })}
        </div>

      </div>
    </aside>
  );
};

export default VariantSwitcher;
