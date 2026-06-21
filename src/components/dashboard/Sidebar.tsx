"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, FileText, MessageSquare,
  CreditCard, BarChart3, Settings, ChevronLeft,
  Building2, LogOut, Zap
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "Cases", href: "/dashboard/cases" },
  { icon: Users, label: "Debtors", href: "/dashboard/debtors" },
  { icon: MessageSquare, label: "Communications", href: "/dashboard/communications" },
  { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Building2, label: "Clients", href: "/dashboard/clients" },
  { icon: Zap, label: "AI Tools", href: "/dashboard/ai-tools" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${collapsed ? "w-16" : "w-60"} transition-all duration-300 bg-[#111118] border-r border-[#1E1E2E] flex flex-col shrink-0 h-screen sticky top-0`}>
      <div className="h-16 flex items-center px-4 border-b border-[#1E1E2E]">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">0D</span>
            </div>
            <span className="text-white font-bold text-sm">Zero Due</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`${collapsed ? "mx-auto" : "ml-auto"} p-1.5 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#1E1E2E] transition-all`}
        >
          <ChevronLeft size={16} className={`transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? "bg-[#6C5CE7]/15 text-[#8B7FFF] border border-[#6C5CE7]/20"
                  : "text-[#8888A0] hover:bg-[#1E1E2E] hover:text-white"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={17} className="shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-[#1E1E2E]">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8888A0] hover:bg-[#1E1E2E] hover:text-white transition-all">
          <LogOut size={17} />
          {!collapsed && <span className="text-sm">Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
