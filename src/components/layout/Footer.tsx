import Link from "next/link";
import { GradientText } from "@/components/shared/GradientText";
import { Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/solutions", label: "Solutions" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/book-demo", label: "Book Demo" },
  ],
  industries: [
    { href: "/industries#banking", label: "Banking & Finance" },
    { href: "/industries#telecom", label: "Telecom" },
    { href: "/industries#real-estate", label: "Real Estate" },
    { href: "/industries#healthcare", label: "Healthcare" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/compliance", label: "SAMA Compliance" },
    { href: "/security", label: "Security" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-black text-sm">Z</span>
              </div>
              <span className="text-text-primary font-bold text-xl">Zero <GradientText>Due</GradientText></span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xs">The AI-powered debt collection platform trusted by leading financial institutions across Saudi Arabia and the GCC.</p>
            <p className="text-text-muted text-sm mb-6">منصة تحصيل الديون المدعومة بالذكاء الاصطناعي</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@zerodue.sa" className="flex items-center gap-2 text-text-secondary hover:text-primary text-sm transition-colors"><Mail className="w-4 h-4" />hello@zerodue.sa</a>
              <a href="tel:+966112345678" className="flex items-center gap-2 text-text-secondary hover:text-primary text-sm transition-colors"><Phone className="w-4 h-4" />+966 11 234 5678</a>
              <span className="flex items-center gap-2 text-text-secondary text-sm"><MapPin className="w-4 h-4" />King Fahd Road, Riyadh, KSA</span>
            </div>
          </div>
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-2.5">{footerLinks.product.map((link) => (<li key={link.href}><Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="flex flex-col gap-2.5">{footerLinks.industries.map((link) => (<li key={link.href}><Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2.5">{footerLinks.company.map((link) => (<li key={link.href}><Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-2.5">{footerLinks.legal.map((link) => (<li key={link.href}><Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">{link.label}</Link></li>))}</ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-text-muted text-sm">
            <span>© 2025 Zero Due. All rights reserved.</span>
            <span className="hidden md:block">•</span>
            <span>جميع الحقوق محفوظة لشركة زيرو دو</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-success/30 bg-success/10">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span className="text-success text-xs font-medium">SAMA Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-text-muted hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
