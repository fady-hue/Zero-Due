"use client";
import { useState } from "react";
import { MessageSquare, Mail, Phone, Send, Zap, Search } from "lucide-react";

const templates = [
  { id: 1, name: "First Contact - BNPL (AR)", channel: "WHATSAPP", language: "AR", preview: "السلام عليكم، نود تذكيركم بالمبلغ المستحق..." },
  { id: 2, name: "Payment Reminder (EN)", channel: "SMS", language: "EN", preview: "Dear customer, this is a reminder about your outstanding balance..." },
  { id: 3, name: "Settlement Offer (AR)", channel: "EMAIL", language: "AR", preview: "نقدم لكم عرضاً للتسوية بخصم خاص بسبب حسن تعاملكم..." },
  { id: 4, name: "PTP Follow-up (EN)", channel: "WHATSAPP", language: "EN", preview: "Hi, this is a follow-up on your payment commitment from..." },
  { id: 5, name: "Installment Offer (AR)", channel: "SMS", language: "AR", preview: "يسعدنا تقديم خطة أقساط ميسَّرة تناسب وضعكم المالي..." },
  { id: 6, name: "Final Notice (EN)", channel: "EMAIL", language: "EN", preview: "This is a final notice regarding your outstanding debt before escalation..." },
];

const recentComms = [
  { debtor: "Mohammed Al-Hassan", channel: "WHATSAPP", direction: "OUTBOUND", message: "PTP reminder sent for SAR 45,000", time: "2m ago", status: "DELIVERED" },
  { debtor: "Sara Al-Ghamdi", channel: "SMS", direction: "INBOUND", message: "سأقوم بالدفع بنهاية الأسبوع", time: "15m ago", status: "READ" },
  { debtor: "Khalid Al-Otaibi", channel: "EMAIL", direction: "OUTBOUND", message: "Settlement offer: 15% discount sent", time: "1h ago", status: "OPENED" },
  { debtor: "Fatima Al-Zahrani", channel: "WHATSAPP", direction: "OUTBOUND", message: "First contact for ZD-004", time: "2h ago", status: "DELIVERED" },
  { debtor: "Omar Al-Shammari", channel: "EMAIL", direction: "INBOUND", message: "Requesting installment plan details", time: "3h ago", status: "READ" },
  { debtor: "Nora Al-Qahtani", channel: "WHATSAPP", direction: "OUTBOUND", message: "Payment confirmation and receipt", time: "5h ago", status: "READ" },
];

const channelIcon: Record<string, typeof MessageSquare> = {
  WHATSAPP: MessageSquare,
  SMS: Phone,
  EMAIL: Mail,
};

const channelColor: Record<string, string> = {
  WHATSAPP: "#25D366",
  SMS: "#6C5CE7",
  EMAIL: "#00CEC9",
};

const statusColor: Record<string, string> = {
  SENT: "text-[#8888A0]",
  DELIVERED: "text-[#00CEC9]",
  READ: "text-[#00B894]",
  OPENED: "text-[#00B894]",
  FAILED: "text-[#E17055]",
};

export default function CommunicationsPage() {
  const [tab, setTab] = useState<"logs" | "templates" | "compose">("logs");
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState("WHATSAPP");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Communication Center</h1>
          <p className="text-[#8888A0] text-sm mt-0.5">Manage all debtor communications across channels</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-[#25D366]/20 text-[#25D366] px-3 py-1.5 rounded-lg font-medium">● WhatsApp Connected</span>
          <span className="text-xs bg-[#6C5CE7]/20 text-[#8B7FFF] px-3 py-1.5 rounded-lg font-medium">● SMS Active</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Sent Today", value: "247", color: "#6C5CE7" },
          { label: "Delivered", value: "231", color: "#00B894" },
          { label: "Response Rate", value: "38%", color: "#00CEC9" },
        ].map((s, i) => (
          <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-4">
            <div className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[#8888A0] text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-0 border-b border-[#1E1E2E]">
        {[["logs", "Comm Logs"], ["templates", "Templates"], ["compose", "Compose"]].map(([k, l]) => (
          <button
            key={k}
            onClick={() => setTab(k as typeof tab)}
            className={`px-5 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
              tab === k ? "border-[#6C5CE7] text-[#8B7FFF]" : "border-transparent text-[#8888A0] hover:text-white"
            }`}
          >{l}</button>
        ))}
      </div>

      {tab === "logs" && (
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl divide-y divide-[#1E1E2E] overflow-hidden">
          {recentComms.map((c, i) => {
            const Icon = channelIcon[c.channel] || MessageSquare;
            return (
              <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-[#16161F] transition-colors">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${channelColor[c.channel]}15` }}>
                  <Icon size={16} style={{ color: channelColor[c.channel] }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white text-sm font-medium">{c.debtor}</span>
                    <span className="text-[#4A4A5A] text-xs">·</span>
                    <span className={`text-xs font-medium ${c.direction === "INBOUND" ? "text-[#00B894]" : "text-[#6C5CE7]"}`}>
                      {c.direction}
                    </span>
                  </div>
                  <div className="text-[#8888A0] text-xs truncate">{c.message}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className={`text-xs font-medium ${statusColor[c.status]}`}>{c.status}</div>
                  <div className="text-[#4A4A5A] text-xs mt-0.5">{c.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "templates" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((t, i) => (
            <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5 hover:border-[#6C5CE7]/30 transition-colors">
              <div className="flex items-start justify-between mb-3 gap-2">
                <span className="text-white font-semibold text-sm leading-tight">{t.name}</span>
                <div className="flex gap-1.5 shrink-0">
                  <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: `${channelColor[t.channel]}20`, color: channelColor[t.channel] }}>{t.channel}</span>
                  <span className="text-xs bg-[#1E1E2E] text-[#8888A0] px-2 py-0.5 rounded">{t.language}</span>
                </div>
              </div>
              <p className="text-[#8888A0] text-sm mb-4 line-clamp-2">{t.preview}</p>
              <button className="text-xs text-[#6C5CE7] hover:text-[#8B7FFF] transition-colors font-medium">
                Use Template →
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === "compose" && (
        <div className="max-w-xl">
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#1E1E2E]">
              <Zap size={15} className="text-[#6C5CE7]" />
              <span className="text-white font-semibold text-sm">AI-Assisted Compose</span>
            </div>
            <div>
              <label className="text-[#8888A0] text-xs mb-1 block">Debtor / Case</label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A4A5A]" />
                <input type="text" placeholder="Search debtor or case ID..." className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[#8888A0] text-xs mb-1 block">Channel</label>
                <select value={channel} onChange={e => setChannel(e.target.value)} className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#6C5CE7]">
                  <option value="WHATSAPP">WhatsApp</option>
                  <option value="SMS">SMS</option>
                  <option value="EMAIL">Email</option>
                </select>
              </div>
              <div>
                <label className="text-[#8888A0] text-xs mb-1 block">Language</label>
                <select className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#6C5CE7]">
                  <option>Arabic</option>
                  <option>English</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[#8888A0] text-xs">Message</label>
                <button className="text-xs text-[#6C5CE7] hover:text-[#8B7FFF] transition-colors flex items-center gap-1">
                  <Zap size={10} /> Generate with AI
                </button>
              </div>
              <textarea
                rows={6}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your message or use AI to generate a personalized collection message..."
                className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] resize-none transition-colors"
              />
              <div className="text-[#4A4A5A] text-xs mt-1">{message.length} characters</div>
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
