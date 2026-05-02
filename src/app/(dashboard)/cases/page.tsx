"use client";

import { 
  Lock, 
  MapPin, 
  Calendar, 
  ExternalLink,
} from "lucide-react";

const activeCases = [
  { id: "CASE-9921", title: "Project Phantom", location: "Hitech City", status: "Critical", date: "2024-05-15" },
  { id: "CASE-8842", title: "Operation Nightfall", location: "Banjara Hills", status: "Active", date: "2024-05-18" },
  { id: "CASE-7731", title: "Cyber Breach 01", location: "Gachibowli", status: "Investigating", date: "2024-05-20" },
];

export default function CasesPage() {
  return (
    <div className="space-y-8 animate-in">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">Active Case Files</h1>
        <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Ongoing Operational Protocols</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCases.map((c) => (
          <div key={c.id} className="cyber-card relative group overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-[var(--muted)] tracking-widest">{c.id}</span>
              <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-tighter ${
                c.status === 'Critical' ? 'bg-[var(--primary-accent)]/10 text-[var(--primary-accent)]' : 'bg-[var(--teal)]/10 text-[var(--teal)]'
              }`}>
                {c.status}
              </span>
            </div>
            <h3 className="text-xl font-black text-white mb-4 group-hover:text-[var(--teal)] transition-colors uppercase italic">{c.title}</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <MapPin className="w-3 h-3" />
                <span className="uppercase tracking-widest">{c.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <Calendar className="w-3 h-3" />
                <span className="uppercase tracking-widest">{c.date}</span>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[var(--teal)] hover:text-black transition-all">
              <Lock className="w-3 h-3" />
              Access Classified Data
              <ExternalLink className="w-3 h-3" />
            </button>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[var(--teal)] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          </div>
        ))}
      </div>

      <div className="cyber-card border-dashed p-20 text-center opacity-40">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--muted)]">No more active files in local cache.</p>
      </div>
    </div>
  );
}
