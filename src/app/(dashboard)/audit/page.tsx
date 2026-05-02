"use client";

import { 
  History, 
  CheckCircle2, 
  XCircle, 
  UserCheck, 
  Clock,
  ShieldCheck,
  Globe,
  Monitor
} from "lucide-react";

const auditStats = [
  { label: "Total Sessions", value: "2,482", icon: History, color: "var(--teal)" },
  { label: "Successful Login", value: "2,450", icon: CheckCircle2, color: "var(--green)" },
  { label: "Failed Attempts", value: "32", icon: XCircle, color: "var(--primary-accent)" },
  { label: "Active Officers", value: "12", icon: UserCheck, color: "var(--amber)" },
];

const auditLogs = [
  { user: "admin", fullName: "Super Admin", role: "Super Admin", login: "2024-05-02 08:30:12", logout: "2024-05-02 11:20:45", duration: "2h 50m", status: "success", ip: "192.168.1.102", device: "Windows 11 / Chrome" },
  { user: "officer1", fullName: "Inspector Desai", role: "Field Inspector", login: "2024-05-02 09:15:00", logout: "2024-05-02 10:45:00", duration: "1h 30m", status: "success", ip: "10.0.0.45", device: "iOS 17 / Safari" },
];

export default function AuditPage() {
  return (
    <div className="space-y-8 animate-in">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">Login Audit Log</h1>
        <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">System Security Monitoring / Access History</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {auditStats.map((stat, i) => (
          <div key={i} className="cyber-card flex items-center gap-6">
            <div className="p-3 bg-black/40 rounded-xl border border-white/5" style={{ color: stat.color }}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-white">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cyber-card !p-0 overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-black/20 flex justify-between items-center">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--teal)]" /> Detailed Access History
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-black/40">
              <tr>
                <th className="px-6 py-4 text-[9px] uppercase tracking-widest text-[var(--muted)] font-black">Officer</th>
                <th className="px-6 py-4 text-[9px] uppercase tracking-widest text-[var(--muted)] font-black">Login / Logout</th>
                <th className="px-6 py-4 text-[9px] uppercase tracking-widest text-[var(--muted)] font-black">Status</th>
                <th className="px-6 py-4 text-[9px] uppercase tracking-widest text-[var(--muted)] font-black">System Info</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {auditLogs.map((log, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-6">
                    <p className="text-xs font-bold text-white">{log.fullName}</p>
                    <p className="text-[9px] font-mono text-[var(--muted)] uppercase">{log.user}</p>
                  </td>
                  <td className="px-6 py-6 text-[10px] text-white">
                    <div className="flex items-center gap-2 text-[var(--green)]"><Clock className="w-3 h-3" /> {log.login}</div>
                    <div className="flex items-center gap-2 text-[var(--primary-accent)]"><Clock className="w-3 h-3" /> {log.logout}</div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="px-2 py-1 rounded text-[8px] font-black uppercase tracking-tighter bg-[var(--green)]/10 text-[var(--green)]">
                      AUTHORIZED
                    </span>
                  </td>
                  <td className="px-6 py-6 text-[9px] text-[var(--muted)] uppercase tracking-widest">
                    <Globe className="w-3 h-3 inline mr-1" /> {log.ip} <br/>
                    <Monitor className="w-3 h-3 inline mr-1" /> {log.device}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
