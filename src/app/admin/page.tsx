"use client";

import Link from "next/link";
import { 
  TrendingUp, 
  ShoppingBag, 
  CalendarDays, 
  UtensilsCrossed,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function AdminOverviewPage() {
  const stats = [
    { label: "Today's Revenue", value: "₹14,850", change: "+12.5%", icon: TrendingUp },
    { label: "Active Orders", value: "8", change: "3 in kitchen", icon: ShoppingBag },
    { label: "Today's Bookings", value: "6", change: "2 pending", icon: CalendarDays },
    { label: "Menu Items", value: "48", change: "4 sold out", icon: UtensilsCrossed },
  ];

  const recentOrders = [
    { id: "ORD-9481", customer: "Aarav Sharma", items: "2x Pistachio Basque, 1x Americano", total: "₹900", status: "Preparing", time: "10 mins ago" },
    { id: "ORD-9480", customer: "Priya Patel", items: "1x Dubai Pistachio Kunafa Cold Brew", total: "₹350", status: "Ready", time: "25 mins ago" },
    { id: "ORD-9479", customer: "Rahul Mehta", items: "1x Pesto Risotto, 1x Salted Fries", total: "₹560", status: "Delivered", time: "45 mins ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">Dashboard Overview</h1>
        <p className="text-sm text-stone-500 mt-1">Live updates on sales, kitchen orders, and table bookings</p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center justify-between text-stone-500 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider">{stat.label}</span>
                <div className="p-2 bg-stone-100 rounded-lg text-stone-800">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
              <p className="text-xs text-stone-500 mt-1">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Orders Queue */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-stone-900">Live Orders</h2>
              <p className="text-xs text-stone-500">Orders placed for pickup or delivery</p>
            </div>
            <Link
              href="/admin/orders"
              className="text-xs font-semibold text-stone-900 hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="divide-y divide-stone-100">
            {recentOrders.map((order) => (
              <div key={order.id} className="py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-stone-900">{order.id}</span>
                    <span className="text-xs text-stone-500">• {order.customer}</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">{order.items}</p>
                  <span className="text-[11px] text-stone-400">{order.time}</span>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-bold text-sm text-stone-900">{order.total}</p>
                  <span
                    className={`inline-block mt-1 px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${
                      order.status === "Preparing"
                        ? "bg-amber-100 text-amber-800"
                        : order.status === "Ready"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Shortcuts */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">Quick Management</h3>
            <div className="space-y-3">
              <Link
                href="/admin/products"
                className="block p-3.5 rounded-xl border border-stone-200 hover:border-stone-900 transition-colors text-sm font-medium text-stone-800"
              >
                + Add New Menu Item
              </Link>
              <Link
                href="/admin/reservations"
                className="block p-3.5 rounded-xl border border-stone-200 hover:border-stone-900 transition-colors text-sm font-medium text-stone-800"
              >
                Check Today's Table Bookings
              </Link>
              <Link
                href="/admin/orders"
                className="block p-3.5 rounded-xl border border-stone-200 hover:border-stone-900 transition-colors text-sm font-medium text-stone-800"
              >
                Update Order Statuses
              </Link>
            </div>
          </div>

          <div className="bg-stone-900 text-white p-6 rounded-3xl shadow-sm">
            <h3 className="font-serif text-lg font-bold mb-2">Cafe Operations</h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Directly manage item stock availability so out-of-stock desserts and brews reflect on the public menu instantly.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>4 items marked unavailable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
