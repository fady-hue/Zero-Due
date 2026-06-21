"use client";
import { motion } from "framer-motion";
import { TrendingUp, FileText, DollarSign, CheckCircle, Download, AlertCircle, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const metrics = [
  { label: "Total Assigned Cases", value: "842", icon: FileText, color: "#6C5CE7" },
  { label: "Outstanding Balance", value: "SAR 18.2M", icon: DollarSign, color: "#E17055" },
  { label: "Recovered Amount", value: "SAR 12.4M", icon: TrendingUp, color: "#00B894" },
  { label: "Recovery Rate", value: "68.1%", icon: CheckCircle, color: "#00CEC9" },
];

const weeklyData = [
  { week: "W1", recovered: 820000 },
  { week: "W2", recovered: 1100000 },
  { week: "W3", recovered: 950000 },
  { week: "W4", recovered: 1430000 },
];

const trendData = [
  { month: "Sep", rate: 58 }, { month: "Oct", rate: 62 },
  { month: "Nov", rate: 65 }, { month: "Dec", rate: 68.1 },
];

const agingBuckets = [
  { label: "0-30 days", amount: 3200000, count: 124 },
  { label: "31-60 days", amount: 5800000, count: 218 },
  { label: "61-90 days", amount: 4700000, count: 187 },
  { label: "90+ days", amount: 4500000, count: 313 },
];

const tooltipStyle = { background: "#16161F", border: "1px solid #1E1E2E", borderRadius: 8, color: "#F0F0F5" };

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">0D</span>
              </div>
              <span className="text-white font-bold text-sm">Zero Due Client Portal</span>
            </div>
            <h1 className="text-2xl font-black text-white">Tamara · Collections Overview</h1>
            <p className="text-[#8888A0] text-sm mt-0.5">Last updated: Today, 10:45 AM · December 2024</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 text-sm border border-[#1E1E2E] text-[#8888A0] hover:text-white px-4 py-2.5 rounded-xl transition-colors">
              <Download size={14} /> Export PDF
            </button>
            <button className="flex items-center gap-2 text-sm border border-[#1E1E2E] text-[#8888A0] hover:text-white px-4 py-2.5 rounded-xl transition-colors">
              <Download size={14} /> Export Excel
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
              <div className="w-9 h-9 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: `${m.color}15` }}>
                <m.icon size={16} style={{ color: m.color }} />
              </div>
              <div className="text-2xl font-black text-white mb-1">{m.value}</div>
              <div className="text-[#8888A0] text-xs">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Recovery */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
            <h3 className="text-white font-bold text-sm mb-4">Weekly Collections (SAR)</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="week" stroke="#4A4A5A" tick={{ fontSize: 12, fill: "#4A4A5A" }} />
                <YAxis stroke="#4A4A5A" tick={{ fontSize: 11, fill: "#4A4A5A" }} tickFormatter={v => `${(v/1000000).toFixed(1)}M`} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`SAR ${((v as number)/1000000).toFixed(2)}M`]} />
                <Bar dataKey="recovered" fill="#6C5CE7" radius={[4, 4, 0, 0]} name="Collected" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recovery Rate Trend */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
            <h3 className="text-white font-bold text-sm mb-4">Recovery Rate Trend (%)</h3>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="month" stroke="#4A4A5A" tick={{ fontSize: 12, fill: "#4A4A5A" }} />
                <YAxis stroke="#4A4A5A" tick={{ fontSize: 11, fill: "#4A4A5A" }} domain={[50, 75]} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`]} />
                <Line type="monotone" dataKey="rate" stroke="#00B894" strokeWidth={2} dot={{ fill: "#00B894", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Aging Buckets */}
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#1E1E2E] flex items-center gap-2">
            <AlertCircle size={15} className="text-[#FDCB6E]" />
            <h3 className="text-white font-bold text-sm">Debt Aging Analysis</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E1E2E]">
                  {["Aging Bucket", "Outstanding Amount", "Number of Cases", "% of Portfolio", "Action"].map(h => (
                    <th key={h} className="text-left px-6 py-3 text-[#4A4A5A] text-xs font-semibold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E1E2E]">
                {agingBuckets.map((b, i) => {
                  const pct = ((b.amount / agingBuckets.reduce((a, x) => a + x.amount, 0)) * 100).toFixed(1);
                  return (
                    <tr key={i} className="hover:bg-[#16161F] transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">{b.label}</td>
                      <td className="px-6 py-4 text-white font-semibold text-sm">SAR {(b.amount / 1000000).toFixed(1)}M</td>
                      <td className="px-6 py-4 text-[#8888A0] text-sm">{b.count}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-20 bg-[#1E1E2E] rounded-full overflow-hidden">
                            <div className="h-full bg-[#6C5CE7] rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-[#8888A0] text-xs">{pct}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-xs text-[#6C5CE7] hover:text-[#8B7FFF] flex items-center gap-1 transition-colors">
                          View Cases <ArrowRight size={11} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
