import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/home/CTASection";
import { Building2, Wifi, Home, ShoppingCart, Heart, Landmark } from "lucide-react";

const solutions = [
  { icon: Building2, title: "Banks & Financial Institutions", titleAr: "البنوك والمؤسسات المالية", description: "Automate personal loan, credit card, and SME debt recovery.", benefits: ["Credit card recovery", "Personal loan collections", "SME debt management", "Core banking API integration"], stat: "92% avg recovery", color: "from-primary to-primary-light" },
  { icon: Wifi, title: "Telecom Operators", titleAr: "شركات الاتصالات", description: "Recover unpaid bills and handset financing from millions of subscribers.", benefits: ["Postpaid bill recovery", "Device financing collection", "Subscriber risk scoring", "Bulk campaign management"], stat: "89% recovery rate", color: "from-accent to-success" },
  { icon: Home, title: "Real Estate & Property", titleAr: "العقارات والمرافق", description: "Manage rental arrears, service charge defaults, and mortgage recovery.", benefits: ["Rental arrear recovery", "Service charge collection", "HOA fee management", "Legal escalation workflows"], stat: "85% recovery rate", color: "from-warning to-error" },
  { icon: ShoppingCart, title: "Retail & E-commerce", titleAr: "التجزئة والتجارة الإلكترونية", description: "Recover BNPL defaults, installment plan arrears, and retail credit.", benefits: ["BNPL recovery", "Installment defaults", "Loyalty program debt", "High-volume automation"], stat: "94% recovery rate", color: "from-primary to-accent" },
  { icon: Heart, title: "Healthcare Providers", titleAr: "مقدمو الرعاية الصحية", description: "Sensitively recover medical bills and insurance co-pays.", benefits: ["Medical bill recovery", "Insurance claim follow-up", "Patient payment plans", "HIPAA-equivalent compliance"], stat: "88% recovery rate", color: "from-success to-accent" },
  { icon: Landmark, title: "Government & Utilities", titleAr: "الحكومة والمرافق", description: "Automate traffic fine collection, utility bill recovery, and government service fees.", benefits: ["Traffic fine collection", "Utility bill recovery", "Government fee collection", "Citizen-friendly communication"], stat: "97% compliance", color: "from-primary-light to-primary" },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Our Solutions" title="Industry-specific debt" highlightedTitle="recovery solutions" subtitle="Zero Due delivers tailored debt collection strategies for every major sector." className="mb-16" />
          </div>
        </section>
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div key={solution.title} className="glass rounded-2xl p-8 flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 shadow-lg`}><solution.icon className="w-7 h-7 text-white" /></div>
                  <h3 className="text-text-primary font-bold text-xl mb-1">{solution.title}</h3>
                  <p className="text-text-muted text-sm mb-4" dir="rtl">{solution.titleAr}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">{solution.description}</p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {solution.benefits.map((b) => (<li key={b} className="flex items-center gap-2 text-text-secondary text-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{b}</li>))}
                  </ul>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${solution.color} text-white text-sm font-bold self-start`}>{solution.stat}</div>
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
