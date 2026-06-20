"use client";
import { useState } from "react";
import { Zap, MessageSquare, TrendingUp, Target, Brain, Send, Copy, CheckCircle } from "lucide-react";

const tools = [
  { id: "message-gen", label: "Message Generator", icon: MessageSquare, desc: "Generate personalized collection messages in Arabic or English" },
  { id: "risk-score", label: "Risk Classifier", icon: Brain, desc: "AI-powered debtor risk assessment and scoring" },
  { id: "settlement", label: "Settlement Engine", icon: TrendingUp, desc: "Optimal settlement offer calculation" },
  { id: "next-action", label: "Next Best Action", icon: Target, desc: "AI-recommended collection strategy per case" },
];

const sampleOutputs: Record<string, Record<string, string>> = {
  "message-gen": {
    Arabic: `السلام عليكم ورحمة الله وبركاته،\n\nنأمل أن تكونوا بأتم الصحة والعافية. نتواصل معكم من فريق Zero Due للتحصيل بخصوص المبلغ المستحق البالغ 45,000 ريال سعودي.\n\nنحرص على إيجاد حلول مناسبة لكل عميل، ونود دعوتكم للتواصل معنا لترتيب خطة سداد مرنة تناسب وضعكم.\n\nيمكنكم الدفع عبر:\n• الرابط الإلكتروني المُرسَل\n• تحويل بنكي مباشر\n• خطة أقساط ميسَّرة\n\nنحن هنا لمساعدتكم. تواصلوا معنا اليوم.\n\nمع تحياتنا،\nفريق Zero Due`,
    English: `Dear Mohammed,\n\nWe hope this message finds you well. We are reaching out on behalf of STC BNPL regarding your outstanding balance of SAR 45,000.\n\nWe understand that circumstances change, and we are here to work with you toward a solution. We offer flexible payment arrangements including:\n\n• Full payment via secure online link\n• Custom installment plans\n• Settlement discounts for early resolution\n\nPlease contact us at your earliest convenience, or click the payment link below to resolve your account online.\n\nBest regards,\nZero Due Collections Team`,
  },
  "risk-score": {
    Arabic: `تقييم المخاطر للمدين: محمد الحسن\n\nالفئة: متوسط الاسترداد 🟡\nنقاط المخاطرة: 62/100\nاحتمالية الاسترداد: 68%\n\nعوامل الإيجابية:\n✓ سجل دفع سابق لدى العميل\n✓ مدة التأخر أقل من 45 يوم\n✓ رقم الهاتف مفعَّل ومتجاوب\n\nعوامل الخطر:\n⚠ مبلغ مرتفع نسبياً (45,000 ريال)\n⚠ لا يوجد بريد إلكتروني متاح\n\nالتوصية: إرسال رسالة واتساب مع عرض خطة أقساط. أفضل وقت للتواصل: الثلاثاء-الخميس من 7-9 مساءً.`,
    English: `Risk Assessment: Mohammed Al-Hassan\n\nCategory: MEDIUM RECOVERY 🟡\nRisk Score: 62/100\nRecovery Probability: 68%\n\nPositive Indicators:\n✓ Prior payment history on file\n✓ Less than 45 days past due\n✓ Active phone number confirmed\n\nRisk Factors:\n⚠ Higher-value debt (SAR 45,000)\n⚠ No email contact on file\n\nRecommendation: Send WhatsApp with installment plan offer.\nBest Contact: Tuesday-Thursday, 7-9 PM local time\nSuggested Discount: 10% if paid within 14 days`,
  },
  "settlement": {
    Arabic: `عرض التسوية المقترح\n\nالمبلغ الأصلي: 45,000 ريال\nالخصم الموصى به: 15%\nمبلغ التسوية: 38,250 ريال\nالتوفير للمدين: 6,750 ريال\n\nشروط العرض:\n• الصلاحية: 7 أيام من تاريخ الإرسال\n• طريقة الدفع: دفعة واحدة\n• يُغلق الملف فور استلام الدفعة`,
    English: `Settlement Recommendation\n\nOriginal Balance: SAR 45,000\nRecommended Discount: 15%\nSettlement Amount: SAR 38,250\nDebtor Savings: SAR 6,750\n\nRationale:\n• Medium-risk debtor profile\n• 32 days past due (early-stage)\n• Acceptance probability: 72%\n• Better ROI than continued collection effort\n\nOffer Terms:\n• Valid for: 7 days from send date\n• Payment: Single lump sum\n• Account closed upon receipt\n• Document with signed settlement agreement`,
  },
  "next-action": {
    Arabic: `الإجراء الأمثل التالي\n\nالقضية: ZD-001 | محمد الحسن\n\nالإجراء الموصى به: إرسال تذكير واتساب\nالأولوية: عالية 🔴\nالتوقيت المثالي: اليوم، 8:00 مساءً\n\nتسلسل الخطوات:\n1. الآن → إرسال تذكير واتساب\n2. خلال 48 ساعة → تأكيد الدفع\n3. في حال عدم الدفع → عرض تقسيط طارئ\n4. بعد 7 أيام → إحالة للمدير`,
    English: `Next Best Action Recommendation\n\nCase: ZD-001 | Mohammed Al-Hassan\n\nRecommended Action: WhatsApp PTP Reminder\nPriority: HIGH 🔴\nOptimal Timing: Today at 8:00 PM\n\nReasoning:\nPromise to Pay is due in 2 days. Early reminder increases fulfillment rate from 54% to 81% based on similar case outcomes.\n\nAction Sequence:\n1. Now → Send WhatsApp PTP reminder\n2. In 48 hours → Confirm payment received\n3. If not paid → Offer emergency installment plan\n4. After 7 days → Escalate to manager review`,
  },
};

