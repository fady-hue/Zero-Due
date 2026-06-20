"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Eye } from "lucide-react";
import Link from "next/link";

const statusOptions = ["ALL", "NEW", "CONTACTED", "PROMISE_TO_PAY", "INSTALLMENT_PLAN", "SETTLEMENT_OFFERED", "PAID", "CLOSED"];

const statusColors: Record<string, string> = {
  NEW: "bg-[#1E1E2E] text-[#8888A0]",
  CONTACTED: "bg-[#6C5CE7]/20 text-[#8B7FFF]",
  PROMISE_TO_PAY: "bg-[#FDCB6E]/20 text-[#FDCB6E]",
  INSTALLMENT_PLAN: "bg-[#00CEC9]/20 text-[#00CEC9]",
  SETTLEMENT_OFFERED: "bg-[#a855f7]/20 text-[#a855f7]",
  PAID: "bg-[#00B894]/20 text-[#00B894]",
  CLOSED: "bg-[#1E1E2E] text-[#4A4A5A]",
};

const mockCases = [
  { id: "ZD-001", debtor: "Mohammed Al-Hassan", phone: "+966 50 123 4567", amount: 45000, client: "STC BNPL", status: "PROMISE_TO_PAY", daysOld: 32, agent: "Sara K.", score: 78 },
  { id: "ZD-002", debtor: "Sara Al-Ghamdi", phone: "+966 55 234 5678", amount: 12500, client: "Tamara", status: "CONTACTED", daysOld: 15, agent: "Ahmed M.", score: 62 },
  { id: "ZD-003", debtor: "Khalid Al-Otaibi", phone: "+966 54 345 6789", amount: 88200, client: "Mobily", status: "INSTALLMENT_PLAN", daysOld: 67, agent: "Sara K.", score: 45 },
  { id: "ZD-004", debtor: "Fatima Al-Zahrani", phone: "+966 56 456 7890", amount: 6800, client: "Tamara", status: "NEW", daysOld: 3, agent: "Unassigned", score: 85 },
  { id: "ZD-005", debtor: "Omar Al-Shammari", phone: "+966 58 567 8901", amount: 23100, client: "STC BNPL", status: "SETTLEMENT_OFFERED", daysOld: 90, agent: "Omar T.", score: 35 },
  { id: "ZD-006", debtor: "Nora Al-Qahtani", phone: "+966 50 678 9012", amount: 18500, client: "Tamara", status: "PAID", daysOld: 45, agent: "Ahmed M.", score: 95 },
  { id: "ZD-007", debtor: "Abdullah Al-Mutairi", phone: "+966 53 789 0123", amount: 34700, client: "Mobily", status: "CONTACTED", daysOld: 22, agent: "Sara K.", score: 58 },
  { id: "ZD-008", debtor: "Hessa Al-Dossari", phone: "+966 55 890 1234", amount: 9200, client: "STC BNPL", status: "NEW", daysOld: 7, agent: "Unassigned", score: 72 },
];

export default function CasesPage() {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("ALL");

  const filtered = mockCases.filter(c => {
    const matchSearch = c.debtor.toLowerCase().includes(search.toLowerCase()) || c.id.includes(search);
    const matchStatus = activeStatus === "ALL" || c.status === activeStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Cases</h1>
          <p className="text-[#8888A0] text-sm mt-0.5">{mockCases.length} total cases</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
          <Plus size={15} /> New Case
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A4A5A]" />
          <input type="text" placeholder="Search by debtor name or case ID..." value={search} onChange={e => setSearch(e.target.value)} className="w-full bg-[#111118] border border-[#1E1E2E] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] transition-colors" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {statusOptions.map(s => (
            <button key={s} onClick={() => setActiveStatus(s)} className={`shrink-0 text-xs px-3 py-2 rounded-lg font-medium transition-all ${
              activeStatus === s ? "bg-[#6C5CE7] text-white" : "bg-[#111118] border border-[#1E1E2E] text-[#8888A0] hover:text-white"
            }`}>{s.replace(/_/g, " ")}</button>
          ))}
        </div>
      </div>

      <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1E1E2E]">
                {["Case ID", "Debtor", "Amount", "Client", "Status", "Days Overdue", "Agent", "Score", ""].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[#4A4A5A] text-xs font-semibold uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E1E2E]">
              {filtered.map((c, i) => (
                <motion.tr key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }} className="hover:bg-[#16161F] transition-colors group">
                  <td className="px-4 py-3.5 text-[#6C5CE7] font-mono text-sm">{c.id}</td>
                  <td className="px-4 py-3.5"><div className="text-white text-sm font-medium">{c.debtor}</div><div className="text-[#4A4A5A] text-xs">{c.phone}</div></td>
                  <td className="px-4 py-3.5 text-white text-sm font-semibold">SAR {c.amount.toLocaleString()}</td>
                  <td className="px-4 py-3.5 text-[#8888A0] text-sm">{c.client}</td>
                  <td className="px-4 py-3.5"><span className={`text-xs px-2 py-1 rounded-lg font-medium ${statusColors[c.status]}`}>{c.status.replace(/_/g, " ")}</span></td>
                  <td className="px-4 py-3.5 text-[#8888A0] text-sm">{c.daysOld}d</td>
                  <td className="px-4 py-3.5 text-[#8888A0] text-sm">{c.agent}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-12 bg-[#1E1E2E] rounded-full overflow-hidden"><div className="h-full rounded-full" style={{ width: `${c.score}%`, backgroundColor: c.score > 70 ? "#00B894" : c.score > 50 ? "#FDCB6E" : "#E17055" }} /></div>
                      <span className="text-xs font-semibold" style={{ color: c.score > 70 ? "#00B894" : c.score > 50 ? "#FDCB6E" : "#E17055" }}>{c.score}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <Link href={`/dashboard/cases/${c.id}`} className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] flex items-center gap-1 text-xs">
                      <Eye size={13} /> View
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
