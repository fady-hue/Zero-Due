"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Upload, Cpu, TrendingUp } from "lucide-react";

const steps = [
  { step: "01", icon: Upload, title: "Upload Your Debt Portfolio", titleAr: "ارفع محفظة ديونك", description: "Securely upload your debt portfolio via our API, SFTP, or direct integration.", color: "from-primary to-primary-light" },
  { step: "02", icon: Cpu, title: "AI Analysis & Segmentation", titleAr: "التحليل والتصنيف الذكي", description: "Our AI scores each case, predicts recovery probability, and assigns the optimal recovery strategy.", color: "from-primary to-accent" },
  { step: "03", icon: TrendingUp, title: "Automated Recovery Begins", titleAr: "يبدأ الاسترداد التلقائي", description: "Multi-channel outreach campaigns launch automatically. Track every interaction in real-time.", color: "from-accent to-success" },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="How It Works" title="From portfolio upload to" highlightedTitle="cash recovery" subtitle="Get started in less than 24 hours." className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-primary via-accent to-success" />
          {steps.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }} className="relative flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}><step.icon className="w-8 h-8 text-white" /></div>
              <div className="text-primary/40 text-6xl font-black absolute -top-4 -left-2 select-none">{step.step}</div>
              <h3 className="text-text-primary font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-text-muted text-sm mb-2" dir="rtl">{step.titleAr}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
