import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/home/CTASection";
import { Upload, Brain, MessageSquare, BarChart3, Scale, CheckCircle } from "lucide-react";

const steps = [
  { number: "01", icon: Upload, title: "Portfolio Onboarding", description: "Connect your debt portfolio in minutes via API, SFTP, or spreadsheet upload.", details: ["Encrypted data transfer (AES-256)", "Supports 20+ file formats", "Real-time validation", "Automatic deduplication"] },
  { number: "02", icon: Brain, title: "AI Scoring & Segmentation", description: "Our proprietary ML engine scores each account within minutes.", details: ["Behavioral pattern analysis", "Credit bureau integration (SIMAH)", "300+ scoring variables", "Real-time model updates"] },
  { number: "03", icon: MessageSquare, title: "Automated Multi-Channel Outreach", description: "Personalized communications launch automatically across WhatsApp, SMS, email, and IVR.", details: ["WhatsApp Business API", "SMS via local operators", "Arabic NLP messaging", "Compliance-controlled frequency"] },
  { number: "04", icon: BarChart3, title: "Real-time Monitoring", description: "Track every promise-to-pay, payment made, and case status in real-time.", details: ["Live dashboard updates", "Cash flow forecasting", "Agent performance KPIs", "Custom report builder"] },
  { number: "05", icon: Scale, title: "Legal Escalation", description: "Cases that don't resolve escalate to your legal team with complete documentation.", details: ["Automated case file generation", "Legal firm integration", "Court submission documents", "Sharia-compliant documentation"] },
  { number: "06", icon: CheckCircle, title: "Payment & Settlement", description: "Accept payments via mada, SADAD, Apple Pay, bank transfer, and credit card.", details: ["mada & SADAD integration", "Apple Pay / STC Pay", "Automated reconciliation", "Real-time core banking update"] },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="The Zero Due Process" title="From upload to" highlightedTitle="cash in hand" subtitle="A complete end-to-end debt recovery journey." className="mb-20" />
            <div className="flex flex-col gap-12">
              {steps.map((step, i) => (
                <div key={step.number} className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 glass rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-primary/40 text-sm font-bold">Step {step.number}</span>
                        <h3 className="text-text-primary font-bold text-xl">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">{step.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-text-secondary text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-48 flex items-center justify-center">
                    <span className="text-8xl font-black text-primary/10">{step.number}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
