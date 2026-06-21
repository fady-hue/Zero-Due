"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  labelAr: string;
  description: string;
}

const stats: StatProps[] = [
  { value: 95, suffix: "%", label: "Average Recovery Rate", labelAr: "متوسط معدل الاسترداد", description: "vs. 45% industry average" },
  { value: 2, suffix: "B+", prefix: "SAR ", label: "Debt Collected", labelAr: "الديون المحصلة", description: "Since 2022" },
  { value: 500, suffix: "+", label: "Enterprise Clients", labelAr: "عميل مؤسسي", description: "Across Saudi Arabia & GCC" },
  { value: 40, suffix: "%", label: "Cost Reduction", labelAr: "تخفيض التكاليف", description: "vs. traditional collection" },
];

function AnimatedNumber({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2"><AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} /></div>
              <div className="text-text-primary font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-text-muted text-sm mb-1" dir="rtl">{stat.labelAr}</div>
              <div className="text-text-muted text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
