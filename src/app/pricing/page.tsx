import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle, Zap, Building2, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  { name: "Starter", nameAr: "المبتدئ", icon: Zap, price: "2,999", currency: "SAR", period: "per month", description: "Perfect for SMEs and collection agencies.", features: ["Up to 5,000 active cases", "WhatsApp & SMS outreach", "AI scoring & segmentation", "Basic analytics dashboard", "Arabic & English support", "Email support (48hr SLA)"], popular: false, color: "from-text-muted to-text-secondary" },
  { name: "Professional", nameAr: "المحترف", icon: Building2, price: "7,999", currency: "SAR", period: "per month", description: "For banks, telecoms, and mid-market enterprises.", features: ["Up to 50,000 active cases", "All channels incl. IVR & email", "Advanced AI scoring (300+ vars)", "Full analytics + forecasting", "SIMAH credit bureau integration", "Legal escalation workflows", "API access + webhooks", "Priority support (4hr SLA)"], popular: true, color: "from-primary to-accent" },
  { name: "Enterprise", nameAr: "المؤسسي", icon: Crown, price: "Custom", currency: "", period: "pricing", description: "For large financial institutions.", features: ["Unlimited cases", "All Professional features", "Dedicated cloud infrastructure", "Custom ML model training", "On-premise deployment option", "24/7 dedicated support", "White-label option"], popular: false, color: "from-primary-light to-primary" },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Simple Pricing" title="Transparent pricing," highlightedTitle="no surprises" subtitle="All prices in Saudi Riyals (SAR). VAT (15%) not included." className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan) => (
                <div key={plan.name} className={`relative glass rounded-2xl p-8 flex flex-col ${plan.popular ? "border-primary/50 ring-1 ring-primary/30" : ""}`}>
                  {plan.popular && (<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-bold whitespace-nowrap">Most Popular</div>)}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}><plan.icon className="w-6 h-6 text-white" /></div>
                  <h3 className="text-text-primary font-bold text-xl">{plan.name}</h3>
                  <p className="text-text-muted text-sm mb-4" dir="rtl">{plan.nameAr}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    {plan.currency && <span className="text-text-secondary text-sm">{plan.currency}</span>}
                    <span className="text-4xl font-black gradient-text">{plan.price}</span>
                  </div>
                  <p className="text-text-muted text-sm mb-4">{plan.period}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1">{plan.description}</p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-text-secondary text-sm"><CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />{f}</li>))}
                  </ul>
                  <Link href="/book-demo"><Button variant={plan.popular ? "gradient" : "outline"} className="w-full" size="lg">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</Button></Link>
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
