"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { signUpWithEmail } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    const { error } = await signUpWithEmail(email, password, fullName);

    if (error) {
      setErrorMsg(error.message || "Signup failed. Please ensure Supabase credentials are configured.");
      setLoading(false);
    } else {
      setSuccessMsg("Account created! Check your email for confirmation, or sign in.");
      setLoading(false);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-stone-900">Create an Account</h1>
          <p className="text-sm text-stone-600 mt-2">
            Join the Cocoa Cafe club for rewards, faster checkout & tracking
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="mb-6 p-4 text-sm text-green-700 bg-green-50 rounded-xl border border-green-100">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-stone-700">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-stone-700">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-stone-700">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors disabled:opacity-60 text-sm"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-stone-900 underline hover:text-stone-700">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
