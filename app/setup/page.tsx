"use client"
import { useRouter } from "next/navigation";

export default function SetupPage() {
    const router = useRouter()
    return (
    <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-sm border rounded-lg p-6 font-poppins">
        
        <h1 className="text-2xl font-semibold mb-6 text-center">
            Set up your month
        </h1>

        {/* Monthly Budget */}
        <div className="mb-5">
            <label className="block text-sm font-medium mb-1">
            Monthly budget
            </label>
            <input
            type="number"
            placeholder="e.g. 10000"
            className="w-full border rounded-md px-3 py-2"
            />
        </div>

        {/* Spending Limit */}
        <div className="mb-5">
            <label className="block text-sm font-medium mb-1">
            Spending limit
            </label>
            <input
            type="number"
            placeholder="e.g. 7000"
            className="w-full border rounded-md px-3 py-2"
            />
            <p className="text-xs text-gray-500 mt-1">
            We’ll warn you when you cross this limit.
            </p>
        </div>

        {/* Saving Reason */}
        <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
            Why are you saving this money?
            </label>
            <textarea
            placeholder="Family, travel, peace of mind…"
            className="w-full border rounded-md px-3 py-2 resize-none"
            rows={3}
            />
        </div>

        <button onClick={()=>router.push('/dashboard')} className="w-full bg-sky-400 text-white py-2 rounded-md hover:bg-sky-500">
            Continue
        </button>
        </div>
    </div>
    );
}
