"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MessageSquare, CreditCard, FileText, Clock, CheckCircle, Zap, Send } from "lucide-react";
import { motion } from "framer-motion";

const caseData: Record<string, {
  id: string; debtor: string; nameAr: string; phone: string; email: string;
  amount: number; client: string; status: string; daysOld: number; score: number;
  agent: string; city: string; assignedDate: string; lastContact: string;
  notes: string; timeline: { date: string; event: string; channel?: string; }[];
}> = {
  "ZD-001": {
    id: "ZD-001", debtor: "Mohammed Al-Hassan", nameAr: "محمد الحسن",
    phone: "+966 50 123 4567", email: "m.hassan@email.com",
    amount: 45000, client: "STC BNPL", status: "PROMISE_TO_PAY",
    daysOld: 32, score: 78, agent: "Sara K.", city: "Riyadh",
    assignedDate: "2024-11-19", lastContact: "2024-12-18",
    notes: "Debtor acknowledged debt. Promised to pay by end of month. Prefers WhatsApp communication.",
    timeline: [
      { date: "2024-12-18", event: "PTP received via WhatsApp — will pay by Dec 31", channel: "WhatsApp" },
      { date: "2024-12-15", event: "Follow-up call made, no answer. Voicemail left.", channel: "Call" },
      { date: "2024-12-10", event: "Settlement offer sent via email (15% discount)", channel: "Email" },
      { date: "2024-12-05", event: "First WhatsApp message sent", channel: "WhatsApp" },
      { date: "2024-11-19", event: "Case assigned to Sara K." },
    ],
  },
  "ZD-002": {
    id: "ZD-002", debtor: "Sara Al-Ghamdi", nameAr: "سارة الغامدي",
    phone: "+966 55 234 5678", email: "sara@email.com",
    amount: 12500, client: "Tamara", status: "CONTACTED",
    daysOld: 15, score: 62, agent: "Ahmed M.", city: "Jeddah",
    assignedDate: "2024-12-05", lastContact: "2024-12-19",
    notes: "Contacted via SMS. Debtor aware of balance but hasn't committed to payment date yet.",
    timeline: [
      { date: "2024-12-19", event: "SMS reminder sent", channel: "SMS" },
      { date: "2024-12-12", event: "Initial contact — acknowledged debt", channel: "SMS" },
      { date: "2024-12-05", event: "Case assigned to Ahmed M." },
    ],
  },
};

const statusColors: Record<string, string> = {
  NEW: "bg-[#1E1E2E] text-[#8888A0]",
  CONTACTED: "bg-[#6C5CE7]/20 text-[#8B7FFF]",
  PROMISE_TO_PAY: "bg-[#FDCB6E]/20 text-[#FDCB6E]",
  INSTALLMENT_PLAN: "bg-[#00CEC9]/20 text-[#00CEC9]",
  SETTLEMENT_OFFERED: "bg-[#a855f7]/20 text-[#a855f7]",
  PAID: "bg-[#00B894]/20 text-[#00B894]",
  CLOSED: "bg-[#1E1E2E] text-[#4A4A5A]",
};

const channelColor: Record<string, string> = {
  WhatsApp: "#25D366", SMS: "#6C5CE7", Email: "#00CEC9", Call: "#FDCB6E",
};

