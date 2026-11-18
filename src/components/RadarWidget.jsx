import React, { useState, useEffect } from 'react';
import { Radio, Activity, Shield, Cpu } from 'lucide-react';

export default function RadarWidget() {
  const [threats, setThreats] = useState([
    { id: 1, label: 'TCP_SYN_FLOOD', x: 68, y: 32, status: 'BLOCKED', color: 'text-sky-400' },
    { id: 2, label: 'PORT_SCAN:443', x: 28, y: 68, status: 'CLASSIFIED_AI', color: 'text-blue-400' },
    { id: 3, label: 'MALICIOUS_PAYLOAD', x: 78, y: 76, status: 'LOGGED_BLOCKCHAIN', color: 'text-indigo-400' },
  ]);
  const [activeLog, setActiveLog] = useState('DIDS ENGINE: MONITORING TRAFFIC & INTRUSIONS');

  useEffect(() => {
    const logs = [
      'DIDS ENGINE: MONITORING TRAFFIC & INTRUSIONS',
      'CNN-LSTM MODEL: ZERO SUSPICIOUS ANOMALIES DETECTED',
      'NET ACCESS INDIA: VAPT LAB TELEMETRY ACTIVE',
      'TCP/IP PACKET PARSER: 0 PACKET LOSS (100% HEALTH)',
      'BLOCKCHAIN LOG INTEGRITY VERIFIED (TAMPER-FREE)'
    ];
    const interval = setInterval(() => {
      const nextLog = logs[Math.floor(Math.random() * logs.length)];
      setActiveLog(nextLog);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl bg-white/80 dark:bg-[#0c1424]/90 border border-slate-200 dark:border-slate-800 p-4 shadow-xl backdrop-blur-xl hud-card overflow-hidden">
      {/* HUD Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2.5 mb-3">
        <div className="flex items-center space-x-2">
          <Radio className="w-4 h-4 text-blue-500 dark:text-sky-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
            INTRUSION MONITOR // LIVE
          </span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-sky-400 animate-ping"></span>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">ACTIVE</span>
        </div>
      </div>

      {/* Radar Screen */}
      <div className="relative w-48 h-48 mx-auto rounded-full border border-blue-500/30 dark:border-sky-500/30 bg-slate-100 dark:bg-slate-950/90 flex items-center justify-center overflow-hidden">
        {/* Concentric rings */}
        <div className="absolute w-36 h-36 rounded-full border border-blue-500/20 dark:border-sky-500/20"></div>
        <div className="absolute w-24 h-24 rounded-full border border-blue-500/20 dark:border-sky-500/20"></div>
        <div className="absolute w-12 h-12 rounded-full border border-blue-500/30 dark:border-sky-500/30"></div>

        {/* Crosshair lines */}
        <div className="absolute w-full h-[1px] bg-blue-500/20 dark:bg-sky-500/20"></div>
        <div className="absolute h-full w-[1px] bg-blue-500/20 dark:bg-sky-500/20"></div>

        {/* Radar Sweeping Beam */}
        <div
          className="absolute inset-0 origin-center animate-radar pointer-events-none"
          style={{
            background: 'conic-gradient(from 0deg, rgba(14, 165, 233, 0.45) 0deg, transparent 65deg, transparent 360deg)'
          }}
        ></div>

        {/* Center Indicator */}
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-sky-400 shadow-[0_0_10px_#38bdf8] z-10"></div>

        {/* Target Nodes */}
        {threats.map((threat) => (
          <div
            key={threat.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${threat.x}%`, top: `${threat.y}%` }}
          >
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></div>
            <div className="absolute -top-5 left-3 hidden group-hover:block bg-slate-900 text-[9px] font-mono text-sky-300 px-1.5 py-0.5 rounded border border-sky-500/40 whitespace-nowrap z-20">
              {threat.label} [{threat.status}]
            </div>
          </div>
        ))}
      </div>

      {/* Live Ticker */}
      <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
        <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 truncate">
          <Activity className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400 flex-shrink-0" />
          <span className="truncate text-slate-700 dark:text-slate-300 font-medium">{activeLog}</span>
        </div>
      </div>
    </div>
  );
}
