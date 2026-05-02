"use client";

import { useState } from "react";
import { 
  Search as SearchIcon, 
} from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-8 animate-in">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">Advanced Intel Search</h1>
        <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Global Database Query Protocol</p>
      </div>

      <div className="cyber-card relative">
        <SearchIcon className="absolute left-6 top-8 w-6 h-6 text-[var(--teal)]" />
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ENTER SUBJECT NAME, BIOMETRIC ID, OR LAST KNOWN LOCATION..." 
          className="cyber-input w-full pl-16 py-8 text-xl"
        />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["DNA Profile", "Voice Print", "Facial Scan", "Crypto Wallet"].map((f) => (
            <button key={f} className="p-4 bg-black/40 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-[var(--muted)] hover:text-[var(--teal)] hover:border-[var(--teal)]/30 transition-all">
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-50 pointer-events-none">
        <div className="cyber-card h-[400px] flex items-center justify-center border-dashed">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--muted)]">Awaiting Query Parameters...</p>
        </div>
        <div className="cyber-card h-[400px] flex items-center justify-center border-dashed">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--muted)]">Satellite Uplink Offline</p>
        </div>
      </div>
    </div>
  );
}
