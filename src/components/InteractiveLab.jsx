import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  ShieldCheck, 
  ShieldAlert, 
  Play, 
  Terminal, 
  RefreshCw, 
  Copy, 
  Check, 
  Layers, 
  Key, 
  Server,
  Zap,
  Lock
} from 'lucide-react';

export default function InteractiveLab() {
  const [activeTab, setActiveTab] = useState('auditor'); // 'auditor' | 'encoder' | 'scanner'

  // --- TAB 1: Header Auditor State ---
  const presetTargets = [
    {
      name: 'Vulnerable E-Commerce (Target A)',
      url: 'https://vulnerable-shop.test',
      score: 'D (High Risk)',
      scoreColor: 'text-rose-500 bg-rose-500/10 border-rose-500/30',
      findings: [
        { name: 'Content-Security-Policy (CSP)', status: 'MISSING', risk: 'High', desc: 'Allows arbitrary inline script injection (XSS).' },
        { name: 'Strict-Transport-Security (HSTS)', status: 'MISSING', risk: 'Medium', desc: 'Prone to SSL-Stripping and downgrade attacks.' },
        { name: 'Access-Control-Allow-Origin', status: 'WILDCARD (*)', risk: 'High', desc: 'Permits cross-origin credential stealing.' },
        { name: 'X-Frame-Options', status: 'MISSING', risk: 'Medium', desc: 'Vulnerable to Clickjacking in iframe embeds.' },
        { name: 'Set-Cookie Flags', status: 'NO HTTPONLY/SECURE', risk: 'High', desc: 'Session cookies exposed to JavaScript theft.' }
      ]
    },
    {
      name: 'Hardened FinTech Gateway (Target B)',
      url: 'https://secure-vault.bank.test',
      score: 'A+ (Hardened)',
      scoreColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      findings: [
        { name: 'Content-Security-Policy (CSP)', status: 'STRICT NONCE', risk: 'Secure', desc: 'Zero unapproved script execution allowed.' },
        { name: 'Strict-Transport-Security (HSTS)', status: 'max-age=63072000; preload', risk: 'Secure', desc: 'Enforces pure TLS across all connections.' },
        { name: 'X-Frame-Options', status: 'DENY', risk: 'Secure', desc: 'Prevents iframe framing entirely.' },
        { name: 'X-Content-Type-Options', status: 'nosniff', risk: 'Secure', desc: 'Stops MIME-confusion attacks.' },
        { name: 'Set-Cookie Flags', status: 'Secure; HttpOnly; SameSite=Strict', risk: 'Secure', desc: 'Session protected against XSS & CSRF.' }
      ]
    }
  ];

  const [selectedTarget, setSelectedTarget] = useState(presetTargets[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);

  const runSimulatedScan = (target) => {
    setSelectedTarget(target);
    setIsScanning(true);
    setScanProgress(10);
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 30;
      });
    }, 200);
  };

  // --- TAB 2: Encoder / Decoder State ---
  const [inputText, setInputText] = useState('admin=true&session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
  const [encodingMode, setEncodingMode] = useState('base64Encode');
  const [copiedEnc, setCopiedEnc] = useState(false);

  const getEncodedResult = () => {
    try {
      if (encodingMode === 'base64Encode') return btoa(inputText);
      if (encodingMode === 'base64Decode') return atob(inputText);
      if (encodingMode === 'urlEncode') return encodeURIComponent(inputText);
      if (encodingMode === 'urlDecode') return decodeURIComponent(inputText);
      if (encodingMode === 'hexEncode') {
        return Array.from(inputText)
          .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
          .join(' ');
      }
      if (encodingMode === 'hashDetect') {
        const clean = inputText.trim();
        if (clean.length === 32) return 'Detected Hash: MD5 (32 hex characters) or NTLM';
        if (clean.length === 40) return 'Detected Hash: SHA-1 (40 hex characters)';
        if (clean.length === 64) return 'Detected Hash: SHA-256 (64 hex characters)';
        if (clean.length === 128) return 'Detected Hash: SHA-512 (128 hex characters)';
        if (clean.startsWith('$2a$') || clean.startsWith('$2b$')) return 'Detected Hash: Bcrypt blowfish hash';
        return 'Hash type unrecognized or mixed payload length: ' + clean.length + ' chars';
      }
      return inputText;
    } catch (err) {
      return 'Error: Invalid input format for decoding.';
    }
  };

  // --- TAB 3: Port Scanner Simulation State ---
  const [scannerIp, setScannerIp] = useState('10.10.11.23');
  const [scannerRunning, setScannerRunning] = useState(false);
  const [scannerLogs, setScannerLogs] = useState([
    { port: 22, service: 'SSH', state: 'OPEN', banner: 'OpenSSH 8.9p1 Ubuntu-3ubuntu0.1', vuln: 'Compliant' },
    { port: 80, service: 'HTTP', state: 'OPEN', banner: 'Apache/2.4.49 (Unix)', vuln: 'CRITICAL: CVE-2021-41773 Path Traversal' },
    { port: 443, service: 'HTTPS', state: 'OPEN', banner: 'TLSv1.3 / OpenSSL 3.0.2', vuln: 'Compliant' },
    { port: 3306, service: 'MySQL', state: 'FILTERED', banner: 'MySQL 8.0.28 (Access Denied)', vuln: 'Restricted to Internal' },
    { port: 8080, service: 'HTTP-Proxy', state: 'OPEN', banner: 'Jenkins 2.289.1', vuln: 'HIGH: Unauthenticated API Access' }
  ]);

  const triggerPortScan = () => {
    setScannerRunning(true);
    setTimeout(() => {
      setScannerRunning(false);
    }, 1200);
  };

  return (
    <section id="seclab" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE SECURITY LAB // PROVING GROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Interactive SecLab
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Test real-world security tooling directly in your browser. Audit security headers, decode penetration testing payloads, and simulate network port enumeration.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('auditor')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'auditor'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Header & Config Auditor</span>
          </button>

          <button
            onClick={() => setActiveTab('encoder')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'encoder'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>Payload & Hash Decoder</span>
          </button>

          <button
            onClick={() => setActiveTab('scanner')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'scanner'
                ? 'bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/20'
                : 'bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>SYN Port Scanner Sim</span>
          </button>
        </div>

        {/* Tab 1: Header Auditor Content */}
        {activeTab === 'auditor' && (
          <div className="rounded-2xl bg-white/90 dark:bg-[#0a0f1d]/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl hud-corner">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Select Target Scenario:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {presetTargets.map((target, idx) => (
                    <button
                      key={idx}
                      onClick={() => runSimulatedScan(target)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                        selectedTarget.name === target.name
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold'
                          : 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                      }`}
                    >
                      {target.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Security Score Badge */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Assessment Score</div>
                  <div className="text-lg font-mono font-black text-slate-900 dark:text-white">
                    {selectedTarget.score.split(' ')[0]}
                  </div>
                </div>
                <div className={`px-3 py-2 rounded-xl text-xs font-mono font-bold border ${selectedTarget.scoreColor}`}>
                  {selectedTarget.score}
                </div>
              </div>
            </div>

            {/* Simulated Scanning Progress Bar */}
            {isScanning ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-8 h-8 mx-auto border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-xs font-mono text-emerald-400">
                  AUDITING HTTP HEADERS & TLS PROTOCOLS... [{scanProgress}%]
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold mb-2">
                  DETECTED HEADERS & SECURITY POSTURE:
                </div>
                {selectedTarget.findings.map((f, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100">
                        {f.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {f.desc}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 self-start sm:self-auto">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {f.status}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        f.risk === 'Secure' 
                          ? 'bg-emerald-500/20 text-emerald-500' 
                          : f.risk === 'High' 
                          ? 'bg-rose-500/20 text-rose-500' 
                          : 'bg-amber-500/20 text-amber-500'
                      }`}>
                        {f.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Payload & Hash Decoder Content */}
        {activeTab === 'encoder' && (
          <div className="rounded-2xl bg-white/90 dark:bg-[#0a0f1d]/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl hud-corner space-y-6">
            
            {/* Mode Selector */}
            <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
              {[
                { id: 'base64Encode', label: 'Base64 Encode' },
                { id: 'base64Decode', label: 'Base64 Decode' },
                { id: 'urlEncode', label: 'URL Encode' },
                { id: 'urlDecode', label: 'URL Decode' },
                { id: 'hexEncode', label: 'Hex String' },
                { id: 'hashDetect', label: 'Hash Type Identifier' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setEncodingMode(m.id)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    encodingMode === m.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-400'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Input Area */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                  INPUT DATA / CIPHERTEXT / HASH:
                </label>
                <textarea
                  rows={4}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 p-3 font-mono text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-cyan-500"
                  placeholder="Enter payload string or hash..."
                />
              </div>

              {/* Output Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-semibold text-cyan-500">
                    TRANSFORMED OUTPUT:
                  </label>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(getEncodedResult());
                      setCopiedEnc(true);
                      setTimeout(() => setCopiedEnc(false), 2000);
                    }}
                    className="inline-flex items-center space-x-1 text-[11px] font-mono text-slate-400 hover:text-cyan-400"
                  >
                    {copiedEnc ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEnc ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="w-full h-24 rounded-xl bg-slate-100 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800 p-3 font-mono text-xs text-emerald-600 dark:text-emerald-400 overflow-y-auto break-all">
                  {getEncodedResult()}
                </div>
              </div>
            </div>

            {/* Quick Presets for testing */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono text-slate-500">
              <span>Test Presets:</span>
              <button 
                onClick={() => { setInputText('5f4dcc3b5aa765d61d8327deb882cf99'); setEncodingMode('hashDetect'); }}
                className="underline hover:text-cyan-400"
              >
                MD5 Password Hash
              </button>
              <span>&bull;</span>
              <button 
                onClick={() => { setInputText("<script>alert('XSS')</script>"); setEncodingMode('urlEncode'); }}
                className="underline hover:text-cyan-400"
              >
                XSS Payload
              </button>
              <span>&bull;</span>
              <button 
                onClick={() => { setInputText('eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0='); setEncodingMode('base64Decode'); }}
                className="underline hover:text-cyan-400"
              >
                JWT Payload
              </button>
            </div>

          </div>
        )}

        {/* Tab 3: SYN Port Scanner Simulation */}
        {activeTab === 'scanner' && (
          <div className="rounded-2xl bg-white/90 dark:bg-[#0a0f1d]/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl hud-corner space-y-6">
            
            {/* Scanner Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-xs font-mono text-slate-500">TARGET:</span>
                <input
                  type="text"
                  value={scannerIp}
                  onChange={(e) => setScannerIp(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 font-mono text-xs text-emerald-400 focus:outline-none"
                />
              </div>

              <button
                onClick={triggerPortScan}
                disabled={scannerRunning}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-mono font-bold text-xs transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{scannerRunning ? 'SCANNING PORTS...' : 'LAUNCH SYN SCAN'}</span>
              </button>
            </div>

            {/* Scanner Port Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                    <th className="pb-2">PORT</th>
                    <th className="pb-2">SERVICE</th>
                    <th className="pb-2">STATE</th>
                    <th className="pb-2">BANNER / FINGERPRINT</th>
                    <th className="pb-2 text-right">SECURITY STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {scannerLogs.map((log) => (
                    <tr key={log.port} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/40 transition-colors">
                      <td className="py-2.5 font-bold text-emerald-500">{log.port}/tcp</td>
                      <td className="py-2.5 text-slate-700 dark:text-slate-300">{log.service}</td>
                      <td className="py-2.5">
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          {log.state}
                        </span>
                      </td>
                      <td className="py-2.5 text-slate-500 dark:text-slate-400 truncate max-w-xs">{log.banner}</td>
                      <td className="py-2.5 text-right font-semibold">
                        <span className={`text-[10px] px-2 py-0.5 rounded ${
                          log.vuln.includes('CRITICAL') 
                            ? 'bg-rose-500/20 text-rose-500 font-bold animate-pulse'
                            : log.vuln.includes('HIGH')
                            ? 'bg-amber-500/20 text-amber-500'
                            : 'bg-emerald-500/10 text-emerald-400'
                        }`}>
                          {log.vuln}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

