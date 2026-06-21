import Link from "next/link";
import { GradientText } from "@/components/shared/GradientText";
import { Mail, Phone, MapPin } from "lucide-react";

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
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-black text-sm">Z</span>
              </div>
              <span className="text-text-primary font-bold text-xl">
                Zero <GradientText>Due</GradientText>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xs">
              The AI-powered debt collection platform trusted by leading financial institutions across Saudi Arabia and the GCC.
            </p>
            <p className="text-text-muted text-sm mb-6">
              منصة تحصيل الديون المدعومة بالذكاء الاصطناعي
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@zerodue.sa" className="flex items-center gap-2 text-text-secondary hover:text-primary text-sm transition-colors">
                <Mail className="w-4 h-4" />
                hello@zerodue.sa
              </a>
              <a href="tel:+966112345678" className="flex items-center gap-2 text-text-secondary hover:text-primary text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +966 11 234 5678
              </a>
              <span className="flex items-center gap-2 text-text-secondary text-sm">
                <MapPin className="w-4 h-4" />
                King Fahd Road, Riyadh, KSA
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
