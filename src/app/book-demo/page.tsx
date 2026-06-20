"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/GradientText";
import { CheckCircle, Calendar, Clock, Users } from "lucide-react";
import { useState } from "react";

const benefits = [
  "See live AI scoring of your debt portfolio",
  "30-minute personalized walkthrough",
  "SAMA compliance review included",
  "Custom ROI calculation for your portfolio",
  "No obligation, no pushy sales",
];

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4" /> Free 30-min Demo
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight">
                  See Zero Due <GradientText>in action</GradientText>
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">Book a personalized demo with our GCC debt recovery specialists.</p>
                <div className="flex flex-col gap-3 mb-10">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Clock, label: "30 minutes", sub: "Focused demo" },
                    { icon: Users, label: "Expert led", sub: "GCC specialists" },
                    { icon: Calendar, label: "Flexible", sub: "Your schedule" },
                  ].map((item) => (
                    <div key={item.label} className="glass rounded-xl p-4 text-center">
                      <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-text-primary font-semibold text-sm">{item.label}</div>
                      <div className="text-text-muted text-xs">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-2xl bg-success/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-text-primary font-black text-2xl mb-2">Demo Booked!</h3>
                    <p className="text-text-secondary mb-4">Check your email for confirmation and calendar invite.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-text-primary font-bold text-xl mb-2">Book your demo</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">First Name *</label>
                        <input required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none" placeholder="Mohammed" />
                      </div>
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">Last Name *</label>
                        <input required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none" placeholder="Al-Ahmad" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Work Email *</label>
                      <input required type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Company *</label>
                      <input required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none" placeholder="Saudi National Bank" />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Industry *</label>
                      <select required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none">
                        <option value="">Select industry...</option>
                        <option>Banking & Finance</option>
                        <option>Telecom</option>
                        <option>Real Estate</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <Button type="submit" variant="gradient" size="lg">Book My Free Demo</Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
