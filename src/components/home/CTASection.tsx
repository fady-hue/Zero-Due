"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />Book a 30-minute demo
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight">
            Ready to transform your <span className="gradient-text">debt recovery?</span>
          </h2>
          <p className="text-text-secondary text-xl mb-4 leading-relaxed">Join 500+ GCC enterprises already using Zero Due to collect more, faster, with less effort.</p>
          <p className="text-text-muted text-lg mb-10" dir="rtl">انضم إلى أكثر من 500 شركة في منطقة الخليج تستخدم زيرو دو</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-demo"><Button variant="gradient" size="xl" className="group min-w-52">Book Free Demo<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button></Link>
            <Link href="/pricing"><Button variant="outline" size="xl" className="min-w-52">View Pricing</Button></Link>
          </div>
          <p className="text-text-muted text-sm mt-6">No credit card required • Setup in 24 hours • SAMA compliant</p>
        </motion.div>
      </div>
    </section>
  );
}
