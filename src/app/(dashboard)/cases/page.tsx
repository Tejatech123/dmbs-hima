"use client";

import { FolderLock, ShieldAlert, FileText, User, Calendar, ExternalLink, Plus } from "lucide-react";

const cases = [
  { id: "CASE-2024-001", title: "Operation Nightfall", officer: "Inspector Desai", status: "Open", date: "2024-01-10", priority: "High" },
  { id: "CASE-2024-042", title: "Red Mercury Protocol", officer: "SI Ramesh Kumar", status: "Under Investigation", date: "2024-02-05", priority: "Critical" },
  { id: "CASE-2023-982", title: "Ghost Money Hunt", officer: "Admin", status: "Cold Case", date: "2023-11-20", priority: "Medium" },
];

export default function CasesPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">Case Files</h1>
          <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Active Operations / Classified Archive</p>
        </div>
        <button className="cyber-btn cyber-btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          FILE NEW CASE
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cases.map((c) => (
          <div key={c.id} className="cyber-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--teal)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--teal)]/10 rounded-lg">
                  <FolderLock className="w-5 h-5 text-[var(--teal)]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-[var(--teal)] transition-colors uppercase">{c.title}</h3>
                  <p className="text-[9px] font-mono text-[var(--muted)] tracking-widest">{c.id}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest ${
                c.priority === 'Critical' ? 'bg-[var(--primary-accent)]/20 text-[var(--primary-accent)]' : 'bg-white/5 text-[var(--muted)]'
              }`}>
                {c.priority} PRIORITY
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <User className="w-3 h-3" />
                <span className="uppercase font-bold tracking-widest text-white/80">{c.officer}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <Calendar className="w-3 h-3" />
                <span className="tracking-widest">{c.date}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--amber)] animate-pulse"></div>
                <span className="text-[9px] font-black text-[var(--amber)] uppercase tracking-widest">{c.status}</span>
              </div>
              <button className="flex items-center gap-1 text-[10px] font-black text-[var(--teal)] hover:underline uppercase tracking-widest">
                Access Dossier <ExternalLink size={10} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
