"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { href: "/solutions", label: "Solutions", labelAr: "الحلول" },
  { href: "/industries", label: "Industries", labelAr: "القطاعات" },
  { href: "/how-it-works", label: "How It Works", labelAr: "كيف يعمل" },
  { href: "/pricing", label: "Pricing", labelAr: "الأسعار" },
  { href: "/about", label: "About", labelAr: "عنا" },
  { href: "/blog", label: "Blog", labelAr: "المدونة" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass border-b border-border/50 shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm">Z</span>
              </div>
              <span className="text-text-primary font-bold text-xl tracking-tight">Zero <span className="gradient-text">Due</span></span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-surface">
                  {language === "ar" ? link.labelAr : link.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button onClick={toggleLanguage} className="flex items-center gap-1.5 px-3 py-2 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors rounded-lg hover:bg-surface">
                <Globe className="w-4 h-4" />
                <span>{language === "en" ? "عربي" : "EN"}</span>
              </button>
              <Link href="/sign-in"><Button variant="ghost" size="sm">{language === "ar" ? "تسجيل الدخول" : "Sign In"}</Button></Link>
              <Link href="/book-demo"><Button variant="gradient" size="sm">{language === "ar" ? "احجز عرضاً" : "Book Demo"}</Button></Link>
            </div>
            <button className="md:hidden p-2 text-text-secondary hover:text-text-primary" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <div className="relative flex flex-col h-full pt-20 px-6 pb-8">
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={link.href} onClick={() => setIsMobileOpen(false)} className="block px-4 py-3 text-text-secondary hover:text-text-primary text-lg font-medium transition-colors border-b border-border/30">
                      {language === "ar" ? link.labelAr : link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-8">
                <Link href="/book-demo" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="gradient" className="w-full" size="lg">{language === "ar" ? "احجز عرضاً تجريبياً" : "Book a Demo"}</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
