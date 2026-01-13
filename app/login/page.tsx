"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 font-poppins text-slate-100">
      <div className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">

        <h1 className="text-xl font-semibold mb-6 text-center">
          Welcome back
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2.5 text-sm mb-4
                     focus:outline-none focus:border-cyan-500"
        />

        <button
          disabled={loading || !email}
          onClick={async () => {
            setLoading(true);
            const res = await signIn("credentials", {
              email,
              redirect: false,
            });

            if (res?.ok) {
              window.location.href = "/dashboard";
            } else {
              setLoading(false);
            }
          }}
          className={`w-full py-2.5 rounded-lg text-sm font-medium transition
            ${
              loading
                ? "bg-cyan-500/40 cursor-not-allowed"
                : "bg-cyan-500 hover:bg-cyan-400"
            }
            text-black`}
        >
          {loading ? "Signing in..." : "Log in"}
        </button>

        <p className="text-xs text-center text-slate-400 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-cyan-400 hover:text-cyan-300">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}
