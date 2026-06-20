"use client";
import { useState } from "react";
import { MessageSquare, Mail, Phone, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";

const templates = [
  { id: 1, name: "First Contact - BNPL", channel: "WHATSAPP", language: "AR", preview: "السلام عليكم، نود تذكيركم بالمبلغ المستحق..." },
  { id: 2, name: "Payment Reminder", channel: "SMS", language: "EN", preview: "Dear customer, this is a reminder about your outstanding balance..." },
  { id: 3, name: "Settlement Offer", channel: "EMAIL", language: "AR", preview: "نقدم لكم عرضاً للتسوية بخصم خاص..." },
  { id: 4, name: "PTP Follow-up", channel: "WHATSAPP", language: "EN", preview: "Hi, this is a follow-up on your payment commitment..." },
];

const recentComms = [
  { debtor: "Mohammed Al-Hassan", channel: "WHATSAPP", direction: "OUTBOUND", message: "Payment reminder sent", time: "2m ago", status: "DELIVERED" },
  { debtor: "Sara Al-Ghamdi", channel: "SMS", direction: "INBOUND", message: "I will pay by end of week", time: "15m ago", status: "READ" },
  { debtor: "Khalid Al-Otaibi", channel: "EMAIL", direction: "OUTBOUND", message: "Settlement offer sent", time: "1h ago", status: "OPENED" },
  { debtor: "Fatima Al-Zahrani", channel: "WHATSAPP", direction: "OUTBOUND", message: "First contact message", time: "2h ago", status: "SENT" },
];

const channelIcon: Record<string, typeof MessageSquare> = { WHATSAPP: MessageSquare, SMS: Phone, EMAIL: Mail };
const statusColor: Record<string, string> = { SENT: "text-[#8888A0]", DELIVERED: "text-[#00CEC9]", READ: "text-[#00B894]", OPENED: "text-[#00B894]" };

export default function CommunicationsPage() {
  const [tab, setTab] = useState<"logs" | "templates" | "compose">("logs");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Communication Center</h1>
        <p className="text-[#8888A0] text-sm mt-0.5">Manage all debtor communications</p>
      </div>

      <div className="flex gap-2 border-b border-[#1E1E2E] pb-0">
        {([["logs", "Comm Logs"], ["templates", "Templates"], ["compose", "Compose"]] as const).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all -mb-px ${tab === k ? "border-[#6C5CE7] text-[#8B7FFF]" : "border-transparent text-[#8888A0] hover:text-white"}`}>{l}</button>
        ))}
      </div>

      {tab === "logs" && (
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl divide-y divide-[#1E1E2E]">
          {recentComms.map((c, i) => {
            const Icon = channelIcon[c.channel] || MessageSquare;
            return (
              <div key={i} className="px-6 py-4 flex items-center gap-4">
                <div className="w-9 h-9 bg-[#1E1E2E] rounded-xl flex items-center justify-center"><Icon size={16} className="text-[#6C5CE7]" /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white text-sm font-medium">{c.debtor}</span>
                    <span className="text-[#4A4A5A] text-xs">·</span>
                    <span className={`text-xs ${c.direction === "INBOUND" ? "text-[#00B894]" : "text-[#6C5CE7]"}`}>{c.direction}</span>
                  </div>
                  <div className="text-[#8888A0] text-xs">{c.message}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-medium ${statusColor[c.status]}`}>{c.status}</div>
                  <div className="text-[#4A4A5A] text-xs mt-0.5">{c.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "templates" && (
        <div className="grid md:grid-cols-2 gap-4">
          {templates.map((t, i) => (
            <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5 hover:border-[#6C5CE7]/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold text-sm">{t.name}</span>
                <div className="flex gap-2">
                  <span className="text-xs bg-[#6C5CE7]/20 text-[#8B7FFF] px-2 py-0.5 rounded">{t.channel}</span>
                  <span className="text-xs bg-[#1E1E2E] text-[#8888A0] px-2 py-0.5 rounded">{t.language}</span>
                </div>
              </div>
              <p className="text-[#8888A0] text-sm mb-4">{t.preview}</p>
              <button className="text-xs text-[#6C5CE7] hover:text-[#8B7FFF] transition-colors">Use Template →</button>
            </div>
          ))}
        </div>
      )}

      {tab === "compose" && (
        <div className="max-w-xl">
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={15} className="text-[#6C5CE7]" />
              <span className="text-white font-semibold text-sm">AI-Assisted Compose</span>
            </div>
            <div><label className="text-[#8888A0] text-xs mb-1 block">Debtor / Case</label><input type="text" placeholder="Search debtor..." className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7]" /></div>
            <div><label className="text-[#8888A0] text-xs mb-1 block">Channel</label><select className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#6C5CE7]"><option>WhatsApp</option><option>SMS</option><option>Email</option></select></div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[#8888A0] text-xs">Message</label>
                <button className="text-xs text-[#6C5CE7] hover:text-[#8B7FFF] flex items-center gap-1"><Zap size={10} /> Generate with AI</button>
              </div>
              <textarea rows={5} placeholder="Type your message or use AI to generate..." className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] resize-none" />
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity">
              <Send size={15} /> Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
