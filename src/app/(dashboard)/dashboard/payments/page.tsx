"use client";
import { DollarSign, TrendingUp, CheckCircle, Clock } from "lucide-react";

const payments = [
  { id: "PAY-001", debtor: "Nora Al-Qahtani", case: "ZD-006", amount: 18500, method: "Card", provider: "Moyasar", status: "COMPLETED", date: "2024-12-20" },
  { id: "PAY-002", debtor: "Mohammed Al-Hassan", case: "ZD-001", amount: 5000, method: "Bank Transfer", provider: "HyperPay", status: "COMPLETED", date: "2024-12-19" },
  { id: "PAY-003", debtor: "Khalid Al-Otaibi", case: "ZD-003", amount: 8800, method: "Card", provider: "Moyasar", status: "PENDING", date: "2024-12-18" },
  { id: "PAY-004", debtor: "Sara Al-Ghamdi", case: "ZD-002", amount: 12500, method: "Card", provider: "HyperPay", status: "FAILED", date: "2024-12-17" },
];

const statusColor: Record<string, string> = {
  COMPLETED: "bg-[#00B894]/20 text-[#00B894]",
  PENDING: "bg-[#FDCB6E]/20 text-[#FDCB6E]",
  FAILED: "bg-[#E17055]/20 text-[#E17055]",
};

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Payments</h1>
        <p className="text-[#8888A0] text-sm mt-0.5">Track all collections and transactions</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Gross Collections", value: "SAR 31.7M", icon: DollarSign, color: "#6C5CE7" },
          { label: "This Month", value: "SAR 4.1M", icon: TrendingUp, color: "#00B894" },
          { label: "Completed", value: "1,842", icon: CheckCircle, color: "#00CEC9" },
          { label: "Pending", value: "87", icon: Clock, color: "#FDCB6E" },
        ].map((m, i) => (
          <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-4">
            <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${m.color}15` }}><m.icon size={15} style={{ color: m.color }} /></div>
            <div className="text-xl font-black text-white">{m.value}</div>
            <div className="text-[#8888A0] text-xs mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1E1E2E]"><h2 className="text-white font-bold text-sm">Recent Transactions</h2></div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1E1E2E]">
              {["Transaction ID", "Debtor", "Case", "Amount", "Method", "Provider", "Status", "Date"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[#4A4A5A] text-xs font-semibold uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E1E2E]">
            {payments.map((p, i) => (
              <tr key={i} className="hover:bg-[#16161F] transition-colors">
                <td className="px-4 py-3.5 text-[#6C5CE7] font-mono text-xs">{p.id}</td>
                <td className="px-4 py-3.5 text-white text-sm">{p.debtor}</td>
                <td className="px-4 py-3.5 text-[#8888A0] text-sm">{p.case}</td>
                <td className="px-4 py-3.5 text-white font-semibold text-sm">SAR {p.amount.toLocaleString()}</td>
                <td className="px-4 py-3.5 text-[#8888A0] text-sm">{p.method}</td>
                <td className="px-4 py-3.5 text-[#8888A0] text-sm">{p.provider}</td>
                <td className="px-4 py-3.5"><span className={`text-xs px-2 py-1 rounded-lg font-medium ${statusColor[p.status]}`}>{p.status}</span></td>
                <td className="px-4 py-3.5 text-[#8888A0] text-sm">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
