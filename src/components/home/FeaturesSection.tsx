"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Brain, MessageSquare, Shield, BarChart3, Languages, Zap } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Recovery Engine", description: "Our proprietary ML models analyze debtor behavior patterns to predict the optimal contact time, channel, and message." },
  { icon: MessageSquare, title: "Multi-Channel Outreach", description: "Reach debtors via WhatsApp, SMS, email, and IVR in Arabic and English. Automated follow-up sequences.", iconColor: "text-accent" },
  { icon: Shield, title: "SAMA Compliance Built-in", description: "Every communication and collection action is fully compliant with Saudi SAMA regulations and GCC debt collection laws.", iconColor: "text-success" },
  { icon: BarChart3, title: "Real-time Analytics", description: "Live dashboard with recovery rates, cash flow forecasting, agent performance, and portfolio health metrics." },
  { icon: Languages, title: "Arabic-First Communication", description: "Native Arabic NLP for debtor communications. Culturally sensitive messaging that increases engagement rates by 40%.", iconColor: "text-warning" },
  { icon: Zap, title: "Automated Workflows", description: "No-code workflow builder to create custom recovery strategies. Integrate with your core banking system via API.", iconColor: "text-primary-light" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Platform Features" title="Everything you need to" highlightedTitle="recover more" subtitle="Zero Due combines cutting-edge AI with deep GCC market knowledge." className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (<FeatureCard key={feature.title} {...feature} index={i} />))}
        </div>
      </div>
    </section>
  );
}
