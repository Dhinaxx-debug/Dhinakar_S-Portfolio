import React, { useState } from 'react';
import { 
  Cpu, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Code,
  Terminal,
  Blocks,
  Eye,
  X,
  Sparkles
} from 'lucide-react';
import { academicProjects } from '../data/portfolioData';

export default function SecurityProjects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-600 dark:text-sky-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>ACADEMIC RESEARCH & PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Academic Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Real implementations solving modern cybersecurity and deep learning challenges using neural networks, blockchain validation, and computer vision.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {academicProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-[#0c1424]/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 hud-card flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Overview */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Key Implementations:
                  </div>
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Details Button */}
              <button
                onClick={() => setActiveModalProject(project)}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-blue-50 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-blue-600 dark:text-sky-400 font-mono text-xs font-bold transition-all shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>Inspect Architecture & Details</span>
              </button>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0c1424] border border-slate-300 dark:border-slate-700 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100 font-mono space-y-6 terminal-scrollbar">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                  {activeModalProject.badge}
                </span>
                <h3 className="text-xl font-bold pt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
                [+] Project Concept:
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {activeModalProject.overview}
              </p>
            </div>

            {/* Core Technical Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
                [+] Key Technical Capabilities:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pl-2">
                {activeModalProject.highlights.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">▸</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="text-blue-600 dark:text-sky-400 font-bold">STACK: </span>
              <span className="text-slate-700 dark:text-slate-300">
                {activeModalProject.technologies.join(' • ')}
              </span>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="text-blue-600 dark:text-sky-400 font-semibold">
                Domain: {activeModalProject.focus}
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
