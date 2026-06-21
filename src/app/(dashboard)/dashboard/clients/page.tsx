"use client";
import { Building2, TrendingUp, ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const clients = [
  { name: "Tamara", nameAr: "تمارا", industry: "BNPL", cases: 842, outstanding: 18200000, recovered: 12400000, rate: 68.1, status: "ACTIVE", since: "Jan 2024", fee: "3%" },
  { name: "STC BNPL", nameAr: "STC اقساط", industry: "BNPL", cases: 621, outstanding: 14800000, recovered: 9200000, rate: 62.2, status: "ACTIVE", since: "Mar 2024", fee: "2.5%" },
  { name: "Mobily", nameAr: "موبايلي", industry: "Telecom", cases: 412, outstanding: 9500000, recovered: 7100000, rate: 74.7, status: "ACTIVE", since: "Feb 2024", fee: "3.5%" },
  { name: "Stc", nameAr: "STC", industry: "Telecom", cases: 387, outstanding: 8200000, recovered: 5800000, rate: 70.7, status: "ACTIVE", since: "Apr 2024", fee: "3%" },
  { name: "Raqamyah", nameAr: "رقمية", industry: "SME Lender", cases: 215, outstanding: 6100000, recovered: 3200000, rate: 52.5, status: "ACTIVE", since: "Jun 2024", fee: "4%" },
  { name: "Lendo", nameAr: "لندو", industry: "Fintech", cases: 174, outstanding: 4300000, recovered: 2100000, rate: 48.8, status: "ONBOARDING", since: "Dec 2024", fee: "4.5%" },
];

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Clients</h1>
          <p className="text-[#8888A0] text-sm mt-0.5">{clients.filter(c => c.status === "ACTIVE").length} active · {clients.filter(c => c.status === "ONBOARDING").length} onboarding</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FFF] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
          <Plus size={15} /> Onboard Client
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Clients", value: clients.length.toString() },
          { label: "Total Cases", value: clients.reduce((a, c) => a + c.cases, 0).toLocaleString() },
          { label: "Total Outstanding", value: `SAR ${(clients.reduce((a, c) => a + c.outstanding, 0) / 1000000).toFixed(1)}M` },
          { label: "Total Recovered", value: `SAR ${(clients.reduce((a, c) => a + c.recovered, 0) / 1000000).toFixed(1)}M` },
        ].map((s, i) => (
          <div key={i} className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-4">
            <div className="text-2xl font-black gradient-text mb-1">{s.value}</div>
            <div className="text-[#8888A0] text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {clients.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5 hover:border-[#6C5CE7]/30 transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6C5CE7]/20 to-[#00CEC9]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="text-[#8B7FFF]" size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">{c.name}</span>
                    <span className="text-[#4A4A5A] text-xs">{c.nameAr}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      c.status === "ACTIVE" ? "bg-[#00B894]/20 text-[#00B894]" : "bg-[#FDCB6E]/20 text-[#FDCB6E]"
                    }`}>{c.status}</span>
                  </div>
                  <div className="text-[#8888A0] text-xs mt-0.5">{c.industry} · Client since {c.since} · Fee: {c.fee}</div>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-8">
                <div className="text-center">
                  <div className="text-white font-bold text-sm">{c.cases.toLocaleString()}</div>
                  <div className="text-[#4A4A5A] text-xs">Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">SAR {(c.outstanding / 1000000).toFixed(1)}M</div>
                  <div className="text-[#4A4A5A] text-xs">Outstanding</div>
                </div>
                <div className="text-center">
                  <div className="text-[#00B894] font-bold text-sm">SAR {(c.recovered / 1000000).toFixed(1)}M</div>
                  <div className="text-[#4A4A5A] text-xs">Recovered</div>
                </div>
                <div className="text-center min-w-[80px]">
                  <div className="text-xl font-black" style={{ color: c.rate > 70 ? "#00B894" : c.rate > 55 ? "#FDCB6E" : "#E17055" }}>{c.rate}%</div>
                  <div className="text-[#4A4A5A] text-xs">Recovery Rate</div>
                </div>
              </div>
              <Link href={`/dashboard/clients/${c.name.toLowerCase()}`} className="p-2 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] transition-all">
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
