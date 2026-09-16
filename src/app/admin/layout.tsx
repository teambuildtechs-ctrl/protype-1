"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  ShoppingBag, 
  CalendarDays, 
  Settings, 
  ArrowLeft 
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Products & Menu", href: "/admin/products", icon: UtensilsCrossed },
    { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { name: "Reservations", href: "/admin/reservations", icon: CalendarDays },
  ];

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-stone-900 text-stone-300 flex flex-col justify-between shrink-0">
        <div>
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <Link href="/admin" className="font-serif text-lg font-bold text-white tracking-wider">
              COCOA ADMIN
            </Link>
            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded uppercase">
              Staff
            </span>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white text-stone-900"
                      : "text-stone-400 hover:text-white hover:bg-stone-800/60"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-stone-800">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-stone-400 hover:text-white hover:bg-stone-800/60 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Public Website
          </Link>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
