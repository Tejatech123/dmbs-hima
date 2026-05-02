"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Search, 
  History, 
  BarChart3, 
  FolderLock, 
  ShieldAlert,
  LogOut,
  ChevronRight,
  User
} from "lucide-react";
import { clsx } from "clsx";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/overview" },
  { icon: Users, label: "Criminal Records", href: "/records" },
  { icon: Search, label: "Advanced Search", href: "/search" },
  { icon: FolderLock, label: "Case Files", href: "/cases" },
  { icon: History, label: "Login Audit Log", href: "/audit" },
  { icon: BarChart3, label: "System Statistics", href: "/stats" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <aside className="w-72 bg-[var(--surface)] border-r border-white/5 flex flex-col h-screen fixed left-0 top-0 z-50">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--primary-accent)]/20 border border-[var(--primary-accent)]/30 rounded-lg flex items-center justify-center">
            <ShieldAlert className="w-6 h-6 text-[var(--primary-accent)]" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white">CRIM<span className="text-[var(--primary-accent)]">TRACK</span></h1>
            <p className="text-[8px] uppercase tracking-[0.2em] text-[var(--muted)]">Intel Terminal v4.6</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={clsx(
                "group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden",
                isActive ? "bg-[var(--primary-accent)]/10 text-white" : "text-[var(--muted)] hover:bg-white/5 hover:text-white"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--primary-accent)] shadow-[0_0_10px_var(--primary-accent)]"></div>
              )}
              <item.icon className={clsx("w-5 h-5", isActive ? "text-[var(--primary-accent)]" : "group-hover:text-[var(--teal)]")} />
              <span className="text-sm font-bold tracking-wide flex-1">{item.label}</span>
              <ChevronRight className={clsx("w-4 h-4 opacity-0 transition-all", isActive ? "opacity-100" : "group-hover:opacity-40")} />
            </Link>
          );
        })}
      </nav>

      {/* User Footer */}
      <div className="p-4 mt-auto border-t border-white/5 bg-black/20">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--primary-accent)] to-[var(--teal)] p-[1px]">
            <div className="w-full h-full rounded-full bg-[var(--surface)] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate">Administrator</p>
            <p className="text-[9px] text-[var(--muted)] uppercase tracking-widest">Badge #001</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-[var(--primary-accent)] font-bold text-xs hover:bg-[var(--primary-accent)]/10 transition-all"
        >
          <LogOut className="w-4 h-4" />
          TERMINATE SESSION
        </button>
      </div>
    </aside>
  );
}
