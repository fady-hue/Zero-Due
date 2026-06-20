"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CreditCard, Clock, CheckCircle, Download, MessageCircle, Calendar, AlertCircle } from "lucide-react";

export default function DebtorPortalPage() {
  const debt = { balance: 45000, originalAmount: 50000, client: "STC BNPL", dueDate: "2024-11-01", daysPastDue: 50, caseId: "ZD-2024-001" };
  const payments = [
    { date: "2024-10-01", amount: 5000, method: "Card", status: "COMPLETED", receipt: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="bg-[#111118] border-b border-[#1E1E2E] px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">0D</span>
            </div>
            <span className="text-white font-bold text-sm">Zero Due</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-[#00B894]" />
            <span className="text-[#00B894] text-xs">Secure Portal</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-[#6C5CE7]/20 to-[#00CEC9]/10 border border-[#6C5CE7]/30 rounded-3xl p-6">
          <p className="text-[#8888A0] text-xs mb-1">Outstanding Balance</p>
          <div className="text-4xl font-black text-white mb-1">SAR {debt.balance.toLocaleString()}</div>
          <div className="flex items-center gap-2 text-xs">
            <AlertCircle size={12} className="text-[#E17055]" />
            <span className="text-[#E17055]">{debt.daysPastDue} days overdue</span>
            <span className="text-[#4A4A5A]">·</span>
            <span className="text-[#8888A0]">{debt.client}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-bold py-4 rounded-2xl flex flex-col items-center gap-1.5 hover:opacity-90 transition-opacity">
            <CreditCard size={20} /><span className="text-sm">Pay Now</span>
          </button>
          <button className="bg-[#111118] border border-[#1E1E2E] text-white font-semibold py-4 rounded-2xl flex flex-col items-center gap-1.5 hover:border-[#6C5CE7]/40 transition-colors">
            <Calendar size={20} className="text-[#00CEC9]" /><span className="text-sm">Installment Plan</span>
          </button>
          <button className="bg-[#111118] border border-[#1E1E2E] text-white font-semibold py-4 rounded-2xl flex flex-col items-center gap-1.5 hover:border-[#6C5CE7]/40 transition-colors">
            <CheckCircle size={20} className="text-[#00B894]" /><span className="text-sm">Settlement Offer</span>
          </button>
          <button className="bg-[#111118] border border-[#1E1E2E] text-white font-semibold py-4 rounded-2xl flex flex-col items-center gap-1.5 hover:border-[#6C5CE7]/40 transition-colors">
            <MessageCircle size={20} className="text-[#FDCB6E]" /><span className="text-sm">Contact Support</span>
          </button>
        </div>

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl">
          <div className="px-5 py-4 border-b border-[#1E1E2E]"><h3 className="text-white font-bold text-sm">Payment History</h3></div>
          {payments.map((p, i) => (
            <div key={i} className="px-5 py-4 flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-semibold">SAR {p.amount.toLocaleString()}</div>
                <div className="text-[#8888A0] text-xs">{p.date} · {p.method}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-[#00B894]/20 text-[#00B894] px-2 py-1 rounded-lg">{p.status}</span>
                <button className="text-[#6C5CE7] hover:text-[#8B7FFF] transition-colors"><Download size={15} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00CEC9]/10 border border-[#00B894]/20 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle size={18} className="text-[#00B894]" />
            <span className="text-white font-bold text-sm">Special Settlement Offer</span>
          </div>
          <p className="text-[#8888A0] text-sm mb-4">Pay SAR 38,250 (15% discount) before Dec 31, 2024 to settle your account.</p>
          <button className="w-full bg-[#00B894] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">Accept Settlement — Save SAR 6,750</button>
        </div>
      </div>
    </div>
  );
}
