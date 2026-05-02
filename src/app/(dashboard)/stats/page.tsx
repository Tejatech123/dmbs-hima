"use client";

import { 
  BarChart3, 
  TrendingUp,
  Activity,
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

export default function StatsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">System Analytics</h1>
          <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Statistical Core Processing Unit</p>
        </div>
        <div className="flex items-center gap-2 text-[var(--green)] font-mono text-xs">
          <TrendingUp className="w-4 h-4" />
          +14.2% SYSTEM EFFICIENCY
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="cyber-card">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-8 flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--teal)]" /> Subject Status Distribution
          </h3>
          <div className="h-[300px]">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
        <div className="cyber-card">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-8 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[var(--teal)]" /> Monthly Crime Trends
          </h3>
          <div className="h-[300px]">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="cyber-card p-12 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex p-4 bg-[var(--teal)]/10 rounded-full border border-[var(--teal)]/20 mb-4">
            <TrendingUp className="w-8 h-8 text-[var(--teal)]" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic">Advanced Predictive Policing</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            The CrimTrack AI engine is currently analyzing historical patterns to predict potential high-risk zones. 
            Real-time biometric data and satellite feeds are being synthesized for maximum operational readiness.
          </p>
          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/5">
            <div>
              <p className="text-2xl font-black text-white">99.8%</p>
              <p className="text-[8px] uppercase tracking-widest text-[var(--muted)]">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">0.02ms</p>
              <p className="text-[8px] uppercase tracking-widest text-[var(--muted)]">Latency</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">4TB/s</p>
              <p className="text-[8px] uppercase tracking-widest text-[var(--muted)]">Throughput</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
