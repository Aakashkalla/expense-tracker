"use client";

import { useState } from "react";
import { addExpense } from "./actions";
import { signOut } from "next-auth/react";
import { useFormStatus } from "react-dom";

type Expense = {
  id: string;
  description: string;
  amount: number;
};

type MonthlyConfig = {
  id: string;
  userId: string;
  month: string;
  budget: number;
  limit: number;
  savingReason: string;
};

function AddExpenseButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full mt-2 py-2 rounded-lg text-sm font-medium transition
        ${
          pending
            ? "bg-cyan-500/40 cursor-not-allowed"
            : "bg-cyan-500 hover:bg-cyan-400"
        }
        text-black`}
    >
      {pending ? "Adding expense..." : "Add expense"}
    </button>
  );
}

export default function DashboardClient({
  expenses,
  monthlyConfig,
}: {
  expenses: Expense[];
  monthlyConfig: MonthlyConfig | null;
}) {
  if (!monthlyConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-slate-400">
        No setup found for this month.
      </div>
    );
  }

  const { budget, limit, savingReason } = monthlyConfig;

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remainingBalance = budget - totalSpent;

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-poppins">
      <div className="max-w-3xl mx-auto px-6 py-8">

        {/* Top bar */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-xs text-slate-400 hover:text-slate-200 transition"
          >
            Logout
          </button>
        </div>

        {/* Balance Card */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-6 backdrop-blur">
          <h1 className="text-4xl font-semibold tracking-tight">
            ₹{remainingBalance}
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Remaining this month
          </p>

          <div className="flex justify-between mt-4 text-xs text-slate-400">
            <span>Budget: ₹{budget}</span>
            <span>Limit: ₹{limit}</span>
          </div>
        </div>

        {/* Warning */}
        {totalSpent > limit && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 mb-6">
            <p className="text-sm font-medium text-red-400">
              Spending limit crossed
            </p>
            <p className="text-xs text-red-300 mt-1">
              {savingReason}
            </p>
          </div>
        )}

        {/* Add Expense */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-6 backdrop-blur">
          <h2 className="text-sm font-medium mb-4 text-slate-300">
            Add expense
          </h2>

          <form action={addExpense}>
                <div className="flex flex-col sm:flex-row gap-3">
    <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full sm:w-1/3 rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
        required
    />

    <input
        name="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full sm:flex-1 rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
        required
    />
    </div>


            <AddExpenseButton />
          </form>
        </div>

        {/* Expenses */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur">
          <h2 className="text-sm font-medium mb-4 text-slate-300">
            Recent expenses
          </h2>

          {expenses.length === 0 ? (
            <p className="text-xs text-slate-400">
              No expenses yet. Start tracking your spending.
            </p>
          ) : (
            <ul className="space-y-3">
              {expenses.map((expense) => (
                <li
                  key={expense.id}
                  className="flex justify-between text-sm"
                >
                  <span className="text-slate-200">
                    {expense.description}
                  </span>
                  <span className="text-slate-400">
                    ₹{expense.amount}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
