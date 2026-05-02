"use client";

import { 
  Users, 
  ShieldAlert, 
  CheckCircle2, 
  FolderLock,
  TrendingUp,
  Activity,
  UserCircle,
  BarChart3
} from "lucide-react";
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title,
  PointElement,
  LineElement
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title,
  PointElement,
  LineElement
);

const stats = [
  { label: "Total Records", value: "1,284", icon: Users, color: "var(--teal)", trend: "+12%" },
  { label: "Most Wanted", value: "42", icon: ShieldAlert, color: "var(--primary-accent)", trend: "-2%" },
  { label: "Case Resolved", value: "856", icon: CheckCircle2, color: "var(--green)", trend: "+5%" },
  { label: "Open Investigations", value: "128", icon: FolderLock, color: "var(--amber)", trend: "+8%" },
];

const doughnutData = {
  labels: ['Wanted', 'Arrested', 'Under Investigation'],
  datasets: [{
    data: [42, 856, 128],
    backgroundColor: ['#ff2d3f', '#00e599', '#ffaa00'],
    borderWidth: 0,
    hoverOffset: 10
  }]
};

const barData = {
  labels: ['Cyber', 'Narcotics', 'Homicide', 'Theft', 'Fraud'],
  datasets: [{
    label: 'Crimes by Category',
    data: [150, 230, 80, 190, 110],
    backgroundColor: 'rgba(0, 200, 212, 0.5)',
    borderColor: '#00c8d4',
    borderWidth: 1,
    borderRadius: 5
  }]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: { color: '#8ba8c8', font: { size: 10 } }
    },
  },
  scales: {
    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8ba8c8' } },
    x: { grid: { display: false }, ticks: { color: '#8ba8c8' } }
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white mb-2">OPERATIONAL OVERVIEW</h1>
        <p className="text-[var(--muted)] text-sm font-mono tracking-widest">REAL-TIME INTELLIGENCE FEED • SECURE NODE 01</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="cyber-card group relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[var(--card)] rounded-xl border border-white/5 group-hover:border-[var(--teal)]/30 transition-all">
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--green)]">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-bold">{stat.label}</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 blur-[60px] opacity-20 pointer-events-none" style={{ backgroundColor: stat.color }}></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 cyber-card">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6 flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--teal)]" /> Subject Status Ratio
          </h3>
          <div className="h-[250px]">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
        <div className="lg:col-span-2 cyber-card">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[var(--teal)]" /> Crime Type Analysis
          </h3>
          <div className="h-[250px]">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="cyber-card">
        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6 flex items-center gap-2">
          <UserCircle className="w-4 h-4 text-[var(--primary-accent)]" /> Recent Database Updates
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-4 text-[10px] uppercase tracking-widest text-[var(--muted)]">Subject</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest text-[var(--muted)]">ID</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest text-[var(--muted)]">Crime</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest text-[var(--muted)]">Status</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest text-[var(--muted)]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { name: "John 'Ghost' Vane", id: "CRM-0012", crime: "Cyber Espionage", status: "Wanted", color: "var(--primary-accent)" },
                { name: "Sarah Miller", id: "CRM-0145", crime: "Grand Theft", status: "Arrested", color: "var(--green)" },
                { name: "Marcus Thorne", id: "CRM-0892", crime: "Narcotics", status: "Under Investigation", color: "var(--amber)" },
              ].map((item, i) => (
                <tr key={i} className="group hover:bg-white/5 transition-colors">
                  <td className="py-4 font-bold text-sm text-white">{item.name}</td>
                  <td className="py-4 font-mono text-[10px] text-[var(--muted)]">{item.id}</td>
                  <td className="py-4 text-xs text-[var(--muted)]">{item.crime}</td>
                  <td className="py-4">
                    <span className="px-2 py-1 rounded text-[8px] font-black uppercase tracking-tighter" 
                          style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="text-[10px] font-bold text-[var(--teal)] hover:underline">VIEW INTEL</button>
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