export default function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const c = caseData[id] ?? caseData["ZD-001"];
  const [note, setNote] = useState("");
  const [activeAction, setActiveAction] = useState<string | null>(null);

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/cases" className="p-2 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] transition-all">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-white">{c.debtor}</h1>
            <span className="text-[#4A4A5A] text-sm">{c.nameAr}</span>
            <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${statusColors[c.status]}`}>
              {c.status.replace(/_/g, " ")}
            </span>
          </div>
          <p className="text-[#8888A0] text-sm mt-0.5">Case {c.id} · {c.client} · Assigned {c.assignedDate}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Outstanding", value: `SAR ${c.amount.toLocaleString()}`, color: "#E17055" },
              { label: "Days Overdue", value: `${c.daysOld}d`, color: "#FDCB6E" },
              { label: "Recovery Score", value: `${c.score}/100`, color: c.score > 70 ? "#00B894" : c.score > 50 ? "#FDCB6E" : "#E17055" },
              { label: "Last Contact", value: c.lastContact, color: "#8888A0" },
            ].map((s, i) => (
              <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-4">
                <div className="text-lg font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[#8888A0] text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
            <h3 className="text-white font-bold text-sm mb-4">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: "Phone", value: c.phone, color: "#25D366" },
                { icon: Mail, label: "Email", value: c.email || "Not provided", color: "#00CEC9" },
                { icon: FileText, label: "City", value: c.city, color: "#6C5CE7" },
                { icon: Clock, label: "Agent", value: c.agent, color: "#FDCB6E" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-[#8888A0] text-xs">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
            <h3 className="text-white font-bold text-sm mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "WhatsApp", icon: MessageSquare, color: "#25D366" },
                { label: "Send SMS", icon: Phone, color: "#6C5CE7" },
                { label: "Send Email", icon: Mail, color: "#00CEC9" },
                { label: "Log Payment", icon: CreditCard, color: "#00B894" },
              ].map((a, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAction(a.label)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                    activeAction === a.label ? "border-[#6C5CE7] bg-[#6C5CE7]/10" : "border-[#1E1E2E] hover:border-[#6C5CE7]/30"
                  }`}
                >
                  <a.icon size={18} style={{ color: a.color }} />
                  <span className="text-xs text-[#8888A0]">{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
            <h3 className="text-white font-bold text-sm mb-3">Case Notes</h3>
            <p className="text-[#8888A0] text-sm mb-4">{c.notes}</p>
            <textarea
              rows={3}
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Add a note..."
              className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] resize-none transition-colors"
            />
            <div className="flex justify-end mt-2">
              <button className="flex items-center gap-2 text-sm bg-[#6C5CE7]/15 text-[#8B7FFF] border border-[#6C5CE7]/20 px-4 py-2 rounded-xl hover:bg-[#6C5CE7]/25 transition-colors">
                <Send size={13} /> Save Note
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-gradient-to-br from-[#6C5CE7]/10 to-[#00CEC9]/5 border border-[#6C5CE7]/20 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} className="text-[#6C5CE7]" />
              <span className="text-white font-bold text-sm">AI Recommendation</span>
            </div>
            <div className="text-xs bg-[#E17055]/20 text-[#E17055] px-2 py-0.5 rounded-full font-medium w-fit mb-2">HIGH PRIORITY</div>
            <p className="text-white text-sm font-medium mb-1">Send WhatsApp reminder</p>
            <p className="text-[#8888A0] text-xs mb-4">PTP due in 2 days. Early reminder increases fulfillment from 54% to 81%.</p>
            <button className="w-full text-xs bg-[#6C5CE7] text-white rounded-lg py-2.5 hover:bg-[#8B7FFF] transition-colors font-medium">
              Execute Now
            </button>
          </div>

          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
            <h3 className="text-white font-bold text-sm mb-4">Activity Timeline</h3>
            <div className="space-y-4">
              {c.timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                      style={{ backgroundColor: t.channel ? channelColor[t.channel] || "#6C5CE7" : "#1E1E2E" }}
                    />
                    {i < c.timeline.length - 1 && <div className="w-px flex-1 bg-[#1E1E2E] mt-1" />}
                  </div>
                  <div className="pb-4">
                    <p className="text-white text-xs font-medium leading-relaxed">{t.event}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#4A4A5A] text-xs">{t.date}</span>
                      {t.channel && (
                        <span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: `${channelColor[t.channel]}20`, color: channelColor[t.channel] }}>
                          {t.channel}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5">
            <h3 className="text-white font-bold text-sm mb-3">Update Status</h3>
            <div className="space-y-2">
              {["CONTACTED", "PROMISE_TO_PAY", "INSTALLMENT_PLAN", "SETTLEMENT_OFFERED", "PAID", "CLOSED"].map(s => (
                <button
                  key={s}
                  className={`w-full text-left text-xs px-3 py-2.5 rounded-lg transition-all ${
                    c.status === s
                      ? `${statusColors[s]} border border-current`
                      : "text-[#8888A0] hover:bg-[#1E1E2E] hover:text-white"
                  }`}
                >
                  {c.status === s && <CheckCircle size={10} className="inline mr-1.5" />}
                  {s.replace(/_/g, " ")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
