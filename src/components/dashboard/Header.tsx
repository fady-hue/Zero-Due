"use client";
import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="h-16 bg-[#111118] border-b border-[#1E1E2E] flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A4A5A]" />
          <input
            type="text"
            placeholder="Search cases, debtors..."
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-[#4A4A5A] focus:outline-none focus:border-[#6C5CE7] transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] transition-all">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#6C5CE7] rounded-full" />
        </button>
        <div className="flex items-center gap-2 pl-3 border-l border-[#1E1E2E]">
          <div className="w-8 h-8 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">ZD</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-white text-xs font-semibold">Admin User</div>
            <div className="text-[#4A4A5A] text-xs">Zero Due Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
