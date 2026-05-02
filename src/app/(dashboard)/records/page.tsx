"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  Search, 
  Plus, 
  ShieldAlert, 
  MapPin, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RecordsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [criminals, setCriminals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCriminals = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('criminals')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching data:', error);
      setCriminals([]);
    } else {
      setCriminals(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCriminals();
  }, [fetchCriminals]);

  const handleDelete = async (id: string) => {
    if (!confirm("TERMINATE RECORD PERMANENTLY?")) return;
    
    const { error } = await supabase
      .from('criminals')
      .delete()
      .eq('id', id);

    if (error) alert("Access Denied: " + error.message);
    else fetchCriminals();
  };

  const filteredCriminals = criminals.filter(c => {
    const matchesFilter = filter === "All" || c.status === filter;
    const matchesSearch = c.name?.toLowerCase().includes(search.toLowerCase()) || c.crm_id?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">Criminal Records</h1>
          <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Supabase Intelligence Feed / Live Node</p>
        </div>
        <Link href="/records/new" className="cyber-btn cyber-btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          FILE NEW RECORD
        </Link>
      </div>

      <div className="cyber-card p-4 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
          <input 
            type="text" 
            placeholder="SEARCH BY NAME / CRM_ID / ALIAS..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="cyber-input w-full pl-12"
          />
        </div>
        <div className="flex items-center gap-2 p-1 bg-black/40 rounded-lg border border-white/5">
          {["All", "Wanted", "Arrested", "Under Investigation"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-wider transition-all ${
                filter === f ? "bg-[var(--teal)] text-black" : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-[var(--teal)]" />
          <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">Accessing Supabase Grid...</p>
        </div>
      ) : filteredCriminals.length === 0 ? (
        <div className="cyber-card p-20 text-center">
          <p className="text-[var(--muted)] font-mono uppercase tracking-[0.3em]">No records found in current node.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCriminals.map((criminal) => (
            <div key={criminal.id} className="cyber-card group !p-0 overflow-hidden relative" 
                 style={{ borderLeft: `4px solid ${criminal.status === 'Wanted' ? 'var(--primary-accent)' : criminal.status === 'Arrested' ? 'var(--green)' : 'var(--amber)'}` }}>
              <div className="flex">
                <div className="w-1/3 relative h-auto min-h-[200px]">
                  {/* Using standard img but with suppression since URLs are dynamic from Unsplash/Supabase */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={criminal.image_url || "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400"} alt={criminal.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--card)]"></div>
                </div>
                <div className="w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-[var(--muted)] tracking-widest">{criminal.crm_id}</span>
                      <div className="flex gap-1">
                        <Link href={`/records/edit/${criminal.id}`} className="p-1 hover:text-[var(--teal)] transition-colors"><Edit2 size={14} /></Link>
                        <button onClick={() => handleDelete(criminal.id)} className="p-1 hover:text-[var(--primary-accent)] transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white group-hover:text-[var(--teal)] transition-colors uppercase">{criminal.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] mb-4 italic">AKA: {criminal.alias || 'UNKNOWN'}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                      <ShieldAlert className="w-3 h-3 text-[var(--primary-accent)]" />
                      <span className="font-bold uppercase tracking-widest">{criminal.crime_type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                      <MapPin className="w-3 h-3" />
                      <span className="uppercase tracking-widest">{criminal.location || 'UNKNOWN'}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase px-2 py-1 rounded" 
                          style={{ 
                            backgroundColor: criminal.status === 'Wanted' ? 'var(--primary-accent)20' : criminal.status === 'Arrested' ? 'var(--green)20' : 'var(--amber)20',
                            color: criminal.status === 'Wanted' ? 'var(--primary-accent)' : criminal.status === 'Arrested' ? 'var(--green)' : 'var(--amber)'
                          }}>
                      {criminal.status}
                    </span>
                    <button className="flex items-center gap-1 text-[10px] font-black text-[var(--teal)] hover:underline uppercase tracking-widest">
                      Open Intel <ExternalLink size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
