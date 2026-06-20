import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/home/CTASection";

const industries = [
  { name: "Saudi Arabia", nameAr: "المملكة العربية السعودية", description: "The largest debt collection market in the GCC with SAR 200B+ in non-performing loans.", metrics: ["SAMA regulated", "VAT compliant", "Arabic & English", "SAR currency"], flag: "🇸🇦" },
  { name: "United Arab Emirates", nameAr: "الإمارات العربية المتحدة", description: "Dynamic market with strict Central Bank UAE regulations.", metrics: ["CBUAE regulated", "DIFC compliant", "Multi-currency", "Sharia-compliant"], flag: "🇦🇪" },
  { name: "Kuwait", nameAr: "الكويت", description: "Growing fintech ecosystem with Central Bank of Kuwait compliance.", metrics: ["CBK regulated", "Islamic finance", "KWD support", "Arabic-first"], flag: "🇰🇼" },
  { name: "Bahrain", nameAr: "البحرين", description: "Regional fintech hub with CBB oversight.", metrics: ["CBB regulated", "Fintech hub", "BHD/USD", "Regional reach"], flag: "🇧🇭" },
  { name: "Qatar", nameAr: "قطر", description: "Post-World Cup economic expansion creating new debt portfolios.", metrics: ["QCB regulated", "Real estate focus", "QAR currency", "Construction sector"], flag: "🇶🇦" },
  { name: "Oman", nameAr: "عُمان", description: "Growing banking sector with CBO regulatory framework.", metrics: ["CBO regulated", "Vision 2040", "OMR support", "SME focus"], flag: "🇴🇲" },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="GCC Market Coverage" title="Built for every" highlightedTitle="GCC market" subtitle="Zero Due operates across all six GCC countries." className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div key={industry.name} className="glass rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{industry.flag}</span>
                    <div>
                      <h3 className="text-text-primary font-bold text-lg">{industry.name}</h3>
                      <p className="text-text-muted text-sm" dir="rtl">{industry.nameAr}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.metrics.map((m) => (
                      <span key={m} className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium">{m}</span>
                    ))}
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
