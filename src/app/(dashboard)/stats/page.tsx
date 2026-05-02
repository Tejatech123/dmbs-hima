"use client";

import { 
  BarChart3, 
  Activity,
  Globe,
  Users,
  TrendingUp
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
  LineElement,
  RadialLinearScale
} from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title,
  PointElement,
  LineElement,
  RadialLinearScale
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: { color: '#8ba8c8', font: { size: 10 }, padding: 20 }
    },
  },
  scales: {
    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8ba8c8' } },
    x: { grid: { display: false }, ticks: { color: '#8ba8c8' } }
  }
};

const crimeTypeData = {
  labels: ['Cyber', 'Narcotics', 'Homicide', 'Theft', 'Fraud', 'Arson'],
  datasets: [{
    label: 'Incident Volume',
    data: [150, 230, 80, 190, 110, 45],
    backgroundColor: '#00c8d4',
    borderRadius: 8
  }]
};

const statusData = {
  labels: ['Wanted', 'Arrested', 'Under Investigation', 'Cold Case'],
  datasets: [{
    data: [15, 65, 12, 8],
    backgroundColor: ['#ff2d3f', '#00e599', '#ffaa00', '#8ba8c8'],
    borderWidth: 0
  }]
};

export default function StatisticsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">System Statistics</h1>
          <p className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase">Analytical Intelligence / Global Crime Metrics</p>
        </div>
        <div className="p-3 bg-[var(--teal)]/10 border border-[var(--teal)]/20 rounded-lg">
          <Activity className="w-6 h-6 text-[var(--teal)]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="cyber-card">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-8 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[var(--teal)]" /> Crime Type Volume
          </h3>
          <div className="h-[300px]">
            <Bar data={crimeTypeData} options={chartOptions} />
          </div>
        </div>

        <div className="cyber-card">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-8 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[var(--amber)]" /> Operational Status Distribution
          </h3>
          <div className="h-[300px]">
            <Doughnut data={statusData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
