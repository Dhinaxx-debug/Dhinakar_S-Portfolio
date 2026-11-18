import React, { useState } from 'react';
import { 
  Shield, 
  Network, 
  Terminal, 
  Cpu, 
  Check, 
  Layers,
  Wrench
} from 'lucide-react';
import { skillsArsenal } from '../data/portfolioData';

const iconCategoryMap = {
  Shield: Shield,
  Network: Network,
  Terminal: Terminal,
  Cpu: Cpu,
};

export default function SkillsArsenal() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = skillsArsenal.categories[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-600 dark:text-sky-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES & TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Skills & Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hands-on expertise across security assessment tools, network protocols, modern programming languages, and AI/ML data frameworks.
          </p>
        </div>

        {/* Category Tabs & Interactive Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col space-y-2.5">
            {skillsArsenal.categories.map((cat, idx) => {
              const IconComp = iconCategoryMap[cat.icon] || Terminal;
              const isSelected = activeCategoryIndex === idx;

              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl font-mono transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'bg-white/80 dark:bg-slate-900/40 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-wide">{cat.name}</div>
                      <div className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                        {cat.tools.length} Skills Listed
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tools & Proficiency Panel */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-[#0c1424]/90 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-xl hud-card">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-mono font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <span className="text-blue-500">#</span>
                <span>{activeCategory.name}</span>
              </h3>
              <span className="text-xs font-mono text-blue-600 dark:text-sky-400 font-bold px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30">
                ACTIVE FOCUS
              </span>
            </div>

            <div className="space-y-6">
              {activeCategory.tools.map((tool) => (
                <div key={tool.name} className="space-y-1.5 group">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-500 dark:group-hover:text-sky-400 transition-colors">
                      {tool.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                        {tool.tag}
                      </span>
                      <span className="font-bold text-blue-600 dark:text-sky-400">{tool.level}%</span>
                    </div>
                  </div>

                  {/* Meter Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 transition-all duration-700 ease-out shadow-[0_0_8px_#38bdf8]"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>● REGULAR LAB PRACTICE &amp; PROJECT INTEGRATION</span>
              <span className="text-blue-600 dark:text-sky-400 font-semibold">AUTHENTIC RESUME PROFILE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
