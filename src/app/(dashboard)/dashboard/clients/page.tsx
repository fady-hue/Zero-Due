"use client";
import { Building2, TrendingUp } from "lucide-react";

const clients = [
  { name: "Tamara", industry: "BNPL", cases: 842, outstanding: 18200000, recovered: 12400000, rate: 68.1, status: "ACTIVE" },
  { name: "STC BNPL", industry: "BNPL", cases: 621, outstanding: 14800000, recovered: 9200000, rate: 62.2, status: "ACTIVE" },
  { name: "Mobily", industry: "Telecom", cases: 412, outstanding: 9500000, recovered: 7100000, rate: 74.7, status: "ACTIVE" },
  { name: "Stc", industry: "Telecom", cases: 387, outstanding: 8200000, recovered: 5800000, rate: 70.7, status: "ACTIVE" },
  { name: "Raqamyah", industry: "SME Lender", cases: 215, outstanding: 6100000, recovered: 3200000, rate: 52.5, status: "ACTIVE" },
];

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Clients</h1>
          <p className="text-[#8888A0] text-sm mt-0.5">{clients.length} active clients</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">+ Onboard Client</button>
      </div>

      <div className="grid gap-4">
        {clients.map((c, i) => (
          <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5 hover:border-[#6C5CE7]/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6C5CE7]/20 to-[#00CEC9]/10 rounded-xl flex items-center justify-center">
                  <Building2 className="text-[#8B7FFF]" size={20} />
                </div>
                <div>
                  <div className="text-white font-bold">{c.name}</div>
                  <div className="text-[#8888A0] text-xs">{c.industry}</div>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-8">
                <div className="text-center"><div className="text-white font-bold text-sm">{c.cases}</div><div className="text-[#4A4A5A] text-xs">Cases</div></div>
                <div className="text-center"><div className="text-white font-bold text-sm">SAR {(c.outstanding/1000000).toFixed(1)}M</div><div className="text-[#4A4A5A] text-xs">Outstanding</div></div>
                <div className="text-center"><div className="text-[#00B894] font-bold text-sm">SAR {(c.recovered/1000000).toFixed(1)}M</div><div className="text-[#4A4A5A] text-xs">Recovered</div></div>
                <div className="text-center"><div className="text-xl font-black" style={{ color: c.rate > 70 ? "#00B894" : c.rate > 55 ? "#FDCB6E" : "#E17055" }}>{c.rate}%</div><div className="text-[#4A4A5A] text-xs">Recovery Rate</div></div>
              </div>
              <span className="text-xs bg-[#00B894]/20 text-[#00B894] px-2 py-1 rounded-lg">{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
