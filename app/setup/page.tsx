import { saveMonthlyConfig } from "./actions";
import SubmitButton from "@/app/setup/SubmitButtonComponent";

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 font-poppins text-slate-100">
      <div className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">

        <h1 className="text-xl font-semibold mb-6 text-center">
          Set up your month
        </h1>

        <form action={saveMonthlyConfig}>
          {/* Monthly Budget */}
          <div className="mb-4">
            <label className="block text-xs text-slate-400 mb-1">
              Monthly budget
            </label>
            <input
              name="budget"
              type="number"
              placeholder="e.g. 10000"
              className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          {/* Spending Limit */}
          <div className="mb-4">
            <label className="block text-xs text-slate-400 mb-1">
              Spending limit
            </label>
            <input
              name="limit"
              type="number"
              placeholder="e.g. 7000"
              className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
              required
            />
            <p className="text-[11px] text-slate-500 mt-1">
              You'll be warned when you cross this limit.
            </p>
          </div>

          {/* Saving Reason */}
          <div className="mb-2">
            <label className="block text-xs text-slate-400 mb-1">
              Why are you saving this money?
            </label>
            <textarea
              name="savingReason"
              placeholder="Family, travel, peace of mind…"
              rows={3}
              className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm resize-none focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <SubmitButton />
        </form>

      </div>
    </div>
  );
}
