"use client";

import { useState } from "react";
import { Search, Eye, Filter } from "lucide-react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-9481",
      customer: "Aarav Sharma",
      phone: "+91 98201 12345",
      type: "Delivery",
      items: [
        { name: "Pistachio Basque Cheesecake", qty: 2, price: 380 },
        { name: "Americano", qty: 1, price: 140 },
      ],
      total: 900,
      status: "Preparing",
      createdAt: "15:02 PM",
    },
    {
      id: "ORD-9480",
      customer: "Priya Patel",
      phone: "+91 98201 98765",
      type: "Store Pickup",
      items: [{ name: "Dubai Pistachio Kunafa Cold Brew", qty: 1, price: 350 }],
      total: 350,
      status: "Ready",
      createdAt: "14:45 PM",
    },
    {
      id: "ORD-9479",
      customer: "Rahul Mehta",
      phone: "+91 98201 54321",
      type: "Delivery",
      items: [
        { name: "Pesto Risotto", qty: 1, price: 420 },
        { name: "Classic Cold Coffee", qty: 1, price: 180 },
      ],
      total: 600,
      status: "Delivered",
      createdAt: "14:15 PM",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("All");

  const statuses = ["Pending", "Confirmed", "Preparing", "Ready", "Out for Delivery", "Delivered", "Cancelled"];

  const updateStatus = (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const filteredOrders = orders.filter((o) =>
    filterStatus === "All" ? true : o.status === filterStatus
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">Orders Management</h1>
          <p className="text-sm text-stone-500 mt-1">Track and update active kitchen and delivery orders</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-2">
        {["All", "Preparing", "Ready", "Delivered"].map((st) => (
          <button
            key={st}
            onClick={() => setFilterStatus(st)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              filterStatus === st
                ? "bg-stone-900 text-white"
                : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 text-xs uppercase font-semibold">
              <tr>
                <th className="py-3.5 px-6">Order ID</th>
                <th className="py-3.5 px-6">Customer</th>
                <th className="py-3.5 px-6">Type</th>
                <th className="py-3.5 px-6">Items</th>
                <th className="py-3.5 px-6">Total</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-stone-50/50">
                  <td className="py-4 px-6 font-bold text-stone-900">
                    {order.id}
                    <div className="text-[11px] font-normal text-stone-400">{order.createdAt}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-stone-900">{order.customer}</div>
                    <div className="text-xs text-stone-400">{order.phone}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-stone-100 text-stone-700">
                      {order.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-xs space-y-1">
                      {order.items.map((it, idx) => (
                        <div key={idx}>
                          {it.qty}x {it.name}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-stone-900">₹{order.total}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                        order.status === "Preparing"
                          ? "bg-amber-100 text-amber-800"
                          : order.status === "Ready"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="text-xs py-1.5 px-2 border rounded-lg border-stone-200 bg-white font-medium focus:ring-1 focus:ring-stone-900"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
