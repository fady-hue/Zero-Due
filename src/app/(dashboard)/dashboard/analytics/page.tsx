"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend,
} from "recharts";

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

const rateData = [
  { month: "Jul", rate: 58 }, { month: "Aug", rate: 61 },
  { month: "Sep", rate: 55 }, { month: "Oct", rate: 63 },
  { month: "Nov", rate: 67 }, { month: "Dec", rate: 65.8 },
];

const clientPerf = [
  { name: "Tamara", rate: 68.1, recovered: 12400000 },
  { name: "STC BNPL", rate: 62.2, recovered: 9200000 },
  { name: "Mobily", rate: 74.7, recovered: 7100000 },
  { name: "Stc", rate: 70.7, recovered: 5800000 },
  { name: "Raqamyah", rate: 52.5, recovered: 3200000 },
];

const tooltipStyle = { background: "#16161F", border: "1px solid #1E1E2E", borderRadius: 8, color: "#F0F0F5" };

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Analytics</h1>
        <p className="text-[#8888A0] text-sm mt-0.5">Performance metrics and recovery trends</p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Collected", value: "SAR 31.7M", sub: "All time" },
          { label: "Avg Recovery Rate", value: "65.8%", sub: "Last 6 months" },
          { label: "Avg Days to Collect", value: "28 days", sub: "Per case" },
          { label: "Total Cases Closed", value: "1,842", sub: "Paid & settled" },
        ].map((k, i) => (
          <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-4">
            <div className="text-2xl font-black gradient-text mb-1">{k.value}</div>
            <div className="text-white text-sm font-medium">{k.label}</div>
            <div className="text-[#4A4A5A] text-xs">{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Collections */}
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">Monthly Collections vs Target (SAR)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
              <XAxis dataKey="month" stroke="#4A4A5A" tick={{ fontSize: 12, fill: "#4A4A5A" }} />
              <YAxis stroke="#4A4A5A" tick={{ fontSize: 11, fill: "#4A4A5A" }} tickFormatter={v => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`SAR ${((v as number) / 1000000).toFixed(2)}M`]} />
              <Bar dataKey="collected" fill="#6C5CE7" radius={[4, 4, 0, 0]} name="Collected" />
              <Bar dataKey="target" fill="#1E1E2E" radius={[4, 4, 0, 0]} name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Aging Buckets */}
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">Debt Aging Buckets</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={agingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
              <XAxis dataKey="bucket" stroke="#4A4A5A" tick={{ fontSize: 12, fill: "#4A4A5A" }} />
              <YAxis stroke="#4A4A5A" tick={{ fontSize: 11, fill: "#4A4A5A" }} tickFormatter={v => `${(v / 1000000).toFixed(0)}M`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`SAR ${((v as number) / 1000000).toFixed(2)}M`]} />
              <Bar dataKey="amount" fill="#00CEC9" radius={[4, 4, 0, 0]} name="Outstanding" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recovery Rate Trend */}
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">Recovery Rate Trend (%)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={rateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
              <XAxis dataKey="month" stroke="#4A4A5A" tick={{ fontSize: 12, fill: "#4A4A5A" }} />
              <YAxis stroke="#4A4A5A" tick={{ fontSize: 11, fill: "#4A4A5A" }} domain={[50, 75]} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`]} />
              <Line type="monotone" dataKey="rate" stroke="#6C5CE7" strokeWidth={2} dot={{ fill: "#6C5CE7", r: 4 }} name="Rate" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Channel Performance */}
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
            <div className="space-y-3 flex-1">
              {channelData.map((ch, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: ch.color }} />
                  <span className="text-[#8888A0] text-sm flex-1">{ch.name}</span>
                  <span className="text-white font-semibold text-sm">{ch.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Performance Table */}
      <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1E1E2E]">
          <h3 className="text-white font-bold text-sm">Client Performance Comparison</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1E1E2E]">
              {["Client", "Recovery Rate", "Amount Recovered", "Performance"].map(h => (
                <th key={h} className="text-left px-6 py-3 text-[#4A4A5A] text-xs font-semibold uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E1E2E]">
            {clientPerf.map((c, i) => (
              <tr key={i} className="hover:bg-[#16161F] transition-colors">
                <td className="px-6 py-4 text-white font-semibold text-sm">{c.name}</td>
                <td className="px-6 py-4">
                  <span className="text-white font-bold" style={{ color: c.rate > 70 ? "#00B894" : c.rate > 60 ? "#FDCB6E" : "#E17055" }}>
                    {c.rate}%
                  </span>
                </td>
                <td className="px-6 py-4 text-white text-sm">SAR {(c.recovered / 1000000).toFixed(1)}M</td>
                <td className="px-6 py-4">
                  <div className="h-2 w-32 bg-[#1E1E2E] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${c.rate}%`,
                        backgroundColor: c.rate > 70 ? "#00B894" : c.rate > 60 ? "#FDCB6E" : "#E17055",
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
