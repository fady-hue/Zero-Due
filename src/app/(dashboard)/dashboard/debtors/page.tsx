"use client";
import { useState } from "react";
import { Search, User, Phone, Mail, Filter } from "lucide-react";

const debtors = [
  { id: "D-001", name: "Mohammed Al-Hassan", nameAr: "محمد الحسن", phone: "+966 50 123 4567", email: "m.hassan@email.com", cases: 1, totalDebt: 45000, riskCategory: "MEDIUM", city: "Riyadh" },
  { id: "D-002", name: "Sara Al-Ghamdi", nameAr: "سارة الغامدي", phone: "+966 55 234 5678", email: "sara@email.com", cases: 1, totalDebt: 12500, riskCategory: "LOW", city: "Jeddah" },
  { id: "D-003", name: "Khalid Al-Otaibi", nameAr: "خالد العتيبي", phone: "+966 54 345 6789", email: "", cases: 2, totalDebt: 88200, riskCategory: "HIGH", city: "Dammam" },
  { id: "D-004", name: "Fatima Al-Zahrani", nameAr: "فاطمة الزهراني", phone: "+966 56 456 7890", email: "fatima@email.com", cases: 1, totalDebt: 6800, riskCategory: "LOW", city: "Riyadh" },
  { id: "D-005", name: "Omar Al-Shammari", nameAr: "عمر الشمري", phone: "+966 58 567 8901", email: "omar@email.com", cases: 1, totalDebt: 23100, riskCategory: "HIGH", city: "Jeddah" },
  { id: "D-006", name: "Nora Al-Qahtani", nameAr: "نورة القحطاني", phone: "+966 50 678 9012", email: "nora@email.com", cases: 1, totalDebt: 18500, riskCategory: "LOW", city: "Riyadh" },
];

const riskColor: Record<string, string> = {
  HIGH: "bg-[#E17055]/20 text-[#E17055]",
  MEDIUM: "bg-[#FDCB6E]/20 text-[#FDCB6E]",
  LOW: "bg-[#00B894]/20 text-[#00B894]",
};

export default function DebtorsPage() {
  const [search, setSearch] = useState("");
  const filtered = debtors.filter(d =>
    !search || d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.phone.includes(search) || d.id.includes(search)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Debtors</h1>
          <p className="text-[#8888A0] text-sm mt-0.5">{debtors.length} total debtors in database</p>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A4A5A]" />
          <input
            type="text"
            placeholder="Search by name, phone, or ID..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#111118] border border-[#1E1E2E] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 border border-[#1E1E2E] text-[#8888A0] hover:text-white px-4 py-2.5 rounded-xl text-sm transition-colors">
          <Filter size={14} /> Filter
        </button>
      </div>

      <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl divide-y divide-[#1E1E2E] overflow-hidden">
        {filtered.map((d, i) => (
          <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-[#16161F] transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1E1E2E] rounded-full flex items-center justify-center">
                <User size={16} className="text-[#6C5CE7]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-sm">{d.name}</span>
                  <span className="text-[#4A4A5A] text-xs">{d.nameAr}</span>
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <div className="flex items-center gap-1 text-[#8888A0] text-xs">
                    <Phone size={11} /> {d.phone}
                  </div>
                  {d.email && (
                    <div className="flex items-center gap-1 text-[#8888A0] text-xs">
                      <Mail size={11} /> {d.email}
                    </div>
                  )}
                  <span className="text-[#4A4A5A] text-xs">{d.city}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden sm:block text-right">
                <div className="text-white font-semibold text-sm">SAR {d.totalDebt.toLocaleString()}</div>
                <div className="text-[#4A4A5A] text-xs">{d.cases} case{d.cases > 1 ? "s" : ""}</div>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${riskColor[d.riskCategory]}`}>
                {d.riskCategory} RISK
              </span>
              <span className="text-[#4A4A5A] text-xs font-mono">{d.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