export default function AIToolsPage() {
  const [activeTab, setActiveTab] = useState("message-gen");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [inputs, setInputs] = useState({
    debtor: "Mohammed Al-Hassan",
    amount: "45,000",
    client: "STC BNPL",
    channel: "WhatsApp",
    language: "Arabic",
    tone: "Professional",
    days: "32",
  });

  const handleGenerate = async () => {
    setGenerating(true);
    setResult("");
    await new Promise(r => setTimeout(r, 1800));
    setResult(sampleOutputs[activeTab]?.[inputs.language] || sampleOutputs[activeTab]?.["English"] || "AI output generated successfully.");
    setGenerating(false);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white flex items-center gap-2">
          <Zap className="text-[#6C5CE7]" size={24} /> AI Tools
        </h1>
        <p className="text-[#8888A0] text-sm mt-0.5">GPT-4 powered collection intelligence</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map(tool => (
          <button
            key={tool.id}
            onClick={() => { setActiveTab(tool.id); setResult(""); }}
            className={`text-left p-4 rounded-2xl border transition-all ${
              activeTab === tool.id
                ? "border-[#6C5CE7] bg-[#6C5CE7]/10"
                : "border-[#1E1E2E] bg-[#111118] hover:border-[#6C5CE7]/30"
            }`}
          >
            <div className="w-9 h-9 bg-[#6C5CE7]/15 rounded-xl flex items-center justify-center mb-3">
              <tool.icon size={16} className="text-[#8B7FFF]" />
            </div>
            <div className="text-white text-sm font-semibold mb-0.5">{tool.label}</div>
            <div className="text-[#8888A0] text-xs">{tool.desc}</div>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 space-y-4">
          <h3 className="text-white font-bold text-sm">Input Parameters</h3>
          {[
            { key: "debtor", label: "Debtor Name", placeholder: "Mohammed Al-Hassan" },
            { key: "amount", label: "Debt Amount (SAR)", placeholder: "45,000" },
            { key: "client", label: "Client Company", placeholder: "STC BNPL" },
            { key: "days", label: "Days Past Due", placeholder: "32" },
          ].map(f => (
            <div key={f.key}>
              <label className="text-[#8888A0] text-xs mb-1 block">{f.label}</label>
              <input
                type="text"
                placeholder={f.placeholder}
                value={inputs[f.key as keyof typeof inputs]}
                onChange={e => setInputs({ ...inputs, [f.key]: e.target.value })}
                className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] transition-colors"
              />
            </div>
          ))}
          <div className="grid grid-cols-3 gap-3">
            {[
              { key: "channel", label: "Channel", opts: ["WhatsApp", "SMS", "Email"] },
              { key: "language", label: "Language", opts: ["Arabic", "English"] },
              { key: "tone", label: "Tone", opts: ["Professional", "Empathetic", "Firm"] },
            ].map(f => (
              <div key={f.key}>
                <label className="text-[#8888A0] text-xs mb-1 block">{f.label}</label>
                <select
                  value={inputs[f.key as keyof typeof inputs]}
                  onChange={e => setInputs({ ...inputs, [f.key]: e.target.value })}
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#6C5CE7]"
                >
                  {f.opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {generating ? (
              <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Generating with AI...</>
            ) : (
              <><Zap size={15} /> Generate</>
            )}
          </button>
        </div>

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-sm">AI Output</h3>
            {result && (
              <span className="flex items-center gap-1 text-xs text-[#00B894]">
                <CheckCircle size={12} /> Generated
              </span>
            )}
          </div>
          {result ? (
            <div className="flex-1 flex flex-col gap-3">
              <div
                className={`flex-1 bg-[#0A0A0F] rounded-xl p-4 border border-[#1E1E2E] overflow-auto ${inputs.language === "Arabic" ? "text-right" : "text-left"}`}
                dir={inputs.language === "Arabic" ? "rtl" : "ltr"}
              >
                <pre className="text-[#F0F0F5] text-sm whitespace-pre-wrap font-sans leading-relaxed">{result}</pre>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-1.5 text-sm border border-[#1E1E2E] text-[#8888A0] hover:text-white py-2.5 rounded-xl transition-colors"
                >
                  {copied ? <><CheckCircle size={13} className="text-[#00B894]" /> Copied!</> : <><Copy size={13} /> Copy</>}
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 text-sm bg-[#6C5CE7]/15 text-[#8B7FFF] border border-[#6C5CE7]/20 py-2.5 rounded-xl hover:bg-[#6C5CE7]/25 transition-colors">
                  <Send size={13} /> Send Now
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
              <div className="w-16 h-16 bg-[#6C5CE7]/10 rounded-2xl flex items-center justify-center">
                <Zap size={28} className="text-[#6C5CE7]/50" />
              </div>
              <p className="text-[#4A4A5A] text-sm">Configure inputs and click Generate to get AI-powered output</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
