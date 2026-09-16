"use client";

import { useState } from "react";
import { Check, X, Calendar, Clock, User, Phone, Users, MessageSquare } from "lucide-react";

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState([
    {
      id: "RES-101",
      customer_name: "Sneha Kapoor",
      phone: "+91 98331 44556",
      email: "sneha@example.com",
      reservation_date: "2026-09-18",
      reservation_time: "19:30",
      guests: 4,
      special_request: "Window seating preferred, celebrating anniversary.",
      status: "Pending",
    },
    {
      id: "RES-102",
      customer_name: "Vikram Rathore",
      phone: "+91 98205 11223",
      email: "vikram.r@example.com",
      reservation_date: "2026-09-18",
      reservation_time: "20:00",
      guests: 2,
      special_request: "Quiet corner for business discussion.",
      status: "Confirmed",
    },
    {
      id: "RES-103",
      customer_name: "Ananya Deshmukh",
      phone: "+91 98190 99887",
      email: "ananya@example.com",
      reservation_date: "2026-09-19",
      reservation_time: "18:00",
      guests: 6,
      special_request: "High chairs needed for kids.",
      status: "Completed",
    },
  ]);

  const [activeTab, setActiveTab] = useState("All");

  const updateStatus = (id: string, newStatus: string) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const filtered = reservations.filter((r) =>
    activeTab === "All" ? true : r.status === activeTab
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">Table Reservations</h1>
          <p className="text-sm text-stone-500 mt-1">
            Review, confirm, reschedule, or cancel table booking requests
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              activeTab === tab
                ? "bg-stone-900 text-white"
                : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reservations Cards / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((res) => (
          <div
            key={res.id}
            className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-stone-400">{res.id}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                    res.status === "Pending"
                      ? "bg-amber-100 text-amber-800"
                      : res.status === "Confirmed"
                      ? "bg-emerald-100 text-emerald-800"
                      : res.status === "Cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-stone-100 text-stone-700"
                  }`}
                >
                  {res.status}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-stone-900">{res.customer_name}</h3>
              <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1">
                <Phone className="w-3.5 h-3.5" />
                {res.phone}
              </p>

              <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{res.reservation_date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{res.reservation_time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-stone-400" />
                  <span>{res.guests} Guests</span>
                </div>
              </div>

              {res.special_request && (
                <div className="mt-4 p-3 bg-stone-50 rounded-xl text-xs text-stone-600 flex items-start gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <p className="italic">"{res.special_request}"</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-2">
              {res.status === "Pending" && (
                <>
                  <button
                    onClick={() => updateStatus(res.id, "Confirmed")}
                    className="flex-1 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Accept
                  </button>
                  <button
                    onClick={() => updateStatus(res.id, "Cancelled")}
                    className="py-2 px-3 border border-stone-200 text-stone-600 rounded-xl text-xs font-semibold hover:bg-stone-50 transition-colors"
                  >
                    Decline
                  </button>
                </>
              )}

              {res.status === "Confirmed" && (
                <button
                  onClick={() => updateStatus(res.id, "Completed")}
                  className="w-full py-2 bg-stone-100 text-stone-800 rounded-xl text-xs font-semibold hover:bg-stone-200 transition-colors"
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
