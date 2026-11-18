import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, ChevronRight, Award, MapPin } from 'lucide-react';
import { internshipExperience, educationList } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-600 dark:text-sky-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPOSURE &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Internship &amp; Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hands-on professional experience in Information Security alongside formal computer science and AI/ML engineering studies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Column 1: Internship Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <span>Internship Experience</span>
            </div>

            <div className="relative pl-6 border-l-2 border-blue-500/30 dark:border-blue-500/20 space-y-8">
              {internshipExperience.map((item, idx) => (
                <div key={idx} className="relative group">

                  {/* Bullet node on the line */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-slate-950 group-hover:scale-125 transition-all shadow-[0_0_8px_#3b82f6]"></div>

                  {/* Card content */}
                  <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#0c1424]/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md hover:border-blue-500/40 transition-all hud-card">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-sky-400 transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20 self-start sm:self-auto">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-blue-600 dark:text-sky-400 mb-3 flex items-center space-x-1.5">
                      <span>{item.company}</span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-xs text-slate-500">{item.status}</span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Education */}
          <div id="education" className="space-y-6">
            <div className="flex items-center space-x-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <GraduationCap className="w-5 h-5 text-sky-500" />
              <span>Academic Education</span>
            </div>

            <div className="relative pl-6 border-l-2 border-sky-500/30 dark:border-sky-500/20 space-y-8">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative group">

                  {/* Bullet node on the line */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-2 border-white dark:border-slate-950 group-hover:scale-125 transition-all shadow-[0_0_8px_#38bdf8]"></div>

                  {/* Card content */}
                  <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#0c1424]/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md hover:border-sky-500/40 transition-all hud-card">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        {edu.institution}
                      </h3>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 self-start sm:self-auto">
                        {edu.duration}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.degree}
                    </div>

                    {edu.specialization && (
                      <div className="text-xs text-blue-600 dark:text-sky-400 font-medium mt-0.5">
                        {edu.specialization}
                      </div>
                    )}

                    {edu.score && (
                      <div className="mt-2.5 inline-block text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {edu.score}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
