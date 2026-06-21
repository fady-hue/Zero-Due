"use client";
import { DollarSign, TrendingUp, CheckCircle, Clock, Download, Plus } from "lucide-react";

const payments = [
  { id: "PAY-001", debtor: "Nora Al-Qahtani", case: "ZD-006", amount: 18500, method: "Card", provider: "Moyasar", status: "COMPLETED", date: "2024-12-20", type: "Full" },
  { id: "PAY-002", debtor: "Mohammed Al-Hassan", case: "ZD-001", amount: 5000, method: "Bank Transfer", provider: "HyperPay", status: "COMPLETED", date: "2024-12-19", type: "Installment" },
  { id: "PAY-003", debtor: "Khalid Al-Otaibi", case: "ZD-003", amount: 8800, method: "Card", provider: "Moyasar", status: "PENDING", date: "2024-12-18", type: "Installment" },
  { id: "PAY-004", debtor: "Sara Al-Ghamdi", case: "ZD-002", amount: 12500, method: "Card", provider: "HyperPay", status: "FAILED", date: "2024-12-17", type: "Full" },
  { id: "PAY-005", debtor: "Turki Al-Rashidi", case: "ZD-009", amount: 38250, method: "Bank Transfer", provider: "Moyasar", status: "COMPLETED", date: "2024-12-16", type: "Settlement" },
  { id: "PAY-006", debtor: "Lina Al-Harbi", case: "ZD-010", amount: 4766, method: "Card", provider: "HyperPay", status: "COMPLETED", date: "2024-12-15", type: "Installment" },
];

const statusStyles: Record<string, string> = {
  COMPLETED: "bg-[#00B894]/20 text-[#00B894]",
  PENDING: "bg-[#FDCB6E]/20 text-[#FDCB6E]",
  FAILED: "bg-[#E17055]/20 text-[#E17055]",
};

const typeStyles: Record<string, string> = {
  Full: "bg-[#6C5CE7]/20 text-[#8B7FFF]",
  Installment: "bg-[#00CEC9]/20 text-[#00CEC9]",
  Settlement: "bg-[#a855f7]/20 text-[#a855f7]",
};

export default function PaymentsPage() {
  const total = payments.filter(p => p.status === "COMPLETED").reduce((a, p) => a + p.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Payments</h1>
          <p className="text-[#8888A0] text-sm mt-0.5">Track all collections and transactions</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm border border-[#1E1E2E] text-[#8888A0] hover:text-white px-4 py-2.5 rounded-xl transition-colors">
            <Download size={14} /> Export
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90">
            <Plus size={15} /> Add Payment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Gross Collections", value: `SAR ${(total / 1000).toFixed(0)}K`, icon: DollarSign, color: "#6C5CE7" },
          { label: "This Month", value: "SAR 4.1M", icon: TrendingUp, color: "#00B894" },
          { label: "Completed", value: `${payments.filter(p => p.status === "COMPLETED").length}`, icon: CheckCircle, color: "#00CEC9" },
          { label: "Pending", value: `${payments.filter(p => p.status === "PENDING").length}`, icon: Clock, color: "#FDCB6E" },
        ].map((m, i) => (
          <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-4">
            <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${m.color}15` }}>
              <m.icon size={15} style={{ color: m.color }} />
            </div>
            <div className="text-xl font-black text-white">{m.value}</div>
            <div className="text-[#8888A0] text-xs mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
        <h3 className="text-white font-bold text-sm mb-4">Revenue Reconciliation (This Month)</h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: "Gross Collections", value: "SAR 4,100,000", color: "#F0F0F5" },
            { label: "Client Share (70%)", value: "SAR 2,870,000", color: "#8888A0" },
            { label: "Zero Due Fee (30%)", value: "SAR 1,230,000", color: "#6C5CE7" },
            { label: "VAT (15%)", value: "SAR 184,500", color: "#FDCB6E" },
            { label: "Net Revenue", value: "SAR 1,045,500", color: "#00B894" },
          ].map((r, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-black" style={{ color: r.color }}>{r.value}</div>
              <div className="text-[#4A4A5A] text-xs mt-0.5">{r.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1E1E2E] flex items-center justify-between">
          <h2 className="text-white font-bold text-sm">Recent Transactions</h2>
          <span className="text-[#8888A0] text-xs">{payments.length} transactions</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1E1E2E]">
                {["ID", "Debtor", "Case", "Amount", "Type", "Method", "Provider", "Status", "Date", ""].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[#4A4A5A] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E1E2E]">
              {payments.map((p, i) => (
                <tr key={i} className="hover:bg-[#16161F] transition-colors">
                  <td className="px-4 py-3.5 text-[#6C5CE7] font-mono text-xs">{p.id}</td>
                  <td className="px-4 py-3.5 text-white text-sm font-medium whitespace-nowrap">{p.debtor}</td>
                  <td className="px-4 py-3.5 text-[#8888A0] text-sm">{p.case}</td>
                  <td className="px-4 py-3.5 text-white font-semibold text-sm whitespace-nowrap">SAR {p.amount.toLocaleString()}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs px-2 py-1 rounded-lg font-medium ${typeStyles[p.type]}`}>{p.type}</span>
                  </td>
                  <td className="px-4 py-3.5 text-[#8888A0] text-sm">{p.method}</td>
                  <td className="px-4 py-3.5 text-[#8888A0] text-sm">{p.provider}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs px-2 py-1 rounded-lg font-medium ${statusStyles[p.status]}`}>{p.status}</span>
                  </td>
                  <td className="px-4 py-3.5 text-[#8888A0] text-sm whitespace-nowrap">{p.date}</td>
                  <td className="px-4 py-3.5">
                    <button className="text-[#6C5CE7] hover:text-[#8B7FFF] transition-colors p-1">
                      <Download size={14} />
                    </button>
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
