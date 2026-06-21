"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/GradientText";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h1 className="text-5xl font-black text-text-primary mb-4">Let&apos;s talk <GradientText>debt recovery</GradientText></h1>
              <p className="text-text-secondary text-lg">Speak with our GCC debt recovery specialists.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="flex flex-col gap-8">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-text-primary font-bold mb-6">Office Locations</h3>
                  {[
                    { city: "Riyadh, Saudi Arabia", address: "King Fahd Road, Al Olaya District", phone: "+966 11 234 5678", email: "riyadh@zerodue.sa" },
                    { city: "Dubai, UAE", address: "DIFC, Gate Village, Building 4", phone: "+971 4 567 8901", email: "dubai@zerodue.sa" },
                  ].map((office) => (
                    <div key={office.city} className="mb-6 pb-6 border-b border-border last:border-0 last:mb-0 last:pb-0">
                      <h4 className="text-text-primary font-semibold mb-3">{office.city}</h4>
                      <div className="flex flex-col gap-2">
                        <span className="flex items-start gap-2 text-text-secondary text-sm"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />{office.address}</span>
                        <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-text-secondary text-sm"><Phone className="w-4 h-4 text-primary" />{office.phone}</a>
                        <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-text-secondary text-sm"><Mail className="w-4 h-4 text-primary" />{office.email}</a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="glass rounded-2xl p-6">
                  <Clock className="w-6 h-6 text-accent mb-3" />
                  <h4 className="text-text-primary font-semibold mb-2">Business Hours</h4>
                  <p className="text-text-secondary text-sm">Sunday – Thursday: 9:00 AM – 6:00 PM (AST)</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="glass rounded-2xl p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <h3 className="text-text-primary font-bold text-2xl mb-2">Message Received!</h3>
                      <p className="text-text-secondary">Our team will contact you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <h3 className="text-text-primary font-bold text-xl mb-2">Send us a message</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-text-secondary text-sm mb-2">Full Name *</label><input required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none" placeholder="Mohammed Al-Ahmad" /></div>
                        <div><label className="block text-text-secondary text-sm mb-2">Company *</label><input required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none" placeholder="Saudi National Bank" /></div>
                      </div>
                      <div><label className="block text-text-secondary text-sm mb-2">Email *</label><input required type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none" placeholder="you@company.com" /></div>
                      <div><label className="block text-text-secondary text-sm mb-2">Message *</label><textarea required rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-primary text-sm focus:border-primary focus:outline-none resize-none" placeholder="Tell us about your debt portfolio..." /></div>
                      <Button type="submit" variant="gradient" size="lg">Send Message</Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
