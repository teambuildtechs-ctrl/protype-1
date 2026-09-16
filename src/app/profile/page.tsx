"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { User, LogOut, Package, Clock, MapPin, Coffee } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !loading && !user) {
      router.push("/login");
    }
  }, [mounted, loading, user, router]);

  if (!mounted || loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-stone-900"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Welcome, {user.user_metadata?.full_name || user.email?.split("@")[0]}
            </h1>
            <p className="text-stone-500 text-sm mt-1">{user.email}</p>
          </div>
          <button
            onClick={async () => {
              await signOut();
              router.push("/");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-xl text-sm font-medium text-stone-700 bg-white hover:bg-stone-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Stats / Account Cards */}
          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-stone-100 rounded-xl text-stone-800">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Orders</p>
              <p className="text-2xl font-bold text-stone-900">0</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-stone-100 rounded-xl text-stone-800">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Reservations</p>
              <p className="text-2xl font-bold text-stone-900">0</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-stone-100 rounded-xl text-stone-800">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Reward Points</p>
              <p className="text-2xl font-bold text-stone-900">50</p>
            </div>
          </div>
        </div>

        {/* Orders & Info Tabs */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Past Orders</h2>
              <div className="py-12 text-center text-stone-400 text-sm">
                <Package className="w-10 h-10 mx-auto mb-3 opacity-40" />
                You haven't placed any orders yet.
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Table Reservations</h2>
              <div className="py-12 text-center text-stone-400 text-sm">
                <Clock className="w-10 h-10 mx-auto mb-3 opacity-40" />
                No active reservations found.
              </div>
            </div>
          </div>

          {/* Profile Details Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">Saved Addresses</h3>
              <p className="text-sm text-stone-500 mb-4">Keep default delivery locations for quick checkout.</p>
              <button className="w-full py-2.5 px-4 border border-dashed border-stone-300 rounded-xl text-sm font-medium text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-colors">
                + Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
