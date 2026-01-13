"use client";

import { useState } from "react";
import { addExpense } from "./actions";

type Expense = {
  id: string;
  description: string;
  amount: number;
};

export default function DashboardClient({ expenses }: { expenses: Expense[] }) {
  const budget = 10000;
  const limit = 7000;
  const savingReason = "Saving for family trip";

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remainingBalance = budget - totalSpent;

  // input state only (this is correct)
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 font-poppins">
      
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">₹{remainingBalance}</h1>
        <p className="text-gray-500 mt-2">remaining this month</p>
      </div>

      {/* Context */}
      <div className="flex justify-between text-sm text-gray-500 mb-6">
        <span>Budget: ₹{budget}</span>
        <span>Limit: ₹{limit}</span>
      </div>

      {/* Warning */}
      {totalSpent > limit && (
        <div className="border border-red-300 bg-red-50 p-4 rounded-md mb-8">
          <p className="text-red-600 font-medium">
            You have crossed your spending limit
          </p>
          <p className="text-sm text-red-500 mt-1">
            {savingReason}
          </p>
        </div>
      )}

      {/* Add Expense (Server Action form) */}
      <form
        action={addExpense}
        className="border rounded-md p-4 mb-8"
      >
        <h2 className="text-lg font-semibold mb-3">Add expense</h2>

        <div className="flex gap-3 mb-3">
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-1/3 border rounded-md px-3 py-2"
            required
          />

          <input
            name="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 border rounded-md px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-sky-400 text-white px-4 py-2 rounded-md hover:bg-sky-500"
        >
          Add
        </button>
      </form>

      {/* Expense List */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Recent expenses</h2>

        {expenses.length === 0 ? (
          <p className="text-sm text-gray-500">
            No expenses added yet.
          </p>
        ) : (
          <ul className="space-y-2 text-sm">
            {expenses.map((expense) => (
              <li key={expense.id} className="flex justify-between">
                <span>{expense.description}</span>
                <span>₹{expense.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
