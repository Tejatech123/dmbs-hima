"use client";

import { useState } from "react";
import { Shield, Lock, User, ArrowRight, AlertTriangle } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate Auth
    setTimeout(() => {
      if (
        (username === "admin" && password === "admin123") ||
        (username === "officer1" && password === "pass123") ||
        (username === "officer2" && password === "pass456")
      ) {
        localStorage.setItem("user", JSON.stringify({ username, role: username === 'admin' ? 'admin' : 'officer' }));
        window.location.href = "/records";
      } else {
        setError("ACCESS DENIED: INVALID CREDENTIALS");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] p-4">
      <div className="fixed inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--teal) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="w-full max-w-[450px] relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 mb-6 relative">
            <div className="absolute inset-0 bg-[var(--primary-accent)] rotate-45 rounded-xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-[var(--primary-accent)] rotate-45 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="w-12 h-12 text-[var(--primary-accent)]" />
            </div>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white mb-2 italic">
            CRIM<span className="text-[var(--primary-accent)]">TRACK</span>
          </h1>
          <div className="flex items-center gap-2 px-3 py-1 bg-[var(--green)]/10 border border-[var(--green)]/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse"></div>
            <span className="text-[var(--green)] text-[10px] font-bold tracking-[0.2em] uppercase">Secure Connection Established</span>
          </div>
        </div>

        <div className="cyber-card backdrop-blur-xl border-white/10 p-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-8 flex items-center gap-2">
            <Lock className="w-3 h-3" /> System Authentication Required
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Terminal ID / Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="cyber-input w-full pl-10"
                  placeholder="ID: ALPHA-001"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Access Key / Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="cyber-input w-full pl-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-3 bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20 rounded-lg animate-shake">
                <AlertTriangle className="w-5 h-5 text-[var(--primary-accent)]" />
                <span className="text-[11px] font-bold text-[var(--primary-accent)] tracking-wider">{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="cyber-btn cyber-btn-primary w-full group overflow-hidden"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Access System
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              )}
              <div className="absolute inset-0 bg-white/5 -translate-y-full animate-scanline pointer-events-none"></div>
            </button>
          </form>
        </div>

        <div className="mt-8 p-4 bg-black/40 border border-white/5 rounded-xl">
          <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3 text-center">Development Clearance Credentials</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 border border-white/5 rounded-lg">
              <span className="block text-[var(--teal)] font-bold text-[10px]">admin</span>
              <span className="block text-[8px] text-[var(--muted)]">admin123</span>
            </div>
            <div className="text-center p-2 border border-white/5 rounded-lg">
              <span className="block text-[var(--teal)] font-bold text-[10px]">officer1</span>
              <span className="block text-[8px] text-[var(--muted)]">pass123</span>
            </div>
            <div className="text-center p-2 border border-white/5 rounded-lg">
              <span className="block text-[var(--teal)] font-bold text-[10px]">officer2</span>
              <span className="block text-[8px] text-[var(--muted)]">pass456</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
}
