"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-poppins">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-6">
        <div className="font-semibold text-lg">
          Budget Guardian
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 text-sm text-slate-300 hover:text-slate-100 transition"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-cyan-500 text-black hover:bg-cyan-400 transition"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center text-center px-6 mt-20">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
          Know exactly where your money stands
        </h1>

        <p className="text-slate-400 mt-4 max-w-xl">
          Set a monthly budget, track expenses, and see your remaining balance instantly.
          No noise. No judgment. Just clarity.
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
        >
          Get started
        </button>
      </main>

      {/* Cool section – product preview vibe */}
      <section className="mt-24 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
          
          <p className="text-xs text-slate-400 mb-2">
            This month
          </p>

          <h2 className="text-3xl font-semibold mb-1">
            ₹3,200
          </h2>

          <p className="text-sm text-slate-400 mb-4">
            remaining balance
          </p>

          <div className="flex justify-between text-xs text-slate-400">
            <span>Budget: ₹10,000</span>
            <span>Limit: ₹7,000</span>
          </div>

        </div>

        <p className="text-center text-xs text-slate-500 mt-4">
          This is the only number that matters.
        </p>
      </section>

    </div>
  );
}
