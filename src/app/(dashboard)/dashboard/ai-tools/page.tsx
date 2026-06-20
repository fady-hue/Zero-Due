"use client";
import { useState } from "react";
import { Zap, MessageSquare, TrendingUp, Target, Brain, Send } from "lucide-react";

export default function AIToolsPage() {
  const [activeTab, setActiveTab] = useState("message-gen");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState("");
  const [inputs, setInputs] = useState({ debtor: "", amount: "", channel: "WhatsApp", language: "Arabic", tone: "Professional" });

  const handleGenerate = async () => {
    setGenerating(true);
    await new Promise(r => setTimeout(r, 1500));
    if (activeTab === "message-gen") {
      setResult(inputs.language === "Arabic"
        ? `السلام عليكم ورحمة الله وبركاته،\n\nنأمل أن تكونوا بخير. نود التواصل معكم بشأن المبلغ المستحق بقيمة ${inputs.amount} ريال سعودي.\n\nنحن هنا لمساعدتكم في إيجاد حل مناسب.\n\nشكراً لتعاونكم،\nفريق Zero Due`
        : `Dear ${inputs.debtor},\n\nWe hope this message finds you well. We are reaching out regarding your outstanding balance of ${inputs.amount} SAR.\n\nWe understand that financial challenges can arise, and we are here to help.\n\nBest regards,\nZero Due Collections Team`
      );
    } else {
      setResult("Risk Category: MEDIUM RECOVERY\nRecovery Probability: 68%\nRecommended Action: Send personalized WhatsApp with installment plan offer\nBest Contact Time: Tuesday-Thursday, 7-9 PM\nRecommended Settlement: 15% discount if paid within 7 days");
    }
    setGenerating(false);
  };

  const tools = [
    { id: "message-gen", label: "Message Generator", icon: MessageSquare, desc: "Generate personalized collection messages" },
    { id: "risk-score", label: "Risk Classifier", icon: Brain, desc: "AI-powered debtor risk assessment" },
    { id: "settlement", label: "Settlement Engine", icon: TrendingUp, desc: "Optimal settlement offer calculator" },
    { id: "next-action", label: "Next Best Action", icon: Target, desc: "AI-recommended collection actions" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white flex items-center gap-2"><Zap className="text-[#6C5CE7]" size={24} /> AI Tools</h1>
        <p className="text-[#8888A0] text-sm mt-0.5">GPT-powered collection intelligence</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map(tool => (
          <button key={tool.id} onClick={() => { setActiveTab(tool.id); setResult(""); }} className={`text-left p-4 rounded-2xl border transition-all ${
            activeTab === tool.id ? "border-[#6C5CE7] bg-[#6C5CE7]/10" : "border-[#1E1E2E] bg-[#111118] hover:border-[#6C5CE7]/30"
          }`}>
            <div className="w-9 h-9 bg-[#6C5CE7]/15 rounded-xl flex items-center justify-center mb-3"><tool.icon size={16} className="text-[#8B7FFF]" /></div>
            <div className="text-white text-sm font-semibold">{tool.label}</div>
            <div className="text-[#8888A0] text-xs mt-0.5">{tool.desc}</div>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 space-y-4">
          <h3 className="text-white font-bold text-sm">Input Parameters</h3>
          {[{ key: "debtor", label: "Debtor Name", placeholder: "Mohammed Al-Hassan" }, { key: "amount", label: "Debt Amount (SAR)", placeholder: "45,000" }].map(f => (
            <div key={f.key}>
              <label className="text-[#8888A0] text-xs mb-1 block">{f.label}</label>
              <input type="text" placeholder={f.placeholder} value={inputs[f.key as keyof typeof inputs]} onChange={e => setInputs({ ...inputs, [f.key]: e.target.value })} className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7]" />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3">
            {[{ key: "language", label: "Language", opts: ["Arabic", "English"] }, { key: "tone", label: "Tone", opts: ["Professional", "Empathetic", "Firm"] }].map(f => (
              <div key={f.key}>
                <label className="text-[#8888A0] text-xs mb-1 block">{f.label}</label>
                <select value={inputs[f.key as keyof typeof inputs]} onChange={e => setInputs({ ...inputs, [f.key]: e.target.value })} className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#6C5CE7]">
                  {f.opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
          <button onClick={handleGenerate} disabled={generating} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50">
            {generating ? (<><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Generating...</>) : (<><Zap size={15} /> Generate with AI</>)}
          </button>
        </div>

        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
          <h3 className="text-white font-bold text-sm mb-4">AI Output</h3>
          {result ? (
            <div className="space-y-4">
              <div className="bg-[#0A0A0F] rounded-xl p-4 border border-[#1E1E2E]"><pre className="text-[#F0F0F5] text-sm whitespace-pre-wrap font-sans leading-relaxed">{result}</pre></div>
              <div className="flex gap-2">
                <button className="flex-1 text-sm border border-[#1E1E2E] text-[#8888A0] hover:text-white py-2 rounded-xl transition-colors">Copy</button>
                <button className="flex-1 text-sm bg-[#6C5CE7]/15 text-[#8B7FFF] border border-[#6C5CE7]/20 py-2 rounded-xl hover:bg-[#6C5CE7]/25 transition-colors flex items-center justify-center gap-1"><Send size={13} /> Send</button>
              </div>
            </div>
          ) : (
            <div className="h-48 flex items-center justify-center text-[#4A4A5A] text-sm">Configure inputs and click Generate</div>
          )}
        </div>
      </div>
    </div>
  );
}
