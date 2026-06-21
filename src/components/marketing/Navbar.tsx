"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  { label: "Solutions", labelAr: "الحلول", href: "/solutions" },
  { label: "Industries", labelAr: "الصناعات", href: "/industries" },
  { label: "How It Works", labelAr: "كيف يعمل", href: "/how-it-works" },
  { label: "Pricing", labelAr: "الأسعار", href: "/pricing" },
  { label: "About", labelAr: "عنا", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const t = (en: string, ar: string) => lang === "ar" ? ar : en;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#1E1E2E]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#0A0A0F] rounded-xl flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] font-black text-sm">0D</span>
              </div>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight">Zero <span className="gradient-text">Due</span></span>
              <div className="text-[10px] text-[#8888A0] -mt-0.5 tracking-wider uppercase">{t("AI Collections", "تحصيل ذكي")}</div>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-[#8888A0] hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#8B7FFF]">
                {lang === "ar" ? item.labelAr : item.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggleLang} className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] transition-all text-sm">
              <Globe size={15} />{lang === "en" ? "العربية" : "English"}
            </button>
            <Link href="/contact" className="text-[#8888A0] hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#1E1E2E] transition-all">{t("Contact", "تواصل")}</Link>
            <Link href="/book-demo" className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity">{t("Book Demo", "احجز عرضاً")}</Link>
          </div>
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleLang} className="p-2 text-[#8888A0]"><Globe size={18} /></button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#8888A0] hover:text-white">{isMenuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#111118] border-t border-[#1E1E2E]">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (<Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] rounded-lg transition-all text-sm">{lang === "ar" ? item.labelAr : item.label}</Link>))}
              <div className="pt-3 border-t border-[#1E1E2E] mt-3">
                <Link href="/book-demo" className="block text-center bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white font-semibold px-5 py-3 rounded-xl">{t("Book Demo", "احجز عرضاً")}</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
