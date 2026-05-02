"use client";

import { useState } from "react";
import { Search, Filter, Shield, User, MapPin, Calendar, Globe, Fingerprint, SearchCheck } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-8 animate-in">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">Advanced Search</h1>
        <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Cross-Reference Database / Neural Search Terminal</p>
      </div>

      <div className="cyber-card p-8">
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[var(--teal)]" />
          <input 
            type="text" 
            placeholder="ENTER BIOMETRIC ID / DNA PROFILE / CRM_ID / ALIAS..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="cyber-input w-full pl-16 py-6 text-xl font-mono uppercase tracking-widest"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
            <button className="px-4 py-2 bg-[var(--teal)]/20 border border-[var(--teal)]/40 text-[var(--teal)] rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-[var(--teal)]/30 transition-all">
              Execute Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-6 border border-white/5 rounded-xl bg-black/20">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--muted)] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--primary-accent)]" /> Clearance Filters
            </h4>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-[10px] text-white cursor-pointer hover:text-[var(--teal)] transition-colors">
                <input type="checkbox" className="w-3 h-3 bg-transparent border-white/20 rounded" />
                INCLUDE COLD CASES
              </label>
              <label className="flex items-center gap-3 text-[10px] text-white cursor-pointer hover:text-[var(--teal)] transition-colors">
                <input type="checkbox" className="w-3 h-3 bg-transparent border-white/20 rounded" />
                MOST WANTED ONLY
              </label>
              <label className="flex items-center gap-3 text-[10px] text-white cursor-pointer hover:text-[var(--teal)] transition-colors">
                <input type="checkbox" className="w-3 h-3 bg-transparent border-white/20 rounded" />
                RESTRICTED INTEL
              </label>
            </div>
          </div>

          <div className="space-y-4 p-6 border border-white/5 rounded-xl bg-black/20">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--muted)] flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-[var(--teal)]" /> Biometric Match
            </h4>
            <div className="space-y-2">
              <button className="w-full py-2 bg-white/5 border border-white/10 text-[9px] font-black text-[var(--muted)] hover:text-white uppercase tracking-widest transition-all">Upload Fingerprint</button>
              <button className="w-full py-2 bg-white/5 border border-white/10 text-[9px] font-black text-[var(--muted)] hover:text-white uppercase tracking-widest transition-all">Voice Sample Match</button>
            </div>
          </div>

          <div className="space-y-4 p-6 border border-white/5 rounded-xl bg-black/20">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--muted)] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[var(--amber)]" /> Regional Scope
            </h4>
            <select className="cyber-input w-full text-[10px] py-2 uppercase font-black tracking-widest">
              <option>Global Jurisdiction</option>
              <option>National - India</option>
              <option>Interpol Red Notice</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-[var(--muted)]">
        <SearchCheck className="w-16 h-16 mb-6 opacity-20" />
        <p className="text-sm font-mono tracking-widest uppercase opacity-40 italic">Waiting for search parameters...</p>
      </div>
    </div>
  );
}
