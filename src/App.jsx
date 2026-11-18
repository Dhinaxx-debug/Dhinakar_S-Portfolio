import React, { useState, useEffect } from 'react';
import CyberCanvas from './components/CyberCanvas';
import { 
  Shield, 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Award, 
  Wrench, 
  User, 
  CheckCircle2, 
  Copy, 
  Check, 
  Send,
  Briefcase,
  Terminal,
  Lock,
  Cpu,
  ArrowUpRight,
  FolderGit2,
  Network
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('dhinakar_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('dhinakar_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('dhinakar_theme', 'light');
    }
  }, [darkMode]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSent(false), 4000);
  };

  // Resume Data
  const personal = {
    name: "DHINAKAR S",
    domain: "Cybersecurity & VAPT",
    phone: "8610571102",
    phoneDisplay: "+91 86105 71102",
    email: "dhinakardhinakar0123@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhinakar-s-090058364",
    linkedinUsername: "dhinakar-s-090058364",
    location: "Pudukottai, Tamil Nadu",
    aboutStory: [
      "Hello! I'm a Computer Science engineering student from Rathinam Technical Campus with a profound passion for offensive security, network defense, and vulnerability assessment. I enjoy exploring the intricacies of TCP/IP protocols, network architectures, and web application security mechanisms to identify security risks and safeguard critical digital systems.",
      "Currently pursuing my B.E. in CSE while gaining practical industry exposure as an Information Security Intern at Net Access India Limited, I conduct hands-on vulnerability assessments—from deep packet inspection and network port enumeration to web proxy auditing and OWASP Top 10 threat mitigation.",
      "When I'm not analyzing live network packet flows in Wireshark or running security assessments with tools like Burp Suite, Nmap, and Nessus, I'm constantly exploring novel attack vectors, studying defense-in-depth methodologies, and staying on the bleeding edge of cybersecurity advancements."
    ]
  };

  const internshipData = {
    role: "Information Security Intern",
    company: "Net Access India Limited",
    duration: "November 2026 – Present",
    highlights: [
      "Gaining practical exposure to information security principles and VAPT concepts.",
      "Learning vulnerability identification and assessment methodologies.",
      "Exploring network security, web application security, and security testing tools (Burp Suite, Nmap, Wireshark, Nessus).",
      "Developing an understanding of security weaknesses and their potential impact."
    ]
  };

  const projectData = {
    title: "Decentralized Intrusion Detection Using AI and Blockchain Technologies",
    category: "Featured Research Project",
    overview: "Academic project focused on identifying suspicious network activity using machine learning. Explores CNN and LSTM models for network intrusion classification and blockchain-based verification for tamper-resistant security logs.",
    keyPoints: [
      "CNN and LSTM neural networks for deep network intrusion detection.",
      "Decentralized blockchain verification ensuring immutable security logs.",
      "Backend microservices and data pipelines built with Flask & SQL/MongoDB."
    ],
    technologies: ["Python", "CNN", "LSTM", "Flask", "Blockchain", "SQL", "MongoDB"]
  };

  // Moving Skills Data: Categorized with Icons and Tags
  const movingSkillsRow1 = [
    { name: "Burp Suite", icon: Shield, tag: "Web Proxy Audit" },
    { name: "Nmap", icon: Network, tag: "Port & Host Enumeration" },
    { name: "VAPT Fundamentals", icon: Lock, tag: "Offensive Security" },
    { name: "Nessus", icon: Shield, tag: "Vulnerability Scanning" },
    { name: "Wireshark", icon: Network, tag: "Packet Inspection" },
    { name: "Kali Linux", icon: Terminal, tag: "Penetration Testing OS" },
    { name: "OWASP Top 10", icon: Lock, tag: "Web App Vulnerabilities" },
    { name: "Vulnerability Assessment", icon: Shield, tag: "Security Auditing" }
  ];

  const movingSkillsRow2 = [
    { name: "TCP/IP & OSI Model", icon: Network, tag: "Network Protocols" },
    { name: "DNS & HTTP / HTTPS", icon: Network, tag: "Internet Architecture" },
    { name: "Network Traffic Analysis", icon: Network, tag: "Packet Sniffing" },
    { name: "Python Security Scripting", icon: Terminal, tag: "Automation" },
    { name: "Linux / Windows Systems", icon: Terminal, tag: "OS Hardening" },
    { name: "Java & SQL Injection Audits", icon: Terminal, tag: "Database Defense" },
    { name: "NumPy & Pandas", icon: Cpu, tag: "Data Analysis" },
    { name: "Scikit-learn", icon: Cpu, tag: "Machine Learning" }
  ];

  const educationData = [
    {
      institution: "Rathinam Technical Campus",
      degree: "B.E. Computer Science and Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      year: "2024 – Present"
    },
    {
      institution: "Mother Teresa Polytechnic College",
      degree: "Diploma in Computer Technology",
      specialization: "Computer Technology",
      year: "2019 – 2022",
      score: "CGPA: 7.2"
    },
    {
      institution: "Idhaya Matric Higher Secondary School",
      degree: "Secondary School Education",
      specialization: "General Studies",
      year: "2018 – 2019"
    }
  ];

  const certificationsData = [
    {
      title: "EDA and Data Visualization Course in Data Science",
      issuer: "Scaler",
      date: "Oct 2025",
      description: "Mastered exploratory data analysis, visual storytelling, and statistical evaluation using Python."
    },
    {
      title: "Supervised Machine Learning Course",
      issuer: "Scaler",
      date: "May 2026",
      description: "In-depth training on classification, regression, feature engineering, and predictive modeling."
    },
    {
      title: "Data Analytics Workshop",
      issuer: "NIT Tiruchirappalli",
      date: "Sep 2025",
      description: "Hands-on workshop using Python, Pandas, and data-visualization techniques on real-world datasets."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] dark:bg-[#08090e] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans spatial-grid selection:bg-red-500 selection:text-white">
      
      {/* 🌌 Magnetic Spatial Background Canvas (Crimson Red Physics) */}
      <CyberCanvas darkMode={darkMode} />

      {/* 1. Header (NO TABS, Brand + Theme Switcher) */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#08090e]/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 h-18 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 font-black text-xl sm:text-2xl tracking-wider">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/30 flex items-center justify-center shadow-sm shadow-red-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-slate-900 dark:text-white font-black tracking-tight">
              {personal.name}
            </span>
          </a>

          {/* Theme Switcher Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#131520] text-slate-700 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </header>

      {/* 2. Hero Section: Centered, Large Font, No Boxes, Red Accent */}
      <section className="relative z-10 pt-20 pb-20 px-4 text-center max-w-5xl mx-auto flex flex-col items-center justify-center">
        
        {/* Domain Badge */}
        <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-sm font-mono font-bold text-red-600 dark:text-red-400 mb-6 shadow-sm shadow-red-500/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span>CYBERSECURITY &bull; VAPT</span>
        </div>

        {/* Name: Crisp Pure White & Extra Large Font */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tight mb-5">
          {personal.name}
        </h1>

        {/* Domain in Red */}
        <div className="text-3xl sm:text-5xl font-black text-red-600 dark:text-red-500 tracking-wide mb-8">
          {personal.domain}
        </div>

        {/* Intro in Larger Readable Font */}
        <p className="text-lg sm:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-3xl mb-10 font-normal">
          Dedicated Computer Science engineer specializing in vulnerability assessment, offensive security testing, and securing modern network architectures.
        </p>

        {/* Centered Action Buttons with Red Theme */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-white/80 dark:bg-[#131522] hover:bg-slate-100 dark:hover:bg-[#1c1f33] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center space-x-2.5 shadow-sm hover:scale-105 active:scale-95"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-4 h-4 text-red-500" />
          </a>
        </div>
      </section>

      {/* 3. Main Content: Headings in Left Corner, No Heading Lines, Large Fonts */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pb-28 space-y-24 text-left">
        
        {/* SECTION: About Me (Heading at Left Corner, No Marked Line, Large Font) */}
        <section id="about" className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-left">
            About Me
          </h2>

          <div className="space-y-6 text-base sm:text-xl lg:text-2xl leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              {personal.aboutStory[0]}
            </p>
            <p>
              {personal.aboutStory[1]}
            </p>
            <p>
              {personal.aboutStory[2]}
            </p>
          </div>
        </section>

        {/* SECTION: Technical Skills (MOVING SKILLS TICKER / MARQUEE) */}
        <section id="skills" className="space-y-6 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-left">
              Technical Skills
            </h2>
            <span className="text-xs sm:text-sm font-mono text-red-500 dark:text-red-400 font-bold tracking-wider uppercase">
              • Interactive Moving Stream • Hover to Pause
            </span>
          </div>

          {/* Dual Lane Continuous Moving Skills Track */}
          <div className="relative w-full space-y-4 pt-2">
            
            {/* Ambient edge fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8fafc] dark:from-[#08090e] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8fafc] dark:from-[#08090e] to-transparent z-20" />

            {/* Lane 1: Moving to Left */}
            <div className="relative overflow-hidden w-full py-1">
              <div className="flex animate-marquee space-x-4 w-max cursor-pointer">
                {[...movingSkillsRow1, ...movingSkillsRow1, ...movingSkillsRow1].map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3.5 px-6 py-4 rounded-2xl bg-white/80 dark:bg-[#111320]/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {s.name}
                      </div>
                      <div className="text-xs font-mono text-red-600 dark:text-red-400 whitespace-nowrap">
                        {s.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lane 2: Moving in Reverse to Right */}
            <div className="relative overflow-hidden w-full py-1">
              <div className="flex animate-marquee-reverse space-x-4 w-max cursor-pointer">
                {[...movingSkillsRow2, ...movingSkillsRow2, ...movingSkillsRow2].map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3.5 px-6 py-4 rounded-2xl bg-white/80 dark:bg-[#111320]/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {s.name}
                      </div>
                      <div className="text-xs font-mono text-red-600 dark:text-red-400 whitespace-nowrap">
                        {s.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: Internship Experience (Left Corner Heading, No Lines) */}
        <section id="internship" className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-left">
            Internship Experience
          </h2>

          <div className="space-y-4 pt-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {internshipData.role}
                </h3>
                <div className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400 mt-1">
                  {internshipData.company}
                </div>
              </div>
              <span className="text-sm sm:text-base font-mono text-slate-400 font-semibold">
                {internshipData.duration}
              </span>
            </div>

            <ul className="space-y-3 text-base sm:text-xl text-slate-700 dark:text-slate-300 pt-3">
              {internshipData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3.5 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION: Projects (Left Corner Heading, No Lines) */}
        <section id="projects" className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-left">
            Projects
          </h2>

          <div className="space-y-4 pt-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {projectData.title}
            </h3>

            <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              {projectData.overview}
            </p>

            <ul className="space-y-3 text-base sm:text-xl text-slate-700 dark:text-slate-300 pt-2">
              {projectData.keyPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start space-x-3.5 leading-relaxed">
                  <span className="text-red-500 font-bold text-lg">▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-wrap gap-2.5">
              {projectData.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-sm sm:text-base font-mono font-medium bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/25"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Education (Left Corner Heading, No Marked Lines) */}
        <section id="education" className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-left">
            Education
          </h2>

          <div className="space-y-8 pt-2">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <div className="text-base sm:text-xl font-bold text-red-600 dark:text-red-400">
                    {edu.degree}
                  </div>
                  {edu.specialization && (
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                      {edu.specialization}
                    </div>
                  )}
                  {edu.score && (
                    <span className="inline-block mt-2 px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-bold bg-red-500/10 text-red-500 border border-red-500/30">
                      {edu.score}
                    </span>
                  )}
                </div>
                <span className="text-sm sm:text-base font-mono text-slate-400 font-semibold">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Certifications & Workshop (Left Corner Heading, No Marked Lines) */}
        <section id="certifications" className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-left">
            Certifications &amp; Workshops
          </h2>

          <div className="space-y-8 pt-2">
            {certificationsData.map((c, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="text-sm sm:text-base font-mono font-bold text-red-600 dark:text-red-400 uppercase">
                  {c.issuer} &bull; {c.date}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Contact (Left Corner Heading, No Marked Lines) */}
        <section id="contact" className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-left">
            Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-2">
            
            <div className="space-y-6">
              <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                Open to entry-level cybersecurity roles, VAPT assessments, and security engineering collaborations. Feel free to connect directly.
              </p>

              <div className="space-y-4 text-base sm:text-lg font-mono">
                <div className="flex items-center space-x-3">
                  <span className="text-slate-400">Phone:</span>
                  <a href={`tel:${personal.phone}`} className="font-bold text-red-600 dark:text-red-400 hover:underline">
                    {personal.phoneDisplay}
                  </a>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-red-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-slate-400">Email:</span>
                  <a href={`mailto:${personal.email}`} className="font-bold text-red-600 dark:text-red-400 hover:underline break-all">
                    {personal.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-red-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-slate-400">LinkedIn:</span>
                  <a href={personal.linkedin} target="_blank" rel="noreferrer" className="font-bold text-red-600 dark:text-red-400 hover:underline">
                    {personal.linkedinUsername}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{personal.location}</span>
                </div>
              </div>
            </div>

            <div>
              {formSent ? (
                <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-red-500 mx-auto" />
                  <div className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched!</div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    Thank you! Dhinakar will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#141624] border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-medium text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
                  />

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#141624] border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-medium text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
                  />

                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Dhinakar, let's connect..."
                    className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-[#141624] border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-medium text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/50 dark:border-slate-800/50 py-8 text-center text-sm font-medium text-slate-500">
        <p>&copy; {new Date().getFullYear()} <span className="font-bold text-slate-800 dark:text-white">{personal.name}</span> &bull; {personal.domain}</p>
      </footer>

    </div>
  );
}
