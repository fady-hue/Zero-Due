"use client";
import { useState } from "react";
import { Settings, Bell, Shield, Globe, Users, Key, Save } from "lucide-react";

const sections = [
  { id: "general", label: "General", icon: Settings },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "localization", label: "Localization", icon: Globe },
  { id: "team", label: "Team", icon: Users },
  { id: "api", label: "API Keys", icon: Key },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Settings</h1>
        <p className="text-[#8888A0] text-sm mt-0.5">Platform configuration and preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-2 h-fit">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                activeSection === s.id
                  ? "bg-[#6C5CE7]/15 text-[#8B7FFF]"
                  : "text-[#8888A0] hover:text-white hover:bg-[#1E1E2E]"
              }`}
            >
              <s.icon size={16} />
              {s.label}
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 space-y-6">
          {activeSection === "general" && (
            <>
              <h3 className="text-white font-bold">General Settings</h3>
              <div className="space-y-4">
                {[
                  { label: "Platform Name", value: "Zero Due", desc: "Internal platform identifier" },
                  { label: "Support Email", value: "support@zerodue.co", desc: "Customer-facing support address" },
                  { label: "Default Currency", value: "SAR", desc: "Saudi Riyal" },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="text-[#8888A0] text-xs mb-1 block">{f.label}</label>
                    <input
                      type="text"
                      defaultValue={f.value}
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#6C5CE7] transition-colors"
                    />
                    <p className="text-[#4A4A5A] text-xs mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "notifications" && (
            <>
              <h3 className="text-white font-bold">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { label: "New case assigned", enabled: true },
                  { label: "Payment received", enabled: true },
                  { label: "PTP overdue", enabled: true },
                  { label: "Daily summary report", enabled: false },
                  { label: "Client report ready", enabled: true },
                  { label: "AI recommendations", enabled: false },
                ].map((n, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#1E1E2E] last:border-0">
                    <span className="text-[#F0F0F5] text-sm">{n.label}</span>
                    <div className={`w-10 h-5 rounded-full transition-colors cursor-pointer ${n.enabled ? "bg-[#6C5CE7]" : "bg-[#1E1E2E]"} relative`}>
                      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${n.enabled ? "translate-x-5" : "translate-x-0.5"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "api" && (
            <>
              <h3 className="text-white font-bold">API Configuration</h3>
              <div className="space-y-4">
                {[
                  { label: "OpenAI API Key", placeholder: "sk-..." },
                  { label: "Twilio Account SID", placeholder: "ACxxxxxxxx" },
                  { label: "Resend API Key", placeholder: "re_..." },
                  { label: "HyperPay API Key", placeholder: "Enter key..." },
                  { label: "Moyasar API Key", placeholder: "sk_..." },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="text-[#8888A0] text-xs mb-1 block">{f.label}</label>
                    <input
                      type="password"
                      placeholder={f.placeholder}
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] transition-colors font-mono"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {!["general", "notifications", "api"].includes(activeSection) && (
            <div className="flex items-center justify-center h-40 text-[#4A4A5A] text-sm">
              {sections.find(s => s.id === activeSection)?.label} settings coming soon
            </div>
          )}

          <div className="pt-4 border-t border-[#1E1E2E] flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all"
            >
              <Save size={14} /> {saved ? "Saved!" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
