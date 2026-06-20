"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, FileText, CheckCircle, Clock, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const metrics = [
  { label: "Total Assigned Debt", value: "SAR 48.2M", change: "+12.4%", up: true, icon: DollarSign, color: "#6C5CE7" },
  { label: "Total Recovered", value: "SAR 31.7M", change: "+8.2%", up: true, icon: TrendingUp, color: "#00B894" },
  { label: "Recovery Rate", value: "65.8%", change: "+3.1%", up: true, icon: CheckCircle, color: "#00CEC9" },
  { label: "Active Cases", value: "2,847", change: "-5.3%", up: false, icon: FileText, color: "#FDCB6E" },
  { label: "Open PTP", value: "423", change: "+2.1%", up: true, icon: Clock, color: "#a855f7" },
  { label: "Monthly Collections", value: "SAR 4.1M", change: "+18.7%", up: true, icon: TrendingUp, color: "#E17055" },
];

const recentCases = [
  { id: "ZD-2024-001", debtor: "Mohammed Al-Hassan", amount: "SAR 45,000", client: "STC BNPL", status: "PROMISE_TO_PAY", daysOld: 32, score: 78 },
  { id: "ZD-2024-002", debtor: "Sara Al-Ghamdi", amount: "SAR 12,500", client: "Tamara", status: "CONTACTED", daysOld: 15, score: 62 },
  { id: "ZD-2024-003", debtor: "Khalid Al-Otaibi", amount: "SAR 88,200", client: "Mobily", status: "INSTALLMENT_PLAN", daysOld: 67, score: 45 },
  { id: "ZD-2024-004", debtor: "Fatima Al-Zahrani", amount: "SAR 6,800", client: "Tamara", status: "NEW", daysOld: 3, score: 85 },
  { id: "ZD-2024-005", debtor: "Omar Al-Shammari", amount: "SAR 23,100", client: "STC BNPL", status: "SETTLEMENT_OFFERED", daysOld: 90, score: 35 },
];

const statusColors: Record<string, string> = {
  NEW: "bg-[#1E1E2E] text-[#8888A0]",
  CONTACTED: "bg-[#6C5CE7]/20 text-[#8B7FFF]",
  PROMISE_TO_PAY: "bg-[#FDCB6E]/20 text-[#FDCB6E]",
  INSTALLMENT_PLAN: "bg-[#00CEC9]/20 text-[#00CEC9]",
  SETTLEMENT_OFFERED: "bg-[#a855f7]/20 text-[#a855f7]",
  PAID: "bg-[#00B894]/20 text-[#00B894]",
};

const aiRecommendations = [
  { case: "ZD-2024-001", action: "Send WhatsApp reminder", reason: "PTP due in 2 days", priority: "HIGH", channel: "WhatsApp" },
  { case: "ZD-2024-005", action: "Escalate settlement offer", reason: "90+ days overdue, low score", priority: "HIGH", channel: "Email" },
  { case: "ZD-2024-002", action: "Schedule morning call", reason: "Best contact: 9-11 AM SAT", priority: "MEDIUM", channel: "Call" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Collections Dashboard</h1>
          <p className="text-[#8888A0] text-sm mt-0.5">Overview of all collection activities · Updated just now</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-[#111118] border border-[#1E1E2E] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#6C5CE7]">
            <option>All Clients</option><option>Tamara</option><option>STC BNPL</option><option>Mobily</option>
          </select>
          <select className="bg-[#111118] border border-[#1E1E2E] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#6C5CE7]">
            <option>This Month</option><option>Last Month</option><option>Last Quarter</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${m.color}15` }}>
                <m.icon size={15} style={{ color: m.color }} />
              </div>
              <span className={`text-xs font-semibold flex items-center gap-0.5 ${m.up ? "text-[#00B894]" : "text-[#E17055]"}`}>
                {m.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}{m.change}
              </span>
            </div>
            <div className="text-xl font-black text-white mb-0.5">{m.value}</div>
            <div className="text-[#8888A0] text-xs">{m.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#111118] border border-[#1E1E2E] rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E1E2E]">
            <h2 className="text-white font-bold text-sm">Recent Cases</h2>
            <Link href="/dashboard/cases" className="text-[#6C5CE7] text-xs hover:text-[#8B7FFF] flex items-center gap-1">View all <ArrowRight size={12} /></Link>
          </div>
          <div className="divide-y divide-[#1E1E2E]">
            {recentCases.map((c, i) => (
              <div key={i} className="px-6 py-3.5 hover:bg-[#16161F] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1E1E2E] rounded-full flex items-center justify-center text-[#8B7FFF] font-bold text-xs">
                      {c.debtor.split(" ").map(n => n[0]).join("").slice(0,2)}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{c.debtor}</div>
                      <div className="text-[#4A4A5A] text-xs">{c.id} · {c.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <div className="text-white text-sm font-semibold">{c.amount}</div>
                      <div className="text-[#4A4A5A] text-xs">{c.daysOld}d overdue</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-lg font-medium ${statusColors[c.status] || "bg-[#1E1E2E] text-[#8888A0]"}`}>{c.status.replace(/_/g, " ")}</span>
                    <div className="w-8 h-8 rounded-full bg-[#1E1E2E] flex items-center justify-center text-xs font-bold" style={{ color: c.score > 70 ? "#00B894" : c.score > 50 ? "#FDCB6E" : "#E17055" }}>{c.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl">
          <div className="px-6 py-4 border-b border-[#1E1E2E] flex items-center gap-2">
            <Zap size={15} className="text-[#6C5CE7]" />
            <h2 className="text-white font-bold text-sm">AI Recommendations</h2>
          </div>
          <div className="p-4 space-y-3">
            {aiRecommendations.map((r, i) => (
              <div key={i} className="bg-[#0A0A0F] rounded-xl p-4 border border-[#1E1E2E]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#6C5CE7] text-xs font-mono">{r.case}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.priority === "HIGH" ? "bg-[#E17055]/20 text-[#E17055]" : "bg-[#FDCB6E]/20 text-[#FDCB6E]"}`}>{r.priority}</span>
                </div>
                <div className="text-white text-sm font-medium mb-1">{r.action}</div>
                <div className="text-[#8888A0] text-xs mb-3">{r.reason}</div>
                <button className="w-full text-xs bg-[#6C5CE7]/15 text-[#8B7FFF] border border-[#6C5CE7]/20 rounded-lg py-2 hover:bg-[#6C5CE7]/25 transition-colors">Execute via {r.channel}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
