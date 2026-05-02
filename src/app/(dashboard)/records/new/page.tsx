"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Save, 
  ShieldAlert, 
  User, 
  MapPin, 
  Calendar, 
  Loader2,
  ChevronLeft,
  Fingerprint,
  Flag
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function NewRecordPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    age: "",
    nationality: "Indian",
    crime_type: "",
    status: "Wanted",
    danger_level: "3",
    location: "",
    date_of_crime: "",
    description: "",
    image_url: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const record = {
      ...formData,
      crm_id: `CRM-${Math.floor(Math.random() * 9000 + 1000)}`,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase.from('criminals').insert([record]);

    if (error) {
      alert("Database Error: " + error.message);
      setIsSaving(false);
    } else {
      router.push("/records");
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-in">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 hover:bg-white/5 rounded-full text-[var(--muted)] hover:text-white transition-all">
          <ChevronLeft size={24} />
        </button>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">File New Intel Record</h1>
          <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Supabase Cloud Persistence Layer</p>
        </div>
      </div>

      <div className="cyber-card">
        <form onSubmit={handleSubmit} className="space-y-12">
          
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--teal)] border-b border-[var(--teal)]/20 pb-2">01. Subject Identification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">1. Full Legal Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input name="name" value={formData.name} onChange={handleChange} type="text" className="cyber-input w-full pl-10" placeholder="e.g. Vikram Khanna" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">2. Known Alias</label>
                <div className="relative">
                  <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input name="alias" value={formData.alias} onChange={handleChange} type="text" className="cyber-input w-full pl-10" placeholder="e.g. The Ghost" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">3. Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input name="age" value={formData.age} onChange={handleChange} type="date" className="cyber-input w-full pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">4. Nationality</label>
                <div className="relative">
                  <Flag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input name="nationality" value={formData.nationality} onChange={handleChange} type="text" className="cyber-input w-full pl-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--primary-accent)] border-b border-[var(--primary-accent)]/20 pb-2">02. Incident Intelligence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">5. Crime Type</label>
                <div className="relative">
                  <ShieldAlert className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input name="crime_type" value={formData.crime_type} onChange={handleChange} type="text" className="cyber-input w-full pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">6. Current Status</label>
                <select name="status" value={formData.status} onChange={handleChange} className="cyber-input w-full">
                  <option>Wanted</option>
                  <option>Arrested</option>
                  <option>Under Investigation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">7. Last Known Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input name="location" value={formData.location} onChange={handleChange} type="text" className="cyber-input w-full pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">8. Date of Crime</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input name="date_of_crime" value={formData.date_of_crime} onChange={handleChange} type="date" className="cyber-input w-full pl-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--amber)] border-b border-[var(--amber)]/20 pb-2">03. Intel Documentation</h3>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Detailed Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="cyber-input w-full min-h-[100px]"></textarea>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Evidence URL</label>
              <input name="image_url" value={formData.image_url} onChange={handleChange} type="text" className="cyber-input w-full" />
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex justify-end gap-4">
            <button type="button" onClick={() => router.back()} className="cyber-btn bg-white/5 text-white hover:bg-white/10 border border-white/5">
              ABORT ENTRY
            </button>
            <button type="submit" disabled={isSaving} className="cyber-btn cyber-btn-primary flex items-center gap-2">
              {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              COMMIT TO SUPABASE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
