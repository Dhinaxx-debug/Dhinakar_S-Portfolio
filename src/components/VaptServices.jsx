import React from 'react';
import { 
  GlobeLock, 
  Network, 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { coreDomains } from '../data/portfolioData';

const iconMap = {
  ShieldAlert: ShieldAlert,
  GlobeLock: GlobeLock,
  Network: Network,
  Cpu: Cpu,
};

export default function VaptServices() {
  return (
    <section id="domains" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-600 dark:text-sky-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CORE SPECIALIZATIONS & FOCUS AREAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Cybersecurity & AI Focus Domains
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Bridging foundational information security principles and VAPT with cutting-edge artificial intelligence and decentralized technologies.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {coreDomains.map((domain) => {
            const IconComponent = iconMap[domain.icon] || ShieldAlert;

            return (
              <div
                key={domain.id}
                className="group relative rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-[#0c1424]/80 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-blue-500/50 dark:hover:border-sky-500/40 backdrop-blur-md transition-all duration-300 hud-card flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Code & Standard */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-sky-400 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      {domain.code}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                      {domain.standard}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-sky-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 group-hover:border-blue-400 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                      {domain.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {domain.shortDesc}
                  </p>

                  {/* Deliverables / Scope */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 mb-6">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Competencies & Practical Concepts:
                    </div>
                    {domain.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-blue-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Inquire about this domain</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
