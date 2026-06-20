"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quote: "Zero Due transformed our debt recovery operations completely. We went from 38% recovery rate to 91% in just 6 months.", author: "Mohammed Al-Rashid", title: "VP Collections, Saudi National Bank", avatar: "MAR", rating: 5 },
  { quote: "As a telecom operator in the UAE, managing millions of overdue accounts was a nightmare. Zero Due's automated workflows made a tremendous difference.", author: "Fatima Al-Mansouri", title: "Head of Revenue Assurance, Du Telecom", avatar: "FAM", rating: 5 },
  { quote: "The SAMA compliance features gave us confidence to fully automate our collection process. The real-time dashboard is exceptional.", author: "Khalid Ibrahim", title: "CFO, Dar Al-Tamleek", avatar: "KI", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Client Success Stories" title="Trusted by GCC's leading" highlightedTitle="financial institutions" subtitle="See how Zero Due is transforming debt recovery across Saudi Arabia, UAE, and the GCC." className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="glass rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex items-center gap-1">{Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="w-4 h-4 fill-warning text-warning" />))}</div>
              <Quote className="w-8 h-8 text-primary/30" />
              <p className="text-text-secondary text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">{t.avatar}</div>
                <div>
                  <div className="text-text-primary font-semibold text-sm">{t.author}</div>
                  <div className="text-text-muted text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
