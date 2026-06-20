"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { month: "Jul", collected: 2800000, target: 3000000 },
  { month: "Aug", collected: 3100000, target: 3200000 },
  { month: "Sep", collected: 2600000, target: 3000000 },
  { month: "Oct", collected: 3500000, target: 3500000 },
  { month: "Nov", collected: 3800000, target: 3800000 },
  { month: "Dec", collected: 4100000, target: 4000000 },
];

const agingData = [
  { bucket: "0-30d", amount: 8200000, count: 342 },
  { bucket: "31-60d", amount: 12500000, count: 521 },
  { bucket: "61-90d", amount: 9800000, count: 412 },
  { bucket: "91-120d", amount: 7200000, count: 298 },
  { bucket: "120d+", amount: 10500000, count: 438 },
];

const channelData = [
  { name: "WhatsApp", value: 42, color: "#25D366" },
  { name: "SMS", value: 28, color: "#6C5CE7" },
  { name: "Email", value: 18, color: "#00CEC9" },
  { name: "Call", value: 12, color: "#FDCB6E" },
];

const fmt = (v: number) => `SAR ${(v / 1000000).toFixed(1)}M`;

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Analytics</h1>
        <p className="text-[#8888A0] text-sm mt-0.5">Performance metrics and recovery trends</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">Monthly Collections vs Target</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
              <XAxis dataKey="month" stroke="#4A4A5A" tick={{ fontSize: 12 }} />
              <YAxis stroke="#4A4A5A" tick={{ fontSize: 11 }} tickFormatter={v => `${v/1000000}M`} />
              <Tooltip contentStyle={{ background: "#16161F", border: "1px solid #1E1E2E", borderRadius: 8, color: "#F0F0F5" }} formatter={(v: number) => [fmt(v)]} />
              <Bar dataKey="collected" fill="#6C5CE7" radius={[4,4,0,0]} name="Collected" />
              <Bar dataKey="target" fill="#1E1E2E" radius={[4,4,0,0]} name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">Debt Aging Buckets</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={agingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
              <XAxis dataKey="bucket" stroke="#4A4A5A" tick={{ fontSize: 12 }} />
              <YAxis stroke="#4A4A5A" tick={{ fontSize: 11 }} tickFormatter={v => `${v/1000000}M`} />
              <Tooltip contentStyle={{ background: "#16161F", border: "1px solid #1E1E2E", borderRadius: 8, color: "#F0F0F5" }} formatter={(v: number) => [fmt(v)]} />
              <Bar dataKey="amount" fill="#00CEC9" radius={[4,4,0,0]} name="Outstanding" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">Recovery by Channel</h3>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie data={channelData} cx={75} cy={75} innerRadius={45} outerRadius={70} dataKey="value">
                  {channelData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {channelData.map((ch, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ch.color }} />
                  <span className="text-[#8888A0] text-sm">{ch.name}</span>
                  <span className="text-white font-semibold text-sm ml-auto">{ch.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">Recovery Rate Trend</h3>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={[
              { month: "Jul", rate: 58 }, { month: "Aug", rate: 61 },
              { month: "Sep", rate: 55 }, { month: "Oct", rate: 63 },
              { month: "Nov", rate: 67 }, { month: "Dec", rate: 65.8 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
              <XAxis dataKey="month" stroke="#4A4A5A" tick={{ fontSize: 12 }} />
              <YAxis stroke="#4A4A5A" tick={{ fontSize: 11 }} domain={[50, 75]} />
              <Tooltip contentStyle={{ background: "#16161F", border: "1px solid #1E1E2E", borderRadius: 8, color: "#F0F0F5" }} />
              <Line type="monotone" dataKey="rate" stroke="#6C5CE7" strokeWidth={2} dot={{ fill: "#6C5CE7" }} name="Rate %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
