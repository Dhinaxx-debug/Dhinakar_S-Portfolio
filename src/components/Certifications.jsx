import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { certificationsAndWorkshops } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-600 dark:text-sky-400">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED WORKSHOPS &amp; ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications &amp; Workshops
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Professional learning credentials from premier organizations including Scaler and National Institute of Technology (NIT) Tiruchirappalli.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsAndWorkshops.map((cert, idx) => (
            <div
              key={idx}
              className="group rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-[#0c1424]/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 hud-card flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-sky-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-sky-400 font-bold border border-blue-500/20">
                    {cert.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-sky-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="text-xs font-mono font-semibold text-blue-600 dark:text-sky-400 mb-4 flex items-center space-x-1.5">
                  <span>{cert.issuer}</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500 dark:text-slate-400">{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Verified Stamp */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-blue-600 dark:text-sky-400 font-semibold">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>COMPLETED</span>
                </span>
                <span className="text-slate-400 font-normal">Accredited</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
