"use client";
import { motion } from "framer-motion";
import { TrendingUp, FileText, DollarSign, CheckCircle, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const metrics = [
  { label: "Total Assigned Cases", value: "842", icon: FileText, color: "#6C5CE7" },
  { label: "Outstanding Balance", value: "SAR 18.2M", icon: DollarSign, color: "#E17055" },
  { label: "Recovered Amount", value: "SAR 12.4M", icon: TrendingUp, color: "#00B894" },
  { label: "Recovery Rate", value: "68.1%", icon: CheckCircle, color: "#00CEC9" },
];

const weeklyData = [
  { week: "W1", recovered: 820000 }, { week: "W2", recovered: 1100000 },
  { week: "W3", recovered: 950000 }, { week: "W4", recovered: 1430000 },
];

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">0D</span>
              </div>
              <span className="text-white font-bold">Zero Due</span>
            </div>
            <h1 className="text-2xl font-black text-white">Tamara · Client Portal</h1>
            <p className="text-[#8888A0] text-sm mt-0.5">Recovery performance overview</p>
          </div>
          <button className="flex items-center gap-2 text-sm border border-[#1E1E2E] text-[#8888A0] hover:text-white px-4 py-2.5 rounded-xl transition-colors">
            <Download size={14} /> Export Report
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
              <div className="w-9 h-9 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: `${m.color}15` }}><m.icon size={16} style={{ color: m.color }} /></div>
              <div className="text-2xl font-black text-white mb-1">{m.value}</div>
              <div className="text-[#8888A0] text-xs">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
            <h3 className="text-white font-bold text-sm mb-4">Weekly Recovery</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="week" stroke="#4A4A5A" tick={{ fontSize: 12 }} />
                <YAxis stroke="#4A4A5A" tick={{ fontSize: 11 }} tickFormatter={v => `${v/1000000}M`} />
                <Tooltip contentStyle={{ background: "#16161F", border: "1px solid #1E1E2E", borderRadius: 8, color: "#F0F0F5" }} />
                <Bar dataKey="recovered" fill="#6C5CE7" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
            <h3 className="text-white font-bold text-sm mb-4">Cases by Status</h3>
            <div className="space-y-3">
              {[
                { status: "Active", count: 421, pct: 50, color: "#6C5CE7" },
                { status: "Promise to Pay", count: 189, pct: 22, color: "#FDCB6E" },
                { status: "Installment Plan", count: 142, pct: 17, color: "#00CEC9" },
                { status: "Paid / Closed", count: 90, pct: 11, color: "#00B894" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1"><span className="text-[#8888A0]">{s.status}</span><span className="text-white font-semibold">{s.count}</span></div>
                  <div className="h-2 bg-[#1E1E2E] rounded-full overflow-hidden"><div className="h-full rounded-full transition-all" style={{ width: `${s.pct}%`, backgroundColor: s.color }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
