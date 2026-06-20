"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, DollarSign, Users } from "lucide-react";

const stats = [
  { value: "95%", label: "Recovery Rate", labelAr: "معدل الاسترداد", icon: TrendingUp },
  { value: "SAR 2B+", label: "Collected", labelAr: "تم تحصيله", icon: DollarSign },
  { value: "500+", label: "GCC Clients", labelAr: "عميل في الخليج", icon: Users },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI-Powered Debt Recovery for Saudi Arabia & GCC
            <span className="hidden md:block text-text-muted mx-1">|</span>
            <span className="hidden md:block text-text-muted">منصة تحصيل ذكية</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-text-primary leading-[1.05] tracking-tight mb-6">
            Recover Debt <span className="gradient-text">Smarter</span>,{" "}
            <br className="hidden md:block" />
            Faster, in the <span className="gradient-text-purple">GCC</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-text-secondary text-xl md:text-2xl mb-4 leading-relaxed">
            Transform your debt portfolio with AI-driven outreach, predictive scoring, and full SAMA compliance.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-text-muted text-lg mb-10" dir="rtl">
            حوّل محفظة ديونك بالذكاء الاصطناعي مع الامتثال الكامل لمتطلبات ساما
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/book-demo"><Button variant="gradient" size="xl" className="group min-w-48">Book a Free Demo<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button></Link>
            <button className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border border-border bg-surface flex items-center justify-center group-hover:border-primary/50 transition-all"><Play className="w-4 h-4 ml-0.5" /></div>
              <span className="font-medium">Watch 2-min demo</span>
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }} className="glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors"><stat.icon className="w-5 h-5 text-primary" /></div>
                <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
                <div className="text-text-muted text-xs mt-0.5" dir="rtl">{stat.labelAr}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
