"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { Search, Bell, ShieldAlert } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      window.location.href = "/";
    } else {
      // Async update to avoid synchronous setState in effect warning
      Promise.resolve().then(() => setAuthorized(true));
    }
  }, []);

  if (authorized === null) return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center font-mono text-[var(--teal)] animate-pulse uppercase tracking-widest text-xs">
      Initialising Secure Connection...
    </div>
  );

  return (
    <div className="flex bg-[var(--background)] min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-72">
        <header className="h-20 bg-[var(--surface)]/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
              <input 
                type="text" 
                placeholder="QUICK SEARCH: CRIM_ID / CASE_NO / ALIAS..."
                className="w-full bg-black/30 border border-white/5 rounded-full py-2 pl-12 pr-4 text-xs font-mono text-[var(--muted)] focus:border-[var(--teal)]/50 focus:outline-none transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-[var(--muted)] hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--primary-accent)] rounded-full animate-pulse"></span>
            </button>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] font-bold text-white uppercase tracking-tighter">System Alert Level</p>
                <p className="text-[10px] font-mono text-[var(--amber)]">DEFCON 4</p>
              </div>
              <div className="p-2 bg-[var(--amber)]/10 border border-[var(--amber)]/20 rounded-lg">
                <ShieldAlert className="w-5 h-5 text-[var(--amber)]" />
              </div>
            </div>
          </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
