import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#1E1E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">0D</span>
              </div>
              <span className="text-white font-bold text-lg">Zero Due</span>
            </Link>
            <p className="text-[#8888A0] text-sm leading-relaxed max-w-xs mb-6">AI-Powered Debt Collection & Recovery Platform for Saudi Arabia and GCC markets.</p>
            <p className="text-[#4A4A5A] text-xs">© 2024 Zero Due. All rights reserved.<br />مجمع التحصيل الذكي — المملكة العربية السعودية</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              {["Solutions", "Industries", "How It Works", "Pricing"].map(l => (<li key={l}><Link href={`/${l.toLowerCase().replace(/ /g, '-')}`} className="text-[#8888A0] hover:text-white text-sm transition-colors">{l}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {[["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"], ["Book Demo", "/book-demo"]].map(([l, h]) => (<li key={l}><Link href={h} className="text-[#8888A0] hover:text-white text-sm transition-colors">{l}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-[#8888A0] text-sm">
              <li>Riyadh, Saudi Arabia</li>
              <li>hello@zerodue.co</li>
              <li>+966 11 000 0000</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
