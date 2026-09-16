"use client";

import { useState } from "react";
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react";

export default function ReservePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2",
    specialRequest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-stone-200 shadow-sm text-center">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-stone-900 mb-3">Booking Requested!</h1>
          <p className="text-sm text-stone-600 leading-relaxed mb-6">
            Thank you, {formData.name}. We have received your table reservation for {formData.guests} guests on {formData.date} at {formData.time}. We will verify table availability and confirm via SMS / WhatsApp.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-stone-800 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">Book a Table</h1>
          <p className="text-stone-600 text-sm mt-3">
            Reserve your cozy corner at Cocoa Cafe, Virar West for coffee dates, work, or celebrations.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/80 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-stone-600 tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-stone-600 tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-stone-600 tracking-wider">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900 outline-none bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-stone-600 tracking-wider">Time</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900 outline-none bg-white"
                >
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="18:30">06:30 PM</option>
                  <option value="19:30">07:30 PM</option>
                  <option value="20:30">08:30 PM</option>
                  <option value="21:30">09:30 PM</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-stone-600 tracking-wider">Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900 outline-none bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Person" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-stone-600 tracking-wider">Email (Optional)</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-stone-600 tracking-wider">Special Requests</label>
              <textarea
                rows={3}
                placeholder="Birthday celebration, quiet corner, baby chair, dietary notes..."
                value={formData.specialRequest}
                onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-stone-900 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors text-sm disabled:opacity-60"
            >
              {loading ? "Sending reservation..." : "Confirm Table Reservation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
