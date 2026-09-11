import React, { useState } from 'react';
import { 
  FiTerminal, FiCpu, FiHardDrive, FiActivity, FiArrowUpRight, 
  FiGithub, FiLinkedin, FiMail, FiDownload, FiCheck, FiCode, FiLayers
} from 'react-icons/fi';
import { personalInfo, heroStats, projectsData, workExperience, skillsCategories } from '../../Utils/data';

const Variant2Terminal = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedTech, setSelectedTech] = useState('ALL');

  const techOptions = ['ALL', 'REACT NATIVE', 'TYPESCRIPT', 'SUPABASE', 'NEXT.JS', 'SQL'];

  const filteredProjects = selectedTech === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.tags?.some(t => t.toUpperCase().includes(selectedTech)));

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#D1D5DB] font-mono selection:bg-[#F59E0B] selection:text-black">
      
      {/* Top Telemetry Strip */}
      <div className="border-b border-[#1F2430] bg-[#0D0F17] px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-white/70">
          <span className="text-[#F59E0B] font-bold">LEONARD://SYS_ARCH_V2.6</span>
          <span className="text-white/30">|</span>
          <span>UPTIME: 99.98%</span>
          <span className="text-white/30">|</span>
          <span className="text-emerald-400">STATUS: ACCEPTING WORK</span>
        </div>
        <div className="flex items-center gap-4 text-white/50 text-[11px]">
          <span>LAGOS-NODE-01</span>
          <span>LATENCY: 14ms</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10">

        {/* Header Block */}
        <div className="border border-[#1F2430] bg-[#0D0F17] p-6 sm:p-8 rounded-none mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1F2430]">
            <div>
              <div className="text-xs text-[#F59E0B] mb-1">$ whoami</div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                LEONARD EGBAAIBON
              </h1>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                Mobile Architect · Frontend Engineer · Distributed Systems Practitioner
              </p>
            </div>
            
            {/* Quick Action Matrix */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-[#F59E0B] text-black px-4 py-2 text-xs font-bold hover:bg-[#d97706] transition-colors flex items-center gap-2"
              >
                <FiMail size={13} />
                <span>INITIATE_CONTACT</span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1F2430] bg-white/5 text-white px-4 py-2 text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <FiDownload size={13} />
                <span>FETCH_RESUME.PDF</span>
              </a>
            </div>
          </div>

          {/* System Spec Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-xs">
            <div>
              <div className="text-white/40">SPECIALIZATION</div>
              <div className="text-white font-semibold mt-0.5">React Native, Next.js, Supabase</div>
            </div>
            <div>
              <div className="text-white/40">CRASH FREE RATE</div>
              <div className="text-emerald-400 font-semibold mt-0.5">99.2% (Swiftpoint)</div>
            </div>
            <div>
              <div className="text-white/40">SETTLED VOLUME</div>
              <div className="text-[#F59E0B] font-semibold mt-0.5">$70K+ Monthly (BlockEx)</div>
            </div>
            <div>
              <div className="text-white/40">DEPLOYMENTS</div>
              <div className="text-white font-semibold mt-0.5">10+ App Store / Play Store</div>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#1F2430] pb-2 text-xs">
          {[
            { id: 'projects', label: 'PROJECT_MATRIX' },
            { id: 'experience', label: 'WORK_CHRONOLOGY' },
            { id: 'skills', label: 'SYSTEM_CAPABILITIES' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-white/10 text-white font-bold border-b-2 border-[#F59E0B]'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: PROJECT MATRIX */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Tech Filter */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-white/40 mr-1">FILTER_TAG:</span>
              {techOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTech(t)}
                  className={`px-2.5 py-1 border transition-colors ${
                    selectedTech === t
                      ? 'border-[#F59E0B] text-[#F59E0B] bg-[#F59E0B]/10 font-bold'
                      : 'border-[#1F2430] text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Matrix Table */}
            <div className="border border-[#1F2430] overflow-x-auto bg-[#0D0F17]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#1F2430] bg-[#141724] text-white/50">
                    <th className="p-3 font-mono">SYSTEM / PRODUCT</th>
                    <th className="p-3 font-mono">ROLE & SCOPE</th>
                    <th className="p-3 font-mono">ARCHITECTURE HIGHLIGHT</th>
                    <th className="p-3 font-mono">VERIFIED METRIC</th>
                    <th className="p-3 font-mono text-right">OUTPUT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1F2430]">
                  {filteredProjects.map((p, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3">
                        <div className="font-bold text-white flex items-center gap-2">
                          {p.logo && (
                            <img src={p.logo} alt="" className="w-4 h-4 object-contain rounded-sm" />
                          )}
                          <span>{p.title}</span>
                        </div>
                        <div className="text-[11px] text-white/40 mt-0.5">{p.category}</div>
                      </td>
                      <td className="p-3 text-white/80">
                        {p.role || 'Lead Engineer'}
                      </td>
                      <td className="p-3 text-white/60 max-w-xs">
                        <div className="truncate">{p.description}</div>
                        <div className="flex gap-1 mt-1">
                          {p.tags?.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[10px] bg-white/5 px-1.5 py-0.5 text-white/70 border border-white/10">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 text-emerald-400 font-semibold">
                        {p.id === 'swiift' ? '99.2% Crash-free' : p.id === 'blockex' ? '$70k+/mo Settlement' : 'Production Live'}
                      </td>
                      <td className="p-3 text-right whitespace-nowrap">
                        {p.liveUrl ? (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#F59E0B] hover:underline"
                          >
                            <span>LAUNCH</span>
                            <FiArrowUpRight size={12} />
                          </a>
                        ) : (
                          <span className="text-white/30">INTERNAL</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: WORK CHRONOLOGY */}
        {activeTab === 'experience' && (
          <div className="border border-[#1F2430] bg-[#0D0F17] divide-y divide-[#1F2430]">
            {workExperience.map((job, idx) => (
              <div key={idx} className="p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#F59E0B] font-bold">[{job.duration}]</span>
                    <span className="text-white font-bold text-sm">{job.company}</span>
                    <span className="text-white/40">// {job.position}</span>
                  </div>
                  <div className="text-white/40 text-[11px]">{job.location} · {job.type}</div>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {job.description}
                </p>
                <div className="space-y-1 text-xs text-white/80">
                  {job.achievements?.map((ach, ai) => (
                    <div key={ai} className="flex items-start gap-2">
                      <span className="text-emerald-400">&gt;</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.technologies?.map((tech, ti) => (
                    <span key={ti} className="text-[10px] bg-white/5 text-white/60 px-2 py-0.5 border border-[#1F2430]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: SYSTEM CAPABILITIES */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsCategories.map((cat, idx) => (
              <div key={idx} className="border border-[#1F2430] bg-[#0D0F17] p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#1F2430] pb-2 text-xs">
                  <span className="text-[#F59E0B] font-bold">{cat.category}</span>
                  <span className="text-white/40 text-[10px]">TIER 1 PRODUCTION</span>
                </div>
                <p className="text-xs text-white/60">{cat.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                  {cat.skills.map((skill, si) => (
                    <div key={si} className="flex items-center justify-between bg-white/[0.02] p-2 border border-white/5">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Terminal Block */}
        <div className="mt-12 pt-6 border-t border-[#1F2430] flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>NODE_STATUS: ALL DAEMONS OPERATIONAL</div>
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GITHUB://leonardegbaaibon
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LINKEDIN://leonard-egbaaibon
            </a>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Variant2Terminal;
