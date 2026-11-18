import React from 'react';
import { Shield, ArrowUp, Mail, Phone, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#060912] pt-12 pb-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Middle Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/30 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono font-bold text-slate-900 dark:text-white text-base">
                {personalInfo.name.toUpperCase()}
              </div>
              <div className="text-xs text-slate-500">
                Information Security Intern &bull; AI / ML Student
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">About</a>
            <a href="#domains" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Focus Areas</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Certs</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Copyright & Contact */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <span>{personalInfo.location}</span>
            <span>&bull;</span>
            <span className="text-blue-600 dark:text-sky-400 font-semibold">{personalInfo.phone}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
