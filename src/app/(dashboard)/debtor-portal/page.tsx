"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, CreditCard, Clock, CheckCircle, Download, MessageCircle, Calendar, AlertCircle, X, ArrowRight } from "lucide-react";

type Modal = "pay" | "installment" | "settlement" | "support" | null;

export default function DebtorPortalPage() {
  const [modal, setModal] = useState<Modal>(null);
  const [payAmount, setPayAmount] = useState("");
  const [settlementAccepted, setSettlementAccepted] = useState(false);

  const debt = {
    balance: 45000, originalAmount: 50000, client: "STC BNPL",
    dueDate: "2024-11-01", daysPastDue: 50, caseId: "ZD-2024-001",
    debtor: "Mohammed Al-Hassan",
  };
  const payments = [
    { date: "2024-10-01", amount: 5000, method: "Card", status: "COMPLETED" },
  ];
  const settlementAmount = Math.round(debt.balance * 0.85);

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="bg-[#111118] border-b border-[#1E1E2E] px-4 py-4 sticky top-0 z-10">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">0D</span>
            </div>
            <span className="text-white font-bold text-sm">Zero Due</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Shield size={13} className="text-[#00B894]" />
            <span className="text-[#00B894]">Secure Portal</span>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-4 pb-12">
        <div>
          <h2 className="text-white font-black text-xl">Welcome, {debt.debtor.split(" ")[0]}</h2>
          <p className="text-[#8888A0] text-sm">Manage your account securely</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#6C5CE7]/20 via-[#6C5CE7]/10 to-[#00CEC9]/10 border border-[#6C5CE7]/30 rounded-3xl p-6">
          <p className="text-[#8888A0] text-xs mb-1 uppercase tracking-wider">Outstanding Balance</p>
          <div className="text-4xl font-black text-white mb-1">SAR {debt.balance.toLocaleString()}</div>
          <div className="text-xs text-[#8888A0] mb-4">Original: SAR {debt.originalAmount.toLocaleString()} · {debt.client}</div>
          <div className="flex items-center gap-2">
            <AlertCircle size={13} className="text-[#E17055] shrink-0" />
            <span className="text-[#E17055] text-xs font-medium">{debt.daysPastDue} days past due since {debt.dueDate}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <motion.button initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
            onClick={() => setModal("pay")}
            className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-bold py-5 rounded-2xl flex flex-col items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-[#6C5CE7]/20"
          >
            <CreditCard size={22} />
            <span className="text-sm">Pay Now</span>
          </motion.button>
          <motion.button initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}
            onClick={() => setModal("installment")}
            className="bg-[#111118] border border-[#1E1E2E] text-white font-semibold py-5 rounded-2xl flex flex-col items-center gap-2 hover:border-[#6C5CE7]/40 transition-colors"
          >
            <Calendar size={22} className="text-[#00CEC9]" />
            <span className="text-sm">Installment Plan</span>
          </motion.button>
          <motion.button initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            onClick={() => setModal("settlement")}
            className="bg-[#111118] border border-[#1E1E2E] text-white font-semibold py-5 rounded-2xl flex flex-col items-center gap-2 hover:border-[#00B894]/40 transition-colors"
          >
            <CheckCircle size={22} className="text-[#00B894]" />
            <span className="text-sm">Settlement</span>
          </motion.button>
          <motion.button initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}
            onClick={() => setModal("support")}
            className="bg-[#111118] border border-[#1E1E2E] text-white font-semibold py-5 rounded-2xl flex flex-col items-center gap-2 hover:border-[#FDCB6E]/40 transition-colors"
          >
            <MessageCircle size={22} className="text-[#FDCB6E]" />
            <span className="text-sm">Support</span>
          </motion.button>
        </div>

        {!settlementAccepted && (
          <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00CEC9]/10 border border-[#00B894]/25 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse" />
              <span className="text-[#00B894] font-bold text-sm">Limited Time Offer</span>
            </div>
            <p className="text-white font-semibold mb-1">Settle for SAR {settlementAmount.toLocaleString()} — Save SAR {(debt.balance - settlementAmount).toLocaleString()}</p>
            <p className="text-[#8888A0] text-xs mb-4">15% discount valid until December 31, 2024. One-time payment.</p>
            <button onClick={() => setModal("settlement")} className="w-full bg-[#00B894] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Accept Settlement <ArrowRight size={15} />
            </button>
          </div>
        )}

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#1E1E2E]">
            <h3 className="text-white font-bold text-sm">Payment History</h3>
          </div>
          {payments.map((p, i) => (
            <div key={i} className="px-5 py-4 flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-semibold">SAR {p.amount.toLocaleString()}</div>
                <div className="text-[#8888A0] text-xs">{p.date} · {p.method}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-[#00B894]/20 text-[#00B894] px-2 py-1 rounded-lg">{p.status}</span>
                <button className="text-[#6C5CE7] hover:text-[#8B7FFF] transition-colors p-1"><Download size={15} /></button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#4A4A5A] text-xs">
          Case #{debt.caseId} · Managed by Zero Due on behalf of {debt.client}<br />
          All communications are encrypted and secure.
        </p>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-end sm:items-center justify-center z-50 p-4"
            onClick={() => setModal(null)}
          >
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              className="bg-[#16161F] border border-[#1E1E2E] rounded-3xl p-6 w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-lg">
                  {modal === "pay" && "Make a Payment"}
                  {modal === "installment" && "Request Installment Plan"}
                  {modal === "settlement" && "Settlement Offer"}
                  {modal === "support" && "Contact Support"}
                </h3>
                <button onClick={() => setModal(null)} className="p-1.5 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] transition-all"><X size={18} /></button>
              </div>

              {modal === "pay" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-[#8888A0] text-xs mb-1 block">Amount to Pay (SAR)</label>
                    <input type="number" placeholder={debt.balance.toString()} value={payAmount} onChange={e => setPayAmount(e.target.value)}
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-white text-lg font-bold focus:outline-none focus:border-[#6C5CE7]"
                    />
                    <p className="text-[#4A4A5A] text-xs mt-1">Full balance: SAR {debt.balance.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-[#8888A0] text-xs mb-2 block">Payment Method</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Credit Card", "Mada Debit", "Apple Pay", "Bank Transfer"].map(m => (
                        <button key={m} className="border border-[#1E1E2E] hover:border-[#6C5CE7] text-[#8888A0] hover:text-white text-sm py-3 rounded-xl transition-all">{m}</button>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Shield size={16} /> Pay Securely
                  </button>
                  <p className="text-center text-[#4A4A5A] text-xs">Secured by HyperPay & Moyasar · 256-bit SSL</p>
                </div>
              )}

              {modal === "installment" && (
                <div className="space-y-4">
                  <p className="text-[#8888A0] text-sm">Choose a plan that works for you. All plans are interest-free.</p>
                  {[
                    { months: 3, amount: Math.ceil(debt.balance / 3) },
                    { months: 6, amount: Math.ceil(debt.balance / 6) },
                    { months: 12, amount: Math.ceil(debt.balance / 12) },
                  ].map(p => (
                    <div key={p.months} className="border border-[#1E1E2E] hover:border-[#6C5CE7] rounded-xl p-4 cursor-pointer transition-colors group">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold">{p.months} Monthly Payments</div>
                          <div className="text-[#8888A0] text-sm">SAR {p.amount.toLocaleString()} / month</div>
                        </div>
                        <ArrowRight size={16} className="text-[#4A4A5A] group-hover:text-[#6C5CE7] transition-colors" />
                      </div>
                    </div>
                  ))}
                  <button className="w-full bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-bold py-4 rounded-xl hover:opacity-90">Submit Request</button>
                </div>
              )}

              {modal === "settlement" && (
                <div className="space-y-4">
                  <div className="bg-[#00B894]/10 border border-[#00B894]/20 rounded-2xl p-4 text-center">
                    <p className="text-[#8888A0] text-xs mb-1">Settlement Amount</p>
                    <p className="text-4xl font-black text-white">SAR {settlementAmount.toLocaleString()}</p>
                    <p className="text-[#00B894] text-sm mt-1">You save SAR {(debt.balance - settlementAmount).toLocaleString()} (15% off)</p>
                  </div>
                  <p className="text-[#8888A0] text-sm">By accepting, you agree to pay SAR {settlementAmount.toLocaleString()} as full and final settlement of your SAR {debt.balance.toLocaleString()} debt. Offer valid until December 31, 2024.</p>
                  <button onClick={() => { setSettlementAccepted(true); setModal(null); }}
                    className="w-full bg-[#00B894] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity">
                    Accept & Pay SAR {settlementAmount.toLocaleString()}
                  </button>
                </div>
              )}

              {modal === "support" && (
                <div className="space-y-4">
                  <p className="text-[#8888A0] text-sm">Our team is available 9 AM – 9 PM, Saturday to Thursday.</p>
                  <div className="space-y-3">
                    {[
                      { label: "WhatsApp", value: "+966 11 000 0000", icon: MessageCircle, color: "#25D366" },
                      { label: "Email", value: "support@zerodue.co", icon: MessageCircle, color: "#6C5CE7" },
                    ].map(c => (
                      <div key={c.label} className="flex items-center gap-3 border border-[#1E1E2E] rounded-xl p-4">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${c.color}20` }}>
                          <c.icon size={16} style={{ color: c.color }} />
                        </div>
                        <div>
                          <div className="text-[#8888A0] text-xs">{c.label}</div>
                          <div className="text-white text-sm font-medium">{c.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <textarea rows={3} placeholder="Describe your issue..." className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] resize-none" />
                  <button className="w-full bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-bold py-3 rounded-xl hover:opacity-90">Send Message</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
