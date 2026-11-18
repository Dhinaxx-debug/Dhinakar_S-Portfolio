import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  Cpu, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  ChevronDown,
  Mail,
  Linkedin,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import RadarWidget from './RadarWidget';

export default function Hero({ onOpenTerminal }) {
  const roles = [
    "Information Security Intern @ Net Access India",
    "B.E. CSE (Artificial Intelligence & Machine Learning)",
    "VAPT Fundamentals & Vulnerability Assessment",
    "Decentralized Intrusion Detection (AI + Blockchain)",
    "Network Security & Wireshark Traffic Analysis"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        if (displayedText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 35 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="about" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Soft Blue/Cyan ambient glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-blue-500/20 text-xs font-mono text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="font-semibold text-blue-600 dark:text-sky-400">NET ACCESS INDIA LIMITED</span>
              <span className="text-slate-400 dark:text-slate-600">&bull;</span>
              <span className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-sky-500" />
                <span>Pudukottai, Tamil Nadu</span>
              </span>
            </div>

            {/* Name with elegant gradient */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Typewriter text */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-base sm:text-xl font-semibold text-blue-600 dark:text-sky-400">
                  &gt; {displayedText}
                </span>
                <span className="inline-block w-2.5 h-5 bg-blue-500 ml-1.5 animate-pulse"></span>
              </div>
            </div>

            {/* Objective Statement from Resume */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Strengths Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {personalInfo.strengths.map((str, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800/60"
                >
                  ✓ {str}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all active:scale-95"
              >
                <span>View Projects & Research</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-mono text-xs font-semibold transition-all"
              >
                <Briefcase className="w-4 h-4 text-sky-500" />
                <span>Internship Experience</span>
              </a>

              <a
                href="#terminal"
                onClick={onOpenTerminal}
                className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-mono text-xs transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>CLI Profile</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 w-full">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-blue-600 dark:text-sky-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                    {stat.suffix}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Intrusion Monitor Radar & Quick Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            
            {/* Blue & Cyan Intrusion Monitor Radar */}
            <RadarWidget />

            {/* Academic & Internship Profile Card */}
            <div className="w-full max-w-xs sm:max-w-sm rounded-xl p-4 bg-white/90 dark:bg-[#0c1424]/90 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 space-y-2.5 backdrop-blur-md shadow-md">
              <div className="flex items-center justify-between text-[11px] text-blue-600 dark:text-sky-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-2">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span>CURRENT AFFILIATIONS</span>
                </span>
                <span className="text-slate-400">2026</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-start space-x-2">
                  <Briefcase className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200">Information Security Intern</div>
                    <div className="text-slate-500 text-[10px]">Net Access India Limited (Nov 2026 – Present)</div>
                  </div>
                </div>

                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-start space-x-2">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200">B.E. CSE (AI & Machine Learning)</div>
                    <div className="text-slate-500 text-[10px]">Rathinam Technical Campus (2024 – Present)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-400 dark:text-slate-500 text-xs font-mono animate-bounce pointer-events-none">
        <span>EXPLORE PORTFOLIO</span>
        <ChevronDown className="w-4 h-4 mt-1" />
      </div>
    </section>
  );
}
