import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Copy, Check, CornerDownLeft, Sparkles, Trash2 } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export default function TerminalWidget({ toggleDataStreamMode, dataStreamMode }) {
  const [history, setHistory] = useState([
    {
      command: 'welcome',
      output: `==========================================================
[+] DHINAKAR S // INFORMATION SECURITY & AI/ML TERMINAL v3.0
[+] System: Kali Linux / Ubuntu LTS // Profile: Verified Resume Data
[+] Type 'help' or click any command below to inspect.
==========================================================`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[trimmed] || `command not found: "${cmdText}". Type 'help' for available commands.`;
    setHistory((prev) => [...prev, { command: cmdText, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const copyLog = () => {
    const allText = history
      .map((h) => `$ ${h.command}\n${h.output}`)
      .join('\n\n');
    navigator.clipboard.writeText(allText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickCommands = ['whoami', 'intern', 'education', 'projects', 'skills', 'certs', 'contact'];

  return (
    <section id="terminal" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-600 dark:text-sky-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE RESUME CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Developer &amp; Security Terminal
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Interact with Dhinakar's credentials and project architecture via this in-browser Linux command line.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">Quick Run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-sky-300 border border-slate-300 dark:border-slate-700 transition-all active:scale-95 shadow-sm"
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#070c18] shadow-2xl overflow-hidden font-mono text-sm relative hud-card">
          
          {/* Terminal Titlebar */}
          <div className="bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold ml-2">
                dhinakar@infosec-workstation:~ (bash)
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={copyLog}
                title="Copy Terminal Logs"
                className="p-1.5 rounded text-slate-500 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-blue-500" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setHistory([])}
                title="Clear Terminal"
                className="p-1.5 rounded text-slate-500 hover:text-rose-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className="p-5 h-96 overflow-y-auto terminal-scrollbar space-y-3 bg-slate-50 dark:bg-[#070c18] text-slate-800 dark:text-slate-200 select-text cursor-text"
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center space-x-2 text-blue-600 dark:text-sky-400 font-semibold">
                  <span className="text-slate-500 dark:text-slate-400">dhinakar@infosec:~$</span>
                  <span>{item.command}</span>
                </div>
                <pre className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-mono whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-blue-500/40">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Input Row */}
            <div className="flex items-center space-x-2 text-blue-600 dark:text-sky-400 pt-1">
              <span className="text-slate-500 dark:text-slate-400">dhinakar@infosec:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help'..."
                className="flex-1 bg-transparent border-none outline-none text-blue-600 dark:text-sky-400 font-mono text-sm placeholder-slate-400 focus:ring-0"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="p-1 rounded text-slate-400 hover:text-blue-500"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer Bar */}
          <div className="bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 px-4 py-2 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-sky-400">● NET ACCESS VAPT LAB</span>
              <span>UTF-8</span>
              <span>BASH</span>
            </div>
            <div>
              Press [Enter] to execute
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
