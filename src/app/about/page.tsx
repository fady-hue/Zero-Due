import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GradientText } from "@/components/shared/GradientText";
import { CTASection } from "@/components/home/CTASection";
import { Target, Eye, Heart } from "lucide-react";

const team = [
  { name: "Ahmed Al-Qahtani", title: "CEO & Co-founder", bg: "from-primary to-accent", initials: "AA" },
  { name: "Sarah Al-Otaibi", title: "CTO & Co-founder", bg: "from-accent to-success", initials: "SA" },
  { name: "Omar Khalil", title: "Chief Product Officer", bg: "from-primary to-primary-light", initials: "OK" },
  { name: "Nora Al-Fahad", title: "Head of Compliance", bg: "from-warning to-error", initials: "NF" },
  { name: "Tariq Hassan", title: "VP Sales GCC", bg: "from-success to-accent", initials: "TH" },
  { name: "Layla Mohammed", title: "Head of AI/ML", bg: "from-primary-light to-accent", initials: "LM" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Our Story
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-text-primary mb-6 leading-tight">
                We are <GradientText>Zero Due</GradientText>
              </h1>
              <p className="text-text-secondary text-xl leading-relaxed mb-6">
                Founded in Riyadh in 2022, Zero Due was born from a simple observation: the GCC&apos;s debt collection industry was stuck in the past.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our team of fintech veterans, AI engineers, and compliance experts set out to build the region&apos;s most advanced debt collection platform.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Our Mission", titleAr: "مهمتنا", content: "To make ethical, AI-powered debt recovery accessible to every financial institution in the GCC.", color: "text-primary" },
                { icon: Eye, title: "Our Vision", titleAr: "رؤيتنا", content: "A GCC where no debt goes unresolved due to inefficient processes.", color: "text-accent" },
                { icon: Heart, title: "Our Values", titleAr: "قيمنا", content: "Integrity. Innovation. Compliance. Respect. Excellence.", color: "text-success" },
              ].map((item) => (
                <div key={item.title} className="glass rounded-2xl p-8">
                  <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="text-text-primary font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm mb-4" dir="rtl">{item.titleAr}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Our Team" title="The people behind" highlightedTitle="Zero Due" subtitle="A diverse team of fintech veterans, AI researchers, and compliance experts." className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center glass rounded-2xl p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.bg} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {member.initials}
                  </div>
                  <h4 className="text-text-primary font-semibold text-sm mb-1">{member.name}</h4>
                  <p className="text-text-muted text-xs">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2022", label: "Founded in Riyadh" },
                { value: "80+", label: "Team Members" },
                { value: "6", label: "GCC Countries" },
                { value: "SOC 2", label: "Certified Security" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-black gradient-text mb-2">{item.value}</div>
                  <div className="text-text-secondary text-sm">{item.label}</div>
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
